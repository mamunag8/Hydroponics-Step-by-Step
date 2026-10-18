/**
 * HydroBuddy BD — Complete Mathematical & Stoichiometric Engine (solver.js)
 * Faithfully implements Dr. Daniel Fernandez's HydroBuddy v1.100 algorithms:
 *  - Non-Negative Least Squares (Lawson-Hanson NNLS) linear solver for Target -> Salt Weights
 *  - Direct & Concentrated Stock Solution (Tank A / B / 0) stoichiometry
 *  - Reverse Solver (Salt Weights -> Achieved PPM) & manual fine-tuning
 *  - LMCv2 (Limiting Molar Conductivity v2) & Empirical EC prediction models
 *  - Stock Tank %W/V solubility & CaSO4 / Ca3(PO4)2 precipitation safety checks
 *  - Weighing scale instrumental error & solver gross error metrics
 *  - Nutrient Ratio analyzer (K:N, K:Ca, Ca:Mg, NO3:NH4, Anion:Cation meq/L)
 *  - Dry Mix Equivalent Guaranteed Analysis (% N - P2O5 - K2O - Ca - Mg - S)
 *  - Water Alkalinity / pH Acid Neutralization calculator
 *  - Leaf Tissue Analysis -> Solution PPM converter (WUE model)
 *  - Commercial Fertilizer Label -> Elemental PPM converter
 */
(function (global) {
  'use strict';

  const ELEMENT_ORDER = [
    'N_NO3', 'N_NH4', 'P', 'K', 'Mg', 'Ca', 'S',
    'Fe', 'Mn', 'Zn', 'B', 'Cu', 'Si', 'Mo', 'Na', 'Cl'
  ];

  const CATION_ELEMENTS = ['N_NH4', 'K', 'Mg', 'Ca', 'Fe', 'Mn', 'Zn', 'Cu', 'Na'];
  const ANION_ELEMENTS = ['N_NO3', 'P', 'S', 'Cl'];

  /**
   * Normalize purity to fraction (0.0 .. 1.0) whether stored as 1.0 (0..1) or 100 (0..100%)
   */
  function getPurityFraction(sub) {
    if (!sub || sub.purity === undefined || sub.purity === null) return 1.0;
    const p = Number(sub.purity);
    if (Number.isNaN(p) || p <= 0) return 1.0;
    return p <= 1.05 ? p : p / 100.0;
  }

  function getSubstanceComp(sub) {
    if (!sub) return {};
    return sub.comp || sub.elements || {};
  }

  function getSubstanceTank(sub) {
    if (!sub) return 'A';
    return sub.concType || sub.tank || 'A';
  }

  function getSubstancePriceBDT(sub) {
    if (!sub) return 0;
    return Number(sub.priceBDT !== undefined ? sub.priceBDT : sub.price_bdt_kg) || 0;
  }

  function getSubstancePriceUSD(sub) {
    if (!sub) return 0;
    return Number(sub.priceUSD !== undefined ? sub.priceUSD : sub.price_usd_kg) || 0;
  }

  /**
   * Get element metadata map from HYDROBUDDY_DB
   */
  function getElementMetaMap() {
    const db = global.HYDROBUDDY_DB || (typeof window !== 'undefined' && window.HYDROBUDDY_DB);
    const map = {};
    if (db && db.elements) {
      db.elements.forEach(el => {
        const k = el.id || el.key;
        map[k] = el;
      });
    }
    return map;
  }

  /**
   * Convert volume to Liters
   * Matches hb_main.pas EvaluateFactors:
   *  - 'L' (Liters): 1
   *  - 'gal' (US Gallons): 3.78541178
   *  - 'm3' (Cubic Meters): 1000
   */
  function volumeToLiters(volume, unit) {
    const v = Math.max(0, Number(volume) || 0);
    if (unit === 'gal') return v * 3.78541178;
    if (unit === 'm3') return v * 1000.0;
    return v;
  }

  /**
   * Compute effective diluted volume in Liters for calculation.
   * - Direct mode: reservoir volume in Liters
   * - Stock mode: stockTankVolumeL * stockConcentrationFactor
   *   (e.g. 10 L stock tank at 1:100 concentration prepares 1,000 L of final solution)
   */
  function getEffectiveVolumeLiters(params) {
    if (params && params.prepMode === 'stock') {
      const stockVol = Math.max(0.1, Number(params.stockVolumeL) || 10);
      const factor = Math.max(1, Number(params.stockFactor) || 100);
      return stockVol * factor;
    }
    return Math.max(0.1, volumeToLiters(params ? params.volume : 100, params ? params.volumeUnit : 'L'));
  }

  /**
   * Unit conversion factor from selected unit -> ppm (mg/L)
   * Matches hb_main.pas EvaluateFactors:
   *  - ppm: 1
   *  - mmol/L: molarMass
   *  - meq/L: molarMass / eq
   *  - mol/L: 1000 * molarMass
   */
  function getUnitToPpmFactor(elKey, unit) {
    if (!unit || unit === 'ppm') return 1.0;
    const meta = getElementMetaMap()[elKey];
    if (!meta) return 1.0;
    if (unit === 'mmol') return meta.molarMass;
    if (unit === 'meq') return meta.molarMass / (meta.eq || 1);
    if (unit === 'mol') return 1000.0 * meta.molarMass;
    return 1.0;
  }

  function convertTargetsToPpm(targetsInUnit, unit) {
    const out = {};
    ELEMENT_ORDER.forEach(k => {
      const val = Number(targetsInUnit[k]) || 0;
      out[k] = val * getUnitToPpmFactor(k, unit);
    });
    return out;
  }

  function convertPpmToUnit(ppmObj, unit) {
    const out = {};
    ELEMENT_ORDER.forEach(k => {
      const val = Number(ppmObj[k]) || 0;
      out[k] = val / getUnitToPpmFactor(k, unit);
    });
    return out;
  }

  /**
   * Convert Oxide % or ppm (P2O5, K2O, CaO, MgO, SO3, SiO2) to Elemental
   */
  function convertOxideToElemental(type, value) {
    const v = Number(value) || 0;
    const factors = {
      P2O5_to_P: 1 / 2.2915,
      K2O_to_K: 1 / 1.2047,
      CaO_to_Ca: 1 / 1.3992,
      MgO_to_Mg: 1 / 1.6583,
      SO3_to_S: 1 / 2.4972,
      SiO2_to_Si: 1 / 2.1393
    };
    return v * (factors[type] || 1);
  }

  /**
   * PPM contributed per 1 gram of substance in V_L liters of final solution:
   * ppm = (1g * (pct/100) * purityFrac * 1000 mg/g) / V_L
   *     = (pct * 10 * purityFrac) / V_L
   */
  function ppmPerGramInVolume(substance, elKey, effectiveVolumeL) {
    const comp = getSubstanceComp(substance);
    if (!comp || !comp[elKey]) return 0;
    const pct = Number(comp[elKey]) || 0;
    const purityFrac = getPurityFraction(substance);
    return (pct * 10.0 * purityFrac) / effectiveVolumeL;
  }

  /**
   * Solve a dense linear system M * x = y using Gaussian elimination with partial pivoting.
   */
  function solveLinearSystem(M, y) {
    const n = y.length;
    if (n === 0) return [];
    const A = M.map((row, i) => row.slice().concat([y[i]]));

    for (let col = 0; col < n; col++) {
      let maxRow = col;
      let maxVal = Math.abs(A[col][col]);
      for (let row = col + 1; row < n; row++) {
        if (Math.abs(A[row][col]) > maxVal) {
          maxVal = Math.abs(A[row][col]);
          maxRow = row;
        }
      }
      if (maxVal < 1e-12) continue;

      if (maxRow !== col) {
        const tmp = A[col];
        A[col] = A[maxRow];
        A[maxRow] = tmp;
      }

      const pivot = A[col][col];
      for (let row = col + 1; row < n; row++) {
        const factor = A[row][col] / pivot;
        if (Math.abs(factor) < 1e-15) continue;
        for (let k = col; k <= n; k++) {
          A[row][k] -= factor * A[col][k];
        }
      }
    }

    const x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      let sum = A[i][n];
      for (let j = i + 1; j < n; j++) {
        sum -= A[i][j] * x[j];
      }
      const diag = A[i][i];
      x[i] = Math.abs(diag) > 1e-12 ? sum / diag : 0;
    }
    return x;
  }

  /**
   * Lawson-Hanson Non-Negative Least Squares (NNLS)
   * Solves min ||A * x - b||_2^2 subject to x >= 0
   */
  function solveNNLS(A, b) {
    const m = A.length;
    const n = m > 0 ? A[0].length : 0;
    if (m === 0 || n === 0) return new Array(n).fill(0);

    const x = new Array(n).fill(0);
    const passive = new Array(n).fill(false);

    const AtA = Array.from({ length: n }, () => new Array(n).fill(0));
    const Atb = new Array(n).fill(0);
    const ridge = 1e-9;

    for (let j = 0; j < n; j++) {
      for (let k = j; k < n; k++) {
        let sum = 0;
        for (let i = 0; i < m; i++) {
          sum += A[i][j] * A[i][k];
        }
        if (j === k) sum += ridge;
        AtA[j][k] = sum;
        AtA[k][j] = sum;
      }
      let bSum = 0;
      for (let i = 0; i < m; i++) {
        bSum += A[i][j] * b[i];
      }
      Atb[j] = bSum;
    }

    function solvePassiveSubproblem() {
      const pIdx = [];
      for (let j = 0; j < n; j++) {
        if (passive[j]) pIdx.push(j);
      }
      const kLen = pIdx.length;
      if (kLen === 0) return new Array(n).fill(0);

      const subM = Array.from({ length: kLen }, (_, r) =>
        pIdx.map(c => AtA[pIdx[r]][c])
      );
      const subY = pIdx.map(r => Atb[r]);
      const subX = solveLinearSystem(subM, subY);

      const fullS = new Array(n).fill(0);
      pIdx.forEach((colIdx, idx) => {
        fullS[colIdx] = subX[idx];
      });
      return fullS;
    }

    const maxOuterIter = n * 4 + 20;
    let outerIter = 0;

    while (outerIter < maxOuterIter) {
      outerIter++;
      let maxW = 1e-9;
      let bestJ = -1;
      for (let j = 0; j < n; j++) {
        if (!passive[j]) {
          let ax = 0;
          for (let k = 0; k < n; k++) ax += AtA[j][k] * x[k];
          const wj = Atb[j] - ax;
          if (wj > maxW) {
            maxW = wj;
            bestJ = j;
          }
        }
      }

      if (bestJ === -1) break;
      passive[bestJ] = true;

      let innerIter = 0;
      while (innerIter < maxOuterIter) {
        innerIter++;
        const s = solvePassiveSubproblem();

        let minS = Infinity;
        for (let j = 0; j < n; j++) {
          if (passive[j] && s[j] < minS) minS = s[j];
        }

        if (minS > 1e-12) {
          for (let j = 0; j < n; j++) x[j] = Math.max(0, s[j]);
          break;
        }

        let alpha = 1.0;
        for (let j = 0; j < n; j++) {
          if (passive[j] && s[j] <= 1e-12) {
            const denom = x[j] - s[j];
            if (denom > 1e-12) {
              const ratio = x[j] / denom;
              if (ratio < alpha) alpha = ratio;
            } else {
              alpha = 0;
            }
          }
        }

        for (let j = 0; j < n; j++) {
          x[j] += alpha * (s[j] - x[j]);
          if (passive[j] && Math.abs(x[j]) <= 1e-10) {
            x[j] = 0;
            passive[j] = false;
          }
        }
      }
    }

    return x.map(v => (v > 1e-6 ? v : 0));
  }

  /**
   * Predict Electrical Conductivity (EC in mS/cm) from elemental PPM profile
   * Supports both:
   *  - 'lmc' (LMCv2 Limiting Molar Conductivity model from hb_main.pas lines 1020-1125)
   *  - 'empirical' (Empirical linear regression model from hb_main.pas lines 1126-1145)
   */
  function calculatePredictedEC(totalPpm, model = 'lmc') {
    const metaMap = getElementMetaMap();
    let totalSolutes = 0;
    ELEMENT_ORDER.forEach(k => {
      totalSolutes += Math.max(0, Number(totalPpm[k]) || 0);
    });
    if (totalSolutes < 0.01) return 0;

    if (model === 'empirical') {
      // hb_main.pas: EC = 0.39661671 + sum(conc_i * coef_i). The fitted coefficients are
      // on a meq/L basis (a ppm basis would yield tens of mS/cm), so concentrations are
      // converted ppm -> meq/L here.
      let ecEmp = 0.39661671;
      ELEMENT_ORDER.forEach(k => {
        const meta = metaMap[k];
        const ppm = Math.max(0, Number(totalPpm[k]) || 0);
        if (meta && meta.empEc) {
          const meqVal = (ppm / meta.molarMass) * (meta.eq || 1);
          ecEmp += meqVal * meta.empEc;
        }
      });
      return Math.max(0, ecEmp);
    }

    // LMCv2 Model (hb_main.pas lines 1041-1059): uses concentrations as-is
    const adjustedPpm = totalPpm;

    let ionicStrength = 0;
    ELEMENT_ORDER.forEach(k => {
      const meta = metaMap[k];
      const ppm = Math.max(0, Number(adjustedPpm[k]) || 0);
      if (meta && meta.molarMass > 0 && meta.zi > 0) {
        const molPerL = ppm / (1000.0 * meta.molarMass);
        ionicStrength += (meta.zi * meta.zi) * molPerL;
      }
    });

    const sqrtI = Math.sqrt(Math.max(0, ionicStrength));

    let ecLmc = 0;
    ELEMENT_ORDER.forEach(k => {
      const meta = metaMap[k];
      const ppm = Math.max(0, Number(adjustedPpm[k]) || 0);
      if (meta && meta.molarMass > 0 && meta.lmc > 0) {
        const molPerL = ppm / (1000.0 * meta.molarMass);
        const zPow = Math.pow(meta.zi || 1, 1.5);
        const attenuation = Math.exp(-0.7025187 * sqrtI * zPow);
        ecLmc += molPerL * meta.lmc * attenuation;
      }
    });

    return Math.max(0, ecLmc);
  }

  /**
   * Calculate Nutrient Ratios & Ionic Balance
   */
  function calculateNutrientRatios(achievedPpm) {
    const metaMap = getElementMetaMap();
    const nNo3 = Number(achievedPpm.N_NO3) || 0;
    const nNh4 = Number(achievedPpm.N_NH4) || 0;
    const totalN = nNo3 + nNh4;
    const K = Number(achievedPpm.K) || 0;
    const Ca = Number(achievedPpm.Ca) || 0;
    const Mg = Number(achievedPpm.Mg) || 0;
    const P = Number(achievedPpm.P) || 0;
    const Fe = Number(achievedPpm.Fe) || 0;
    const Mn = Number(achievedPpm.Mn) || 0;

    let cationMeq = 0;
    let anionMeq = 0;
    CATION_ELEMENTS.forEach(k => {
      const meta = metaMap[k];
      if (meta) cationMeq += ((Number(achievedPpm[k]) || 0) / meta.molarMass) * meta.eq;
    });
    ANION_ELEMENTS.forEach(k => {
      const meta = metaMap[k];
      if (meta) anionMeq += ((Number(achievedPpm[k]) || 0) / meta.molarMass) * meta.eq;
    });

    return {
      totalN,
      nh4PctOfN: totalN > 0 ? (nNh4 / totalN) * 100 : 0,
      no3ToNh4: nNh4 > 0.1 ? nNo3 / nNh4 : null,
      kToN: totalN > 0.1 ? K / totalN : 0,
      kToCa: Ca > 0.1 ? K / Ca : 0,
      caToMg: Mg > 0.1 ? Ca / Mg : 0,
      kToMg: Mg > 0.1 ? K / Mg : 0,
      nToP: P > 0.1 ? totalN / P : 0,
      feToMn: Mn > 0.01 ? Fe / Mn : 0,
      cationMeq,
      anionMeq,
      cationToAnionRatio: anionMeq > 0.01 ? cationMeq / anionMeq : 1.0
    };
  }

  /**
   * Calculate Dry Mix Equivalent Label (% W/W of total fertilizer salt mix)
   */
  function calculateDryMixLabel(saltResults) {
    let totalMassG = 0;
    const elemMassG = {};
    ELEMENT_ORDER.forEach(k => { elemMassG[k] = 0; });

    saltResults.forEach(item => {
      const w = Math.max(0, Number(item.weightG) || 0);
      if (w <= 0) return;
      totalMassG += w;
      const purity = getPurityFraction(item.substance);
      const comp = getSubstanceComp(item.substance);
      ELEMENT_ORDER.forEach(k => {
        const pct = Number(comp[k]) || 0;
        if (pct > 0) {
          elemMassG[k] += w * (pct / 100.0) * purity;
        }
      });
    });

    if (totalMassG <= 1e-6) {
      return {
        totalMassG: 0,
        N_pct: 0,
        P2O5_pct: 0,
        K2O_pct: 0,
        Ca_pct: 0,
        Mg_pct: 0,
        S_pct: 0,
        Fe_pct: 0
      };
    }

    const nPct = ((elemMassG.N_NO3 + elemMassG.N_NH4) / totalMassG) * 100;
    const pPct = (elemMassG.P / totalMassG) * 100;
    const kPct = (elemMassG.K / totalMassG) * 100;

    return {
      totalMassG,
      N_pct: nPct,
      P_pct: pPct,
      P2O5_pct: pPct * 2.2915,
      K_pct: kPct,
      K2O_pct: kPct * 1.2047,
      Ca_pct: (elemMassG.Ca / totalMassG) * 100,
      Mg_pct: (elemMassG.Mg / totalMassG) * 100,
      S_pct: (elemMassG.S / totalMassG) * 100,
      Fe_pct: (elemMassG.Fe / totalMassG) * 100
    };
  }

  /**
   * Check Stock Solution Tank A & Tank B Compatibility & Precipitation Risks
   */
  function checkCompatibilityAndWarnings(saltResults, achievedPpm, params) {
    const warnings = [];
    const tankElements = { A: {}, B: {} };
    const tankMassG = { A: 0, B: 0, '0': 0 };

    saltResults.forEach(r => {
      if (r.weightG <= 0.0001) return;
      const t = r.tank || getSubstanceTank(r.substance) || 'A';
      tankMassG[t] = (tankMassG[t] || 0) + r.weightG;
      if (t === 'A' || t === 'B') {
        const comp = getSubstanceComp(r.substance);
        ELEMENT_ORDER.forEach(k => {
          const pct = Number(comp[k]) || 0;
          if (pct > 0.1) {
            tankElements[t][k] = (tankElements[t][k] || 0) + r.weightG * (pct / 100);
          }
        });
      }
    });

    ['A', 'B'].forEach(t => {
      const els = tankElements[t];
      if (els.Ca > 0.05 && els.S > 0.05) {
        warnings.push({
          level: 'danger',
          code: 'warn_precip_ca_so4',
          tank: t
        });
      }
      if (els.Ca > 0.05 && els.P > 0.05) {
        warnings.push({
          level: 'danger',
          code: 'warn_precip_ca_po4',
          tank: t
        });
      }
    });

    const stockVolL = Math.max(0.1, Number(params && params.stockVolumeL) || 10);
    const tankWvPct = {
      A: (tankMassG.A / (stockVolL * 1000)) * 100,
      B: (tankMassG.B / (stockVolL * 1000)) * 100
    };

    if (params && params.prepMode === 'stock') {
      if (tankWvPct.A > 28 || tankWvPct.B > 28) {
        warnings.push({
          level: 'warning',
          code: 'warn_stock_solubility',
          tankWvPct
        });
      }
    }

    const totalN = (Number(achievedPpm.N_NO3) || 0) + (Number(achievedPpm.N_NH4) || 0);
    if (totalN > 10 && ((Number(achievedPpm.N_NH4) || 0) / totalN) > 0.25) {
      warnings.push({
        level: 'warning',
        code: 'warn_high_nh4'
      });
    }

    if (warnings.length === 0) {
      warnings.push({
        level: 'success',
        code: 'warn_ok_stock'
      });
    }

    return {
      warnings,
      tankMassG,
      tankWvPct
    };
  }

  /**
   * Core HydroBuddy Solver: Target Formulation -> Optimal Salt Weights
   */
  function solveFormulationToWeights(options) {
    const {
      targetPpm = {},
      waterPpm = {},
      selectedSubstances = [],
      params = {}
    } = options;

    const effectiveVolumeL = getEffectiveVolumeLiters(params);
    const scalePrecisionG = Math.max(0.001, Number(params.scalePrecisionG) || 0.01);

    const netTargetPpm = {};
    ELEMENT_ORDER.forEach(k => {
      const t = Math.max(0, Number(targetPpm[k]) || 0);
      const w = Math.max(0, Number(waterPpm[k]) || 0);
      netTargetPpm[k] = Math.max(0, t - w);
    });

    const rowPriority = {
      Fe: 12.0, Mn: 12.0, Zn: 12.0, B: 12.0, Cu: 12.0, Mo: 12.0,
      P: 9.0, Ca: 9.0, Mg: 8.5, N_NO3: 8.0, K: 8.0, S: 2.5, N_NH4: 4.5,
      Si: 5.0, Na: 2.0, Cl: 2.0
    };

    const m = ELEMENT_ORDER.length;
    const n = selectedSubstances.length;
    const A = Array.from({ length: m }, () => new Array(n).fill(0));
    const b = new Array(m).fill(0);

    ELEMENT_ORDER.forEach((elKey, rowIdx) => {
      const targetVal = Number(targetPpm[elKey]) || 0;
      const netVal = netTargetPpm[elKey];
      let scale;
      if (targetVal > 0) {
        const denom = Math.max(netVal, targetVal * 0.1, 0.05);
        scale = (rowPriority[elKey] || 5.0) / denom;
      } else {
        scale = elKey === 'S' ? 0.01 : 0.25;
      }

      b[rowIdx] = netVal * scale;
      for (let colIdx = 0; colIdx < n; colIdx++) {
        const sub = selectedSubstances[colIdx];
        const ppmPerG = ppmPerGramInVolume(sub, elKey, effectiveVolumeL);
        A[rowIdx][colIdx] = ppmPerG * scale;
      }
    });

    const rawWeightsG = solveNNLS(A, b);

    return evaluateWeightsResult({
      weightsG: rawWeightsG,
      selectedSubstances,
      targetPpm,
      waterPpm,
      params,
      effectiveVolumeL,
      scalePrecisionG
    });
  }

  /**
   * Reverse / Fine-Tune Solver: Given exact salt weights (in grams), compute achieved PPM, EC, costs, and warnings
   */
  function evaluateWeightsResult(options) {
    const {
      weightsG = [],
      selectedSubstances = [],
      targetPpm = {},
      waterPpm = {},
      params = {},
      effectiveVolumeL = getEffectiveVolumeLiters(params),
      scalePrecisionG = Math.max(0.001, Number(params.scalePrecisionG) || 0.01)
    } = options;

    const saltPpm = {};
    const achievedPpm = {};
    ELEMENT_ORDER.forEach(k => {
      saltPpm[k] = 0;
      achievedPpm[k] = Math.max(0, Number(waterPpm[k]) || 0);
    });

    let totalCostBdt = 0;
    let totalCostUsd = 0;

    const saltResults = selectedSubstances.map((sub, idx) => {
      const wG = Math.max(0, Number(weightsG[idx]) || 0);
      const density = Number(sub.density) || 1.0;
      const volumeMl = sub.isLiquid && density > 0 ? wG / density : null;
      const costBdt = (wG / 1000.0) * getSubstancePriceBDT(sub);
      const costUsd = (wG / 1000.0) * getSubstancePriceUSD(sub);
      totalCostBdt += costBdt;
      totalCostUsd += costUsd;

      const scaleErrPct = wG > 1e-4 ? (scalePrecisionG / wG) * 100.0 : 0;

      const elemContribPpm = {};
      ELEMENT_ORDER.forEach(k => {
        const c = wG * ppmPerGramInVolume(sub, k, effectiveVolumeL);
        if (c > 0) {
          elemContribPpm[k] = c;
          saltPpm[k] += c;
          achievedPpm[k] += c;
        }
      });

      return {
        substance: sub,
        tank: getSubstanceTank(sub),
        weightG: wG,
        volumeMl,
        costBdt,
        costUsd,
        scaleErrPct,
        elemContribPpm
      };
    });

    let grossErrorSumSq = 0;
    let activeTargetCount = 0;
    const elementComparison = ELEMENT_ORDER.map(elKey => {
      const target = Math.max(0, Number(targetPpm[elKey]) || 0);
      const fromWater = Math.max(0, Number(waterPpm[elKey]) || 0);
      const fromSalts = saltPpm[elKey];
      const achieved = achievedPpm[elKey];
      const diff = achieved - target;
      let errPct = 0;
      if (target > 1e-4) {
        errPct = ((achieved - target) / target) * 100.0;
        grossErrorSumSq += errPct * errPct;
        activeTargetCount++;
      }

      let status = 'exact';
      const absPct = Math.abs(errPct);
      const absDiff = Math.abs(diff);
      if (target > 0) {
        if (absPct <= 5 || absDiff <= 1.5) status = 'exact';
        else if (absPct <= 18 || absDiff <= 8.0) status = 'close';
        else status = 'warn';
      } else if (achieved > 15 && elKey !== 'S') {
        status = 'close';
      }

      return {
        key: elKey,
        targetPpm: target,
        waterPpm: fromWater,
        saltPpm: fromSalts,
        achievedPpm: achieved,
        diffPpm: diff,
        errPct,
        status
      };
    });

    const grossErrorRmsPct = activeTargetCount > 0
      ? Math.sqrt(grossErrorSumSq / activeTargetCount)
      : 0;

    const predictedEcLmc = calculatePredictedEC(achievedPpm, 'lmc');
    const predictedEcEmp = calculatePredictedEC(achievedPpm, 'empirical');
    const activeEc = (params.ecModel === 'empirical') ? predictedEcEmp : predictedEcLmc;

    const ratios = calculateNutrientRatios(achievedPpm);
    const dryMixLabel = calculateDryMixLabel(saltResults);
    const compatibility = checkCompatibilityAndWarnings(saltResults, achievedPpm, params);

    return {
      effectiveVolumeL,
      saltResults,
      elementComparison,
      achievedPpm,
      saltPpm,
      waterPpm,
      targetPpm,
      predictedEc: activeEc,
      predictedEcLmc,
      predictedEcEmp,
      totalCostBdt,
      totalCostUsd,
      grossErrorRmsPct,
      ratios,
      dryMixLabel,
      compatibility
    };
  }

  /**
   * Water Alkalinity / pH Acid Neutralization Calculator (hb_ph.pas)
   */
  function calculateAcidNeutralization(options) {
    const {
      rawAlkalinityCaCO3 = 120,
      targetAlkalinityCaCO3 = 30,
      acidSubstance,
      volumeL = 100
    } = options;

    const alkToRemove = Math.max(0, (Number(rawAlkalinityCaCO3) || 0) - (Number(targetAlkalinityCaCO3) || 0));
    if (alkToRemove <= 0 || !acidSubstance) {
      return {
        alkToRemoveCaCO3: 0,
        meqPerLiterH: 0,
        acidMgPerLiter: 0,
        acidMlPerLiter: 0,
        totalAcidGrams: 0,
        totalAcidMl: 0,
        addedElementPpm: {}
      };
    }

    const meqPerLiterH = alkToRemove / 50.04345;
    const comp = getSubstanceComp(acidSubstance);
    const id = (acidSubstance.id || '').toLowerCase();

    let pureEqWeight = 97.995; // H3PO4
    if (id.includes('nitric') || id.includes('hno3') || (comp && comp.N_NO3 > 0)) {
      pureEqWeight = 63.012;
    } else if (id.includes('sulfuric') || id.includes('h2so4') || (comp && comp.S > 0)) {
      pureEqWeight = 49.039;
    } else if (id.includes('citric')) {
      pureEqWeight = 96.06;
    }

    const purityFrac = getPurityFraction(acidSubstance);
    const density = Math.max(0.5, Number(acidSubstance.density) || 1.0);

    const acidMgPerLiter = (meqPerLiterH * pureEqWeight) / purityFrac;
    const acidGramsPerLiter = acidMgPerLiter / 1000.0;
    const acidMlPerLiter = acidGramsPerLiter / density;

    const totalAcidGrams = acidGramsPerLiter * volumeL;
    const totalAcidMl = acidMlPerLiter * volumeL;

    const addedElementPpm = {};
    if (comp) {
      ELEMENT_ORDER.forEach(k => {
        const pct = Number(comp[k]) || 0;
        if (pct > 0) {
          addedElementPpm[k] = acidMgPerLiter * (pct / 100.0) * purityFrac;
        }
      });
    }

    return {
      alkToRemoveCaCO3: alkToRemove,
      meqPerLiterH,
      acidMgPerLiter,
      acidMlPerLiter,
      totalAcidGrams,
      totalAcidMl,
      addedElementPpm
    };
  }

  /**
   * Leaf Tissue Analysis -> Nutrient Solution PPM Converter (hb_tissue_analysis.pas)
   * Supports both flat tissue objects ({ N, P, K, Mg, Ca, S, Fe, Mn, Zn, B, Cu, Mo, ... })
   * and nested { macro_pct, micro_ppm } objects.
   */
  function convertTissueToPpm(tissueProfile, wue = 3.5, nh4SharePct = 10) {
    if (!tissueProfile) return {};
    const w = Math.max(0.5, Number(wue) || 3.5);
    const nh4Frac = Math.min(0.5, Math.max(0, (Number(nh4SharePct) || 10) / 100.0));
    const macro = tissueProfile.macro_pct || tissueProfile;
    const micro = tissueProfile.micro_ppm || tissueProfile;

    const totalN = ((Number(macro.N) || 0) / 100.0) * (w * 1000.0);

    return {
      N_NO3: Number((totalN * (1 - nh4Frac)).toFixed(1)),
      N_NH4: Number((totalN * nh4Frac).toFixed(1)),
      P: Number((((Number(macro.P) || 0) / 100.0) * (w * 1000.0)).toFixed(1)),
      K: Number((((Number(macro.K) || 0) / 100.0) * (w * 1000.0)).toFixed(1)),
      Mg: Number((((Number(macro.Mg) || 0) / 100.0) * (w * 1000.0)).toFixed(1)),
      Ca: Number((((Number(macro.Ca) || 0) / 100.0) * (w * 1000.0)).toFixed(1)),
      S: Number((((Number(macro.S) || 0) / 100.0) * (w * 1000.0)).toFixed(1)),
      Fe: Number((((Number(micro.Fe) || 0) * w) / 1000.0).toFixed(3)),
      Mn: Number((((Number(micro.Mn) || 0) * w) / 1000.0).toFixed(3)),
      Zn: Number((((Number(micro.Zn) || 0) * w) / 1000.0).toFixed(3)),
      B: Number((((Number(micro.B) || 0) * w) / 1000.0).toFixed(3)),
      Cu: Number((((Number(micro.Cu) || 0) * w) / 1000.0).toFixed(3)),
      Si: Number((((Number(micro.Si) || 0) * w) / 1000.0).toFixed(3)),
      Mo: Number((((Number(micro.Mo) || 0) * w) / 1000.0).toFixed(4)),
      Na: Number((((Number(micro.Na) || 0) * w) / 1000.0).toFixed(3)),
      Cl: Number((((Number(micro.Cl) || 0) * w) / 1000.0).toFixed(3))
    };
  }

  /**
   * Commercial Nutrient Label -> Elemental PPM Converter (hb_commercialnutrient.pas)
   */
  function analyzeCommercialNutrient(comp, doseGPerL = 1.0) {
    const d = Math.max(0, Number(doseGPerL) || 0);
    const factor = d * 10.0;
    const pElementalPct = (Number(comp.P2O5) || 0) / 2.2915 + (Number(comp.P) || 0);
    const kElementalPct = (Number(comp.K2O) || 0) / 1.2047 + (Number(comp.K) || 0);

    const ppm = {
      N_NO3: (Number(comp.N_NO3) || 0) * factor,
      N_NH4: (Number(comp.N_NH4) || 0) * factor,
      P: pElementalPct * factor,
      K: kElementalPct * factor,
      Mg: (Number(comp.Mg) || 0) * factor,
      Ca: (Number(comp.Ca) || 0) * factor,
      S: (Number(comp.S) || 0) * factor,
      Fe: (Number(comp.Fe) || 0) * factor,
      Mn: (Number(comp.Mn) || 0) * factor,
      Zn: (Number(comp.Zn) || 0) * factor,
      B: (Number(comp.B) || 0) * factor,
      Cu: (Number(comp.Cu) || 0) * factor,
      Si: (Number(comp.Si) || 0) * factor,
      Mo: (Number(comp.Mo) || 0) * factor,
      Na: (Number(comp.Na) || 0) * factor,
      Cl: (Number(comp.Cl) || 0) * factor
    };

    return {
      doseGPerL: d,
      ppm,
      predictedEcLmc: calculatePredictedEC(ppm, 'lmc'),
      predictedEcEmp: calculatePredictedEC(ppm, 'empirical')
    };
  }

  global.HydroBuddySolver = {
    ELEMENT_ORDER,
    getPurityFraction,
    getSubstanceComp,
    getSubstanceTank,
    getSubstancePriceBDT,
    getSubstancePriceUSD,
    volumeToLiters,
    getEffectiveVolumeLiters,
    getUnitToPpmFactor,
    convertTargetsToPpm,
    convertPpmToUnit,
    convertOxideToElemental,
    ppmPerGramInVolume,
    solveFormulationToWeights,
    evaluateWeightsResult,
    calculatePredictedEC,
    calculateNutrientRatios,
    calculateDryMixLabel,
    checkCompatibilityAndWarnings,
    calculateAcidNeutralization,
    convertTissueToPpm,
    analyzeCommercialNutrient
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = global.HydroBuddySolver;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : global));


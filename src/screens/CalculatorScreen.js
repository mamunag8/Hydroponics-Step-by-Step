import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Share,
  StyleSheet
} from 'react-native';
import HYDROBUDDY_DB from '../data/hydrobuddy-db';
import I18N from '../engine/i18n';
import Solver from '../engine/solver';
import {
  COLORS,
  Card,
  SectionTitle,
  Btn,
  Segmented,
  Field,
  SelectField,
  KpiBox,
  AlertBox,
  styles as uiStyles
} from '../components/ui';

const SALT_PRESETS = {
  std: ['ca_no3_ag', 'kno3', 'mkp', 'mgso4_7h2o', 'k2so4', 'fe_dtpa', 'ch_micro'],
  chel: ['ca_no3_ag', 'kno3', 'mkp', 'mgso4_7h2o', 'fe_dtpa', 'mn_edta', 'zn_edta', 'cu_edta', 'boric_acid', 'na2moo4_2h2o'],
  classic: ['ca_no3_ag', 'kno3', 'mkp', 'mgso4_7h2o', 'fe_edta', 'mnso4_h2o', 'znso4_h2o', 'cuso4_5h2o', 'boric_acid', 'na2moo4_2h2o']
};

export default function CalculatorScreen({ appState, updateAppState, showToast }) {
  const [customFormulaName, setCustomFormulaName] = useState('');
  const [oxP, setOxP] = useState('');
  const [oxK, setOxK] = useState('');
  const [saltSearch, setSaltSearch] = useState('');

  const t = (k, f) => I18N.t(k, f);
  const fmt = (v, d = 2) => I18N.fmtNum(v, d);
  const parseNum = v => {
    const n = Number(I18N.toAsciiDigits(String(v ?? '')).replace(',', '.'));
    return Number.isFinite(n) ? n : 0;
  };

  const allFormulas = HYDROBUDDY_DB.formulations.concat(appState.customFormulas || []);
  const allSubstances = HYDROBUDDY_DB.substances.concat(appState.customSalts || []);
  const activeFormula = allFormulas.find(f => f.id === appState.formulaId) || HYDROBUDDY_DB.formulations[0];
  const params = appState.params;

  const getWaterPpm = () => {
    const prof = HYDROBUDDY_DB.waterProfiles.find(w => w.id === appState.water.id);
    const out = {};
    Solver.ELEMENT_ORDER.forEach(k => {
      out[k] = ((prof && prof.ions && prof.ions[k]) || 0) + ((appState.water.acidAdd && appState.water.acidAdd[k]) || 0);
    });
    return out;
  };

  const selectedSubstances = allSubstances.filter(s => appState.selectedSalts.includes(s.id));

  const runCalculate = (overrideTargets, overrideWeights, overrideMode) => {
    const mode = overrideMode || appState.calcMode;
    const targets = overrideTargets || appState.targets;
    const weights = overrideWeights || appState.weights;

    if (!selectedSubstances.length) {
      showToast(t('need_salts', 'Select at least one fertilizer salt'));
      return;
    }

    if (mode === 'weights') {
      const res = Solver.evaluateWeightsResult({
        weightsG: selectedSubstances.map(s => weights[s.id] || 0),
        selectedSubstances,
        targetPpm: targets,
        waterPpm: getWaterPpm(),
        params
      });
      updateAppState({ result: res, weights });
    } else {
      const res = Solver.solveFormulationToWeights({
        targetPpm: targets,
        waterPpm: getWaterPpm(),
        selectedSubstances,
        params
      });
      const newW = {};
      res.saltResults.forEach(r => {
        newW[r.substance.id] = r.weightG;
      });
      updateAppState({ result: res, weights: newW });
    }
  };

  const handleScaleEc = factor => {
    if (!appState.result) {
      runCalculate();
      return;
    }
    const scaledW = {};
    Object.keys(appState.weights).forEach(id => {
      scaledW[id] = (appState.weights[id] || 0) * factor;
    });
    runCalculate(appState.targets, scaledW, 'weights');
  };

  const handleSelectFormula = fId => {
    const f = allFormulas.find(x => x.id === fId);
    if (!f) return;
    const newTargets = Object.assign({}, f.targets);
    updateAppState({ formulaId: fId, targets: newTargets, result: null });
  };

  const handleSaveCustomFormula = () => {
    const name = customFormulaName.trim();
    if (!name) {
      showToast('Enter a formula name');
      return;
    }
    const id = 'custom_' + Date.now();
    const newF = {
      id,
      custom: true,
      category: 'CUSTOM',
      name_en: name,
      name_bn: name,
      units: 'ppm',
      targets: Object.assign({}, appState.targets)
    };
    const nextCustom = (appState.customFormulas || []).concat([newF]);
    updateAppState({ customFormulas: nextCustom, formulaId: id });
    setCustomFormulaName('');
    showToast('Formula saved');
  };

  const handleApplyOxide = () => {
    const pVal = parseNum(oxP);
    const kVal = parseNum(oxK);
    const nextTargets = Object.assign({}, appState.targets);
    if (pVal > 0) nextTargets.P = Number((Solver.convertOxideToElemental('P2O5_to_P', pVal)).toFixed(2));
    if (kVal > 0) nextTargets.K = Number((Solver.convertOxideToElemental('K2O_to_K', kVal)).toFixed(2));
    updateAppState({ targets: nextTargets });
    setOxP('');
    setOxK('');
  };

  const handleShareRecipe = async () => {
    const res = appState.result;
    if (!res) return;
    const lines = [
      `HydroBuddy BD — ${I18N.tObj(activeFormula, 'name')}`,
      `Volume: ${fmt(res.effectiveVolumeL, 0)} L | Predicted EC: ${fmt(res.predictedEc, 2)} mS/cm | Cost: ৳${fmt(res.totalCostBdt, 0)}`
    ];
    res.saltResults
      .filter(r => r.weightG > 1e-4)
      .forEach(r => {
        lines.push(
          `[Tank ${r.tank}] ${I18N.tObj(r.substance, 'name')}: ${fmt(r.weightG, 2)} g${
            r.volumeMl ? ` (${fmt(r.volumeMl, 1)} mL)` : ''
          }`
        );
      });
    try {
      await Share.share({ title: 'HydroBuddy BD Recipe', message: lines.join('\n') });
    } catch (e) {}
  };

  const formulaOptions = allFormulas.map(f => ({
    value: f.id,
    group: f.custom ? 'Custom' : f.category === 'BD' ? '🇧🇩 Bangladesh BARI / Commercial' : 'HydroBuddy Original',
    label: I18N.tObj(f, 'name')
  }));

  const unitFactor = elKey => Solver.getUnitToPpmFactor(elKey, appState.unit);
  const qSalt = saltSearch.trim().toLowerCase();
  const filteredSalts = allSubstances.filter(s => {
    if (!qSalt) return true;
    return `${s.name_en || ''} ${s.name_bn || ''} ${s.formula || ''}`.toLowerCase().includes(qSalt);
  });

  const res = appState.result;

  return (
    <View>
      {/* SECTION 1: Target Formulation */}
      <Card>
        <SectionTitle>{t('sec_preset_select')}</SectionTitle>
        <View style={uiStyles.grid}>
          <SelectField
            label={t('lbl_select_formula')}
            value={appState.formulaId}
            options={formulaOptions}
            onChange={handleSelectFormula}
            style={{ flex: 2 }}
          />
          <SelectField
            label={t('lbl_conc_unit')}
            value={appState.unit}
            options={[
              { value: 'ppm', label: t('unit_ppm') },
              { value: 'mmol', label: t('unit_mmol') },
              { value: 'meq', label: t('unit_meq') },
              { value: 'mol', label: t('unit_mol') }
            ]}
            onChange={u => updateAppState({ unit: u })}
            style={{ flex: 1 }}
          />
        </View>

        {activeFormula && I18N.tObj(activeFormula, 'notes') ? (
          <AlertBox type="info">{I18N.tObj(activeFormula, 'notes')}</AlertBox>
        ) : null}

        {/* 16 Element Target Grid */}
        <View style={[uiStyles.grid, { marginTop: 8 }]}>
          {Solver.ELEMENT_ORDER.map(elKey => {
            const meta = HYDROBUDDY_DB.elements.find(e => e.id === elKey);
            const factor = unitFactor(elKey);
            const displayVal = Number(((appState.targets[elKey] || 0) / factor).toFixed(3));
            return (
              <View key={elKey} style={localStyles.elBox}>
                <Text style={localStyles.elLabel} numberOfLines={1}>
                  {meta ? meta.symbol : elKey} ({I18N.tObj(meta, 'name')})
                </Text>
                <TextInput
                  style={uiStyles.input}
                  keyboardType="numeric"
                  value={String(displayVal)}
                  onChangeText={txt => {
                    const next = Object.assign({}, appState.targets, {
                      [elKey]: Math.max(0, parseNum(txt)) * factor
                    });
                    updateAppState({ targets: next });
                  }}
                />
              </View>
            );
          })}
        </View>

        {/* Save Custom Formula & Oxide Converter */}
        <View style={[uiStyles.row, { marginTop: 10 }]}>
          <Field
            placeholder={t('lbl_custom_formula_name')}
            value={customFormulaName}
            onChangeText={setCustomFormulaName}
            style={{ maxWidth: 220, marginBottom: 0 }}
          />
          <Btn small variant="secondary" title={t('btn_save_formula')} onPress={handleSaveCustomFormula} />
          <Btn
            small
            variant="ghost"
            title={t('btn_reset_formula')}
            onPress={() => handleSelectFormula(appState.formulaId)}
          />
        </View>

        <View style={[uiStyles.row, { marginTop: 10 }]}>
          <Text style={uiStyles.sub}>{t('btn_oxide_to_elemental')}:</Text>
          <Field
            placeholder="P₂O₅ ppm"
            value={oxP}
            onChangeText={setOxP}
            keyboardType="numeric"
            style={{ maxWidth: 110, marginBottom: 0 }}
          />
          <Field
            placeholder="K₂O ppm"
            value={oxK}
            onChangeText={setOxK}
            keyboardType="numeric"
            style={{ maxWidth: 110, marginBottom: 0 }}
          />
          <Btn small variant="secondary" title="Convert ➔ P/K" onPress={handleApplyOxide} />
        </View>
      </Card>

      {/* SECTION 2: System Parameters, Stock Tank & EC Model */}
      <Card>
        <SectionTitle>{t('sec_system_params')}</SectionTitle>
        <Segmented
          value={params.prepMode}
          onChange={v => updateAppState({ params: Object.assign({}, params, { prepMode: v }) })}
          options={[
            { value: 'direct', label: t('prep_direct') },
            { value: 'stock', label: t('prep_stock') }
          ]}
        />

        <View style={[uiStyles.grid, { marginTop: 10 }]}>
          {params.prepMode === 'direct' ? (
            <>
              <Field
                label={t('lbl_volume')}
                value={params.volume}
                keyboardType="numeric"
                onChangeText={v =>
                  updateAppState({ params: Object.assign({}, params, { volume: Math.max(0.1, parseNum(v)) }) })
                }
              />
              <SelectField
                label={t('lbl_volume_unit')}
                value={params.volumeUnit}
                options={[
                  { value: 'L', label: t('unit_liters') },
                  { value: 'gal', label: t('unit_gallons') },
                  { value: 'm3', label: t('unit_m3') }
                ]}
                onChange={u => updateAppState({ params: Object.assign({}, params, { volumeUnit: u }) })}
              />
            </>
          ) : (
            <>
              <Field
                label={t('lbl_stock_volume')}
                value={params.stockVolumeL}
                keyboardType="numeric"
                onChangeText={v =>
                  updateAppState({
                    params: Object.assign({}, params, { stockVolumeL: Math.max(0.1, parseNum(v)) })
                  })
                }
              />
              <Field
                label={t('lbl_stock_factor')}
                value={params.stockFactor}
                keyboardType="numeric"
                onChangeText={v =>
                  updateAppState({
                    params: Object.assign({}, params, { stockFactor: Math.max(1, parseNum(v)) })
                  })
                }
              />
            </>
          )}

          <SelectField
            label={t('lbl_ec_model')}
            value={params.ecModel}
            options={[
              { value: 'lmc', label: t('ec_model_lmc') },
              { value: 'empirical', label: t('ec_model_empirical') }
            ]}
            onChange={m => updateAppState({ params: Object.assign({}, params, { ecModel: m }) })}
          />

          <Field
            label={t('lbl_scale_precision')}
            value={params.scalePrecisionG}
            keyboardType="numeric"
            onChangeText={v =>
              updateAppState({
                params: Object.assign({}, params, { scalePrecisionG: Math.max(0.001, parseNum(v)) })
              })
            }
          />

          <SelectField
            label={t('lbl_water_profile_active')}
            value={appState.water.id}
            options={HYDROBUDDY_DB.waterProfiles.map(w => ({
              value: w.id,
              label: I18N.tObj(w, 'name')
            }))}
            onChange={wId =>
              updateAppState({
                water: { id: wId, acidAdd: {}, acidId: '', acidInfo: null },
                result: null
              })
            }
          />
        </View>
      </Card>

      {/* SECTION 3: Salt & Acid Selection */}
      <Card>
        <SectionTitle>{t('sec_salt_selection')}</SectionTitle>
        <View style={[uiStyles.row, { marginBottom: 8 }]}>
          <Btn
            small
            variant="secondary"
            title={t('preset_salts_bd_standard')}
            onPress={() => updateAppState({ selectedSalts: SALT_PRESETS.std.slice(), result: null })}
          />
          <Btn
            small
            variant="secondary"
            title={t('preset_salts_bd_chelated')}
            onPress={() => updateAppState({ selectedSalts: SALT_PRESETS.chel.slice(), result: null })}
          />
          <Btn
            small
            variant="secondary"
            title={t('preset_salts_hb_classic')}
            onPress={() => updateAppState({ selectedSalts: SALT_PRESETS.classic.slice(), result: null })}
          />
          <Btn
            small
            variant="ghost"
            title={t('btn_clear_salts')}
            onPress={() => updateAppState({ selectedSalts: [], result: null })}
          />
        </View>

        <Field
          placeholder={t('lbl_search_salts')}
          value={saltSearch}
          onChangeText={setSaltSearch}
        />

        <View style={localStyles.saltGrid}>
          {filteredSalts.map(s => {
            const checked = appState.selectedSalts.includes(s.id);
            const tank = Solver.getSubstanceTank(s);
            return (
              <TouchableOpacity
                key={s.id}
                onPress={() => {
                  const next = checked
                    ? appState.selectedSalts.filter(id => id !== s.id)
                    : appState.selectedSalts.concat([s.id]);
                  updateAppState({ selectedSalts: next });
                }}
                style={[localStyles.saltChip, checked && localStyles.saltChipActive]}
              >
                <Text style={[localStyles.saltChipTxt, checked && localStyles.saltChipTxtActive]}>
                  {checked ? '☑ ' : '☐ '}
                  {I18N.tObj(s, 'name')} ({s.formula}) [{tank}]
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Card>

      {/* SECTION 4: Solver Trigger & Mode */}
      <Card>
        <Segmented
          value={appState.calcMode}
          onChange={m => updateAppState({ calcMode: m })}
          options={[
            { value: 'target', label: t('calc_mode_target_to_weight') },
            { value: 'weights', label: t('calc_mode_weight_to_ppm') }
          ]}
        />
        <View style={[uiStyles.row, { marginTop: 12 }]}>
          <Btn
            title={t('btn_calculate_main')}
            onPress={() => runCalculate()}
            style={{ flexGrow: 1, paddingVertical: 13 }}
          />
          <Btn variant="secondary" title={t('btn_ec_plus_5')} onPress={() => handleScaleEc(1.05)} />
          <Btn variant="secondary" title={t('btn_ec_minus_5')} onPress={() => handleScaleEc(0.95)} />
        </View>
      </Card>

      {/* SECTION 5: Results */}
      {res ? (
        <Card>
          <SectionTitle>{t('sec_results_title')}</SectionTitle>

          {/* KPI Summary */}
          <View style={[uiStyles.grid, { marginBottom: 10 }]}>
            <KpiBox value={`${fmt(res.predictedEc, 2)} mS/cm`} label={t('kpi_predicted_ec')} />
            <KpiBox
              value={`৳ ${fmt(res.totalCostBdt, 0)} ($${fmt(res.totalCostUsd, 2)})`}
              label={t('kpi_total_cost_bdt')}
            />
            <KpiBox value={`${fmt(res.grossErrorRmsPct, 1)}%`} label={t('kpi_gross_error')} />
            <KpiBox
              value={`${fmt(res.ratios.cationMeq, 1)} / ${fmt(res.ratios.anionMeq, 1)} meq`}
              label={t('kpi_ionic_balance')}
            />
          </View>

          {/* Compatibility Warnings */}
          {res.compatibility.warnings.map((w, idx) => (
            <AlertBox key={idx} type={w.level}>
              {t(w.code)} {w.tank ? `[Tank ${w.tank}]` : ''}
            </AlertBox>
          ))}

          {/* Tank A / B / 0 Tables */}
          {['A', 'B', '0'].map(tank => {
            const rows = res.saltResults.filter(
              r => r.tank === tank && (r.weightG > 1e-5 || appState.calcMode === 'weights')
            );
            if (!rows.length) return null;
            const title =
              tank === 'A'
                ? t('tank_a_title')
                : tank === 'B'
                ? t('tank_b_title')
                : t('tank_0_title');
            return (
              <View key={tank} style={{ marginTop: 12 }}>
                <Text style={uiStyles.h3}>
                  [{tank}] {title}
                </Text>
                <View style={uiStyles.tableHeader}>
                  <Text style={[uiStyles.th, { flex: 2.2 }]}>{t('col_substance')}</Text>
                  <Text style={[uiStyles.th, { flex: 1.3 }]}>{t('col_weight_g')}</Text>
                  <Text style={[uiStyles.th, { flex: 0.9, textAlign: 'right' }]}>mL</Text>
                  <Text style={[uiStyles.th, { flex: 0.9, textAlign: 'right' }]}>{t('col_cost_bdt')}</Text>
                </View>
                {rows.map(r => (
                  <View key={r.substance.id} style={uiStyles.tableRow}>
                    <View style={{ flex: 2.2, paddingRight: 6 }}>
                      <Text style={[uiStyles.td, { fontWeight: '600' }]}>
                        {I18N.tObj(r.substance, 'name')}
                      </Text>
                      <Text style={{ fontSize: 11, color: COLORS.muted }}>{r.substance.formula}</Text>
                    </View>
                    <View style={{ flex: 1.3 }}>
                      <TextInput
                        style={[uiStyles.input, { paddingVertical: 5 }]}
                        keyboardType="numeric"
                        value={String(Number(r.weightG.toFixed(3)))}
                        onChangeText={val => {
                          const nextW = Object.assign({}, appState.weights, {
                            [r.substance.id]: Math.max(0, parseNum(val))
                          });
                          runCalculate(appState.targets, nextW, 'weights');
                        }}
                      />
                    </View>
                    <Text style={[uiStyles.td, { flex: 0.9, textAlign: 'right' }]}>
                      {r.volumeMl ? fmt(r.volumeMl, 1) : '—'}
                    </Text>
                    <Text style={[uiStyles.td, { flex: 0.9, textAlign: 'right' }]}>
                      ৳{fmt(r.costBdt, 1)}
                    </Text>
                  </View>
                ))}
              </View>
            );
          })}

          {/* Elemental Comparison Table */}
          <Text style={[uiStyles.h3, { marginTop: 16 }]}>{t('col_element')} (PPM)</Text>
          <View style={uiStyles.tableHeader}>
            <Text style={[uiStyles.th, { flex: 1.5 }]}>{t('col_element')}</Text>
            <Text style={[uiStyles.th, { flex: 1, textAlign: 'right' }]}>{t('col_target_ppm')}</Text>
            <Text style={[uiStyles.th, { flex: 1, textAlign: 'right' }]}>{t('col_water_ppm')}</Text>
            <Text style={[uiStyles.th, { flex: 1, textAlign: 'right' }]}>{t('col_achieved_ppm')}</Text>
            <Text style={[uiStyles.th, { flex: 1, textAlign: 'right' }]}>{t('col_diff_ppm')}</Text>
          </View>
          {res.elementComparison
            .filter(e => e.targetPpm > 0 || e.achievedPpm > 0.01)
            .map(e => {
              const dec = e.key === 'Mo' || e.key === 'Cu' ? 3 : 1;
              const statusColor =
                e.status === 'exact'
                  ? COLORS.g700
                  : e.status === 'close'
                  ? COLORS.warn
                  : COLORS.danger;
              return (
                <View key={e.key} style={uiStyles.tableRow}>
                  <Text style={[uiStyles.td, { flex: 1.5, fontWeight: '600' }]}>{e.key}</Text>
                  <Text style={[uiStyles.td, { flex: 1, textAlign: 'right' }]}>
                    {fmt(e.targetPpm, dec)}
                  </Text>
                  <Text style={[uiStyles.td, { flex: 1, textAlign: 'right' }]}>
                    {fmt(e.waterPpm, dec)}
                  </Text>
                  <Text style={[uiStyles.td, { flex: 1, textAlign: 'right', fontWeight: '700', color: statusColor }]}>
                    {fmt(e.achievedPpm, dec)}
                  </Text>
                  <Text style={[uiStyles.td, { flex: 1, textAlign: 'right', color: statusColor }]}>
                    {e.diffPpm > 0 ? '+' : ''}
                    {fmt(e.diffPpm, dec)}
                  </Text>
                </View>
              );
            })}

          {/* Nutrient Ratios & Dry Mix Label */}
          <Text style={[uiStyles.h3, { marginTop: 16 }]}>{t('sec_ratios_label')}</Text>
          <View style={uiStyles.grid}>
            <KpiBox value={fmt(res.ratios.kToN, 2)} label="K : N Ratio" />
            <KpiBox value={fmt(res.ratios.kToCa, 2)} label="K : Ca Ratio" />
            <KpiBox value={fmt(res.ratios.caToMg, 2)} label="Ca : Mg Ratio" />
            <KpiBox value={`${fmt(res.ratios.nh4PctOfN, 1)}%`} label="NH₄⁺ % of Total N" />
            <KpiBox
              value={`${fmt(res.dryMixLabel.N_pct, 1)} - ${fmt(res.dryMixLabel.P2O5_pct, 1)} - ${fmt(
                res.dryMixLabel.K2O_pct,
                1
              )}`}
              label={t('lbl_dry_mix_npk')}
            />
          </View>

          <View style={[uiStyles.row, { marginTop: 14 }]}>
            <Btn variant="secondary" title="Share / Export Recipe" onPress={handleShareRecipe} />
          </View>
        </Card>
      ) : null}
    </View>
  );
}

const localStyles = StyleSheet.create({
  elBox: {
    width: '23%',
    minWidth: 105,
    flexGrow: 1,
    marginBottom: 4
  },
  elLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.g800,
    marginBottom: 3
  },
  saltGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6
  },
  saltChip: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: '#f9fbf9'
  },
  saltChipActive: {
    backgroundColor: COLORS.g100,
    borderColor: COLORS.g600
  },
  saltChipTxt: {
    fontSize: 12,
    color: COLORS.ink
  },
  saltChipTxtActive: {
    fontWeight: '700',
    color: COLORS.g900
  }
});

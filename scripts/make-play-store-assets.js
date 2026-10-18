const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'play-store-assets');
fs.mkdirSync(outDir, { recursive: true });

// 1. 512x512 High-Res Play Store Icon
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#052e16"/>
      <stop offset="50%" stop-color="#14532d"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
    <linearGradient id="drop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <circle cx="256" cy="240" r="176" fill="#166534" opacity="0.45"/>
  <!-- Water droplet base -->
  <path d="M256 390 C180 390 136 334 136 266 C136 196 256 96 256 96 C256 96 376 196 376 266 C376 334 332 390 256 390 Z" fill="url(#drop)" opacity="0.22"/>
  <!-- Hydroponic leaf pair -->
  <path d="M256 346 C256 238 148 190 148 118 C228 118 268 172 268 268" fill="#4ade80"/>
  <path d="M256 346 C256 238 364 190 364 118 C284 118 244 172 244 268" fill="#86efac"/>
  <!-- Root & nutrient line -->
  <rect x="247" y="210" width="18" height="156" rx="9" fill="#ffffff"/>
  <path d="M172 374 Q256 410 340 374" stroke="#38bdf8" stroke-width="14" fill="none" stroke-linecap="round"/>
  <text x="256" y="458" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="#ffffff" text-anchor="middle">HB•BD</text>
</svg>`;

// 2. 1024x500 Feature Graphic (24-bit RGB, no alpha)
const featureSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="500" viewBox="0 0 1024 500">
  <defs>
    <linearGradient id="fbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#052e16"/>
      <stop offset="55%" stop-color="#14532d"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="500" fill="url(#fbg)"/>
  <circle cx="900" cy="110" r="240" fill="#166534" opacity="0.35"/>
  <circle cx="140" cy="440" r="210" fill="#0369a1" opacity="0.25"/>

  <!-- Left Brand Emblem -->
  <rect x="58" y="76" width="110" height="110" rx="26" fill="#15803d" stroke="#4ade80" stroke-width="3"/>
  <path d="M113 158 C113 122 76 105 76 80 C104 80 118 98 118 130" fill="#4ade80"/>
  <path d="M113 158 C113 122 150 105 150 80 C122 80 108 98 108 130" fill="#bbf7d0"/>
  <rect x="109" y="108" width="8" height="55" rx="4" fill="#ffffff"/>

  <!-- Title & Subtitle -->
  <text x="192" y="122" font-family="Arial, sans-serif" font-size="42" font-weight="bold" fill="#ffffff">Hydroponics Step by Step</text>
  <text x="192" y="166" font-family="Arial, sans-serif" font-size="23" font-weight="bold" fill="#86efac">3 Complete Courses (50 Lessons) • HydroBuddy Calculator • BARI Guide</text>

  <!-- Feature Pills -->
  <rect x="58" y="216" width="285" height="54" rx="12" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
  <text x="200" y="250" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">3 Full Courses (50 Lessons)</text>

  <rect x="362" y="216" width="295" height="54" rx="12" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
  <text x="510" y="250" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">16-Element NNLS Solver</text>

  <rect x="676" y="216" width="290" height="54" rx="12" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
  <text x="821" y="250" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">40 BARI &amp; Global Formulas</text>

  <rect x="58" y="290" width="285" height="54" rx="12" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="200" y="324" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#e0f2fe" text-anchor="middle">BD Water &amp; Acid pH Tool</text>

  <rect x="362" y="290" width="295" height="54" rx="12" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="510" y="324" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#e0f2fe" text-anchor="middle">BARI Book &amp; Plant Doctor</text>

  <rect x="676" y="290" width="290" height="54" rx="12" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="821" y="324" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#e0f2fe" text-anchor="middle">Bangla, English + Studio</text>

  <!-- Bottom Banner -->
  <rect x="58" y="382" width="908" height="68" rx="16" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <text x="512" y="424" font-family="Arial, sans-serif" font-size="23" font-weight="bold" fill="#bbf7d0" text-anchor="middle">100% Ad-Free  •  100% Offline Capable  •  Zero Data Collected  •  Open-Source Science</text>
</svg>`;

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function makePhoneScreenshotSvg({ badge, title, subtitle, headerTab, cards, accentColor }) {
  const cardBlocks = cards
    .map((c, idx) => {
      const y = 390 + idx * 235;
      return `
      <rect x="64" y="${y}" width="952" height="208" rx="24" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="64" y="${y}" width="14" height="208" rx="7" fill="${c.color || accentColor}"/>
      <text x="104" y="${y + 52}" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#0f172a">${esc(c.heading)}</text>
      <text x="104" y="${y + 96}" font-family="Arial, sans-serif" font-size="22" fill="#334155">${esc(c.line1)}</text>
      <text x="104" y="${y + 136}" font-family="Arial, sans-serif" font-size="22" fill="#475569">${esc(c.line2)}</text>
      <rect x="104" y="${y + 154}" width="872" height="36" rx="8" fill="#f0fdf4"/>
      <text x="120" y="${y + 179}" font-family="Arial, sans-serif" font-size="19" font-weight="bold" fill="#15803d">${esc(c.highlight)}</text>
    `;
    })
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
    <defs>
      <linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#052e16"/>
        <stop offset="18%" stop-color="#14532d"/>
        <stop offset="18.1%" stop-color="#f1f5f9"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
    </defs>
    <rect width="1080" height="1920" fill="url(#pbg)"/>

    <!-- Marketing Top Header -->
    <rect x="64" y="48" width="340" height="46" rx="23" fill="#22c55e"/>
    <text x="234" y="79" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#052e16" text-anchor="middle">${esc(badge)}</text>
    <text x="64" y="152" font-family="Arial, sans-serif" font-size="44" font-weight="bold" fill="#ffffff">${esc(title)}</text>
    <text x="64" y="202" font-family="Arial, sans-serif" font-size="25" fill="#bbf7d0">${esc(subtitle)}</text>

    <!-- Simulated App Top Bar -->
    <rect x="44" y="248" width="992" height="112" rx="24" fill="#14532d"/>
    <circle cx="104" cy="304" r="30" fill="#ffffff"/>
    <text x="104" y="315" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#14532d" text-anchor="middle">HS</text>
    <text x="154" y="298" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#ffffff">Hydroponics Step by Step</text>
    <text x="154" y="332" font-family="Arial, sans-serif" font-size="20" fill="#86efac">${esc(headerTab)}</text>
    <rect x="740" y="278" width="266" height="52" rx="12" fill="#166534" stroke="#4ade80" stroke-width="1.5"/>
    <text x="873" y="311" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">Bangla / English</text>

    <!-- Cards -->
    ${cardBlocks}

    <!-- Bottom Navigation Bar -->
    <rect x="44" y="1800" width="992" height="88" rx="22" fill="#0f172a"/>
    <text x="540" y="1852" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#86efac" text-anchor="middle">Calculator  •  Salts  •  Water &amp; pH  •  Advanced  •  BD Crops  •  Doctor  •  3 Courses  •  ROI</text>
  </svg>`;
}

function makeTabletScreenshotSvg({ title, subtitle, leftCards, rightCards }) {
  const renderCol = (cards, xOffset) =>
    cards
      .map((c, idx) => {
        const y = 260 + idx * 270;
        return `
        <rect x="${xOffset}" y="${y}" width="860" height="240" rx="22" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="${xOffset}" y="${y}" width="14" height="240" rx="7" fill="#15803d"/>
        <text x="${xOffset + 40}" y="${y + 56}" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="#0f172a">${esc(c.heading)}</text>
        <text x="${xOffset + 40}" y="${y + 104}" font-family="Arial, sans-serif" font-size="23" fill="#334155">${esc(c.line1)}</text>
        <text x="${xOffset + 40}" y="${y + 148}" font-family="Arial, sans-serif" font-size="23" fill="#475569">${esc(c.line2)}</text>
        <rect x="${xOffset + 40}" y="${y + 172}" width="790" height="44" rx="10" fill="#f0fdf4"/>
        <text x="${xOffset + 60}" y="${y + 201}" font-family="Arial, sans-serif" font-size="21" font-weight="bold" fill="#15803d">${esc(c.highlight)}</text>
      `;
      })
      .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1200" viewBox="0 0 1920 1200">
    <rect width="1920" height="1200" fill="#f1f5f9"/>
    <rect width="1920" height="210" fill="#14532d"/>
    <text x="72" y="96" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#ffffff">${esc(title)}</text>
    <text x="72" y="152" font-family="Arial, sans-serif" font-size="28" fill="#86efac">${esc(subtitle)}</text>
    <rect x="1480" y="64" width="368" height="64" rx="16" fill="#166534" stroke="#4ade80" stroke-width="2"/>
    <text x="1664" y="104" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">100% Ad-Free &amp; Offline</text>
    ${renderCol(leftCards, 72)}
    ${renderCol(rightCards, 988)}
    <rect x="72" y="1096" width="1776" height="68" rx="16" fill="#0f172a"/>
    <text x="960" y="1138" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#bbf7d0" text-anchor="middle">Hydroponics Step by Step — 3 Complete Courses (50 Lessons) + HydroBuddy Calculator</text>
  </svg>`;
}

const phoneConfigs = [
  {
    file: 'phone-1-calculator.png',
    badge: '16-ELEMENT SOLVER',
    title: 'Precision Nutrient Calculator',
    subtitle: 'Lawson-Hanson NNLS Solver • Target PPM to Exact Gram Weights',
    headerTab: 'Active Module: Nutrient Calculator (PPM / mmol/L / meq/L)',
    accentColor: '#15803d',
    cards: [
      {
        heading: '40 Built-In Crop Formulations (BARI + Global)',
        line1: 'BARI Tomato, Lettuce, Strawberry, Cucumber, Capsicum & Melon',
        line2: 'Hoagland, Cornell, Sonneveld, Steiner & General Hydroponics',
        highlight: 'Target: N 190 | P 50 | K 280 | Ca 170 | Mg 50 | Fe 3.0 ppm',
        color: '#15803d'
      },
      {
        heading: 'Direct Reservoir & Concentrated Stock Tank A / B',
        line1: '100x / 200x Stock A (Ca + Fe) & Stock B (Phosphates + Sulfates)',
        line2: 'Automatic CaSO4 / CaHPO4 / FePO4 Precipitation Safety Audit',
        highlight: 'Tank A: Calcium Nitrate 884.2g + Fe-DTPA 27.3g | Cost: 142 BDT',
        color: '#0284c7'
      },
      {
        heading: 'LMCv2 & Empirical Electrical Conductivity (EC)',
        line1: 'Limiting Molar Conductivity model with ionic strength correction',
        line2: 'Predicts final EC (mS/cm), NH4:NO3 ratio & K:Ca:Mg balance',
        highlight: 'Predicted EC: 2.18 mS/cm  •  Max Element Error: < 0.4%',
        color: '#15803d'
      },
      {
        heading: 'Reverse Solver: Salt Weights -> Resulting PPM',
        line1: 'Enter any existing fertilizer recipe in grams to audit exact PPM',
        line2: 'Save custom formulas & log batches to Farm Ledger in 1 tap',
        highlight: '100% Offline Computation • Zero Ads • Bangla & English UI',
        color: '#7c3aed'
      },
      {
        heading: 'Scale Precision & Practical Spoon Equivalents',
        line1: 'Supports 0.01g jewelry scale, 0.1g kitchen scale, or 1g scale',
        line2: 'Shows gram weights, kg bags, and approximate tsp/tbsp measures',
        highlight: 'Ready for Rooftop Hobbyists & Commercial Polyhouse Farms',
        color: '#ea580c'
      }
    ]
  },
  {
    file: 'phone-2-substances.png',
    badge: '44 SALTS & ACIDS',
    title: 'Fertilizer & Salt Database',
    subtitle: 'Full HydroBuddy Inventory + Bangladesh Local Market Prices (BDT)',
    headerTab: 'Active Module: Substances, Chelates & Custom Salt Editor',
    accentColor: '#0284c7',
    cards: [
      {
        heading: 'Macro Salts (Tank A & Tank B Classified)',
        line1: 'Calcium Nitrate, Potassium Nitrate, MKP (0-52-34), MAP (12-61-0)',
        line2: 'Magnesium Sulfate (Epsom), Potassium Sulfate (SOP), CalMag',
        highlight: 'Includes Solubility Limits (g/L @ 20C) & BDT/kg Market Prices',
        color: '#0284c7'
      },
      {
        heading: 'Micronutrients & Iron Chelates (Fe-EDTA / DTPA / EDDHA)',
        line1: 'Fe-EDTA (13%), Fe-DTPA (11%), Fe-EDDHA (6% for high pH water)',
        line2: 'Boric Acid, Solubor, MnSO4, ZnSO4, CuSO4, Sodium Molybdate',
        highlight: 'Automatic Chelate Stability Advice Based on Solution pH',
        color: '#15803d'
      },
      {
        heading: 'Agricultural Acids & Silicate Additives',
        line1: 'Nitric Acid (68%), Phosphoric Acid (85%), Sulfuric Acid (96%)',
        line2: 'Citric Acid, Potassium Silicate, Calcium Chloride Foliar',
        highlight: 'Accounts for N, P, or S PPM Added by pH Down Acids',
        color: '#dc2626'
      },
      {
        heading: 'Add Custom Commercial NPK Blends',
        line1: 'Create any custom fertilizer with N-P2O5-K2O or elemental %',
        line2: 'Automatically converts P2O5 -> P (x0.4364) & K2O -> K (x0.8301)',
        highlight: 'Saved Permanently on Device for Instant Solver Integration',
        color: '#7c3aed'
      },
      {
        heading: 'Bangladesh Local Agro-Market Sourcing Guide',
        line1: 'Siddikbazar, Chawkbazar, Bogura & Jashore dealer price presets',
        line2: 'Edit any salt price in BDT/kg for real-time batch cost calculation',
        highlight: 'Compare Local vs Imported Water-Soluble Fertilizer Costs',
        color: '#ea580c'
      }
    ]
  },
  {
    file: 'phone-3-water-ph.png',
    badge: 'BD WATER & PH',
    title: 'Regional Water & Acid pH Tool',
    subtitle: '12 Bangladesh Water Profiles + Henderson-Hasselbalch Titration',
    headerTab: 'Active Module: Water Quality & Alkalinity Neutralization',
    accentColor: '#0369a1',
    cards: [
      {
        heading: '12 Preloaded Bangladesh Regional Water Profiles',
        line1: 'Dhaka WASA, Chattogram WASA, Rajshahi High-CaCO3 Tube Well',
        line2: 'Khulna Brackish Alert, Sylhet Acidic Surface, Rainwater & RO',
        highlight: 'Automatically Subtracts Baseline Water Ca, Mg, S, Na & Cl',
        color: '#0369a1'
      },
      {
        heading: 'Alkalinity (CaCO3) to Target pH Acid Calculator',
        line1: 'Calculates exact mL/L and g/L of Nitric, Phosphoric, or Sulfuric Acid',
        line2: 'Neutralizes Carbonate/Bicarbonate Alkalinity to Target pH (5.8)',
        highlight: 'Injects Acid N / P / S Contribution Directly into Main Solver',
        color: '#15803d'
      },
      {
        heading: 'Salinity & Sodium/Chloride Toxicity Warnings',
        line1: 'Alerts when coastal tube-well Na or Cl exceeds crop tolerance',
        line2: 'Recommends rainwater blending ratios for Khulna/Satkhira farms',
        highlight: 'Prevents Osmotic Root Stress & Tip Burn Before Mixing',
        color: '#ea580c'
      },
      {
        heading: 'Custom Lab Water Report Input',
        line1: 'Enter EC, pH, Alkalinity (ppm CaCO3) and ion concentrations',
        line2: 'Supports BARI / SRDI / DPHE water lab test parameters',
        highlight: 'Precision Water Correction for Commercial Greenhouses',
        color: '#7c3aed'
      },
      {
        heading: 'Built-In Acid Handling Safety Protocol',
        line1: 'Step-by-step dilution instructions for concentrated laboratory acids',
        line2: 'Always add acid to water — clear bilingual safety checklists',
        highlight: 'Designed for Safe Farm Operation Across Bangladesh',
        color: '#dc2626'
      }
    ]
  },
  {
    file: 'phone-4-crops.png',
    badge: 'BD CROP GUIDES',
    title: 'Bangladesh Crop & Season Guide',
    subtitle: '12 High-Value Crops + 3-Season Climate Playbook (Rabi / Kharif)',
    headerTab: 'Active Module: BARI Crop Handbook & Seasonal Calendar',
    accentColor: '#15803d',
    cards: [
      {
        heading: '12 Complete Bangladesh Commercial Crop Profiles',
        line1: 'Tomato, Lettuce, Strawberry, Cucumber, Capsicum, Rockmelon',
        line2: 'Mint, Coriander, Kangkon, Bok Choy, Cherry Tomato & Fodder',
        highlight: '1-Tap "Load Crop Formula into Calculator" Integration',
        color: '#15803d'
      },
      {
        heading: '3-Season Bangladesh Climate Playbook',
        line1: 'Rabi Winter (Nov-Feb), Kharif-1 Summer Heat (Mar-May)',
        line2: 'Kharif-2 Monsoon High Humidity (Jun-Oct) EC & Fungal Strategy',
        highlight: 'Lower EC by 20-25% in 36C Summer Heat to Prevent Tip Burn',
        color: '#ea580c'
      },
      {
        heading: 'Target EC, pH, Days to Harvest & Expected Yield',
        line1: 'Detailed stage-by-stage Seedling, Vegetative, Bloom & Fruit targets',
        line2: 'Substrate selection: Coco Peat + Rice Husk Biochar (70:30)',
        highlight: 'Tailored for Bangladesh Rooftops & Polyhouse Growers',
        color: '#0284c7'
      },
      {
        heading: 'Leaf Tissue MRM & Commercial Fertilizer Analyzer',
        line1: 'Convert dry leaf tissue % into Water Uptake Equivalent (WUE) PPM',
        line2: 'Convert any N-P2O5-K2O label into exact elemental PPM',
        highlight: 'Full HydroBuddy v1.100 Scientific Toolset Built In',
        color: '#7c3aed'
      },
      {
        heading: 'Works 100% Offline in Rural & Field Locations',
        line1: 'No internet connection required in polyhouses or remote farms',
        line2: 'Instant switching between Bangla (বাংলা) and English',
        highlight: '100% Free • Zero Subscriptions • Zero Advertisements',
        color: '#15803d'
      }
    ]
  },
  {
    file: 'phone-5-doctor-academy.png',
    badge: 'DOCTOR & ACADEMY',
    title: 'Plant Doctor & Farmer Academy',
    subtitle: '10 Visual Deficiency Diagnostics + 20 Step-by-Step Lessons',
    headerTab: 'Active Module: Plant Doctor & 20-Lesson Training Course',
    accentColor: '#dc2626',
    cards: [
      {
        heading: 'Interactive Leaf Symptom Diagnostic Key',
        line1: 'Filter by Old/Lower Leaves, New/Top Leaves, or Fruit/Roots',
        line2: 'Calcium Blossom End Rot, Tip Burn, Iron Chlorosis, K/Mg/N/P/B',
        highlight: 'Immediate Corrective Foliar Spray & Reservoir Fix Steps',
        color: '#dc2626'
      },
      {
        heading: 'Pythium Root Rot & Monsoon Pest Protection',
        line1: 'Root zone cooling, dissolved oxygen (>6 ppm), H2O2 sanitation',
        line2: 'Whitefly, Thrips, Spider Mite & Powdery Mildew IPM protocols',
        highlight: 'Proven Remedies Using Locally Available Inputs in BD',
        color: '#ea580c'
      },
      {
        heading: '20-Lesson Hydroponic Farmer Academy',
        line1: 'Kratky Non-Electric Boxes, DFT/NFT PVC Pipes, Dutch Buckets',
        line2: 'Coco Peat Buffering, Stock Tank Mixing, EC/pH Meter Calibration',
        highlight: 'Self-Paced Curriculum in Simple Bangla & English',
        color: '#15803d'
      },
      {
        heading: 'Farm Business ROI Simulator & Batch Logbook',
        line1: '3 presets: 200-Plant Rooftop, 1000-Plant Polyhouse, 500-Tray Fodder',
        line2: 'Calculates CAPEX, OPEX, Net Profit/Cycle & Payback Months',
        highlight: 'Track Every Reservoir Mix in the Persistent Batch Ledger',
        color: '#0284c7'
      },
      {
        heading: 'Universal Language Studio (Support Any Language)',
        line1: 'Built-in Bangla, English, Hindi, Arabic (RTL) & Spanish',
        line2: 'Create, edit, import & export custom JSON translation packs',
        highlight: 'Toggle Native Bengali Numerals (১২৩) or Western Digits (123)',
        color: '#7c3aed'
      }
    ]
  }
];

const tablet1Svg = makeTabletScreenshotSvg({
  title: 'HydroBuddy BD — Complete Hydroponic Nutrient & Farm Suite',
  subtitle: '16-Element NNLS Solver  •  40 Formulations  •  44 Salts  •  12 BD Water Profiles',
  leftCards: [
    {
      heading: 'Target PPM to Exact Gram Weights (NNLS Solver)',
      line1: 'Solves 16 macro & micro nutrients simultaneously with zero negative weights',
      line2: 'Supports Direct Reservoir Addition and 100x/200x Concentrated Stock Tank A/B',
      highlight: 'Includes LMCv2 Electrical Conductivity (EC) & Precipitation Warnings'
    },
    {
      heading: '40 Preloaded BARI Bangladesh & Global Formulations',
      line1: 'BARI Tomato, Lettuce, Strawberry, Cucumber, Capsicum, Melon & Leafy Greens',
      line2: 'Hoagland, Cornell, Sonneveld, Steiner & General Hydroponics 3-Part Flora',
      highlight: 'Load Any Crop Recipe in 1 Tap or Save Your Own Custom Formulations'
    },
    {
      heading: '12 Regional Bangladesh Water Profiles & Acid pH Tool',
      line1: 'Dhaka WASA, Chattogram, Rajshahi Hard Water, Khulna Salinity Alert & Rainwater',
      line2: 'Calculates Nitric, Phosphoric, or Sulfuric Acid mL/L to reach Target pH',
      highlight: 'Automatically Injects Acid N, P, or S Contribution into Nutrient Solver'
    }
  ],
  rightCards: [
    {
      heading: 'Plant Doctor & 20-Lesson Hydroponic Farmer Academy',
      line1: 'Diagnose Calcium Tip Burn, Blossom End Rot, Iron Chlorosis & Pythium Root Rot',
      line2: 'Step-by-step Kratky, NFT/DFT, Coco Peat Buffering & Monsoon Management',
      highlight: 'Written in Clear Bangla (বাংলা) and English for Farmers & Agronomists'
    },
    {
      heading: 'Farm Business ROI Calculator & Persistent Batch Ledger',
      line1: 'Estimate CAPEX, OPEX, Yield Revenue, Net Profit & Payback Period in BDT (৳)',
      line2: 'Log every nutrient batch with date, crop, volume, EC and fertilizer cost',
      highlight: 'Export Printable Bilingual Mixing Sheets for Farm Workers'
    },
    {
      heading: '100% Ad-Free, 100% Offline & Universal Language Studio',
      line1: 'Zero advertisements, zero tracking, zero personal data collection',
      line2: 'Built-in Language Studio lets users translate or customize any language pack',
      highlight: 'Native Android, iOS & Web Application • GPL-3.0 Scientific Heritage'
    }
  ]
});

(async () => {
  await sharp(Buffer.from(iconSvg)).resize(512, 512).png().toFile(path.join(outDir, 'icon-512x512.png'));

  // Feature graphic without alpha channel (flatten onto dark green)
  await sharp(Buffer.from(featureSvg))
    .resize(1024, 500)
    .flatten({ background: '#052e16' })
    .png()
    .toFile(path.join(outDir, 'feature-graphic-1024x500.png'));

  for (const cfg of phoneConfigs) {
    const svg = makePhoneScreenshotSvg(cfg);
    await sharp(Buffer.from(svg))
      .resize(1080, 1920)
      .flatten({ background: '#052e16' })
      .png()
      .toFile(path.join(outDir, cfg.file));
  }

  await sharp(Buffer.from(tablet1Svg))
    .resize(1920, 1200)
    .flatten({ background: '#f1f5f9' })
    .png()
    .toFile(path.join(outDir, 'tablet-7in-1.png'));

  await sharp(Buffer.from(tablet1Svg))
    .resize(1920, 1200)
    .flatten({ background: '#f1f5f9' })
    .png()
    .toFile(path.join(outDir, 'tablet-10in-1.png'));

  // Also create a second tablet screenshot from phone-1 + phone-3 cards
  const tablet2Svg = makeTabletScreenshotSvg({
    title: 'HydroBuddy BD — Advanced Chemistry & Bangladesh Crop Handbook',
    subtitle: 'Leaf Tissue MRM Converter  •  Stock Solubility Audit  •  3-Season Climate Guide',
    leftCards: phoneConfigs[0].cards.slice(0, 3),
    rightCards: phoneConfigs[3].cards.slice(0, 3)
  });

  await sharp(Buffer.from(tablet2Svg))
    .resize(1920, 1200)
    .flatten({ background: '#f1f5f9' })
    .png()
    .toFile(path.join(outDir, 'tablet-7in-2.png'));

  await sharp(Buffer.from(tablet2Svg))
    .resize(1920, 1200)
    .flatten({ background: '#f1f5f9' })
    .png()
    .toFile(path.join(outDir, 'tablet-10in-2.png'));

  console.log('Generated all Google Play Store graphic assets in:', outDir);
})();

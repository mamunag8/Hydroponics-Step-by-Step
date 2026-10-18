/**
 * HydroGuide BD — Complete HydroBuddy Database & Constants
 * Contains 100% of Dr. Daniel Fernandez's HydroBuddy (https://github.com/danielfppps/hydrobuddy)
 * substances, formulations, leaf tissue analysis profiles, water quality profiles,
 * and physical-chemical constants (molar masses, valences, LMCv2 conductivity, empirical EC),
 * plus Bangladesh-specific BARI/DAE formulations, regional water profiles, and BDT market prices.
 */

const HYDROBUDDY_DB = {
  version: "2.5.0-HB1.97",

  // All 16 Elements in exact HydroBuddy internal order (index 0..15 in hb_main.pas)
  elements: [
    { id: "N_NO3", hbKey: "N (NO3-)", symbol: "NO₃⁻-N", name_en: "Nitrate Nitrogen", name_bn: "নাইট্রেট নাইট্রোজেন (NO₃⁻)", molarMass: 14.007, eq: 1, zi: 1, lmc: 71.46, empEc: 0.403791, isMacro: true },
    { id: "N_NH4", hbKey: "N (NH4+)", symbol: "NH₄⁺-N", name_en: "Ammonium Nitrogen", name_bn: "অ্যামোনিয়াম নাইট্রোজেন (NH₄⁺)", molarMass: 14.007, eq: 1, zi: 1, lmc: 73.50, empEc: -0.308967, isMacro: true },
    { id: "P",     hbKey: "P",        symbol: "P",      name_en: "Phosphorus",        name_bn: "ফসফরাস (P)",                 molarMass: 30.974, eq: 3, zi: 1, lmc: 57.00, empEc: 0.142525, isMacro: true, oxideSymbol: "P₂O₅", oxideFactor: 2.2915 },
    { id: "K",     hbKey: "K",        symbol: "K",      name_en: "Potassium",         name_bn: "পটাশিয়াম (K)",                molarMass: 39.098, eq: 1, zi: 1, lmc: 73.00, empEc: -0.110791, isMacro: true, oxideSymbol: "K₂O",  oxideFactor: 1.2047 },
    { id: "Mg",    hbKey: "Mg",       symbol: "Mg",     name_en: "Magnesium",         name_bn: "ম্যাগনেসিয়াম (Mg)",            molarMass: 24.305, eq: 2, zi: 2, lmc: 106.0, empEc: -0.358782, isMacro: true },
    { id: "Ca",    hbKey: "Ca",       symbol: "Ca",     name_en: "Calcium",           name_bn: "ক্যালসিয়াম (Ca)",              molarMass: 40.078, eq: 2, zi: 2, lmc: 119.0, empEc: -0.283549, isMacro: true },
    { id: "S",     hbKey: "S",        symbol: "S",      name_en: "Sulfur",            name_bn: "সালফার / গন্ধক (S)",          molarMass: 32.066, eq: 2, zi: 2, lmc: 160.0, empEc: 0.276118, isMacro: true },
    { id: "Fe",    hbKey: "Fe",       symbol: "Fe",     name_en: "Iron",              name_bn: "আয়রন / লৌহ (Fe)",             molarMass: 55.845, eq: 2, zi: 2, lmc: 108.0, empEc: 0.0, isMacro: false },
    { id: "Mn",    hbKey: "Mn",       symbol: "Mn",     name_en: "Manganese",         name_bn: "ম্যাঙ্গানিজ (Mn)",             molarMass: 54.938, eq: 2, zi: 2, lmc: 0.0,   empEc: 0.0, isMacro: false },
    { id: "Zn",    hbKey: "Zn",       symbol: "Zn",     name_en: "Zinc",              name_bn: "জিংক / দস্তা (Zn)",           molarMass: 65.409, eq: 2, zi: 2, lmc: 0.0,   empEc: 0.0, isMacro: false },
    { id: "B",     hbKey: "B",        symbol: "B",      name_en: "Boron",             name_bn: "বোরন (B)",                    molarMass: 10.811, eq: 1, zi: 1, lmc: 0.0,   empEc: 0.0, isMacro: false },
    { id: "Cu",    hbKey: "Cu",       symbol: "Cu",     name_en: "Copper",            name_bn: "কপার / তামা (Cu)",            molarMass: 63.546, eq: 2, zi: 2, lmc: 0.0,   empEc: 0.0, isMacro: false },
    { id: "Si",    hbKey: "Si",       symbol: "Si",     name_en: "Silicon",           name_bn: "সিলিকন (Si)",                 molarMass: 28.086, eq: 2, zi: 2, lmc: 0.0,   empEc: 0.0, isMacro: false, oxideSymbol: "SiO₂", oxideFactor: 2.1393 },
    { id: "Mo",    hbKey: "Mo",       symbol: "Mo",     name_en: "Molybdenum",        name_bn: "মলিবডেনাম (Mo)",              molarMass: 95.940, eq: 2, zi: 2, lmc: 76.35, empEc: 0.0, isMacro: false },
    { id: "Na",    hbKey: "Na",       symbol: "Na",     name_en: "Sodium",            name_bn: "সোডিয়াম (Na)",                molarMass: 22.990, eq: 1, zi: 1, lmc: 50.01, empEc: 0.0, isMacro: false },
    { id: "Cl",    hbKey: "Cl",       symbol: "Cl",     name_en: "Chloride",          name_bn: "ক্লোরাইড (Cl)",               molarMass: 35.453, eq: 1, zi: 1, lmc: 0.0,   empEc: 0.0, isMacro: false }
  ],

  // 40 Formulations: 14 Bangladesh BARI/Commercial Presets + All 26 Original HydroBuddy Formulations
  formulations: [
    // --- BANGLADESH BARI, DAE & COMMERCIAL POLYHOUSE FORMULATIONS ---
    {
      id: "bd_bari_veg",
      category: "BD",
      name_en: "🇧🇩 BARI Universal Vegetable Formula (Bangladesh Standard)",
      name_bn: "🇧🇩 বারি সার্বজনীন সবজি ফর্মুলা (BARI স্ট্যান্ডার্ড)",
      units: "ppm",
      notes_en: "Recommended by Bangladesh Agricultural Research Institute (BARI) for multi-crop greenhouse & rooftop hydroponics.",
      notes_bn: "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট (বারি) অনুমোদিত সব ধরনের সবজি ও ছাদ বাগানের সার্বজনীন হাইড্রোপনিক ফর্মুলা।",
      targets: { N_NO3: 145, N_NH4: 15, P: 45, K: 200, Mg: 45, Ca: 150, S: 60, Fe: 3.0, Mn: 0.60, Zn: 0.25, B: 0.40, Cu: 0.08, Si: 0, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_lettuce_summer",
      category: "BD",
      name_en: "🇧🇩 Lettuce, Mint & Leafy Greens — Bangladesh Summer NFT (Low EC)",
      name_bn: "🇧🇩 লেটুস, পুদিনা ও পাতা জাতীয় সবজি — গ্রীষ্মকালীন (কম EC)",
      units: "ppm",
      notes_en: "Lower EC (1.3–1.5 mS/cm) with elevated Ca:N ratio to prevent tip-burn during 34–38°C Bangladesh summer heat.",
      notes_bn: "গরমকালে (৩৪–৩৮°সে) পাতার আগা পুড়ে যাওয়া (Tip-burn) রোধে কম EC এবং সুষম ক্যালসিয়াম সমৃদ্ধ ফর্মুলা।",
      targets: { N_NO3: 125, N_NH4: 10, P: 40, K: 165, Mg: 40, Ca: 135, S: 52, Fe: 2.8, Mn: 0.50, Zn: 0.20, B: 0.35, Cu: 0.06, Si: 15, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_lettuce_winter",
      category: "BD",
      name_en: "🇧🇩 Lettuce & Salad Greens — Bangladesh Winter Rabi Season",
      name_bn: "🇧🇩 শীতকালীন লেটুস ও সালাদ ফসল (রবি মৌসুম)",
      units: "ppm",
      notes_en: "Full-strength winter formula (Nov–Feb) for crisp head development and rapid 35-day harvest.",
      notes_bn: "শীতকালে (নভেম্বর–ফেব্রুয়ারি) দ্রুত বৃদ্ধি ও ৩৫ দিনে বাজারজাতকরণের জন্য আদর্শ ফর্মুলা।",
      targets: { N_NO3: 152, N_NH4: 13, P: 48, K: 210, Mg: 48, Ca: 155, S: 64, Fe: 3.2, Mn: 0.60, Zn: 0.25, B: 0.40, Cu: 0.08, Si: 0, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_tomato_veg",
      category: "BD",
      name_en: "🇧🇩 Tomato & Cherry Tomato — Vegetative Growth (BARI Hybrid)",
      name_bn: "🇧🇩 টমেটো ও চেরি টমেটো — চারা ও অঙ্গজ বৃদ্ধি পর্যায়",
      units: "ppm",
      notes_en: "Used from transplanting until first flower cluster opens on BARI Hybrid Tomato-8/11 and Cherry Tomato.",
      notes_bn: "চারা রোপণ থেকে প্রথম ফুল আসার আগ পর্যন্ত গাছের মজবুত গঠনের জন্য।",
      targets: { N_NO3: 160, N_NH4: 15, P: 50, K: 220, Mg: 50, Ca: 165, S: 70, Fe: 3.0, Mn: 0.70, Zn: 0.30, B: 0.45, Cu: 0.08, Si: 20, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_tomato_fruit",
      category: "BD",
      name_en: "🇧🇩 Tomato & Cherry Tomato — Heavy Fruiting & Ripening",
      name_bn: "🇧🇩 টমেটো ও চেরি টমেটো — ফল ধরা ও পাকার পর্যায়",
      units: "ppm",
      notes_en: "High Potassium (300 ppm) and Calcium (185 ppm) for sweet Brix, firm skin, and zero Blossom-End Rot.",
      notes_bn: "টমেটোর মিষ্টতা বৃদ্ধি, উজ্জ্বল রঙ এবং তলা পচা রোগ (Blossom-End Rot) প্রতিরোধে উচ্চ পটাশিয়াম ও ক্যালসিয়াম ফর্মুলা।",
      targets: { N_NO3: 175, N_NH4: 10, P: 55, K: 300, Mg: 60, Ca: 185, S: 95, Fe: 3.5, Mn: 0.80, Zn: 0.35, B: 0.50, Cu: 0.10, Si: 25, Mo: 0.06, Na: 0, Cl: 0 }
    },
    {
      id: "bd_capsicum",
      category: "BD",
      name_en: "🇧🇩 Sweet Capsicum / Colored Bell Pepper — Commercial Polyhouse",
      name_bn: "🇧🇩 রঙিন ক্যাপসিকাম (লাল/হলুদ/সবুজ) — বাণিজ্যিক পলিহাউস",
      units: "ppm",
      notes_en: "Optimized for Gazipur, Savar & Cumilla commercial cocopeat drip polyhouses.",
      notes_bn: "গাজীপুর, সাভার ও কুমিল্লার বাণিজ্যিক পলিহাউসে কোকোপিট ড্রিপ পদ্ধতিতে রঙিন ক্যাপসিকাম চাষের ফর্মুলা।",
      targets: { N_NO3: 168, N_NH4: 12, P: 50, K: 250, Mg: 55, Ca: 175, S: 80, Fe: 3.2, Mn: 0.70, Zn: 0.30, B: 0.45, Cu: 0.08, Si: 20, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_strawberry",
      category: "BD",
      name_en: "🇧🇩 Strawberry — Bogura / Panchagarh Winter Bloom & Fruit",
      name_bn: "🇧🇩 স্ট্রবেরি — বগুড়া ও পঞ্চগড় শীতকালীন ফুল ও ফল ফর্মুলা",
      units: "ppm",
      notes_en: "Salt-sensitive crop: keeps EC moderate (1.4–1.6 mS/cm) with high K:N ratio for aroma and berry size.",
      notes_bn: "স্ট্রবেরি লবণাক্ততা সংবেদনশীল; তাই পরিমিত EC (১.৪–১.৬) এবং সুমিষ্ট ফলের জন্য বিশেষভাবে তৈরি।",
      targets: { N_NO3: 118, N_NH4: 7, P: 45, K: 200, Mg: 45, Ca: 130, S: 65, Fe: 3.0, Mn: 0.60, Zn: 0.25, B: 0.40, Cu: 0.07, Si: 15, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_rockmelon",
      category: "BD",
      name_en: "🇧🇩 Netted Rockmelon / Sammam (Cantaloupe) — Dutch Bucket",
      name_bn: "🇧🇩 রক মেলন ও সাম্মাম — ডাচ বাকেট বাণিজ্যিক ফর্মুলা",
      units: "ppm",
      notes_en: "High K & Ca formula for heavy netting and 14–16% Brix sweetness in rooftop and polyhouse Dutch buckets.",
      notes_bn: "সাম্মাম ও রক মেলনের সুন্দর জালি গঠন এবং ১৪–১৬% মিষ্টতা (Brix) নিশ্চিত করার ফর্মুলা।",
      targets: { N_NO3: 178, N_NH4: 12, P: 52, K: 270, Mg: 58, Ca: 180, S: 85, Fe: 3.2, Mn: 0.70, Zn: 0.30, B: 0.50, Cu: 0.08, Si: 30, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_cucumber",
      category: "BD",
      name_en: "🇧🇩 English Seedless Cucumber — High-Yield Polyhouse",
      name_bn: "🇧🇩 বীজহীন ইংলিশ শসা ও খিরা — উচ্চ ফলনশীল ফর্মুলা",
      units: "ppm",
      notes_en: "Fast-growing vine formula supporting daily cucumber harvest within 32–35 days of transplant.",
      notes_bn: "দ্রুত বর্ধনশীল বীজহীন শসার জন্য ৩২–৩৫ দিনে প্রতিদিন ফল সংগ্রহের উপযোগী ফর্মুলা।",
      targets: { N_NO3: 180, N_NH4: 15, P: 50, K: 260, Mg: 55, Ca: 175, S: 75, Fe: 3.0, Mn: 0.70, Zn: 0.30, B: 0.45, Cu: 0.08, Si: 35, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_deshi_shak",
      category: "BD",
      name_en: "🇧🇩 Deshi Shak: Lal Shak (Red Amaranth), Kolmi, Palong & Pakchoi",
      name_bn: "🇧🇩 দেশি শাক: লাল শাক, কলমি শাক, পালং শাক ও পাকচয়",
      units: "ppm",
      notes_en: "Balanced nitrogen & iron profile for vibrant leaf color and rapid 22–28 day harvest cycle.",
      notes_bn: "মাত্র ২২–২৮ দিনে সতেজ ও উজ্জ্বল রঙের লাল শাক, পালং শাক, কলমি শাক ও পাকচয় উৎপাদনের ফর্মুলা।",
      targets: { N_NO3: 155, N_NH4: 15, P: 45, K: 195, Mg: 45, Ca: 145, S: 60, Fe: 3.2, Mn: 0.60, Zn: 0.25, B: 0.35, Cu: 0.07, Si: 0, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_naga_chilli",
      category: "BD",
      name_en: "🇧🇩 Naga Morich (Ghost Pepper) & Green Chilli — Sylhet/BD Formula",
      name_bn: "🇧🇩 নাগা মরিচ (বোম্বাই মরিচ) ও কাঁচা মরিচ — বিশেষ ফর্মুলা",
      units: "ppm",
      notes_en: "High Potassium, Calcium & Sulfur to maximize capsaicin pungency and prevent flower drop in hot weather.",
      notes_bn: "মরিচের ঝাল ও ঘ্রাণ বৃদ্ধি এবং গরমে ফুল ঝরে পড়া রোধে উচ্চ পটাশিয়াম, ক্যালসিয়াম ও সালফার সমৃদ্ধ।",
      targets: { N_NO3: 170, N_NH4: 12, P: 52, K: 265, Mg: 55, Ca: 180, S: 90, Fe: 3.2, Mn: 0.75, Zn: 0.30, B: 0.50, Cu: 0.08, Si: 20, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_brinjal_okra",
      category: "BD",
      name_en: "🇧🇩 Brinjal (Begun), Okra (Dherosh) & Bitter Gourd (Korola)",
      name_bn: "🇧🇩 বেগুন, ঢেঁড়শ ও করলা — ডাচ বাকেট ও গ্রো-ব্যাগ ফর্মুলা",
      units: "ppm",
      notes_en: "Tailored for popular Bangladeshi fruiting vegetables grown in cocopeat/rice-husk grow bags.",
      notes_bn: "কোকোপিট ও ধানের তুষের গ্রো-ব্যাগে বেগুন, ঢেঁড়শ ও করলা চাষের আদর্শ ফর্মুলা।",
      targets: { N_NO3: 165, N_NH4: 15, P: 48, K: 240, Mg: 50, Ca: 160, S: 75, Fe: 3.0, Mn: 0.65, Zn: 0.28, B: 0.42, Cu: 0.08, Si: 15, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_potato_minituber",
      category: "BD",
      name_en: "🇧🇩 Potato Aeroponic/Hydroponic Minituber (BARI Seed Potato)",
      name_bn: "🇧🇩 আলুর মিনিটিউবার (অ্যারোপনিক্স ও হাইড্রোপনিক্স বীজ আলু)",
      units: "ppm",
      notes_en: "Used for virus-free pre-basic seed potato minituber production in Rangpur, Bogura & Munshiganj.",
      notes_bn: "রংপুর, বগুড়া ও মুন্সীগঞ্জে ভাইরাসমুক্ত বীজ আলু (মিনিটিউবার) উৎপাদনের ফর্মুলা।",
      targets: { N_NO3: 155, N_NH4: 15, P: 55, K: 260, Mg: 50, Ca: 165, S: 70, Fe: 3.0, Mn: 0.70, Zn: 0.30, B: 0.45, Cu: 0.08, Si: 0, Mo: 0.05, Na: 0, Cl: 0 }
    },
    {
      id: "bd_fodder",
      category: "BD",
      name_en: "🇧🇩 Hydroponic Green Fodder / Maize & Barley Grass (Dairy Cattle)",
      name_bn: "🇧🇩 গবাদি পশুর হাইড্রোপনিক ঘাস (ভুট্টা ও গমের কাঁচা ঘাস)",
      units: "ppm",
      notes_en: "Low-cost, low-EC starter mist solution for 8-day hydroponic fodder trays in Sirajganj/Pabna dairy farms.",
      notes_bn: "সিরাজগঞ্জ ও পাবনার ডেইরি খামারে মাত্র ৮ দিনে ট্রেতে ভুট্টা ও গমের পুষ্টিকর হাইড্রোপনিক ঘাস উৎপাদনের সাশ্রয়ী ফর্মুলা।",
      targets: { N_NO3: 85, N_NH4: 10, P: 25, K: 110, Mg: 28, Ca: 85, S: 38, Fe: 1.8, Mn: 0.30, Zn: 0.15, B: 0.20, Cu: 0.04, Si: 0, Mo: 0.03, Na: 0, Cl: 0 }
    },

    // --- ALL 26 ORIGINAL HYDROBUDDY FORMULATIONS (FROM formulations_win.dbf) ---
    {
      id: "hb_strawberry_fruiting",
      category: "HB",
      name_en: "Strawberry Fruiting (growing edge) [HydroBuddy]",
      name_bn: "স্ট্রবেরি ফল ধরার পর্যায় (Growing Edge) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 128, N_NH4: 0, P: 58, K: 211, Mg: 40, Ca: 104, S: 54, B: 0.7, Fe: 5.0, Zn: 0.25, Cu: 0.07, Mo: 0.05, Mn: 2.0, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_lettuce_resh",
      category: "HB",
      name_en: "Lettuce General (Howard Resh) [HydroBuddy]",
      name_bn: "লেটুস সাধারণ ফর্মুলা (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 165, N_NH4: 15, P: 50, K: 210, Mg: 45, Ca: 190, S: 65, B: 0.5, Fe: 4.0, Zn: 0.1, Cu: 0.1, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_dry_season_resh",
      category: "HB",
      name_en: "Generic Dry Season (Howard Resh) [HydroBuddy]",
      name_bn: "শুষ্ক মৌসুমের সাধারণ ফর্মুলা (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 177, N_NH4: 53, P: 60, K: 200, Mg: 36, Ca: 250, S: 129, B: 0.5, Fe: 5.0, Zn: 0.05, Cu: 0.03, Mo: 0.02, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_wet_season_resh",
      category: "HB",
      name_en: "Generic Wet Season (Howard Resh) [HydroBuddy]",
      name_bn: "বর্ষা মৌসুমের সাধারণ ফর্মুলা (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 115, N_NH4: 32, P: 50, K: 150, Mg: 50, Ca: 150, S: 50, B: 0.5, Fe: 5.0, Zn: 0.05, Cu: 0.03, Mo: 0.02, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_pepper_resh",
      category: "HB",
      name_en: "Pepper (Howard Resh) [HydroBuddy]",
      name_bn: "ক্যাপসিকাম / মরিচ (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 190, N_NH4: 18, P: 40, K: 340, Mg: 50, Ca: 170, S: 360, B: 0.33, Fe: 5.0, Zn: 0.33, Cu: 0.05, Mo: 0.05, Mn: 0.55, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_tomato_resh",
      category: "HB",
      name_en: "Tomato (Howard Resh) [HydroBuddy]",
      name_bn: "টমেটো সাধারণ (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 140, N_NH4: 0, P: 50, K: 352, Mg: 50, Ca: 180, S: 168, B: 0.3, Fe: 5.0, Zn: 0.1, Cu: 0.07, Mo: 0.03, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_cucumber_resh",
      category: "HB",
      name_en: "Cucumber (Howard Resh) [HydroBuddy]",
      name_bn: "শসা (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 140, N_NH4: 0, P: 50, K: 350, Mg: 50, Ca: 200, S: 150, B: 0.3, Fe: 3.0, Zn: 0.1, Cu: 0.07, Mo: 0.03, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_lettuce2_resh",
      category: "HB",
      name_en: "Lettuce 2 (Howard Resh) [HydroBuddy]",
      name_bn: "লেটুস ২ (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 165, N_NH4: 15, P: 50, K: 210, Mg: 45, Ca: 190, S: 113, B: 0.5, Fe: 4.0, Zn: 0.1, Cu: 0.1, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_generic_grow",
      category: "HB",
      name_en: "Generic Grow (maximumyield) [HydroBuddy]",
      name_bn: "সাধারণ বৃদ্ধি পর্যায় - Grow (MaximumYield) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 160, N_NH4: 0, P: 30, K: 230, Mg: 30, Ca: 100, S: 60, B: 0.5, Fe: 2.0, Zn: 0.1, Cu: 0.05, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_generic_bloom",
      category: "HB",
      name_en: "Generic Bloom (maximumyield) [HydroBuddy]",
      name_bn: "সাধারণ ফুল ও ফল পর্যায় - Bloom (MaximumYield) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 130, N_NH4: 0, P: 60, K: 300, Mg: 30, Ca: 100, S: 60, B: 0.5, Fe: 2.0, Zn: 0.1, Cu: 0.05, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_tomato_s1_resh",
      category: "HB",
      name_en: "Tomato Stage.1 - 10-14 days (Howard Resh) [HydroBuddy]",
      name_bn: "টমেটো ধাপ ১ (১০-১৪ দিন) (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 100, N_NH4: 0, P: 40, K: 200, Mg: 20, Ca: 100, S: 53, B: 0.3, Fe: 3.0, Zn: 0.1, Cu: 0.07, Mo: 0.03, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_tomato_s2_resh",
      category: "HB",
      name_en: "Tomato Stage.2 - first cluster (Howard Resh) [HydroBuddy]",
      name_bn: "টমেটো ধাপ ২ (প্রথম থোকা) (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 130, N_NH4: 0, P: 55, K: 300, Mg: 33, Ca: 150, S: 109, B: 0.3, Fe: 3.0, Zn: 0.1, Cu: 0.07, Mo: 0.03, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_tomato_s3_resh",
      category: "HB",
      name_en: "Tomato Stage.3 - to plant maturity (Howard Resh) [HydroBuddy]",
      name_bn: "টমেটো ধাপ ৩ (পূর্ণ পরিপক্বতা) (Howard Resh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 180, N_NH4: 0, P: 65, K: 400, Mg: 45, Ca: 400, S: 144, B: 0.3, Fe: 3.0, Zn: 0.1, Cu: 0.07, Mo: 0.03, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_rice_peckenpaugh",
      category: "HB",
      name_en: "Rice (Douglas Peckenpaugh) [HydroBuddy]",
      name_bn: "ধান গবেষণা ফর্মুলা (Douglas Peckenpaugh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 249, N_NH4: 0, P: 58, K: 80, Mg: 65, Ca: 317, S: 87, B: 0.7, Fe: 5.0, Zn: 0.4, Cu: 0.07, Mo: 0.05, Mn: 0.8, Na: 0, Si: 100, Cl: 0 }
    },
    {
      id: "hb_melons_peckenpaugh",
      category: "HB",
      name_en: "Melons (Douglas Peckenpaugh) [HydroBuddy]",
      name_bn: "মেলন / বাঙ্গি / সাম্মাম (Douglas Peckenpaugh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 215, N_NH4: 0, P: 86, K: 343, Mg: 85, Ca: 175, S: 113, B: 0.7, Fe: 6.8, Zn: 0.25, Cu: 0.07, Mo: 0.05, Mn: 1.97, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_tropical_lettuce",
      category: "HB",
      name_en: "Tropical Lettuce (Douglas Peckenpaugh) [HydroBuddy]",
      name_bn: "ট্রপিক্যাল লেটুস (Douglas Peckenpaugh) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 190, N_NH4: 0, P: 25, K: 98, Mg: 25, Ca: 216, S: 33, B: 0.7, Fe: 4.9, Zn: 0.25, Cu: 0.07, Mo: 0.05, Mn: 1.97, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_chilli_maxyield",
      category: "HB",
      name_en: "Chilli (maximumyield) [HydroBuddy]",
      name_bn: "মরিচ - উচ্চ ঘনত্ব (MaximumYield) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 320, N_NH4: 0, P: 103, K: 364, Mg: 96, Ca: 330, S: 174, B: 0.7, Fe: 4.9, Zn: 0.25, Cu: 0.07, Mo: 0.05, Mn: 1.97, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_uf_tomato_c1",
      category: "HB",
      name_en: "Tomatoes - till First Cluster (U of Florida) [HydroBuddy]",
      name_bn: "টমেটো - ১ম থোকা পর্যন্ত (University of Florida) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 70, N_NH4: 0, P: 50, K: 120, Mg: 40, Ca: 150, S: 50, B: 0.7, Fe: 2.8, Zn: 0.3, Cu: 0.2, Mo: 0.05, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_uf_tomato_c2",
      category: "HB",
      name_en: "Tomatoes - Second Cluster (U of Florida) [HydroBuddy]",
      name_bn: "টমেটো - ২য় থোকা (University of Florida) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 80, N_NH4: 0, P: 50, K: 120, Mg: 40, Ca: 150, S: 50, B: 0.7, Fe: 2.8, Zn: 0.3, Cu: 0.2, Mo: 0.05, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_uf_tomato_c3",
      category: "HB",
      name_en: "Tomatoes - Third Cluster (U of Florida) [HydroBuddy]",
      name_bn: "টমেটো - ৩য় থোকা (University of Florida) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 100, N_NH4: 0, P: 50, K: 150, Mg: 40, Ca: 150, S: 50, B: 0.7, Fe: 2.8, Zn: 0.3, Cu: 0.2, Mo: 0.05, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_uf_tomato_c4",
      category: "HB",
      name_en: "Tomatoes - Fourth Cluster (U of Florida) [HydroBuddy]",
      name_bn: "টমেটো - ৪র্থ থোকা (University of Florida) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 120, N_NH4: 0, P: 50, K: 150, Mg: 50, Ca: 150, S: 60, B: 0.7, Fe: 2.8, Zn: 0.3, Cu: 0.2, Mo: 0.05, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_uf_tomato_c5",
      category: "HB",
      name_en: "Tomatoes - to termination (U of Florida) [HydroBuddy]",
      name_bn: "টমেটো - শেষ পর্যায় পর্যন্ত (University of Florida) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 150, N_NH4: 0, P: 50, K: 200, Mg: 50, Ca: 150, S: 60, B: 0.7, Fe: 2.8, Zn: 0.3, Cu: 0.2, Mo: 0.05, Mn: 0.8, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_berries_growing_edge",
      category: "HB",
      name_en: "Generic for Berries (Growing Edge) [HydroBuddy]",
      name_bn: "বেরি জাতীয় ফল (Growing Edge) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 207, N_NH4: 0, P: 55, K: 289, Mg: 38, Ca: 155, S: 51, B: 0.7, Fe: 6.8, Zn: 0.25, Cu: 0.07, Mo: 0.05, Mn: 1.97, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_hoagland",
      category: "HB",
      name_en: "Hoagland solution (1950 University Standard) [HydroBuddy]",
      name_bn: "হোগল্যান্ড সলিউশন (১৯৫০ বিশ্ববিদ্যালয় রেফারেন্স) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 210, N_NH4: 0, P: 31, K: 235, Mg: 49, Ca: 200, S: 64, B: 0.5, Fe: 2.9, Zn: 0.05, Cu: 0.02, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_strawberry_drip",
      category: "HB",
      name_en: "Strawberry Drip Irrigation (schundler.com) [HydroBuddy]",
      name_bn: "স্ট্রবেরি ড্রিপ ইরিগেশন (schundler.com) [HydroBuddy]",
      units: "ppm",
      targets: { N_NO3: 80, N_NH4: 0, P: 45, K: 100, Mg: 50, Ca: 200, S: 180, B: 0.5, Fe: 3.0, Zn: 0.5, Cu: 0.05, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    },
    {
      id: "hb_default",
      category: "HB",
      name_en: "DEFAULT (HydroBuddy Standard)",
      name_bn: "ডিফল্ট ফর্মুলা (HydroBuddy Standard)",
      units: "ppm",
      targets: { N_NO3: 210, N_NH4: 0, P: 31, K: 235, Mg: 49, Ca: 200, S: 64, B: 0.5, Fe: 2.9, Zn: 0.05, Cu: 0.02, Mo: 0.05, Mn: 0.5, Na: 0, Si: 0, Cl: 0 }
    }
  ],

  // All 44 Substances: 33 Original HydroBuddy substances + 11 Bangladesh/Commercial salts & acids
  substances: [
    {
      id: "ca_no3_ag",
      name_en: "Calcium Nitrate (ag grade)",
      name_bn: "ক্যালসিয়াম নাইট্রেট (কৃষি গ্রেড - YaraLiva/Tropicote)",
      formula: "5Ca(NO3)2.NH4NO3.10H2O",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 160,
      priceUSD: 7.93,
      defaultSelected: true,
      comp: { N_NO3: 14.4, N_NH4: 1.1, Ca: 19.0 }
    },
    {
      id: "kno3",
      name_en: "Potassium Nitrate (13-0-46)",
      name_bn: "পটাশিয়াম নাইট্রেট (১৩-০-৪৬ মাল্টি-কে)",
      formula: "KNO3",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 250,
      priceUSD: 22.05,
      defaultSelected: true,
      comp: { N_NO3: 13.856, K: 38.67 }
    },
    {
      id: "fe_dtpa",
      name_en: "Iron DTPA (11% Fe Chelate)",
      name_bn: "চিলেটেড আয়রন DTPA (১১% Fe - pH ৭.৫ পর্যন্ত কার্যকর)",
      formula: "FeDTPA",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 1250,
      priceUSD: 59.50,
      defaultSelected: true,
      comp: { Fe: 11.0 }
    },
    {
      id: "fe_edta",
      name_en: "Iron EDTA (13% Fe Chelate)",
      name_bn: "চিলেটেড আয়রন EDTA (১৩% Fe)",
      formula: "Fe(EDTA)",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 980,
      priceUSD: 55.09,
      defaultSelected: false,
      comp: { Fe: 13.0 }
    },
    {
      id: "fe_eddha",
      name_en: "Iron EDDHA (6% Fe High-pH Chelate)",
      name_bn: "চিলেটেড আয়রন EDDHA (৬% Fe - ক্ষারীয় পানির জন্য)",
      formula: "FeEDDHA",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 1650,
      priceUSD: 59.61,
      defaultSelected: false,
      comp: { Fe: 6.0 }
    },
    {
      id: "mkp",
      name_en: "Potassium Monobasic Phosphate (MKP 0-52-34)",
      name_bn: "মনো পটাশিয়াম ফসফেট (MKP ০-৫২-৩৪)",
      formula: "KH2PO4",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 350,
      priceUSD: 44.07,
      defaultSelected: true,
      comp: { P: 22.758, K: 28.732 }
    },
    {
      id: "mgso4_7h2o",
      name_en: "Magnesium Sulfate (Heptahydrate / Epsom Salt)",
      name_bn: "ম্যাগনেসিয়াম সালফেট (ইপসম সল্ট - ৯.৮৬% Mg)",
      formula: "MgSO4.7H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 85,
      priceUSD: 2.07,
      defaultSelected: true,
      comp: { Mg: 9.86, S: 13.01 }
    },
    {
      id: "k2so4",
      name_en: "Potassium Sulfate (SOP 0-0-50)",
      name_bn: "পটাশিয়াম সালফেট (SOP ০-০-৫০)",
      formula: "K2SO4",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 220,
      priceUSD: 19.82,
      defaultSelected: true,
      comp: { K: 44.873, S: 18.402 }
    },
    {
      id: "nh4_2so4",
      name_en: "Ammonium Sulfate",
      name_bn: "অ্যামোনিয়াম সালফেট (২১% N, ২৪% S)",
      formula: "(NH4)2SO4",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 90,
      priceUSD: 35.25,
      defaultSelected: false,
      comp: { N_NH4: 21.203, S: 24.267 }
    },
    {
      id: "mnso4_h2o",
      name_en: "Manganese Sulfate (Monohydrate)",
      name_bn: "ম্যাঙ্গানিজ সালফেট মনোহাইড্রেট (৩২% Mn)",
      formula: "MnSO4.H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 280,
      priceUSD: 18.50,
      defaultSelected: true,
      comp: { Mn: 32.5, S: 18.97 }
    },
    {
      id: "mn_edta",
      name_en: "Mn EDTA (13% Chelated Manganese)",
      name_bn: "চিলেটেড ম্যাঙ্গানিজ EDTA (১৩% Mn)",
      formula: "MnEDTA",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 950,
      priceUSD: 55.09,
      defaultSelected: false,
      comp: { Mn: 13.0 }
    },
    {
      id: "boric_acid",
      name_en: "Boric Acid",
      name_bn: "বরিক এসিড (১৭.৫% বোরন)",
      formula: "H3BO3",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 320,
      priceUSD: 24.14,
      defaultSelected: true,
      comp: { B: 17.482 }
    },
    {
      id: "solubor",
      name_en: "Solubor (Disodium Octaborate Tetrahydrate)",
      name_bn: "সলুবর বোরন (২০.৫% B - দ্রুত দ্রবণীয়)",
      formula: "Na2B8O13.4H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 380,
      priceUSD: 22.00,
      defaultSelected: false,
      comp: { B: 20.5, Na: 11.1 }
    },
    {
      id: "znso4_h2o",
      name_en: "Zinc Sulfate (Monohydrate)",
      name_bn: "জিংক সালফেট মনোহাইড্রেট (৩৬.৪% Zn)",
      formula: "ZnSO4.H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 260,
      priceUSD: 40.76,
      defaultSelected: true,
      comp: { Zn: 36.44, S: 17.86 }
    },
    {
      id: "zn_edta",
      name_en: "Zn EDTA (14% Chelated Zinc)",
      name_bn: "চিলেটেড জিংক EDTA (১৪% Zn)",
      formula: "ZnEDTA",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 920,
      priceUSD: 55.09,
      defaultSelected: false,
      comp: { Zn: 14.0 }
    },
    {
      id: "cuso4_5h2o",
      name_en: "Copper Sulfate (pentahydrate)",
      name_bn: "কপার সালফেট পেন্টাহাইড্রেট / তুঁতে (২৫.৪% Cu)",
      formula: "CuSO4.5H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 480,
      priceUSD: 4.20,
      defaultSelected: true,
      comp: { Cu: 25.45, S: 12.84 }
    },
    {
      id: "cu_edta",
      name_en: "Copper EDTA (14% Chelated Copper)",
      name_bn: "চিলেটেড কপার EDTA (১৪% Cu)",
      formula: "CuEDTA",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 980,
      priceUSD: 44.08,
      defaultSelected: false,
      comp: { Cu: 14.0 }
    },
    {
      id: "na2moo4_2h2o",
      name_en: "Sodium Molybdate (Dihydrate)",
      name_bn: "সোডিয়াম মলিবডেট ডাইহাইড্রেট (৩৯.৬৫% Mo)",
      formula: "Na2MoO4.2H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 2800,
      priceUSD: 44.07,
      defaultSelected: true,
      comp: { Mo: 39.65, Na: 19.0 }
    },
    {
      id: "mg_no3",
      name_en: "Mg Nitrate (Magnesium Nitrate Hexahydrate)",
      name_bn: "ম্যাগনেসিয়াম নাইট্রেট (১১% N, ৯.৬৫% Mg)",
      formula: "Mg(NO3)2.6H2O",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 240,
      priceUSD: 55.09,
      defaultSelected: false,
      comp: { N_NO3: 11.0, Mg: 9.65 }
    },
    {
      id: "map_nh4h2po4",
      name_en: "Ammonium Monobasic Phosphate (MAP 12-61-0)",
      name_bn: "মনো অ্যামোনিয়াম ফসফেট (MAP ১২-৬১-০)",
      formula: "(NH4)H2PO4",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 310,
      priceUSD: 77.14,
      defaultSelected: false,
      comp: { N_NH4: 12.18, P: 26.924 }
    },
    {
      id: "dap_nh42hpo4",
      name_en: "Ammonium Dibasic Phosphate (DAP)",
      name_bn: "ডাই-অ্যামোনিয়াম ফসফেট (DAP)",
      formula: "(NH4)2HPO4",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 120,
      priceUSD: 77.14,
      defaultSelected: false,
      comp: { N_NH4: 21.217, P: 23.451 }
    },
    {
      id: "k2hpo4",
      name_en: "Potassium Dibasic Phosphate (DKP)",
      name_bn: "ডাই পটাশিয়াম ফসফেট (K2HPO4)",
      formula: "K2HPO4",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 420,
      priceUSD: 58.78,
      defaultSelected: false,
      comp: { P: 17.781, K: 44.897 }
    },
    {
      id: "caso4_2h2o",
      name_en: "Calcium Sulfate (Dihydrate / Gypsum)",
      name_bn: "ক্যালসিয়াম সালফেট / জিপসাম (সরাসরি ট্যাংকে)",
      formula: "CaSO4.2H2O",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 65,
      priceUSD: 7.69,
      defaultSelected: false,
      comp: { Ca: 23.28, S: 18.62 }
    },
    {
      id: "feso4_7h2o",
      name_en: "Iron II Sulfate (Heptahydrate)",
      name_bn: "ফেরাস সালফেট হেপ্টাহাইড্রেট (২০.০৯% Fe)",
      formula: "FeSO4.7H2O",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 110,
      priceUSD: 3.20,
      defaultSelected: false,
      comp: { Fe: 20.09, S: 11.53 }
    },
    {
      id: "ca_h2po4_2",
      name_en: "Calcium Monobasic Phosphate",
      name_bn: "ক্যালসিয়াম মনোবেসিক ফসফেট",
      formula: "Ca(H2PO4)2.H2O",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 390,
      priceUSD: 81.55,
      defaultSelected: false,
      comp: { P: 24.779, Ca: 16.029 }
    },
    {
      id: "mgco3",
      name_en: "Magnesium Carbonate",
      name_bn: "ম্যাগনেসিয়াম কার্বনেট",
      formula: "MgCO3",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 260,
      priceUSD: 31.92,
      defaultSelected: false,
      comp: { Mg: 28.831 }
    },
    {
      id: "caco3",
      name_en: "Calcium Carbonate",
      name_bn: "ক্যালসিয়াম কার্বনেট (চুন)",
      formula: "CaCO3",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 60,
      priceUSD: 15.16,
      defaultSelected: false,
      comp: { Ca: 40.078 }
    },
    {
      id: "k2co3",
      name_en: "Potassium Carbonate (pH Up)",
      name_bn: "পটাশিয়াম কার্বনেট (pH Up)",
      formula: "K2CO3",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 340,
      priceUSD: 24.36,
      defaultSelected: false,
      comp: { K: 56.581 }
    },
    {
      id: "nano3",
      name_en: "Sodium Nitrate",
      name_bn: "সোডিয়াম নাইট্রেট",
      formula: "NaNO3",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 190,
      priceUSD: 9.26,
      defaultSelected: false,
      comp: { N_NO3: 16.482, Na: 27.047 }
    },
    {
      id: "cu_no3_2",
      name_en: "Copper Nitrate (Hexahydrate)",
      name_bn: "কপার নাইট্রেট হেক্সাহাইড্রেট",
      formula: "Cu(NO3)2.6H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 620,
      priceUSD: 19.84,
      defaultSelected: false,
      comp: { N_NO3: 9.48, Cu: 21.49 }
    },
    {
      id: "borax",
      name_en: "Sodium Borate (Decahydrate) (borax)",
      name_bn: "সোডিয়াম বোরেট / সোহাগা (বোরাক্স - ১১.৩৪% B)",
      formula: "Na2B4O7.10H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 180,
      priceUSD: 15.96,
      defaultSelected: false,
      comp: { B: 11.34, Na: 12.06 }
    },
    {
      id: "kcl",
      name_en: "Potassium Chloride (MOP)",
      name_bn: "পটাশিয়াম ক্লোরাইড (MOP সার)",
      formula: "KCl",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 60,
      priceUSD: 16.96,
      defaultSelected: false,
      comp: { K: 52.448, Cl: 47.552 }
    },
    {
      id: "nh4cl",
      name_en: "Ammonium Chloride",
      name_bn: "অ্যামোনিয়াম ক্লোরাইড (নিশাদল)",
      formula: "NH4Cl",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 110,
      priceUSD: 18.72,
      defaultSelected: false,
      comp: { N_NH4: 26.191, Cl: 66.272 }
    },
    {
      id: "zn_no3_2",
      name_en: "Zinc Nitrate (Hexahydrate)",
      name_bn: "জিংক নাইট্রেট হেক্সাহাইড্রেট",
      formula: "Zn(NO3)2.6H2O",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 540,
      priceUSD: 39.80,
      defaultSelected: false,
      comp: { N_NO3: 9.42, Zn: 21.98 }
    },
    {
      id: "h3po4_75",
      name_en: "Phosphoric Acid (75%)",
      name_bn: "ফসফরিক এসিড (৭৫% লিকুইড)",
      formula: "H3PO4 (75%)",
      purity: 0.75,
      concType: "B",
      isLiquid: true,
      density: 1.579,
      priceBDT: 320,
      priceUSD: 8.87,
      defaultSelected: false,
      comp: { P: 31.61 }
    },
    {
      id: "h3po4_85",
      name_en: "Phosphoric Acid (85% Food/Ag Grade)",
      name_bn: "ফসফরিক এসিড (৮৫% ফুড গ্রেড - pH Down)",
      formula: "H3PO4 (85%)",
      purity: 0.85,
      concType: "B",
      isLiquid: true,
      density: 1.685,
      priceBDT: 360,
      priceUSD: 10.50,
      defaultSelected: false,
      comp: { P: 31.61 }
    },
    {
      id: "hno3_68",
      name_en: "Nitric Acid (68% Liquid)",
      name_bn: "নাইট্রিক এসিড (৬৮% লিকুইড - pH Down)",
      formula: "HNO3 (68%)",
      purity: 0.68,
      concType: "A",
      isLiquid: true,
      density: 1.41,
      priceBDT: 220,
      priceUSD: 7.50,
      defaultSelected: false,
      comp: { N_NO3: 22.23 }
    },
    {
      id: "h2so4_98",
      name_en: "Sulfuric Acid (98% Conc.)",
      name_bn: "সালফিউরিক এসিড (৯৮% লিকুইড - pH Down)",
      formula: "H2SO4",
      purity: 0.98,
      concType: "B",
      isLiquid: true,
      density: 1.84,
      priceBDT: 150,
      priceUSD: 5.50,
      defaultSelected: false,
      comp: { S: 32.69 }
    },
    {
      id: "k_citrate",
      name_en: "Potassium Citrate",
      name_bn: "পটাশিয়াম সাইট্রেট (অর্গানিক pH বাফার)",
      formula: "C6H5K3O7",
      purity: 1.0,
      concType: "0",
      isLiquid: false,
      density: 1.0,
      priceBDT: 680,
      priceUSD: 19.96,
      defaultSelected: false,
      comp: { K: 38.281 }
    },
    {
      id: "k2sio3_agsil",
      name_en: "Potassium Silicate (AgSil 16H / Soluble Silica)",
      name_bn: "পটাশিয়াম সিলিকেট (AgSil 16H - দ্রবণীয় সিলিকন)",
      formula: "K2SiO3",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 750,
      priceUSD: 28.00,
      defaultSelected: false,
      comp: { K: 26.5, Si: 24.7 }
    },
    {
      id: "cacl2_2h2o",
      name_en: "Calcium Chloride (Dihydrate - Foliar/Ca Boost)",
      name_bn: "ক্যালসিয়াম ক্লোরাইড (পাতায় স্প্রে ও ক্যালসিয়াম বুস্ট)",
      formula: "CaCl2.2H2O",
      purity: 1.0,
      concType: "A",
      isLiquid: false,
      density: 1.0,
      priceBDT: 170,
      priceUSD: 12.00,
      defaultSelected: false,
      comp: { Ca: 27.26, Cl: 48.23 }
    },
    {
      id: "ch_micro",
      name_en: "CH - micro (Commercial Chelated Micro Mix)",
      name_bn: "কমার্শিয়াল চিলেটেড মাইক্রো মিক্স (CH-Micro)",
      formula: "Fe7-Mn2-B1.3-Zn0.4-Cu0.11-Mo0.05",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 1450,
      priceUSD: 36.46,
      defaultSelected: false,
      comp: { Fe: 7.0, Mn: 2.0, B: 1.3, Zn: 0.4, Cu: 0.11, Mo: 0.05 }
    },
    {
      id: "urea",
      name_en: "Urea (46% N - Fodder & Foliar Only)",
      name_bn: "ইউরিয়া (৪৬% N - কেবল ঘাস ও পাতায় স্প্রের জন্য)",
      formula: "CO(NH2)2",
      purity: 1.0,
      concType: "B",
      isLiquid: false,
      density: 1.0,
      priceBDT: 35,
      priceUSD: 3.00,
      defaultSelected: false,
      comp: { N_NH4: 46.0 }
    }
  ],

  // 16 Leaf Tissue Analysis Profiles (11 Original HydroBuddy + 5 Bangladesh Crops)
  tissueProfiles: [
    { id: "hb_tomato_mrm", name_en: "Tomato (MRM leaf - initial flower) [HydroBuddy]", name_bn: "টমেটো পাতা (প্রথম ফুল পর্যায়) [HydroBuddy]", N: 4.0, P: 0.4, K: 4.0, Mg: 0.5, Ca: 2.0, S: 0.8, B: 40, Fe: 100, Zn: 40, Cu: 15, Mo: 0.6, Mn: 100, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_cucumber_mrm", name_en: "Cucumber (MRM leaf - initial flower) [HydroBuddy]", name_bn: "শসা পাতা (প্রথম ফুল পর্যায়) [HydroBuddy]", N: 3.75, P: 0.45, K: 2.3, Mg: 0.45, Ca: 2.4, S: 0.55, B: 40, Fe: 70, Zn: 35, Cu: 12.5, Mo: 0.65, Mn: 65, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_pepper_mrm", name_en: "Pepper / Capsicum (MRM leaf - initial flower) [HydroBuddy]", name_bn: "ক্যাপসিকাম / মরিচ পাতা (প্রথম ফুল পর্যায়) [HydroBuddy]", N: 4.0, P: 0.4, K: 3.75, Mg: 0.4, Ca: 1.2, S: 0.45, B: 35, Fe: 90, Zn: 52.5, Cu: 7.5, Mo: 0, Mn: 65, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_strawberry_mrm", name_en: "Strawberry (MRM leaf - initial flower) [HydroBuddy]", name_bn: "স্ট্রবেরি পাতা (প্রথম ফুল পর্যায়) [HydroBuddy]", N: 4.0, P: 0.4, K: 3.0, Mg: 0.5, Ca: 1.5, S: 0.0, B: 40, Fe: 100, Zn: 40, Cu: 10, Mo: 0, Mn: 100, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_lettuce_mrm", name_en: "Lettuce (MRM leaf - 8 leaf stage) [HydroBuddy]", name_bn: "লেটুস পাতা (৮ পাতা পর্যায়) [HydroBuddy]", N: 4.5, P: 0.5, K: 6.0, Mg: 0.4, Ca: 1.5, S: 0.15, B: 22.5, Fe: 100, Zn: 37.5, Cu: 7.5, Mo: 0, Mn: 30, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_spinach_mrm", name_en: "Spinach / Palong Shak (MRM leaf - at harvest) [HydroBuddy]", name_bn: "পালং শাক পাতা (ফসল সংগ্রহের সময়) [HydroBuddy]", N: 3.5, P: 0.4, K: 3.0, Mg: 1.15, Ca: 0.8, S: 0.0, B: 30, Fe: 0, Zn: 60, Cu: 6.0, Mo: 0.55, Mn: 40, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_sweetpotato_mrm", name_en: "Sweet Potato (MRM leaf - Early vining) [HydroBuddy]", name_bn: "মিষ্টি আলু পাতা (লতা বৃদ্ধির শুরুতে) [HydroBuddy]", N: 4.0, P: 0.3, K: 2.5, Mg: 0.5, Ca: 0.8, S: 0.2, B: 20, Fe: 40, Zn: 25, Cu: 5.0, Mo: 0, Mn: 40, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_cannabis_kalinowski", name_en: "Hemp/Cannabis (MRM leaf - late veg Kalinowski) [HydroBuddy]", name_bn: "হেম্প উদ্ভিদ (Kalinowski রেফারেন্স) [HydroBuddy]", N: 4.15, P: 0.34, K: 2.75, Mg: 0.52, Ca: 3.4, S: 0.31, B: 59, Fe: 126, Zn: 40, Cu: 4.3, Mo: 0, Mn: 165, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_cannabis_bryson", name_en: "Hemp/Cannabis (MRM leaf - late veg Bryson & Mills) [HydroBuddy]", name_bn: "হেম্প উদ্ভিদ (Bryson & Mills রেফারেন্স) [HydroBuddy]", N: 4.05, P: 0.37, K: 2.1, Mg: 0.6, Ca: 2.95, S: 0.215, B: 80.5, Fe: 125, Zn: 38, Cu: 6.0, Mo: 0, Mn: 67, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_cannabis_landis", name_en: "Hemp/Cannabis (MRM leaf - late veg Landis) [HydroBuddy]", name_bn: "হেম্প উদ্ভিদ (Landis রেফারেন্স) [HydroBuddy]", N: 3.6, P: 0.375, K: 2.25, Mg: 0.355, Ca: 1.3, S: 0.24, B: 40, Fe: 95.5, Zn: 34.5, Cu: 6.6, Mo: 0, Mn: 48, Na: 0, Si: 0, Cl: 0 },
    { id: "hb_cannabis_nc", name_en: "Hemp/Cannabis (MRM leaf - late veg North Carolina) [HydroBuddy]", name_bn: "হেম্প উদ্ভিদ (North Carolina রেফারেন্স) [HydroBuddy]", N: 4.15, P: 0.375, K: 2.25, Mg: 0.475, Ca: 2.2, S: 0.3, B: 60, Fe: 110, Zn: 46.5, Cu: 8.0, Mo: 0, Mn: 99, Na: 0, Si: 0, Cl: 0 },
    { id: "bd_melon_tissue", name_en: "🇧🇩 Rockmelon / Sammam (Leaf at Fruit Set - BARI)", name_bn: "🇧🇩 রক মেলন / সাম্মাম পাতা (ফল ধরার সময় - বারি)", N: 4.2, P: 0.45, K: 3.8, Mg: 0.55, Ca: 2.3, S: 0.50, B: 45, Fe: 95, Zn: 38, Cu: 10, Mo: 0.6, Mn: 75, Na: 0, Si: 0.25, Cl: 0 },
    { id: "bd_brinjal_tissue", name_en: "🇧🇩 Brinjal / Begun (MRM Leaf at Flowering - BARI)", name_bn: "🇧🇩 বেগুন পাতা (ফুল ধরার সময় - বারি)", N: 4.1, P: 0.38, K: 3.6, Mg: 0.45, Ca: 1.8, S: 0.45, B: 38, Fe: 90, Zn: 35, Cu: 10, Mo: 0.5, Mn: 70, Na: 0, Si: 0, Cl: 0 },
    { id: "bd_okra_tissue", name_en: "🇧🇩 Okra / Dherosh (MRM Leaf - Vegetative/Podding)", name_bn: "🇧🇩 ঢেঁড়শ পাতা (ফল ধরার সময়)", N: 3.8, P: 0.36, K: 2.9, Mg: 0.48, Ca: 1.9, S: 0.40, B: 35, Fe: 85, Zn: 32, Cu: 9, Mo: 0.5, Mn: 60, Na: 0, Si: 0, Cl: 0 },
    { id: "bd_amaranth_tissue", name_en: "🇧🇩 Red Amaranth / Lal Shak (Whole Shoot at Harvest)", name_bn: "🇧🇩 লাল শাক পাতা (সংগ্রহের সময়)", N: 4.3, P: 0.48, K: 4.5, Mg: 0.60, Ca: 1.7, S: 0.35, B: 30, Fe: 120, Zn: 40, Cu: 8, Mo: 0.5, Mn: 55, Na: 0, Si: 0, Cl: 0 },
    { id: "bd_bittergourd_tissue", name_en: "🇧🇩 Bitter Gourd / Korola (MRM Leaf - Vining/Bloom)", name_bn: "🇧🇩 করলা পাতা (ফুল ও ফল ধরার সময়)", N: 3.9, P: 0.42, K: 3.2, Mg: 0.50, Ca: 2.2, S: 0.48, B: 42, Fe: 85, Zn: 36, Cu: 11, Mo: 0.6, Mn: 68, Na: 0, Si: 0, Cl: 0 }
  ],

  // 12 Water Quality Profiles (10 Bangladesh Regional Profiles + 2 Original HydroBuddy Profiles)
  waterProfiles: [
    {
      id: "bd_ro_rain",
      name_en: "🇧🇩 RO / Harvested Rainwater (বৃষ্টির বা RO পানি - EC 0.04)",
      name_bn: "🇧🇩 বৃষ্টির পানি বা RO ফিল্টার পানি (EC 0.04)",
      pH: 6.5, gh: 8, kh: 10, hco3: 10,
      ions: { N_NO3: 0, N_NH4: 0, P: 0, K: 0, Mg: 1, Ca: 2, S: 1, Fe: 0, Mn: 0, Zn: 0, B: 0, Cu: 0, Si: 0, Mo: 0, Na: 2, Cl: 3 }
    },
    {
      id: "bd_dhaka_gazipur",
      name_en: "🇧🇩 Dhaka / Gazipur / Savar Deep Tube-Well (গভীর নলকূপ)",
      name_bn: "🇧🇩 ঢাকা, গাজীপুর ও সাভার গভীর নলকূপের পানি",
      pH: 7.3, gh: 105, kh: 115, hco3: 140,
      ions: { N_NO3: 1.5, N_NH4: 0, P: 0, K: 2, Mg: 8, Ca: 28, S: 6, Fe: 0.15, Mn: 0.05, Zn: 0, B: 0.02, Cu: 0, Si: 8, Mo: 0, Na: 14, Cl: 18 }
    },
    {
      id: "bd_bogura_rajshahi",
      name_en: "🇧🇩 Bogura / Rajshahi / Naogaon Barind Tube-Well (উত্তরবঙ্গ)",
      name_bn: "🇧🇩 বগুড়া, রাজশাহী ও নওগাঁ বরেন্দ্র নলকূপের পানি (কঠিন পানি)",
      pH: 7.6, gh: 170, kh: 172, hco3: 210,
      ions: { N_NO3: 2.0, N_NH4: 0, P: 0, K: 3, Mg: 14, Ca: 45, S: 12, Fe: 0.25, Mn: 0.08, Zn: 0, B: 0.05, Cu: 0, Si: 10, Mo: 0, Na: 18, Cl: 22 }
    },
    {
      id: "bd_ctg_sylhet",
      name_en: "🇧🇩 Chattogram / Sylhet / Moulvibazar Soft Water (মৃদু পানি)",
      name_bn: "🇧🇩 চট্টগ্রাম, সিলেট ও মৌলভীবাজার অঞ্চলের মৃদু পানি",
      pH: 6.9, gh: 56, kh: 53, hco3: 65,
      ions: { N_NO3: 0.5, N_NH4: 0, P: 0, K: 1, Mg: 5, Ca: 14, S: 4, Fe: 0.20, Mn: 0.04, Zn: 0, B: 0, Cu: 0, Si: 6, Mo: 0, Na: 8, Cl: 10 }
    },
    {
      id: "bd_khulna_satkhira",
      name_en: "🇧🇩 Khulna / Satkhira / Bagerhat Coastal Treated (উপকূলীয় পানি)",
      name_bn: "🇧🇩 খুলনা, সাতক্ষীরা ও বাগেরহাট উপকূলীয় শোধিত পানি (লবণাক্ততা সতর্কতা)",
      pH: 7.7, gh: 153, kh: 127, hco3: 155,
      ions: { N_NO3: 1.0, N_NH4: 0, P: 0, K: 5, Mg: 16, Ca: 35, S: 18, Fe: 0.10, Mn: 0.03, Zn: 0, B: 0.10, Cu: 0, Si: 5, Mo: 0, Na: 65, Cl: 95 }
    },
    {
      id: "bd_mymensingh_iron",
      name_en: "🇧🇩 Mymensingh / Jamalpur / Tangail Tube-Well (আয়রনযুক্ত পানি)",
      name_bn: "🇧🇩 ময়মনসিংহ, জামালপুর ও টাঙ্গাইল নলকূপের পানি (অধিক আয়রন)",
      pH: 7.2, gh: 118, kh: 110, hco3: 135,
      ions: { N_NO3: 1.0, N_NH4: 0, P: 0, K: 2, Mg: 10, Ca: 31, S: 7, Fe: 1.80, Mn: 0.25, Zn: 0, B: 0.02, Cu: 0, Si: 12, Mo: 0, Na: 12, Cl: 15 }
    },
    {
      id: "bd_cumilla_noakhali",
      name_en: "🇧🇩 Cumilla / Feni / Noakhali Meghna Basin Tube-Well",
      name_bn: "🇧🇩 কুমিল্লা, ফেনী ও নোয়াখালী মেঘনা অববাহিকার পানি",
      pH: 7.3, gh: 112, kh: 106, hco3: 130,
      ions: { N_NO3: 1.5, N_NH4: 0, P: 0, K: 2.5, Mg: 11, Ca: 27, S: 8, Fe: 0.35, Mn: 0.08, Zn: 0, B: 0.03, Cu: 0, Si: 9, Mo: 0, Na: 22, Cl: 30 }
    },
    {
      id: "bd_jessore_kushtia",
      name_en: "🇧🇩 Jashore / Kushtia / Chuadanga High-Ca Groundwater",
      name_bn: "🇧🇩 যশোর, কুষ্টিয়া ও চুয়াডাঙ্গা উচ্চ-ক্যালসিয়াম ভূগর্ভস্থ পানি",
      pH: 7.7, gh: 195, kh: 188, hco3: 230,
      ions: { N_NO3: 2.0, N_NH4: 0, P: 0, K: 3, Mg: 16, Ca: 52, S: 14, Fe: 0.30, Mn: 0.07, Zn: 0, B: 0.04, Cu: 0, Si: 11, Mo: 0, Na: 20, Cl: 25 }
    },
    {
      id: "bd_rangpur_dinajpur",
      name_en: "🇧🇩 Rangpur / Dinajpur / Panchagarh Teesta Basin Water",
      name_bn: "🇧🇩 রংপুর, দিনাজপুর ও পঞ্চগড় তিস্তা অববাহিকার পানি",
      pH: 7.0, gh: 78, kh: 74, hco3: 90,
      ions: { N_NO3: 1.0, N_NH4: 0, P: 0, K: 1.5, Mg: 6, Ca: 21, S: 5, Fe: 0.30, Mn: 0.05, Zn: 0, B: 0.02, Cu: 0, Si: 8, Mo: 0, Na: 9, Cl: 12 }
    },
    {
      id: "bd_barishal_river",
      name_en: "🇧🇩 Barishal / Patuakhali Filtered Canal/River Water",
      name_bn: "🇧🇩 বরিশাল ও পটুয়াখালী শোধিত নদী/খালের মিষ্টি পানি",
      pH: 7.1, gh: 85, kh: 78, hco3: 95,
      ions: { N_NO3: 2.0, N_NH4: 0, P: 0.1, K: 3, Mg: 8, Ca: 22, S: 9, Fe: 0.10, Mn: 0.02, Zn: 0, B: 0.03, Cu: 0, Si: 6, Mo: 0, Na: 18, Cl: 24 }
    },
    {
      id: "hb_wc1",
      name_en: "WC1 (HydroBuddy Default Water Profile 1)",
      name_bn: "WC1 (HydroBuddy ডিফল্ট পানির প্রোফাইল ১)",
      pH: 7.0, gh: 50, kh: 40, hco3: 50,
      ions: { N_NO3: 0, N_NH4: 0, P: 0, K: 0, Mg: 0, Ca: 20, S: 0, Fe: 0, Mn: 0, Zn: 0, B: 0, Cu: 0, Si: 0, Mo: 0, Na: 0, Cl: 0 }
    },
    {
      id: "hb_wc2",
      name_en: "WC2 (HydroBuddy Default Water Profile 2)",
      name_bn: "WC2 (HydroBuddy ডিফল্ট পানির প্রোফাইল ২)",
      pH: 7.2, gh: 83, kh: 65, hco3: 80,
      ions: { N_NO3: 5, N_NH4: 0, P: 0, K: 0, Mg: 8, Ca: 20, S: 0, Fe: 0.1, Mn: 0, Zn: 0, B: 0, Cu: 0, Si: 0, Mo: 0, Na: 0, Cl: 0 }
    }
  ]
};

if (typeof globalThis !== 'undefined') {
  globalThis.HYDROBUDDY_DB = HYDROBUDDY_DB;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HYDROBUDDY_DB;
}


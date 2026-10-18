/**
 * HydroBuddy BD — Universal Multi-Lingual Engine (i18n)
 * Supports Bangla (bn) & English (en) natively as primary languages,
 * plus built-in starter packs (Hindi, Arabic RTL, Spanish) and a
 * Universal Custom Language Studio so farmers/extension officers can add ANY language.
 */
(function (global) {
  'use strict';

  const BUILTIN_LANGUAGES = {
    bn: {
      code: 'bn',
      name: 'বাংলা (Bangla)',
      nativeName: 'বাংলা',
      dir: 'ltr',
      flag: '🇧🇩',
      defaultNativeDigits: true
    },
    en: {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      dir: 'ltr',
      flag: '🇬🇧',
      defaultNativeDigits: false
    },
    hi: {
      code: 'hi',
      name: 'हिन्दी (Hindi)',
      nativeName: 'हिन्दी',
      dir: 'ltr',
      flag: '🇮🇳',
      defaultNativeDigits: false
    },
    ar: {
      code: 'ar',
      name: 'العربية (Arabic)',
      nativeName: 'العربية',
      dir: 'rtl',
      flag: '🇸🇦',
      defaultNativeDigits: false
    },
    es: {
      code: 'es',
      name: 'Español (Spanish)',
      nativeName: 'Español',
      dir: 'ltr',
      flag: '🇪🇸',
      defaultNativeDigits: false
    }
  };

  const DIGIT_MAPS = {
    bn: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
  };

  const DICTIONARIES = {
    bn: {
      app_title: 'হাইড্রোপনিক্স স্টেপ বাই স্টেপ (Hydroponics Step by Step)',
      app_subtitle: 'বাংলাদেশি কৃষকদের জন্য পূর্ণাঙ্গ হাইড্রোপনিক্স পুষ্টি ক্যালকুলেটর, ৩টি পূর্ণাঙ্গ কোর্স ও চাষাবাদ গাইড',
      badge_open_source: 'HydroBuddy v1.100 ইঞ্জিন • অফলাইন পিডব্লিউএ • অ্যান্ড্রয়েড ও আইওএস',

      // Navigation Tabs
      nav_calculator: 'পুষ্টি ক্যালকুলেটর',
      nav_substances: 'সার ও রাসায়নিক ভাণ্ডার',
      nav_water_ph: 'পানি ও pH শোধন',
      nav_advanced: 'উন্নত টুলস (টিস্যু/অনুপাত)',
      nav_crops: 'ফসল চাষ গাইড',
      nav_doctor: 'মৌসুম ও প্ল্যান্ট ডক্টর',
      nav_academy: 'কৃষক একাডেমি',
      nav_business: 'খামার হিসাব ও লগবুক',

      // Header Controls
      btn_lang_studio: 'ভাষা স্টুডিও (Any Language)',
      btn_digits_toggle: 'সংখ্যা: বাংলা/123',
      btn_install_app: 'অ্যাপ ইনস্টল করুন',
      btn_print_recipe: 'রেসিপি প্রিন্ট / PDF',

      // Calculator Sub-modes
      calc_mode_target_to_weight: 'লক্ষ্য PPM ➔ সারের ওজন (Target to Weights)',
      calc_mode_weight_to_ppm: 'সারের ওজন ➔ বাস্তব PPM (Weights to PPM)',
      prep_direct: 'সরাসরি পানির ট্যাংক (Direct Addition)',
      prep_stock: 'ঘন স্টক সলিউশন A ও B (Concentrated Stock)',

      // Calculator Sections
      sec_preset_select: '১. ফসলের ফর্মুলা ও লক্ষ্যমাত্রা (Target Formulation)',
      lbl_select_formula: 'ফসলের রেডিমেড ফর্মুলা নির্বাচন করুন:',
      lbl_custom_formula_name: 'নতুন ফর্মুলার নাম:',
      btn_save_formula: 'ফর্মুলা সেভ করুন',
      btn_delete_formula: 'মুছুন',
      btn_reset_formula: 'রিসেট',
      lbl_conc_unit: 'ঘনত্বের একক (Unit):',
      unit_ppm: 'ppm (mg/L)',
      unit_mmol: 'mmol/L',
      unit_meq: 'meq/L',
      unit_mol: 'mol/L',
      btn_oxide_to_elemental: 'অক্সাইড ➔ মৌল রূপান্তর (P₂O₅/K₂O ➔ P/K)',

      sec_system_params: '২. পানির পরিমাণ, স্টক অনুপাত ও ইসি (EC) মডেল',
      lbl_volume: 'পানির পরিমাণ (Volume):',
      lbl_volume_unit: 'আয়তনের একক:',
      unit_liters: 'লিটার (Liters)',
      unit_gallons: 'ইউএস গ্যালন (US Gallons)',
      unit_m3: 'ঘনমিটার (Cubic Meters m³)',
      lbl_stock_volume: 'স্টক ট্যাংক A ও B প্রতিটির আয়তন (লিটার):',
      lbl_stock_factor: 'স্টক ঘনত্ব অনুপাত (১ : X):',
      lbl_stock_factor_hint: 'যেমন ১০০ মানে ১ লিটার স্টক ১০০ লিটার পানিতে মিশবে (১০ মিলি/লিটার)',
      lbl_ec_model: 'ইসি (EC) পূর্বাভাস মডেল:',
      ec_model_lmc: 'LMCv2 তাত্ত্বিক আয়নিক মডেল (ড. ফার্নান্দেজ)',
      ec_model_empirical: 'এম্পিরিক্যাল ইসি মডেল (Empirical)',
      lbl_scale_precision: 'ওজন মাপার পাল্লার সূক্ষ্মতা (± গ্রাম):',
      lbl_water_profile_active: 'ব্যবহৃত পানির উৎস:',

      sec_salt_selection: '৩. ব্যবহৃত সার ও অ্যাসিড নির্বাচন (Salts Used)',
      preset_salts_bd_standard: 'বাংলাদেশ স্ট্যান্ডার্ড ৭টি সার (সাশ্রয়ী)',
      preset_salts_bd_chelated: 'প্রিমিয়াম চিলেটেড (DTPA + EDTA)',
      preset_salts_hb_classic: 'HydroBuddy ক্লাসিক ল্যাব লবণ',
      btn_select_all_macro: 'প্রধান সার নির্বাচন',
      btn_clear_salts: 'সব আনচেক করুন',
      lbl_search_salts: 'সার খুঁজুন (নাম বা সূত্র)...',

      btn_calculate_main: 'হিসাব করুন (Calculate HydroBuddy Solver)',
      btn_ec_plus_5: 'EC +৫% বাড়ান',
      btn_ec_minus_5: 'EC -৫% কমান',

      // Results Section
      sec_results_title: '৪. ফলাফল: সারের ওজন, স্টক ট্যাংক A/B ও পুষ্টি বিশ্লেষণ',
      kpi_predicted_ec: 'আনুমানিক ইসি (Predicted EC)',
      kpi_total_cost_bdt: 'মোট খরচ (বাংলাদেশি টাকা)',
      kpi_gross_error: 'মোট বিচ্যুতি (Gross Error)',
      kpi_ionic_balance: 'ক্যাটায়ন / অ্যানায়ন ভারসাম্য',
      tank_a_title: 'ট্যাংক A (ক্যালসিয়াম ও আয়রন স্টক)',
      tank_a_desc: 'ক্যালসিয়াম নাইট্রেট, চিলেটেড আয়রন ও পটাশিয়াম নাইট্রেট (অংশ)',
      tank_b_title: 'ট্যাংক B (ফসফেট, সালফেট ও মাইক্রো স্টক)',
      tank_b_desc: 'এমকেপি, ম্যাগনেসিয়াম সালফেট, পটাশিয়াম সালফেট ও মাইক্রোনিউট্রিয়েন্ট',
      tank_0_title: 'সরাসরি ট্যাংক / অ্যাসিড (Tank 0 / Direct)',
      tank_0_desc: 'অ্যাসিড বা সিলিকেট যা আলাদাভাবে মূল ট্যাংকে মেশাতে হবে',
      col_substance: 'সার / রাসায়নিকের নাম',
      col_formula: 'সূত্র',
      col_tank: 'ট্যাংক',
      col_weight_g: 'প্রয়োজনীয় ওজন (g / mL)',
      col_weight_fine: 'সূক্ষ্ম সমন্বয় (Fine-Tune g)',
      col_scale_err: 'পাল্লার ত্রুটি (%)',
      col_cost_bdt: 'খরচ (৳)',
      col_element: 'পুষ্টি উপাদান',
      col_target_ppm: 'লক্ষ্য (Target)',
      col_water_ppm: 'পানি থেকে',
      col_achieved_ppm: 'প্রাপ্ত (Achieved)',
      col_diff_ppm: 'পার্থক্য (Diff)',
      col_diff_pct: 'ত্রুটি (%)',
      col_status: 'অবস্থা',

      status_exact: 'নিখুঁত (Exact)',
      status_close: 'গ্রহণযোগ্য (Close)',
      status_warn: 'পার্থক্য বেশি (Warning)',

      // Warnings & Compatibility
      warn_precip_ca_so4: 'সতর্কতা: একই ঘন স্টক ট্যাংকে ক্যালসিয়াম (Ca) এবং সালফেট (S) রাখা হয়েছে! জিপসাম (CaSO₄) তলানি পড়ে নজল বন্ধ হয়ে যাবে।',
      warn_precip_ca_po4: 'সতর্কতা: একই ঘন স্টক ট্যাংকে ক্যালসিয়াম (Ca) এবং ফসফেট (P) রাখা হয়েছে! ক্যালসিয়াম ফসফেট তলানি পড়বে।',
      warn_stock_solubility: 'সতর্কতা: স্টক ট্যাংকে সারের ঘনত্ব ৩০% W/V এর বেশি হয়েছে, সার সম্পূর্ণ নাও গলতে পারে। স্টক ট্যাংকের আয়তন বাড়ান বা অনুপাত কমান।',
      warn_high_nh4: 'পরামর্শ: অ্যামোনিয়াম নাইট্রোজেন (NH₄⁺) মোট নাইট্রোজেনের ২৫% এর বেশি। গরমের দিনে ব্লসম এন্ড রট ও শিকড় পচা এড়াতে এটি ১৫% এর নিচে রাখুন।',
      warn_ok_stock: 'স্টক সামঞ্জস্যতা পরীক্ষা সফল: ট্যাংক A এবং ট্যাংক B তে তলানি পড়ার কোনো ঝুঁকি নেই।',

      // Ratios & Dry Mix Label
      sec_ratios_label: 'পুষ্টি অনুপাত (Nutrient Ratios) ও ড্রাই মিক্স NPK লেবেল',
      lbl_dry_mix_npk: 'ড্রাই মিক্স সারের সমতুল্য গ্যারান্টিযুক্ত লেবেল (% W/W):',

      // Tab 2: Substances & Custom Salts
      sub_title: 'সার ও রাসায়নিকের ডাটাবেস (Substances & Custom Salts)',
      sub_subtitle: 'HydroBuddy-র মূল ৩৩টি ল্যাব রাসায়নিক + বাংলাদেশের বাজারের ১১টি বাণিজ্যিক সার। আপনি নিজের কাস্টম সারও যোগ করতে পারেন।',
      btn_add_custom_salt: '+ নতুন কাস্টম সার / অ্যাসিড যোগ করুন',
      btn_export_salts: 'ডাটাবেস এক্সপোর্ট (JSON)',
      lbl_salt_name_bn: 'সারের নাম (বাংলা):',
      lbl_salt_name_en: 'সারের নাম (English):',
      lbl_salt_formula: 'রাসায়নিক সংকেত / বিবরণ:',
      lbl_salt_purity: 'বিশুদ্ধতা (Purity %):',
      lbl_salt_price_bdt: 'মূল্য প্রতি কেজি/লিটার (৳ টাকা):',
      lbl_salt_tank: 'ডিফল্ট স্টক ট্যাংক:',
      lbl_salt_is_liquid: 'তরল অ্যাসিড / তরল সার?',
      lbl_salt_density: 'ঘনত্ব (Density g/mL):',
      lbl_salt_elements_pct: 'উপাদানের শতকরা হার (% Elemental Composition):',

      // Tab 3: Water Quality & pH
      water_title: 'পানির গুণমান ও অ্যালকালিনিটি / pH শোধন',
      water_subtitle: 'বাংলাদেশের বিভিন্ন অঞ্চলের পানির প্রোফাইল নির্বাচন করুন অথবা আপনার গভীর/অগভীর নলকূপ বা বৃষ্টির পানির রিপোর্ট ইনপুট দিন।',
      lbl_select_water_preset: 'বাংলাদেশের আঞ্চলিক পানির প্রোফাইল:',
      lbl_water_ec: 'কাঁচা পানির ইসি (Raw Water EC mS/cm):',
      lbl_water_alkalinity: 'মোট অ্যালকালিনিটি (mg/L CaCO₃ সমতুল্য):',
      lbl_target_alkalinity: 'লক্ষ্য অবশিষ্ট অ্যালকালিনিটি (Target CaCO₃ mg/L, pH 5.8 এর জন্য ~30):',
      lbl_select_acid: 'pH কমানোর অ্যাসিড নির্বাচন করুন:',
      btn_apply_water_to_calc: 'পানি ও অ্যাসিডের মান ক্যালকুলেটরে যুক্ত করুন',

      // Tab 4: Advanced Tools
      adv_tissue_title: 'পাতার টিস্যু বিশ্লেষণ ➔ পুষ্টি দ্রবণ রূপান্তরকারী (Leaf Tissue WUE Converter)',
      adv_tissue_desc: 'HydroBuddy-র Mineral Composition of Plants ডাটাবেস এবং পানি ব্যবহারের দক্ষতা (WUE g/L) ব্যবহার করে পাতার শুষ্ক ওজনের উপাদান থেকে আদর্শ PPM নির্ণয় করুন।',
      lbl_select_tissue_crop: 'ফসলের পাতার প্রোফাইল নির্বাচন করুন:',
      lbl_wue_input: 'পানি ব্যবহারের দক্ষতা (WUE - গ্রাম শুষ্ক ওজন / লিটার পানি, সাধারণ মান ৩.৫):',
      btn_load_tissue_to_calc: 'এই টিস্যু প্রোফাইলটি ক্যালকুলেটরে লোড করুন',

      adv_comm_title: 'বাণিজ্যিক রেডিমেড সার বিশ্লেষক ও তুলনাকারী (Commercial Nutrient Analyzer)',
      adv_comm_desc: 'বাজারের রেডিমেড NPK বা A+B সারের প্যাকেটের % (P₂O₅ ও K₂O সহ) থেকে প্রতি লিটারে কত PPM পাওয়া যাবে তা হিসাব করুন।',
      lbl_select_comm_preset: 'বাণিজ্যিক সারের প্রিসেট:',
      lbl_comm_dose_gl: 'মাত্রা (গ্রাম বা মিলি / প্রতি লিটার পানিতে):',
      btn_calc_comm: 'বাণিজ্যিক সারের PPM বিশ্লেষণ করুন',

      // Tab 5: Bangladesh Crop Guide
      crops_title: 'বাংলাদেশি হাইড্রোপনিক ফসল চাষাবাদ নির্দেশিকা (১২টি প্রধান ফসল)',
      crops_subtitle: 'বারি (BARI) ও আন্তর্জাতিক গবেষণা অনুযায়ী বাংলাদেশের আবহাওয়ায় ফসলভেদে EC, pH, PPM ফর্মুলা, রোপণ দূরত্ব ও ফলন।',
      btn_load_crop_formula: 'এই ফসলের ফর্মুলা ক্যালকুলেটরে লোড করুন',

      // Tab 6: Season & Plant Doctor
      doctor_season_title: 'বাংলাদেশের ৩-মৌসুম জলবায়ু নির্দেশিকা (শীত, গ্রীষ্ম ও বর্ষা)',
      doctor_diag_title: 'ইন্টারেক্টিভ প্ল্যান্ট ডক্টর: পাতার লক্ষণ দেখে পুষ্টি ঘাটতি ও রোগ নির্ণয়',
      lbl_filter_symptom_loc: 'লক্ষণের স্থান অনুযায়ী খুঁজুন:',
      loc_all: 'সব অংশ (All)',
      loc_old_leaves: 'নিচের পুরনো পাতা (Older Leaves)',
      loc_new_leaves: 'উপরের কচি পাতা ও ডগা (New Leaves / Tips)',
      loc_fruit: 'ফল ও ফুল (Fruit / Blossom)',
      loc_roots: 'শিকড় ও কাণ্ড (Roots)',

      // Tab 7: Farmer Academy
      academy_title: 'হাইড্রোপনিক্স কৃষক একাডেমি (২০টি অধ্যায়: শূন্য থেকে বাণিজ্যিক খামারি)',
      academy_subtitle: 'সহজ বাংলায় ও ইংরেজিতে হাইড্রোপনিক্সের বিজ্ঞান, সার মেশানোর নিয়ম, পিএইচ-ইসি নিয়ন্ত্রণ ও বাজারজাতকরণ।',

      // Tab 8: Business & Logbook
      biz_roi_title: 'বাণিজ্যিক খামার বাজেট ও মুনাফা ক্যালকুলেটর (BDT ROI Estimator)',
      biz_log_title: 'দৈনিক রিজার্ভার ইসি, পিএইচ ও তাপমাত্রা লগবুক (Daily Farm Logbook)',
      lbl_farm_plants: 'মোট গাছের সংখ্যা:',
      lbl_farm_setup_cost: 'প্রাথমিক অবকাঠামো খরচ (৳):',
      lbl_farm_cycles_yr: 'বছরে ফসলের চক্র (Cycles/Year):',
      lbl_farm_yield_plant: 'প্রতি গাছে গড় ফলন (গ্রাম):',
      lbl_farm_price_kg: 'গড় বিক্রয় মূল্য (৳/কেজি):',
      lbl_farm_monthly_op: 'মাসিক সার, বীজ ও বিদ্যুৎ খরচ (৳):',
      btn_add_log_entry: '+ আজকের লগ সেভ করুন',
      btn_export_logs_csv: 'লগবুক CSV ডাউনলোড করুন'
    },

    en: {
      app_title: 'Hydroponics Step by Step',
      app_subtitle: 'Complete HydroBuddy Nutrient Calculator, 3 Full Courses (50 Lessons) & BARI Farmer Guide',
      badge_open_source: 'HydroBuddy v1.100 Engine • Native iOS, Android & Web',

      nav_calculator: 'Nutrient Calculator',
      nav_substances: 'Substances & Salts DB',
      nav_water_ph: 'Water Quality & pH',
      nav_advanced: 'Advanced Tools (Tissue/Ratios)',
      nav_crops: 'BD Crop Guide',
      nav_doctor: 'Season & Plant Doctor',
      nav_academy: 'Farmer Academy',
      nav_business: 'Farm ROI & Logbook',

      btn_lang_studio: 'Language Studio (Any Language)',
      btn_digits_toggle: 'Digits: বাংলা/123',
      btn_install_app: 'Install App',
      btn_print_recipe: 'Print Recipe / PDF',

      calc_mode_target_to_weight: 'Target PPM ➔ Salt Weights (Linear Solver)',
      calc_mode_weight_to_ppm: 'Salt Weights ➔ Achieved PPM (Reverse Mode)',
      prep_direct: 'Direct Addition to Tank',
      prep_stock: 'Concentrated Stock Solutions (Tank A & B)',

      sec_preset_select: '1. Target Formulation & Nutrient Concentrations',
      lbl_select_formula: 'Select Crop Formulation Preset:',
      lbl_custom_formula_name: 'Custom Formulation Name:',
      btn_save_formula: 'Save Formula',
      btn_delete_formula: 'Delete',
      btn_reset_formula: 'Reset',
      lbl_conc_unit: 'Concentration Unit:',
      unit_ppm: 'ppm (mg/L)',
      unit_mmol: 'mmol/L',
      unit_meq: 'meq/L',
      unit_mol: 'mol/L',
      btn_oxide_to_elemental: 'Oxide ➔ Elemental Converter (P₂O₅/K₂O ➔ P/K)',

      sec_system_params: '2. Reservoir Volume, Stock Factor & EC Model',
      lbl_volume: 'Solution Volume:',
      lbl_volume_unit: 'Volume Unit:',
      unit_liters: 'Liters (L)',
      unit_gallons: 'US Gallons (gal)',
      unit_m3: 'Cubic Meters (m³)',
      lbl_stock_volume: 'Stock Tank A & B Volume Each (Liters):',
      lbl_stock_factor: 'Stock Concentration Factor (1 : X):',
      lbl_stock_factor_hint: 'e.g., 100 means 1L stock dilutes into 100L nutrient solution (10 mL/L)',
      lbl_ec_model: 'Electrical Conductivity (EC) Prediction Model:',
      ec_model_lmc: 'LMCv2 Theoretical Limiting Molar Conductivity (Dr. Fernandez)',
      ec_model_empirical: 'Empirical Regression EC Model',
      lbl_scale_precision: 'Weighing Scale Instrumental Precision (± g):',
      lbl_water_profile_active: 'Active Water Quality Source:',

      sec_salt_selection: '3. Select Fertilizers, Salts & Acids to Use',
      preset_salts_bd_standard: 'Bangladesh Standard 7 Salts (Cost-Effective)',
      preset_salts_bd_chelated: 'Premium Chelated Set (Fe-DTPA + Micro EDTA)',
      preset_salts_hb_classic: 'HydroBuddy Classic Reagent Grade',
      btn_select_all_macro: 'Select Standard Macros',
      btn_clear_salts: 'Uncheck All',
      lbl_search_salts: 'Search substance by name or formula...',

      btn_calculate_main: 'Calculate Formulation (Run HydroBuddy Solver)',
      btn_ec_plus_5: 'Scale EC +5%',
      btn_ec_minus_5: 'Scale EC -5%',

      sec_results_title: '4. Calculation Results: Salt Weights, Tank A/B Split & Elemental Match',
      kpi_predicted_ec: 'Predicted EC (mS/cm)',
      kpi_total_cost_bdt: 'Estimated Cost (BDT / USD)',
      kpi_gross_error: 'Solver Gross Error',
      kpi_ionic_balance: 'Cation / Anion Balance',
      tank_a_title: 'Tank A (Calcium & Iron Stock)',
      tank_a_desc: 'Calcium Nitrate, Iron Chelates & portion of Potassium Nitrate',
      tank_b_title: 'Tank B (Phosphate, Sulfate & Micro Stock)',
      tank_b_desc: 'MKP, Magnesium Sulfate, Potassium Sulfate & Micronutrients',
      tank_0_title: 'Direct Reservoir / Acids (Tank 0)',
      tank_0_desc: 'Acids or Silicates added directly to diluted water',
      col_substance: 'Substance / Fertilizer',
      col_formula: 'Formula',
      col_tank: 'Tank',
      col_weight_g: 'Required Weight (g / mL)',
      col_weight_fine: 'Manual Fine-Tune (g)',
      col_scale_err: 'Scale Error (%)',
      col_cost_bdt: 'Cost (৳)',
      col_element: 'Element',
      col_target_ppm: 'Target',
      col_water_ppm: 'From Water',
      col_achieved_ppm: 'Achieved',
      col_diff_ppm: 'Difference',
      col_diff_pct: 'Error (%)',
      col_status: 'Status',

      status_exact: 'Exact Match',
      status_close: 'Close Match',
      status_warn: 'Deviation',

      warn_precip_ca_so4: 'DANGER: Calcium (Ca) and Sulfate (S) are assigned to the same concentrated stock tank! Calcium Sulfate (Gypsum) will precipitate and clog drippers.',
      warn_precip_ca_po4: 'DANGER: Calcium (Ca) and Phosphate (P) are assigned to the same concentrated stock tank! Calcium Phosphate will precipitate immediately.',
      warn_stock_solubility: 'WARNING: Total salt concentration in Stock Tank exceeds 30% W/V. Salts may fail to dissolve completely. Increase stock volume or lower concentration factor.',
      warn_high_nh4: 'ADVISORY: Ammonium Nitrogen (NH₄⁺) exceeds 25% of total Nitrogen. Keep below 15% in hot Bangladeshi weather to prevent Blossom End Rot and root rot.',
      warn_ok_stock: 'Stock Compatibility Verified: Tank A and Tank B assignments are safe from CaSO₄ and Ca₃(PO₄)₂ precipitation.',

      sec_ratios_label: 'Elemental Nutrient Ratios & Dry Mix Equivalent Label',
      lbl_dry_mix_npk: 'Dry Mix Guaranteed Analysis Equivalent (% W/W):',

      sub_title: 'Substances & Custom Fertilizers Database',
      sub_subtitle: 'Includes all 33 original HydroBuddy laboratory chemicals + 11 Bangladesh commercial fertilizers & acids. Add or edit any custom fertilizer.',
      btn_add_custom_salt: '+ Add New Custom Salt / Acid',
      btn_export_salts: 'Export Database (JSON)',
      lbl_salt_name_bn: 'Name (Local / Bangla):',
      lbl_salt_name_en: 'Name (English):',
      lbl_salt_formula: 'Chemical Formula / Grade:',
      lbl_salt_purity: 'Purity (%):',
      lbl_salt_price_bdt: 'Price per kg/L (BDT ৳):',
      lbl_salt_tank: 'Default Stock Tank:',
      lbl_salt_is_liquid: 'Liquid Substance / Acid?',
      lbl_salt_density: 'Density (g/mL):',
      lbl_salt_elements_pct: 'Elemental Composition (% by weight of pure substance):',

      water_title: 'Water Quality & Alkalinity / pH Adjustment',
      water_subtitle: 'Select a regional Bangladesh water profile (Dhaka WASA, Barind Borewell, Coastal Khulna, Rainwater, RO) or enter your lab test.',
      lbl_select_water_preset: 'Regional Water Quality Preset:',
      lbl_water_ec: 'Raw Water EC (mS/cm):',
      lbl_water_alkalinity: 'Total Alkalinity (mg/L as CaCO₃):',
      lbl_target_alkalinity: 'Target Residual Alkalinity (mg/L CaCO₃, ~30 for pH 5.8):',
      lbl_select_acid: 'Select Acid for Neutralization:',
      btn_apply_water_to_calc: 'Apply Water Profile & Acid to Calculator',

      adv_tissue_title: 'Leaf Tissue Analysis ➔ Nutrient Solution Converter (WUE Model)',
      adv_tissue_desc: 'Uses Dr. Fernandez\'s Mineral Composition of Plants database and Water Use Efficiency (WUE in g dry weight/L) to derive target solution PPM.',
      lbl_select_tissue_crop: 'Select Plant Leaf Tissue Profile:',
      lbl_wue_input: 'Water Use Efficiency (WUE g/L, default 3.5):',
      btn_load_tissue_to_calc: 'Load Tissue-Derived PPM into Calculator',

      adv_comm_title: 'Commercial Nutrient Converter & Comparator',
      adv_comm_desc: 'Convert guaranteed analysis labels (% N, % P₂O₅, % K₂O, etc.) from commercial fertilizers into elemental PPM at any dosage.',
      lbl_select_comm_preset: 'Commercial Fertilizer Preset:',
      lbl_comm_dose_gl: 'Application Dosage (g or mL per Liter):',
      btn_calc_comm: 'Analyze Commercial Fertilizer PPM',

      crops_title: 'Bangladesh Hydroponic Crop Cultivation Guide (12 High-Value Crops)',
      crops_subtitle: 'BARI & Commercial greenhouse parameters for Bangladeshi climate: optimal EC, pH, target PPM, spacing, days to harvest & local cultivars.',
      btn_load_crop_formula: 'Load This Crop Formula into Calculator',

      doctor_season_title: 'Bangladesh 3-Season Climate Playbook (Rabi, Grishmo & Borsha)',
      doctor_diag_title: 'Interactive Plant Doctor: Deficiency, Toxicity & Disease Diagnostics',
      lbl_filter_symptom_loc: 'Filter by Plant Part Affected:',
      loc_all: 'All Plant Parts',
      loc_old_leaves: 'Older / Lower Leaves',
      loc_new_leaves: 'New Leaves & Growing Tips',
      loc_fruit: 'Fruits & Blossoms',
      loc_roots: 'Roots & Stem Base',

      academy_title: 'Hydroponics Farmer Academy (20 Bilingual Chapters)',
      academy_subtitle: 'Step-by-step mastery from basic Kratky bucket setup to commercial NFT/DWC automation, chemistry, and farm marketing.',

      biz_roi_title: 'Commercial Farm Budget & ROI Calculator (BDT)',
      biz_log_title: 'Daily Reservoir EC, pH & Temperature Logbook',
      lbl_farm_plants: 'Total Plant Capacity:',
      lbl_farm_setup_cost: 'Initial Setup & Infrastructure Cost (৳):',
      lbl_farm_cycles_yr: 'Crop Cycles per Year:',
      lbl_farm_yield_plant: 'Average Yield per Plant per Cycle (grams):',
      lbl_farm_price_kg: 'Average Selling Price (৳ per kg):',
      lbl_farm_monthly_op: 'Monthly Operating Cost (Nutrients, Seeds, Power ৳):',
      btn_add_log_entry: '+ Save Daily Log Entry',
      btn_export_logs_csv: 'Export Logbook CSV'
    },

    hi: {
      app_title: 'हाइड्रोबडी बीडी (HydroBuddy BD)',
      app_subtitle: 'किसानों के लिए संपूर्ण हाइड्रोपोनिक पोषक तत्व कैलकुलेटर और खेती गाइड',
      badge_open_source: 'HydroBuddy v1.100 इंजन • ऑफ़लाइन PWA • Android और iOS',
      nav_calculator: 'पोषक कैलकुलेटर',
      nav_substances: 'उर्वरक डेटाबेस',
      nav_water_ph: 'पानी और pH',
      nav_advanced: 'उन्नत उपकरण',
      nav_crops: 'फसल गाइड',
      nav_doctor: 'सीज़न और प्लांट डॉक्टर',
      nav_academy: 'किसान अकादमी',
      nav_business: 'व्यापार और लॉगबुक',
      btn_lang_studio: 'भाषा स्टूडियो (Any Language)',
      btn_calculate_main: 'गणना करें (Calculate HydroBuddy Solver)',
      kpi_predicted_ec: 'अनुमानित ईसी (Predicted EC)',
      kpi_total_cost_bdt: 'कुल लागत (Cost)',
      kpi_gross_error: 'कुल त्रुटि (Gross Error)',
      kpi_ionic_balance: 'आयनिक संतुलन'
    },

    ar: {
      app_title: 'هايدرو بادي (HydroBuddy BD)',
      app_subtitle: 'حاسبة المحاليل المغذية للزراعة المائية ودليل المزارع الشامل',
      badge_open_source: 'محرك HydroBuddy v1.100 • يعمل بدون إنترنت • أندرويد و iOS',
      nav_calculator: 'حاسبة المغذيات',
      nav_substances: 'قاعدة الأسمدة',
      nav_water_ph: 'جودة المياه و pH',
      nav_advanced: 'أدوات متقدمة',
      nav_crops: 'دليل المحاصيل',
      nav_doctor: 'المواسم وطبيب النبات',
      nav_academy: 'أكاديمية المزارع',
      nav_business: 'جدوى المزرعة والسجل',
      btn_lang_studio: 'استوديو اللغات (أي لغة)',
      btn_calculate_main: 'احسب المحلول المغذي (Calculate)',
      kpi_predicted_ec: 'التوصيل الكهربائي المتوقع (EC)',
      kpi_total_cost_bdt: 'التكلفة الإجمالية',
      kpi_gross_error: 'إجمالي الانحراف',
      kpi_ionic_balance: 'التوازن الأيوني'
    },

    es: {
      app_title: 'HydroBuddy BD — Calculadora Hidropónica y Guía',
      app_subtitle: 'Calculadora completa de soluciones nutritivas y guía de cultivo hidropónico',
      badge_open_source: 'Motor HydroBuddy v1.100 • PWA sin conexión • Android e iOS',
      nav_calculator: 'Calculadora',
      nav_substances: 'Sales y Fertilizantes',
      nav_water_ph: 'Agua y pH',
      nav_advanced: 'Herramientas Avanzadas',
      nav_crops: 'Guía de Cultivos',
      nav_doctor: 'Clima y Doctor de Plantas',
      nav_academy: 'Academia Agrícola',
      nav_business: 'Rentabilidad y Bitácora',
      btn_lang_studio: 'Estudio de Idiomas (Cualquier Idioma)',
      btn_calculate_main: 'Calcular Solución Nutritiva',
      kpi_predicted_ec: 'CE Predicha (mS/cm)',
      kpi_total_cost_bdt: 'Costo Estimado',
      kpi_gross_error: 'Error Bruto',
      kpi_ionic_balance: 'Balance Iónico'
    }
  };

  const STORAGE_KEY_LANG = 'hb_bd_active_lang';
  const STORAGE_KEY_DIGITS = 'hb_bd_use_native_digits';
  const STORAGE_KEY_CUSTOM_LANGS = 'hb_bd_custom_languages';
  const STORAGE_KEY_CUSTOM_DICT = 'hb_bd_custom_dictionaries';

  let currentLang = 'bn';
  let useNativeDigits = true;
  let customLanguages = {};
  let customDictionaries = {};
  const listeners = [];

  function loadPersistedSettings() {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
      const savedDigits = localStorage.getItem(STORAGE_KEY_DIGITS);
      const savedCustomLangs = localStorage.getItem(STORAGE_KEY_CUSTOM_LANGS);
      const savedCustomDict = localStorage.getItem(STORAGE_KEY_CUSTOM_DICT);

      if (savedCustomLangs) customLanguages = JSON.parse(savedCustomLangs) || {};
      if (savedCustomDict) customDictionaries = JSON.parse(savedCustomDict) || {};

      if (savedLang && (BUILTIN_LANGUAGES[savedLang] || customLanguages[savedLang])) {
        currentLang = savedLang;
      } else {
        currentLang = 'bn';
      }

      if (savedDigits !== null) {
        useNativeDigits = savedDigits === 'true';
      } else {
        const meta = getAllLanguages()[currentLang];
        useNativeDigits = meta ? !!meta.defaultNativeDigits : (currentLang === 'bn');
      }
    } catch (e) {
      console.warn('i18n localStorage fallback:', e);
    }
  }

  function getAllLanguages() {
    return Object.assign({}, BUILTIN_LANGUAGES, customLanguages);
  }

  function getLang() {
    return currentLang;
  }

  function isUsingNativeDigits() {
    return useNativeDigits;
  }

  function setUseNativeDigits(flag) {
    useNativeDigits = !!flag;
    try {
      localStorage.setItem(STORAGE_KEY_DIGITS, String(useNativeDigits));
    } catch (e) {}
    notifyListeners();
  }

  function toggleNativeDigits() {
    setUseNativeDigits(!useNativeDigits);
  }

  function setLang(langCode) {
    const all = getAllLanguages();
    if (!all[langCode]) return false;
    currentLang = langCode;
    if (langCode === 'bn') {
      useNativeDigits = true;
    } else if (langCode === 'en') {
      useNativeDigits = false;
    }
    try {
      localStorage.setItem(STORAGE_KEY_LANG, currentLang);
      localStorage.setItem(STORAGE_KEY_DIGITS, String(useNativeDigits));
    } catch (e) {}
    applyDocumentDirection();
    notifyListeners();
    return true;
  }

  function applyDocumentDirection() {
    if (typeof document === 'undefined') return;
    const all = getAllLanguages();
    const meta = all[currentLang] || BUILTIN_LANGUAGES.en;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = meta.dir || 'ltr';
  }

  function t(key, fallback) {
    if (customDictionaries[currentLang] && customDictionaries[currentLang][key]) {
      return customDictionaries[currentLang][key];
    }
    if (DICTIONARIES[currentLang] && DICTIONARIES[currentLang][key]) {
      return DICTIONARIES[currentLang][key];
    }
    if (currentLang !== 'en' && DICTIONARIES.en && DICTIONARIES.en[key]) {
      return DICTIONARIES.en[key];
    }
    if (DICTIONARIES.bn && DICTIONARIES.bn[key]) {
      return DICTIONARIES.bn[key];
    }
    return fallback !== undefined ? fallback : key;
  }

  /**
   * Resolves localized property on any data object (e.g., formula, salt, crop guide).
   * Supports arbitrary languages: checks obj[`${field}_${lang}`], then custom dictionary overrides,
   * then falls back to `en` (for international languages) or `bn` (when lang === 'bn').
   */
  function tObj(obj, field) {
    if (!obj) return '';
    const langKey = `${field}_${currentLang}`;
    if (obj[langKey] !== undefined && obj[langKey] !== '') {
      return obj[langKey];
    }
    // Check if user defined a custom translation for this object ID + field
    if (obj.id && customDictionaries[currentLang]) {
      const customObjKey = `obj.${obj.id}.${field}`;
      if (customDictionaries[currentLang][customObjKey]) {
        return customDictionaries[currentLang][customObjKey];
      }
    }
    if (currentLang === 'bn' && obj[`${field}_bn`]) {
      return obj[`${field}_bn`];
    }
    if (obj[`${field}_en`]) {
      return obj[`${field}_en`];
    }
    if (obj[field]) {
      return obj[field];
    }
    if (obj[`${field}_bn`]) {
      return obj[`${field}_bn`];
    }
    return '';
  }

  /**
   * Formats numbers with optional Bangla digits when enabled
   */
  function fmtNum(val, decimals = 2) {
    if (val === null || val === undefined || Number.isNaN(Number(val))) return '—';
    const num = Number(val);
    let str = decimals !== null ? num.toFixed(decimals) : String(num);
    // Remove unnecessary trailing zeros if decimals > 0, except keep at least 1 decimal for EC
    if (decimals > 0 && str.includes('.')) {
      str = str.replace(/\.?0+$/, '');
      if (str === '-0') str = '0';
    }
    if (useNativeDigits && DIGIT_MAPS.bn) {
      const map = DIGIT_MAPS.bn;
      str = str.replace(/[0-9]/g, d => map[Number(d)]);
    }
    return str;
  }

  function toAsciiDigits(str) {
    if (typeof str !== 'string') return String(str || '');
    return str
      .replace(/[০-৯]/g, d => String('০১২৩৪৫৬৭৮৯'.indexOf(d)))
      .replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
  }

  /**
   * Add or update a custom language in the Universal Language Studio
   */
  function registerCustomLanguage(meta, dictOverrides = {}) {
    if (!meta || !meta.code || !meta.name) return false;
    const code = meta.code.trim().toLowerCase();
    customLanguages[code] = {
      code,
      name: meta.name,
      nativeName: meta.nativeName || meta.name,
      dir: meta.dir === 'rtl' ? 'rtl' : 'ltr',
      flag: meta.flag || '🌐',
      defaultNativeDigits: !!meta.defaultNativeDigits,
      isCustom: true
    };
    customDictionaries[code] = Object.assign({}, customDictionaries[code] || {}, dictOverrides);
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_LANGS, JSON.stringify(customLanguages));
      localStorage.setItem(STORAGE_KEY_CUSTOM_DICT, JSON.stringify(customDictionaries));
    } catch (e) {}
    notifyListeners();
    return true;
  }

  function updateTranslationKey(langCode, key, value) {
    if (!customDictionaries[langCode]) customDictionaries[langCode] = {};
    customDictionaries[langCode][key] = value;
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_DICT, JSON.stringify(customDictionaries));
    } catch (e) {}
    notifyListeners();
  }

  function exportLanguagePack(langCode) {
    const allLangs = getAllLanguages();
    const meta = allLangs[langCode] || { code: langCode, name: langCode, dir: 'ltr' };
    const baseDict = Object.assign(
      {},
      DICTIONARIES.en,
      DICTIONARIES[langCode] || {},
      customDictionaries[langCode] || {}
    );
    return {
      schema: 'hydrobuddy-bd-langpack-v1',
      meta,
      dictionary: baseDict
    };
  }

  function importLanguagePack(packJson) {
    const pack = typeof packJson === 'string' ? JSON.parse(packJson) : packJson;
    if (!pack || !pack.meta || !pack.meta.code || !pack.dictionary) {
      throw new Error('Invalid language pack format');
    }
    registerCustomLanguage(pack.meta, pack.dictionary);
    setLang(pack.meta.code.toLowerCase());
    return pack.meta.code.toLowerCase();
  }

  function getBaseKeys() {
    return Object.keys(DICTIONARIES.en);
  }

  function onChange(cb) {
    if (typeof cb === 'function') listeners.push(cb);
  }

  function notifyListeners() {
    listeners.forEach(cb => {
      try {
        cb(currentLang, useNativeDigits);
      } catch (e) {
        console.error(e);
      }
    });
  }

  loadPersistedSettings();

  global.I18N = {
    t,
    tObj,
    fmtNum,
    toAsciiDigits,
    getLang,
    setLang,
    isUsingNativeDigits,
    setUseNativeDigits,
    toggleNativeDigits,
    getAllLanguages,
    registerCustomLanguage,
    updateTranslationKey,
    exportLanguagePack,
    importLanguagePack,
    getBaseKeys,
    onChange,
    applyDocumentDirection,
    DICTIONARIES
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = global.I18N;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : global));


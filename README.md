# Hydroponics-Step-by-Step

**হাইড্রোপনিক্স স্টেপ বাই স্টেপ (Hydroponics Step by Step)** — A 100% ad-free, offline-ready native cross-platform application (**Android**, **iOS**, and **Web**) for Bangladeshi and global hydroponic farmers, built on Dr. Daniel Fernandez's open-source [HydroBuddy](https://github.com/danielfppps/hydrobuddy) stoichiometric solver and the **Bangladesh Agricultural Research Institute (BARI)** hydroponic guidelines.

---

## 🌟 Key Features

### 1. 🧪 16-Element HydroBuddy Stoichiometric Nutrient Calculator
- **Target Formulation -> Salt Weights Solver**: Non-negative least-squares & priority-cascade solver across all 16 essential elements ($\text{NO}_3^-\text{-N}$, $\text{NH}_4^+\text{-N}$, $\text{P}$, $\text{K}$, $\text{Mg}$, $\text{Ca}$, $\text{S}$, $\text{Fe}$, $\text{Mn}$, $\text{Zn}$, $\text{B}$, $\text{Cu}$, $\text{Si}$, $\text{Mo}$, $\text{Na}$, $\text{Cl}$).
- **Direct Addition & Concentrated Stock Tank A + B Modes**: Automatically separates Calcium/Iron salts (Tank A) from Sulfate/Phosphate salts (Tank B) to prevent Gypsum ($\text{CaSO}_4$) and Calcium Phosphate precipitation.
- **Reverse Solver (Weights -> PPM & EC)**, **EC Prediction (Limiting Molar Conductivity)**, and **Scale Precision / Micro-Substock Alerts**.

### 2. 🎓 Farmer Academy — All 3 Complete Website Courses + BARI Book + Case Studies + Quiz
Bundled 100% offline inside [`src/data/website-courses.js`](./src/data/website-courses.js) and [`src/screens/AcademyScreen.js`](./src/screens/AcademyScreen.js):
- **Course 1: Beginner Hydroponics Step-by-Step** — 15 Full Lessons (`Lesson 1.01` – `Lesson 1.15`)
- **Course 2: Intermediate Commercial Systems & Crops** — 15 Full Lessons (`Lesson 2.01` – `Lesson 2.15`)
- **Course 3: Advanced Masterclass — Science & Nutrient Chemistry** — 20 Full Lessons (`Lesson 3.01` – `Lesson 3.20`)
- **BARI Hydroponics Official Digital Handbook** — 11 Full Chapters (`Front Matter` + `Chapters 1–9`)
- **Bangladesh Hydroponics Farmer Success Stories** — 10 Regional Case Studies
- **Quick Bilingual Field Notes (20 Notes)** & **25-Question Interactive Certification Quiz**

### 3. 🧂 44 Fertilizers, Salts & Chelates + Custom Substance Builder
- Full molar mass, elemental % composition, solubility, and local Bangladesh market prices (`৳ BDT/kg`).
- Add and save your own custom fertilizers or commercial blends.

### 4. 💧 12 Bangladesh Regional Water Profiles & Acid pH Titration
- Pre-configured water profiles for Dhaka WASA, Rajshahi/Bogura Hard Tube-Well, Khulna/Satkhira Coastal Brackish Water, Sylhet Tea-Belt Soft Water, Barishal River Canal, Rainwater, and RO Water.
- Calculates exact $\text{mL/L}$ of Nitric, Phosphoric, Sulfuric, or Citric acid to neutralize Bicarbonate ($\text{HCO}_3^-$) alkalinity and credits the resulting $\text{N}$, $\text{P}$, or $\text{S}$ to your nutrient formula.

### 5. 🌱 40+ Crop Profiles, 🩺 Plant Deficiency Doctor & 📒 BDT Farm Logbook
- Step-by-step cultivation guides, EC/pH targets, 12-month Bangladesh seasonal calendar, interactive symptom-based deficiency diagnostics, daily reservoir logbook with CSV export, and commercial BDT ROI calculator.

### 6. 🌐 Universal Multi-Language Engine
- Built-in support for **Bangla (`বাংলা`)**, **English**, **Hindi (`हिन्दी`)**, **Arabic (`العربية` RTL)**, and **Spanish (`Español`)**, plus an in-app **Language Studio** to add or import/export any custom language JSON pack and toggle native Bangla digits (`১২৩` / `123`).

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run Web App
npm run web

# Run Native Android
npm run android

# Run Native iOS
npm run ios
```

---

## 🛡️ Privacy & License
- **100% Ad-Free & Zero Data Collection**: No ads, no tracking SDKs, no account login required.
- **Privacy Policy**: [https://hydroponics.com.bd/privacy-policy/](https://hydroponics.com.bd/privacy-policy/)
- **License**: GPL-3.0 (following Dr. Daniel Fernandez's HydroBuddy open-source license).

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import HYDROGUIDE_DATA from '../data/guide-data';
import WEBSITE_COURSES from '../data/website-courses';
import I18N from '../engine/i18n';
import {
  COLORS,
  Card,
  SectionTitle,
  Field,
  Btn,
  Badge,
  Chip,
  styles as uiStyles
} from '../components/ui';

const ACADEMY_QUIZ = [
  { id: 1, q_bn: '১. বেশিরভাগ হাইড্রোপনিক সবজির (লেটুস, টমেটো, শসা) জন্য আদর্শ pH সীমা কত?', q_en: '1. What is the ideal nutrient solution pH range for most hydroponic vegetables?', opts_bn: ['pH ৩.৫ – ৪.৫', 'pH ৫.৫ – ৬.৫', 'pH ৭.৫ – ৮.৫', 'pH ৮.৫ – ৯.৫'], opts_en: ['pH 3.5 – 4.5', 'pH 5.5 – 6.5', 'pH 7.5 – 8.5', 'pH 8.5 – 9.5'], ans: 1 },
  { id: 2, q_bn: '২. ঘন স্টক সলিউশন A (ক্যালসিয়াম নাইট্রেট) এবং B (সালফেট/ফসফেট) একসাথে সরাসরি মেশালে কী ঘটে?', q_en: '2. What happens if concentrated Stock A (Calcium Nitrate) and Stock B (Sulfates/Phosphates) are mixed directly?', opts_bn: ['সারের শক্তি দ্বিগুণ হয়', 'অদ্রবণীয় জিপসাম (CaSO₄) ও ক্যালসিয়াম ফসফেট তলানি পড়ে সার নষ্ট হয়', 'পানি ঠান্ডা হয়', 'কোনো পরিবর্তন হয় না'], opts_en: ['Nutrient strength doubles', 'Insoluble Gypsum (CaSO4) & Calcium Phosphate precipitate out', 'Water cools down', 'Nothing happens'], ans: 1 },
  { id: 3, q_bn: '৩. বাগেরহাট বা স্বরূপকাঠির কাঁচা কোকোপিট ব্যবহারের আগে কত EC-এর নিচে নামিয়ে ধুয়ে নিতে হয়?', q_en: '3. Below what EC level should raw Bangladeshi cocopeat be washed before buffering and planting?', opts_bn: ['EC ০.৪ mS/cm-এর নিচে', 'EC ৩.০ mS/cm', 'EC ৫.০ mS/cm', 'ধোয়ার প্রয়োজন নেই'], opts_en: ['Below EC 0.4 mS/cm', 'EC 3.0 mS/cm', 'EC 5.0 mS/cm', 'No washing needed'], ans: 0 },
  { id: 4, q_bn: '৪. টমেটো ও ক্যাপসিকাম ফলের নিচের অংশ কালো হয়ে পচে যাওয়া (Blossom End Rot) কোন উপাদানের অভাবে হয়?', q_en: '4. Blossom End Rot (black sunken base on tomato/capsicum fruit) is caused by a deficiency of which element?', opts_bn: ['নাইট্রোজেন (N)', 'ক্যালসিয়াম (Ca)', 'মলিবডেনাম (Mo)', 'ক্লোরিন (Cl)'], opts_en: ['Nitrogen (N)', 'Calcium (Ca)', 'Molybdenum (Mo)', 'Chlorine (Cl)'], ans: 1 },
  { id: 5, q_bn: '৫. লেটুস ও শাকসবজি চাষের জন্য আদর্শ EC মাত্রা কত?', q_en: '5. What is the ideal EC range for hydroponic lettuce and leafy greens?', opts_bn: ['০.১ – ০.৩ mS/cm', '১.২ – ১.৬ mS/cm', '৩.৫ – ৪.৫ mS/cm', '৬.০ mS/cm'], opts_en: ['0.1 – 0.3 mS/cm', '1.2 – 1.6 mS/cm', '3.5 – 4.5 mS/cm', '6.0 mS/cm'], ans: 1 },
  { id: 6, q_bn: '৬. বাংলাদেশের নলকূপের পানির জন্য সবচেয়ে কার্যকর চিলেটেড আয়রন (pH ৭.২ পর্যন্ত স্থায়ী) কোনটি?', q_en: '6. Which iron chelate remains stable up to pH 7.2 and is best suited for Bangladesh tube-well water?', opts_bn: ['Fe-EDTA', 'Fe-DTPA', 'ফেরাস সালফেট', 'লোহার গুঁড়া'], opts_en: ['Fe-EDTA', 'Fe-DTPA', 'Ferrous Sulfate', 'Iron filings'], ans: 1 },
  { id: 7, q_bn: '৭. গাছের নতুন কচি পাতা হলুদ হয়ে যাওয়া কিন্তু শিরাগুলো সবুজ থাকা (Interveinal Chlorosis) কোন উপাদানের অভাব?', q_en: '7. Yellowing between veins on the newest upper leaves while veins stay green indicates deficiency of:', opts_bn: ['আয়রন (Fe)', 'নাইট্রোজেন (N)', 'পটাশিয়াম (K)', 'ফসফরাস (P)'], opts_en: ['Iron (Fe)', 'Nitrogen (N)', 'Potassium (K)', 'Phosphorus (P)'], ans: 0 },
  { id: 8, q_bn: '৮. ক্রাটকি (Kratky) পদ্ধতিতে শিকড়ের অক্সিজেন গ্রহণের জন্য ট্যাংকের ওপরে কতটুকু খালি জায়গা (Air Gap) রাখতে হয়?', q_en: '8. In a passive non-circulating Kratky box, how much air gap must be left below the net cup for oxygen roots?', opts_bn: ['কোনো ফাঁকা জায়গা লাগে না', '৪–৫ সেন্টিমিটার (১.৫–২ ইঞ্চি)', '৫০ সেন্টিমিটার', 'পুরো ট্যাংক খালি'], opts_en: ['No air gap needed', '4–5 cm (1.5–2 inches)', '50 cm', 'Entire tank empty'], ans: 1 },
  { id: 9, q_bn: '৯. ডাচ বাকেট (Dutch Bucket) পদ্ধতিতে কোন ফসলগুলো সবচেয়ে ভালো হয়?', q_en: '9. Which crops perform best in a Dutch Bucket (Bato Bucket) drip system?', opts_bn: ['লেটুস ও পুদিনা', 'টমেটো, ক্যাপসিকাম, শসা ও রক মেলন', 'মাইক্রোগ্রিনস', 'ধান'], opts_en: ['Lettuce & Mint', 'Tomato, Capsicum, Cucumber & Rockmelon', 'Microgreens', 'Rice'], ans: 1 },
  { id: 10, q_bn: '১০. গরমের দিনে পানির তাপমাত্রা কত ডিগ্রির ওপরে উঠলে পানিতে দ্রবীভূত অক্সিজেন কমে পিথিয়াম (Pythium) শিকড় পচা রোগ হয়?', q_en: '10. Above what root-zone water temperature does Dissolved Oxygen drop sharply and trigger Pythium root rot?', opts_bn: ['১৮°সে', '২২°সে', '২৯°সে-এর ওপরে', '১৫°সে'], opts_en: ['18°C', '22°C', 'Above 29°C', '15°C'], ans: 2 },
  { id: 11, q_bn: '১১. ১.০ mS/cm EC সমান ৫০০-স্কেল TDS মিটারে কত ppm?', q_en: '11. What does 1.0 mS/cm EC equal on a standard 500-scale TDS meter?', opts_bn: ['১০০ ppm', '৫০০ ppm', '১০০০ ppm', '২৫০০ ppm'], opts_en: ['100 ppm', '500 ppm', '1000 ppm', '2500 ppm'], ans: 1 },
  { id: 12, q_bn: '১২. কোকোপিট বাফারিং করার জন্য প্রতি লিটার পানিতে কত গ্রাম ক্যালসিয়াম নাইট্রেট গুলে ১২–২৪ ঘণ্টা ভিজিয়ে রাখতে হয়?', q_en: '12. How many grams per liter of Calcium Nitrate are used to buffer washed cocopeat for 12–24 hours?', opts_bn: ['০.১ গ্রাম/লিটার', '৫ গ্রাম/লিটার', '১০০ গ্রাম/লিটার', '৫০০ গ্রাম/লিটার'], opts_en: ['0.1 g/L', '5 g/L', '100 g/L', '500 g/L'], ans: 1 },
  { id: 13, q_bn: '১৩. হাইড্রোপনিক পুষ্টি দ্রবণে অ্যামোনিয়াম নাইট্রোজেন (NH₄⁺) মোট নাইট্রোজেনের কত শতাংশের নিচে রাখা নিরাপদ?', q_en: '13. Below what percentage of total Nitrogen should Ammonium (NH4+) be kept in warm hydroponic climates?', opts_bn: ['১০–১৫%-এর নিচে', '৫০%', '৮০%', '১০০%'], opts_en: ['Below 10–15%', '50%', '80%', '100%'], ans: 0 },
  { id: 14, q_bn: '১৪. কোন সারটি স্টক ট্যাংক A-তে ক্যালসিয়াম নাইট্রেটের সাথে রাখা যায়?', q_en: '14. Which micronutrient fertilizer can safely be placed in Stock Tank A alongside Calcium Nitrate?', opts_bn: ['ম্যাগনেসিয়াম সালফেট (ইপসম লবণ)', 'মনোপটাশিয়াম ফসফেট (MKP)', 'চিলেটেড আয়রন (Fe-DTPA / Fe-EDTA) ও পটাশিয়াম নাইট্রেট', 'পটাশিয়াম সালফেট'], opts_en: ['Magnesium Sulfate (Epsom Salt)', 'Monopotassium Phosphate (MKP)', 'Chelated Iron (Fe-DTPA/EDTA) & Potassium Nitrate', 'Potassium Sulfate'], ans: 2 },
  { id: 15, q_bn: '১৫. ডাচ বাকেটে কোকোপিটে লবণ জমা রোধে প্রতিদিন প্রয়োগকৃত পানির কত শতাংশ নিচ দিয়ে ড্রেন (Runoff) হতে দিতে হয়?', q_en: '15. What percentage of daily drip irrigation volume should drain out as runoff in Dutch Buckets to prevent salt buildup?', opts_bn: ['০%', '১৫–২০%', '৮০%', '১০০%'], opts_en: ['0%', '15–20%', '80%', '100%'], ans: 1 },
  { id: 16, q_bn: '১৬. NFT পাইপে পুষ্টি দ্রবণের প্রবাহের হার (Flow Rate) প্রতি চ্যানেলে মিনিটে কত লিটার হওয়া উচিত?', q_en: '16. What is the recommended nutrient flow rate per gully channel in an NFT system?', opts_bn: ['১–২ লিটার/মিনিট', '০.০১ লিটার/মিনিট', '৫০ লিটার/মিনিট', 'প্রবাহ লাগে না'], opts_en: ['1–2 Liters/minute', '0.01 Liters/minute', '50 Liters/minute', 'No flow needed'], ans: 0 },
  { id: 17, q_bn: '১৭. NFT চ্যানেলের ঢাল (Slope) সাধারণত কত অনুপাতে রাখা হয়?', q_en: '17. What channel slope gradient is standard for NFT gullies so a thin oxygenated film flows smoothly?', opts_bn: ['১:৩০ থেকে ১:৪০ (২.৫% – ৩%)', 'সমতল (০%)', '৯০ ডিগ্রি খাড়া', '১:২'], opts_en: ['1:30 to 1:40 (2.5% – 3%)', 'Flat (0%)', '90 degrees vertical', '1:2'], ans: 0 },
  { id: 18, q_bn: '১৮. পুরনো নিচের পাতার শিরা সবুজ থেকে পাতা হলুদ হয়ে যাওয়া কোন সচল (Mobile) উপাদানের অভাব নির্দেশ করে?', q_en: '18. Interveinal chlorosis starting on older lower leaves (often with reddish/purple spots) indicates deficiency of:', opts_bn: ['ম্যাগনেসিয়াম (Mg)', 'বোরন (B)', 'ক্যালসিয়াম (Ca)', 'সালফার (S)'], opts_en: ['Magnesium (Mg)', 'Boron (B)', 'Calcium (Ca)', 'Sulfur (S)'], ans: 0 },
  { id: 19, q_bn: '১৯. পানির ক্ষারত্ব (Alkalinity / HCO₃⁻) কমানোর জন্য এবং pH কমানোর জন্য কোন এসিড ব্যবহার করা হয়?', q_en: '19. Which acids are safely used in hydroponics to neutralize water bicarbonate alkalinity and lower pH?', opts_bn: ['নাইট্রিক এসিড বা ফসফরিক এসিড', 'হাইড্রোক্লোরিক এসিড (মিউরিয়েটিক)', 'ব্যাটারির অশোধিত এসিড', 'ভিনেগার'], opts_en: ['Nitric Acid or Food-Grade Phosphoric Acid', 'Muriatic / Hydrochloric Acid', 'Crude battery acid', 'Household vinegar'], ans: 0 },
  { id: 20, q_bn: '২০. ইনডিটারমিনেট টমেটো ও ক্যাপসিকাম গাছে কখন ফুলের পরাগায়ন (Pollination) করা সবচেয়ে ভালো?', q_en: '20. When is the best time of day to vibrate/pollinate greenhouse tomato and capsicum flowers?', opts_bn: ['সকাল ৯:৩০ – ১১:৩০টার মধ্যে', 'মাঝরাতে', 'বৃষ্টি ভেজা সন্ধ্যায়', 'পরাগায়ন লাগে না'], opts_en: ['Between 9:30 AM – 11:30 AM', 'At midnight', 'During humid rainy evenings', 'No pollination needed'], ans: 0 },
  { id: 21, q_bn: '২১. সাদা মাছি (Whitefly) ও জাব পোকা (Aphid) দমনের জন্য গ্রিনহাউসে কোন রঙের আঠালো ফাঁদ ব্যবহার করা হয়?', q_en: '21. Which color sticky trap attracts Whiteflies and Aphids inside a hydroponic polyhouse?', opts_bn: ['হলুদ আঠালো ফাঁদ (Yellow Sticky Trap)', 'কালো ফাঁদ', 'লাল ফাঁদ', 'সবুজ ফাঁদ'], opts_en: ['Yellow Sticky Trap', 'Black trap', 'Red trap', 'Green trap'], ans: 0 },
  { id: 22, q_bn: '২২. থ্রিপস (Thrips) পোকা দমনের জন্য কোন রঙের আঠালো ফাঁদ সবচেয়ে কার্যকর?', q_en: '22. Which color sticky trap specifically attracts Thrips in capsicum and strawberry crops?', opts_bn: ['নীল আঠালো ফাঁদ (Blue Sticky Trap)', 'সাদা ফাঁদ', 'বাদামী ফাঁদ', 'ধূসর ফাঁদ'], opts_en: ['Blue Sticky Trap', 'White trap', 'Brown trap', 'Grey trap'], ans: 0 },
  { id: 23, q_bn: '২৩. রক মেলন বা সাম্মাম পাকার ১০–১৪ দিন আগে ফলের মিষ্টতা (Brix) বাড়ানোর জন্য কোন উপাদান বাড়ানো হয়?', q_en: '23. Which nutrient is boosted during the final 10–14 days of Rockmelon ripening to maximize sugar Brix?', opts_bn: ['পটাশিয়াম সালফেট (K ও S)', 'ইউরিয়া', 'অতিরিক্ত অ্যামোনিয়াম', 'সোডিয়াম ক্লোরাইড'], opts_en: ['Potassium Sulfate (K & S)', 'Urea', 'Excess Ammonium', 'Sodium Chloride'], ans: 0 },
  { id: 24, q_bn: '২৪. স্ট্রবেরি চারা কোকোপিটে লাগানোর সময় মুকুট (Crown) কোথায় থাকতে হবে?', q_en: '24. Where must the strawberry crown be positioned when planting into cocopeat or net pots?', opts_bn: ['কোকোপিটের উপরিভাগের সমান্তরালে (মাটির নিচে চাপা পড়বে না)', '১০ সেমি গভীরে মাটির নিচে', 'শিকড় বাইরে রেখে', 'পানির নিচে ডুবিয়ে'], opts_en: ['Flush with media surface (never buried or submerged)', 'Buried 10 cm deep', 'With roots exposed in air', 'Submerged underwater'], ans: 0 },
  { id: 25, q_bn: '২৫. লেটুস সংগ্রহের পর বাজারে ৭ দিন সতেজ রাখার সর্বোত্তম উপায় কী?', q_en: '25. What post-harvest technique keeps hydroponic lettuce crisp for up to 7 days in Dhaka supershops?', opts_bn: ['ভোরবেলা শিকড়সহ (Root-ball intact) সংগ্রহ ও প্রি-কুলিং করে ছিদ্রযুক্ত ফুড-গ্রেড ব্যাগে প্যাকিং', 'দুপুর রোদে কেটে বস্তায় ভরা', 'গরম পানিতে ধোয়া', 'রোদে শুকানো'], opts_en: ['Harvest at dawn with root-ball intact, pre-cool, and pack in ventilated clamshell/PP bags', 'Harvest at midday in sacks', 'Wash in warm water', 'Dry in direct sun'], ans: 0 }
];

export default function AcademyScreen({ onNavigateTab }) {
  const [activeTrackId, setActiveTrackId] = useState('course1');
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [completedIds, setCompletedIds] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [search, setSearch] = useState('');

  const isBn = I18N.getLang() === 'bn';
  const tracks = WEBSITE_COURSES.tracks || [];
  const activeTrack = tracks.find(tr => tr.id === activeTrackId) || tracks[0];

  const toggleComplete = id => {
    setCompletedIds(prev => Object.assign({}, prev, { [id]: !prev[id] }));
  };

  const q = search.trim().toLowerCase();

  // If searching across all courses
  const allLessonsFlat = [];
  tracks.forEach(tr => {
    (tr.lessons || []).forEach(ls => {
      allLessonsFlat.push(Object.assign({}, ls, { trackTitle: isBn ? tr.titleBn : tr.titleEn, trackColor: tr.color }));
    });
  });

  const currentLessons = q
    ? allLessonsFlat.filter(ls =>
        `${ls.code} ${ls.title} ${ls.subtitle} ${ls.keyFormula}`.toLowerCase().includes(q)
      )
    : activeTrack?.lessons || [];

  const activeLesson = selectedLessonId
    ? allLessonsFlat.find(ls => ls.id === selectedLessonId)
    : null;

  // Find Prev / Next inside the same course track
  let prevLesson = null;
  let nextLesson = null;
  if (activeLesson) {
    const parentTrack = tracks.find(tr => tr.id === activeLesson.courseId);
    if (parentTrack && parentTrack.lessons) {
      const idx = parentTrack.lessons.findIndex(l => l.id === activeLesson.id);
      if (idx > 0) prevLesson = parentTrack.lessons[idx - 1];
      if (idx >= 0 && idx < parentTrack.lessons.length - 1) {
        nextLesson = parentTrack.lessons[idx + 1];
      }
    }
  }

  return (
    <View>
      {/* Top Overview Header & Course Track Selector */}
      <Card>
        <SectionTitle
          subtitle={
            isBn
              ? 'কোর্স ১ (১৫টি পাঠ) • কোর্স ২ (১৫টি পাঠ) • কোর্স ৩ (২০টি পাঠ) • বারি হ্যান্ডবুক (১১টি অধ্যায়) • সফলতার গল্প (১০টি) • কুইজ (২৫টি প্রশ্ন)'
              : 'Course 1 (15 Lessons) • Course 2 (15 Lessons) • Course 3 (20 Lessons) • BARI Book (11 Chapters) • Success Stories (10) • Quiz (25 Qs)'
          }
        >
          {isBn
            ? '🎓 হাইড্রোপনিক্স স্টেপ-বাই-স্টেপ একাডেমি (৩টি পূর্ণাঙ্গ কোর্স, বারি গাইড ও কুইজ)'
            : '🎓 Hydroponics Step by Step Academy — 3 Website Courses, BARI Book & Quiz'}
        </SectionTitle>

        {/* Course Selector Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 12 }}
        >
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {tracks.map(tr => {
              const isSelected = tr.id === activeTrackId && !q;
              const doneCount = (tr.lessons || []).filter(l => completedIds[l.id]).length;
              const totalCount = (tr.lessons || []).length;
              return (
                <TouchableOpacity
                  key={tr.id}
                  onPress={() => {
                    setSearch('');
                    setActiveTrackId(tr.id);
                    setSelectedLessonId(null);
                  }}
                  style={[
                    localStyles.trackCard,
                    isSelected && {
                      borderColor: tr.color || COLORS.g700,
                      backgroundColor: '#f0fdf4'
                    }
                  ]}
                >
                  <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 4 }]}>
                    <Text style={{ fontSize: 20 }}>{tr.icon}</Text>
                    <Badge
                      text={`${doneCount}/${totalCount}`}
                      tone={doneCount === totalCount && totalCount > 0 ? 'green' : 'blue'}
                    />
                  </View>
                  <Text style={localStyles.trackBadge}>{tr.badge}</Text>
                  <Text style={localStyles.trackTitle} numberOfLines={2}>
                    {isBn ? tr.titleBn : tr.titleEn}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              onPress={() => {
                setSearch('');
                setActiveTrackId('quick_bn');
                setSelectedLessonId(null);
              }}
              style={[
                localStyles.trackCard,
                activeTrackId === 'quick_bn' && !q && {
                  borderColor: COLORS.g700,
                  backgroundColor: '#f0fdf4'
                }
              ]}
            >
              <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 4 }]}>
                <Text style={{ fontSize: 20 }}>🇧🇩</Text>
                <Badge text="20 Notes" tone="green" />
              </View>
              <Text style={localStyles.trackBadge}>Quick Field Guide</Text>
              <Text style={localStyles.trackTitle} numberOfLines={2}>
                {isBn ? 'সংক্ষিপ্ত মাঠ নির্দেশিকা (২০টি পাঠ)' : 'Quick Bilingual Field Notes (20)'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSearch('');
                setActiveTrackId('quiz');
                setSelectedLessonId(null);
              }}
              style={[
                localStyles.trackCard,
                activeTrackId === 'quiz' && !q && {
                  borderColor: COLORS.g700,
                  backgroundColor: '#f0fdf4'
                }
              ]}
            >
              <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 4 }]}>
                <Text style={{ fontSize: 20 }}>🏆</Text>
                <Badge text="25 Qs" tone="amber" />
              </View>
              <Text style={localStyles.trackBadge}>Certification Exam</Text>
              <Text style={localStyles.trackTitle} numberOfLines={2}>
                {isBn ? 'সার্টিফিকেশন কুইজ পরীক্ষা (২৫টি প্রশ্ন)' : '25-Question Certification Quiz'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Field
          placeholder={
            isBn
              ? 'যেকোনো পাঠ বা বিষয় খুঁজুন (যেমন: Kratky, NFT, EC, pH, Tomato, Cocopeat)...'
              : 'Search across all 3 courses, BARI chapters & case studies (e.g. Kratky, NFT, pH, Tomato)...'
          }
          value={search}
          onChangeText={txt => {
            setSearch(txt);
            if (txt.trim()) setSelectedLessonId(null);
          }}
        />
      </Card>

      {/* Active Lesson Full Reader View */}
      {activeLesson ? (
        <Card>
          <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }]}>
            <Btn
              small
              variant="secondary"
              title={isBn ? '← কোর্সের তালিকায় ফিরে যান' : '← Back to Course Syllabus'}
              onPress={() => setSelectedLessonId(null)}
            />
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <Btn
                small
                variant={completedIds[activeLesson.id] ? 'primary' : 'secondary'}
                title={
                  completedIds[activeLesson.id]
                    ? isBn
                      ? '✓ সম্পন্ন হয়েছে'
                      : '✓ Completed'
                    : isBn
                    ? '○ সম্পন্ন হিসেবে চিহ্নিত করুন'
                    : '○ Mark Complete'
                }
                onPress={() => toggleComplete(activeLesson.id)}
              />
              {onNavigateTab ? (
                <Btn
                  small
                  variant="secondary"
                  title={isBn ? '🧪 ক্যালকুলেটর খুলুন' : '🧪 Open Calculator'}
                  onPress={() => onNavigateTab('calc')}
                />
              ) : null}
            </View>
          </View>

          {/* Lesson Hero Banner */}
          <View style={localStyles.heroBanner}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
              <View style={localStyles.heroPill}>
                <Text style={localStyles.heroPillTxt}>
                  {activeLesson.code || 'Lesson'}
                </Text>
              </View>
              <View style={localStyles.heroPillLight}>
                <Text style={localStyles.heroPillLightTxt}>
                  ⏱ {activeLesson.readTime || '12 Min Read'}
                </Text>
              </View>
            </View>
            <Text style={localStyles.heroTitle}>{activeLesson.title}</Text>
            {activeLesson.subtitle ? (
              <Text style={localStyles.heroSubtitle}>{activeLesson.subtitle}</Text>
            ) : null}
          </View>

          {/* Learning Objectives Box */}
          {activeLesson.objectives && activeLesson.objectives.length > 0 ? (
            <View style={localStyles.objectivesBox}>
              <Text style={localStyles.objectivesTitle}>
                🎯 {isBn ? 'এই পাঠে যা শিখবেন (What You Will Learn)' : 'What You Will Learn in This Lesson'}
              </Text>
              {activeLesson.objectives.map((obj, idx) => (
                <View key={idx} style={localStyles.objectiveRow}>
                  <Text style={localStyles.objectiveBullet}>✓</Text>
                  <Text style={localStyles.objectiveTxt}>{obj}</Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* Key Principle / Formula Highlight Box */}
          {activeLesson.keyFormula ? (
            <View style={localStyles.formulaBox}>
              <Text style={localStyles.formulaTxt}>{activeLesson.keyFormula}</Text>
            </View>
          ) : null}

          {/* Full Paragraphs & Subheadings */}
          <View style={{ marginVertical: 8 }}>
            {(activeLesson.paragraphs || []).map((block, idx) =>
              block.type === 'heading' ? (
                <Text key={idx} style={localStyles.subHeading}>
                  {block.text}
                </Text>
              ) : (
                <Text key={idx} style={localStyles.paragraph}>
                  {block.text}
                </Text>
              )
            )}
          </View>

          {/* Step-by-Step Reference Guide & Parameters Table */}
          {activeLesson.table &&
          ((activeLesson.table.headers && activeLesson.table.headers.length > 0) ||
            (activeLesson.table.rows && activeLesson.table.rows.length > 0)) ? (
            <View style={{ marginVertical: 14 }}>
              <Text style={localStyles.subHeading}>
                📋 {isBn ? 'ধাপে ধাপে রেফারেন্স গাইড ও প্যারামিটার চার্ট' : 'Step-by-Step Reference Guide & Parameters'}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View style={localStyles.tableWrap}>
                  {activeLesson.table.headers && activeLesson.table.headers.length > 0 ? (
                    <View style={localStyles.tableHeaderRow}>
                      {activeLesson.table.headers.map((h, hIdx) => (
                        <Text key={hIdx} style={localStyles.tableHeaderCell}>
                          {h}
                        </Text>
                      ))}
                    </View>
                  ) : null}
                  {(activeLesson.table.rows || []).map((row, rIdx) => (
                    <View
                      key={rIdx}
                      style={[
                        localStyles.tableRow,
                        rIdx % 2 === 1 && { backgroundColor: '#f8fafc' }
                      ]}
                    >
                      {row.map((cell, cIdx) => (
                        <Text
                          key={cIdx}
                          style={[
                            localStyles.tableCell,
                            cIdx === 0 && { fontWeight: '700', color: COLORS.g900 }
                          ]}
                        >
                          {cell}
                        </Text>
                      ))}
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          ) : null}

          {/* Practical Field Tip for Bangladesh Growers */}
          {activeLesson.bdFieldTip ? (
            <View style={localStyles.bdTipBox}>
              <Text style={localStyles.bdTipTitle}>
                🇧🇩 {isBn ? 'বাংলাদেশের চাষিদের জন্য বাস্তব মাঠ পরামর্শ' : 'Practical Field Tip for Bangladesh Growers'}
              </Text>
              <Text style={localStyles.bdTipTxt}>{activeLesson.bdFieldTip}</Text>
            </View>
          ) : null}

          {/* Bottom Step-by-Step Navigation */}
          <View style={localStyles.bottomNav}>
            {prevLesson ? (
              <Btn
                variant="secondary"
                title={`← ${prevLesson.code}: ${prevLesson.title.slice(0, 26)}...`}
                onPress={() => setSelectedLessonId(prevLesson.id)}
              />
            ) : (
              <View />
            )}
            <Btn
              variant={completedIds[activeLesson.id] ? 'secondary' : 'primary'}
              title={
                completedIds[activeLesson.id]
                  ? isBn
                    ? '✓ পাঠ সম্পন্ন'
                    : '✓ Lesson Completed'
                  : isBn
                  ? '✓ পাঠ সম্পন্ন করুন'
                  : '✓ Complete Lesson'
              }
              onPress={() => toggleComplete(activeLesson.id)}
            />
            {nextLesson ? (
              <Btn
                title={`${nextLesson.code}: ${nextLesson.title.slice(0, 26)}... →`}
                onPress={() => setSelectedLessonId(nextLesson.id)}
              />
            ) : null}
          </View>
        </Card>
      ) : activeTrackId === 'quick_bn' && !q ? (
        /* Quick 20 Bilingual Field Notes */
        <Card>
          <SectionTitle
            subtitle={
              isBn
                ? 'দ্রুত রিভিশনের জন্য ২০টি সংক্ষিপ্ত দ্বিভাষিক পাঠ'
                : '20 Quick Bilingual Field Summaries for Fast Revision'
            }
          >
            {isBn ? '🇧🇩 সংক্ষিপ্ত মাঠ নির্দেশিকা (২০টি পাঠ)' : '🇧🇩 Quick Bilingual Field Notes (20 Lessons)'}
          </SectionTitle>
          {HYDROGUIDE_DATA.lessons.map(lesson => (
            <View key={lesson.id} style={localStyles.lessonRow}>
              <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 4 }]}>
                <Text style={[uiStyles.h3, { flex: 1 }]}>{I18N.tObj(lesson, 'title')}</Text>
                <Chip label={lesson.level} />
              </View>
              <Text style={localStyles.summary}>{I18N.tObj(lesson, 'summary')}</Text>
            </View>
          ))}
        </Card>
      ) : activeTrackId === 'quiz' && !q ? (
        /* 25-Question Interactive Certification Quiz */
        <Card>
          <SectionTitle
            subtitle={
              isBn
                ? `আপনার স্কোর: ${ACADEMY_QUIZ.filter(item => quizAnswers[item.id] === item.ans).length} / ${ACADEMY_QUIZ.length} (উত্তর দিয়েছেন: ${Object.keys(quizAnswers).length} টি)`
                : `Your Score: ${ACADEMY_QUIZ.filter(item => quizAnswers[item.id] === item.ans).length} / ${ACADEMY_QUIZ.length} (Answered: ${Object.keys(quizAnswers).length})`
            }
          >
            {isBn
              ? '🏆 হাইড্রোপনিক্স সার্টিফিকেশন কুইজ পরীক্ষা (২৫টি প্রশ্ন)'
              : '🏆 25-Question Hydroponics Certification Quiz'}
          </SectionTitle>
          <View style={{ marginBottom: 12 }}>
            <Btn
              small
              variant="secondary"
              title={isBn ? '🔄 কুইজ রিসেট করুন' : '🔄 Reset Quiz'}
              onPress={() => setQuizAnswers({})}
            />
          </View>
          {ACADEMY_QUIZ.map(item => {
            const picked = quizAnswers[item.id];
            const opts = isBn ? item.opts_bn : item.opts_en;
            return (
              <View key={item.id} style={localStyles.lessonRow}>
                <Text style={[uiStyles.h3, { marginBottom: 8 }]}>
                  {isBn ? item.q_bn : item.q_en}
                </Text>
                <View style={{ gap: 6 }}>
                  {opts.map((optTxt, oIdx) => {
                    const isPicked = picked === oIdx;
                    const isCorrect = item.ans === oIdx;
                    let bg = '#f8fafc';
                    let border = COLORS.line;
                    if (picked !== undefined) {
                      if (isCorrect) {
                        bg = '#dcfce7';
                        border = '#16a34a';
                      } else if (isPicked) {
                        bg = '#fee2e2';
                        border = '#dc2626';
                      }
                    }
                    return (
                      <TouchableOpacity
                        key={oIdx}
                        onPress={() =>
                          setQuizAnswers(prev => Object.assign({}, prev, { [item.id]: oIdx }))
                        }
                        style={{
                          padding: 10,
                          borderRadius: 8,
                          borderWidth: 1,
                          borderColor: border,
                          backgroundColor: bg
                        }}
                      >
                        <Text style={{ fontSize: 13.5, fontWeight: isPicked || (picked !== undefined && isCorrect) ? '700' : '500', color: COLORS.ink }}>
                          {picked !== undefined && isCorrect ? '✓ ' : picked !== undefined && isPicked ? '✗ ' : '○ '}
                          {optTxt}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </Card>
      ) : (
        /* Course Syllabus List View */
        <Card>
          {!q && activeTrack ? (
            <View style={localStyles.courseBanner}>
              <View style={{ flex: 1 }}>
                <Text style={localStyles.courseBannerBadge}>
                  {activeTrack.icon} {activeTrack.badge}
                </Text>
                <Text style={localStyles.courseBannerTitle}>
                  {isBn ? activeTrack.titleBn : activeTrack.titleEn}
                </Text>
                <Text style={localStyles.courseBannerDesc}>
                  {isBn ? activeTrack.descBn : activeTrack.descEn}
                </Text>
              </View>
            </View>
          ) : null}

          {currentLessons.map((ls, idx) => {
            const isDone = !!completedIds[ls.id];
            return (
              <TouchableOpacity
                key={ls.id}
                onPress={() => setSelectedLessonId(ls.id)}
                style={localStyles.syllabusCard}
              >
                <View style={[uiStyles.row, { justifyContent: 'space-between', marginBottom: 6, flexWrap: 'wrap', gap: 6 }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={[localStyles.codeBadge, isDone && { backgroundColor: COLORS.g700 }]}>
                      <Text style={localStyles.codeBadgeTxt}>
                        {isDone ? '✓ ' : ''}
                        {ls.code || `#${idx + 1}`}
                      </Text>
                    </View>
                    <Text style={localStyles.readTimeTxt}>⏱ {ls.readTime}</Text>
                  </View>
                  <Badge
                    text={isBn ? '📖 বিস্তারিত পড়ুন →' : '📖 Read Full Lesson →'}
                    tone="green"
                  />
                </View>

                <Text style={localStyles.syllabusTitle}>{ls.title}</Text>
                {ls.subtitle ? (
                  <Text style={localStyles.syllabusSub}>{ls.subtitle}</Text>
                ) : null}

                {ls.keyFormula ? (
                  <View style={localStyles.miniFormula}>
                    <Text style={localStyles.miniFormulaTxt} numberOfLines={2}>
                      {ls.keyFormula}
                    </Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </Card>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  trackCard: {
    width: 215,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.line,
    backgroundColor: '#ffffff'
  },
  trackBadge: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.g700,
    textTransform: 'uppercase',
    marginBottom: 2
  },
  trackTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.ink,
    lineHeight: 18
  },
  courseBanner: {
    backgroundColor: '#064e3b',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14
  },
  courseBannerBadge: {
    color: '#6ee7b7',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 4
  },
  courseBannerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6
  },
  courseBannerDesc: {
    color: '#d1fae5',
    fontSize: 13.5,
    lineHeight: 20
  },
  syllabusCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: '#ffffff',
    marginBottom: 10
  },
  codeBadge: {
    backgroundColor: COLORS.g900,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8
  },
  codeBadgeTxt: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800'
  },
  readTimeTxt: {
    fontSize: 12,
    color: COLORS.muted,
    fontWeight: '600'
  },
  syllabusTitle: {
    fontSize: 15.5,
    fontWeight: '800',
    color: COLORS.ink,
    marginBottom: 4
  },
  syllabusSub: {
    fontSize: 13,
    color: COLORS.muted,
    marginBottom: 8
  },
  miniFormula: {
    backgroundColor: '#ecfdf5',
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6
  },
  miniFormulaTxt: {
    fontSize: 12,
    color: '#065f46',
    fontWeight: '700'
  },
  heroBanner: {
    backgroundColor: '#065f46',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14
  },
  heroPill: {
    backgroundColor: '#10b981',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99
  },
  heroPillTxt: {
    color: '#064e3b',
    fontSize: 12,
    fontWeight: '800'
  },
  heroPillLight: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99
  },
  heroPillLightTxt: {
    color: '#ecfdf5',
    fontSize: 12,
    fontWeight: '700'
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 6
  },
  heroSubtitle: {
    color: '#d1fae5',
    fontSize: 14,
    lineHeight: 20
  },
  objectivesBox: {
    backgroundColor: '#f0fdf4',
    borderWidth: 1,
    borderColor: '#bbf7d0',
    padding: 14,
    borderRadius: 12,
    marginBottom: 14
  },
  objectivesTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#065f46',
    marginBottom: 8
  },
  objectiveRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6
  },
  objectiveBullet: {
    color: '#15803d',
    fontWeight: '800',
    fontSize: 14
  },
  objectiveTxt: {
    flex: 1,
    fontSize: 13.5,
    color: '#1e293b',
    lineHeight: 20
  },
  formulaBox: {
    backgroundColor: '#ecfdf5',
    borderLeftWidth: 5,
    borderLeftColor: '#10b981',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14
  },
  formulaTxt: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#065f46',
    lineHeight: 20
  },
  subHeading: {
    fontSize: 16.5,
    fontWeight: '800',
    color: '#064e3b',
    marginTop: 14,
    marginBottom: 8
  },
  paragraph: {
    fontSize: 14.5,
    color: '#334155',
    lineHeight: 23,
    marginBottom: 12
  },
  tableWrap: {
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 10,
    overflow: 'hidden'
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#064e3b'
  },
  tableHeaderCell: {
    width: 210,
    padding: 10,
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 12.5
  },
  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    backgroundColor: '#ffffff'
  },
  tableCell: {
    width: 210,
    padding: 10,
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 18
  },
  bdTipBox: {
    backgroundColor: '#fffbeb',
    borderWidth: 1,
    borderColor: '#fde68a',
    borderLeftWidth: 5,
    borderLeftColor: '#f59e0b',
    padding: 14,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 16
  },
  bdTipTitle: {
    fontSize: 14.5,
    fontWeight: '800',
    color: '#92400e',
    marginBottom: 6
  },
  bdTipTxt: {
    fontSize: 13.5,
    color: '#78350f',
    lineHeight: 20
  },
  bottomNav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: COLORS.line
  },
  lessonRow: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingVertical: 11
  },
  summary: {
    fontSize: 13.5,
    color: COLORS.ink,
    lineHeight: 20
  }
});

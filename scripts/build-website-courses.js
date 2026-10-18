const fs = require('fs');
const path = require('path');

const rawPosts = require('../src/data/raw-wp-posts.json');

function decodeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&#038;/g, '&')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)));
}

function stripTags(html) {
  if (!html) return '';
  return decodeHtml(
    String(html)
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function parsePost(post) {
  const html = post.content?.rendered || '';
  const title = stripTags(post.title?.rendered || '');
  const slug = post.slug || '';

  // Determine courseId & lesson code
  let courseId = 'other';
  let code = '';
  let sortOrder = 999;

  const m1 = slug.match(/^lesson-1-(\d+)/);
  const m2 = slug.match(/^lesson-2-(\d+)/);
  const m3 = slug.match(/^module-(\d+)/);
  const mBari = slug.match(/^bari-book-(.+)/);

  if (m1) {
    courseId = 'course1';
    code = `1.${m1[1].padStart(2, '0')}`;
    sortOrder = parseInt(m1[1], 10);
  } else if (m2) {
    courseId = 'course2';
    code = `2.${m2[1].padStart(2, '0')}`;
    sortOrder = parseInt(m2[1], 10);
  } else if (m3) {
    courseId = 'course3';
    code = `3.${m3[1].padStart(2, '0')}`;
    sortOrder = parseInt(m3[1], 10);
  } else if (mBari) {
    courseId = 'bari_book';
    const chMatch = slug.match(/chapter-(\d+[a-c]?)/);
    code = chMatch ? `Ch ${chMatch[1].toUpperCase()}` : 'Intro';
    sortOrder = post.id;
  } else if (slug !== 'hello-world') {
    courseId = 'success_stories';
    code = 'Case Study';
    sortOrder = post.id;
  }

  // Subtitle (first h2 inside hero banner)
  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const subtitle = h2Match ? stripTags(h2Match[1]) : '';

  // Read time
  const rtMatch = html.match(/⏱\s*([^<]+)/i);
  const readTime = rtMatch ? stripTags(rtMatch[1]) : '12 Min Read';

  // Objectives (<ul> inside What You Will Learn)
  const objectives = [];
  const ulMatch = html.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
  if (ulMatch) {
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = liRegex.exec(ulMatch[1])) !== null) {
      const item = stripTags(m[1]);
      if (item) objectives.push(item);
    }
  }

  // Key Principle / Formula box (monospace div or 💡 / 🧪 box)
  let keyFormula = '';
  const monoMatch = html.match(/font-family:\s*monospace[^>]*>([\s\S]*?)<\/div>/i);
  if (monoMatch) {
    keyFormula = stripTags(monoMatch[1]);
  }

  // Practical Field Tip for Bangladesh Growers
  let bdFieldTip = '';
  const tipMatch = html.match(/Practical Field Tip for Bangladesh Growers<\/h4>\s*<p[^>]*>([\s\S]*?)<\/p>/i);
  if (tipMatch) {
    bdFieldTip = stripTags(tipMatch[1]);
  } else {
    // Fallback for Course 3 or BARI book callout boxes
    const altTip = html.match(/background:#fffbeb[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    if (altTip) bdFieldTip = stripTags(altTip[1]);
  }

  // Extract Table (headers & rows)
  let table = null;
  const tableMatch = html.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
  if (tableMatch) {
    const tHtml = tableMatch[1];
    const headers = [];
    const thRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
    let thM;
    while ((thM = thRegex.exec(tHtml)) !== null) {
      headers.push(stripTags(thM[1]));
    }
    const rows = [];
    const tbodyMatch = tHtml.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
    const rowSource = tbodyMatch ? tbodyMatch[1] : tHtml;
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let trM;
    while ((trM = trRegex.exec(rowSource)) !== null) {
      if (/<th/i.test(trM[1])) continue;
      const cells = [];
      const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
      let tdM;
      while ((tdM = tdRegex.exec(trM[1])) !== null) {
        cells.push(stripTags(tdM[1]));
      }
      if (cells.length > 0) rows.push(cells);
    }
    if (headers.length > 0 || rows.length > 0) {
      table = { headers, rows };
    }
  }

  // Extract all paragraphs & subheadings in reading order
  const paragraphs = [];
  const blockRegex = /<(p|h3|h4)[^>]*>([\s\S]*?)<\/\1>/gi;
  let bM;
  while ((bM = blockRegex.exec(html)) !== null) {
    const tag = bM[1].toLowerCase();
    const txt = stripTags(bM[2]);
    if (!txt) continue;
    if (txt.includes('Step-by-Step Zero-to-Harvest Training')) continue;
    if (txt.includes('Inspired by Dr. Daniel Fernandez')) continue;
    if (txt.includes('Course 1 Syllabus') || txt.includes('Course 2 Syllabus') || txt.includes('Course 3 Syllabus')) continue;
    if (txt.includes('What You Will Learn in This Lesson')) continue;
    if (txt.includes('Step-by-Step Reference Guide & Parameters')) continue;
    if (txt.includes('Practical Field Tip for Bangladesh Growers')) continue;
    if (txt === bdFieldTip) continue;
    if (txt.length < 15 && tag === 'p') continue;

    paragraphs.push({
      type: tag === 'p' ? 'p' : 'heading',
      text: txt
    });
  }

  return {
    id: `wp_${post.id}`,
    wpId: post.id,
    slug,
    courseId,
    code,
    sortOrder,
    title,
    subtitle,
    readTime,
    objectives,
    keyFormula,
    bdFieldTip,
    table,
    paragraphs
  };
}

const parsed = rawPosts
  .filter(p => p.slug !== 'hello-world')
  .map(parsePost);

const course1 = parsed.filter(p => p.courseId === 'course1').sort((a, b) => a.sortOrder - b.sortOrder);
const course2 = parsed.filter(p => p.courseId === 'course2').sort((a, b) => a.sortOrder - b.sortOrder);
const course3 = parsed.filter(p => p.courseId === 'course3').sort((a, b) => a.sortOrder - b.sortOrder);
const bariBook = parsed.filter(p => p.courseId === 'bari_book').sort((a, b) => a.sortOrder - b.sortOrder);
const successStories = parsed.filter(p => p.courseId === 'success_stories').sort((a, b) => a.sortOrder - b.sortOrder);

const outputData = {
  tracks: [
    {
      id: 'course1',
      icon: '🌱',
      badge: 'Course 1 • 15 Lessons',
      titleEn: 'Course 1: Beginner Hydroponics Step-by-Step',
      titleBn: 'কোর্স ১: নতুনদের ধাপে ধাপে হাইড্রোপনিক্স প্রশিক্ষণ (১৫টি পাঠ)',
      descEn: 'Start from zero knowledge: understand how plants grow without soil, build a ৳1,500 Kratky box, wash cocopeat, germinate seeds, use pH/EC meters, and harvest your first crop in 30 days.',
      descBn: 'শূন্য থেকে শুরু করুন: মাটি ছাড়া গাছ কীভাবে বাড়ে, ১,৫০০ টাকায় ক্রাটকি বক্স তৈরি, কোকোপিট শোধন, বীজ অঙ্কুরোদগম, pH/EC মিটার ব্যবহার এবং ৩০ দিনে প্রথম ফসল সংগ্রহ।',
      color: '#15803d',
      lessons: course1
    },
    {
      id: 'course2',
      icon: '🏗️',
      badge: 'Course 2 • 15 Lessons',
      titleEn: 'Course 2: Intermediate Commercial Systems & Crops',
      titleBn: 'কোর্স ২: বাণিজ্যিক হাইড্রোপনিক্স সিস্টেম ও ফসল উৎপাদন (১৫টি পাঠ)',
      descEn: 'Master commercial NFT channels, Deep Water Culture (DWC) rafts, Dutch Bucket drip systems, tropical polyhouse design, BARI Tomato/Capsicum/Strawberry production, IPM, and farm ROI.',
      descBn: 'বাণিজ্যিক NFT চ্যানেল, DWC ফ্লোটিং র‍্যাফট, ডাচ বাকেট ড্রিপ সিস্টেম, পলিহাউস ডিজাইন, বারি টমেটো/ক্যাপসিকাম/স্ট্রবেরি উৎপাদন, বালাই ব্যবস্থাপনা ও খামারের লাভ-ক্ষতি হিসাব।',
      color: '#0284c7',
      lessons: course2
    },
    {
      id: 'course3',
      icon: '🔬',
      badge: 'Course 3 • 20 Lessons',
      titleEn: 'Course 3: Advanced Masterclass — Science & Nutrient Chemistry',
      titleBn: 'কোর্স ৩: অ্যাডভান্সড মাস্টারক্লাস — পুষ্টি রসায়ন ও বিজ্ঞান (২০টি পাঠ)',
      descEn: 'Deep scientific mastery following Dr. Daniel Fernandez (HydroBuddy) & BARI: ppm stoichiometry, Stock Tank A/B precipitation, alkalinity titration, iron chelates, VPD, NO3:NH4 ratio, and silicon.',
      descBn: 'ড. ড্যানিয়েল ফার্নান্দেজ (HydroBuddy) ও বারি (BARI) গবেষণা অনুসারে গভীর বৈজ্ঞানিক পাঠ: পিপিএম হিসাব, স্টক ট্যাংক A ও B রসায়ন, পানির ক্ষারত্ব ও pH নিয়ন্ত্রণ, আয়রন চিলেট ও VPD।',
      color: '#7c3aed',
      lessons: course3
    },
    {
      id: 'bari_book',
      icon: '📘',
      badge: 'BARI Book • 11 Chapters',
      titleEn: 'BARI Hydroponics Official Digital Handbook',
      titleBn: 'বারি (BARI) হাইড্রোপনিক্স ডিজিটাল হ্যান্ডবুক (১১টি অধ্যায়)',
      descEn: 'Complete Bangladesh Agricultural Research Institute (BARI Gazipur) reference chapters covering seedling production, Stock A/B preparation, cocopeat culture, vertical pipes, and deficiency charts.',
      descBn: 'বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট (বারি, গাজীপুর) প্রণীত সম্পূর্ণ নির্দেশিকা: চারা উৎপাদন, স্টক দ্রবণ তৈরি, কোকোপিট পদ্ধতি, ভার্টিক্যাল পাইপ ও পুষ্টি ঘাটতি নির্ণয়।',
      color: '#b45309',
      lessons: bariBook
    },
    {
      id: 'success_stories',
      icon: '🏆',
      badge: 'Bangladesh • 10 Case Studies',
      titleEn: 'Bangladesh Hydroponics Farmer Success Stories',
      titleBn: 'বাংলাদেশে হাইড্রোপনিক্স সফলতার গল্প (১০টি বাস্তব কেস স্টাডি)',
      descEn: 'Real-world case studies from Dhaka, Gazipur, Jashore, Bogura, Rajshahi, Chattogram, Satkhira, Mymensingh, and Sylhet showing practical systems, yields, and economics.',
      descBn: 'ঢাকা, গাজীপুর, যশোর, বগুড়া, রাজশাহী, চট্টগ্রাম, সাতক্ষীরা, ময়মনসিংহ ও সিলেটের সফল হাইড্রোপনিক্স খামারিদের বাস্তব অভিজ্ঞতা ও আয়ের হিসাব।',
      color: '#0f766e',
      lessons: successStories
    }
  ]
};

const outPath = path.join(__dirname, '..', 'src', 'data', 'website-courses.js');
const fileContent = `/**
 * Hydroponics Step by Step — Complete Website Curriculum (hydroponics.com.bd)
 * Contains:
 * - Course 1: Beginner Hydroponics Step-by-Step (15 Lessons)
 * - Course 2: Intermediate Commercial Systems & Crops (15 Lessons)
 * - Course 3: Advanced Masterclass — Science & Nutrient Chemistry (20 Lessons)
 * - BARI Hydroponics Digital Handbook (11 Chapters)
 * - Bangladesh Farmer Success Stories (10 Case Studies)
 */

const WEBSITE_COURSES = ${JSON.stringify(outputData, null, 2)};

export default WEBSITE_COURSES;
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully generated src/data/website-courses.js!');
console.log('Course 1 lessons:', course1.length);
console.log('Course 2 lessons:', course2.length);
console.log('Course 3 lessons:', course3.length);
console.log('BARI Book chapters:', bariBook.length);
console.log('Success Stories:', successStories.length);

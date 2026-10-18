/**
 * Hydroponics Step by Step — Complete Website Curriculum (hydroponics.com.bd)
 * Contains:
 * - Course 1: Beginner Hydroponics Step-by-Step (15 Lessons)
 * - Course 2: Intermediate Commercial Systems & Crops (15 Lessons)
 * - Course 3: Advanced Masterclass — Science & Nutrient Chemistry (20 Lessons)
 * - BARI Hydroponics Digital Handbook (11 Chapters)
 * - Bangladesh Farmer Success Stories (10 Case Studies)
 */

const WEBSITE_COURSES = {
  "tracks": [
    {
      "id": "course1",
      "icon": "🌱",
      "badge": "Course 1 • 15 Lessons",
      "titleEn": "Course 1: Beginner Hydroponics Step-by-Step",
      "titleBn": "কোর্স ১: নতুনদের ধাপে ধাপে হাইড্রোপনিক্স প্রশিক্ষণ (১৫টি পাঠ)",
      "descEn": "Start from zero knowledge: understand how plants grow without soil, build a ৳1,500 Kratky box, wash cocopeat, germinate seeds, use pH/EC meters, and harvest your first crop in 30 days.",
      "descBn": "শূন্য থেকে শুরু করুন: মাটি ছাড়া গাছ কীভাবে বাড়ে, ১,৫০০ টাকায় ক্রাটকি বক্স তৈরি, কোকোপিট শোধন, বীজ অঙ্কুরোদগম, pH/EC মিটার ব্যবহার এবং ৩০ দিনে প্রথম ফসল সংগ্রহ।",
      "color": "#15803d",
      "lessons": [
        {
          "id": "wp_215",
          "wpId": 215,
          "slug": "lesson-1-01-what-is-hydroponics-how-plants-grow-without-soil",
          "courseId": "course1",
          "code": "1.01",
          "sortOrder": 1,
          "title": "Lesson 1.01: What Is Hydroponics? How Plants Grow Without Soil",
          "subtitle": "Absolute Zero Start: Understanding What Plants Truly Eat and Why Soil Is Optional",
          "readTime": "10 Min Read",
          "objectives": [
            "Understand the true purpose of soil in traditional agriculture and why plants do not actually eat dirt.",
            "Learn the meaning of the word \"Hydroponics\" (working water) and how roots absorb dissolved mineral nutrients.",
            "Identify the 5 core benefits of growing without soil for Bangladeshi homes, rooftops, and small farms."
          ],
          "keyFormula": "💡 Key Principle: Plant Growth = Sunlight + Carbon Dioxide (CO₂) + Water (H₂O) + Dissolved Mineral Ions + Root Oxygen (O₂)",
          "bdFieldTip": "In Bangladesh, rapid urbanization, seasonal monsoon waterlogging, and soil-borne bacterial wilt make traditional farming increasingly difficult. With hydroponics, you can turn a barren concrete rooftop in Dhaka, a saline courtyard in Khulna, or a small homestead in Cumilla into a productive vegetable garden.",
          "table": {
            "headers": [
              "Plant Requirement",
              "How Plants Get It in Soil",
              "How Plants Get It in Hydroponics",
              "Why Hydroponics Is Faster"
            ],
            "rows": [
              [
                "Physical Support",
                "Roots push through heavy clay/loam dirt",
                "Net pot + Cocopeat, Sponge, or Clay Pebbles",
                "Zero energy wasted pushing through hard soil"
              ],
              [
                "Mineral Nutrients",
                "Microbes slowly break down compost/fertilizer",
                "Pre-dissolved clean mineral water (Tank A + B)",
                "Instant, 100% balanced nutrition at the root surface"
              ],
              [
                "Water Supply",
                "Flood irrigation or rainfall (80% lost to runoff)",
                "Recirculating reservoir or closed box",
                "Saves up to 90% water with zero drought stress"
              ],
              [
                "Root Oxygen (O₂)",
                "Tiny air pockets between soil crumbs",
                "Air gap (Kratky), air stone (DWC), or thin film (NFT)",
                "High oxygen accelerates root nutrient uptake by 30–50%"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In nature, soil serves two basic roles: it holds the plant upright so wind does not blow it over, and it acts as a storage sponge for water and dissolved minerals. When organic matter (like cow dung compost or urea) sits in wet soil, soil bacteria slowly break it down into tiny, invisible mineral particles dissolved in water. Only when those minerals are dissolved in water can the plant roots drink them. In hydroponics, we simply remove the middleman (the soil). We support the plant stem using a clean plastic net cup filled with coconut fiber (cocopeat) or clay pebbles, and we bathe the roots directly in clean water enriched with the exact minerals the plant needs."
            },
            {
              "type": "p",
              "text": "Because the plant no longer has to spend huge amounts of energy growing long, tough roots searching through hard soil for water and food, it invests that saved energy into growing lush leaves, flowers, and fruits. As a result, hydroponic crops typically mature 25% to 40% faster than soil crops while using 90% less water and zero chemical weed-killers."
            }
          ]
        },
        {
          "id": "wp_216",
          "wpId": 216,
          "slug": "lesson-1-02-soil-vs-hydroponics-in-bangladesh-yield-water-cost",
          "courseId": "course1",
          "code": "1.02",
          "sortOrder": 2,
          "title": "Lesson 1.02: Soil vs. Hydroponics in Bangladesh — Yield, Water, Land & Cost Comparison",
          "subtitle": "An Honest Comparison of Traditional Field Farming vs. Soilless Farming in BDT (৳)",
          "readTime": "12 Min Read",
          "objectives": [
            "Compare yield per square foot and annual crop cycles between open-field soil and hydroponics.",
            "Understand why hydroponics costs more to start (CAPEX) but lowers risk from floods, weeds, and soil diseases.",
            "Know which crops make financial sense in hydroponics versus which crops belong in open soil."
          ],
          "keyFormula": "💡 Key Principle: 1,000 sq ft Hydroponics ≈ 4,000 to 5,000 sq ft Traditional Soil Field Output",
          "bdFieldTip": "High-value crops that perform best in Bangladesh hydroponics include: Salad Lettuce (৳250–400/kg), Mint/Pudina, Coriander (off-season monsoon dhonia sells for ৳300–500/kg!), Cherry & BARI Hybrid Tomatoes, Colored Capsicum, English Cucumber, and Winter Strawberries.",
          "table": {
            "headers": [
              "Comparison Factor",
              "Traditional Open-Field Soil (Bangladesh)",
              "Hydroponic System (Bangladesh)",
              "Practical Impact for Farmers"
            ],
            "rows": [
              [
                "Crop Cycles per Year (Leafy Greens)",
                "3 to 4 cycles (interrupted by monsoon/heat)",
                "8 to 10 cycles per year (30–35 days each)",
                "More than double the annual harvest frequency"
              ],
              [
                "Plants per Square Meter (Lettuce/Herbs)",
                "9 to 12 plants / m²",
                "25 to 36 plants / m² (NFT / Vertical)",
                "3x higher plant density on small land or rooftops"
              ],
              [
                "Water Consumption per kg of Tomato",
                "180 to 250 Liters of water",
                "15 to 22 Liters of water",
                "90% water savings; ideal for dry winter & saline zones"
              ],
              [
                "Weeding & Soil Preparation Labor",
                "Heavy plowing, spading, and weekly hand-weeding",
                "Zero weeds, zero plowing, zero tilling",
                "Can be managed by 1 person or family members"
              ],
              [
                "Soil-Borne Diseases (Wilt / Nematodes)",
                "High risk; often requires crop rotation or toxic sprays",
                "Near zero in clean water & sterilized media",
                "Consistent harvests without soil exhaustion"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "When you grow in open soil in Bangladesh, you face three major bottlenecks: first, heavy monsoon rains between June and September flood low-lying fields and rot crop roots; second, weeds compete fiercely for fertilizer; and third, continuous cropping builds up soil-borne fungi and bacterial wilt. In hydroponics, your plants sit above the ground on benches or channels. Monsoon water drains away harmlessly, weeds do not exist, and every drop of fertilizer goes straight into your crop."
            },
            {
              "type": "p",
              "text": "However, honesty is essential: hydroponics requires a higher initial setup cost for containers, pipes, or protective netting, and it requires you to check your water every day. That is why we always advise beginners to start small—with a ৳1,500 to ৳5,000 starter setup—master the daily skills in Course 1, and only expand to commercial scale in Course 2 once you have harvested your first successful crops."
            }
          ]
        },
        {
          "id": "wp_217",
          "wpId": 217,
          "slug": "lesson-1-03-five-essential-pillars-plant-life-light-water-air-nutrients",
          "courseId": "course1",
          "code": "1.03",
          "sortOrder": 3,
          "title": "Lesson 1.03: The 5 Essential Pillars of Plant Life — Light, Water, Air, Nutrients & Temperature",
          "subtitle": "How to Think Like a Plant: Balancing the 5 Environmental Factors for Fast Growth",
          "readTime": "11 Min Read",
          "objectives": [
            "Understand why the best nutrient solution in the world will fail if a plant sits in a dark corner or hot water.",
            "Learn why plant roots breathe oxygen (O₂) while plant leaves breathe carbon dioxide (CO₂).",
            "Memorize the safe temperature and sunlight hours required for leafy vs. fruiting crops in Bangladesh."
          ],
          "keyFormula": "💡 Key Principle: Law of the Minimum: Plant growth is limited by whichever of the 5 pillars is in shortest supply.",
          "bdFieldTip": "To keep your nutrient water cool in Bangladesh, never use transparent plastic bottles or uncovered black buckets in direct sun. Paint your reservoir white or wrap it in silver reflective insulation foil—this lowers water temperature by 4°C to 6°C!",
          "table": {
            "headers": [
              "The 5 Pillars",
              "What It Does Inside the Plant",
              "Ideal Range for Leafy Greens",
              "Ideal Range for Fruiting Crops (Tomato/Pepper)"
            ],
            "rows": [
              [
                "1. Light (Sunlight)",
                "Powers photosynthesis in green leaves to make sugars",
                "5 to 6 hours direct sun (or 30–50% shade net in summer)",
                "6 to 8+ hours strong sunlight daily"
              ],
              [
                "2. Water Quality",
                "Transports minerals upward and cools leaves via transpiration",
                "Clean water with low salt (EC < 0.4 mS/cm)",
                "Clean water with low salt (EC < 0.5 mS/cm)"
              ],
              [
                "3. Root Oxygen (Air)",
                "Allows root cells to burn sugar and pump minerals inside",
                "At least 1/3 of roots in humid air or bubbling water",
                "Continuous aeration or well-drained cocopeat/perlite"
              ],
              [
                "4. Mineral Nutrients",
                "Building blocks for proteins, stems, chlorophyll, and fruit",
                "Mild strength (EC 1.0 – 1.6 mS/cm, pH 5.8 – 6.2)",
                "Medium-High strength (EC 1.8 – 3.0 mS/cm, pH 5.8 – 6.3)"
              ],
              [
                "5. Temperature",
                "Controls enzyme speed and dissolved oxygen in water",
                "Air: 18–28°C | Water: below 28°C",
                "Air: 20–32°C | Water: below 29°C"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Here is the secret that separates master growers from frustrated beginners: green leaves above the container and white roots inside the container have opposite breathing habits! Above ground, leaves absorb sunlight and take in Carbon Dioxide (CO₂) from the breeze. Below ground, inside your dark hydroponic box, roots cannot do photosynthesis—instead, roots breathe Oxygen (O₂) just like fish in a pond! If you submerge 100% of a plant stem and root system in stagnant, warm water with no air gap and no air bubbles, the roots suffocate and drown within 48 hours."
            },
            {
              "type": "p",
              "text": "Similarly, sunlight drives everything. A plant placed indoors under a normal room bulb does not receive enough light energy to grow food. Always locate your beginner hydroponic setup on an open roof, sunny south-facing balcony, or sunny courtyard where it receives at least 5 to 6 hours of natural daylight, using a simple green shade net during hot April–September afternoons."
            }
          ]
        },
        {
          "id": "wp_218",
          "wpId": 218,
          "slug": "lesson-1-04-exploring-6-basic-hydroponic-systems-beginner-choice",
          "courseId": "course1",
          "code": "1.04",
          "sortOrder": 4,
          "title": "Lesson 1.04: Exploring the 6 Basic Hydroponic Systems — Which One Should a Beginner Choose?",
          "subtitle": "Kratky, DWC, NFT, Dutch Bucket, Ebb & Flow, and Wick Systems Explained Simply",
          "readTime": "14 Min Read",
          "objectives": [
            "Distinguish between Passive Systems (no electricity or pumps needed) and Active Systems (uses water/air pumps).",
            "Understand how Kratky, Deep Water Culture (DWC), NFT channels, and Dutch Buckets work.",
            "Choose the right system for your exact crop so you never plant a giant tomato vine in a tiny lettuce pipe."
          ],
          "keyFormula": "💡 Key Principle: Leafy Greens = Kratky / DWC / NFT | Large Fruiting Plants (Tomato, Cucumber, Capsicum) = Dutch Bucket / Drip Cocopeat",
          "bdFieldTip": "Our Golden Rule for Bangladeshi Beginners: Start your very first month with a Kratky Box or a small DWC Bubbler Box for leafy greens, plus 2 to 4 Cocopeat Buckets for tomatoes or chili. You will learn 90% of hydroponic fundamentals for under ৳2,000!",
          "table": {
            "headers": [
              "System Name",
              "How It Works",
              "Electricity Needed?",
              "Best Crops to Grow",
              "Beginner Difficulty"
            ],
            "rows": [
              [
                "1. Kratky Method",
                "Plants sit in a lid over a box of nutrient water; an air gap forms as roots drink",
                "No (100% Passive)",
                "Lettuce, Mint, Spinach, Pak Choi, Coriander",
                "Very Easy (Best #1 Start)"
              ],
              [
                "2. Deep Water Culture (DWC)",
                "Roots float in deep nutrient water oxygenated by a small aquarium air pump",
                "Low (5W–15W Air Pump)",
                "Lettuce, Basil, Herbs, Fast Leafy Greens",
                "Easy"
              ],
              [
                "3. Nutrient Film Technique (NFT)",
                "A water pump circulates a thin shallow stream of nutrient water through sloped pipes",
                "Yes (Water Pump 24/7)",
                "Commercial Lettuce, Strawberry, Mint, Herbs",
                "Medium (Needs backup power)"
              ],
              [
                "4. Dutch Bucket (Drip System)",
                "Large 11L buckets filled with cocopeat/perlite fed by small drip tubes on a timer",
                "Low (Pump runs 4–6x/day)",
                "Tomato, Capsicum, Cucumber, Melon, Brinjal",
                "Medium (Best for Vegetables)"
              ],
              [
                "5. Cocopeat Grow Bags (Slab)",
                "Long UV poly bags filled with buffered cocopeat fed by drip emitters",
                "Low (Timer Drip)",
                "Tomato, Cucumber, Strawberry, Rockmelon",
                "Medium"
              ],
              [
                "6. Wick System",
                "A cotton/nylon rope pulls nutrient water up into a small pot of cocopeat",
                "No (100% Passive)",
                "Small herbs, indoor micro-plants, seedlings",
                "Very Easy (Slow growth)"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "We divide these systems into two families: Passive Systems and Active Systems. A Passive System—like the famous Kratky Method invented by Dr. Bernard Kratky at the University of Hawaii—uses zero electricity, zero water pumps, and zero timers. You simply fill a plastic crate with water and nutrients once, place your seedlings in the lid leaving a 2-inch air space at the top, and harvest 30 days later! Even if load-shedding happens for 10 hours, your Kratky plants are 100% safe."
            },
            {
              "type": "p",
              "text": "Active Systems use small pumps to move water or air. In Deep Water Culture (DWC), an inexpensive aquarium air pump bubbles oxygen into a tank of water. In Nutrient Film Technique (NFT), a submersible pump pushes water through sloped food-grade channels. And for big, heavy fruiting plants with massive root systems—like Tomatoes, Bell Peppers, and Cucumbers—we use Dutch Buckets or Cocopeat Grow Bags watered by small drip lines. Never put big tomato plants inside narrow 3-inch NFT pipes, because their huge roots will clog the pipe and flood your floor!"
            }
          ]
        },
        {
          "id": "wp_219",
          "wpId": 219,
          "slug": "lesson-1-05-building-first-zero-electricity-kratky-box-bangladesh",
          "courseId": "course1",
          "code": "1.05",
          "sortOrder": 5,
          "title": "Lesson 1.05: Building Your First Zero-Electricity Kratky Box (Under ৳1,500 BDT)",
          "subtitle": "Step-by-Step DIY Construction Guide Using Local Bangladeshi Materials",
          "readTime": "15 Min Read",
          "objectives": [
            "Gather the exact local materials needed to build a 30-liter, 12-plant Kratky box for under ৳1,500.",
            "Understand the difference between \"Oxygen Roots\" (upper fuzzy roots in air) and \"Water Roots\" (lower drinking roots).",
            "Learn why you must NEVER refill a Kratky box all the way to the top once the plant has grown air roots."
          ],
          "keyFormula": "💡 Key Principle: Kratky Secret: Top 3–5 cm of root zone = Moist Air (Oxygen Roots) | Bottom root zone = Nutrient Solution (Water Roots)",
          "bdFieldTip": "To prevent mosquitoes from laying eggs inside your Kratky box, make sure the lid fits tightly around the edges and each hole holds a net pot snugly with no open gaps to the water.",
          "table": {
            "headers": [
              "Item Needed",
              "Specification / Size",
              "Where to Find in Bangladesh",
              "Estimated Cost (৳ BDT)"
            ],
            "rows": [
              [
                "1. Plastic Storage Box / Crate",
                "30L to 40L volume, 15–20 cm deep, opaque (not clear)",
                "RFL / Gazi plastic shop or local fruit crate + black poly sheet",
                "৳350 – ৳550"
              ],
              [
                "2. Lid / Floating Board",
                "1-inch thick high-density Styrofoam (Cork sheet) or plastic lid",
                "Hardware / packaging market or Hydroponics BD raft board",
                "৳120 – ৳200"
              ],
              [
                "3. Net Pots (12 pieces)",
                "2-inch or 3-inch slotted hydroponic plastic net cups",
                "Hydroponics BD online shop (pack of 12–50)",
                "৳120 – ৳180"
              ],
              [
                "4. Growing Media",
                "Washed cocopeat + small sponge cubes or LECA clay balls",
                "Local nursery or Hydroponics BD starter kit",
                "৳100 – ৳150"
              ],
              [
                "5. Liquid Nutrient A + B",
                "1 Liter Stock A + 1 Liter Stock B (makes 200 Liters of feed)",
                "Hydroponics BD balanced A+B set",
                "৳350 – ৳450"
              ],
              [
                "Total Complete Setup",
                "Produces 12 heads of fresh lettuce or herbs every 30 days",
                "Zero electricity bill!",
                "৳1,040 – ৳1,530"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Step 1: Take a 30-liter opaque plastic storage box (about 60 cm long × 40 cm wide × 18 cm deep). If you use a slotted plastic fruit crate (which is very cheap in Bangladesh), simply line the inside with a thick double layer of black UV polythene sheet so it holds water without leaking and blocks all sunlight. Step 2: Cut a piece of 1-inch thick Styrofoam (cork sheet) or use the plastic box lid so it fits snugly over the top. Step 3: Using a heated metal tin can or a 2-inch hole saw, cut 12 evenly spaced round holes (about 15 cm apart from center to center) so your net pots sit flush in the holes with their rims supported by the lid."
            },
            {
              "type": "p",
              "text": "How the Kratky Magic Works: When you first put young seedlings into the net pots, fill the box with nutrient water until the water surface just barely touches the bottom 0.5 cm of each net pot. Over the next two weeks, the roots grow downward into the water while the plants drink the water down. As the water level drops, a humid 4–5 cm air gap opens up under the lid! The upper roots grow fuzzy white hairs that breathe oxygen from that moist air gap, while the lower root tips drink water from the bottom. Crucial Rule: If you need to add water mid-cycle, never fill it above halfway—submerging the upper air roots will drown the plant!"
            }
          ]
        },
        {
          "id": "wp_220",
          "wpId": 220,
          "slug": "lesson-1-06-growing-media-guide-bangladesh-cocopeat-rice-husk-leca",
          "courseId": "course1",
          "code": "1.06",
          "sortOrder": 6,
          "title": "Lesson 1.06: Growing Media Guide for Bangladesh — Cocopeat, Rice Husk Char, LECA Clay & Sponge",
          "subtitle": "How to Choose, Wash, and Buffer Local Soilless Substrates So Seedlings Thrive",
          "readTime": "13 Min Read",
          "objectives": [
            "Understand what a \"growing medium\" (substrate) does: holding moisture and oxygen around the stem without rotting.",
            "Learn why raw Bangladeshi cocopeat often contains high sea salt (sodium/potassium) and how to wash and buffer it.",
            "Compare reusable media (LECA clay balls, sponge cubes) vs. organic media (cocopeat + rice husk char / perlite)."
          ],
          "keyFormula": "💡 Key Principle: Safe Cocopeat Rule: Soak & Flush Raw Cocopeat Until Runoff EC < 0.5 mS/cm Before Planting!",
          "bdFieldTip": "When filling Dutch Buckets or Grow Bags for tomatoes and capsicum, never use 100% fine cocopeat dust alone—it holds too much water during humid monsoon days. Mix 70% washed cocopeat with 30% Perlite or coarse Carbonized Rice Husk (আধাপোড়া তুষের ছাই) for perfect root drainage.",
          "table": {
            "headers": [
              "Growing Medium",
              "Water Holding",
              "Air Porosity",
              "Reusable?",
              "Best Use Case in Bangladesh"
            ],
            "rows": [
              [
                "Cocopeat (Washed Coconut Coir)",
                "Very High (8x weight)",
                "Medium",
                "2 to 3 cycles",
                "Seedling trays, Dutch Buckets, Grow Bags (mix 70% coco : 30% perlite/char)"
              ],
              [
                "PU Germination Sponge Cubes",
                "High",
                "High",
                "Single use (1 cycle)",
                "Best clean medium for NFT pipes, DWC rafts, and Kratky net pots"
              ],
              [
                "LECA Expanded Clay Pebbles",
                "Low",
                "Extremely High",
                "Yes (5+ years!)",
                "Holding plants inside 2-inch & 3-inch net pots; top layer of Dutch buckets"
              ],
              [
                "Perlite (Expanded Volcanic Glass)",
                "Medium",
                "Very High",
                "2 to 3 cycles",
                "Mixed 30% with cocopeat or used 100% in Dutch buckets for tomatoes"
              ],
              [
                "Carbonized Rice Husk (Burnt Chai)",
                "Low-Medium",
                "High",
                "1 to 2 cycles",
                "Low-cost local Bangladesh alternative to perlite for aerating cocopeat"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In Bangladesh, Cocopeat (coconut husk dust compressed into 5 kg blocks or sold loose in sacks from Bagerhat and Barishal) is the most popular and affordable substrate. However, coconut trees in coastal districts absorb salty groundwater, and husks are often soaked in brackish pond water during processing. If you plant delicate seeds directly into unwashed raw cocopeat, the high sodium and chloride salt will burn the roots! Before using any cocopeat block, soak it in a large tub of clean water, let it expand, drain the brown water through a mosquito net or cloth bag, and rinse it 2 to 3 times with fresh water until your TDS/EC pen shows the drained water is below 0.5 mS/cm (or 250 ppm)."
            },
            {
              "type": "p",
              "text": "For water-based systems like Kratky, DWC, and NFT channels, avoid putting loose cocopeat directly into slotted net pots where it can wash out into the water and clog pumps. Instead, germinate your seeds in small 25mm slotted Polyurethane (PU) Foam Sponges, and surround the sponge inside the net pot with washed LECA Clay Pebbles (or clean ¾-inch brick chips boiled in water as an ultra-low-cost local substitute!)."
            }
          ]
        },
        {
          "id": "wp_221",
          "wpId": 221,
          "slug": "lesson-1-07-seed-selection-high-success-nursery-germination-guide",
          "courseId": "course1",
          "code": "1.07",
          "sortOrder": 7,
          "title": "Lesson 1.07: Seed Selection & High-Success Nursery Germination Step-by-Step",
          "subtitle": "How to Achieve 90%+ Seed Germination and Grow Strong, Stocky Seedlings in 12 Days",
          "readTime": "14 Min Read",
          "objectives": [
            "Select the right hydroponic seed varieties for Bangladesh (heat-tolerant lettuce, BARI hybrid vegetables).",
            "Follow the 5-step germination protocol in PU sponges or cocopeat seedling trays without drowning seeds.",
            "Prevent the #1 beginner nursery failure: tall, weak, \"leggy\" white stems caused by leaving sprouted seeds in the dark."
          ],
          "keyFormula": "💡 Key Principle: Rule #1 of Seedlings: Keep Dark & Moist Until Sprouting (48–72 hrs) → Give Immediate Morning Sunlight the Moment the Loop Appears!",
          "bdFieldTip": "During hot Bangladeshi summer months (April–August), lettuce seeds can enter \"thermo-dormancy\" and refuse to sprout if temperatures exceed 30°C. Trick: Place your damp seeded lettuce sponge tray inside a plastic zip-bag in the bottom vegetable crisper drawer of your home refrigerator for 36 hours, then bring it out to sprout at 95% success!",
          "table": {
            "headers": [
              "Crop Type",
              "Seed Soaking Time",
              "Days to Sprout (Dark)",
              "Nursery Feed (Week 1–2)",
              "Ready to Transplant (True Leaves)"
            ],
            "rows": [
              [
                "Lettuce (Grand Rapids / Batavia / Romaine)",
                "Do not soak (sow direct)",
                "2 to 3 days (keep cool < 26°C)",
                "Plain water Days 1–4, then EC 0.6",
                "Day 10 to 12 (3–4 true leaves)"
              ],
              [
                "Coriander (Dhonia – Split Seeds)",
                "Soak 8–12 hours in clean water",
                "5 to 7 days",
                "EC 0.6 – 0.8 mS/cm after sprouting",
                "Day 12 to 14"
              ],
              [
                "Pak Choi / Mustard / Spinach",
                "No soak needed",
                "2 to 3 days",
                "EC 0.6 – 0.8 mS/cm after Day 4",
                "Day 10 to 12"
              ],
              [
                "Tomato (BARI Hybrid-8 / Cherry)",
                "Soak 4 hours in warm water",
                "3 to 5 days",
                "EC 0.8 – 1.0 mS/cm after cotyledons open",
                "Day 18 to 21 (4–5 true leaves)"
              ],
              [
                "Sweet Pepper (Capsicum) & Cucumber",
                "Soak 4–6 hours",
                "3 to 6 days (Cucumber: 2–3 days)",
                "EC 0.8 – 1.0 mS/cm",
                "Cucumber: Day 10–12 | Capsicum: Day 21–25"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Step 1 (Preparation): If you are growing leafy greens for Kratky, DWC, or NFT, take a sheet of 1-inch hydroponic germination sponges and submerge it in clean plain water (no fertilizer yet!). Squeeze the sponges underwater so all trapped air bubbles escape and the foam becomes fully moist. Step 2 (Seeding): Place 1 seed (for lettuce/pak choi/tomato) or 3–4 split seeds (for coriander/spinach) into the shallow cross-cut slit at the top of each sponge cube—only 2 to 3 millimeters deep! Never bury seeds at the bottom of the sponge where they cannot push out. Step 3 (Dark Sprouting): Place the tray inside a shaded room covered loosely with a dark plastic lid or damp newspaper for 48 to 72 hours so moisture does not evaporate."
            },
            {
              "type": "p",
              "text": "Step 4 (The Critical Light Transition): Check your tray every morning and evening. The very moment you see tiny white hooks or green seed leaves (cotyledons) emerging—usually on Day 2 or Day 3—immediately uncover the tray and move it into bright morning sunlight! If you leave sprouted seeds in a dark room for even one extra day, they will stretch frantically looking for light, turning into thin, floppy, noodle-like stems (\"leggy seedlings\") that snap and die. Once the first tiny leaves open flat on Day 5, replace the plain water in the bottom of the tray with a mild Half-Strength Starter Nutrient Solution (EC 0.6 to 0.8 mS/cm)."
            }
          ]
        },
        {
          "id": "wp_222",
          "wpId": 222,
          "slug": "lesson-1-08-understanding-water-quality-beginners-tap-tubewell-rainwater",
          "courseId": "course1",
          "code": "1.08",
          "sortOrder": 8,
          "title": "Lesson 1.08: Understanding Water Quality for Beginners — Tap Water, Tube Well & Rainwater",
          "subtitle": "Know Your Starting Water Before Adding a Single Drop of Fertilizer",
          "readTime": "11 Min Read",
          "objectives": [
            "Understand why two farmers using the exact same fertilizer can get different results because of their local water.",
            "Learn how to check your raw water TDS/EC, smell for chlorine, and test for iron staining.",
            "Know how to harvest and store pure monsoon rainwater for zero-cost hydroponic perfection."
          ],
          "keyFormula": "💡 Key Principle: Total Solution EC = Starting Water EC + Added Fertilizer EC (Keep Starting Water EC < 0.5 mS/cm)",
          "bdFieldTip": "Bangladesh receives over 2,000 mm of free rainwater every year! Placing a clean gutter pipe under a tin or concrete roof into a 500-liter plastic Gazi/RFL tank gives you thousands of liters of laboratory-grade hydroponic water for free.",
          "table": {
            "headers": [
              "Water Source in Bangladesh",
              "Typical Starting EC (mS/cm) / TDS",
              "Common Characteristics",
              "How to Prepare It for Hydroponics"
            ],
            "rows": [
              [
                "Collected Rainwater (Monsoon)",
                "0.02 – 0.05 mS/cm (10 – 25 ppm)",
                "Ultra-pure, slightly acidic, zero minerals",
                "Filter through cloth/mesh; best water on earth for hydroponics!"
              ],
              [
                "Dhaka / City WASA Tap Water",
                "0.25 – 0.45 mS/cm (125 – 225 ppm)",
                "Contains dissolved Calcium/Magnesium + Chlorine gas",
                "Let sit in an open bucket for 12–24 hours so chlorine evaporates"
              ],
              [
                "Deep Tube Well (> 500 ft)",
                "0.35 – 0.65 mS/cm (175 – 325 ppm)",
                "Hard water (high bicarbonates, pH 7.4–7.8)",
                "Works well, but requires slightly more pH Down to reach pH 6.0"
              ],
              [
                "Shallow Tube Well (High Iron)",
                "0.40 – 0.80 mS/cm (200 – 400 ppm)",
                "Turns reddish-brown when exposed to air; clogs drippers",
                "Aerate in a settling tank for 24 hrs, let red iron settle, and filter"
              ],
              [
                "Coastal Brackish Water (Khulna/Satkhira)",
                "> 1.50 mS/cm (> 750 ppm Sodium)",
                "High sodium chloride (sea salt) toxic to roots",
                "Blend 50:50 with harvested rainwater or use a small RO filter"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Most clean groundwater and municipal tap water in Bangladesh is not pure H₂O—it already contains naturally dissolved limestone minerals like Calcium, Magnesium, and Bicarbonates. In mild amounts (an EC below 0.5 mS/cm, or TDS below 250 ppm), these natural minerals are actually helpful to plants! However, if your municipal water smells strongly of bleaching powder (chlorine), let it stand in an open plastic drum for 24 hours in the shade before using it so the free chlorine gas escapes harmlessly into the air."
            },
            {
              "type": "p",
              "text": "What if your rural tube well water turns a white shirt yellow or leaves a rusty orange ring inside a bucket? That means your water has high dissolved ferrous iron (Fe²⁺). When that water touches air in your hydroponic tank, the iron oxidizes into rusty sludge that coats plant roots and blocks drip nozzles. To fix this simply: pump your tube well water into a holding drum, bubble air into it for 12 hours so the iron turns red and sinks to the bottom, and draw only the clear top water through a sand/cloth filter!"
            }
          ]
        },
        {
          "id": "wp_223",
          "wpId": 223,
          "slug": "lesson-1-09-plant-food-made-simple-tank-a-and-tank-b-liquid-nutrients",
          "courseId": "course1",
          "code": "1.09",
          "sortOrder": 9,
          "title": "Lesson 1.09: Plant Food Made Simple — What Are Tank A and Tank B Liquid Nutrients?",
          "subtitle": "Why Hydroponic Fertilizer Comes in Two Bottles and How to Mix Them Safely in 3 Minutes",
          "readTime": "12 Min Read",
          "objectives": [
            "Understand why ordinary soil fertilizers (like Urea, TSP, and MOP) cannot be used alone in hydroponics.",
            "Learn why hydroponic nutrients are always sold as a two-part set (Stock Solution A and Stock Solution B).",
            "Follow the exact step-by-step dilution method (e.g., 5 ml A + 5 ml B per liter of water) without causing cloudiness."
          ],
          "keyFormula": "💡 Key Principle: Golden Mixing Rule: Fill Water Tank First → Add Bottle A & Stir Well → Add Equal Amount of Bottle B & Stir!",
          "bdFieldTip": "Store your Bottle A and Bottle B stock solutions inside a cool, dark cupboard or closed box away from sunlight. If light shines on transparent nutrient bottles, green algae will grow inside your fertilizer!",
          "table": {
            "headers": [
              "Nutrient Group",
              "Minerals Included",
              "Which Bottle Contains It?",
              "What It Builds Inside Your Plant"
            ],
            "rows": [
              [
                "Primary Macronutrients",
                "Nitrogen (N), Phosphorus (P), Potassium (K)",
                "N in Bottle A & B | P & K in Bottle B",
                "Green leaves, strong stems, deep roots, and sweet fruits"
              ],
              [
                "Secondary Macronutrients",
                "Calcium (Ca), Magnesium (Mg), Sulfur (S)",
                "Calcium in Bottle A | Mg & Sulfur in Bottle B",
                "Strong cell walls (prevents tip burn/rot) and green chlorophyll"
              ],
              [
                "Essential Micronutrients (Trace)",
                "Iron (Fe), Manganese, Boron, Zinc, Copper, Molybdenum",
                "Chelated Iron in Bottle A | Rest in Bottle B",
                "Enzymes, flower pollination, and new shoot growth"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Complete hydroponic plant food contains all 13 essential mineral elements in pure, water-soluble form. When you buy a beginner nutrient kit from Hydroponics BD, you receive two bottles: Bottle A (Stock A) and Bottle B (Stock B). Why two bottles instead of one? Because Bottle A contains concentrated Calcium, while Bottle B contains concentrated Sulfates and Phosphates. If a manufacturer mixed concentrated Calcium and Sulfate inside the same small bottle, they would chemically react to form solid white chalk (Gypsum / Plaster of Paris) that sinks to the bottom like a rock!"
            },
            {
              "type": "p",
              "text": "However, once they are diluted in a large tank of water, they stay 100% dissolved and happy together. That is why you must ALWAYS follow the Golden Mixing Rule: 1) Fill your hydroponic box or bucket with clean water first. 2) Measure the required milliliters of Bottle A (typically 3 ml to 5 ml per liter of water), pour it into the water tank, and stir well for 20 seconds. 3) Rinse your measuring cup, measure the exact same milliliters of Bottle B, pour it into the water tank, and stir again! Never pour concentrated Bottle A and concentrated Bottle B into the same small measuring cup before adding water."
            }
          ]
        },
        {
          "id": "wp_224",
          "wpId": 224,
          "slug": "lesson-1-10-how-to-use-digital-ph-meter-and-tds-ec-pen",
          "courseId": "course1",
          "code": "1.10",
          "sortOrder": 10,
          "title": "Lesson 1.10: How to Use a Digital pH Meter & TDS/EC Pen Like a Pro",
          "subtitle": "Your Two Essential Dashboard Gauges: Measuring Nutrient Strength (EC) and Acidity (pH)",
          "readTime": "14 Min Read",
          "objectives": [
            "Understand EC / TDS in simple terms: \"How much food is dissolved in the water?\"",
            "Understand pH in simple terms: \"Is the water at the right acidity so the plant mouth can open and eat that food?\"",
            "Learn how to raise or lower pH safely using phosphoric acid (pH Down) and care for your digital probes."
          ],
          "keyFormula": "💡 Key Principle: Sweet Spot for 95% of Hydroponic Crops: pH = 5.5 to 6.5 (Ideal: 5.8 – 6.2) | EC = 0.8 (Seedling) → 1.4 (Leafy) → 2.4 (Fruiting)",
          "bdFieldTip": "Always rinse the tip of your pH and EC meter in clean tap water after testing and put the protective cap back on. Never let the glass bulb at the tip of a pH meter dry out completely or bang against the bottom of a bucket.",
          "table": {
            "headers": [
              "Meter Reading",
              "What It Means in Plain English",
              "Target for Leafy Greens",
              "Target for Fruiting Tomatoes/Peppers",
              "How to Fix It If Wrong"
            ],
            "rows": [
              [
                "EC Too Low (< 0.8 mS/cm / < 400 ppm)",
                "Soup is too weak; plants are hungry and pale green",
                "1.2 – 1.6 mS/cm (600 – 800 ppm)",
                "1.8 – 2.6 mS/cm (900 – 1300 ppm)",
                "Add equal amounts of Nutrient A + Nutrient B"
              ],
              [
                "EC Too High (> 3.0 mS/cm / > 1500 ppm)",
                "Soup is too salty; plants wilt and leaf tips burn",
                "1.2 – 1.6 mS/cm",
                "1.8 – 2.6 mS/cm",
                "Add plain fresh water to dilute the tank"
              ],
              [
                "pH Too High (> 6.8 — Alkaline)",
                "Iron & Calcium get locked out; new leaves turn yellow!",
                "5.8 – 6.2",
                "5.8 – 6.3",
                "Add a few drops of pH Down (Diluted Phosphoric Acid), stir, re-test"
              ],
              [
                "pH Too Low (< 5.2 — Acidic)",
                "Water is too sour; roots get damaged",
                "5.8 – 6.2",
                "5.8 – 6.3",
                "Add fresh tap water or a few drops of pH Up (Potassium Hydroxide)"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "First, what is EC (Electrical Conductivity) or TDS (Total Dissolved Solids)? Pure distilled water does not conduct electricity. When you dissolve mineral fertilizer salts (Tank A + B) into water, those minerals conduct a tiny electrical current. An EC pen simply measures how strong your nutrient soup is! Most inexpensive pens display TDS in \"ppm\" (parts per million), where 500 ppm equals an EC of 1.0 mS/cm. For young seedlings, keep your water mild (350–450 ppm / EC 0.7–0.9). For growing lettuce and herbs, aim for 600–800 ppm (EC 1.2–1.6). For heavy fruiting tomatoes and capsicum, aim for 1000–1300 ppm (EC 2.0–2.6)."
            },
            {
              "type": "p",
              "text": "Second, what is pH? pH measures whether water is acidic (like lemon juice, pH 2.0), neutral (pure water, pH 7.0), or alkaline (like soap water, pH 9.0). Plant roots can only absorb all 13 minerals—especially Iron and Calcium—when the water is very slightly acidic, between pH 5.5 and 6.5 (with 5.8 to 6.2 being the gold standard). Since most Bangladeshi tube well and WASA tap water starts around pH 7.2 to 7.8, after mixing your nutrients you simply dip your pH meter in the water, add a few milliliters of food-grade \"pH Down\" solution, stir for 30 seconds, and watch the reading settle neatly to 6.0!"
            }
          ]
        },
        {
          "id": "wp_225",
          "wpId": 225,
          "slug": "lesson-1-11-transplanting-seedlings-into-net-pots-first-week-care",
          "courseId": "course1",
          "code": "1.11",
          "sortOrder": 11,
          "title": "Lesson 1.11: Transplanting Seedlings into Net Pots & First-Week Root Care",
          "subtitle": "Moving 12-Day-Old Seedlings into Your Hydroponic System Without Transplant Shock",
          "readTime": "11 Min Read",
          "objectives": [
            "Recognize \"true leaves\" versus initial seed leaves (cotyledons) and inspect for white root tips below the sponge.",
            "Transplant seedlings in the cool late afternoon (4:30 PM – 6:00 PM) to avoid midday sun wilt.",
            "Set the exact initial water level so young roots never dry out during their first 5 days in the main system."
          ],
          "keyFormula": "💡 Key Principle: Day 1 Transplant Water Level Rule: Water Surface Must Touch the Bottom 0.5 cm of the Net Pot Until Roots Grow Down!",
          "bdFieldTip": "For the first 2 days after transplanting on a sunny Bangladeshi rooftop, drape a 50% green shade net over your box so the newly moved seedlings adjust smoothly to full outdoor wind and sunlight.",
          "table": {
            "headers": [
              "Transplant Checklist Step",
              "Correct Action",
              "Common Beginner Mistake to Avoid"
            ],
            "rows": [
              [
                "1. Check Seedling Readiness",
                "Wait until 3–4 true leaves appear and white roots poke 1–2 cm out the bottom of the sponge",
                "Transplanting tiny 4-day sprouts with no roots sticking out of the sponge"
              ],
              [
                "2. Choose Time of Day",
                "Transplant in late afternoon (after 4:30 PM) so plants rest overnight",
                "Transplanting at 12:00 PM noon under blazing hot sun"
              ],
              [
                "3. Insert into Net Pot",
                "Gently guide emerging white roots through a bottom slot of the net pot and surround with LECA pebbles",
                "Crushing or tearing the delicate main taproot against hard plastic"
              ],
              [
                "4. Set Water Level (Kratky/DWC)",
                "Fill tank so nutrient water touches the bottom 0.5 cm of the net pot",
                "Leaving a 5 cm gap on Day 1 before the short roots can reach the water!"
              ],
              [
                "5. Set Starter Nutrient EC",
                "Start at EC 1.0 – 1.2 mS/cm (500–600 ppm) and pH 5.8 – 6.2",
                "Shocking young seedlings with full-strength EC 2.5 solution on Day 1"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Always perform transplanting in the late afternoon (around 4:30 PM to 6:00 PM) when the sun is gentle. Take your 2-inch or 3-inch slotted net pot and place your seedling sponge cube gently in the center. If a white root is already long, carefully thread it through one of the bottom openings of the net pot so it hangs down freely. If your sponge is slightly smaller than the net pot, drop a few washed LECA clay balls around the sides of the sponge to hold it upright and block sunlight from shining down through the net pot into your tank."
            },
            {
              "type": "p",
              "text": "Now pay close attention to the #1 mistake beginners make on Transplant Day: remember how in Lesson 1.05 we talked about the Kratky air gap? On Day 1 of transplanting, your baby seedling roots are still very short! If you leave a 2-inch air gap below the net pot on Day 1, the short roots hanging just below the sponge will hang in dry air above the water and wither within hours. On Transplant Day, your nutrient water level MUST touch the bottom 0.5 cm of the net pot so the sponge wicks moisture. Over the next 5 to 7 days, as the roots grow 5 to 8 cm long down into the water, the water level will naturally drop and create the air gap automatically!"
            }
          ]
        },
        {
          "id": "wp_226",
          "wpId": 226,
          "slug": "lesson-1-12-first-crop-guide-lettuce-mint-coriander-spinach-30-days",
          "courseId": "course1",
          "code": "1.12",
          "sortOrder": 12,
          "title": "Lesson 1.12: Your First Crop Guide — Growing Lettuce, Mint, Coriander & Spinach in 30 Days",
          "subtitle": "A Complete Week-by-Week Grow Schedule for Fast-Success Leafy Greens in Bangladesh",
          "readTime": "15 Min Read",
          "objectives": [
            "Follow the exact Week 1, Week 2, Week 3, and Week 4 schedule for leafy greens after transplanting.",
            "Learn how to grow Mint (Pudina) from free market stem cuttings in water with zero seed cost.",
            "Discover why hydroponic Coriander (Bilati & Deshi Dhonia) during the rainy season is one of Bangladesh’s most profitable crops."
          ],
          "keyFormula": "💡 Key Principle: Leafy Green Formula: Mild EC (1.2 – 1.6 mS/cm) + Cool Roots (< 28°C) + pH 5.8–6.2 = Zero Bitterness & Rapid Leaf Growth",
          "bdFieldTip": "Harvest lettuce and coriander early in the morning (between 6:00 AM and 7:30 AM) when leaves are crisp, cool, and turgid with moisture. Afternoon-harvested lettuce wilts twice as fast!",
          "table": {
            "headers": [
              "Growth Stage",
              "Days After Transplant",
              "Target EC (mS/cm) / TDS",
              "Target pH",
              "What You Should See & Do"
            ],
            "rows": [
              [
                "Week 1: Root Establishment",
                "Day 1 to Day 7",
                "1.0 – 1.2 mS/cm (500–600 ppm)",
                "5.8 – 6.0",
                "White roots grow 5–10 cm into water; 2 new leaves unfold on top"
              ],
              [
                "Week 2: Rapid Rosette Growth",
                "Day 8 to Day 14",
                "1.2 – 1.4 mS/cm (600–700 ppm)",
                "5.8 – 6.2",
                "Leaves double in size every 4 days; air gap forms below Kratky lid"
              ],
              [
                "Week 3: Canopy Filling",
                "Day 15 to Day 21",
                "1.4 – 1.6 mS/cm (700–800 ppm)",
                "6.0 – 6.2",
                "Plants drink 100–150 ml/day; ensure good airflow across leaves"
              ],
              [
                "Week 4: Harvest Readiness",
                "Day 22 to Day 30",
                "1.2 – 1.4 mS/cm (lower in heat)",
                "6.0 – 6.2",
                "Full 200g–250g lettuce heads or lush coriander bunches ready to harvest!"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Four Champion Beginner Crops for Bangladesh: 1) Salad Lettuce (Grand Rapids, Lollo Bionda, Lollo Rossa, and Batavia varieties): These loose-leaf and Batavia varieties tolerate warmer Bangladeshi temperatures much better than tight Iceberg heads, producing crisp, sweet salad leaves in 28 days after transplant. 2) Mint (Pudina): You do not even need seeds! Buy a fresh bunch of mint from your local kitchen market, pick off the bottom leaves from 10 cm healthy stems, and place the bare stems in sponge cubes touching water. Within 5 days, white roots burst out of the nodes, and you can cut fresh mint every 15 days for months! 3) Coriander (Dhonia Pata): Gently crush whole coriander seeds into two halves before soaking so both embryos sprout evenly. 4) Palong Shak (Spinach) & Pak Choi: Extremely vigorous feeders that thrive in Kratky and DWC boxes."
            },
            {
              "type": "p",
              "text": "Important Hot-Weather Rule: When daytime temperatures in Bangladesh climb above 32°C, plants transpire (sweat) large amounts of water relative to the minerals they eat. In hot weather, keep your nutrient EC slightly lower—around 1.1 to 1.3 mS/cm (550–650 ppm)—so the plants can drink freely without experiencing leaf-edge tip burn."
            }
          ]
        },
        {
          "id": "wp_227",
          "wpId": 227,
          "slug": "lesson-1-13-ten-minute-daily-routine-water-roots-leaves-pests",
          "courseId": "course1",
          "code": "1.13",
          "sortOrder": 13,
          "title": "Lesson 1.13: The 10-Minute Daily Routine — Checking Water Level, Roots, Leaves & Pests",
          "subtitle": "How to Inspect Your Hydroponic Garden Every Morning in Just 10 Minutes",
          "readTime": "11 Min Read",
          "objectives": [
            "Perform the 4-step morning check in under 10 minutes before going to work or tending other farm duties.",
            "Learn how to read root health by color and smell before any damage shows on the upper leaves.",
            "Use yellow sticky traps and weekly neem oil misting to stop pests before an outbreak begins."
          ],
          "keyFormula": "💡 Key Principle: Healthy Roots = Bright Creamy White & Fresh Cucumber Smell | Sick Roots = Slimy Brown & Rotten Smell",
          "bdFieldTip": "Never spray neem oil or any foliar spray on leaves under hot midday sun—water droplets act like magnifying glasses and can burn leaf tissue. Always spray after 5:00 PM!",
          "table": {
            "headers": [
              "Daily Check (2–3 Mins Each)",
              "What to Look For",
              "Normal / Healthy Sign",
              "Warning Sign Requiring Action"
            ],
            "rows": [
              [
                "1. System & Power Check",
                "Air bubbles (DWC), water flow (NFT), or lid seal (Kratky)",
                "Steady stream/bubbles; no leaks on floor",
                "Dry pump, clogged dripper tube, or fallen shade net"
              ],
              [
                "2. Root Zone Inspection",
                "Lift 1 net pot or corner of lid and look at the roots",
                "Creamy white roots with fuzzy lateral hairs",
                "Brown, mushy roots that pull off easily (water too hot / low oxygen)"
              ],
              [
                "3. Water Level, EC & pH",
                "Dip EC & pH meter into reservoir (every 2–3 days for Kratky)",
                "pH 5.6–6.4, EC stable within target range",
                "Water level too low or pH drifted above 6.8"
              ],
              [
                "4. Leaf & Pest Scout",
                "Turn over 3–4 leaves and inspect the underside + sticky traps",
                "Clean, flat, vibrant green leaves",
                "Tiny green aphids, whiteflies, or black spots on leaf undersides"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Start by lifting one net pot slightly to peek at the roots. Healthy hydroponic roots are a sight of beauty: they look like clean white noodles covered in tiny fishbone hairs, and they smell fresh like freshly cut cucumber or clean earth. If you ever see roots turning dark brown, slimy, or smelly, your water temperature is getting too hot or your oxygen gap has been flooded. Next, check your water level. When topping up a Kratky or DWC box mid-week, use half-strength nutrient solution (EC 0.8–1.0) adjusted to pH 5.8, remembering never to submerge the upper air-breathing root zone in a Kratky tank."
            },
            {
              "type": "p",
              "text": "Finally, hang one inexpensive Yellow Sticky Trap sheet just above your plants. Winged insects like whiteflies, aphids, and leaf miners are strongly attracted to the bright yellow color and get stuck on the glue. By glancing at your yellow sticky trap each morning, you will spot the very first insect visitor days before they can lay eggs under your leaves! As a safe preventative shield, spray a fine mist of organic Neem Oil (2 ml cold-pressed neem oil + 0.5 ml liquid dish soap per liter of water) on the tops and undersides of leaves once a week in the evening."
            }
          ]
        },
        {
          "id": "wp_228",
          "wpId": 228,
          "slug": "lesson-1-14-common-beginner-mistakes-how-to-rescue-struggling-plants",
          "courseId": "course1",
          "code": "1.14",
          "sortOrder": 14,
          "title": "Lesson 1.14: Common Beginner Mistakes & How to Rescue Struggling Plants",
          "subtitle": "A Visual Troubleshooting Doctor Guide for Yellow Leaves, Tip Burn, Algae & Wilting",
          "readTime": "13 Min Read",
          "objectives": [
            "Diagnose why young top leaves turn yellow while veins stay green (High pH Iron Lockout).",
            "Understand how to stop green algae slime from stealing oxygen and nutrients in your tank.",
            "Learn how to prevent inner leaf \"Tip Burn\" on lettuce during warm Bangladeshi afternoons."
          ],
          "keyFormula": "💡 Key Principle: 90% of \"Nutrient Deficiencies\" in Beginner Hydroponics Are Actually Caused by High pH (> 6.8), Not Missing Fertilizer!",
          "bdFieldTip": "When in doubt and a tank looks cloudy, smelly, or out of balance, do not keep pouring chemicals in—simply drain the old water onto your garden trees, rinse the box, and refill with a fresh, clean batch of A+B nutrients at pH 6.0!",
          "table": {
            "headers": [
              "Symptom You See on Plant",
              "Real Root Cause",
              "How to Rescue Your Plants Immediately"
            ],
            "rows": [
              [
                "Tall, thin, floppy seedlings falling over",
                "Insufficient sunlight (kept indoors or in dark shade after sprouting)",
                "Move gradually into 5–6 hours of direct morning sun; support stem with LECA pebbles in net pot"
              ],
              [
                "Green slimy water & green fuzz on roots",
                "Light leaking into nutrient reservoir (clear plastic container or open holes)",
                "Paint container black/white or wrap in black poly/foil; plug any empty net pot holes"
              ],
              [
                "Newest top leaves turn pale yellow-white",
                "pH has risen above 6.8, locking out Iron (Fe) even though Iron is in the water",
                "Test pH and lower to 5.8 using pH Down; new leaves will turn green within 4 days"
              ],
              [
                "Oldest bottom leaves turn pale yellow",
                "Nutrient solution is too weak (low Nitrogen / low EC)",
                "Check EC and top up with balanced Stock A + Stock B to reach EC 1.4 mS/cm"
              ],
              [
                "Brown, crispy edges on inner young lettuce leaves",
                "Calcium Tip Burn caused by hot, stagnant air and overly strong EC",
                "Increase breeze/airflow over plants, add 50% shade net at noon, and lower EC to 1.2 mS/cm"
              ],
              [
                "Sudden daytime wilting even though roots are in water",
                "Drowned air roots (tank overfilled) or hot water (> 32°C) causing root suffocation",
                "Lower water level to expose upper 4 cm of roots to air; shade the reservoir tank immediately"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Let us look at the two most common beginner calls our agronomists receive in Bangladesh. Call #1: \"My water turned bright green like pond water and my roots are covered in green slime!\" This is Algae. Algae are microscopic water plants whose spores float in the air everywhere. Whenever two things meet—Fertilizer Water + Sunlight—algae explode! Algae steal dissolved oxygen at night and suffocate your plant roots. The cure is 100% light-proofing: never use clear water bottles or translucent buckets without wrapping them completely in black polythene and white/silver outer cover, and always cover any unused holes in your lid."
            },
            {
              "type": "p",
              "text": "Call #2: \"My plants are turning yellow at the top—should I dump in more fertilizer?\" Hold on! Before adding more fertilizer, test your pH. Nine times out of ten, the beginner used alkaline tap/tube well water (pH 7.5+) and never adjusted the pH down to 6.0. Above pH 6.8, dissolved Iron becomes chemically insoluble, so the plant cannot absorb it even if the tank is full of nutrients. Simply adjusting the pH to 5.8 unlocks the iron already sitting in your tank!"
            }
          ]
        },
        {
          "id": "wp_229",
          "wpId": 229,
          "slug": "lesson-1-15-harvesting-cleaning-system-graduating-to-course-2",
          "courseId": "course1",
          "code": "1.15",
          "sortOrder": 15,
          "title": "Lesson 1.15: Harvesting, Post-Harvest Cooling, Cleaning Your System & Starting Cycle #2",
          "subtitle": "Course 1 Graduation: How to Harvest Crisp Produce, Sanitize Tanks, and Step Up to Commercial Systems",
          "readTime": "12 Min Read",
          "objectives": [
            "Choose between Outer-Leaf Harvesting (continuous harvest for 6 weeks) and Whole-Head Live-Root Harvesting.",
            "Sanitize your boxes, lids, and net pots between crop cycles so zero algae or pathogens carry over.",
            "Review your Course 1 Beginner Foundation mastery and transition smoothly into Course 2 (Commercial Systems)."
          ],
          "keyFormula": "💡 Key Principle: Live-Root Harvest Bonus: Keeping Clean White Hydroponic Roots Attached in a Moist Bag Doubles Shelf Life from 4 Days to 10+ Days!",
          "bdFieldTip": "You have now mastered the fundamentals of hydroponics from absolute zero! You are ready to advance to Course 2: Intermediate Commercial Farming, where we will design circulating NFT pipes, Dutch Bucket tomato & capsicum farms, tropical polyhouses, and profitable commercial operations in Bangladesh.",
          "table": {
            "headers": [
              "End-of-Cycle Step",
              "How to Perform It",
              "Why It Matters"
            ],
            "rows": [
              [
                "1. Early Morning Harvest (6:00–7:30 AM)",
                "Harvest before strong sun hits the leaves; dip heads in cool clean water",
                "Locks in maximum crispness, sweetness, and vitamin content"
              ],
              [
                "2. Live-Root Packaging (Optional)",
                "Pull sponge + clean roots out of net pot and wrap root ball in damp tissue/bag",
                "Keeps lettuce & herbs alive and crisp for days without refrigeration"
              ],
              [
                "3. Drain & Scrub Reservoir",
                "Empty remaining water onto soil plants; scrub inner box walls with a soft sponge",
                "Removes biofilm and leftover mineral salt rings"
              ],
              [
                "4. Sanitize Net Pots & LECA Pebbles",
                "Soak plastic net pots & clay pebbles in 1 tablespoon household bleach per 5L water for 30 mins, then rinse thoroughly",
                "Guarantees 100% disease-free start for your next batch of seedlings"
              ],
              [
                "5. Overlap Nursery Timing",
                "Sow Cycle #2 seeds in your nursery tray on Day 18 of Cycle #1!",
                "The day you harvest Cycle #1, your new 12-day-old seedlings are ready to transplant immediately!"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "You have two great ways to harvest your leafy greens. For family kitchen use, practice the \"Cut-and-Come-Again\" method: instead of pulling the whole plant out, simply snap or snip the outer 4 to 6 largest leaves from each lettuce or spinach plant, leaving the central growing heart intact. The plant will immediately push out fresh new leaves, letting you harvest from the same box for another 3 to 4 weeks! Alternatively, if you are selling or gifting whole heads, lift the entire plant with its sponge and clean white root ball out of the net pot—keeping the living roots attached keeps the vegetable fresh twice as long as soil-cut produce."
            },
            {
              "type": "p",
              "text": "Before putting new seedlings into your box, always spend 20 minutes cleaning and sanitizing. Drain any remaining old nutrient solution (pour it around mango, lemon, or flower pots in soil—they love it!), scrub the inside of the tank and net pots with a mild bleach or hydrogen peroxide solution, rinse thoroughly with clean water, and let them dry in the sun for an hour. And remember the Pro Nursery Overlap Trick: start your next batch of seeds in your small nursery tray 12 days BEFORE you plan to harvest your main box, so your system never sits empty!"
            }
          ]
        }
      ]
    },
    {
      "id": "course2",
      "icon": "🏗️",
      "badge": "Course 2 • 15 Lessons",
      "titleEn": "Course 2: Intermediate Commercial Systems & Crops",
      "titleBn": "কোর্স ২: বাণিজ্যিক হাইড্রোপনিক্স সিস্টেম ও ফসল উৎপাদন (১৫টি পাঠ)",
      "descEn": "Master commercial NFT channels, Deep Water Culture (DWC) rafts, Dutch Bucket drip systems, tropical polyhouse design, BARI Tomato/Capsicum/Strawberry production, IPM, and farm ROI.",
      "descBn": "বাণিজ্যিক NFT চ্যানেল, DWC ফ্লোটিং র‍্যাফট, ডাচ বাকেট ড্রিপ সিস্টেম, পলিহাউস ডিজাইন, বারি টমেটো/ক্যাপসিকাম/স্ট্রবেরি উৎপাদন, বালাই ব্যবস্থাপনা ও খামারের লাভ-ক্ষতি হিসাব।",
      "color": "#0284c7",
      "lessons": [
        {
          "id": "wp_230",
          "wpId": 230,
          "slug": "lesson-2-01-designing-commercial-nft-nutrient-film-technique-system",
          "courseId": "course2",
          "code": "2.01",
          "sortOrder": 1,
          "title": "Lesson 2.01: Designing a Commercial NFT (Nutrient Film Technique) Leafy Greens System",
          "subtitle": "Slope Geometry, Channel Sizing, Flow Rates, and Reservoir Volume Engineering",
          "readTime": "16 Min Read",
          "objectives": [
            "Calculate the exact vertical drop required for a 1:40 slope so water flows in a shallow 2–3 mm oxygenated film.",
            "Understand why rectangular flat-bottom food-grade UPVC channels outperform round grey drainage PVC pipes.",
            "Size your underground/shaded reservoir tank at a minimum of 0.5 Liters per plant site."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: NFT Golden Engineering Spec: Slope = 1:40 to 1:50 (2% – 2.5%) | Flow Rate = 1.0 to 2.0 Liters/Min per Channel | Max Channel Length = 12 Meters",
          "bdFieldTip": "Always install a simple bypass valve with a venturi tee on your main pump return line inside the reservoir tank. The excess pump pressure shoots a jet of bubbly oxygenated water back into the tank 24/7 at zero extra electricity cost!",
          "table": {
            "headers": [
              "NFT Design Parameter",
              "Standard Commercial Specification",
              "What Happens If You Violate This Rule"
            ],
            "rows": [
              [
                "Channel Profile",
                "Flat-bottom rectangular 100mm × 50mm food-grade white UPVC",
                "Round pipes pool deep stagnant water in the center and starve side roots"
              ],
              [
                "Channel Slope (Gradient)",
                "1:40 to 1:50 (2.0 to 2.5 cm drop per meter of pipe length)",
                "Too flat (<1%): water pools & heats up; Too steep (>4%): water races past roots"
              ],
              [
                "Flow Rate per Channel",
                "1.0 to 2.0 Liters per minute (60 – 120 L/hour per gully)",
                "Low flow causes severe dissolved oxygen & temperature spikes at the tail end"
              ],
              [
                "Maximum Single Channel Length",
                "6 meters (rooftop) to 12 meters maximum (commercial)",
                "Over 15 meters, plants at the inlet eat all oxygen and tail-end plants stunt"
              ],
              [
                "Plant Hole Spacing",
                "20 cm center-to-center for Lettuce/Herbs (5 plants per meter)",
                "Crowding at 12 cm causes leaf shading, fungal rot, and underweight heads"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "The word \"Film\" in Nutrient Film Technique is critical: in a properly engineered NFT channel, the nutrient water should NEVER fill the pipe halfway! Instead, a small 4mm to 6mm micro-tube injects water at the high end of a sloped channel at a rate of 1.0 to 2.0 Liters per minute. The water flows down the flat bottom of the channel as a paper-thin 2 to 3 millimeter film. The bottom tips of the root mat drink from this moving stream, while the entire upper surface of the root mat sits in moist air inside the channel, absorbing abundant oxygen."
            },
            {
              "type": "p",
              "text": "In Bangladesh, many DIY builders use round 4-inch grey sanitary PVC pipes with end-caps that hold 4 cm of standing water inside the pipe. That is actually a pipe-DWC hybrid, not true NFT—and during hot Bangladeshi summers, standing water inside thin grey PVC heats up rapidly and causes root rot. For commercial reliability, use white UV-stabilized rectangular NFT channels mounted on a galvanized steel bench with a precise 2 cm drop for every 100 cm of length, draining freely back into a shaded reservoir through a 2-inch return manifold."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_231",
          "wpId": 231,
          "slug": "lesson-2-02-deep-water-culture-dwc-floating-raft-high-heat-regions",
          "courseId": "course2",
          "code": "2.02",
          "sortOrder": 2,
          "title": "Lesson 2.02: Deep Water Culture (DWC) & Floating Raft Systems for High-Heat Regions",
          "subtitle": "Using High Water Thermal Mass to Protect Crop Roots During 38°C Bangladeshi Summers",
          "readTime": "14 Min Read",
          "objectives": [
            "Understand \"Thermal Mass\" and why deep water beds stay cool during extreme summer heatwaves and power outages.",
            "Design a concrete-lined or brick-and-polythene commercial DWC raft bed with Venturi + regenerative air blower aeration.",
            "Calculate dissolved oxygen aeration requirements (liters of air per minute per 100 liters of nutrient solution)."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Thermal Stability Rule: A 25 cm Deep DWC Trough Holds 250 Liters/m² — Heating Up 5x Slower Than Thin NFT Pipes in Summer!",
          "bdFieldTip": "When drilling net-pot holes in floating Styrofoam rafts, paint the top surface of the foam with non-toxic white acrylic water-based paint or food-grade plastic film—this stops moss from growing on the foam and makes the rafts last 5+ years!",
          "table": {
            "headers": [
              "Engineering Feature",
              "NFT Channel System",
              "Commercial DWC Floating Raft Bed",
              "Winner for Hot / Load-Shedding Areas"
            ],
            "rows": [
              [
                "Water Volume per m² of Crop",
                "15 to 25 Liters / m²",
                "200 to 250 Liters / m² (20–25 cm deep)",
                "DWC Raft (10x higher thermal buffer)"
              ],
              [
                "Survival Time During Power Cut",
                "45 to 90 minutes in midday sun",
                "12 to 24+ hours without wilting",
                "DWC Raft (Roots remain submerged)"
              ],
              [
                "Construction Material in Bangladesh",
                "Imported UPVC channels + steel stands",
                "Local brick wall + 500-micron pond liner + cork rafts",
                "DWC Raft (40% lower local build cost)"
              ],
              [
                "Aeration Requirement",
                "Natural film surface exchange",
                "Requires continuous air stones / Venturi circulation",
                "NFT uses slightly less air power"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Enter the Commercial Deep Water Culture (DWC) Floating Raft Bed! Instead of elevated plastic pipes, you build a long, level rectangular trough on the ground (typically 1.2 meters wide × 15 to 30 meters long × 25 cm deep) using a single layer of local bricks lined with a heavy-duty 500-micron black/white UV geomembrane liner. You fill the trough 22 cm deep with nutrient solution and float 1-inch high-density EPS foam boards (rafts) directly on the water surface."
            },
            {
              "type": "p",
              "text": "Because a 1.2m × 20m trough holds over 5,000 liters of water resting directly against the cool earth, its \"thermal mass\" is huge—even when the afternoon air hits 38°C, the deep water stays around 26°C to 28°C! And because the foam rafts float directly on the water, even if a power outage stops your circulation pump for 8 hours, the roots never dry out. To keep the deep water rich in oxygen, place cylindrical silicon carbide air stones every 1.5 meters along the trough floor connected to a commercial regenerative ring blower."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_232",
          "wpId": 232,
          "slug": "lesson-2-03-dutch-bucket-bato-bucket-drip-systems-fruiting-crops",
          "courseId": "course2",
          "code": "2.03",
          "sortOrder": 3,
          "title": "Lesson 2.03: Dutch Bucket (Bato Bucket) Drip Systems for Heavy Fruiting Crops",
          "subtitle": "Complete Engineering Blueprint for Commercial Tomatoes, Capsicum, Cucumbers & Melons",
          "readTime": "16 Min Read",
          "objectives": [
            "Understand how the internal siphon elbow maintains a 2.5 cm moisture reserve at the bottom of every Dutch Bucket.",
            "Configure the 16mm LDPE feed line, 2 L/hr PC arrow drippers, and 50mm PVC central drainage return pipe.",
            "Set up a pulse irrigation timer schedule tailored for sunny vs. cloudy monsoon days in Bangladesh."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Dutch Bucket Pulse Rule: Irrigate 5 to 8 Times Daily for 3–5 Minutes Each → Aim for 15% to 25% Runoff Return to Reservoir!",
          "bdFieldTip": "In a Dutch Bucket row, space buckets 40 cm to 45 cm apart (center-to-center) within the row, and leave 1.2 meters to 1.5 meters of walking aisle between double rows so workers can prune, pollinate, and harvest comfortably.",
          "table": {
            "headers": [
              "Component",
              "Commercial Specification",
              "Engineering Purpose"
            ],
            "rows": [
              [
                "Dutch Bucket (Bato Bucket)",
                "11-Liter UV-stabilized virgin polypropylene (30×25×23 cm)",
                "Houses massive root balls of tomato, capsicum, or cucumber for 6–9 months"
              ],
              [
                "Internal Siphon Drain Elbow",
                "Creates a 2.5 cm bottom reservoir before overflowing into drain pipe",
                "Prevents crop death during pump failure while stopping root waterlogging"
              ],
              [
                "Bottom Drainage Layer",
                "3 cm layer of LECA clay pebbles (or net bag) covering siphon elbow",
                "Prevents fine cocopeat or perlite particles from washing into the drain pipe"
              ],
              [
                "Main Substrate Fill",
                "70% Washed/Buffered Cocopeat + 30% Perlite (or 100% Coarse Perlite)",
                "Balances moisture retention with 30% air-filled porosity around roots"
              ],
              [
                "Drip Emitter Assembly",
                "2.0 L/hr Pressure-Compensating (PC) Button Dripper + 2-way arrow stakes",
                "Ensures the 1st bucket and the 50th bucket in a row receive identical water volume"
              ],
              [
                "Central Return Drain Pipe",
                "50mm (2-inch) PVC pipe with pre-drilled 25mm entry holes under buckets",
                "Collects excess runoff and returns it to the sump tank (recirculating) or drain"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "How the Dutch Bucket Works: Each 11-liter bucket sits on top of a 2-inch (50mm) PVC drainage pipe laid along the greenhouse floor at a slight 1% slope. Inside the bottom of each bucket is a clever L-shaped siphon elbow that snaps into the drain hole about 2.5 cm above the bucket floor. When your drip irrigation timer turns on, fresh nutrient solution drips into the top of the cocopeat/perlite medium, flushes fresh oxygen down through the roots, fills the bottom 2.5 cm reserve pool, and any excess drains cleanly out through the elbow into the 2-inch PVC return pipe."
            },
            {
              "type": "p",
              "text": "Unlike NFT where the pump runs 24 hours a day, a Dutch Bucket pump only runs on a digital cycle timer for 3 to 5 minutes at a time, 5 to 8 times during daylight hours (and zero times at night, except 1 brief pre-dawn flush in extreme heat). Always adjust your timer so that 15% to 25% of the water you drip in comes back out the drain pipe—this \"leaching fraction\" flushes out excess salts so the cocopeat EC never spikes!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_233",
          "wpId": 233,
          "slug": "lesson-2-04-pumps-plumbing-filtration-backup-power-engineering",
          "courseId": "course2",
          "code": "2.04",
          "sortOrder": 4,
          "title": "Lesson 2.04: Pumps, Plumbing, Filtration & Backup Power Engineering for Bangladesh",
          "subtitle": "Sizing Submersible vs. Centrifugal Pumps, 120-Mesh Disc Filters, Venturis & Solar/IPS Backup",
          "readTime": "15 Min Read",
          "objectives": [
            "Read a pump performance curve: understanding Maximum Head (lifting height) vs. Real Flow Rate at working height.",
            "Install a 120-mesh Y-type disc filter and backflush valve so drip emitters never clog with cocopeat or iron particles.",
            "Design a low-cost IPS / DC Solar Battery backup system tailored for rural Bangladesh power conditions."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Pump Sizing Rule: Required Pump Flow (L/hr) = (Total Channels × 90 L/hr) × 1.3 Safety Factor at Your Actual Lifting Height (Head)!",
          "bdFieldTip": "Pro Engineering Tip for NFT Farms: Instead of buying one big 200W submersible pump, put TWO 100W submersible pumps side-by-side in your main manifold! If one pump ever jams at night, the second pump keeps 60%+ flow running across all channels so you never lose a crop.",
          "table": {
            "headers": [
              "Farm Scale & System Type",
              "Recommended Pump Type & Power",
              "Filtration Required",
              "Backup Power Strategy"
            ],
            "rows": [
              [
                "Small Rooftop NFT (100–300 Plants)",
                "Submersible Magnetic Pump (45W – 85W, 3,000–4,500 L/hr, 3.5m Head)",
                "Inline 80-mesh sponge/screen pre-filter",
                "Standard Home IPS or 12V 50Ah Battery + Mini Inverter"
              ],
              [
                "Medium Commercial NFT/DWC (1,000–2,500 Plants)",
                "Dual Submersible Pumps (120W × 2 for redundancy) or 0.5 HP Centrifugal",
                "1-inch 120-Mesh Y-Disc Filter",
                "1000VA Pure Sine Wave IPS + 150Ah Tubular Battery (10+ hrs)"
              ],
              [
                "Commercial Dutch Bucket Polyhouse (500–1,500 Buckets)",
                "0.75 HP to 1.5 HP Surface Centrifugal Pump (High pressure for PC drippers)",
                "1.5-inch 120-Mesh Disc Filter + Pressure Gauge",
                "Low duty-cycle (pump runs only 30 mins/day total!) — easily runs on small IPS/Generator"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Always check two numbers on a pump specification chart: Maximum Flow (Qmax at 0 meters height) and Maximum Head (Hmax, the height where flow drops to zero). If your NFT channels sit 1.2 meters above your underground reservoir water level, you must check how many liters per hour the pump delivers at 1.5 meters of head—not at zero meters! Furthermore, for Dutch Bucket drip systems using Pressure-Compensating (PC) drippers, magnetic aquarium submersible pumps do not produce enough pressure (bar/PSI) to open the silicone diaphragms inside PC drippers. For drip systems over 100 buckets, use a surface centrifugal pump (0.5 HP to 1.0 HP) capable of 1.5 to 2.5 bar working pressure."
            },
            {
              "type": "p",
              "text": "Never connect a pump to micro-tubes or drip emitters without installing a 120-Mesh Y-Type Disc Filter right after the pump outlet! Even one tiny grain of sand, snail shell, or cocopeat fiber will block a 2 L/hr dripper and kill a fruiting tomato plant. Unscrew your disc filter once a week and rinse the grooved plastic discs in a bucket of water—it takes 2 minutes and saves your entire crop."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_234",
          "wpId": 234,
          "slug": "lesson-2-05-tropical-polyhouse-shade-net-structure-design-bangladesh",
          "courseId": "course2",
          "code": "2.05",
          "sortOrder": 5,
          "title": "Lesson 2.05: Tropical Polyhouse & Shade-Net Structure Design for Monsoon & Summer",
          "subtitle": "Engineering Sawtooth Roof Vents, 200-Micron UV Polyfilm, 40-Mesh Insect Screens & Cyclone Bracing",
          "readTime": "15 Min Read",
          "objectives": [
            "Understand why European-style sealed greenhouses turn into 50°C ovens in Bangladesh unless modified for the tropics.",
            "Combine a 200-micron UV-diffused top polyfilm roof (rain shield) with 40-mesh insect-net sidewalls (natural breeze).",
            "Use retractable 50% shade nets and high-pressure fogging/misting to drop afternoon temperatures by 5°C–7°C."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Tropical Polyhouse Rule: Never Build a Sealed Low-Roof Plastic Tent in Bangladesh — Ridge Height Must Be 4.5m–5.5m with a Top Roof Vent!",
          "bdFieldTip": "Always install a double-door entry airlock (a small 2m × 2m netted vestibule with two doors) at the entrance of your polyhouse, and enforce a rule that Door #1 must close before Door #2 opens!",
          "table": {
            "headers": [
              "Structural Element",
              "Recommended Bangladesh Specification",
              "Why It Is Essential in Our Climate"
            ],
            "rows": [
              [
                "Roof Geometry",
                "Naturally Ventilated Sawtooth or Split-Arch with 1.0m Top Ridge Vent",
                "Hot air rises and escapes continuously through the roof vent (chimney effect)"
              ],
              [
                "Gutter & Ridge Height",
                "Gutter Height: 3.5m – 4.0m | Center Ridge Height: 4.8m – 5.5m",
                "Keeps the hot air pocket high above plant canopies"
              ],
              [
                "Roof Covering Material",
                "200-Micron 5-Layer UV-Stabilized Anti-Drip Diffused Polyfilm",
                "Blocks heavy monsoon rain (preventing reservoir flooding & leaf blight) while scattering light"
              ],
              [
                "Sidewall Cladding",
                "40-Mesh UV White Anti-Virus Insect Netting (all 4 sides)",
                "Blocks whiteflies, aphids, thrips, and fruit borers while allowing cross-wind"
              ],
              [
                "Internal Thermal/Shade Screen",
                "Retractable 50% Green/Black Shade Net or Aluminet below gutter",
                "Pulled closed from 11:30 AM to 3:30 PM on scorching summer days"
              ],
              [
                "Entry Doorway",
                "Double-Door Airlock Porch with Footbath & Yellow Sticky Traps",
                "Prevents pests from flying inside when workers enter or exit"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "For Bangladesh’s subtropical monsoon climate, we use a specialized architecture called a Naturally Ventilated Tropical Polyhouse. Here is how it works: the roof is covered with clear 200-micron UV-stabilized diffused polyethylene film to keep 100% of monsoon rain off your crops and nutrient tanks. However, the roof is built with an overlapping split-arch or sawtooth vent at the very peak (covered in insect mesh) so rising hot air escapes automatically. Meanwhile, all four sidewalls are covered NOT in plastic, but in fine 40-mesh insect-proof netting!"
            },
            {
              "type": "p",
              "text": "This combination gives you the best of both worlds: natural breeze blows through the 40-mesh sidewalls across your plants, hot air rises out the 5-meter-high roof vent, zero rain enters your tanks, and 95% of insects (like tomato leaf-curl whiteflies and fruit borers) are physically locked outside! For budget-conscious leafy green growers, even a simple GI-pipe umbrella roof with a 200-micron poly top and open/netted sides costs 50% less than a full polyhouse while protecting your NFT channels year-round."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_235",
          "wpId": 235,
          "slug": "lesson-2-06-commercial-leafy-greens-production-lettuce-kale-herbs",
          "courseId": "course2",
          "code": "2.06",
          "sortOrder": 6,
          "title": "Lesson 2.06: Commercial Leafy Greens Production — Butterhead, Romaine, Kale & Exotic Herbs",
          "subtitle": "Staggered Weekly Harvest Scheduling, Bolting Prevention, and B2B Supermarket Standards",
          "readTime": "14 Min Read",
          "objectives": [
            "Eliminate the \"Feast-or-Famine\" trap by dividing your farm into 4 weekly cohorts for continuous cash flow.",
            "Select heat-resistant commercial varieties (Batavia, Romaine, Lollo Rossa, Genovese Basil, Italian Parsley, Kale).",
            "Prevent premature bolting (bitter flower stalks) and tip burn through airflow and root-zone cooling."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: 4-Cohort Staggered Rule: Divide Your NFT Channels into 4 Equal Blocks → Sow & Harvest 25% of Your Farm Every 7 Days!",
          "bdFieldTip": "For red-leaf lettuce varieties (like Lollo Rossa or Red Oakleaf), remove the shade net during the final 5 days before harvest—direct morning sunlight triggers anthocyanin pigment production, turning the leaves a deep, vibrant burgundy red that chefs love!",
          "table": {
            "headers": [
              "Commercial Crop",
              "Best Cultivars for Bangladesh",
              "Days in Nursery",
              "Days in NFT / DWC",
              "Target EC & pH",
              "Average Market Weight & Wholesale Price"
            ],
            "rows": [
              [
                "Batavia / Crisphead Lettuce",
                "Rex, Muir, Rebelina (Heat-Tolerant)",
                "12 Days",
                "26 – 28 Days",
                "EC 1.2–1.5 | pH 5.8–6.0",
                "200–250g/head (৳220–320/kg)"
              ],
              [
                "Red & Green Oakleaf / Lollo",
                "Lollo Rossa, Lollo Bionda",
                "12 Days",
                "25 – 28 Days",
                "EC 1.2–1.4 | pH 5.8–6.0",
                "180–220g/head (৳280–400/kg)"
              ],
              [
                "Romaine (Cos) Lettuce",
                "Parris Island, Jericho",
                "12 Days",
                "28 – 32 Days",
                "EC 1.3–1.6 | pH 5.8–6.2",
                "250–300g/head (৳200–300/kg)"
              ],
              [
                "Sweet Italian Basil",
                "Genovese Compact",
                "10 Days",
                "21 Days (then cut every 14d)",
                "EC 1.4–1.8 | pH 5.8–6.2",
                "100g bunches (৳400–600/kg)"
              ],
              [
                "Curly Kale & Swiss Chard",
                "Dwarf Green Curled, Fordhook",
                "14 Days",
                "30 Days (then pick for 90d)",
                "EC 1.6–2.0 | pH 6.0–6.4",
                "200g packs (৳350–500/kg)"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "To run a professional commercial leafy green farm, divide your grow channels into 4 equal production blocks (Block A, Block B, Block C, and Block D). If your total capacity is 2,000 plants in the main NFT channels plus a 500-plant nursery bench, you sow 500 seeds every single Saturday. Every Saturday morning, you harvest 500 mature heads from the oldest block, sanitize those channels in 1 hour, and transplant 500 14-day-old seedlings from the nursery into that block! Now you have steady, predictable weekly harvests and weekly cash flow 52 weeks a year."
            },
            {
              "type": "p",
              "text": "To produce sweet, non-bitter lettuce in Bangladesh between March and October, never buy cheap winter-only Iceberg seed packets meant for cold climates—they will \"bolt\" (shoot up a tall, bitter flower stem filled with white milky sap) as soon as the temperature hits 30°C. Instead, use heat-tolerant Batavia, Romaine, and Lollo Rossa cultivars, keep your reservoir buried underground so water stays below 27°C, and run horizontal circulation fans to prevent calcium tip burn."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_236",
          "wpId": 236,
          "slug": "lesson-2-07-commercial-hydroponic-tomato-production-bari-hybrid-cherry",
          "courseId": "course2",
          "code": "2.07",
          "sortOrder": 7,
          "title": "Lesson 2.07: Commercial Hydroponic Tomato Production (BARI Hybrid & Cherry Tomatoes)",
          "subtitle": "Single-Stem High-Wire Trellising, Sucker Pruning, Generative Steering & Blossom-End Rot Control",
          "readTime": "17 Min Read",
          "objectives": [
            "Distinguish between Determinate (bush) and Indeterminate (vine) tomato varieties and why greenhouses use single-stem indeterminate vines.",
            "Perform weekly side-shoot (\"sucker\") pruning, lower leaf de-leafing, and J-hook twine lowering.",
            "Prevent Blossom-End Rot (black sunken bottoms on tomatoes) by managing Calcium, EC, and daytime humidity."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Tomato Nutrient Steering: Stage 1 Vegetative (N:K = 1 : 1.1) → Stage 2 Flowering (N:K = 1 : 1.5) → Stage 3 Heavy Fruiting (N:K = 1 : 2.0 + High Ca!)",
          "bdFieldTip": "Once your first bottom cluster (truss) of tomatoes begins turning orange-red, snap off the oldest leaves below that cluster. This exposes the ripening fruit to light and lets breeze move freely along the bucket tops, cutting fungal disease by 80%.",
          "table": {
            "headers": [
              "Tomato Growth Phase",
              "Timeline (Days After Transplant)",
              "Target EC (mS/cm) & pH",
              "Key Potassium : Calcium : Nitrogen Focus",
              "Canopy & Pruning Task"
            ],
            "rows": [
              [
                "Stage 1: Vegetative Establishment",
                "Day 1 to Day 21",
                "EC 1.6 – 2.0 | pH 5.8 – 6.0",
                "N: 160 ppm | K: 180 ppm | Ca: 150 ppm",
                "Attach roller twine clip; pinch all axillary side suckers weekly"
              ],
              [
                "Stage 2: First 3 Flower Trusses",
                "Day 22 to Day 45",
                "EC 2.2 – 2.5 | pH 5.8 – 6.2",
                "N: 170 ppm | K: 260 ppm | Ca: 180 ppm",
                "Vibrate flower trusses daily at 10 AM; install plastic truss support arches"
              ],
              [
                "Stage 3: Heavy Fruit Bulking & Harvest",
                "Day 46 to Day 180+",
                "EC 2.5 – 3.2 | pH 5.8 – 6.2",
                "N: 180 ppm | K: 340 ppm | Ca: 200 ppm",
                "Remove bottom 2–3 old leaves below ripening truss each week for airflow"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "In a commercial Dutch Bucket polyhouse, we plant 2 seedlings per 11-liter bucket (about 2.5 to 3.0 stems per square meter of greenhouse floor). Each stem is clipped with reusable plastic vine clips to a UV twine string hanging from an overhead 2.5-meter steel trellis wire. Every 5 to 7 days, you must walk the rows and snap off the small shoots (\"suckers\") that sprout in the 45-degree armpit between the main stem and each leaf branch. If you fail to prune suckers, the plant turns into a tangled jungle of leaves with tiny, poor-quality fruit! Keep all energy flowing up a single central leader stem."
            },
            {
              "type": "p",
              "text": "Watch out for Blossom-End Rot (BER)—where the bottom tip of developing green tomatoes turns brown, leathery, and sunken. Beginners often think BER is a fungal disease and spray fungicides in vain. In reality, Blossom-End Rot is a localized Calcium (Ca²⁺) deficiency in the fruit! Because Calcium moves inside the plant only through the water-transpiration stream (xylem), if your root-zone EC is too salty (> 3.8 mS/cm), if a dripper clogs for half a day, or if you over-feed Ammonium/Potassium relative to Calcium, calcium fails to reach the fruit tip. Keep your drip schedule consistent, ensure 20% drainage runoff, and use our HydroGuide BD Tomato Fruiting recipe!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_237",
          "wpId": 237,
          "slug": "lesson-2-08-commercial-colored-bell-pepper-capsicum-production",
          "courseId": "course2",
          "code": "2.08",
          "sortOrder": 8,
          "title": "Lesson 2.08: Commercial Colored Bell Pepper (Capsicum) Production in Dutch Buckets",
          "subtitle": "Two-Stem Spanish V-Training, Crown Flower Removal, and High-Value Red/Yellow Harvesting",
          "readTime": "15 Min Read",
          "objectives": [
            "Remove the first central \"Crown Flower\" at the primary Y-fork so the young pepper plant does not stunt.",
            "Train each capsicum plant into two strong vertical main stems (V-System) supported by overhead twine.",
            "Manage Calcium and Boron nutrition plus shade-netting to prevent sunscald and thick-walled fruit cracking."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Capsicum Golden Rule: Pinch Off the First \"King/Crown Flower\" at the First Fork so the Plant Builds a StrongVegetative Frame First!",
          "bdFieldTip": "Capsicum stems are brittle like glass at the joints—never bend them sharply during midday when cells are full of water! Always do stem twisting and clipping in the late afternoon when stems are slightly more flexible.",
          "table": {
            "headers": [
              "Management Stage",
              "Action Required",
              "Target EC & pH",
              "Why This Step Is Critical for Yield"
            ],
            "rows": [
              [
                "1. First Fork (Days 20–28)",
                "Pinch off the single central \"King/Crown Flower\" bud in the first Y-split",
                "EC 1.8 – 2.0 | pH 5.8 – 6.0",
                "If left on, the first crown fruit steals all energy and stops stem growth for 3 weeks"
              ],
              [
                "2. V-Stem Selection (Day 30)",
                "Select the 2 strongest branches at the Y-fork and tie each to its own overhead string",
                "EC 2.0 – 2.3 | pH 5.8 – 6.2",
                "Creates an open V-shaped canopy with high light penetration"
              ],
              [
                "3. Side-Branch Pruning",
                "At every upper node on the 2 main stems, keep 1 fruit + 2 leaves and pinch the side shoot tip",
                "EC 2.2 – 2.6 | pH 5.8 – 6.2",
                "Balances leaf area with fruit load so every bell pepper grows blocky and heavy (180–220g)"
              ],
              [
                "4. Color Ripening & Harvest",
                "Harvest Green at 45 days after flower OR wait 65–70 days for full Red/Yellow color",
                "EC 2.4 – 2.8 | pH 6.0 – 6.2",
                "Red and Yellow capsicum sell for 2x the price of green capsicum in Dhaka supershops!"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "The secret to high commercial capsicum yield lies in how you manage the plant’s architecture during the first 35 days. A young capsicum plant grows up as a single stem until it reaches about 25–30 cm tall, where it naturally splits into a \"Y\" fork of two or three branches—and right in the middle of that fork sits a fat flower bud called the \"King Flower\" or \"Crown Flower.\" Every beginner gets excited seeing that first flower and leaves it on. Big mistake! If that first crown flower sets a fruit while the plant is still tiny, the plant puts 100% of its energy into that single pepper and stops growing upward. Always pinch off the first crown flower (and even the second level of flowers if the plant is small) until your plant has a sturdy 50 cm vegetative frame!"
            },
            {
              "type": "p",
              "text": "From the first Y-fork, select the two strongest stems and tie each stem to a separate vertical twine string forming a \"V\" shape. As each of those two main stems grows upward, it will fork again at every node. Keep the stronger branch as your continuing main leader, and pinch the tip of the weaker side branch just one leaf past its flower! This ensures every developing bell pepper is shaded by healthy leaves (preventing white sunscald patches on the fruit skin) while keeping the plant tidy."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_238",
          "wpId": 238,
          "slug": "lesson-2-09-commercial-english-seedless-cucumber-rockmelon-production",
          "courseId": "course2",
          "code": "2.09",
          "sortOrder": 9,
          "title": "Lesson 2.09: Commercial English Seedless Cucumber & Rockmelon Production",
          "subtitle": "Managing Parthenocarpic Cucumbers and High-Brix Netted Melons in Cocopeat/Dutch Buckets",
          "readTime": "15 Min Read",
          "objectives": [
            "Understand why commercial polyhouse cucumber growers use 100% female Parthenocarpic (seedless) seeds.",
            "Prune all fruit and laterals from the bottom 5 nodes of a cucumber vine so roots establish rapidly.",
            "Master the single-fruit-per-vine net bag suspension and final-week Potassium/EC brix boost for luxury Rockmelons."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Cucumber Speed Formula: Seedless Parthenocarpic Varieties Need ZERO Insects inside the Polyhouse | Rockmelon Sweetness: Raise EC to 2.8–3.2 in Final 10 Days!",
          "bdFieldTip": "To make hydroponic Rockmelons taste extraordinarily sweet (14% to 16% Brix sugar), raise your nutrient EC to 2.8–3.2 mS/cm with extra Potassium Sulfate and reduce watering volume by 25% during the final 10 days before harvest!",
          "table": {
            "headers": [
              "Crop Feature",
              "Parthenocarpic Greenhouse Cucumber",
              "Commercial Netted Rockmelon (Cantaloupe/Melon)"
            ],
            "rows": [
              [
                "Seed Type & Pollination",
                "100% Female Parthenocarpic — sets seedless fruit with ZERO pollination!",
                "Monoecious/Andromonoecious — requires hand pollination at Nodes 10–13"
              ],
              [
                "Days from Transplant to First Harvest",
                "28 to 35 Days (Fastest fruiting crop in hydroponics!)",
                "65 to 75 Days per crop cycle"
              ],
              [
                "Fruit Load Allowed",
                "1 fruit per node on main stem from Node 6 upward (25–35 fruits/plant)",
                "Strictly 1 to 2 perfection fruits per vine (hung in nylon net hammocks)"
              ],
              [
                "Vegetative vs. Fruiting EC",
                "Veg: EC 1.6 – 1.8 | Fruiting: EC 2.0 – 2.4 mS/cm (pH 5.8)",
                "Veg: EC 1.6 – 2.0 | Netting: EC 2.4 | Ripening Brix Boost: EC 2.8 – 3.2"
              ],
              [
                "Target Yield & Bangladesh Market",
                "6 to 9 kg per vine in a 90-day cycle (Supershop & salad grade)",
                "1.5 to 2.2 kg per fruit (Sells for ৳250–450 per single luxury melon!)"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Crucial Seed Rule for Cucumbers: Because a commercial polyhouse is enclosed with 40-mesh insect netting to keep out pests, there are no wild bees inside. If you plant ordinary open-field deshi cucumber seeds inside a closed net house, the female flowers will yellow and drop off without pollination! Instead, always purchase \"Parthenocarpic\" (all-female, self-setting seedless) hybrid cucumber seeds. In fact, with parthenocarpic cucumbers, you MUST keep bees out—because if a bee accidentally pollinates a seedless cucumber flower, the fruit becomes crooked, bulbous, and full of hard seeds! Pinch off all baby cucumbers and side shoots on the lowest 5 leaf nodes (the first 50 cm of stem) so the vine builds a strong root system before setting fruit from Node 6 upward."
            },
            {
              "type": "p",
              "text": "What about luxury Netted Rockmelons (Japanese Musk Melon / Sweet Cantaloupe)? Rockmelons grow wonderfully in Dutch Buckets in Bangladesh’s warm climate! Unlike cucumbers, rockmelons require careful hand pollination: allow the main vine to climb untouched to Node 10. Between Node 10 and Node 14, let lateral side shoots grow, hand-pollinate 2–3 female flowers using a freshly picked male flower between 8:00 AM and 10:00 AM, and once the baby melons are the size of a chicken egg, select the single most symmetrical fruit, pinch off all other fruits, and cradle that prized melon in a hanging mesh bag tied to the overhead wire!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_239",
          "wpId": 239,
          "slug": "lesson-2-10-commercial-strawberry-production-vertical-a-frames-gutters",
          "courseId": "course2",
          "code": "2.10",
          "sortOrder": 10,
          "title": "Lesson 2.10: Commercial Strawberry Production in Vertical A-Frames & Hanging Gutters",
          "subtitle": "Crown Planting Depth, Low-Salt EC Management, and Winter High-Profit Farming in Bangladesh",
          "readTime": "15 Min Read",
          "objectives": [
            "Understand why strawberries are the most salt-sensitive crop in hydroponics and why EC must stay below 1.5 mS/cm.",
            "Plant strawberry runners at the exact \"Goldilocks\" crown depth so crowns never rot and roots never dry out.",
            "Double plant density per square foot using 4-tier Vertical A-Frame Cocopeat Gutters."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Strawberry Survival Rule: Strawberries Hate Salty Water (Keep EC Strictly 1.0 – 1.4 mS/cm) & Never Bury the Central Crown!",
          "bdFieldTip": "During the first 25 days after planting strawberry runners in October, pinch off any premature flowers and long stolon runners—let the plant build 6 to 8 big solar-panel leaves first so it can produce 400g to 600g of large Grade-A berries!",
          "table": {
            "headers": [
              "Strawberry Production Factor",
              "Exact Hydroponic Requirement",
              "Consequence of Incorrect Management"
            ],
            "rows": [
              [
                "Best Cultivars in Bangladesh",
                "Festival, Camarosa, Rabi-3, Winter Dawn, Sweet Charlie",
                "Day-neutral/short-day varieties adapted to 12°C–26°C BD winters"
              ],
              [
                "Planting Season (Open/Polyhouse)",
                "Transplant runners September 25 – October 25; Harvest Nov – March",
                "Planting late in December cuts total harvest window in half"
              ],
              [
                "Working Nutrient EC & pH",
                "Vegetative: EC 0.8 – 1.0 | Flowering & Fruiting: EC 1.2 – 1.4 | pH 5.6 – 6.0",
                "EC above 1.8 mS/cm burns strawberry leaf edges and stunts roots!"
              ],
              [
                "Crown Planting Depth",
                "Roots buried in cocopeat-perlite; central Crown Bud 100% above surface",
                "Burying the crown in wet cocopeat causes fatal Phytophthora crown rot in 7 days"
              ],
              [
                "Fruit Pollination",
                "Soft camel-hair brush or gentle morning air blower across flowers",
                "Incomplete pollination causes deformed \"cat-faced\" berries"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "When you grow strawberries in elevated hydroponic Cocopeat Gutters or 4-tier Vertical A-Frame racks, the berries hang down cleanly in dry air over the sides of the white trough! Not a single berry ever touches mud, slug damage drops to zero, and you can fit 12 to 16 strawberry plants per square meter instead of 5 in soil. However, you must respect two strict physiological rules of the strawberry plant. Rule #1: Look closely at a strawberry transplant—where the roots meet the leaf stems is a thick woody stem base called the \"Crown.\" When planting into washed cocopeat-perlite, bury all the roots straight down, but leave the midpoint of the crown sitting above the cocopeat surface! If wet cocopeat covers the central growing bud of the crown, or if a dripper sprays water directly onto the crown, it will rot within a week."
            },
            {
              "type": "p",
              "text": "Rule #2: Strawberries evolved in cool forest floors washed by rainwater, so their roots are extremely sensitive to high salt concentrations. Never feed strawberries the strong EC 2.5 solution you give tomatoes! Start young strawberry runners at EC 0.8 mS/cm, and even during peak fruiting keep your nutrient EC between 1.2 and 1.4 mS/cm (600–700 ppm) with starting water that has very low sodium/chloride (< 50 ppm). Flush your cocopeat gutters with plain pH-6.0 water once every two weeks to keep root-zone salts crystal clean."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_240",
          "wpId": 240,
          "slug": "lesson-2-11-pollination-management-pruning-trellising-canopy-architecture",
          "courseId": "course2",
          "code": "2.11",
          "sortOrder": 11,
          "title": "Lesson 2.11: Pollination Management, Pruning, Trellising & Canopy Architecture",
          "subtitle": "How to Achieve 95%+ Fruit Set Inside Screened Greenhouses and Manage Leaf Area Index",
          "readTime": "14 Min Read",
          "objectives": [
            "Understand floral biology: Self-pollinating buzz flowers (Tomato/Pepper) vs. Separate Male/Female flowers (Melon/Squash) vs. Parthenocarpic (Seedless Cucumber).",
            "Execute the 10:00 AM electric toothbrush / vibrating wand pollination protocol for tomatoes.",
            "Sanitize pruning shears with 70% rubbing alcohol or bleach between rows so viruses never spread."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Optimal Pollination Window: 9:00 AM to 11:30 AM When Relative Humidity = 60%–75% and Air Temp = 20°C–28°C",
          "bdFieldTip": "Never leave pruned tomato or cucumber leaves lying in piles on the polyhouse floor or right outside the door—they become a breeding hotel for fungal spores and whiteflies. Carry all pruned leaves away in closed sacks immediately!",
          "table": {
            "headers": [
              "Greenhouse Crop",
              "Flower Structure",
              "Pollination Method inside Net House",
              "Best Time of Day"
            ],
            "rows": [
              [
                "Tomato & Cherry Tomato",
                "Self-fertile \"Buzz\" flower (pollen inside fused cone)",
                "Touch flower cluster stem for 2 seconds with electric vibrator wand / electric toothbrush",
                "9:30 AM – 11:30 AM daily"
              ],
              [
                "Sweet Bell Pepper (Capsicum)",
                "Self-fertile pendulous flower",
                "Gentle shaking of overhead trellis wires + daytime horizontal airflow fans",
                "10:00 AM – 12:00 PM"
              ],
              [
                "Netted Rockmelon / Watermelon",
                "Separate Male & Female flowers on same vine",
                "Pick fresh Male flower, peel petals, and dab pollen onto Female stigma (has baby fruit behind it)",
                "8:00 AM – 10:30 AM (before pollen dries)"
              ],
              [
                "Strawberry",
                "Multi-pistil receptacle flower",
                "Soft brush stroke across flower centers + gentle air circulation",
                "9:30 AM – 11:30 AM"
              ],
              [
                "Parthenocarpic Cucumber",
                "100% Female seedless flower",
                "DO NOT POLLINATE! Keep insects out so fruits stay seedless and straight",
                "Zero pollination required"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Let us look at how a tomato flower works: unlike an open rose, a tomato flower holds its pollen locked inside a closed yellow tube (anther cone) like salt inside a salt-shaker. In nature, bumblebees grab the flower and vibrate their wing muscles at 400 Hz to shake the pollen loose onto the stigma. Inside your polyhouse, one worker walking down the rows every morning between 9:30 AM and 11:30 AM holding an inexpensive battery-operated pollinating vibrator (or even a ৳400 rechargeable electric toothbrush!) against the back of each open flower truss stem for 2 seconds releases a visible puff of white pollen—boosting fruit set from 30% to over 95%!"
            },
            {
              "type": "p",
              "text": "Why between 9:30 AM and 11:30 AM? Because early at 6:30 AM, high morning humidity (> 85%) makes pollen grains clump together like wet flour so they cannot shake loose; and late at 2:30 PM when temperatures exceed 33°C, pollen grains dry out and lose viability. Finally, whenever your workers prune side shoots or old bottom leaves, enforce strict surgical hygiene: dip pruning scissors into a cup of 70% isopropyl alcohol or 10% household bleach between plants, and prune on sunny mornings so stem wounds dry and seal within an hour!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_241",
          "wpId": 241,
          "slug": "lesson-2-12-integrated-pest-management-ipm-whiteflies-thrips-mites",
          "courseId": "course2",
          "code": "2.12",
          "sortOrder": 12,
          "title": "Lesson 2.12: Integrated Pest Management (IPM) — Whiteflies, Thrips, Aphids & Mites Without Toxic Sprays",
          "subtitle": "A 4-Layer Bio-Rational Defense Protocol for Producing 100% Export-Grade Safe Vegetables",
          "readTime": "15 Min Read",
          "objectives": [
            "Identify the \"Big 4\" sap-sucking pests in Bangladesh greenhouses and the viruses they transmit (TYLCV leaf curl).",
            "Deploy the correct color sticky trap at the right height: Yellow cards for Whiteflies/Aphids and Blue cards for Thrips.",
            "Rotate safe biological & organic sprays (Azadirachtin Neem, Potassium Salts of Fatty Acids, Beauveria bassiana, Spinosad)."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: IPM Golden Pyramid: 70% Exclusion (40-Mesh Net + Airlock) + 20% Early Trapping (Yellow/Blue Cards) + 10% Bio-Rational Sprays = Zero Toxic Residue!",
          "bdFieldTip": "Tobacco Mosaic Virus (TMV) and Tomato Leaf Curl Virus (TYLCV) cannot be cured once a plant is infected. Forbid smoking inside or near the polyhouse (cigarettes carry TMV!), require workers to wash hands with soap at the entry door, and immediately pull out and bag any virus-curled seedling.",
          "table": {
            "headers": [
              "Target Pest",
              "How to Spot Early Damage",
              "Trap Color & Placement",
              "Zero-Residue Bio-Rational Control"
            ],
            "rows": [
              [
                "Whitefly (Bemisia tabaci)",
                "Tiny white moths fly up when leaves shake; spreads Tomato Leaf Curl Virus",
                "Yellow Sticky Traps hung 10 cm above plant tips",
                "Azadirachtin 1% (Neem) + Potassium Soap spray every 5–7 days on leaf undersides"
              ],
              [
                "Thrips (Scirtothrips / Frankliniella)",
                "Silvery scratched streaks on leaves, deformed flower buds & scarred fruit",
                "Blue Sticky Traps hung right at flower level",
                "Beauveria bassiana bio-insecticide or Spinosad biological fermentation spray"
              ],
              [
                "Aphids (Jab Poka)",
                "Clusters of green/black soft insects on tender young shoot tips + sticky honeydew",
                "Yellow Sticky Traps + Scout new shoot tips",
                "Insecticidal potassium soap + Neem oil mist; blasts off easily with clean water"
              ],
              [
                "Two-Spotted Spider Mite",
                "Tiny yellow stippling dots on leaves + fine silk webbing in hot dry weather",
                "Inspect undersides of middle leaves with 10x lens",
                "Raise humidity with misting + Abamectin (natural avermectin) or neem-sulfur rotation"
              ],
              [
                "Caterpillars / Fruit Borers",
                "Chewed holes in leaves or bore-holes in tomato fruit",
                "Pheromone Delta Traps + 40-mesh sidewall inspection",
                "Bacillus thuringiensis (Bt) biological spray in the evening"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Professional commercial greenhouses practice Integrated Pest Management (IPM)—a proactive 4-layer defense system that stops pests before they ever reach epidemic numbers. Layer 1 is Physical Exclusion: maintaining intact 40-mesh or 50-mesh anti-insect netting on all vents, sealing gaps around drain pipes, and keeping a 2-meter weed-free gravel/concrete apron around the outside of your polyhouse (because roadside weeds harbor whiteflies!). Layer 2 is Early Detection: hang 1 Yellow Sticky Trap and 1 Blue Sticky Trap every 15 to 20 square meters just 10 cm above the top of your plant canopy."
            },
            {
              "type": "p",
              "text": "Layer 3 is Preventative Bio-Shielding: Do not wait until you see thousands of whiteflies to start spraying! Once a week on a fixed evening schedule (e.g., every Tuesday at 5:00 PM), mist your crop undersides with an organic rotation: Week A use cold-pressed Azadirachtin (Neem extract 3000 ppm at 2 ml/L) emulsified with horticultural potassium soap; Week B use beneficial entomopathogenic fungi (*Beauveria bassiana* / *Verticillium lecanii* at 5g/L), whose natural spores germinate on the bodies of whiteflies, thrips, and aphids with zero chemical residue on your food!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_242",
          "wpId": 242,
          "slug": "lesson-2-13-root-zone-disease-prevention-pythium-root-rot-wilt",
          "courseId": "course2",
          "code": "2.13",
          "sortOrder": 13,
          "title": "Lesson 2-13: Root-Zone Disease Prevention — Stopping Pythium Root Rot & Bacterial Wilt",
          "subtitle": "How Water Temperature, Dissolved Oxygen, and Beneficial Microbes Protect the Root Zone",
          "readTime": "14 Min Read",
          "objectives": [
            "Understand why Pythium (\"water mold\") is an opportunist that only attacks stressed, oxygen-starved roots in warm water.",
            "Bury or insulate your nutrient reservoir in the cool Bangladeshi soil to drop water temperatures by 5°C.",
            "Choose between a \"Sterile Reservoir\" strategy (Hydrogen Peroxide / Hypochlorous Acid) and a \"Beneficial Bio-Root\" strategy (Trichoderma + Bacillus)."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Root Rot Equation: Warm Water (> 30°C) + Low Dissolved Oxygen (< 5 mg/L) = Pythium Explosion | Cool Water (< 27°C) + High O₂ (> 7 mg/L) = Healthy White Roots!",
          "bdFieldTip": "Never mix the Sterile Protocol and the Beneficial Microbe Protocol at the same time—pouring Hydrogen Peroxide or Bleach into a tank treated with Trichoderma will simply kill the beneficial microbes you just paid for!",
          "table": {
            "headers": [
              "Root Protection Strategy",
              "How to Implement It",
              "Dosage / Specification",
              "Important Compatibility Rule"
            ],
            "rows": [
              [
                "1. Underground Reservoir Cooling",
                "Sink plastic/concrete nutrient tank 80% into the ground in shade",
                "Keeps water at 24°C–27°C even when air is 36°C",
                "Ensure tank lid rim sits 15 cm above ground so monsoon rain cannot wash in"
              ],
              [
                "2. High Dissolved Oxygen (DO)",
                "Run Venturi injector + silicon carbide air stones 24/7",
                "Maintain DO > 6.5 mg/L (ppm)",
                "Hot water holds less oxygen—double aeration during April–August!"
              ],
              [
                "3. Sterile Protocol (Water Culture)",
                "Dose food-grade Hydrogen Peroxide (H₂O₂) or Calcium Hypochlorite",
                "3% H₂O₂ at 1.5–2.0 ml/L every 4 days (or 2 ppm Free Chlorine)",
                "Never mix H₂O₂ or chlorine with beneficial live bacteria/fungi!"
              ],
              [
                "4. Beneficial Microbe Protocol (Cocopeat)",
                "Inoculate cocopeat/roots with Trichoderma harzianum & Bacillus amyloliquefaciens",
                "2g – 3g per 10 Liters of nutrient water every 15 days",
                "Ideal for Dutch Buckets & Grow Bags; colonizes roots and blocks Pythium/Ralstonia"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Why does *Pythium* strike in summer? It is pure physics (Henry’s Law of dissolved gases): cool water at 20°C can hold over 9.0 mg/L of dissolved oxygen, whereas hot water at 33°C can barely hold 7.0 mg/L—yet at 33°C, plant roots are breathing twice as fast! When water heats up above 30°C inside an unshaded tank, the roots begin to suffocate. Healthy, oxygenated roots easily fight off *Pythium* spores, but suffocating roots leak sugars into the water that attract *Pythium* zoospores like a magnet."
            },
            {
              "type": "p",
              "text": "Therefore, your #1 defense against root rot is Temperature and Oxygen Control: bury your main nutrient tank underground where the earth stays cool year-round, insulate above-ground pipes, and aerate vigorously. Second, choose one of two clean root-zone management programs: in pure water systems (NFT/DWC), you can run a Sterile Reservoir using periodic small doses of Hydrogen Peroxide (H₂O₂ breaks down into pure water and an extra oxygen atom that burns away slime!). In cocopeat Dutch Buckets, use the Beneficial Bio-Shield approach by inoculating your cocopeat with *Trichoderma harzianum* and *Bacillus subtilis*—friendly microbes that form a living armor around the roots!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_243",
          "wpId": 243,
          "slug": "lesson-2-14-commercial-farm-economics-bangladesh-capex-opex-roi",
          "courseId": "course2",
          "code": "2.14",
          "sortOrder": 14,
          "title": "Lesson 2.14: Commercial Farm Economics in Bangladesh — CAPEX, OPEX, Yield & ROI Calculator",
          "subtitle": "Real-World BDT (৳) Financial Models for 1,000 sq ft, 2,500 sq ft, and 5,000 sq ft Hydroponic Farms",
          "readTime": "16 Min Read",
          "objectives": [
            "Compare the exact setup budget (CAPEX) and monthly running cost (OPEX) across three standard farm sizes in Bangladesh.",
            "Understand why formulating your own Stock A + B nutrients from raw salts using HydroGuide BD slashes fertilizer costs by 70%.",
            "Build a conservative financial projection that accounts for seasonal price changes and 10% crop buffer."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Commercial Payback Benchmark in Bangladesh: Well-Managed Leafy & Fruiting Polyhouses Recover 100% of Setup Cost in 11 to 16 Months!",
          "bdFieldTip": "Always keep 15% of your initial capital in reserve as working capital for your first 90 days of seeds, electricity, packaging, and market sample deliveries before your first big harvest check arrives!",
          "table": {
            "headers": [
              "Financial Metric (in ৳ BDT)",
              "Model A: 1,000 sq ft Rooftop Leafy NFT Farm (3,200 Sites)",
              "Model B: 2,500 sq ft Dutch Bucket Polyhouse (650 Fruiting Buckets)",
              "Model C: 5,000 sq ft Hybrid Smart IoT Commercial Farm"
            ],
            "rows": [
              [
                "1. Structure, Channels/Buckets & Plumbing (CAPEX)",
                "৳3,40,000 (Shade-rain roof + 3,200 NFT sites + pumps/tanks)",
                "৳6,80,000 (Tropical polyhouse + 650 Dutch buckets + drip system)",
                "৳13,50,000 (Full polyhouse + NFT + Dutch Buckets + SensPanel IoT)"
              ],
              [
                "2. Monthly Operating Cost (Seeds, Salts, Power, Labor)",
                "৳14,500 / month (৳1,74,000 / year)",
                "৳22,000 / month (৳2,64,000 / year)",
                "৳38,000 / month (৳4,56,000 / year)"
              ],
              [
                "3. Annual Harvest Output (Conservative 85% Sellable)",
                "5,800 kg Lettuce/Herbs per year (9 cycles)",
                "5,200 kg Capsicum & Cherry/BARI Tomato per year",
                "11,500 kg Combined Leafy + High-Value Fruiting Crops"
              ],
              [
                "4. Gross Annual Revenue (Wholesale Avg ৳160–৳240/kg)",
                "৳9,86,000 / year (at avg ৳170/kg)",
                "৳10,40,000 / year (at avg ৳200/kg)",
                "৳21,85,000 / year"
              ],
              [
                "5. Net Annual Profit & Capital Payback Period",
                "৳8,12,000 / year (Payback: ~5–6 Months!)",
                "৳7,76,000 / year (Payback: ~10.5 Months)",
                "৳17,29,000 / year (Payback: ~9.5 Months)"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Look at Operating Cost #1: Nutrient Fertilizer. If you buy ready-made 1-liter liquid bottles for a small home box of 12 plants, that is very convenient. But if you are operating a 2,500 sq ft commercial polyhouse drinking 800 liters of nutrient water every day, buying retail liquid bottles will eat up 35% of your revenue! Instead, commercial growers buy 25 kg bags of greenhouse-grade raw water-soluble salts (Calcium Nitrate, Potassium Nitrate, MKP, Magnesium Sulfate, and Chelated Micros) and use our free HydroGuide BD Calculator (which you will master in Course 3) to mix their own 100x Stock Tanks. That drops your working nutrient cost to just ৳0.12 to ৳0.15 per liter—saving over ৳1,50,000 every year!"
            },
            {
              "type": "p",
              "text": "Look at Revenue Timing: In Bangladesh, open-field vegetable prices drop to rock bottom during peak winter (December–January) when village fields flood the market with cheap tomatoes and cabbage. However, from April through November (early summer, monsoon, and autumn), open-field supply collapses and vegetable prices triple! Plan your polyhouse tomato, capsicum, and coriander calendar to hit peak harvest during May–November when wholesale buyers pay top Taka."
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        },
        {
          "id": "wp_244",
          "wpId": 244,
          "slug": "lesson-2-15-cold-chain-grading-branding-b2b-marketing-bangladesh",
          "courseId": "course2",
          "code": "2.15",
          "sortOrder": 15,
          "title": "Lesson 2.15: Cold Chain, Grading, Branding & B2B Marketing in Bangladesh",
          "subtitle": "Course 2 Graduation: How to Package, Price, and Secure Long-Term Contracts with Supershops & Hotels",
          "readTime": "13 Min Read",
          "objectives": [
            "Remove \"Field Heat\" within 30 minutes of harvest using cool water hydro-cooling so leafy greens stay crisp for 10 days.",
            "Sort harvests into Grade A (Supershop/Hotel), Grade B (Restaurant kitchen cut), and Grade C (Local market).",
            "Approach purchasing managers at Bangladeshi supershops, cloud kitchens, and D2C subscription channels with weekly supply guarantees."
          ],
          "keyFormula": "⚙️ Commercial Engineering Rule: Value Multiplier: Unsorted Bulk Sack at Karwan Bazar = 1x Price | Graded, Hydro-Cooled, Branded 250g Retail Pack = 2.2x Price!",
          "bdFieldTip": "Congratulations on completing Course 2: Intermediate Commercial Farming! You are now ready for Course 3: Advanced & Expert Masterclass, where we dive deep into Dr. Daniel Fernandez’s Science in Hydroponics—mastering parts-per-million stoichiometry, formulating your own custom fertilizers from raw salts in HydroGuide BD, and automating your farm with SensPanel Smart IoT!",
          "table": {
            "headers": [
              "Sales Channel in Bangladesh",
              "Products Most in Demand",
              "Packaging Requirement",
              "Payment Terms & Margin Level"
            ],
            "rows": [
              [
                "1. Premium Supershops (Shwapno, Unimart, Meena Bazar, Lavender)",
                "Lettuce trio, Colored Capsicum, Cherry Tomato, Strawberry, Herbs",
                "Barcoded breathable PET clamshell or micro-perforated poly sleeve with brand label",
                "15–30 day credit cycle | High volume & brand visibility"
              ],
              [
                "2. Hotels, Cafes, Burger Chains & Cloud Kitchens",
                "Romaine/Batavia Lettuce, Basil, Mint, Parsley, English Cucumber",
                "Clean 2 kg food-grade plastic crates (returned on next delivery)",
                "Weekly cash/bKash settlement | Very steady year-round orders"
              ],
              [
                "3. Direct-to-Consumer (Facebook / WhatsApp Weekly Salad Box)",
                "Mixed \"Weekly Family Detox Salad Box\" (Lettuce + Cherry Tomato + Cucumber + Herbs)",
                "Eco-friendly kraft box or live-root bag delivered via local courier",
                "100% instant bKash/COD | Highest profit margin (2.5x wholesale)!"
              ],
              [
                "4. Regional Wholesale Arat (Karwan Bazar / Reazuddin Bazar)",
                "Off-season Monsoon Coriander (Dhonia), Summer Tomato, Green Capsicum",
                "Sorted 10 kg ventilated plastic crates",
                "100% immediate cash on spot | Best for clearing bulk volume"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Commercial System Engineering, Fruiting Crops & Polyhouse Operations in Bangladesh"
            },
            {
              "type": "p",
              "text": "Step 1 (Removing Field Heat): Harvest between 6:00 AM and 7:30 AM. Immediately bring harvested crates into a shaded packing shed. For leafy greens and herbs, dip the heads briefly into a clean tank of cold water (12°C–15°C, chilled with a few reusable frozen ice bottles) to remove field heat, gently shake off excess droplets on a clean mesh table, and pack with the clean white root ball wrapped in a moist tissue inside a micro-perforated sleeve. This single step extends shelf life from 2 days to 10+ days!"
            },
            {
              "type": "p",
              "text": "Step 2 (Strict Grading & B2B Pitching): Never mix deformed or small fruits inside a crate of Grade-A produce—one bad fruit makes the buyer discount your entire crate! Separate your harvest into Grade-A Retail Packs (uniform size, zero blemishes, branded sticker with a QR code linking to photos of your clean hydroponic farm) and Grade-B Kitchen Packs (sold at a 20% discount to restaurant kitchens that chop lettuce and tomatoes for burgers, pizzas, and salads anyway!). Walk into 10 local cafes, restaurants, and supershop procurement offices carrying a free sample box of crisp live-root lettuce and sweet cherry tomatoes—once a chef tastes fresh-picked hydroponic greens, you have a customer for years!"
            },
            {
              "type": "heading",
              "text": "📊 Commercial Specifications & Production Benchmarks"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Field Tip for Bangladesh Commercial Growers"
            }
          ]
        }
      ]
    },
    {
      "id": "course3",
      "icon": "🔬",
      "badge": "Course 3 • 20 Lessons",
      "titleEn": "Course 3: Advanced Masterclass — Science & Nutrient Chemistry",
      "titleBn": "কোর্স ৩: অ্যাডভান্সড মাস্টারক্লাস — পুষ্টি রসায়ন ও বিজ্ঞান (২০টি পাঠ)",
      "descEn": "Deep scientific mastery following Dr. Daniel Fernandez (HydroBuddy) & BARI: ppm stoichiometry, Stock Tank A/B precipitation, alkalinity titration, iron chelates, VPD, NO3:NH4 ratio, and silicon.",
      "descBn": "ড. ড্যানিয়েল ফার্নান্দেজ (HydroBuddy) ও বারি (BARI) গবেষণা অনুসারে গভীর বৈজ্ঞানিক পাঠ: পিপিএম হিসাব, স্টক ট্যাংক A ও B রসায়ন, পানির ক্ষারত্ব ও pH নিয়ন্ত্রণ, আয়রন চিলেট ও VPD।",
      "color": "#7c3aed",
      "lessons": [
        {
          "id": "wp_142",
          "wpId": 142,
          "slug": "module-01-science-of-soilless-culture-hydroponic-nutrition-bangladesh",
          "courseId": "course3",
          "code": "3.01",
          "sortOrder": 1,
          "title": "Lesson 3.01: The Science of Soilless Culture & How Plants Absorb Ions in Hydroponics",
          "subtitle": "Root-Zone Ion Absorption Kinetics, Mass Flow & Diffusion in Soilless Culture",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: NO₃⁻, NH₄⁺, H₂PO₄⁻, K⁺, Ca²⁺, Mg²⁺, SO₄²⁻",
          "bdFieldTip": "In Bangladesh, bacterial wilt destroys up to 40% of summer soil-grown tomato and brinjal crops. Switching to inert cocopeat or NFT water culture completely breaks the soil pathogen cycle without using banned chemical nematicides.",
          "table": {
            "headers": [
              "Macro/Micro Element",
              "Ionic Form Absorbed by Roots",
              "Optimal Range in Solution (ppm / mg/L)",
              "Primary Physiological Role in Plant"
            ],
            "rows": [
              [
                "Nitrogen (N)",
                "NO₃⁻ (Nitrate) & NH₄⁺ (Ammonium)",
                "120 – 200 ppm",
                "Amino acids, chlorophyll synthesis, vegetative leaf expansion"
              ],
              [
                "Phosphorus (P)",
                "H₂PO₄⁻ (Dihydrogen Phosphate)",
                "35 – 60 ppm",
                "ATP energy transfer, root initiation, flower initiation"
              ],
              [
                "Potassium (K)",
                "K⁺ (Potassium Ion)",
                "150 – 300 ppm",
                "Stomatal regulation, enzyme activation, sugar translocation to fruit"
              ],
              [
                "Calcium (Ca)",
                "Ca²⁺ (Calcium Ion)",
                "120 – 200 ppm",
                "Cell wall pectate cross-linking, root tip division, prevents Blossom End Rot"
              ],
              [
                "Magnesium (Mg)",
                "Mg²⁺ (Magnesium Ion)",
                "40 – 65 ppm",
                "Central atom of the chlorophyll molecule, photosynthesis"
              ],
              [
                "Sulfur (S)",
                "SO₄²⁻ (Sulfate Ion)",
                "50 – 120 ppm",
                "Cysteine and methionine amino acids, coenzymes"
              ],
              [
                "Iron (Fe)",
                "Fe²⁺ / Fe³⁺ (Chelated EDTA/DTPA)",
                "2.0 – 4.0 ppm",
                "Electron transport chain, chloroplast development"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "A common misconception among traditional farmers in Bangladesh is that soil itself feeds the plant. In reality, soil is merely a physical anchor and a biological reactor where organic matter slowly decomposes into simple inorganic ions. Whether a tomato plant grows in the alluvial soil of Bogura or in a cocopeat Dutch bucket in Gazipur, its root hair cell membranes can only absorb nutrients after they dissolve in water as charged inorganic ions."
            },
            {
              "type": "p",
              "text": "In scientific hydroponics—as pioneered by researchers like Hoagland, Steiner, and Dr. Daniel Fernandez (Science in Hydroponics)—we bypass the unpredictable soil matrix entirely. By supplying exact concentrations of dissolved ions directly to the root zone in parts per million (ppm or mg/L), we eliminate soil-borne pathogens (such as Ralstonia bacterial wilt), reduce water evaporation by 85–90%, and allow the plant to invest energy into rapid foliar and fruit growth rather than searching for scarce nutrients."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_143",
          "wpId": 143,
          "slug": "module-02-parts-per-million-ppm-stoichiometry-nutrient-calculations",
          "courseId": "course3",
          "code": "3.02",
          "sortOrder": 2,
          "title": "Lesson 3.02: Understanding Parts Per Million (ppm / mg/L) & Fertilizer Stoichiometry",
          "subtitle": "Elemental Parts Per Million (mg/L), Molar Mass & Linear Least-Squares Stoichiometry",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: ppm (mg/L) = [Salt Weight (mg) × Elemental Fraction] ÷ Solution Volume (L)",
          "bdFieldTip": "Always buy a 0.01g precision digital jewelry scale (costs ~৳650 in Dhaka) for weighing micronutrients, and a 1g kitchen scale for macronutrients. Never measure hydroponic salts by \"spoons\" because bulk density changes with humidity!",
          "table": {
            "headers": [
              "Fertilizer Salt",
              "Chemical Formula",
              "Elemental Percentage (%)",
              "1 Gram in 10 Liters Gives (ppm)"
            ],
            "rows": [
              [
                "Calcium Nitrate (Agri Grade)",
                "5Ca(NO₃)₂·NH₄NO₃·10H₂O",
                "19.0% Ca, 14.4% NO₃-N, 1.1% NH₄-N",
                "19.0 ppm Ca, 15.5 ppm Total N"
              ],
              [
                "Potassium Nitrate",
                "KNO₃",
                "38.6% K, 13.8% NO₃-N",
                "38.6 ppm K, 13.8 ppm N"
              ],
              [
                "Mono Potassium Phosphate (MKP)",
                "KH₂PO₄",
                "22.7% P, 28.7% K",
                "22.7 ppm P, 28.7 ppm K"
              ],
              [
                "Magnesium Sulfate Heptahydrate",
                "MgSO₄·7H₂O (Epsom Salt)",
                "9.8% Mg, 12.9% S",
                "9.8 ppm Mg, 12.9 ppm S"
              ],
              [
                "Potassium Sulfate",
                "K₂SO₄",
                "44.8% K, 18.4% S",
                "44.8 ppm K, 18.4 ppm S"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "To formulate your own hydroponic nutrients instead of buying expensive imported bottles, you must think in Parts Per Million (ppm). In aqueous hydroponic solutions, 1 ppm is strictly equivalent to 1 milligram of pure element per liter of water (1 mg/L). Note that fertilizer bags in Bangladesh often list oxide percentages—such as P₂O₅ for phosphorus or K₂O for potassium—which must first be converted to pure elemental percentages (P = P₂O₅ × 0.4364; K = K₂O × 0.8301)."
            },
            {
              "type": "p",
              "text": "For example, if you dissolve 1.0 gram (1,000 mg) of Mono Potassium Phosphate (MKP, which contains 22.7% elemental P and 28.7% elemental K) into 10 Liters of water, the phosphorus concentration is (1000 mg × 0.227) ÷ 10 L = 22.7 ppm P, and the potassium concentration is (1000 mg × 0.287) ÷ 10 L = 28.7 ppm K. Because each salt contributes at least two ions, solving for 12 elements simultaneously requires solving a system of linear equations—the exact job performed by Dr. Daniel Fernandez’s HydroBuddy and our online HydroGuide calculator."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_144",
          "wpId": 144,
          "slug": "module-03-why-stock-solution-a-and-b-must-be-separated-precipitation",
          "courseId": "course3",
          "code": "3.03",
          "sortOrder": 3,
          "title": "Lesson 3.03: Why Hydroponic Nutrients Are Split into Tank A & Tank B (Precipitation Chemistry)",
          "subtitle": "Solubility Product Constants (Ksp) & Preventing Gypsum/Phosphate Precipitation in 100x Stock Tanks",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Ca²⁺ + SO₄²⁻ → CaSO₄↓ (Gypsum Precipitate) | Ca²⁺ + HPO₄²⁻ → CaHPO₄↓",
          "bdFieldTip": "Use a red or blue drum for Tank A and a green drum for Tank B, with separate measuring cups for each tank. Even using the same wet measuring cup between Tank A and Tank B can form white crystal crust over time.",
          "table": {
            "headers": [
              "Stock Tank",
              "Salts Included in This Tank",
              "Forbidden Ions in This Tank",
              "Reason for Separation"
            ],
            "rows": [
              [
                "Stock Tank A (Calcium & Iron)",
                "Calcium Nitrate, Potassium Nitrate (part), Iron EDTA / DTPA",
                "NO Phosphates (PO₄³⁻), NO Sulfates (SO₄²⁻)",
                "Prevents Calcium Sulfate (Gypsum), Calcium Phosphate, and Iron Phosphate precipitation"
              ],
              [
                "Stock Tank B (Sulfates, Phosphates & Micros)",
                "MKP (KH₂PO₄), Magnesium Sulfate (Epsom), Potassium Sulfate, Mn/Zn/B/Cu/Mo",
                "NO Calcium (Ca²⁺)",
                "Keeps all sulfates and phosphates completely soluble at 100x–200x concentration"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "One of the first questions every Bangladeshi farmer asks when starting hydroponics is: \"Why do I have to use two separate bottles—Solution A and Solution B? Why can’t I mix them into one drum?\" The answer lies in solubility product constants (Ksp). At working reservoir strength (1x dilution, where Calcium is ~150 ppm and Sulfate is ~60 ppm), all ions stay dissolved. However, in a 100x concentrated stock tank (where Calcium is 15,000 ppm and Sulfate is 6,000 ppm), the ionic product far exceeds the solubility limit of Calcium Sulfate (CaSO₄, plaster of Paris/gypsum) and Calcium Phosphate."
            },
            {
              "type": "p",
              "text": "If you pour concentrated Stock A directly into concentrated Stock B, they immediately react to form a milky white cloud of insoluble gypsum and calcium phosphate crystals that sink to the bottom of the tank. Once precipitated, those nutrients are permanently locked out and cannot be absorbed by plant roots—and worse, the crystals will clog your drip emitters and Venturi injectors. Always add Stock A to the full water reservoir first, circulate the pump for 2 minutes, and only then add Stock B!"
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_145",
          "wpId": 145,
          "slug": "module-04-raw-hydroponic-fertilizer-salts-available-in-bangladesh",
          "courseId": "course3",
          "code": "3.04",
          "sortOrder": 4,
          "title": "Lesson 3.04: Guide to Raw Hydroponic Fertilizer Salts Available in Bangladesh",
          "subtitle": "Sourcing & Purity Testing 100% Water-Soluble Greenhouse-Grade Fertilizer Salts in Bangladesh",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: 100% Water-Soluble Greenhouse Grade (WSF) vs. Soil Prilled Grade",
          "bdFieldTip": "By buying raw greenhouse-grade salts in 1 kg or 25 kg packs and mixing your own A&B recipes with our HydroGuide app, you reduce your liquid nutrient cost by more than 65% compared to pre-mixed bottles!",
          "table": {
            "headers": [
              "Salt Name (Common)",
              "Grade Required",
              "Solubility in 20°C Water (g/L)",
              "Approx. Price in Bangladesh (BDT/kg)"
            ],
            "rows": [
              [
                "YaraTera Calcinit / Greenhouse Ca(NO₃)₂",
                "Greenhouse Soluble Grade",
                "1,200 g/L",
                "৳140 – ৳180 / kg"
              ],
              [
                "Potassium Nitrate (KNO₃ 13-0-46)",
                "Crystalline Water Soluble",
                "316 g/L",
                "৳220 – ৳280 / kg"
              ],
              [
                "Mono Potassium Phosphate (MKP 0-52-34)",
                "Tech / Soluble Grade",
                "226 g/L",
                "৳320 – ৳380 / kg"
              ],
              [
                "Magnesium Sulfate (Epsom Salt)",
                "Heptahydrate Pure Crystal",
                "710 g/L",
                "৳75 – ৳110 / kg"
              ],
              [
                "Chelated Iron (Fe-EDTA 13% / Fe-DTPA 11%)",
                "Micro-granular Chelate",
                "90 g/L",
                "৳950 – ৳1,400 / kg"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "A major mistake beginners make in Bangladesh is buying standard soil-grade fertilizers (like regular Urea, TSP, or MoP from a local bazaar) and trying to dissolve them for hydroponics. Soil-grade fertilizers contain clay anti-caking coatings, insoluble rock phosphate impurities, high sodium chloride, and biuret, which leave thick mud in your tank and burn plant roots. Moreover, Urea (CO(NH₂)₂) cannot be absorbed directly as nitrate and converts to toxic levels of ammonium/nitrite in warm water cultures."
            },
            {
              "type": "p",
              "text": "For scientific hydroponics, you must use 100% Water-Soluble Fertilizers (WSF) or Greenhouse Grade salts. Before using any new batch of Calcium Nitrate or Magnesium Sulfate, perform the \"Jar Clear Test\": dissolve 10 grams of the salt in 100 mL of clean RO water in a clear glass. Within 3 minutes of stirring, the solution should be 100% crystal clear with zero sediment at the bottom."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_146",
          "wpId": 146,
          "slug": "module-05-how-to-use-hydroguide-hydrobuddy-nutrient-calculator-app",
          "courseId": "course3",
          "code": "3.05",
          "sortOrder": 5,
          "title": "Lesson 3.05: Step-by-Step Guide to Formulating Recipes with HydroGuide (HydroBuddy)",
          "subtitle": "Solving Multi-Salt Formulations with the HydroGuide BD (HydroBuddy) Stoichiometry Engine",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Minimize Σ wᵢ · (Target_ppmᵢ − Achieved_ppmᵢ)² subject to Salt_Weight ≥ 0",
          "bdFieldTip": "Open our interactive [HydroGuide Nutrient Calculator Web App](/hydroguide/) on your phone or computer right now—you can toggle between English, adjust your tank volume, and print a waterproof mixing sheet for your farm staff!",
          "table": {
            "headers": [
              "Step in HydroGuide",
              "Action to Take",
              "Example Setting (BARI Lettuce NFT)",
              "Output Generated"
            ],
            "rows": [
              [
                "Step 1: Select Crop Preset",
                "Choose crop stage from dropdown or enter custom ppm",
                "N: 150, P: 45, K: 190, Ca: 140, Mg: 45, S: 60",
                "Sets target elemental vector"
              ],
              [
                "Step 2: Enter Raw Water Profile",
                "Enter tube-well or RO water Ca, Mg, S (ppm)",
                "Ca: 25 ppm, Mg: 8 ppm (Dhaka Deep Tube-well)",
                "Subtracts background water ions automatically"
              ],
              [
                "Step 3: Choose Calculation Mode",
                "Select Direct Reservoir or Concentrated Stock A&B",
                "10L Stock A & B at 1:100 Dilution Ratio",
                "Computes 100x salt masses in grams"
              ],
              [
                "Step 4: Run Solver & Export",
                "Click Calculate Recipe & Print Formulation Sheet",
                "Tank A: 736g Ca(NO₃)₂ + 20g Fe-EDTA; Tank B: …",
                "Gives exact grams, predicted EC, and BDT cost"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In 2010, chemist Dr. Daniel Fernandez released HydroBuddy—the world’s first free, open-source hydroponic nutrient calculator capable of solving the mathematical matrix between desired elemental ppm concentrations and available chemical salts. Because desktop software can be difficult for Bangladeshi farmers to compile or run on mobile phones, our institute has built **HydroGuide** (`/hydroguide/`), a browser-based web application implementing HydroBuddy’s exact stoichiometry engine, localized with Bangladeshi fertilizer prices and BARI crop presets."
            },
            {
              "type": "p",
              "text": "Why do we need a mathematical solver? Suppose you want 150 ppm Nitrogen, 50 ppm Phosphorus, and 200 ppm Potassium. You add MKP (`KH₂PO₄`) to supply all 50 ppm of Phosphorus; doing so automatically adds 63.2 ppm of Potassium. Next, you add Calcium Nitrate to supply your target Calcium, which adds a large portion of your Nitrate Nitrogen. Finally, Potassium Nitrate and Potassium Sulfate must be balanced via non-negative least squares so that both N and K hit their exact targets simultaneously without overshooting."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_147",
          "wpId": 147,
          "slug": "module-06-mastering-ph-chemistry-alkalinity-acid-buffering-bangladesh-water",
          "courseId": "course3",
          "code": "3.06",
          "sortOrder": 6,
          "title": "Lesson 3.06: Mastering pH Chemistry, Alkalinity & Acid Adjustment in Bangladeshi Water",
          "subtitle": "Logarithmic pH Speciation, Bicarbonate Alkalinity Titration & Acid Neutralization",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: HCO₃⁻ + H⁺ → H₂CO₃ → H₂O + CO₂↑ (Neutralizing Bicarbonate Alkalinity)",
          "bdFieldTip": "Always calibrate your digital pH meter every 14 days using pH 4.01 and pH 6.86 buffer packets, and store the glass bulb in 3M KCl storage solution—never store a pH probe in distilled or RO water!",
          "table": {
            "headers": [
              "Solution pH Range",
              "Chemical Effect on Dissolved Nutrients",
              "Plant Root Impact",
              "Corrective Action"
            ],
            "rows": [
              [
                "pH < 4.8 (Too Acidic)",
                "H⁺ ions damage root cell membranes; Mn/Al toxicity risk",
                "Stunted, brown clubbed roots; Ca/Mg uptake suppressed",
                "Dose Potassium Hydroxide (KOH) or Potassium Silicate (pH Up)"
              ],
              [
                "pH 5.5 – 6.2 (Optimal Sweet Spot)",
                "H₂PO₄⁻ dominates; Fe, Mn, B, Zn and Ca²⁺ remain 100% soluble",
                "Maximum nutrient absorption across all 12 elements",
                "Maintain within this band via daily checks"
              ],
              [
                "pH 6.5 – 7.0 (Drifting High)",
                "H₂PO₄⁻ converts to HPO₄²⁻ (reacts with Ca); Fe-EDTA begins dissociating",
                "Early interveinal chlorosis (yellowing) on young upper leaves",
                "Add Phosphoric Acid (H₃PO₄) or Nitric Acid (HNO₃)"
              ],
              [
                "pH > 7.2 (Alkaline Lockout)",
                "Iron, Manganese, Boron, and Calcium Phosphate precipitate out of solution",
                "Severe deficiency despite full EC in tank",
                "Acidify source water to remove HCO₃⁻ before adding nutrients"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "The pH of a nutrient solution measures the negative logarithm of hydrogen ion activity ($-log_{10}[text{H}^+]$). Because the scale is logarithmic, a solution at pH 5.5 is ten times more acidic than a solution at pH 6.5, and a hundred times more acidic than Bangladeshi groundwater at pH 7.5. In hydroponics, pH directly dictates the chemical speciation of phosphorus and micronutrients. Between pH 5.5 and 6.2, phosphorus exists primarily as the monovalent $text{H}_2text{PO}_4^-$ ion, which roots absorb rapidly. Above pH 6.8, it shifts toward divalent $text{HPO}_4^{2-}$, which readily binds with $text{Ca}^{2+}$ to form insoluble calcium phosphate."
            },
            {
              "type": "p",
              "text": "Most deep tube-well water in Dhaka, Rajshahi, and Jashore contains 120 to 280 ppm of Bicarbonate ($text{HCO}_3^-$) alkalinity, giving raw water a pH of 7.3 to 8.0. When you add acid (Phosphoric Acid $text{H}_3text{PO}_4$ or Nitric Acid $text{HNO}_3$), the $text{H}^+$ ions neutralize $text{HCO}_3^-$ into $text{CO}_2$ gas and water. Remember that adding Phosphoric Acid also adds elemental Phosphorus ($text{P}$) to your recipe—which our HydroGuide calculator accounts for!"
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_148",
          "wpId": 148,
          "slug": "module-07-electrical-conductivity-ec-vs-ionic-activity-science-in-hydroponics",
          "courseId": "course3",
          "code": "3.07",
          "sortOrder": 7,
          "title": "Lesson 3.07: Electrical Conductivity (EC) vs. Ionic Activity: Why EC Alone Can Mislead You",
          "subtitle": "Bulk Electrical Conductivity (EC) vs. Specific Ionic Activity & Sodium Accumulation",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: EC (mS/cm) ≈ Σ (λᵢ · Cᵢ · zᵢ) — Bulk Conductivity Does Not Distinguish Ion Species",
          "bdFieldTip": "Never rely on \"TDS (ppm)\" readings alone because some Chinese meters use a 0.50 conversion factor while European meters use 0.70. Always switch your meter to read pure **EC in mS/cm (or µS/cm)**!",
          "table": {
            "headers": [
              "Crop Category in Bangladesh",
              "Seedling Stage EC (mS/cm)",
              "Vegetative Stage EC (mS/cm)",
              "Fruiting / Maturity EC (mS/cm)",
              "Max Background Water EC"
            ],
            "rows": [
              [
                "Lettuce, Mint & Coriander (NFT)",
                "0.8 – 1.0 mS/cm",
                "1.2 – 1.5 mS/cm",
                "1.4 – 1.6 mS/cm (Cool) / 1.2 (Summer)",
                "< 0.3 mS/cm"
              ],
              [
                "Pakchoi, Mustard & Spinach",
                "1.0 – 1.2 mS/cm",
                "1.5 – 1.8 mS/cm",
                "1.8 – 2.0 mS/cm",
                "< 0.4 mS/cm"
              ],
              [
                "Tomato & Cherry Tomato (Dutch Bucket)",
                "1.2 – 1.5 mS/cm",
                "1.8 – 2.2 mS/cm",
                "2.4 – 3.2 mS/cm",
                "< 0.5 mS/cm"
              ],
              [
                "Sweet Capsicum / Bell Pepper",
                "1.2 – 1.4 mS/cm",
                "1.8 – 2.0 mS/cm",
                "2.2 – 2.6 mS/cm",
                "< 0.4 mS/cm"
              ],
              [
                "Strawberry (Winter Bogura/Panchagarh)",
                "0.8 – 1.0 mS/cm",
                "1.2 – 1.4 mS/cm",
                "1.4 – 1.8 mS/cm (Salt Sensitive!)",
                "< 0.25 mS/cm"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "As highlighted on Science in Hydroponics, your EC meter tells you only part of the story. Electrical Conductivity (measured in milliSiemens per centimeter, mS/cm) measures the bulk ability of water to conduct electricity via all dissolved ions combined. It cannot tell the difference between highly beneficial Potassium Nitrate ($text{K}^+$ and $text{NO}_3^-$) and growth-inhibiting Sodium Chloride ($text{Na}^+$ and $text{Cl}^-$)."
            },
            {
              "type": "p",
              "text": "In recirculating NFT and DWC systems in Bangladesh, plants absorb Nitrate ($text{NO}_3^-$), Potassium ($text{K}^+$), and Phosphorus ($text{H}_2text{PO}_4^-$) much faster than they absorb Calcium ($text{Ca}^{2+}$), Magnesium ($text{Mg}^{2+}$), Sulfate ($text{SO}_4^{2-}$), or background Sodium ($text{Na}^+$). After 2 weeks of topping up a reservoir based purely on EC readings, half of your 1.8 mS/cm reading may actually consist of accumulated Sodium, Chloride, and Sulfate while Nitrogen and Potassium are depleted! This is why commercial growers must perform a complete reservoir dump and fresh refill every 14 to 21 days."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_149",
          "wpId": 149,
          "slug": "module-08-iron-chelates-in-hydroponics-fe-edta-dtpa-eddha-comparison",
          "courseId": "course3",
          "code": "3.08",
          "sortOrder": 8,
          "title": "Lesson 3.08: Iron Chelates in Hydroponics: Choosing Between Fe-EDTA, Fe-DTPA & Fe-EDDHA",
          "subtitle": "Chelate Stability Constants (log K): Choosing Between Fe-EDTA, Fe-DTPA & Fe-EDDHA",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Stability across pH: Fe-EDTA (< 6.0) < Fe-DTPA (< 7.0) < Fe-EDDHA (< 9.0)",
          "bdFieldTip": "UV sunlight degrades chelates! Always keep your Stock Tank A and main nutrient reservoir covered with an opaque black lid so sunlight does not photolyze Fe-EDTA/DTPA and cause iron lock-out.",
          "table": {
            "headers": [
              "Iron Chelate Type",
              "Iron Content (%)",
              "Stable pH Window",
              "Color in Solution",
              "Best Use Case in Bangladesh"
            ],
            "rows": [
              [
                "Iron Sulfate (FeSO₄ – Unchelated)",
                "20% Fe",
                "pH < 4.5 (Unstable!)",
                "Rusty brown sediment",
                "DO NOT use as sole iron source in hydroponics; precipitates rapidly as Fe(OH)₃"
              ],
              [
                "Fe-EDTA (Ethylenediaminetetraacetic acid)",
                "13.0% Fe",
                "pH 4.0 – 6.0",
                "Pale yellow-green",
                "Standard choice for well-controlled NFT/DWC systems kept strictly at pH 5.5–6.0"
              ],
              [
                "Fe-DTPA (Diethylenetriaminepentaacetic acid)",
                "11.0% Fe",
                "pH 4.0 – 7.0",
                "Golden yellow",
                "Ideal for Bangladeshi tube-well water & drip systems where pH occasionally drifts to 6.5"
              ],
              [
                "Fe-EDDHA (Ethylenediamine-N,N′-bis)",
                "6.0% Fe",
                "pH 3.0 – 9.0",
                "Deep blood red",
                "Best for alkaline water, aquaponics (pH 6.8–7.4), and emergency chlorosis recovery"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Iron ($text{Fe}$) is essential for chlorophyll synthesis and electron transport in photosynthesis. However, if you dissolve plain Ferrous Sulfate ($text{FeSO}_4$) into an aerated hydroponic reservoir at pH 6.0, dissolved oxygen rapidly oxidizes $text{Fe}^{2+}$ into $text{Fe}^{3+}$, which reacts with hydroxide or phosphate ions to precipitate as insoluble rust ($text{Fe(OH)}_3$) or iron phosphate ($text{FePO}_4$). Within 24 hours, your plants will develop classic iron deficiency: bright yellow new leaves with green veins."
            },
            {
              "type": "p",
              "text": "To prevent this, chemists wrap the iron ion inside an organic \"claw\" molecule called a **chelate** (from the Greek *chele*, meaning crab claw). As Dr. Daniel Fernandez explains, different chelates have different stability constants ($log K$). **Fe-EDTA (13% Fe)** is the most economical and works great below pH 6.0, but above pH 6.3 it begins releasing iron to precipitate. **Fe-DTPA (11% Fe)** stays rock-solid up to pH 7.0, making it the safest choice for Bangladeshi growers using tube-well water."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_150",
          "wpId": 150,
          "slug": "module-09-hoagland-solution-vs-bari-hydroponic-formula-tropical-adaptation",
          "courseId": "course3",
          "code": "3.09",
          "sortOrder": 9,
          "title": "Lesson 3.09: Hoagland Solution vs. BARI Hydroponic Formula: Adapting Recipes for Bangladesh",
          "subtitle": "Adapting Temperate Hoagland (1950) Formulations to BARI Tropical Transpiration Regimes",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: High Temp (34°C) → High Water Transpiration → Lower Target EC (1.2–1.8 mS/cm)",
          "bdFieldTip": "All 12 of these seasonal presets (including BARI Universal, Hoagland Full/Half, Lettuce Summer/Winter, and Tomato Vegetative/Fruiting) are pre-loaded with one click inside our [HydroGuide Web App](/hydroguide/).",
          "table": {
            "headers": [
              "Element (ppm / mg/L)",
              "Hoagland Full Strength (1950)",
              "BARI Tropical Leafy Formula",
              "BARI Fruiting (Tomato/Capsicum)",
              "Adjustment Rule for Hot Summer (>32°C)"
            ],
            "rows": [
              [
                "Nitrogen (Total N)",
                "210 ppm",
                "150 ppm",
                "185 ppm",
                "Reduce N by 15–20% in extreme heat to prevent soft, leggy growth"
              ],
              [
                "Phosphorus (P)",
                "31 ppm",
                "40 ppm",
                "50 ppm",
                "Maintain at 40–50 ppm for strong root regeneration"
              ],
              [
                "Potassium (K)",
                "235 ppm",
                "180 ppm",
                "260 ppm",
                "Increase K:N ratio during flowering and fruit ripening"
              ],
              [
                "Calcium (Ca)",
                "200 ppm",
                "145 ppm",
                "180 ppm",
                "Keep Ca adequate; improve airflow so transpiration carries Ca to tips"
              ],
              [
                "Magnesium (Mg)",
                "48 ppm",
                "45 ppm",
                "55 ppm",
                "Maintain K:Ca:Mg ratio near 4 : 2 : 1"
              ],
              [
                "Target EC (mS/cm)",
                "2.4 – 2.6 mS/cm",
                "1.3 – 1.6 mS/cm",
                "2.0 – 2.5 mS/cm",
                "Drop total EC by 0.3–0.4 mS/cm when daytime temp exceeds 33°C"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "The Hoagland & Arnon (1950) solution developed at UC Berkeley is the most famous reference nutrient recipe in plant physiology. However, full-strength Hoagland was designed for temperate greenhouses ($20^circtext{C}$). When Bangladeshi growers apply a $2.5text{ mS/cm}$ temperate recipe to lettuce or cucumber in a $34^circtext{C}$ summer polyhouse in Gazipur or Cumilla, plants transpire water 3 times faster than they absorb salts—causing osmotic stress at the root surface and severe leaf tip burn."
            },
            {
              "type": "p",
              "text": "Scientists at the Bangladesh Agricultural Research Institute (BARI, Joydebpur, Gazipur) and our Hydroponics BD agronomy team have calibrated tropical formulations that account for seasonal transpiration rates. In summer (April–September), we run a more dilute solution ($1.2text{–}1.5text{ mS/cm}$ for leafy greens; $1.8text{–}2.2text{ mS/cm}$ for fruiting crops) with a higher Nitrate-to-Ammonium ratio, whereas in the cool Rabi winter (November–February), EC can be safely raised by 20–25% for maximum brix sweetness and fruit weight."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_151",
          "wpId": 151,
          "slug": "module-10-cocopeat-buffering-cation-exchange-capacity-cec-protocol-bangladesh",
          "courseId": "course3",
          "code": "3.10",
          "sortOrder": 10,
          "title": "Lesson 3.10: Cocopeat Buffering & Cation Exchange Capacity (CEC): Preparing Media in Bangladesh",
          "subtitle": "Cation Exchange Capacity (CEC) Thermodynamics & Calcium-Magnesium Coir Buffering",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Coir-[K⁺, Na⁺] + Ca²⁺(NO₃)₂ → Coir-[Ca²⁺] + K⁺(leached) + Na⁺(leached)",
          "bdFieldTip": "Or save 48 hours of labor by ordering our pre-washed, Calcium-buffered Low-EC 5kg Cocopeat Blocks directly from the [Hydroponics BD Shop](/shop/)!",
          "table": {
            "headers": [
              "Stage of Cocopeat Treatment",
              "Runoff EC Reading",
              "Cation Status on Coir Colloid",
              "Plant Risk if Used Directly"
            ],
            "rows": [
              [
                "1. Raw Unwashed Coir (Coastal Bagerhat/Khulna)",
                "2.5 – 5.0 mS/cm",
                "Loaded with excess Na⁺, Cl⁻, and K⁺",
                "Severe root burn, osmotic shock, seedling death"
              ],
              [
                "2. Water-Washed Low-EC Cocopeat",
                "< 0.5 mS/cm",
                "Free NaCl washed out, but CEC sites still hold K⁺ & Na⁺",
                "Coir steals Ca²⁺ & Mg²⁺ from your nutrient solution → Blossom End Rot!"
              ],
              [
                "3. Calcium-Buffered Horticultural Cocopeat",
                "0.4 – 0.6 mS/cm",
                "CEC sites saturated with Ca²⁺ and Mg²⁺",
                "100% safe; all applied nutrients go directly to plant roots"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Bangladesh produces abundant coconut husk pith (cocopeat) in southern districts like Bagerhat, Pirojpur, and Khulna. Unlike rockwool or perlite, which are chemically inert, cocopeat is an organic lignocellulosic substrate with a significant Cation Exchange Capacity (CEC of 40–70 meq/100g). Even if you rinse raw cocopeat with fresh water until the runoff EC drops below 0.5 mS/cm, the negatively charged exchange sites on the coir fibers remain saturated with tightly bound Potassium ($text{K}^+$) and Sodium ($text{Na}^+$) ions."
            },
            {
              "type": "p",
              "text": "The moment you plant a tomato or capsicum seedling and irrigate with your A&B nutrient solution, a chemical ion exchange occurs: the cocopeat grabs divalent Calcium ($text{Ca}^{2+}$) and Magnesium ($text{Mg}^{2+}$) out of your solution and releases excess $text{K}^+$ and $text{Na}^+$ in return! Your plants suffer acute Calcium & Magnesium deficiency during the critical first 4 weeks. To prevent this, soak washed cocopeat for 24 hours in a buffering solution of **5 grams/Liter Calcium Nitrate + 2 grams/Liter Magnesium Sulfate**, then flush once with 0.8 mS/cm nutrient solution before planting."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_152",
          "wpId": 152,
          "slug": "module-11-designing-nutrient-film-technique-nft-channels-slope-flow-oxygenation",
          "courseId": "course3",
          "code": "3.11",
          "sortOrder": 11,
          "title": "Lesson 3.11: Engineering Nutrient Film Technique (NFT) Systems: Slope, Flow Rate & Film Depth",
          "subtitle": "Hydraulic Engineering of Thin-Film NFT Gullies: Boundary Layers, Slope & Oxygen Mass Transfer",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Channel Slope = 1.5% to 2.5% (1:60 to 1:40) | Flow Rate = 1.0 – 1.5 L/min per Gully",
          "bdFieldTip": "In Bangladesh’s summer load-shedding, a pure NFT pipe dries out in 45 minutes if the pump stops. Either connect your 25W submersible pump to a small IPS/solar backup, or place a 10mm strip of capillary mat/cocopeat plug at the base of each net cup!",
          "table": {
            "headers": [
              "NFT Design Parameter",
              "Optimal Engineering Standard",
              "Common Amateur Mistake in Bangladesh",
              "Consequence of Mistake"
            ],
            "rows": [
              [
                "Channel Cross-Section",
                "Flat-bottom UV food-grade rectangular gully (100×50 mm)",
                "Round gray sanitary PVC pipe with end-cap dams",
                "Deep stagnant water pool (>3 cm) starves upper roots of oxygen"
              ],
              [
                "Channel Slope (Gradient)",
                "1.5% to 2.5% drop (2 cm drop per 1 meter length)",
                "Completely flat (0% slope) level pipes",
                "Slow flow, water heats up by 4°C, low dissolved oxygen at outlet end"
              ],
              [
                "Inlet Flow Rate per Channel",
                "1.0 to 1.5 Liters per minute (60–90 L/hr)",
                "Trickle flow (< 0.2 L/min) or clogged micro-tube",
                "Plants near inlet take all nutrients/O₂; plants at outlet turn yellow"
              ],
              [
                "Maximum Channel Length",
                "6 to 12 meters maximum per single run",
                "25-meter continuous pipe",
                "Severe temperature rise and oxygen depletion past 12 meters"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Developed by Dr. Allen Cooper in the 1960s, the Nutrient Film Technique (NFT) is the global gold standard for commercial lettuce, herbs, and leafy Asian greens. The word \"Film\" is the scientific key: water at the bottom of the channel should form a shallow, rapidly moving film only 1 to 3 millimeters deep. In this thin film, the lower root mat sits in flowing nutrient solution while the upper moist root mat remains exposed to the humid air space inside the channel, absorbing abundant atmospheric oxygen ($21%text{ O}_2$)."
            },
            {
              "type": "p",
              "text": "In Bangladesh, many DIY builders use round 4-inch hardware PVC pipes with reducer end-caps that hold 4 to 5 centimeters of standing water. That is not true NFT—it is a stagnant pipe pond where dissolved oxygen plummets during hot afternoons, inviting *Pythium* root rot. For commercial reliability, use flat-bottom double-layer white UV-stabilized NFT gullies tilted at a 2% slope (2 cm drop per meter) with a steady flow of 1.2 Liters/minute per channel."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_153",
          "wpId": 153,
          "slug": "module-12-deep-water-culture-dwc-floating-raft-and-kratky-method-bangladesh",
          "courseId": "course3",
          "code": "3.12",
          "sortOrder": 12,
          "title": "Lesson 3.12: Deep Water Culture (DWC) Floating Rafts & Zero-Electricity Kratky Systems",
          "subtitle": "Deep Water Culture Thermal Mass & Passive Aerenchyma Root Adaptation in Kratky Systems",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Target Dissolved Oxygen (DO) ≥ 6.5 mg/L | Kratky Air Gap = 3 to 5 cm below Net Cup",
          "bdFieldTip": "Never fill a Kratky container all the way to the top after the plant has grown its air roots! Submerging established air roots drowns the plant overnight. Only top up to half the container height.",
          "table": {
            "headers": [
              "System Feature",
              "Active DWC Floating Raft",
              "Passive Kratky Box Method",
              "NFT Channel System"
            ],
            "rows": [
              [
                "Electricity Requirement",
                "Continuous Air Blower / Venturi Pump",
                "Zero Electricity (100% Passive)",
                "Continuous Water Circulation Pump"
              ],
              [
                "Thermal Stability in 38°C Heat",
                "Excellent (20–30 cm deep water resists rapid heating)",
                "Good if box is shaded/insulated",
                "Low (thin film heats up rapidly if exposed)"
              ],
              [
                "Power Outage Resilience",
                "Survives 12–24 hours without power",
                "Immune to power outages",
                "Risk of wilting after 1 hour without pump"
              ],
              [
                "Best Crops in Bangladesh",
                "Lettuce, Basil, Mint, Kangkong, Pakchoi",
                "Leafy greens, Chilis, Household herbs, Rural fodder",
                "Commercial Lettuce, Strawberry, Herbs"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Deep Water Culture (DWC)—where plants float on high-density polystyrene (EPS) rafts over a 20 to 30 cm deep nutrient basin—has a massive thermodynamic advantage in Bangladesh: **high thermal mass**. Because a 1,000-liter DWC bed takes many hours to warm up, root-zone temperatures stay 3°C to 5°C cooler during peak midday heat compared to thin-film pipes. To keep roots thriving submerged in water, we inject compressed air via regenerative blowers and microporous air stones or Venturi injectors to maintain Dissolved Oxygen (DO) above 6.5 mg/L."
            },
            {
              "type": "p",
              "text": "What if you live in a rural char, coastal Satkhira, or a household without reliable electricity? You can use Dr. Bernard Kratky’s **non-circulating passive hydroponic method**. In a Kratky container, the initial nutrient level touches only the bottom 1 cm of the net cup. As the plant drinks water and the level drops, a 4 to 6 cm humid **air gap** forms between the lid and the water surface. The upper root zone develops specialized feathery \"oxygen roots\" (aerenchyma) in that moist air gap, while the lower root tips drink water and nutrients below—requiring zero pumps and zero electricity from seed to harvest!"
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_154",
          "wpId": 154,
          "slug": "module-13-dutch-bucket-bato-drip-fertigation-tomato-capsicum-cucumber",
          "courseId": "course3",
          "code": "3.13",
          "sortOrder": 13,
          "title": "Lesson 3.13: Dutch Bucket (Bato) Drip Fertigation for High-Value Vine Crops",
          "subtitle": "Pulse Fertigation Hydraulics & 20% Leachate Runoff EC/pH Steering in Dutch Buckets",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Drainage Runoff % = (Volume Drained ÷ Volume Irrigated) × 100 [Target: 15% – 25%]",
          "bdFieldTip": "Place 5 cm of LECA clay pebbles or coarse gravel at the bottom of every Dutch bucket (covering the siphon elbow) before adding cocopeat so fine coir fibers never wash into your return drain pipe!",
          "table": {
            "headers": [
              "Growth Stage & Weather",
              "Drip Cycles per Day",
              "Duration per Pulse (2 L/hr Dripper)",
              "Target Input EC",
              "Max Acceptable Drain Runoff EC"
            ],
            "rows": [
              [
                "Young Transplant (Weeks 1–3)",
                "3 to 4 pulses/day",
                "3 – 4 minutes per pulse",
                "1.6 mS/cm",
                "1.8 – 2.0 mS/cm"
              ],
              [
                "Flowering & Early Fruit Set",
                "5 to 6 pulses/day",
                "4 – 5 minutes per pulse",
                "2.0 – 2.2 mS/cm",
                "2.4 – 2.7 mS/cm"
              ],
              [
                "Heavy Fruiting (Sunny Day >32°C)",
                "8 to 10 pulses/day",
                "5 – 6 minutes per pulse",
                "2.2 – 2.5 mS/cm",
                "2.8 – 3.2 mS/cm (Flush if > 3.5)"
              ],
              [
                "Cloudy / Rainy Monsoon Day",
                "3 to 4 pulses/day",
                "3 minutes per pulse",
                "2.2 mS/cm",
                "2.5 – 2.8 mS/cm"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Large fruiting vine crops—such as beefsteak and cherry tomatoes, colored sweet capsicum, English seedless cucumber, and netted rockmelon—develop massive root systems that quickly clog narrow NFT channels. For these heavy feeders, the **Dutch Bucket (Bato Bucket)** system is the commercial standard across Bangladesh. Each 11-liter UV-stabilized polypropylene bucket is filled with expanded clay pebbles (LECA) or a 70:30 cocopeat-perlite mix, and features an internal siphon elbow that maintains a 4 cm moisture reservoir at the bottom while draining excess solution into a central 2-inch PVC return manifold."
            },
            {
              "type": "p",
              "text": "Scientific management of Dutch Buckets relies on **Pulse Fertigation and Leachate Monitoring**. Instead of running drip emitters continuously, an automated timer or SensPanel controller triggers short 4-to-5-minute irrigation pulses 5 to 10 times during daylight hours. Each fresh pulse pushes stale air out of the substrate pores and draws fresh oxygen in behind it. Always collect the drainage water (\"runoff\") from one test bucket each afternoon: your daily drainage volume should be **15% to 25%** of your daily input volume, and the runoff EC should never exceed your input EC by more than 0.6 mS/cm."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_155",
          "wpId": 155,
          "slug": "module-14-managing-root-zone-temperature-dissolved-oxygen-bangladesh-summer",
          "courseId": "course3",
          "code": "3.14",
          "sortOrder": 14,
          "title": "Lesson 3.14: Cooling the Root Zone (<26°C) & Preventing Pythium in Bangladesh Summers",
          "subtitle": "Henry’s Law of Dissolved Oxygen Saturation vs. Q10 Root Respiration in Tropical Summers",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: DO Saturation: 9.1 mg/L at 20°C → 7.5 mg/L at 30°C → 6.7 mg/L at 36°C (Pythium Danger Zone!)",
          "bdFieldTip": "In summer, inoculate your reservoir with beneficial *Bacillus amyloliquefaciens* / *Trichoderma harzianum* bio-fungicide, or run a sterile system with 35% food-grade Hydrogen Peroxide ($text{H}_2text{O}_2$ at 0.5 mL/L twice a week) to keep roots pearly white.",
          "table": {
            "headers": [
              "Water Temperature (°C)",
              "Max Dissolved Oxygen (mg/L)",
              "Root Respiration Demand",
              "Root Health & Pythium Risk Status"
            ],
            "rows": [
              [
                "18°C – 24°C",
                "8.4 – 9.5 mg/L",
                "Moderate, optimal metabolic rate",
                "100% Healthy pearly-white roots; maximum ion uptake"
              ],
              [
                "25°C – 27°C",
                "7.9 – 8.2 mg/L",
                "Elevated respiration",
                "Safe for tropical varieties if continuous air blower is active"
              ],
              [
                "28°C – 31°C",
                "7.3 – 7.7 mg/L",
                "High O₂ demand; stomata begin closing at midday",
                "Stress threshold; add Venturi aeration + shade net"
              ],
              [
                "32°C – 36°C+",
                "< 7.0 mg/L",
                "Roots suffocate faster than O₂ can diffuse",
                "CRITICAL: Brown slimy roots, Pythium aphanidermatum outbreak!"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Between April and September in Bangladesh, ambient afternoon temperatures routinely hit 34°C to 39°C. In physics, gas solubility in water follows Henry’s Law: as water warms up, its capacity to hold Dissolved Oxygen ($text{DO}$) drops sharply. Worse still, plant root cellular respiration follows the $Q_{10}$ temperature coefficient—for every $10^circtext{C}$ rise in root temperature, roots demand roughly **double** the oxygen just to stay alive! Above $31^circtext{C}$, roots experience hypoxia, lose their immune defenses, and are rapidly colonized by the opportunistic water mold *Pythium aphanidermatum*."
            },
            {
              "type": "p",
              "text": "You do not need expensive industrial chillers to keep your nutrient reservoir below $26^circtext{C}$ in Bangladesh. First, **bury your main nutrient reservoir tank 3 feet underground** (or place it inside a shaded masonry pit); soil temperature at 1 meter depth stays a cool $24^circtext{C}text{–}25^circtext{C}$ year-round. Second, use only double-layer white-over-black channels and wrap exposed tanks in reflective aluminum bubble insulation. Third, deploy 50% aluminet or green shade net plus high-pressure micro-foggers during peak afternoon hours."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_156",
          "wpId": 156,
          "slug": "module-15-vapor-pressure-deficit-vpd-calcium-transport-tipburn-monsoon",
          "courseId": "course3",
          "code": "3.15",
          "sortOrder": 15,
          "title": "Lesson 3.15: Vapor Pressure Deficit (VPD), Transpiration & Preventing Lettuce Tipburn in Monsoon",
          "subtitle": "Psychrometrics of Vapor Pressure Deficit (VPD) & Xylem Calcium Mass Flow",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: VPD (kPa) = SVP(T_leaf) − [SVP(T_air) × (RH / 100)] | Optimal Target: 0.8 – 1.2 kPa",
          "bdFieldTip": "Alongside canopy airflow fans, a weekly foliar spray of **3 grams/Liter Calcium Nitrate** directly onto the inner heart of lettuce or young tomato clusters bypasses xylem transport bottlenecks during extreme humidity!",
          "table": {
            "headers": [
              "Bangladesh Season",
              "Typical Temp & Relative Humidity",
              "Calculated VPD (kPa)",
              "Physiological Effect on Plant",
              "Corrective Climate Action"
            ],
            "rows": [
              [
                "Monsoon (July–Sept)",
                "31°C & 88% RH",
                "0.42 kPa (Too Low!)",
                "Transpiration stops; Ca²⁺ cannot reach inner lettuce leaves → Tipburn!",
                "Run horizontal HAF circulation fans directly across crop canopy"
              ],
              [
                "Winter Morning (Dec–Jan)",
                "24°C & 65% RH",
                "1.04 kPa (Optimal)",
                "Steady xylem mass flow; rapid photosynthesis and balanced Ca uptake",
                "Ideal growing window; maintain ventilation"
              ],
              [
                "Dry Summer (April–May)",
                "37°C & 40% RH",
                "3.75 kPa (Too High!)",
                "Stomata slam shut to save water; leaf edges curl upward",
                "Trigger high-pressure fogger misting + 50% shade screen; lower EC"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Every monsoon season in Bangladesh, growers call our lab with the same puzzle: \"My reservoir has plenty of Calcium Nitrate (160 ppm Ca), my pH is 5.8, yet the inner young leaves of my lettuce have black burnt edges (Tipburn) and my tomatoes have black sunken bottoms (Blossom End Rot)!\" The reason is that **Calcium ($text{Ca}^{2+}$) is phloem-immobile**. Unlike Nitrogen or Potassium, which the plant can pump Anywhere via phloem sap, Calcium moves *exclusively* upward in the xylem water stream driven by leaf transpiration."
            },
            {
              "type": "p",
              "text": "The driving force of transpiration is **Vapor Pressure Deficit (VPD)**—the difference between the moisture pressure inside the leaf and the surrounding air. During a humid Bangladeshi monsoon (85–95% Relative Humidity, VPD < 0.4 kPa), stagnant humid air blankets the inner crown of the lettuce head. Because water cannot evaporate from those inner leaves, zero xylem water flows into them, and they starve of Calcium within 48 hours! Installing vertical/horizontal airflow fans aimed at the plant canopy breaks the humid boundary layer and restores Calcium delivery."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_157",
          "wpId": 157,
          "slug": "module-16-nitrate-to-ammonium-ratio-controlling-root-ph-and-plant-growth",
          "courseId": "course3",
          "code": "3.16",
          "sortOrder": 16,
          "title": "Lesson 3.16: The Nitrate (NO₃⁻) to Ammonium (NH₄⁺) Ratio: Self-Stabilizing Your Reservoir pH",
          "subtitle": "Rhizosphere Charge Balance: Controlling Reservoir pH Drift via NH4+ : NO3- Ratios",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Root Uptake of NO₃⁻ → Releases OH⁻/HCO₃⁻ (pH Rises ↑) | Uptake of NH₄⁺ → Releases H⁺ (pH Drops ↓)",
          "bdFieldTip": "Our [HydroGuide Calculator](/hydroguide/) automatically computes and displays your exact **NH₄⁺ : NO₃⁻ ratio** in real time so you never accidentally induce ammonium toxicity in warm weather!",
          "table": {
            "headers": [
              "NH₄⁺ : Total N Percentage",
              "Effect on Reservoir pH Over 7 Days",
              "Plant Growth Response",
              "Recommendation for Bangladesh"
            ],
            "rows": [
              [
                "0% NH₄⁺ (100% Nitrate)",
                "pH climbs steadily upward (+0.3 to +0.5 pH/day)",
                "Clean, compact growth; requires daily acid dosing",
                "Good for extreme heat (>35°C) or sensitive crops like Strawberry"
              ],
              [
                "5% – 10% NH₄⁺ (Standard Agri Ca(NO₃)₂)",
                "pH stays remarkably stable between 5.7 and 6.2",
                "Optimal nitrogen assimilation energy efficiency",
                "Ideal default ratio for 90% of hydroponic farms in Bangladesh"
              ],
              [
                "12% – 18% NH₄⁺",
                "pH slowly drifts downward (-0.1 to -0.2 pH/day)",
                "Vigorous leafy expansion; counteracts alkaline tube-well water",
                "Useful when raw water has moderately high bicarbonate"
              ],
              [
                "> 25% NH₄⁺ (Excess Ammonium/Urea)",
                "Rapid pH crash (< 4.5); root burn",
                "Ammonium toxicity, Calcium lockout, soft disease-prone stems",
                "NEVER exceed 20% NH₄⁺ in soilless culture!"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Why does the pH of a hydroponic reservoir naturally change even when no new water is added? Plant roots must maintain strict electrical neutrality across their cell membranes. Because roughly 85% to 95% of Nitrogen in a hydroponic formula is supplied as negatively charged Nitrate ($text{NO}_3^-$ anions), roots take up more anions than cations. To balance the electrical charge, roots excrete bicarbonate ($text{HCO}_3^-$) or hydroxide ($text{OH}^-$) ions back into the water—causing your reservoir pH to rise every single day."
            },
            {
              "type": "p",
              "text": "Conversely, when a root absorbs positively charged Ammonium ($text{NH}_4^+$ cations), it excretes a proton ($text{H}^+$) into the solution, which **lowers** the pH! Because ammonium is absorbed preferentially and much faster than nitrate, supplying just **5% to 12% of your Total Nitrogen as $text{NH}_4^+$** (which occurs naturally when you use agricultural-grade Calcium Nitrate, $5text{Ca(NO}_3)_2cdottext{NH}_4text{NO}_3cdot 10text{H}_2text{O}$, or a tiny addition of Ammonium Sulfate / MAP) creates a biological buffer that keeps your reservoir pH remarkably steady."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_158",
          "wpId": 158,
          "slug": "module-17-silicon-and-biostimulants-in-hydroponics-peer-reviewed-science",
          "courseId": "course3",
          "code": "3.17",
          "sortOrder": 17,
          "title": "Lesson 3.17: Silicon (Si) & Biostimulants in Hydroponics: What Peer-Reviewed Science Shows",
          "subtitle": "Monosilicic Acid [Si(OH)4] Polymerization & Peer-Reviewed Biostimulant Chemistry",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: K₂SiO₃ + 2H₂O → Monosilicic Acid [Si(OH)₄] (Target: 20 – 40 ppm Elemental Si)",
          "bdFieldTip": "Never pour organic molasses, humic acid, or heavy amino acids into an indoor recirculating NFT/DWC tank in Bangladesh’s warm climate—they cause explosive heterotrophic bacterial slime blooms that strip all oxygen from your roots within 24 hours!",
          "table": {
            "headers": [
              "Compound / Additive",
              "Active Chemical Form",
              "Proven Scientific Dose",
              "Reproducible Benefit in Hydroponic Studies"
            ],
            "rows": [
              [
                "Potassium Silicate",
                "Monosilicic Acid (H₄SiO₄)",
                "15 – 35 ppm Elemental Si",
                "Polymerizes in epidermal cell walls; cuts Powdery Mildew & Pythium by >50%, reduces heat wilting"
              ],
              [
                "Salicylic Acid / Chitosan",
                "Phenolic / Polysaccharide Elicitor",
                "10 – 25 ppm (Foliar)",
                "Activates Systemic Acquired Resistance (SAR) against fungal & viral stress"
              ],
              [
                "L-Amino Acid Hydrolysates",
                "L-Glycine & L-Glutamic Acid",
                "50 – 150 ppm (Foliar only)",
                "Natural foliar chelation of Ca/Fe; avoid high doses in reservoir (feeds bacteria!)"
              ],
              [
                "Thiamine (Vitamin B1)",
                "Thiamine Hydrochloride",
                "10 – 50 ppm (Foliar/Root drench)",
                "Cofactor in carbohydrate metabolism during transplant shock recovery"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In soil, clay minerals continuously dissolve to release 20 to 100 ppm of soluble Monosilicic Acid ($text{H}_4text{SiO}_4$). In pure water or cocopeat hydroponics, however, Silicon ($text{Si}$) is almost completely absent unless the grower adds it! Although Silicon is classified as \"quasi-essential,\" hundreds of peer-reviewed studies—frequently analyzed on Science in Hydroponics—demonstrate that adding **20 to 35 ppm of elemental Silicon** (via Potassium Silicate, $text{K}_2text{SiO}_3$) deposits a physical silica gel barrier inside leaf epidermal cell walls."
            },
            {
              "type": "p",
              "text": "For Bangladeshi farmers growing Cucumber, Rockmelon, and Strawberry, soluble Silicon is a game changer: fungal hyphae (such as Powdery Mildew and Downy Mildew) physically struggle to penetrate silica-reinforced leaves, and thicker stems resist lodging and heat wilt. **Crucial Mixing Rule**: Potassium Silicate is strongly alkaline ($text{pH} > 11$). Always dilute Potassium Silicate into your main water reservoir *first*, adjust the pH down to 6.5 with acid, and *only then* add Stock A and Stock B—otherwise concentrated silicate will instantly precipitate Calcium and Magnesium!"
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_159",
          "wpId": 159,
          "slug": "module-18-diagnosing-nutrient-deficiencies-mobile-vs-immobile-elements-chart",
          "courseId": "course3",
          "code": "3.18",
          "sortOrder": 18,
          "title": "Lesson 3.18: Diagnosing Nutrient Deficiencies: The Mobile vs. Immobile Element Visual Key",
          "subtitle": "Phloem Mobility Dichotomous Key: Diagnosing Mobile vs. Immobile Nutrient Disorders",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Old Leaves First = Mobile (N, P, K, Mg) | New/Apical Leaves First = Immobile (Ca, Fe, B, Mn, Zn)",
          "bdFieldTip": "Before adding any extra salt for an Iron or Calcium deficiency, ALWAYS test your reservoir and runoff pH & EC first. In 80% of Bangladeshi farms, a nutrient deficiency on the leaf is caused by pH lockout or high EC osmotic stress rather than a missing element in the bottle!",
          "table": {
            "headers": [
              "Where Symptoms Appear First",
              "Visual Leaf Symptom",
              "Deficient Element",
              "Root Cause & Immediate Fix in Hydroponics"
            ],
            "rows": [
              [
                "Lower / Older Leaves",
                "Uniform pale green to yellow across entire old leaf; stunted growth",
                "Nitrogen (N)",
                "Low EC or depleted tank → Refresh reservoir; check Stock A/B dosing"
              ],
              [
                "Lower / Older Leaves",
                "Yellowing between veins (interveinal chlorosis) while veins stay green; upward cupping",
                "Magnesium (Mg)",
                "High K:Mg antagonism or low Epsom salt → Spray 1% MgSO₄ foliar + add 15 ppm Mg"
              ],
              [
                "Lower / Older Leaves",
                "Scorched yellow/brown leaf margins (edges) and necrotic pinholes",
                "Potassium (K)",
                "Fruiting stage K depletion → Increase Potassium Sulfate / KNO₃ in Tank B"
              ],
              [
                "Upper / Newest Leaves",
                "Bright yellow new leaves with sharp green network of veins",
                "Iron (Fe)",
                "pH > 6.5 lockout or degraded chelate → Lower pH to 5.8 + dose Fe-DTPA"
              ],
              [
                "Upper / Newest Growing Tip",
                "Hooked, burnt, deformed inner leaves; black sunken bottom on tomato fruit",
                "Calcium (Ca) / Boron (B)",
                "Poor VPD transpiration or unbuffered cocopeat → Increase airflow + 0.3% Ca(NO₃)₂ spray"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "When a leaf turns yellow in your hydroponic farm, guessing randomly and dumping extra fertilizer into the tank usually makes the problem worse. Plant physiologists diagnose nutritional disorders using a strict two-step rule based on **Phloem Mobility**. Step 1: Look at *where* on the plant the symptoms appear first—the **older lower leaves** or the **newest upper leaves/growing tips**."
            },
            {
              "type": "p",
              "text": "Elements that are **mobile** in the phloem—Nitrogen ($text{N}$), Phosphorus ($text{P}$), Potassium ($text{K}$), and Magnesium ($text{Mg}$)—can be translocated by the plant from old leaves to feed new growth whenever supply runs low. Therefore, $text{N, P, K, and Mg}$ deficiencies *always* show up on the **oldest lower leaves first**. Conversely, **immobile** elements—Calcium ($text{Ca}$), Iron ($text{Fe}$), Boron ($text{B}$), Manganese ($text{Mn}$), and Zinc ($text{Zn}$)—are locked in place once deposited. Therefore, their deficiencies *always* strike the **newest upper leaves, flowers, and root tips first**!"
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_160",
          "wpId": 160,
          "slug": "module-19-foliar-sprays-in-hydroponics-what-actually-enters-the-leaf",
          "courseId": "course3",
          "code": "3.19",
          "sortOrder": 19,
          "title": "Lesson 3.19: Foliar Sprays in Hydroponics: Cuticular Penetration, Surfactants & Best Practices",
          "subtitle": "Cuticular Penetration Kinetics, Point of Deliquescence (POD) & Surfactant Chemistry in Foliar Feeding",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Max Foliar Spray EC ≤ 1.5 mS/cm (0.1% – 0.3% w/v) | Spray pH = 5.5 – 6.2 | Time: Late Afternoon",
          "bdFieldTip": "Never spray foliar nutrients under hot midday sun ($>30^circtext{C}$), and never exceed $1.5text{ mS/cm}$ total concentration in your spray tank!",
          "table": {
            "headers": [
              "Target Deficiency / Goal",
              "Foliar Salt & Concentration (grams per Liter)",
              "Optimal Spray pH",
              "Penetration Speed (50% Absorption Time)"
            ],
            "rows": [
              [
                "Calcium Tipburn / Blossom End Rot",
                "Calcium Nitrate: 2.5 – 3.5 g/L (or Calcium Chloride 2.0 g/L)",
                "pH 5.8 – 6.2",
                "12 – 24 hours (Requires humid evening air)"
              ],
              [
                "Acute Magnesium Chlorosis",
                "Magnesium Sulfate (Epsom Salt): 5.0 – 8.0 g/L",
                "pH 6.0",
                "4 – 8 hours (Very rapid uptake)"
              ],
              [
                "Iron / Micronutrient Lockout",
                "Fe-DTPA (0.5 g/L) + MnSO₄ (0.2 g/L) + ZnSO₄ (0.1 g/L)",
                "pH 5.5",
                "12 – 24 hours"
              ],
              [
                "Flowering & Fruit Set Boost",
                "Mono Potassium Phosphate (MKP): 2.0 – 3.0 g/L + Boric Acid (0.2 g/L)",
                "pH 5.8",
                "10 – 18 hours"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "As analyzed in detail on Science in Hydroponics (\"Foliar Sprays in Hydroponics: What Actually Enters the Plant?\"), plant leaves evolved a hydrophobic waxy cuticle specifically to prevent water loss—and that same barrier resists ion entry. A foliar spray only penetrates the leaf while the microscopic water droplet remains liquid on the leaf surface! Once a droplet evaporates into dry crystal crust under midday sun, ion diffusion stops completely and the concentrated salt burns the leaf epidermis."
            },
            {
              "type": "p",
              "text": "This is governed by each salt’s **Point of Deliquescence (POD)**—the relative humidity above which a salt crystal absorbs moisture from the air and stays liquid. Calcium Nitrate and Magnesium Sulfate have low PODs and absorb well when sprayed in the humid late afternoon (after 4:30 PM in Bangladesh) when stomata are open and evening humidity rises above 70%. Always add 2–3 drops per liter of a non-ionic wetting surfactant (or pure agricultural silicone spreader) so the spray forms a thin film across the leaf rather than rolling off as beads."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        },
        {
          "id": "wp_161",
          "wpId": 161,
          "slug": "module-20-commercial-hydroponic-farm-unit-economics-roi-bangladesh",
          "courseId": "course3",
          "code": "3.20",
          "sortOrder": 20,
          "title": "Lesson 3.20: Commercial Hydroponic Farm Unit Economics, Reservoir Sizing & ROI in Bangladesh",
          "subtitle": "Advanced Commercial Unit Economics, Reservoir Buffering Volume & Smart IoT Automation",
          "readTime": "18 Min Read",
          "objectives": [],
          "keyFormula": "🧪 Core Chemical / Engineering Formula: Minimum Reservoir Volume = 0.5 L per Leafy Plant (NFT) | 2.5 – 4.0 L per Vine Plant (Dutch Bucket)",
          "bdFieldTip": "Ready to launch your commercial polyhouse or rooftop farm? Contact our 8 regional branches or book a site engineering visit on our [Contact & Branches Page](/contact-us/)!",
          "table": {
            "headers": [
              "Farm Scale & System Type",
              "Footprint Area",
              "Est. Turnkey Setup CapEx (BDT)",
              "Annual Operating Cost (Seeds/Salts/Power)",
              "Est. Annual Net Profit & Payback"
            ],
            "rows": [
              [
                "Urban Rooftop Starter (2× 72-Site NFT)",
                "120 sq. ft.",
                "৳31,000",
                "৳7,500 / year",
                "৳42,000 / year (Payback: ~9 Months)"
              ],
              [
                "Semi-Commercial Leafy Farm (1,000-Site NFT/DWC)",
                "500 sq. ft.",
                "৳1,65,000",
                "৳32,000 / year (8 crop cycles)",
                "৳1,85,000 / year (Payback: ~11 Months)"
              ],
              [
                "2,500 sq. ft. Polyhouse Dutch Bucket (Capsicum/Tomato)",
                "2,500 sq. ft. (650 buckets)",
                "৳6,80,000",
                "৳1,10,000 / year",
                "৳5,40,000 / year (Payback: ~14 Months)"
              ],
              [
                "5,000 sq. ft. Smart IoT Commercial Greenhouse",
                "5,000 sq. ft. (SensPanel Automated)",
                "৳13,50,000",
                "৳2,10,000 / year",
                "৳11,20,000 / year (Payback: ~14 Months)"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Financial success in commercial hydroponics in Bangladesh comes down to three engineering numbers: **Reservoir Sizing, Fertilizer Self-Formulation, and Crop Calendar Timing**. First, never undersize your reservoir tank: provide at least **0.5 Liters of reservoir capacity per leafy green site** (e.g., a 500-Liter tank for 1,000 lettuce sites) and **3.0 Liters per fruiting vine plant**. A larger reservoir buffers pH and EC swings and reduces labor."
            },
            {
              "type": "p",
              "text": "Second, formulate your own Stock A & B nutrients using greenhouse-grade raw salts and our [HydroGuide Calculator](/hydroguide/). Producing 1,000 Liters of working nutrient solution from raw salts in Bangladesh costs only **৳110 to ৳145** (less than ৳0.15 per Liter!). Third, target high-value market windows: grow colored Sweet Capsicum, Beefsteak/Cherry Tomato, Netted Rockmelon, and Salad Lettuce for supershops (Shwapno, Unimart, Meena Bazar), hotels, and direct-to-consumer urban delivery."
            },
            {
              "type": "heading",
              "text": "📊 Scientific Reference Table & Bangladesh Parameters"
            },
            {
              "type": "heading",
              "text": "🇧🇩 Practical Agronomy Note for Bangladesh Growers"
            }
          ]
        }
      ]
    },
    {
      "id": "bari_book",
      "icon": "📘",
      "badge": "BARI Book • 11 Chapters",
      "titleEn": "BARI Hydroponics Official Digital Handbook",
      "titleBn": "বারি (BARI) হাইড্রোপনিক্স ডিজিটাল হ্যান্ডবুক (১১টি অধ্যায়)",
      "descEn": "Complete Bangladesh Agricultural Research Institute (BARI Gazipur) reference chapters covering seedling production, Stock A/B preparation, cocopeat culture, vertical pipes, and deficiency charts.",
      "descBn": "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট (বারি, গাজীপুর) প্রণীত সম্পূর্ণ নির্দেশিকা: চারা উৎপাদন, স্টক দ্রবণ তৈরি, কোকোপিট পদ্ধতি, ভার্টিক্যাল পাইপ ও পুষ্টি ঘাটতি নির্ণয়।",
      "color": "#b45309",
      "lessons": [
        {
          "id": "wp_265",
          "wpId": 265,
          "slug": "bari-book-front-matter-introduction",
          "courseId": "bari_book",
          "code": "Intro",
          "sortOrder": 265,
          "title": "BARI Hydroponics Book — Front Matter, Foreword, Preface & Introduction to Hydroponics in Bangladesh",
          "subtitle": "🇬🇧 English Technical Edition — Front Matter, Foreword, Preface & Introduction to Hydroponics in Bangladesh",
          "readTime": "12 Min Read",
          "objectives": [
            "Lesson 1.01: What Is Hydroponics? How Plants Grow Without Soil →",
            "Lesson 1.02: Soil vs. Hydroponics in Bangladesh →",
            "Lesson 3.09: Hoagland vs. BARI Hydroponic Formula →",
            "📚 Full BARI Hydroponics Digital Book (Interactive Master Index & All 79 Figures) →",
            "🧮 Open HydroGuide App (Pre-loaded with BARI Gazipur Stock A & B Formula) →"
          ],
          "keyFormula": "",
          "bdFieldTip": "হাইড্রোপনিক কালচার ফসল উৎপাদনের একটি আধুনিক ও সময়োপযোগী পদ্ধতি যা পৃথিবীর উন্নত দেশসমূহে সফল ও বাণিজ্যিকভাবে ব্যবহার হয়ে আসছে। নিয়ন্ত্রিত পরিবেশে যে কোন পতিত জায়গায় এ পদ্ধতিতে বিভিন্ন প্রকার সবজি, ফল ও ফুলের চাষ করা সম্ভব। এ পদ্ধতিতে রাসায়নিক সার, বাড়তি সেচ এবং সাধারণত কীটনাশক ব্যবহারের প্রয়োজন হয় না বিধায় উৎপাদিত ফসল হয় নিরাপদ। যে সকল ফসলের উচ্চ বাজারমূল্য রয়েছে সেসব ফসল এ পদ্ধতিতে চাষ অধিক লাভজনক। আমেরিকা, ইউরোপের দেশসমূহ, জাপান, তাইওয়ান, চীন, থাইল্যান্ড, সিঙ্গাপুর, মালয়েশিয়া এবং মধ্য-প্রাচ্যের দেশসমূহে বাণিজ্যিকভাবে হাইড্রোপনিক পদ্ধতির মাধ্যমে সবজি, ফল ও ফুল উৎপাদন করছে। এই পদ্ধতিতে সারাবছরই পলিটানেল, নেট হাউজে বা গ্রীনহাউজে সবজি, ফল ও ফুল উৎপাদন করা সম্ভব। বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের সবজি বিভাগ, উদ্যানতত্ত্ব গবেষণা কেন্দ্র এর বিজ্ঞানীরা হাইড্রোপনিক কালচার বিষয়ে গবেষণা করে সবজি, ফুল ও ফল জাতীয় ফসলের সফলভাবে উৎপাদন করতে সক্ষম হয়েছেন। আশা করি, এ পদ্ধতি ব্যবহার করে পারিবারিক ও সামগ্রিকভাবে সবজির উৎপাদন ও পুষ্টির চাহিদা মেটানো বহুলাংশে সম্ভব হবে।",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Foreword — Director General, BARI"
            },
            {
              "type": "p",
              "text": "Hydroponic culture is a modern and timely crop production technology that has been successfully used commercially across developed nations worldwide. Under controlled environments, diverse vegetables, fruits, and flowers can be cultivated on any fallow or non-arable space using this method. Because excess irrigation and synthetic chemical pesticides are generally not required in this system, the harvested produce is safe and residue-free. Cultivating high-market-value horticultural crops in this system is highly profitable. Countries across North America, Europe, Japan, Taiwan, China, Thailand, Singapore, Malaysia, and the Middle East commercially produce vegetables, fruits, and flowers through hydroponics. Year-round production is possible inside poly-tunnels, net-houses, or greenhouses. Scientists of the Olericulture Division, Horticulture Research Centre (HRC) at the Bangladesh Agricultural Research Institute (BARI) have conducted extensive research on hydroponic culture and successfully adapted protocols for vegetables, flowers, and fruit crops. I hope that adopting this technology will substantially meet both household and national vegetable and nutritional demands."
            },
            {
              "type": "p",
              "text": "— Dr. Abul Kalam Azad, Director General, BARI (June 2018)"
            },
            {
              "type": "heading",
              "text": "Preface — Director (Research Wing), BARI"
            },
            {
              "type": "p",
              "text": "Bangladesh is a densely populated nation where rapid population growth is accompanied by a steady decline in arable agricultural land. Furthermore, climate change and global warming continuously threaten nature-dependent open-field agriculture. In this critical situation, developing alternative crop cultivation methods is imperative. Through dedicated research, the Olericulture Division of the Horticulture Research Centre at BARI has successfully cultivated 16 varieties of vegetable, flower, and fruit crops using hydroponic technology. This publication serves as a practical technical manual for hydroponic crop production in Bangladesh."
            },
            {
              "type": "p",
              "text": "— Dr. Md. Lutfar Rahman, Director (Research Wing), BARI"
            },
            {
              "type": "heading",
              "text": "Introduction (Book Page 1)"
            },
            {
              "type": "p",
              "text": "In Bangladesh, arable land per capita is extremely limited and shrinks every year due to new housing, roads, and industrial infrastructure. To feed a growing population, Bangladesh cannot rely solely on traditional field soil. Unused spaces, non-arable lands, and urban building rooftops must be brought under productive cultivation. In the hydroponic system, crops are produced under controlled conditions by supplying all essential plant nutrient elements dissolved directly in water."
            },
            {
              "type": "p",
              "text": "The Olericulture Division of BARI has successfully produced tomato, sweet pepper (capsicum), lettuce, cauliflower, broccoli, bitter gourd, dwarf country bean, cucumber, khira, strawberry, marigold, and rose in large soilless galvanized steel or plastic trays filled with nutrient-enriched water. Because hydroponic strawberries never touch damp soil, fruit rot is eliminated. Moreover, waterlogged, coastal saline (Khulna/Satkhira), hilly, and flood-prone regions of Bangladesh can utilize hydroponics for year-round safe horticulture."
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (4 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "মুখবন্ধ (মহাপরিচালক, বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট)"
            },
            {
              "type": "p",
              "text": "হাইড্রোপনিক পদ্ধতি উদ্ভাবন ও পুস্তিকা প্রকাশের সাথে জড়িত সকল বিজ্ঞানীসহ অন্যান্যদের জানাই আন্তরিক ধন্যবাদ।"
            },
            {
              "type": "p",
              "text": "— ড. আবুল কালাম আযাদ, মহাপরিচালক, বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট (জুন ২০১৮)"
            },
            {
              "type": "heading",
              "text": "প্রাক্কথন (পরিচালক, গবেষণা উইং, বারি)"
            },
            {
              "type": "p",
              "text": "হাইড্রোপনিক কালচার ফসল উৎপাদনের একটি আধুনিক ও সময়োপযোগী পদ্ধতি যা পৃথিবীর উন্নত দেশসমূহে সফল ও বাণিজ্যিকভাবে ব্যবহার হয়ে আসছে। নিয়ন্ত্রিত পরিবেশে ও চাষের অযোগ্য যে কোন জায়গায় এ পদ্ধতিতে বিভিন্ন প্রকার সবজি, ফল, ফুল ইত্যাদি ফসল চাষ করা সম্ভব। এ পদ্ধতিতে বাড়তি সেচ ও সাধারণত কীটনাশক ব্যবহারের প্রয়োজন হয় না বিধায় উৎপাদিত ফসল হয় নিরাপদ। যে সকল ফসলের উচ্চ বাজারমূল্য রয়েছে সেসব ফসল এ পদ্ধতিতে চাষ অধিক লাভজনক। বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের উদ্যানতত্ত্ব গবেষণা কেন্দ্রের সবজি বিভাগ গবেষণা করে এ যাবত সবজি, ফুল ও ফল জাতীয় ফসলের সর্বমোট ১৬টি জাত হাইড্রোপনিক পদ্ধতিতে সফলভাবে উৎপাদন করতে সক্ষম হয়েছে। বাংলাদেশ একটি ঘনবসতিপূর্ণ জনবহুল দেশ। এখানে এক দিকে যেমন জনসংখ্যা বেড়ে চলেছে অন্যদিকে চাষযোগ্য কৃষি জমির পরিমাণ দিনদিন কমেই চলেছে। অধিকন্তু বৈশ্বিক উষ্ণায়নের প্রভাবে প্রকৃতি নির্ভর কৃষি প্রতিনিয়ত পড়ছে হুমকির মুখে। এমনি একটি সংকটময় অবস্থায় বিকল্প উপায়ে ফসল চাষের পদ্ধতির আবিষ্কার জরুরি। আশা করি, এ পদ্ধতি ব্যবহার করে পারিবারিক ও সামগ্রিকভাবে সবজির উৎপাদন ও পুষ্টির চাহিদা মেটানো বহুলাংশে সম্ভব হবে এবং প্রকাশিত এ পুস্তিকাটি হাইড্রোপনিক পদ্ধতিতে ফসল উৎপাদন কলাকৌশলের নির্দেশিকা হিসেবে কাজ করবে।"
            },
            {
              "type": "p",
              "text": "আমি হাইড্রোপনিক পদ্ধতি উদ্ভাবন ও পুস্তিকা প্রকাশের সাথে সকল বিজ্ঞানীবৃন্দ ও সংশ্লিষ্ট অন্যান্যদের জানাই আন্তরিক ধন্যবাদ।"
            },
            {
              "type": "p",
              "text": "— ড. মো. লুৎফর রহমান, পরিচালক (গবেষণা উইং), বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট"
            },
            {
              "type": "heading",
              "text": "ভূমিকা (পৃষ্ঠা ১)"
            },
            {
              "type": "p",
              "text": "বাংলাদেশ একটি অত্যন্ত জনবহুল দেশ। এখানে জনসংখ্যার তুলনায় চাষের জমি খুবই কম। প্রতি বছর এদেশের জনসংখ্যা, আবাসনের জন্য ঘর বাড়ি, যোগাযোগের জন্য রাস্তা এবং কলকারখানা ব্যাপক হারে বৃদ্ধি পাচ্ছে। ফলে দিন দিন কমে যাচ্ছে আবাদি জমি। বাংলাদেশ এই বাড়তি জনসংখ্যার চাপ মোকাবেলার জন্য শুধু আবাদি জমির উপর নির্ভর করলে চলবে না। এ পরিস্থিতিতে চাষ অযোগ্য পতিত জমি বা অব্যবহৃত স্থান, বিল্ডিং এর ছাদ চাষের আওতায় আনা যেতে পারে। হাইড্রোপনিক চাষ পদ্ধতি সবজি, ফুল ও ফল চাষে বিরাট অবদান রাখতে পারে। হাইড্রোপনিক পদ্ধতিতে নিয়ন্ত্রিত পরিবেশে পানিতে গাছের অত্যাবশ্যকীয় খাদ্য উপাদান সরবরাহ করে ফসল উৎপাদন করা হয়। উন্নত বিশ্বের বিভিন্ন দেশ যেমন- আমেরিকা, জাপান, তাইওয়ান, চীন, থাইল্যান্ড, সিঙ্গাপুর, মালয়েশিয়া এবং মধ্য-প্রাচ্যের দেশসমূহে বাণিজ্যিকভাবে হাইড্রোপনিক পদ্ধতি এর মাধ্যমে সবজি, ফল ও ফুল উৎপাদন হচ্ছে। এই পদ্ধতিতে সারা বছরই পলি টানেল, নেট হাউজ বা গ্রীন হাউজে সবজি, ফল ও ফুল উৎপাদন করা সম্ভব এবং উৎপাদনকালে সাধারণত কীটনাশক ব্যবহার করা হয় না বিধায় এসব পণ্য নিরাপদ এবং অধিক বাজার মূল্য পাওয়া যায়। বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট এর সবজি বিভাগ হাইড্রোপনিক পদ্ধতিতে মাটিবিহীন বড় স্টিলের বা প্লাস্টিকের ট্রেতে পানির মধ্যে গাছের অত্যাবশ্যকীয় খাদ্যোপাদানসমূহ সরবরাহ করে টমেটো, ক্যাপসিকাম, লেটুস, ফুলকপি, ব্রকলি, করলা, খাটো শিম, শসা, ক্ষীরা এবং স্ট্রবেরি, গাঁদা, গোলাপ ইত্যাদি সাফল্যজনকভাবে উৎপাদন করছে।"
            },
            {
              "type": "p",
              "text": "উচ্চ বাজারমূল্য সবজি যেমন- টমেটো, শসা, ক্যাপসিকাম, লেটুস এবং ফল যেমন- স্ট্রবেরি ইত্যাদি হাইড্রোপনিক পদ্ধতিতে নিয়ন্ত্রিত পরিবেশে পারিবারিক প্রয়োজন মিটানোর জন্য চাষাবাদের সুযোগ রয়েছে। এ পদ্ধতিতে চাষ করা সবজিতে কীটনাশক প্রয়োগ করা হয় না, তাই বিদেশে রপ্তানি করে অধিক মূল্য পাওয়া যাবে। স্ট্রবেরি খুব নরম ফল এবং মাটির স্পর্শে ফল তাড়াতাড়ি পচে যায়, তাই এ পদ্ধতি স্ট্রবেরি চাষের জন্য খুবই উপযোগী। হাইড্রোপনিক পদ্ধতিতে নিয়ন্ত্রিত পরিবেশে সারা বৎসর সবজি, ফল ও ফুল উৎপাদন করার সুযোগ রয়েছে। এ পদ্ধতিতে স্থাপনা তৈরিতে প্রাথমিক খরচ একটু বেশি কিন্তু এটি অনেক বছর ব্যবহার করা যায় তাই পরবর্তী খরচ খুবই কম বিধায় এটি একটি লাভজনক প্রযুক্তি। শহরাঞ্চলের বাড়ির ছাদ, বারান্দা ইত্যাদি স্থানে বিভিন্ন ধরনের ফুল চাষের সুযোগ রয়েছে। জলাবদ্ধ, লবণাক্ত, পাহাড়ী এবং বন্যা কবলিত এলাকায় হাইড্রোপনিক পদ্ধতিতে চাষের সুযোগ রয়েছে।"
            }
          ]
        },
        {
          "id": "wp_266",
          "wpId": 266,
          "slug": "bari-book-chapter-1-principles-of-hydroponic-crop-cultivation",
          "courseId": "bari_book",
          "code": "Ch 1",
          "sortOrder": 266,
          "title": "BARI Hydroponics Book — Chapter 1: Principles of Crop Cultivation in Hydroponic System",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 1: Principles of Crop Cultivation in Hydroponic System",
          "readTime": "12 Min Read",
          "objectives": [
            "Lesson 1.04: Exploring the 6 Basic Hydroponic Systems →",
            "Lesson 1.05: Building Your First Zero-Electricity Kratky Box →",
            "Lesson 2.01: Designing a Commercial NFT System →",
            "📚 Full BARI Hydroponics Digital Book (Interactive Master Index & All 79 Figures) →",
            "🧮 Open HydroGuide App (Pre-loaded with BARI Gazipur Stock A & B Formula) →"
          ],
          "keyFormula": "",
          "bdFieldTip": "হাইড্রোপনিক পদ্ধতিতে সবজি, ফল ও ফুল ইত্যাদি ফসল চাষের মূলনীতি হলো—নিয়ন্ত্রিত পরিবেশে গাছের অত্যাবশ্যকীয় প্রয়োজনীয় খাদ্যোপাদান (Nutrient) পানির মধ্যে সরবরাহ করে স্টিলের বা প্লাস্টিকের ট্রে, বালতি বা বোতলে ফসল উৎপাদন করা।",
          "table": {
            "headers": [
              "Crop Category",
              "Recommended Crops Tested by BARI"
            ],
            "rows": [
              [
                "Leafy Vegetables",
                "Lettuce, Gimakalmi (Water Spinach/Kangkong), Bilati Dhonia (Culantro/Coriander), Cabbage, Mint (Pudina)"
              ],
              [
                "Fruit & Flower Vegetables",
                "Tomato, Brinjal (Eggplant), Sweet Pepper (Capsicum), Bitter Gourd (Korola), Cauliflower, Cucumber, Khira, Netted Melon, Bottle Gourd (Lau), Broccoli, Green Chili"
              ],
              [
                "Fruits",
                "Strawberry, Lemon, Guava, Grape"
              ],
              [
                "Flowers",
                "Marigold (Ganda), Anthurium, Rose, Orchid, Chrysanthemum (Chandramallika), Gerbera"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Core Principle of Hydroponic Cultivation"
            },
            {
              "type": "p",
              "text": "The fundamental principle of cultivating vegetables, fruits, and flowers in a hydroponic system is supplying all essential plant nutrient elements dissolved in water inside galvanized steel or plastic trays, buckets, or bottles within a controlled environment."
            },
            {
              "type": "heading",
              "text": "9 Key Advantages of Hydroponic Crop Production"
            },
            {
              "type": "heading",
              "text": "Two Primary Methods of Hydroponic Operation"
            },
            {
              "type": "heading",
              "text": "Table 1.1: Crops Cultivable in Hydroponic Systems in Bangladesh (BARI)"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (2 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক পদ্ধতিতে ফসল চাষের মূলনীতি"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক পদ্ধতিতে ফসল উৎপাদনের সুবিধা (৯টি প্রধান সুবিধা)"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক ব্যবহার পদ্ধতি"
            },
            {
              "type": "p",
              "text": "সাধারণত দুই উপায়ে হাইড্রোপনিক পদ্ধতিতে ফসল উৎপাদন করা যায়:"
            },
            {
              "type": "heading",
              "text": "ক) সঞ্চালন পদ্ধতি (Circulating System)"
            },
            {
              "type": "p",
              "text": "এ পদ্ধতিতে গাছের অত্যাবশ্যকীয় খাদ্য উপাদানসমূহ যথাযথ মাত্রায় পানিতে মিশ্রিত করে একটি ট্যাংকিতে নেয়া হয় এবং পাম্পের সাহায্যে পাইপ এর মাধ্যমে ট্রেতে পুষ্টি দ্রবণ (Nutrient solution) নির্দিষ্ট সময় পরপর সঞ্চালন করে ফসল উৎপাদন করা হয়। এ ক্ষেত্রে প্রতিদিন অন্ততঃপক্ষে ৭-৮ ঘণ্টা পাম্পের সাহায্যে এই সঞ্চালন প্রক্রিয়া চালু রাখা দরকার। এই পদ্ধতিতে প্রাথমিকভাবে প্রথম বছর ট্রে, পাম্প এবং পাইপের আনুষাঙ্গিক খরচ একটু বেশি হলেও পরবর্তী বছর থেকে শুধু মাত্র রাসায়নিক খাদ্য উপাদানের খরচ প্রয়োজন হয়। ফলে দ্বিতীয় বছর থেকে খরচ অনেকাংশে কমে যায়।"
            },
            {
              "type": "heading",
              "text": "খ) সঞ্চালনবিহীন পদ্ধতি (Non-circulating System)"
            },
            {
              "type": "p",
              "text": "এই পদ্ধতিতে একটি ট্রেতে গাছের প্রয়োজনীয় খাদ্য উপাদানসমূহ পরিমিত মাত্রায় সরবরাহ করে সরাসরি ফসল চাষ করা হয়। এই পদ্ধতিতে খাদ্য উপাদান সরবরাহের জন্য কোন পাম্প বা পানি সঞ্চালনের প্রয়োজন হয় না। এক্ষেত্রে খাদ্য উপাদান মিশ্রিত দ্রবণ ও তার উপর স্থাপিত কর্কশীটের মাঝে ২-৩ ইঞ্চি পরিমাণ জায়গা ফাঁকা রাখতে হয় অথবা কর্কশীটের উপরে ৪-৫ টি ছোট ছোট ছিদ্র করে দিতে হবে যাতে সহজেই বাতাস চলাচল করতে পারে এবং গাছ তার প্রয়োজনীয় অক্সিজেন কর্কশীটের ফাঁকা জায়গা থেকে সংগ্রহ করতে পারে। ফসলের প্রকার ভেদে সাধারণত ২-৩ বার এই খাদ্য উপাদান ট্রেতে যোগ করতে হয়। আমাদের দেশের সাধারণ মানুষ খুব সহজেই এই পদ্ধতি অনুসরণ করে স্টিলের ট্রে, প্লাস্টিকের বালতি, পরিত্যক্ত পানির বোতল, মাটির পাতিল, ইত্যাদি ব্যবহার করে বাড়ির ছাদ, বারান্দা এবং খোলা জায়গায় সবজি উৎপাদন করতে পারে।"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক পদ্ধতিতে উৎপাদনযোগ্য ফসল (সারণী ১.১)"
            }
          ]
        },
        {
          "id": "wp_267",
          "wpId": 267,
          "slug": "bari-book-chapter-2-seedling-production-techniques-ec-ph-chart",
          "courseId": "bari_book",
          "code": "Ch 2",
          "sortOrder": 267,
          "title": "BARI Hydroponics Book — Chapter 2: Seedling Production Techniques & Crop EC/pH Reference Chart",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 2: Seedling Production Techniques & Crop EC/pH Reference Chart",
          "readTime": "12 Min Read",
          "objectives": [
            "Cut a polyurethane foam sponge sheet into 2.5 × 2.5 cm square blocks and make a small slit in the center of each block to insert one seed.",
            "Once seeds sprout and develop 2–3 true leaves, add 20–30 mL of nutrient solution A & B to the nursery tray every alternate day.",
            "Transplant into the main growing tray when seedlings are 20–25 days old."
          ],
          "keyFormula": "",
          "bdFieldTip": "সাফল্যজনকভাবে হাইড্রোপনিক পদ্ধতিতে চাষাবাদ করতে হলে চারা উৎপাদনের উপর বিশেষ গুরুত্ব দিতে হয়। চারা উৎপাদনের ৩টি প্রধান পদ্ধতি নিচে বর্ণনা করা হলো:",
          "table": {
            "headers": [
              "Crop Name",
              "Target EC Range (dS/m or mS/cm)",
              "Target pH Range"
            ],
            "rows": [
              [
                "Tomato",
                "2.0 – 2.5",
                "6.0 – 6.5"
              ],
              [
                "Sweet Pepper (Capsicum) & Green Chili",
                "1.8 – 2.2",
                "6.0 – 6.5"
              ],
              [
                "Lettuce & Mint (Pudina)",
                "0.8 – 1.2",
                "6.0 – 7.0"
              ],
              [
                "Cucumber & Bitter Gourd (Korola)",
                "1.7 – 2.5",
                "5.5"
              ],
              [
                "Bottle Gourd (Lau)",
                "1.8 – 2.4",
                "5.5 – 7.5"
              ],
              [
                "Netted Melon",
                "2.0 – 2.5",
                "5.5 – 6.0"
              ],
              [
                "Sweet Potato",
                "2.0 – 2.5",
                "5.5 – 6.0"
              ],
              [
                "Okra (Dherosh)",
                "2.0 – 2.4",
                "6.5"
              ],
              [
                "Carrot",
                "1.6 – 2.0",
                "6.3"
              ],
              [
                "Lemon",
                "1.0 – 1.6",
                "5.5 – 6.5"
              ],
              [
                "Strawberry",
                "1.8 – 2.2",
                "6.0"
              ],
              [
                "Brinjal (Eggplant)",
                "2.5 – 3.5",
                "6.0"
              ],
              [
                "Marigold Flower",
                "1.2 – 1.5",
                "6.0"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Three Proven Seedling Production Methods (Book Pages 4–5)"
            },
            {
              "type": "p",
              "text": "Successful hydroponic cultivation depends heavily on raising vigorous, soil-free, disease-free seedlings. BARI recommends three standardized nursery techniques:"
            },
            {
              "type": "heading",
              "text": "Table 2.1: BARI Standard EC & pH Reference Chart for 13 Hydroponic Crops"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (6 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক পদ্ধতিতে চারা উৎপাদনের কলাকৌশল"
            },
            {
              "type": "heading",
              "text": "১. স্পঞ্জ ব্লকে চারা উৎপাদন (Seedling Production in Sponge Blocks)"
            },
            {
              "type": "p",
              "text": "চারা উৎপাদনের জন্য প্রথমে একটি স্পঞ্জকে ২.৫ × ২.৫ সেমি সাইজ করে কেটে নিতে হবে। পরে এই স্পঞ্জ ব্লক এর মাঝে ছোট ছোট গর্ত করে এর মধ্যে একটি করে বীজ স্থাপন করতে হয়। চারা গজানোর পর যখন ২-৩ পাতা হবে তখন চারা উৎপাদন ট্রে-তে প্রতি একদিন অন্তর অন্তর ২০-৩০ মিলিলিটার করে খাদ্য উপাদান দিতে হবে। চারার বয়স যখন ২০-২৫ দিন হয় তখন এটিকে মূল ট্রেতে স্থানান্তর করতে হয়।"
            },
            {
              "type": "heading",
              "text": "২. মাটির পাত্রে নারিকেলের আঁশের গুঁড়ায় চারা উৎপাদন"
            },
            {
              "type": "p",
              "text": "এই পদ্ধতিতে প্রথমে একটি মাটির পাত্র (সানকি) নিয়ে ভালোভাবে ধুয়ে নিতে হবে। অন্য একটি বালতিতে নারিকেলের আঁশের গুঁড়া (কোকোডাস্ট) ভালোভাবে ধুয়ে ১ দিন রোদে শুকাতে হবে। এরপর ওই নারিকেলের আঁশের গুঁড়া সানকিতে নিয়ে লাইন টেনে বীজ বপন করতে হবে। কুমড়া জাতীয় বীজ বপনের সময় বীজের সরু ভাগ নিচের দিকে দিতে হবে এবং পুরু ভাগ উপরের দিকে দিতে হবে। অন্যান্য বীজের ক্ষেত্রে বীজকে আনুভূমিক ভাবে বীজের সাইজের দ্বিগুণ নিচে বপন করতে হবে। বীজ বপনের পর প্রতিদিন পানি দিতে হবে।"
            },
            {
              "type": "heading",
              "text": "৩. প্লাস্টিকের পটে নারিকেলের আঁশের গুঁড়ায় চারা উৎপাদন"
            },
            {
              "type": "p",
              "text": "প্রথমে একটি প্লাস্টিক পট নিয়ে নিচের অংশে ৪-৫ টি বড় বড় ছিদ্র করতে হবে। তারপর পটের মধ্যে নারিকেলের আঁশের গুঁড়া নিয়ে মাঝে একটি করে বীজ বপন করতে হবে। বীজ বপনের পর পটের উপরিভাগে একটি খবরের কাগজ দিতে হবে। অঙ্কুরিত হওয়ার পর পর উপর থেকে কাগজ সরিয়ে নিতে হবে এবং প্রতিদিন অল্প অল্প করে পানি দিতে হবে।"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক পদ্ধতিতে বিভিন্ন ফসলের চারার EC ও pH মান (সারণী ২.১ — পৃষ্ঠা ৫)"
            }
          ]
        },
        {
          "id": "wp_268",
          "wpId": 268,
          "slug": "bari-book-chapter-3-chemical-nutrient-solution-preparation-stock-a-b",
          "courseId": "bari_book",
          "code": "Ch 3",
          "sortOrder": 268,
          "title": "BARI Hydroponics Book — Chapter 3: Techniques of Preparing BARI Chemical Nutrient Solution (Stock A & Stock B)",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 3: Techniques of Preparing BARI Chemical Nutrient Solution (Stock A & Stock B)",
          "readTime": "12 Min Read",
          "objectives": [
            "Launch HydroGuide BD Nutrient Calculator (Pre-loaded with BARI Formula) →",
            "Lesson 1.09: Plant Food Made Simple — Tank A & Tank B →",
            "Lesson 3.02: Parts Per Million (ppm) & Fertilizer Stoichiometry →",
            "Lesson 3.03: Why Nutrients Are Split into Tank A & Tank B →",
            "📚 Full BARI Hydroponics Digital Book (Interactive Master Index & All 79 Figures) →",
            "🧮 Open HydroGuide App (Pre-loaded with BARI Gazipur Stock A & B Formula) →"
          ],
          "keyFormula": "",
          "bdFieldTip": "এই Stock Solution তৈরি করার সময় ১০০০ গ্রাম ক্যালসিয়াম নাইট্রেট এবং ৮০ গ্রাম EDTA-Fe কে পরিমাপ করে ১০ লিটার পানিতে দ্রবীভূত করে Stock Solution “এ” তৈরি করতে হবে। প্রথমে পানিতে ক্যালসিয়াম নাইট্রেট এবং পরে EDTA-Fe যোগ করতে হবে ও অধাতব দণ্ডের (প্লাস্টিক বা কাঠের কাঠি) সাহায্যে নেড়ে ভালোভাবে মিশাতে হবে।",
          "table": {
            "headers": [
              "Chemical Ingredient (Fertilizer Salt)",
              "Chemical Formula",
              "Exact Weight for 10L Stock (Grams)",
              "Assigned Stock Tank"
            ],
            "rows": [
              [
                "1. Calcium Nitrate Tetrahydrate",
                "Ca(NO3)2·4H2O",
                "1,000.00 g",
                "Stock Solution \"A\""
              ],
              [
                "2. Chelated Iron (EDTA-Fe 13%)",
                "EDTA-Fe",
                "80.00 g",
                "Stock Solution \"A\""
              ],
              [
                "3. Mono Potassium Phosphate (MKP)",
                "KH2PO4",
                "270.00 g",
                "Stock Solution \"B\""
              ],
              [
                "4. Potassium Nitrate",
                "KNO3",
                "580.00 g",
                "Stock Solution \"B\""
              ],
              [
                "5. Magnesium Sulfate Heptahydrate (Epsom)",
                "MgSO4·7H2O",
                "510.00 g",
                "Stock Solution \"B\""
              ],
              [
                "6. Manganese Sulfate Tetrahydrate",
                "MnSO4·4H2O",
                "6.10 g",
                "Stock Solution \"B\""
              ],
              [
                "7. Boric Acid",
                "H3BO3",
                "1.80 g",
                "Stock Solution \"B\""
              ],
              [
                "8. Copper Sulfate Pentahydrate",
                "CuSO4·5H2O",
                "0.40 g",
                "Stock Solution \"B\""
              ],
              [
                "9. Ammonium Molybdate Tetrahydrate",
                "(NH4)6Mo7O24·4H2O",
                "0.38 g",
                "Stock Solution \"B\""
              ],
              [
                "10. Zinc Sulfate Heptahydrate",
                "ZnSO4·7H2O",
                "0.44 g",
                "Stock Solution \"B\""
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Required Equipment for Nutrient Preparation (Book Page 6)"
            },
            {
              "type": "heading",
              "text": "Table 3.1: Official BARI Chemical Formulation for 10 Liters of Stock Solution \"A\" & \"B\" (100x Concentrate)"
            },
            {
              "type": "heading",
              "text": "Step-by-Step Mixing Protocol (Book Pages 7–8)"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (4 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "রাসায়নিক দ্রবণ তৈরিতে প্রয়োজনীয় যন্ত্রপাতি (পৃষ্ঠা ৬)"
            },
            {
              "type": "heading",
              "text": "প্রতি ১০ লিটার স্টক সলিউশন “এ” এবং “বি” তৈরির জন্য প্রয়োজনীয় রাসায়নিক উপাদানের পরিমাণ (সারণী ৩.১)"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক স্টক সলিউশন “এ” তৈরির পদ্ধতি"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক স্টক সলিউশন “বি” তৈরির পদ্ধতি"
            },
            {
              "type": "p",
              "text": "পটাশিয়াম হাইড্রোজেন ফসফেট ২৭০ গ্রাম, পটাশিয়াম নাইট্রেট ৫৮০ গ্রাম, ম্যাগনেসিয়াম সালফেট ৫১০ গ্রাম, ম্যাঙ্গানিজ সালফেট ৬.১০ গ্রাম, বরিক এসিড ১.৮০ গ্রাম, কপার সালফেট ০.৪০ গ্রাম, অ্যামোনিয়াম মলিবডেট ০.৩৮ গ্রাম এবং জিংক সালফেট ০.৪৪ গ্রাম আলাদাভাবে পরিমাপ করে পাত্রে উক্ত রাসায়নিক দ্রব্যগুলিকে একত্রে ১০ লিটার পানিতে দ্রবীভূত করে Stock Solution “বি” তৈরি করতে হবে।"
            },
            {
              "type": "heading",
              "text": "রাসায়নিক দ্রব্যের মিশ্রণ প্রক্রিয়া (১০০০ লিটার কার্যকরি দ্রবণ তৈরি)"
            },
            {
              "type": "p",
              "text": "১০০০ লিটার নিউট্রিয়েন্ট সলিউশন তৈরির ক্ষেত্রে প্রথমে ১০০০ লিটার পানি ট্যাংকে নিতে হবে। তারপর স্টক সলিউশন “এ” থেকে ১০ লিটার দ্রবণ ট্যাংকের পানিতে ঢালতে হবে, এবং একটি অধাতব দণ্ডের সাহায্যে নাড়া চাড়া করে ভালোভাবে মিশাতে হবে। এরপর স্টক সলিউশন “বি” থেকে পূর্বের মত ১০ লিটার দ্রবণ ট্যাংকে নিতে হবে এবং পূর্বের ন্যায় অধাতব দণ্ডের সাহায্যে পানিতে Stock Solution গুলি সমান ভাবে মিশাতে হবে (অর্থাৎ প্রতি ১ লিটার পানিতে ১০ মিলি স্টক এ + ১০ মিলি স্টক বি)।"
            },
            {
              "type": "heading",
              "text": "EC ও pH মিটারের কার্যপ্রণালী"
            }
          ]
        },
        {
          "id": "wp_269",
          "wpId": 269,
          "slug": "bari-book-chapter-4-operating-procedures-tray-structure-construction",
          "courseId": "bari_book",
          "code": "Ch 4",
          "sortOrder": 269,
          "title": "BARI Hydroponics Book — Chapter 4: Operating Procedures & Structure Construction of Hydroponic Systems",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 4: Operating Procedures & Structure Construction of Hydroponic Systems",
          "readTime": "12 Min Read",
          "objectives": [
            "Dimensions: Fabricated from 18 to 24 gauge Galvanized Iron (GI) sheet measuring 3.0 meters long × 90 cm wide × 20–25 cm deep.",
            "Anti-Corrosion White Coating: Before use, paint the interior of metal trays with protective white enamel/epoxy paint so acidic nutrient salts never react with bare metal. Never use rusted steel trays.",
            "Circulating vs. Non-Circulating Cork-Sheet Placement: In circulating trays, the Styrofoam sheet floats directly on the 6–8 cm deep flowing solution. In non-circulating trays, metal support bars are placed 5 cm below the top rim to hold the Styrofoam lid while maintaining a 5–8 cm air gap above the solution surface."
          ],
          "keyFormula": "",
          "bdFieldTip": "সাধারণত স্থাপনার মধ্যে রয়েছে গ্রীন-হাউজ, প্লাস্টিক-হাউজ, ভিনাইল-হাউজ, পলি-টানেল ইত্যাদি। আমাদের দেশের আগ্রহী প্রগতিশীল কৃষক প্লাস্টিক-হাউজ তৈরি করে কম খরচে এ পদ্ধতিতে চাষাবাদ করতে পারে।",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Structure & Galvanized Tray Engineering (Book Pages 9–11)"
            },
            {
              "type": "p",
              "text": "Progressive farmers in Bangladesh can construct low-cost UV plastic-houses or poly-tunnels for year-round protected cultivation, or utilize residential rooftops and verandas."
            },
            {
              "type": "heading",
              "text": "BARI Standard Galvanized Steel Tray Specifications"
            },
            {
              "type": "heading",
              "text": "Operating Parameters"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (4 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক চাষাবাদ পদ্ধতিতে স্থাপনা নির্মাণ কৌশল (পৃষ্ঠা ৯–১১)"
            },
            {
              "type": "heading",
              "text": "গ্যালভানাইজিং স্টিলের ট্রে তৈরির মাপ ও নিয়ম"
            },
            {
              "type": "heading",
              "text": "১. সঞ্চালন পদ্ধতি (Circulating System) পরিচালন নিয়ম"
            },
            {
              "type": "heading",
              "text": "২. সঞ্চালনবিহীন পদ্ধতি (Non-Circulating System) পরিচালন নিয়ম"
            }
          ]
        },
        {
          "id": "wp_270",
          "wpId": 270,
          "slug": "bari-book-chapter-5a-sweet-pepper-capsicum-and-tomato-cultivation",
          "courseId": "bari_book",
          "code": "Ch 5A",
          "sortOrder": 270,
          "title": "BARI Hydroponics Book — Chapter 5 (Part A): Hydroponic Cultivation of Sweet Pepper (Capsicum) & Tomato",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 5 (Part A): Hydroponic Cultivation of Sweet Pepper (Capsicum) & Tomato",
          "readTime": "12 Min Read",
          "objectives": [
            "Recommended Varieties: BARI Mistimorich-1, BARI Mistimorich-2, and California Wonder (~160 seeds/gram; 230 g seed/ha).",
            "Nursery Stage: Pre-sprout seeds on moist tissue paper in a petri dish, transfer to 2.5 × 2.5 cm sponge cubes floating in water, and feed 20–30 mL A+B daily at EC 0.5–0.8 dS/m from the 2–3 leaf stage. Transplant at 20–25 days.",
            "Tray & Bucket Planting: Fill tray to 6–8 cm depth with 1 L Stock A + 1 L Stock B per 100 L water. Plant at 30 cm × 30 cm spacing. In plastic buckets, maintain a 1-inch (2.54 cm) air gap between the stem base and solution so 1/3 of roots sit in water and 2/3 in humid air.",
            "Iron Chlorosis Correction & Flowering EC: If upper leaves turn yellow during vegetative growth, dissolve 5 g EDTA-Fe in 1 Liter water and apply 200 mL per 100 Liters of reservoir water. At flowering, maintain EC 2.0–2.5 dS/m and pH 6.0–6.5, supporting stems with overhead twine.",
            "Yield & Cost-Return Analysis (3m × 1m Tray = 36 Plants):",
            "Harvest begins 55–60 days after transplanting (12–15 days earlier than soil). Yield is 800–1,200 g/plant (60–70 tons/ha vs. 20–25 tons/ha in soil).",
            "Total Cost per Tray: Nutrient Solution ৳800 + Cork Sheet ৳300 + Other ৳600 = ৳1,700.",
            "Gross Return: 36 plants × 1.0 kg = 36 kg × ৳100/kg = ৳3,600.",
            "Net Profit per 3m² Tray: ৳1,900."
          ],
          "keyFormula": "",
          "bdFieldTip": "প্রতি ১০০ গ্রাম ক্যাপসিকামে ১১ মিলিগ্রাম ক্যালসিয়াম, ৮৭০ আইইউ ভিটামিন এ এবং ১৭৫ মিলিগ্রাম ভিটামিন সি আছে।",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "5.1 Sweet Pepper (Capsicum) Cultivation Protocol (Book Pages 12–15)"
            },
            {
              "type": "p",
              "text": "Per 100g of edible portion, sweet pepper contains 11 mg Calcium, 870 IU Vitamin A, and 175 mg Vitamin C."
            },
            {
              "type": "heading",
              "text": "5.2 Hydroponic Tomato Cultivation Protocol (Book Pages 15–18)"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (9 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "৫.১ হাইড্রোপনিক পদ্ধতিতে মিষ্টি মরিচ (ক্যাপসিকাম) চাষ (পৃষ্ঠা ১২–১৫)"
            },
            {
              "type": "heading",
              "text": "৫.২ হাইড্রোপনিক পদ্ধতিতে টমেটো চাষাবাদ (পৃষ্ঠা ১৫–১৮)"
            }
          ]
        },
        {
          "id": "wp_271",
          "wpId": 271,
          "slug": "bari-book-chapter-5b-lettuce-cucumber-bitter-gourd-strawberry",
          "courseId": "bari_book",
          "code": "Ch 5B",
          "sortOrder": 271,
          "title": "BARI Hydroponics Book — Chapter 5 (Part B): Hydroponic Lettuce, Cucumber, Bitter Gourd & Strawberry Cultivation",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 5 (Part B): Hydroponic Lettuce, Cucumber, Bitter Gourd & Strawberry Cultivation",
          "readTime": "12 Min Read",
          "objectives": [
            "Varieties: BARI Lettuce-1, Grand Rapids, Green Wave, Salina, and Rex.",
            "Cultivation Protocol: Surface-sterilize seeds with 10% calcium/sodium hypochlorite before sowing in 2.5 × 2.5 cm sponge cubes. Transplant 2–3 week old seedlings at 30 × 30 cm spacing. Start at pH 5.8–6.5 and EC 1.5–1.9 dS/m, increasing to EC 2.0–2.2 dS/m after 10–15 days.",
            "Harvest & Multi-Cycle Reuse: Harvest in 20 to 35 days at 400–600 g per head. Remarkably, during the cool winter season, 2 to 3 consecutive lettuce crops can be grown in the same nutrient solution batch! Never apply chemical pesticides on salad lettuce."
          ],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "5.3 Hydroponic Lettuce Cultivation (Book Pages 18–20)"
            },
            {
              "type": "heading",
              "text": "5.4 Hydroponic Cucumber Cultivation (Book Pages 20–21)"
            },
            {
              "type": "heading",
              "text": "5.5 Hydroponic Bitter Gourd (*Korola*) Cultivation (Book Pages 22–24)"
            },
            {
              "type": "heading",
              "text": "5.6 Hydroponic Strawberry Cultivation (Book Pages 25–27)"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (8 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "৫.৩ হাইড্রোপনিক পদ্ধতিতে লেটুস চাষ (পৃষ্ঠা ১৮–২০)"
            },
            {
              "type": "heading",
              "text": "৫.৪ হাইড্রোপনিক পদ্ধতিতে শসা চাষ (পৃষ্ঠা ২০–২১)"
            },
            {
              "type": "heading",
              "text": "৫.৫ হাইড্রোপনিক পদ্ধতিতে করলা চাষ (পৃষ্ঠা ২২–২৪)"
            },
            {
              "type": "heading",
              "text": "৫.৬ হাইড্রোপনিক পদ্ধতিতে স্ট্রবেরি চাষ (পৃষ্ঠা ২৫–২৭)"
            }
          ]
        },
        {
          "id": "wp_272",
          "wpId": 272,
          "slug": "bari-book-chapter-5c-bottle-gourd-netted-melon-marigold-cultivation",
          "courseId": "bari_book",
          "code": "Ch 5C",
          "sortOrder": 272,
          "title": "BARI Hydroponics Book — Chapter 5 (Part C): Hydroponic Bottle Gourd (Lau), Netted Melon & Marigold Flower",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 5 (Part C): Hydroponic Bottle Gourd (Lau), Netted Melon & Marigold Flower",
          "readTime": "12 Min Read",
          "objectives": [
            "Variety & Season: BARI Lau-4 (October to January).",
            "6-Step Bucket Cultivation Method:"
          ],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "5.7 Hydroponic Bottle Gourd (*BARI Lau-4*) — 6-Step Bucket Protocol (Book Pages 27–29)"
            },
            {
              "type": "heading",
              "text": "5.8 Hydroponic Netted Melon Cultivation (Book Page 29)"
            },
            {
              "type": "heading",
              "text": "5.9 Hydroponic Marigold (*Inca-1*) Flower Cultivation (Book Pages 30–32)"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (8 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "৫.৭ হাইড্রোপনিক পদ্ধতিতে লাউ চাষ (৬-ধাপ বালতি পদ্ধতি — পৃষ্ঠা ২৭–২৯)"
            },
            {
              "type": "heading",
              "text": "৫.৮ হাইড্রোপনিক পদ্ধতিতে মেলন (Netted Melon) চাষ (পৃষ্ঠা ২৯)"
            },
            {
              "type": "heading",
              "text": "৫.৯ হাইড্রোপনিক পদ্ধতিতে গাঁদা ফুলের চাষ (পৃষ্ঠা ৩০–৩২)"
            }
          ]
        },
        {
          "id": "wp_273",
          "wpId": 273,
          "slug": "bari-book-chapter-6-soilless-cultivation-in-coconut-coir-dust-cocopeat",
          "courseId": "bari_book",
          "code": "Ch 6",
          "sortOrder": 273,
          "title": "BARI Hydroponics Book — Chapter 6: Soilless Vegetable & Fruit Cultivation in Coconut Coir Dust (Cocopeat)",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 6: Soilless Vegetable & Fruit Cultivation in Coconut Coir Dust (Cocopeat)",
          "readTime": "12 Min Read",
          "objectives": [
            "BARI Siphon-Hole Pot Design: Drill a drainage hole 1.5 inches (3.8 cm) above the bottom of the plastic pot/drum and fit a narrow drainage pipe (creating an internal moisture reservoir at the base, identical in principle to a Dutch Bucket!). Wash the cocopeat thoroughly, sun-dry for 1 day, and fill the pot.",
            "Feeding Schedule: Water with plain water for the first 3–5 days after transplanting, then apply 500–600 mL of working nutrient solution (A+B) per plant once a week (plus plain water as needed). Yields 2.5–3.0 kg Tomato or 1.0–1.2 kg Capsicum per pot."
          ],
          "keyFormula": "",
          "bdFieldTip": "মাটি ছাড়াও বিভিন্ন মাধ্যম যেমন নারিকেলের আঁশের গুঁড়া (Coco dust), ভার্মিকুলাইট, নুড়িপাথর, কাঠের গুঁড়া এবং চারকুলেটেড রাইস হাস্ক (পোড়া তুষ) ইত্যাদির মাধ্যমে চাষাবাদ করা যায়।",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Substrate Cultivation in Washed Coconut Coir Dust / Cocopeat (Book Pages 33–34)"
            },
            {
              "type": "p",
              "text": "In addition to water culture, crops can be grown in solid substrates including coconut coir dust (cocopeat), vermiculite, gravel, sawdust, and carbonized rice husk."
            },
            {
              "type": "heading",
              "text": "Special Crop Protocols in Cocopeat"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (6 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "মাটি ছাড়া নারিকেলের আঁশের গুঁড়ায় (কোকোপিট) সবজি চাষাবাদ (পৃষ্ঠা ৩৩–৩৪)"
            },
            {
              "type": "heading",
              "text": "১. নারিকেলের আঁশের গুঁড়ায় মরিচ চাষ"
            },
            {
              "type": "p",
              "text": "উপরোক্ত নিয়মে প্রস্তুতকৃত কোকোপিট টবে চারা রোপণের ৩০–৩৫ দিন পর ফুল আসা শুরু করে এবং প্রতিটি টব থেকে ১.০–১.৫ কেজি কাঁচা মরিচ সংগ্রহ করা সম্ভব।"
            },
            {
              "type": "heading",
              "text": "২. নারিকেলের আঁশের গুঁড়ায় মিষ্টিআলু চাষ"
            },
            {
              "type": "p",
              "text": "১ × ১ মিটার আকারের ট্রেতে ১০–১৫ সেমি পুরু করে ধোয়া নারিকেলের আঁশের গুঁড়া নিয়ে নভেম্বর মাসে ২০–২৫ সেমি লম্বা মিষ্টি আলুর কাটিং ৩০ × ৩০ সেমি দূরত্বে রোপণ করতে হবে। প্রথম ৩–৫ দিন প্রতিদিন ১০০ মিলি পানি এবং এরপর প্রতি দুই দিন অন্তর স্টক A ও B মিশ্রিত দ্রবণ দিতে হবে। বৃদ্ধির পর্যায়ে মিষ্টি আলুর ডগা ও পাতা সবজি (শাক) হিসেবে খাওয়া যায় এবং ১০০–১২০ দিন পর গাছ প্রতি ১.৫–২.০ কেজি মিষ্টি আলু সংগ্রহ করা সম্ভব!"
            },
            {
              "type": "heading",
              "text": "৩. নারিকেলের আঁশের গুঁড়ায় লেবু চাষ"
            },
            {
              "type": "p",
              "text": "ড্রেনেজ পাইপযুক্ত বড় টব বা ড্রামে ধোয়া কোকোপিট ভরে লেবুর কলম/কাটিং রোপণ করতে হয়। প্রতি সপ্তাহে ৫০০–৬০০ মিলি পুষ্টি দ্রবণ প্রয়োগ করলে ২–৩ মাস পর ফুল আসে এবং প্রতিটি টব থেকে প্রতি মৌসুমে ৫০–৬০টি লেবু সংগ্রহ করা সম্ভব।"
            }
          ]
        },
        {
          "id": "wp_274",
          "wpId": 274,
          "slug": "bari-book-chapter-7-8-vertical-hydroponics-and-micro-garden-model",
          "courseId": "bari_book",
          "code": "Ch 7",
          "sortOrder": 274,
          "title": "BARI Hydroponics Book — Chapters 7 & 8: Vertical Hydroponic PVC Pipe System & 100 sq ft Micro-Garden Model",
          "subtitle": "🇬🇧 English Technical Edition — Chapters 7 & 8: Vertical Hydroponic PVC Pipe System & 100 sq ft Micro-Garden Model",
          "readTime": "12 Min Read",
          "objectives": [
            "BARI 6-Foot × 5-Inch PVC Pipe Construction Blueprint:",
            "Take six 6-foot-long (5-inch diameter) PVC pipes and seal both open ends of each pipe with circular cut cork-sheet/end-caps.",
            "Along the top of each pipe, drill six 1.5-inch diameter holes (for planting seedlings) and four 0.5-inch diameter holes (for air circulation)—10 holes total per pipe.",
            "Plant 6 high-value crops (Capsicum, Lettuce, Strawberry, Summer Tomato, Chili, or Brinjal) per pipe.",
            "Fill each pipe with 10–20 Liters of working nutrient solution, topping up 2–3 Liters every 15 days.",
            "Unit Economics per 6-Foot Pipe: Each pipe requires only ৳20 of chemical nutrient solution (৳30 total operating cost per cycle) and produces ৳150 worth of fresh cucumber, strawberry, or lettuce (a 5x return on operating cost!)."
          ],
          "keyFormula": "",
          "bdFieldTip": "এক বা একাধিক আনুভূমিক স্তর উলম্বভাবে (Vertically) স্থাপন করে স্বল্প জায়গায় একাধিক ফসল উৎপাদনের কৌশলকেই ভার্টিক্যাল হাইড্রোপনিক পদ্ধতি বলে।",
          "table": null,
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Chapter 7: Vertical Hydroponic PVC Pipe System (Book Pages 35–36)"
            },
            {
              "type": "p",
              "text": "Arranging one or more horizontal growing layers vertically to multiply crop output on a tiny footprint is called Vertical Hydroponics, increasing plant density by 3x to 8x per square meter with a structure lifespan of 5–7 years."
            },
            {
              "type": "heading",
              "text": "Chapter 8: The 100 sq ft Household Micro-Garden Model (Book Pages 37–38)"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (5 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "অধ্যায়-৭: ভার্টিক্যাল হাইড্রোপনিক পদ্ধতিতে চাষাবাদ (পৃষ্ঠা ৩৫–৩৬)"
            },
            {
              "type": "heading",
              "text": "অধ্যায়-৮: স্বল্প পরিসরে মাটিবিহীন চাষাবাদ — মাইক্রো গার্ডেন মডেল (পৃষ্ঠা ৩৭–৩৮)"
            }
          ]
        },
        {
          "id": "wp_275",
          "wpId": 275,
          "slug": "bari-book-chapter-9-key-precautions-limitations-deficiency-matrix-conclusion",
          "courseId": "bari_book",
          "code": "Ch 9",
          "sortOrder": 275,
          "title": "BARI Hydroponics Book — Chapter 9 & Conclusion: Key Precautions, Limitations & The 13-Element Deficiency Diagnostic Matrix",
          "subtitle": "🇬🇧 English Technical Edition — Chapter 9 & Conclusion: Key Precautions, Limitations & The 13-Element Deficiency Diagnostic Matrix",
          "readTime": "12 Min Read",
          "objectives": [
            "Lesson 1.14: Common Beginner Mistakes & Troubleshooting →",
            "Lesson 3.14: Cooling the Root Zone (",
            "Lesson 3.18: Diagnosing Nutrient Deficiencies (Mobile vs. Immobile Key) →",
            "📚 Full BARI Hydroponics Digital Book (Interactive Master Index & All 79 Figures) →",
            "🧮 Open HydroGuide App (Pre-loaded with BARI Gazipur Stock A & B Formula) →"
          ],
          "keyFormula": "",
          "bdFieldTip": "প্রতি বছর বাংলাদেশের জনসংখ্যা, আবাসনের জন্য ঘর-বাড়ি, যোগাযোগের জন্য রাস্তা এবং কল-কারখানা ব্যাপক হারে বৃদ্ধি পাচ্ছে। ফলে দিন দিন কমে যাচ্ছে আবাদ যোগ্য জমির পরিমাণ। বর্ধিত জনসংখ্যার অব্যাহত খাদ্য চাহিদা পূরণের লক্ষ্যে তাই শুধু আবাদি জমির উপর নির্ভর করা যাবে না। দেশের এমনি অবস্থায় প্রয়োজন অব্যবহৃত খালি জায়গা ও পতিত স্থান শস্য চাষের আওতায় আনা। হাইড্রোপনিকস চাষ পদ্ধতি এ ক্ষেত্রে সঠিকভাবে আরোপযোগ্য একটি কৌশল। এ পদ্ধতি বাড়ির ছাদে, আঙ্গিনায়, বারান্দায় কিংবা চাষের অযোগ্য পতিত জমিতে সহজেই বাস্তবায়ন করতে পারি।",
          "table": {
            "headers": [
              "Visual Symptom Observed on Plant",
              "N",
              "P",
              "K",
              "Ca",
              "S",
              "Mg",
              "Fe",
              "Mn",
              "B",
              "Mo",
              "Zn",
              "Cu",
              "Over-Fert."
            ],
            "rows": [
              [
                "1. Upper (Young) Leaves Turn Yellow",
                "",
                "",
                "",
                "",
                "●",
                "",
                "●",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              [
                "2. Middle Leaves Turn Yellow",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "●",
                "",
                "",
                ""
              ],
              [
                "3. Lower (Old) Leaves Turn Yellow",
                "●",
                "●",
                "●",
                "",
                "",
                "●",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              [
                "4. Stems Turn Reddish / Purple",
                "●",
                "●",
                "●",
                "",
                "",
                "●",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              [
                "5. Leaf Necrosis (Dead Tissue Patches)",
                "",
                "",
                "●",
                "",
                "",
                "●",
                "",
                "●",
                "●",
                "",
                "",
                "●",
                ""
              ],
              [
                "6. Spotting on Leaf Blades",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "●",
                "",
                "",
                "",
                "",
                ""
              ],
              [
                "7. Thin, Spindly Side Shoots",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "●",
                "",
                "",
                "",
                ""
              ],
              [
                "8. Upper Leaves Turn Bleached White",
                "",
                "",
                "",
                "",
                "",
                "●",
                "",
                "",
                "",
                "●",
                "",
                "",
                ""
              ],
              [
                "9. Severe Stunting of Overall Plant Growth",
                "",
                "●",
                "",
                "●",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              [
                "10. Leaf Tip Yellowing / Scorch",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "●"
              ],
              [
                "11. Twisted, Deformed or Hooked New Leaves",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "●",
                "",
                "",
                "",
                ""
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Original Publication: Cultivation of Horticultural Crops in Hydroponic System (হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ) — Published by Bangladesh Agricultural Research Institute (BARI), Joydebpur, Gazipur-1701 (June 2018). Digitized & Interlinked Edition."
            },
            {
              "type": "heading",
              "text": "Chapter 9: 7 Golden Precautions for Hydroponic Success (Book Pages 38–39)"
            },
            {
              "type": "heading",
              "text": "5 Practical Limitations of Hydroponics (Book Page 39)"
            },
            {
              "type": "heading",
              "text": "Table 9.1: Official BARI Nutrient Deficiency & Toxicity Diagnostic Matrix (Book Page 39)"
            },
            {
              "type": "heading",
              "text": "Conclusion & Bibliographic Citation (Book Page 40)"
            },
            {
              "type": "p",
              "text": "As Bangladesh’s population and urban infrastructure expand each year, bringing rooftops, courtyards, verandas, and non-arable fallow lands under cultivation through hydroponic technology is an essential national strategy for year-round food and nutritional security."
            },
            {
              "type": "p",
              "text": "Official Citation / Reference:"
            },
            {
              "type": "heading",
              "text": "📸 Extracted BARI Research Photographs & Figures (3 Figures)"
            },
            {
              "type": "heading",
              "text": "🔗 Connected Academy Courses & Tools (Step-by-Step Interlinking)"
            },
            {
              "type": "heading",
              "text": "অধ্যায়-৯: হাইড্রোপনিক পদ্ধতির লক্ষণীয় বিষয়সমূহ (৭টি স্বর্ণসূত্র — পৃষ্ঠা ৩৮–৩৯)"
            },
            {
              "type": "heading",
              "text": "হাইড্রোপনিক পদ্ধতির সীমাবদ্ধতা (পৃষ্ঠা ৩৯)"
            },
            {
              "type": "heading",
              "text": "খাদ্যোপাদানের অভাব লক্ষণ নির্দেশিকা (সারণী ৯.১ — পৃষ্ঠা ৩৯)"
            },
            {
              "type": "heading",
              "text": "উপসংহার (পৃষ্ঠা ৪০)"
            }
          ]
        }
      ]
    },
    {
      "id": "success_stories",
      "icon": "🏆",
      "badge": "Bangladesh • 10 Case Studies",
      "titleEn": "Bangladesh Hydroponics Farmer Success Stories",
      "titleBn": "বাংলাদেশে হাইড্রোপনিক্স সফলতার গল্প (১০টি বাস্তব কেস স্টাডি)",
      "descEn": "Real-world case studies from Dhaka, Gazipur, Jashore, Bogura, Rajshahi, Chattogram, Satkhira, Mymensingh, and Sylhet showing practical systems, yields, and economics.",
      "descBn": "ঢাকা, গাজীপুর, যশোর, বগুড়া, রাজশাহী, চট্টগ্রাম, সাতক্ষীরা, ময়মনসিংহ ও সিলেটের সফল হাইড্রোপনিক্স খামারিদের বাস্তব অভিজ্ঞতা ও আয়ের হিসাব।",
      "color": "#0f766e",
      "lessons": [
        {
          "id": "wp_162",
          "wpId": 162,
          "slug": "dohar-dhaka-commercial-nft-hydroponic-venture",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 162,
          "title": "Dohar, Dhaka: How a Commercial NFT Hydroponic Venture Achieved 4.2x Leafy Greens Yield Without Soil",
          "subtitle": "1. Regional Agricultural Context & Challenge in Dhaka District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Dhaka District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Dohar Upazila, Dhaka District (23.5931° N, 90.1425° E)"
              ],
              [
                "Cultivation Area",
                "4,500 sq.ft UV-Stabilized Polyhouse with 50% Aluminet Shade"
              ],
              [
                "Hydroponic Architecture",
                "18x A-Frame uPVC NFT Tables (2,160 Plant Sites)"
              ],
              [
                "Nutrient Formula",
                "BARI Hydroponic Solution A & B (EC 1.4–1.6 mS/cm, pH 5.8–6.2)"
              ],
              [
                "Cycle Duration & Output",
                "32–36 Days per cycle • 480–540 kg Premium Salad Greens / Month"
              ],
              [
                "Market Channel",
                "Direct supply to Unimart, Meena Bazar & 5-Star Hotels in Dhaka"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In Dohar Upazila of Southern Dhaka District (23.5931° N, 90.1425° E), seasonal waterlogging during the monsoon and rising labor costs made traditional open-field vegetable farming increasingly unpredictable. By transitioning to a 4,500 sq.ft UV-stabilized polyhouse equipped with food-grade uPVC Nutrient Film Technique (NFT) channels, entrepreneurs in Dohar established one of Dhaka Division's flagship commercial soilless farms—featured nationally on Channel i's \"Hridoye Mati O Manush\"."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Dohar Upazila, Dhaka District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering দোহারে হাইড্রোপনিক্সের খামার উদ্যোগ | Hydroponic Farming Venture in Dohar (Channel i / Shykh Seraj):"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=H41Jjbpncmk"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_163",
          "wpId": 163,
          "slug": "gazipur-bari-controlled-environment-cherry-tomato-capsicum",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 163,
          "title": "Joydebpur, Gazipur: BARI Controlled-Environment Dutch Bucket Tomato & Bell Pepper Success Model",
          "subtitle": "1. Regional Agricultural Context & Challenge in Gazipur District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Gazipur District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Joydebpur, Gazipur District (23.9889° N, 90.4125° E)"
              ],
              [
                "Hydroponic Architecture",
                "250-Bucket Dutch Bucket Recirculating Drip Array with Siphon Elbows"
              ],
              [
                "Growing Substrate",
                "70% Buffered Low-EC Cocopeat + 30% Expanded Clay Pebbles (LECA)"
              ],
              [
                "Fertigation Schedule",
                "8 Drip Pulses/Day via 2 L/hr Pressure-Compensating Emitters (EC 2.4–3.2 mS/cm)"
              ],
              [
                "Average Yield",
                "7.5–9.0 kg per Cherry Tomato vine • 3.8 kg per Colored Capsicum plant"
              ],
              [
                "Disease Reduction",
                "100% elimination of soil-borne Bacterial Wilt & Root-Knot Nematode"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Soil-borne bacterial wilt (Ralstonia solanacearum) and root-knot nematodes destroy up to 45% of high-value summer tomato and capsicum crops in central Bangladesh. In Joydebpur, Gazipur (23.9889° N, 90.4125° E), the BARI Hydroponics Research protocol demonstrated that isolating roots in virgin polypropylene Dutch buckets filled with 70% washed low-EC cocopeat and 30% Expanded Clay Pebbles (LECA) completely eradicates soil pathogens while doubling marketable fruit clusters."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Joydebpur (BARI Research Corridor), Gazipur District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering BARI Hydroponic Tomato & Capsicum Cultivation Protocol in Bangladesh:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=dZTdUf_e63o"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_164",
          "wpId": 164,
          "slug": "jhikargachha-jashore-polyhouse-capsicum-gerbera-drip-automation",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 164,
          "title": "Gadkhali & Jhikargachha, Jashore: Year-Round Polyhouse Capsicum & High-Value Horticulture Revolution",
          "subtitle": "1. Regional Agricultural Context & Challenge in Jashore District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Jashore District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Jhikargachha (Gadkhali), Jashore District (23.1035° N, 89.0886° E)"
              ],
              [
                "Regional Support Team",
                "Jashore Regional Campus (+880 1324-445390 • Eng. Md. Masud Rana)"
              ],
              [
                "Climate Control",
                "200-Micron UV Poly Film + 40-Mesh Insect Net + 4-Way Mist Fogger Line"
              ],
              [
                "Fertigation Target",
                "Vegetative EC 1.8–2.2 mS/cm • Fruit Set EC 2.5–2.8 mS/cm • pH 6.0"
              ],
              [
                "Seasonal Advantage",
                "Off-season monsoon harvest sold at BDT 320–450/kg wholesale"
              ],
              [
                "Water Savings",
                "78% reduction in groundwater extraction compared to flood furrow irrigation"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Jhikargachha and Gadkhali in Jashore District (23.1035° N, 89.0886° E) are the horticultural heartland of Southwestern Bangladesh. However, unseasonal pre-monsoon hailstorms and extreme 41°C April heatwaves in Khulna Division severely damaged open-field capsicum and cut flowers. Supported by our Jashore Regional Campus (Eng. Md. Masud Rana & Md. Masum Billah), progressive growers deployed arch-roof UV polyhouses with precision drip fertigation and high-pressure fogging—achieving uninterrupted year-round harvests."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Jhikargachha Upazila (Gadkhali Cluster), Jashore District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering হাইড্রোপনিক ও পলিহাউজ পদ্ধতিতে ক্যাপসিকাম ও সবজি চাষ | Commercial Agro Farm Case Study:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=UR5Ct14brt0"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_165",
          "wpId": 165,
          "slug": "shajahanpur-bogura-vertical-strawberry-soilless-polyhouse",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 165,
          "title": "Shajahanpur, Bogura: Commercial Soilless Strawberry & Winter Exotic Berry Farming in Northern Bangladesh",
          "subtitle": "1. Regional Agricultural Context & Challenge in Bogura District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Bogura District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Shajahanpur / Charmatha, Bogura District (24.8481° N, 89.3730° E)"
              ],
              [
                "Regional Support Team",
                "Bogura Northern Hub (+880 1324-445385 • Kbd. Md. Samsuzzaman Sumon)"
              ],
              [
                "System Configuration",
                "4-Tier Elevated Cocopeat Gutter Racks with 2.0 L/hr PC Dripper + 4-Way Stakes"
              ],
              [
                "Nutrient Parameters",
                "Low-Salinity RO Water (<80 ppm) + Berry Bloom Formula (EC 1.4–1.8 mS/cm, pH 5.8)"
              ],
              [
                "Fruit Quality",
                "98% Grade-A clean berries with Brix sweetness 11.5–13.2%"
              ],
              [
                "Density Gain",
                "3.1x more plants per decimal compared to traditional raised soil beds"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Bogura District (24.8481° N, 89.3730° E) is northern Bangladesh's premier vegetable and fruit hub. When cultivating strawberries on bare soil in Bogura, winter morning fog and damp soil caused up to 35% gray mold (Botrytis) fruit rot. Working closely with our Bogura Northern Hub at Charmatha (Krishibid Md. Samsuzzaman Sumon & D.Eng. Mofazzal Hossain), farmers adopted elevated A-frame gutters filled with buffered cocopeat-perlite and irrigated by 4-way manifold drip stakes—keeping every berry clean, dry, and blemish-free."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Shajahanpur & Charmatha Corridor, Bogura District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering হাইড্রোপনিক নিউট্রিয়েন্ট ও স্ট্রবেরি-টমেটো চাষ পদ্ধতি | Hydroponic Solution & Berry Guide:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=5Ss7MWeADUE"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_166",
          "wpId": 166,
          "slug": "uttara-dhaka-rooftop-iot-hydroponic-family-salad-garden",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 166,
          "title": "Uttara & Shyamoli, Dhaka: How Urban Rooftop Families Grow 60+ Chemical-Free Vegetables with Smart NFT Kits",
          "subtitle": "1. Regional Agricultural Context & Challenge in Dhaka District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Dhaka District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Uttara Sector 10 & Shyamoli, Dhaka District (23.8759° N, 90.3795° E)"
              ],
              [
                "Regional Support Team",
                "Dhaka Corporate HQ & IoT Lab (+880 1324-445400 / +880 1919-751843)"
              ],
              [
                "Rooftop Footprint",
                "Only 5 ft × 3.5 ft (17.5 sq.ft) • Total Wet Weight < 85 kg (Roof-Safe)"
              ],
              [
                "Automation Cycle",
                "15-Minute ON / 30-Minute OFF Submersible Pump Cycle via Smart Wi-Fi Plug"
              ],
              [
                "Nutrient Consumption",
                "Only 1.5 Liters each of Solution A & B per 45-day harvest cycle"
              ],
              [
                "Weekly Family Harvest",
                "25–30 heads of pesticide-free leafy greens + 4 trays of 7-day microgreens"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In densely populated Dhaka Metropolitan neighborhoods like Uttara Sector 10 (23.8759° N, 90.3795° E) and Shyamoli (23.7718° N, 90.3631° E), rooftop gardeners struggled with heavy soil pots that damaged roof slabs, bred mosquitoes, and required daily manual watering. By installing our 3-Tier 108-Plant Food-Grade uPVC NFT Kit paired with a Wi-Fi timer and 50% UV shade canopy, urban families now harvest 25–30 fresh heads of lettuce, pak choi, and herbs every single week with zero soil mess."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Uttara Sector 10 & North Adabor (Shyamoli), Dhaka Metropolitan deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering বাড়ির ছাদে মাটি ছাড়া হাইড্রোপনিক্সে লেটুস ও সবজি চাষ | Rooftop Hydroponics in Dhaka:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=RHIQWgGpg7g"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_167",
          "wpId": 167,
          "slug": "godagari-rajshahi-barind-soilless-rockmelon-cantaloupe-greenhouse",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 167,
          "title": "Godagari, Rajshahi: Overcoming Barind Tract Drought with High-Brix Hydroponic Rockmelon & Cantaloupe",
          "subtitle": "1. Regional Agricultural Context & Challenge in Rajshahi District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Rajshahi District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Godagari Upazila, Rajshahi District (24.4667° N, 88.3333° E)"
              ],
              [
                "Regional Support Team",
                "Rajshahi & Bogura Northern Hub (+880 1324-445385)"
              ],
              [
                "Pruning & Trellising",
                "Vertical Roller-Hook Trellis • 1–2 Fruits retained per vine at Node 11–14"
              ],
              [
                "Ripening EC Protocol",
                "Vegetative EC 2.0 mS/cm → Netting & Sugar Accumulation EC 3.0 mS/cm"
              ],
              [
                "Cycle & Fruit Weight",
                "75–80 Days from transplant • 1.5–1.9 kg uniform netted fruits"
              ],
              [
                "Water Conservation",
                "91% water saved in drought-prone Barind zone via closed-loop drainage"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "The High Barind Tract in Godagari Upazila, Rajshahi District (24.4667° N, 88.3333° E) faces acute groundwater depletion and scorching summer temperatures exceeding 40°C. Paradoxically, this intense solar radiation is ideal for luxury netted rockmelons (Cantaloupe) when roots are supplied with precision-chilled nutrient solution inside a ventilated polyhouse. By controlling potassium and EC levels (2.8–3.2 mS/cm) during the final 15 days of fruit netting, Rajshahi growers achieved 15.2% Brix sweetness—commanding premium prices in Dhaka supermarkets."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Godagari Upazila (Barind Tract), Rajshahi District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering কম খরচে আধুনিক হাইড্রোপনিক ও রক মেলন চাষ পদ্ধতি | Modern Hydroponic Farming in Bangladesh:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=GKYHdXY45IE"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_168",
          "wpId": 168,
          "slug": "sitakunda-chattogram-senspanel-iot-automated-fogging-hydroponics",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 168,
          "title": "Sitakunda & Hathazari, Chattogram: SensPanel IoT Micro-Climate Fogging Beats 38°C Summer Heat in NFT Lettuce",
          "subtitle": "1. Regional Agricultural Context & Challenge in Chattogram District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Chattogram District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Sitakunda / Hathazari Corridor, Chattogram District (22.5186° N, 91.7539° E)"
              ],
              [
                "Regional Support Team",
                "Chattogram Regional Campus, Oxygen (+880 1324-445395 • Eng. Mobinul Islam)"
              ],
              [
                "IoT Automation Stack",
                "SensPanel Farmhub 4-Relay Wi-Fi Controller + HydroSens EC/pH/Temp Probe"
              ],
              [
                "Automated Cooling Rule",
                "Trigger 20-sec high-pressure fog pulse whenever Canopy Temp > 31.5°C"
              ],
              [
                "Root-Zone Protection",
                "Subterranean insulated 1,000L tank keeps nutrient water < 26.5°C"
              ],
              [
                "Commercial Outcome",
                "Zero summer crop loss • Continuous supply to Chattogram port & hotel sector"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "In Chattogram District (22.5186° N, 91.7539° E), high coastal humidity combined with intense afternoon heat spikes often caused premature bolting, bitter leaves, and Pythium root rot in summer hydroponic lettuce. Engineered by our Chattogram Regional Campus at Oxygen (Eng. Mobinul Islam, Rasel Molla & Md. Hasibur Rahman), this commercial polyhouse links a SensPanel Temperature-Humidity-VPD node to automated 4-way anti-drip mist foggers and buried nutrient reservoirs—maintaining leaf canopy temperatures below 28°C even in May."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Sitakunda & Hathazari Corridor, Chattogram District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering Smart Controlled-Environment Hydroponic Greenhouse & Automated Climate Control:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=LGF33NN4B8U"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_169",
          "wpId": 169,
          "slug": "shyamnagar-satkhira-saline-coastal-hydroponic-green-fodder-dairy",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 169,
          "title": "Shyamnagar, Satkhira: How Soilless Hydroponic Green Fodder Solved Coastal Salinity for Dairy & Cattle Farmers",
          "subtitle": "1. Regional Agricultural Context & Challenge in Satkhira District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Satkhira District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Shyamnagar Upazila, Satkhira District (22.3306° N, 89.1028° E)"
              ],
              [
                "Regional Support Team",
                "Khulna & Jashore Regional Engineering Hub (+880 1324-445390)"
              ],
              [
                "System Footprint",
                "120 sq.ft Shaded Room = Equivalent green fodder of 3.5 Acres of land"
              ],
              [
                "Water Requirement",
                "Only 2.2 Liters of rainwater per 1 kg of green fodder (95% water saved)"
              ],
              [
                "Nutritional Boost",
                "Crude protein increased from 8.5% (dry seed) to 14.8% (8-day sprouted mat)"
              ],
              [
                "Livestock Impact",
                "+16% to +20% increase in daily dairy milk yield and improved cattle fertility"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Across the coastal belt of Shyamnagar and Kaliganj in Satkhira District (22.3306° N, 89.1028° E), severe soil and groundwater salinity following cyclones makes conventional green grass cultivation nearly impossible for 7 months of the year. Using harvested rainwater and low-cost 5-tier vertical food-grade polypropylene tray racks equipped with automated micro-fogging timers, livestock entrepreneurs now convert 1 kg of dry yellow maize seed into 7.5–8.0 kg of lush, digestible green fodder mat in just 8 days."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Shyamnagar & Kaliganj Coastal Belt, Satkhira District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering ১ কেজি গম বা ভুট্টা থেকে ৮ কেজি হাইড্রোপনিক ঘাস উৎপাদন | Hydroponic Grass Farming in Bangladesh:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=ArbAvsxqz6o"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_170",
          "wpId": 170,
          "slug": "mymensingh-bau-corridor-vertical-tower-hydroponics-youth-training",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 170,
          "title": "Mymensingh Agricultural Corridor: Vertical Aeroponic Towers & Student Agribusiness Incubation Success",
          "subtitle": "1. Regional Agricultural Context & Challenge in Mymensingh District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Mymensingh District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Mymensingh Sadar (BAU Corridor), Mymensingh District (24.7244° N, 90.4367° E)"
              ],
              [
                "Regional Support Team",
                "Dhaka & Mymensingh Technical Extension (+880 1324-445400)"
              ],
              [
                "Tower Density",
                "40 Plant Sites per Vertical Tower on a 2 ft × 2 ft (4 sq.ft) base"
              ],
              [
                "Root Oxygenation",
                "Gravity cascade + Dual-diaphragm air stone maintaining DO > 7.2 mg/L"
              ],
              [
                "Substrate & Pots",
                "25×25×40mm Agricultural Rockwool Cubes + 2\" Heavy-Duty Slotted Net Pots"
              ],
              [
                "Entrepreneurship Impact",
                "Adopted by 45+ student & youth agribusiness startups across Mymensingh"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Mymensingh Sadar (24.7244° N, 90.4367° E) is a powerhouse of agricultural research and youth agri-entrepreneurship in Bangladesh. To maximize production on small peri-urban plots and institutional rooftops, young agronomy entrepreneurs tested vertical cylindrical hydroponic towers alongside Deep Water Culture (DWC) oxygenated floating rafts. By cascading nutrient solution down 8-level vertical columns into 2-inch net pots with rockwool cubes, dissolved oxygen (DO) stays above 7.2 mg/L—accelerating Bok Choy and Kale growth by 35%."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Mymensingh Sadar (BAU Academic Corridor), Mymensingh District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering বাংলাদেশে মাটি ছাড়া ভার্টিক্যাল হাইড্রোপনিক্স চাষ পদ্ধতি ও কৃষি গবেষণা | Hydroponics Bangladesh:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=0vxs1tTVasY"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        },
        {
          "id": "wp_171",
          "wpId": 171,
          "slug": "kadamtoli-sylhet-rooftop-aquaponics-nft-diaspora-villa-farming",
          "courseId": "success_stories",
          "code": "Case Study",
          "sortOrder": 171,
          "title": "Kadamtoli & Dakshin Surma, Sylhet: How Diaspora Villa Owners Built Automated Rooftop NFT & Aquaponic Gardens",
          "subtitle": "1. Regional Agricultural Context & Challenge in Sylhet District",
          "readTime": "12 Min Read",
          "objectives": [],
          "keyFormula": "",
          "bdFieldTip": "",
          "table": {
            "headers": [
              "Parameter / Engineering Metric",
              "Field Specification (Sylhet District)"
            ],
            "rows": [
              [
                "Location & Geolocation",
                "Kadamtoli & Dakshin Surma, Sylhet District (24.8864° N, 91.8807° E)"
              ],
              [
                "Regional Support Team",
                "Sylhet Regional Campus, Kadamtoli (+880 1919-751845 • Asadul Islam Shahoria)"
              ],
              [
                "Monsoon Protection",
                "200-Micron Arch UV Rain-Shelter prevents reservoir dilution during heavy rain"
              ],
              [
                "Remote Monitoring",
                "My SensPanel Cloud App shared between on-site caretakers & UK diaspora owners"
              ],
              [
                "Water Source",
                "Filtered harvested rainwater (0.05 EC base) mineralized with BARI A&B Stock"
              ],
              [
                "Harvest Variety",
                "Year-round British salad leaves, watercress, Thai basil & sweet bell peppers"
              ]
            ]
          },
          "paragraphs": [
            {
              "type": "p",
              "text": "Sylhet District (24.8864° N, 91.8807° E) experiences some of the heaviest monsoon rainfall in South Asia (over 4,000 mm annually), which washes away traditional rooftop soil beds and dilutes open hydroponic reservoirs. Supported directly by our Sylhet Regional Campus at Queen's Tower, Kadamtoli (Asadul Islam Shahoria & Eng. Mohaiminul Islam), residential villa owners and commercial restaurants installed arched UV rain-shelter poly-canopies over closed-loop NFT and aquaponic beds—producing crisp British salad greens and strawberries 12 months a year."
            },
            {
              "type": "p",
              "text": "Every commercial and rooftop hydroponic installation in Bangladesh must be calibrated for local water EC, monsoon humidity, and summer ambient temperatures. Below is the verified technical specification sheet for the Kadamtoli & Dakshin Surma, Sylhet District deployment:"
            },
            {
              "type": "p",
              "text": "Watch the related video report and technical demonstration covering Aquaponic & Soilless Organic Farming Technology in Bangladesh | Rooftop Case Study:"
            },
            {
              "type": "p",
              "text": "Direct YouTube Link: https://www.youtube.com/watch?v=XH_hsLik3XA"
            },
            {
              "type": "heading",
              "text": "Want to replicate this hydroponic project in your district?"
            },
            {
              "type": "p",
              "text": "Our 23+ engineers and agronomists across 8 regional campuses provide on-site installation, BARI A&B nutrient calibration, and SensPanel IoT automation across all 64 districts."
            }
          ]
        }
      ]
    }
  ]
};

export default WEBSITE_COURSES;

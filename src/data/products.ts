import { Product } from '../types';

/**
 * FreshWave Chemicals & Detergents - Product Database
 * 
 * Featuring real products photographed directly at FreshWave Yellow House, Bamburi Fisheries.
 * Real Mombasa pricing in KSh.
 */
export const products: Product[] = [
  // ==========================================
  // REAL FEATURED PRODUCTS FROM BAMBURI SHOP
  // ==========================================
  {
    id: 'prod-freshwave-toilet-cleaner',
    name: 'FreshWave 10X Better Cleaning Toilet Cleaner (Dawa ya Choo)',
    category: 'household',
    tagline: 'Kills 99.9% of germs na kuondoa madoa sugu ya chooni kwa haraka',
    description: 'Chupa yenye shingo iliyopinda (kama Harpic) inayofika chini ya kingo za choo. Inakata kutu, madoa ya maji ya chumvi na harufu mbaya. Choo kinabaki kinang\'ara na harufu ya bahari (Fresh Ocean Fragrance).',
    variants: [
      { size: '500 ml Chupa ya Kawaida', price: 150, inStock: true },
      { size: '750 ml Angled Neck Bottle', price: 220, salePrice: 199, inStock: true },
      { size: '5 Litres Refill Jerrycan', price: 750, inStock: true },
      { size: '20 Litres Bulk Drum', price: 2600, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: '/images/toilet-cleaner-harpic.png',
    featured: true,
    popular: true,
    usageInstructions: 'Mwaga dawa chini ya mdomo wa choo. Acha ikae dakika 15-20, piga mswaki wa choo kisha flush. Choo kitang\'ara safi kabisa.',
    safetyInfo: 'Weka mbali na watoto. Ikiingia machoni osha mara moja kwa maji mengi safi.'
  },
  {
    id: 'prod-blue-bar-soap-100',
    name: 'FreshWave Long Blue Multi-Purpose Laundry Bar Soap (@100)',
    category: 'laundry',
    tagline: 'Sabuni ya mche mrefu wa bluu @100. Povu jingi, inatoa doa na kudumu',
    description: 'Sabuni ngumu na nzito ya mche wa bluu inayopendwa sana Mombasa. Inafaa kufulia nguo nyeupe na za rangi, kuoshea vyombo na kusafishia sakafu. Haitumbuki haraka majini na inalainisha mikono.',
    variants: [
      { size: 'Mche 1 (Single Bar @100)', price: 100, inStock: true },
      { size: 'Pakiti ya Miche 5', price: 480, inStock: true },
      { size: 'Katoni ya Miche 10', price: 950, salePrice: 900, inStock: true },
      { size: 'Katoni Kamili ya Miche 25 (Jumla)', price: 2300, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: '/images/blue-bar-soap.png',
    featured: true,
    popular: true,
    usageInstructions: 'Loweka nguo kwa maji, sugua sabuni ya mche, piga povu kisha fua na suuza. Inatoa doa la mafuta na matope kwa urahisi.'
  },
  {
    id: 'prod-toilet-blocks-ivuji',
    name: 'Ivuji WC Automatic Flushing Toilet Cleanser Blocks',
    category: 'household',
    tagline: 'Vitalu vya samawati vinavyosafisha choo kila unapo-flush',
    description: 'Vitalu vya kuweka ndani ya sinki la choo (cistern tank). Kila unaposukuma maji ya choo (flush), maji ya bluu yanatoka yakitakasa, kuzuia madoa ya chokaa na kuacha harufu safi.',
    variants: [
      { size: 'Pakiti ya Vitalu 2 (2 Pack)', price: 100, inStock: true },
      { size: 'Pakiti ya Vitalu 6', price: 280, salePrice: 250, inStock: true },
      { size: 'Box la Vitalu 12', price: 500, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: '/images/toilet-blocks.png',
    featured: true,
    popular: true,
    usageInstructions: 'Ondoa kizuizi kwenye blister pack na weka kitalu kimoja ndani ya tenki la choo (upande wa pili na mpira wa maji). Acha dakika 10 kabla ya kuflush mara ya kwanza.'
  },
  {
    id: 'prod-shower-gels-ready-pack',
    name: 'FreshWave Concentrated Shower Gel & Liquid Soap (Mchanganyiko)',
    category: 'personal-care',
    tagline: 'Sabuni za maji zilizopakiwa tayari kwa delivery kutoka duka la Bamburi',
    description: 'Chupa za sabuni ya maji na shower gel zenye rangi za kuvutia (bluu ya bahari, nyekundu ya strawberry, na njano ya ndimu). Zina povu zito, zinalainisha ngozi na kuacha harufu nzuri mwilini.',
    variants: [
      { size: 'Chupa ya 500 ml', price: 150, inStock: true },
      { size: 'Chupa ya 1 Litre', price: 250, inStock: true },
      { size: 'Mitungi ya 5 Litres (Value Pack)', price: 850, salePrice: 800, inStock: true },
      { size: 'Dumu la 20 Litres (Hoteli & Saloon)', price: 2900, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: '/images/shop-bottles.png',
    featured: true,
    popular: true,
    usageInstructions: 'Weka matone machache kwenye sponge ya kuogea au mikononi, piga povu kisha oga au nawa mikono.'
  },

  // ==========================================
  // 1. HOUSEHOLD CLEANING PRODUCTS (SABUNI ZA NYUMBANI)
  // ==========================================
  {
    id: 'prod-pine-floor-cleaner',
    name: 'FreshWave Sparkling Pine Floor & Tile Cleaner (Dawa ya Sakafu)',
    category: 'household',
    tagline: 'Inang\'arisha vigae, marumaru na sakafu ya saruji kwa harufu ya msitu wa pine',
    description: 'Inakata mafuta, mchanga wa Mombasa na vumbi la barabarani. Inafaa sana kwa vigae vya sebule, chumbani na verandas. Harufu ya pine inabaki hewani kwa masaa 24.',
    variants: [
      { size: '500 ml', price: 150, inStock: true },
      { size: '1 Litre', price: 250, salePrice: 220, inStock: true },
      { size: '5 Litres (Mtungi)', price: 650, inStock: true },
      { size: '20 Litres (Dumu Kubwa)', price: 2300, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80',
    popular: true,
    dilutionRatio: 'Weka vifuniko 2 kwenye ndoo ya maji ya nusu (5L). Tumia moja kwa moja bila maji kwa madoa sugu.',
    usageInstructions: 'Mwaga kwenye ndoo ya maji, piga deki sakafuni. Hakuna haja ya kusuuza tena kwa maji tupu.'
  },
  {
    id: 'prod-heavy-duty-degreaser',
    name: 'FreshWave Heavy-Duty Kitchen & Cooker Degreaser',
    category: 'household',
    tagline: 'Inayeyusha mafuta ya kupikia jikoni, meko na kuta za mikahawa',
    description: 'Dawa kali ya kuondoa mafuta meusi na masizi kwenye meko ya gesi, grill, fryers, na kuta za jikoni za mahoteli na nyumbani.',
    variants: [
      { size: '750 ml Spray Chupa', price: 320, inStock: true },
      { size: '1 Litre Chupa', price: 380, inStock: true },
      { size: '5 Litres Mtungi', price: 1200, salePrice: 1100, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
    usageInstructions: 'Nyunyizia (spray) kwenye sehemu yenye mafuta, acha dakika 3, sugua kwa waya au sponge kisha futa kwa kitambaa safi.'
  },
  {
    id: 'prod-clearshine-glass-cleaner',
    name: 'FreshWave ClearShine Glass & Window Cleaner (Dawa ya Kioo)',
    category: 'household',
    tagline: 'Inang\'arisha vioo vya madirisha, meza na magari bila kuacha mikwaruzo',
    description: 'Inakata ukungu wa chumvi ya hewa ya bahari ya Mombasa na alama za vidole kwenye vioo na vioo vya kuangalia sura.',
    variants: [
      { size: '500 ml Trigger Spray', price: 180, inStock: true },
      { size: '1 Litre Refill', price: 260, inStock: true },
      { size: '5 Litres Mtungi', price: 750, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // 2. LAUNDRY DETERGENTS & FABRIC CARE (SABUNI ZA KUFULIA)
  // ==========================================
  {
    id: 'prod-crystal-blue-laundry',
    name: 'FreshWave Crystal Blue Liquid Laundry Detergent (Sabuni ya Maji ya Nguo)',
    category: 'laundry',
    tagline: 'Sabuni nzito ya bluu ya kufulia kwa mikono au mashine ya kufulia',
    description: 'Inapendwa sana na laundries na mama wa nyumbani Mombasa. Inatoa uchafu wa kola, vumbi na jasho bila kufubaza rangi ya nguo.',
    variants: [
      { size: '1 Litre Chupa', price: 280, inStock: true },
      { size: '5 Litres Mtungi', price: 750, salePrice: 699, inStock: true },
      { size: '20 Litres Dumu la Biashara', price: 2600, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
    dilutionRatio: 'Kikombe 1 kidogo cha sabuni kinatosha mzigo wa nguo za kilo 5.',
  },
  {
    id: 'prod-softtouch-fabric-softener',
    name: 'FreshWave SoftTouch Ocean Fabric Softener (Downy/Lainisha Nguo)',
    category: 'laundry',
    tagline: 'Inalainisha mashuka na taulo na kuacha manukato ya kudumu wiki nzima',
    description: 'Inafanya upigaji pasi kuwa mwepesi sana, inazuia nguo kuganda mwilini na kuondoa harufu ya unyevu wa hewa ya Pwani.',
    variants: [
      { size: '1 Litre', price: 260, inStock: true },
      { size: '5 Litres', price: 780, inStock: true },
      { size: '20 Litres', price: 2800, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-high-foam-powder',
    name: 'FreshWave Super Bright High-Foam Washing Powder (Unga wa Sabuni)',
    category: 'laundry',
    tagline: 'Unga wa sabuni wenye povu jingi kwa kufulia na kuloweka nguo nyeupe',
    description: 'Inayeyuka haraka hata kwenye maji ya kisima ya Mombasa. Inang\'arisha nguo nyeupe na kuondoa matope na mafuta.',
    variants: [
      { size: '1 kg Mfuko', price: 220, inStock: true },
      { size: '5 kg Value Pack', price: 950, salePrice: 890, inStock: true },
      { size: '25 kg Gunia la Jumla', price: 4200, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // 3. DISHWASHING LIQUIDS (SABUNI ZA VYOMBO)
  // ==========================================
  {
    id: 'prod-lemon-dishwash',
    name: 'FreshWave Ultra Concentrated Lemon Dishwashing Liquid (Sabuni ya Vyombo)',
    category: 'dishwashing',
    tagline: 'Tone moja tu linasafisha sinki zima la vyombo vya mafuta',
    description: 'Sabuni nzito sana ya vyombo yenye harufu nzuri ya ndimu safi. Inakata mafuta ya nyama, kuku na biriani bila kukauka mikononi.',
    variants: [
      { size: '500 ml Chupa ya Kuminya', price: 140, inStock: true },
      { size: '1 Litre Chupa', price: 220, salePrice: 199, inStock: true },
      { size: '5 Litres Mtungi wa Bei Nafuu', price: 650, inStock: true },
      { size: '20 Litres Dumu la Mikahawa', price: 2300, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
  },
  {
    id: 'prod-lime-antibacterial-dishwash',
    name: 'FreshWave Antibacterial Lime Sparkle Dishwashing Liquid',
    category: 'dishwashing',
    tagline: 'Sabuni ya vyombo ya kijani (Lime) inayoua bakteria 99.9%',
    description: 'Inafaa kwa mahoteli, migahawa na majumbani. Inalinda ngozi ya mikono kwa sababu ina glycerine asilia.',
    variants: [
      { size: '500 ml', price: 150, inStock: true },
      { size: '1 Litre', price: 240, inStock: true },
      { size: '5 Litres', price: 700, salePrice: 660, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // 4. DISINFECTANTS & BLEACH (DAWA ZA KUUA VIJIDUDU & BLEACH)
  // ==========================================
  {
    id: 'prod-thick-guard-bleach',
    name: 'FreshWave Thick Guard Bleach (Jiki Nzito ya Nguo & Choo)',
    category: 'disinfectants',
    tagline: 'Bleach nzito ya sodium hypochlorite kwa kung\'arisha nguo nyeupe na vyoo',
    description: 'Inaua vijidudu na kuvu (fungus), inang\'arisha mashuka meupe ya hoteli na nguo za shule. Nzito kuliko bleach za kawaida hivyo inashikamana na ukuta wa choo.',
    variants: [
      { size: '500 ml', price: 120, inStock: true },
      { size: '1 Litre', price: 180, salePrice: 160, inStock: true },
      { size: '5 Litres Mtungi', price: 550, inStock: true },
      { size: '20 Litres Dumu', price: 1950, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
  },
  {
    id: 'prod-hospital-antiseptic-pine',
    name: 'FreshWave Medical Grade Antiseptic Pine Liquid (Dawa ya Pine)',
    category: 'disinfectants',
    tagline: 'Inageuka rangi ya maziwa kwenye maji kwa usafi na tiba ya mazingira',
    description: 'Dawa ya antiseptic kwa usafi wa vyoo, sakafu za hospitali, shule na majumbani. Inazuia harufu mbaya na kuua vijidudu.',
    variants: [
      { size: '500 ml', price: 280, inStock: true },
      { size: '1 Litre', price: 480, inStock: true },
      { size: '5 Litres Mtungi', price: 1550, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
  },

  // ==========================================
  // 5. RAW CHEMICALS & INGREDIENTS (KEMIKALI ZA KUTENGENEZA SABUNI)
  // ==========================================
  {
    id: 'prod-labsa-96',
    name: 'LABSA 96% (Sulphonic Acid Asilia kwa Sabuni za Maji)',
    category: 'raw-chemicals',
    tagline: 'Kemikali kuu ya kutengenezea sabuni ya vyombo, ya maji na ya magari',
    description: 'LABSA asilia ya rangi ya kahawia nzito, 96% purity. Povu zito na uwezo mkubwa wa kukata mafuta. Bei maalum kwa watengenezaji sabuni Mombasa.',
    variants: [
      { size: 'Kilo 1 (Retail)', price: 380, inStock: true },
      { size: 'Kilo 5 Mtungi', price: 1750, inStock: true },
      { size: 'Kilo 20 Dumu', price: 6500, salePrice: 6200, inStock: true },
      { size: 'Pipa la Kilo 215 (Jumla)', price: 58000, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
  },
  {
    id: 'prod-sles-70',
    name: 'SLES 70% Paste (Kileta Povu & Utomvu wa Sabuni)',
    category: 'raw-chemicals',
    tagline: 'Paste nyeupe safi ya kutengeneza povu zito kwenye sabuni za vyombo na handwash',
    description: 'SLES 70% safi kabisa isiyo na harufu mbaya. Inayeyuka haraka na inashirikiana vizuri na chumvi ya viwandani kuleta unene (viscosity).',
    variants: [
      { size: 'Kilo 1 Pakiti', price: 350, inStock: true },
      { size: 'Kilo 5 Ndoo', price: 1600, inStock: true },
      { size: 'Kilo 25 Ndoo Kubwa', price: 6800, salePrice: 6500, inStock: true },
      { size: 'Pipa la Kilo 170', price: 42000, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1603555501671-8f96b3fce8e4?auto=format&fit=crop&w=800&q=80',
    featured: true,
    popular: true,
  },
  {
    id: 'prod-caustic-soda-flakes',
    name: 'Caustic Soda Flakes 99% (Magadi ya Flakes ya Sabuni)',
    category: 'raw-chemicals',
    tagline: 'Flakes nyeupe safi za kutengeneza sabuni za mche na kufungua mifereji',
    description: 'Caustic soda flakes zenye nguvu 99%. Zinatumika kutengeneza sabuni ngumu, kuneutralize LABSA na kutoa uchafu wa mafuta ulioganda kwenye mifereji ya maji machafu.',
    variants: [
      { size: 'Kilo 1 Mfuko uliotiwa muhuri', price: 260, inStock: true },
      { size: 'Kilo 5 Ndoo', price: 1200, inStock: true },
      { size: 'Mfuko wa Kilo 25 (Jumla)', price: 4600, salePrice: 4400, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-soda-ash-light',
    name: 'Soda Ash Light (Kipunguza Ukali wa Maji & Kiongeza Nguvu)',
    category: 'raw-chemicals',
    tagline: 'Unga mweupe wa kulainisha maji ya kisima na kuongeza usafi',
    description: 'Inasaidia sabuni kufanya kazi vizuri hata kwenye maji ya chumvi ya Mombasa.',
    variants: [
      { size: 'Kilo 1', price: 180, inStock: true },
      { size: 'Kilo 5', price: 750, inStock: true },
      { size: 'Gunia la Kilo 25', price: 3200, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-industrial-salt',
    name: 'Chumvi ya Viwandani ya Kunenepesha Sabuni (Industrial Salt)',
    category: 'raw-chemicals',
    tagline: 'Chumvi safi kavu isiyo na madini ya iodini, inaleta unene wa sabuni',
    description: 'Chumvi maalum ya kuweka kwenye sabuni ya maji na vyombo ili iwe nzito kama asali bila kufifia rangi.',
    variants: [
      { size: 'Kilo 1', price: 80, inStock: true },
      { size: 'Kilo 5', price: 350, inStock: true },
      { size: 'Mfuko wa Kilo 25', price: 1300, salePrice: 1200, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-fragrance-lemon-lavender',
    name: 'Mafuta ya Manukato ya Sabuni (Lemon, Lavender, Pine, Strawberry)',
    category: 'raw-chemicals',
    tagline: 'Perfume nzito za viwandani zenye harufu ya kudumu kwenye sabuni',
    description: 'Matone machache yanatosha lita 20 za sabuni. Chagua harufu unayotaka (Lemon Fresh, Strawberry, Pine, Lavender) wakati unaagiza kwa WhatsApp.',
    variants: [
      { size: 'Mililita 100', price: 250, inStock: true },
      { size: 'Mililita 500', price: 950, inStock: true },
      { size: 'Lita 1 Chupa', price: 1800, salePrice: 1650, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },

  // ==========================================
  // 6. PACKAGING & CONTAINERS (MACHUPA NA MITUNGI)
  // ==========================================
  {
    id: 'prod-500ml-trigger-bottles',
    name: 'Machupa ya 500ml ya Kupuliza yenye Trigger Nozzle (Spray Bottles)',
    category: 'packaging',
    tagline: 'Chupa imara za plastiki ya HDPE zenye kichwa cha kupuliza (spray)',
    description: 'Zinafaa kwa dawa za vioo, sanitizers, na dawa za kusafishia meza. Hazivuji na trigger inafanya kazi vizuri.',
    variants: [
      { size: 'Pakiti ya Chupa 5', price: 250, inStock: true },
      { size: 'Pakiti ya Chupa 20', price: 900, salePrice: 850, inStock: true },
      { size: 'Katoni ya Chupa 100', price: 3800, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'prod-1l-hdpe-bottles',
    name: 'Machupa ya Lita 1 ya Plastiki ya HDPE yenye Vifuniko',
    category: 'packaging',
    tagline: 'Chupa za kawaida za bleach, sabuni ya kufulia na dawa ya sakafu',
    description: 'Plastiki imara inayostahimili kemikali na kutodondoka au kubonyea.',
    variants: [
      { size: 'Pakiti ya Chupa 10', price: 350, inStock: true },
      { size: 'Pakiti ya Chupa 50', price: 1600, inStock: true },
      { size: 'Bale ya Chupa 100', price: 2900, salePrice: 2750, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prod-5l-jerrycan',
    name: 'Mitungi ya Lita 5 ya HDPE yenye Kifuniko chenye Seal',
    category: 'packaging',
    tagline: 'Mitungi imara yenye mpini mzito kwa kuuza sabuni za ujazo',
    description: 'Mitungi minene inayodumu, haivuji na inaweza kupangwa moja juu ya nyingine (stackable).',
    variants: [
      { size: 'Mtungi 1 (Single)', price: 120, inStock: true },
      { size: 'Mitungi 5', price: 550, inStock: true },
      { size: 'Mitungi 25 (Jumla)', price: 2500, salePrice: 2350, inStock: true },
    ],
    defaultVariantIndex: 1,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'prod-20l-jerrycan',
    name: 'Madumu ya Lita 20 Mazito ya Viwandani (20L Jerrycans)',
    category: 'packaging',
    tagline: 'Dumu zito la plastiki ya asili kwa usafirishaji wa sabuni na kemikali',
    description: 'Imara sana kwa usafirishaji wa mizigo ya matatu au bodaboda Mombasa nzima.',
    variants: [
      { size: 'Dumu 1', price: 420, inStock: true },
      { size: 'Madumu 5', price: 2000, salePrice: 1900, inStock: true },
    ],
    defaultVariantIndex: 0,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getPopularProducts = (): Product[] => {
  return products.filter((p) => p.popular);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (!category || category === 'all') return products;
  return products.filter((p) => p.category === category);
};

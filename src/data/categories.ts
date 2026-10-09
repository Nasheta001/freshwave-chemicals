import { CategoryInfo, ProductCategory } from '../types';

/**
 * FreshWave Categories Configuration
 * Simple, natural Swahili & English for Mombasa shoppers.
 */
export const categories: CategoryInfo[] = [
  {
    id: 'household',
    name: 'Dawa za Choo na Nyumbani (Household & Toilet)',
    shortDescription: 'Dawa ya choo ya Harpic style, vitalu vya choo, dawa ya sakafu na vigae, na degreaser ya meko.',
    iconName: 'Sparkles',
    badge: 'Maarufu Zaidi',
  },
  {
    id: 'laundry',
    name: 'Sabuni za Kufulia na Miche (Laundry & Bar Soaps)',
    shortDescription: 'Sabuni ya mche mrefu @100, sabuni ya maji ya nguo, unga wa kufulia na fabric softener ya kulainisha.',
    iconName: 'Shirt',
    badge: 'Mche @100',
  },
  {
    id: 'dishwashing',
    name: 'Sabuni za Vyombo (Dishwashing Liquids)',
    shortDescription: 'Sabuni nzito ya kukata mafuta ya ndimu na lime. Tone moja tu linasafisha vyombo vingi.',
    iconName: 'UtensilsCrossed',
    badge: 'Kukata Mafuta',
  },
  {
    id: 'personal-care',
    name: 'Sabuni za Kuoga na Kunawia (Shower Gels & Handwash)',
    shortDescription: 'Shower gels za chupa za rangi mbalimbali, sabuni ya maji ya kunawa na shampoo za nywele.',
    iconName: 'Droplets',
    badge: 'Laini Mwilini',
  },
  {
    id: 'disinfectants',
    name: 'Dawa za Kuua Vijidudu na Jiki (Bleach & Antiseptic)',
    shortDescription: 'Bleach nzito ya nguo na vyoo, antiseptic pine ya hospitali, na dawa ya kusafisha vidonda au sakafu.',
    iconName: 'ShieldCheck',
    badge: 'Ua Vijidudu 99.9%',
  },
  {
    id: 'raw-chemicals',
    name: 'Kemikali za Kutengeneza Sabuni (Raw Chemicals)',
    shortDescription: 'LABSA 96%, SLES 70%, Caustic Soda flakes, Soda Ash, chumvi ya unene na mafuta ya manukato.',
    iconName: 'FlaskConical',
    badge: 'Wafanyabiashara',
  },
  {
    id: 'packaging',
    name: 'Machupa, Mitungi na Madumu (Bottles & Packaging)',
    shortDescription: 'Chupa za spray 500ml, chupa za lita 1, mitungi ya 5L na madumu ya 20L ya plastiki imara.',
    iconName: 'Package',
    badge: 'Jumla & Rejareja',
  },
];

export const getCategoryById = (id: ProductCategory): CategoryInfo | undefined => {
  return categories.find((c) => c.id === id);
};

export const getCategoryName = (id: ProductCategory): string => {
  const cat = getCategoryById(id);
  return cat ? cat.name : id;
};

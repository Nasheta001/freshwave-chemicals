/**
 * FreshWave Chemicals & Detergents - Site Configuration
 * 
 * EDIT THIS FILE to update:
 * 1. Business WhatsApp number (format without + or spaces, e.g., '254712345678')
 * 2. Contact phone and email
 * 3. Physical shop address and opening hours
 * 4. Business name & currency
 */

export const siteConfig = {
  // Business Identity
  businessName: 'FreshWave Chemicals & Detergents',
  shortName: 'FreshWave',
  tagline: 'Premium Detergents, Cleaning Supplies & Industrial Chemicals',
  motto: 'Quality Hygiene Solutions at Factory-Direct Kenyan Prices',

  // Physical Location in Mombasa, Kenya
  location: {
    building: 'Yellow House',
    landmark: 'Bamburi Fisheries',
    city: 'Mombasa',
    country: 'Kenya',
    fullAddress: 'Yellow House, Bamburi Fisheries, Mombasa, Kenya',
    directionsHint: 'Directly at Yellow House near Bamburi Fisheries depot, accessible via the Bamburi road link.',
    googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Yellow+House+Bamburi+Fisheries+Mombasa+Kenya',
  },

  // Contact Details
  // NOTE: WhatsApp number must include country code (e.g., 254 for Kenya) without leading '+' or special characters.
  contact: {
    // Official Business WhatsApp Number for FreshWave
    whatsappNumber: '254717258704',
    displayPhone: '0717 258 704 / +254 717 258 704',
    displayPhoneShort: '0717 258 704',
    email: 'freshwavechemicals@gmail.com',
  },

  // Operating Hours
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:30 PM',
    saturday: 'Saturday: 8:30 AM – 6:00 PM',
    sunday: 'Sunday: 10:00 AM – 3:00 PM',
    holidays: 'Public Holidays: 9:00 AM – 2:00 PM',
  },

  // E-Commerce & Checkout Settings
  commerce: {
    currencyCode: 'KES',
    currencySymbol: 'KSh',
    pickupLocationName: 'FreshWave Shop (Yellow House, Bamburi Fisheries)',
    deliveryAreasDescription: 'Fast delivery across Bamburi, Nyali, Shanzu, Kisauni, Mombasa Island, Mtwapa & Countrywide parcel dispatch via Matatu / Courier services.',
    freeDeliveryThreshold: 5000, // Optional threshold in KSh
    sampleCatalogueNotice: 'Catalogue prices and stock quantities are realistic sample values. Live stock and current prices are confirmed when you submit your order via WhatsApp.',
    whatsAppOrderNotice: 'Your order will be sent to WhatsApp for instant confirmation. Payment (such as M-Pesa) and dispatch details will be arranged directly with our team.',
  },
};

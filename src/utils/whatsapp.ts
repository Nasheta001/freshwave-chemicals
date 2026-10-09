import { siteConfig } from '../config/siteConfig';
import { CartItem, CheckoutDetails } from '../types';
import { formatKSh } from './formatters';

/**
 * Generate formatted WhatsApp message for order inquiry/submission
 */
export const generateWhatsAppOrderMessage = (
  items: CartItem[],
  checkout: CheckoutDetails,
  subtotal: number,
  discount: number = 0
): string => {
  const finalTotal = Math.max(0, subtotal - discount);

  const lines: string[] = [
    `🌊 *AGIZO JIPYA (NEW ORDER) - ${siteConfig.businessName.toUpperCase()}*`,
    `📍 _${siteConfig.location.fullAddress}_`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `👤 *MAELEZO YA MTEJA (CUSTOMER DETAILS):*`,
    `• *Jina (Name):* ${checkout.customerName.trim()}`,
  ];

  if (checkout.phone && checkout.phone.trim()) {
    lines.push(`• *Simu (Phone):* ${checkout.phone.trim()}`);
  }

  if (checkout.fulfillment === 'pickup') {
    lines.push(`• *Fulfillment:* 🏪 Kujichukulia Dukani (Yellow House, Bamburi Fisheries)`);
  } else {
    lines.push(`• *Fulfillment:* 🚚 Kutumiwa Mombasa (Delivery)`);
    lines.push(`• *Mahali pa Kuletewa (Location):* ${checkout.deliveryLocation.trim() || 'Haikutajwa (Tafadhali nitaarifu)'}`);
  }

  if (checkout.deliveryNotes && checkout.deliveryNotes.trim()) {
    lines.push(`• *Maelezo ya Ziada (Notes):* ${checkout.deliveryNotes.trim()}`);
  }

  lines.push(``);
  lines.push(`🛒 *BIDHAA ZILIZOCHAGULIWA (${items.length} ${items.length === 1 ? 'item' : 'items'}):*`);

  items.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    lines.push(
      `${index + 1}. *${item.name}* (${item.size})\n` +
      `   • Idadi: ${item.quantity} × ${formatKSh(item.price)} = *${formatKSh(itemSubtotal)}*`
    );
  });

  lines.push(``);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  if (discount > 0) {
    lines.push(`Jumla Ndogo: ${formatKSh(subtotal)}`);
    lines.push(`Punguzo: -${formatKSh(discount)}`);
  }
  lines.push(`💰 *JUMLA KUU (GRAND TOTAL): ${formatKSh(finalTotal)}*`);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(``);
  lines.push(`Habari FreshWave! Nimechagua bidhaa hizi kupitia website yenu. Naomba kuthibitisha upatikanaji wa mzigo, muda wa kufikishiwa, na maelezo ya malipo ya M-Pesa. Ahsante!`);

  return lines.join('\n');
};

/**
 * Build the full WhatsApp URL with encoded message
 */
export const buildWhatsAppUrl = (message: string, customPhone?: string): string => {
  const rawNumber = customPhone || siteConfig.contact.whatsappNumber;
  // Clean number of spaces, hyphens, and plus signs
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp directly in new window or mobile app
 */
export const openWhatsAppOrder = (
  items: CartItem[],
  checkout: CheckoutDetails,
  subtotal: number,
  discount: number = 0
): void => {
  const message = generateWhatsAppOrderMessage(items, checkout, subtotal, discount);
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Generate a general inquiry WhatsApp URL
 */
export const openGeneralInquiryWhatsApp = (topic: string = 'Inquiry'): void => {
  const message = `Habari ${siteConfig.businessName}! Ninawasiliana kutoka kwenye website yenu kuhusu: *${topic}*. Naomba maelezo zaidi. Ahsante!`;
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

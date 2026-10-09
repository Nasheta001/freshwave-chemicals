import { siteConfig } from '../config/siteConfig';

/**
 * Format a number as Kenyan Shilling currency string (e.g. KSh 1,250)
 */
export const formatKSh = (amount: number): string => {
  return `${siteConfig.commerce.currencySymbol} ${amount.toLocaleString('en-KE')}`;
};

/**
 * Calculate cart summary metrics
 */
export const calculateSavings = (price: number, salePrice?: number): number => {
  if (!salePrice || salePrice >= price) return 0;
  return price - salePrice;
};

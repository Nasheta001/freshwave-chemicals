export type ProductCategory =
  | 'household'
  | 'laundry'
  | 'dishwashing'
  | 'personal-care'
  | 'disinfectants'
  | 'raw-chemicals'
  | 'packaging';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  shortDescription: string;
  iconName: string;
  badge?: string;
}

export interface ProductVariant {
  size: string; // e.g., '500ml', '1 Litre', '5 Litres', '20 Litres', '1kg', '5kg', '25kg'
  price: number; // in KSh
  salePrice?: number; // optional discounted price
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  variants: ProductVariant[];
  defaultVariantIndex: number;
  image: string;
  featured?: boolean;
  popular?: boolean;
  isNew?: boolean;
  usageInstructions?: string;
  safetyInfo?: string;
  dilutionRatio?: string;
}

export interface CartItem {
  id: string; // compound ID: `${productId}-${variantSize}`
  productId: string;
  name: string;
  category: ProductCategory;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export type FulfillmentMethod = 'pickup' | 'delivery';

export interface CheckoutDetails {
  customerName: string;
  phone?: string;
  fulfillment: FulfillmentMethod;
  deliveryLocation: string;
  deliveryNotes?: string;
}

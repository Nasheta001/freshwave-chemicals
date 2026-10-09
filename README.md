# FreshWave Chemicals & Detergents E-Commerce Website

A modern, fast, mobile-first e-commerce web application built for **FreshWave Chemicals & Detergents**, located at **Yellow House, Bamburi Fisheries, Mombasa, Kenya**.

Developed with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Highlights & Key Features

- **Brand Theme:** Clean, modern deep emerald green (`#064e3b`), vibrant fresh lime (`#84cc16`), and crisp white.
- **Bamburi, Mombasa Location Branding:** Yellow House, Bamburi Fisheries physical address highlighted across banners, hero section, contact page, and footer.
- **7 Configurable Product Categories:**
  1. Household cleaning products
  2. Laundry detergents and fabric care
  3. Dishwashing liquids
  4. Shower gels and shampoos
  5. Disinfectants and bleach
  6. Raw chemicals and detergent-making ingredients (LABSA 96%, SLES 70%, Caustic Soda, etc.)
  7. Bottles, containers and packaging (HDPE spray bottles, 1L bottles, 5L & 20L jerrycans)
- **Dynamic Packaging Size Variants:** Each product supports multiple packaging options (e.g. 500ml, 1L, 5L, 20L Jerrycans or 1kg, 5kg, 25kg bags) with automatic price switching.
- **Real-Time Catalogue Search & Category Filtering:** Instant search by name, description, or category. Sort by featured, price low-to-high, price high-to-low, or A-Z.
- **Persistent Shopping Cart (`localStorage`):** Cart items, quantities, and subtotal persist across page reloads.
- **WhatsApp Checkout Engine:**
  - Automatically calculates item subtotals and grand total in **KSh**.
  - Captures customer's name, phone, fulfillment preference (**Self-Collection at Yellow House, Bamburi** vs. **Delivery to Mombasa and environs**), and optional delivery notes.
  - Automatically compiles a clean, URL-encoded WhatsApp message with item breakdown and opens the official WhatsApp chat.
  - Clear notice explaining that orders are submitted to WhatsApp for live confirmation and M-Pesa arrangement.
- **Mobile-First UX:** Touch-friendly buttons, slide-over drawer cart, floating WhatsApp help button, responsive modal views, and accessible design.

---

## 🚀 How to Run the Website Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Steps

1. Open your terminal / command prompt.
2. Navigate into the project folder:
   ```bash
   cd "C:\Users\ADMIN\.gemini\antigravity\scratch\freshwave-chemicals"
   ```
3. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## 🛠️ Where to Customize Your Store Data

All business information, categories, and products are stored in dedicated, clean configuration files so you can easily update them:

### 1. Business WhatsApp Number, Phone, & Address
**File:** [`src/config/siteConfig.ts`](file:///C:/Users/ADMIN/.gemini/antigravity/scratch/freshwave-chemicals/src/config/siteConfig.ts)

Open this file to change:
- `contact.whatsappNumber`: Set your real WhatsApp number with Kenya country code (e.g., `'254712345678'`). **No '+' or spaces.**
- `contact.displayPhone`: Phone number shown to customers (e.g., `'+254 712 345 678'`).
- `location.fullAddress`: Physical shop address (`'Yellow House, Bamburi Fisheries, Mombasa, Kenya'`).
- `hours`: Your operating schedule.

### 2. Products, Prices, Sizes, and Images
**File:** [`src/data/products.ts`](file:///C:/Users/ADMIN/.gemini/antigravity/scratch/freshwave-chemicals/src/data/products.ts)

Every product is an object in the `products` array:
```ts
{
  id: 'prod-pine-floor-cleaner',
  name: 'FreshWave Sparkling Pine Floor & Tile Cleaner',
  category: 'household',
  tagline: 'Deep dirt lifting with a long-lasting forest pine aroma',
  description: 'Formulated for Mombasa tiles, terrazzo, and cement floors...',
  variants: [
    { size: '500 ml', price: 150, inStock: true },
    { size: '1 Litre', price: 250, salePrice: 220, inStock: true },
    { size: '5 Litres', price: 650, inStock: true },
    { size: '20 Litres', price: 2300, inStock: true },
  ],
  defaultVariantIndex: 1,
  image: 'https://images.unsplash.com/...',
  featured: true,
  popular: true,
  dilutionRatio: 'Dilute 50ml in 5 Litres of warm water...',
  usageInstructions: '...',
  safetyInfo: '...'
}
```
- **To change a price:** Update the `price` or optional `salePrice` property under `variants`.
- **To add a size:** Add another `{ size: '10 Litres', price: 1200, inStock: true }` to `variants`.
- **To change product image:** Replace the `image` URL.

### 3. Categories
**File:** [`src/data/categories.ts`](file:///C:/Users/ADMIN/.gemini/antigravity/scratch/freshwave-chemicals/src/data/categories.ts)

To rename or add a new category, update the `categories` array.

---

## 🚢 How to Deploy the Website Online

This project builds to static files (`HTML`, `CSS`, `JavaScript`) in the `dist/` directory and can be deployed for **free** on any modern web host:

### Option A: Deploy to Vercel (Recommended)
1. Push this project to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your website will be live with a free SSL certificate in 60 seconds!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Connect your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **"Deploy site"**.

### Option C: Build Manually
Run:
```bash
npm run build
```
Upload the generated `dist/` folder to any cPanel hosting or Apache/Nginx web server.

---

## 📦 Project Architecture

```
freshwave-chemicals/
├── index.html                   # HTML entry point with SEO metadata & fonts
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Deep green & fresh lime color palette
├── vite.config.ts               # Vite bundler configuration
└── src/
    ├── config/
    │   └── siteConfig.ts        # Central business settings & WhatsApp number
    ├── types/
    │   └── index.ts             # TypeScript definitions
    ├── data/
    │   ├── categories.ts        # Configurable category list
    │   └── products.ts          # Products catalogue & realistic pricing
    ├── context/
    │   └── CartContext.tsx      # Cart state & localStorage persistence
    ├── utils/
    │   ├── formatters.ts        # Currency (KSh) & text formatters
    │   └── whatsapp.ts          # WhatsApp URL & order message generator
    ├── components/
    │   ├── Navbar.tsx           # Sticky navigation & announcements
    │   ├── Footer.tsx           # Bamburi store details & links
    │   ├── ProductCard.tsx      # Product cards with packaging selectors
    │   ├── ProductModal.tsx     # Full product details & instructions modal
    │   ├── CartDrawer.tsx       # Slide-over cart & WhatsApp checkout
    │   └── WhatsAppFloatingButton.tsx # Floating WhatsApp chat button
    ├── pages/
    │   ├── HomePage.tsx         # Hero, categories, featured & store showcase
    │   ├── ShopPage.tsx         # Searchable catalogue with filters & sort
    │   ├── CategoriesPage.tsx   # Dedicated category guide
    │   ├── AboutPage.tsx        # Story, chemical quality & mission
    │   └── ContactPage.tsx      # Bamburi directions, hours & WhatsApp form
    ├── App.tsx                  # Root application layout
    └── main.tsx                 # React DOM mount point
```

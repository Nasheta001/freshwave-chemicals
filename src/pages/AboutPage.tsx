import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  CheckCircle, 
  Award,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AboutPageProps {
  onNavigateToShop: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateToShop, onNavigateToContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Intro Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-brand-800 shadow-xl bg-white flex items-center justify-center">
          <img 
            src="/images/freshwave-logo.jpg" 
            alt="FreshWave Chemicals & Detergents Official Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">
          <Sparkles className="w-3.5 h-3.5 text-freshlime-600" />
          <span>About FreshWave Chemicals & Detergents</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Cleanliness You Can Trust, Strength You Can Measure.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Operating from our shop at <strong className="text-brand-950">{siteConfig.location.fullAddress}</strong>, FreshWave is Mombasa's reliable manufacturer and distributor of concentrated cleaning detergents, hospital disinfectants, and raw chemical ingredients.
        </p>
      </div>

      {/* Story & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Our Story & Commitment to Mombasa
          </h2>
          <p>
            At FreshWave Chemicals & Detergents, we recognized that households, hoteliers, laundromats, and car wash operators across the Coast frequently pay premium prices for diluted, commercial-grade detergents that require excessive amounts to get results.
          </p>
          <p>
            We set out to change that by formulating high-active, deeply concentrated cleaning liquids right here in Mombasa. Whether it is our <strong>Crystal Blue Liquid Laundry Detergent</strong>, our <strong>Ultra Concentrated Lemon Dishwash</strong>, or our <strong>Medical Grade Pine Antiseptic</strong>, our products deliver rich foam, instant grime-cutting power, and lingering fragrances tailored to coastal weather conditions.
          </p>
          <p>
            Beyond finished detergents, we are a key supplier to emerging entrepreneurs, soap makers, and schools by providing pure raw materials such as <strong>LABSA 96%</strong>, <strong>SLES 70%</strong>, <strong>Caustic Soda Flakes</strong>, and quality HDPE plastic bottles and jerrycans.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onNavigateToShop}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs shadow-md transition"
            >
              <span>Explore Our Catalogue</span>
              <ArrowRight className="w-4 h-4 text-freshlime-400" />
            </button>
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
            >
              <span>Visit Our Bamburi Shop</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-950 to-brand-900 rounded-3xl p-8 text-white space-y-6 shadow-xl border border-brand-800">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-freshlime-400" />
            <span>The FreshWave Difference</span>
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-freshlime-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">1. Uncompromised Chemical Purity</strong>
                <p className="text-slate-300 mt-0.5">
                  We never compromise on active ingredient percentages. Our LABSA is genuine 96%, our SLES is 70% paste, and our caustic soda is 99% pure flakes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-freshlime-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">2. Tailored for Coastal Hard Water</strong>
                <p className="text-slate-300 mt-0.5">
                  Borehole and municipal water in Mombasa can contain high mineral content. Our formulations include water softeners to ensure rapid lathering and clean rinsing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-freshlime-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">3. Support for Local Soap Makers</strong>
                <p className="text-slate-300 mt-0.5">
                  We offer practical advice on formulation ratios, fragrance stability, and viscosity tuning for local detergent entrepreneurs and youth groups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-freshlime-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm block">4. Direct WhatsApp Ordering</strong>
                <p className="text-slate-300 mt-0.5">
                  No cumbersome registration or online payment friction. Choose your products, build your cart, and talk directly with our store dispatch on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Product Pillars */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-2xl font-black text-slate-900">What We Supply</h2>
          <p className="text-xs text-slate-500">A comprehensive suite of chemical and hygiene supplies</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              🧴
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Finished Detergents</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dishwashing liquids, liquid laundry soap, multi-surface cleaners, and thick bleached sanitizers in 500ml, 1L, 5L, and 20L sizes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              ⚗️
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Raw Chemicals</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              High-purity LABSA 96%, SLES 70%, Caustic Soda, Soda Ash, Industrial Salts, CDEA foam booster, and concentrated fragrance oils.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              📦
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Containers & Caps</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              500ml spray bottles, 1L HDPE bottles, 5L jerrycans, 20L industrial containers, flip tops, trigger sprayers, and dispenser pumps.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              🏨
            </div>
            <h4 className="font-extrabold text-sm text-slate-900">Institutional Supply</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Wholesale volume supply for coastal beach resorts, hospitals, laundromats, dining spots, and property caretakers.
            </p>
          </div>
        </div>
      </div>

      {/* Shop Location Callout */}
      <div className="bg-brand-50 border border-brand-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-brand-900 font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Store Location</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-brand-950">
            Yellow House, Bamburi Fisheries, Mombasa
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
            Stop by for a friendly chat, collect wholesale orders, or discuss custom formulations with our technical staff.
          </p>
        </div>

        <button
          onClick={onNavigateToContact}
          className="px-6 py-3.5 rounded-2xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs shadow-md transition shrink-0"
        >
          View Map & Contact Details
        </button>
      </div>
    </div>
  );
};

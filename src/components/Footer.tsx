import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Sparkles, 
  ArrowUp, 
  ExternalLink 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { categories } from '../data/categories';
import { openGeneralInquiryWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  onSelectCategory?: (categoryId: string) => void;
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, setCurrentTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    setCurrentTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-950 text-slate-300 border-t border-brand-900 mt-auto">
      {/* WhatsApp banner in footer */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-emerald-900 border-b border-brand-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2">
              <span>Need Custom Detergents or Bulk Chemical Drums?</span>
              <Sparkles className="w-5 h-5 text-freshlime-400" />
            </h3>
            <p className="text-sm text-brand-200 max-w-xl">
              Talk directly with our Bamburi laboratory team for custom formulations, wholesale laundry supply, or technical advice for soap making.
            </p>
          </div>

          <button
            onClick={() => openGeneralInquiryWhatsApp('Wholesale Bulk Quotation')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-freshlime-400 hover:bg-freshlime-300 text-brand-950 font-extrabold text-sm shadow-lg shadow-freshlime-950/20 transition group shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-brand-950 group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp ({siteConfig.contact.displayPhoneShort})</span>
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-freshlime-400 bg-white shadow-md shrink-0 flex items-center justify-center">
                <img 
                  src="/images/freshwave-logo.jpg" 
                  alt="FreshWave Chemicals Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-lg tracking-tight">FreshWave</h4>
                <p className="text-[11px] font-semibold text-freshlime-400 uppercase tracking-wider">
                  Chemicals & Detergents
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Mombasa's dedicated supplier of high-concentration household detergents, commercial laundry liquids, hospital-grade disinfectants, HDPE packaging containers, and pure raw chemical ingredients for manufacturing.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-freshlime-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Physical Shop:</strong> {siteConfig.location.fullAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-freshlime-400 shrink-0" />
                <span>
                  <strong className="text-white">Phone / WhatsApp:</strong> {siteConfig.contact.displayPhone}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-freshlime-400 shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong> {siteConfig.contact.email}
                </span>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Categories
            </h5>
            <ul className="space-y-2 text-xs">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="text-slate-300 hover:text-freshlime-400 transition text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('home');
                    scrollToTop();
                  }}
                  className="text-slate-300 hover:text-freshlime-400 transition"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('shop');
                    scrollToTop();
                  }}
                  className="text-slate-300 hover:text-freshlime-400 transition"
                >
                  All Products Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('categories');
                    scrollToTop();
                  }}
                  className="text-slate-300 hover:text-freshlime-400 transition"
                >
                  Explore Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('about');
                    scrollToTop();
                  }}
                  className="text-slate-300 hover:text-freshlime-400 transition"
                >
                  About FreshWave
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentTab('contact');
                    scrollToTop();
                  }}
                  className="text-slate-300 hover:text-freshlime-400 transition"
                >
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Shop Hours & Location */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-freshlime-400" />
              <span>Opening Hours</span>
            </h5>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>{siteConfig.hours.weekdays}</p>
              <p>{siteConfig.hours.saturday}</p>
              <p>{siteConfig.hours.sunday}</p>
              <p className="text-[11px] text-slate-400">{siteConfig.hours.holidays}</p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.location.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-freshlime-400 hover:text-freshlime-300 font-bold transition"
              >
                <span>Find Us on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-brand-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
            <p className="text-slate-400 mt-0.5">
              * Note: Catalogue prices & inventory are realistic sample data for demonstration. Final orders confirmed via WhatsApp.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-900 hover:bg-brand-800 text-slate-200 hover:text-white transition"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

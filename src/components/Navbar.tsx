import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  MapPin, 
  Search, 
  Sparkles,
  MessageCircle,
  Clock
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useCart } from '../context/CartContext';
import { formatKSh } from '../utils/formatters';
import { openGeneralInquiryWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, subtotal, setIsCartOpen } = useCart();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Catalogue' },
    { id: 'categories', label: 'Categories' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-brand-950 text-brand-100 text-xs py-2 px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1 bg-brand-800/80 px-2 py-0.5 rounded text-freshlime-400 font-medium text-[11px]">
              <MapPin className="w-3 h-3 text-freshlime-400" />
              Yellow House, Bamburi Fisheries
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-200">Mombasa, Kenya | Retail & Wholesale Chemical Supplies</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] justify-center">
            <div className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-freshlime-400" />
              <span>Mon-Sat: 8am - 6:30pm</span>
            </div>
            <button 
              onClick={() => openGeneralInquiryWhatsApp('Quick Store Inquiry')}
              className="inline-flex items-center gap-1 text-freshlime-300 hover:text-freshlime-200 font-semibold transition"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Us: {siteConfig.contact.displayPhoneShort}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="glass-nav border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-800 shadow-md group-hover:scale-105 transition-transform bg-white shrink-0 flex items-center justify-center">
                <img 
                  src="/images/freshwave-logo.jpg" 
                  alt="FreshWave Chemicals & Detergents Official Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-950 flex items-center gap-1.5">
                  FreshWave
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-freshlime-100 text-brand-800 px-1.5 py-0.5 rounded border border-freshlime-300">
                    Mombasa
                  </span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
                  Chemicals & Detergents
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'bg-brand-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-brand-900 hover:bg-brand-50/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action Icons (Search, Cart, Contact) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Search */}
              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  className="p-2.5 rounded-xl text-slate-600 hover:text-brand-900 hover:bg-slate-100 transition"
                  aria-label="Search products"
                  title="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Direct WhatsApp Call */}
              <button
                onClick={() => openGeneralInquiryWhatsApp('Quick Assistance')}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition"
                title="Direct WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Help</span>
              </button>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-freshlime-500 hover:bg-freshlime-600 text-brand-950 font-bold transition shadow-sm hover:shadow group"
                aria-label={`Shopping cart with ${totalItemsCount} items`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-2.5 -right-2.5 bg-brand-950 text-freshlime-400 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {totalItemsCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-900 leading-tight">
                    My Cart
                  </span>
                  <span className="text-xs font-extrabold text-brand-950 leading-tight">
                    {totalItemsCount > 0 ? formatKSh(subtotal) : '0.00'}
                  </span>
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 md:hidden transition"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-900 text-white'
                      : 'text-slate-700 hover:bg-brand-50 hover:text-brand-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-freshlime-400" />}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-brand-50 text-brand-950 font-bold border border-brand-200"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-800" />
                  View Shopping Cart ({totalItemsCount})
                </span>
                <span className="font-extrabold text-brand-900">{formatKSh(subtotal)}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openGeneralInquiryWhatsApp('Mobile Menu Contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold shadow-md hover:bg-emerald-700 transition"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Bamburi Shop on WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

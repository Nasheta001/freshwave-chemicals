import React from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  MessageCircle, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Flame, 
  FlaskConical, 
  Package, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { categories } from '../data/categories';
import { getFeaturedProducts, getPopularProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { openGeneralInquiryWhatsApp } from '../utils/whatsapp';

interface HomePageProps {
  onNavigateToShop: (categoryId?: string) => void;
  onNavigateToContact: () => void;
  onNavigateToAbout: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigateToShop, 
  onNavigateToContact,
  onNavigateToAbout 
}) => {
  const featuredProducts = getFeaturedProducts();
  const popularProducts = getPopularProducts();

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      {/* HERO SECTION - SWAHILI FIRST */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-emerald-950 text-white pt-8 pb-14 sm:py-16 lg:py-20">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-freshlime-400 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-emerald-400 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-800/90 border border-brand-700 text-freshlime-300 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-freshlime-400" />
                <span>Yellow House, Bamburi Fisheries • Mombasa</span>
              </div>

              {/* BOLD SWAHILI HEADLINE */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                TOA DOA NA MWOSHO MMOJA BORA!<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-freshlime-400 via-emerald-300 to-teal-200">
                  Sabuni Safi za Kiwandani Mombasa.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                FreshWave inakuletea sabuni kali zenye povu jingi: dawa za choo za <strong>Harpic style</strong>, sabuni ya <strong>mche wa bluu @100</strong>, sabuni nzito za vyombo, sabuni za kufulia, na kemikali asilia za kutengenezea sabuni. Moja kwa moja kutoka duka letu la Bamburi Fisheries kwa bei nafuu ya jumla na rejareja!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => openGeneralInquiryWhatsApp('Agizo la Haraka kutoka Homepage')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-lg shadow-emerald-950/30 transition-all duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 text-freshlime-300 group-hover:scale-110 transition-transform" />
                  <span>Agiza kwa WhatsApp: {siteConfig.contact.displayPhoneShort}</span>
                </button>

                <button
                  onClick={() => onNavigateToShop()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-freshlime-500 hover:bg-freshlime-400 text-brand-950 font-black text-sm shadow-md transition-all duration-200"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-950" />
                  <span>Tazama Sabuni Zote</span>
                  <ArrowRight className="w-4 h-4 text-brand-950" />
                </button>
              </div>

              {/* Trust Badges in Swahili */}
              <div className="pt-5 border-t border-brand-800/80 grid grid-cols-3 gap-2.5 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-freshlime-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Povu Jingi & Kali</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-freshlime-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Delivery Mombasa Nzima</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-freshlime-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Jumla na Rejareja</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card - USING THE USER'S REAL SHOP PHOTO (Packed Bottles on Shelves) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none bg-gradient-to-br from-brand-900 to-brand-800 rounded-3xl p-4 sm:p-6 shadow-2xl border border-brand-700/80">
                {/* Floating highlight */}
                <div className="absolute -top-3.5 -right-2 bg-freshlime-400 text-brand-950 px-3.5 py-1 rounded-full font-black text-xs shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-brand-950" />
                  <span>Duka la Bamburi</span>
                </div>

                <div className="space-y-4">
                  {/* Store Badge with Official Logo */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-freshlime-400 bg-white shrink-0 shadow-md flex items-center justify-center">
                      <img 
                        src="/images/freshwave-logo.jpg" 
                        alt="FreshWave Chemicals Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-sm sm:text-base">FreshWave Bamburi Store</h3>
                      <p className="text-xs text-freshlime-300 font-medium">Yellow House, Bamburi Fisheries</p>
                    </div>
                  </div>

                  {/* REAL SHOP PHOTO OF PACKED BOTTLES */}
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] relative bg-brand-950/80 border border-brand-700 shadow-inner group">
                    <img 
                      src="/images/shop-bottles.png"
                      alt="FreshWave Chemicals Duka la Bamburi Fisheries - Sabuni ziko tayari kwa delivery"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-end p-3.5 text-white">
                      <span className="inline-block bg-freshlime-400 text-brand-950 font-black text-[11px] px-2 py-0.5 rounded-md self-start mb-1 shadow">
                        Ready for Delivery
                      </span>
                      <p className="text-xs font-bold text-white drop-shadow">
                        Sabuni ziko tayari dukani Yellow House, Bamburi Fisheries
                      </p>
                    </div>
                  </div>

                  {/* Highlights list in Swahili */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-brand-950/60 border border-brand-800">
                      <span className="text-slate-300 font-medium">Dawa ya Choo & Sabuni za Maji</span>
                      <span className="font-bold text-freshlime-300">500ml hadi Mitungi ya 5L & 20L</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-brand-950/60 border border-brand-800">
                      <span className="text-slate-300 font-medium">Sabuni ya Mche Mrefu wa Bluu</span>
                      <span className="font-bold text-freshlime-300">Bei: @100 Tu</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-brand-950/60 border border-brand-800">
                      <span className="text-slate-300 font-medium">Kemikali za Sabuni</span>
                      <span className="font-bold text-freshlime-300">LABSA, SLES, Caustic, Soda Ash</span>
                    </div>
                  </div>

                  <button
                    onClick={onNavigateToContact}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition flex items-center justify-center gap-1.5"
                  >
                    <span>Saa za Kazi & Maelekezo ya Kufika Dukani</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SWAHILI PROMO BANNER: "TOA DOA NA MWOSHO MMOJA BORA" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 via-brand-800 to-brand-900 rounded-3xl p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-700">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider bg-freshlime-400 text-brand-950 px-3 py-1 rounded-full">
              Hapa Hakuna Kupoteza Wakati
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              TOA DOA NA MWOSHO MMOJA BORA!
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Sabuni zetu zina nguvu ya asili ya kuondoa madoa ya mafuta, kutu, tope na harufu mbaya bila kuharibu nguo au mikono yako.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => openGeneralInquiryWhatsApp('Ninataka kuagiza sabuni ya kuondoa doa')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-freshlime-400 hover:bg-freshlime-300 text-brand-950 font-black text-xs shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agiza kwa WhatsApp Sasa</span>
            </button>
            <button
              onClick={() => onNavigateToShop('laundry')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition"
            >
              <span>Sabuni za Kufulia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-freshlime-600" />
              <span>Bidhaa Zote</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Chagua Aina ya Sabuni (Categories)
            </h2>
          </div>
          <button
            onClick={() => onNavigateToShop()}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 transition group"
          >
            <span>Tazama Sabuni Zote Dukani</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigateToShop(cat.id)}
              className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-brand-300 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
                    {cat.badge || 'Catalogue'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-800 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-brand-900 transition-colors leading-snug">
                  {cat.name}
                </h3>

                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-900">
                <span>Tazama Bidhaa</span>
                <span className="text-freshlime-600 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED REAL PRODUCTS: HARPIC TOILET CLEANER, BLUE BAR SOAP @100, TOILET BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 uppercase tracking-wider mb-1">
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              <span>Bidhaa Zinazopendwa Zaidi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Sabuni Zinazoongoza kwa Mauzo
            </h2>
          </div>
          <button
            onClick={() => onNavigateToShop()}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 transition group"
          >
            <span>Tazama Zote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* RAW CHEMICALS FOR SOAP MAKERS (KEMIKALI ZA SABUNI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-950 via-brand-900 to-slate-900 text-white p-7 sm:p-10 border border-brand-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-freshlime-400 text-brand-950 text-xs font-black uppercase tracking-wide">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Kwa Watengenezaji wa Sabuni Mombasa</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
              Unatengeneza Sabuni Mombasa? Tunauza Kemikali Asilia na Machupa.
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Usihangaike kutafuta Nairobi! Duka letu la Bamburi lina kemikali zote safi: <strong>LABSA 96%</strong>, <strong>SLES 70% paste</strong>, <strong>Caustic Soda flakes 99%</strong>, <strong>Soda Ash</strong>, chumvi ya viwandani ya unene, mafuta ya manukato (perfumes) na machupa ya plastiki ya HDPE.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigateToShop('raw-chemicals')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-freshlime-500 hover:bg-freshlime-400 text-brand-950 font-black text-xs transition shadow-lg"
              >
                <span>Tazama Kemikali Zote (LABSA & SLES)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToShop('packaging')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition"
              >
                <Package className="w-4 h-4 text-freshlime-400" />
                <span>Machupa & Mitungi</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR ESSENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-freshlime-600" />
              <span>Mahitaji ya Kila Siku</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Sabuni Nyingine Pendwa
            </h2>
          </div>
          <button
            onClick={() => onNavigateToShop()}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 hover:text-brand-950 transition"
          >
            <span>Tazama Zote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {popularProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BAMBURI LOCATION & VISIT US BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Duka Letu Bamburi</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Fika Dukani Kwetu: Yellow House, Bamburi Fisheries
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Karibu sana dukani kwetu Bamburi Fisheries ujionee sabuni, dawa za choo, na ununue kwa rejareja au mitungi ya jumla (5L na 20L). Pia tunatuma delivery kwa bodaboda au gari popote ulipo Mombasa (Nyali, Bamburi Mtambo, Kisauni, Shanzu, Mtwapa, Town).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Mahali Lilipo Duka:</span>
                <p className="text-slate-600 mt-0.5">{siteConfig.location.fullAddress}</p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Saa za Kazi:</span>
                <p className="text-slate-600 mt-0.5">Jumatatu – Jumamosi: 8:00 AM – 6:30 PM</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.location.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs transition"
              >
                <span>Fungua Ramani ya Google (Directions)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
              >
                <span>Mawasiliano na Saa za Kazi</span>
              </button>

              <button
                onClick={onNavigateToAbout}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-brand-900 font-bold text-xs border border-emerald-200 transition"
              >
                <span>Kuhusu FreshWave</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-brand-900 to-emerald-900 rounded-2xl p-6 text-white space-y-4">
            <h4 className="font-black text-lg text-white">Kwa Nini Wateja Wanatuchagua?</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-freshlime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Sabuni Nzito Asilia:</strong> Sabuni zetu hazijaongezwa maji kupita kiasi. Kidogo tu kinaleta povu kubwa na kutoa doa.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-freshlime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Ujazo Mbalimbali:</strong> Chupa za 500ml, lita 1, mitungi ya 5L, na madumu ya 20L kwa mahoteli na laundries.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-freshlime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Agizo Rahisi kwa WhatsApp:</strong> Chagua sabuni unazotaka, weka kwenye kikapu, agiza kwa WhatsApp: <strong>{siteConfig.contact.displayPhoneShort}</strong>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

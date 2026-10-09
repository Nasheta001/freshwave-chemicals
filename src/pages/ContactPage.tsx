import React, { useState } from 'react';
import { 
  MapPin, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Navigation, 
  CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { buildWhatsAppUrl, openGeneralInquiryWhatsApp } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Bulk Order Inquiry');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim()) return;

    const message = 
      `🌊 *WEBSITE CONTACT INQUIRY - ${siteConfig.businessName}*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${inquiryName.trim()}\n` +
      `📱 *Phone:* ${inquiryPhone.trim() || 'Not provided'}\n` +
      `📌 *Topic:* ${inquiryTopic}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💬 *Message:* \n${inquiryMessage.trim() || 'I would like to inquire about your products and delivery in Mombasa.'}\n\n` +
      `_Sent from FreshWave Contact Page_`;

    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');

    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-brand-800 shadow-xl bg-white flex items-center justify-center">
          <img 
            src="/images/freshwave-logo.jpg" 
            alt="FreshWave Chemicals Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Yellow House, Bamburi Fisheries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Visit Us or Reach Out on WhatsApp
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          We are located at Yellow House, Bamburi Fisheries in Mombasa. Whether you need a 500ml cleaner or a 200L chemical drum, our team is ready to serve you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Shop Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Location Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-900">
                <MapPin className="w-6 h-6 text-brand-800" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Physical Store</h3>
                <p className="text-xs text-brand-700 font-semibold">{siteConfig.location.city}, Kenya</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="font-bold text-slate-900 block mb-0.5">Physical Address:</span>
                <p className="text-brand-950 font-bold">{siteConfig.location.fullAddress}</p>
                <p className="text-[11px] text-slate-500 mt-1">{siteConfig.location.directionsHint}</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="font-bold text-slate-900 block mb-0.5">Mombasa Delivery Areas:</span>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Bamburi, Nyali, Shanzu, Kisauni, Mombasa Island CBD, Likoni, Mtwapa, and countrywide courier parcel dispatch.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.location.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs shadow transition"
            >
              <Navigation className="w-3.5 h-3.5 text-freshlime-400" />
              <span>Open Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Operating Hours</h3>
                <p className="text-[11px] text-slate-500">Bamburi Shop Schedule</p>
              </div>
            </div>

            <div className="space-y-2 text-xs divide-y divide-slate-100">
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-600">Monday – Friday</span>
                <span className="font-bold text-slate-900">8:00 AM – 6:30 PM</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-600">Saturday</span>
                <span className="font-bold text-slate-900">8:30 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-600">Sunday</span>
                <span className="font-bold text-slate-900">10:00 AM – 3:00 PM</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-600">Public Holidays</span>
                <span className="font-bold text-slate-900">9:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Contact Pill */}
          <div className="bg-gradient-to-br from-emerald-700 to-brand-900 rounded-3xl p-6 text-white space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-freshlime-300 text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Hotline</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Have a question about product stock or need a quick price calculation for bulk drums?
            </p>
            <div className="text-base font-black text-white">
              {siteConfig.contact.displayPhone}
            </div>
            <button
              onClick={() => openGeneralInquiryWhatsApp('Contact Page Quick Button')}
              className="w-full py-3 rounded-xl bg-freshlime-400 hover:bg-freshlime-300 text-brand-950 font-extrabold text-xs transition shadow"
            >
              Start WhatsApp Chat Now
            </button>
          </div>
        </div>

        {/* Right Column: Direct Message Form & Map Simulation */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-5">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Send Us a Direct Inquiry
              </h3>
              <p className="text-xs text-slate-500">
                Fill this quick form and it will prepare a customized WhatsApp message directly to our Bamburi store.
              </p>
            </div>

            {sentNotice && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Opening WhatsApp with your inquiry message...</span>
              </div>
            )}

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel Mwangi"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 0722 000 000"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryTopic}
                  onChange={(e) => setInquiryTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700 bg-white"
                >
                  <option value="Bulk Order Inquiry">Wholesale & Bulk Order Quotation</option>
                  <option value="Raw Chemical Formulation Help">Raw Chemicals (LABSA, SLES, Caustic)</option>
                  <option value="Packaging Bottles & Containers">Bottles & Plastic Jerrycans</option>
                  <option value="Household Detergent Purchase">Household / Laundry Detergents</option>
                  <option value="Delivery to My Location in Mombasa">Mombasa Delivery Question</option>
                  <option value="General Store Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Message or Product List
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe what products or quantities you need..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Send via WhatsApp to FreshWave Store</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                * Note: Your message is sent straight to WhatsApp for immediate conversation.
              </p>
            </form>
          </div>

          {/* Map Preview Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-emerald-600" />
                <span className="font-extrabold text-slate-900 text-xs">Shop Map & Vicinity</span>
              </div>
              <span className="text-[11px] text-brand-800 font-bold bg-brand-50 px-2 py-0.5 rounded">
                Bamburi Fisheries Area
              </span>
            </div>

            {/* Simulated Map Visual */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/80 via-emerald-950/60 to-slate-900/80 flex flex-col items-center justify-center p-6 text-center text-white space-y-2">
                <div className="w-12 h-12 rounded-full bg-freshlime-400 text-brand-950 flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-black text-lg text-white">Yellow House, Bamburi Fisheries</h4>
                <p className="text-xs text-slate-200 max-w-sm">
                  Off the Bamburi road link, Mombasa, Kenya. Convenient parking and vehicle loading space for bulk jerrycans.
                </p>
                <a
                  href={siteConfig.location.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-brand-950 font-bold text-xs shadow hover:bg-slate-100 transition"
                >
                  <span>Open Interactive Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

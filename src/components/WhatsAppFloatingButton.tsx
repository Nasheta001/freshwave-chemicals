import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openGeneralInquiryWhatsApp } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-end gap-3 group">
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-brand-950">Chat with FreshWave</span>
            <span className="text-[10px] text-slate-500">Ask questions or order custom batches</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => openGeneralInquiryWhatsApp('Website Inquiries')}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200 relative"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-freshlime-400 border-2 border-emerald-500 rounded-full animate-ping"></span>
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-freshlime-400 border-2 border-emerald-500 rounded-full"></span>
      </button>
    </div>
  );
};

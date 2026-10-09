import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShoppingCart, 
  MessageCircle, 
  Check, 
  ShieldAlert, 
  Sparkles, 
  Info, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatKSh } from '../utils/formatters';
import { getCategoryName } from '../data/categories';
import { siteConfig } from '../config/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const ProductModal: React.FC = () => {
  const { activeProductModal, setActiveProductModal, addToCart, setIsCartOpen } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (activeProductModal) {
      setSelectedVariantIndex(activeProductModal.defaultVariantIndex || 0);
      setQuantity(1);
      setAdded(false);
      setImgError(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProductModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProductModal, setActiveProductModal]);

  if (!activeProductModal) return null;

  const currentVariant = activeProductModal.variants[selectedVariantIndex] || activeProductModal.variants[0];
  const unitPrice = currentVariant.salePrice ?? currentVariant.price;
  const totalPrice = unitPrice * quantity;
  const hasSale = currentVariant.salePrice !== undefined && currentVariant.salePrice < currentVariant.price;

  const handleAddToCart = () => {
    addToCart(activeProductModal, currentVariant, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setActiveProductModal(null);
      setIsCartOpen(true);
    }, 600);
  };

  const handleDirectWhatsAppOrder = () => {
    const message = 
      `🌊 *QUICK INQUIRY / ORDER - ${siteConfig.businessName}*\n` +
      `Product: *${activeProductModal.name}*\n` +
      `Packaging / Size: *${currentVariant.size}*\n` +
      `Quantity: *${quantity}*\n` +
      `Estimated Price: *${formatKSh(totalPrice)}*\n\n` +
      `Please let me know if this is currently available for pickup at Bamburi Yellow House or delivery in Mombasa. Thank you!`;

    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveProductModal(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-slate-100 shadow-md transition"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2">
          {/* Image & Highlights */}
          <div className="relative bg-slate-100 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-200">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-inner">
              {imgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-brand-50 text-brand-900">
                  <Sparkles className="w-12 h-12 text-freshlime-500 mb-2" />
                  <span className="font-bold text-lg">{activeProductModal.name}</span>
                </div>
              ) : (
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              )}

              {/* Status pill */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock at Bamburi
                </span>
                {hasSale && (
                  <span className="bg-rose-500 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-sm">
                    Special Offer
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 w-full bg-emerald-50 rounded-xl p-3 border border-emerald-100 text-xs text-brand-950 flex items-start gap-2">
              <Info className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-900">Collection & Mombasa Delivery Available</p>
                <p className="text-slate-600 mt-0.5">Collect at Yellow House, Bamburi Fisheries or request delivery straight to your doorstep.</p>
              </div>
            </div>
          </div>

          {/* Details & Actions */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              {/* Category */}
              <div className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1.5">
                {getCategoryName(activeProductModal.category)}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {activeProductModal.name}
              </h2>

              {/* Tagline */}
              <p className="text-sm text-brand-800 font-medium mt-1">
                {activeProductModal.tagline}
              </p>

              {/* Pricing */}
              <div className="mt-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Selected Size Unit Price</div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-black text-brand-950">
                      {formatKSh(unitPrice)}
                    </span>
                    {hasSale && (
                      <span className="text-sm text-slate-400 line-through">
                        {formatKSh(currentVariant.price)}
                      </span>
                    )}
                  </div>
                </div>
                {quantity > 1 && (
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-medium">Total ({quantity} units)</div>
                    <div className="text-xl font-extrabold text-brand-700">
                      {formatKSh(totalPrice)}
                    </div>
                  </div>
                )}
              </div>

              {/* Packaging / Variant Selection */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Packaging / Size:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {activeProductModal.variants.map((v, index) => (
                    <button
                      key={v.size}
                      type="button"
                      onClick={() => setSelectedVariantIndex(index)}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl border flex flex-col items-start transition ${
                        selectedVariantIndex === index
                          ? 'border-brand-900 bg-brand-900 text-white shadow-sm'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold">{v.size}</span>
                      <span className={selectedVariantIndex === index ? 'text-freshlime-300' : 'text-slate-500'}>
                        {formatKSh(v.salePrice ?? v.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1.5 rounded-lg hover:bg-white text-slate-700 transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-slate-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1.5 rounded-lg hover:bg-white text-slate-700 transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                <p>{activeProductModal.description}</p>
              </div>

              {/* Usage / Dilution Hints */}
              {activeProductModal.dilutionRatio && (
                <div className="mt-3 p-2.5 rounded-xl bg-freshlime-50/80 border border-freshlime-200 text-xs text-slate-800">
                  <span className="font-bold text-brand-900 block">Recommended Ratio:</span>
                  <p className="mt-0.5">{activeProductModal.dilutionRatio}</p>
                </div>
              )}

              {/* Safety Warning */}
              {activeProductModal.safetyInfo && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Handling Precautions:</span>
                    <p className="mt-0.5">{activeProductModal.safetyInfo}</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={added}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm bg-brand-900 hover:bg-brand-800 text-white transition flex items-center justify-center gap-2 shadow-md shadow-brand-950/10"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-freshlime-400" />
                    <span>Imewekwa Kwenye Kikapu!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 text-freshlime-400" />
                    <span>Weka Kwenye Kikapu ({formatKSh(totalPrice)})</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDirectWhatsAppOrder}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Uliza kwa WhatsApp ({siteConfig.contact.displayPhoneShort})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

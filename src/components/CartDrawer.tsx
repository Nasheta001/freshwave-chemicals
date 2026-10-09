import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  Store, 
  Truck, 
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatKSh } from '../utils/formatters';
import { siteConfig } from '../config/siteConfig';
import { CheckoutDetails, FulfillmentMethod } from '../types';
import { openWhatsAppOrder } from '../utils/whatsapp';

interface CartDrawerProps {
  onNavigateToShop?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToShop }) => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    totalItemsCount, 
    subtotal 
  } = useCart();

  const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetails>({
    customerName: '',
    phone: '',
    fulfillment: 'pickup',
    deliveryLocation: '',
    deliveryNotes: '',
  });

  const [nameError, setNameError] = useState(false);

  if (!isCartOpen) return null;

  const handleFulfillmentChange = (method: FulfillmentMethod) => {
    setCheckoutDetails((prev) => ({
      ...prev,
      fulfillment: method,
    }));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkoutDetails.customerName.trim()) {
      setNameError(true);
      // Focus on name input
      const nameInput = document.getElementById('customer-name-input');
      nameInput?.focus();
      return;
    }

    setNameError(false);

    // Open WhatsApp order
    openWhatsAppOrder(items, checkoutDetails, subtotal);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-brand-950 text-white flex items-center justify-between border-b border-brand-900">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-freshlime-500/20 flex items-center justify-center text-freshlime-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold tracking-tight">Your Shopping Cart</h2>
                <p className="text-xs text-brand-200">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-brand-200 hover:text-white hover:bg-brand-900 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          {items.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Your Cart is Empty</h3>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Add quality detergents, cleaning essentials, or raw chemical ingredients from our Bamburi catalogue to get started.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  if (onNavigateToShop) onNavigateToShop();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs shadow-md transition"
              >
                <span>Browse Catalogue</span>
                <ArrowRight className="w-4 h-4 text-freshlime-400" />
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto flex flex-col justify-between">
              {/* Items List */}
              <div className="p-4 sm:p-5 space-y-3.5 divide-y divide-slate-100">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Selected Products
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Cart</span>
                  </button>
                </div>

                {items.map((item) => (
                  <div key={item.id} className="pt-3 flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <div className="text-[11px] text-brand-700 font-semibold mt-0.5">
                        Size: {item.size}
                      </div>
                      <div className="text-xs font-extrabold text-slate-900 mt-1">
                        {formatKSh(item.price)} each
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded hover:bg-white text-slate-600 transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-white text-slate-600 transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div className="text-xs font-black text-brand-950">
                          {formatKSh(item.price * item.quantity)}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkout Form & WhatsApp Action */}
              <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 space-y-4">
                {/* Total Pill */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold">Subtotal</span>
                    <p className="text-[11px] text-slate-400">Total payable for items</p>
                  </div>
                  <div className="text-2xl font-black text-brand-950">
                    {formatKSh(subtotal)}
                  </div>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="space-y-3.5">
                  {/* Customer Name */}
                  <div>
                    <label 
                      htmlFor="customer-name-input"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Jina Lako (Your Name) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="customer-name-input"
                      type="text"
                      required
                      placeholder="Mfano: Amina Hassan"
                      value={checkoutDetails.customerName}
                      onChange={(e) => {
                        setCheckoutDetails({ ...checkoutDetails, customerName: e.target.value });
                        if (nameError) setNameError(false);
                      }}
                      className={`w-full px-3 py-2 text-xs rounded-xl border bg-white focus:outline-none focus:ring-2 ${
                        nameError
                          ? 'border-rose-400 focus:ring-rose-200 ring-2 ring-rose-100'
                          : 'border-slate-300 focus:ring-brand-500/20 focus:border-brand-700'
                      }`}
                    />
                    {nameError && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> Tafadhali andika jina lako ili kuendelea.
                      </p>
                    )}
                  </div>

                  {/* Customer Phone (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nambari ya Simu (Phone Number)
                    </label>
                    <input
                      type="tel"
                      placeholder="Mfano: 0712 345 678"
                      value={checkoutDetails.phone || ''}
                      onChange={(e) =>
                        setCheckoutDetails({ ...checkoutDetails, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700"
                    />
                  </div>

                  {/* Fulfillment Method */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ungependa Kuchukua Dukani au Kutumiwa?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleFulfillmentChange('pickup')}
                        className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition ${
                          checkoutDetails.fulfillment === 'pickup'
                            ? 'bg-brand-900 text-white border-brand-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                          <Store className="w-3.5 h-3.5" />
                          <span>Kujichukulia Dukani</span>
                        </div>
                        <span className={`text-[10px] leading-tight ${
                          checkoutDetails.fulfillment === 'pickup' ? 'text-freshlime-300' : 'text-slate-500'
                        }`}>
                          Yellow House, Bamburi
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleFulfillmentChange('delivery')}
                        className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition ${
                          checkoutDetails.fulfillment === 'delivery'
                            ? 'bg-brand-900 text-white border-brand-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                          <Truck className="w-3.5 h-3.5" />
                          <span>Kutumiwa (Delivery)</span>
                        </div>
                        <span className={`text-[10px] leading-tight ${
                          checkoutDetails.fulfillment === 'delivery' ? 'text-freshlime-300' : 'text-slate-500'
                        }`}>
                          Mombasa na kwingineko
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Delivery Location Field (if delivery chosen) */}
                  {checkoutDetails.fulfillment === 'delivery' && (
                    <div className="animate-in fade-in duration-150">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Unapatikana Wapi? (Delivery Location)
                      </label>
                      <input
                        type="text"
                        placeholder="Mfano: Bamburi Mtambo, Nyali, Shanzu, Kisauni, Mtwapa, Town"
                        value={checkoutDetails.deliveryLocation}
                        onChange={(e) =>
                          setCheckoutDetails({
                            ...checkoutDetails,
                            deliveryLocation: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700"
                      />
                    </div>
                  )}

                  {/* Special Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ujumbe wa Ziada / Maelekezo (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mfano: Piga simu ukifika, leta kabla ya saa nane, leta chenji..."
                      value={checkoutDetails.deliveryNotes || ''}
                      onChange={(e) =>
                        setCheckoutDetails({
                          ...checkoutDetails,
                          deliveryNotes: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700 resize-none"
                    />
                  </div>

                  {/* Explanatory Notice */}
                  <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-3 text-[11px] text-emerald-950 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-emerald-900">Jinsi Agizo Linavyothibitishwa:</p>
                      <p className="text-emerald-800 mt-0.5 leading-snug">
                        Agizo lako litafunguka WhatsApp moja kwa moja. Utathibitishiwa mzigo wako na utaratibu wa malipo ya M-Pesa.
                      </p>
                    </div>
                  </div>

                  {/* Checkout on WhatsApp Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Agiza kwa WhatsApp ({formatKSh(subtotal)})</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    Nambari ya WhatsApp ya Duka la FreshWave: {siteConfig.contact.displayPhoneShort}
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

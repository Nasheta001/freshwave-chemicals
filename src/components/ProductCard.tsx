import React, { useState } from 'react';
import { ShoppingCart, Eye, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatKSh } from '../utils/formatters';
import { getCategoryName } from '../data/categories';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setActiveProductModal } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(product.defaultVariantIndex || 0);
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const [imgError, setImgError] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const hasSale = currentVariant.salePrice !== undefined && currentVariant.salePrice < currentVariant.price;
  const currentPrice = currentVariant.salePrice ?? currentVariant.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, currentVariant, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1500);
  };

  return (
    <div 
      onClick={() => setActiveProductModal(product)}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-emerald-50 to-brand-100 text-brand-900 text-center">
            <Sparkles className="w-10 h-10 text-freshlime-600 mb-2" />
            <span className="font-bold text-sm">{product.name}</span>
            <span className="text-xs text-brand-700 mt-1">{getCategoryName(product.category)}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-col gap-1 items-start">
            {product.featured && (
              <span className="bg-brand-900 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                Featured
              </span>
            )}
            {product.isNew && (
              <span className="bg-freshlime-400 text-brand-950 text-[11px] font-black px-2 py-0.5 rounded-md shadow-sm">
                NEW
              </span>
            )}
          </div>

          {hasSale && (
            <span className="bg-rose-500 text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-sm">
              SAVE {formatKSh(currentVariant.price - (currentVariant.salePrice || 0))}
            </span>
          )}
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveProductModal(product);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white text-slate-800 text-xs font-bold shadow-md transition"
            title="Quick view product specs"
          >
            <Eye className="w-3.5 h-3.5 text-brand-700" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Stock Tag */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span className="font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md text-[11px]">
              {getCategoryName(product.category)}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              In Stock
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-900 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Short Tagline */}
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 mb-3">
            {product.tagline || product.description}
          </p>

          {/* Variant / Packaging Size Selector */}
          {product.variants.length > 1 && (
            <div className="mb-3.5" onClick={(e) => e.stopPropagation()}>
              <div className="text-[11px] font-semibold text-slate-600 mb-1.5 flex items-center justify-between">
                <span>Select Packaging / Size:</span>
                <span className="text-brand-900 font-bold">{currentVariant.size}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.map((v, idx) => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`px-2 py-1 text-xs font-semibold rounded-lg border transition ${
                      selectedVariantIndex === idx
                        ? 'bg-brand-900 text-white border-brand-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing and Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="text-[10px] uppercase font-semibold text-slate-400">
              Price ({currentVariant.size})
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-brand-950">
                {formatKSh(currentPrice)}
              </span>
              {hasSale && (
                <span className="text-xs text-slate-400 line-through">
                  {formatKSh(currentVariant.price)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition duration-200 shadow-sm ${
              isAddedRecently
                ? 'bg-brand-800 text-white'
                : 'bg-brand-900 hover:bg-brand-800 text-white group-hover:bg-brand-900'
            }`}
            title="Add to order cart"
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4 text-freshlime-400" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-freshlime-400" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

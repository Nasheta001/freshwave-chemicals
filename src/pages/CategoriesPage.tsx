import React from 'react';
import { Sparkles, ArrowRight, Package, Droplets, Shirt, UtensilsCrossed, ShieldCheck, FlaskConical } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductCategory } from '../types';

interface CategoriesPageProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ onSelectCategory }) => {
  const getIcon = (id: ProductCategory) => {
    switch (id) {
      case 'household':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'laundry':
        return <Shirt className="w-6 h-6 text-sky-600" />;
      case 'dishwashing':
        return <UtensilsCrossed className="w-6 h-6 text-lime-600" />;
      case 'personal-care':
        return <Droplets className="w-6 h-6 text-teal-600" />;
      case 'disinfectants':
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
      case 'raw-chemicals':
        return <FlaskConical className="w-6 h-6 text-amber-600" />;
      case 'packaging':
        return <Package className="w-6 h-6 text-indigo-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-brand-800 shadow-md bg-white flex items-center justify-center">
          <img 
            src="/images/freshwave-logo.jpg" 
            alt="FreshWave Chemicals Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          <Sparkles className="w-3.5 h-3.5 text-freshlime-600" />
          <span>Aina za Sabuni & Kemikali</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Browse by Category
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          From everyday home sparkle to industrial chemicals for hotel kitchens, laundries, and manufacturers.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const categoryProducts = products.filter((p) => p.category === cat.id);
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-brand-300 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(cat.id)}
                  </div>
                  <span className="text-xs font-bold text-brand-800 bg-freshlime-100/80 px-2.5 py-1 rounded-full border border-freshlime-300">
                    {categoryProducts.length} Products
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-900 transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {cat.shortDescription}
                </p>

                {/* Sample items preview */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Featured in this category:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {categoryProducts.slice(0, 3).map((item) => (
                      <li key={item.id} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-freshlime-500 shrink-0"></span>
                        <span className="truncate">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-brand-900">
                <span>Shop this category</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-freshlime-600" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

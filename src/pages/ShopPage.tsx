import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  ArrowUpDown, 
  Info,
  PackageOpen
} from 'lucide-react';
import { products } from '../data/products';
import { categories, getCategoryById } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../types';
import { siteConfig } from '../config/siteConfig';

interface ShopPageProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory && selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = product.name.toLowerCase().includes(q);
          const matchTagline = product.tagline.toLowerCase().includes(q);
          const matchDescription = product.description.toLowerCase().includes(q);
          const matchCategory = product.category.toLowerCase().includes(q);
          if (!matchName && !matchTagline && !matchDescription && !matchCategory) {
            return false;
          }
        }

        // In Stock filter
        if (onlyInStock) {
          const hasInStock = product.variants.some((v) => v.inStock);
          if (!hasInStock) return false;
        }

        return true;
      })
      .sort((a, b) => {
        const getEffectivePrice = (prod: typeof a) => {
          const v = prod.variants[prod.defaultVariantIndex] || prod.variants[0];
          return v.salePrice ?? v.price;
        };

        if (sortBy === 'price-asc') {
          return getEffectivePrice(a) - getEffectivePrice(b);
        }
        if (sortBy === 'price-desc') {
          return getEffectivePrice(b) - getEffectivePrice(a);
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        // 'featured'
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [selectedCategory, searchQuery, onlyInStock, sortBy]);

  const activeCategoryObj = selectedCategory !== 'all' ? getCategoryById(selectedCategory as ProductCategory) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Title & Search Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-freshlime-600" />
            <span>Mombasa Store Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Chemicals & Detergents Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Browse our full stock of detergents, cleaning chemicals, packaging bottles, and raw formulation materials.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="Search products, chemicals, bottles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl border border-slate-300 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-700 shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2.5"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Catalogue Sample Notice */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-950">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-900">Catalogue Notice:</span>
          <p className="text-amber-800 mt-0.5 leading-relaxed">
            {siteConfig.commerce.sampleCatalogueNotice}
          </p>
        </div>
      </div>

      {/* Category Pills Slider / Bar */}
      <div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-brand-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            All Products ({products.length})
          </button>

          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-brand-800 text-freshlime-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Intro Banner */}
        {activeCategoryObj && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-brand-900 text-sm">{activeCategoryObj.name}</span>
              <p className="text-slate-600 mt-0.5">{activeCategoryObj.shortDescription}</p>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-bold text-brand-800 hover:text-brand-950 underline shrink-0"
            >
              Clear category filter
            </button>
          </div>
        )}
      </div>

      {/* Sorting & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200/80">
        <div className="flex items-center gap-4 text-xs">
          <span className="font-bold text-slate-700">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
          </span>

          {/* In Stock toggle */}
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600 font-medium">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={(e) => setOnlyInStock(e.target.checked)}
              className="w-4 h-4 rounded text-brand-900 focus:ring-brand-500 border-slate-300"
            />
            <span>In Stock Only</span>
          </label>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 font-semibold">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <PackageOpen className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No Matching Products Found</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We couldn't find any chemical or detergent products matching "{searchQuery}". Try clearing search filters or choosing a different category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setOnlyInStock(false);
            }}
            className="px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs shadow transition"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

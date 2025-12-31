import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Men', 'Women', 'Sunglasses', 'Blue Light'];

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory || (activeCategory === 'Men' && p.category === 'Unisex') || (activeCategory === 'Women' && p.category === 'Unisex'));

  return (
    <div className="pt-28 md:pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 md:mb-16 reveal">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Explore the Collection</h1>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center border-b border-black/5 pb-8">
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] md:text-sm uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat ? 'font-bold' : 'text-zinc-400 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="sm:ml-auto text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">
              Showing {filteredProducts.length} results
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className={`reveal delay-${(idx % 3 + 1) * 100}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-zinc-50 rounded-lg reveal">
            <h3 className="text-xl font-medium text-zinc-400">No products found in this category.</h3>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-black underline underline-offset-4 uppercase text-xs tracking-widest font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
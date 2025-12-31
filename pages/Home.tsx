import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-white py-20 md:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1 reveal delay-100">
            <p className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mb-4 text-zinc-400">Established 1998 • Janakpuri</p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
              VISION <br /> 
              <span className="text-zinc-300">PLAZA.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-md mx-auto md:mx-0 leading-relaxed mb-10">
              Discover West Delhi's premier curated eyewear collection. Merging high-fashion aesthetics with technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate(Page.Shop)}
                className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm"
              >
                Shop Collection
              </button>
              <button 
                onClick={() => onNavigate(Page.About)}
                className="border border-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all rounded-sm"
              >
                Our Story
              </button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center order-1 md:order-2 reveal delay-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-zinc-100 rounded-full animate-float opacity-50"></div>
            <div className="absolute top-10 right-10 w-8 h-8 md:w-12 md:h-12 border border-black rounded-full animate-ping opacity-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Specs" 
              className="relative z-10 w-full max-w-sm lg:max-w-lg grayscale rounded-lg shadow-2xl hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left reveal">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Janakpuri Favorites</h2>
              <p className="text-zinc-500 max-w-md">Handpicked essentials for the discerning wearer, crafted for comfort and undeniable style.</p>
            </div>
            <button 
              onClick={() => onNavigate(Page.Shop)}
              className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
            >
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PRODUCTS.slice(0, 3).map((product, idx) => (
              <div key={product.id} className={`reveal delay-${(idx + 1) * 100}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Brand Story Snippet */}
      <section className="py-24 md:py-32 bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 border border-black text-[10px] uppercase tracking-widest mb-8">Locally Rooted</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 px-2">From Janakpuri to the World.</h2>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-12 italic font-light">
            "We believe that spectacles are more than just a vision aid; they are a conversation piece. Located in the heart of Janakpuri, we've spent two decades defining the look of the neighborhood."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale">
            <span className="text-xs uppercase tracking-[0.2em] font-bold w-full md:w-auto mb-4 md:mb-0">As seen in</span>
            <div className="hidden md:block h-[1px] w-12 bg-black"></div>
            <span className="font-serif italic text-lg">Delhi Times</span>
            <span className="font-serif italic text-lg">Hindustan Times</span>
            <span className="font-serif italic text-lg">Lifestyle</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
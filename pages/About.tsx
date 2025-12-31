import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-28 md:pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 reveal delay-100">
            <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-black mb-8 inline-block">Since 1998</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Crafting Vision <br className="hidden md:block" /> in Vision Plaza.</h1>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
              What started as a small workshop in the C-Block of Janakpuri has evolved into a hallmark of style for West Delhi. At Vision Plaza, we don't just sell spectacles; we engineer optical experiences.
            </p>
            <div className="space-y-8">
              <div className="reveal delay-200">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Our Quality</h3>
                <p className="text-zinc-500 text-sm md:text-base">Every frame is inspected by our senior optometrists who have been with us for decades. We source high-grade acetate and titanium from the finest suppliers globally.</p>
              </div>
              <div className="reveal delay-300">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Community First</h3>
                <p className="text-zinc-500 text-sm md:text-base">Janakpuri isn't just a location for us; it's our heritage. We actively support local community health initiatives and provide eye-care camps twice a year.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 reveal delay-200">
            <div className="aspect-[4/5] bg-zinc-100 rounded-lg overflow-hidden grayscale">
              <img 
                src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=1200" 
                alt="Workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* 2D Animation Element */}
            <div className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 border-[20px] border-zinc-100 rounded-full animate-float -z-10"></div>
            <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-black text-white p-6 md:p-8 w-40 md:w-48 shadow-2xl">
              <div className="text-3xl md:text-4xl font-bold mb-1">25+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">Years of Excellence</div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-16 md:pt-20">
          <div className="reveal delay-100">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-black flex items-center justify-center mb-6 text-sm font-bold">1</div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4">The Selection</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Curated collections from heritage brands and upcoming indie designers from around the globe.</p>
          </div>
          <div className="reveal delay-200">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-black flex items-center justify-center mb-6 text-sm font-bold">2</div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4">The Precision</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Advanced lens grinding and fitting using digital mapping technology for perfect alignment.</p>
          </div>
          <div className="reveal delay-300">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-black flex items-center justify-center mb-6 text-sm font-bold">3</div>
            <h4 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-4">The Guarantee</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Lifetime adjustments and a 2-year warranty on all premium frame structures.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-black/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
            <div className="text-xl md:text-2xl font-bold tracking-tighter mb-6 uppercase">VISION<span className="font-light">PLAZA</span></div>
            <p className="text-zinc-500 max-w-sm mx-auto sm:mx-0 leading-relaxed mb-8 text-sm md:text-base">
              Bespoke eyewear destination in West Delhi. Visit our flagship store for a personalized styling experience.
            </p>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">Instagram</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">Facebook</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">Twitter</a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-zinc-400">Visit Us</h4>
            <address className="not-italic text-sm text-zinc-500 space-y-2">
              <p>Plot 42, Main Road</p>
              <p>C-Block, Janakpuri</p>
              <p>New Delhi, 110058</p>
              <p className="pt-2 text-black font-medium">+91 98765 43210</p>
            </address>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-zinc-400">Opening Hours</h4>
            <div className="text-sm text-zinc-500 space-y-2">
              <div className="flex justify-between max-w-[200px] mx-auto sm:mx-0">
                <span>Mon - Sat</span>
                <span>10:00 - 20:30</span>
              </div>
              <div className="flex justify-between max-w-[200px] mx-auto sm:mx-0">
                <span>Sunday</span>
                <span>11:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-12 text-[10px] text-zinc-400 uppercase tracking-widest font-medium text-center space-y-6 md:space-y-0">
          <p>© 2024 Vision Plaza. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'About', value: Page.About },
    { label: 'Shop', value: Page.Shop },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-[100] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div
            className="text-xl font-bold tracking-tighter cursor-pointer"
            onClick={() => handleNavClick(Page.Home)}
          >
            VISION<span className="font-light ml-1">PLAZA</span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`relative px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                  currentPage === item.value ? 'text-black font-bold' : 'text-zinc-400 font-medium hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="w-8"></div>
            <button
              onClick={() => handleNavClick(Page.Shop)}
              className="bg-black text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-sm"
            >
              Cart (0)
            </button>
          </div>

          {/* Mobile Toggle Button (Burger Icon) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-black transition-transform active:scale-90"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay - Solid White */}
      <div
        className={`fixed inset-0 bg-white z-[200] transition-all duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Overlay Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-50">
          <div className="text-xl font-bold tracking-tighter">
            VISION<span className="font-light ml-1">PLAZA</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-black transition-transform active:scale-90"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation Links List */}
        <div className="flex-grow flex flex-col px-8 py-12 space-y-2 overflow-y-auto">
          {navItems.map((item, idx) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              style={{ transitionDelay: isMenuOpen ? `${idx * 50}ms` : '0ms' }}
              className={`text-left text-3xl font-bold tracking-tight py-5 border-b border-zinc-50 transition-all duration-500 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              } ${currentPage === item.value ? 'text-black' : 'text-zinc-300'}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className={`pt-12 transition-all duration-500 delay-200 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-4">Location</p>
            <p className="text-xl font-medium text-black">Janakpuri, New Delhi</p>
            <p className="text-sm text-zinc-500 mt-1">+91 98765 43210</p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="px-8 pb-12">
          <button
            onClick={() => handleNavClick(Page.Shop)}
            className="w-full bg-black text-white py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-sm active:scale-95 transition-transform"
          >
            Shop Collection
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

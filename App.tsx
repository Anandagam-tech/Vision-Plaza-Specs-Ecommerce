import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle Page Transition and Reveal Observer
  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // Initialize Intersection Observer for reveal animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after first reveal as per "one time" requirement
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Target all elements with .reveal class
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 400);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={setCurrentPage} />;
      case Page.Shop:
        return <Shop />;
      case Page.About:
        return <About />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white bg-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className={`flex-grow transition-opacity duration-500 ease-in-out bg-white ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      <Footer />
      
      {/* Subtle Background Blobs - Lower Opacity to avoid clutter */}
      <div className="fixed top-[20%] -left-20 w-64 h-64 bg-zinc-50 rounded-full blur-3xl -z-10 pointer-events-none opacity-30 animate-float"></div>
      <div className="fixed bottom-[10%] -right-20 w-96 h-96 bg-zinc-50 rounded-full blur-3xl -z-10 pointer-events-none opacity-30 animate-float [animation-delay:-1.5s]"></div>
    </div>
  );
};

export default App;

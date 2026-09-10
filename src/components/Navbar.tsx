/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/industries', label: 'Industries' },
    { path: '/manufacturing', label: 'Manufacturing' },
    { path: '/contact', label: 'Contact Us' }
  ] as const;

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Glassmorphic navigation classes
  const navClass = isHome
    ? scrolled
      ? "fixed top-0 left-0 right-0 z-50 text-white border-b border-white/10 shadow-lg transition-all duration-300"
      : "absolute top-0 left-0 right-0 z-50 bg-transparent text-white border-b border-white/5 transition-all duration-300"
    : "sticky top-0 z-50 text-white border-b border-white/10 shadow-md transition-all duration-300";

  const navStyle = isHome
    ? scrolled
      ? {
          background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.96) 0%, rgba(22, 40, 60, 0.96) 50%, rgba(10, 20, 31, 0.96) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }
      : {}
    : {
        background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.96) 0%, rgba(22, 40, 60, 0.96) 50%, rgba(10, 20, 31, 0.96) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      };

  return (
    <nav className={`${navClass} font-sans overflow-visible`} style={navStyle}>
      
      {/* Multi-layered Geometric Background for Desktop (Design 4 Angled Blue Element converted to beautiful translucent glass layers) */}
      <div className="absolute inset-y-0 right-0 left-[62%] xl:left-[66%] 2xl:left-[70%] hidden lg:block overflow-visible pointer-events-none z-0">
        
        {/* Layer 1: Accent Red Glass Line */}
        <div 
          className={`absolute inset-y-0 bottom-[-24px] w-full transition-all duration-500 ${
            scrolled ? 'bg-[#DC2626]/80' : 'bg-[#DC2626]/60'
          }`} 
          style={{ 
            clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)',
            left: '0px',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)'
          }} 
        />
        
        {/* Layer 2: Secondary Deep Blue Glass Line */}
        <div 
          className="absolute inset-y-0 bottom-[-24px] w-full transition-all duration-500" 
          style={{ 
            clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)',
            left: '10px',
            background: scrolled
              ? 'linear-gradient(135deg, rgba(22, 40, 60, 0.9) 0%, rgba(13, 27, 42, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(22, 40, 60, 0.6) 0%, rgba(13, 27, 42, 0.6) 100%)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)'
          }} 
        />
        
        {/* Layer 3: Primary Industrial Gradient Main Block */}
        <div 
          className="absolute inset-y-0 bottom-[-24px] w-full transition-all duration-500 shadow-xl" 
          style={{ 
            clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)',
            left: '20px',
            background: scrolled
              ? 'linear-gradient(135deg, #0A141F 0%, #16283C 50%, #0A0F1F 100%)'
              : 'linear-gradient(135deg, rgba(13, 27, 42, 0.8) 0%, rgba(22, 40, 60, 0.8) 50%, rgba(10, 20, 31, 0.8) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }} 
        />
        
        {/* Industrial decorative highlight grid line inside the blue block */}
        <div 
          className="absolute inset-y-0 w-[1px] bg-white/10" 
          style={{ 
            left: '120px',
            transform: 'skewX(-26.5deg)'
          }} 
        />
      </div>

      {/* Navbar Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex h-[88px] items-center justify-between">
          
          {/* Logo Brand / Identity - Left Block with slightly increased visibility */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3.5 py-2 group shrink-0"
          >
            {/* White frosted border box for high visibility */}
            <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15">
              <Logo className="h-12 w-16 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <span className="truncate font-heading font-black text-[21px] tracking-tight text-white leading-none xl:text-[23px] 2xl:text-[25px]">
                Thermal <span className="text-[#D65A32]">Engitech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered, Uppercase, Semi-bold, Modern industrial appearance) */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-4">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 py-2.5 font-sans text-[11px] xl:text-[12px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 relative ${
                    active
                      ? 'text-white font-bold'
                      : 'text-slate-200 hover:text-white hover:scale-105'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-[-10px] left-2.5 right-2.5 h-[3px] bg-[#B3401F] rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Block - Overlaid on the beautiful diagonal blue design */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0 pl-12 xl:pl-16 relative z-10">
            {/* Phone link on dark blue background */}
            <a 
              href="tel:+917940055280" 
              className="flex items-center gap-2 text-white/95 hover:text-white transition-all duration-150 font-sans font-bold text-[11px] xl:text-[12px] uppercase tracking-wider whitespace-nowrap group"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                <Phone className="w-3.5 h-3.5 text-[#E2793D] fill-[#E2793D]" />
              </span>
              <span className="border-b border-white/20 group-hover:border-white/50 pb-0.5">
                +91 79 4005 5280
              </span>
            </a>

            {/* Request a Quote Button - Semi-transparent frosted glass design with white border and white text */}
            <Link
              to="/request-quote"
              className="px-5 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:border-white/100 hover:bg-white hover:text-[#0A141F] text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-xl hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Mobile Hamburger & Collapse Controls */}
          <div className="flex items-center lg:hidden gap-3">
            <Link
              to="/request-quote"
              className="px-3.5 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-white/20 transition-all duration-200"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div 
          className="lg:hidden border-t border-white/10 px-4 py-4 space-y-2 animate-fadeIn text-left shadow-lg relative z-50"
          style={{
            background: 'linear-gradient(135deg, rgba(13, 27, 42, 0.98) 0%, rgba(22, 40, 60, 0.98) 50%, rgba(10, 20, 31, 0.98) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`w-full text-left px-3.5 py-3 font-sans font-semibold text-xs uppercase tracking-wider rounded-xl transition-all block ${
                  active
                    ? 'text-white bg-white/10 border-l-4 border-[#B3401F]'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          
          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <a 
              href="tel:+917940055280" 
              className="flex items-center justify-center gap-2 text-xs font-bold text-white bg-white/5 p-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E2793D]" />
              <span>Call Support: +91 79 4005 5280</span>
            </a>
            <Link
              to="/request-quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider rounded-xl text-center block shadow-md font-sans transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}

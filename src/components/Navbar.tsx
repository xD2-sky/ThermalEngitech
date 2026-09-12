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
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/industries', label: 'Industries' },
    { path: '/manufacturing', label: 'Manufacturing' },
    { path: '/contact', label: 'Contact' }
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
          background: 'linear-gradient(135deg, rgba(11, 27, 43, 0.96) 0%, rgba(18, 41, 62, 0.96) 50%, rgba(8, 20, 32, 0.96) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }
      : {}
    : {
        background: 'linear-gradient(135deg, rgba(11, 27, 43, 0.96) 0%, rgba(18, 41, 62, 0.96) 50%, rgba(8, 20, 32, 0.96) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      };

  return (
    <nav className={`${navClass} font-sans overflow-visible`} style={navStyle}>
      
      {/* Diagonal glass-panel accent — wrapped in the same max-w-[1440px] centering box as the
          content container, so its right edge tracks the container's edge (not the raw viewport
          edge) and never bleeds into the empty margin that appears beyond 1440px wide */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none hidden lg:block">
        <div className="absolute inset-y-0 right-0 left-[68%] xl:left-[74%] overflow-visible z-0">

          {/* Layer 1: Accent Blue Glass Line */}
          <div
            className={`absolute inset-y-0 bottom-[-24px] w-full transition-all duration-500 ${
              scrolled ? 'bg-[#1C5CA8]/80' : 'bg-[#1C5CA8]/60'
            }`}
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)',
              left: '0px',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)'
            }}
          />

          {/* Glowing edge-highlight — light catching the diagonal cut, gives it presence over photo backgrounds */}
          <div
            className="absolute inset-y-0 w-[2px] transition-opacity duration-500"
            style={{
              left: '-2px',
              transform: 'skewX(-26.5deg)',
              background: 'linear-gradient(180deg, rgba(127,178,228,0.95) 0%, rgba(47,123,212,0.7) 50%, rgba(127,178,228,0.95) 100%)',
              boxShadow: '0 0 12px 1px rgba(47,123,212,0.85), 0 0 24px 4px rgba(47,123,212,0.35)',
              opacity: scrolled ? 0.9 : 1,
            }}
          />

          {/* Layer 2: Secondary Deep Blue Glass Line */}
          <div
            className="absolute inset-y-0 bottom-[-24px] w-full transition-all duration-500"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0% 100%)',
              left: '10px',
              background: scrolled
                ? 'linear-gradient(135deg, rgba(18, 41, 62, 0.9) 0%, rgba(11, 27, 43, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(18, 41, 62, 0.6) 0%, rgba(11, 27, 43, 0.6) 100%)',
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
                ? 'linear-gradient(135deg, #081420 0%, #12293E 50%, #081420 100%)'
                : 'linear-gradient(135deg, rgba(11, 27, 43, 0.8) 0%, rgba(18, 41, 62, 0.8) 50%, rgba(8, 20, 32, 0.8) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          />
        </div>
      </div>

      {/* Navbar Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex h-[88px] items-center justify-between">
          
          {/* Logo Brand / Identity — pinned hard left */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3.5 py-2 group shrink-0"
          >
            <Logo className="h-14 w-16 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex min-w-0 flex-col justify-center">
              <span className="whitespace-nowrap font-heading font-extrabold text-[20px] tracking-tight text-white leading-snug xl:text-[22px] 2xl:text-[24px]">
                Thermal <span className="text-[#2F7BD4]">Engitech</span>
              </span>
            </div>
          </Link>

          {/* Everything else — nav links, phone, CTA — grouped hard right */}
          <div className="hidden lg:flex items-center shrink-0 relative z-10">
            <div className="flex items-center gap-5 xl:gap-7">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-0 xl:px-2.5 py-2.5 font-sans text-[13px] xl:text-sm font-medium whitespace-nowrap transition-all duration-200 relative ${
                      active
                        ? 'text-white font-semibold'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-[-10px] left-2.5 right-2.5 h-[2px] bg-[#1C5CA8] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Phone + CTA — sized to fit inside the (deliberately narrow) blue diagonal panel */}
            <div className="flex items-center gap-1.5 xl:gap-2.5 pl-2 xl:pl-8">
              {/* Phone link on dark blue background */}
              <a
                href="tel:+917940055280"
                className="flex items-center gap-1 xl:gap-1.5 text-white/90 hover:text-white transition-colors font-sans font-medium text-xs whitespace-nowrap group"
              >
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20 shrink-0">
                  <Phone className="w-3 h-3 text-[#7FB2E4]" />
                </span>
                <span>+91 79 4005 5280</span>
              </a>

              {/* Request a Quote Button */}
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs font-semibold text-white shadow-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Request a quote</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger & Collapse Controls */}
          <div className="flex items-center lg:hidden gap-3">
            <Link
              to="/request-quote"
              className="px-4 py-2 bg-[#1C5CA8] text-white text-xs font-semibold rounded-md shadow-sm hover:bg-[#2F7BD4] transition-colors"
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
            background: 'linear-gradient(135deg, rgba(11, 27, 43, 0.98) 0%, rgba(18, 41, 62, 0.98) 50%, rgba(8, 20, 32, 0.98) 100%)',
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
                className={`w-full text-left px-3.5 py-3 font-sans font-medium text-sm rounded-md transition-all block ${
                  active
                    ? 'text-white bg-white/10 border-l-2 border-[#1C5CA8]'
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
              className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/5 p-3.5 rounded-md border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7FB2E4]" />
              <span>Call: +91 79 4005 5280</span>
            </a>
            <Link
              to="/request-quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 bg-[#1C5CA8] hover:bg-[#2F7BD4] text-white text-sm font-semibold rounded-md text-center block shadow-sm font-sans transition-colors"
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}

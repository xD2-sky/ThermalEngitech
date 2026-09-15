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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
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
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Home: fully transparent over the hero, switching to true void-black on scroll.
  // Inner pages: no hero behind the bar, so it stays on the void background from the start.
  const showSolid = !isHome || scrolled;

  return (
    <>
      {/* Hidden SVG filter: feTurbulence generates noise, feDisplacementMap uses it to
          refract/bend whatever sits behind the nav — the actual "liquid" part of the effect. */}
      <svg className="absolute w-0 h-0">
        <filter id="liquid-glass-nav">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <nav
        className={`${!isHome ? 'sticky' : 'fixed'} top-0 left-0 right-0 z-50 font-sans transition-[background,border-color] duration-300 ease-out ${
          showSolid ? 'border-b border-white/15' : 'border-b border-transparent bg-transparent'
        }`}
        style={
          showSolid
            ? {
                background: 'rgba(0,0,0,0.35)',
                backdropFilter: 'url(#liquid-glass-nav) blur(14px) saturate(160%)',
                WebkitBackdropFilter: 'blur(14px) saturate(160%)', // Safari: no SVG-filter-in-backdrop support, blur-only fallback
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.25)',
              }
            : undefined
        }
      >
      <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 px-4 sm:px-8 lg:px-10">

        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0">
          <Logo className="h-8 w-10 sm:h-10 sm:w-12 shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight truncate">
              Thermal <span className="text-[#7089ba]">Engitech</span>
            </span>
          </div>
        </Link>

        {/* Nav links — centered, matching the reference nav's 3-group layout */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-sm font-medium whitespace-nowrap transition-colors ${
                  active ? 'text-white' : 'text-[#808080] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right cluster — ghost phone link + outlined pill CTA, no filled buttons */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="tel:+917940055280"
            className="flex items-center gap-1.5 text-[#808080] hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 79 4005 5280</span>
          </a>
          <Link
            to="/request-quote"
            className="inline-flex items-center justify-center rounded-full border border-white text-white text-sm font-medium px-[18px] py-2 hover:bg-white hover:text-black transition-colors whitespace-nowrap"
          >
            Request a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#1c1c1c] bg-black px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  active ? 'text-white bg-white/10' : 'text-[#808080] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/request-quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-white text-white text-sm font-medium px-[18px] py-2.5"
          >
            Request a quote
          </Link>
        </div>
      )}
    </nav>
    </>
  );
}

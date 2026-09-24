/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../config/site';

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

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/manufacturing', label: 'Manufacturing' },
    { path: '/contact', label: 'Contact' },
  ] as const;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Home and About have a light-toned top (hero photo / sky photo), so the
  // navbar's original dark text reads fine over them while unscrolled. Every
  // other route has a dark banner at the top, so the unscrolled navbar needs
  // light text there instead — once scrolled, every route converges on the
  // same white/blurred bar with dark text, unchanged.
  // Product category and product detail pages have a plain light page
  // background behind the navbar (their content starts below a breadcrumb
  // bar, not a dark banner) — unlike the /products index itself, which has
  // a dark banner like Manufacturing/Certifications/Contact/Request Quote.
  const isLightHeroRoute =
    location.pathname === '/' ||
    location.pathname === '/about' ||
    (location.pathname.startsWith('/products/') && location.pathname !== '/products/');
  const useDarkText = scrolled || isLightHeroRoute;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,27,43,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 px-4 sm:px-8 lg:px-10">

        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0">
          <Logo className="h-8 w-10 sm:h-10 sm:w-12 shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col leading-tight min-w-0">
            <span className={`font-heading font-extrabold text-sm sm:text-base tracking-tight truncate transition-colors duration-300 ${useDarkText ? 'text-[#0B1B2B]' : 'text-white'}`}>
              Thermal <span className="text-[#1C5CA8]">Engitech</span>
            </span>
            <span className={`text-[9px] tracking-[0.16em] uppercase hidden sm:block transition-colors duration-300 ${useDarkText ? 'text-[#78889B]' : 'text-white/70'}`}>Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Nav links — centered */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={`relative font-heading text-sm font-semibold whitespace-nowrap transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                  active
                    ? `after:w-full ${useDarkText ? 'text-[#1C5CA8] after:bg-[#1C5CA8]' : 'text-[#7FB2E4] after:bg-[#7FB2E4]'}`
                    : useDarkText
                      ? 'text-[#47566A] hover:text-[#0B1B2B] after:w-0 hover:after:w-full after:bg-[#1C5CA8]'
                      : 'text-white/80 hover:text-white after:w-0 hover:after:w-full after:bg-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href={`tel:${SITE.phonePrimaryTel}`}
            className={`flex items-center gap-1.5 transition-colors text-sm font-semibold whitespace-nowrap ${useDarkText ? 'text-[#47566A] hover:text-[#1C5CA8]' : 'text-white/80 hover:text-white'}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SITE.phonePrimaryDisplay}</span>
          </a>
          <Link
            to="/request-quote"
            data-testid="nav-request-quote"
            className="inline-flex items-center justify-center rounded-full bg-[#1C5CA8] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#103E72] shadow-sm shadow-[#1C5CA8]/20 transition-colors whitespace-nowrap"
          >
            Request a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${useDarkText ? 'text-[#0B1B2B] hover:bg-[#0B1B2B]/5' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E4E7EC] bg-white px-6 py-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  active ? 'text-[#1C5CA8] bg-[#1C5CA8]/8' : 'text-[#47566A] hover:text-[#0B1B2B] hover:bg-[#0B1B2B]/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${SITE.phonePrimaryTel}`}
            className="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-[#47566A]"
          >
            <Phone className="w-4 h-4 text-[#1C5CA8]" />
            {SITE.phonePrimaryDisplay}
          </a>
          <Link
            to="/request-quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#1C5CA8] text-white text-sm font-semibold px-[18px] py-3"
          >
            Request a quote
          </Link>
        </div>
      )}
    </nav>
  );
}

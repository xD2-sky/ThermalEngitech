/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '../config/site';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // useLayoutEffect, not useEffect: on a reload where the browser restores
  // a scrolled-down position (scroll restoration), the initial render would
  // otherwise briefly paint with the default scrolled=false before this
  // runs — a one-frame flash of transparent-nav white text over whatever
  // (non-hero, likely white) content is actually behind it at that scroll
  // position. Measuring before paint avoids that flash.
  useLayoutEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Safety net: a layout shift with nothing to do with the user scrolling
    // (a web font swapping in, a lazy image settling, a reveal animation
    // finishing) can make the browser nudge scrollY and fire a genuine
    // native 'scroll' event via scroll anchoring. That can flip `scrolled`
    // to true even though the user is still at the top of the page, and
    // since nothing fires another scroll event afterward, it stays stuck
    // until a refresh. Re-checking the real scrollY on an interval makes
    // the state self-correct within a second regardless of what caused
    // the desync, instead of trusting a single event forever.
    const interval = window.setInterval(handleScroll, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearInterval(interval);
    };
  }, []);

  // Close the mobile menu on any route change — not just the navItems/CTA
  // links inside the dropdown that happen to call setMobileOpen(false).
  // The logo link (outside the dropdown) didn't, so tapping it while the
  // menu was open left it stuck open on the new page. Keying this off
  // location.pathname catches that link, the browser back/forward buttons,
  // and anything else that navigates, instead of requiring every new link
  // added in the future to remember to close it manually.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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

  // Most routes (Home, About, product detail pages, and any unmatched/404
  // route) have a plain light page background behind the navbar, so the
  // navbar's original dark text reads fine over them while unscrolled.
  // Only these specific routes have a dark full-bleed photo banner
  // starting at y:0 (extending behind the navbar) instead — so the
  // unscrolled navbar needs light text there. Category pages (/products/
  // category/:slug) do have a dark banner, but it's preceded by a plain
  // white breadcrumb bar that clears the navbar via margin-top, so what's
  // actually behind the navbar at scroll:0 is that white bar, not the
  // banner — dark text is correct there, same as the default. Once
  // scrolled, every route converges on the same white/blurred bar with
  // dark text, unchanged.
  const DARK_BANNER_ROUTES = ['/products', '/manufacturing', '/certifications', '/contact', '/request-quote', '/about'];
  const isDarkBannerRoute = DARK_BANNER_ROUTES.includes(location.pathname);
  const useDarkText = scrolled || !isDarkBannerRoute;

  return (
    <nav
      style={{ willChange: 'backdrop-filter, background-color' }}
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,27,43,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-[4.8rem] sm:h-[5.4rem] lg:h-24 px-[1.2rem] sm:px-[2.4rem] lg:px-12">

        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-3 sm:gap-[0.9rem] shrink-0 group min-w-0">
          <Logo className="h-[2.4rem] w-12 sm:h-12 sm:w-[3.6rem] shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col leading-tight min-w-0">
            <span className={`font-heading font-extrabold text-[16.8px] sm:text-[19.2px] tracking-tight truncate transition-colors duration-300 ${useDarkText ? 'text-[#0B1B2B]' : 'text-white'}`}>
              Thermal <span className="text-[#1C5CA8]">Engitech</span>
            </span>
            <span className={`text-[10.8px] tracking-[0.16em] uppercase hidden sm:block transition-colors duration-300 ${useDarkText ? 'text-[#78889B]' : 'text-white/70'}`}>Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Nav links — centered */}
        <div className="hidden lg:flex items-center gap-[2.4rem] absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={`relative font-heading text-[16.8px] font-semibold whitespace-nowrap transition-colors after:absolute after:-bottom-[7.2px] after:left-0 after:h-[2.4px] after:transition-all after:duration-300 ${
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
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a
            href={`tel:${SITE.phonePrimaryTel}`}
            className={`flex items-center gap-[7.2px] transition-colors text-[16.8px] font-semibold whitespace-nowrap ${useDarkText ? 'text-[#47566A] hover:text-[#1C5CA8]' : 'text-white/80 hover:text-white'}`}
          >
            <Phone className="w-[16.8px] h-[16.8px]" />
            <span>{SITE.phonePrimaryDisplay}</span>
          </a>
          <Link
            to="/request-quote"
            data-testid="nav-request-quote"
            className="inline-flex items-center justify-center rounded-full bg-[#1C5CA8] text-white text-[16.8px] font-semibold px-6 py-3 hover:bg-[#103E72] shadow-sm shadow-[#1C5CA8]/20 transition-colors whitespace-nowrap"
          >
            Request a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-[9.6px] rounded-md transition-colors ${useDarkText ? 'text-[#0B1B2B] hover:bg-[#0B1B2B]/5' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X className="w-[28.8px] h-[28.8px]" /> : <Menu className="w-[28.8px] h-[28.8px]" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E4E7EC] bg-white px-[28.8px] py-[19.2px] space-y-1 shadow-lg">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-[14.4px] py-[14.4px] rounded-lg text-[16.8px] font-semibold transition-colors ${
                  active ? 'text-[#1C5CA8] bg-[#1C5CA8]/8' : 'text-[#47566A] hover:text-[#0B1B2B] hover:bg-[#0B1B2B]/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${SITE.phonePrimaryTel}`}
            className="flex items-center gap-[9.6px] px-[14.4px] py-[14.4px] text-[16.8px] font-semibold text-[#47566A]"
          >
            <Phone className="w-[19.2px] h-[19.2px] text-[#1C5CA8]" />
            {SITE.phonePrimaryDisplay}
          </a>
          <Link
            to="/request-quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#1C5CA8] text-white text-[16.8px] font-semibold px-[21.6px] py-[14.4px]"
          >
            Request a quote
          </Link>
        </div>
      )}
    </nav>
  );
}

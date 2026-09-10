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
    const handleScroll = () => setScrolled(window.scrollY > 12);
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
    { path: '/contact', label: 'Contact' },
  ] as const;

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Transparent only while sitting over the top of the hero; solid ink otherwise.
  const solid = !isHome || scrolled;

  // On the home page the bar floats over the hero (absolute, then fixed once
  // scrolled). On inner pages it is sticky so it reserves its own layout height
  // and the page's dark header band starts cleanly beneath it.
  const positionClass = isHome
    ? scrolled
      ? 'fixed top-0 left-0 right-0'
      : 'absolute top-0 left-0 right-0'
    : 'sticky top-0';

  return (
    <nav
      className={`${positionClass} z-50 font-sans text-white transition-colors duration-300 ${
        solid
          ? 'bg-[#0B1B2B]/95 backdrop-blur-md border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.04),0_8px_24px_-12px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-4">

          {/* Brand */}
          <Link to="/" className="flex min-w-0 items-center gap-3 shrink-0 group">
            <Logo className="h-11 w-14 shrink-0" />
            <span className="truncate font-heading font-extrabold text-[19px] tracking-tight text-white leading-none">
              Thermal <span className="text-[#7FB2E4]">Engitech</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 text-[13px] font-medium tracking-tight whitespace-nowrap transition-colors duration-200 ${
                    active ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-5 left-3.5 right-3.5 h-[2px] bg-[#2F7BD4] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+917940055280"
              className="flex items-center gap-2 text-[13px] font-medium text-slate-200 hover:text-white transition-colors group"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/15">
                <Phone className="w-3.5 h-3.5 text-[#7FB2E4]" />
              </span>
              <span>+91 79 4005 5280</span>
            </a>

            <Link
              to="/request-quote"
              className="rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-colors duration-200 whitespace-nowrap"
            >
              Request a quote
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center lg:hidden gap-2.5">
            <Link
              to="/request-quote"
              className="rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] px-3.5 py-2 text-xs font-semibold text-white transition-colors"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0B1B2B] border-t border-white/10 px-5 py-4 space-y-1 animate-fadeIn shadow-lg">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3.5 py-3 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? 'text-white bg-white/[0.06] border-l-2 border-[#2F7BD4]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-white/10 space-y-2.5">
            <a
              href="tel:+917940055280"
              className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/[0.04] p-3.5 rounded-md border border-white/10 hover:bg-white/[0.08] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7FB2E4]" />
              <span>Call: +91 79 4005 5280</span>
            </a>
            <Link
              to="/request-quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-3.5 bg-[#1C5CA8] hover:bg-[#2F7BD4] text-white text-sm font-semibold rounded-md text-center transition-colors"
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

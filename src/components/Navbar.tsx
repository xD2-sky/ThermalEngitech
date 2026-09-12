/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    { path: '/contact', label: 'Contact' },
    { path: '/request-quote', label: 'Request a quote' }
  ] as const;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Home: fully transparent over the hero photo, fading to a blue-tinted glass panel on scroll.
  // Inner pages: no hero photo behind the bar, so it stays on the glass background from the start.
  const showGlass = !isHome || scrolled;

  return (
    <nav
      className={`${!isHome ? 'sticky' : scrolled ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 font-sans transition-[background,border-color,backdrop-filter,box-shadow] duration-400 ease-out ${
        showGlass
          ? 'border-b border-[#7FB2E4]/20 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[14px]'
          : 'border-b border-transparent'
      }`}
      style={{
        background: showGlass
          ? 'linear-gradient(135deg, rgba(18,41,62,0.94) 0%, rgba(28,92,168,0.32) 45%, rgba(8,20,32,0.96) 100%)'
          : 'transparent'
      }}
    >
      <div className="flex items-center justify-between h-24 px-6 sm:px-8 lg:px-10">

        {/* Logo — far left */}
        <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
          <Logo className="h-[52px] w-[60px] shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-lg text-white tracking-tight uppercase whitespace-nowrap">
              Thermal <span className="text-[#2F7BD4]">Engitech</span>
            </span>
            <span className="text-[10px] tracking-[0.12em] text-slate-400 uppercase mt-0.5">Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Nav links — plain, evenly spaced, flush to the true right edge */}
        <div className="hidden lg:flex items-center gap-9 shrink-0">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[14.5px] font-medium whitespace-nowrap transition-colors ${
                  active ? 'text-white font-semibold' : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/10 px-6 py-4 space-y-1 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(18,41,62,0.97) 0%, rgba(28,92,168,0.28) 45%, rgba(8,20,32,0.98) 100%)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)'
          }}
        >
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  active ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

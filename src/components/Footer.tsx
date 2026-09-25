import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import LogoWatermark from './LogoWatermark';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];

  const productCategories = [
    { label: 'Steam Boilers', path: '/products/category/steam-boilers' },
    { label: 'Thermic Fluid Heaters', path: '/products/category/thermic-fluid-heaters' },
    { label: 'Pressure Reducing Stations', path: '/products/pressure-reducing-station' },
    { label: 'Air Pre Heaters', path: '/products/air-pre-heater' },
    { label: 'Heat Exchangers', path: '/products/heat-exchanger-shelltube' },
    { label: 'Hot Water Generators', path: '/products/hot-water-generator-unit' },
  ];

  const year = new Date().getFullYear();

  const heading = 'text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400';
  const linkClass =
    'text-slate-300 hover:text-white transition-colors duration-200 text-[13px]';

  return (
    <footer className="relative overflow-hidden bg-[#0B1B2B] text-slate-300 border-t border-white/10 font-sans">
      <LogoWatermark position="left" size={750} opacity={0.06} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 md:divide-x md:divide-white/15">

          {/* Company */}
          <div className="col-span-2 md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-11 shrink-0" />
              <div className="leading-tight">
                <span className="font-heading font-extrabold text-[15px] text-white uppercase tracking-tight block">
                  Thermal <span className="text-[#2F7BD4]">Engitech</span>
                </span>
                <span className="text-[10px] tracking-[0.12em] text-slate-400 uppercase block mt-0.5">
                  Pvt. Ltd.
                </span>
                <span className="text-[11px] text-slate-400 block mt-2">
                  Industrial boilers &amp; process-heat systems
                </span>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-slate-400 max-w-sm">
              We design, manufacture and support steam boilers, thermic fluid heaters and
              heat-recovery equipment for process plants across India and export markets.
            </p>
          </div>

          {/* Company links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className={heading}>Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-3 space-y-4">
            <h4 className={heading}>Products</h4>
            <ul className="space-y-2.5">
              {productCategories.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <h4 className={heading}>Contact</h4>
            <div className="space-y-3.5 text-[13px] text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7FB2E4] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#7FB2E4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <a href="mailto:info@thermalengitech.com" className="hover:text-white transition-colors">info@thermalengitech.com</a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#7FB2E4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <a href="tel:+917069306431" className="hover:text-white transition-colors">+91 70693 06431</a><br />
                  <span className="text-slate-400">Purchase: <a href="tel:+919033047272" className="hover:text-white transition-colors">+91 90330 47272</a></span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-500">
          <p>© {year} Thermal Engitech Pvt. Ltd. All rights reserved.</p>
          <p className="text-slate-500">ISO 9001:2015 · ASME · IBR 1950 certified</p>
        </div>
      </div>
    </footer>
  );
}

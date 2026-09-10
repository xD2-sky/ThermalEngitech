import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Industries', path: '/industries' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Certifications', path: '/certifications' }
  ];

  const productCategories = [
    { label: 'Steam Boilers', path: '/products?category=Steam+Boilers' },
    { label: 'Thermic Fluid Heaters', path: '/products?category=Thermic+Fluid+Heaters' },
    { label: 'Pressure Reducing Stations', path: '/products?category=Pressure+Reducing+Stations' },
    { label: 'Air Pre Heaters', path: '/products?category=Air+Pre+Heaters' },
    { label: 'Heat Exchangers', path: '/products?category=Heat+Exchangers' },
    { label: 'Hot Water Generators', path: '/products?category=Hot+Water+Generators' }
  ];

  return (
    <footer 
      className="text-slate-200 py-16 text-xs font-sans relative z-10 border-t border-white/10 shadow-[0_-15px_30px_rgba(0,0,0,0.3)] overflow-hidden"
      style={{
        backgroundColor: 'rgba(13, 27, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      
      {/* Decorative Top Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Company Column */}
        <div className="md:col-span-4 space-y-5 text-left">
          <div className="space-y-2">
            <h4 className="text-white text-xs uppercase tracking-wider font-bold relative pb-2">
              Corporate Headquarters
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white/30" />
              <span className="absolute bottom-0 left-8 w-2.5 h-[2px] bg-[#B3401F]/60" />
            </h4>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/25">
              <Logo className="w-12 h-10 shrink-0" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading font-black text-[15px] sm:text-base text-white tracking-normal block leading-none">
                Thermal <span className="text-[#D65A32]">Engitech</span> Pvt. Ltd.
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase block mt-1.5 leading-none">
                Engineering & Thermal Dynamics
              </span>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-sm text-xs font-medium">
            Thermal Engitech Pvt. Ltd. manufactures and supplies a range of high-quality Industrial Boilers and Heaters globally.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="text-white text-xs uppercase tracking-wider font-bold relative pb-2">
            Quick Links
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white/30" />
            <span className="absolute bottom-0 left-8 w-2.5 h-[2px] bg-[#B3401F]/60" />
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className="group text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 font-semibold hover:translate-x-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors shrink-0" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Products Column */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="text-white text-xs uppercase tracking-wider font-bold relative pb-2">
            Core Products
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white/30" />
            <span className="absolute bottom-0 left-8 w-2.5 h-[2px] bg-[#B3401F]/60" />
          </h4>
          <ul className="space-y-2.5">
            {productCategories.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className="group text-slate-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 font-semibold hover:translate-x-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="text-white text-xs uppercase tracking-wider font-bold relative pb-2">
            Contact Details
            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white/30" />
            <span className="absolute bottom-0 left-8 w-2.5 h-[2px] bg-[#B3401F]/60" />
          </h4>
          <div className="space-y-4 text-slate-300 font-medium">
            <div className="flex items-start gap-3 group">
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/25">
                <MapPin className="w-3.5 h-3.5 text-white/75" />
              </span>
              <span className="leading-relaxed text-[11.5px]">
                12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435
              </span>
            </div>
            <div className="flex items-start gap-3 group">
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/25">
                <Mail className="w-3.5 h-3.5 text-white/75" />
              </span>
              <span className="break-all text-[11px] leading-relaxed self-center">
                sales@thermalengitech.com<br />
                info@thermalengitech.com
              </span>
            </div>
            <div className="flex items-start gap-3 group">
              <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/25">
                <Phone className="w-3.5 h-3.5 text-white/75" />
              </span>
              <span className="text-[11.5px] leading-relaxed self-center font-mono font-bold text-white">
                +91 79 4005 5280<br />
                +91 98250 14820
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

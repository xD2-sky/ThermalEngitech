/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import ProductVideoShowcase from '../components/ProductVideoShowcase';
import { ArrowLeft, ShieldCheck, Cpu, CheckCircle, Mail, Phone, CheckCircle2, ChevronRight } from 'lucide-react';

// Re-using CAD layout illustrations for high-contrast detail views
function ProductImageLarge({ type, productId }: { type: 'boiler' | 'heater' | 'generator' | 'exchanger' | 'prs' | 'preheater' | 'pollution' | 'other'; productId?: string }) {
  if (productId === 'oil-gas-3pass-wetback') {
    return (
      <svg viewBox="0 0 450 300" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
        {/* Base Stone Tiled Isometric Platform */}
        <path d="M 50,210 L 220,270 L 400,210 L 230,150 Z" fill="url(#base-grad)" stroke="#455A64" strokeWidth="1.5" />
        
        {/* Isometric Grid Tile Lines to replicate the grey paved base */}
        <path d="M 84,198 L 254,258 M 118,186 L 288,246 M 152,174 L 322,234 M 186,162 L 356,222 M 220,150 L 390,210" stroke="#445565" strokeWidth="0.8" opacity="0.4" />
        <path d="M 106,230 L 294,161 M 162,250 L 350,181 M 218,270 L 406,201" stroke="#445565" strokeWidth="0.8" opacity="0.4" />

        <defs>
          <linearGradient id="base-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C8A9A" />
            <stop offset="100%" stopColor="#78909C" />
          </linearGradient>
          <linearGradient id="boiler-red" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9614A" />
            <stop offset="40%" stopColor="#D32F2F" />
            <stop offset="100%" stopColor="#B71C1C" />
          </linearGradient>
          <linearGradient id="boiler-red-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C1352A" />
            <stop offset="100%" stopColor="#5A1F12" />
          </linearGradient>
          <linearGradient id="chimney-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#EEECE6" />
            <stop offset="100%" stopColor="#D8DBDD" />
          </linearGradient>
          <linearGradient id="burner-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#33383E" />
            <stop offset="100%" stopColor="#0D1B2A" />
          </linearGradient>
        </defs>

        {/* Supporting Saddles / Legs (Black metal blocks) */}
        <rect x="170" y="200" width="30" height="25" fill="#14181C" rx="2" />
        <rect x="235" y="185" width="30" height="22" fill="#14181C" rx="2" />

        {/* Main Red Boiler Cylinder body in perspective */}
        <path d="M 170,130 L 275,103 A 38 42 0 0 1 275,187 L 170,230 Z" fill="url(#boiler-red)" />
        
        {/* Front face cap */}
        <ellipse cx="170" cy="180" rx="45" ry="50" fill="url(#boiler-red-front)" stroke="#B71C1C" strokeWidth="1.5" />
        
        {/* Front Plate Outer Ring of Bolts */}
        <circle cx="170" cy="180" r="38" stroke="#EEECE6" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
        <circle cx="170" cy="180" r="28" stroke="#33383E" strokeWidth="1" strokeDasharray="4 6" opacity="0.8" />

        {/* "THERMAL ENGITECH" brand stamp text */}
        <text x="210" y="165" fill="#E7C77A" fontSize="7" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.5" transform="rotate(-13 210 165)" opacity="0.85">THERMAL ENGITECH</text>

        {/* Industrial Burner mounted on the front face ellipse */}
        <rect x="135" y="170" width="30" height="24" fill="url(#burner-dark)" stroke="#4B5563" rx="3" />
        <circle cx="150" cy="182" r="8" fill="#D32F2F" stroke="#14181C" strokeWidth="1" />
        <rect x="123" y="178" width="12" height="15" fill="#1F2937" rx="1" />
        <line x1="120" y1="185" x2="135" y2="185" stroke="#8A94A0" strokeWidth="2" />

        {/* Angled transition flue gas white duct going to the chimney */}
        <path d="M 258,125 L 305,95 L 315,95 L 268,128 Z" fill="url(#chimney-grad)" stroke="#9AA6AF" strokeWidth="1" />

        {/* Tall White Vertical Chimney Stack */}
        <rect x="305" y="45" width="18" height="180" fill="url(#chimney-grad)" stroke="#9AA6AF" strokeWidth="1" />
        
        {/* Chimney Top Cone */}
        <polygon points="302,45 314,25 326,45" fill="url(#chimney-grad)" stroke="#7C8A9A" strokeWidth="1" />
        
        {/* Circular Gallery/Platform at top of Chimney */}
        <ellipse cx="314" cy="90" rx="20" ry="6" fill="#FFFFFF" stroke="#7C8A9A" strokeWidth="1.5" />
        {/* Railings on the platform */}
        <ellipse cx="314" cy="82" rx="20" ry="6" fill="none" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="294" y1="82" x2="294" y2="90" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="304" y1="84" x2="304" y2="90" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="314" y1="85" x2="314" y2="91" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="324" y1="84" x2="324" y2="90" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="334" y1="82" x2="334" y2="90" stroke="#7C8A9A" strokeWidth="1" />

        {/* Access Ladder climbing up the Chimney stack */}
        <line x1="325" y1="90" x2="325" y2="225" stroke="#7C8A9A" strokeWidth="1.5" />
        <line x1="331" y1="90" x2="331" y2="225" stroke="#7C8A9A" strokeWidth="1.5" />
        {/* Ladder rungs */}
        <line x1="325" y1="105" x2="331" y2="105" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="118" x2="331" y2="118" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="131" x2="331" y2="131" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="144" x2="331" y2="144" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="157" x2="331" y2="157" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="170" x2="331" y2="170" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="183" x2="331" y2="183" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="196" x2="331" y2="196" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="209" x2="331" y2="209" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="222" x2="331" y2="222" stroke="#7C8A9A" strokeWidth="1" />

        {/* Chimney flared supporting base */}
        <polygon points="298,225 330,225 324,215 304,215" fill="url(#chimney-grad)" stroke="#7C8A9A" strokeWidth="1" />

        {/* Blue Valves and Controls on Top of Boiler */}
        <rect x="210" y="123" width="6" height="15" fill="#1F5FA8" stroke="#1B2A3D" strokeWidth="0.8" />
        <circle cx="213" cy="120" r="4" fill="#2E76C9" />
        <rect x="235" y="117" width="6" height="15" fill="#1F5FA8" stroke="#1B2A3D" strokeWidth="0.8" />
        <circle cx="238" cy="114" r="4" fill="#2E76C9" />
        <rect x="185" y="115" width="8" height="20" fill="#1F5FA8" stroke="#1B2A3D" strokeWidth="0.8" />
        <ellipse cx="189" cy="112" rx="7" ry="3" fill="#2E76C9" stroke="#1F5FA8" strokeWidth="1" />

        {/* Feed Water Pumps assembly */}
        <path d="M 255,162 V 220 H 270" fill="none" stroke="#33383E" strokeWidth="3" strokeLinecap="round" />
        <rect x="264" y="210" width="12" height="22" fill="#33383E" rx="1" stroke="#0D1B2A" strokeWidth="1" />
        <rect x="278" y="208" width="12" height="22" fill="#33383E" rx="1" stroke="#0D1B2A" strokeWidth="1" />
        <rect x="266" y="202" width="8" height="8" fill="#1F5FA8" rx="1" />
        <rect x="280" y="200" width="8" height="8" fill="#1F5FA8" rx="1" />
      </svg>
    );
  }

  switch (type) {
    case 'boiler':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          {/* Main Boiler Saturated Shell Cylinder */}
          <rect x="50" y="45" width="220" height="110" rx="55" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4.5" />
          <rect x="58" y="53" width="204" height="94" rx="47" fill="#0D1B2A" opacity="0.9" />
          
          <line x1="68" y1="80" x2="252" y2="80" stroke="#2E76C9" strokeWidth="3" strokeDasharray="6 6" />
          <line x1="68" y1="100" x2="252" y2="100" stroke="#2E76C9" strokeWidth="3" />
          <line x1="68" y1="120" x2="252" y2="120" stroke="#2E76C9" strokeWidth="3" strokeDasharray="6 6" />

          {/* Drum steam release nozzle */}
          <rect x="145" y="15" width="30" height="30" fill="#17222E" stroke="#1F5FA8" strokeWidth="2.5" />
          <line x1="145" y1="24" x2="175" y2="24" stroke="#2E76C9" strokeWidth="2" />
          <path d="M160 5 V15" stroke="#EF4444" strokeWidth="3" />

          <rect x="80" y="155" width="25" height="15" fill="#1B2A3D" stroke="#1F5FA8" strokeWidth="2.5" />
          <rect x="215" y="155" width="25" height="15" fill="#1B2A3D" stroke="#1F5FA8" strokeWidth="2.5" />
          <line x1="65" y1="170" x2="255" y2="170" stroke="#1F5FA8" strokeWidth="5" />
        </svg>
      );
    case 'heater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="50" y="50" width="220" height="100" rx="14" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4.5" />
          <path d="M70 70 Q90 55 110 70 T150 70 T190 70 T230 70" fill="none" stroke="#1F5FA8" strokeWidth="4" />
          <path d="M70 95 Q90 80 110 95 T150 95 T190 95 T230 95" fill="none" stroke="#1F5FA8" strokeWidth="4" />
          <path d="M70 120 Q90 105 110 120 T150 120 T190 120 T230 120" fill="none" stroke="#1B3A63" strokeWidth="4" />

          <rect x="25" y="70" width="25" height="60" fill="#1B2A3D" stroke="#1F5FA8" strokeWidth="4" />
          <line x1="10" y1="100" x2="25" y2="100" stroke="#EF4444" strokeWidth="5" />
        </svg>
      );
    case 'generator':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="90" y="20" width="140" height="160" rx="10" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4.5" />
          <rect x="100" y="30" width="120" height="140" rx="6" fill="#0D1B2A" opacity="0.91" />
          <path d="M120 50 C120 62 200 62 200 75 C200 88 120 88 120 101 C120 114 200 114 200 127 C200 140 120 140 120 152" fill="none" stroke="#1F5FA8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'exchanger':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="40" y="55" width="240" height="90" rx="10" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4.5" />
          <line x1="48" y1="80" x2="272" y2="80" stroke="#5B9BD9" strokeWidth="3" />
          <line x1="48" y1="100" x2="272" y2="100" stroke="#1F5FA8" strokeWidth="2" />
          <line x1="48" y1="120" x2="272" y2="120" stroke="#5B9BD9" strokeWidth="3" />
        </svg>
      );
    case 'prs':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <path d="M30 100 H290" stroke="#1F5FA8" strokeWidth="6" />
          <path d="M70 100 V50 H250 V100" fill="none" stroke="#1F5FA8" strokeWidth="6" />
          <circle cx="160" cy="100" r="20" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4" />
          <rect x="145" y="55" width="30" height="25" fill="#EF4444" stroke="#0D1B2A" strokeWidth="2.5" />
          <line x1="160" y1="75" x2="160" y2="120" stroke="#5B9BD9" strokeWidth="3" />
        </svg>
      );
    case 'preheater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="70" y="30" width="180" height="140" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4" />
          <rect x="78" y="38" width="164" height="124" fill="#0D1B2A" opacity="0.95" />
          <line x1="105" y1="50" x2="105" y2="150" stroke="#5B9BD9" strokeWidth="4" strokeDasharray="4 4" />
          <line x1="135" y1="50" x2="135" y2="150" stroke="#5B9BD9" strokeWidth="4" />
          <line x1="165" y1="50" x2="165" y2="150" stroke="#5B9BD9" strokeWidth="4" strokeDasharray="4 4" />
          <line x1="195" y1="50" x2="195" y2="150" stroke="#5B9BD9" strokeWidth="4" />
        </svg>
      );
    case 'pollution':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="100" y="25" width="120" height="70" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4" />
          <polygon points="100,95 220,95 180,170 140,170" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="4" />
          <circle cx="160" cy="178" r="12" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
        </svg>
      );
    case 'other':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72">
          <rect x="80" y="45" width="160" height="90" rx="45" fill="#0D1B2A" stroke="#1F5FA8" strokeWidth="5" />
          <rect x="88" y="53" width="144" height="74" rx="37" fill="#0D1B2A" opacity="0.9" />
          <rect x="110" y="15" width="22" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
          <rect x="149" y="15" width="22" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
          <rect x="188" y="15" width="22" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
        </svg>
      );
  }
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  // Embedded inquiry form states
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    capacity: '2.5 Tons/hr',
    message: ''
  });

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="text-2xl font-bold font-heading text-[#0D1B2A]">Product Configuration Not Found</h2>
        <p className="text-slate-500 max-w-sm mx-auto text-xs leading-normal">
          The requested system schematic could not be loaded. It may have been archived or updated.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] px-5 py-3 text-sm font-semibold text-white transition-colors"
        >
          Return to catalog
        </Link>
      </div>
    );
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      alert('Please fill out all contact fields.');
      return;
    }

    // Persist to localStorage savedInquiries list so they display under Request a Quote history
    const newInquiry = {
      id: `inq-${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      requiredProduct: product.name,
      ...formData
    };

    try {
      const existing = localStorage.getItem('thermal_saved_inquiries');
      const list = existing ? JSON.parse(existing) : [];
      localStorage.setItem('thermal_saved_inquiries', JSON.stringify([newInquiry, ...list]));
    } catch (e) {
      console.warn('Failed local storage persistence', e);
    }

    setInquirySent(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-left">
      
      {/* Breadcrumbs bar with navigation shortcuts */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-500 font-semibold">
          <Link to="/products" className="flex items-center gap-1.5 text-[#1F5FA8] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
          <div className="flex items-center gap-2">
            <span>Products</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1F5FA8]">{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-extrabold truncate max-w-[120px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Product Spec, Features, CAD View) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-[#1F5FA8] bg-[#1F5FA8]/10 px-3 py-1.5 rounded-full uppercase">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0D1B2A] tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-[#1F5FA8] text-sm md:text-base font-semibold font-sans leading-relaxed">
              "{product.tagline}"
            </p>
          </div>

          {/* Large Scale CAD View Canvas overlay */}
          <div className="bg-white border border-[#E1E4E3] rounded-lg p-8 flex items-center justify-center relative shadow-xs min-h-[300px]">
            <ProductImageLarge type={product.imageType} productId={product.id} />
            <span className="absolute bottom-4 left-4 bg-slate-100 font-mono text-[9px] text-slate-500 uppercase tracking-widest px-2.5 py-1 rounded">
              High Resolution Schematic CAD Layout
            </span>
          </div>

          {/* Video Showcase (Only for Steam Boilers and Thermic Fluid Heaters) */}
          {(product.category === 'Steam Boilers' || product.category === 'Thermic Fluid Heaters') && (
            <ProductVideoShowcase productId={product.id} />
          )}

          {/* Sizing description breakdown */}
          <div className="bg-white border border-[#E1E4E3] p-6 rounded-lg space-y-4">
            <h3 className="text-base font-heading font-bold tracking-tight text-[#0D1B2A] border-b border-slate-100 pb-3">
              Design & Operations Overview
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {product.description}
            </p>
          </div>

          {/* Technical specifications — the data existed but was never surfaced before */}
          <div className="bg-white border border-[#E1E4E3] rounded-lg overflow-hidden">
            <h3 className="text-base font-heading font-bold tracking-tight text-[#0D1B2A] border-b border-slate-100 px-6 pt-6 pb-3">
              Technical Specifications
            </h3>
            <div>
              {product.specifications?.map((sp, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 px-6 py-3.5 ${idx > 0 ? 'border-t border-slate-100' : ''}`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-wide text-slate-500">{sp.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#0D1B2A]">{sp.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features and standards ticks */}
          <div className="bg-white border border-[#E1E4E3] p-6 rounded-lg space-y-6">
            <h3 className="text-base font-heading font-bold tracking-tight text-[#0D1B2A] border-b border-slate-100 pb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#1F5FA8]" />
              <span>Key Performance Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features?.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5FA8] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 font-sans leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>



        </div>

        {/* Right Column (Sidebar Quick Enquiry contact form) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick specs short highlight */}
          <div className="bg-[#0D1B2A] text-white p-6 rounded-lg space-y-4 border border-white/5 relative overflow-hidden shadow-md">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 space-y-3 text-left">
              <span className="text-[10px] uppercase font-mono font-extrabold text-[#5B9BD9] tracking-wider">
                Engineering Authority
              </span>
              <h4 className="text-lg font-heading font-extrabold">IBR 1950 & ASME Certified</h4>
              <p className="text-slate-300 text-xs leading-relaxed font-sans">
                Our plant is approved to engineer and test up to 32kg/cm² configurations. Mill source testing certifications accompany raw and finished boiler components.
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#1F5FA8] pt-2 border-t border-white/10 font-mono">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Guaranteed joint radiography audits</span>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-sm space-y-6 text-left">
            <div className="space-y-1 border-b border-slate-100 pb-3">
              <h4 className="font-heading font-extrabold text-base text-[#0D1B2A]">Send Quick Enquiry</h4>
              <p className="text-[11px] text-slate-500 font-sans">
                Submit raw sizing metrics to receive CAD layout suggestions.
              </p>
            </div>

            {inquirySent ? (
              <div className="bg-[#10B981]/5 border border-[#10B981]/25 rounded-xl p-6 text-center space-y-4 font-sans py-10">
                <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto" />
                <div className="space-y-1.5">
                  <h4 className="font-heading font-bold text-[#0D1B2A] text-sm">Enquiry Received Successfully</h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    We have populated a custom ticket under your active local session profile. An engineering assessor will reach out shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setInquirySent(false)}
                  className="px-4 py-2 border border-[#E1E4E3] bg-white text-xs font-semibold rounded-lg hover:bg-slate-50 text-slate-700 transition"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs font-sans">
                
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500 block uppercase tracking-wide">Target Equipment Name</label>
                  <input
                    type="text"
                    disabled
                    value={product.name}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-[#E1E4E3] rounded-lg text-slate-600 font-semibold cursor-not-allowed outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#0D1B2A] block uppercase tracking-wide">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gujarat Synthetics Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-slate-800 font-medium focus:outline-none focus:border-[#1F5FA8] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-[#0D1B2A] block uppercase tracking-wide">Contact Person *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. S. K. Mehta"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-slate-800 font-medium focus:outline-none focus:border-[#1F5FA8] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#0D1B2A] block uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-slate-800 font-medium focus:outline-none focus:border-[#1F5FA8] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-[#0D1B2A] block uppercase tracking-wide">Mobile / Phone *</label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-slate-800 font-medium focus:outline-none focus:border-[#1F5FA8] transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#0D1B2A] block uppercase tracking-wide">Desired Capacity / Flow Sizing</label>
                  <select
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F7F7F4] border border-[#E1E4E3] rounded-lg text-[#17222E] font-semibold focus:outline-none focus:border-[#1F5FA8] transition"
                  >
                    <option value="Under 1.0 Ton / Hour">Under 1.0 Ton / Hour</option>
                    <option value="1.0 - 5.0 Tons / Hour">1.0 - 5.0 Tons / Hour</option>
                    <option value="5.0 - 15.0 Tons / Hour">5.0 - 15.0 Tons / Hour</option>
                    <option value="Above 15.0 Tons / Hour">Above 15.0 Tons / Hour (Heavy Grid)</option>
                    <option value="Custom Kcal Thermal Load (Heaters)">Custom Kcal Thermal Load (Heaters)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#0D1B2A] block uppercase tracking-wide">Thermal Sizing Notes / local fuel spec</label>
                  <textarea
                    rows={3}
                    placeholder="Provide space limitations, operational hours, or biomass briquette calorific values..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-slate-800 font-medium focus:outline-none focus:border-[#1F5FA8] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] py-3.5 text-sm font-semibold text-white shadow-sm transition-colors cursor-pointer"
                >
                  Submit sizing enquiry
                </button>

              </form>
            )}
          </div>

          {/* Quick contact helpline */}
          <div className="bg-slate-100 border border-[#E1E4E3] rounded-lg p-6 text-left space-y-4">
            <h5 className="font-heading font-bold text-xs text-[#0D1B2A] uppercase tracking-wider">Helpline</h5>
            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-[#1F5FA8] shrink-0" />
                <span>Sales: +91 79 4005 5280</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-[#1F5FA8] shrink-0" />
                <span>sales@thermalengitech.com</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed font-sans pt-1 border-t border-slate-200">
              Technical draft design proposals are completed and returned to verified industrial representatives within 24 business hours.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

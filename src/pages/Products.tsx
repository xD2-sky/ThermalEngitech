/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { ChevronRight, ShieldCheck, PackageCheck } from 'lucide-react';

// Highly detailed SVG CAD Graphics representing the product images
function ProductImage({ type }: { type: 'boiler' | 'heater' | 'generator' | 'exchanger' | 'prs' | 'preheater' | 'pollution' | 'other' }) {
  switch (type) {
    case 'boiler':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Main Boiler Saturated Shell Cylinder */}
          <rect x="70" y="55" width="180" height="90" rx="45" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="78" y="63" width="164" height="74" rx="37" fill="#0D1B2A" opacity="0.9" />
          
          {/* Internal horizontal fire/smoke tubes */}
          <line x1="86" y1="85" x2="234" y2="85" stroke="#2F7BD4" strokeWidth="2.5" strokeDasharray="5 5" />
          <line x1="86" y1="100" x2="234" y2="100" stroke="#2F7BD4" strokeWidth="2.5" />
          <line x1="86" y1="115" x2="234" y2="115" stroke="#2F7BD4" strokeWidth="2.5" strokeDasharray="5 5" />

          {/* Core steam exit nozzle drum */}
          <rect x="145" y="28" width="30" height="28" fill="#17222E" stroke="#1C5CA8" strokeWidth="2" strokeLinejoin="bevel" />
          <line x1="145" y1="36" x2="175" y2="36" stroke="#2F7BD4" strokeWidth="2" />
          <path d="M160 16 V28" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="13" r="3" fill="#EF4444" />

          {/* Fluid flow input lines */}
          <path d="M50 115 H70" stroke="#7FB2E4" strokeWidth="3.5" />
          <path d="M250 90 H270" stroke="#EF4444" strokeWidth="3.5" />

          {/* Heavy Base structural support blocks for site installation */}
          <rect x="100" y="145" width="20" height="15" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <rect x="200" y="145" width="20" height="15" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <line x1="85" y1="160" x2="235" y2="160" stroke="#1C5CA8" strokeWidth="4.5" />
        </svg>
      );
    case 'heater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Double Concentric Helical Coiled Thermic Heater Tube Shell */}
          <rect x="60" y="60" width="200" height="80" rx="12" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          
          {/* Helical spiral curves representation */}
          <path d="M80 75 Q95 65 110 75 T140 75 T170 75 T200 75 T230 75" fill="none" stroke="#1C5CA8" strokeWidth="3" />
          <path d="M80 95 Q95 85 110 95 T140 95 T170 95 T200 95 T230 95" fill="none" stroke="#1C5CA8" strokeWidth="3" />
          <path d="M80 115 Q95 105 110 115 T140 115 T170 115 T200 115 T230 115" fill="none" stroke="#1B3A63" strokeWidth="3" />

          {/* Burner attachment flange (Left side) */}
          <rect x="35" y="75" width="25" height="50" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="3.5" />
          <line x1="20" y1="100" x2="35" y2="100" stroke="#EF4444" strokeWidth="4.5" />
          <path d="M15 90 L23 100 L15 110 Z" fill="#EF4444" />
          
          {/* Fluid circulation lines */}
          <path d="M220 140 H235 V165" stroke="#0E7490" strokeWidth="3" />
          <path d="M226 158 L235 167 L244 158 Z" fill="#0E7490" />
          <path d="M100 140 H85 V165" stroke="#1C5CA8" strokeWidth="3" />
          <path d="M76 150 L85 141 L94 150 Z" fill="#1C5CA8" />
        </svg>
      );
    case 'generator':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Compact Vertical Package Hot Water Generator */}
          <rect x="100" y="30" width="120" height="140" rx="8" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="110" y="40" width="100" height="120" rx="4" fill="#0D1B2A" opacity="0.9" />

          {/* Spiral heating loops representation vertically */}
          <path d="M130 55 C130 65 190 65 190 75 C190 85 130 85 130 95 C130 105 190 105 190 115 C190 125 130 125 130 135" fill="none" stroke="#1C5CA8" strokeWidth="3" strokeLinecap="round" />

          {/* Quick-fit flow connections */}
          <rect x="75" y="55" width="25" height="18" fill="#17222E" stroke="#5B6472" strokeWidth="1.5" />
          <text x="50" y="66" fill="#7FB2E4" className="text-[9px] font-sans">IN</text>
          
          <rect x="75" y="125" width="25" height="18" fill="#17222E" stroke="#5B6472" strokeWidth="1.5" />
          <text x="45" y="137" fill="#EF4444" className="text-[9px] font-sans">OUT</text>

          {/* Chimney escape port */}
          <rect x="145" y="10" width="30" height="20" rx="2" fill="#17222E" stroke="#1C5CA8" strokeWidth="2" />
        </svg>
      );
    case 'exchanger':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Shell & Tube thermodynamic Exchange system */}
          <rect x="50" y="65" width="220" height="70" rx="8" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="58" y="73" width="204" height="54" rx="4" fill="#0D1B2A" opacity="0.9" />

          {/* Fluid flow exchange tubes */}
          <line x1="58" y1="85" x2="262" y2="85" stroke="#7FB2E4" strokeWidth="2" />
          <line x1="58" y1="92" x2="262" y2="92" stroke="#1C5CA8" strokeWidth="1.5" />
          <line x1="58" y1="100" x2="262" y2="100" stroke="#7FB2E4" strokeWidth="2" />
          <line x1="58" y1="108" x2="262" y2="108" stroke="#1C5CA8" strokeWidth="1.5" />
          <line x1="58" y1="115" x2="262" y2="115" stroke="#7FB2E4" strokeWidth="2" />

          {/* Top outlet and bottom inlet nozzle flanges */}
          <rect x="80" y="40" width="25" height="25" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <rect x="215" y="135" width="25" height="25" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />

          {/* Flow directions */}
          <path d="M92 20 V38" stroke="#7FB2E4" strokeWidth="2.5" />
          <path d="M227 165 V147" stroke="#EF4444" strokeWidth="2.5" />
        </svg>
      );
    case 'prs':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Pressure Reducing Stations (PRS) Fluid bypass loops */}
          {/* Main pipe loop line */}
          <path d="M40 100 H280" stroke="#1C5CA8" strokeWidth="4.5" />
          
          {/* Top bypass pathing */}
          <path d="M80 100 V60 H240 V100" fill="none" stroke="#1C5CA8" strokeWidth="4.5" />

          {/* Self Actuated Regulator diaphragm valve representation (Main block) */}
          <circle cx="160" cy="100" r="16" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3" />
          <rect x="150" y="65" width="20" height="20" fill="#EF4444" stroke="#0D1B2A" strokeWidth="2" />
          <line x1="160" y1="82" x2="160" y2="114" stroke="#7FB2E4" strokeWidth="2.5" />

          {/* Isolating Flanges and ball valves */}
          <rect x="75" y="85" width="10" height="30" fill="#1B2A3D" stroke="#5B6472" strokeWidth="1.5" />
          <rect x="235" y="85" width="10" height="30" fill="#1B2A3D" stroke="#5B6472" strokeWidth="1.5" />

          {/* Upstream pressure monitor gauges */}
          <circle cx="105" cy="75" r="8" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="105" y1="75" x2="110" y2="71" stroke="#7FB2E4" strokeWidth="2" />
          <line x1="105" y1="83" x2="105" y2="100" stroke="#5B6472" strokeWidth="1.5" />

          <circle cx="215" cy="75" r="8" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="215" y1="75" x2="210" y2="71" stroke="#EF4444" strokeWidth="2" />
          <line x1="215" y1="83" x2="215" y2="100" stroke="#5B6472" strokeWidth="1.5" />
        </svg>
      );
    case 'preheater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Air Pre Heater (APH) Outer Steel Panel Casing */}
          <rect x="80" y="35" width="160" height="130" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3.5" />
          <rect x="88" y="43" width="144" height="114" fill="#0D1B2A" opacity="0.95" />
          
          {/* Cross flow tube matrix representation */}
          <line x1="110" y1="55" x2="110" y2="145" stroke="#7FB2E4" strokeWidth="3" strokeDasharray="3 4" />
          <line x1="135" y1="55" x2="135" y2="145" stroke="#7FB2E4" strokeWidth="3" />
          <line x1="160" y1="55" x2="160" y2="145" stroke="#7FB2E4" strokeWidth="3" strokeDasharray="3 4" />
          <line x1="185" y1="55" x2="185" y2="145" stroke="#7FB2E4" strokeWidth="3" />
          <line x1="210" y1="55" x2="210" y2="145" stroke="#7FB2E4" strokeWidth="3" strokeDasharray="3 4" />

          {/* Thermal air flow direction indications */}
          <path d="M50 75 H78" stroke="#7FB2E4" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 67 L82 75 L72 83 Z" fill="#7FB2E4" />
          <text x="35" y="60" fill="#7FB2E4" className="text-[10px] font-mono font-bold">Cold Air</text>

          <path d="M242 125 H278" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
          <path d="M272 117 L282 125 L272 133 Z" fill="#EF4444" />
          <text x="245" y="152" fill="#EF4444" className="text-[10px] font-mono font-bold">Hot Air</text>
        </svg>
      );
    case 'pollution':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Centrifugal Cone Dust Collector Separator */}
          <rect x="110" y="30" width="100" height="60" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3.5" />
          <rect x="118" y="38" width="84" height="44" fill="#0D1B2A" opacity="0.9" />

          <polygon points="110,90 210,90 175,160 145,160" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3.5" />
          <polygon points="118,92 202,92 170,154 150,154" fill="#0D1B2A" opacity="0.85" />

          <circle cx="160" cy="172" r="10" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
        </svg>
      );
    case 'other':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          {/* Main Distribution Steam Header Manifold or Flash Tank */}
          <rect x="90" y="55" width="140" height="70" rx="35" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4.5" />
          <rect x="98" y="63" width="124" height="54" rx="27" fill="#0D1B2A" opacity="0.85" />

          <rect x="65" y="75" width="25" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <path d="M50 90 H70" stroke="#7FB2E4" strokeWidth="4" />

          <rect x="110" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <rect x="151" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <rect x="192" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />

          <line x1="100" y1="160" x2="220" y2="160" stroke="#1C5CA8" strokeWidth="3" />
        </svg>
      );
  }
}

export default function Products() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read category from URL query parameters if present, default to 'Steam Boilers'
  const activeCategory = searchParams.get('category') || 'Steam Boilers';

  const categories = [
    'Steam Boilers',
    'Thermic Fluid Heaters',
    'Pressure Reducing Stations',
    'Air Pre Heaters',
    'Heat Exchangers',
    'Hot Water Generators',
    'Pollution Control Equipments',
    'Other Equipments',
    'All'
  ];

  const handleCategorySelect = (category: string) => {
    setSearchParams({ category });
  };

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-0 text-left bg-slate-50 min-h-screen">
      
      {/* Banner */}
      <div className="bg-[#0D1B2A] text-white pt-16 pb-14 px-5 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7FB2E4] uppercase">
            Product Catalog
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Industrial Thermal Solutions
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            ISO and IBR certified boilers, advanced high-temp thermic heater coils, and auxiliary heat-recovery equipment tailored for heavy plant performance.
          </p>
        </div>
      </div>

      {/* Main filterable showroom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Horizontal Category Pill Sliders */}
        <div className="flex flex-wrap items-center justify-start gap-2 pb-8 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-2 border rounded-full text-[13px] font-medium tracking-tight transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1C5CA8] border-[#1C5CA8] text-white shadow-sm'
                  : 'bg-white border-[#E1E4E3] text-slate-600 hover:border-slate-400 hover:text-[#0D1B2A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic products Grid */}
        <div className="pt-10">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-[#E1E4E3] rounded-lg p-12 text-center max-w-md mx-auto space-y-4 shadow-sm">
              <PackageCheck className="w-12 h-12 text-[#1C5CA8] mx-auto opacity-70" />
              <h4 className="text-base font-heading font-bold text-[#0D1B2A]">No Products Registered</h4>
              <p className="text-xs text-slate-500 leading-normal">
                There are no currently active models under this custom category. Use another filter.
              </p>
              <button 
                onClick={() => handleCategorySelect('All')}
                className="px-4 py-2 bg-[#0D1B2A] text-white text-[11px] font-bold uppercase tracking-wider rounded transition"
              >
                Reset to all products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => navigate(`/products/${prod.id}`)}
                  className="bg-white border border-[#E1E4E3] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#1C5CA8]/40 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >

                  {/* Top schematic illustration stage */}
                  <div className="p-6 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-100 flex items-center justify-center relative min-h-[200px]">
                    <ProductImage type={prod.imageType} />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-[#1C5CA8] rounded-md tracking-wide">
                      {prod.category}
                    </span>
                  </div>

                  {/* Body textual specs */}
                  <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2 text-left">
                      <h3 className="font-heading font-bold text-[#0D1B2A] text-[15px] group-hover:text-[#1C5CA8] transition-colors duration-200 line-clamp-2 leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-3">
                        {prod.description}
                      </p>
                    </div>

                    {/* Miniature horizontal spec summary */}
                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
                      {prod.specifications?.slice(0, 2).map((sp, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <span className="block text-[10px] font-medium text-slate-400 tracking-wide">
                            {sp.label}
                          </span>
                          <span className="block text-[12px] font-semibold text-[#17222E] truncate" title={sp.value}>
                            {sp.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom links and action strip */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[12px] font-medium text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#1C5CA8]" />
                      IBR certified
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${prod.id}`);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#0D1B2A] hover:bg-[#1C5CA8] px-3.5 py-2 text-[12px] font-semibold text-white transition-colors cursor-pointer"
                    >
                      <span>View specifications</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

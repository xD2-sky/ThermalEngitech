/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onRequestQuote: () => void;
  onViewProducts: () => void;
}

export default function Hero({ onRequestQuote, onViewProducts }: HeroProps) {
  return (
    <section id="hero" className="relative bg-[#0D1B2A] text-white overflow-hidden font-sans">
      {/* Fine blueprint grid, dark ink base */}
      <div className="absolute inset-0 grid-blueprint opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A141F] via-[#0D1B2A] to-[#0D1B2A]" />
      {/* Warm glow seated behind the product photo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-[#B3401F]/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4 pt-28 pb-16 lg:pt-32 lg:pb-0 lg:min-h-[88vh]">

          {/* ---------------- Text column ---------------- */}
          <div className="lg:col-span-7 space-y-7 text-left">

            <div className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 border border-white/15 text-slate-200 text-[11px] font-mono tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D65A32]" />
              <span>ISO 9001:2015 · ASME · IBR 1950 Compliant</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-[13vw] leading-[0.95] sm:text-6xl lg:text-[4.6rem] xl:text-[5rem] font-heading font-black tracking-tight uppercase">
                Engineering<br />
                <span className="text-[#D65A32]">Industrial Heat</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
                process heat systems for plants that cannot afford downtime — built in Dhamatwan,
                Gujarat, and certified for both Indian and export standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <button
                onClick={onViewProducts}
                className="px-7 py-4 bg-[#B3401F] hover:bg-[#D65A32] text-white font-bold text-xs tracking-[0.08em] uppercase transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore the Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="px-7 py-4 bg-transparent text-white border border-white/25 hover:border-white/60 font-bold text-xs tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer"
              >
                Request a Quote
              </button>
            </div>

            {/* Metrics — set as a spec strip, not a stat-card grid */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 max-w-lg">
              {[
                ['12+', 'Years engineering'],
                ['1,200+', 'Systems installed'],
                ['100%', 'IBR-certified builds'],
              ].map(([value, label], i) => (
                <div key={i} className={`py-1 ${i > 0 ? 'border-l border-white/10 pl-5 ml-5' : ''}`}>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white">{value}</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- Product photo column ---------------- */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-full max-w-md">
              <img
                src="/images/products/multi-fuel-system.png"
                alt="Thermal Engitech multi-fuel fired boiler system"
                className="relative z-10 w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              />
              {/* Spec callout tag, corner-frame device ties to the blueprint motif */}
              <div className="corner-frame absolute -bottom-2 left-0 right-8 sm:right-16 bg-[#0D1B2A]/90 backdrop-blur-sm border border-white/10 px-4 py-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#D65A32]">Field unit — Dhamatwan facility</p>
                <p className="text-xs text-slate-300 mt-1">Multi-fuel fired combi-thermal system, factory-assembled and dispatch-ready</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

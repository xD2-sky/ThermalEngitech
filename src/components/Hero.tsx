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
    <section
      id="hero"
      className="relative bg-[#0B1B2B] text-white overflow-hidden font-sans min-h-[100dvh] md:min-h-screen flex items-center"
    >
      {/* Depth: soft vertical gradient + one quiet light source behind the unit */}
      <div className="absolute inset-0 grid-blueprint" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081420] via-[#0B1B2B] to-[#0B1B2B]" />
      <div className="absolute right-[-6rem] top-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-[#1C5CA8]/18 blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">

          {/* ---------------- Text column ---------------- */}
          <div className="lg:col-span-7 max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] pl-2.5 pr-3.5 py-1.5 text-slate-200 text-xs font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7FB2E4]" />
              <span>ISO 9001:2015 &nbsp;·&nbsp; ASME &nbsp;·&nbsp; IBR 1950 Compliant</span>
            </div>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[3.4rem] font-heading font-extrabold leading-[1.06] text-white">
              Industrial heat systems,
              <span className="block text-[#7FB2E4]">built to keep running</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">
              Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
              process-heat systems for plants where unplanned downtime is not an option — built in
              Dhamatwan, Gujarat, and certified to both Indian and export standards.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onViewProducts}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <span>Explore the catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center rounded-md border border-white/25 hover:border-white/50 hover:bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 cursor-pointer"
              >
                Request a quote
              </button>
            </div>

            {/* Metrics — a quiet spec strip */}
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-7">
              {[
                ['12+', 'Years in the field'],
                ['1,200+', 'Systems installed'],
                ['100%', 'IBR-certified builds'],
              ].map(([value, label], i) => (
                <div key={i}>
                  <dt className="text-2xl sm:text-[1.7rem] font-heading font-bold text-white">{value}</dt>
                  <dd className="mt-1.5 text-xs text-slate-400 leading-snug">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------------- Product photo column ---------------- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <figure className="w-full max-w-lg">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <img
                  src={`${import.meta.env.BASE_URL}images/products/multi-fuel-system.png`}
                  alt="Thermal Engitech multi-fuel fired combi-thermal boiler system"
                  className="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline gap-2 text-xs">
                <span className="font-semibold tracking-wide text-[#7FB2E4] whitespace-nowrap">Field unit</span>
                <span className="text-slate-400 leading-snug">
                  Multi-fuel fired combi-thermal system, factory-assembled at Dhamatwan
                </span>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}

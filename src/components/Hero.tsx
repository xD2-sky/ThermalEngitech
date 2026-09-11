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
      {/* Background photo — industrial pipes and valves above an open furnace door.
          Photo by Dave Meckler on Unsplash (unsplash.com), used under the Unsplash License. */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={`${import.meta.env.BASE_URL}images/hero-furnace-bg.webp`} type="image/webp" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-furnace-bg.jpg`}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Scrim: darkest over the text on the left, lighter toward the right so the
          photo still reads, plus a flat wash underneath so it never looks washed out. */}
      <div className="absolute inset-0 bg-[#0B1B2B]/25" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,27,43,0.92)_0%,rgba(11,27,43,0.75)_45%,rgba(11,27,43,0.55)_100%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pb-16">
        <div className="max-w-2xl">

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
      </div>
    </section>
  );
}

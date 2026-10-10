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
      className="relative bg-[#0B1B2B] overflow-hidden font-sans min-h-[100svh] lg:min-h-[100vh] flex items-center py-10"
    >
      {/* Full-bleed background photo — an Indian refinery/process plant
          against open sky. Static, no parallax/zoom. */}
      <picture className="absolute inset-0 block">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-refinery-plant.jpg`}
          alt="An industrial process plant with pipe racks and a flare stack against an open sky"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Solid dark navy wash — strong enough that white text stays legible
          regardless of what's directly behind it in the photo, instead of
          depending on finding a "clear" patch of sky each time. Eases off
          toward the right so the photo still reads clearly there. */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,27,43,0.92)_0%,rgba(11,27,43,0.82)_35%,rgba(11,27,43,0.45)_60%,rgba(11,27,43,0.15)_85%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,2rem)]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 pl-3 pr-4 py-1.5 text-white/80 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#7FB2E4]" />
            <span>ISO 9001:2015 · ASME · IBR 1950</span>
          </div>

          <h1 className="mt-7 text-[clamp(2.2rem,1.5rem+2.4vw,4rem)] font-heading font-extrabold leading-[1.04] tracking-[-0.025em]">
            <span className="block text-white">Industrial heat systems,</span>
            <span className="block text-[#7FB2E4]">built to keep running</span>
          </h1>

          <p className="mt-6 text-[clamp(0.98rem,0.9rem+0.3vw,1.18rem)] text-white/70 leading-relaxed max-w-md">
            Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
            process-heat systems for plants where unplanned downtime is not an option — built in
            Dhamatwan, Gujarat, and certified to both Indian and export standards.
          </p>

          {/* Buttons — smaller, quieter pills; less heavy shadow/glow than before */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onViewProducts}
              data-testid="hero-explore-btn"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1C5CA8] text-white hover:bg-[#2F7BD4] px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              <span>Explore the catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onRequestQuote}
              data-testid="hero-quote-btn"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent text-white hover:border-white/60 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

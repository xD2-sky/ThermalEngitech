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
      className="relative bg-[#F7F9FC] text-[#0B1B2B] overflow-hidden font-sans min-h-[100svh] lg:min-h-[100vh] flex items-center py-10"
    >
      {/* Full-bleed background photo — a process plant on a riverside against
          open sky. The structure/chimneys sit in the right half of the frame,
          leaving the left clear for text. Static, no parallax/zoom. */}
      <picture className="absolute inset-0 block">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-plant-riverside.jpg`}
          alt="An industrial process plant beside a river, reflected on the water under an open sky"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%' }}
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Light-neutral CSS scrim — just enough to keep text legible on the
          left, easing off quickly toward the right so most of the photo
          reads through clearly. */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(248,249,251,0.22)_0%,rgba(248,249,251,0.12)_30%,rgba(248,249,251,0.04)_55%,rgba(248,249,251,0)_80%)]" />

      {/* Separate top band so the fixed navbar (dark text on this route)
          stays legible across its full width, not just on the left where
          the diagonal scrim above is strongest. */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F7F9FC]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,2rem)]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1B2B]/12 bg-white pl-3 pr-4 py-1.5 text-[#47566A] text-xs font-medium shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#1C5CA8]" />
            <span>ISO 9001:2015 · ASME · IBR 1950</span>
          </div>

          <h1 className="mt-7 text-[clamp(2.2rem,1.5rem+2.4vw,4rem)] font-heading font-extrabold leading-[1.04] tracking-[-0.025em]">
            <span className="block text-[#0B1B2B]">Industrial heat systems,</span>
            <span className="block text-[#1C5CA8]">built to keep running</span>
          </h1>

          <p className="mt-6 text-[clamp(0.98rem,0.9rem+0.3vw,1.18rem)] font-medium leading-relaxed max-w-md">
            <span className="text-[#0B1B2B]">
              Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
              process-heat systems for plants where unplanned{' '}
            </span>
            <span className="text-white">
              downtime is not an option — built in
              Dhamatwan, Gujarat, and certified to both Indian and export standards.
            </span>
          </p>

          {/* Buttons — smaller, quieter pills; less heavy shadow/glow than before */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onViewProducts}
              data-testid="hero-explore-btn"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1C5CA8] text-white hover:bg-[#103E72] px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              <span>Explore the catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onRequestQuote}
              data-testid="hero-quote-btn"
              className="inline-flex items-center justify-center rounded-full border border-[#0B1B2B]/15 bg-white text-[#0B1B2B] hover:border-[#0B1B2B]/40 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              Request a quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

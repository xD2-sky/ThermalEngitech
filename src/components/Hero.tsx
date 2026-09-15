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
      className="relative bg-black text-white overflow-hidden font-sans min-h-[100dvh] md:min-h-screen flex items-center"
    >
      {/* Background photo — "Denks work, 1973," a vintage factory with pipes, 1970s film photograph.
          Photo by Annie Spratt on Unsplash (unsplash.com), used under the Unsplash License. */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={`${import.meta.env.BASE_URL}images/hero-furnace-bg-v2.webp`} type="image/webp" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-furnace-bg-v2.jpg`}
            alt=""
            className="w-full h-full object-cover object-center grayscale-[15%]"
          />
        </picture>
      </div>

      {/* Void-black scrim — darkest over the text, a faint periwinkle wash bottom-right
          standing in for Index's "desk lamp on a drafting table" radial light. */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.8)_45%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute right-0 bottom-0 w-[560px] h-[560px] rounded-full bg-[#7089ba]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,2rem)] pt-28 pb-24 lg:pb-16">
        <div className="max-w-[clamp(20rem,50vw,40rem)]">

          <div
            className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/40 pl-3 pr-4 py-1.5 text-white text-[11px] font-medium uppercase tracking-[0.08em]"
            style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#7089ba] shrink-0" />
            <span>ISO 9001:2015 · ASME · IBR 1950</span>
          </div>

          <h1 className="mt-7 text-[clamp(2.1rem,1.5rem+2.25vw,3.75rem)] font-heading font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
            Industrial heat systems,
            <span className="block text-[#7089ba]">built to keep running</span>
          </h1>

          <p className="mt-6 text-[clamp(0.95rem,0.88rem+0.3vw,1.15rem)] text-[#ababab] leading-relaxed max-w-[clamp(20rem,36vw,34rem)]">
            Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
            process-heat systems for plants where unplanned downtime is not an option — built in
            Dhamatwan, Gujarat, and certified to both Indian and export standards.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onViewProducts}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              <span>Explore the catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white text-white px-6 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Request a quote
            </button>
          </div>

          {/* Metrics — a quiet spec strip */}
          <dl className="mt-12 grid grid-cols-3 gap-[clamp(1rem,1.5vw,1.75rem)] max-w-[clamp(18rem,28vw,32rem)] border-t border-dashed border-white/25 pt-7">
            {[
              ['12+', 'Years in the field'],
              ['1,200+', 'Systems installed'],
              ['100%', 'IBR-certified builds'],
            ].map(([value, label], i) => (
              <div key={i}>
                <dt className="text-[clamp(1.4rem,1.15rem+0.9vw,2rem)] font-heading font-extrabold text-white">{value}</dt>
                <dd className="mt-1.5 text-[clamp(0.65rem,0.62rem+0.1vw,0.75rem)] text-[#808080] leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

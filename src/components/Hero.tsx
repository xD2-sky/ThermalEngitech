/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { SITE } from '../config/site';

interface HeroProps {
  onRequestQuote: () => void;
  onViewProducts: () => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero({ onRequestQuote, onViewProducts }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative bg-[#F7F9FC] text-[#0B1B2B] overflow-hidden font-sans min-h-[calc(100svh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center py-8 lg:py-6"
    >
      {/* Soft light background: faint blueprint grid + gentle blue/steam glows */}
      <div className="absolute inset-0 grid-blueprint-light opacity-[0.5]" aria-hidden="true" />
      <div className="absolute -top-32 -right-24 w-[620px] h-[620px] rounded-full bg-[#2F7BD4]/10 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 w-[560px] h-[560px] rounded-full bg-[#7FB2E4]/15 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,2rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 max-w-2xl"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-[#1C5CA8]/25 bg-white pl-3 pr-4 py-1.5 text-[#1C5CA8] text-[11px] font-semibold uppercase tracking-[0.08em] shadow-sm"
              style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>ISO 9001:2015 · ASME · IBR 1950</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-[clamp(2.2rem,1.5rem+2.4vw,4rem)] font-heading font-extrabold leading-[1.04] tracking-[-0.025em] text-[#0B1B2B]"
            >
              Industrial heat systems,
              <span className="block text-[#1C5CA8]">built to keep running</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-[clamp(0.98rem,0.9rem+0.3vw,1.18rem)] text-[#47566A] leading-relaxed max-w-xl"
            >
              Thermal Engitech designs and manufactures steam boilers, thermic fluid heaters and
              process-heat systems for plants where unplanned downtime is not an option — built in
              Dhamatwan, Gujarat, and certified to both Indian and export standards.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onViewProducts}
                data-testid="hero-explore-btn"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1C5CA8] text-white hover:bg-[#103E72] px-6 py-3.5 text-sm font-semibold shadow-md shadow-[#1C5CA8]/20 transition-colors duration-200 cursor-pointer"
              >
                <span>Explore the catalogue</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onRequestQuote}
                data-testid="hero-quote-btn"
                className="inline-flex items-center justify-center rounded-full border border-[#0B1B2B]/20 bg-white text-[#0B1B2B] hover:border-[#0B1B2B] px-6 py-3.5 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Request a quote
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-6">
              <a
                href={`tel:${SITE.phonePrimaryTel}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#47566A] hover:text-[#1C5CA8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1C5CA8]" />
                Speak to an engineer — {SITE.phonePrimaryDisplay}
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-8 grid grid-cols-3 gap-[clamp(1rem,1.5vw,1.75rem)] max-w-lg border-t border-[#E4E7EC] pt-6"
            >
              {[
                ['12+', 'Years in the field'],
                ['1,200+', 'Systems installed'],
                ['100%', 'IBR-certified builds'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-[clamp(1.5rem,1.15rem+0.9vw,2.1rem)] font-heading font-extrabold text-[#0B1B2B]">{value}</dt>
                  <dd className="mt-1.5 text-[clamp(0.66rem,0.62rem+0.1vw,0.76rem)] text-[#78889B] leading-snug">{label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right — image card with subtle steam + float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0B1B2B]/15 ring-1 ring-black/5 animate-float">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-pipes-light.jpg`}
                alt="Polished stainless-steel steam pipework inside a modern process-heating plant"
                className="w-full h-[260px] sm:h-[320px] lg:h-[400px] object-cover animate-kenburns"
                loading="eager"
                fetchPriority="high"
              />
              {/* light steam wisps drifting over the image */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <span className="steam-plume steam-1" />
                <span className="steam-plume steam-3" />
              </div>
              {/* floating certification chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white/85 backdrop-blur-md px-4 py-3 shadow-lg ring-1 ring-black/5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1C5CA8]/10 text-[#1C5CA8]">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold text-[#0B1B2B]">IBR & ASME certified builds</p>
                    <p className="text-[10px] text-[#78889B]">Up to 32 kg/cm² · dry-steam output</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1C5CA8] hidden sm:block">Est. 2012</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

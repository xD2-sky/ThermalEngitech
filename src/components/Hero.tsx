/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

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
      className="relative bg-[#F7F9FC] text-[#0B1B2B] overflow-hidden font-sans min-h-[calc(100svh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center py-10"
    >
      {/* Full-bleed background photo — bright, natural daylight treatment. Softened
          slightly and the surroundings lightened toward white/light-gray, but the
          boiler's own natural red/black colors are left intact, not desaturated. */}
      <picture className="absolute inset-0">
        <source srcSet={`${import.meta.env.BASE_URL}images/hero-boiler-bright-final.webp`} type="image/webp" />
        <img
          src={`${import.meta.env.BASE_URL}images/hero-boiler-bright-final.jpg`}
          alt="Thermal Engitech steam boiler on-site, industrial facility backdrop"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Extra light-neutral CSS scrim on top of the baked-in treatment — keeps text
          reliably legible regardless of exact crop/viewport. White/light-gray only,
          no blue or dark tint, easing off toward the right so the photo reads through. */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(248,249,251,0.88)_0%,rgba(248,249,251,0.68)_38%,rgba(248,249,251,0.22)_70%,rgba(248,249,251,0.05)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F7F9FC]/50 via-transparent to-[#F7F9FC]/25" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1rem,3vw,2rem)]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
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
        </motion.div>
      </div>
    </section>
  );
}

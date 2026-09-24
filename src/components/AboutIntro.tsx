/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Settings, Factory, Users } from 'lucide-react';
import Reveal from './Reveal';

const HIGHLIGHTS = [
  {
    icon: Settings,
    title: 'Engineering Excellence',
    desc: 'Engineering-driven solutions designed for performance, efficiency and reliability.',
  },
  {
    icon: Factory,
    title: 'Reliable Manufacturing',
    desc: 'Focus on quality, precision and dependable industrial equipment.',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    desc: 'Solutions developed around real operating requirements and long-term customer needs.',
  },
];

/**
 * Homepage "About Us" intro — sits between Hero and the Product Range band.
 * Left: the Thermal Engitech pipe-mark logo, large and prominent, used as a
 * CSS mask with a real industrial photo showing through — the photo scrolls
 * within the fixed mask shape for a subtle "contained motion" effect.
 * Background: plain white — a clean, content-height section (no photo/
 * overlay), sized to its own content rather than forced to full viewport
 * height, since that was sized for the old full-bleed photo treatment.
 */
export default function AboutIntro() {
  const base = import.meta.env.BASE_URL;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-linked position for the photo inside the logo mask — the mask
  // shape stays fixed, the photo drifts within it as the section scrolls by.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const maskImgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">

        {/* Visual — large logo-shaped mask; the photo inside drifts on scroll */}
        <Reveal className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-[92%] max-w-[440px] lg:max-w-none lg:w-[clamp(360px,38vw,540px)]">
            <div
              className="relative w-full aspect-[1312/1199] bg-[#0B1B2B] overflow-hidden"
              style={{
                WebkitMaskImage: `url(${base}images/brand/logo-mark.png)`,
                maskImage: `url(${base}images/brand/logo-mark.png)`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            >
              <motion.img
                src={`${base}images/about-logo-photo.jpg`}
                alt="Industrial process-heating pipework against an open sky"
                className="absolute inset-x-0 h-[124%] w-full object-cover"
                style={{ top: '-12%', objectPosition: '20% 45%', y: maskImgY }}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.1} className="lg:col-span-6 space-y-6 text-left">
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#DC2626]">
            <span className="w-8 h-[2px] bg-[#DC2626]" />
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.08]">
            Built on Expertise.
            <br />
            <span className="text-[#DC2626]">Driven by Purpose.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#47566A] leading-relaxed max-w-xl">
            Thermal Engitech is a Gujarat-based engineering and manufacturing company delivering
            reliable, efficient thermal and process-heating solutions — steam boilers, thermic
            fluid heaters and heat exchangers, engineered in-house and built to IBR, ASME and
            ISO 9001:2015 standards for customers across India and export markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-[#0B1B2B]/15">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="group flex sm:flex-col items-start sm:items-start gap-3 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B1B2B]/5 text-[#0B1B2B] transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-[#DC2626]/8">
                  <h.icon className="w-5 h-5 transition-colors duration-300 group-hover:text-[#DC2626]" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#0B1B2B] leading-tight">
                    {h.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#B3401F] text-white px-5 py-2.5 text-sm font-semibold transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(220,38,38,0.5)]"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

      </div>
    </div>
  );
}

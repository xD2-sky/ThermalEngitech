/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const HIGHLIGHTS = [
  {
    n: '01',
    title: 'Engineering Excellence',
    desc: 'Engineering-driven solutions designed for performance, efficiency and reliability.',
  },
  {
    n: '02',
    title: 'Reliable Manufacturing',
    desc: 'Focus on quality, precision and dependable industrial equipment.',
  },
  {
    n: '03',
    title: 'Customer Focused',
    desc: 'Solutions developed around real operating requirements and long-term customer needs.',
  },
];

/**
 * Homepage "About Us" intro — sits between Hero and the Product Range band.
 * Left: the Thermal Engitech pipe-mark logo used as a CSS mask, with a real
 * industrial equipment photograph showing through the shape. Right: a short
 * factual company summary, three highlights, and a link to the full About page.
 */
export default function AboutIntro() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Visual — logo-shaped mask with an industrial photo showing through it */}
        <Reveal className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-[78%] max-w-[380px] lg:max-w-none lg:w-[clamp(300px,34vw,520px)]">
            <div
              className="relative w-full aspect-[1312/1199] bg-[#0B1B2B]"
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
              <img
                src={`${base}images/hero-steel-vessel.jpg`}
                alt="Thermal Engitech industrial process-heating equipment"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: '50% 32%' }}
                loading="lazy"
              />
            </div>
            {/* Small accent mark — reuses the site's established red accent */}
            <span className="absolute -bottom-2 left-1 h-1 w-16 bg-[#DC2626] rounded-full" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.1} className="lg:col-span-7 space-y-6 text-left">
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

          <div className="pt-2 border-t border-[#E4E7EC] divide-y divide-[#E4E7EC]">
            {HIGHLIGHTS.map((h) => (
              <div key={h.n} className="grid grid-cols-[2.75rem_1fr] gap-3 py-5">
                <span
                  className="text-xs font-bold text-[#DC2626] pt-0.5"
                  style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
                >
                  {h.n}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#0B1B2B]">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#78889B] mt-1 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#B3401F] text-white px-5 py-2.5 text-sm font-medium transition-colors duration-200"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Link } from 'react-router-dom';
import { Target, Compass, Sparkles, Award, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import Reveal from '../components/Reveal';

const PILLARS = [
  {
    icon: Target,
    title: 'Client-Centric Sizing',
    desc: 'Scaled to your footprint, fuels, and pressure loops — never a catalog model.',
  },
  {
    icon: Compass,
    title: 'Safety Interlocks',
    desc: 'Dual water level checks, relief valves, flame cut-offs — standard on every unit.',
  },
  {
    icon: Sparkles,
    title: 'Materials Honesty',
    desc: 'Certified ASTM materials, backed by original mill test certificates.',
  },
];

export default function AboutUs() {
  useDocumentMeta(
    'About Us',
    'Founded 2012 in Gujarat — Thermal Engitech designs, engineers and manufactures heavy-duty boilers and heaters from our Dhamatwan facility.'
  );

  const base = import.meta.env.BASE_URL;

  const leadership = [
    {
      name: 'Chintant Parmar',
      role: 'Co-Founder',
    },
    {
      name: 'Abhishek Jethalia',
      role: 'Co-Founder',
    }
  ];

  return (
    <div className="space-y-0 text-left bg-white">

      {/* Page header — full-bleed photo with a dark scrim, text on top, matching the other pages' banners */}
      <div className="relative overflow-hidden min-h-[360px] flex items-end px-4 sm:px-6 lg:px-8">
        <img
          src={`${base}images/about-hero-industrial.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />

        <div className="relative z-10 max-w-4xl mx-auto w-full pt-28 sm:pt-32 pb-16 text-center space-y-5">
          <Reveal as="span" className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#7FB2E4]">
            About Us
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-[-0.02em] leading-[1.08]">
              Built on Expertise.
              <br />
              <span className="text-[#7FB2E4]">Driven by Purpose.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
              Thermal Engitech is a Gujarat-based engineering and manufacturing company delivering
              reliable, efficient thermal and process-heating solutions — steam boilers, thermic
              fluid heaters and heat exchangers, engineered in-house and built to IBR, ASME and
              ISO 9001:2015 standards for customers across India and export markets.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Our history & vision — logo-masked photo (left) + narrative and stats (right),
          same composition as the Home page's About Us intro */}
      <div className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <Reveal className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-[80%] max-w-[380px] lg:max-w-none lg:w-[clamp(320px,32vw,460px)]">
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
                <img
                  src={`${base}images/about-logo-photo.jpg`}
                  alt="Industrial process-heating pipework against an open sky"
                  className="absolute inset-x-0 h-[124%] w-full object-cover"
                  style={{ top: '-12%', objectPosition: '20% 45%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.05} className="space-y-6">
              <p className="flex items-center gap-2 text-sm text-[#78889B]">
                <span className="text-[#1C5CA8]">•</span>
                Our history & vision
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em]">
                Building dependable process-heat systems since 2012
              </h2>

              <p className="text-sm text-[#47566A] leading-relaxed">
                Founded 2012 in Gujarat, now a full heavy-engineering plant in Dhamatwan — trusted
                across India and export markets for complete boiler assemblies, heaters, and accessories.
              </p>
            </Reveal>

            {/* Plant stats */}
            <Reveal delay={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#0B1B2B]/15 text-center sm:text-left">
              <div>
                <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B]">
                  <AnimatedCounter value={2000} suffix="+" />
                </span>
                <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">Commissioned plants</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B]">
                  <AnimatedCounter value={7500} suffix=" m²" />
                </span>
                <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">Dhamatwan workshop</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B]">
                  <AnimatedCounter value={100} suffix="%" />
                </span>
                <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">IBR & ASME compliant</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B]">
                  <AnimatedCounter value={12} suffix="+ years" />
                </span>
                <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">Industry presence</span>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Foundational pillars — icon-highlight row, same hover-forward treatment as
            the Home page's About Us intro (scale up, lift, deepen shadow on hover) */}
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-[#E4E7EC]">
          <Reveal className="space-y-1.5 mb-8">
            <p className="flex items-center gap-2 text-sm text-[#78889B]">
              <span className="text-[#1C5CA8]">•</span>
              Why choose us
            </p>
            <h3 className="font-heading font-bold text-lg text-[#0B1B2B]">Our foundational pillars</h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <React.Fragment key={p.title}>
              <Reveal delay={i * 0.08} className="group flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1B2B]/5 text-[#0B1B2B] shadow-sm transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-white">
                  <p.icon className="w-5 h-5 transition-colors duration-300 group-hover:text-[#1C5CA8]" strokeWidth={1.75} />
                </span>
                <div className="space-y-1">
                  <b className="text-sm font-bold text-[#0B1B2B] block">{p.title}</b>
                  <p className="text-xs text-[#78889B] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E4E7EC] bg-panel-blue overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">

          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <p className="flex items-center justify-center gap-2 text-sm text-[#78889B]">
              <span className="text-[#1C5CA8]">•</span>
              Leadership team
            </p>
            <h2 className="text-3xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em]">
              Guided by process-heat veterans
            </h2>
            <p className="text-[#47566A] text-sm">
              Our directors combine academic thermal research with robust, practical GIDC workshop supervision.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leadership.map((lead, i) => (
              <React.Fragment key={i}>
              <Reveal
                delay={i * 0.08}
                className="bg-white border border-[#E4E7EC] rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="space-y-3 text-left">
                  <div className="h-12 w-12 rounded-full bg-[#1C5CA8]/10 text-[#1C5CA8] flex items-center justify-center font-heading font-bold text-lg">
                    {lead.name.split(' ')[0][0]}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#0B1B2B]">{lead.name}</h4>
                    <span className="text-[11px] font-semibold text-[#1C5CA8]">{lead.role}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] text-[11px] font-semibold text-[#1C5CA8] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>ISO audit representative</span>
                </div>
              </Reveal>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* Mission — text and the general-arrangement drawing share one
          continuous blueprint-canvas surface (soft blue gradient,
          decorative corner arcs) instead of the drawing sitting in
          its own separate white card — the whole section reads as a single
          designed composition rather than text-plus-a-dropped-in-image. */}
      <div className="relative overflow-hidden bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">

        <svg className="absolute -bottom-24 -left-24 w-[420px] h-[420px] text-[#1C5CA8]/[0.08] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -top-20 -right-20 w-[360px] h-[360px] text-[#1C5CA8]/[0.08] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-5 space-y-7 text-left">
            <Reveal className="flex items-center gap-2.5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#78889B] font-semibold">
                Our Ongoing Mission
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-heading font-extrabold tracking-[-0.02em] leading-[1.06]">
                <span className="text-[#0B1B2B]">Engineering a</span>
                <br />
                <span className="text-[#1C5CA8]">cleaner, safer</span>{' '}
                <span className="text-[#0B1B2B]">tomorrow.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-[#47566A] leading-relaxed">
                "To manufacture and deploy thermodynamic units that outperform standard parameters, reduce
                ambient emissions to local pollution board standards, and empower chemical, food, and
                textile grids with total thermal security."
              </p>
            </Reveal>
            <Reveal delay={0.15} className="pt-2 flex items-center gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1C5CA8] hover:bg-[#103E72] text-white px-8 py-4 text-base font-semibold transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(28,92,168,0.5)]"
              >
                <span>View our products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-[#0B1B2B]/15 bg-white text-[#0B1B2B] hover:border-[#0B1B2B]/40 px-8 py-4 text-base font-semibold transition-colors duration-200"
              >
                Get in touch
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-7 relative">
            <div className="mb-4 text-left sm:text-right">
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#1C5CA8]">
                General Arrangement Drawing
              </h3>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wide text-[#78889B] mt-1">
                12 TPH Diesel Fired Steam Boiler
              </p>
            </div>
            <img
              src={`${base}images/about-mission-steam-boiler-drawing.png`}
              alt="Technical CAD drawing of a three-pass horizontal steam boiler, shown in front, side and rear elevation views"
              className="w-full h-auto lg:w-[155%] lg:max-w-none"
            />
          </Reveal>
        </div>
      </div>

    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Link } from 'react-router-dom';
import { Target, Compass, Sparkles, Award, ArrowRight } from 'lucide-react';
import LogoWatermark from '../components/LogoWatermark';
import AnimatedCounter from '../components/AnimatedCounter';

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
      name: 'Mr. Arvind Patel',
      role: 'Managing Director & Chief Engineer',
      description: 'Over 28 years of core industrial experience in thermal power cycles, multi-fluid convective heat patterns, and compliance codes with state-level regulatory boards.'
    },
    {
      name: 'Mr. Sanjay Patel',
      role: 'Director - Production & Operations',
      description: 'Coordinates Shrey Industrial Park plant assemblies, specializing in heavy mechanical sheet rolling, hydrostatic testing rigs, and quality audits.'
    },
    {
      name: 'Ms. Priyanka Shah',
      role: 'Chief of QA & Compliance Standards',
      description: 'Oversees radiographic weld checks, ISO management logs, and ASME / IBR statutory documentation for national and global clients.'
    }
  ];

  return (
    <div className="space-y-0 text-left bg-white">

      {/* Page header — sky/industrial photo, soft wash, matches the Home page's About Us intro */}
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={`${base}images/about-bg-sky.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/50" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <p className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#78889B]">
            <span className="w-8 h-[2px] bg-[#DC2626]" />
            About Us
            <span className="w-8 h-[2px] bg-[#DC2626]" />
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.08]">
            Built on Expertise.
            <br />
            <span className="text-[#1C5CA8]">Driven by Purpose.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#47566A] leading-relaxed max-w-2xl mx-auto">
            Thermal Engitech is a Gujarat-based engineering and manufacturing company delivering
            reliable, efficient thermal and process-heating solutions — steam boilers, thermic
            fluid heaters and heat exchangers, engineered in-house and built to IBR, ASME and
            ISO 9001:2015 standards for customers across India and export markets.
          </p>
        </div>
      </div>

      {/* Our history & vision — logo-masked photo (left) + narrative and stats (right),
          same composition as the Home page's About Us intro */}
      <div className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-5 flex justify-center lg:justify-start">
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
          </div>

          <div className="lg:col-span-7 space-y-6">
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

            {/* Plant stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#0B1B2B]/15 text-center sm:text-left">
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
            </div>
          </div>

        </div>

        {/* Foundational pillars — icon-highlight row, same hover-forward treatment as
            the Home page's About Us intro (scale up, lift, deepen shadow on hover) */}
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-[#E4E7EC]">
          <h3 className="font-heading font-bold text-lg text-[#0B1B2B] mb-8">Our foundational pillars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div key={p.title} className="group flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1B2B]/5 text-[#0B1B2B] shadow-sm transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-white">
                  <p.icon className="w-5 h-5 transition-colors duration-300 group-hover:text-[#1C5CA8]" strokeWidth={1.75} />
                </span>
                <div className="space-y-1">
                  <b className="text-sm font-bold text-[#0B1B2B] block">{p.title}</b>
                  <p className="text-xs text-[#78889B] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E4E7EC] bg-[#E8F1FB] overflow-hidden">
        <LogoWatermark position="top-right" size={700} opacity={0.05} />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((lead, i) => (
              <div
                key={i}
                className="bg-white border border-[#E4E7EC] rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3 text-left">
                  <div className="h-12 w-12 rounded-full bg-[#1C5CA8]/10 text-[#1C5CA8] flex items-center justify-center font-heading font-bold text-lg">
                    {lead.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#0B1B2B]">{lead.name}</h4>
                    <span className="text-[11px] font-semibold text-[#1C5CA8]">{lead.role}</span>
                  </div>
                  <p className="text-xs text-[#78889B] leading-relaxed">{lead.description}</p>
                </div>

                <div className="pt-4 border-t border-[#E4E7EC] text-[11px] font-semibold text-[#1C5CA8] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>ISO audit representative</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Mission — two-column: eyebrow/heading/quote/CTAs on the left, an
          annotated engineering-blueprint illustration of a boiler system on
          the right, matching a reference layout. Kept on white (rather than
          the reference's light-blue) since Leadership right above this
          section already uses the site's one light-blue, and stacking two
          identical-colored sections back to back would remove the section
          break between them. */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#DC2626]" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#78889B] font-semibold">
                Our Ongoing Mission
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-extrabold tracking-[-0.02em] leading-[1.08]">
              <span className="text-[#0B1B2B]">Engineering a</span>
              <br />
              <span className="text-[#1C5CA8]">cleaner, safer</span>{' '}
              <span className="text-[#0B1B2B]">tomorrow.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#47566A] leading-relaxed max-w-xl">
              "To manufacture and deploy thermodynamic units that outperform standard parameters, reduce
              ambient emissions to local pollution board standards, and empower chemical, food, and
              textile grids with total thermal security."
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1C5CA8] hover:bg-[#103E72] text-white px-6 py-3 text-sm font-semibold transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(28,92,168,0.5)]"
              >
                <span>View our products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-[#0B1B2B]/15 bg-white text-[#0B1B2B] hover:border-[#0B1B2B]/40 px-6 py-3 text-sm font-semibold transition-colors duration-200"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={`${base}images/about-mission-blueprint.png`}
              alt="Engineering blueprint of a steam boiler system, annotated with process heating, steam systems and heat recovery capabilities"
              className="w-full h-auto"
            />
            <span className="hidden sm:block absolute left-[2%] top-[10%] text-[#1C5CA8] text-sm sm:text-base italic font-medium" style={{ fontFamily: 'Georgia, serif' }}>
              Process Heating<br />Solutions
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

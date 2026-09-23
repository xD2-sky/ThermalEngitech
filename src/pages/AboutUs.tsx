/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Link } from 'react-router-dom';
import { Target, Compass, Sparkles, Award, BookOpen, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  useDocumentMeta(
    'About Us',
    'Founded 2012 in Gujarat — Thermal Engitech designs, engineers and manufactures heavy-duty boilers and heaters from our Dhamatwan facility.'
  );

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
          src={`${import.meta.env.BASE_URL}images/about-bg-sky.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/50" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <p className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#DC2626]">
            <span className="w-8 h-[2px] bg-[#DC2626]" />
            About Us
            <span className="w-8 h-[2px] bg-[#DC2626]" />
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.08]">
            Built on Expertise.
            <br />
            <span className="text-[#DC2626]">Driven by Purpose.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#47566A] leading-relaxed max-w-2xl mx-auto">
            Thermal Engitech is a Gujarat-based engineering and manufacturing company delivering
            reliable, efficient thermal and process-heating solutions — steam boilers, thermic
            fluid heaters and heat exchangers, engineered in-house and built to IBR, ASME and
            ISO 9001:2015 standards for customers across India and export markets.
          </p>
        </div>
      </div>

      {/* Main narrative & company journey */}
      <div className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6">
              <p className="flex items-center gap-2 text-sm text-[#78889B]">
                <span className="text-[#1C5CA8]">•</span>
                Our history & vision
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em]">
                Building dependable process-heat systems since 2012
              </h2>

              <div className="space-y-4 text-sm text-[#47566A] leading-relaxed">
                <p>
                  Founded 2012 in Gujarat, now a full heavy-engineering plant in Dhamatwan — trusted
                  across India and export markets for complete boiler assemblies, heaters, and accessories.
                </p>
              </div>

              {/* Plant stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#E4E7EC] text-center sm:text-left">
                <div>
                  <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#1C5CA8]">1,200+</span>
                  <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">Commissioned plants</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#1C5CA8]">15,000 m²</span>
                  <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">Dhamatwan workshop</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#1C5CA8]">100%</span>
                  <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">IBR & ASME compliant</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-heading font-extrabold text-[#1C5CA8]">12+ years</span>
                  <span className="text-[11px] text-[#78889B] uppercase tracking-wider font-semibold">Industry presence</span>
                </div>
              </div>
            </div>

            {/* Foundational pillars card */}
            <div className="lg:col-span-5 bg-[#F2F4F7] border border-[#E4E7EC] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1B2B] p-6 flex justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/products/packaged-boiler-unit.png`}
                  alt="Factory-assembled packaged boiler unit ready for dispatch"
                  className="w-full max-w-[240px] h-auto"
                />
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <h3 className="font-heading font-bold text-base text-[#0B1B2B] border-b border-[#E4E7EC] pb-3">
                  Our foundational pillars
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-[#1C5CA8]/10 text-[#1C5CA8]">
                      <Target className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1">
                      <b className="text-sm font-bold text-[#0B1B2B] block">Client-centric custom sizing</b>
                      <p className="text-xs text-[#78889B] leading-relaxed">
                        Scaled to your footprint, fuels, and pressure loops — never a catalog model.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-[#1C5CA8]/10 text-[#1C5CA8]">
                      <Compass className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1">
                      <b className="text-sm font-bold text-[#0B1B2B] block">Extensive safety interlocks</b>
                      <p className="text-xs text-[#78889B] leading-relaxed">
                        Dual water level checks, relief valves, flame cut-offs — standard on every unit.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-[#1C5CA8]/10 text-[#1C5CA8]">
                      <Sparkles className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1">
                      <b className="text-sm font-bold text-[#0B1B2B] block">Absolute materials honesty</b>
                      <p className="text-xs text-[#78889B] leading-relaxed">
                        Certified ASTM materials, backed by original mill test certs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E4E7EC] bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto space-y-12">

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

      {/* Mission */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <BookOpen className="w-12 h-12 text-[#1C5CA8] mx-auto opacity-80" />

          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-extrabold text-[#0B1B2B]">Our ongoing mission</h3>
            <p className="text-sm text-[#47566A] leading-relaxed max-w-2xl mx-auto">
              "To manufacture and deploy thermodynamic units that outperform standard parameters, reduce
              ambient emissions to local pollution board standards, and empower chemical, food, and
              textile grids with total thermal security."
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1C5CA8] hover:bg-[#103E72] text-white px-5 py-2.5 text-sm font-medium transition-colors duration-200"
            >
              <span>View our products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-[#0B1B2B]/15 bg-white text-[#0B1B2B] hover:border-[#0B1B2B]/40 px-5 py-2.5 text-sm font-medium transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

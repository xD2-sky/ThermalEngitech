/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Reveal from '../components/Reveal';
import { MANUFACTURING_STEPS, SHOP_CAPABILITIES, DESIGN_CAPABILITIES } from '../data';
import {
  Settings, ShieldCheck, PenTool, Cpu, Cable,
  Flame, Layers, Scissors, Radius, Drill, Wrench, ArrowUpDown, Gauge, SprayCan,
  FileCheck, ScanLine, BadgeCheck,
} from 'lucide-react';

const MANUFACTURING_DETAIL_SHOTS = [
  { src: 'images/manufacturing-details/structural-joint.jpg', alt: 'Close-up of a welded structural joint and access door hardware' },
  { src: 'images/manufacturing-details/tube-bundle.jpg', alt: 'Close-up of the boiler tube bundle and furnace tube sheet' },
  { src: 'images/manufacturing-details/flange-plate.jpg', alt: 'Close-up of a machined flange plate ready for fitting' },
  { src: 'images/manufacturing-details/pipe-fitting.jpg', alt: 'Close-up of a pipe fitting ring on raw structural steel stock' },
];

// Icons keyed by SHOP_CAPABILITIES label — kept in the component (not the
// data file) so data.ts stays plain, serializable content.
const CAPABILITY_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'Welding': Flame,
  'Plate Bending': Layers,
  'Cutting': Scissors,
  'Tube Bending': Radius,
  'Machining Facility': Drill,
  'Portable Tools': Wrench,
  'Material Handling': ArrowUpDown,
  'Testing Equipment': Gauge,
  'Surface Finish & Painting': SprayCan,
};

const QUALITY_DIRECTIVES = [
  {
    icon: FileCheck,
    title: 'MTR Verification',
    description: 'Mill Test Reports cross-checked against every incoming steel batch before it reaches the shop floor.'
  },
  {
    icon: ScanLine,
    title: 'NDT Radiography',
    description: 'Full weld scans, root to surface, on every pressure joint — not spot-sampled.'
  },
  {
    icon: BadgeCheck,
    title: 'Form VI Approval',
    description: 'Issued by State Boiler Inspectors after hydrostatic testing, on file for each unit shipped.'
  },
];

export default function Manufacturing() {
  useDocumentMeta(
    'Manufacturing & Infrastructure',
    '7,500 sq.m facility in Dhamatwan, Gujarat — real shop-floor capabilities in welding, machining, testing and quality assurance.'
  );

  const base = import.meta.env.BASE_URL;
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start end', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div className="space-y-0 text-left bg-white min-h-screen">

      {/* Banner — full-bleed photo with a dark scrim, text on top. */}
      <div className="relative overflow-hidden min-h-[360px] flex items-center px-4 sm:px-6 lg:px-8">
        <img
          src={`${base}images/hero-boiler-bright-final.jpg`}
          alt="Thermal Engitech steam boiler unit at the Dhamatwan facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 space-y-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#7FB2E4]">
            Dhamatwan Workshop Facility
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Inside Our Manufacturing Facility
          </h1>
          <p className="text-white/80 text-sm max-w-3xl leading-relaxed">
            7,500 m² in Dhamatwan, Gujarat — approved under IBR 1950 to roll, weld, and inspect heavy-duty thermal systems.
          </p>
        </div>
      </div>

      {/* Section rhythm after the hero: white, blue, white, blue — each
          subsection below is its own full-bleed band so the alternation is
          consistent all the way to the end of the page. */}

      {/* 1. Intro — white */}
      <div ref={introRef} className="relative overflow-hidden bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[560px] h-[560px] rounded-full bg-[#1C5CA8]/[0.06] pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center relative z-10">
          <Reveal className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center divide-x divide-[#0B1B2B]/10 rounded-xl border border-[#0B1B2B]/12 bg-white shadow-sm">
              <div className="flex items-center gap-2 pl-4 pr-4 py-2.5">
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#1C5CA8]" strokeWidth={1.75} />
                <span className="text-sm font-semibold text-[#0B1B2B] whitespace-nowrap">ISO 9001:2015</span>
              </div>
              <div className="flex items-center px-4 py-2.5">
                <img
                  src={`${base}images/certifications/asme-cert-seal.png`}
                  alt="ASME certification seal"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex items-center px-4 py-2.5">
                <span className="text-sm font-semibold text-[#0B1B2B] whitespace-nowrap">&amp; IBR 1950</span>
              </div>
            </div>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#0B1B2B]">
              Production Machinery
            </p>
            <h2
              className="animate-gradient-flow"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              Precision Heavy<br />Fabrication Capacity
            </h2>
            <p className="text-sm text-[#47566A] leading-relaxed font-sans max-w-md">
              Standardized fabrication under clear procedural guidelines — durability, geometric centering, and structural joint unity on every unit.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="bg-panel border border-[#E4E7EC] rounded-2xl shadow-lg p-3 sm:p-4 space-y-3">
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    style={{ y: photoY }}
                    src={`${base}images/manufacturing-shop-floor.jpg`}
                    alt="A three-pass steam boiler shell under fabrication on the Dhamatwan shop floor, tube nest and access doors visible"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {MANUFACTURING_DETAIL_SHOTS.map((shot) => (
                    <div
                      key={shot.src}
                      className="relative overflow-hidden rounded-lg aspect-square border border-[#0B1B2B]/10"
                    >
                      <img src={`${base}${shot.src}`} alt={shot.alt} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 2. Shop Floor Equipment — blue */}
      <div className="bg-panel-blue py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <Reveal className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-[0.14em] text-[#0B1B2B]">
              Shop Floor Equipment
            </h3>
            <p className="text-xs text-[#78889B] font-sans">
              Real machine specifications documented from the facility's own equipment register.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOP_CAPABILITIES.map((cap, i) => {
              const Icon = CAPABILITY_ICONS[cap.label] ?? Settings;
              return (
                <React.Fragment key={cap.label}>
                <Reveal
                  delay={(i % 3) * 0.06}
                  className="bg-white border border-[#E1E4E3] rounded-lg p-6 shadow-xs hover:border-[#1C5CA8]/30 hover:shadow-sm transition-all duration-200 space-y-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1C5CA8]/10 text-[#1C5CA8]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <h4 className="text-xs font-mono font-bold text-[#0B1B2B] uppercase tracking-wide">
                    {cap.label}
                  </h4>
                  <p className="text-xs text-[#47566A] leading-relaxed font-sans">
                    {cap.value}
                  </p>
                </Reveal>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Design & Engineering Capabilities + Quality Assurance Directives — white */}
      <div className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7 bg-panel border border-[#E1E4E3] rounded-lg overflow-hidden shadow-xs">
            <div className="bg-white px-6 py-4 border-b border-slate-200">
              <h3 className="text-xs uppercase font-mono font-bold text-[#0B1B2B] flex items-center gap-2">
                <PenTool className="w-4 h-4 text-[#1C5CA8]" />
                <span>Design & Engineering Capabilities</span>
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wide flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-[#1C5CA8]" />
                  Equipment Design
                </h4>
                <ul className="space-y-2">
                  {DESIGN_CAPABILITIES.equipmentDesign.map((item, i) => (
                    <li key={i} className="text-xs text-[#47566A] leading-relaxed flex items-start gap-2">
                      <span className="text-[#1C5CA8] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wide flex items-center gap-1.5">
                  <Cable className="w-3.5 h-3.5 text-[#1C5CA8]" />
                  Auxiliaries
                </h4>
                <ul className="space-y-2">
                  {DESIGN_CAPABILITIES.auxiliaries.map((item, i) => (
                    <li key={i} className="text-xs text-[#47566A] leading-relaxed flex items-start gap-2">
                      <span className="text-[#1C5CA8] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wide flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#1C5CA8]" />
                  Computer Aided Design
                </h4>
                <ul className="space-y-2">
                  {DESIGN_CAPABILITIES.cadTools.map((item, i) => (
                    <li key={i} className="text-xs text-[#47566A] leading-relaxed flex items-start gap-2">
                      <span className="text-[#1C5CA8] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Quality Assurance Directives — static, no scroll-reveal motion
              by explicit request. Each directive gets its own icon rather
              than a repeated checkmark, so the three compliance types read
              as distinct at a glance instead of a generic bullet list. */}
          <div className="lg:col-span-5 bg-panel border border-[#E1E4E3] rounded-lg overflow-hidden shadow-xs self-start">
            <div className="bg-white px-6 py-4 border-b border-slate-200 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#1C5CA8]" />
              <h3 className="text-xs uppercase font-mono font-bold text-[#0B1B2B]">
                Quality Assurance Directives
              </h3>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-xs text-[#47566A] leading-relaxed font-sans">
                Every plate, tube, and weld is monitored by our quality coordinators. Documentation on file for each unit:
              </p>
              <div className="divide-y divide-slate-100">
                {QUALITY_DIRECTIVES.map((d) => (
                  <div key={d.title} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1C5CA8]/10 text-[#1C5CA8]">
                      <d.icon className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-[#0B1B2B]">{d.title}</h4>
                      <p className="text-xs text-[#78889B] leading-relaxed font-sans">{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Assembly Steps — blue */}
      <div className="bg-panel-blue py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">
              Production Steps
            </p>
            <h2 className="text-3xl font-heading font-bold text-[#0B1B2B]">
              The Six-Stage Assembly Pipeline
            </h2>
            <p className="text-[#47566A] text-sm">
              Raw boiler-grade steel to finished, certified system — six stages.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {MANUFACTURING_STEPS.map((step, i) => (
              <React.Fragment key={step.step}>
              <Reveal
                delay={(i % 3) * 0.08}
                className="bg-white border border-[#E1E4E3] p-6 rounded-lg hover:border-[#1C5CA8]/35 hover:-translate-y-0.5 transition shadow-sm space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[#1C5CA8] uppercase tracking-wider">
                      Stage {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-[#78889B]">Section GIDC</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#0B1B2B]">{step.title}</h4>
                  <p className="text-xs text-[#47566A] leading-relaxed font-sans">{step.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 mt-2 text-[10px] font-mono text-[#78889B] uppercase tracking-tight">
                  Status: 100% Quality Audited
                </div>
              </Reveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

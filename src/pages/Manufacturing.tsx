/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Reveal from '../components/Reveal';
import { SHOP_CAPABILITIES } from '../data';
import {
  Settings, ShieldCheck, ArrowRight,
  Flame, Layers, Scissors, Radius, Drill, Wrench, ArrowUpDown, Gauge, SprayCan,
  FileCheck, ScanLine, BadgeCheck,
} from 'lucide-react';

const MANUFACTURING_DETAIL_SHOTS = [
  {
    src: 'images/manufacturing-details/structural-joint.jpg',
    alt: 'Close-up of a welded structural joint and access door hardware',
    caption: 'Fabrication Detail',
  },
  {
    src: 'images/manufacturing-details/tube-bundle.jpg',
    alt: 'Close-up of the boiler tube bundle and furnace tube sheet',
    caption: 'Tube Sheet Machining',
  },
  {
    src: 'images/manufacturing-details/flange-plate.jpg',
    alt: 'Close-up of a burner firing a live test flame against a boiler shell in the workshop',
    caption: 'Burner Test-Fire',
  },
  {
    src: 'images/manufacturing-details/pipe-fitting.jpg',
    alt: 'Close-up of a pipe fitting being welded to a steel baseplate, weld pool and shielding gas smoke visible',
    caption: 'Precision Welding',
  },
];

// Three of the shop's real capabilities (see SHOP_CAPABILITIES below), shown
// as a compact icon row in the intro rather than the full equipment grid.
const CAPABILITY_HIGHLIGHTS = [
  { icon: Layers, title: 'Heavy Steel Fabrication', sub: 'Robust & Reliable' },
  { icon: Radius, title: 'Precision Tube Assembly', sub: 'High Accuracy' },
  { icon: Gauge, title: 'Quality Inspection', sub: 'Assured Standards' },
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

      {/* Banner — full-bleed photo with a dark scrim, text on top. Same
          pattern as every other page's header, restored here for
          consistency. */}
      <div className="relative overflow-hidden min-h-[360px] flex items-center px-4 sm:px-6 lg:px-8">
        <img
          src={`${base}images/manufacturing-hero-industrial.webp`}
          alt=""
          role="presentation"
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

      {/* 1. Intro — white */}
      <div ref={introRef} className="relative overflow-hidden bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[560px] h-[560px] rounded-full bg-[#1C5CA8]/[0.06] pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <Reveal className="lg:col-span-5 space-y-5">
            <div className="inline-flex flex-wrap items-center divide-x divide-[#0B1B2B]/10 rounded-xl border border-[#0B1B2B]/12 bg-white shadow-sm">
              <div className="flex items-center gap-2.5 px-4 py-2.5">
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#1C5CA8]" strokeWidth={1.75} />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0B1B2B] whitespace-nowrap">ISO 9001:2015</p>
                  <p className="text-[10px] text-[#5B6B80] whitespace-nowrap">Quality Management</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5">
                <img
                  src={`${base}images/certifications/asme-cert-seal.png`}
                  alt="ASME certification seal"
                  className="h-7 w-7 object-contain shrink-0"
                />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0B1B2B] whitespace-nowrap">ASME</p>
                  <p className="text-[10px] text-[#5B6B80] whitespace-nowrap">Design Standards</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5">
                <FileCheck className="w-5 h-5 shrink-0 text-[#1C5CA8]" strokeWidth={1.75} />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-[#0B1B2B] whitespace-nowrap">IBR 1950</p>
                  <p className="text-[10px] text-[#5B6B80] whitespace-nowrap">Compliant Manufacturing</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-[3px] w-6 rounded-full bg-[#1C5CA8]" aria-hidden="true" />
              <span className="h-[3px] w-3 rounded-full bg-[#7FB2E4]" aria-hidden="true" />
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#0B1B2B]">
                Manufacturing Excellence
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-[-0.02em] leading-[1.08]">
              <span className="text-[#0B1B2B]">Precision Heavy</span>
              <br />
              <span className="text-[#1C5CA8]">Fabrication Capacity</span>
            </h2>

            <p className="text-sm sm:text-base text-[#47566A] leading-relaxed max-w-md">
              Our manufacturing processes follow strict quality standards, ensuring durability,
              accurate fabrication, and structural integrity in every unit we deliver.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-1">
              {CAPABILITY_HIGHLIGHTS.map((h) => (
                <div key={h.title} className="flex flex-col items-start gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C5CA8]/8 text-[#1C5CA8]">
                    <h.icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#0B1B2B] leading-tight">{h.title}</p>
                    <p className="text-[10px] text-[#5B6B80]">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1C5CA8] hover:bg-[#103E72] text-white px-6 py-3 text-sm font-semibold transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(28,92,168,0.5)]"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center rounded-full border border-[#0B1B2B]/15 bg-white text-[#0B1B2B] hover:border-[#0B1B2B]/40 px-6 py-3 text-sm font-semibold transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="bg-panel border border-[#E4E7EC] rounded-2xl shadow-lg p-3 sm:p-4 space-y-3">
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    style={{ y: photoY }}
                    src={`${base}images/manufacturing-shop-floor.jpg`}
                    alt="A three-pass steam boiler shell under fabrication on the Dhamatwan shop floor, tube nest and access doors visible"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                    <span className="w-1 h-9 rounded-full bg-[#1C5CA8] shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">Boiler Assembly</p>
                      <p className="text-[11px] text-white/75 leading-tight">Heavy Fabrication in Progress</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {MANUFACTURING_DETAIL_SHOTS.map((shot) => (
                    <div
                      key={shot.src}
                      className="relative overflow-hidden rounded-lg aspect-square border border-[#0B1B2B]/10"
                    >
                      <img src={`${base}${shot.src}`} alt={shot.alt} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent pointer-events-none" />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1">
                        <span className="w-0.5 h-3 rounded-full bg-[#7FB2E4] shrink-0" aria-hidden="true" />
                        <span className="text-[8px] sm:text-[9px] font-bold text-white leading-tight truncate">
                          {shot.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 2. Shop Floor Equipment — blue */}
      <div className="relative bg-panel-blue py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={`${base}images/shop-floor-bg-blueprint.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          <Reveal className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-[0.14em] text-[#0B1B2B]">
              Shop Floor Equipment
            </h3>
            <p className="text-xs text-[#5B6B80] font-sans">
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

          {/* Quality Assurance — compact badge row, not a full text block */}
          <Reveal className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {QUALITY_DIRECTIVES.map((d) => (
              <div
                key={d.title}
                className="inline-flex items-center gap-2 bg-white border border-[#E1E4E3] rounded-full pl-3 pr-4 py-2 shadow-xs"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1C5CA8]/10 text-[#1C5CA8]">
                  <d.icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-bold text-[#0B1B2B] whitespace-nowrap">{d.title}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

    </div>
  );
}

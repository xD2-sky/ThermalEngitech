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
  Flame,
  Layers,
  Scissors,
  Radius,
  Drill,
  Wrench,
  ArrowUpDown,
  Gauge,
  SprayCan,
  FileCheck,
  ScanLine,
  BadgeCheck,
  Award,
  ArrowRight,
  Boxes,
  CircleDot,
  Wind,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   Static data (photos + highlights + quality directives)

   SHOP_CAPABILITIES is imported from data.ts — the 9 equipment
   cards render from that source, so updating a machine spec in
   one place flows through to this page automatically.
   ────────────────────────────────────────────────────────────── */

const MANUFACTURING_DETAIL_SHOTS = [
  {
    src: 'images/manufacturing-details/structural-joint.jpg',
    alt: 'Close-up of a welded structural joint and access door hardware',
    caption: 'Fabrication Detail',
    Icon: Flame,
  },
  {
    src: 'images/manufacturing-details/tube-bundle.jpg',
    alt: 'Close-up of the boiler tube bundle and furnace tube sheet',
    caption: 'Tube Sheet Machining',
    Icon: CircleDot,
  },
  {
    src: 'images/manufacturing-details/flange-plate.jpg',
    alt: 'Close-up of a burner firing a live test flame against a boiler shell in the workshop',
    caption: 'Burner Test-Fire',
    Icon: Flame,
  },
  {
    src: 'images/manufacturing-details/pipe-fitting.jpg',
    alt: 'Close-up of a pipe fitting being welded to a steel baseplate, weld pool and shielding gas smoke visible',
    caption: 'Precision Welding',
    Icon: Wind,
  },
];

const CAPABILITY_HIGHLIGHTS = [
  { Icon: Layers, title: 'Heavy Steel Fabrication', sub: 'Robust & Reliable' },
  { Icon: Radius, title: 'Precision Tube Assembly', sub: 'High Accuracy' },
  { Icon: Gauge, title: 'Quality Inspection', sub: 'Assured Standards' },
];

// Icons keyed by SHOP_CAPABILITIES label — kept in the component (not the
// data file) so data.ts stays plain, serializable content.
const CAPABILITY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
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
    Icon: FileCheck,
    title: 'MTR Verification',
    description:
      'Mill Test Reports cross-checked against every incoming steel batch before it reaches the shop floor.',
  },
  {
    Icon: ScanLine,
    title: 'NDT Radiography',
    description:
      'Full weld scans, root to surface, on every pressure joint — not spot-sampled.',
  },
  {
    Icon: BadgeCheck,
    title: 'Form VI Approval',
    description:
      'Issued by State Boiler Inspectors after hydrostatic testing, on file for each unit shipped.',
  },
];

/* ──────────────────────────────────────────────────────────────
   Page component
   ────────────────────────────────────────────────────────────── */

export default function Manufacturing() {
  useDocumentMeta(
    'Manufacturing & Infrastructure',
    '7,500 sq.m facility in Dhamatwan, Gujarat — real shop-floor capabilities in welding, machining, testing and quality assurance.'
  );

  const base = import.meta.env.BASE_URL;

  // Hero photo parallax — same useScroll / useTransform pattern as the
  // Home page's About section. Photo drifts vertically as the banner
  // scrolls through the viewport.
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const heroPhotoY = useTransform(heroScrollYProgress, [0, 1], ['-8%', '8%']);

  // Shop-floor photo drift inside the intro split — gentler range than the hero.
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScrollYProgress } = useScroll({
    target: introRef,
    offset: ['start end', 'end start'],
  });
  const shopFloorY = useTransform(introScrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div className="space-y-0 text-left bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════
          HERO — same full-bleed photo + dark navy scrim pattern
          as ProductDetails / RequestQuote.
          ══════════════════════════════════════════════════════ */}
      <div
        ref={heroRef}
        data-hero-banner
        className="relative overflow-hidden min-h-[360px] flex items-center px-4 sm:px-6 lg:px-8"
      >
        <motion.img
          src={`${base}images/manufacturing-hero-industrial.webp`}
          alt=""
          role="presentation"
          className="absolute inset-x-0 h-[120%] w-full object-cover"
          style={{ top: '-10%', y: heroPhotoY }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 space-y-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-sky">
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

      {/* ══════════════════════════════════════════════════════
          1. INTRO — split layout
          Left: cert pills + heading + copy + 3 caps + CTAs
          Right: facility photo card with 4 detail thumbnails
          ══════════════════════════════════════════════════════ */}
      <section
        ref={introRef}
        className="relative overflow-hidden bg-white pt-14 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Decorative soft-blue radial accent */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[560px] h-[560px] rounded-full bg-blue/[0.06] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center relative z-10">

          {/* LEFT column */}
          <Reveal className="space-y-5">

            {/* Cert pill row — 3 certifications */}
            <div className="inline-flex flex-wrap items-stretch divide-x divide-ink/10 rounded-xl border border-ink/12 bg-white shadow-sm">
              <div className="flex items-center gap-2.5 px-4 py-2.5">
                <Award className="w-5 h-5 shrink-0 text-blue" strokeWidth={1.75} />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-ink whitespace-nowrap">ISO 9001:2015</p>
                  <p className="text-[10px] text-slate-soft whitespace-nowrap">Quality Management</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5">
                <img
                  src={`${base}images/certifications/asme-cert-seal.png`}
                  alt="ASME certification seal"
                  className="h-7 w-7 object-contain shrink-0"
                />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-ink whitespace-nowrap">ASME</p>
                  <p className="text-[10px] text-slate-soft whitespace-nowrap">Design Standards</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5">
                <FileCheck className="w-5 h-5 shrink-0 text-blue" strokeWidth={1.75} />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-ink whitespace-nowrap">IBR 1950</p>
                  <p className="text-[10px] text-slate-soft whitespace-nowrap">Compliant Manufacturing</p>
                </div>
              </div>
            </div>

            {/* Eyebrow row with two-tone bar */}
            <div className="flex items-center gap-2">
              <span className="h-[3px] w-6 rounded-full bg-blue" aria-hidden="true" />
              <span className="h-[3px] w-3 rounded-full bg-sky" aria-hidden="true" />
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue">
                Manufacturing Excellence
              </p>
            </div>

            {/* Two-line title: line 1 dark ink, line 2 brand blue */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-[-0.02em] leading-[1.08]">
              <span className="text-ink">Precision Heavy</span>
              <br />
              <span className="text-blue">Fabrication Capacity</span>
            </h2>

            <p className="text-sm sm:text-base text-slate leading-relaxed max-w-md">
              Our manufacturing processes follow strict quality standards, ensuring durability,
              accurate fabrication, and structural integrity in every unit we deliver.
            </p>

            {/* 3 capability highlights — icon above, title + sub below */}
            <div className="grid grid-cols-3 gap-4 pt-1">
              {CAPABILITY_HIGHLIGHTS.map(({ Icon, title, sub }) => (
                <div key={title} className="flex flex-col items-start gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/8 text-blue">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-ink leading-tight">{title}</p>
                    <p className="text-[10px] text-slate-soft">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons — pill-shaped, primary + ghost */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-blue hover:bg-blue-dark text-white px-6 py-3 text-sm font-semibold transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(28,92,168,0.5)]"
              >
                <Boxes className="w-4 h-4" />
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center rounded-full border border-ink/15 bg-white text-ink hover:border-ink/40 px-6 py-3 text-sm font-semibold transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>

          {/* RIGHT column — facility photo card */}
          <Reveal delay={0.1}>
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="bg-panel border border-line rounded-2xl shadow-lg p-3 sm:p-4 space-y-3">

                {/* Main shop-floor photo with parallax drift */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    style={{ y: shopFloorY }}
                    src={`${base}images/manufacturing-shop-floor.jpg`}
                    alt="A three-pass steam boiler shell under fabrication on the Dhamatwan shop floor, tube nest and access doors visible"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                    <span className="w-1 h-9 rounded-full bg-blue shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">Boiler Assembly</p>
                      <p className="text-[11px] text-white/75 leading-tight">Heavy Fabrication in Progress</p>
                    </div>
                  </div>
                </div>

                {/* 4 detail thumbnails */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {MANUFACTURING_DETAIL_SHOTS.map(({ src, alt, caption, Icon }) => (
                    <div
                      key={src}
                      className="relative overflow-hidden rounded-lg aspect-square border border-ink/10"
                    >
                      <img src={`${base}${src}`} alt={alt} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent pointer-events-none" />
                      {/* Small icon at top-right — visual hint of the detail type */}
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-3 h-3 text-white/90" strokeWidth={2} />
                      </div>
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1">
                        <span className="w-0.5 h-3 rounded-full bg-sky shrink-0" aria-hidden="true" />
                        <span className="text-[8px] sm:text-[9px] font-bold text-white leading-tight truncate">
                          {caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. SHOP FLOOR EQUIPMENT — 3×3 grid on blue panel
          ══════════════════════════════════════════════════════ */}
      <section className="relative bg-panel-blue py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

        <img
          src={`${base}images/shop-floor-bg-blueprint.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blueprint grid texture + radial mask, layered on top of the photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(28,92,168,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(28,92,168,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-10">

          {/* Section header */}
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 rounded-full bg-blue" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue">
                Shop Floor Equipment
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-[-0.02em] leading-[1.08]">
              <span className="text-ink">Real machine specs</span>
              <br />
              <span className="text-blue">from our register</span>
            </h2>
            <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mt-4">
              Every capability on our floor is documented, rated, and available for inspection.
            </p>
          </Reveal>

          {/* 3 × 3 grid — 9 equipment cards from data.ts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SHOP_CAPABILITIES.map((cap, i) => {
              const Icon = CAPABILITY_ICONS[cap.label] ?? Gauge;
              return (
                <React.Fragment key={cap.label}>
                <Reveal
                  delay={(i % 3) * 0.06}
                  className="bg-white border border-line rounded-2xl p-6 md:p-7 hover:border-blue/30 hover:shadow-[0_12px_28px_-12px_rgba(28,92,168,0.15)] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-heading font-bold text-ink uppercase tracking-wide mb-1.5">
                      {cap.label}
                    </h4>
                    <p className="text-[13px] text-slate leading-relaxed">
                      {cap.value}
                    </p>
                  </div>
                </Reveal>
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. QUALITY DEEP-DIVE — 3 cards on white
          ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">

          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 rounded-full bg-blue" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-blue">
                Quality Assurance
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-[-0.02em] leading-[1.08]">
              <span className="text-ink">Verified at</span>
              <br />
              <span className="text-blue">Every Stage.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mt-4">
              Documented checks and third-party inspections accompany each fabrication stage — from raw material to final assembly.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {QUALITY_DIRECTIVES.map(({ Icon, title, description }, i) => (
              <React.Fragment key={title}>
              <Reveal
                delay={i * 0.08}
                className="bg-paper border border-line rounded-2xl p-7 hover:bg-white hover:border-blue/25 hover:shadow-[0_10px_28px_-12px_rgba(28,92,168,0.12)] transition-all duration-200"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue text-white mb-5 shadow-[0_8px_18px_-8px_rgba(28,92,168,0.5)]">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-base font-heading font-bold text-ink mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {description}
                </p>
              </Reveal>
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

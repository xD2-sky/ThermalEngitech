/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutIntro from '../components/AboutIntro';
import Reveal from '../components/Reveal';
import LogoWatermark from '../components/LogoWatermark';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { INDUSTRIES_SERVED } from '../data';
import {
  Factory,
  Wrench,
  Award,
  Settings,
  FileText,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Flame,
  Layers,
  FlaskConical,
  Milk,
  Wine,
  UtensilsCrossed,
  Package,
  Newspaper,
  Pill,
  TreePine,
  Wheat,
  CircleDot,
  Beaker,
  Candy,
  Shirt
} from 'lucide-react';

// Explicit map (not a wildcard import) so unused lucide icons still tree-shake out of the bundle.
const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  FlaskConical, Milk, Wine, UtensilsCrossed, Package, Newspaper, Pill,
  TreePine, Wheat, CircleDot, Flame, Beaker, Candy, Shirt
};

const PRODUCT_CATEGORIES = [
  {
    n: '01',
    icon: Flame,
    title: 'Steam Boilers',
    desc: 'High-efficiency dry steam boilers customized for solid fuel, gas, biomass, or oil firing.',
    href: '/products/category/steam-boilers',
    cta: 'Explore steam boilers',
    image: 'images/products/steam-boiler-skid.png',
  },
  {
    n: '02',
    icon: Wrench,
    title: 'Thermic Fluid Heaters',
    desc: 'Concentric helical coil hot-oil heaters for stable, high-temperature indirect process heating.',
    href: '/products/category/thermic-fluid-heaters',
    cta: 'Explore heaters',
    image: 'images/products/multi-fuel-system.png',
  },
  {
    n: '03',
    icon: Layers,
    title: 'Heat Exchangers',
    desc: 'Custom engineered shell-and-tube or plate heat exchangers and condensers matching TEMA standards.',
    href: '/products/heat-exchanger-shelltube',
    cta: 'Explore heat exchangers',
    image: 'images/products/heat-exchanger-vessel.jpg',
  },
  {
    n: '04',
    icon: Award,
    title: 'Air Pre Heaters & Auxiliaries',
    desc: 'High-efficiency waste heat recovery preheaters, economizers, and air pollution control units.',
    href: '/products/air-pre-heater',
    cta: 'Explore auxiliaries',
    image: 'images/products/packaged-boiler-unit.png',
  },
];

export default function Home() {
  const navigate = useNavigate();

  useDocumentMeta(
    'Industrial Steam Boilers & Thermic Fluid Heaters',
    'Steam boilers, thermic fluid heaters and process-heat systems, engineered and manufactured in Dhamatwan, Gujarat. IBR, ASME and ISO 9001:2015 compliant.'
  );

  return (
    <div className="space-y-0 text-left bg-white">
      {/* Hero Block */}
      <Hero
        onRequestQuote={() => navigate('/request-quote')}
        onViewProducts={() => navigate('/products')}
      />

      {/* About Us — logo-masked industrial photo on the left, company intro on the right. */}
      <AboutIntro />

      {/* Our Core Product Range — editorial composition, not a card grid. Only the 4
          featured categories show here; the other 4 products live on the Products page. */}
      <div className="relative bg-[#E8F1FB] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <LogoWatermark position="left" size={950} opacity={0.055} />
        {/* No top/bottom fade here by design: the blend into this section lives on
            About Us's own bottom edge (see AboutIntro.tsx), and the transition into
            "Why Thermal Engitech" below is intentionally a clean, default cut. */}
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">

          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#DC2626]" />
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#78889B] font-semibold">
                  Our Products
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.04]">
                Four Solutions.<br />Countless Possibilities.
              </h2>
              <p className="text-[#47566A] text-sm leading-relaxed max-w-lg">
                Thermal Engitech provides engineered thermal and process-heating solutions for
                industrial applications — designed and fabricated in-house to the standards your
                plant is audited against.
              </p>
            </div>

            <div className="hidden lg:block text-right shrink-0">
              <p className="text-xs uppercase tracking-[0.14em] text-[#78889B] font-semibold leading-relaxed">
                Heat Drives<br />Progress
              </p>
              <span className="inline-block mt-2 w-10 h-[2px] bg-[#DC2626]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#0B1B2B]/12 border-y border-[#0B1B2B]/12">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={c.href} className="group relative flex flex-col h-full min-h-[440px] focus:outline-none">
                  {/* Image fills the panel; dark gradient at the base for text legibility */}
                  <div className="absolute inset-0 overflow-hidden bg-[#0d1f33]">
                    <img
                      src={`${import.meta.env.BASE_URL}${c.image}`}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#0B1B2B]/20 to-transparent transition-opacity duration-300 group-hover:from-[#0B1B2B]/95" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6">
                    <span className="text-white/60 font-heading font-bold text-xl tracking-tight">{c.n}</span>

                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg text-white leading-tight">{c.title}</h3>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {c.desc}
                      </p>
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1C5CA8] mt-1 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.25} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <Reveal className="text-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-[#0B1B2B] hover:text-[#1C5CA8] transition-colors"
            >
              <span className="border-b-2 border-[#0B1B2B]/20 group-hover:border-[#DC2626] pb-1 transition-colors">
                Explore complete product range
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Why Thermal Engitech — compact two-column composition. The photo is now a
          contained, rounded card (with a refined diagonal corner-cut) that sits IN
          the grid next to the text and is centered against it via items-center,
          instead of an absolute full-bleed slice — so it reads as one connected
          piece rather than a large image floating beside the copy.
          Background: plain white, matching "What Sets Us Apart" right below it
          (the two are one visual unit) — not a separate light-blue shade. The
          site's one light-blue is reserved for Product Range/Industries; Product
          Range's own bottom fade already blends into this white, so no separate
          top fade is needed here. */}
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            <Reveal className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#DC2626]" />
                <p className="text-xs uppercase tracking-[0.18em] text-[#78889B] font-semibold">
                  Why Thermal Engitech
                </p>
              </div>

              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-[-0.02em] leading-[1.08]">
                <span className="text-[#0B1B2B]">Engineering Built Around</span>
                <br />
                <span className="text-[#1C5CA8]">Your Process.</span>
              </h2>

              <div className="space-y-1.5 max-w-lg">
                <p className="text-sm sm:text-base font-semibold text-[#0B1B2B] leading-relaxed">
                  Creating Value for Our Customers Since 2012.
                </p>
                <p className="text-sm sm:text-base text-[#47566A] leading-relaxed">
                  For more than a decade, we've helped reduce fuel costs by 20–70% — depending on
                  your location — while lowering carbon footprint through higher-quality,
                  better-engineered equipment.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1 divide-x divide-[#0B1B2B]/12">
                <div className="pl-0">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">2,000+</p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">Systems Installed</p>
                </div>
                <div className="pl-4">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">12+ Yrs</p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">Industry Presence</p>
                </div>
                <div className="pl-4">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">7,500 m²</p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">Manufacturing Facility</p>
                </div>
                <div className="pl-4">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">100%</p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">IBR & ASME Compliant</p>
                </div>
              </div>

              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1C5CA8] hover:bg-[#103E72] text-white px-6 py-3 text-sm font-semibold transition-colors duration-200 shadow-[0_8px_24px_-8px_rgba(28,92,168,0.5)]"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            {/* Contained diagonal-cut photo card — real photo already used elsewhere
                on the site (verified authentic). Sits as an in-flow grid item so it's
                vertically centered against the text column automatically, sized by
                aspect-ratio (matching the source photo's native 4:3 so object-cover
                needs no distortion), not stretched to the section's full height. */}
            <Reveal delay={0.08} className="hidden lg:block lg:col-span-6">
              <div
                className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-[0_24px_54px_-18px_rgba(11,27,43,0.4)]"
                style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/about-logo-photo.jpg`}
                  alt="Industrial process-heating pipework against an open sky"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/15" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart — 6-point differentiator grid */}
      <div className="bg-white pt-10 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <Reveal className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-[#0B1B2B]">What Sets Us Apart</h3>
            <span className="block w-10 h-[3px] bg-[#DC2626]" />
          </Reveal>

          <Reveal delay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-10">
            {[
              { icon: Settings, title: 'Process-Specific Engineering', desc: 'Solutions designed around your actual thermal load and operating requirements.' },
              { icon: Factory, title: 'In-House Manufacturing', desc: 'End-to-end fabrication at our 7,500 m² Dhamatwan facility.' },
              { icon: ShieldCheck, title: 'Certified Quality', desc: 'Volumetric-qualified welders and radiographic weld checks on every pressure joint.' },
              { icon: Flame, title: 'Fuel Flexibility', desc: 'Diesel, gas, biomass, agri-waste, wood chips, charcoal — tuned to your fuel.' },
              { icon: FileText, title: 'Audit-Ready Compliance', desc: 'ISO 9001:2015, ASME, and IBR 1950 documentation for every unit.' },
              { icon: Handshake, title: 'Proven Track Record', desc: '12+ years and 2,000+ installations across India and export markets.' },
            ].map((item) => (
              <div key={item.title} className="group flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1C5CA8]/8 text-[#1C5CA8] transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:bg-[#1C5CA8]/12">
                  <item.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div className="space-y-1">
                  <b className="text-sm font-bold text-[#0B1B2B] block leading-tight">{item.title}</b>
                  <p className="text-xs text-[#78889B] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="flex items-center justify-center gap-4 pt-6">
            <span className="h-px w-16 bg-[#E4E7EC]" />
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#78889B] font-semibold text-center">
              Partnering for a cleaner, brighter tomorrow
            </p>
            <span className="h-px w-16 bg-[#E4E7EC]" />
          </Reveal>
        </div>
      </div>

      {/* Industries We Serve — flat neutral background matching Product Range,
          no photo (replaced per feedback). Equal-sized cards, no large "stage"
          preview — every industry gets the same visual weight. */}
      <div className="relative bg-[#E8F1FB] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <LogoWatermark position="bottom-right" size={800} opacity={0.05} />
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <Reveal className="max-w-2xl space-y-4 text-center mx-auto">
            <p className="flex items-center justify-center gap-2 text-sm text-[#78889B]">
              <span className="text-[#1C5CA8]">•</span>
              Where our systems run
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.05]">
              Industries we serve
            </h2>
            <p className="text-[#47566A] text-sm leading-relaxed">
              Fourteen industries, one requirement in common: heat that can't fail.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {INDUSTRIES_SERVED.map((ind, i) => {
              const Icon = INDUSTRY_ICONS[ind.icon] ?? Factory;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (i % 7) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-xl border border-[#0B1B2B]/10 bg-white shadow-[0_1px_3px_rgba(11,27,43,0.06)] p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-12px_rgba(28,92,168,0.2)] hover:border-[#1C5CA8]/30"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1C5CA8]/8 text-[#1C5CA8]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading font-bold text-xs text-[#0B1B2B] leading-tight">{ind.name}</span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-[#78889B] text-xs pt-2">
            Plus other industries and units where direct and indirect heating is essential.
          </p>
        </div>
      </div>

      {/* Certifications & Quality — pure white background per explicit spec (no
          blue/gray/gradient/tint). Four larger cards, each a horizontal
          mark-then-details tile. ASME uses the real seal graphic (verified,
          uploaded by Sanjay); ISO/IBR/TEMA use a large styled wordmark — no
          licensed source files for those organizations' exact trademarked
          artwork, and no Indian State Emblem regardless of genuine IBR
          compliance (its use is legally restricted independent of that). */}
      <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#DC2626]" />
                <p className="text-xs uppercase tracking-[0.18em] text-[#78889B] font-semibold">
                  Certifications &amp; Quality
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.08]">
                Built to the standards your plant is <span className="text-[#1C5CA8]">audited against</span>.
              </h2>
            </div>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C5CA8] hover:text-[#103E72] transition-colors shrink-0"
            >
              <span>View all certifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { label: 'ISO 9001:2015', desc: 'Quality management system', seal: null, mark: 'ISO' },
              { label: 'ASME', desc: 'Design & fabrication standards', seal: 'asme-cert-seal.png', mark: null },
              { label: 'IBR 1950', desc: 'Indian Boiler Regulations', seal: null, mark: 'IBR' },
              { label: 'TEMA', desc: 'Heat exchanger standards', seal: null, mark: 'TEMA' },
            ].map((c) => (
              <div
                key={c.label}
                className="group flex items-center gap-5 sm:gap-6 bg-white border border-[#E4E7EC] rounded-2xl shadow-sm hover:shadow-md p-6 sm:p-7 transition-all duration-300"
              >
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  {c.seal ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/certifications/${c.seal}`}
                      alt={`${c.label} certification seal`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C5CA8] tracking-tight transition-transform duration-300 group-hover:scale-110">
                      {c.mark}
                    </span>
                  )}
                </div>
                <span className="w-px self-stretch bg-[#E4E7EC]" aria-hidden="true" />
                <div className="space-y-1 text-left">
                  <p className="font-heading font-bold text-base text-[#0B1B2B]">{c.label}</p>
                  <p className="text-sm text-[#78889B]">{c.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Quote CTA — premium blue gradient panel with a real industrial photo
          integrated into the right side (horizontal gradient blend, not a
          separate inset rectangle), matching Why Thermal Engitech's approach
          of blending this same verified photo into a solid background. */}
      <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#103E72] via-[#1C5CA8] to-[#2F7BD4] shadow-xl shadow-[#1C5CA8]/20">
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_20%,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />

            <div className="absolute inset-y-0 right-0 w-[42%] hidden lg:block">
              <img
                src={`${import.meta.env.BASE_URL}images/about-logo-photo.jpg`}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#103E72] via-[#103E72]/45 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-8 md:p-11">
              <div className="lg:col-span-8 space-y-3 text-left">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[2.25rem] text-white tracking-[-0.01em] leading-[1.1]">
                  Let's plan your next project together.
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                  Our team will help you design a custom solution based on your process, space
                  constraints and plant requirements.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/request-quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#EAF2FB] text-[#103E72] px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Start a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  );
}

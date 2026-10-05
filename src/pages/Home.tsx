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
import RotatingGlobe from '../components/RotatingGlobe';
import AnimatedCounter from '../components/AnimatedCounter';
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
  Shirt,
  Zap,
  BarChart3
} from 'lucide-react';

// Explicit map (not a wildcard import) so unused lucide icons still tree-shake out of the bundle.
const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  FlaskConical, Milk, Wine, UtensilsCrossed, Package, Newspaper, Pill,
  TreePine, Wheat, CircleDot, Flame, Beaker, Candy, Shirt, Zap
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
          featured categories show here; the other 4 products live on the Products page.
          Photo background with the same hero-style scrim used sitewide for photo
          sections, plus top/bottom fades to white since both neighboring sections
          (AboutIntro above, "Why Thermal Engitech" below) are flat white. */}
      <div className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/product-range-bg.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">

          <Reveal className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2.5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#7FB2E4] font-semibold">
                Our Products
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-heading font-extrabold text-white tracking-[-0.02em] leading-[1.04]">
              Four Solutions.<br />Countless Possibilities.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg">
              Thermal Engitech provides engineered thermal and process-heating solutions for
              industrial applications — designed and fabricated in-house to the standards your
              plant is audited against.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link to={c.href} className="group relative flex flex-col h-full min-h-[440px] rounded-2xl overflow-hidden shadow-[0_10px_28px_-14px_rgba(11,27,43,0.35)] hover:shadow-[0_20px_44px_-16px_rgba(11,27,43,0.45)] transition-shadow duration-300 focus:outline-none">
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
              className="group inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-white hover:text-[#7FB2E4] transition-colors"
            >
              <span className="border-b-2 border-white/30 group-hover:border-[#7FB2E4] pb-1 transition-colors">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            <Reveal className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2.5">
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
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">
                    <AnimatedCounter value={2000} suffix="+" />
                  </p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">Systems Installed</p>
                </div>
                <div className="pl-4">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">
                    <AnimatedCounter value={12} suffix="+ Yrs" />
                  </p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">Industry Presence</p>
                </div>
                <div className="pl-4">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">
                    <AnimatedCounter value={7500} suffix=" m²" />
                  </p>
                  <p className="text-[10px] text-[#78889B] uppercase tracking-wide font-semibold mt-0.5">Manufacturing Facility</p>
                </div>
                <div className="pl-4">
                  <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">
                    <AnimatedCounter value={100} suffix="%" />
                  </p>
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
                  src={`${import.meta.env.BASE_URL}images/hero-steel-vessel.jpg`}
                  alt="Precision-engineered steel pressure vessel"
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
      <div className="bg-white pt-8 sm:pt-10 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <Reveal className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-[#0B1B2B]">What Sets Us Apart</h3>
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
        </div>
      </div>

      {/* Industries We Serve — photo background (ant-rozetsky steel-mill
          interior, same as the About page hero) with the same dark scrim
          treatment used across the site's hero banners. Cards are frosted
          glass (translucent + backdrop-blur), so the photo shows through
          them too, not just in the gaps between them. */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/about-hero-industrial.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <Reveal className="max-w-2xl space-y-4 text-center mx-auto">
            <div className="flex items-center justify-center gap-2.5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7FB2E4] font-semibold">
                Where our systems run
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-[-0.02em] leading-[1.05]">
              Industries we serve
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Fifteen industries, one requirement in common: heat that can't fail.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 lg:gap-6">
            {INDUSTRIES_SERVED.map((ind, i) => {
              const Icon = INDUSTRY_ICONS[ind.icon] ?? Factory;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-xl bg-white/40 backdrop-blur-md shadow-[0_8px_24px_-14px_rgba(11,27,43,0.18)] p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_15px_30px_-12px_rgba(28,92,168,0.25)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm text-[#1C5CA8]">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading font-bold text-sm text-[#0B1B2B] leading-tight">{ind.name}</span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-white/60 text-xs pt-2">
            Plus other industries and units where direct and indirect heating is essential.
          </p>
        </div>
      </div>

      {/* Certifications & Quality — "Recognized Standards for Worldwide
          Projects": text + CTA, four simple logo tiles, a real Earth photo
          (circularly masked, soft shadow, faint glow — no hard black edge)
          with a thin orbit ring behind it for the "global network" feel,
          and a trust-point checklist. */}
      <div className="bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center">
          <Reveal className="lg:col-span-3 space-y-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[#1C5CA8] font-semibold">
              Our Certifications
            </p>
            <h2 className="text-[1.65rem] sm:text-3xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.015em] leading-[1.22]">
              Recognized Standards for <span className="text-[#1C5CA8]">Worldwide Projects</span>
            </h2>
            <p className="text-base text-[#47566A] leading-relaxed">
              Our commitment to quality is validated through certifications from leading global and
              national bodies.
            </p>
            <Link
              to="/certifications"
              className="group inline-flex items-center gap-2 rounded-full bg-[#103E72] hover:bg-[#0B1B2B] text-white px-7 py-3.5 text-sm font-semibold transition-colors duration-200"
            >
              <span>View all certificates</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3 grid grid-cols-2 gap-4">
            {[
              { label: 'ISO 9001:2015', desc: 'Quality Management System', seal: null, icon: ShieldCheck },
              { label: 'ASME', desc: 'Design & Fabrication Standards', seal: 'asme-cert-seal.png', icon: null },
              { label: 'IBR 1950', desc: 'Indian Boiler Regulations', seal: null, icon: Award },
              { label: 'TEMA', desc: 'Heat Exchanger Standards', seal: null, icon: Layers },
            ].map((c, i) => (
              <React.Fragment key={c.label}>
              <Reveal delay={0.12 + i * 0.06} className="bg-white border border-[#E4E7EC] rounded-xl p-5 flex flex-col gap-3.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C5CA8]/8">
                  {c.seal ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/certifications/${c.seal}`}
                      alt={`${c.label} certification seal`}
                      className="max-w-full max-h-full object-contain p-1"
                    />
                  ) : (
                    <c.icon className="w-6 h-6 text-[#1C5CA8]" strokeWidth={1.75} />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="font-heading font-bold text-sm text-[#0B1B2B] leading-tight">{c.label}</p>
                  <p className="text-xs text-[#78889B] leading-snug">{c.desc}</p>
                </div>
              </Reveal>
              </React.Fragment>
            ))}
          </Reveal>

          {/* Rotating Earth video — luma-keyed in RotatingGlobe so only the
              sphere itself shows, no black backdrop. Faint orbit rings
              behind it keep the "global network" feel. */}
          <Reveal delay={0.14} className="lg:col-span-3 relative w-full aspect-square max-w-[320px] mx-auto hidden sm:block">
            <svg className="absolute inset-0 w-full h-full text-[#1C5CA8]" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <ellipse cx="100" cy="100" rx="98" ry="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
              <ellipse cx="100" cy="100" rx="98" ry="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" transform="rotate(60 100 100)" />
              <ellipse cx="100" cy="100" rx="98" ry="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" transform="rotate(120 100 100)" />
              <circle cx="100" cy="4" r="3.5" fill="currentColor" />
              <circle cx="193" cy="58" r="2.5" fill="currentColor" fillOpacity="0.6" />
              <circle cx="14" cy="148" r="3" fill="currentColor" fillOpacity="0.7" />
              <circle cx="160" cy="178" r="2.5" fill="currentColor" fillOpacity="0.5" />
            </svg>
            <RotatingGlobe className="absolute inset-[12%] drop-shadow-[0_18px_30px_rgba(28,92,168,0.3)]" />
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-3 flex flex-col gap-6">
            {[
              { label: 'Global Compliance', icon: Settings },
              { label: 'Quality Manufacturing', icon: Factory },
              { label: 'Safe & Reliable Operations', icon: ShieldCheck },
              { label: 'Proven Industry Standards', icon: BarChart3 },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1C5CA8]/8 text-[#1C5CA8]">
                  <t.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <p className="text-base font-semibold text-[#0B1B2B]">{t.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Quote CTA — a short, wide banner strip rather than a tall block:
          full-width panel with reduced vertical padding so it reads at a
          glance without pushing the page's total height past a normal
          100%-zoom viewport, while keeping the same photo/scrim treatment,
          copy and button. */}
      <div className="bg-white pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="relative overflow-hidden rounded-3xl shadow-xl shadow-[#1C5CA8]/20">
            <div className="absolute inset-0">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-pipes-light.jpg`}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/92 via-[#0B1B2B]/55 to-[#0B1B2B]/10" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-8 py-7 sm:px-10 sm:py-8 md:px-14 md:py-10">
              <div className="lg:col-span-8 space-y-2 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7FB2E4]">
                  Ready when you are
                </p>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-[-0.01em] leading-[1.1]">
                  Let's plan your next project together.
                </h2>
                <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                  Our team will help you design a custom solution based on your process, space
                  constraints and plant requirements.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/request-quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-panel-blue text-[#103E72] px-7 py-3.5 text-sm font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
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

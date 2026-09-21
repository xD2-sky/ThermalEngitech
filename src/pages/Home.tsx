/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { INDUSTRIES_SERVED } from '../data';
import {
  Factory,
  Wrench,
  Award,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Flame,
  Coins,
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

      {/* About Us — short intro, real stats, large image. Kept light on text by design. */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 space-y-6 text-left">
            <p
              className="text-[11px] uppercase tracking-[0.14em] text-[#1C5CA8]"
              style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
            >
              About Thermal Engitech
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.08]">
              Engineering heat systems since 2012
            </h2>
            <p className="text-sm text-[#47566A] leading-relaxed">
              Founded in Gujarat, Thermal Engitech has grown into a full heavy-engineering plant
              in Dhamatwan — trusted across India and export markets for complete boiler
              assemblies, heaters, and accessories.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#E4E7EC]">
              <div className="pt-4">
                <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">12+</p>
                <p className="text-xs text-[#78889B] mt-1">Years in the field</p>
              </div>
              <div className="pt-4">
                <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">1,200+</p>
                <p className="text-xs text-[#78889B] mt-1">Systems installed</p>
              </div>
              <div className="pt-4">
                <p className="text-2xl font-heading font-extrabold text-[#0B1B2B]">100%</p>
                <p className="text-xs text-[#78889B] mt-1">IBR-certified builds</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C5CA8] hover:text-[#103E72] transition-colors pt-1"
            >
              <span>Learn more about us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#0B1B2B]/10">
              <img
                src={`${import.meta.env.BASE_URL}images/industries-bg.jpg`}
                alt="Thermal Engitech industrial facility"
                className="w-full h-[320px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Our Core Product Range — editorial composition, not a card grid. Only the 4
          featured categories show here; the other 4 products live on the Products page. */}
      <div className="relative bg-[#0B1B2B] pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle industrial-atmosphere background photo — low opacity, dark-toned already,
            reads as faint texture behind the composition rather than a prominent visual. */}
        <img
          src={`${import.meta.env.BASE_URL}images/hero-furnace-bg-v2.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B2B]/70 via-[#0B1B2B]/85 to-[#0B1B2B]" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">

          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2px] bg-[#DC2626]" />
                <p
                  className="text-[11px] uppercase tracking-[0.18em] text-slate-400"
                  style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
                >
                  Our Products
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] font-heading font-extrabold text-white tracking-[-0.02em] leading-[1.04]">
                Four Solutions.<br />Countless Possibilities.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                Thermal Engitech provides engineered thermal and process-heating solutions for
                industrial applications — designed and fabricated in-house to the standards your
                plant is audited against.
              </p>
            </div>

            <div className="hidden lg:block text-right shrink-0">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold leading-relaxed">
                Heat Drives<br />Progress
              </p>
              <span className="inline-block mt-2 w-10 h-[2px] bg-[#DC2626]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-y border-white/10">
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
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#DC2626] mt-1 transition-transform duration-300 group-hover:translate-x-1">
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
              className="group inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-white hover:text-[#DC2626] transition-colors"
            >
              <span>Explore complete product range</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Why Thermal Engitech — capabilities/reliability/expertise focus, distinct from
          the About Us section above (which covers company history/identity). */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 space-y-6 text-left">
            <p
              className="text-[11px] uppercase tracking-[0.1em] text-[#1C5CA8]"
              style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
            >
              Why choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.05]">
              Why Thermal Engitech
            </h2>
            <p className="text-sm text-[#47566A] leading-relaxed">
              Every system is engineered to your plant's exact thermal load, fuel type, and space
              constraints — not pulled from a catalog. Reliability and efficiency are built in
              from the first calculation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold text-sm text-[#0B1B2B]">Advanced HTRI sizing calculations</h3>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold text-sm text-[#0B1B2B]">Volumetric welder qualifications</h3>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold text-sm text-[#0B1B2B]">Precision firing controls</h3>
                  <p className="text-xs text-[#78889B] mt-0.5">Fuel economy on diesel, gas, or biomass.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coins className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-bold text-sm text-[#0B1B2B]">Lower operating costs</h3>
                  <p className="text-xs text-[#78889B] mt-0.5">Grates customized for agri-waste, wood chips, charcoal.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#1C5CA8] text-white hover:bg-[#103E72] px-5 py-2.5 text-sm font-semibold transition-colors shadow-sm"
              >
                <span>View product range</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#0B1B2B]/10">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-boiler-room.jpg`}
                alt="Precision engineering detail at Thermal Engitech"
                className="w-full h-[320px] md:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card, overlapping the image bottom-left */}
            <div className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:w-64 rounded-2xl bg-gradient-to-br from-[#103E72] to-[#1C5CA8] text-white p-5 shadow-lg shadow-[#1C5CA8]/25">
              <b
                className="text-[10px] tracking-[0.1em] text-[#BBD4F0] uppercase"
                style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
              >
                Certified works
              </b>
              <p className="text-2xl font-heading font-extrabold mt-1">1,200+</p>
              <p className="text-xs text-white/75 mt-0.5">Steam installations, deployed worldwide.</p>
              <Link to="/certifications" className="text-xs font-bold text-white hover:text-[#BBD4F0] flex items-center gap-1 mt-3 transition-colors">
                Read compliance roster
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Industries We Serve — atmospheric image band with subtle motion */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B1B2B]">
        <img
          src={`${import.meta.env.BASE_URL}images/industries-bg.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,18,30,0.55),rgba(9,18,30,0.6))]" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <span className="steam-plume steam-1" />
          <span className="steam-plume steam-3" />
        </div>
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <Reveal className="max-w-2xl space-y-4 text-center mx-auto">
            <p
              className="text-[11px] uppercase tracking-[0.1em] text-[#7FB2E4]"
              style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
            >
              Where our systems run
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-heading font-extrabold text-white tracking-[-0.02em] leading-[1.05]">
              Industries we serve
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
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
                  className="rounded-xl bg-white/8 backdrop-blur-md border border-white/15 p-5 flex flex-col items-center text-center gap-3 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#7FB2E4]/15 text-[#7FB2E4]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading font-bold text-xs text-white leading-tight">{ind.name}</span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-xs pt-2">
            Plus other industries and units where direct and indirect heating is essential.
          </p>
        </div>
      </div>

      {/* Certifications & Quality — compact, real credentials, links to full detail page */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div className="space-y-2">
              <p
                className="text-[11px] uppercase tracking-[0.14em] text-[#1C5CA8]"
                style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
              >
                Certifications & Quality
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em]">
                Built to the standards your plant is audited against
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

          <Reveal delay={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#E4E7EC] border border-[#E4E7EC]">
            {[
              ['ISO 9001:2015', 'Quality management'],
              ['ASME', 'Design & fabrication'],
              ['IBR 1950', 'Indian Boiler Regulations'],
              ['TEMA', 'Heat exchanger standards'],
            ].map(([label, desc]) => (
              <div key={label} className="bg-white p-6 flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#1C5CA8]" strokeWidth={1.75} />
                <p className="font-heading font-bold text-sm text-[#0B1B2B]">{label}</p>
                <p className="text-xs text-[#78889B]">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>


      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#103E72] via-[#1C5CA8] to-[#2F7BD4] p-8 md:p-11 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl shadow-[#1C5CA8]/20">
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_20%_20%,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
            <div className="md:col-span-9 space-y-2 text-left relative z-10">
              <h2 className="font-heading font-extrabold text-2xl text-white">Ready to consult on a custom plant layout?</h2>
              <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                Our engineering coordinators assess thermal demand, fuel options, and space constraints
                to hand you a full technical draft — not a generic quote.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right relative z-10">
              <Link
                to="/request-quote"
                className="inline-flex w-full items-center justify-center rounded-full bg-white text-[#103E72] hover:bg-[#EAF2FB] px-5 py-3.5 text-sm font-semibold transition-colors shadow-md"
              >
                Start a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  );
}

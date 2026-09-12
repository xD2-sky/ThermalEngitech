/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { INDUSTRIES_SERVED } from '../data';
import {
  Factory,
  Wrench,
  Award,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Flame,
  Droplets,
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
    href: '/products?category=Steam%20Boilers',
    cta: 'Explore steam boilers',
  },
  {
    n: '02',
    icon: Wrench,
    title: 'Thermic Fluid Heaters',
    desc: 'Concentric helical coil hot-oil heaters for stable, high-temperature indirect process heating.',
    href: '/products?category=Thermic%20Fluid%20Heaters',
    cta: 'Explore heaters',
  },
  {
    n: '03',
    icon: Layers,
    title: 'Heat Exchangers',
    desc: 'Custom engineered shell-and-tube or plate heat exchangers and condensers matching TEMA standards.',
    href: '/products?category=Heat%20Exchangers',
    cta: 'Explore heat exchangers',
  },
  {
    n: '04',
    icon: Award,
    title: 'Air Pre Heaters & Auxiliaries',
    desc: 'High-efficiency waste heat recovery preheaters, economizers, and air pollution control units.',
    href: '/products?category=Air%20Pre%20Heaters',
    cta: 'Explore auxiliaries',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0 text-left bg-white">
      {/* Hero Block */}
      <Hero
        onRequestQuote={() => navigate('/request-quote')}
        onViewProducts={() => navigate('/products')}
      />

      {/* Core Product Range — every card is a single clickable link to its category */}
      <div className="bg-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">Manufactured systems</p>
            <h2 className="text-3xl md:text-[2.6rem] font-heading font-bold text-[#0D1B2A] tracking-tight leading-[1.05]">
              Our core product range
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Heavy-duty process heating equipment, designed and fabricated in-house to the standards your
              plant is audited against. Select a category to see models, capacities and specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E1E4E3] border border-[#E1E4E3]">
            {PRODUCT_CATEGORIES.map((c) => (
              <Link
                key={c.title}
                to={c.href}
                className="group bg-white p-7 flex flex-col justify-between text-left transition-colors hover:bg-[#0D1B2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5CA8]"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-lg border border-[#E1E4E3] group-hover:border-white/20 flex items-center justify-center text-[#1C5CA8] group-hover:text-[#7FB2E4] transition-colors">
                      <c.icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0D1B2A] group-hover:text-white transition-colors">{c.title}</h4>
                  <p className="text-slate-500 group-hover:text-slate-300 text-[13px] leading-relaxed transition-colors">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E1E4E3] group-hover:border-white/10 flex items-center gap-1.5 text-[13px] font-semibold text-[#1C5CA8] group-hover:text-[#7FB2E4]">
                  <span>{c.cta}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Capabilities Section */}
      <div className="bg-[#F1F1ED] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">Thermal Engitech advantages</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0D1B2A] tracking-tight leading-[1.05]">
                High-efficiency process heating, over a decade in the field
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered in Dhamatwan, Gujarat — built for lower fuel costs and higher dry-fraction steam output.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1C5CA8] shrink-0" strokeWidth={1.75} />
                  <h5 className="font-bold text-sm text-[#0D1B2A]">Advanced HTRI sizing calculations</h5>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1C5CA8] shrink-0" strokeWidth={1.75} />
                  <h5 className="font-bold text-sm text-[#0D1B2A]">Volumetric welder qualifications</h5>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-md bg-[#0D1B2A] hover:bg-[#1C5CA8] px-5 py-3 text-sm font-semibold text-white transition-colors"
                >
                  <span>Learn more about us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-md border border-[#0D1B2A]/15 bg-white hover:border-[#0D1B2A]/40 px-5 py-3 text-sm font-semibold text-[#17222E] transition-colors"
                >
                  View product range
                </Link>
              </div>
            </div>

            {/* Feature grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E1E4E3] border border-[#E1E4E3]">
              <div className="bg-white p-6 space-y-3.5 text-left">
                <div className="w-10 h-10 border border-[#E1E4E3] flex items-center justify-center text-[#1C5CA8]">
                  <Flame className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A]">Precision firing controls</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fuel economy on diesel, gas, or biomass.
                </p>
              </div>

              <div className="bg-white p-6 space-y-3.5 text-left">
                <div className="w-10 h-10 border border-[#E1E4E3] flex items-center justify-center text-[#1C5CA8]">
                  <Droplets className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A]">IBR dry steam output</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Steady release, high dry-fraction.
                </p>
              </div>

              <div className="bg-white p-6 space-y-3.5 text-left">
                <div className="w-10 h-10 border border-[#E1E4E3] flex items-center justify-center text-[#1C5CA8]">
                  <Coins className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A]">Lower operating costs</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Grates customized for agri-waste, wood chips, charcoal.
                </p>
              </div>

              <div className="bg-[#0D1B2A] text-white p-6 flex flex-col justify-between items-start text-left">
                <b className="text-[10px] font-mono tracking-widest text-[#2F7BD4] uppercase">Certified works</b>
                <div className="space-y-1.5 py-4">
                  <h4 className="text-2xl font-heading font-bold">1,200+</h4>
                  <p className="text-xs text-slate-300">Steam installations, deployed worldwide.</p>
                </div>
                <Link to="/certifications" className="text-xs font-bold text-[#2F7BD4] hover:underline flex items-center gap-1">
                  Read compliance roster
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve — real list, fresh design */}
      <div className="bg-[#0D1B2A] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="max-w-2xl space-y-4 text-center mx-auto">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#7FB2E4]">Where our systems run</p>
            <h2 className="text-3xl md:text-[2.6rem] font-heading font-bold text-white tracking-tight leading-[1.05]">
              Industries we serve
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Fourteen industries, one requirement in common: heat that can't fail.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {INDUSTRIES_SERVED.map((ind, i) => {
              const Icon = INDUSTRY_ICONS[ind.icon] ?? Factory;
              return (
                <div
                  key={i}
                  className="bg-white rounded-md p-5 flex flex-col items-center text-center gap-3 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-7 h-7 text-[#1C5CA8]" strokeWidth={1.5} />
                  <span className="font-heading font-bold text-xs text-[#0D1B2A] leading-tight">{ind.name}</span>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-xs pt-2">
            Plus other industries and units where direct and indirect heating is essential.
          </p>
        </div>
      </div>

      {/* Call to action panel */}
      <div className="bg-[#F1F1ED] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0D1B2A] text-white rounded-xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-9 space-y-2 text-left">
              <h4 className="font-heading font-bold text-xl text-white">Ready to consult on a custom plant layout?</h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                Our engineering coordinators assess thermal demand, fuel options, and space constraints
                to hand you a full technical draft — not a generic quote.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <Link
                to="/request-quote"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#1C5CA8] hover:bg-[#2F7BD4] px-5 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                Start a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

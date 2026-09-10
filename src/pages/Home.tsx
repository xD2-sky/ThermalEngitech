/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { INDUSTRIES } from '../data';
import {
  Factory,
  Wrench,
  BadgeCheck,
  Award,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Flame,
  Droplets,
  Coins,
  Layers
} from 'lucide-react';

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

const TRUST_MARKS = [
  { icon: Factory, title: 'ISO Certified Plant', desc: 'Global audit approved plant operations & structural testing rules.' },
  { icon: Wrench, title: 'ASME Approved', desc: 'High-pressure boilers certified matching Section I & VIII guidelines.' },
  { icon: BadgeCheck, title: 'IBR Compliance', desc: 'Strict adherence to Indian Boiler Regulations, 1950.' },
  { icon: Award, title: 'Export Standard', desc: 'Supplying verified materials to chemical networks globally.' },
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

      {/* Trust Marks Strip */}
      <div className="bg-white border-b border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_MARKS.map((t, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-7 ${i > 0 ? 'sm:border-l border-[#E1E4E3]' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <t.icon className="w-5 h-5 text-[#1F5FA8] shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="text-left">
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A] tracking-tight">{t.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Product Range — every card is a single clickable link to its category */}
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-2xl space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1F5FA8]">Manufactured systems</p>
            <h2 className="text-3xl md:text-[2.6rem] font-heading font-bold text-[#0D1B2A] tracking-tight leading-[1.05]">
              Our core product range
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Heavy-duty process heating equipment, designed and fabricated in-house to the standards your
              plant is audited against. Select a category to see models, capacities and specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E1E4E3] border border-[#E1E4E3]">
            {PRODUCT_CATEGORIES.map((c) => (
              <Link
                key={c.title}
                to={c.href}
                className="group bg-white p-7 flex flex-col justify-between text-left transition-colors hover:bg-[#0D1B2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5FA8]"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#1F5FA8] group-hover:text-[#2E76C9]">{c.n}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                  <div className="w-11 h-11 border border-[#E1E4E3] group-hover:border-white/20 flex items-center justify-center text-[#1F5FA8] group-hover:text-[#2E76C9] transition-colors">
                    <c.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0D1B2A] group-hover:text-white transition-colors">{c.title}</h4>
                  <p className="text-slate-500 group-hover:text-slate-300 text-xs leading-relaxed transition-colors">
                    {c.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E1E4E3] group-hover:border-white/10 flex items-center gap-1.5 text-xs font-bold text-[#1F5FA8] group-hover:text-[#2E76C9] uppercase tracking-wide">
                  <span>{c.cta}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Capabilities Section */}
      <div className="bg-[#F1F1ED] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1F5FA8]">Thermal Engitech advantages</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0D1B2A] tracking-tight leading-[1.05]">
                High-efficiency process heating, over a decade in the field
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From our facility in Dhamatwan, Gujarat, we design, engineer, and manufacture heavy-duty
                utility systems that keep manufacturing grids running. Smart preheaters, low-emission
                combustion, and dense coil configurations bring fuel costs down while holding a high
                dry-fraction steam output.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5FA8] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h5 className="font-bold text-sm text-[#0D1B2A]">Advanced HTRI sizing calculations</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Dynamic fluid simulations to guarantee thermal performance without hot spots.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5FA8] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h5 className="font-bold text-sm text-[#0D1B2A]">Volumetric welder qualifications</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Every weld root is qualified under ASME Sec IX criteria with 100% radiography scanning.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-5 py-3 bg-[#0D1B2A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1F5FA8] transition-colors flex items-center gap-1.5"
                >
                  <span>Learn more about us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/products"
                  className="px-5 py-3 border border-[#0D1B2A]/15 bg-white text-[#17222E] hover:border-[#0D1B2A] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View product range
                </Link>
              </div>
            </div>

            {/* Feature grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E1E4E3] border border-[#E1E4E3]">
              <div className="bg-white p-6 space-y-3.5 text-left">
                <div className="w-10 h-10 border border-[#E1E4E3] flex items-center justify-center text-[#1F5FA8]">
                  <Flame className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A]">Precision firing controls</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Engineered with leading burner brands for fuel economy on light diesel oil, gas, or biomass feed.
                </p>
              </div>

              <div className="bg-white p-6 space-y-3.5 text-left">
                <div className="w-10 h-10 border border-[#E1E4E3] flex items-center justify-center text-[#1F5FA8]">
                  <Droplets className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A]">IBR dry steam output</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Single or dual drum systems hold steady steam release with a high dry-fraction percentage.
                </p>
              </div>

              <div className="bg-white p-6 space-y-3.5 text-left">
                <div className="w-10 h-10 border border-[#E1E4E3] flex items-center justify-center text-[#1F5FA8]">
                  <Coins className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0D1B2A]">Lower operating costs</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Solid-fuel grates are customized for agricultural briquettes, wood chips, and charcoal waste.
                </p>
              </div>

              <div className="bg-[#0D1B2A] text-white p-6 flex flex-col justify-between items-start text-left">
                <b className="text-[10px] font-mono tracking-widest text-[#2E76C9] uppercase">Certified works</b>
                <div className="space-y-1.5 py-4">
                  <h4 className="text-2xl font-heading font-bold">1,200+</h4>
                  <p className="text-xs text-slate-300">High-dryness steam installations deployed worldwide.</p>
                </div>
                <Link to="/certifications" className="text-xs font-bold text-[#2E76C9] hover:underline flex items-center gap-1">
                  Read compliance roster
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Overview */}
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-2xl space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1F5FA8]">Global applications</p>
            <h2 className="text-3xl md:text-[2.6rem] font-heading font-bold text-[#0D1B2A] tracking-tight leading-[1.05]">
              Supporting major global industries
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our process systems meet strict temperature demands and heavy structural loads across
              diverse industrial grids.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E1E4E3] border border-[#E1E4E3]">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="bg-white hover:bg-[#F7F7F4] transition-colors p-6 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#1F5FA8]">0{i + 1}</span>
                  <h4 className="font-heading font-bold text-sm text-[#0D1B2A] leading-tight">{ind.name}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{ind.useCase}</p>
                </div>
                <div className="pt-4 border-t border-[#E1E4E3] mt-4 text-[10px] font-mono font-bold text-[#1F5FA8] uppercase">
                  {ind.solution.split(' & ')[0]}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5FA8] hover:text-[#2E76C9] uppercase tracking-wider"
            >
              <span>Explore precise industry solutions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Call to action panel */}
      <div className="bg-[#F1F1ED] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0D1B2A] text-white p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
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
                className="inline-block w-full text-center px-5 py-3.5 bg-[#1F5FA8] hover:bg-[#2E76C9] text-white font-bold text-xs uppercase tracking-wider transition-colors"
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

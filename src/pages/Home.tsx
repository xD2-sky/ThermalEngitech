/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { useMousePosition } from '../hooks/useMousePosition';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
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

// Card with a 3D tilt-on-hover, tracking cursor position.
// Effect + timing pattern sourced from animata.design's "GitHub Card - Skew" (MIT licensed):
// transitions smoothly on enter, drops to instant tracking after 300ms so continuous
// mouse movement doesn't lag behind the cursor, then transitions smoothly back on exit.
interface ProductCardProps {
  category: typeof PRODUCT_CATEGORIES[number];
}

function ProductCard({ category: c }: ProductCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const resetRef = useRef<ReturnType<typeof setTimeout>>();

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const rotationFactor = distance / maxDistance;
    const maxRotation = 5;
    const rotationY = ((-deltaX / centerX) * maxRotation * rotationFactor).toFixed(2);
    const rotationX = ((deltaY / centerY) * maxRotation * rotationFactor).toFixed(2);
    cardRef.current.style.setProperty('--tilt-x', `${rotationX}deg`);
    cardRef.current.style.setProperty('--tilt-y', `${rotationY}deg`);
  }, []);

  useMousePosition(cardRef, update);

  return (
    <Link
      ref={cardRef}
      to={c.href}
      className="group relative bg-white p-7 flex flex-col justify-between text-left transition-colors duration-200 will-change-transform hover:bg-[#0D1B2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5CA8]"
      style={{
        transform: 'perspective(800px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
        transitionDuration: '120ms',
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (cardRef.current) cardRef.current.style.transitionDuration = '0ms';
        }, 300);
      }}
      onMouseLeave={() => {
        clearTimeout(resetRef.current);
        if (cardRef.current) {
          cardRef.current.style.transitionDuration = '120ms';
          cardRef.current.style.setProperty('--tilt-x', '0deg');
          cardRef.current.style.setProperty('--tilt-y', '0deg');
        }
      }}
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-lg border border-[#E1E4E3] group-hover:border-white/20 bg-[#F7F7F5] group-hover:bg-white/5 flex items-center justify-center text-[#1C5CA8] group-hover:text-[#7FB2E4] transition-colors">
            <c.icon className="w-6 h-6" strokeWidth={1.75} />
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
  );
}

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E1E4E3] border border-[#E1E4E3]" style={{ perspective: '800px' }}>
            {PRODUCT_CATEGORIES.map((c) => (
              <div key={c.title} className="contents">
                <ProductCard category={c} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Capabilities Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto border border-dashed border-[#1c1c1c]/30 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <p
                className="text-[11px] uppercase tracking-[0.1em] text-black/60"
                style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
              >
                Thermal Engitech advantages
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-black tracking-[-0.02em] leading-[1.05]">
                High-efficiency process heating, over a decade in the field
              </h2>
              <p className="text-sm text-[#4d4d4d] leading-relaxed">
                Engineered in Dhamatwan, Gujarat — built for lower fuel costs and higher dry-fraction steam output.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7089ba] shrink-0" strokeWidth={1.75} />
                  <h5 className="font-bold text-sm text-black">Advanced HTRI sizing calculations</h5>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7089ba] shrink-0" strokeWidth={1.75} />
                  <h5 className="font-bold text-sm text-black">Volumetric welder qualifications</h5>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-black text-black hover:bg-black hover:text-white px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  <span>Learn more about us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-full border border-black/25 hover:border-black px-5 py-2.5 text-sm font-medium text-black transition-colors"
                >
                  View product range
                </Link>
              </div>
            </div>

            {/* Feature grid — no fill, no shadow, dashed dividers only */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 divide-y divide-dashed sm:divide-y-0 sm:divide-x divide-black/15 border border-dashed border-black/15">
              <div className="p-6 space-y-3.5 text-left">
                <Flame className="w-6 h-6 text-[#7089ba]" strokeWidth={1.5} />
                <h4 className="font-heading font-bold text-sm text-black">Precision firing controls</h4>
                <p className="text-xs text-[#4d4d4d] leading-relaxed">
                  Fuel economy on diesel, gas, or biomass.
                </p>
              </div>

              <div className="p-6 space-y-3.5 text-left">
                <Droplets className="w-6 h-6 text-[#7089ba]" strokeWidth={1.5} />
                <h4 className="font-heading font-bold text-sm text-black">IBR dry steam output</h4>
                <p className="text-xs text-[#4d4d4d] leading-relaxed">
                  Steady release, high dry-fraction.
                </p>
              </div>

              <div className="p-6 space-y-3.5 text-left">
                <Coins className="w-6 h-6 text-[#7089ba]" strokeWidth={1.5} />
                <h4 className="font-heading font-bold text-sm text-black">Lower operating costs</h4>
                <p className="text-xs text-[#4d4d4d] leading-relaxed">
                  Grates customized for agri-waste, wood chips, charcoal.
                </p>
              </div>

              <div className="bg-black text-white p-6 flex flex-col justify-between items-start text-left">
                <b
                  className="text-[10px] tracking-[0.1em] text-[#7089ba] uppercase"
                  style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
                >
                  Certified works
                </b>
                <div className="space-y-1.5 py-4">
                  <h4 className="text-2xl font-heading font-extrabold">1,200+</h4>
                  <p className="text-xs text-[#ababab]">Steam installations, deployed worldwide.</p>
                </div>
                <Link to="/certifications" className="text-xs font-bold text-[#7089ba] hover:underline flex items-center gap-1">
                  Read compliance roster
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve — Index-style void-black section, no-fill step cards */}
      <div className="bg-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="max-w-2xl space-y-4 text-center mx-auto">
            <p
              className="text-[11px] uppercase tracking-[0.1em] text-[#7089ba]"
              style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
            >
              Where our systems run
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-heading font-extrabold text-white tracking-[-0.02em] leading-[1.05]">
              Industries we serve
            </h2>
            <p className="text-[#808080] text-sm leading-relaxed">
              Fourteen industries, one requirement in common: heat that can't fail.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-px border border-dashed border-white/15 bg-white/15">
            {INDUSTRIES_SERVED.map((ind, i) => {
              const Icon = INDUSTRY_ICONS[ind.icon] ?? Factory;
              return (
                <div
                  key={i}
                  className="bg-black p-5 flex flex-col items-center text-center gap-3 hover:bg-[#1c1c1c] transition-colors duration-200"
                >
                  <Icon className="w-6 h-6 text-[#7089ba]" strokeWidth={1.5} />
                  <span className="font-heading font-bold text-xs text-white leading-tight">{ind.name}</span>
                </div>
              );
            })}
          </div>

          <p className="text-center text-[#808080] text-xs pt-2">
            Plus other industries and units where direct and indirect heating is essential.
          </p>
        </div>
      </div>

      {/* Call to action panel */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white border border-dashed border-white/25 p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-9 space-y-2 text-left">
              <h4 className="font-heading font-extrabold text-xl text-white">Ready to consult on a custom plant layout?</h4>
              <p className="text-xs text-[#808080] leading-relaxed max-w-3xl">
                Our engineering coordinators assess thermal demand, fuel options, and space constraints
                to hand you a full technical draft — not a generic quote.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <Link
                to="/request-quote"
                className="inline-flex w-full items-center justify-center rounded-full border border-white hover:bg-white hover:text-black px-5 py-3 text-sm font-medium text-white transition-colors"
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

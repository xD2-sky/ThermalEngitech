/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { slugify } from '../catalog';
import ProductVideoShowcase from '../components/ProductVideoShowcase';
import {
  ArrowLeft, ShieldCheck, Cpu, Mail, Phone, ChevronRight,
  Gauge, Thermometer, Flame, Layers, BarChart3, Settings,
  Rocket, ArrowRight, Check, Wind, Shield, Ruler,
} from 'lucide-react';
import Reveal from '../components/Reveal';

/** Real product renders — only set for products we have accurate photography
 *  for. Products without an entry fall back to the CAD-style schematic. */
const PRODUCT_PHOTOS: Partial<Record<string, string>> = {
  'pressure-reducing-station': 'images/products/pressure-reducing-station-skid.webp',
  'hot-water-generator-unit': 'images/products/hot-water-generator.webp',
  'chimney-pollution': 'images/products/industrial-chimney.webp',
  'bag-filter-pollution': 'images/products/bag-filter-system.webp',
  'heat-exchanger-shelltube': 'images/products/heat-exchanger-shell-tube.webp',
  'air-pre-heater': 'images/products/air-preheater-block.webp',
  'oil-gas-3pass-wetback': 'images/products/oil-gas-3pass-wetback.webp',
  'smokecum-watertube-membrane': 'images/products/smokecum-watertube-membrane.webp',
  'hybrid-combithermal': 'images/products/hybrid-combithermal.webp',
  'solid-fuel-3pass-wetback': 'images/products/solid-fuel-3pass-wetback.webp',
  'oil-gas-3pass-horizontal-heater': 'images/products/oil-gas-3pass-horizontal-heater.webp',
  'solid-fuel-4pass-vertical-heater': 'images/products/solid-fuel-4pass-vertical-heater.webp',
  'solid-fuel-3pass-horizontal-heater': 'images/products/solid-fuel-3pass-horizontal-heater.webp',
};

/** Of the PRODUCT_PHOTOS above, these seven are raw, unprocessed studio
 *  photos with an opaque gray backdrop baked into the pixels — they fill
 *  the hero card edge-to-edge (no inset) so that backdrop reaches the
 *  card's own rounded corners with nothing exposed in between. Everything
 *  else (schematics, pre-matched photos) keeps the card's normal inset
 *  padding for breathing room around a centered, contained image. */
const RAW_STUDIO_PHOTOS = new Set([
  'oil-gas-3pass-wetback',
  'hybrid-combithermal',
  'solid-fuel-3pass-wetback',
  'oil-gas-3pass-horizontal-heater',
  'solid-fuel-4pass-vertical-heater',
  'smokecum-watertube-membrane',
  'solid-fuel-3pass-horizontal-heater',
]);

const PRODUCT_SCHEMATICS: Partial<Record<string, string>> = {
  'steam-distribution-header': 'images/products/steam-distribution-header.webp',
  'condensate-tank': 'images/products/condensate-tank.webp',
  'steam-boiler-feed-water-tank': 'images/products/steam-boiler-feed-water-tank.webp',
  'blow-down-tank': 'images/products/blow-down-tank.webp',
  'expansion-tank': 'images/products/expansion-tank.webp',
  'wet-scrubber-pollution': 'images/products/wet-scrubber-pollution.webp',
  'multi-cyclone-dust-collector': 'images/products/multi-cyclone-dust-collector.webp',
};

function ProductImageLarge({
  type,
  productId,
}: {
  type: Product['imageType'];
  productId?: string;
}) {
  if (productId && PRODUCT_PHOTOS[productId]) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${PRODUCT_PHOTOS[productId]}`}
        alt="Thermal Engitech product render"
        className={RAW_STUDIO_PHOTOS.has(productId) ? 'w-full h-full object-cover' : 'max-w-full max-h-full w-auto h-auto'}
      />
    );
  }

  if (productId && PRODUCT_SCHEMATICS[productId]) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${PRODUCT_SCHEMATICS[productId]}`}
        alt="Thermal Engitech manufacturer CAD elevation drawing"
        className="max-w-full max-h-full w-auto h-auto"
      />
    );
  }

  switch (type) {
    case 'boiler':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="50" y="45" width="220" height="110" rx="55" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4.5" />
          <rect x="58" y="53" width="204" height="94" rx="47" fill="#0D1B2A" opacity="0.9" />
          <line x1="68" y1="80" x2="252" y2="80" stroke="#2F7BD4" strokeWidth="3" strokeDasharray="6 6" />
          <line x1="68" y1="100" x2="252" y2="100" stroke="#2F7BD4" strokeWidth="3" />
          <line x1="68" y1="120" x2="252" y2="120" stroke="#2F7BD4" strokeWidth="3" strokeDasharray="6 6" />
          <rect x="145" y="15" width="30" height="30" fill="#17222E" stroke="#1C5CA8" strokeWidth="2.5" />
          <line x1="145" y1="24" x2="175" y2="24" stroke="#2F7BD4" strokeWidth="2" />
          <path d="M160 5 V15" stroke="#EF4444" strokeWidth="3" />
          <rect x="80" y="155" width="25" height="15" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2.5" />
          <rect x="215" y="155" width="25" height="15" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2.5" />
          <line x1="65" y1="170" x2="255" y2="170" stroke="#1C5CA8" strokeWidth="5" />
        </svg>
      );
    case 'heater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="50" y="50" width="220" height="100" rx="14" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4.5" />
          <path d="M70 70 Q90 55 110 70 T150 70 T190 70 T230 70" fill="none" stroke="#1C5CA8" strokeWidth="4" />
          <path d="M70 95 Q90 80 110 95 T150 95 T190 95 T230 95" fill="none" stroke="#1C5CA8" strokeWidth="4" />
          <path d="M70 120 Q90 105 110 120 T150 120 T190 120 T230 120" fill="none" stroke="#1B3A63" strokeWidth="4" />
          <rect x="25" y="70" width="25" height="60" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="4" />
          <line x1="10" y1="100" x2="25" y2="100" stroke="#EF4444" strokeWidth="5" />
        </svg>
      );
    case 'generator':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="90" y="20" width="140" height="160" rx="10" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4.5" />
          <rect x="100" y="30" width="120" height="140" rx="6" fill="#0D1B2A" opacity="0.91" />
          <path d="M120 50 C120 62 200 62 200 75 C200 88 120 88 120 101 C120 114 200 114 200 127 C200 140 120 140 120 152" fill="none" stroke="#1C5CA8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'exchanger':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="40" y="55" width="240" height="90" rx="10" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4.5" />
          <line x1="48" y1="80" x2="272" y2="80" stroke="#7FB2E4" strokeWidth="3" />
          <line x1="48" y1="100" x2="272" y2="100" stroke="#1C5CA8" strokeWidth="2" />
          <line x1="48" y1="120" x2="272" y2="120" stroke="#7FB2E4" strokeWidth="3" />
        </svg>
      );
    case 'prs':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <path d="M30 100 H290" stroke="#1C5CA8" strokeWidth="6" />
          <path d="M70 100 V50 H250 V100" fill="none" stroke="#1C5CA8" strokeWidth="6" />
          <circle cx="160" cy="100" r="20" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="145" y="55" width="30" height="25" fill="#EF4444" stroke="#0D1B2A" strokeWidth="2.5" />
          <line x1="160" y1="75" x2="160" y2="120" stroke="#7FB2E4" strokeWidth="3" />
        </svg>
      );
    case 'preheater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="70" y="30" width="180" height="140" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="78" y="38" width="164" height="124" fill="#0D1B2A" opacity="0.95" />
          <line x1="105" y1="50" x2="105" y2="150" stroke="#7FB2E4" strokeWidth="4" strokeDasharray="4 4" />
          <line x1="135" y1="50" x2="135" y2="150" stroke="#7FB2E4" strokeWidth="4" />
          <line x1="165" y1="50" x2="165" y2="150" stroke="#7FB2E4" strokeWidth="4" strokeDasharray="4 4" />
          <line x1="195" y1="50" x2="195" y2="150" stroke="#7FB2E4" strokeWidth="4" />
        </svg>
      );
    case 'pollution':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72 drop-shadow-lg">
          <rect x="100" y="25" width="120" height="70" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <polygon points="100,95 220,95 180,170 140,170" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <circle cx="160" cy="178" r="12" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
        </svg>
      );
    case 'other':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-72">
          <rect x="80" y="45" width="160" height="90" rx="45" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="5" />
          <rect x="88" y="53" width="144" height="74" rx="37" fill="#0D1B2A" opacity="0.9" />
          <rect x="110" y="15" width="22" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
          <rect x="149" y="15" width="22" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
          <rect x="188" y="15" width="22" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2.5" />
        </svg>
      );
  }
}

// Keyword match rather than a per-label lookup — same approach across
// product layouts.
function specIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes('pressure')) return Gauge;
  if (l.includes('capacity') || l.includes('volume') || l.includes('output') || l.includes('flow')) return Gauge;
  if (l.includes('temp')) return Thermometer;
  if (l.includes('fuel')) return Flame;
  if (l.includes('material') || l.includes('metallurgy') || l.includes('construction') || l.includes('shell') || l.includes('vessel')) return Layers;
  if (l.includes('efficiency') || l.includes('recovery') || l.includes('performance')) return BarChart3;
  if (l.includes('code') || l.includes('standard') || l.includes('complian') || l.includes('registration') || l.includes('safety')) return ShieldCheck;
  return Settings;
}

// A spec value like "0.5 Ton/hr to 20.0 Tons/hr (500 to 20,000 kg/hr)" reads
// better as a bold headline value plus a smaller parenthetical note below it.
function splitSpecValue(value: string): [string, string | null] {
  const m = value.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  return m ? [m[1], m[2]] : [value, null];
}

// Hand-picked icons for Expansion Cum De-Aerator Tank's 5 specifications, in
// their fixed data.ts order — this one product's spec set was designed
// around these exact icons, so it keeps them instead of the generic
// keyword-matched fallback every other product uses.
const EXPANSION_TANK_SPEC_ICONS = [Ruler, Layers, Gauge, Wind, Shield];

/**
 * Product detail page layout — glass/tilt hero card, floating certification
 * badge, blueprint-grid page background, and dark glowing Authority + CTA
 * cards. Rolled out to every product.
 */
function ProductDetailsLayout({
  product,
  backTo,
  backLabel,
}: {
  product: Product;
  backTo: string;
  backLabel: string;
}) {
  const tiltRef = React.useRef<HTMLDivElement>(null);
  const isRawStudioPhoto = RAW_STUDIO_PHOTOS.has(product.id);

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    const shadowX = (x - centerX) / 10;
    const shadowY = (y - centerY) / 10;
    el.style.boxShadow = `${-shadowX}px ${-shadowY}px 40px -10px rgba(28,92,168,0.25), inset 0 1px 0 rgba(255,255,255,1)`;
  };

  const handleTiltLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.boxShadow = '0 25px 50px -12px rgba(28,92,168,0.15), inset 0 1px 0 rgba(255,255,255,1)';
  };

  return (
    <>
      <style>{`
        @keyframes productCertBadgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .product-cert-badge-float { animation: productCertBadgeFloat 5s ease-in-out infinite; }
      `}</style>

      <div
        className="min-h-screen text-left"
        style={{
          backgroundColor: '#FBFBFC',
          backgroundImage:
            'linear-gradient(rgba(28,92,168,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,92,168,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        {/* Breadcrumb bar — clears the fixed navbar at rest; sticks below it once scrolled */}
        <div className="bg-white/80 backdrop-blur-md border-b border-line py-3.5 px-4 sm:px-6 lg:px-8 font-sans mt-16 sm:mt-18 lg:mt-20 sticky top-16 sm:top-18 lg:top-20 z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-soft font-semibold">
            <Link
              to={backTo}
              data-testid="product-back-btn"
              className="inline-flex items-center gap-2 rounded-full bg-blue/10 hover:bg-blue/20 text-blue px-4 py-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {backLabel}</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/products" className="hover:text-blue transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to={backTo} className="text-blue hover:underline">{product.category}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-ink font-extrabold truncate max-w-[120px] sm:max-w-none">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-14">

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Reveal className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-blue/10 text-blue px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                {product.category}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-ink tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-blue text-sm md:text-base font-semibold leading-relaxed border-l-4 border-sky pl-6">
                "{product.tagline}"
              </p>
            </Reveal>

            <Reveal delay={0.15} className="relative [perspective:1000px]">
              <div className="absolute -top-5 -right-5 z-20 bg-white rounded-2xl shadow-xl border border-line p-5 flex items-center gap-4 product-cert-badge-float">
                <div className="bg-blue/10 p-2.5 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">IBR 1950</p>
                  <p className="text-[11px] text-slate-soft font-medium">Certified</p>
                </div>
              </div>

              <div
                ref={tiltRef}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                className={`rounded-3xl ${isRawStudioPhoto ? '' : 'p-8'} flex items-center justify-center aspect-[16/10] relative overflow-hidden bg-white/65 backdrop-blur-xl border border-white/90`}
                style={{
                  boxShadow: '0 25px 50px -12px rgba(28,92,168,0.15), inset 0 1px 0 rgba(255,255,255,1)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.15s ease-out, box-shadow 0.3s ease-out',
                }}
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <ProductImageLarge type={product.imageType} productId={product.id} />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Video Showcase (Steam Boilers and Thermic Fluid Heaters only) */}
          {(product.category === 'Steam Boilers' || product.category === 'Thermic Fluid Heaters') && (
            <ProductVideoShowcase productId={product.id} />
          )}

          {/* Technical Specifications */}
          <div>
            <Reveal className="flex items-center gap-3 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue shadow-sm">
                <Cpu className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-heading font-extrabold text-ink">Technical Specifications</h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.specifications?.map((sp, idx) => {
                const SpecIcon =
                  product.id === 'expansion-tank'
                    ? EXPANSION_TANK_SPEC_ICONS[idx] ?? specIcon(sp.label)
                    : specIcon(sp.label);
                const [mainValue, note] = splitSpecValue(sp.value);
                return (
                  <React.Fragment key={idx}>
                  <Reveal
                    delay={idx * 0.1}
                    className="bg-white border border-line rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(28,92,168,0.15)] transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/5 text-blue group-hover:bg-blue group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <SpecIcon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-soft mb-1">{sp.label}</div>
                      <div className="text-[15px] font-bold text-ink leading-snug">{mainValue}</div>
                      {note && <div className="text-xs text-slate-soft mt-0.5">{note}</div>}
                    </div>
                  </Reveal>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Key Performance Features — full width, two-column list */}
          <Reveal className="bg-white border border-line rounded-3xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
            <h3 className="text-xl font-heading font-extrabold text-ink mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <Rocket className="w-4 h-4" />
              </span>
              Key Performance Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features?.map((feat, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue/10 group-hover:bg-blue transition-colors duration-300">
                    <Check className="w-4 h-4 text-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate font-medium leading-relaxed group-hover:text-ink transition-colors">{feat}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Quote CTA — light theme, top gradient accent */}
          <Reveal delay={0.2}>
            <div className="bg-white border border-blue/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-xl font-heading font-extrabold text-ink mb-2">Ready to get a precise quote?</h3>
                <p className="text-slate text-sm max-w-md">Our engineering team reviews your specifications and responds within 24 business hours.</p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <div className="flex flex-col gap-3 text-center sm:text-right">
                  <a href="tel:+917069306431" className="flex items-center gap-2 text-sm text-slate hover:text-blue transition-colors justify-center sm:justify-end font-medium">
                    <Phone className="w-4 h-4 text-blue" />
                    +91 70693 06431
                  </a>
                  <a href="mailto:info@thermalengitech.com" className="flex items-center gap-2 text-sm text-slate hover:text-blue transition-colors justify-center sm:justify-end font-medium">
                    <Mail className="w-4 h-4 text-blue" />
                    info@thermalengitech.com
                  </a>
                </div>
                <Link
                  to={`/request-quote?product=${encodeURIComponent(product.name)}`}
                  className="group relative inline-flex items-center gap-3 rounded-full bg-blue text-white font-bold px-8 py-4 text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 whitespace-nowrap"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </>
  );
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  useDocumentMeta(
    product ? product.name : 'Product Not Found',
    product
      ? `${product.name} — ${product.category}. ${product.description.slice(0, 140)}`
      : 'The requested product could not be found.',
    product
      ? {
          type: 'product',
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              category: product.category,
              description: product.description,
              brand: { '@type': 'Brand', name: 'Thermal Engitech Pvt. Ltd.' },
              manufacturer: { '@type': 'Organization', name: 'Thermal Engitech Pvt. Ltd.' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Products', item: 'https://thermalengitech.com/products' },
                { '@type': 'ListItem', position: 2, name: product.category, item: `https://thermalengitech.com/products/category/${slugify(product.category)}` },
                { '@type': 'ListItem', position: 3, name: product.name, item: `https://thermalengitech.com/products/${product.id}` },
              ],
            },
          ],
        }
      : { noindex: true }
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h2 className="text-2xl font-bold font-heading text-ink">Product Configuration Not Found</h2>
        <p className="text-slate max-w-sm mx-auto text-xs leading-normal">
          The requested system schematic could not be loaded. It may have been archived or updated.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-md bg-blue hover:bg-blue-2 px-5 py-3 text-sm font-semibold text-white transition-colors"
        >
          Return to catalog
        </Link>
      </div>
    );
  }

  const backTo = `/products/category/${slugify(product.category)}`;
  const backLabel = product.category;

  return <ProductDetailsLayout product={product} backTo={backTo} backLabel={backLabel} />;
}

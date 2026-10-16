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
  ArrowLeft, ShieldCheck, Cpu, Mail, Phone, CheckCircle2, ChevronRight,
  Gauge, Thermometer, Flame, Layers, BarChart3, Settings, Award, Clock,
  Rocket, FileText,
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

/** Of the PRODUCT_PHOTOS above, these five are raw, unprocessed studio
 *  photos with an opaque gray backdrop baked into the pixels — everything
 *  else in that map is either genuinely transparent or was already
 *  recolored to match the site's panel background, so only these five
 *  need the edge-to-edge/object-cover treatment to avoid a mismatched-gray
 *  seam against the panel. Forcing that treatment on the others would just
 *  crop good images for no reason (two of them are tall, near-portrait
 *  cutouts that a landscape crop would mangle). */
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
    // RAW_STUDIO_PHOTOS have an opaque gray backdrop baked into the pixels,
    // so they fill the box edge-to-edge (object-cover) rather than leaving
    // panel background exposed around a mismatched gray rectangle. Every
    // other photo here is already transparent or pre-matched to the panel
    // color, so those keep the normal contained, centered sizing.
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

  // Schematic fallback (kept identical to the previous implementation)
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

  return (
    <div className="bg-white min-h-screen text-left">

      {/* Breadcrumb bar — clears the fixed navbar at rest; sticks below it once scrolled */}
      <div className="bg-white border-b border-line py-3.5 px-4 sm:px-6 lg:px-8 font-sans mt-16 sm:mt-18 lg:mt-20 sticky top-16 sm:top-18 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-soft font-semibold">
          <Link
            to={backTo}
            data-testid="product-back-btn"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue/8 hover:bg-blue/15 text-blue px-3.5 py-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {backLabel}</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <Link to="/products" className="hover:text-blue">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to={backTo} className="text-blue hover:underline">{product.category}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-extrabold truncate max-w-[120px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">

        {/* Header */}
        <Reveal className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue bg-blue/10 px-3 py-1.5 rounded-full uppercase">
            {product.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-ink tracking-tight leading-tight">
            {product.name}
          </h1>
          <p className="text-blue text-sm md:text-base font-semibold font-sans leading-relaxed border-l-4 border-sky pl-4">
            "{product.tagline}"
          </p>
        </Reveal>

        {/* Product visual — full-width panel, aspect-locked to the same
            16:10 box at the SAME width on every product, so the box itself
            is always identically sized regardless of photo vs. schematic
            (previously the schematic path also capped its inner wrapper at
            max-w-3xl, shrinking that box well below the full-width photo
            box's height — same aspect ratio, different actual size). Real
            photos (opaque studio-gray backdrop) fill the box edge-to-edge
            with no padding, so that backdrop reaches the panel's own
            rounded corners with nothing exposed in between — no mismatched
            seam. CAD schematics (transparent background) get padding
            instead, for breathing room around the contained, centered
            drawing, without changing the box's own outer size. */}
        <Reveal delay={0.05} className="bg-panel rounded-2xl relative overflow-hidden">
          <div className={`w-full aspect-[16/10] flex items-center justify-center ${RAW_STUDIO_PHOTOS.has(product.id) ? '' : 'p-10'}`}>
            <ProductImageLarge type={product.imageType} productId={product.id} />
          </div>
          <span className="absolute bottom-4 left-4 bg-white font-mono text-[9px] text-slate-soft uppercase tracking-widest px-2.5 py-1 rounded">
            {PRODUCT_PHOTOS[product.id] ? 'Product Photograph' : 'High Resolution Schematic CAD Layout'}
          </span>
        </Reveal>

        {/* Video Showcase (Steam Boilers and Thermic Fluid Heaters only) */}
        {(product.category === 'Steam Boilers' || product.category === 'Thermic Fluid Heaters') && (
          <ProductVideoShowcase productId={product.id} />
        )}

        {/* Technical Specifications — icon-per-spec scannable grid */}
        <Reveal delay={0.1} className="space-y-5">
          <h2 className="text-xl font-heading font-bold text-ink flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-blue" />
            <span>Technical Specifications</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.specifications?.map((sp, idx) => {
              const SpecIcon = specIcon(sp.label);
              const [mainValue, note] = splitSpecValue(sp.value);
              return (
                <div
                  key={idx}
                  className="bg-panel border border-line rounded-xl p-5 flex items-start gap-4 transition-all duration-150 hover:bg-white hover:border-blue/30 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                    <SpecIcon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wide text-slate-soft mb-1">{sp.label}</div>
                    <div className="text-sm font-bold text-ink leading-snug">{mainValue}</div>
                    {note && <div className="text-xs text-slate-soft mt-0.5">{note}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Key Performance Features + Engineering Authority, side by side */}
        <Reveal delay={0.15} className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-7">
          <div className="bg-panel border border-line rounded-2xl p-7">
            <h3 className="text-base font-heading font-bold text-ink mb-5 flex items-center gap-2">
              <Rocket className="w-[18px] h-[18px] text-blue" />
              <span>Key Performance Features</span>
            </h3>
            <div className="space-y-4">
              {product.features?.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl p-7 shadow-sm flex flex-col">
            <h3 className="text-base font-heading font-bold text-ink mb-4 flex items-center gap-2">
              <Award className="w-[18px] h-[18px] text-blue" />
              <span>Engineering Authority</span>
            </h3>
            <div className="flex items-center gap-3 bg-panel-blue border-l-4 border-blue rounded-xl px-4 py-3.5 mb-4">
              <ShieldCheck className="w-7 h-7 text-blue shrink-0" />
              <div>
                <strong className="block text-sm text-ink">IBR 1950 &amp; ASME Certified</strong>
                <span className="text-xs text-slate-soft">Approved up to 32 kg/cm²</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-[13px] text-slate">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mill test certifications accompany every component</span>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-slate">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Guaranteed joint radiography audits</span>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Request a Quote — full-width closing banner */}
        <Reveal delay={0.2} className="rounded-[28px] bg-gradient-to-r from-ink-2 to-blue-dark text-white p-8 sm:p-10 flex flex-wrap items-center justify-between gap-7">
          <div className="space-y-1.5 max-w-md">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold">Request a Quote for This Equipment</h3>
            <p className="text-slate-300 text-sm">
              Get a technical sizing quotation — our engineering team reviews your specification and responds within 24 business hours.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2.5">
            <Link
              to={`/request-quote?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 rounded-full bg-blue hover:bg-blue-2 hover:scale-[1.02] text-white font-bold px-7 py-3.5 text-sm shadow-lg transition-all whitespace-nowrap"
            >
              <FileText className="w-4 h-4" />
              Request a Quote
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sky">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Sales: <a href="tel:+917069306431" className="text-white font-medium border-b border-dotted border-white/30">+91 70693 06431</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:info@thermalengitech.com" className="text-white font-medium border-b border-dotted border-white/30">info@thermalengitech.com</a>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <Clock className="w-3 h-3" />
              <span>Technical proposals returned within 24 business hours.</span>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

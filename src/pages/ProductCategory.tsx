/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import usePageAnimated from '../hooks/usePageAnimated';
import { categoryBySlug, productsInCategory, getCategories, categoryHref } from '../catalog';
import ProductImage from '../components/ProductImage';
import { ArrowLeft, ChevronRight, ShieldCheck, Gauge, Thermometer, Flame, Layers, BarChart3, Settings } from 'lucide-react';

/** Real product renders — only set for products we have accurate photography
 *  for. Products without an entry fall back to the CAD-style schematic. */
const PRODUCT_PHOTOS: Partial<Record<string, string>> = {
  // Cropped to the top platforms/ladder section — the full-height shot
  // (used on the detail page) is too tall/narrow to read as anything but
  // a thin sliver inside this card's roughly-square photo area.
  'chimney-pollution': 'images/products/industrial-chimney-thumb.webp',
  'bag-filter-pollution': 'images/products/bag-filter-system.webp',
  'oil-gas-3pass-wetback': 'images/products/oil-gas-3pass-wetback.webp',
  'smokecum-watertube-membrane': 'images/products/smokecum-watertube-membrane.webp',
  'hybrid-combithermal': 'images/products/hybrid-combithermal.webp',
  'solid-fuel-3pass-wetback': 'images/products/solid-fuel-3pass-wetback.webp',
  'oil-gas-3pass-horizontal-heater': 'images/products/oil-gas-3pass-horizontal-heater.webp',
  'solid-fuel-4pass-vertical-heater': 'images/products/solid-fuel-4pass-vertical-heater.webp',
  'pressure-reducing-station': 'images/products/pressure-reducing-station-skid.webp',
  'hot-water-generator-unit': 'images/products/hot-water-generator.webp',
  'heat-exchanger-shelltube': 'images/products/heat-exchanger-shell-tube.webp',
  'air-pre-heater': 'images/products/air-preheater-block.webp',
};

/** Real manufacturer AutoCAD elevation drawings — same source images as the
 *  product detail page, shown on the category card in place of the abstract
 *  CAD-style icon fallback. */
const PRODUCT_SCHEMATICS: Partial<Record<string, string>> = {
  'steam-distribution-header': 'images/products/steam-distribution-header.webp',
  'condensate-tank': 'images/products/condensate-tank.webp',
  'steam-boiler-feed-water-tank': 'images/products/steam-boiler-feed-water-tank.webp',
  'blow-down-tank': 'images/products/blow-down-tank.webp',
  'expansion-tank': 'images/products/expansion-tank.webp',
  'wet-scrubber-pollution': 'images/products/wet-scrubber-pollution.webp',
  'multi-cyclone-dust-collector': 'images/products/multi-cyclone-dust-collector.webp',
};

// Keyword match rather than an exact per-label lookup — each product has its
// own differently-worded specs (30+ unique label strings across data.ts), so
// a fixed map would miss most of them. This just needs a reasonable icon,
// not a perfect one, to match the Home page cards' point-wise spec rows.
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

export default function ProductCategory() {
  const { slug = '' } = useParams<{ slug: string }>();
  const category = categoryBySlug(slug);
  const alreadyAnimated = usePageAnimated();

  // Unknown slug → back to catalogue.
  if (!category) return <Navigate to="/products" replace />;

  const products = productsInCategory(category.name);
  const n = products.length;
  const gridCols =
    n === 1 ? 'max-w-sm mx-auto'
    : n === 4 ? 'sm:grid-cols-2 max-w-4xl mx-auto'
    : n === 3 ? 'sm:grid-cols-2 lg:grid-cols-3'
    : n === 2 ? 'sm:grid-cols-2 max-w-3xl mx-auto'
    : 'sm:grid-cols-2 lg:grid-cols-3';

  useDocumentMeta(
    category.name,
    `${category.name} by Thermal Engitech — ${category.count} IBR & ASME certified ${category.count === 1 ? 'model' : 'models'}. ${category.blurb}`,
    {
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Products', item: 'https://thermalengitech.com/products' },
          { '@type': 'ListItem', position: 2, name: category.name, item: `https://thermalengitech.com/products/category/${category.slug}` },
        ],
      },
    }
  );

  return (
    <div className="text-left bg-white min-h-screen">

      {/* Banner — full-bleed photo with a dark scrim, text on top, first in
          the page so it sits behind the fixed navbar like every other
          page's hero (see data-hero-banner / Navbar's category-route check).
          One distinct, relevant photo per category, named to match
          category.slug. */}
      <div data-hero-banner className="relative overflow-hidden min-h-[300px] flex items-center px-4 sm:px-6 lg:px-8">
        <img
          src={`${import.meta.env.BASE_URL}images/categories/${category.slug}.jpg`}
          alt={`${category.name} — representative industrial equipment`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7FB2E4] uppercase">
            {category.count} {category.count === 1 ? 'model' : 'models'}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">{category.name}</h1>
          <p className="text-white/80 text-sm max-w-2xl leading-relaxed">{category.blurb}</p>
        </div>
      </div>

      {/* Category pill nav — floating over the hero/body seam via a negative
          top margin, so it reads as one premium component straddling both
          rather than a plain bar clearing the navbar. Doubles as a category
          switcher (was a static breadcrumb before) using the same
          getCategories()/categoryHref() the Products index itself uses, so
          the link targets stay correct automatically for single-product
          categories. Horizontally scrollable with the scrollbar hidden so it
          degrades gracefully once there are more categories than fit. */}
      <div className="relative z-20 -mt-7 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Product categories"
            className="inline-flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-[#1C5CA8]/15 bg-[#EAF2FC]/95 backdrop-blur-md p-1 shadow-[0_8px_28px_rgba(11,27,43,0.14)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <Link
              to="/products"
              data-testid="back-to-catalogue"
              className="shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold text-[#1C5CA8]/65 hover:text-[#1C5CA8] hover:bg-white/70 transition-all duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All</span>
            </Link>
            <span className="shrink-0 w-px h-5 bg-[#1C5CA8]/15" />
            {getCategories().map((c) => {
              const active = c.slug === category.slug;
              return (
                <Link
                  key={c.slug}
                  to={categoryHref(c)}
                  data-testid={`category-pill-${c.slug}`}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-[#1C5CA8] text-white shadow-[0_2px_10px_rgba(28,92,168,0.35)]'
                      : 'text-[#2A5885] hover:bg-white/70 hover:text-[#1C5CA8]'
                  }`}
                >
                  {c.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-12 md:pb-20">
        <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
          {products.map((prod, i) => (
            <motion.div
              key={prod.id}
              {...(alreadyAnimated ? {} : {
                initial: { opacity: 0, y: 28 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: '-60px' },
                transition: { duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] },
              })}
            >
              <Link
                to={`/products/${prod.id}`}
                data-testid={`product-card-${prod.id}`}
                className="flex flex-col h-full bg-panel border border-[#E4E7EC] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1C5CA8]/40 transition-all duration-300 group"
              >
                <div className="p-6 bg-panel border-b border-[#E1E4E3] flex items-center justify-center relative min-h-[260px]">
                  {PRODUCT_PHOTOS[prod.id] ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${PRODUCT_PHOTOS[prod.id]}`}
                      alt={`${prod.name} — Thermal Engitech product render`}
                      className="max-w-full max-h-64 w-auto h-auto"
                    />
                  ) : PRODUCT_SCHEMATICS[prod.id] ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${PRODUCT_SCHEMATICS[prod.id]}`}
                      alt={`${prod.name} — Thermal Engitech manufacturer CAD elevation drawing`}
                      className="max-w-full max-h-64 w-auto h-auto"
                    />
                  ) : (
                    <ProductImage type={prod.imageType} />
                  )}
                  <span className="absolute bottom-3 left-3 bg-white font-mono text-[8px] text-[#5B6B80] uppercase tracking-widest px-2 py-1 rounded">
                    {PRODUCT_PHOTOS[prod.id] ? 'Product Photograph' : 'High Resolution Schematic CAD Layout'}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <h3 className="font-heading font-bold text-[#0B1B2B] text-[15px] group-hover:text-[#1C5CA8] transition-colors line-clamp-2 leading-snug">
                    {prod.name}
                  </h3>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {prod.specifications?.slice(0, 3).map((sp, idx) => {
                      const SpecIcon = specIcon(sp.label);
                      return (
                        <div key={idx} className="flex items-center gap-2 text-[11px]">
                          <SpecIcon className="w-3.5 h-3.5 text-[#1C5CA8] shrink-0" strokeWidth={1.75} />
                          <span className="text-[#5B6B80] w-28 shrink-0 truncate" title={sp.label}>{sp.label}</span>
                          <span className="text-[#0B1B2B] font-semibold truncate" title={sp.value}>{sp.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#5B6B80] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1C5CA8]" />
                    IBR certified
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#0D1B2A] group-hover:bg-[#1C5CA8] px-3.5 py-2 text-[12px] font-semibold text-white transition-colors">
                    <span>View specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { getCategories, categoryHref } from '../catalog';
import ProductImage from '../components/ProductImage';
import {
  ChevronRight, ArrowUpRight, ShieldCheck,
  Flame, Thermometer, Layers, Gauge, Wind, Droplets, Factory, Wrench,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Flame, Thermometer, Layers, Gauge, Wind, Droplets, Factory, Wrench,
};

export default function Products() {
  useDocumentMeta(
    'Product Catalogue',
    'Explore our full range of IBR & ASME certified industrial heating equipment — steam boilers, thermic fluid heaters, heat exchangers, pressure reducing stations, air pre heaters and more, manufactured in Dhamatwan, Gujarat.'
  );

  const categories = getCategories();

  return (
    <div className="text-left bg-white min-h-screen">

      {/* Banner — light-blue, matching the site-wide rhythm. Photo will be added
          back separately once a light-theme-appropriate image is ready. */}
      <div className="bg-[#E8F1FB] text-[#0B1B2B] pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#E4E7EC] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#1C5CA8] uppercase">Product Catalogue</span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B1B2B] tracking-tight">Industrial Thermal Solutions</h1>
          <p className="text-[#47566A] text-sm max-w-2xl leading-relaxed">
            Choose a product category to see the models, capacities and specifications engineered
            and fabricated in-house to the standards your plant is audited against.
          </p>
        </div>
      </div>

      {/* Category cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Factory;
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={categoryHref(c)}
                  data-testid={`category-card-${c.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-white border border-[#E4E7EC] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#1C5CA8]/40 transition-all duration-300"
                >
                  {/* Schematic preview */}
                  <div className="relative flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-100 min-h-[180px] p-6">
                    <ProductImage type={c.sampleImageType} />
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[#1C5CA8]/10 text-[#1C5CA8] px-2.5 py-1 text-[10px] font-bold">
                      {c.count} {c.count === 1 ? 'model' : 'models'}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1C5CA8]/8 text-[#1C5CA8] group-hover:bg-[#1C5CA8] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" strokeWidth={1.75} />
                        </span>
                        <h2 className="font-heading font-bold text-lg text-[#0B1B2B] group-hover:text-[#1C5CA8] transition-colors leading-tight">
                          {c.name}
                        </h2>
                        <ArrowUpRight className="w-4 h-4 ml-auto text-slate-300 group-hover:text-[#1C5CA8] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                      </div>
                      <p className="text-[13px] text-[#47566A] leading-relaxed">{c.blurb}</p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-[13px] font-semibold text-[#1C5CA8]">
                      <span>{c.count === 1 ? 'View product' : `Explore ${c.name.toLowerCase()}`}</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Assurance strip */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[#78889B]">
          <ShieldCheck className="w-4 h-4 text-[#1C5CA8]" />
          <span>Every category built to IBR 1950, ASME &amp; ISO 9001:2015 standards.</span>
        </div>
      </div>
    </div>
  );
}

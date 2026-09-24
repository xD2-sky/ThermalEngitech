/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { categoryBySlug, productsInCategory } from '../catalog';
import ProductImage from '../components/ProductImage';
import { ArrowLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ProductCategory() {
  const { slug = '' } = useParams<{ slug: string }>();
  const category = categoryBySlug(slug);

  // Unknown slug → back to catalogue. Single-product category → straight to details.
  if (!category) return <Navigate to="/products" replace />;
  if (category.singleProductId) return <Navigate to={`/products/${category.singleProductId}`} replace />;

  const products = productsInCategory(category.name);
  const n = products.length;
  const gridCols =
    n === 4 ? 'sm:grid-cols-2 max-w-4xl mx-auto'
    : n === 3 ? 'sm:grid-cols-2 lg:grid-cols-3'
    : n === 2 ? 'sm:grid-cols-2 max-w-3xl mx-auto'
    : 'sm:grid-cols-2 lg:grid-cols-3';

  useDocumentMeta(
    category.name,
    `${category.name} by Thermal Engitech — ${category.count} IBR & ASME certified models. ${category.blurb}`,
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

      {/* Breadcrumb — margin-top clears the fixed navbar (this thin utility bar
          sits below it, unlike hero/banner sections which extend behind it) */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 font-sans mt-16 sm:mt-18 lg:mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#78889B] font-semibold">
          <Link to="/products" className="flex items-center gap-1.5 text-[#1C5CA8] hover:underline" data-testid="back-to-catalogue">
            <ArrowLeft className="w-4 h-4" />
            <span>All categories</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/products" className="hover:text-[#1C5CA8]">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B1B2B] font-extrabold">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Banner — light-blue, matching the site-wide rhythm. Photo will be added
          back separately once a light-theme-appropriate image is ready. */}
      <div className="bg-[#E8F1FB] text-[#0B1B2B] pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#E4E7EC] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#1C5CA8] uppercase">
            {category.count} {category.count === 1 ? 'model' : 'models'}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B1B2B] tracking-tight">{category.name}</h1>
          <p className="text-[#47566A] text-sm max-w-2xl leading-relaxed">{category.blurb}</p>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
          {products.map((prod, i) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/products/${prod.id}`}
                data-testid={`product-card-${prod.id}`}
                className="flex flex-col h-full bg-white border border-[#E4E7EC] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#1C5CA8]/40 transition-all duration-300 group"
              >
                <div className="p-6 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-100 flex items-center justify-center relative min-h-[200px]">
                  <ProductImage type={prod.imageType} />
                </div>

                <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-[#0B1B2B] text-[15px] group-hover:text-[#1C5CA8] transition-colors line-clamp-2 leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-[13px] text-[#47566A] leading-relaxed line-clamp-3">{prod.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3">
                    {prod.specifications?.slice(0, 2).map((sp, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="block text-[10px] font-medium text-[#78889B] tracking-wide">{sp.label}</span>
                        <span className="block text-[12px] font-semibold text-[#0B1B2B] truncate" title={sp.value}>{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#78889B] flex items-center gap-1.5">
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

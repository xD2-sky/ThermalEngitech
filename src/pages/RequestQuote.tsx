/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useSearchParams } from 'react-router-dom';
import QuoteRequest from '../components/QuoteRequest';
import { Inquiry } from '../types';
import { Settings, Wrench, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function RequestQuote() {
  useDocumentMeta(
    'Fuel Consumption & Running Cost Calculator',
    'Estimate boiler fuel consumption and running cost by capacity and fuel type — then request a technical sizing quotation. Free online calculator.'
  );

  const [searchParams] = useSearchParams();
  const presetProduct = searchParams.get('product') || undefined;

  const [savedInquiries, setSavedInquiries] = useState<Inquiry[]>([]);

  // Local storage synchronization of inquiry logs
  useEffect(() => {
    try {
      const existing = localStorage.getItem('thermal_saved_inquiries');
      if (existing) {
        setSavedInquiries(JSON.parse(existing));
      }
    } catch (e) {
      console.warn('Failed to load inquiries from storage', e);
    }
  }, []);

  const handleAddInquiry = (inq: Inquiry) => {
    setSavedInquiries((prev) => {
      const updated = [inq, ...prev];
      try {
        localStorage.setItem('thermal_saved_inquiries', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save inquiries to storage', e);
      }
      return updated;
    });
  };

  return (
    <div className="space-y-0 text-left bg-white min-h-screen">
      
      {/* Hero — photo fading to a light gradient on the left, with the intro
          copy overlaid directly (no separate dark banner + separate centered
          intro block underneath it, like the rest of the site). Recreated
          from a reference mockup the user supplied ("Industrial Quote
          Request Dashboard.png"), adapted from its navy+red scheme to the
          site's blue-only palette. */}
      <div className="relative overflow-hidden bg-white">
        <img
          src={`${import.meta.env.BASE_URL}images/banners/request-quote.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 space-y-7">
          <Reveal className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#1C5CA8]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1C5CA8]">Request a Quote</span>
          </Reveal>
          <Reveal delay={0.05} className="max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.1]">
              <span className="text-[#0B1B2B]">Let's Engineer the</span>{' '}
              <span className="text-[#1C5CA8]">Right Solution.</span>
            </h1>
            <p className="text-[#47566A] text-sm sm:text-base leading-relaxed max-w-xl">
              Tell us your thermal requirement — our engineering team will review the specifications
              and prepare a customized proposal for your process.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-1">
            {[
              { icon: Settings, label: 'Technical Consultation' },
              { icon: Wrench, label: 'Custom Engineering' },
              { icon: Clock, label: 'Fast Response', sub: 'Within 24 business hours' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white border border-[#1C5CA8]/20 text-[#1C5CA8] shadow-sm">
                  <t.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-[#0B1B2B]">{t.label}</p>
                  {t.sub && <p className="text-xs text-[#5B6B80]">{t.sub}</p>}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Request form and Fuel Consumption Estimator, side by side — a soft
          full-bleed gradient wash (brand blue fading to white) sits behind
          the whole section so the two zones read as distinct at a glance,
          without needing labels on the cards themselves. */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C5CA8]/[0.08] via-[#1C5CA8]/[0.02] to-white" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <QuoteRequest
            presetProductName={presetProduct}
            onSubmitInquiry={handleAddInquiry}
            savedInquiries={savedInquiries}
          />
        </div>
      </div>

    </div>
  );
}

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
    'Request a Quote',
    'Request a technical sizing quotation for steam boilers, thermic fluid heaters and process-heat systems — our engineering team reviews your specification and responds within 24 business hours.'
  );

  const [searchParams] = useSearchParams();
  const presetProduct = searchParams.get('product') || undefined;

  const [savedInquiries, setSavedInquiries] = useState<Inquiry[]>([]);

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

      {/* Hero — full-bleed photo + dark navy scrim + white text */}
      <div data-hero-banner className="relative overflow-hidden min-h-[300px] flex items-center bg-white px-4 sm:px-6 lg:px-8">
        <img
          src={`${import.meta.env.BASE_URL}images/banners/request-quote.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/35" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 space-y-5">
          <Reveal className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-sky" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky">Request a Quote</span>
          </Reveal>
          <Reveal delay={0.05} className="max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-[1.1]">
              <span className="text-white">Let's Engineer the</span>{' '}
              <span className="text-sky">Right Solution.</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white border border-blue/20 text-blue shadow-sm">
                  <t.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-white">{t.label}</p>
                  {t.sub && <p className="text-xs text-white/70">{t.sub}</p>}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Form + Fuel Estimator section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue/[0.08] via-blue/[0.02] to-white" aria-hidden="true" />
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

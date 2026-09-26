/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useSearchParams } from 'react-router-dom';
import QuoteRequest from '../components/QuoteRequest';
import { Inquiry } from '../types';

export default function RequestQuote() {
  useDocumentMeta(
    'Request a Quote',
    'Submit your plant specifications for a sizing calculation and technical quotation within 24 business hours.'
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
      
      {/* Banner — light-blue, matching the site-wide rhythm. */}
      <div className="bg-[#E8F1FB] text-[#0B1B2B] pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#E4E7EC] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#1C5CA8] uppercase">
              Estimation Request
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0B1B2B] tracking-tight">
              Comprehensive Technical Sizing
            </h1>
            <p className="text-[#47566A] text-sm max-w-2xl leading-relaxed font-sans">
              Submit your flow-rates and fuel type — we'll return verified calculations and drawings.
            </p>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <img
              src={`${import.meta.env.BASE_URL}images/banners/request-quote.webp`}
              alt="Precision-machined component next to its engineering drawing"
              className="w-full h-64 object-cover rounded-2xl shadow-[0_25px_40px_-12px_rgba(11,27,43,0.2)]"
            />
          </div>
        </div>
      </div>

      {/* Embedded QuoteRequest Frame */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <QuoteRequest 
          presetProductName={presetProduct}
          onSubmitInquiry={handleAddInquiry}
          savedInquiries={savedInquiries}
        />
      </div>

    </div>
  );
}

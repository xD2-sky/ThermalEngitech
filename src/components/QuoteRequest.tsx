/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Inquiry } from '../types';
import { PRODUCTS } from '../data';
import Reveal from './Reveal';
import FuelConsumptionCalculator from './FuelConsumptionCalculator';
import { ChevronRight, Clipboard, CheckCircle } from 'lucide-react';

interface QuoteRequestProps {
  presetProductName: string | null;
  onSubmitInquiry: (inquiry: Inquiry) => void;
  savedInquiries: Inquiry[];
}

export default function QuoteRequest({ presetProductName, onSubmitInquiry, savedInquiries }: QuoteRequestProps) {
  const [formData, setFormData] = useState<Inquiry>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requiredProduct: presetProductName || 'Oil / Gas Fired 3-Pass Fully Wet Back Steam Boiler',
    capacity: '',
    message: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const specSheetRef = useRef<HTMLFormElement>(null);

  // Synchronize dynamic preset selection
  useEffect(() => {
    if (presetProductName) {
      setFormData(prev => ({
        ...prev,
        requiredProduct: presetProductName
      }));
    }
  }, [presetProductName]);

  // Carries the Fuel Consumption Estimator's result straight into this form —
  // the two panels sit side by side, so this just needs to update the shared
  // state and (on narrower screens, where they stack) bring the form into view.
  const handleCalculatorApply = (args: { product: string; capacity: string }) => {
    setFormData(prev => ({
      ...prev,
      requiredProduct: args.product || prev.requiredProduct,
      capacity: args.capacity
    }));
    specSheetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      return;
    }

    const ticketId = 'TE-INQ-' + Math.floor(100000 + Math.random() * 900000);
    const newInquiry: Inquiry = {
      ...formData,
      id: ticketId,
      timestamp: new Date().toLocaleDateString()
    };
    
    onSubmitInquiry(newInquiry);
    setSubmittedTicket(ticketId);

    // Reset simple entry fields
    setFormData(prev => ({
      ...prev,
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      message: ''
    }));
  };

  return (
    <div id="contact" className="space-y-12 font-sans py-4">
      
      {/* Intro section */}
      <Reveal className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">
          Industrial Project Integration
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B1B2B]">
          Request Sizing & Technical Quotation
        </h2>
        <p className="text-[#0B1B2B] text-sm max-w-2xl mx-auto leading-relaxed">
          Submit your specs — get a verified proposal and estimate within 24 business hours.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">

        {/* Fuel Consumption & Running Cost Estimator (6 Columns) */}
        <div className="lg:col-span-6 space-y-6">

          <FuelConsumptionCalculator onApply={handleCalculatorApply} />

          {/* Active Queued Session Tickets */}
          {savedInquiries.length > 0 && (
            <div className="bg-panel border border-[#E1E4E3] rounded-xl p-6 space-y-4 animate-fadeIn text-left">
              <h3 className="text-sm font-heading font-bold text-[#0B1B2B] uppercase tracking-wider">
                Submitted Tickets ({savedInquiries.length})
              </h3>

              <div className="space-y-3">
                {savedInquiries.map((inq) => (
                  <div key={inq.id} className="bg-white border border-[#E1E4E3] p-4 rounded-lg space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[#1C5CA8] font-bold text-[11px]">{inq.id}</span>
                      <span className="px-2 py-0.5 bg-[#1C5CA8]/10 text-[#1C5CA8] rounded-full text-[9px] font-bold">
                        RECEIVED
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <b className="text-[#0B1B2B] block text-[12px]">{inq.companyName}</b>
                      <span className="text-[#78889B] block text-[10.5px]">Item Selected: {inq.requiredProduct}</span>
                      <span className="text-[#78889B] block text-[10.5px]">Capacity: {inq.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Contact Form Controls (6 Columns) */}
        <Reveal delay={0.05} className="lg:col-span-6 bg-panel border border-[#E1E4E3] rounded-xl p-6 md:p-8 shadow-sm relative overflow-hidden">

          {submittedTicket && (
            <div className="absolute inset-0 bg-white/98 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
              <CheckCircle className="w-16 h-16 text-[#1C5CA8] mb-4" />
              <h3 className="text-2xl font-heading font-bold text-[#0B1B2B]">Quotation Ticket Dispatched</h3>
              <p className="text-sm text-[#0B1B2B] max-w-md mt-2 leading-relaxed">
                Thank you! Your thermodynamic specifications ticket <b className="text-[#1C5CA8] font-bold">{submittedTicket}</b> has been queued. Our systems engineers will contact your representative.
              </p>

              <button
                onClick={() => setSubmittedTicket(null)}
                className="mt-6 px-5 py-2.5 bg-[#0D1B2A] hover:bg-[#1C5CA8] text-white text-xs font-bold rounded-lg transition"
              >
                Submit Another Specification Form
              </button>
            </div>
          )}

          <form ref={specSheetRef} onSubmit={handleSubmit} className="space-y-6 text-left">
            <h3 className="text-base font-heading font-semibold text-[#0B1B2B] flex items-center gap-2">
              <Clipboard className="w-5 h-5 text-[#1C5CA8]" />
              Thermal Engineering Spec Sheet
            </h3>

            <hr className="border-[#E1E4E3]" />

            {/* Corporate & Representative Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0B1B2B]">Registered Corporate Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0B1B2B]">Representative Engineer Name *</label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0B1B2B]">Professional Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0B1B2B]">Mobile / Contact Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                />
              </div>
            </div>

            {/* Equipment Sizing parameters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0B1B2B]">Required Equipment Specialty</label>
                <select
                  value={formData.requiredProduct}
                  onChange={(e) => setFormData({ ...formData, requiredProduct: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-semibold focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      [{prod.category}] {prod.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0B1B2B]">Volumetric Capacity / Heat Duty *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5.0 Tons/hr or 1,200,000 kcal/hr"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                />
              </div>
            </div>

            {/* Detail notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1B2B]">Specific Sizing Limits / Operating Pressures / Fuel Preferences</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#0D1B2A] hover:bg-[#1C5CA8] text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Submit Sizing Specs to Engineering Division</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

        </Reveal>

      </div>

    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Inquiry, Product } from '../types';
import { PRODUCTS } from '../data';
import { getCategories, productsInCategory } from '../catalog';
import { FUEL_OPTIONS, PRESSURE_OPTIONS } from '../config/fuelEstimator';
import { submitToWeb3Forms } from '../config/web3forms';
import HoneypotField from './HoneypotField';
import Reveal from './Reveal';
import FuelConsumptionCalculator from './FuelConsumptionCalculator';
import { ChevronRight, Clipboard, CheckCircle } from 'lucide-react';

interface QuoteRequestProps {
  presetProductName: string | null;
  onSubmitInquiry: (inquiry: Inquiry) => void;
  savedInquiries: Inquiry[];
}

// Categories that are actually fired by a fuel and built in distinct
// engineering configurations — the only ones where "Type of Boiler" and
// "Fuel to Be Used" mean anything. A Heat Exchanger or Pollution Control
// unit has neither, so those two fields stay hidden outside this set.
const FIRED_EQUIPMENT_CATEGORIES: Product['category'][] = ['Steam Boilers', 'Thermic Fluid Heaters', 'Hot Water Generators'];

const BOILER_TYPE_OPTIONS = [
  '3-Pass Fully Wet Back',
  'Multi-Fuel Combi-Thermal',
  'Smoke Cum Water Tube (Membrane Wall)',
  'Horizontal Configuration',
  'Vertical Configuration',
];

const TEMPERATURE_OPTIONS = ['Up to 200°C', '200°C – 300°C', '300°C – 400°C', 'Above 400°C'];
const PRESSURE_SELECT_OPTIONS = PRESSURE_OPTIONS.map((p) => `${p.bar} kg/cm²g`);

const CAPACITY_OPTIONS = [
  'Under 1.0 Ton / Hour',
  '1.0 - 5.0 Tons / Hour',
  '5.0 - 15.0 Tons / Hour',
  'Above 15.0 Tons / Hour (Heavy Grid)',
  'Custom Kcal Thermal Load (Heaters)',
  'Not sure / Other — describe below',
];

const PURCHASE_TIMELINE_OPTIONS = [
  'Immediate (within 1 month)',
  '1 – 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Just exploring / planning phase',
];

// Matches a raw TPH figure from the Fuel Estimator to the same capacity
// bands offered in the dropdown, so "Use These Figures" can fill it in
// without the visitor having to re-select it themselves.
function capacityBand(tph: number): string {
  if (tph < 1) return 'Under 1.0 Ton / Hour';
  if (tph <= 5) return '1.0 - 5.0 Tons / Hour';
  if (tph <= 15) return '5.0 - 15.0 Tons / Hour';
  return 'Above 15.0 Tons / Hour (Heavy Grid)';
}

export default function QuoteRequest({ presetProductName, onSubmitInquiry, savedInquiries }: QuoteRequestProps) {
  const defaultProductName = presetProductName || 'Oil / Gas Fired 3-Pass Fully Wet Back Steam Boiler';
  const defaultCategory = PRODUCTS.find((p) => p.name === defaultProductName)?.category || 'Steam Boilers';

  const [formData, setFormData] = useState<Inquiry>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requiredProduct: defaultProductName,
    equipmentCategory: defaultCategory,
    capacity: '',
    boilerType: '',
    pressureTemperature: '',
    fuelType: '',
    fuelTypeOther: '',
    purchaseTimeline: '',
    message: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const specSheetRef = useRef<HTMLFormElement>(null);

  // Synchronize dynamic preset selection
  useEffect(() => {
    if (presetProductName) {
      const category = PRODUCTS.find((p) => p.name === presetProductName)?.category;
      setFormData(prev => ({
        ...prev,
        requiredProduct: presetProductName,
        ...(category ? { equipmentCategory: category } : {})
      }));
    }
  }, [presetProductName]);

  const categoryModels = formData.equipmentCategory ? productsInCategory(formData.equipmentCategory) : [];
  const isFiredEquipment = !!formData.equipmentCategory && FIRED_EQUIPMENT_CATEGORIES.includes(formData.equipmentCategory);
  const isHeaterCategory = formData.equipmentCategory === 'Thermic Fluid Heaters';

  // Picking a different equipment category changes what the rest of the
  // form even means (a Heat Exchanger has no "fuel" or "boiler type", a
  // heater's operating figure is a temperature, not a pressure) — so those
  // dependent fields are reset rather than left showing a stale answer.
  const handleCategoryChange = (category: Product['category']) => {
    const models = productsInCategory(category);
    const stillFired = FIRED_EQUIPMENT_CATEGORIES.includes(category);
    setFormData(prev => ({
      ...prev,
      equipmentCategory: category,
      requiredProduct: models.length === 1 ? models[0].name : '',
      boilerType: stillFired ? prev.boilerType : '',
      fuelType: stillFired ? prev.fuelType : '',
      fuelTypeOther: stillFired ? prev.fuelTypeOther : '',
      pressureTemperature: ''
    }));
  };

  // Carries the Fuel Consumption Estimator's result straight into this form —
  // the two panels sit side by side, so this just needs to update the shared
  // state and (on narrower screens, where they stack) bring the form into view.
  // The estimator only ever recommends Steam Boiler models, so the category
  // is fixed accordingly.
  const handleCalculatorApply = (args: { product: string; capacityTPH: number }) => {
    setFormData(prev => ({
      ...prev,
      equipmentCategory: 'Steam Boilers',
      requiredProduct: args.product || prev.requiredProduct,
      capacity: capacityBand(args.capacityTPH)
    }));
    specSheetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    const finalRequiredProduct = formData.requiredProduct || `${formData.equipmentCategory} (any model)`;

    const result = await submitToWeb3Forms({
      subject: `New Quote Request — ${formData.equipmentCategory || 'Equipment'}`,
      company_name: formData.companyName,
      contact_person: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      equipment_category: formData.equipmentCategory || '',
      specific_model: finalRequiredProduct,
      capacity_required: formData.capacity,
      type_of_boiler: formData.boilerType || '',
      fuel_to_be_used: formData.fuelType === 'other' ? (formData.fuelTypeOther || 'Other') : (formData.fuelType || ''),
      pressure_or_temperature_required: formData.pressureTemperature || '',
      planned_purchase_timeline: formData.purchaseTimeline || '',
      additional_details: formData.message || '',
      botcheck: botcheck ? 'true' : ''
    });

    setSubmitting(false);

    if (!result.success) {
      setSubmitError("Couldn't send your request — please try again, or email us directly at info@thermalengitech.com.");
      return;
    }

    const ticketId = 'TE-INQ-' + Math.floor(100000 + Math.random() * 900000);
    const newInquiry: Inquiry = {
      ...formData,
      requiredProduct: finalRequiredProduct,
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
      boilerType: '',
      pressureTemperature: '',
      fuelType: '',
      fuelTypeOther: '',
      purchaseTimeline: '',
      message: ''
    }));
  };

  return (
    <div id="contact" className="font-sans">

      {/* Intro copy now lives in the page's hero above this component —
          this used to duplicate it in a second, separate centered block. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start max-w-7xl mx-auto">

        {/* Fuel Consumption & Running Cost Estimator (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">

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
                      <span className="text-[#5B6B80] block text-[10.5px]">Item Selected: {inq.requiredProduct}</span>
                      <span className="text-[#5B6B80] block text-[10.5px]">Capacity: {inq.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Spacer — keeps the same gap between the two cards that the
            connector (arrow + "Use the estimate" label) used to occupy. */}
        <div className="hidden lg:block lg:col-span-2" aria-hidden="true" />

        {/* Contact Form Controls (5 Columns) */}
        <Reveal delay={0.05} className="lg:col-span-5 bg-panel border border-[#E1E4E3] rounded-xl shadow-sm relative overflow-hidden">

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

          <form ref={specSheetRef} onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 text-left">
            <HoneypotField checked={botcheck} onChange={setBotcheck} />
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1C5CA8]/10 text-[#1C5CA8]">
                <Clipboard className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-heading font-bold text-[#0B1B2B]">Thermal Engineering Spec Sheet</h3>
                <p className="text-xs text-[#5B6B80] mt-1 leading-relaxed">
                  Fill in your specs and our engineering team will prepare a customized proposal.
                </p>
              </div>
            </div>

            <hr className="border-[#E1E4E3]" />

            {/* Corporate & Representative Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="quote-company" className="text-xs font-bold text-[#0B1B2B]">Company Name *</label>
                <input
                  id="quote-company"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quote-name" className="text-xs font-bold text-[#0B1B2B]">Name *</label>
                <input
                  id="quote-name"
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
                <label htmlFor="quote-email" className="text-xs font-bold text-[#0B1B2B]">Email *</label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quote-phone" className="text-xs font-bold text-[#0B1B2B]">Phone Number *</label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                />
              </div>
            </div>

            {/* Equipment Sizing parameters — "Equipment Required" picks the
                broad category; "Specific Model" (below, only when the
                category has more than one) narrows it to an exact catalog
                item. "Type of Boiler" further down is a different question
                again — the engineering configuration/style — and only
                applies to fired equipment, so it's kept out of this pair. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="quote-equipment" className="text-xs font-bold text-[#0B1B2B]">Equipment Required</label>
                <select
                  id="quote-equipment"
                  value={formData.equipmentCategory}
                  onChange={(e) => handleCategoryChange(e.target.value as Product['category'])}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-semibold focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                >
                  {getCategories().map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quote-capacity" className="text-xs font-bold text-[#0B1B2B]">Capacity Required *</label>
                <select
                  id="quote-capacity"
                  required
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-semibold focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                >
                  <option value="" disabled>Select a range</option>
                  {CAPACITY_OPTIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {categoryModels.length > 1 && (
              <div className="space-y-1.5">
                <label htmlFor="quote-model" className="text-xs font-bold text-[#0B1B2B]">
                  Specific Model <span className="font-normal text-[#5B6B80] normal-case">— optional</span>
                </label>
                <select
                  id="quote-model"
                  value={formData.requiredProduct}
                  onChange={(e) => setFormData({ ...formData, requiredProduct: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-semibold focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                >
                  <option value="">Any model in this category</option>
                  {categoryModels.map((prod) => (
                    <option key={prod.id} value={prod.name}>{prod.name}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Optional technical details — grouped and labeled separately
                from the required contact/sizing fields above, so the form
                reads as "a few extra details if you have them" rather than
                adding to the core question count. Type of Boiler and Fuel
                to Be Used only apply to fired equipment, so they drop out
                entirely for categories like Heat Exchangers that have
                neither — fewer irrelevant questions, not more. */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B80]">
                Additional Technical Details <span className="font-normal normal-case">— optional</span>
              </p>

              {isFiredEquipment && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="quote-boilertype" className="text-xs font-bold text-[#0B1B2B]">Type of Boiler</label>
                    <select
                      id="quote-boilertype"
                      value={formData.boilerType}
                      onChange={(e) => setFormData({ ...formData, boilerType: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                    >
                      <option value="">Not sure — need advice</option>
                      {BOILER_TYPE_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-fueltype" className="text-xs font-bold text-[#0B1B2B]">Fuel to Be Used</label>
                    <select
                      id="quote-fueltype"
                      value={formData.fuelType}
                      onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                    >
                      <option value="">Not sure / open to recommendation</option>
                      <optgroup label="Oil / Gas Fired">
                        {FUEL_OPTIONS.filter((f) => f.category === 'oil-gas').map((f) => (
                          <option key={f.id} value={f.label}>{f.label}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Solid Fuel Fired">
                        {FUEL_OPTIONS.filter((f) => f.category === 'solid').map((f) => (
                          <option key={f.id} value={f.label}>{f.label}</option>
                        ))}
                      </optgroup>
                      <option value="other">Other (specify below)</option>
                    </select>
                  </div>
                </div>
              )}

              {isFiredEquipment && formData.fuelType === 'other' && (
                <div className="space-y-1.5">
                  <label htmlFor="quote-fuelother" className="text-xs font-bold text-[#0B1B2B]">Please specify the fuel</label>
                  <input
                    id="quote-fuelother"
                    type="text"
                    value={formData.fuelTypeOther}
                    onChange={(e) => setFormData({ ...formData, fuelTypeOther: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="quote-pressuretemp" className="text-xs font-bold text-[#0B1B2B]">
                    {isHeaterCategory ? 'Operating Temperature Required' : 'Operating Pressure Required'}
                  </label>
                  <select
                    id="quote-pressuretemp"
                    value={formData.pressureTemperature}
                    onChange={(e) => setFormData({ ...formData, pressureTemperature: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                  >
                    <option value="">Not sure</option>
                    {(isHeaterCategory ? TEMPERATURE_OPTIONS : PRESSURE_SELECT_OPTIONS).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-timeline" className="text-xs font-bold text-[#0B1B2B]">Planned Purchase Timeline</label>
                  <select
                    id="quote-timeline"
                    value={formData.purchaseTimeline}
                    onChange={(e) => setFormData({ ...formData, purchaseTimeline: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition"
                  >
                    <option value="">Not decided yet</option>
                    {PURCHASE_TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Detail notes */}
            <div className="space-y-1.5">
              <label htmlFor="quote-message" className="text-xs font-bold text-[#0B1B2B]">Additional Details</label>
              <textarea
                id="quote-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] focus:bg-white transition leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-[#0D1B2A] hover:bg-[#1C5CA8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{submitting ? 'Sending…' : 'Submit Sizing Specs to Engineering Division'}</span>
              {!submitting && <ChevronRight className="w-4 h-4 stroke-[2.5]" />}
            </button>
            {submitError && (
              <p className="text-xs text-red-600 font-medium text-center">{submitError}</p>
            )}
          </form>

        </Reveal>

      </div>

    </div>
  );
}

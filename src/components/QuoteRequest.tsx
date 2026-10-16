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
import { ChevronRight, Clipboard, CheckCircle, ShieldCheck } from 'lucide-react';

interface QuoteRequestProps {
  presetProductName: string | null;
  onSubmitInquiry: (inquiry: Inquiry) => void;
  savedInquiries: Inquiry[];
}

const FIRED_EQUIPMENT_CATEGORIES: Product['category'][] = ['Steam Boilers', 'Thermic Fluid Heaters', 'Hot Water Generators'];

const BOILER_TYPE_OPTIONS = [
  '3-Pass Fully Wet Back',
  'Multi-Fuel Combi-Thermal',
  'Smoke Cum Water Tube (Membrane)',
  'Horizontal Configuration',
  'Vertical Configuration',
];

const PRESSURE_SELECT_OPTIONS = PRESSURE_OPTIONS.map((p) => `${p.bar} kg/cm²g`);

// Specific rated outlet temperatures across the Thermic Fluid Heater range
// (250°C vertical unit, up to 300°C on the 3-pass models, up to 400°C on the
// oil/gas horizontal unit) — listed as exact values, the same way the
// Operating Pressure dropdown lists exact bar ratings rather than ranges.
const THERMIC_TEMPERATURE_SELECT_OPTIONS = [
  '250°C',
  '300°C',
  '350°C',
  '400°C',
];

// Hot Water Generators top out around 95°C — a much lower, separate range
// from the Thermic Fluid Heater list above.
const HOT_WATER_TEMPERATURE_SELECT_OPTIONS = [
  '60°C',
  '75°C',
  '85°C',
  '95°C',
];

const STEAM_LIKE_CATEGORIES: Product['category'][] = ['Steam Boilers', 'Thermic Fluid Heaters'];

const STEAM_CAPACITY_OPTIONS = [
  'Under 1.0 Ton / Hour',
  '1.0 - 5.0 Tons / Hour',
  '5.0 - 15.0 Tons / Hour',
  'Above 15.0 Tons / Hour (Heavy Grid)',
  'Not sure / Other — describe below',
];

const THERMAL_CAPACITY_OPTIONS = [
  'Under 2,00,000 kcal/hr',
  '2,00,000 - 10,00,000 kcal/hr',
  '10,00,000 - 50,00,000 kcal/hr',
  'Above 50,00,000 kcal/hr',
  'Not sure / Other — describe below',
];

// Thermic Fluid Heaters and Hot Water Generators are rated and quoted in
// kcal/hr thermal output, not Tons/hr steam capacity — Steam Boilers is the
// only category that stays on the Tons/hr scale.
const THERMAL_OUTPUT_CATEGORIES: Product['category'][] = ['Thermic Fluid Heaters', 'Hot Water Generators'];

const CAPACITY_PLACEHOLDERS: Partial<Record<Product['category'], string>> = {
  'Pressure Reducing Stations': 'e.g. DN80 inlet, 10 → 3.5 kg/cm²g outlet',
  'Air Preheaters': 'e.g. flue gas volume or duct size',
  'Heat Exchangers': 'e.g. 50 m² heat transfer area',
  'Pollution Control Equipments': 'e.g. 10,000 Nm³/hr gas volume',
  'Other Equipments': 'e.g. tank volume, pipe size, or duty required',
};

const PURCHASE_TIMELINE_OPTIONS = [
  'Immediate (within 1 month)',
  '1 – 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Just exploring / planning phase',
];

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
    message: '',
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const specSheetRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (presetProductName) {
      const category = PRODUCTS.find((p) => p.name === presetProductName)?.category;
      setFormData((prev) => ({
        ...prev,
        requiredProduct: presetProductName,
        ...(category ? { equipmentCategory: category } : {}),
      }));
    }
  }, [presetProductName]);

  const categoryModels = formData.equipmentCategory ? productsInCategory(formData.equipmentCategory) : [];
  const isFiredEquipment = !!formData.equipmentCategory && FIRED_EQUIPMENT_CATEGORIES.includes(formData.equipmentCategory);
  const isSteamLikeCategory = STEAM_LIKE_CATEGORIES.includes(formData.equipmentCategory);
  const isThermalOutputCategory = THERMAL_OUTPUT_CATEGORIES.includes(formData.equipmentCategory);
  const temperatureOptions =
    formData.equipmentCategory === 'Thermic Fluid Heaters'
      ? THERMIC_TEMPERATURE_SELECT_OPTIONS
      : formData.equipmentCategory === 'Hot Water Generators'
        ? HOT_WATER_TEMPERATURE_SELECT_OPTIONS
        : null;
  const capacityOptions = isThermalOutputCategory
    ? THERMAL_CAPACITY_OPTIONS
    : isSteamLikeCategory
      ? STEAM_CAPACITY_OPTIONS
      : null;

  const handleCategoryChange = (category: Product['category']) => {
    const models = productsInCategory(category);
    const stillFired = FIRED_EQUIPMENT_CATEGORIES.includes(category);
    setFormData((prev) => ({
      ...prev,
      equipmentCategory: category,
      requiredProduct: models.length === 1 ? models[0].name : '',
      boilerType: stillFired ? prev.boilerType : '',
      fuelType: stillFired ? prev.fuelType : '',
      fuelTypeOther: stillFired ? prev.fuelTypeOther : '',
      pressureTemperature: '',
      capacity: '',
    }));
  };

  const handleCalculatorApply = (args: { product: string; capacityTPH: number }) => {
    setFormData((prev) => ({
      ...prev,
      requiredProduct: prev.equipmentCategory === 'Steam Boilers' ? (args.product || prev.requiredProduct) : prev.requiredProduct,
      capacity: capacityBand(args.capacityTPH),
    }));
    specSheetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) return;

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
      botcheck: botcheck ? 'true' : '',
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
      timestamp: new Date().toLocaleDateString(),
    };

    onSubmitInquiry(newInquiry);
    setSubmittedTicket(ticketId);

    setFormData((prev) => ({
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
      message: '',
    }));
  };

  // Shared field classes — token-driven, matching the site's input voice
  const inputClass =
    'w-full text-xs px-3 py-2 bg-white border border-line rounded-lg text-ink font-medium focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition';
  const selectClass =
    'w-full text-xs px-3 py-2 bg-white border border-line rounded-lg text-ink font-semibold focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition';
  const labelClass = 'text-xs font-bold text-ink';

  return (
    <div id="contact" className="font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start max-w-7xl mx-auto">

        {/* Left column — Fuel estimator (for steam-like) or trust panel */}
        <div className="lg:col-span-5 space-y-6">
          {isSteamLikeCategory ? (
            <FuelConsumptionCalculator onApply={handleCalculatorApply} />
          ) : (
            <Reveal className="bg-ink text-white p-6 rounded-lg space-y-4 border border-white/5 relative overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 space-y-3 text-left">
                <span className="text-[10px] uppercase font-mono font-extrabold text-sky tracking-wider">
                  Engineering Authority
                </span>
                <h4 className="text-lg font-heading font-extrabold">IBR 1950 &amp; ASME Certified</h4>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  Approved up to 32 kg/cm². Mill test certifications accompany every component.
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-sky pt-2 border-t border-white/10 font-mono">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Guaranteed joint radiography audits</span>
                </div>
              </div>
            </Reveal>
          )}

          {/* Submitted tickets from localStorage */}
          {savedInquiries.length > 0 && (
            <div className="bg-panel border border-line rounded-xl p-6 space-y-4 animate-fadeIn text-left">
              <h3 className="text-sm font-heading font-bold text-ink uppercase tracking-wider">
                Submitted Tickets ({savedInquiries.length})
              </h3>
              <div className="space-y-3">
                {savedInquiries.map((inq) => (
                  <div key={inq.id} className="bg-white border border-line p-4 rounded-lg space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-blue font-bold text-[11px]">{inq.id}</span>
                      <span className="px-2 py-0.5 bg-blue/10 text-blue rounded-full text-[9px] font-bold">
                        RECEIVED
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <b className="text-ink block text-[12px]">{inq.companyName}</b>
                      <span className="text-slate-soft block text-[10.5px]">Item Selected: {inq.requiredProduct}</span>
                      <span className="text-slate-soft block text-[10.5px]">Capacity: {inq.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

        {/* Spec sheet form */}
        <Reveal delay={0.05} className="lg:col-span-6 bg-panel border border-line rounded-xl shadow-sm relative overflow-hidden">

          {submittedTicket && (
            <div className="absolute inset-0 bg-white/98 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
              <CheckCircle className="w-16 h-16 text-blue mb-4" />
              <h3 className="text-2xl font-heading font-bold text-ink">Quotation Ticket Dispatched</h3>
              <p className="text-sm text-ink max-w-md mt-2 leading-relaxed">
                Thank you! Your thermodynamic specifications ticket{' '}
                <b className="text-blue font-bold">{submittedTicket}</b> has been queued. Our systems engineers will contact your representative.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="mt-6 px-5 py-2 bg-ink hover:bg-blue text-white text-xs font-bold rounded-lg transition"
              >
                Submit Another Specification Form
              </button>
            </div>
          )}

          <form ref={specSheetRef} onSubmit={handleSubmit} className="p-6 md:p-7 space-y-4 text-left">
            <HoneypotField checked={botcheck} onChange={setBotcheck} />
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                <Clipboard className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-heading font-bold text-ink">Thermal Engineering Spec Sheet</h3>
                <p className="text-xs text-slate-soft mt-1 leading-relaxed">
                  Fill in your specs and our engineering team will prepare a customized proposal.
                </p>
              </div>
            </div>

            <hr className="border-line" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label htmlFor="quote-company" className={labelClass}>Company Name *</label>
                <input id="quote-company" type="text" required value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className={inputClass} />
              </div>
              <div className="space-y-1">
                <label htmlFor="quote-name" className={labelClass}>Name *</label>
                <input id="quote-name" type="text" required value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className={inputClass} />
              </div>
              <div className="space-y-1">
                <label htmlFor="quote-email" className={labelClass}>Email *</label>
                <input id="quote-email" type="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="quote-phone" className={labelClass}>Phone Number *</label>
                <input id="quote-phone" type="tel" required value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass} />
              </div>
              <div className="space-y-1">
                <label htmlFor="quote-equipment" className={labelClass}>Equipment Required *</label>
                <select id="quote-equipment" required value={formData.equipmentCategory}
                  onChange={(e) => handleCategoryChange(e.target.value as Product['category'])}
                  className={selectClass}>
                  {getCategories().map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="quote-capacity" className={labelClass}>Capacity Required</label>
              {capacityOptions ? (
                <select id="quote-capacity" value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className={selectClass}>
                  <option value="" disabled>Select a range</option>
                  {capacityOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              ) : (
                <input id="quote-capacity" type="text" value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  placeholder={CAPACITY_PLACEHOLDERS[formData.equipmentCategory] || 'Describe the size or duty required'}
                  className={`${inputClass} placeholder:font-normal placeholder:text-slate-soft`} />
              )}
            </div>

            {categoryModels.length > 1 && (
              <div className="space-y-1">
                <label htmlFor="quote-model" className={labelClass}>
                  Specific Model <span className="font-normal text-slate-soft normal-case">— optional</span>
                </label>
                <select id="quote-model" value={formData.requiredProduct}
                  onChange={(e) => setFormData({ ...formData, requiredProduct: e.target.value })}
                  className={selectClass}>
                  <option value="">Any model in this category</option>
                  {categoryModels.map((prod) => (
                    <option key={prod.id} value={prod.name}>{prod.name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-soft">
                Additional Technical Details <span className="font-normal normal-case">— optional</span>
              </p>

              {isFiredEquipment && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="quote-boilertype" className={labelClass}>Type of Boiler</label>
                    <select id="quote-boilertype" value={formData.boilerType}
                      onChange={(e) => setFormData({ ...formData, boilerType: e.target.value })}
                      className={selectClass}>
                      <option value="">Not sure — need advice</option>
                      {BOILER_TYPE_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="quote-fueltype" className={labelClass}>Fuel to Be Used</label>
                    <select id="quote-fueltype" value={formData.fuelType}
                      onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                      className={selectClass}>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="quote-pressuretemp" className={labelClass}>
                    {temperatureOptions ? 'Operating Temperature Required' : 'Operating Pressure Required'}
                  </label>
                  <select id="quote-pressuretemp" value={formData.pressureTemperature}
                    onChange={(e) => setFormData({ ...formData, pressureTemperature: e.target.value })}
                    className={selectClass}>
                    <option value="">Not sure</option>
                    {(temperatureOptions || PRESSURE_SELECT_OPTIONS).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="quote-timeline" className={labelClass}>Planned Purchase Timeline</label>
                  <select id="quote-timeline" value={formData.purchaseTimeline}
                    onChange={(e) => setFormData({ ...formData, purchaseTimeline: e.target.value })}
                    className={selectClass}>
                    <option value="">Not decided yet</option>
                    {PURCHASE_TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {isFiredEquipment && formData.fuelType === 'other' && (
                <div className="space-y-1">
                  <label htmlFor="quote-fuelother" className={labelClass}>Please specify the fuel</label>
                  <input id="quote-fuelother" type="text" value={formData.fuelTypeOther}
                    onChange={(e) => setFormData({ ...formData, fuelTypeOther: e.target.value })}
                    className={inputClass} />
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="quote-message" className={labelClass}>Additional Details</label>
              <textarea id="quote-message" rows={4} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} leading-relaxed`} />
            </div>

            <button type="submit" disabled={submitting}
              className="w-full py-3.5 bg-ink hover:bg-blue disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer flex items-center justify-center gap-2">
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

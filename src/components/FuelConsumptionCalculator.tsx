/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { Calculator, ArrowRight } from 'lucide-react';

type FuelCategory = 'oil-gas' | 'solid';

interface FuelOption {
  id: string;
  label: string;
  category: FuelCategory;
  gcv: number; // kcal per kg, or per Nm³ for gas
  unit: 'kg' | 'Nm³';
}

// Typical published calorific values — a starting point, not a substitute for
// the actual lab-tested GCV of the fuel being purchased. The GCV field below
// stays editable so a visitor who knows their real figure can use it instead.
const FUEL_OPTIONS: FuelOption[] = [
  { id: 'furnace-oil', label: 'Furnace Oil (FO)', category: 'oil-gas', gcv: 10200, unit: 'kg' },
  { id: 'ldo-hsd', label: 'Light Diesel Oil / HSD', category: 'oil-gas', gcv: 10800, unit: 'kg' },
  { id: 'natural-gas', label: 'Natural Gas', category: 'oil-gas', gcv: 9000, unit: 'Nm³' },
  { id: 'lpg', label: 'LPG', category: 'oil-gas', gcv: 11900, unit: 'kg' },
  { id: 'coal', label: 'Coal (Indian, non-coking)', category: 'solid', gcv: 4000, unit: 'kg' },
  { id: 'wood', label: 'Firewood / Wood Logs', category: 'solid', gcv: 3500, unit: 'kg' },
  { id: 'biomass-briquette', label: 'Biomass Briquettes', category: 'solid', gcv: 3800, unit: 'kg' },
  { id: 'rice-husk', label: 'Rice Husk', category: 'solid', gcv: 3000, unit: 'kg' },
  { id: 'lignite', label: 'Lignite', category: 'solid', gcv: 2800, unit: 'kg' },
];

const DEFAULT_EFFICIENCY: Record<FuelCategory, number> = {
  'oil-gas': 88,
  solid: 82,
};

// Total heat of dry saturated steam (hg, kcal/kg) by gauge pressure — the
// operating pressures our own boiler range is built for. hg varies only
// slightly across this band (it's feed water temperature that moves the
// result the most), so a small lookup table is accurate enough for an
// estimate.
const PRESSURE_OPTIONS: { bar: number; hg: number }[] = [
  { bar: 7, hg: 660 },
  { bar: 10.5, hg: 663 },
  { bar: 14, hg: 665 },
  { bar: 17.5, hg: 667 },
  { bar: 21, hg: 668 },
  { bar: 24.5, hg: 669 },
  { bar: 28, hg: 670 },
  { bar: 32, hg: 671 },
];

const FEED_WATER_OPTIONS = [
  { id: 'cold', label: 'Cold make-up only (~30°C)', temp: 30 },
  { id: 'feedtank', label: 'With feed / condensate tank (~85°C)', temp: 85 },
  { id: 'economizer', label: 'With economizer / preheater (~105°C)', temp: 105 },
];

// Drawn directly from this site's own product specifications (src/data.ts) —
// kept as a small local table rather than parsing the spec strings at
// runtime, since there are only four Steam Boiler variants to match against.
const BOILER_MATCHES: { id: string; name: string; category: FuelCategory; minTPH: number; maxTPH: number }[] = [
  { id: 'oil-gas-3pass-wetback', name: 'Oil / Gas Fired 3-Pass Fully Wet Back Steam Boiler', category: 'oil-gas', minTPH: 1, maxTPH: 30 },
  { id: 'solid-fuel-3pass-wetback', name: 'Solid Fuel Fired 3-Pass Fully Wet Back Steam Boiler', category: 'solid', minTPH: 1, maxTPH: 15 },
  { id: 'hybrid-combithermal', name: 'Hybrid Multi Fuel Fired Combi-Thermal Type Boiler', category: 'solid', minTPH: 2, maxTPH: 20 },
  { id: 'smokecum-watertube-membrane', name: 'Multi Fuel Fired Smoke Cum Water Tube (Water Membrane) Type Boiler', category: 'solid', minTPH: 4, maxTPH: 25 },
];

const selectClass =
  'w-full text-xs px-3 py-2.5 bg-white border border-[#E1E4E3] rounded-lg text-[#0B1B2B] font-medium focus:outline-none focus:border-[#1C5CA8] transition';

// Number inputs otherwise silently change value when the page is scrolled
// with the cursor resting over them (a long-standing browser quirk) —
// blurring on wheel stops that, since nothing on this form should change
// without the visitor directly editing a field.
const blurOnWheel = (e: React.WheelEvent<HTMLInputElement>) => e.currentTarget.blur();

interface FuelConsumptionCalculatorProps {
  onApply: (args: { product: string; capacity: string }) => void;
}

export default function FuelConsumptionCalculator({ onApply }: FuelConsumptionCalculatorProps) {
  const [capacity, setCapacity] = useState('5');
  const [fuelId, setFuelId] = useState('ldo-hsd');
  const [pressureBar, setPressureBar] = useState(10.5);
  const [feedWaterId, setFeedWaterId] = useState('feedtank');
  const [gcv, setGcv] = useState<number>(FUEL_OPTIONS.find((f) => f.id === 'ldo-hsd')!.gcv);
  const [efficiency, setEfficiency] = useState<number>(DEFAULT_EFFICIENCY['oil-gas']);
  const [fuelPrice, setFuelPrice] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('24');

  const fuel = FUEL_OPTIONS.find((f) => f.id === fuelId)!;

  const handleFuelChange = (id: string) => {
    const next = FUEL_OPTIONS.find((f) => f.id === id)!;
    setFuelId(id);
    setGcv(next.gcv);
    setEfficiency(DEFAULT_EFFICIENCY[next.category]);
  };

  const result = useMemo(() => {
    const capacityTPH = parseFloat(capacity);
    if (!capacityTPH || capacityTPH <= 0 || !gcv || !efficiency) return null;

    const pressure = PRESSURE_OPTIONS.find((p) => p.bar === pressureBar) ?? PRESSURE_OPTIONS[1];
    const feedWater = FEED_WATER_OPTIONS.find((f) => f.id === feedWaterId) ?? FEED_WATER_OPTIONS[1];
    const heatPerKg = pressure.hg - feedWater.temp;

    const capacityKgHr = capacityTPH * 1000;
    const fuelPerHr = (capacityKgHr * heatPerKg) / (gcv * (efficiency / 100));

    const price = parseFloat(fuelPrice);
    const costPerHr = price > 0 ? fuelPerHr * price : null;
    const hours = parseFloat(hoursPerDay);
    const costPerDay = costPerHr !== null && hours > 0 ? costPerHr * hours : null;

    const matches = BOILER_MATCHES.filter(
      (b) => b.category === fuel.category && capacityTPH >= b.minTPH && capacityTPH <= b.maxTPH
    );

    return { fuelPerHr, costPerHr, costPerDay, matches, capacityTPH };
  }, [capacity, gcv, efficiency, pressureBar, feedWaterId, fuelPrice, hoursPerDay, fuel.category]);

  const handleApply = () => {
    if (!result) return;
    const productName = result.matches[0]?.name;
    onApply({
      product: productName || '',
      capacity: `${result.capacityTPH} Tons/hr`,
    });
  };

  return (
    <Reveal className="bg-panel border border-[#E1E4E3] rounded-xl p-6 md:p-8 shadow-sm space-y-6 text-left">
      <div>
        <h3 className="text-base font-heading font-semibold text-[#0B1B2B] flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#1C5CA8]" />
          Fuel Consumption &amp; Running Cost Estimator
        </h3>
        <p className="text-xs text-[#78889B] mt-1.5 leading-relaxed">
          Estimate the fuel a boiler of your required capacity would burn, before you request a formal quote.
        </p>
      </div>

      <hr className="border-[#E1E4E3]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">Required Steam Capacity (Tons/hr)</label>
          <input
            type="number"
            onWheel={blurOnWheel}
            min="0"
            step="0.5"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className={selectClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">Fuel</label>
          <select value={fuelId} onChange={(e) => handleFuelChange(e.target.value)} className={selectClass}>
            <optgroup label="Oil / Gas Fired">
              {FUEL_OPTIONS.filter((f) => f.category === 'oil-gas').map((f) => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </optgroup>
            <optgroup label="Solid Fuel Fired">
              {FUEL_OPTIONS.filter((f) => f.category === 'solid').map((f) => (
                <option key={f.id} value={f.id}>{f.label}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">Operating Pressure (kg/cm²g)</label>
          <select
            value={pressureBar}
            onChange={(e) => setPressureBar(parseFloat(e.target.value))}
            className={selectClass}
          >
            {PRESSURE_OPTIONS.map((p) => (
              <option key={p.bar} value={p.bar}>{p.bar} kg/cm²g</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">Feed Water Condition</label>
          <select value={feedWaterId} onChange={(e) => setFeedWaterId(e.target.value)} className={selectClass}>
            {FEED_WATER_OPTIONS.map((f) => (
              <option key={f.id} value={f.id}>{f.label}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">
            Fuel GCV (kcal/{fuel.unit}) <span className="font-normal text-[#78889B]">— typical, editable</span>
          </label>
          <input
            type="number"
            onWheel={blurOnWheel}
            min="0"
            value={gcv}
            onChange={(e) => setGcv(parseFloat(e.target.value) || 0)}
            className={selectClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">
            Boiler Efficiency (%) <span className="font-normal text-[#78889B]">— typical, editable</span>
          </label>
          <input
            type="number"
            onWheel={blurOnWheel}
            min="1"
            max="100"
            value={efficiency}
            onChange={(e) => setEfficiency(parseFloat(e.target.value) || 0)}
            className={selectClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">
            Fuel Price (₹ per {fuel.unit}) <span className="font-normal text-[#78889B]">— optional</span>
          </label>
          <input
            type="number"
            onWheel={blurOnWheel}
            min="0"
            placeholder="e.g. 55"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            className={selectClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-[#0B1B2B]">
            Operating Hours / Day <span className="font-normal text-[#78889B]">— optional</span>
          </label>
          <input
            type="number"
            onWheel={blurOnWheel}
            min="0"
            max="24"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(e.target.value)}
            className={selectClass}
          />
        </div>
      </div>

      {result ? (
        <div className="bg-white border border-[#1C5CA8]/20 rounded-lg p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#78889B] font-bold">Fuel Consumption</p>
              <p className="text-lg font-heading font-extrabold text-[#0B1B2B]">
                {result.fuelPerHr.toLocaleString('en-IN', { maximumFractionDigits: 1 })} {fuel.unit}/hr
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#78889B] font-bold">Running Cost / hr</p>
              <p className="text-lg font-heading font-extrabold text-[#0B1B2B]">
                {result.costPerHr !== null ? `₹${result.costPerHr.toLocaleString('en-IN', { maximumFractionDigits: 0 })}` : '—'}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#78889B] font-bold">Running Cost / day</p>
              <p className="text-lg font-heading font-extrabold text-[#0B1B2B]">
                {result.costPerDay !== null ? `₹${result.costPerDay.toLocaleString('en-IN', { maximumFractionDigits: 0 })}` : '—'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleApply}
            className="w-full py-3 bg-[#0D1B2A] hover:bg-[#1C5CA8] text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-lg transition duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Use These Figures in My Quote Request</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <p className="text-[10.5px] text-[#78889B] leading-relaxed">
            Estimate only, for budgetary planning — actual consumption depends on burner tuning, fuel quality, and
            site conditions. Final figures are confirmed in your formal quotation.
          </p>
        </div>
      ) : (
        <p className="text-xs text-[#78889B]">Enter a steam capacity, fuel GCV, and boiler efficiency above to see your estimate.</p>
      )}
    </Reveal>
  );
}

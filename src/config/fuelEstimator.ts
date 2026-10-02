/**
 * Reference data for the Fuel Consumption & Running Cost Estimator
 * (src/components/FuelConsumptionCalculator.tsx).
 *
 * Everything here is a number or label, not logic — update a GCV, an
 * efficiency default, or add a fuel/pressure option by editing this file
 * only, without touching the calculator's component code. Fuel *price* is
 * never stored here: it's always a figure the site visitor types in for
 * themselves, since that's the one number that genuinely changes month to
 * month.
 */

export type FuelCategory = 'oil-gas' | 'solid';

export interface FuelOption {
  id: string;
  label: string;
  category: FuelCategory;
  gcv: number; // kcal per kg, or per Nm³ for gas
  unit: 'kg' | 'Nm³';
}

// Typical published calorific values — a starting point, not a substitute for
// the actual lab-tested GCV of the fuel being purchased. The GCV field on the
// calculator stays editable so a visitor who knows their real figure can use
// it instead.
export const FUEL_OPTIONS: FuelOption[] = [
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

export const DEFAULT_EFFICIENCY: Record<FuelCategory, number> = {
  'oil-gas': 88,
  solid: 82,
};

// Total heat of dry saturated steam (hg, kcal/kg) by gauge pressure — the
// operating pressures our own boiler range is built for. hg varies only
// slightly across this band (it's feed water temperature that moves the
// result the most), so a small lookup table is accurate enough for an
// estimate.
export const PRESSURE_OPTIONS: { bar: number; hg: number }[] = [
  { bar: 7, hg: 660 },
  { bar: 10.5, hg: 663 },
  { bar: 14, hg: 665 },
  { bar: 17.5, hg: 667 },
  { bar: 21, hg: 668 },
  { bar: 24.5, hg: 669 },
  { bar: 28, hg: 670 },
  { bar: 32, hg: 671 },
];

export const FEED_WATER_OPTIONS = [
  { id: 'cold', label: 'Cold make-up only (~30°C)', temp: 30 },
  { id: 'feedtank', label: 'With feed / condensate tank (~85°C)', temp: 85 },
  { id: 'economizer', label: 'With economizer / preheater (~105°C)', temp: 105 },
];

// Drawn directly from this site's own product specifications (src/data.ts) —
// kept as a small local table rather than parsing the spec strings at
// runtime, since there are only four Steam Boiler variants to match against.
// Keep this in sync if a Steam Boiler product's capacity range or fuel class
// changes in src/data.ts.
export const BOILER_MATCHES: { id: string; name: string; category: FuelCategory; minTPH: number; maxTPH: number }[] = [
  { id: 'oil-gas-3pass-wetback', name: 'Oil / Gas Fired 3-Pass Fully Wet Back Steam Boiler', category: 'oil-gas', minTPH: 1, maxTPH: 30 },
  { id: 'solid-fuel-3pass-wetback', name: 'Solid Fuel Fired 3-Pass Fully Wet Back Steam Boiler', category: 'solid', minTPH: 1, maxTPH: 15 },
  { id: 'hybrid-combithermal', name: 'Hybrid Multi Fuel Fired Combi-Thermal Type Boiler', category: 'solid', minTPH: 2, maxTPH: 20 },
  { id: 'smokecum-watertube-membrane', name: 'Multi Fuel Fired Smoke Cum Water Tube (Water Membrane) Type Boiler', category: 'solid', minTPH: 4, maxTPH: 25 },
];

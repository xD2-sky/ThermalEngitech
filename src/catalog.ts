/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Catalog helpers — derive category structure from the product list so the
 * Products → Category → Product navigation stays in sync automatically.
 */
import { PRODUCTS } from './data';
import { Product } from './types';

/** Display order + copy/icon for each category. */
export const CATEGORY_META: Record<Product['category'], { icon: string; blurb: string }> = {
  'Steam Boilers': {
    icon: 'Flame',
    blurb: 'High-efficiency dry-steam boilers for solid fuel, gas, biomass or oil firing.',
  },
  'Thermic Fluid Heaters': {
    icon: 'Thermometer',
    blurb: 'Concentric helical-coil hot-oil heaters for stable high-temperature indirect heating.',
  },
  'Heat Exchangers': {
    icon: 'Layers',
    blurb: 'Shell-&-tube and plate heat exchangers and condensers engineered to TEMA standards.',
  },
  'Pressure Reducing Stations': {
    icon: 'Gauge',
    blurb: 'Skid-mounted steam pressure regulation with integrated moisture separation.',
  },
  'Air Pre Heaters': {
    icon: 'Wind',
    blurb: 'Waste-heat recovery preheaters and economizers that lift overall plant efficiency.',
  },
  'Hot Water Generators': {
    icon: 'Droplets',
    blurb: 'Compact packaged instant hot-water systems — no statutory IBR obligation.',
  },
  'Pollution Control Equipments': {
    icon: 'Factory',
    blurb: 'Cyclones, bag filters, wet scrubbers and stacks for clean, compliant emissions.',
  },
  'Other Equipments': {
    icon: 'Wrench',
    blurb: 'Steam headers, condensate/flash tanks, feed-water and expansion vessels.',
  },
};

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export interface CategoryInfo {
  name: Product['category'];
  slug: string;
  count: number;
  blurb: string;
  icon: string;
  sampleImageType: Product['imageType'];
  singleProductId?: string;
}

/** All categories that have at least one product, in the defined display order. */
export function getCategories(): CategoryInfo[] {
  return (Object.keys(CATEGORY_META) as Product['category'][])
    .map((name) => {
      const items = PRODUCTS.filter((p) => p.category === name);
      return {
        name,
        slug: slugify(name),
        count: items.length,
        blurb: CATEGORY_META[name].blurb,
        icon: CATEGORY_META[name].icon,
        sampleImageType: items[0]?.imageType ?? 'other',
        singleProductId: items.length === 1 ? items[0].id : undefined,
      } as CategoryInfo;
    })
    .filter((c) => c.count > 0);
}

export function categoryBySlug(slug: string): CategoryInfo | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function productsInCategory(name: string): Product[] {
  return PRODUCTS.filter((p) => p.category === name);
}

/** Where a category card should navigate: direct to details if it has a single product. */
export function categoryHref(c: CategoryInfo): string {
  return c.singleProductId ? `/products/${c.singleProductId}` : `/products/category/${c.slug}`;
}

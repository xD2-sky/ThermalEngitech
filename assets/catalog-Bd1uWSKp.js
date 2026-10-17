import{c as s,P as a}from"./index-x_T7BS6b.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],g=s("chevron-right",i);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Catalog helpers — derive category structure from the product list so the
 * Products → Category → Product navigation stays in sync automatically.
 */const t={"Steam Boilers":{icon:"Flame",blurb:"High-efficiency dry-steam boilers for solid fuel, gas, biomass or oil firing."},"Thermic Fluid Heaters":{icon:"Thermometer",blurb:"Concentric helical-coil hot-oil heaters for stable high-temperature indirect heating."},"Heat Exchangers":{icon:"Layers",blurb:"Shell-&-tube and plate heat exchangers and condensers engineered to TEMA standards."},"Pressure Reducing Stations":{icon:"Gauge",blurb:"Skid-mounted steam pressure regulation with integrated moisture separation."},"Air Preheaters":{icon:"Wind",blurb:"Waste-heat recovery preheaters and economizers that lift overall plant efficiency."},"Hot Water Generators":{icon:"Droplets",blurb:"Solid fuel fired industrial hot water generators built for safe, reliable operation."},"Pollution Control Equipments":{icon:"Factory",blurb:"Cyclones, bag filters, wet scrubbers and stacks for clean, compliant emissions."},"Other Equipments":{icon:"Wrench",blurb:"Steam headers, condensate/flash tanks, feed-water and expansion vessels."}},c=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");function l(){return Object.keys(t).map(e=>{var o;const r=a.filter(n=>n.category===e);return{name:e,slug:c(e),count:r.length,blurb:t[e].blurb,icon:t[e].icon,sampleImageType:((o=r[0])==null?void 0:o.imageType)??"other"}}).filter(e=>e.count>0)}function h(e){return l().find(r=>r.slug===e)}function b(e){return a.filter(r=>r.category===e)}function d(e){return`/products/category/${e.slug}`}export{g as C,h as a,d as c,l as g,b as p,c as s};

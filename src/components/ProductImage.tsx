/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Product } from '../types';

/** Compact CAD-style schematic used on product cards and category cards. */
export default function ProductImage({ type }: { type: Product['imageType'] }) {
  switch (type) {
    case 'boiler':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="70" y="55" width="180" height="90" rx="45" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="78" y="63" width="164" height="74" rx="37" fill="#0D1B2A" opacity="0.9" />
          <line x1="86" y1="85" x2="234" y2="85" stroke="#2F7BD4" strokeWidth="2.5" strokeDasharray="5 5" />
          <line x1="86" y1="100" x2="234" y2="100" stroke="#2F7BD4" strokeWidth="2.5" />
          <line x1="86" y1="115" x2="234" y2="115" stroke="#2F7BD4" strokeWidth="2.5" strokeDasharray="5 5" />
          <rect x="145" y="28" width="30" height="28" fill="#17222E" stroke="#1C5CA8" strokeWidth="2" strokeLinejoin="bevel" />
          <line x1="145" y1="36" x2="175" y2="36" stroke="#2F7BD4" strokeWidth="2" />
          <path d="M160 16 V28" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="13" r="3" fill="#EF4444" />
          <path d="M50 115 H70" stroke="#7FB2E4" strokeWidth="3.5" />
          <path d="M250 90 H270" stroke="#EF4444" strokeWidth="3.5" />
          <rect x="100" y="145" width="20" height="15" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <rect x="200" y="145" width="20" height="15" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <line x1="85" y1="160" x2="235" y2="160" stroke="#1C5CA8" strokeWidth="4.5" />
        </svg>
      );
    case 'heater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="60" y="60" width="200" height="80" rx="12" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <path d="M80 75 Q95 65 110 75 T140 75 T170 75 T200 75 T230 75" fill="none" stroke="#1C5CA8" strokeWidth="3" />
          <path d="M80 95 Q95 85 110 95 T140 95 T170 95 T200 95 T230 95" fill="none" stroke="#1C5CA8" strokeWidth="3" />
          <path d="M80 115 Q95 105 110 115 T140 115 T170 115 T200 115 T230 115" fill="none" stroke="#1B3A63" strokeWidth="3" />
          <rect x="35" y="75" width="25" height="50" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="3.5" />
          <line x1="20" y1="100" x2="35" y2="100" stroke="#EF4444" strokeWidth="4.5" />
          <path d="M15 90 L23 100 L15 110 Z" fill="#EF4444" />
          <path d="M220 140 H235 V165" stroke="#0E7490" strokeWidth="3" />
          <path d="M226 158 L235 167 L244 158 Z" fill="#0E7490" />
          <path d="M100 140 H85 V165" stroke="#1C5CA8" strokeWidth="3" />
          <path d="M76 150 L85 141 L94 150 Z" fill="#1C5CA8" />
        </svg>
      );
    case 'generator':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="100" y="30" width="120" height="140" rx="8" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="110" y="40" width="100" height="120" rx="4" fill="#0D1B2A" opacity="0.9" />
          <path d="M130 55 C130 65 190 65 190 75 C190 85 130 85 130 95 C130 105 190 105 190 115 C190 125 130 125 130 135" fill="none" stroke="#1C5CA8" strokeWidth="3" strokeLinecap="round" />
          <rect x="75" y="55" width="25" height="18" fill="#17222E" stroke="#5B6472" strokeWidth="1.5" />
          <text x="50" y="66" fill="#7FB2E4" className="text-[9px] font-sans">IN</text>
          <rect x="75" y="125" width="25" height="18" fill="#17222E" stroke="#5B6472" strokeWidth="1.5" />
          <text x="45" y="137" fill="#EF4444" className="text-[9px] font-sans">OUT</text>
          <rect x="145" y="10" width="30" height="20" rx="2" fill="#17222E" stroke="#1C5CA8" strokeWidth="2" />
        </svg>
      );
    case 'exchanger':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="50" y="65" width="220" height="70" rx="8" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4" />
          <rect x="58" y="73" width="204" height="54" rx="4" fill="#0D1B2A" opacity="0.9" />
          <line x1="58" y1="85" x2="262" y2="85" stroke="#7FB2E4" strokeWidth="2" />
          <line x1="58" y1="92" x2="262" y2="92" stroke="#1C5CA8" strokeWidth="1.5" />
          <line x1="58" y1="100" x2="262" y2="100" stroke="#7FB2E4" strokeWidth="2" />
          <line x1="58" y1="108" x2="262" y2="108" stroke="#1C5CA8" strokeWidth="1.5" />
          <line x1="58" y1="115" x2="262" y2="115" stroke="#7FB2E4" strokeWidth="2" />
          <rect x="80" y="40" width="25" height="25" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <rect x="215" y="135" width="25" height="25" fill="#1B2A3D" stroke="#1C5CA8" strokeWidth="2" />
          <path d="M92 20 V38" stroke="#7FB2E4" strokeWidth="2.5" />
          <path d="M227 165 V147" stroke="#EF4444" strokeWidth="2.5" />
        </svg>
      );
    case 'prs':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <path d="M40 100 H280" stroke="#1C5CA8" strokeWidth="4.5" />
          <path d="M80 100 V60 H240 V100" fill="none" stroke="#1C5CA8" strokeWidth="4.5" />
          <circle cx="160" cy="100" r="16" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3" />
          <rect x="150" y="65" width="20" height="20" fill="#EF4444" stroke="#0D1B2A" strokeWidth="2" />
          <line x1="160" y1="82" x2="160" y2="114" stroke="#7FB2E4" strokeWidth="2.5" />
          <rect x="75" y="85" width="10" height="30" fill="#1B2A3D" stroke="#5B6472" strokeWidth="1.5" />
          <rect x="235" y="85" width="10" height="30" fill="#1B2A3D" stroke="#5B6472" strokeWidth="1.5" />
          <circle cx="105" cy="75" r="8" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="105" y1="75" x2="110" y2="71" stroke="#7FB2E4" strokeWidth="2" />
          <line x1="105" y1="83" x2="105" y2="100" stroke="#5B6472" strokeWidth="1.5" />
          <circle cx="215" cy="75" r="8" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="215" y1="75" x2="210" y2="71" stroke="#EF4444" strokeWidth="2" />
          <line x1="215" y1="83" x2="215" y2="100" stroke="#5B6472" strokeWidth="1.5" />
        </svg>
      );
    case 'preheater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="80" y="35" width="160" height="130" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3.5" />
          <rect x="88" y="43" width="144" height="114" fill="#0D1B2A" opacity="0.95" />
          <line x1="110" y1="55" x2="110" y2="145" stroke="#7FB2E4" strokeWidth="3" strokeDasharray="3 4" />
          <line x1="135" y1="55" x2="135" y2="145" stroke="#7FB2E4" strokeWidth="3" />
          <line x1="160" y1="55" x2="160" y2="145" stroke="#7FB2E4" strokeWidth="3" strokeDasharray="3 4" />
          <line x1="185" y1="55" x2="185" y2="145" stroke="#7FB2E4" strokeWidth="3" />
          <line x1="210" y1="55" x2="210" y2="145" stroke="#7FB2E4" strokeWidth="3" strokeDasharray="3 4" />
          <path d="M50 75 H78" stroke="#7FB2E4" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 67 L82 75 L72 83 Z" fill="#7FB2E4" />
          <text x="35" y="60" fill="#7FB2E4" className="text-[10px] font-mono font-bold">Cold Air</text>
          <path d="M242 125 H278" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
          <path d="M272 117 L282 125 L272 133 Z" fill="#EF4444" />
          <text x="245" y="152" fill="#EF4444" className="text-[10px] font-mono font-bold">Hot Air</text>
        </svg>
      );
    case 'pollution':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="110" y="30" width="100" height="60" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3.5" />
          <rect x="118" y="38" width="84" height="44" fill="#0D1B2A" opacity="0.9" />
          <polygon points="110,90 210,90 175,160 145,160" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="3.5" />
          <polygon points="118,92 202,92 170,154 150,154" fill="#0D1B2A" opacity="0.85" />
          <circle cx="160" cy="172" r="10" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
        </svg>
      );
    case 'other':
    default:
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-48 drop-shadow-sm opacity-90">
          <rect x="90" y="55" width="140" height="70" rx="35" fill="#0D1B2A" stroke="#1C5CA8" strokeWidth="4.5" />
          <rect x="98" y="63" width="124" height="54" rx="27" fill="#0D1B2A" opacity="0.85" />
          <rect x="65" y="75" width="25" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <path d="M50 90 H70" stroke="#7FB2E4" strokeWidth="4" />
          <rect x="110" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <rect x="151" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <rect x="192" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="100" y1="160" x2="220" y2="160" stroke="#1C5CA8" strokeWidth="3" />
        </svg>
      );
  }
}

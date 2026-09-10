/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { ShieldCheck, ArrowRight, ChevronDown, ChevronUp, Shield, Eye, Cpu } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForQuote: (productName: string) => void;
}

// Highly detailed SVG CAD Graphics representing the product images with generous spacing
function ProductImage({ type, productId }: { type: 'boiler' | 'heater' | 'generator' | 'exchanger' | 'prs' | 'preheater' | 'pollution' | 'other'; productId?: string }) {
  if (productId === 'oil-gas-3pass-wetback') {
    return (
      <svg viewBox="0 0 450 300" fill="none" className="w-full h-full max-h-60 drop-shadow-lg transition-transform duration-350 group-hover:scale-105">
        {/* Base Stone Tiled Isometric Platform */}
        <path d="M 50,210 L 220,270 L 400,210 L 230,150 Z" fill="url(#base-grad)" stroke="#455A64" strokeWidth="1.5" />
        
        {/* Isometric Grid Tile Lines to replicate the grey paved base */}
        <path d="M 84,198 L 254,258 M 118,186 L 288,246 M 152,174 L 322,234 M 186,162 L 356,222 M 220,150 L 390,210" stroke="#445565" strokeWidth="0.8" opacity="0.4" />
        <path d="M 106,230 L 294,161 M 162,250 L 350,181 M 218,270 L 406,201" stroke="#445565" strokeWidth="0.8" opacity="0.4" />

        <defs>
          <linearGradient id="base-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C8A9A" />
            <stop offset="100%" stopColor="#78909C" />
          </linearGradient>
          <linearGradient id="boiler-red" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9614A" />
            <stop offset="40%" stopColor="#D32F2F" />
            <stop offset="100%" stopColor="#B71C1C" />
          </linearGradient>
          <linearGradient id="boiler-red-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C1352A" />
            <stop offset="100%" stopColor="#5A1F12" />
          </linearGradient>
          <linearGradient id="chimney-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#EEECE6" />
            <stop offset="100%" stopColor="#D8DBDD" />
          </linearGradient>
          <linearGradient id="burner-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#33383E" />
            <stop offset="100%" stopColor="#0D1B2A" />
          </linearGradient>
          <linearGradient id="sol-fire" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B3401F" />
            <stop offset="50%" stopColor="#C1502B" />
            <stop offset="100%" stopColor="#C9862C" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Supporting Saddles / Legs (Black metal blocks) */}
        <rect x="170" y="200" width="30" height="25" fill="#14181C" rx="2" />
        <rect x="235" y="185" width="30" height="22" fill="#14181C" rx="2" />

        {/* Main Red Boiler Cylinder body in perspective */}
        <path d="M 170,130 L 275,103 A 38 42 0 0 1 275,187 L 170,230 Z" fill="url(#boiler-red)" />
        
        {/* Front face cap */}
        <ellipse cx="170" cy="180" rx="45" ry="50" fill="url(#boiler-red-front)" stroke="#B71C1C" strokeWidth="1.5" />
        
        {/* Front Plate Outer Ring of Bolts */}
        <circle cx="170" cy="180" r="38" stroke="#EEECE6" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
        <circle cx="170" cy="180" r="28" stroke="#33383E" strokeWidth="1" strokeDasharray="4 6" opacity="0.8" />

        {/* "THERMAL ENGITECH" brand stamp text */}
        <text x="210" y="165" fill="#E7C77A" fontSize="7" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.5" transform="rotate(-13 210 165)" opacity="0.85">THERMAL ENGITECH</text>

        {/* Industrial Burner mounted on the front face ellipse */}
        <rect x="135" y="170" width="30" height="24" fill="url(#burner-dark)" stroke="#4B5563" rx="3" />
        <circle cx="150" cy="182" r="8" fill="#D32F2F" stroke="#14181C" strokeWidth="1" />
        <rect x="123" y="178" width="12" height="15" fill="#1F2937" rx="1" />
        <line x1="120" y1="185" x2="135" y2="185" stroke="#8A94A0" strokeWidth="2" />

        {/* Angled transition flue gas white duct going to the chimney */}
        <path d="M 258,125 L 305,95 L 315,95 L 268,128 Z" fill="url(#chimney-grad)" stroke="#9AA6AF" strokeWidth="1" />

        {/* Tall White Vertical Chimney Stack */}
        <rect x="305" y="45" width="18" height="180" fill="url(#chimney-grad)" stroke="#9AA6AF" strokeWidth="1" />
        
        {/* Chimney Top Cone */}
        <polygon points="302,45 314,25 326,45" fill="url(#chimney-grad)" stroke="#7C8A9A" strokeWidth="1" />
        
        {/* Circular Gallery/Platform at top of Chimney */}
        <ellipse cx="314" cy="90" rx="20" ry="6" fill="#FFFFFF" stroke="#7C8A9A" strokeWidth="1.5" />
        {/* Railings on the platform */}
        <ellipse cx="314" cy="82" rx="20" ry="6" fill="none" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="294" y1="82" x2="294" y2="90" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="304" y1="84" x2="304" y2="90" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="314" y1="85" x2="314" y2="91" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="324" y1="84" x2="324" y2="90" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="334" y1="82" x2="334" y2="90" stroke="#7C8A9A" strokeWidth="1" />

        {/* Access Ladder climbing up the Chimney stack */}
        <line x1="325" y1="90" x2="325" y2="225" stroke="#7C8A9A" strokeWidth="1.5" />
        <line x1="331" y1="90" x2="331" y2="225" stroke="#7C8A9A" strokeWidth="1.5" />
        {/* Ladder rungs */}
        <line x1="325" y1="105" x2="331" y2="105" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="118" x2="331" y2="118" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="131" x2="331" y2="131" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="144" x2="331" y2="144" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="157" x2="331" y2="157" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="170" x2="331" y2="170" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="183" x2="331" y2="183" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="196" x2="331" y2="196" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="209" x2="331" y2="209" stroke="#7C8A9A" strokeWidth="1" />
        <line x1="325" y1="222" x2="331" y2="222" stroke="#7C8A9A" strokeWidth="1" />

        {/* Chimney flared supporting base */}
        <polygon points="298,225 330,225 324,215 304,215" fill="url(#chimney-grad)" stroke="#7C8A9A" strokeWidth="1" />

        {/* Blue Valves and Controls on Top of Boiler */}
        <rect x="210" y="123" width="6" height="15" fill="#B3401F" stroke="#1B2A3D" strokeWidth="0.8" />
        <circle cx="213" cy="120" r="4" fill="#C1502B" />
        <rect x="235" y="117" width="6" height="15" fill="#B3401F" stroke="#1B2A3D" strokeWidth="0.8" />
        <circle cx="238" cy="114" r="4" fill="#C1502B" />
        <rect x="185" y="115" width="8" height="20" fill="#B3401F" stroke="#1B2A3D" strokeWidth="0.8" />
        <ellipse cx="189" cy="112" rx="7" ry="3" fill="#C1502B" stroke="#B3401F" strokeWidth="1" />

        {/* Feed Water Pumps assembly */}
        <path d="M 255,162 V 220 H 270" fill="none" stroke="#33383E" strokeWidth="3" strokeLinecap="round" />
        <rect x="264" y="210" width="12" height="22" fill="#33383E" rx="1" stroke="#0D1B2A" strokeWidth="1" />
        <rect x="278" y="208" width="12" height="22" fill="#33383E" rx="1" stroke="#0D1B2A" strokeWidth="1" />
        <rect x="266" y="202" width="8" height="8" fill="#B3401F" rx="1" />
        <rect x="280" y="200" width="8" height="8" fill="#B3401F" rx="1" />
      </svg>
    );
  }

  switch (type) {
    case 'boiler':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Main Boiler Drum / Shell */}
          <rect x="50" y="40" width="220" height="120" rx="60" fill="#0D1B2A" stroke="#B3401F" strokeWidth="4" />
          <rect x="58" y="48" width="204" height="104" rx="52" fill="#0D1B2A" opacity="0.8" />
          
          {/* Firebox Tube/Combustion Chambers */}
          <rect x="30" y="90" width="160" height="45" rx="20" fill="#17222E" stroke="#C1502B" strokeWidth="3" />
          {/* Glowing Burner Combustion Flare */}
          <path d="M40 102 C60 102, 75 95, 120 112 C75 125, 60 120, 40 120 Z" fill="url(#sol-fire)" opacity="0.95" />
          
          {/* Tubes (Passes 2 and 3) */}
          <line x1="160" y1="65" x2="260" y2="65" stroke="#E2793D" strokeWidth="3" strokeDasharray="2 3" />
          <line x1="80" y1="75" x2="240" y2="75" stroke="#E2793D" strokeWidth="3" />
          <line x1="80" y1="110" x2="240" y2="110" stroke="#E2793D" strokeWidth="3" />
          <line x1="160" y1="120" x2="260" y2="120" stroke="#E2793D" strokeWidth="3" strokeDasharray="2 3" />

          {/* Wet-back rear turnaround chamber */}
          <path d="M228 48 C248 48, 258 70, 258 100 C258 130, 248 152, 228 152 Z" fill="#B3401F" opacity="0.15" stroke="#B3401F" strokeWidth="2" />
          
          {/* Steam Space Nozzle outlet */}
          <rect x="150" y="16" width="20" height="24" fill="#0D1B2A" stroke="#E2793D" strokeWidth="2" />
          <path d="M142 26 H178" stroke="#E2793D" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="12" r="6" fill="#C1502B" />

          {/* Industrial Exf Flue/Chimney hook */}
          <rect x="230" y="12" width="24" height="28" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="225" y1="20" x2="259" y2="20" stroke="#5B6472" strokeWidth="3.5" />

          {/* Liquid level glass */}
          <rect x="25" y="65" width="8" height="40" rx="4" fill="#0D1B2A" stroke="#C1502B" strokeWidth="2" />
          <line x1="29" y1="75" x2="29" y2="95" stroke="#E2793D" strokeWidth="3" />

          <defs>
            <linearGradient id="sol-fire" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B3401F" />
              <stop offset="50%" stopColor="#C1502B" />
              <stop offset="100%" stopColor="#C9862C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'heater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Thermal Insulation outer cover */}
          <rect x="80" y="30" width="160" height="145" rx="16" fill="#0D1B2A" stroke="#B3401F" strokeWidth="3.5" />
          
          {/* Concentric spiral coils representation */}
          {/* Outer coil loop */}
          <path d="M110 50 C130 50, 190 50, 210 50 M110 70 C130 70, 190 70, 210 70 M110 90 C130 90, 190 90, 210 90 M110 110 C130 110, 190 110, 210 110 M110 130 C130 130, 190 130, 210 130" stroke="#B3401F" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
          {/* Inner coil loop */}
          <path d="M130 60 C145 60, 175 60, 190 60 M130 80 C145 80, 175 80, 190 80 M130 100 C145 100, 175 100, 190 100 M130 120 C145 120, 175 120, 190 120" stroke="#C9862C" strokeWidth="3" strokeLinecap="round" opacity="0.95" />

          {/* Central combustive flame core */}
          <path d="M150 150 C150 150, 160 110, 160 81 C160 110, 170 150, 170 150 Z" fill="#C1502B" opacity="0.9" />
          <path d="M155 150 C155 150, 160 120, 160 97 C160 120, 165 150, 165 150 Z" fill="#C9862C" opacity="1" />

          {/* Fluid Inlet pipes */}
          <path d="M40 50 H80" stroke="#E2793D" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M45 42 L60 50 L45 58 Z" fill="#E2793D" />
          
          {/* Heat fluid outlet pipe */}
          <path d="M240 140 H280" stroke="#EF4444" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M265 132 L280 140 L265 148 Z" fill="#EF4444" />

          {/* Bottom Burner platform mount */}
          <rect x="120" y="175" width="80" height="15" rx="4" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
        </svg>
      );
    case 'generator':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Vertical Heat cylinder */}
          <rect x="100" y="25" width="120" height="150" rx="20" fill="#0D1B2A" stroke="#E2793D" strokeWidth="4" />
          <rect x="108" y="33" width="104" height="134" rx="12" fill="#0D1B2A" opacity="0.9" />

          {/* Vertical internal hot fluid chamber tubes */}
          <line x1="126" y1="35" x2="126" y2="165" stroke="#B3401F" strokeWidth="3" />
          <line x1="148" y1="35" x2="148" y2="165" stroke="#C1502B" strokeWidth="2.5" />
          <line x1="172" y1="35" x2="172" y2="165" stroke="#C9862C" strokeWidth="2.5" />
          <line x1="194" y1="35" x2="194" y2="165" stroke="#B3401F" strokeWidth="3" />

          {/* Cold wash-water feeding port */}
          <path d="M50 140 H100" stroke="#E2793D" strokeWidth="4" />
          <circle cx="65" cy="140" r="5" fill="#E2793D" />

          {/* High temperature water outlet */}
          <path d="M220 50 H270" stroke="#EF4444" strokeWidth="4" />
          <circle cx="255" cy="50" r="5" fill="#EF4444" />

          {/* Temperature Sensor Telemetry controller */}
          <rect x="145" y="10" width="30" height="15" rx="3" fill="#17222E" stroke="#0E5AE9" strokeWidth="2" />
          <circle cx="160" cy="17" r="2" fill="#EF4444" />
        </svg>
      );
    case 'exchanger':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Shell outer cylinder */}
          <rect x="65" y="55" width="190" height="90" rx="10" fill="#0D1B2A" stroke="#B3401F" strokeWidth="3.5" />
          <rect x="73" y="63" width="174" height="74" fill="#0D1B2A" opacity="0.8" />

          {/* Tube bundles (Internal parallel pipes) */}
          <line x1="73" y1="75" x2="247" y2="75" stroke="#E2793D" strokeWidth="2.5" />
          <line x1="73" y1="85" x2="247" y2="85" stroke="#E2793D" strokeWidth="2.5" />
          <line x1="73" y1="95" x2="247" y2="95" stroke="#E2793D" strokeWidth="2.5" />
          <line x1="73" y1="105" x2="247" y2="105" stroke="#E2793D" strokeWidth="2.5" />
          <line x1="73" y1="115" x2="247" y2="115" stroke="#E2793D" strokeWidth="2.5" />
          <line x1="73" y1="125" x2="247" y2="125" stroke="#E2793D" strokeWidth="2.5" />

          {/* Fluid baffle segment dividers */}
          <line x1="105" y1="63" x2="105" y2="113" stroke="#B3401F" strokeWidth="2.5" />
          <line x1="140" y1="83" x2="140" y2="137" stroke="#B3401F" strokeWidth="2.5" />
          <line x1="175" y1="63" x2="175" y2="113" stroke="#B3401F" strokeWidth="2.5" />
          <line x1="210" y1="83" x2="210" y2="137" stroke="#B3401F" strokeWidth="2.5" />

          {/* Shell inlet nozzle (Hot fluid in) */}
          <rect x="90" y="30" width="22" height="25" fill="#0D1B2A" stroke="#7DD3FC" strokeWidth="2" />
          <path d="M101 22 V35" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />

          {/* Shell outlet nozzle (Hot fluid out) */}
          <rect x="208" y="145" width="22" height="25" fill="#0D1B2A" stroke="#7DD3FC" strokeWidth="2" />
          <path d="M219 160 V173" stroke="#C1502B" strokeWidth="3" strokeLinecap="round" />

          {/* Tube inlet nozzle (Cold fluid in) */}
          <rect x="40" y="85" width="25" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <path d="M25 100 H45" stroke="#E2793D" strokeWidth="3.5" strokeLinecap="round" />

          {/* Tube outlet nozzle (Heated cold fluid out) */}
          <rect x="255" y="85" width="25" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <path d="M275 100 H295" stroke="#C1502B" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case 'prs':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Bottom structural steel frame skid */}
          <rect x="35" y="155" width="250" height="15" fill="#0D1B2A" stroke="#B3401F" strokeWidth="3" />
          <line x1="60" y1="170" x2="60" y2="185" stroke="#B3401F" strokeWidth="3.5" />
          <line x1="260" y1="170" x2="260" y2="185" stroke="#B3401F" strokeWidth="3.5" />

          {/* Main header steam pipe */}
          <path d="M20 95 H300" stroke="#E2793D" strokeWidth="5.5" strokeLinecap="round" />

          {/* Diaphragm Dome Sizing Regulating Valve in the middle */}
          <circle cx="160" cy="55" r="16" fill="#0D1B2A" stroke="#E2793D" strokeWidth="3" />
          <line x1="160" y1="71" x2="160" y2="95" stroke="#E2793D" strokeWidth="4" />
          <polygon points="145,95 175,95 160,82" fill="#E2793D" />
          <polygon points="145,108 175,108 160,95" fill="#E2793D" stroke="#E2793D" />

          {/* Bellows globe isolation valve (Left stream side) */}
          <rect x="75" y="80" width="20" height="30" rx="3" fill="#17222E" stroke="#B3401F" strokeWidth="2.5" />
          <circle cx="85" cy="72" r="5" fill="#E2793D" />

          {/* Strainer separator hook */}
          <polygon points="112,95 128,95 120,118" fill="#B3401F" stroke="#E2793D" strokeWidth="2" />

          {/* Pressure Gauge dial monitors */}
          {/* Inlet gauge */}
          <circle cx="102" cy="50" r="10" fill="#0D1B2A" stroke="#5B6472" strokeWidth="2" />
          <line x1="102" y1="50" x2="108" y2="44" stroke="#EF4444" strokeWidth="2" />
          <line x1="102" y1="60" x2="102" y2="92" stroke="#5B6472" strokeWidth="2" />

          {/* Outlet gauge */}
          <circle cx="218" cy="50" r="10" fill="#0D1B2A" stroke="#5B6472" strokeWidth="2" />
          <line x1="218" y1="50" x2="214" y2="44" stroke="#C1502B" strokeWidth="2" />
          <line x1="218" y1="60" x2="218" y2="92" stroke="#5B6472" strokeWidth="2" />

          {/* Bypass steam tube line loop */}
          <path d="M60 95 V133 H260 V95" fill="none" stroke="#E2793D" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="145" y="123" width="30" height="20" rx="2" fill="#17222E" stroke="#B3401F" strokeWidth="2" />
        </svg>
      );
    case 'preheater':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Air Pre Heater (APH) Outer Steel Panel Casing */}
          <rect x="80" y="35" width="160" height="130" fill="#0D1B2A" stroke="#B3401F" strokeWidth="3.5" />
          <rect x="88" y="43" width="144" height="114" fill="#0D1B2A" opacity="0.95" />
          
          {/* Cross flow tube matrix representation */}
          <line x1="110" y1="55" x2="110" y2="145" stroke="#E2793D" strokeWidth="3" strokeDasharray="3 4" />
          <line x1="135" y1="55" x2="135" y2="145" stroke="#E2793D" strokeWidth="3" />
          <line x1="160" y1="55" x2="160" y2="145" stroke="#E2793D" strokeWidth="3" strokeDasharray="3 4" />
          <line x1="185" y1="55" x2="185" y2="145" stroke="#E2793D" strokeWidth="3" />
          <line x1="210" y1="55" x2="210" y2="145" stroke="#E2793D" strokeWidth="3" strokeDasharray="3 4" />

          {/* Thermal air flow direction indications */}
          <path d="M50 75 H78" stroke="#E2793D" strokeWidth="4" strokeLinecap="round" />
          <path d="M72 67 L82 75 L72 83 Z" fill="#E2793D" />
          <text x="35" y="60" fill="#E2793D" className="text-[10px] font-mono font-bold">Cold Air</text>

          <path d="M242 125 H278" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
          <path d="M272 117 L282 125 L272 133 Z" fill="#EF4444" />
          <text x="245" y="152" fill="#EF4444" className="text-[10px] font-mono font-bold">Hot Combustion Air</text>

          {/* Flue Gas arrows traveling vertically */}
          <path d="M160 185 V168" stroke="#B3401F" strokeWidth="3" strokeLinecap="round" />
          <path d="M154 175 L160 167 L166 175 Z" fill="#B3401F" />
          
          <path d="M160 32 V15" stroke="#C1502B" strokeWidth="3" strokeLinecap="round" />
          <path d="M154 22 L160 14 L166 22 Z" fill="#C1502B" />
        </svg>
      );
    case 'pollution':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Centrifugal Cone Dust Collector Separator */}
          {/* Upper Cylindrical Chamber */}
          <rect x="110" y="30" width="100" height="60" fill="#0D1B2A" stroke="#B3401F" strokeWidth="3.5" />
          <rect x="118" y="38" width="84" height="44" fill="#0D1B2A" opacity="0.9" />

          {/* Lower Conical Hopper */}
          <polygon points="110,90 210,90 175,160 145,160" fill="#0D1B2A" stroke="#B3401F" strokeWidth="3.5" />
          <polygon points="118,92 202,92 170,154 150,154" fill="#0D1B2A" opacity="0.85" />

          {/* Rotary Airlock Discharge Valve */}
          <circle cx="160" cy="172" r="10" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <line x1="160" y1="162" x2="160" y2="182" stroke="#5B6472" strokeWidth="2.5" />
          <line x1="150" y1="172" x2="170" y2="172" stroke="#5B6472" strokeWidth="2.5" />

          {/* Tangential Flue Gas Supply Pipe Inlet */}
          <path d="M40 55 H110" stroke="#EF4444" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M102 47 L112 55 L102 63 Z" fill="#EF4444" />
          <text x="35" y="42" fill="#E1E4E3" className="text-[10px] font-mono leading-none bg-[#0D1B2A] px-1 py-0.5 rounded">Raw Flue Gas</text>

          {/* Internal Swirling Centrifugal Helix Vortex Vector */}
          <path d="M125 50 Q160 62 195 50 T125 90 T195 110 T160 140" fill="none" stroke="#C9862C" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.85" />

          {/* Clean gas upright central outlet tube (Vortex finder) */}
          <rect x="148" y="10" width="24" height="35" fill="#17222E" stroke="#E2793D" strokeWidth="2" />
          <path d="M160 5 V15" stroke="#E2793D" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="4" r="3" fill="#E2793D" />
        </svg>
      );
    case 'other':
      return (
        <svg viewBox="0 0 320 200" fill="none" className="w-full h-full max-h-52 drop-shadow-md transition-transform duration-350 group-hover:scale-105">
          {/* Main Distribution Steam Header Manifold or Flash Tank */}
          <rect x="90" y="55" width="140" height="70" rx="35" fill="#0D1B2A" stroke="#B3401F" strokeWidth="4.5" />
          <rect x="98" y="63" width="124" height="54" rx="27" fill="#0D1B2A" opacity="0.85" />

          {/* Left supply inlet flange nozzle */}
          <rect x="65" y="75" width="25" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <path d="M50 90 H70" stroke="#E2793D" strokeWidth="4" />

          {/* Multiple top split outlet branch ports */}
          {/* Branch 1 */}
          <rect x="110" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <circle cx="119" cy="20" r="4" fill="#E2793D" />
          {/* Branch 2 */}
          <rect x="151" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <circle cx="160" cy="20" r="4" fill="#E2793D" />
          {/* Branch 3 */}
          <rect x="192" y="25" width="18" height="30" fill="#17222E" stroke="#5B6472" strokeWidth="2" />
          <circle cx="201" cy="20" r="4" fill="#E2793D" />

          {/* Deep Bottom drain pocket to discharge moisture/condensates */}
          <polygon points="150,125 170,125 163,155 157,155" fill="#B3401F" stroke="#E2793D" strokeWidth="2" />
          <circle cx="160" cy="162" r="5" fill="#E1E4E3" />
          <circle cx="160" cy="162" r="2.5" fill="#C1502B" />

          {/* Structural base saddles */}
          <path d="M120 125 L110 160 H130 L120 125 Z" fill="#0D1B2A" stroke="#B3401F" strokeWidth="2" />
          <path d="M200 125 L190 160 H210 L200 125 Z" fill="#0D1B2A" stroke="#B3401F" strokeWidth="2" />
          <line x1="100" y1="160" x2="220" y2="160" stroke="#B3401F" strokeWidth="3" />
        </svg>
      );
  }
}

export default function ProductCatalog({ onSelectProductForQuote }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Steam Boilers');
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  const categories = [
    'Steam Boilers',
    'Thermic Fluid Heaters',
    'Pressure Reducing Stations',
    'Air Pre Heaters',
    'Heat Exchangers',
    'Hot Water Generators',
    'Pollution Control Equipments',
    'Other Equipments',
    'All'
  ];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    if (expandedProductId === id) {
      setExpandedProductId(null);
    } else {
      setExpandedProductId(id);
    }
  };

  return (
    <div className="space-y-12 font-sans py-2">
      
      {/* Short Category Filters block with plenty of safe breathing space */}
      <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedProductId(null);
            }}
            className={`px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
              activeCategory === cat
                ? 'bg-[#B3401F] border-[#B3401F] text-white shadow-md transform scale-102'
                : 'bg-white border-[#E1E4E3] text-[#17222E] hover:bg-[#F7F7F4] hover:border-[#B3401F]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Spacious Product Stacked List — Layout influenced by prestigious thermalengitech.com aesthetic */}
      <div className="space-y-12 max-w-7xl mx-auto px-4">
        {filteredProducts.map((product) => {
          const isExpanded = expandedProductId === product.id;

          return (
            <div
              key={product.id}
              className="bg-white border border-[#E1E4E3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="p-6 sm:p-8 lg:p-12">
                {/* Horizontal split-screen grid on laptop screens to give images and details massive room */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Left (or top on mobile): Absolute premium product visualization/CAD box with plenty of padding space around the illustration */}
                  <div className="lg:col-span-5 flex flex-col space-y-4">
                    <div className="bg-gradient-to-br from-[#0D1B2A]/5 to-[#B3401F]/5 border border-[#E1E4E3] rounded-lg p-6 sm:p-10 md:p-14 flex items-center justify-center relative overflow-hidden group min-h-[240px] md:min-h-[290px]">
                      {/* Technical drawing coordinate backdrop indicators */}
                      <div className="absolute top-3 left-4 text-[9px] font-mono text-slate-400">ENG_DWG // 0{product.id}</div>
                      <div className="absolute bottom-3 right-4 text-[9px] font-mono text-[#B3401F]/35 font-semibold">KATHWADA_HEAVY_IND</div>
                      
                      {/* Grid overlay for technical precision blueprint vibe */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#B3401F_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      {/* High-fidelity custom CAD SVG */}
                      <ProductImage type={product.imageType} productId={product.id} />
                    </div>
                    
                    {/* Captions directly beneath the product image with spacious font-mono properties */}
                    <div className="px-1.5 flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#B3401F]">
                        <Cpu className="w-3.5 h-3.5" />
                        Interactive CAD Draft
                      </span>
                      <span>SCALE: 1:25 N.T.S</span>
                    </div>
                  </div>

                  {/* Right (or bottom on mobile): Beautiful presentation of detailed product attributes */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="flex flex-wrap items-center gap-2.5 bg-[#F7F7F4] border border-[#E1E4E3] p-1.5 px-3 rounded-lg w-fit">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#B3401F]">
                        {product.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E1E4E3]" />
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#C1502B]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Approved Standard
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-heading font-semibold text-[#0D1B2A] tracking-tight leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold text-[#B3401F] font-sans uppercase tracking-wider">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pre-cached fundamental tech constraints */}
                    <div className="bg-[#F7F7F4] border border-[#E1E4E3] rounded-xl p-5 lg:p-6 space-y-3 text-xs md:text-sm">
                      <h4 className="font-heading font-bold text-[#0D1B2A] text-[11px] md:text-xs uppercase tracking-wider text-slate-500 border-b border-[#E1E4E3] pb-2">
                        Primary Sizing Metrics
                      </h4>
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5 border-b border-[#E1E4E3]/50 last:border-0 last:pb-0">
                          <span className="text-slate-500 font-medium">{spec.label}</span>
                          <span className="text-[#0D1B2A] font-bold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Additional detailed parameters if expands action is triggered */}
                {isExpanded && (
                  <div className="mt-8 border-t border-[#E1E4E3] pt-8 animate-fadeIn space-y-8">
                    <div className="text-left text-xs md:text-sm">
                      
                      {/* Engineering Edge Advantage Checkpoints */}
                      <div className="space-y-4 max-w-4xl">
                        <h4 className="font-heading font-bold text-[#0D1B2A] text-xs uppercase tracking-wider flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#B3401F]" />
                          Design & Construction Advantage
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 lg:p-2">
                          {product.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white p-3 border border-[#E1E4E3] rounded-xl shadow-xs">
                              <div className="w-5 h-5 bg-[#C1502B]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[#C1502B]">
                                <span className="text-[10px] font-black">✓</span>
                              </div>
                              <span className="leading-relaxed font-sans">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Spaced Control CTA Actions bar */}
              <div className="bg-[#F7F7F4] border-t border-[#E1E4E3] px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => toggleExpand(product.id)}
                  className="w-full sm:w-auto text-xs font-bold text-[#B3401F] hover:text-[#0D1B2A] flex items-center justify-center gap-2 py-2.5 transition cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{isExpanded ? 'Hide Specifications' : 'Learn More'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => onSelectProductForQuote(product.name)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#0D1B2A] hover:bg-[#B3401F] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

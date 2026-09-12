/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MANUFACTURING_STEPS, SHOP_CAPABILITIES, DESIGN_CAPABILITIES } from '../data';
import { Settings, ShieldCheck, HardHat, PenTool, Cpu } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div className="space-y-0 text-left bg-[#F1F1ED] min-h-screen">
      
      {/* Banner */}
      <div className="bg-[#0B1B2B] text-white border-b border-[#1C5CA8]/25 relative overflow-hidden">
        {/* Subtle industrial blueprint network line */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#7FB2E4]">
              Dhamatwan Workshop Facility
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Inside Our Manufacturing Facility
            </h1>
            <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
              15,000 m² in Dhamatwan, Gujarat — approved under IBR 1950 to roll, weld, and inspect heavy-duty thermal systems.
            </p>
          </div>
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}images/products/steam-boiler-skid.png`}
              alt="Completed steam boiler skid on the Dhamatwan shop floor"
              className="w-full max-w-sm h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Workshop Equipment & Slabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Narrative and equipment table) */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">
              Production Machinery
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0B1B2B]">
              Precision Heavy Fabrication Capacity
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Standardized fabrication under clear procedural guidelines — material durability, geometric centering, and structural joint unity on every unit.
            </p>
          </div>

          <div className="bg-white border border-[#E1E4E3] rounded-lg overflow-hidden shadow-xs">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="text-xs uppercase font-mono font-bold text-[#0B1B2B] flex items-center gap-2">
                <HardHat className="w-4 h-4 text-[#1C5CA8]" />
                <span>Shop Floor Equipment</span>
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              {SHOP_CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="p-6 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 hover:bg-slate-50 transition">
                  <span className="text-xs font-mono font-bold text-[#1C5CA8] uppercase sm:col-span-1 leading-tight">
                    {cap.label}
                  </span>
                  <span className="text-xs text-slate-600 leading-relaxed font-sans sm:col-span-3">
                    {cap.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Design & Engineering Capabilities — real data from the facility's documented infrastructure */}
          <div className="bg-white border border-[#E1E4E3] rounded-lg overflow-hidden shadow-xs">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="text-xs uppercase font-mono font-bold text-[#0B1B2B] flex items-center gap-2">
                <PenTool className="w-4 h-4 text-[#1C5CA8]" />
                <span>Design & Engineering Capabilities</span>
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wide flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-[#1C5CA8]" />
                  Equipment Design
                </h4>
                <ul className="space-y-2">
                  {DESIGN_CAPABILITIES.equipmentDesign.map((item, i) => (
                    <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="text-[#1C5CA8] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wide flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#1C5CA8]" />
                  Computer Aided Design
                </h4>
                <ul className="space-y-2">
                  {DESIGN_CAPABILITIES.cadTools.map((item, i) => (
                    <li key={i} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="text-[#1C5CA8] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Standard Quality Assurance Accreditations summary) */}
        <div className="lg:col-span-5 bg-white border border-[#E1E4E3] rounded-lg p-6 md:p-8 space-y-6 self-start shadow-xs text-left">
          <div className="p-3 bg-[#1C5CA8]/10 rounded-xl text-[#1C5CA8] w-12 h-12 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          
          <div className="space-y-2">
            <h4 className="font-heading font-extrabold text-sm uppercase text-[#0B1B2B] tracking-wider">
              Quality Assurance Directives
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Every plate, tube, and weld is monitored by our quality coordinators. Documentation on file for each unit:
            </p>
          </div>

          <ul className="space-y-3.5 text-xs text-slate-600 font-sans">
            <li className="flex items-start gap-2.5">
              <span className="text-[#1C5CA8] font-bold">✓</span>
              <span><strong>MTR Verification:</strong> Mill Test Reports for every steel batch.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#1C5CA8] font-bold">✓</span>
              <span><strong>NDT Radiography:</strong> Full weld scans, root to surface.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#1C5CA8] font-bold">✓</span>
              <span><strong>Form VI Approval:</strong> Issued by State Boiler Inspectors after hydrostatic testing.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Assembly Steps Flowchart Section */}
      <div className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E1E4E3]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">
              Production Steps
            </p>
            <h2 className="text-3xl font-heading font-bold text-[#0B1B2B]">
              The Six-Stage Assembly Pipeline
            </h2>
            <p className="text-slate-600 text-sm">
              Raw boiler-grade steel to finished, certified system — six stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {MANUFACTURING_STEPS.map((step, i) => (
              <div 
                key={i}
                className="bg-white border border-[#E1E4E3] p-6 rounded-lg hover:border-[#1C5CA8]/35 transition shadow-sm space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[#1C5CA8] uppercase tracking-wider">
                      Stage {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-400">Section GIDC</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-[#0B1B2B]">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{step.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-tight">
                  Status: 100% Quality Audited
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CERTIFICATIONS } from '../data';
import { BadgeCheck, ShieldCheck, FileCheck, Award } from 'lucide-react';

export default function Certifications() {
  const auditAgencies = [
    { name: 'Lloyds Register of Shipping', role: 'Export vessel compliance' },
    { name: 'TUV SUD Group', role: 'ISO 9001 quality audits' },
    { name: 'Bureau Veritas', role: 'ASME Sec I & VIII third-party inspection' },
    { name: 'Directorate of Boilers, Gujarat', role: 'Statutory IBR 1950 certification' },
    { name: 'SGS India', role: 'Raw material chemical analysis verification' },
    { name: 'RITES Limited', role: 'Government infrastructure project inspections' }
  ];

  return (
    <div className="space-y-0 text-left bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-[#0D1B2A] text-white pt-16 pb-14 px-5 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:2.5rem_2.5rem]" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#5B9BD9] uppercase">
            Compliance Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Safety & Accreditation
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            In high-pressure boiler engineering, compliance is non-negotiable. Our workshop is audited continuously to guarantee risk-free operation.
          </p>
        </div>
      </div>

      {/* Grid of certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {CERTIFICATIONS.map((cert, i) => (
            <div 
              key={i}
              className="bg-white border border-[#E1E4E3] p-6 md:p-8 rounded-lg shadow-sm hover:shadow transition duration-200 flex flex-col justify-between h-full group hover:border-[#1F5FA8]/35"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#1F5FA8]/10 rounded-xl flex items-center justify-center text-[#1F5FA8]">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#0D1B2A] leading-snug group-hover:text-[#1F5FA8] transition duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>GOVERNING BODY:</span>
                <span className="text-[#1F5FA8] text-[11px] font-bold">{cert.authority}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Third-party audit roster */}
        <div className="bg-white border border-[#E1E4E3] rounded-lg p-6 md:p-8 space-y-8 shadow-xs text-left">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <h3 className="font-heading font-extrabold text-lg text-[#0D1B2A] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#1F5FA8]" />
              <span>Third-Party Physical Testing Agencies</span>
            </h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              We frequently coordinate onsite welds scanning, plate coupon tensile failures investigations, and hydraulic test witnessings with global inspectors as mandated by clients or statutory codes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {auditAgencies.map((agency, i) => (
              <div key={i} className="flex gap-3.5 items-start p-4 bg-[#F1F1ED] border border-slate-100 rounded-xl hover:bg-slate-50 transition">
                <div className="p-2 bg-white rounded-lg border border-slate-200 text-[#1F5FA8] shrink-0 font-mono text-xs font-bold shadow-xs">
                  0{i + 1}
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-bold text-xs text-[#0D1B2A] leading-tight">{agency.name}</h4>
                  <span className="text-[10.5px] text-slate-500 font-medium">{agency.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance checklist declarations */}
        <div className="bg-[#0D1B2A] text-white rounded-lg p-6 md:p-8 space-y-6 relative overflow-hidden border border-white/5 shadow-md">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 max-w-4xl space-y-4 text-left">
            <h4 className="font-heading font-extrabold text-lg text-white flex items-center gap-1.5 uppercase tracking-wide">
              <Award className="w-5 h-5 text-[#5B9BD9]" />
              <span>Statutory Compliance Declaration</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              "Thermal Engitech Pvt. Ltd. certifies that all high-pressure steam boilers, thermic heaters, and pressure reducing manifolds are manufactured under continuous inspection by either state-appointed Boiler Inspectors or customer-approved international inspect agencies. Rigorous volumetric joints radiography, mechanical hydrotesting, and thickness verifications stand standard on our plant floor."
            </p>
            <div className="pt-2 flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-mono tracking-wider font-bold uppercase text-[#5B9BD9]">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Form VI certified</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Class 1 IBR boiler standards</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> ASME U & S compliance capabilities</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

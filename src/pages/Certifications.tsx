/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Reveal from '../components/Reveal';
import RotatingGlobe from '../components/RotatingGlobe';
import { CERTIFICATIONS, DESIGN_CODES } from '../data';
import {
  BadgeCheck,
  ShieldCheck,
  FileCheck,
  Award,
  Settings,
  Factory,
  BarChart3
} from 'lucide-react';

export default function Certifications() {
  useDocumentMeta(
    'Certifications & Design Codes',
    'IBR 1950, ASME Section VIII, ISO 9001:2015, and the specific design codes (IS-2825, ISO-R-831, BS-2970, TEMA) our engineering is checked against.'
  );

  return (
    <div className="space-y-0 text-left bg-white min-h-screen">
      
      {/* Page Header — full-bleed photo with a dark scrim, text on top. */}
      <div className="relative overflow-hidden min-h-[360px] flex items-center px-4 sm:px-6 lg:px-8">
        <img
          src={`${import.meta.env.BASE_URL}images/banners/certifications.webp`}
          alt="CNC plasma cutting sparks on a steel plate during fabrication"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7FB2E4] uppercase">
            Compliance Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Safety & Accreditation
          </h1>
          <p className="text-white/80 text-sm max-w-2xl leading-relaxed">
            In high-pressure boiler engineering, compliance is non-negotiable. Our workshop is audited continuously to guarantee risk-free operation.
          </p>
        </div>
      </div>

      {/* Intro — same composition as the homepage's Certifications & Quality
          section: copy on the left, the real Earth photo (circularly
          masked, no hard edge) with orbit rings, and the trust-point
          checklist on the right — ties this page visually to that section. */}
      <div className="bg-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <Reveal className="lg:col-span-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#1C5CA8] font-semibold">
              Globally Recognized
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B2B] tracking-[-0.02em] leading-[1.1]">
              Standards trusted on <span className="text-[#1C5CA8]">projects worldwide</span>
            </h2>
            <p className="text-sm sm:text-base text-[#47566A] leading-relaxed max-w-md">
              Every unit we build is checked against the same codes auditors, insurers and plant
              engineers already recognize — in India and in export markets.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3 relative w-full aspect-square max-w-[260px] mx-auto hidden sm:block">
            <svg className="absolute inset-0 w-full h-full text-[#1C5CA8]" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <ellipse cx="100" cy="100" rx="98" ry="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
              <ellipse cx="100" cy="100" rx="98" ry="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" transform="rotate(60 100 100)" />
              <ellipse cx="100" cy="100" rx="98" ry="40" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" transform="rotate(120 100 100)" />
              <circle cx="100" cy="4" r="3.5" fill="currentColor" />
              <circle cx="193" cy="58" r="2.5" fill="currentColor" fillOpacity="0.6" />
              <circle cx="14" cy="148" r="3" fill="currentColor" fillOpacity="0.7" />
              <circle cx="160" cy="178" r="2.5" fill="currentColor" fillOpacity="0.5" />
            </svg>
            <RotatingGlobe className="absolute inset-[12%] drop-shadow-[0_18px_30px_rgba(28,92,168,0.3)]" />
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-4 flex flex-col gap-5">
            {[
              { label: 'Global Compliance', icon: Settings },
              { label: 'Quality Manufacturing', icon: Factory },
              { label: 'Safe & Reliable Operations', icon: ShieldCheck },
              { label: 'Proven Industry Standards', icon: BarChart3 },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1C5CA8]/8 text-[#1C5CA8]">
                  <t.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-semibold text-[#0B1B2B]">{t.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Grid of certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {CERTIFICATIONS.map((cert, i) => {
            const isAsme = cert.title.includes('ASME');
            return (
            <React.Fragment key={cert.title}>
            <Reveal
              delay={(i % 2) * 0.08}
              className="bg-panel border border-[#E1E4E3] p-6 md:p-8 rounded-2xl shadow-sm hover:shadow transition duration-200 flex flex-col justify-between h-full group hover:border-[#1C5CA8]/35 hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#1C5CA8]/8 rounded-lg flex items-center justify-center text-[#1C5CA8]">
                  {isAsme ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/certifications/asme-cert-seal.png`}
                      alt="ASME certification seal"
                      className="max-w-full max-h-full object-contain p-1"
                    />
                  ) : (
                    <BadgeCheck className="w-6 h-6" />
                  )}
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#0B1B2B] leading-snug group-hover:text-[#1C5CA8] transition duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#47566A] font-sans leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[10px] font-mono font-bold text-[#5B6B80]">
                <span>GOVERNING BODY:</span>
                <span className="text-[#1C5CA8] text-[11px] font-bold">{cert.authority}</span>
              </div>
            </Reveal>
            </React.Fragment>
            );
          })}
        </div>

        {/* Design codes & standards actually referenced in engineering */}
        <Reveal className="bg-panel border border-[#E1E4E3] rounded-lg p-6 md:p-8 space-y-8 shadow-xs text-left">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <h3 className="font-heading font-extrabold text-lg text-[#0B1B2B] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#1C5CA8]" />
              <span>Design Codes & Standards Referenced</span>
            </h3>
            <p className="text-xs text-[#47566A] font-sans leading-relaxed">
              The actual codes our design and stress-analysis work is checked against — not a generic "international standards" claim.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {DESIGN_CODES.map((dc, i) => (
              <div key={i} className="flex gap-3.5 items-start p-4 bg-white border border-slate-100 rounded-xl hover:bg-panel transition">
                <div className="p-2 bg-white rounded-lg border border-slate-200 text-[#1C5CA8] shrink-0 font-mono text-xs font-bold shadow-xs">
                  0{i + 1}
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-bold text-xs text-[#0B1B2B] leading-tight">{dc.code}</h4>
                  <span className="text-[10.5px] text-[#5B6B80] font-medium">{dc.note}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Compliance checklist declarations */}
        <Reveal className="bg-[#0B1B2B] text-white rounded-lg p-6 md:p-8 space-y-6 relative overflow-hidden border border-white/5 shadow-md">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 max-w-4xl space-y-4 text-left">
            <h4 className="font-heading font-extrabold text-lg text-white flex items-center gap-1.5 uppercase tracking-wide">
              <Award className="w-5 h-5 text-[#7FB2E4]" />
              <span>Statutory Compliance Declaration</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              "All high-pressure boilers, heaters, and pressure manifolds are manufactured under continuous inspection by state-appointed or customer-approved agencies. Radiography, hydrotesting, and thickness verification are standard on every unit."
            </p>
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-4">
              {[
                { label: 'Form VI certified', icon: ShieldCheck },
                { label: 'Class 1 IBR boiler standards', icon: Award },
                { label: 'ASME U & S compliance capabilities', icon: BadgeCheck },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7FB2E4]">
                    <t.icon className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                  <p className="text-xs font-semibold text-white">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>

    </div>
  );
}

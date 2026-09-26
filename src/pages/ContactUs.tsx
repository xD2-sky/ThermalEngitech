/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import CompanyMap from '../components/CompanyMap';
import Reveal from '../components/Reveal';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  useDocumentMeta(
    'Contact Us',
    'Reach Thermal Engitech for sizing calculations, quotes, or plant visits. Dhamatwan, Gujarat, India.'
  );

  const contacts = [
    {
      title: 'Sales & Engineering',
      person: 'Enquiry Desk',
      phone: '+91 70693 06431',
      phoneTel: '+917069306431',
      email: 'info@thermalengitech.com'
    },
    {
      title: 'Purchase Department',
      person: 'Ramesh Samdani (Purchase Manager)',
      phone: '+91 90330 47272',
      phoneTel: '+919033047272',
      email: 'info@thermalengitech.com'
    }
  ];

  return (
    <div className="space-y-0 text-left bg-white min-h-screen">
      
      {/* Banner — full-bleed photo with a dark scrim, text on top. */}
      <div className="relative overflow-hidden min-h-[360px] flex items-center px-4 sm:px-6 lg:px-8">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-pipes-light.jpg`}
          alt="Stainless steel process piping and vessels inside a manufacturing plant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B]/95 via-[#0B1B2B]/80 to-[#0B1B2B]/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7FB2E4] uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Contact Our Engineering Headquarters
          </h1>
          <p className="text-white/80 text-sm max-w-2xl leading-relaxed">
            Reach out directly for corporate estimates, custom sizing proposals, or technical assistance concerning existing boiler grids.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Coordinates and Hours) */}
        <div className="lg:col-span-4 space-y-8 text-left">

          {/* Main physical site */}
          <Reveal className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-4">
            <h3 className="font-heading font-extrabold text-[#0B1B2B] text-sm uppercase tracking-wider border-b border-slate-100 pb-3">
              Corporate Office & Plant
            </h3>
            
            <div className="space-y-4 font-sans text-xs text-[#47566A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" />
                <span>
                  12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1C5CA8] shrink-0" />
                <span>+91 70693 06431</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1C5CA8] shrink-0" />
                <span>info@thermalengitech.com</span>
              </div>
            </div>
          </Reveal>

          {/* Plant Operational Hours */}
          <Reveal delay={0.08} className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-4 text-left">
            <h3 className="font-heading font-extrabold text-[#0B1B2B] text-sm uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1C5CA8]" />
              <span>Operational Hours</span>
            </h3>

            <div className="space-y-2.5 font-sans text-xs text-[#47566A]">
              <div className="flex justify-between border-b border-dotted border-slate-200 pb-1.5">
                <span>Monday - Friday:</span>
                <span className="font-bold text-[#0B1B2B]">09:00 AM - 06:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 pb-1.5">
                <span>Saturday:</span>
                <span className="font-bold text-[#0B1B2B]">09:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between text-[#47566A] italic">
                <span>Sunday:</span>
                <span>Plant Closed</span>
              </div>
            </div>

            <p className="text-[10px] text-[#78889B] leading-relaxed font-sans pt-1">
              * Critical breakdowns and troubleshooting hotlines remain accessible on a 24/7 cycle for registered contractual clients.
            </p>
          </Reveal>

          {/* Success timeline */}
          <Reveal delay={0.16} className="bg-[#1C5CA8]/5 border border-[#1C5CA8]/20 p-6 rounded-lg text-left space-y-2.5 font-sans">
            <h5 className="font-bold text-xs text-[#0B1B2B] uppercase tracking-wide">Estimates Response Guarantee</h5>
            <p className="text-xs text-[#47566A] leading-normal">
              Sizing calculations and a full bill of material — delivered within 24 working hours.
            </p>
          </Reveal>

        </div>

        {/* Right Column (Sales Coordinators and Live Map) */}
        <div className="lg:col-span-8 space-y-8 text-left">
          
          <Reveal className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-heading font-extrabold text-base text-[#0B1B2B]">
                Key Department Representatives
              </h3>
              <p className="text-[11px] text-[#78889B] font-sans">
                Contact the direct coordinator assigned to your corporate category.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((c, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 hover:border-[#1C5CA8]/30 hover:shadow-sm p-4 rounded-xl space-y-3 font-sans text-xs text-left transition-all duration-200">
                  <span className="text-[9.5px] font-mono font-bold text-[#1C5CA8] uppercase tracking-wider block border-b border-slate-200 pb-1.5">
                    {c.title}
                  </span>
                  <div className="space-y-1">
                    <b className="font-bold text-[#0B1B2B] block text-[11px]">{c.person}</b>
                    <a href={`tel:${c.phoneTel}`} className="text-[#47566A] block hover:text-[#1C5CA8] transition">{c.phone}</a>
                    <a href={`mailto:${c.email}`} className="text-[#47566A] hover:text-[#1C5CA8] transition block break-all font-semibold select-all">
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CompanyMap />
          </Reveal>

        </div>

      </div>

    </div>
  );
}

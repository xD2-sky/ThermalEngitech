/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import HeroSteam from '../components/HeroSteam';
import CompanyMap from '../components/CompanyMap';
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
    <div className="space-y-0 text-left bg-slate-50 min-h-screen">
      
      {/* Banner */}
      <div className="bg-[#0D1B2A] text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}images/banners/contact.webp`} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0D1B2A]/80" />
        <HeroSteam />
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7FB2E4] uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Contact Our Engineering Headquarters
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Reach out directly for corporate estimates, custom sizing proposals, or technical assistance concerning existing boiler grids.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Coordinates and Hours) */}
        <div className="lg:col-span-4 space-y-8 text-left">
          
          {/* Main physical site */}
          <div className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-4">
            <h3 className="font-heading font-extrabold text-[#0D1B2A] text-sm uppercase tracking-wider border-b border-slate-100 pb-3">
              Corporate Office & Plant
            </h3>
            
            <div className="space-y-4 font-sans text-xs text-slate-600">
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
          </div>

          {/* Plant Operational Hours */}
          <div className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-4 text-left">
            <h3 className="font-heading font-extrabold text-[#0D1B2A] text-sm uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1C5CA8]" />
              <span>Operational Hours</span>
            </h3>

            <div className="space-y-2.5 font-sans text-xs text-slate-500">
              <div className="flex justify-between border-b border-dotted border-slate-200 pb-1.5">
                <span>Monday - Friday:</span>
                <span className="font-bold text-slate-800">09:00 AM - 06:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 pb-1.5">
                <span>Saturday:</span>
                <span className="font-bold text-slate-800">09:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between text-slate-500 italic">
                <span>Sunday:</span>
                <span>Plant Closed</span>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-500 leading-relaxed font-sans pt-1">
              * Critical breakdowns and troubleshooting hotlines remain accessible on a 24/7 cycle for registered contractual clients.
            </p>
          </div>

          {/* Success timeline */}
          <div className="bg-[#1C5CA8]/5 border border-[#1C5CA8]/20 p-6 rounded-lg text-left space-y-2.5 font-sans">
            <h5 className="font-bold text-xs text-[#0D1B2A] uppercase tracking-wide">Estimates Response Guarantee</h5>
            <p className="text-xs text-slate-600 leading-normal">
              Sizing calculations and a full bill of material — delivered within 24 working hours.
            </p>
          </div>

        </div>

        {/* Right Column (Sales Coordinators and Live Map) */}
        <div className="lg:col-span-8 space-y-8 text-left">
          
          <div className="bg-white border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-heading font-extrabold text-base text-[#0D1B2A]">
                Key Department Representatives
              </h3>
              <p className="text-[11px] text-slate-500 font-sans">
                Contact the direct coordinator assigned to your corporate category.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((c, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-3 font-sans text-xs text-left">
                  <span className="text-[9.5px] font-mono font-bold text-[#1C5CA8] uppercase tracking-wider block border-b border-slate-200 pb-1.5">
                    {c.title}
                  </span>
                  <div className="space-y-1">
                    <b className="font-bold text-[#0D1B2A] block text-[11px]">{c.person}</b>
                    <a href={`tel:${c.phoneTel}`} className="text-slate-600 block hover:text-[#1C5CA8] transition">{c.phone}</a>
                    <a href={`mailto:${c.email}`} className="text-slate-500 hover:text-[#1C5CA8] transition block break-all font-semibold select-all">
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CompanyMap />

        </div>

      </div>

    </div>
  );
}

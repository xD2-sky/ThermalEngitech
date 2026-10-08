/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import CompanyMap from '../components/CompanyMap';
import Reveal from '../components/Reveal';
import HoneypotField from '../components/HoneypotField';
import { submitToWeb3Forms } from '../config/web3forms';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

type MessageForm = { name: string; email: string; message: string };
const EMPTY_FORM: MessageForm = { name: '', email: '', message: '' };

export default function ContactUs() {
  useDocumentMeta(
    'Contact Us',
    'Reach Thermal Engitech for sizing calculations, quotes, or plant visits. Dhamatwan, Gujarat, India.'
  );

  const [form, setForm] = useState<MessageForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [botcheck, setBotcheck] = useState(false);

  const handleChange =
    (field: keyof MessageForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    const result = await submitToWeb3Forms({
      subject: 'New Contact Message — Thermal Engitech Website',
      from_name: form.name,
      name: form.name,
      email: form.email,
      message: form.message,
      botcheck: botcheck ? 'true' : '',
    });

    setSubmitting(false);

    if (!result.success) {
      setSubmitError("Couldn't send your message — please try again, or email us directly at info@thermalengitech.com.");
      return;
    }

    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-lg border border-[#E1E4E3] px-4 py-3 text-sm text-[#0B1B2B] placeholder:text-[#9AA6B2] focus:outline-none focus:border-[#1C5CA8] transition-colors';

  return (
    <div className="space-y-0 text-left bg-white min-h-screen">
      
      {/* Banner — full-bleed photo with a dark scrim, text on top. */}
      <div className="relative overflow-hidden min-h-[360px] flex items-center px-4 sm:px-6 lg:px-8">
        <img
          src={`${import.meta.env.BASE_URL}images/contact-hero-industrial.webp`}
          alt=""
          role="presentation"
          className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
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
          <Reveal className="bg-panel border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-5">
            <h3 className="font-heading font-extrabold text-[#0B1B2B] text-base uppercase tracking-wider border-b border-slate-100 pb-3">
              Corporate Office & Plant
            </h3>

            <div className="space-y-5 font-sans text-sm text-[#47566A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" />
                <span>
                  12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1C5CA8] shrink-0 mt-0.5" />
                <a href="tel:+917069306431" className="hover:text-[#1C5CA8] transition">+91 70693 06431</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1C5CA8] shrink-0" />
                <a href="mailto:info@thermalengitech.com" className="hover:text-[#1C5CA8] transition break-all">info@thermalengitech.com</a>
              </div>
            </div>
          </Reveal>

          {/* Plant Operational Hours */}
          <Reveal delay={0.08} className="bg-panel border border-[#E1E4E3] p-6 rounded-lg shadow-xs space-y-4 text-left">
            <h3 className="font-heading font-extrabold text-[#0B1B2B] text-base uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1C5CA8]" />
              <span>Operational Hours</span>
            </h3>

            <div className="space-y-3 font-sans text-sm text-[#47566A]">
              <div className="flex justify-between border-b border-dotted border-slate-200 pb-2">
                <span>Monday - Friday:</span>
                <span className="font-bold text-[#0B1B2B]">09:00 AM - 06:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 pb-2">
                <span>Saturday:</span>
                <span className="font-bold text-[#0B1B2B]">09:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between text-[#47566A] italic">
                <span>Sunday:</span>
                <span>Plant Closed</span>
              </div>
            </div>

            <p className="text-xs text-[#78889B] leading-relaxed font-sans pt-1">
              * Critical breakdowns and troubleshooting hotlines remain accessible on a 24/7 cycle for registered contractual clients.
            </p>
          </Reveal>

        </div>

        {/* Right Column (Quote request + Live Map) */}
        <div className="lg:col-span-8 space-y-8 text-left">

          <Reveal className="bg-panel border border-[#E1E4E3] p-6 sm:p-8 rounded-lg shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-heading font-extrabold text-lg text-[#0B1B2B]">
                Send Us a Message
              </h3>
              <p className="text-sm text-[#78889B] font-sans">
                General questions and plant-visit requests — we'll reply within 24 working hours. For a sizing
                calculation and technical quotation, use{' '}
                <Link to="/request-quote" className="text-[#1C5CA8] font-semibold hover:underline">
                  Request a Quote
                </Link>{' '}
                instead.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white border border-slate-100 rounded-lg p-8 text-center space-y-2">
                <h4 className="font-heading font-extrabold text-base text-[#0B1B2B]">Message sent.</h4>
                <p className="text-sm text-[#47566A]">
                  Thank you — our team will get back to you within 24 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <HoneypotField checked={botcheck} onChange={setBotcheck} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[#0B1B2B]">Name</label>
                    <input id="contact-name" name="name" required type="text" value={form.name} onChange={handleChange('name')} className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[#0B1B2B]">Email</label>
                    <input id="contact-email" name="email" required type="email" value={form.email} onChange={handleChange('email')} className={inputClass} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-[#0B1B2B]">Message</label>
                  <textarea id="contact-message" name="message" required rows={4} value={form.message} onChange={handleChange('message')} placeholder="How can we help?" className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-[#1C5CA8] hover:bg-[#103E72] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-8 py-3.5 transition-colors"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
                {submitError && (
                  <p className="text-xs text-red-600 font-medium">{submitError}</p>
                )}
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <CompanyMap />
          </Reveal>

        </div>

      </div>

    </div>
  );
}

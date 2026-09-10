/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Target, 
  Compass, 
  Factory, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';

export default function AboutUs() {
  const leadership = [
    {
      name: 'Mr. Arvind Patel',
      role: 'Managing Director & Chief Engineer',
      description: 'Over 28 years of core industrial experience in thermal power cycles, multi-fluid convective heat patterns, and compliance codes with state-level regulatory boards.'
    },
    {
      name: 'Mr. Sanjay Patel',
      role: 'Director - Production & Operations',
      description: 'Coordinates Shrey Industrial Park plant assemblies, specializing in heavy mechanical sheet rolling, hydrostatic testing rigs, and quality audits.'
    },
    {
      name: 'Ms. Priyanka Shah',
      role: 'Chief of QA & Compliance Standards',
      description: 'Oversees radiographic weld checks, ISO management logs, and ASME / IBR statutory documentation for national and global clients.'
    }
  ];

  return (
    <div className="space-y-0 text-left bg-[#F1F1ED]">
      
      {/* Page Header Banner */}
      <div className="bg-[#0D1B2A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#B3401F]/25 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C1502B] uppercase">
            Corporate Footprint
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            About Thermal Engitech
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Dedicating high-precision fabrication expertise to the chemical, textile, and cleanroom food production grids since inception in Gujarat, India.
          </p>
        </div>
      </div>

      {/* Main Narrative Block & Company Journey */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#B3401F]">
                Our History & Vision
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0D1B2A]">
                Engineering Superior Saturated Process Heat Since 2012
              </h2>
              
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  Established as a boutique thermal consulting house in Gujarat, Thermal Engitech quickly expanded to a state-of-the-art heavy engineering plant in Shrey Industrial Park, Dhamatwan. Today, we are recognized as a trusted partner across India and export markets for complete boiler assemblies, heaters, and accessories.
                </p>
                <p>
                  We believe that process heating shouldn't be the weakest link in your plant's production cycle. That is why we focus heavily on raw material thickness verification (using continuous non-destructive ultrasonic inspections), generous furnace designs to prevent burner flame impingement, and thermal recuperation systems that optimize burner fuel utilization.
                </p>
                <p>
                  Our workshop is fully qualified under Indian Boiler Regulations (IBR 1950) rules and holds active capacities to roll up to 32mm heavy boiler grade plates, deploy high-grade ASME seamless carbon steel tubes, and commission touch-screen PLC automation packages.
                </p>
              </div>

              {/* Plant stats counts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#E1E4E3] text-center sm:text-left">
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-[#B3401F]">1,200+</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold font-mono">Commissioned Plants</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-[#B3401F]">15,000 m²</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold font-mono">Dhamatwan Workshop</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-[#B3401F]">100%</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold font-mono">IBR & ASME Compliant</span>
                </div>
                <div>
                  <span className="block text-2xl md:text-3xl font-extrabold text-[#B3401F]">12+ Years</span>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold font-mono">Industry Presence</span>
                </div>
              </div>
            </div>

            {/* Visual Callout block to "Why we differ" */}
            <div className="lg:col-span-5 bg-slate-50 border border-[#E1E4E3] rounded-lg overflow-hidden">
              <div className="bg-[#0D1B2A] p-6 flex justify-center">
                <img
                  src="/images/products/packaged-boiler-unit.png"
                  alt="Factory-assembled packaged boiler unit ready for dispatch"
                  className="w-full max-w-[240px] h-auto"
                />
              </div>
              <div className="p-6 md:p-8 space-y-6">
              <h3 className="text-base font-heading font-bold text-[#0D1B2A] uppercase tracking-wider border-b border-[#E1E4E3] pb-3">
                Our Foundational Pillars
              </h3>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="p-2 bg-[#B3401F]/10 rounded-lg text-[#B3401F] shrink-0 h-10 w-10 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <b className="text-sm font-bold text-[#0D1B2A] block">Client-Centric Custom Sizing</b>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      We never force catalog models. Every boiler, heater, or thermodynamic exchanger is scaled to fit your exact footprint, local fuels, and pressure loops.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-[#B3401F]/10 rounded-lg text-[#B3401F] shrink-0 h-10 w-10 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <b className="text-sm font-bold text-[#0D1B2A] block">Extensive Safety Interlocks</b>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      Dual Mobrey water level checks, spring-loaded safety relief valves, high flame cut-offs, and critical oil pressure limiters come pre-configured standard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 bg-[#B3401F]/10 rounded-lg text-[#B3401F] shrink-0 h-10 w-10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <b className="text-sm font-bold text-[#0D1B2A] block">Absolute Materials Honesty</b>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      We use certified ASTM standard materials (like A516 Gr. 70 plates or ASTM A106 Gr. B carbon pipes) backed by original mill test certs.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Leadership Profile Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E1E4E3] bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#B3401F]">
              Leadership Team
            </p>
            <h2 className="text-3xl font-heading font-bold text-[#0D1B2A]">
              Guided by Process Heat Veterans
            </h2>
            <p className="text-slate-600 text-sm">
              Our directors combine academic thermal research with robust, practical GIDC workshop supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((lead, i) => (
              <div 
                key={i}
                className="bg-white border border-[#E1E4E3] rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3 text-left">
                  <div className="h-12 w-12 rounded-full bg-[#B3401F]/10 text-[#B3401F] flex items-center justify-center font-bold font-heading text-lg">
                    {lead.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#0D1B2A]">{lead.name}</h4>
                    <span className="text-[10px] uppercase font-mono font-bold text-[#B3401F]">{lead.role}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{lead.description}</p>
                </div>

                <div className="pt-4 border-t border-[#E1E4E3] text-[10px] font-bold text-[#B3401F] flex items-center gap-1.5 font-mono">
                  <Award className="w-3.5 h-3.5" />
                  <span>ISO Audit Representative</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Corporate Philosophy Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <BookOpen className="w-12 h-12 text-[#B3401F] mx-auto opacity-80" />
          
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-[#0D1B2A]">Our Ongoing Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
              "To manufacture and deploy thermodynamic units that outperform standard parameters, reduce ambient emissions to local pollution board standards, and empower chemical, food, and textile grids with total thermal security."
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Link 
              to="/products"
              className="px-5 py-2.5 bg-[#0D1B2A] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow hover:bg-[#B3401F] transition flex items-center gap-1.5"
            >
              <span>View our products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link 
              to="/contact"
              className="px-5 py-2.5 border border-[#E1E4E3] bg-white text-[#17222E] hover:bg-slate-50 text-xs font-bold uppercase tracking-wider rounded-lg transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

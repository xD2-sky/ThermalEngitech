/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ChevronRight } from 'lucide-react';

export default function Industries() {
  // Enhanced detailed attributes for each industry to show high-fidelity design
  const detailedIndustries = [
    {
      name: 'Chemical & Petrochemical',
      useCase: 'Distillation columns, high-pressure reaction vessels, storage tank heating grids, and bulk organic solvent dryers.',
      challenge: 'Requires strict temperature accuracy within ±1.5°C to prevent thermal degradation of sensitive reactant molecular compounds.',
      solutions: 'Custom concentric double-spiral Thermic Fluid Heaters (oil/gas or bio-pellet) accompanied by ASME Sec VIII Shell & Tube pre-condensers.',
      specs: 'Operating Loop Temperatures: 180°C to 300°C | Output flow: 1,50,000 to 40,00,000 kcal/hr'
    },
    {
      name: 'Textiles & Dyeing',
      useCase: 'Fabric sizing cylinders, continuous high-volume batch liquor dyeing, stenter hot air drying, and fabric pre-shrinkage chambers.',
      challenge: 'Extremely volatile load changes. Wet dye baths require sudden heavy volumes of steam without dropping boiler header pressure.',
      solutions: 'Multi-Drum Hybrid Watercum-Smoke tube boilers with ample storage buffer, automatic fluidized bed solid fuel grids, and economizers.',
      specs: 'Operating Steam Output: 2.0 to 20.0 Tons/hr | Saturated pressures: 10.5 to 17.5 kg/cm²'
    },
    {
      name: 'Food & Beverage Processing',
      useCase: 'CIP sanitization pipelines, flash pasteurizers, steam-jacketed cooking vessels, grain cookers, bottling washers, and spray dryers.',
      challenge: 'Demands absolute dry steam fraction and quick startups to prevent high operational downtime on packaging lines.',
      solutions: 'Oil / Gas Fired 3-Pass Saturated Steam Boilers or skid-packaged rapid vertical Hot Water Generators.',
      specs: 'Operating Sizing Limits: Exempted IBR package designs | Food-grade SS304/SS316 contact surfaces'
    },
    {
      name: 'Pharmaceutical & Cleanroom',
      useCase: 'Sterilization autoclaves, clean steam humidification, indirect HVAC heating, and pharmaceutical solvent extraction columns.',
      challenge: 'Must prevent any water treatment chemicals or carbon soot contaminants from entering cleanroom process loops.',
      solutions: 'All stainless steel high-grade pure Steam Generators, cleanroom-safe shell exchangers, and high-performance package hot water skids.',
      specs: 'Pure steam dryness fraction: >98% | Complete passivated SS316L build'
    },
    {
      name: 'Refineries & Oil Storage',
      useCase: 'Storage tank bitumen/asphalt viscosity reduction, piping tracer loops, and heavy petroleum pre-pumping fluidization.',
      challenge: 'Extractive tank farms span huge areas, requiring highly stable central thermal fluid loops with minimal heat drop.',
      solutions: 'High-Capacity Horizontal 4-pass solid-briquette or gas-fired Thermic Heaters with customized Nitrogen-blanketed expansion tanks.',
      specs: 'Operational thermal cycle lengths: >1.5 km loops | Operating margins up to 320°C'
    }
  ];

  return (
    <div className="space-y-0 text-left bg-slate-50 min-h-screen">
      
      {/* Banner */}
      <div className="bg-[#0D1B2A] text-white pt-16 pb-14 px-5 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7FB2E4] uppercase">
            Global Applications
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            From heavy chemical reactors in Dahej to bulk textile clusters in Surat, our system solutions are engineered to handle intense load fluctuations and local environmental criteria.
          </p>
        </div>
      </div>

      {/* Main Grid display of enhanced industry solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        
        <div className="space-y-12">
          {detailedIndustries.map((ind, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#E1E4E3] rounded-lg overflow-hidden shadow-sm hover:border-[#1C5CA8]/30 transition grid grid-cols-1 md:grid-cols-12"
            >
              
              {/* Sidebar color accent with industry icon */}
              <div className="md:col-span-1 bg-[#F1F1ED] border-r border-[#E1E4E3] p-6 flex flex-col items-center justify-start text-slate-400">
                <span className="text-xs font-mono font-bold text-[#1C5CA8] bg-white px-2 py-1 rounded shadow-xs mb-4">
                  0{idx + 1}
                </span>
                <div className="p-3 bg-white rounded-xl text-[#1C5CA8] shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              {/* Main textual brief page */}
              <div className="md:col-span-11 p-6 md:p-8 space-y-6">
                <div className="space-y-1.5 text-left">
                  <h3 className="font-heading font-extrabold text-xl text-[#0D1B2A]">
                    {ind.name} Division
                  </h3>
                  <p className="text-[#1C5CA8] text-xs font-semibold uppercase tracking-wider font-mono">
                    Target Thermal Goal: {ind.specs.split(' | ')[0]}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-left">
                  <div className="space-y-3 font-sans">
                    <div>
                      <b className="text-[#0D1B2A] font-bold block uppercase tracking-wide mb-1">Standard Processing Use Cases</b>
                      <p className="text-slate-600 leading-relaxed">{ind.useCase}</p>
                    </div>
                    <div>
                      <b className="text-[#1B3A63] font-bold block uppercase tracking-wide mb-1">Thermal & Load Challenge</b>
                      <p className="text-slate-600 leading-relaxed italic">"{ind.challenge}"</p>
                    </div>
                  </div>

                  <div className="space-y-3 font-sans bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <b className="text-[#1C5CA8] font-bold block uppercase tracking-wide mb-1">Engineered Solution Blueprint</b>
                      <p className="text-slate-600 leading-relaxed">{ind.solutions}</p>
                    </div>
                    <div>
                      <b className="text-slate-500 font-bold block uppercase tracking-wide mb-1">Key Performance Parameters</b>
                      <p className="text-[#17222E] font-bold">{ind.specs.split(' | ')[1] || ind.specs}</p>
                    </div>
                  </div>
                </div>

                {/* Sizing Link buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                    Compliant: ASME SEC I & VIII / FORM VI IBR Approved
                  </span>
                  <Link 
                    to={`/products?category=${encodeURIComponent(idx === 1 || idx === 2 ? 'Steam Boilers' : idx === 0 || idx === 4 ? 'Thermic Fluid Heaters' : 'All')}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1C5CA8] hover:underline"
                  >
                    <span>Inspect suitable models</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Informative Callout strip */}
        <div className="bg-[#0D1B2A] text-white p-6 md:p-8 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-9 space-y-2 text-left">
            <h4 className="font-heading font-extrabold text-lg text-white">Ready to consult on a custom plant layout?</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-3xl">
              Our engineering division collaborates with your technical team to draft efficient steam distribution grids, optimal boiler house piping layouts, and heat recovery integration maps tailored to your exact site layout.
            </p>
          </div>
          <div className="md:col-span-3 text-right">
            <Link 
              to="/request-quote"
              className="inline-block w-full text-center px-4 py-2.5 bg-[#1C5CA8] hover:bg-[#2F7BD4] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition"
            >
              Start layout consultation
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

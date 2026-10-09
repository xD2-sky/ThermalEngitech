import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

interface CompanyMapProps {
  className?: string;
}

export default function CompanyMap({ className = '' }: CompanyMapProps) {
  const companyName = "Thermal Engitech PVT. LTD.";
  const companyAddress = "12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435";

  // Place-specific embed (pinned to this exact listing, not a text-query
  // search result) — more reliable than the geocoded-query embed this
  // replaced.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4434.240571765147!2d72.737!3d22.962192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a85d11548f%3A0xc0cafeb8cd30a973!2sThermal%20Engitech%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1791532186131!5m2!1sen!2sin";
  const encodedAddress = encodeURIComponent(`${companyName}, ${companyAddress}`);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className={`bg-white border border-[#E1E4E3] rounded-lg overflow-hidden shadow-sm flex flex-col ${className}`} id="company-location-map">
      
      {/* Header section of the Map Container */}
      <div className="bg-[#0D1B2A] text-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1C5CA8]/20">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2 bg-[#2F7BD4]/10 rounded-lg text-[#2F7BD4] shrink-0 mt-0.5 sm:mt-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-bold text-sm text-white">{companyName}</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">{companyAddress}</p>
          </div>
        </div>
        
        {/* Navigation Action */}
        <a 
          href={directionsUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#1C5CA8] hover:bg-[#1C5CA8]/85 text-white font-bold text-xs uppercase tracking-wide rounded-lg flex items-center justify-center gap-1.5 transition whitespace-nowrap self-stretch sm:self-auto"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Interactive Google Maps iframe — pinned to the exact listing */}
      <div className="relative w-full h-[420px] md:h-[560px] bg-panel">
        <iframe
          title="Thermal Engitech PVT. LTD. Location Map"
          src={mapEmbedUrl}
          className="w-full h-full border-0 grayscale-[15%] brightness-100 contrast-[105%]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        
        {/* Subtle decorative overlay label for modern industrial aesthetics */}
        <div className="absolute bottom-4 left-4 bg-[#0D1B2A]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5">
          <Navigation className="w-3 h-3 text-[#2F7BD4] animate-pulse" />
          <span>Dhamatwan Heavy Industrial Facility</span>
        </div>
      </div>

    </div>
  );
}

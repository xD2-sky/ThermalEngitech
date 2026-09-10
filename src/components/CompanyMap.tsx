import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

interface CompanyMapProps {
  className?: string;
}

export default function CompanyMap({ className = '' }: CompanyMapProps) {
  const companyName = "Thermal Engitech PVT. LTD.";
  const companyAddress = "12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435";
  
  // Clean URL encoded query for the free standard Google Maps iframe embed
  const encodedAddress = encodeURIComponent(`${companyName}, ${companyAddress}`);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className={`bg-white border border-[#E1E4E3] rounded-lg overflow-hidden shadow-sm flex flex-col ${className}`} id="company-location-map">
      
      {/* Header section of the Map Container */}
      <div className="bg-[#0D1B2A] text-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#B3401F]/20">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2 bg-[#C1502B]/10 rounded-lg text-[#C1502B] shrink-0 mt-0.5 sm:mt-0">
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
          className="px-4 py-2 bg-[#B3401F] hover:bg-[#B3401F]/85 text-white font-bold text-xs uppercase tracking-wide rounded-lg flex items-center justify-center gap-1.5 transition whitespace-nowrap self-stretch sm:self-auto"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Free Interactive Google Maps iframe */}
      <div className="relative w-full h-[380px] md:h-[450px] bg-slate-100">
        <iframe
          title="Thermal Engitech PVT. LTD. Location Map"
          src={mapEmbedUrl}
          className="w-full h-full border-0 grayscale-[15%] brightness-100 contrast-[105%]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle decorative overlay label for modern industrial aesthetics */}
        <div className="absolute bottom-4 left-4 bg-[#0D1B2A]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5">
          <Navigation className="w-3 h-3 text-[#C1502B] animate-pulse" />
          <span>Dhamatwan Heavy Industrial Facility</span>
        </div>
      </div>

    </div>
  );
}

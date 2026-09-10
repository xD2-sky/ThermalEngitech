/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Video, MonitorPlay, AlertCircle } from 'lucide-react';
import { PRODUCT_VIDEOS, ProductVideoConfig } from '../config/videos';

interface ProductVideoShowcaseProps {
  productId: string;
}

export default function ProductVideoShowcase({ productId }: ProductVideoShowcaseProps) {
  // Retrieve the configured video state for this product
  const config: ProductVideoConfig | undefined = PRODUCT_VIDEOS[productId];

  // If there's no configuration for this specific product, default to "none"
  const videoType = config?.type || 'none';
  const videoSrc = config?.src || '';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-[#0D1B2A] flex items-center gap-2">
          <Video className="w-4 h-4 text-[#1C5CA8]" />
          <span>Product Video Showcase</span>
        </h3>
        <span className="text-[10px] font-mono font-semibold text-[#1C5CA8] bg-[#1C5CA8]/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
          Media Hub
        </span>
      </div>

      {/* Main Video Box Container matching the size and shadow of the main CAD layout box */}
      <div className="bg-white border border-[#E1E4E3] rounded-lg p-4 sm:p-6 shadow-xs relative overflow-hidden min-h-[300px] md:min-h-[360px] flex flex-col justify-between">
        
        {/* Render content based on active configuration */}
        {videoType === 'local' && videoSrc ? (
          <div className="w-full h-full min-h-[260px] md:min-h-[310px] rounded-xl overflow-hidden bg-black flex items-center justify-center">
            <video 
              src={videoSrc} 
              controls 
              className="w-full h-full max-h-[400px] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : videoType === 'youtube' && videoSrc ? (
          <div className="w-full h-full min-h-[260px] md:min-h-[310px] rounded-xl overflow-hidden bg-black aspect-video relative">
            <iframe
              src={videoSrc}
              title="Product Video Demonstration"
              className="absolute inset-0 w-full h-full border-0 rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          /* Premium Industrial Placeholder */
          <div className="relative flex-1 w-full rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 flex flex-col items-center justify-center text-center overflow-hidden min-h-[260px] md:min-h-[310px] group border border-slate-800">
            {/* Tech grid/radar background pattern */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2F7BD4_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

            {/* Pulsing visual circles in background */}
            <div className="absolute w-72 h-72 rounded-full bg-[#1C5CA8]/5 blur-3xl -top-12 -left-12 pointer-events-none" />
            <div className="absolute w-72 h-72 rounded-full bg-[#128C4A]/5 blur-3xl -bottom-12 -right-12 pointer-events-none" />

            {/* Central Play Button Visual */}
            <div className="relative z-10 mb-6 flex items-center justify-center">
              {/* Outer wave rings */}
              <div className="absolute inset-0 rounded-full bg-[#1C5CA8]/20 animate-ping opacity-60 scale-125" />
              <div className="absolute w-20 h-20 rounded-full bg-[#1C5CA8]/10 border border-[#1C5CA8]/30" />
              
              {/* Core play button circle */}
              <div className="relative w-16 h-16 rounded-full bg-[#1C5CA8] hover:bg-[#2F7BD4] transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer group-hover:scale-105">
                <Play className="w-7 h-7 text-white fill-white translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Titles & Message */}
            <div className="relative z-10 max-w-md space-y-2">
              <h4 className="text-white font-heading font-extrabold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2">
                <MonitorPlay className="w-5 h-5 text-[#2F7BD4]" />
                <span>Product Video Demonstration</span>
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-sm mx-auto">
                Video content can be added here in the future. Map an MP4 stream or YouTube embed link in <code className="text-[#2F7BD4] font-mono px-1 py-0.5 bg-white/5 rounded">src/config/videos.ts</code> to instantly activate live playback.
              </p>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[9px] font-mono uppercase text-slate-500 tracking-wider">
              <span>Status: Ready for Upload</span>
              <span className="flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-[#128C4A]" />
                Interactive Frame
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

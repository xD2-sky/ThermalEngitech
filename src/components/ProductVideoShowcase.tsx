/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Video } from 'lucide-react';
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

  // No video configured for this product yet — omit the section entirely
  // rather than showing a "coming soon" placeholder.
  if (videoType === 'none' || !videoSrc) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-[#0B1B2B] flex items-center gap-2">
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
        {videoType === 'local' ? (
          <div className="w-full h-full min-h-[260px] md:min-h-[310px] rounded-xl overflow-hidden bg-black flex items-center justify-center">
            <video
              src={videoSrc}
              controls
              className="w-full h-full max-h-[400px] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

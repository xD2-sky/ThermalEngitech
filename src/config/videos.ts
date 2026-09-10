/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductVideoConfig {
  type: 'none' | 'local' | 'youtube';
  src: string; // e.g., "/videos/boiler-demo.mp4" or "https://www.youtube.com/embed/dQw4w9WgXcQ"
}

/**
 * Configure your product videos here.
 * Supported types:
 * - "none": Shows the premium interactive/visual placeholder with play icon.
 * - "local": Renders an HTML5 `<video controls>` element using the local path in `src`.
 * - "youtube": Renders a responsive `<iframe>` using the YouTube embed URL in `src`.
 * 
 * Simply add a video file to /public/videos/ or get a YouTube embed URL,
 * then update the "type" and "src" fields for the corresponding product ID below.
 */
export const PRODUCT_VIDEOS: Record<string, ProductVideoConfig> = {
  // --- Steam Boilers ---
  'oil-gas-3pass-wetback': {
    type: 'none',
    src: '', // e.g., '/videos/oil-gas-3pass.mp4'
  },
  'solid-fuel-3pass-wetback': {
    type: 'none',
    src: '', // e.g., '/videos/solid-fuel-3pass.mp4'
  },
  'hybrid-combithermal': {
    type: 'none',
    src: '',
  },
  'smokecum-watertube-membrane': {
    type: 'none',
    src: '',
  },

  // --- Thermic Fluid Heaters ---
  'oil-gas-3pass-horizontal-heater': {
    type: 'none',
    src: '',
  },
  'solid-fuel-3pass-horizontal-heater': {
    type: 'none',
    src: '',
  },
  'solid-fuel-4pass-vertical-heater': {
    type: 'none',
    src: '',
  }
};

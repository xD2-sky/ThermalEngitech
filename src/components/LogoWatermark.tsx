/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

type WatermarkPosition = 'left' | 'right' | 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

interface LogoWatermarkProps {
  /** Which edge the oversized logo is anchored to and cropped by. */
  position?: WatermarkPosition;
  /** Opacity of the mark — kept very low so it reads as texture, not a logo. */
  opacity?: number;
  /** Rendered width in px before cropping; height follows the logo's own ratio. */
  size?: number;
}

/**
 * Large, low-opacity Thermal Engitech logo mark used as a background texture on
 * light-blue sections — never a centered watermark. The parent section must be
 * `relative overflow-hidden` so this bleeds off the edge rather than sitting
 * fully inside it. Position/size vary per section so the site doesn't feel
 * like the same graphic repeated everywhere.
 */
export default function LogoWatermark({ position = 'left', opacity = 0.05, size = 900 }: LogoWatermarkProps) {
  const base = import.meta.env.BASE_URL;

  const positionStyle: React.CSSProperties = {
    left: { left: -size * 0.32, top: '50%', transform: 'translateY(-50%)' },
    right: { right: -size * 0.28, top: '50%', transform: 'translateY(-50%)' },
    'bottom-right': { right: -size * 0.22, bottom: -size * 0.28 },
    'bottom-left': { left: -size * 0.28, bottom: -size * 0.22 },
    'top-right': { right: -size * 0.18, top: -size * 0.22 },
    'top-left': { left: -size * 0.22, top: -size * 0.18 },
  }[position];

  return (
    <img
      src={`${base}images/brand/logo-mark.png`}
      alt=""
      aria-hidden="true"
      className="absolute pointer-events-none select-none"
      style={{ width: size, height: 'auto', opacity, ...positionStyle }}
    />
  );
}

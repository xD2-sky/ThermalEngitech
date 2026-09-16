/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Decorative rising-steam overlay for page hero banners. Purely visual
 * (aria-hidden, non-interactive) and pauses under prefers-reduced-motion
 * via the global rule in index.css.
 */
import React from 'react';

export default function HeroSteam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <span className="steam-plume steam-1" />
      <span className="steam-plume steam-3" />
      <span className="steam-plume steam-4" />
    </div>
  );
}

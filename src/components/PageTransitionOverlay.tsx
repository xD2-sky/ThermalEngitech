/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

/**
 * Full-viewport curtain shown for a fixed window around a route change (see
 * AppShell in App.tsx) — covers the brief gap where the old page has faded
 * out and the new one hasn't finished fading in, replacing what would
 * otherwise read as a flash of blank page with the brand mark forming in
 * place via a left-to-right reveal.
 */
export default function PageTransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FBFBFC] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="w-32 h-32 sm:w-44 sm:h-44 drop-shadow-[0_8px_24px_rgba(28,92,168,0.18)]"
        initial={{ scale: 0.9, clipPath: 'inset(0 100% 0 0)' }}
        animate={{ scale: 1, clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/brand/logo-mark.png`}
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

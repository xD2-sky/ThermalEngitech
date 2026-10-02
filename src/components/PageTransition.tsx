/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Layout route wrapping every page's <Outlet/>. App.tsx keys <Routes> by
 * location.pathname inside <AnimatePresence>, which remounts this component
 * on every navigation — the motion.div below is what AnimatePresence actually
 * animates in/out, using the same ease curve as the rest of the site's
 * scroll-reveals (see Reveal.tsx) so a page change reads as part of one
 * consistent motion language rather than a second, different effect.
 */
export default function PageTransition() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Outlet />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      <Outlet />
    </motion.div>
  );
}

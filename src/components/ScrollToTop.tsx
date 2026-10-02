/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect, not useEffect: flushes before paint, so the reset lands
  // in the same frame as the new page's content and the transition overlay
  // (see AppShell in App.tsx) instead of a frame after — otherwise the new
  // page could paint once at the old scroll position before snapping up.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const STORAGE_PREFIX = 'te-page-animated:';

/**
 * True if the current route has already played its scroll-entrance
 * animations once this browser session (sessionStorage, so it resets per
 * tab/session but survives client-side route navigation). Components use
 * this to skip straight to the final, visible state instead of replaying
 * fade/slide-in animations every time a visitor navigates back to a page
 * they've already seen.
 *
 * The lazy useState initializer reads sessionStorage synchronously on the
 * very first render of a page, so there's no flash of an animation that
 * then gets skipped — the decision is made before anything paints.
 */
export default function usePageAnimated(): boolean {
  const { pathname } = useLocation();
  const [alreadyAnimated] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_PREFIX + pathname) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_PREFIX + pathname, '1');
    } catch {
      // Private browsing / storage disabled — animations will just replay
      // on back-navigation instead of erroring.
    }
  }, [pathname]);

  return alreadyAnimated;
}

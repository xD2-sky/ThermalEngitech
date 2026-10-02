/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from '../lib/analytics';

/**
 * Fires a GA4 page_view on every route change, including the very first one
 * — see src/lib/analytics.ts for why this is manual instead of relying on
 * gtag's own automatic pageview. Deferred to the next tick so it reads
 * document.title after the page's own useDocumentMeta call has set it,
 * rather than racing it.
 */
export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;
    const timeout = window.setTimeout(() => {
      trackPageview(path, document.title);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.search]);

  return null;
}

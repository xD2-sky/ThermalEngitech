/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * GA4 fires an automatic page_view once, when gtag.js first loads — fine for
 * a traditional multi-page site, but this is a single-page app: navigating
 * between routes never reloads the page, so that automatic event is the only
 * pageview GA4 would ever see for an entire visit. index.html's gtag config
 * turns it off (send_page_view: false) and every navigation — including the
 * first — is reported explicitly from here instead, per Google's own
 * documented pattern for SPAs.
 *
 * Safe to call even if gtag never loaded (ad blocker, offline, etc.) — it
 * just silently no-ops rather than throwing.
 */
export function trackPageview(path: string, title: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.origin + path,
    page_path: path,
  });
}

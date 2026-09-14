import { useEffect } from 'react';

/**
 * Sets document.title and the <meta name="description"> tag for the current page.
 * This is a client-side-only SPA (no server rendering), so this covers what's
 * achievable within that constraint: correct titles/descriptions for browser
 * tabs, bookmarks, browser history, and any crawler that executes JS. It does
 * NOT provide true pre-rendered SEO — that would need a server-rendering or
 * static-generation setup (e.g. Next.js), which is a separate, bigger change.
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const fullTitle = `${title} | Thermal Engitech Pvt. Ltd.`;
    document.title = fullTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', fullTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);
  }, [title, description]);
}

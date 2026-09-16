import { useEffect } from 'react';
import { SITE } from '../config/site';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface MetaOptions {
  /** Clean path for canonical/og:url. Defaults to the current pathname. */
  path?: string;
  /** Absolute or root-relative OG/Twitter image. */
  image?: string;
  /** Page-level structured data (JSON-LD). */
  jsonLd?: JsonLd;
  /** Open Graph type. */
  type?: string;
  noindex?: boolean;
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Client-side head manager for this static SPA. Combined with the build-time
 * prerender step (each route is rendered by headless Chrome and its resulting
 * <head> is saved to a static .html file), this delivers real, crawlable
 * per-page titles, descriptions, canonicals, Open Graph / Twitter cards and
 * JSON-LD — no server runtime required.
 */
export function useDocumentMeta(title: string, description: string, options: MetaOptions = {}) {
  const { path, image, jsonLd, type = 'website', noindex = false } = options;

  useEffect(() => {
    const fullTitle = `${title} | ${SITE.name}`;
    document.title = fullTitle;

    const pathname = path ?? window.location.pathname;
    const canonical = `${SITE.url}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    const rawImage = image ?? SITE.ogImage;
    const ogImage = rawImage.startsWith('http') ? rawImage : `${SITE.url}${rawImage}`;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow');
    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE.name);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    const existing = document.getElementById('page-jsonld');
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, noindex, JSON.stringify(jsonLd ?? null)]);
}

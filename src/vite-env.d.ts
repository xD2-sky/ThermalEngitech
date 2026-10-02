/// <reference types="vite/client" />

// The GA4 gtag.js loader in index.html defines these on window at runtime.
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export {};

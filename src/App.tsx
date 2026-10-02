/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransitionOverlay from './components/PageTransitionOverlay';
import { SITE, WHATSAPP_LINK } from './config/site';

// How long the branded logo curtain stays fully up before it starts fading
// out (PageTransitionOverlay's own exit transition takes another ~0.16s on
// top of this). The page underneath has no animation of its own — it swaps
// instantly while fully hidden under the overlay's always-opaque backdrop —
// so this only needs to cover the logo's own reveal (~0.28s) plus a brief
// rest, landing the whole sequence at roughly half a second.
const TRANSITION_OVERLAY_MS = 380;

// Page components imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Manufacturing from './pages/Manufacturing';
import Certifications from './pages/Certifications';
import ContactUs from './pages/ContactUs';
import RequestQuote from './pages/RequestQuote';
import NotFound from './pages/NotFound';

import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const [showTransitionOverlay, setShowTransitionOverlay] = useState(false);
  const prevPathname = useRef(location.pathname);

  // useLayoutEffect, not useEffect: <Routes> below already re-renders with
  // the NEW page's content in this same render (it reads useLocation() too),
  // so a plain useEffect here would only flip the overlay on *after* that
  // content has already committed — and possibly after the browser has
  // already painted it, flashing the new page bare for a frame before the
  // overlay catches up to cover it. Flushing synchronously before paint
  // (same fix already used in Navbar.tsx for an identical class of bug)
  // guarantees the overlay is in the very first frame that shows anything
  // different, so there's nothing underneath left exposed to flicker.
  useLayoutEffect(() => {
    if (shouldReduceMotion || prevPathname.current === location.pathname) {
      prevPathname.current = location.pathname;
      return;
    }
    prevPathname.current = location.pathname;
    setShowTransitionOverlay(true);
    const timeout = window.setTimeout(() => setShowTransitionOverlay(false), TRANSITION_OVERLAY_MS);
    return () => window.clearTimeout(timeout);
  }, [location.pathname, shouldReduceMotion]);

  return (
    <>
      {/* Scroll restorer handles page switches */}
      <ScrollToTop />

      <AnimatePresence>
        {showTransitionOverlay && <PageTransitionOverlay key="transition-overlay" />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#FBFBFC] text-[#17222E] flex flex-col justify-between select-text scroll-smooth selection:bg-[#2F7BD4]/25">

        {/* Persistent Fixed Header / Navbar — out of flow, overlays every page's top section */}
        <Navbar />

        {/* Dynamic Route Switcher Panel — no top padding, so every page's own top
            section starts at y:0 behind the transparent navbar, matching Hero.
            Plain, unanimated route swap: the branded overlay above is the
            only thing that visibly moves during a navigation, so there's
            nothing for a second, independently-timed animation here to fall
            out of sync with. */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/category/:slug" element={<ProductCategory />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* ================= FIXED FLOATING LEAD GENERATION WIDGETS ================= */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 items-end font-sans">

          {/* Call Now button */}
          <a
            href={`tel:${SITE.phonePrimaryTel}`}
            data-testid="floating-call-btn"
            className="flex items-center gap-2 px-3.5 py-2.5 bg-[#0B1B2B] hover:bg-[#1C5CA8] text-white text-xs font-semibold rounded-full shadow-lg transition-colors duration-200 group border border-white/15"
            title="Call our engineering coordinator"
          >
            <Phone className="w-4 h-4 text-[#7FB2E4]" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[145px] transition-all duration-300 ease-in-out whitespace-nowrap">
              {SITE.phonePrimaryDisplay}
            </span>
          </a>

          {/* Sticky WhatsApp button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="floating-whatsapp-btn"
            className="flex items-center gap-2.5 px-4 py-3 bg-[#1F9D57] hover:bg-[#1B8B4D] text-white font-semibold text-sm rounded-full shadow-lg transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
          </a>

        </div>

        {/* Footer Block */}
        <Footer />

      </div>
    </>
  );
}

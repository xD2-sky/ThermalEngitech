/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import { SITE, WHATSAPP_LINK } from './config/site';

// Home stays in the main bundle (almost every visit starts here); every other
// route is its own lazy chunk so a visitor only downloads the page they
// actually land on, instead of the whole site's code up front.
import Home from './pages/Home';
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Products = lazy(() => import('./pages/Products'));
const ProductCategory = lazy(() => import('./pages/ProductCategory'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Manufacturing = lazy(() => import('./pages/Manufacturing'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const RequestQuote = lazy(() => import('./pages/RequestQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));

import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Scroll restorer handles page switches */}
      <ScrollToTop />
      <Analytics />

      <div className="min-h-screen bg-[#FBFBFC] text-[#17222E] flex flex-col justify-between select-text scroll-smooth selection:bg-[#2F7BD4]/25">
        
        {/* Persistent Fixed Header / Navbar — out of flow, overlays every page's top section */}
        <Navbar />

        {/* Dynamic Route Switcher Panel — no top padding, so every page's own top
            section starts at y:0 behind the transparent navbar, matching Hero */}
        <main className="flex-1 w-full">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/category/:slug" element={<ProductCategory />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* ================= FIXED FLOATING LEAD GENERATION WIDGETS ================= */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 items-end font-sans">

          {/* Call Now button */}
          <a
            href={`tel:${SITE.phonePrimaryTel}`}
            data-testid="floating-call-btn"
            className="flex items-center gap-2 min-h-11 px-3.5 py-2.5 bg-[#0B1B2B] hover:bg-[#1C5CA8] focus-visible:bg-[#1C5CA8] text-white text-xs font-semibold rounded-full shadow-lg transition-colors duration-200 group border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FB2E4] focus-visible:ring-offset-2"
            title="Call our engineering coordinator"
          >
            <Phone className="w-4 h-4 text-[#7FB2E4]" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[145px] group-focus-visible:max-w-[145px] transition-all duration-300 ease-in-out whitespace-nowrap">
              {SITE.phonePrimaryDisplay}
            </span>
          </a>

          {/* Sticky WhatsApp button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="floating-whatsapp-btn"
            className="flex items-center gap-2.5 min-h-11 px-4 py-3 bg-[#1F9D57] hover:bg-[#1B8B4D] focus-visible:bg-[#1B8B4D] text-white font-semibold text-sm rounded-full shadow-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F9D57]"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
          </a>

        </div>

        {/* Footer Block */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

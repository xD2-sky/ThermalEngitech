/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page components imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Industries from './pages/Industries';
import Manufacturing from './pages/Manufacturing';
import Certifications from './pages/Certifications';
import ContactUs from './pages/ContactUs';
import RequestQuote from './pages/RequestQuote';

import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  return (
    <HashRouter>
      {/* Scroll restorer handles page switches */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FBFBFC] text-[#17222E] flex flex-col justify-between select-text scroll-smooth selection:bg-[#2F7BD4]/25">
        
        {/* Persistent Sticky Header / Navbar */}
        <Navbar />

        {/* Dynamic Route Switcher Panel */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/request-quote" element={<RequestQuote />} />
          </Routes>
        </main>

        {/* ================= FIXED FLOATING LEAD GENERATION WIDGETS ================= */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 items-end font-sans">

          {/* Call Now button */}
          <a
            href="tel:+919825014820"
            className="flex items-center gap-2 px-3.5 py-2.5 bg-[#0B1B2B] hover:bg-[#1C5CA8] text-white text-xs font-semibold rounded-full shadow-lg transition-colors duration-200 group border border-white/15"
            title="Call our engineering coordinator"
          >
            <Phone className="w-4 h-4 text-[#7FB2E4]" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[145px] transition-all duration-300 ease-in-out whitespace-nowrap">
              +91 98250 14820
            </span>
          </a>

          {/* Sticky WhatsApp button */}
          <a
            href="https://wa.me/919825014820?text=Hello%20Thermal%20Engitech%20team,%20I%2527m%20interested%20in%20a%20technical%20sizing%20discussion%20for%20our%20plant."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-3 bg-[#1F9D57] hover:bg-[#1B8B4D] text-white font-semibold text-sm rounded-full shadow-lg transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Chat on WhatsApp</span>
          </a>

        </div>

        {/* Footer Block */}
        <Footer />

      </div>
    </HashRouter>
  );
}

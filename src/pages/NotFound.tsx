/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Reveal from '../components/Reveal';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  useDocumentMeta(
    'Page Not Found',
    'The page you are looking for does not exist or has been moved.'
  );

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-24">
      <Reveal className="max-w-xl w-full text-center space-y-6">
        <div className="mx-auto w-14 h-14 bg-[#1C5CA8]/10 rounded-xl flex items-center justify-center text-[#1C5CA8]">
          <Compass className="w-7 h-7" />
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#1C5CA8]">
            Error 404
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0B1B2B]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#47566A] leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. Check the address, or head back to a page that does.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B2A] hover:bg-[#1C5CA8] text-white font-heading font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E1E4E3] hover:border-[#1C5CA8]/40 text-[#0B1B2B] font-heading font-semibold text-xs uppercase tracking-wider rounded-lg transition duration-200"
          >
            <span>View Products</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

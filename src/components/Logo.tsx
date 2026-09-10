import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-11 w-14" }: LogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <svg
        className={className}
        viewBox="0 0 300 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        referrerPolicy="no-referrer"
      >
        {/* Royal Blue / S-Curve Group (representing steam/fluid input) */}
        <g stroke="#4285F4" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="miter">
          <path d="M 25 74 L 110 74 C 140 74 140 20 170 20 L 275 20" />
          <path d="M 25 92 L 110 92 C 140 92 140 38 170 38 L 275 38" />
          <path d="M 25 110 L 110 110 C 140 110 140 56 170 56 L 275 56" />
        </g>

        {/* Light Blue / Curving Stem Group (representing thermal exchange/flow) */}
        <g stroke="#54CEFC" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="miter">
          <path d="M 130 205 L 130 170 A 96 96 0 0 1 226 74 L 275 74" />
          <path d="M 148 205 L 148 170 A 78 78 0 0 1 226 92 L 275 92" />
          <path d="M 166 205 L 166 170 A 60 60 0 0 1 226 110 L 275 110" />
        </g>
      </svg>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}images/brand/logo-mark.png`}
      alt="Thermal Engitech Logo"
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}


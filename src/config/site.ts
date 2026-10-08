/**
 * Central company / SEO constants — single source of truth used across the
 * site (contact blocks, structured data, meta tags, sitemap).
 */
export const SITE = {
  url: 'https://thermalengitech.com',
  name: 'Thermal Engitech Pvt. Ltd.',
  shortName: 'Thermal Engitech',
  legalName: 'Thermal Engitech Pvt. Ltd.',
  tagline: 'Industrial Steam Boilers & Thermic Fluid Heaters',
  description:
    'Thermal Engitech Pvt. Ltd. manufactures steam boilers, thermic fluid heaters, heat exchangers and process-heat systems in Dhamatwan, Gujarat — IBR, ASME and ISO 9001:2015 certified.',

  // Contact — verified from the company's own records
  phonePrimaryDisplay: '+91 70693 06431',
  phonePrimaryTel: '+917069306431',
  whatsapp: '917069306431',
  email: 'info@thermalengitech.com',

  address: {
    line: '12B, Shrey Industrial Park, Road, Dhamatwan, Undrel',
    city: 'Ahmedabad',
    region: 'Gujarat',
    postalCode: '382435',
    country: 'IN',
    full: '12B, Shrey Industrial Park, Road, Dhamatwan, Undrel, Gujarat 382435',
    geo: { lat: 23.0716, lng: 72.7361 },
  },

  ogImage: '/images/hero-boiler-room.jpg',
} as const;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  'Hello, I would like to request a technical sizing consultation for our plant. Could someone from your engineering team assist?'
)}`;

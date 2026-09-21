# PRD — Thermal Engitech Premium Landing Page (Preview)

## Original problem statement
"Build a landing page: https://xd2-sky.github.io/ThermalEngitech/ — suggest what I can improve or change to make it look more premium, modern, and professional. Focus on overall design, colors, images, layout, typography, spacing, and consistency."
User follow-up: build a PREVIEW version first (not final website), reusing the existing GitHub repo code/content (xD2-sky/ThermalEngitech), for design review before further changes.

## User personas
- Plant/factory owners & purchase managers in process industries (India + export) evaluating boiler/heater vendors
- The site owner (developer) reviewing a design demo before applying it to the live site

## Core requirements (static)
- Single-page landing demo reusing real company content (products, industries, certifications, contact)
- Light, premium, editorial industrial aesthetic: white base, ink navy text, industrial blue, single red-orange accent
- No backend, no forms — contact via WhatsApp / phone / email only
- Written suggestions report delivered alongside the demo

## Architecture
- Frontend-only: React (CRA scaffold) + Tailwind + framer-motion + lenis smooth scroll
- Components in /app/frontend/src/components/landing/ (data.js, Reveal, Navbar, Hero, StatsStrip, Marquee, About, Products, WhyUs, Industries, Certifications, CtaBand, Footer, FloatingActions)
- Real images copied from the GitHub repo into /app/frontend/public/images/
- Report: /app/thermal-engitech-suggestions.md
- Backend (FastAPI) untouched; not used by the landing page

## Implemented (2026-07-21)
- Full landing page preview: sticky glass nav, kinetic hero with masked line reveal + parallax photo, animated stats strip (12+ / 1,200+ / 100%), dark editorial marquee, numbered manifesto About chapters, 4 photographic product cards, Why-Us grid with floating stat card, 14-industry chip grid, certifications cards, navy consultation CTA band, rich footer, floating WhatsApp/call buttons
- SEO: Seo component with title/description/OG/JSON-LD Organization, llms.txt, single h1, alt text
- Suggestions report at /app/thermal-engitech-suggestions.md

## Credentials
- No auth / no credentials needed (public landing page)

## Backlog
- P0: User design review → iterate on feedback
- P1: Apply approved design to the real multi-page site (products, about, certifications, request-quote sub-pages)
- P1: Product detail modals/drawers with spec tables
- P2: Quote request form (needs backend + email integration)
- P2: Google Map of the Dhamatwan works (repo already has map component)
- P2: Performance pass (image srcset/webp), deployment to GitHub Pages

## Next tasks
1. Collect user review feedback on the preview
2. Adjust palette/typography/sections per feedback
3. Port final design back to the Vite repo structure if the user wants it deployable on GitHub Pages

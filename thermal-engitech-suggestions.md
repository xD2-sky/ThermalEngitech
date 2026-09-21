# Thermal Engitech — Design Improvement Report
**Current site:** https://xd2-sky.github.io/ThermalEngitech/
**Goal:** more premium, modern, professional. Each point below is implemented in the live preview demo.

## 1. Color
- **Problem:** Heavy dark-navy dominates large sections; red accents appear inconsistently; overall contrast feels heavy rather than premium.
- **Fix:** Flip to a light-first system — crisp white base (#FFFFFF), soft paper sections (#F8FAFC), deep ink navy (#0A1128) for text, one industrial blue (#1D4ED8) for primary actions, and a single disciplined red-orange signal accent (#E04F16) reserved for key moments (stats suffixes, CTA band, hover markers). Dark navy is used only twice, deliberately: the marquee strip and the consultation band — so it reads as contrast, not the default.

## 2. Typography
- **Problem:** Single generic sans across everything; headings lack character; no typographic hierarchy for technical metadata.
- **Fix:** Three-role system — Space Grotesk (display, uppercase, tight tracking) for headlines; Plus Jakarta Sans for body; JetBrains Mono in small uppercase tracking-wide for certification badges, chapter numbers, spec tags and labels. Mono labels are what make an engineering brand feel engineered.

## 3. Layout & Spacing
- **Problem:** Even, template-like spacing; sections blur together; cards and grids are uniform.
- **Fix:** 2–3x more vertical breathing room (py-20 to py-28 sections), a strict max-w-7xl container, and alternating section rhythms (white → paper → dark band → white). Asymmetric two-column editorial layouts replace centered stacks.

## 4. Imagery
- **Problem:** Mixed image treatments; product renders and photos compete; backgrounds feel decorative rather than intentional.
- **Fix:** One consistent treatment — real facility photography framed in rounded-2xl cards, subtle hover zoom (scale-105/110 over 700ms), and floating spec-style caption cards layered on top. Product shots get numbered mono badges (01–04) so the range reads as a catalogue.

## 5. Hero
- **Problem:** Static headline, generic CTA row, weak first impression.
- **Fix:** Kinetic hero — masked line-by-line headline reveal on load, staggered subtitle/CTA entrance, parallax on the hero photograph while scrolling, and a glass certification pill (ISO · ASME · IBR) above the headline. One accent-colored word ("running.") carries the brand voice.

## 6. Motion & Interaction
- **Problem:** Page feels static; hover states minimal.
- **Fix:** Lenis smooth momentum scrolling, scroll-triggered fade/rise reveals on every section, animated stat counters (12+ / 1,200+ / 100%), underline reveals on nav links, card lift + border glow + arrow slide on hover, and one slow editorial marquee (certifications & capabilities) as a design accent.

## 7. Structure & Consistency
- **Problem:** About/Why-us content is a flat block; industries are a plain list; certifications lack presence.
- **Fix:** About reframed as numbered manifesto chapters (01 Engineering foundation / 02 In-house precision / 03 Built to keep running). Industries become a numbered 7-column chip grid. Certifications become four equal compliance cards with a consistent icon + code + label pattern. One H1, consistent mono labels atop every section ("About Thermal Engitech", "Our Products", …).

## 8. Contact & Conversion
- **Problem:** Contact paths are scattered.
- **Fix:** Persistent conversion layer — sticky glass nav with phone number + "Request a quote" pill, deep-navy consultation band with call + WhatsApp actions, rich footer with full address/phones/email, and a floating WhatsApp/call action pair.

## Quick wins to port back to the current site (if not adopting the demo)
1. Replace red with a single restrained accent and reserve it for CTAs and key numbers.
2. Add a monospace label font for badges and section eyebrows.
3. Increase section padding; let dark navy appear in only 1–2 bands.
4. Give every section the same label → headline → content pattern.
5. Add subtle hover lifts and image zooms on product cards.

---
version: alpha
name: Thermal-Engitech-design-analysis
description: "An industrial-engineering marketing canvas built around a single confident brand blue (#1C5CA8) on deep navy ink (#0B1B2B) and clean white. Manrope carries display type at extrabold weight; Inter carries body copy. Corners stay flat and rectangular (rounded-md at most) — no pills, no heavy shadows. Card hierarchy is carried by 1px hairline borders in a grid, not elevation. The signature device is a diagonal glass-panel accent in the navbar — three skewed, layered blue shapes with a glowing edge-highlight, echoing the angled geometry of pipework and structural steel. Copy is trimmed to scannable single sentences; technical claims are drawn from real design codes and real shop-floor specs, never invented. Ember red (#B3401F) exists in the system but is reserved exclusively for literal equipment paint color and semantic hot-flow diagram arrows — never for UI chrome."

colors:
  primary: "#1C5CA8"
  primary-hover: "#2F7BD4"
  primary-pressed: "#103E72"
  on-primary: "#ffffff"
  sky-accent: "#7FB2E4"
  ink: "#0B1B2B"
  ink-2: "#12293E"
  ink-3: "#081420"
  body-text: "#17222E"
  slate: "#4B5A6B"
  slate-soft: "#7C8A9A"
  canvas: "#FFFFFF"
  paper: "#FBFBFC"
  panel: "#F1F1ED"
  hairline: "#E1E4E3"
  inverse-canvas: "#0B1B2B"
  inverse-ink-muted: "#94A3B8"
  ember-reserved: "#B3401F"
  whatsapp-green: "#128C4A"
  semantic-success: "#10B981"
  semantic-error: "#EF4444"

typography:
  display-xl:
    fontFamily: Manrope
    fontSize: clamp(2.1rem, 1.5rem + 2.25vw, 3.75rem)
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.028em
  display-lg:
    fontFamily: Manrope
    fontSize: 2.6rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.021em
  headline:
    fontFamily: Manrope
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.021em
  card-title:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  subhead:
    fontFamily: Inter
    fontSize: clamp(0.95rem, 0.88rem + 0.3vw, 1.15rem)
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  body:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  eyebrow:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.18em
  data-mono:
    fontFamily: IBM Plex Mono
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    hoverBackgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  button-dark-secondary:
    backgroundColor: "{colors.ink}"
    hoverBackgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-outline:
    backgroundColor: "transparent"
    borderColor: "rgba(255,255,255,0.25)"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  hairline-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 24px
    note: "sits inside a gap-px grid on {colors.hairline} background — the gap itself is the border"
  dark-panel-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  eyebrow-label:
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    textTransform: uppercase
  eyebrow-label-on-dark:
    textColor: "{colors.sky-accent}"
    typography: "{typography.eyebrow}"
    textTransform: uppercase
  nav-diagonal-panel:
    layer1Background: "{colors.primary}"
    layer1Opacity: "0.6 default / 0.8 scrolled"
    layer2Background: "linear-gradient(135deg, rgba(18,41,62,0.6), rgba(11,27,43,0.6))"
    layer3Background: "linear-gradient(135deg, rgba(11,27,43,0.8), rgba(18,41,62,0.8), rgba(8,20,32,0.8))"
    edgeGlow: "linear-gradient(180deg, rgba(127,178,228,0.95), rgba(47,123,212,0.7), rgba(127,178,228,0.95))"
    clipPath: "polygon(36px 0, 100% 0, 100% 100%, 0% 100%)"
    note: "three skewed layers offset by 0/8/16px, shrink-wrapped tightly to its own content (phone + CTA), not independently positioned across the bar"
  navbar-glass-scrolled:
    background: "linear-gradient(135deg, rgba(18,41,62,0.94) 0%, rgba(28,92,168,0.32) 45%, rgba(8,20,32,0.96) 100%)"
    backdropFilter: blur(14px)
    borderColor: "rgba(127,178,228,0.2)"
  spec-badge:
    backgroundColor: "transparent"
    borderColor: "rgba(255,255,255,0.15)"
    textColor: "#e2e8f0"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
---

## Overview

Thermal Engitech's marketing system reads as **precision engineering, not generic SaaS**. The dominant surface is white (`{colors.canvas}`) with deep navy ink (`{colors.ink}` #0B1B2B) for dark panels, the hero, the navbar, and the footer. A single brand blue (`{colors.primary}` #1C5CA8) carries every CTA, link, and active state — there is no second competing accent in normal UI chrome.

The defining structural choice is **hairline-grid cards**: instead of individual bordered/shadowed boxes, card grids sit on a 1px `{colors.hairline}` background with `gap-px`, so the gap itself becomes the border. This reads as a spec-sheet or technical-drawing grid rather than a stack of SaaS cards, which matters for a company whose actual product is precision-fabricated steel.

**Manrope** (extrabold, 700–800) carries every headline; **Inter** carries body copy and UI text. A third face, **IBM Plex Mono**, is reserved exclusively for genuine technical/numeric data (spec tables, model codes) — never used decoratively. A global rule normalizes any element combining `font-mono` + `uppercase` back into Inter at 600 weight with wide tracking, so accidental "fake mono" labels self-correct.

The signature brand device is the **navbar's diagonal glass panel** — three layered, skewed blue-navy shapes with a glowing edge-highlight, shrink-wrapped tightly around the phone number and "Request a quote" button. It's the one place the system allows itself an angled, non-rectangular flourish; everywhere else, geometry stays flat and rectangular.

**Key Characteristics:**
- **One brand blue, used confidently**: `{colors.primary}` #1C5CA8 is the only chromatic accent in UI chrome. Ember red exists in the palette but is reserved for literal equipment paint and diagram semantics — never buttons, links, or backgrounds.
- **Hairline-grid cards, not shadow cards**: `gap-px bg-[hairline] border border-[hairline]` with white cells is the default card-grid pattern across the whole site.
- **Flat, rectangular geometry**: `rounded-md` is the ceiling for buttons and cards. No pill buttons, no `rounded-xl`/`rounded-2xl` soft-SaaS corners.
- **Fluid, not stepped, hero typography**: the hero uses `clamp()` for every size (headline, body, buttons, stat numbers) so it scales continuously with viewport width instead of jumping at fixed breakpoints.
- **Sentence case everywhere in UI chrome**: buttons, nav links, and most labels are sentence case, not uppercase-tracked. The one deliberate exception is the small mono-style eyebrow label pattern above section headings.
- **Real technical content only**: certifications, design codes (ASME Sec VIII, IS-2825, IBR 1950, ISO-R-831, BS-2970, TEMA), and shop-floor specs are sourced from the company's actual documented capabilities — never invented specifics or unverified third-party claims.
- **Copy is trimmed to scannable single sentences.** Multi-sentence marketing paragraphs and sub-description text under bold labels were deliberately cut site-wide; the assumption is visitors skim and book a call if interested, not that they read paragraphs.

## Colors

> Established across the full build/iteration history of thermalengitech site (React + Vite + Tailwind v4).

### Brand & Accent
- **Primary** (`{colors.primary}`): The single brand accent. Every primary button, active nav-link underline, link hover, focus state.
- **Primary Hover** (`{colors.primary-hover}`): Hover/lighter state for primary buttons and dark-panel hover states.
- **Primary Pressed** (`{colors.primary-pressed}`): Deep pressed/active state, rarely used directly in UI (mostly reserved for future use).
- **Sky Accent** (`{colors.sky-accent}`): Light blue for use *on dark backgrounds only* — icons on navy panels, "Engitech" wordmark variants on dark, eyebrow labels on dark hero/CTA sections.

### Surface
- **Canvas** (`{colors.canvas}`): Default page background, pure white.
- **Paper** (`{colors.paper}`): Very slightly off-white variant, interchangeable with canvas in practice.
- **Panel** (`{colors.panel}`): Warm light gray — alternate section backgrounds (e.g. the "Featured Capabilities" band on the homepage).
- **Ink** (`{colors.ink}`): Deep navy — hero, navbar, footer, dark CTA panels. The one dark surface in the system.
- **Ink 2 / Ink 3**: Gradient stops used alongside `{colors.ink}` for subtle depth on dark panels and the navbar's scrolled-glass state — never flat solid colors on their own.
- **Hairline** (`{colors.hairline}`): The border/grid-gap color used throughout card grids and dividers.

### Text
- **Body Text** (`{colors.body-text}`): Default body copy color on white/light surfaces.
- **Slate / Slate Soft**: Secondary and tertiary text on light surfaces — card descriptions, muted labels.
- **Inverse Ink Muted**: Body text and secondary labels on dark (`{colors.ink}`) surfaces.

### Reserved / Semantic — do not use as chrome
- **Ember** (`{colors.ember-reserved}` #B3401F): Reserved exclusively for (a) the literal red paint color in isometric/schematic product illustrations depicting real equipment, and (b) "hot flow" direction arrows in technical diagrams, matching the engineering convention of red = hot. **Never** used for buttons, links, backgrounds, or any other UI chrome. This is the single most important rule in the system — the site went through an explicit red-to-blue migration early in its history specifically to eliminate ember from UI chrome.
- **WhatsApp Green**: Used only for the WhatsApp floating action button, matching WhatsApp's own brand color for recognizability.
- **Semantic Success / Error**: Reserved for genuine status states (form validation, success confirmations) — not used decoratively.

## Typography

### Font Families

- **Manrope** — All display type and headings. Weight 700–800 (bold to extrabold). Loaded at weights 500/600/700/800.
- **Inter** — All body copy, UI labels, buttons, nav links. Loaded at weights 400/450/500/600/700.
- **IBM Plex Mono** — Reserved strictly for genuine numeric/technical data (spec-table values, model codes). Loaded at 400/500. Never used for decorative labels — see the `.font-mono.uppercase` normalization rule below.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | fluid, 34–60px | 800 | 1.08 | Hero headline only (uses `clamp()`, not fixed breakpoints) |
| `{typography.display-lg}` | ~42px | 700 | 1.05 | Section headings ("Our core product range," etc.) |
| `{typography.headline}` | 30px | 700 | 1.12 | Sub-section headings |
| `{typography.card-title}` | 18px | 700 | 1.2 | Card/feature titles |
| `{typography.subhead}` | fluid, 15–18px | 400 | 1.65 | Hero lead paragraph |
| `{typography.body}` | 14px | 400 | 1.6 | Default body copy |
| `{typography.body-sm}` | 12px | 400 | 1.5 | Card descriptions, secondary labels |
| `{typography.button}` | 14px | 600 | 1.2 | All button and CTA labels |
| `{typography.eyebrow}` | 11px | 600 | 1.2 | Small kicker labels above section headings |
| `{typography.data-mono}` | 12px | 500 | 1.4 | Genuine spec/data values only |

### Principles

- **Headings are always Manrope, always bold-to-extrabold.** A global CSS rule applies `font-family: var(--font-heading); font-weight: 700; letter-spacing: -0.021em` to every h1–h5 by default, so new headings inherit correct styling automatically without needing utility classes repeated everywhere.
- **The hero is fluid, not stepped.** Every size value in the hero — headline, body, badge, button padding/text, stat numbers, even the content column's max-width — uses `clamp(min, preferred, max)` so it scales continuously with viewport width. This was a deliberate late-stage correction after discrete Tailwind breakpoints (`text-4xl sm:text-5xl lg:...`) produced visible jumps rather than smooth scaling.
- **`.font-mono` + `.uppercase` together self-correct to Inter.** A global rule catches any element combining both classes and renders it in Inter at 600 weight with 0.14em tracking instead of true monospace — this exists because "fake mono eyebrow" labels kept appearing as an unintentional generic-AI tic; numeric data using `font-mono` alone is unaffected.
- **Sentence case is the default voice.** Buttons, nav links: sentence case, not uppercase-tracked. Eyebrow/kicker labels are the one place uppercase + tracking is intentional.

## Layout

### Spacing System

- Section vertical rhythm: `py-24` (or `pt-28 pb-24` where a hero/banner precedes) as the standard.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for page content; the navbar itself is a deliberate exception and spans full viewport width edge-to-edge.
- Card interior padding: 24px standard, 32px for larger dark-panel feature cards.

### Grid & Container

- Card grids default to `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` (or similar) collapsing progressively at each breakpoint, always down to a single column on mobile.
- The signature grid pattern is `gap-px bg-[hairline] border border-[hairline]` with white `bg-canvas` cells — this produces a 1px technical-grid line between and around every card without individually bordering each card.
- The navbar deliberately has **no max-width cap** — it spans the true viewport edge on every screen size, unlike the `max-w-7xl` content container used everywhere else.

### Whitespace Philosophy

Sections alternate between white (`{colors.canvas}`) and warm-gray (`{colors.panel}`) bands to create rhythm without needing large vertical gaps between every section — similar in spirit to a spec-sheet's alternating-row convention, reinforcing the "engineering document" feel rather than a marketing-site feel.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Body text, most surfaces |
| 1 (hairline) | 1px `{colors.hairline}` grid line | Default card-grid separation |
| 2 (dark panel) | Solid `{colors.ink}` background, no shadow | CTA panels, stat call-outs |
| 3 (scroll shadow) | `box-shadow: 0 4px 24px rgba(0,0,0,0.25)` | Navbar only, once scrolled |

The system resists heavy drop-shadow-based elevation. Depth is carried mainly by surface color change and hairline grid lines, closer to a technical-document aesthetic than a soft-SaaS card-stack aesthetic.

### Decorative Depth

- **Diagonal glass panel** (navbar): the one place the system allows layered, skewed, semi-transparent shapes with a glowing edge — see Components below.
- **Subtle blueprint grid texture**: a very faint (≈5% opacity) grid pattern, reserved for the dark hero section only — never spread to other sections.
- **Hero scrim**: a directional gradient over the hero photo (darkest behind the text on the left, lighter toward the right so the photo still reads) — not a flat overlay.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hairline-grid card cells |
| `{rounded.sm}` | 4px | Rarely used |
| `{rounded.md}` | 6px | **Default and ceiling** — every button, most cards |
| `{rounded.lg}` | 8px | Larger dark-panel feature cards only |
| `{rounded.full}` | 9999px | Icon-circle badges, spec pill badges only — never buttons |

The system explicitly rejects `rounded-xl`/`rounded-2xl`/`rounded-3xl` soft-SaaS corners and pill-shaped buttons. This was a deliberate flattening correction early in the project's history, moving away from a "generic AI-generated" soft-card look toward a flatter, more technical one.

## Components

### Buttons

**`button-primary`** — Solid blue CTA, the default primary action everywhere.
- Background `{colors.primary}`, hover `{colors.primary-hover}`, text white, `{rounded.md}`, padding 14px 24px, sentence case, font-semibold, `text-sm`. No `hover:scale-*`, no uppercase, no tracking.

**`button-dark-secondary`** — Solid ink-navy button, used as a secondary action next to a primary button.
- Background `{colors.ink}`, hover `{colors.primary}`, text white, `{rounded.md}`, padding 12px 20px.

**`button-outline`** — Transparent with a white/25 border, used on dark backgrounds (hero, CTA panels) as the secondary action.
- Transparent background, `border-white/25` hover `border-white/50`, text white, `{rounded.md}`, padding 14px 24px.

### Cards

**`hairline-card`** — The default card pattern for any grid of 3+ items (products, industries, features).
- White background, sits inside a `gap-px` grid on `{colors.hairline}`, `{rounded.none}`, padding 24px. The grid gap *is* the border — cards are never individually bordered/shadowed.

**`dark-panel-card`** — Ink-navy panel used for stat call-outs and CTA banners within a lighter section.
- Background `{colors.ink}`, white text, `{rounded.lg}`, padding 32px.

### Labels

**`eyebrow-label`** / **`eyebrow-label-on-dark`** — Small kicker text above section headings.
- `{colors.primary}` (light bg) or `{colors.sky-accent}` (dark bg), 11px, 600 weight, uppercase, 0.18em tracking.

### Navigation

**`nav-diagonal-panel`** — The brand's signature device. Three layered, skewed blue-navy shapes (`clip-path: polygon(36px 0, 100% 0, 100% 100%, 0% 100%)`, offset 0/8/16px from each other) with a glowing 2px edge-highlight along the diagonal cut, shrink-wrapped tightly around the phone number + "Request a quote" button specifically — not spanning an arbitrary fraction of the navbar.

**`navbar-glass-scrolled`** — The navbar's background once scrolled (or on any inner page, which has no hero photo to be transparent over): a blue-tinted dark gradient with 14px backdrop blur, replacing full transparency.

- Navbar height is responsive: `h-16` mobile → `h-20` tablet → `h-24` desktop, with the logo mark and wordmark scaling down correspondingly on mobile (logo `h-9 w-11` mobile → `h-[52px] w-[60px]` desktop; the "Pvt. Ltd." subline hides below the `sm` breakpoint to save space on the narrowest phones).
- Positioning: `fixed` throughout on the home page (both transparent and glass states — this avoids a scroll-position jump that occurred when switching between `absolute` and `fixed`), `sticky` on inner pages (which correctly auto-reserves its own space in the document flow, since inner-page banners have top padding tuned against `sticky`'s behavior specifically).

### Icons

- `lucide-react`, always explicit named imports — never a wildcard `import * as Icons`, which broke tree-shaking and nearly tripled bundle size in one iteration.
- Icon color follows text color convention: `{colors.primary}` on light surfaces, `{colors.sky-accent}` on dark surfaces.

## Do's and Don'ts

### Do
- Use `{colors.primary}` #1C5CA8 as the only chromatic accent in buttons, links, and active states.
- Default every card grid of 3+ items to the hairline `gap-px` pattern rather than individually bordered/shadowed cards.
- Keep buttons and cards at `{rounded.md}` (6px) or flatter. No pills, no soft `rounded-xl+` corners.
- Write buttons and nav labels in sentence case.
- Use `clamp()`-based fluid sizing for any hero-scale typography, not stepped breakpoints.
- Source every technical/certification claim from real, verifiable documentation — actual design codes, actual shop specs.
- Trim copy to single scannable sentences; drop sub-description text under bold labels where the label alone conveys the point.
- Import icons explicitly, one by one.

### Don't
- Don't use ember red (`#B3401F`) for any UI chrome — buttons, links, backgrounds, accents. It exists only for literal equipment paint and diagram-arrow semantics.
- Don't round corners past `{rounded.md}` (6px) on buttons or cards.
- Don't write uppercase-tracked button or nav-link text — that's the old, superseded style.
- Don't use `hover:scale-*` micro-interactions on buttons.
- Don't cap the navbar's width — it's meant to span the true viewport edge, unlike the rest of the site's `max-w-7xl` content.
- Don't invent specific certifications, named third-party auditors, or technical specifics that aren't documented and verifiable.
- Don't spread the blueprint-grid texture or the diagonal glass-panel device beyond their established homes (hero background; navbar phone/CTA respectively).
- Don't use a wildcard `import * as Icons from 'lucide-react'` — always import icons by name.

## Responsive Behavior

### Breakpoints

Standard Tailwind breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px) are used throughout, with one specific exception: the navbar's desktop nav-link row activates at `xl` rather than `lg`, because the fixed-width nav content was found to overflow in the 1024–1279px range at `lg`.

### Touch Targets & Mobile-Specific Fixes

- Navbar logo and wordmark shrink below `sm` (see Components above) — this was a direct fix for a real overflow/clipping risk on phones ≤360px wide.
- The hero uses `min-h-[100dvh] md:min-h-screen` specifically to handle mobile browser chrome correctly (dynamic viewport height), not just `100vh`.

### Collapsing Strategy

- **Navbar**: full link row collapses to a hamburger menu below `xl` (1280px). Mobile menu is a simple stacked list, same glass background as the scrolled desktop state.
- **Card grids**: always collapse to a single column on mobile, with intermediate 2–3 column states at `sm`/`md` depending on the specific grid's item count.
- **Hero**: content column width itself is fluid (`clamp()`-based `max-width`), not a fixed breakpoint-based value.

## Iteration Guide

1. Reference components by their token name (`button-primary`, `hairline-card`, etc.) when asking for new sections, not by re-describing the visual from scratch.
2. Default body text to `{typography.body}` (Inter, 14px, weight 400). Headings inherit Manrope/bold automatically via the global rule — no need to manually add `font-heading` classes unless overriding size/weight specifics.
3. New card grids of 3+ items should default to the hairline `gap-px` pattern unless there's a specific reason to break from it.
4. Any new hero-scale or above-the-fold headline should use `clamp()` fluid sizing, matching the existing hero's approach, rather than stepped Tailwind breakpoints.
5. Before adding a new accent color, check whether `{colors.primary}` or `{colors.sky-accent}` (dark-bg variant) already covers the need — the system deliberately resists a second chromatic accent.
6. When writing new copy, default to one short sentence per idea; avoid multi-sentence paragraphs unless the content is genuinely detailed technical documentation on a product-detail page (where slightly more depth is earned, since that audience already opted in).
7. Any new certification, spec, or technical claim must be sourced from real documentation — never invent a plausible-sounding specific.

## Known Gaps

- Form input styling (text fields, dropdowns, validation states) hasn't been formally systematized the way buttons and cards have — the request-quote form exists but wasn't audited component-by-component during this design system's development.
- No formal dark-mode variant exists; the "dark" surfaces in this system are specific ink-navy panels used compositionally (hero, navbar, footer, CTA panels), not a site-wide dark theme toggle.
- Print styles are undefined.
- The design system was derived iteratively through a long build process rather than specified upfront — this file represents the system *as it currently stands*, and should be treated as the authoritative reference for new work rather than any single earlier conversation or screenshot.

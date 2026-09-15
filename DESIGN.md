---
version: beta
name: Thermal-Engitech-design-analysis
description: "An industrial-engineering marketing site mid-migration between two systems. The current default for new work is a void-black system: pure black (#000000) surfaces, outlined pill buttons, dashed hairline borders, and a muted periwinkle accent (#7089ba) — applied so far to the site-wide navbar, the hero, and the homepage below its first section. The original system — deep navy ink (#0B1B2B), a confident brand blue (#1C5CA8), solid hairline borders, rounded-md-ceiling buttons, and the navbar's diagonal glass-panel — remains live and authoritative on the footer, the homepage's first section (Core Product Range), and every inner page (About, Products, Industries, Manufacturing, Certifications, Contact, Product Details, Request Quote). Copy stays trimmed to scannable single sentences and technical claims stay real (actual design codes, actual shop-floor specs) in both systems. Ember red (#B3401F) is reserved exclusively for literal equipment paint color and semantic hot-flow diagram arrows — never for UI chrome — in both systems."

colors:
  # --- Void-black system (current default for new work) ---
  void: "#000000"
  void-line: "#1c1c1c"
  void-muted: "#808080"
  void-muted-2: "#4d4d4d"
  void-muted-on-dark: "#ababab"
  void-accent: "#7089ba"
  # --- Legacy system (still live: footer, Core Product Range, all inner pages) ---
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
  # --- Shared / semantic (both systems) ---
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
  nav-link-void:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
    note: "void system only — legacy nav links use Inter (see {typography.button})"
  eyebrow:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.18em
  eyebrow-void:
    fontFamily: "Geist Mono"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
    note: "void system only, applied via inline style (no Tailwind utility/theme token yet) — deliberately literal monospace, does not go through the .font-mono.uppercase self-correction rule"
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
  # --- Void-black system ---
  button-pill-invert:
    backgroundColor: transparent
    borderColor: "currentColor (white on dark, black on light)"
    hoverBackgroundColor: "invert (white bg / black text on dark surfaces, and vice versa)"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px 24px
    note: "the void system's only button pattern — every CTA, both primary and secondary, is this same outlined pill; there is no solid-fill button left in the migrated areas"
  dashed-hairline-card:
    borderStyle: dashed
    borderColor: "black/15–30 on white, white/15–40 on black, depending on section"
    rounded: "{rounded.none}"
    note: "replaces {components.hairline-card}'s solid border in migrated areas; same gap-is-the-border logic, dashed instead of solid"
  nav-void-bar:
    background: "{colors.void} flat, no gradient, no blur"
    borderColor: "{colors.void-line}"
    layout: "logo left, link row centered (absolute + translate-x-1/2), phone + button-pill-invert cluster right"
    note: "replaces {components.nav-diagonal-panel} and {components.navbar-glass-scrolled} everywhere the navbar renders (it's a single shared component, so this is site-wide, including on unmigrated inner pages) — the diagonal glass panel no longer exists in the codebase"
  # --- Legacy system (still live: footer, Core Product Range, all inner pages) ---
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
  spec-badge:
    backgroundColor: "transparent"
    borderColor: "rgba(255,255,255,0.15)"
    textColor: "#e2e8f0"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
---

## Migration Status — read this first

The site is **mid-migration** between two visual systems. Which one applies depends entirely on which file/section you're touching:

| Area | System | Notes |
|---|---|---|
| Navbar (`Navbar.tsx`) | **Void-black** | Shared component — this means every inner page now renders the new navbar, even though its own content is still legacy-styled. |
| Hero (`Hero.tsx`) | **Void-black** | Home page only. |
| Home page, below "Core Product Range" (`Home.tsx`, Featured Capabilities / Industries / CTA panel) | **Void-black** | |
| Home page, "Core Product Range" section (`Home.tsx`) | **Legacy** | Explicitly left untouched during the migration. |
| Footer (`Footer.tsx`) | **Legacy** | Not part of the migration yet. |
| Every inner page (About, Products, Product Details, Industries, Manufacturing, Certifications, Contact, Request Quote) | **Legacy** | Content untouched; only the navbar above them changed. |

**For any new page, section, or component going forward: default to the void-black system** (it's the current direction) **unless the task is specifically to patch or extend an unmigrated page/section**, in which case match that page's existing legacy styling rather than introducing a void-black island inside an otherwise-legacy page. If a request is ambiguous about which track it wants, flag it rather than guessing.

## Overview

Thermal Engitech's marketing system is in transition from **precision-engineering-document** styling toward a **flatter, void-black, pill-button** aesthetic (explicitly referencing "Index" as a design touchstone). Both readings share the same bones — real technical content, trimmed single-sentence copy, Manrope headlines, no invented specs — but differ sharply in color, border, and button treatment.

**Void-black system (current default):** Pure black (`{colors.void}`) surfaces, dashed hairline borders instead of solid ones, and a single button pattern — an outlined pill that inverts to a solid fill on hover — replacing the old rounded-md-ceiling, solid-fill primary button. The accent shifts from brand blue to a muted periwinkle (`{colors.void-accent}` #7089ba). Small kicker/eyebrow labels use literal uppercase monospace (Geist Mono) rather than the legacy system's self-correcting Inter-eyebrow rule.

**Legacy system (still live everywhere not yet migrated):** White canvas with deep navy ink (`{colors.ink}` #0B1B2B) dark panels, a single confident brand blue (`{colors.primary}` #1C5CA8) as the only chromatic accent, solid 1px hairline-grid cards, and `rounded-md` as the hard ceiling on every button and card corner — no pills. The now-retired navbar diagonal glass panel belonged to this system.

Both systems agree on: Manrope carrying every headline at bold-to-extrabold; real, sourced technical content (actual design codes, actual shop-floor specs); copy trimmed to scannable single sentences; and ember red (`{colors.ember-reserved}`) reserved exclusively for literal equipment paint and hot-flow diagram arrows, never UI chrome.

**Key Characteristics — void-black system:**
- **Void black, not navy ink**: `{colors.void}` #000000 is the dark surface — flatter and higher-contrast than the legacy system's `{colors.ink}`.
- **Pills, not rounded-md**: every button is `{rounded.full}`, outlined, inverting to a solid fill on hover. This directly reverses the legacy system's explicit "no pills" rule — intentionally, as of this migration.
- **Dashed hairlines, not solid**: card and section borders use `border-dashed` in the void system.
- **One muted accent**: `{colors.void-accent}` #7089ba replaces both `{colors.primary}` and `{colors.sky-accent}` wherever the void system applies — there is no solid brand-blue fill left in migrated areas.
- **Literal mono eyebrows**: kicker labels use Geist Mono via inline style, uppercase, deliberately — unlike the legacy system's self-correcting rule that prevents "fake mono" labels.

**Key Characteristics — legacy system (unchanged, still governs unmigrated areas):**
- **One brand blue, used confidently**: `{colors.primary}` #1C5CA8 is the only chromatic accent in UI chrome.
- **Hairline-grid cards, not shadow cards**: `gap-px bg-[hairline] border border-[hairline]` with white cells.
- **Flat, rectangular geometry**: `rounded-md` is the ceiling. No pills.
- **Fluid, not stepped, hero typography**: `clamp()`-based sizing (this principle carries over unchanged into the void-black hero).
- **Sentence case everywhere in UI chrome**, except eyebrow labels.
- **Real technical content only**; **copy trimmed to scannable single sentences** — both hold in the void system too.

## Colors

> Established across the full build/iteration history of thermalengitech site (React + Vite + Tailwind v4). Split below by system; see Migration Status for which applies where.

### Void-black system
- **Void** (`{colors.void}` #000000): The dark surface for migrated areas — navbar, hero, and homepage sections below Core Product Range. Distinct from, and not to be confused with, the legacy system's `{colors.ink}`.
- **Void Line** (`{colors.void-line}` #1c1c1c): Navbar border and other near-black hairlines on void surfaces.
- **Void Accent** (`{colors.void-accent}` #7089ba): The one accent color in the void system — replaces both brand blue and sky accent. Used on icons, active nav-link/CTA text, wordmark highlight, eyebrow labels.
- **Void Muted / Muted 2 / Muted on Dark** (`#808080` / `#4d4d4d` / `#ababab`): Secondary text. `#4d4d4d` appears on white migrated sections; `#808080` and `#ababab` both appear on black — pick based on which existing nearby element you're matching rather than treating them as a strict hierarchy (this wasn't fully normalized during the migration).

### Legacy system (still live: footer, Core Product Range, all inner pages)
- **Primary** (`{colors.primary}`): The single brand accent in legacy areas — buttons, active nav-link underline, link hover, focus state.
- **Primary Hover / Pressed**: Hover and deep-pressed states for primary buttons.
- **Sky Accent** (`{colors.sky-accent}`): Light blue for dark backgrounds in legacy areas.
- **Canvas / Paper / Panel**: White page background, near-white variant, and warm light-gray alternate section band.
- **Ink / Ink 2 / Ink 3** (`{colors.ink}` #0B1B2B): The legacy dark surface (footer, Core Product Range's own accents if any) and its gradient stops.
- **Hairline** (`{colors.hairline}`): Solid border/grid-gap color in legacy card grids and dividers.
- **Body Text / Slate / Slate Soft / Inverse Ink Muted**: Legacy text hierarchy on light and dark surfaces respectively.

### Reserved / Semantic — do not use as chrome, in either system
- **Ember** (`{colors.ember-reserved}` #B3401F): Reserved exclusively for (a) literal red paint color in isometric/schematic product illustrations, and (b) "hot flow" direction arrows in technical diagrams. **Never** buttons, links, backgrounds, or any other UI chrome, in either system. The site went through an explicit red-to-blue migration early in its history specifically to eliminate ember from UI chrome — don't reintroduce it via the void migration either.
- **WhatsApp Green**: WhatsApp FAB only.
- **Semantic Success / Error**: Genuine status states only.

## Typography

### Font Families

- **Manrope** — All display type and headings in both systems. Weight 700–800.
- **Inter** — Body copy and UI text in the legacy system, and still the body-copy face in migrated void sections. Nav links in the void navbar switch to Manrope instead (see `{typography.nav-link-void}`).
- **Geist Mono** — New with the void-black migration. Used only for small uppercase kicker/eyebrow labels in migrated sections, via inline `style={{fontFamily:...}}` — there's no Tailwind theme token or utility class for it yet, so it won't appear via a `font-*` class.
- **IBM Plex Mono** — Legacy system's genuine numeric/technical data face (spec-table values, model codes). Still valid for that use in unmigrated areas; the void system hasn't needed a data-table context yet.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | fluid, 34–60px | 800 | 1.08 | Hero headline (both systems use the same fluid sizing) |
| `{typography.display-lg}` | ~42px | 700 | 1.05 | Section headings |
| `{typography.headline}` | 30px | 700 | 1.12 | Sub-section headings |
| `{typography.card-title}` | 18px | 700 | 1.2 | Card/feature titles |
| `{typography.subhead}` | fluid, 15–18px | 400 | 1.65 | Hero lead paragraph |
| `{typography.body}` | 14px | 400 | 1.6 | Default body copy |
| `{typography.body-sm}` | 12px | 400 | 1.5 | Card descriptions, secondary labels |
| `{typography.button}` | 14px | 600 | 1.2 | Legacy button/CTA labels; also the void system's body-copy-adjacent UI text |
| `{typography.nav-link-void}` | 14px | 500 | 1.2 | Void navbar links only (Manrope, not Inter) |
| `{typography.eyebrow}` | 11px | 600 | 1.2 | Legacy kicker labels |
| `{typography.eyebrow-void}` | 11px | 500 | 1.2 | Void kicker labels (Geist Mono, literal, uppercase) |
| `{typography.data-mono}` | 12px | 500 | 1.4 | Legacy genuine spec/data values |

### Principles

- **Headings are always Manrope, always bold-to-extrabold**, in both systems — a global CSS rule applies this by default to every h1–h5.
- **The hero is fluid, not stepped**, in both systems — every size value uses `clamp(min, preferred, max)`.
- **`.font-mono` + `.uppercase` together self-correct to Inter** — this rule is still active and still applies to any element using Tailwind's `font-mono` *class*. It does **not** catch the void system's Geist Mono labels, because those are set via inline `style`, not the `font-mono` class — this is a real gap worth knowing about if a future request wants Geist Mono to feed through a reusable class instead of inline styles.
- **Sentence case is still the default voice** for body copy and non-eyebrow labels in both systems. Eyebrow/kicker labels are the one place uppercase + tracking is intentional, in both the legacy (`{typography.eyebrow}`) and void (`{typography.eyebrow-void}`) versions.

## Layout

### Spacing System

- Section vertical rhythm: `py-24` (or `pt-28 pb-24` where a hero/banner precedes) — unchanged by the migration.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for page content in both systems; the navbar spans full viewport width edge-to-edge in both systems too.
- Card interior padding: 24px standard, 32px for larger feature/panel cards — unchanged.

### Grid & Container

- Card grids default to `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` (or similar), collapsing to one column on mobile — unchanged.
- Legacy grid pattern: `gap-px bg-[hairline] border border-[hairline]` (solid). Void grid pattern: same gap-is-the-border logic, but `border-dashed` instead.
- The navbar still has **no max-width cap** in either system.

### Whitespace Philosophy

Legacy sections alternate white (`{colors.canvas}`) and warm-gray (`{colors.panel}`) bands. Void sections alternate white and true black (`{colors.void}`) instead — a starker version of the same alternating-band rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Body text, most surfaces, both systems |
| 1 (hairline) | 1px grid line, solid (legacy) or dashed (void) | Default card-grid separation |
| 2 (dark panel) | Solid `{colors.ink}` (legacy) or `{colors.void}` (void) background, no shadow | CTA panels, stat call-outs |
| 3 (scroll shadow) | Legacy navbar only: `box-shadow: 0 4px 24px rgba(0,0,0,0.25)` | The void navbar has **no** scroll shadow — it's a flat black bar with just a 1px bottom border once scrolled |

Neither system uses heavy drop-shadow elevation. Depth is carried by surface color change and hairline grid lines in both.

### Decorative Depth

- **Diagonal glass panel**: **retired.** This device no longer exists anywhere in the codebase — the navbar (shared site-wide) now uses `{components.nav-void-bar}` instead. If a future request asks to "restore" or reference it, that's a real conflict worth flagging, since it would mean reintroducing a component that's been fully removed.
- **Subtle blueprint grid texture**: was reserved for the legacy hero background only; the void-black hero (`Hero.tsx`) no longer includes it — the current hero scrim is a black gradient plus a soft periwinkle radial glow (see below), not the blueprint grid.
- **Hero scrim (void version)**: a black directional gradient (darkest over the text, lighter right) plus a `blur-[120px]` periwinkle (`{colors.void-accent}`/10) radial glow bottom-right, standing in for the legacy scrim's plain navy gradient.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hairline-grid card cells, both systems |
| `{rounded.sm}` | 4px | Rarely used |
| `{rounded.md}` | 6px | **Legacy ceiling** — every legacy button, most legacy cards. Not used for buttons in the void system. |
| `{rounded.lg}` | 8px | Legacy larger dark-panel feature cards |
| `{rounded.full}` | 9999px | Legacy: icon-circle/spec-pill badges only, never buttons. **Void: every button**, this is now the standard button shape in migrated areas. |

The legacy system's "no pills" rule is explicitly reversed in the void system — this is the single biggest shape-level difference between the two, and the clearest signal of which system a given screenshot belongs to.

## Components

See the `components` block in the frontmatter above for exact token values. Summary:

### Buttons
- **Void — `button-pill-invert`**: the only button pattern in migrated areas. Outlined pill, `{rounded.full}`, inverts to a solid fill on hover (white-on-dark surfaces, black-on-light surfaces). Used for every CTA — there is no solid primary-color button left in the void system.
- **Legacy — `button-primary` / `button-dark-secondary` / `button-outline`**: unchanged, still live on the footer, Core Product Range, and every inner page.

### Cards
- **Void — `dashed-hairline-card`**: same gap-is-the-border grid logic as the legacy version, dashed instead of solid.
- **Legacy — `hairline-card` / `dark-panel-card`**: unchanged.

### Labels
- **Void — `eyebrow-void`** (component-level: same visual role as `eyebrow-label`, but Geist Mono, inline-styled, on `{colors.void-accent}`).
- **Legacy — `eyebrow-label` / `eyebrow-label-on-dark`**: unchanged.

### Navigation
- **`nav-void-bar`** — current, site-wide. Flat black, no gradient, no blur, no scroll shadow. Logo left; link row centered via `absolute left-1/2 -translate-x-1/2`; a separate phone-number + `button-pill-invert` cluster right. Nav links use Manrope (`{typography.nav-link-void}`), not Inter.
- Navbar height is now `h-16` mobile → `h-18` tablet → `h-20` desktop (**reduced from the legacy `h-16`/`h-20`/`h-24` scale** — logo scales down to match: `h-8 w-10` mobile → `h-10 w-12` desktop).
- The "Pvt. Ltd." subline beneath the wordmark is **removed** in the void navbar (it was present in the legacy version, hidden only below `sm`) — it doesn't appear at any breakpoint now.
- "Request a quote" is no longer in the main `navItems` array; it's a separate pill button in its own right-side cluster alongside the phone number.
- Positioning logic (`fixed` on home, `sticky` on inner pages, to avoid a scroll-jump) is unchanged from the legacy system — this part of the navbar's behavior survived the migration intact.

### Icons

- `lucide-react`, explicit named imports only, in both systems — never a wildcard `import * as Icons`.
- Icon color: `{colors.primary}` (light) / `{colors.sky-accent}` (dark) in legacy areas; `{colors.void-accent}` in void areas regardless of the surface underneath.

## Do's and Don'ts

### For new work (void-black system) — do
- Use `{colors.void}` #000000 as the dark surface, not `{colors.ink}`.
- Use `{colors.void-accent}` #7089ba as the only accent — don't also reach for legacy `{colors.primary}` in the same section.
- Make every button a `{rounded.full}` outlined pill that inverts on hover — this is the one button pattern now, not a primary/secondary split.
- Use `border-dashed` for card and section borders, not solid hairlines.
- Keep the void navbar as the single shared navbar — don't create a second, legacy-styled navbar variant for old pages.
- Keep sourcing every technical/certification claim from real documentation, and keep copy to single scannable sentences — both carry over unchanged.

### For new work (void-black system) — don't
- Don't mix `{colors.ink}` (#0B1B2B) and `{colors.void}` (#000000) as if they were the same dark surface — they're visually distinct and belong to different systems.
- Don't add a solid-fill button (the old `button-primary` treatment) into a void-styled section — the pill-invert pattern is the only CTA style there now.
- Don't reintroduce the diagonal glass panel or the navbar's glass/blur scrolled state — both are retired.
- Don't use ember red for chrome — unchanged rule, both systems.

### When patching an unmigrated page (legacy system) — do
- Match that page's existing legacy tokens exactly: `{colors.primary}`, `{colors.ink}`, solid hairlines, `rounded-md` ceiling.
- Treat the navbar above it as a fixed given (it's void now, shared site-wide) — don't try to "restore" the diagonal panel just because the page below it is still legacy.

### When patching an unmigrated page (legacy system) — don't
- Don't introduce void-black tokens, pill buttons, or dashed borders into an otherwise-legacy page — that creates a visual island rather than advancing the migration deliberately.
- Don't invent specific certifications, named third-party auditors, or technical specifics that aren't documented and verifiable — unchanged rule.

## Responsive Behavior

### Breakpoints

Standard Tailwind breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px), with one exception carried over from the legacy navbar and still true of the void one: the desktop nav-link row activates at `xl` rather than `lg`, because fixed-width nav content was found to overflow at `lg` in the 1024–1279px range.

### Touch Targets & Mobile-Specific Fixes

- Navbar logo and wordmark still shrink below `sm` in the void navbar (smaller scale than the legacy version — see Components above).
- The hero uses `min-h-[100dvh] md:min-h-screen` for correct mobile viewport handling — unchanged by the migration.

### Collapsing Strategy

- **Navbar**: full link row collapses to a hamburger menu below `xl`, in both systems. Void mobile menu is a flat black stacked list (no gradient/blur, matching the void desktop bar) instead of the legacy glass-gradient mobile panel.
- **Card grids**: collapse to one column on mobile in both systems.
- **Hero**: fluid `clamp()`-based content width in both systems.

## Iteration Guide

1. **Check Migration Status first.** Before writing any class, know whether the file/section you're touching is void or legacy — the two systems use genuinely different tokens for the same visual role (dark surface, accent color, button shape, border style).
2. For new pages/sections, default to the **void-black system** — it's the current direction. Reference `nav-void-bar`, `button-pill-invert`, `dashed-hairline-card` by name.
3. For a fix or addition to an unmigrated page, match that page's **existing legacy styling** — don't partially migrate a page as a side effect of an unrelated fix.
4. Default body text to `{typography.body}` (Inter, 14px, 400) in both systems. Headings inherit Manrope/bold automatically.
5. Any new hero-scale or above-the-fold headline uses `clamp()` fluid sizing — true in both systems.
6. In void sections, there's only one accent (`{colors.void-accent}`) and one button shape (pill) — don't introduce a second accent or a solid-fill button "for emphasis." In legacy sections, the old rule still holds: check whether `{colors.primary}`/`{colors.sky-accent}` already covers the need before adding anything new.
7. Keep new copy to one short sentence per idea in both systems.
8. Any new certification, spec, or technical claim must be sourced from real documentation — unchanged, both systems.

## Known Gaps

- **The migration itself is incomplete** — this is the biggest open item. Footer, Core Product Range, and every inner page still need a deliberate decision (and a scoped task) to move to void-black, if that's the eventual goal, rather than living indefinitely as a two-system site.
- The two "muted on dark" void grays (`#808080` vs `#ababab`) aren't fully normalized — both appear in different files for what looks like the same role. Worth consolidating to one value during a future void-system cleanup pass.
- Geist Mono is wired in via inline `style`, not a Tailwind theme token/utility — if void eyebrow labels become common, this is worth promoting to a real `font-*` class (and deciding whether it should participate in the `.font-mono.uppercase` self-correction rule the legacy system relies on, or deliberately stay exempt from it).
- Form input styling hasn't been formally systematized in either system.
- No formal dark-mode variant exists as a toggle; both systems' dark surfaces are compositional (hero, navbar, footer, CTA panels), not a site-wide theme switch.
- Print styles are undefined.
- This file represents the system *as it currently stands*, mid-migration — treat it as authoritative over any single earlier conversation or screenshot, and update it again the next time a redesign task changes what's live.

version: 1.0
name: Thermal-Engitech-design-system
description: >
  Industrial-engineering marketing site for Thermal Engitech Pvt. Ltd. — a single,
  consistent light theme across every page (no dark-mode variant, no abandoned
  "void-black" system). Deep navy ink for text and dark panels, a confident brand
  blue for accents and primary actions, pale blue/gray tints for section banding.
  One sitewide typeface (Manrope) carries headings through body copy via weight
  alone. Copy stays trimmed to scannable sentences; technical claims stay real
  (actual design codes, actual shop-floor specs, actual certifications) — never
  placeholder or invented figures.

# ---------------------------------------------------------------------------
# Color — all tokens defined in src/index.css under @theme, consumed as
# Tailwind utilities (text-ink, bg-blue, border-line, etc.) everywhere. Do not
# introduce a new ad-hoc hex for something an existing token already covers.
# ---------------------------------------------------------------------------
colors:
  ink: "#0B1B2B"            # primary dark — body headings, nav/footer panels, dark CTA cards
  ink-2: "#12293E"          # secondary dark, used in dark-panel gradients
  ink-3: "#081420"          # deepest dark, gradient end
  slate: "#47566A"          # body copy on light backgrounds
  slate-soft: "#78889B"     # muted/secondary copy, captions, eyebrow labels on light
  line: "#E4E7EC"           # hairline borders on cards/dividers
  paper: "#FBFBFC"          # page background (near-white, not pure white)
  panel: "#F2F4F7"          # neutral light-gray section/card background
  panel-blue: "#E8F1FB"     # pale blue-tinted section background — the one
                            #   recurring "feature band" tone (Home, About,
                            #   Manufacturing); sections alternate white ⇄
                            #   this tone rather than introducing new tints
  blue: "#1C5CA8"           # primary accent — links, icons, primary buttons,
                            #   active nav state, borders on hover
  blue-2: "#2F7BD4"         # hover/lighter shade of blue
  blue-dark: "#103E72"      # pressed/deep shade of blue
  sky: "#7FB2E4"            # light accent reserved for dark (ink) backgrounds —
                            #   eyebrow text, icons, hover states over navy
  ember: "#B3401F"          # rare, deliberate accent (equipment paint color in
                            #   photos/diagrams) — never used for UI chrome
  error: "#DC2626"          # Tailwind red-600 — form validation/submit-error
                            #   text only (QuoteRequest, ContactUs)
  success: "#059669"        # Tailwind emerald-600 — used sparingly for
                            #   "verified/compliant" checklist items
  whatsapp: "#1F9D57"       # floating WhatsApp CTA only

# ---------------------------------------------------------------------------
# Typography — one typeface, Manrope, loaded via Google Fonts in index.css
# and mapped to font-heading / font-sans / font-mono alike (there is no
# separate mono face; anything still using font-mono renders in Manrope too).
# Hierarchy comes from size + weight, not a second family.
# ---------------------------------------------------------------------------
typography:
  fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
  hero-h1:
    size: "text-3xl sm:text-4xl md:text-5xl (up to 6xl on a few hero treatments)"
    weight: 800 (font-extrabold)
    tracking: tight to -0.02em
    note: "Two-line split pattern used on most section intros: line 1 text-ink, line 2 text-blue, joined with <br/> — never inline-mixed colors in one line"
  section-h2:
    size: "text-2xl sm:text-3xl md:text-4xl"
    weight: 800 (font-extrabold)
  card-title:
    size: "text-base sm:text-lg"
    weight: 700 (font-bold)
  eyebrow:
    size: "text-[11px] sm:text-xs"
    weight: 700 (font-bold), uppercase, tracking-[0.14em]–[0.2em]
    color: "text-blue on light sections, text-sky on dark sections"
    pattern: "short 2px rounded-full bar (bg-blue / bg-sky) immediately before the label"
  body:
    size: "text-sm sm:text-base"
    weight: 400–500
    color: "text-slate on light, text-white/75–80 on dark"
  caption:
    size: "text-[10px]–text-xs"
    color: "text-slate-soft"

# ---------------------------------------------------------------------------
# Radius & spacing — observed, not aspirational: counted directly across the
# component source.
# ---------------------------------------------------------------------------
radius:
  full: "buttons, pills, badges, CTAs — far and away the most common radius"
  xl: "standard card radius (spec cards, product cards, form panels)"
  2xl: "larger feature cards, hero image panels"
  3xl: "full-width feature sections (Key Performance Features, dark CTA bands)"
  lg: "inputs, small chips, icon chips"
  md: "rare — a few nav/utility elements only"

spacing:
  section-padding: "py-12 md:py-16 to py-16 md:py-24 depending on section weight"
  card-padding: "p-5/p-6 for compact cards, p-8/p-10 for feature cards"
  gap-scale: "gap-4/5/6 within a grid, gap-10/14/16/20 between major sections"

# ---------------------------------------------------------------------------
# Components — real, current patterns only.
# ---------------------------------------------------------------------------
components:
  button-primary:
    background: "bg-blue, hover:bg-blue-2 or hover:bg-blue-dark"
    text: "text-white font-semibold"
    radius: "rounded-full"
    shadow: "a soft blue-tinted glow, e.g. shadow-[0_8px_24px_-8px_rgba(28,92,168,0.5)] — never a plain gray shadow on a primary CTA"
  button-secondary:
    background: "bg-white, border border-ink/15, hover:border-ink/40"
    text: "text-ink font-semibold"
    radius: "rounded-full"
  button-dark-cta:
    background: "bg-ink, hover:bg-blue"
    text: "text-white"
    note: "used for the floating Call Now widget and a few banner CTAs on dark backgrounds"
  card-standard:
    background: "bg-white, border border-line"
    radius: "rounded-xl"
    shadow: "shadow-sm at rest; hover states lift with a soft blue-tinted shadow (rgba(28,92,168,…)) and sometimes -translate-y-0.5 to -translate-y-1.5, never a generic gray shadow"
  card-dark-feature:
    background: "bg-ink"
    text: "text-white, text-sky for eyebrows/icons"
    use: "trust/authority panels and CTA bands that need to read as a deliberate anchor against lighter surrounding sections"
  section-background-rhythm:
    pattern: "sections alternate bg-white and bg-panel-blue (#E8F1FB) — occasionally bg-panel (#F2F4F7) for a neutral variant, or a dark bg-ink photo band with scrim for hero/CTA moments"
  navbar:
    unscrolled: "transparent, with white or dark text depending on whether the route's hero is a dark photo band (see DARK_BANNER_ROUTES in Navbar.tsx)"
    scrolled: "bg-white/60 backdrop-blur-xl, dark text, flips at the very first pixel of scroll on every route"
  forms:
    inputs: "bg-white border border-line rounded-lg, focus:border-blue focus:ring-1 focus:ring-blue/20"
    validation-error-text: "text-red-600 (#DC2626)"
    honeypot: "hidden botcheck checkbox per Web3Forms convention — not a visible UI pattern"

# ---------------------------------------------------------------------------
# Icons & motion
# ---------------------------------------------------------------------------
icons:
  library: lucide-react
  note: "imported per-icon (never a wildcard/barrel import) so unused icons tree-shake out of the bundle"

motion:
  library: "motion/react (Framer Motion)"
  pattern: "Reveal component — fade + translateY(26px→0) on scroll into view, once per session; respects prefers-reduced-motion and skips replaying on a page the visitor has already scrolled through this session"
  interactive-extras: "a couple of one-off treatments (hero mouse-tilt on the glass product card, a floating-badge bob) implemented as plain React handlers / component-scoped <style> blocks, not a general sitewide pattern"

# ---------------------------------------------------------------------------
# Accessibility & technical notes
# ---------------------------------------------------------------------------
notes:
  - "No separate dark-mode theme — the whole site is light-theme only."
  - "Every image has alt text; decorative images use alt=\"\" with aria-hidden."
  - "Reduced-motion and repeat-view handling is centralized in Reveal.tsx — don't bypass it with a raw framer-motion usage elsewhere."
  - "Color tokens live in src/index.css under @theme — add a new token there rather than hardcoding a new hex in a component."

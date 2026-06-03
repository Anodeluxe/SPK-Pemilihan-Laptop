# Design

> Auto-generated and maintained by frontend-god-mode.
> Source of truth for typography, color, motion, layout, and component tokens.
> Read this BEFORE touching the UI in any subsequent session.

## Aesthetic direction

Industrial-Technical / Premium SaaS Tool — precise, data-forward, dark-nav-anchored; think procurement dashboard meets terminal output.

## Dials

- DESIGN_VARIANCE:  6 / 10  (functional tool, not artsy — clean asymmetry over chaos)
- MOTION_INTENSITY: 2 / 10  (no Framer Motion installed; CSS micro-transitions only)
- VISUAL_DENSITY:   5 / 10  (ranked list, tight rows, balanced breathing room)

## Type stack

- Display + Body: Geist (loaded via `next/font/google`, variable `--font-geist-sans`)
- Mono: Geist Mono (variable `--font-geist-mono`) — used on rank numbers, prices, scores, labels
- Loaded via: `app/layout.tsx` → `Geist` + `Geist_Mono`
- Mapped in `globals.css` `@theme inline`: `--font-sans`, `--font-mono`

Banned in this project: Inter, Roboto, Arial, system-ui, any serif font.

## Color tokens (OKLCH)

```css
:root {
  --background:    oklch(0.97 0.005 220);   /* off-white, cool tint */
  --foreground:    oklch(0.14 0.01 220);    /* off-black, matched cool */
  --muted:         oklch(0.52 0.01 220);    /* cool gray for secondary text */
  --surface:       oklch(0.995 0.003 220);  /* card / panel surface */
  --border:        oklch(0.91 0.005 220);   /* subtle dividers */
  --accent:        oklch(0.52 0.18 250);    /* electric blue, ~72% sat */
  --accent-subtle: oklch(0.95 0.04 250);    /* very light accent bg */
  --accent-fg:     oklch(0.99 0.005 250);   /* text on accent bg */
}
```

Nav uses inline oklch values (not CSS vars): `oklch(0.15 0.012 220)` bg, `oklch(0.25 0.01 220)` border.

Banned in this project:
- Pure #000 / #FFF (always tinted neutrals)
- Purple-to-blue gradients
- More than one accent color
- Untinted shadows (all shadows tint toward hue 220)

## Shadows

```
Cards / panels: 0 4px 24px oklch(0.4 0.02 220 / 0.05)
Top-pick card:  0 4px 20px oklch(0.4 0.02 220 / 0.06)
Alt list:       0 2px 12px oklch(0.4 0.02 220 / 0.04)
```

## Motion

No Framer Motion installed. CSS transitions only:
- Interactive hover: `transition-[background,color] duration-150` (no `transition-all`)
- Button hover: `transition-opacity duration-150 hover:opacity-90`
- No linear easing; browser default `ease` used for micro-transitions

If Framer Motion is added later: default spring `{ stiffness: 100, damping: 20 }`.

## Layout

- Page container: `max-w-[1400px] mx-auto px-4 md:px-8`
- Two-column: `grid grid-cols-1 lg:grid-cols-[340px_1fr]` — sidebar | content
- Sidebar: `lg:sticky lg:top-[80px]` (below 56px nav + 24px clearance)
- Mobile: collapses to single column, `px-4` minimum
- Nav: sticky, `h-14`, dark `oklch(0.15 0.012 220)`
- No `h-screen` / `min-h-[100dvh]` — use `min-h-dvh` (Tailwind v4 canonical)

## Component inventory

- `SearchForm` — filter sidebar: budget range, CPU/RAM/Storage/VGA selects, 2×2 priority grid, search button
- `Results` — ranked list: top-pick highlight card + divide-y alternatives list with score bars
- `EmptyState` — inline, no spinner (Monitor icon + instructive copy)
- `ProductRow` — subcomponent of Results: rank number | name + specs + score bars | price + stars

## Score display

- Match score: `h-1.5 bg-accent` bar
- Sub-scores (Harga/Performa/Rating/Garansi): `h-1 bg-[oklch(0.52_0.18_250/0.55)]`, shown only on top-pick

## Project-specific bans

- No emojis anywhere (Lucide icons only: Monitor, Star, Search)
- No 3-equal-card feature rows
- No purple-blue gradient
- No `h-screen`
- No `transition-all`

## Brand voice (copy)

- Language: Bahasa Indonesia (primary), technical terms in English where standard
- Tone: precise, instructional — not chirpy
- Banned: "Elevate", "Seamless", "Next-Gen", "Cerdas Banget!" filler

## Accessibility floor

- Focus-visible rings on all interactive elements (`focus-visible:ring-2 focus-visible:ring-accent/50`)
- Labeled form inputs (all selects and the range input have `<label htmlFor>`)
- Heading levels sequential

## Last updated

2026-06-03 — Initial build: full redesign from emoji-gradient default to industrial-technical layout
2026-06-03 — DSS logic fix (efficiency score min-max norm, warranty scale 3yr), +12 laptop produk (total 30), judul → "Sistem Rekomendasi laptop"

Deveshwar Zard — Portfolio
==========================

A modern, minimal, and highly interactive developer portfolio built with Next.js 15 + App Router, Tailwind v4, and framer‑motion. Includes a blog scaffold, SEO best practices, dark/light theme, and rich micro‑interactions.

Features
- Hero with social actions, CTA, and cursor‑follow glow
- Experience timeline with company logos, badges, and expandable details
- Projects grid (home preview + full projects page) with tilt hover effect
- Global header with animated active pill, scroll progress, mobile menu
- Smooth page transitions (framer‑motion) and reveal‑on‑scroll
- Dark/light theme with system preference (next‑themes) and toggle
- SEO ready: OpenGraph/Twitter metadata, robots.txt, sitemap, JSON‑LD
- Content driven by a single config file (`src/config/site.ts`)

Tech Stack
- Next.js 15 (App Router), React 19
- Tailwind CSS v4
- framer-motion, next-themes, lucide-react

Getting Started
1) Install dependencies
   npm install

2) Run the dev server
   npm run dev
   Open http://localhost:3000

3) Build
   npm run build && npm start

Content & Configuration
- Edit personal info, socials, experience, and projects in:
  src/config/site.ts:1
- Logos live under `public/logos`. Replace the placeholder SVGs with real assets.
- Project images can go in `public/` and referenced from `site.projects[].image`.

Theming & Typography
- Fonts: Plus Jakarta Sans (UI/headings), Inter (articles), JetBrains Mono (code).
- Dark mode: toggle in header. Provided via `next-themes` with class strategy.
- Color system: Tailwind CSS variables in `src/app/globals.css` with a warm light theme and accessible dark theme.

Micro‑interactions
- Reveal on scroll: `src/components/motion/Reveal.tsx` (variants: fade-up, fade, zoom)
- Tilt on cards: `src/components/motion/TiltCard.tsx`
- Shimmer text: `src/components/motion/ShimmerText.tsx`
- Cursor glow: `src/components/motion/MouseGlow.tsx` (prefers‑reduced‑motion respected)
- Page transitions: `src/components/motion/PageTransition.tsx`

Pages
- `/` — Home (Hero, Experience, Projects preview)
- `/projects` — All projects grid (1/2/3 columns responsive)
- `/blog` — Placeholder page (MDX can be added later)

SEO
- Metadata and JSON‑LD in `src/app/layout.tsx`
- robots.txt at `src/app/robots.txt/route.ts`
- sitemap at `src/app/sitemap.ts`

Replace example.com
- Update the canonical domain in:
  - `src/app/layout.tsx` → `metadataBase` and JSON‑LD url
  - `src/app/robots.txt/route.ts`
  - `src/app/sitemap.ts`

Accessibility
- Keyboard focus styles, skip link, aria‑current/expanded attributes
- Prefers‑reduced‑motion disables non‑essential animations

Notes
- Home page previews 4 projects. Add more on `/projects`.
- To adjust motion, see corresponding components for `delay`, `maxTilt`, and `duration` props.

License
- Personal project. No license specified.

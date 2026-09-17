# ALTHERAI React/Vite Modern Redesign — Design Spec

Date: 2026-09-17
Branch: `redesign/react-vite-modern`

## Goal

Replace the current static multi-page HTML/CSS site with a modern React + Vite + TypeScript static site for GitHub Pages, while preserving ALTHERAI's real-world testing positioning, existing useful content, direct YouTube/contact paths, and brand/publisher outreach utility.

Primary design reference: the approved dark editorial/hardware-lab mockup generated in chat.

## Product Positioning

Primary message:

> Real-World PC Gaming Tests for Normal Players

Supporting positioning:

> Practical F2P & Live-Service Gaming for Normal PC Players

The site should immediately communicate three things:

1. ALTHERAI tests real games on realistic hardware.
2. Tests follow a Question → Test → Result methodology.
3. Hardware brands and game publishers can understand exactly how review units, loaners, or keys fit into coverage.

## Scope

### Primary routes

- `/` — Home
- `/tests` — Tests and coverage
- `/setup` — Current test bench and upgrade-test opportunities
- `/brands` — For Brands & Publishers
- `/contact` — Contact and social links

### Legacy route compatibility

Existing URLs such as `brands.html`, `setup.html`, `contact.html`, `services.html`, and `support.html` must not become dead links. They will either redirect into the new route structure or remain lightweight compatibility shells where needed.

## Homepage Information Architecture

### Header

- ALTHERAI logo/wordmark
- Tests
- Setup
- For Brands
- primary CTA: Watch Latest Test
- mobile menu

### Hero

Headline:

> Real-World PC Gaming Tests for Normal Players

Supporting copy should remain concise and grounded in real gameplay, real hardware, and measured results.

Primary CTAs:

- Watch Latest Test
- Work With ALTHERAI

Right-side / secondary visual element:

Current Test Bench panel:

- Ryzen 5 3600
- GTX 1080 8GB
- 16GB RAM
- Windows 11
- OBS Recording
- 1080p
- OBS ON/OFF testing where relevant

### Test Types

Three visible testing pillars:

1. Performance Tests
2. Progression Tests
3. Worth Your Time?

These explain the editorial model without adding generic marketing filler.

### Latest Tests

A responsive media rail/grid with real ALTHERAI coverage. Initial entries should use currently relevant channel topics already supported by the project, such as Aniimo and Warframe. No invented performance numbers, views, ratings, or fabricated test results.

Each test card supports:

- thumbnail/image
- game title
- test title
- category
- short factual metadata
- YouTube link where known

### How ALTHERAI Tests Games

Visual sequence:

Question → Test → Result

- Question: a viewer-relevant, concrete problem
- Test: reproducible real gameplay on the documented test bench
- Result: measured or directly observed outcome

### For Brands & Publishers

Two main collaboration paths:

- Hardware: laptops, GPUs, monitors, SSD/storage, RAM/platform upgrades where editorially justified
- Games: review keys, launch coverage, first-session/progression tests, real-world PC performance coverage

The page must explicitly state that provided products/keys are disclosed and results remain independent.

## Tests Page

Purpose: make the site feel like a compact gaming test publication rather than a static creator bio.

Filters/categories:

- All
- Warframe
- F2P / Live-Service
- Performance
- Progression

Filtering should be client-side and fast.

Content data should live separately from components so new tests can be added without editing layout code.

## Setup Page

### Current Test Bench

- AMD Ryzen 5 3600
- NVIDIA GTX 1080 8GB
- 16GB RAM
- Windows 11
- OBS-based gameplay recording

### Upgrade Test Queue

Display editorially useful upgrade categories rather than a wishlist:

- Modern GPU vs GTX 1080 baseline
- Modern gaming laptop vs current desktop
- 1440p/high-refresh monitor on normal hardware
- SSD / creator workflow testing
- 16GB → 32GB RAM where a measurable test is justified

No microphones/webcams or generic peripherals are highlighted unless there is a specific future project.

## Brands Page

Headline direction:

> Put your hardware or game through a real-world test.

Sections:

- Hardware collaboration fit
- Game publisher collaboration fit
- What ALTHERAI can deliver
- Disclosure and independence standard
- Current test bench
- Contact CTA

Potential deliverables may include:

- long-form real-world test
- one or two Shorts when the footage supports them
- benchmark/result screenshots when relevant
- clearly disclosed links

No guarantee of positive coverage, guaranteed views, or guaranteed sales.

## Contact Page

Keep this minimal:

- creator email
- YouTube
- TikTok
- Instagram
- Ko-fi
- brand/publisher CTA

## Technical Architecture

### Stack

- React
- Vite
- TypeScript
- React Router
- CSS variables/tokens and component-scoped classes or a lightweight utility approach
- Lucide-style icon family only if it visually matches the approved design

No backend is required.

### Content model

Keep structured content in data modules, for example:

- `src/data/tests.ts`
- `src/data/hardware.ts`
- `src/data/socials.ts`

This prevents the main components from becoming content dumps.

### Component boundaries

Expected reusable components include:

- AppShell
- Header / MobileNav
- Hero
- TestBenchPanel
- TestTypeStrip
- TestCard
- TestGrid / TestRail
- MethodFlow
- CollaborationSection
- SiteFooter

Pages should compose these components rather than duplicate markup.

## Design System

### Visual direction

Dark editorial + modern hardware lab.

Not cyberpunk, not RGB-heavy, not a gaming-template aesthetic.

### Palette

- near-black / deep navy background
- slightly lighter elevated surfaces
- off-white primary text
- cool gray secondary text
- blue-violet accent
- subtle border highlights

### Motion

- restrained hover lift
- subtle glow movement
- small reveal transitions
- respect `prefers-reduced-motion`

### Layout

- strong desktop composition
- clean responsive collapse
- horizontal media rails may become swipeable on mobile
- no horizontal overflow
- mobile navigation must be intentional, not a compressed desktop header

## Deployment

The production output remains static and compatible with `altherai.github.io`.

Deployment must not require a paid server.

A GitHub Actions Pages workflow may be added if the repository is not already configured to publish Vite output. The workflow must build deterministically from the repository.

## SEO and Compatibility

Preserve or improve:

- page titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- sitemap
- robots.txt
- favicon / manifest

Old `.html` URLs should not silently 404 after migration.

## Accessibility

- semantic heading order
- visible focus states
- keyboard-usable navigation
- adequate text/background contrast
- descriptive link/button labels
- motion reduction support
- meaningful image alt text where images convey content

## Red Team Review

### Risk 1 — React adds complexity without enough benefit

Challenge: the current site is small and can already be styled with plain HTML/CSS.

Decision: React is justified only because the requested design includes reusable test cards, client-side filtering, multiple shared page sections, a structured content model, and future expansion. Avoid adding state libraries, backend services, or unnecessary dependencies.

### Risk 2 — GitHub Pages deep-link routing

Challenge: a Vite SPA can 404 when visitors load `/tests` or `/brands` directly.

Mitigation: implement and verify a GitHub Pages-compatible route fallback and legacy `.html` redirects. Do not merge until direct deep-link navigation works.

### Risk 3 — Breaking existing outreach links

Challenge: recent outreach emails point to `https://altherai.github.io/brands.html`.

Mitigation: `brands.html` must continue to resolve and direct visitors to the modern Brands page. Same principle applies to other useful legacy URLs.

### Risk 4 — Fake sophistication

Challenge: dashboards, fake metrics, decorative benchmark numbers, or invented test data could make the site look more impressive but reduce credibility.

Mitigation: use only known hardware facts and real content/results. No fabricated FPS, subscriber metrics, partner logos, reviews, testimonials, or sponsorship claims.

### Risk 5 — Heavy assets hurt mobile performance

Challenge: a visual redesign can become slow on phones.

Mitigation: responsive image sizing, lazy loading below the fold, no autoplay background video, restrained shadows/filters, and lightweight CSS motion.

### Risk 6 — Over-design damages readability

Challenge: too many glowing cards and animations could turn the site into a generic gaming template.

Mitigation: editorial hierarchy first. Limit strong accent effects to a few focal areas. Use spacing and typography rather than decorative chrome to create hierarchy.

### Risk 7 — Migration temporarily breaks the live site

Challenge: replacing root files piecemeal on `main` could leave a broken production state.

Mitigation: all work happens on `redesign/react-vite-modern`, with build/route review before merge. Do not modify production directly during implementation.

### Risk 8 — Existing useful content gets lost

Challenge: services/support/brand content may disappear during the React migration.

Mitigation: inventory existing pages before deletion. Move useful content into the new information architecture or preserve it as compatibility content.

### Risk 9 — Framework dependency churn

Challenge: introducing a large component library or experimental packages increases maintenance.

Mitigation: keep dependencies minimal: React, Vite, TypeScript, router, and a small icon library only if needed. No shadcn requirement unless a specific component materially improves implementation.

## Verification Gate

Before merge:

1. production build succeeds
2. homepage matches the approved concept direction
3. desktop and mobile layouts are manually checked
4. direct route loads work on GitHub Pages behavior
5. legacy `brands.html` and other important links resolve
6. all primary CTAs work
7. no fabricated data or unsupported claims are present
8. no horizontal mobile overflow
9. reduced-motion path works
10. SEO metadata and sitemap are valid

## Success Criteria

The redesign is successful if a first-time visitor can understand within a few seconds:

- what ALTHERAI tests
- who the content is for
- what hardware is being used
- how tests are structured
- where to watch the latest test
- how a hardware brand or publisher can collaborate

The result should feel like a small, credible gaming test publication and creator media property rather than a generic personal portfolio.

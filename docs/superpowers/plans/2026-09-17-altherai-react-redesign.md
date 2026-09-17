# ALTHERAI React/Vite Modern Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `altherai.github.io` as a modern React + Vite + TypeScript static site that matches the approved dark editorial / hardware-lab design, preserves legacy outreach links, and deploys safely on GitHub Pages.

**Architecture:** Use a small single-page React application with React Router, structured content modules, reusable presentation components, and a static GitHub Pages build. Keep dependencies minimal, preserve legacy `.html` entry points through compatibility redirect files, and isolate all work on `redesign/react-vite-modern` until verification is complete.

**Tech Stack:** React, Vite, TypeScript, React Router, CSS variables + modular component classes, Vitest + Testing Library, GitHub Actions Pages deployment.

**Spec:** `docs/superpowers/specs/2026-09-17-altherai-react-redesign-design.md`

## Global Constraints

- Production hosting remains static on `altherai.github.io`; no paid server or backend.
- Primary routes are `/`, `/tests`, `/setup`, `/brands`, `/contact`.
- Existing `brands.html`, `setup.html`, `contact.html`, `services.html`, and `support.html` must continue to resolve.
- Do not invent FPS, benchmark numbers, subscriber metrics, partner logos, testimonials, sponsorship claims, or guaranteed results.
- Preserve the known test bench: AMD Ryzen 5 3600, NVIDIA GTX 1080 8GB, 16GB RAM, Windows 11, OBS recording.
- Keep dependencies minimal: React, Vite, TypeScript, React Router, testing packages, and one icon library only if the accepted visual direction needs it.
- No microphones/webcams or generic peripherals in the highlighted upgrade queue unless tied to a real future project.
- Motion must respect `prefers-reduced-motion`.
- All implementation work stays on `redesign/react-vite-modern` until build, route, responsive, accessibility, legacy-link, and visual checks pass.

---

## File Structure

### New application files

- `package.json` — dependency and script definitions.
- `tsconfig.json` — TypeScript project config.
- `tsconfig.node.json` — Vite/node TypeScript config.
- `vite.config.ts` — Vite config for GitHub Pages root deployment.
- `src/main.tsx` — React entry point.
- `src/App.tsx` — router composition only.
- `src/styles/tokens.css` — colors, spacing, radii, typography, motion variables.
- `src/styles/global.css` — reset, page background, typography, shared layout primitives.
- `src/data/tests.ts` — factual test/coverage data.
- `src/data/hardware.ts` — current bench and upgrade-test queue.
- `src/data/socials.ts` — contact/social links.
- `src/components/SiteHeader.tsx` — desktop/mobile nav.
- `src/components/SiteFooter.tsx` — shared footer.
- `src/components/Hero.tsx` — homepage hero.
- `src/components/TestBenchPanel.tsx` — current hardware panel.
- `src/components/TestTypeStrip.tsx` — three testing pillars.
- `src/components/TestCard.tsx` — reusable coverage card.
- `src/components/TestGrid.tsx` — filtered responsive test collection.
- `src/components/MethodFlow.tsx` — Question → Test → Result.
- `src/components/CollaborationSection.tsx` — hardware/publisher collaboration summary.
- `src/pages/HomePage.tsx` — homepage composition.
- `src/pages/TestsPage.tsx` — filterable tests view.
- `src/pages/SetupPage.tsx` — current bench + upgrade queue.
- `src/pages/BrandsPage.tsx` — collaboration page.
- `src/pages/ContactPage.tsx` — contact/social page.
- `src/pages/NotFoundPage.tsx` — branded 404 fallback.
- `src/test/setup.ts` — Testing Library setup.
- `src/**/*.test.tsx` — component/page tests.

### Compatibility / deployment files

- `brands.html` — legacy redirect to `/brands`.
- `setup.html` — legacy redirect to `/setup`.
- `contact.html` — legacy redirect to `/contact`.
- `services.html` — compatibility redirect to `/brands`.
- `support.html` — compatibility redirect to `/contact`.
- `404.html` — GitHub Pages SPA fallback preserving requested path.
- `.github/workflows/pages.yml` — deterministic build and Pages deployment.
- `sitemap.xml` — new route URLs.
- `robots.txt` — preserve crawl policy and point to sitemap.
- `site.webmanifest` — preserve branding metadata.

---

### Task 1: Establish React/Vite foundation and smoke test

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`

**Interfaces:**
- Produces: React application entrypoint and router shell used by all later tasks.
- Produces scripts: `npm run dev`, `npm run build`, `npm run test`.

- [ ] **Step 1: Write the failing smoke test**

```tsx
// src/App.test.tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the ALTHERAI application shell', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByRole('heading', { name: /real-world pc gaming tests for normal players/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test and confirm it fails**

Run: `npm test -- --run src/App.test.tsx`

Expected: failure because package config and `App` implementation do not exist yet.

- [ ] **Step 3: Add minimal project configuration**

`package.json` must contain:

```json
{
  "name": "altherai-site",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-router-dom": "latest",
    "vite": "latest"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "latest",
    "@testing-library/react": "latest",
    "@testing-library/user-event": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "jsdom": "latest",
    "typescript": "latest",
    "vitest": "latest"
  }
}
```

`vite.config.ts` must use root hosting and jsdom tests:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
```

- [ ] **Step 4: Implement minimal router shell**

`src/App.tsx`:

```tsx
import { Route, Routes } from 'react-router-dom'

function HomeStub() {
  return <h1>Real-World PC Gaming Tests for Normal Players</h1>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeStub />} />
    </Routes>
  )
}
```

`src/main.tsx`:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- [ ] **Step 5: Run test and build**

Run: `npm test -- --run src/App.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: build succeeds and creates `dist/`.

- [ ] **Step 6: Commit**

```bash
git add package.json tsconfig.json tsconfig.node.json vite.config.ts src/main.tsx src/App.tsx src/test/setup.ts src/App.test.tsx
git commit -m "feat: scaffold React Vite site"
```

---

### Task 2: Build design tokens, global styles, header, and footer

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/SiteHeader.test.tsx`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: shared visual tokens and application shell.
- Produces `SiteHeader` with links to `/tests`, `/setup`, `/brands` and latest-test CTA.

- [ ] **Step 1: Write header navigation test**

```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SiteHeader from './SiteHeader'

test('shows the essential navigation', () => {
  render(<MemoryRouter><SiteHeader /></MemoryRouter>)
  expect(screen.getByRole('link', { name: 'Tests' })).toHaveAttribute('href', '/tests')
  expect(screen.getByRole('link', { name: 'Setup' })).toHaveAttribute('href', '/setup')
  expect(screen.getByRole('link', { name: 'For Brands' })).toHaveAttribute('href', '/brands')
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm test -- --run src/components/SiteHeader.test.tsx`

Expected: FAIL because `SiteHeader` does not exist.

- [ ] **Step 3: Implement design tokens**

Create CSS variables that lock the approved palette and geometry:

```css
:root {
  --bg: #070913;
  --bg-elevated: #0d1020;
  --surface: #12162a;
  --surface-strong: #171c34;
  --text: #f7f8ff;
  --text-muted: #9aa3bd;
  --border: rgba(151, 164, 203, 0.16);
  --accent: #7c6cff;
  --accent-2: #4ca6ff;
  --shadow-soft: 0 24px 70px rgba(0, 0, 0, 0.28);
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --content-max: 1180px;
  --ease: cubic-bezier(.2,.8,.2,1);
}
```

Global styles must include semantic typography, focus-visible styling, responsive container utility, body background, link/button resets, and `prefers-reduced-motion` handling.

- [ ] **Step 4: Implement `SiteHeader` and `SiteFooter`**

Header requirements:
- ALTHERAI wordmark.
- Tests, Setup, For Brands.
- latest-test CTA linking to the configured latest YouTube URL.
- mobile menu button below 760px.
- keyboard-usable menu state.

Footer requirements:
- ALTHERAI wordmark.
- concise positioning line.
- YouTube and Contact links.
- no fake partner logos.

- [ ] **Step 5: Import global CSS in `src/main.tsx` and wrap routes with shell**

App structure:

```tsx
<>
  <SiteHeader />
  <main>
    <Routes>{/* pages */}</Routes>
  </main>
  <SiteFooter />
</>
```

- [ ] **Step 6: Run tests**

Run: `npm test -- --run src/components/SiteHeader.test.tsx`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/styles src/components/SiteHeader.tsx src/components/SiteFooter.tsx src/components/SiteHeader.test.tsx src/main.tsx src/App.tsx
git commit -m "feat: add ALTHERAI design system and shell"
```

---

### Task 3: Add factual content modules and homepage core components

**Files:**
- Create: `src/data/tests.ts`
- Create: `src/data/hardware.ts`
- Create: `src/data/socials.ts`
- Create: `src/components/Hero.tsx`
- Create: `src/components/TestBenchPanel.tsx`
- Create: `src/components/TestTypeStrip.tsx`
- Create: `src/components/MethodFlow.tsx`
- Create: `src/components/CollaborationSection.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/HomePage.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `hardware.ts` exports `currentBench` and `upgradeTests`.
- `tests.ts` exports `tests` and `latestTestUrl`.
- `socials.ts` exports `socialLinks` and `contactEmail`.

- [ ] **Step 1: Write homepage content test**

```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

test('shows the core ALTHERAI promise and current test bench', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>)
  expect(screen.getByRole('heading', { name: /real-world pc gaming tests for normal players/i })).toBeInTheDocument()
  expect(screen.getByText('Ryzen 5 3600')).toBeInTheDocument()
  expect(screen.getByText('GTX 1080 8GB')).toBeInTheDocument()
  expect(screen.getByText('Question')).toBeInTheDocument()
  expect(screen.getByText('Test')).toBeInTheDocument()
  expect(screen.getByText('Result')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm test -- --run src/pages/HomePage.test.tsx`

Expected: FAIL because homepage components do not exist.

- [ ] **Step 3: Implement factual data modules**

`src/data/hardware.ts` must encode exactly:

```ts
export const currentBench = [
  'Ryzen 5 3600',
  'GTX 1080 8GB',
  '16GB RAM',
  'Windows 11',
  'OBS Recording',
]

export const upgradeTests = [
  'Modern GPU vs GTX 1080 baseline',
  'Modern gaming laptop vs current desktop',
  '1440p / high-refresh monitor on normal hardware',
  'SSD / creator workflow testing',
  '16GB → 32GB RAM where measurable',
]
```

`src/data/tests.ts` must contain only real ALTHERAI topics already supported by the project. Initial entries may include Aniimo performance coverage, Warframe Plague Star, and the Orokin Cells test. Do not add numeric results unless sourced from already documented project facts.

- [ ] **Step 4: Implement homepage components**

Hero visible copy:
- `Real-World PC Gaming Tests for Normal Players`
- concise supporting line about real gameplay, real hardware, measured results.
- CTAs: `Watch Latest Test`, `Work With ALTHERAI`.

`TestTypeStrip` items:
- Performance Tests
- Progression Tests
- Worth Your Time?

`MethodFlow` visible labels:
- Question
- Test
- Result

`CollaborationSection` must show two columns/regions:
- Hardware: laptop, GPU, monitor, SSD/storage, RAM/platform where justified.
- Games: review keys, launch coverage, first-session/progression tests, real-world PC performance.

- [ ] **Step 5: Route `/` to `HomePage`**

Update `src/App.tsx` to use the real homepage.

- [ ] **Step 6: Run tests and build**

Run: `npm test -- --run src/pages/HomePage.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/data src/components/Hero.tsx src/components/TestBenchPanel.tsx src/components/TestTypeStrip.tsx src/components/MethodFlow.tsx src/components/CollaborationSection.tsx src/pages/HomePage.tsx src/pages/HomePage.test.tsx src/App.tsx
git commit -m "feat: build ALTHERAI homepage"
```

---

### Task 4: Build reusable test cards and filterable Tests page

**Files:**
- Create: `src/components/TestCard.tsx`
- Create: `src/components/TestGrid.tsx`
- Create: `src/pages/TestsPage.tsx`
- Create: `src/pages/TestsPage.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `TestCard` consumes one item from `tests`.
- `TestGrid` accepts `items` and manages category filtering locally.

- [ ] **Step 1: Write filter behavior test**

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import TestsPage from './TestsPage'

test('filters tests by category', async () => {
  const user = userEvent.setup()
  render(<MemoryRouter><TestsPage /></MemoryRouter>)

  await user.click(screen.getByRole('button', { name: 'Warframe' }))
  expect(screen.getAllByTestId('test-card').length).toBeGreaterThan(0)
  expect(screen.queryByText(/aniimo/i)).not.toBeInTheDocument()
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm test -- --run src/pages/TestsPage.test.tsx`

Expected: FAIL because page/components do not exist.

- [ ] **Step 3: Implement `TestCard`**

Required fields:
- game title
- test title
- category
- factual short metadata
- YouTube link when known
- optional image/thumbnail path

Every linked card must have a descriptive accessible name.

- [ ] **Step 4: Implement `TestGrid` filters**

Visible filter buttons:
- All
- Warframe
- F2P / Live-Service
- Performance
- Progression

Active state must be visible and represented with `aria-pressed`.

- [ ] **Step 5: Implement `TestsPage` and route `/tests`**

The page introduction should describe the collection as practical tests, not reviews guaranteed to be positive.

- [ ] **Step 6: Run tests**

Run: `npm test -- --run src/pages/TestsPage.test.tsx`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/components/TestCard.tsx src/components/TestGrid.tsx src/pages/TestsPage.tsx src/pages/TestsPage.test.tsx src/App.tsx
git commit -m "feat: add filterable tests page"
```

---

### Task 5: Build Setup, Brands, and Contact pages

**Files:**
- Create: `src/pages/SetupPage.tsx`
- Create: `src/pages/BrandsPage.tsx`
- Create: `src/pages/ContactPage.tsx`
- Create: `src/pages/InfoPages.test.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- All pages consume shared data modules and existing shell components.

- [ ] **Step 1: Write route/page content tests**

```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SetupPage from './SetupPage'
import BrandsPage from './BrandsPage'
import ContactPage from './ContactPage'

test('setup page shows current bench and upgrade queue', () => {
  render(<MemoryRouter><SetupPage /></MemoryRouter>)
  expect(screen.getByText('GTX 1080 8GB')).toBeInTheDocument()
  expect(screen.getByText(/modern gpu vs gtx 1080 baseline/i)).toBeInTheDocument()
})

test('brands page states disclosure and editorial independence', () => {
  render(<MemoryRouter><BrandsPage /></MemoryRouter>)
  expect(screen.getByText(/provided products and keys are disclosed/i)).toBeInTheDocument()
  expect(screen.getByText(/results remain independent/i)).toBeInTheDocument()
})

test('contact page exposes creator contact path', () => {
  render(<MemoryRouter><ContactPage /></MemoryRouter>)
  expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm test -- --run src/pages/InfoPages.test.tsx`

Expected: FAIL because pages do not exist.

- [ ] **Step 3: Implement `SetupPage`**

Sections:
- Current Test Bench.
- Upgrade Test Queue.
- short note that comparison value comes from maintaining the older baseline.

- [ ] **Step 4: Implement `BrandsPage`**

Headline:

`Put your hardware or game through a real-world test.`

Sections:
- Hardware collaboration fit.
- Game publisher collaboration fit.
- What ALTHERAI can deliver.
- Disclosure and independence standard.
- Current bench.
- contact CTA.

Explicitly prohibit in copy:
- guaranteed positive review.
- guaranteed views.
- guaranteed sales.

- [ ] **Step 5: Implement `ContactPage`**

Keep minimal and readable:
- creator email.
- YouTube.
- TikTok.
- Instagram.
- Ko-fi.
- brands/publishers CTA.

- [ ] **Step 6: Add routes to `src/App.tsx`**

Routes:

```tsx
<Route path="/setup" element={<SetupPage />} />
<Route path="/brands" element={<BrandsPage />} />
<Route path="/contact" element={<ContactPage />} />
```

- [ ] **Step 7: Run tests**

Run: `npm test -- --run src/pages/InfoPages.test.tsx`

Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/pages/SetupPage.tsx src/pages/BrandsPage.tsx src/pages/ContactPage.tsx src/pages/InfoPages.test.tsx src/App.tsx
git commit -m "feat: add setup brands and contact pages"
```

---

### Task 6: Add GitHub Pages routing compatibility and legacy redirects

**Files:**
- Create or replace: `404.html`
- Replace: `brands.html`
- Replace: `setup.html`
- Replace: `contact.html`
- Replace: `services.html`
- Replace: `support.html`
- Create: `src/pages/NotFoundPage.tsx`
- Modify: `src/App.tsx`
- Create: `src/pages/Routing.test.tsx`

**Interfaces:**
- Browser direct-loads remain functional for modern routes.
- Legacy `.html` URLs redirect to modern routes.

- [ ] **Step 1: Write not-found route test**

```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

test('unknown routes render branded not-found page', () => {
  render(
    <MemoryRouter initialEntries={['/does-not-exist']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run and confirm failure**

Run: `npm test -- --run src/pages/Routing.test.tsx`

Expected: FAIL until wildcard route is implemented.

- [ ] **Step 3: Implement branded `NotFoundPage` and wildcard route**

```tsx
<Route path="*" element={<NotFoundPage />} />
```

- [ ] **Step 4: Replace legacy pages with immediate compatibility redirects**

Each legacy file must use a canonical link and JS + meta refresh fallback. Example `brands.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0; url=/brands" />
  <link rel="canonical" href="https://altherai.github.io/brands" />
  <script>location.replace('/brands')</script>
  <title>ALTHERAI — For Brands & Publishers</title>
</head>
<body>
  <p><a href="/brands">Continue to For Brands & Publishers</a></p>
</body>
</html>
```

Use equivalent targets:
- `setup.html` → `/setup`
- `contact.html` → `/contact`
- `services.html` → `/brands`
- `support.html` → `/contact`

- [ ] **Step 5: Implement GitHub Pages SPA fallback in `404.html`**

The fallback must encode the requested path into a query parameter and redirect to `/`, while `src/main.tsx` restores the path before React Router initializes. Use the established GitHub Pages SPA fallback approach without external dependencies.

- [ ] **Step 6: Run routing tests and build**

Run: `npm test -- --run src/pages/Routing.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add 404.html brands.html setup.html contact.html services.html support.html src/pages/NotFoundPage.tsx src/pages/Routing.test.tsx src/App.tsx src/main.tsx
git commit -m "fix: preserve GitHub Pages routes and legacy links"
```

---

### Task 7: Add SEO metadata, manifest updates, sitemap, and deployment workflow

**Files:**
- Modify: `index.html`
- Modify: `robots.txt`
- Modify: `sitemap.xml`
- Modify: `site.webmanifest`
- Create: `.github/workflows/pages.yml`

**Interfaces:**
- Produces deterministic static deployment from `main` after merge.

- [ ] **Step 1: Update `index.html` head metadata**

Must include:
- title: `ALTHERAI — Real-World PC Gaming Tests`
- description focused on practical PC gaming tests for normal players.
- canonical root URL.
- Open Graph title/description/url.
- favicon/manifest links.
- `<meta name="theme-color" content="#070913">`.

- [ ] **Step 2: Update `sitemap.xml`**

Include exactly these canonical routes:
- `https://altherai.github.io/`
- `https://altherai.github.io/tests`
- `https://altherai.github.io/setup`
- `https://altherai.github.io/brands`
- `https://altherai.github.io/contact`

- [ ] **Step 3: Update `robots.txt`**

Ensure crawl is allowed and sitemap points to:

`https://altherai.github.io/sitemap.xml`

- [ ] **Step 4: Update `site.webmanifest`**

Set name/short-name to ALTHERAI, preserve valid icons, set `background_color` and `theme_color` to `#070913`, display mode `standalone`.

- [ ] **Step 5: Add GitHub Actions Pages workflow**

Workflow requirements:
- trigger on pushes to `main` and manual dispatch.
- use Node LTS.
- `npm ci`.
- `npm run build`.
- upload `dist` as Pages artifact.
- deploy through official `actions/deploy-pages`.
- minimum permissions: `contents: read`, `pages: write`, `id-token: write`.

- [ ] **Step 6: Validate build**

Run: `npm ci && npm run build`

Expected: PASS with static output under `dist/`.

- [ ] **Step 7: Commit**

```bash
git add index.html robots.txt sitemap.xml site.webmanifest .github/workflows/pages.yml
git commit -m "chore: configure SEO and GitHub Pages deployment"
```

---

### Task 8: Responsive, accessibility, motion, and visual fidelity pass

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/global.css`
- Modify: relevant component styles and components.
- Create: `src/App.accessibility.test.tsx`

**Interfaces:**
- Finalizes the accepted design fidelity and mobile behavior.

- [ ] **Step 1: Write keyboard/mobile-safe interaction test**

Test at minimum:
- mobile menu button has `aria-expanded`.
- opening the menu reveals navigation.
- primary CTA remains a semantic link.
- filter buttons expose `aria-pressed`.

- [ ] **Step 2: Run tests and confirm any failures**

Run: `npm test -- --run src/App.accessibility.test.tsx`

Expected: failures identify missing states before polish.

- [ ] **Step 3: Complete responsive rules**

Desktop target:
- max content width approximately 1180px.
- hero uses asymmetric two-column composition.
- latest tests use strong media cards, not a dense dashboard.

Mobile target:
- single-column hero.
- test bench follows the hero copy.
- swipeable or stacked test cards.
- no horizontal overflow at 320px CSS width.
- header becomes intentional mobile navigation.

- [ ] **Step 4: Complete accessibility styles**

Requirements:
- visible `:focus-visible` rings.
- minimum readable body text.
- heading order starts with one H1 per page.
- buttons/links have meaningful accessible names.
- decorative imagery uses empty alt; meaningful thumbnails use descriptive alt.

- [ ] **Step 5: Complete motion behavior**

Implement only:
- subtle card lift.
- restrained glow movement around hero focal area.
- simple reveal transitions if they remain performant.

Wrap all nonessential motion in:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 6: Run full tests and production build**

Run: `npm test -- --run`

Expected: all tests PASS.

Run: `npm run build`

Expected: PASS.

- [ ] **Step 7: Browser verification**

Verify in browser at desktop and mobile sizes:
- `/`
- `/tests`
- `/setup`
- `/brands`
- `/contact`
- direct-load behavior.
- `brands.html` compatibility redirect.

Capture implementation screenshots for desktop homepage and mobile homepage.

- [ ] **Step 8: Visual fidelity ledger against approved concept**

Compare at least:
1. hero hierarchy and copy.
2. dark navy/black palette and blue-violet accent.
3. current-test-bench panel geometry.
4. card density and spacing.
5. header simplicity.
6. mobile composition.
7. glow intensity and motion restraint.

Fix every material mismatch that can be corrected without changing approved scope.

- [ ] **Step 9: Commit**

```bash
git add src
git commit -m "style: complete responsive and accessibility polish"
```

---

### Task 9: Final Red Team, regression check, and PR

**Files:**
- Review all changed files.
- Update: `README.md` with local development and deployment notes.

**Interfaces:**
- Produces review-ready PR from `redesign/react-vite-modern` to `main`.

- [ ] **Step 1: Run final Red Team checklist**

Challenge the implementation for:
- GitHub Pages deep-link failure.
- broken `brands.html` outreach link.
- incorrect current hardware facts.
- fabricated metrics or claims.
- accidental sponsor/affiliate wording.
- mobile overflow.
- slow visual effects.
- unnecessary dependencies.
- inaccessible mobile menu/filter states.
- broken external YouTube/contact links.
- stale content copied from the old Project Laptop positioning.

- [ ] **Step 2: Run final verification commands**

```bash
npm ci
npm test -- --run
npm run build
```

Expected: all commands exit 0.

- [ ] **Step 3: Verify generated `dist` contains required artifacts**

Confirm build includes:
- root `index.html`.
- app JS/CSS assets.
- favicon/manifest.
- sitemap and robots files where Vite public-copy rules require them.
- compatibility files if they are placed in `public/`; otherwise move them there before final build.

- [ ] **Step 4: Update README**

Document:

```md
## Local development
npm install
npm run dev

## Tests
npm test -- --run

## Production build
npm run build

The site is a static React/Vite build deployed to GitHub Pages.
```

- [ ] **Step 5: Commit final documentation**

```bash
git add README.md
git commit -m "docs: document React site workflow"
```

- [ ] **Step 6: Open pull request**

Title:

`Modernize ALTHERAI site with React/Vite redesign`

PR body must summarize:
- approved design direction.
- React/Vite migration.
- current test bench.
- legacy-link compatibility.
- GitHub Pages deployment.
- tests/build results.
- Red Team findings and mitigations.

Do not merge until the rendered site has been visually reviewed.

---

## Self-Review

### Spec coverage

Covered:
- React + Vite + TypeScript migration.
- reusable component system.
- Home, Tests, Setup, Brands, Contact routes.
- Question → Test → Result methodology.
- current test bench.
- real-world collaboration positioning.
- independent/disclosed coverage language.
- client-side test filtering.
- GitHub Pages deep-link fallback.
- legacy `.html` outreach URLs.
- responsive and reduced-motion behavior.
- SEO, sitemap, robots, manifest.
- GitHub Actions static deployment.
- final Red Team and PR gate.

### Placeholder scan

No TBD/TODO implementation placeholders are permitted by this plan. Content that depends on exact YouTube URLs must be drawn from existing verified repository/project data during implementation; unknown values must be omitted rather than invented.

### Type/interface consistency

- `tests.ts` is the single source for test entries and `latestTestUrl`.
- `hardware.ts` is the single source for current bench and upgrade-test queue.
- `socials.ts` is the single source for creator contact/social URLs.
- Page components compose shared components; no page may duplicate these data constants.

# HARFASOFT ACADEMY LIMITED — Corporate Website

Corporate website for **HARFASOFT ACADEMY LIMITED** (RC 1982700, incorporated 29 September 2022).

- **Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + framer-motion + lucide-react + React Router
- **3D hero:** three.js via `@react-three/fiber` + `@react-three/drei`, lazy-loaded after first paint
- **SEO:** every route is prerendered to static HTML (unique title, description, canonical, Open Graph/Twitter, JSON-LD), plus `sitemap.xml` and `robots.txt` generated at build time
- **Hosting:** GitHub Pages via GitHub Actions — target URL `https://harunsaidcodes.github.io/harfasoft/`

## Development

```bash
npm install
npm run dev        # http://localhost:5173/harfasoft/
npm run build      # typecheck + client build + SSR prerender + sitemap/robots → dist/
npm run preview    # serve dist/ at http://localhost:4173/harfasoft/
```

`npm run build` does four things:
1. `tsc -b` — type-check
2. `vite build` — client bundle (three.js is split into its own lazy chunk)
3. `vite build --ssr src/entry-server.tsx` — server bundle used only for prerendering
4. `node scripts/prerender.mjs` — renders each route in `src/routes.ts` to `dist/<route>/index.html`, writes `404.html`, `sitemap.xml`, `robots.txt` and `.nojekyll`

### Build-time environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `BASE_PATH` | `/harfasoft/` | Sub-path the site is served from (`/` for a custom domain) |
| `VITE_SITE_URL` | `https://harunsaidcodes.github.io/harfasoft` | Absolute URL used for canonical tags, OG tags, JSON-LD and the sitemap |
| `VITE_NOINDEX` | empty | `1` adds `noindex` and a disallow-all robots.txt (used for preview deployments) |

The GitHub Actions workflow fills `BASE_PATH` and `VITE_SITE_URL` automatically from the repository's Pages settings.

## Deployment (GitHub Pages)

1. Push to `main`. `.github/workflows/deploy.yml` builds and deploys automatically.
2. One-time: in **Settings → Pages**, set **Source = GitHub Actions** (or run
   `gh api -X POST repos/harunsaidcodes/harfasoft/pages -f build_type=workflow`).

## Filling in company details

All contact and company details live in **`src/data/company.ts`**:

```ts
email: 'info@example.com',   // enables the contact form (mailto) and "Request a demo" emails
phone: '+234 ...',
whatsapp: '234...',
address: '...', city: '...', region: '...',
socials: { linkedin: '...', x: '...', facebook: '...', instagram: '...' },
formEndpoint: '',            // optional: e.g. a Formspree endpoint to POST the form instead of mailto
```

Empty values show as "Coming soon" on the Contact page and are left out of the structured data.
While `email` and `formEndpoint` are both empty, the contact form is disabled with a note. If you
set `formEndpoint`, the Privacy Policy automatically switches to text describing a third-party form processor.

Services and products content is in `src/data/services.ts` and `src/data/products.ts`. Adding an entry there
automatically creates its page, navigation links, prerendered HTML and sitemap entry.

## Google Analytics 4

Set `GA4_MEASUREMENT_ID` in `src/data/company.ts` (format `G-XXXXXXXXXX`). While empty, no analytics script
is loaded. When set, the Privacy Policy automatically switches to text describing Google Analytics.
Consider adding a cookie-consent banner if you enable analytics.

## Google Search Console

- HTML-tag method: uncomment the `google-site-verification` meta tag in `index.html` and paste your code, or
- HTML-file method: put Google's `googleXXXX.html` file in `public/`.

Then submit `https://harunsaidcodes.github.io/harfasoft/sitemap.xml`.

> Note: search engines only read `robots.txt` at the root of a host. For a project site at
> `harunsaidcodes.github.io/harfasoft/`, the generated `/harfasoft/robots.txt` is informational; submit the
> sitemap directly in Search Console. With a custom domain, `robots.txt` is served from the root and works normally.

## Custom domain (e.g. harfasoft.com.ng)

1. Add a `public/CNAME` file containing the domain (e.g. `www.harfasoft.com.ng`).
2. Configure DNS at your registrar (CNAME `www` → `harunsaidcodes.github.io`; apex A records per GitHub docs).
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS**.
4. The workflow picks up the new base URL automatically (base path becomes `/`).

## Brand assets

The wordmark (`src/components/Logo.tsx`), `public/favicon.svg`, `public/logo.png` and `public/og-image.png`
are a **proposed identity direction, not an official logo**. Replace them when the final logo is ready
(`scripts/assets/og.html` is the source of the OG image — open it in a browser at 1200×630 and screenshot).

## Project structure

```
src/
  data/company.ts      ← company details, GA4 ID, site URL
  data/services.ts     ← 5 services (each gets /services/<slug>/)
  data/products.ts     ← LumiSAS, Alkhairat HMS, BizBook (each gets /products/<slug>/)
  routes.ts            ← list of prerendered routes / sitemap
  components/          ← Header, Footer, Seo, Hero3D, ProductMockup, UI primitives
  three/HeroScene.tsx  ← three.js scene (lazy chunk)
  pages/               ← page components
  entry-server.tsx     ← SSR entry used by the prerender script
scripts/prerender.mjs  ← static HTML, 404, sitemap, robots
```

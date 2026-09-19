# RESQ-GeoIntel

**Intelligent Hazard-Based Relocation Decision Support**
Smart India Hackathon 2026 — Problem Statement **SIH26191** · Team **Datheon**

RESQ-GeoIntel is an explainable geospatial decision-support platform for disaster-management
authorities. It carries a hazard all the way through to a routed, capacity-checked relocation
plan — not just a red map:

```
Multi-source data → Red-zone mapping → Vulnerable population exposure →
Safe relocation site identification → Site capacity validation →
Multi-site population allocation → Hazard-aware routing → Authority decision dashboard
```

This repo is a working front-end prototype of that workflow, built for the SIH demo.

## Features demonstrated

- **Automated Red-Zone Mapping** — terrain + rainfall indicators combined into a weighted, explainable risk score
- **Explainable Risk Assessment** — click a habitation to see the exact factor breakdown behind its score
- **Vulnerable Population Exposure** — population, households, children/elderly/other-vulnerable counts per habitation
- **Safe-Site Assessment** — candidate sites scored on distance, accessibility, hazard exposure, facilities and road connectivity
- **Sphere-Based Capacity Engine** — site capacity checked against Sphere Handbook humanitarian minimums
- **Multi-Site Allocation** — affected population distributed across multiple feasible sites, not one shelter
- **Hazard-Aware Routing** — route avoids mapped hazard zones, with a rejected shortest-path alternative shown for contrast
- **Evidence & Assumptions** — every recommendation is backed by visible data sources, model weights and assumptions
- **Offline-First / System Status** — simulated online/offline toggle with cached-layer status, for low-connectivity field use

## Tech stack

- React 19 + Vite
- Tailwind CSS
- React Router (hash-based, so it works on static hosts with no server config)
- React-Leaflet / Leaflet (interactive map, dark CARTO basemap)
- Recharts (score breakdowns, allocation charts)
- lucide-react (icons)

All data is a consistent, self-contained mock dataset (`src/data/mockData.js`) representing a
fictional district — the same habitation, sites and numbers appear across every section, so the
totals always reconcile (e.g. 2,000 + 2,500 + 2,000 = 6,500 people allocated).

## Project structure

```
resq-geointel/
├── src/
│   ├── components/   # Sidebar, TopBar, MapView, MapLegend, shared UI primitives
│   ├── sections/      # The 9 dashboard sections (Overview, Risk Map, Exposure, ...)
│   ├── pages/         # Landing page + Dashboard shell
│   ├── data/          # mockData.js — single source of truth for all demo numbers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Local setup

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The production build is written to `dist/`.

## Uploading to GitHub

```bash
git init
git add .
git commit -m "RESQ-GeoIntel prototype — SIH26191"
git branch -M main
git remote add origin https://github.com/<your-username>/resq-geointel.git
git push -u origin main
```

## Deploying to get a public URL

### Option A — Vercel (recommended)

1. Push the repo to GitHub (above).
2. Go to [vercel.com](https://vercel.com), sign in, click **Add New → Project**, and import the repo.
3. Vercel auto-detects Vite: build command `npm run build`, output directory `dist`. Click **Deploy**.
4. You'll get a URL like `https://resq-geointel.vercel.app`. Any future push to `main` redeploys automatically.

Or from the CLI:

```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production URL
```

### Option B — GitHub Pages

1. `vite.config.js` already sets `base: './'`, so the build uses relative asset paths (works on Pages out of the box).
2. Build and push the `dist/` folder to a `gh-pages` branch, e.g. using the `gh-pages` package:
   ```bash
   npm install -D gh-pages
   npx gh-pages -d dist
   ```
3. In the repo's **Settings → Pages**, set the source to the `gh-pages` branch. Your URL will be
   `https://<your-username>.github.io/resq-geointel/`.

## Updating the site later

Make changes locally, then:

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel redeploys automatically on push. For GitHub Pages, rerun `npx gh-pages -d dist` after
building.

## Demo flow for judges (2–4 minutes)

1. **Landing** — explain the workflow, click "Launch Decision Dashboard"
2. **Overview** — point at the priority alert for H-17, click "Analyse"
3. **Risk Map** — show the risk score breakdown and "why is this high-risk" explanation
4. **Exposure** — show population, households, vulnerable groups
5. **Relocation Sites** — compare Site Alpha / Beta / Gamma cards
6. **Capacity Engine** — show Sphere-based capacity sufficiency per site
7. **Allocation** — show the 2,000 / 2,500 / 2,000 multi-site split, click "Recalculate Allocation"
8. **Routing** — click "Generate Route", show the hazard-avoiding path vs. the rejected shortest path
9. **Evidence & Assumptions** — walk through data sources, risk model weights, and the human-review disclaimer
10. **System Status** — toggle offline mode to show the cached, low-connectivity concept

## Note

This is a hackathon front-end prototype with realistic mock data. It is designed so a real
backend (FastAPI + PostGIS + SciPy + pgRouting, as described in the SIH submission) can be
connected later without restructuring the front end — see `src/data/mockData.js` as the shape
each service response would eventually replace.

*AI / model output is decision support and must be reviewed by authorised officials.*

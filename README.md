# AI Engineer / Data Scientist Portfolio

A production-quality, minimalist personal portfolio built with **React 18**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed around a
quiet "systems engineering" aesthetic (IBM Plex Sans/Mono, a muted signal-green
accent, code-comment section labels, and a real architecture diagram) rather
than a generic AI-template look.

## ✨ Features

- Sticky, compact-on-scroll navbar with active-section highlighting
- Hero with a subtle animated "terminal build log" (respects `prefers-reduced-motion`)
- About, Skills, Projects, Architecture, Experience, Engineering Principles, Resume, and Contact sections
- Project cards that open a full case-study modal (Problem → Solution → Architecture → Tech Stack → Dataset → Methodology → Evaluation → Results → Challenges → Future Improvements)
- A real labeled pipeline diagram for "How I Build AI Systems"
- Fully responsive (mobile → tablet → desktop), keyboard-navigable, semantic HTML
- SEO: meta description, Open Graph, Twitter Card, and Person structured data
- No fabricated content: every employer, metric, and link is a clearly marked placeholder — **you fill them in**

## 🗂 Project structure

```
portfolio/
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── README-ASSETS.md           # notes on og-image.png / resume.pdf placeholders
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, SectionLabel
│   │   ├── sections/               # Hero, About, Skills, Projects, Architecture,
│   │   │                            # Experience, Principles, Resume, Contact
│   │   ├── projects/               # ProjectCard, ProjectModal
│   │   └── ui/                     # Button, Tag, TerminalHero, PipelineDiagram
│   ├── data/                       # profile.ts, projects.ts, skills.ts, experience.ts
│   ├── hooks/                      # useScrollSpy, usePrefersReducedMotion
│   ├── types/index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json / tsconfig.node.json
├── vite.config.ts
├── package.json
├── .env.example
└── .eslintrc.cjs
```

## 🚀 Local development

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Copy the env example and adjust if needed
cp .env.example .env

# 3. Start the dev server
npm run dev
```

The site runs at `http://localhost:5173` by default.

## 🏗 Production build

```bash
npm run build     # type-checks + builds to ./dist
npm run preview   # serve the production build locally to sanity-check it
```

## 🧩 Content you need to fill in

All placeholder content is centralized so you don't have to hunt through
components:

| What | File |
|---|---|
| Name, role, location, email, GitHub, LinkedIn, resume URL | `src/data/profile.ts` |
| About paragraph | `src/components/sections/About.tsx` |
| Skills | `src/data/skills.ts` |
| Projects, GitHub/demo links, `[ADD ACCURACY]` / `[ADD LATENCY]` / `[ADD DATASET SIZE]` metrics | `src/data/projects.ts` |
| Work experience | `src/data/experience.ts` |
| Resume file | replace `[RESUME PDF URL]` in `src/data/profile.ts`, e.g. host `resume.pdf` in `public/` and point to `/resume.pdf` |
| `index.html` SEO tags, structured data, OG image | `index.html` |

None of the bracketed placeholders (`[ADD GITHUB URL]`, `[COMPANY]`, `[ADD
ACCURACY]`, etc.) are invented data — replace them with your real information
before publishing.

## ☁️ Deploying to GitHub Pages

**Option A — GitHub Actions (recommended, included in this repo)**

1. Push this project to a GitHub repository.
2. In `.github/workflows/deploy.yml`, set `VITE_BASE_PATH` to `/<your-repo-name>/`
   (already defaulted to `/portfolio/` — update it to match your repo).
3. In your repo settings, go to **Settings → Pages → Build and deployment**
   and set the source to **GitHub Actions**.
4. Push to `main` — the included workflow builds and deploys automatically.

**Option B — Manual deploy with `gh-pages`**

```bash
npm install
VITE_BASE_PATH=/<your-repo-name>/ npm run build
npx gh-pages -d dist
```

Then enable Pages in your repo settings, using the `gh-pages` branch as the
source.

**Custom domain / user page (`username.github.io`)**

Leave `VITE_BASE_PATH=/` (the default in `.env.example`) — no path prefix is
needed.

## ♿ Accessibility & performance notes

- All interactive elements are reachable and operable by keyboard, with a
  visible focus ring (`:focus-visible`) and a "Skip to content" link.
- The hero terminal animation and scroll-reveal motion are disabled when
  `prefers-reduced-motion: reduce` is set.
- The project case-study modal traps focus, closes on `Escape`, and restores
  focus to the triggering element on close.
- Minimal JS dependencies (`framer-motion`, `lucide-react` only); no
  unnecessary UI/animation libraries.
- Fonts are loaded via `<link rel="preconnect">` + `display=swap` to avoid
  blocking render.

## 🛠 Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (subtle, reduced-motion-aware animation)
- [Lucide React](https://lucide.dev/) (icons)
# ai-engineer-portfolio

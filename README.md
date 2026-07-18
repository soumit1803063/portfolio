<div align="center">

# 👁️ Now You See Me

### The personal portfolio of **Soumit Das** — Associate Software Engineer, Backend & AI

Scalable backend systems and production AI, from multi-tenant SaaS platforms to agentic LLM pipelines.

[![Live](https://img.shields.io/badge/Live-soumit1803063.github.io-8b5cf6?style=for-the-badge)](https://soumit1803063.github.io/)
[![Blog](https://img.shields.io/badge/Blog-bondhuta-12b9c9?style=for-the-badge)](https://bondhuta.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/soumit-das-a607642a7/)

![React](https://img.shields.io/badge/React_19-20232a?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white)

</div>

---

## Overview

**Now You See Me** is a fast, responsive, single-page portfolio built with React 19, TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com). Content is fully data-driven — every section reads from typed content files in [`src/content`](src/content), so updating the site means editing data, not markup.

It is deployed twice from a single build to serve both a project path and the root user site:

| URL | Description |
| --- | --- |
| **[soumit1803063.github.io](https://soumit1803063.github.io/)** | Root user site |
| **[soumit1803063.github.io/portfolio](https://soumit1803063.github.io/portfolio/)** | Project path |

## Highlights

- **Featured Work** — a spotlight for the most recent and significant projects (Ochel, TaskMind, Shongi) with impact metrics, tech stack, and live links.
- **Experience** — grouped by employer and sub-project, with headline impact metrics (cost cuts, accuracy gains, efficiency).
- **Research & Publications**, **Projects** by category, **Education**, and **Skills**.
- **Dark, modern UI** with a purple→cyan accent system, an eye-motif logo, and a responsive mobile navigation drawer.
- **Type-safe content model** — adding a project or role is a matter of editing a typed array.

## Tech Stack

| Layer | Choices |
| --- | --- |
| **Framework** | React 19 · TypeScript 5 · Vite 6 |
| **Styling** | Tailwind CSS 3 · shadcn/ui (new-york) · lucide-react icons |
| **Tooling** | ESLint · tsc project references |
| **Hosting** | GitHub Pages (dual deploy via GitHub Actions) |

## Project Structure

```
src/
├── app/          # App shell and composition
├── components/
│   ├── featured/ # Featured Work cards
│   ├── layout/   # Header, footer, section primitives
│   ├── sections/ # Hero, Experience, Projects, Research, Skills…
│   └── ui/       # shadcn/ui primitives
├── config/       # Site profile + navigation
├── content/      # Typed content (experience, featured, projects, research…)
├── styles/       # Global styles + theme tokens
└── types/        # Shared TypeScript models
```

## Getting Started

```bash
# Install dependencies
npm ci

# Start the dev server
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview
```

## Updating Content

All content lives in [`src/content`](src/content) and [`src/config`](src/config) as typed data:

- **Featured Work** → [`src/content/featured.ts`](src/content/featured.ts)
- **Experience** → [`src/content/experience.ts`](src/content/experience.ts)
- **Projects** → [`src/content/projects.ts`](src/content/projects.ts)
- **Research** → [`src/content/research.ts`](src/content/research.ts)
- **Skills / Education** → [`src/content/skills.ts`](src/content/skills.ts) · [`src/content/education.ts`](src/content/education.ts)
- **Profile & links** → [`src/config/site.ts`](src/config/site.ts)

TypeScript enforces the shape of each entry, so the build fails fast if a field is missing.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site twice and publishes both targets:

- **`/portfolio`** → the `gh-pages` branch of this repo.
- **root** → the `soumit1803063.github.io` user-site repo (requires a `PERSONAL_ACCESS_TOKEN` secret; skipped as a no-op when unset).

## Connect

- **Portfolio** · [soumit1803063.github.io](https://soumit1803063.github.io/)
- **Blog** · [bondhuta.vercel.app](https://bondhuta.vercel.app)
- **GitHub** · [@soumit1803063](https://github.com/soumit1803063)
- **LinkedIn** · [soumit-das](https://www.linkedin.com/in/soumit-das-a607642a7/)

<div align="center">

<sub>© 2026 Soumit Das</sub>

</div>

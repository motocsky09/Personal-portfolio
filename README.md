# Andrei Motoc — Developer Portfolio

A personal portfolio built with **Angular 16** (standalone components) and **Bootstrap 5**, showcasing my work, experience and how to get in touch.

## Pages

- **About** — intro, quick stats and a breakdown of my skills
- **Projects** — featured work with tech stacks and links
- **Resume** — experience and education timeline with a downloadable CV
- **Contact** — a validated contact form and my contact details

## Tech stack

- Angular 16 (standalone components, lazy-loaded routes)
- Bootstrap 5 + Bootstrap Icons
- SCSS with a small custom theme layer
- TypeScript, Reactive Forms

## Getting started

```bash
npm install
npm start           # dev server at http://localhost:4200
npm run build       # production build in dist/portfolio
```

## Customising the content

All personal data lives in a single place — edit
[`src/app/core/portfolio.data.ts`](src/app/core/portfolio.data.ts) to update the
profile, skills, projects and timeline. Replace `src/assets/images/profile.svg`
with your own photo and drop your CV at `src/assets/cv/`.

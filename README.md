# Portfolio — Niño Anthony Y. Bandalan

Personal portfolio site. Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. Every route
is statically rendered.

## Requirements

- Node.js 22 LTS (see `.nvmrc`; minimum 20.9).

## Commands

| Command            | What it does                                                      |
| ------------------ | ----------------------------------------------------------------- |
| `npm run dev`      | Development server on http://localhost:3000                       |
| `npm run build`    | Production build                                                  |
| `npm start`        | Serve the production build                                        |
| `npm run check`    | Typecheck, lint, format check and tests (run before every commit) |
| `npm test`         | Unit tests and the content contract                               |
| `npm run lint:fix` | Auto-fix lint issues                                              |
| `npm run format`   | Format every file with Prettier                                   |

## Configuration

| Variable               | Required in production | Purpose                                                               |
| ---------------------- | ---------------------- | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes                    | Public origin for canonical URL, Open Graph, sitemap, robots, JSON-LD |

Without it the build warns and those URLs point at `http://localhost:3000`.

## Editing content

All copy and data live in `content/`; components only render it.

| File                    | Contents                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `content/site.ts`       | Name, title, address, email, hero copy, social links, strengths                    |
| `content/experience.ts` | Roles, newest first; `start`/`end` as `"YYYY-MM"`, omit `end` for the current role |
| `content/services.ts`   | Services; `provenAt` must name companies from `experience.ts`                      |
| `content/skills.ts`     | Skill categories                                                                   |
| `content/education.ts`  | Education                                                                          |
| `content/navigation.ts` | Section ids and header links                                                       |

Run `npm test` after editing: the content contract catches bad dates, wrong ordering, unknown
companies and duplicate keys before they reach the page.

### Adding a section

1. Add its id to `sectionIds` (and a link to `navLinks` if it belongs in the header).
2. Create `components/sections/<Name>Section.tsx` using `Section` and `SectionIntro`.
3. Put its copy in `content/`, then add it to `app/page.tsx`.

## Project structure

```
app/          routes and Next.js special files (layout, page, 404, OG image, sitemap, robots)
components/   layout/ (header, footer), sections/ (page sections), ui/ (primitives), seo/
content/      editable copy and data
lib/          pure helpers: dates, key facts, URLs, address, theme
types/        content types
docs/         design notes and coding standards
```

## Standards and security

See [docs/standards.md](docs/standards.md) for the rules `npm run check` enforces, and
[docs/plans/2026-11-17-portfolio-design.md](docs/plans/2026-11-17-portfolio-design.md) for the design.
Security headers and the Content Security Policy are in `next.config.ts`.

# Coding standards

The rules below are enforced by `npm run check` (TypeScript, ESLint, Prettier, tests) and CI.
Where a rule is not automated, it is marked _(review)_.

## Layers

| Folder        | Holds                                                   | May import                   |
| ------------- | ------------------------------------------------------- | ---------------------------- |
| `content/`    | Editable copy and data, typed with `satisfies`          | `types/`, `lib/` (pure)      |
| `types/`      | Shapes of the content                                   | nothing                      |
| `lib/`        | Pure functions (dates, facts, URLs, theme)              | `types/`                     |
| `components/` | React components: `layout/`, `sections/`, `ui/`, `seo/` | `content/`, `lib/`, `types/` |
| `app/`        | Next.js routes and special files only                   | everything above             |

- Copy lives in `content/`, not in components _(review)_. Colours live in `app/globals.css` tokens;
  `lib/brandColors.ts` mirrors them only for the Open Graph image.
- No import cycles (`import/no-cycle`).

## TypeScript

- `strict` plus `noUncheckedIndexedAccess`, `noImplicitOverride`, `noFallthroughCasesInSwitch`.
- `type`, never `interface`. No `any`, no non-null `!`. `import type` for types.
- Named exports only; default exports only where Next.js requires them (`page`, `layout`,
  `not-found`, `opengraph-image`, `sitemap`, `robots`, config files).

## Naming

- Components `PascalCase.tsx`, one per file; modules `camelCase.ts`; tests beside the file as
  `*.test.ts`.
- Functions start with a verb (`formatPeriod`, `computeKeyFacts`); booleans read as questions
  (`isCurrent`); module constants are `UPPER_SNAKE_CASE` with a unit (`STATUS_RESET_MS`).
- No single-letter names except loop indices (`id-length`).

## Readability limits

- Functions ≤ 90 lines, files ≤ 250 lines, cyclomatic complexity ≤ 10.
- No nested ternaries; use a lookup table or an early return.
- No `console.log` (`warn`/`error` only, for build-time configuration problems).
- Comments say why, not what. TSDoc on exported functions whose behaviour is not obvious.

## Formatting

Prettier: `printWidth 100`, double quotes, semicolons, trailing commas, Tailwind classes sorted by
`prettier-plugin-tailwindcss`. Line endings follow git (`core.autocrlf`).

## Testing

- Node's built-in runner (`node:test`) via `tsx`; no browser needed.
- Pure logic in `lib/` has tests. `content/content.test.ts` is the content contract: it fails when
  edited content breaks an assumption the components make (dates, ordering, references, keys).
- Test names read as sentences.

## Security

- Security headers and CSP live in `next.config.ts`. Adding a third-party script, form or
  user-generated content means revisiting the CSP (switch to nonces) _(review)_.
- `dangerouslySetInnerHTML` only with static content; JSON-LD escapes `<`.
- External links use `rel="noopener noreferrer"`. Dependencies are pinned and `npm audit` runs in CI.

## Definition of done

- [ ] `npm run check` and `npm run build` pass with no warnings in touched files.
- [ ] New logic has tests; new content passes the content contract.
- [ ] Checked in a browser at desktop and phone width, light and dark, with no console errors.

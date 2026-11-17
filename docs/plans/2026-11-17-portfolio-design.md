# Portfolio design

## Direction

Owner-chosen primary reference: **jarielbalberona.dev** (browsed 2026-11-17). Earlier directions
("Drawing Set", then a forest/brass "Brochure" split layout) were replaced at the owner's request.

## What was taken from the reference

| Reference trait                                                                  | Applied here                                     |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| One centred column, white ground, no decoration                                  | `max-w-[54rem]` column on near-white paper       |
| Header: name + title left, text nav right                                        | `SiteHeader` (plus a quiet theme toggle)         |
| Hero = one large statement sentence, muted lede, solid + outlined square buttons | `HeroSection`                                    |
| Small monospaced uppercase section labels                                        | `.eyebrow` (system mono stack, no font download) |
| Hairline rules between sections; featured block ("The product I build")          | `CurrentRoleSection` ("Currently")               |
| "What I do" items with a rule on top                                             | `ServicesSection`, `SkillsSection`               |
| Ruled list with title + meta line (notes)                                        | `ExperienceSection`                              |
| Closing "Availability" block with a text link                                    | `ContactSection`                                 |
| Three-part footer: name · links · email                                          | `SiteFooter`                                     |

## What stays this site's own

- One forest-green accent (`--accent`) for primary actions and the availability dot; the reference is
  monochrome.
- Montserrat (owner's choice) instead of the system font stack.
- Live Cebu local time, computed key facts, copy-email, "Print as CV" print stylesheet, dark mode.
- Services are written only from duties already in `content/experience.ts`, each naming where it was done.

## Platform and security

Next.js 16.4.6 (upgraded from 16.3.0 for published RCE advisories). Security headers in `next.config.ts`
(CSP without nonces per Next's guide, frame/sniff/referrer/permissions/COOP/HSTS, no `X-Powered-By`).
JSON-LD escapes `<`. External links use `rel="noopener noreferrer"`. `npm audit`: 0 vulnerabilities.

## To supply before deploying

- `NEXT_PUBLIC_SITE_URL` (metadata, sitemap, robots, JSON-LD); otherwise they point at localhost.
- Real social profile URLs in `content/site.ts`.

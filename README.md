# Talent Platform — Your Skills. Global Opportunities.

A website for a company that connects professionals with AI, data, software development, and
non-technical technology work, and helps companies build project teams.

Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
npx tsc --noEmit # type check
```

### Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production origin. Used for canonical URLs, Open Graph tags, and `sitemap.xml`. Defaults to `http://localhost:3000`. |

## Project structure

```
src/
  app/                    routes (App Router)
    api/                  route handlers with server-side validation
    opportunities/[id]/   statically generated opportunity detail pages
  components/
    forms/                registration, application, and company forms
  data/                   editable site content — see below
  lib/                    formatting helpers, site URL
  types/                  shared TypeScript types
```

## Editing content

Content is kept out of components so it can be changed without touching markup.

- **`src/data/config.ts`** — homepage copy, headline metrics, navigation, and footer links.
- **`src/data/opportunities.ts`** — the opportunity catalogue.
- **`src/data/faq.ts`** — FAQ questions and answers.

### Headline metrics

`homePageCopy.metrics` drives the four figures under the hero. Only publish numbers you can
substantiate. If a figure is unknown, replace it with a non-numeric label or remove the entry.

### Opportunities

`src/data/opportunities.ts` currently holds **ten demo entries** so the marketplace can be reviewed.
Replace them with real listings before launch. The `Opportunity` type in `src/types/index.ts` is the
contract, so swapping this module for a REST/GraphQL/CMS call later only requires that the same
shape comes back.

## Things to complete before launch

1. **Legal pages** — `/terms`, `/privacy`, and `/cookies` are structural templates. Every bracketed
   placeholder (`[COMPANY LEGAL NAME]`, `[JURISDICTION]`, `[DATE]`, …) must be filled in and the
   text reviewed by a lawyer. Each page renders a visible template notice until then.
2. **Company details** — `/contact` shows placeholder registration details.
3. **Form submissions** — the handlers in `src/app/api/` validate input server-side and return
   success, but do not yet persist anything or send email. Wire them to your datastore or CRM.
4. **`NEXT_PUBLIC_SITE_URL`** — set this, or canonical URLs and the sitemap will point at localhost.
5. **Cookie consent** — no banner is present. Add one if you introduce non-essential cookies.

## Content rules this site follows

The copy deliberately avoids guaranteed-income claims, fabricated testimonials, invented client
logos, and unverified partnership claims. If you add content, keep to the same standard: state
compensation as project-dependent, and do not claim a partnership that has not been formally agreed.

## Known environment issue

`next build` intermittently crashes on this machine with `SIGSEGV` / `stack smashing detected`. The
cause is the native SWC binary running under **Node 18.19.1**; Next 14.2 expects Node 20+. Two
mitigations are in place:

- `npm run dev` / `npm run build` raise the stack limit (`ulimit -s 65536`).
- `next.config.js` limits build workers (`workerThreads: false`, `cpus: 1`).

These reduce the failure rate but do not eliminate it — a retry usually succeeds. `npx tsc --noEmit`
is unaffected and is the reliable way to check correctness. **Upgrading the host to Node 20+ is the
real fix.**

Note also that `npm audit` flags the installed Next.js version. Fully patched releases require
Next 16, which needs Node 20+, so this cannot be resolved on the current runtime either.

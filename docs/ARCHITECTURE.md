# Cloud Fusion Global — Architecture

Domain-driven, data-driven structure for the CFG marketing platform, derived from
the live reference site at <https://cfgv2.vercel.app/>.

Status: **structure and data layer complete. Header and hero designed; remaining sections pending.**
Every route renders, every page is prerendered, and the generated sitemap is
byte-identical to the reference site's 62 URLs.

---

## 1. Site inventory

The reference site was crawled in full. It is **62 pages** across **7 sections**.

| Section | Index | Detail pages | Notes |
| --- | --- | --- | --- |
| Home | `/` | — | 8 sections, composed from other contexts |
| Services | `/services/` | **12** | Grouped into 4 service groups |
| Solutions | `/solutions/` | **27** | Grouped into 6 anchored categories |
| Industries | `/industries/` | **9** | 7 of them also appear in the footer |
| Case Studies | `/case-studies/` | **6** | Anonymised clients |
| Insights | `/insights/` | 0 | 9 articles announced, none published yet |
| About | `/about/` | — | Single aggregate |
| Contact | `/contact/` | — | The only page that writes data |

**Navigation:** two menus, no mega-menu.

- **Header** — 7 flat links: Services, Solutions, Industries, Case Studies, Insights, About, Contact.
- **Footer** — 4 columns: Services (7 of 12, using *short* labels), Solutions (6 category anchors,
  e.g. `/solutions/#real-estate`), Industries (7 of 9), Company (4 fixed links).
- **Breadcrumbs** — every page: `Home > Section > Page`, mirrored as `BreadcrumbList` JSON-LD.

Three navigation facts drove real modelling decisions:

1. Footer service labels differ from page titles → services carry both `title` and `navLabel`.
2. The footer lists 7 of 9 industries → industries carry an `inFooter` flag.
3. Footer solution links are **anchors on the index**, not pages → categories own their own `href`.

URLs are canonicalised **with a trailing slash** (`trailingSlash: true`), matching the reference site.

---

## 2. Bounded contexts

Eight contexts. Seven are read-only catalogues; one writes.

| Context | Owns | Kind |
| --- | --- | --- |
| `services` | The 12 service lines and their 4 groups | read |
| `solutions` | The 27 solutions and their 6 categories | read |
| `industries` | The 9 verticals | read |
| `case-studies` | Delivery proof points | read |
| `insights` | Articles and their publication state | read |
| `company` | About, contact copy, homepage composition | read |
| `navigation` | Header, footer and breadcrumb assembly | derived |
| `inquiries` | Contact form submission | **write** |

Contexts never reach into each other's internals. Cross-context links are stored
as **slugs** and resolved at the application layer through the other context's
public API (`src/modules/<context>/index.js`).

That is why a Service holds `relatedSolutionSlugs`, not Solution objects: the two
catalogues stay independently editable, and a broken link is a data error the
content check catches, not a runtime crash.

---

## 3. Layering

```
  app/          delivery      route segments, metadata, JSON-LD    (thin)
     ↓
  modules/      application   use cases and read models
     ↓
  modules/      domain        entities, value objects, invariants  (pure)
     ↑
  modules/      infrastructure repositories, adapters, ports
     ↓
  content/      data          the authored records
```

**Dependency rules**

1. `domain` imports nothing but `shared/domain`. No content, no Next.js, no React.
2. `infrastructure` is the only layer that knows content lives in `src/content`.
3. `application` orchestrates; it never reads content files directly.
4. `app/` calls **only** module barrels. It never imports a repository or a content file.
5. Cross-module imports go through `@/modules/<name>` — never a deep path.

Rule 2 is the point of the whole exercise: moving to a CMS or database means
rewriting five repository files. Nothing else moves.

---

## 4. Folder structure

```
src/
├── app/                              # DELIVERY — routing only
│   ├── layout.js                     #   document shell + Organization JSON-LD
│   ├── not-found.js  error.js
│   ├── sitemap.js                    #   generated from the catalogue
│   ├── robots.js
│   └── (marketing)/                  #   route group: URLs unchanged, own chrome
│       ├── layout.js                 #   header/footer mount point
│       ├── page.js                   #   /
│       ├── services/page.js + [slug]/page.js
│       ├── solutions/page.js + [slug]/page.js
│       ├── industries/page.js + [slug]/page.js
│       ├── case-studies/page.js + [slug]/page.js
│       ├── insights/page.js + [slug]/page.js
│       ├── about/page.js
│       └── contact/page.js
│
├── modules/                          # BOUNDED CONTEXTS
│   └── <context>/
│       ├── domain/                   #   entity, value objects, schema contract
│       ├── application/              #   one file per use case / query
│       ├── infrastructure/           #   repository, adapters, ports
│       └── index.js                  #   PUBLIC API — the contract
│
├── content/                          # DATA — the source of truth
│   ├── services/       _index.js  _page.js  <slug>.js × 12
│   ├── solutions/      _index.js  _page.js  <slug>.js × 27
│   ├── industries/     _index.js  _page.js  <slug>.js × 9
│   ├── case-studies/   _index.js  _page.js  <slug>.js × 6
│   ├── insights/       _page.js   articles.js
│   ├── company/        about.js   contact.js
│   ├── home/           home.js
│   └── taxonomies/     service-groups · solution-categories · technologies · insight-topics
│
└── shared/                           # SHARED KERNEL
    ├── config/    site.config · routes · navigation.config
    ├── domain/    slug · seo · cta · technology · result · errors · page
    ├── lib/       collection · metadata · json-ld · validation
    └── ui/        primitives/ · layout/site-header · sections/hero
```

`scripts/check-content.mjs` + `scripts/loader.mjs` back `npm run content:check`.

---

## 5. Why the structure looks like this

**One file per record.** 54 content files rather than four big arrays. Records are
edited independently, diffs stay readable, and merge conflicts stop being a tax on
content work. `_index.js` in each folder is the registry — a file that is not
registered does not exist to the domain.

**Taxonomies are closed vocabularies.** An unknown `groupId`, `categoryId` or
`topicId` throws at construction rather than silently rendering an empty section.

**Aggregates validate on construction.** `createService` enforces required fields
and slug format, so anything downstream of the repository is known-good and needs
no defensive checks.

**Repositories are memoised.** Content is parsed and indexed once per process, not
per request. All 62 pages prerender in about 3 seconds.

**Navigation is derived, not authored.** The footer resolves live from the service,
solution-category and industry repositories. Adding a service puts it in the footer,
the sitemap, the contact form's service dropdown, and its own page — from one file.

**The homepage owns almost no copy.** It references other contexts by slug and the
read model resolves them, so nothing on the homepage can drift from the catalogue.

**Publication state is a domain rule.** An article without a body has no route,
no sitemap entry, and no link — `isPublished` is the single predicate. This is why
the build currently generates zero `/insights/[slug]` pages, matching the live site.

**The write side is isolated.** `inquiries` owns the only mutation. The use case
depends on an `InquiryNotifier` **port**; the dev adapter logs and deliberately
fails in production so an unconfigured form cannot silently drop leads. Swapping in
Microsoft Graph, Dataverse or a CRM webhook is one adapter file.

---

## 6. Verification

```
npm run build          # 62 routes prerendered, sitemap identical to live site
npm run content:check  # aggregate construction + cross-reference integrity
npm run lint           # clean
```

`content:check` loads every record through its aggregate factory and verifies that
every `relatedX` slug points at a record that exists. It also reports authoring
progress:

```
Service:   12 records, 11 not yet fully authored
Solution:  27 records, 26 not yet fully authored
Industry:   9 records,  9 not yet fully authored
CaseStudy:  6 records,  6 not yet fully authored
Article:    9 records,  9 not yet fully authored
```

---

## 7. How to extend

**Add a service** — create `src/content/services/<slug>.js`, register it in
`_index.js`. It now appears on the index, in its group, in the footer, in the
sitemap, in the contact form dropdown, and at its own prerendered URL. No code.

**Add a solution category** — add a record to `taxonomies/solution-categories.js`.
The anchored section, its footer link and its ordering follow.

**Publish an article** — set `status: "published"` and fill `body`. The route,
sitemap entry and index link appear together.

**Change a URL** — edit `shared/config/routes.js`. Nothing else hard-codes a path.

**Move content to a CMS** — rewrite the five repositories in
`modules/*/infrastructure/`. Domain, application and delivery layers are untouched.

---

## 8. Design system

White surface, near-black type, **#3533cd as an accent**. The brand ramp in
`globals.css` is the same scale the reference header uses, so `brand-600` is
exactly the specified colour. Type is Inter for reading, Space Grotesk for
display.

Restraint is the rule: on the homepage the brand fill appears on the nav capsule,
the header CTA, the primary button, the eyebrow chip, one headline line, and a
low-opacity background wash. Nothing else.

```
shared/ui/
├── primitives/   cn · container · logo · button
├── layout/       site-header            (footer next)
└── sections/     hero                   (six homepage sections next)
```

**Header** — built to match `cloud-fusion-xi.vercel.app` exactly: sticky and
transparent over the hero, turning to `bg-background/85` + `backdrop-blur-md`
with a bottom border past 24px of scroll; logo left, a solid brand pill capsule
of section links, the final CTA pulled out as its own button, and a pill icon
button opening an animated panel below `lg`.

One adaptation was needed: the reference carries three links, this site carries
six, so the capsule uses tighter horizontal padding. Verified at 1024px — the
capsule ends at 813px with 72px of clearance before the CTA, and no horizontal
overflow at 360/390/768/1024/1280/1440/1920.

The header/CTA split is decided by `getHeaderNavigation()` in the navigation
context, not inside the component — so reordering the menu stays a config change.

**Hero** — content comes from `content/home/home.js`; button labels resolve from
the CTA registry in `shared/domain/cta.js`; the proof-point counts (12 / 27 / 9)
are read from the catalogue, so they cannot go stale.

---

## 9. What is next

1. **Homepage sections.** Six remain: transformation framework, service pillars,
   featured solutions, technology stack, industry focus, differentiators. Their
   data is already resolved in the `getHomePage()` read model; only the outline
   copy in `content/home/home.js` and the section components are missing.
2. **Footer.** `getFooterNavigation()` is ready and returns all four columns; the
   mount point is commented in `app/(marketing)/layout.js`.
3. **Inner page templates.** Services, solutions, industries, case studies,
   insights and contact still render structural placeholders.
4. **Content authoring.** 52 records are outlines carrying slug, title, summary,
   taxonomy and SEO. Two are fully authored as worked examples of the contract:
   `services/agentic-ai-automation.js` and `solutions/lease-management-system.js`.

**Rule for every component added:** render the read model the route segment hands
you. Never import from `@/content`, never call a repository.

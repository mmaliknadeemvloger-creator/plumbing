# SteadWell Plumbing — SEO Documentation

> Intent map, indexation rules, schema graph, linking strategy, AEO/GEO rules.

## Intent Map

| User Intent | Example Query | Target Page | Page Type |
|---|---|---|---|
| Brand + metro | "plumber charlotte nc" | `/` | Home |
| City-specific | "plumber huntersville nc" | `/locations/north-carolina/huntersville/` | City |
| Service | "drain cleaning" | `/plumbing-services/drain-cleaning/` | Service |
| Service + city | "water heater repair fort mill" | `/locations/south-carolina/fort-mill/water-heater-repair/` | CityService |
| Problem/how-to | "drain smells bad" | `/resources/sewer-smell-causes/` | Guide |
| Emergency | "emergency plumber near me" | `/emergency-plumbing/` | Emergency Hub |
| Cost | "how much does plumber cost" | Service page cost section | Service |
| DIY | "how to unclog drain" | `/resources/how-to-unclog-a-drain/` | Guide |

**Rule:** one page per intent. The homepage title must not compete with the primary city page.

## Indexation Rules

### Indexed (in sitemaps)
- Home, service hub, 24 service pages, emergency hub
- Locations hub, 2 state pages, 19 city pages, qualifying city+service pages
- Resources hub, 16 guides
- About, contact, FAQ
- Privacy, terms, accessibility

### Not indexed (noindex + excluded from sitemaps)
- `/request-service/` — form page, noindex
- `/thank-you/` — post-submission, noindex
- `/lp/*` — PPC landing pages, noindex (canonical → organic page)
- `/api/*` — API routes

### Quality Gate
City pages must pass `checkCityQuality()`:
- ≥180 words unique local copy
- ≥2 local issues with real conditions
- ZIP codes present
- ≥3 popular services
- Nearby town links

City+service pages must pass `checkCityServiceQuality()`:
- ≥90 words of local angle content
- Parent city page is PUBLISHED

**Fix failures by writing more real local content, never by lowering thresholds.**

## Schema Graph (JSON-LD)

### Sitewide (`siteGraph()` in layout)
```
Organization (@id: /#organization)
├── areaServed: [City Place nodes]
├── hasOfferCatalog: Offer → Service nodes (broker relationship)
├── knowsAbout: [service names]
├── contactPoint (only if phone is real)
└── WebSite (@id: /#website)
    └── potentialAction: SearchAction
```

### Per-page (`pageGraph()`)
```
WebPage (@id: /path/#webpage)
├── breadcrumb: BreadcrumbList
├── about / mainEntity
├── FAQPage + Question nodes (only for visible FAQs)
├── Service node (on service pages)
├── Article node (on guide pages)
└── isPartOf: /#website
```

**Every `@id` referenced on a page must be defined on that page.**

## Internal Linking

| Method | Coverage |
|---|---|
| Breadcrumbs | Every page (home → hub → page) |
| Mega menu | Services by category, cities by region |
| Hub pages | All children linked |
| Related services | 3-4 per service page |
| Nearby towns | 3-4 per city page |
| Town chips | Service pages link to all cities |
| Guide links | Service and city pages link to relevant guides |
| Contextual (linker) | 31 topics, first mention, max 6/page, no self-links |

**Target:** every page within 2 clicks of home.

## Sitemaps

- `/sitemap.xml` — index pointing to 4 child sitemaps
- `/sitemap-pages.xml` — home, hubs, about, contact, FAQ, legal
- `/sitemap-services.xml` — 24 service pages + emergency
- `/sitemap-locations.xml` — states, cities, city+services
- `/sitemap-guides.xml` — 16 guides

`lastmod` from content dates, **never build time**.

## AEO (Answer Engine Optimization)

- Every service and guide opens with a 1–3 sentence direct answer
- FAQs answer in the first sentence
- FAQs rendered in HTML (visible), not just in schema
- One H1 per page, logical H2/H3 hierarchy
- "Short answer" box on guides

## GEO (Generative Engine Optimization)

- "At a glance" `<dl>` blocks for structured facts
- Explicit, factual service descriptions
- Consistent naming across nav, headings, schema, sitemaps
- `/llms.txt` generated from indexable URL list

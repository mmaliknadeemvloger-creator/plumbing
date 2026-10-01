# Elite Plumbing & Drain — Strategy Document

> Phase 1 output: research, brand, IA, keyword clusters, PPC plan.

## 1. Brand

| | |
|---|---|
| Name | **Elite Plumbing & Drain** (alternate: Elite Plumbing & Drain) |
| Domain | eliteplumbingdrain.com |
| Voice | Confident, direct, technically accurate. Never claim own plumbers—this is a call brand for LeadSmart buyers. |
| Palette | Navy (ink #002855), Sky (#0695D9), Copper (#B4552D), Alert (#B42318), Paper (#F7F4EE), Sage (#4F6B5B) |
| Type | Source Serif 4 (headings) + Inter Tight (UI) |

## 2. Market

- **Primary:** Charlotte, NC metro (Mecklenburg, Union, Cabarrus, Gaston, Iredell counties)
- **Secondary:** York County, SC (Fort Mill, Rock Hill, Tega Cay, Lake Wylie)
- **Population:** ~2.7M metro, fastest-growing large metro in the US
- **Housing:** Mix of 1950s–1970s ranch homes (galvanized/copper pipes) and 2000s+ new construction (PEX/CPVC)
- **Climate issues:** Clay soil (shifting foundations, slab leaks), hot humid summers (bacterial growth in drains), occasional hard freezes (pipe bursts), old-growth oaks (root intrusion)
- **Competition:** High. National franchises (Roto-Rooter, Mr. Rooter) plus dozens of local operations.

## 3. Service Taxonomy

10 categories, 24 services:

1. **Drain Cleaning:** drain-cleaning, hydro-jetting, slow-drain-repair
2. **Sewer Services:** sewer-line-repair, sewer-camera-inspection, sewer-line-replacement
3. **Water Heaters:** water-heater-repair, water-heater-installation, tankless-water-heater
4. **Leak Detection & Repair:** leak-detection, slab-leak-repair, pipe-repair
5. **Water Lines:** water-line-repair, repiping
6. **Fixtures:** faucet-repair, toilet-repair, shower-repair
7. **Gas Lines:** gas-line-repair, gas-line-installation
8. **Garbage Disposals:** garbage-disposal
9. **Water Treatment:** water-softener, water-filtration
10. **Outdoor Plumbing:** outdoor-faucet, irrigation-repair

## 4. Location Architecture

6 regions, 19 towns:

- **Central Charlotte:** Charlotte
- **North Metro:** Huntersville, Cornelius, Davidson, Concord
- **East Metro:** Mint Hill, Matthews, Indian Trail
- **South Metro:** Pineville, Weddington, Waxhaw
- **West Metro:** Gastonia, Mount Holly, Belmont
- **York County SC:** Fort Mill, Rock Hill, Tega Cay, Lake Wylie

## 5. Information Architecture

```
/                                    → home (brand + metro intent)
/plumbing-services/                  → services hub
/plumbing-services/{service}/        → 24 service pages
/emergency-plumbing/                 → emergency hub
/locations/                          → locations hub
/locations/{state}/                  → 2 state pages
/locations/{state}/{city}/           → 19 city pages
/locations/{state}/{city}/{service}/ → 3 city+service pages (gated)
/resources/                          → resources hub
/resources/{guide}/                  → 16 guides
/about/  /contact/  /faq/            → company pages
/request-service/                    → lead form (noindex)
/privacy/  /terms/  /accessibility/  → legal pages
/thank-you/                          → post-submission (noindex)
/lp/{campaign}/                      → 5 PPC landing pages (noindex)
```

## 6. Keyword Clusters

| Intent | Example Keywords | Target Page |
|---|---|---|
| Brand/metro | plumber charlotte nc | Home |
| City | plumber huntersville nc | City page |
| Service | drain cleaning charlotte | Service page |
| Service+city | water heater repair fort mill | City+service page |
| Problem | drain smells bad, no hot water | Guide |
| Cost | how much does a plumber cost | Service cost section |
| Emergency | emergency plumber near me | Emergency hub / LP |

## 7. PPC Landing Page Strategy

5 campaigns targeting high-intent commercial queries:
1. Emergency plumber (highest urgency)
2. Drain cleaning Charlotte (high volume)
3. Water heater repair Charlotte (high value)
4. Plumber near me (broad)
5. Sewer repair Charlotte (high value)

Keyword whitelist swap via `?kw=` — no arbitrary text reflection.

## 8. Internal Linking Strategy

- **Vertical:** breadcrumbs, menus, hubs
- **Horizontal:** related services, nearby towns, town chips, guides
- **Contextual:** linker.tsx auto-links first mentions of 31 topics (max 6 per page)
- **Target:** every page within 2 clicks of home

## 9. Lead Workflow

1. Visitor fills 3-step form (or short emergency form)
2. Client + server Zod validation
3. Honeypot + timing + rate limit checks
4. HMAC-signed webhook delivery to LeadSmart
5. Lead shared with up to 3 qualified plumbers in the area
6. Attribution captured (UTM, gclid, channel, device)

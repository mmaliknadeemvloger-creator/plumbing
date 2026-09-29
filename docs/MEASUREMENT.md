# SteadWell Plumbing — Measurement Plan

> Analytics events, attribution, GTM setup.

## DataLayer Events

All events push to `window.dataLayer` for GTM consumption.

| Event | Trigger | Parameters |
|---|---|---|
| `call_click` | Phone link click | `phone`, `location` (page path) |
| `emergency_call_click` | Emergency phone click | `phone`, `location` |
| `form_start` | First form interaction | `formId`, `service` |
| `form_step` | Step progression | `formId`, `step`, `service` |
| `service_selected` | Service dropdown change | `service` |
| `location_selected` | ZIP entered | `zip`, `covered` |
| `form_error` | Validation error | `formId`, `field`, `error` |
| `form_submit` | Server returns 200 | `formId`, `service`, `isEmergency`, `channel` |
| `schedule_request` | Non-emergency submit | `service`, `zip` |
| `quote_request` | Quote request | `service`, `zip` |
| `cta_click` | CTA button click | `ctaText`, `location` |

## Attribution

### Capture
On page load, `captureAttribution()` reads from the URL:
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `gclid`, `gbraid`, `wbraid`
- `fbclid`, `msclkid`

### Storage
First-party localStorage with 30-day TTL. First-touch attribution (doesn't overwrite).

### Channel Derivation
| Signal | Channel |
|---|---|
| `gclid` or `gbraid` or `wbraid` present | `paid_search` |
| `utm_medium` = `cpc` or `ppc` | `paid_search` |
| `utm_medium` = `social` | `paid_social` |
| `utm_medium` = `email` | `email` |
| `document.referrer` contains google/bing/yahoo/duckduckgo | `organic_search` |
| `document.referrer` contains facebook/instagram/twitter/linkedin | `organic_social` |
| `document.referrer` present | `referral` |
| None of the above | `direct` |

### Lead Attribution
Every lead submission includes the stored attribution data plus:
- `device`: mobile / tablet / desktop (from viewport width)
- `landingPage`: the first page URL visited

## GTM Setup

### Container Loading
GTM loads only when `NEXT_PUBLIC_GTM_ID` is configured. It's deferred until after the page is interactive.

### Recommended Tags
1. **GA4 Configuration** — All Pages trigger
2. **GA4 Event: call_click** — Custom Event trigger
3. **GA4 Event: form_submit** — Custom Event trigger
4. **Google Ads Conversion** — form_submit trigger with gclid variable
5. **Google Ads Phone Call Conversion** — call_click trigger

### Consent Mode
Implement Google Consent Mode v2:
- Default: `analytics_storage: denied`, `ad_storage: denied`
- After consent: update to `granted`
- GTM should respect consent signals

## Offline Conversion Upload
After launch, set up gclid → booked-job matching:
1. Store gclid with each lead
2. When a lead converts to a booked job, upload the conversion to Google Ads
3. Use the Google Ads API or manual CSV upload

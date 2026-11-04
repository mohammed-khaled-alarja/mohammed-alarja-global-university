# ALARJA GLOBAL — Mohammed Khaled Alarja

An independent, bilingual (Arabic / English) educational technology **concept website** founded by Mohammed Khaled Alarja. The project presents a future vision for medical learning, AI, research and digital education.

## What works today

- Responsive Arabic RTL / English LTR website with the approved navy-and-gold visual design.
- Five interactive exploration gateways and eight example learning pathways.
- Search, pathway filters, bookmark saving and informational dialogs.
- Four-week study planner with selectable field, weekly hours and skill level.
- **New:** check off completed weeks, view progress from 0–100%, and reset progress. Completion persists when returning or switching languages.
- **New:** basic offline access to the homepage after its first successful online visit on a supported browser.
- Keyboard navigation and reduced-motion support.

**Storage:** The selected language, bookmarked tracks and study plan are stored locally in the visitor's browser (`localStorage`). No learner account, server-side student database or academic enrollment is active.

## Deployment

The published site is a static asset site. Files in the repository root include:

- `index.html` — all HTML, styles, scripts and embedded concept images.
- `sw.js` — same-origin service worker providing an offline homepage fallback.
- `concept-architecture.svg` — illustrative architecture asset.

### Cloudflare Workers & Pages

For the existing Cloudflare static-asset setup, the root directory is `/`, with no build step, and the deployment command previously configured is:

```bash
npx wrangler deploy --assets .
```

A GitHub commit does **not by itself prove** that the public Cloudflare deployment updated. Check **Workers & Pages → Deployments** for a successful production deployment. If automatic GitHub deployment is not enabled, deploy the updated code from Cloudflare using the project's existing setup. Changes to `sw.js` and `index.html` must both be published for offline mode.

Offline mode is a convenience, not a guarantee: it works only after an online visit completes successfully, on browsers permitting service workers and local caching.

## Important legal and product note

This is an early-stage **educational concept**, not a licensed or accredited university, degree-granting institution, real university campus or active enrollment system. The buildings, facilities, program cards and other visuals are illustrative. Student portal dialogs and sample tracks are prototypes, not real academic accounts or certificates.

## Image attribution

Illustrative backgrounds use artwork or Unsplash-sourced photography under their respective terms. No affiliation with the depicted venues is implied.

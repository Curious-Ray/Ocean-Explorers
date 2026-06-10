# Codex Audit

This file is the running audit log for periodic Codex codebase reviews.

## How To Use

When an audit is requested, add a new dated entry below with:

- Scope reviewed
- Checks performed
- Findings by severity
- Fixes applied, if any
- Remaining follow-ups

---

## Audit Entries

### 2026-06-10 - Online Best Practices Comparison

**Scope reviewed**

- Static GitHub Pages deployment workflow
- Mapbox token loading and map pages
- Main Three.js app entry points
- DOM rendering patterns
- Accessibility semantics for interactive controls
- Third-party CDN usage
- Credits/licensing notes

**Online guidance consulted**

- Mapbox token URL restrictions: https://docs.mapbox.com/accounts/guides/tokens/
- Mapbox attribution requirements: https://docs.mapbox.com/help/dive-deeper/attribution/
- GitHub Actions secrets: https://docs.github.com/actions/security-guides/using-secrets-in-github-actions
- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- GitHub Actions secure use / SHA pinning: https://docs.github.com/en/actions/reference/security/secure-use
- MDN `innerHTML` security notes: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
- MDN Content Security Policy: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- MDN Subresource Integrity: https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity
- MDN ARIA button role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role
- Creative Commons BY-NC 4.0 legal code: https://creativecommons.org/licenses/by-nc/4.0/legalcode.en

**Checks performed**

- Verified tracked source does not contain a committed Mapbox `pk...` token.
- Verified `js/config.js` is ignored locally and not tracked.
- Verified recent GitHub Pages deployments are succeeding.
- Smoke-tested the live Pages site: `index.html`, `map-2d.html`, and `map.html` load without browser exceptions; both map pages create a Mapbox canvas and show 9 species cards.
- Compared implementation against official Mapbox, GitHub, MDN, and Creative Commons guidance.

**Findings**

- **High - Mapbox attribution is hidden.** Both map pages explicitly hide the built-in attribution control with `.mapboxgl-ctrl-attrib { display: none !important; }` (`map.html:482`, `map-2d.html:432`). Mapbox states GL JS automatically includes required attribution and that Mapbox logo/attribution are required. Remove this CSS or reposition attribution with Mapbox's `AttributionControl` instead of hiding it.

- **High - NonCommercial model licenses may block client/commercial use.** `CREDITS.md` lists CC BY-NC 4.0 models for Manta Ray, Sea Turtle, Hammerhead Shark, Whale Shark, and Orca (`CREDITS.md:11`, `CREDITS.md:26`, `CREDITS.md:41`, `CREDITS.md:46`, `CREDITS.md:51`). Creative Commons BY-NC grants reuse for NonCommercial purposes only. If this is an Upwork/client or promotional deployment, replace those models or obtain commercial permission.

- **Medium - Dynamic HTML rendering is broad and would become an XSS risk if data becomes external.** The app uses `innerHTML` and Mapbox `.setHTML()` in many rendering paths (`js/ui.js:31`, `js/ui.js:62`, `js/ui.js:73`, `map.html:709`, `map.html:872`, `map-2d.html:578`, `map-2d.html:759`). MDN classifies `innerHTML` as an injection sink. Current data is local/static, so this is not an immediate exploit, but any future CMS/API/admin input should use DOM creation, `textContent`, or a sanitizer/Trusted Types policy.

- **Medium - GitHub Actions are version-tag pinned, not immutable SHA pinned.** The Pages workflow uses `actions/checkout@v4`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4` (`.github/workflows/pages.yml:26`, `:36`, `:39`, `:45`). GitHub's secure-use guidance recommends pinning actions to full-length commit SHAs for immutable supply-chain protection.

- **Medium - CDN/runtime dependency hardening is thin.** The site loads Three.js add-ons from `unpkg.com`, Mapbox GL JS/CSS from `api.mapbox.com`, Turf from `unpkg.com`, and Google Fonts at runtime (`index.html:117`, `map.html:8`, `map.html:518`, `map-2d.html:8`, `map-2d.html:468`). There is no CSP and no SRI on classic external scripts/styles. Consider self-hosting/bundling dependencies or adding SRI where feasible, plus a CSP that explicitly allows the required Mapbox, Google Fonts, and asset origins.

- **Medium - Clickable `div` controls are not keyboard-native.** Sidebar cards, pagination dots, species cards, habitat items, and migration toggles are clickable `div`s rather than buttons or links (`js/ui.js:26`, `js/ui.js:200`, `map.html:918`, `map-2d.html:805`). MDN recommends native `<button>` controls where possible; `role="button"` alone does not provide keyboard behavior. Convert action controls to buttons or add role, tabindex, Enter/Space handling, and accessible names.

- **Low - Local `localStorage` map-load limit is not real billing protection.** The map pages count loads in each visitor's browser (`map.html:537`, `map-2d.html:487`). This is useful as a local indicator only; it does not enforce account-wide Mapbox billing limits. Keep Mapbox token URL restrictions and account-side usage alerts/limits as the real protection.

- **Low - Documentation has mojibake/encoding artifacts.** `README.md` and some inline UI strings display corrupted punctuation/emoji sequences. This does not break runtime behavior, but it weakens project polish and can confuse future maintainers. Re-save Markdown/HTML as UTF-8 and normalize affected text.

**Good practices observed**

- No production Mapbox token is committed to tracked source.
- GitHub Pages deployment generates `js/config.js` from the `MAPBOX_TOKEN` Action secret.
- Pages workflow uses minimal permissions: `contents: read`, `pages: write`, `id-token: write`.
- `js/config.js`, large local backup model folders, and dev-only audit pages are ignored.
- Live Pages smoke test passed for the main app and both map pages.

**Fixes applied**

- None in this audit pass. Findings were logged only.

**Follow-ups**

- Restore/reposition Mapbox attribution first.
- Resolve CC BY-NC model licensing before any commercial/client launch.
- Decide whether to harden DOM rendering now or only before data becomes external.
- Pin GitHub Actions to commit SHAs when the deployment workflow is stable.
- Add a CSP/SRI/self-hosting strategy for external runtime dependencies.

### 2026-06-10

Initial audit log created.

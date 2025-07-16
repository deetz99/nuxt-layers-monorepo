---
"@dwol/accounts-layer": patch
"@dwol/base-layer": patch
"@dwol/forms-layer": patch
"@dwol/pay-layer": patch
---

- set pkg-pr-new workflow to ignore changesets prs
- add stackblitz template to pkg-pr-new workflow
- remove unnecessary publish script from packages/package.json
- update npm ignore to exclude .nuxtrc and tsconfig.json files
- set main publish script to use changesets publish instead of pnpm publish
  - this should hopefully create github releases automatically

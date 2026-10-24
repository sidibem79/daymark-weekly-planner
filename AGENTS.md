# AGENTS.md

The Daymark Weekly Planner website: static pages served by GitHub Pages at daymarkweekly.app. The free planner is `app/index.html`; `upgrade/` is the Pro page; `privacy/`, `terms/` and their French copies in `fr/` are the legal pages.

- **Checks:** run `git config core.hooksPath .githooks` once per clone; the pre-commit hook runs `node scripts/check-contrast.mjs`. A new text or background colour on a page gets a pair in that script.
- **Branches:** start from `origin/main`; the local `main` is often behind.
- **The Pro page's form** posts to `/early-access` on the production Convex deployment, which lives in the private `daytective` repo (`convex/earlyAccess.ts`). Deploy that before publishing a change to the form.
- **Logos and colours** come from the brand kit in the `daytective` repo (`design/brand-kit/`), copied here into `media/brand/` as they are.
- **Copy** follows the `daytective` repo's `CODING_STANDARDS.md` (Customer-facing copy): every claim has a source, and FAQ questions come from buyer research.

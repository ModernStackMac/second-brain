# Wiki Lint Report
**Run date:** 2026-05-17
**Total pages scanned:** 106
**Issues found:** 5 critical, 8 recommended, 4 informational

## Critical Issues

### 1. Unmapped project folders in project-mapping.md

The following `wiki/projects/` folders have no corresponding entry in `project-mapping.md`. This means story-sync cannot route tickets to them and slug integrity checks cannot validate their content.

- `wiki/projects/blink-payments/` — **Fix:** Add to Canonical Slug Index (no Jira/Linear workspace; source = "Manual/Direct").
- `wiki/projects/cartier/` — **Fix:** Add to Canonical Slug Index (source = "Manual/Direct MSS client").
- `wiki/projects/cretelligent/` — **Fix:** Add to Canonical Slug Index. Determine if there's a Jira workspace+key.
- `wiki/projects/harvey/` — **Fix:** Add to Canonical Slug Index. Determine Jira workspace+key (Stand8).
- `wiki/projects/litify/` — **Fix:** Add to Canonical Slug Index. Determine Jira workspace+key (Stand8).
- `wiki/projects/loftware/` — **Fix:** Add to Canonical Slug Index (source = "Manual/High Meadows prospect").
- `wiki/projects/modern-stack-systems/` — **Fix:** Add to Canonical Slug Index (source = "Manual/Internal").
- `wiki/projects/nbcu/` — **Fix:** Add to Canonical Slug Index. Determine Jira workspace+key (Stand8).
- `wiki/projects/internal/high-meadow-labs/` — **Fix:** Add to Canonical Slug Index (source = "Manual/Internal").
- `wiki/projects/internal/high-meadow-website/` — **Fix:** Add to Canonical Slug Index (source = "Manual/Internal").

### 2. Stories frontmatter does not match enclosing folder

- `wiki/projects/internal/flex-dash/stories-hm.md` — frontmatter `project: flex-dash` but located in folder `internal/flex-dash`. **Fix:** Update frontmatter to `project: internal/flex-dash`.
- `wiki/projects/internal/meadow/stories-hm.md` — frontmatter `project: meadow` but located in folder `internal/meadow`. **Fix:** Update frontmatter to `project: internal/meadow`.

### 3. Deprecated slug alias still present

- `wiki/projects/cetera/overview.md:2` — `aliases: [cetera, f2-cetera, f2/cetera]`. The `f2-cetera` and `f2/cetera` aliases are deprecated forms. No pages currently link via `[[f2-cetera]]` in content (only log.md historical references). **Fix:** Remove deprecated aliases, keeping only `[cetera]`.

### 4. Missing report file referenced in index

- `wiki/index.md` references `[[reports/mai-project-overview]]` but `wiki/reports/mai-project-overview.md` does not exist. **Fix:** Either create the report or remove the index entry.

### 5. Stale empty directory

- `wiki/projects/flex-dash/` — Empty directory at top level. The real content lives at `wiki/projects/internal/flex-dash/`. **Fix:** Delete the empty `flex-dash/` directory.

## Recommended Fixes

### 1. Missing journal.md files

- `wiki/projects/blink-payments/journal.md` — Advisory engagement with no journal. **Fix:** Create with standard frontmatter (status, owner, priority, last_meeting, open_actions).
- `wiki/projects/internal/flex-dash/journal.md` — Development paused but folder has no journal. **Fix:** Create with `status: paused`.

### 2. Orphan pages (zero inbound links from content pages)

- `wiki/tools/contour.md` — Only referenced in index.md. No content page links to it.
- `wiki/patterns/dual-path-vendor-dependency.md` — Only referenced in index.md notes.
- `wiki/patterns/einstein-dual-capture.md` — Only referenced in index.md notes.
- `wiki/projects/projects.md` — Standalone file with no inbound links; appears to be a legacy artifact.

### 3. Missing index entries

- `wiki/f2-internal/CE/app-address.md` — Not listed in index.
- `wiki/f2-internal/CE/core-salesforce-usage-alignment.md` — Not listed in index.
- `wiki/f2-internal/CE/financial-planning.md` — Not listed in index.
- `wiki/f2-internal/CE/gifts-object-alignment.md` — Not listed in index.
- `wiki/f2-internal/CE/growth-engine.md` — Not listed in index.

### 4. Reports not in index proper section

- `wiki/reports/weekly-synthesis-2026-04-27.md` — Referenced only in appended Notes, not in Reports section.
- `wiki/reports/weekly-synthesis-2026-05-11.md` — Referenced only in appended Notes, not in Reports section.
- `wiki/reports/agentforce-knowledge-report.md` — Referenced only in appended Notes, not in Reports section.

## Informational

### 1. Non-canonical tags

Tags found in wiki pages not listed in `TAGS.md`:

- `#active` (3 uses) — Not in canonical taxonomy. Consider adding to Status tags or replacing with `#status/in-progress`.
- `#project/blink-payments`, `#project/cartier`, `#project/flex-dash`, `#project/high-meadow-labs`, `#project/high-meadow-website`, `#project/loftware`, `#project/meadow` — Project tags exist but aren't listed in TAGS.md. **Fix:** Add these to the Project tags section in TAGS.md.

### 2. Source coverage

All 8 `raw/articles/` files have corresponding `wiki/articles/` pages (filenames differ but content is processed). All `raw/projects/meadow/` docs are logged as processed. No unprocessed raw sources detected.

### 3. Stale content

No pages have `*Last updated*` older than 60 days. Vault is relatively new (April 2026). Closest to threshold:

- `wiki/projects/modern-stack-systems/context.md` — Last updated 2026-04-19 (28 days)
- `wiki/projects/internal/high-meadow-website/context.md` — Last updated 2026-04-19 (28 days)

### 4. Log rotation status

`wiki/log.md` is at ~162 entries, under the 200-entry rotation threshold. No archival needed this cycle.

## Auto-fixes Applied

1. Added `aliases: [loftware]` to `wiki/projects/loftware/context.md` — resolves broken `[[loftware]]` link in `wiki/projects/modern-stack-systems/journal.md`.
2. Added `aliases: [high-meadow-labs]` to `wiki/projects/internal/high-meadow-labs/journal.md` — resolves broken `[[high-meadow-labs]]` link in `wiki/patterns/multi-agent-voting.md`.

---
*Auto-generated by second-brain-lint*

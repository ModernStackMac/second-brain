# Wiki Lint Report
**Run date:** 2026-05-31
**Total pages scanned:** 0 wiki pages (the `wiki/` tree does not exist yet)
**Meeting notes checked:** 5
**Raw sources checked:** 3
**Issues found:** 3 critical, 4 recommended, 3 informational

> **Headline:** The `wiki/` knowledge base has never been built. The vault currently contains only source material (`raw/`, `Meeting Notes/`) plus governance files. Because there are no wiki pages, the link/orphan/journal/slug-folder checks have nothing to scan — every one of them resolves to "missing target." The single highest-leverage fix is to run **`kb-ingest-now`** to compile the 5 meeting notes and 3 raw sources into project pages, then re-run this lint.

## Critical Issues

1. **Entire `wiki/` tree is missing.** None of the expected scaffolding exists: `wiki/index.md`, `wiki/log.md`, `wiki/projects/{slug}/context.md`, `wiki/projects/{slug}/journal.md`. The README and SCHEMA both assume this structure. Consequence: standard checks 1–7 and slug-integrity checks 10a/10b/10c/10g cannot run (no pages, no folders, no journals to validate). **Fix:** run `kb-ingest-now` to build `wiki/projects/litify-nexus`, `wiki/projects/litify-lawworks`, and `wiki/projects/cetera-sf`, each with `context.md` + `journal.md`, then build `wiki/index.md`.

2. **All 5 meeting notes are unlinked from the graph (check 11).** No wiki page links any meeting note, because no wiki pages exist. Affected files:
   - `Meeting Notes/Cetera/2026-05-18 Cetera Salesforce Sync.md` → should be linked from `wiki/projects/cetera-sf/context.md`
   - `Meeting Notes/Litify/2026-05-12 Litify Kickoff.md` → `wiki/projects/litify-lawworks/context.md`
   - `Meeting Notes/Litify/2026-05-révisé Litify Onboarding.md` → `wiki/projects/litify-lawworks/context.md`
   - `Meeting Notes/Nexus/2026-05-20 Nexus Data Migration Kickoff.md` → `wiki/projects/litify-nexus/context.md`
   - `Meeting Notes/Nexus/2026-05-27 Nexus Schema Review.md` → `wiki/projects/litify-nexus/context.md`
   **Fix:** add a `## Meeting Note Sources` section with `[[wikilinks]]` to each project's `context.md` during ingest.

3. **Deprecated slug `f2-cetera` used in `raw/cetera-salesforce-sync.md` (check 10d).** Line: `"This is the f2-cetera project. Jira key CET."` Per `project-mapping.md`, `f2-cetera` was deprecated → canonical `cetera-sf` on 2026-05-22. Raw sources are never modified, so this is **flag-only** — but the ingest step MUST resolve this to `cetera-sf`, not create an `f2-cetera` folder. The Cetera meeting note frontmatter already uses the correct `cetera-sf`, so the source of truth is the meeting note, not the raw clipping.

## Recommended Fixes

1. **`SCHEMA.md` exists as BOTH a file and a directory.** Vault root contains a `SCHEMA.md` file (governance prose) *and* a `SCHEMA.md/` directory holding `SCHEMA.md/SCHEMA.md` (a YAML-style restatement). The README references a single `SCHEMA.md`. The two copies are substantively consistent (same canonical tags, same deprecated slugs, same journal frontmatter requirements) so there is no factual contradiction, but the duplication breaks "single source of truth." **Fix (ask first — involves deletion):** keep the root `SCHEMA.md` file as canonical, fold any unique content from `SCHEMA.md/SCHEMA.md` into it, then remove the stray directory.

2. **Non-standard meeting-note filename:** `Meeting Notes/Litify/2026-05-révisé Litify Onboarding.md`. Siblings follow `YYYY-MM-DD Title.md`; this one has a malformed date segment (`2026-05-révisé`) and a non-ASCII character. The file's own frontmatter is `date: 2026-05-13`. **Fix (ask first — renames a meeting-note source):** rename to `2026-05-13 Litify Onboarding (revised).md`.

3. **No project folders for the 3 active projects (checks 10a / 10g).** `project-mapping.md` defines `litify-nexus`, `litify-lawworks`, `cetera-sf` as active, but none has a `wiki/projects/{slug}/` folder, `context.md`, or `journal.md` (with required frontmatter `status, owner, priority, last_meeting, open_actions`). Resolved by the ingest run in Critical #1.

4. **No `wiki/index.md` master catalog (check 3).** Nothing to catalog yet; create during ingest.

## Informational

1. **Source coverage (check 8):** all 3 `raw/` files and all 5 meeting notes are unprocessed — no `wiki/log.md` records any ingest run. Mapping of raw → project is clean: `litify-onboarding-notes.md`→`litify-lawworks`, `cetera-salesforce-sync.md`→`cetera-sf`, `nexus-migration-kickoff.md`→`litify-nexus`.

2. **Tag hygiene (check 9):** all tags found in meeting-note frontmatter (`meeting`, `cetera-sf`, `litify-lawworks`, `litify-nexus`) are canonical or valid slug tags. No non-canonical tags detected. No contradictions across tech-stack claims (Litify-on-Salesforce, Nexus PostgreSQL→Litify+S3, Cetera SF-system-of-record are internally consistent).

3. **Governance freshness:** `project-mapping.md` last updated 2026-05-28 (current). `README.md` and `SCHEMA.md` last updated 2026-05-10 (21 days — within the 60-day staleness window). Jira workspace+key pairs (check 10f) are unique. No deprecated slugs in meeting-note frontmatter.

---
*Auto-generated by second-brain-lint*

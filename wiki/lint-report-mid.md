# Wiki Lint Report — Mid-week
**Run date:** 2026-06-03
**Meeting notes checked:** ~130 (full tree; targeted connectivity verification on the 9 notes added since the 2026-06-01 full ingest)
**Issues found:** 6 critical, 7 recommended

## Critical

### 1. Unmapped project folder — `wiki/projects/cartier/`
No entry in `project-mapping.md` (Canonical Slug Index or Active Projects). The folder is active and `Meeting Notes/Modern Stack Systems/Cartier/` is receiving notes. Both `cartier/context.md` and `cartier/cartier.md` self-flag the missing mapping entry.
**Fix:** Add a `cartier` entry under Modern Stack Systems (Client: Chad Cartier; Meeting Folder: `Meeting Notes/Modern Stack Systems/Cartier/`; Jira N/A) and add the row to the Canonical Slug Index.

### 2. Unmapped project folder — `wiki/projects/internal/high-meadow-labs/`
`high-meadow-labs` is a first-class wiki project (status: active, p2) but is not in `project-mapping.md`. The internal category only maps `meadow`, `flex-dash`, `high-meadow-website`.
**Fix:** Add `high-meadow-labs` as an internal sub-project entry (parallel to the other three) and add the slug-index row, or fold it into an existing internal slug if it isn't a standalone engagement.

### 3. Deprecated slug `f2-cetera` in `wiki/projects/cetera/overview.md`
Frontmatter line 2: `aliases: [cetera, f2-cetera, f2/cetera]`. Uses the deprecated slug as a frontmatter value. (Flagged in a prior mid-week report; still unfixed.)
**Fix:** Remove `f2-cetera` and `f2/cetera` from the aliases array → `aliases: [cetera]`. (Slug-touching change — confirm before applying per auto-fix rules.)

### 4. Stories frontmatter ≠ folder slug — `wiki/projects/internal/meadow/stories-linear.md`
Frontmatter `project: internal/meadow`; enclosing canonical slug is `meadow`.
**Fix:** Change `project:` to `meadow`. (Slug mismatch — confirm before applying.)

### 5. Stories frontmatter ≠ folder slug — `wiki/projects/internal/flex-dash/stories-linear.md`
Frontmatter `project: internal/flex-dash`; enclosing canonical slug is `flex-dash`.
**Fix:** Change `project:` to `flex-dash`. (Slug mismatch — confirm before applying.)

### 6. Backtick source citations in journals (should be `[[wikilinks]]`)
Nine `journal.md` files contain `*(Source: ` + backtick path `)*` citations instead of wikilinks: `cartier`, `cetera`, `cretelligent`, `lefavi`, `lnw`, `mai`, `modern-stack-systems`, `nbcu`, `internal/meadow`. Example (cartier): `*(Source: `Meeting Notes/Modern Stack Systems/Cartier/2026-05-13 - E-mail Attachment Demo.md`)*`.
**Fix:** Convert each to `*(Source: [[Meeting Notes/.../file|label]])*` (drop the `.md`). **Not auto-applied this pass** — the Obsidian MCP has no in-place string-replace, and a delete+append full rewrite of nine large journals is too risky for an unattended run. Recommend applying under the Sunday full lint or a supervised run.

## Recommended

1. **Missing index entries.** `wiki/index.md` Projects section omits active projects with built pages: `cetera`, `mai`, `lnw`, `lefavi`, `loftware`, and internal sub-projects `flex-dash`, `high-meadow-website`, `high-meadow-labs`. Add them to the catalog.

2. **Duplicate context files.** Several projects carry both `{slug}.md` and `context.md` (`cartier`, `nbcu`, `harvey`, `litify`), and the index links inconsistent targets (`harvey/context` vs `cretelligent/cretelligent`). Pick one canonical context file per project. Also `cartier/journal.md` contains two concatenated journal versions (two `#` H1 blocks) — consolidate.

3. **Stale project journals (last activity > 14 days).** `high-meadow-labs` (last_meeting 2026-04-23) and `cartier` (last meeting 2026-05-15) are `status: active` but stale. Long gaps to confirm active vs. dormant: `harvey` (2026-04-09), `litify` (2026-04-17), `nbcu` (2026-04-20), `loftware` (2026-04-27), `blink-payments` (2026-05-11).

4. **Mapping data gaps.** (a) Cetera Jira Project Key is listed as `F2` in mapping, but actual tickets/stories use `CET` — reconcile (likely `CET`). (b) MAI Jira Workspace/Key = TBD in mapping, but stories show `f2strategy.atlassian.net` / `MAI` — fill in. (c) Pending "Action needed" merges from the Updates sections (loftware, blink-payments, talus rows; Brian Hyman + Blink enrichment) are still unmerged into the Canonical Slug Index. (d) Linear project renamed Meadow → "Capacity Planning" — update mapping.

5. **TAGS.md out of sync with project roster.** Canonical project-tag list is missing `blink-payments`, `loftware`, `lefavi`, `cartier`, `talus`, `meadow`, `flex-dash`, `high-meadow-labs`, `high-meadow-website`. (A full inline-tag-usage scan was not run this mid-week pass.)

6. **Stories-sync naming/duplication.** Two generations coexist: older `stories-f2.md`/`stories-hm.md` and newer `stories-jira.md`/`stories-linear.md`, producing duplicate ticket listings (e.g., `MAI-1292` in both MAI files; `CET-110` in both Cetera files). Consolidate to one convention so the active-set view isn't double-counted.

7. **Wikilink case mismatch.** `cretelligent.md` links `[[...2026-06-02 - Stitch CREtelligent - Daily Dev Standup]]` but the file is `...daily dev standup.md` (lowercase). Resolves case-insensitively in Obsidian but is fragile — align the casing.

## Clean / verified

- No `clients` deprecated-slug usage anywhere in `wiki/`, `raw/`, or `Meeting Notes/`.
- No duplicate `(jira_workspace, jira_project_key)` pairs in `project-mapping.md`.
- Ticket prefixes route to the correct folders (CET→cetera, LNW→lnw, MAI→mai, IP→meadow/flex-dash).
- All nine meeting notes added since the 2026-06-01 ingest (June 1–2) are linked into the wiki — no orphaned meeting notes this pass.
- No parenthetical cross-reference (`# SlugA (SlugB)`) headings found in stories files.

---
*Auto-generated by second-brain-lint-wed*

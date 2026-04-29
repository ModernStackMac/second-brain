# Wiki Lint Report — Mid-week
**Run date:** 2026-04-29
**Issues found:** 6 critical, 8 recommended

## Critical

### C1. `loftware` folder unmapped in project-mapping.md
`wiki/projects/loftware/` exists with `context.md` and `journal.md` (active, created 2026-04-27). Not listed in the Canonical Slug Index table in `project-mapping.md`.
**Suggested fix:** Add row to Canonical Slug Index: `loftware` | High Meadows | Loftware | `wiki/projects/loftware/` | TBD | TBD. Add full Active Projects section entry.

### C2. `high-meadow-labs` folder unmapped in project-mapping.md
`wiki/projects/internal/high-meadow-labs/` exists with `journal.md` (active, `last_meeting: 2026-04-23`). Not in the Canonical Slug Index. Flagged on 2026-04-23 in index.md appended note — still not added.
**Suggested fix:** Add `high-meadow-labs` → `wiki/projects/internal/high-meadow-labs/` to project-mapping.md Canonical Slug Index and Active Projects.

### C3. Deprecated slug `f2-cetera` in cetera/overview.md aliases
`wiki/projects/cetera/overview.md` line 2: `aliases: [cetera, f2-cetera, f2/cetera]`. Both `f2-cetera` and `f2/cetera` are deprecated. Obsidian will still resolve wikilinks using these slugs, which defeats the deprecation. Carried over from prior lint (2026-04-22) — still unfixed.
**Suggested fix:** Remove `f2-cetera` and `f2/cetera` from aliases. Final: `aliases: [cetera]`.

### C4. Deprecated slug `clients` in obsidian-ecosystem.md
`wiki/topics/obsidian-ecosystem.md` references `wiki/clients/ — client context` in an example folder structure. Deprecated since 2026-04-18. Carried over from 2026-04-22 lint — still unfixed.
**Suggested fix:** Update to `wiki/projects/ — project context`.

### C5. Broken index entry — `[[reports/mai-project-overview]]`
`wiki/index.md` lists `[[reports/mai-project-overview]]` under Reports, but `wiki/reports/mai-project-overview.md` does not exist. Carried over from Sunday lint — still broken.
**Suggested fix:** Either create the file or remove the index entry.

### C6. Cetera Jira Project Key mismatch — mapping vs stories
`project-mapping.md` Canonical Slug Index lists cetera's Jira Project Key as `F2`, but `wiki/projects/cetera/stories-f2.md` frontmatter shows `jira_project_key: CET` and all ticket IDs use `CET-*` prefix. Carried over from 2026-04-22 lint — still unfixed.
**Suggested fix:** Update project-mapping.md — change cetera's Jira Project Key from `F2` to `CET`.

## Recommended

### R1. Harvey journal stale — 20 days since last meeting
`wiki/projects/harvey/journal.md` shows `last_meeting: 2026-04-09` (20 days ago), `status: active`. Most recent entry: `## Week of Apr 7–13, 2026`. Breached the 14-day threshold on Apr 23. Carried over from prior lint.
**Action:** Confirm whether Harvey is on hold or meetings are happening outside Fathom capture.

### R2. Index.md has multiple appended notes not integrated into sections
Several items were added as `**Note (date):**` blocks at the bottom of index.md instead of being placed in the proper section. Affected entries:
- `[[contour]]` (2026-04-21) — should be in `## Tools`
- `[[uat-deployment-coordination]]` (2026-04-22) — should be in `## Patterns`
- `[[internal/high-meadow-labs/journal]]` (2026-04-23) — should be in `## Projects`
- `[[multi-agent-voting]]` (2026-04-23) — should be in `## Patterns`
- `[[reports/weekly-synthesis-2026-04-27]]` (2026-04-27) — should be in `## Reports`
- `[[loftware/context]]` + `[[loftware/journal]]` (2026-04-27) — should be in `## Projects`
**Suggested fix:** Move each entry into its correct section and remove the appended notes.

### R3. f2-internal/CE/ pages not in index.md
Five files exist under `wiki/f2-internal/CE/` but are not cataloged anywhere in `wiki/index.md`:
- `growth-engine.md`
- `core-salesforce-usage-alignment.md`
- `gifts-object-alignment.md`
- `app-address.md`
- `financial-planning.md`
**Suggested fix:** Add an `## F2 Internal` section to index.md listing these pages.

### R4. Incomplete flex-dash project folder
`wiki/projects/internal/flex-dash/` still has only `stories-hm.md` and `board.md`. Missing `context.md` and `journal.md`. Development is "fully paused to redirect capacity to MAI." Carried over from prior lint.
**Action:** Create minimal stubs noting the pause, or demote flex-dash to inactive in project-mapping.md.

### R5. Stale non-canonical wikilinks in supabase.md and other pages
`wiki/tools/supabase.md` still uses `[[meadow-app]]` and `[[hms-capacity-planning]]`. `wiki/entities/high-meadows.md` has 2 occurrences of `[[hms-capacity-planning]]`. These resolve via aliases on `internal/meadow/overview.md` but are non-canonical. Carried over from prior lint.
**Suggested fix:** Replace all with `[[meadow]]`.

### R6. MAI Jira Project Key still TBD in mapping
`wiki/projects/mai/stories-f2.md` frontmatter shows `jira_project_key: MAI` but project-mapping.md still lists `TBD`. Currently 0 active stories. Carried over from prior lint.
**Suggested fix:** Update project-mapping.md with correct MAI workspace and project key.

### R7. Litify journal approaching staleness threshold
`wiki/projects/litify/journal.md` last_meeting is 2026-04-17 (12 days ago). Will breach 14-day threshold on 2026-05-01. No new meeting notes in `Meeting Notes/Stand8/Litify/`.
**Action:** Monitor — will flag as stale if no update by next lint.

### R8. Missing frontmatter on some journals
`wiki/projects/internal/high-meadow-website/journal.md` and `wiki/projects/internal/meadow/journal.md` have no YAML frontmatter (`status`, `last_meeting`, `open_actions`). Other project journals follow this convention.
**Suggested fix:** Add standard frontmatter to match other project journals.

## Checks with no issues

- **Workspace+key uniqueness:** No duplicate (jira_workspace, jira_project_key) pairs found.
- **Stories frontmatter matches folder:** All 5 stories files correct (cetera→cetera, mai→mai, lnw→lnw, meadow→meadow, flex-dash→flex-dash).
- **Ticket-prefix routing:** CET-* in cetera ✓, LNW-* in lnw ✓, IP-* in meadow/flex-dash ✓.
- **Parenthetical cross-reference headings:** None found in any stories files.
- **Non-canonical tags:** No new non-canonical tags detected. Wiki pages remain largely untagged.
- **LNW journal frontmatter:** Fixed since last lint — `last_meeting: 2026-04-22` now populated.

## Resolved since last mid-week lint (2026-04-22)

- ~~LNW journal blank `last_meeting`~~ — now set to `2026-04-22`.
- ~~Broken index entry `[[internal/flex-dash/journal]]`~~ — removed from index.md.
- ~~MSS journal orphaned Contour content~~ — content now inside proper week heading.

---
*Auto-generated by second-brain-lint-wed*
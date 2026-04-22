# Wiki Lint Report — Mid-week
**Run date:** 2026-04-22
**Issues found:** 4 critical, 7 recommended

## Critical

### 1. Jira Project Key mismatch — cetera
`project-mapping.md` Canonical Slug Index lists cetera's Jira Project Key as `F2`, but `wiki/projects/cetera/stories-f2.md` frontmatter shows `jira_project_key: CET` and all ticket IDs use `CET-*` prefix (e.g., `CET-4`, `CET-110`). Story-sync is using the correct key; the mapping table is stale.
**Suggested fix:** Update project-mapping.md — change cetera's Jira Project Key from `F2` to `CET` in both the Canonical Slug Index table and the Active Projects detail section.

### 2. Broken index.md entry — `[[internal/flex-dash/journal]]`
`wiki/index.md` references `[[internal/flex-dash/journal]]` but no `journal.md` exists in `wiki/projects/internal/flex-dash/`. The folder contains only `stories-hm.md` and `board.md`. Previously flagged in Sunday lint (2026-04-20) — still unresolved.
**Suggested fix:** Either create `wiki/projects/internal/flex-dash/journal.md` (even a stub noting the project is paused), or update the index entry to `[[internal/flex-dash/stories-hm]]` only.

### 3. Modern Stack Systems journal — orphaned content outside week heading
The Contour Platform Demo entry (Apr 21) in `wiki/projects/modern-stack-systems/journal.md` is appended after the `*Last updated*` footer and outside any `## Week of` heading block. It belongs inside the `## Week of Apr 21, 2026` block alongside the Blink advisory entry.
**Suggested fix:** Move the Contour Platform Demo content into the `## Week of Apr 21, 2026` section, before the `---` separator.

### 4. LNW journal — blank `last_meeting` frontmatter
`wiki/projects/lnw/journal.md` has `last_meeting: ` (empty) in frontmatter, but the journal body contains a `## Week of Apr 14–19, 2026` entry. The staleness check can't evaluate this project without a valid date.
**Suggested fix:** Set `last_meeting: 2026-04-14` in the frontmatter.

## Recommended

### 5. Harvey journal approaching staleness threshold
`wiki/projects/harvey/journal.md` shows `last_meeting: 2026-04-09` (13 days ago), `status: active`. Will breach the 14-day stale-journal threshold tomorrow (Apr 23). No new meeting notes found in `Meeting Notes/Stand8/Harvey/` since Apr 9.
**Action:** Confirm whether Harvey is on hold or if meetings are happening outside Fathom capture.

### 6. Incomplete flex-dash project folder
`wiki/projects/internal/flex-dash/` has only `stories-hm.md` (1 ticket: IP-8) and `board.md`. Missing `context.md` and `journal.md`. Flex-Dash development is "fully paused to redirect capacity to MAI" per multiple sources.
**Action:** Either create minimal context.md/journal.md stubs noting the pause, or demote flex-dash to inactive in project-mapping.md.

### 7. `wiki/topics/obsidian-ecosystem.md` references deprecated `wiki/clients/`
Line references `wiki/clients/ — client context` in an example folder structure. The `clients/` folder was deprecated (2026-04-18) and merged into `projects/`. Previously flagged in Sunday lint — still present.
**Suggested fix:** Update to `wiki/projects/ — project context`.

### 8. Stale `[[meadow-app]]` wikilink in `wiki/tools/supabase.md`
`supabase.md` still uses `[[meadow-app]]` and `[[hms-capacity-planning]]`. These resolve via aliases on `internal/meadow/overview.md`, so not technically broken, but non-canonical. Sunday lint fixed the same pattern in `claude-ai.md` but missed supabase.md.
**Suggested fix:** Replace `[[meadow-app]]` → `[[meadow]]` and `[[hms-capacity-planning]]` → `[[meadow]]` in supabase.md.

### 9. Stale `[[hms-capacity-planning]]` wikilinks in active pages
Found in `wiki/entities/high-meadows.md` (2 occurrences) and `wiki/projects/mai/context.md`. Resolve via alias but are non-canonical. Prefer `[[meadow]]`.
**Suggested fix:** Replace with `[[meadow]]` in all three locations.

### 10. MAI Jira Project Key — mapping says TBD but story-sync uses `MAI`
`wiki/projects/mai/stories-f2.md` frontmatter shows `jira_project_key: MAI` but project-mapping.md still lists `TBD` for both Jira Workspace and Jira Project Key. Currently 0 active stories so no routing impact.
**Suggested fix:** Update project-mapping.md with the correct MAI Jira workspace and project key once confirmed.

### 11. `lefavi` wiki folder not yet created
project-mapping.md documents `wiki/projects/lefavi/` as "(not yet created)". Meeting notes exist at `Meeting Notes/High Meadows/Lefavi/`. If the engagement becomes active, the wiki folder should be scaffolded.
**Action:** Create when needed, or add a stub now to prevent future routing gaps.

## Checks with no issues

- **Workspace+key uniqueness:** No duplicate (jira_workspace, jira_project_key) pairs found.
- **Stories frontmatter matches folder:** `cetera/stories-f2.md` → `project: cetera` ✓, `mai/stories-f2.md` → `project: mai` ✓, `internal/meadow/stories-hm.md` → `project: meadow` ✓, `internal/flex-dash/stories-hm.md` → `project: flex-dash` ✓, `lnw/stories-f2.md` → `project: lnw` ✓.
- **Ticket-prefix routing:** CET-* tickets in cetera ✓, LNW-* tickets in lnw ✓, IP-* tickets in meadow and flex-dash ✓.
- **Parenthetical cross-reference headings:** None found in any stories files.
- **Deprecated slug `f2-cetera` in wiki pages:** Only found in `cetera/overview.md` aliases (intentional backward compat) and historical log.md entries (exempt). `weekly-synthesis-2026-04-19.md` references it in context of the migration — informational, not active usage.
- **Deprecated slug `clients` in wiki pages:** Only found in historical/informational contexts (log.md, changelog.md, overview.md provenance notes, PEER-SETUP-GUIDE.md explanation) plus the obsidian-ecosystem.md issue flagged above as #7.
- **Non-canonical tags:** No new non-canonical tags detected.

---
*Auto-generated by second-brain-lint-wed*
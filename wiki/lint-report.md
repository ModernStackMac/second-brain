# Wiki Lint Report
**Run date:** 2026-04-26
**Total pages scanned:** 82
**Issues found:** 6 critical, 8 recommended, 4 informational

## Critical Issues

### C1. Unmapped project folder: `high-meadow-labs`

`wiki/projects/internal/high-meadow-labs/` exists with a `journal.md` (has valid frontmatter: status=active, owner=Mac, priority=p2) but has NO entry in `project-mapping.md`'s Canonical Slug Index. Story-sync and other automation cannot route to this project.

**Fix:** Add a `high-meadow-labs` row to the Canonical Slug Index in `project-mapping.md` and a full Active Projects section. This was created 2026-04-23 per the index.md note.

### C2. Deprecated slug `f2-cetera` in wiki content

- `wiki/projects/cetera/overview.md` line 2: `aliases: [cetera, f2-cetera, f2/cetera]` includes the deprecated slug `f2-cetera` as an alias.

**Fix:** Remove `f2-cetera` and `f2/cetera` from the aliases list. Canonical slug is `cetera`.

### C3. Missing report file referenced in index

- `wiki/index.md` references `[[reports/mai-project-overview]]` but `wiki/reports/mai-project-overview.md` does not exist. Only two report files exist: `weekly-synthesis-2026-04-19.md` and `weekly-synthesis-2026-04-20.md`.

**Fix:** Either create the report page or remove the dangling index entry.

### C4. Broken project-slug wiki-links (80+ references across 40+ pages)

Project slugs are used as bare `[[slug]]` links throughout the wiki, but no file has that exact basename. These links do NOT resolve in Obsidian:

| Broken Link | Reference Count | Example File |
|---|---|---|
| `[[harvey]]` | 14 | wiki/tools/agentforce.md |
| `[[cretelligent]]` | 15 | wiki/tools/connect-api.md |
| `[[litify]]` | 14 | wiki/tools/data-cloud.md |
| `[[nbcu]]` | 10 | wiki/tools/data-cloud.md |
| `[[meadow]]` | 7 | wiki/tools/claude-ai.md |
| `[[high-meadow-website]]` | 5 | wiki/projects/internal/high-meadow-website/files/Website-Feedback-2026-04-17.md |
| `[[high-meadows-mai]]` | 5 | wiki/entities/high-meadows.md |
| `[[hms-capacity-planning]]` | 4 | wiki/tools/supabase.md |
| `[[mai]]` | 3 | wiki/patterns/uat-deployment-coordination.md |
| `[[cetera]]` | 1 | wiki/patterns/job-function-permission-sets.md |
| `[[high-meadow-labs]]` | 1 | wiki/patterns/multi-agent-voting.md |
| `[[meadow-app]]` | 1 | wiki/tools/supabase.md |

**Fix options (ask first, high blast radius):**
1. Create redirect/alias files (e.g., `wiki/projects/harvey.md` that points to `harvey/context.md`)
2. Rewrite all bare `[[slug]]` links to `[[slug/context]]` or `[[slug/overview]]`
3. Add Obsidian `aliases` frontmatter in each project's `context.md` so `[[harvey]]` resolves

### C5. Stale empty folder: `wiki/projects/flex-dash/`

Top-level `wiki/projects/flex-dash/` exists as an empty directory. The canonical location is `wiki/projects/internal/flex-dash/`. This is a leftover from the 2026-04-18 folder restructure.

**Fix:** Delete the empty `wiki/projects/flex-dash/` directory.

### C6. Missing project folder: `lefavi`

`project-mapping.md` lists `lefavi` with folder `wiki/projects/lefavi/` marked "(not yet created)". No folder exists yet.

**Fix:** Create `wiki/projects/lefavi/` with at minimum a `context.md` and `journal.md` when the engagement starts, or add a note to project-mapping that this is pending kickoff.

## Recommended Fixes

### R1. Missing journal: `wiki/projects/internal/flex-dash/journal.md`

No journal.md exists for the flex-dash project. Only `board.md` and `stories-hm.md` are present.

**Fix:** Create a minimal `journal.md` with status/owner/priority/last_meeting/open_actions frontmatter.

### R2. Missing journal frontmatter fields

These journals exist but lack the required frontmatter (status, owner, priority, last_meeting, open_actions):

- `wiki/projects/modern-stack-systems/journal.md` -- has `type` and `project` fields only, missing status/owner/priority/last_meeting/open_actions
- `wiki/projects/internal/meadow/journal.md` -- no frontmatter at all
- `wiki/projects/internal/high-meadow-website/journal.md` -- no frontmatter at all

**Fix:** Add the standard frontmatter block to each.

### R3. Orphan pages (zero inbound links)

These pages have no inbound wiki-links from any other page:

- `wiki/f2-internal/CE/app-address.md`
- `wiki/f2-internal/CE/core-salesforce-usage-alignment.md`
- `wiki/f2-internal/CE/gifts-object-alignment.md`
- `wiki/f2-internal/CE/growth-engine.md`
- `wiki/projects/cetera/board.md`
- `wiki/projects/internal/flex-dash/board.md`
- `wiki/projects/internal/meadow/board.md`
- `wiki/projects/lnw/board.md`
- `wiki/projects/mai/board.md`
- `wiki/projects/projects.md`

**Fix:** The `f2-internal/CE/` pages should be cross-linked from `wiki/projects/cetera/context.md`. The `board.md` files and `projects.md` may be operational (Dataview-driven) and don't need inbound links, but confirm intent.

### R4. Missing index entries

These wiki files are not listed in `wiki/index.md`:

- `wiki/f2-internal/CE/app-address.md`
- `wiki/f2-internal/CE/core-salesforce-usage-alignment.md`
- `wiki/f2-internal/CE/gifts-object-alignment.md`
- `wiki/f2-internal/CE/growth-engine.md`
- `wiki/projects/cetera/board.md`
- `wiki/projects/internal/flex-dash/board.md`
- `wiki/projects/internal/meadow/board.md`
- `wiki/projects/lnw/board.md`
- `wiki/projects/mai/board.md`
- `wiki/projects/projects.md`
- `wiki/projects/internal/high-meadow-website/files/README.md`
- `wiki/projects/internal/high-meadow-website/files/Website-Feedback-2026-04-17.md`

**Fix:** Add an "F2 Internal" section and note board files in index.md. Board files may be excluded intentionally (operational, not knowledge).

### R5. Missing `contour` in index Tools section

`wiki/tools/contour.md` exists and is referenced at the bottom of `wiki/index.md` as a loose note but is not in the Tools section.

**Fix:** Move the `[[contour]]` entry into the Tools section of index.md.

### R6. `wiki/projects/internal/high-meadow-labs/` missing context.md

The high-meadow-labs project folder only has `journal.md`. Per schema, projects should have a `context.md` with stable reference info.

**Fix:** Create `wiki/projects/internal/high-meadow-labs/context.md` with HMS AI product initiative details from the journal.

### R7. Historical broken links in log.md (40+ occurrences)

`wiki/log.md` contains many broken links from older entries: `[[MCP-Obsidian]]`, `[[scheduled-tasks]]`, `[[productivity-systems]]`, `[[hms-capacity-planning]]`, `[[high-meadows-mai]]`, `[[meadow-app]]`, `[[mai-crm-build]]`, `[[f2-cetera]]`, `[[capacity-planning]]`, `[[Second Brain/wiki/projects/mai/context]]`.

These are legacy references from before the 2026-04-18 restructure. They don't affect navigation but add noise.

**Fix:** Batch-replace deprecated link targets in log.md entries to canonical paths. Low priority since log.md is operational, not navigated.

### R8. Log rotation check

`wiki/log.md` has 48 entries / 1440 lines. Under the 200-entry threshold. No rotation needed this cycle.

## Informational

### I1. Stale overview pages

These overview pages have `Last updated` dates older than 14 days on active projects:

- `wiki/projects/mai/overview.md` -- Last updated: 2026-04-10
- `wiki/projects/harvey/overview.md` -- Last updated: 2026-04-10
- `wiki/projects/cretelligent/overview.md` -- Last updated: 2026-04-10
- `wiki/projects/litify/overview.md` -- Last updated: 2026-04-10
- `wiki/projects/internal/meadow/overview.md` -- Last updated: 2026-04-10

None are past the 60-day threshold yet. These were merged during the Apr 18 restructure and haven't been refreshed since.

### I2. Source coverage

All 8 files in `raw/articles/` have been processed into `wiki/articles/`. No unprocessed raw sources detected.

`Meeting Notes/` folder is not mounted in the current sandbox session, so unprocessed meeting note detection was not possible this run. The last ingest (2026-04-24) reported all sources through 2026-04-23 as processed.

### I3. Non-canonical tag usage

- `#active` used in `wiki/topics/obsidian-ecosystem.md` line 49 (inside prose, not as a tag). This is inline example text, not an actual tag application. No action needed.

### I4. Ticket prefix validation

All stories files have correct ticket-prefix-to-folder routing:
- `wiki/projects/mai/stories-f2.md`: MAI-* tickets, project=mai -- correct
- `wiki/projects/cetera/stories-f2.md`: CET-* tickets, project=cetera -- correct (CET prefix not in mapping but no conflict)
- `wiki/projects/lnw/stories-f2.md`: LNW-* tickets, project=lnw -- correct (matches `f2strategy.atlassian.net` / `LNW`)
- `wiki/projects/internal/flex-dash/stories-hm.md`: IP-* tickets, project=flex-dash -- correct (Linear)
- `wiki/projects/internal/meadow/stories-hm.md`: IP-* tickets, project=meadow -- note: both flex-dash and meadow use IP-* prefix from the same Linear workspace. No conflict since Linear project names differ.

No heading cross-reference issues found (no `# SlugA (SlugB)` patterns in stories files).

---
*Auto-generated by second-brain-lint*

# Wiki Lint Report
**Run date:** 2026-05-10
**Total pages scanned:** 102
**Issues found:** 8 critical, 12 recommended, 4 informational

## Critical Issues

### 1. Broken link: `[[reports/mai-project-overview]]`
- **File:** `wiki/index.md:78`
- **Issue:** Referenced file does not exist. Either never created or was deleted.
- **Fix:** Remove from index or create the report at `wiki/reports/mai-project-overview.md`.

### 2. Broken link: `[[high-meadow-labs]]` (1 occurrence in content)
- **File:** `wiki/patterns/multi-agent-voting.md:47`
- **Issue:** No file at this path. Should resolve to `internal/high-meadow-labs/journal`.
- **Fix:** Replace with `[[internal/high-meadow-labs/journal|High Meadow Labs]]`.

### 3. Broken link: `[[meadow]]` — 7 occurrences
- **Files:** `wiki/tools/claude-ai.md:43,54`, `wiki/projects/mai/overview.md:58`, `wiki/projects/internal/high-meadow-website/context.md:16,104`, `wiki/projects/cretelligent/overview.md:67`, `wiki/projects/modern-stack-systems/context.md:36`
- **Issue:** No file or alias resolves `[[meadow]]`. Canonical slug is `internal/meadow`.
- **Fix:** Replace all with `[[internal/meadow/context|Meadow]]` or add alias `meadow` to `wiki/projects/internal/meadow/context.md` frontmatter.

### 4. Broken link: `[[high-meadows-mai]]` — 5 occurrences
- **Files:** `wiki/projects/internal/meadow/context.md:46`, `wiki/concepts/flex-dash.md:5,31`, `wiki/entities/high-meadows.md:10,36`
- **Issue:** No file or alias. Should point to MAI project.
- **Fix:** Replace with `[[mai/context|MAI]]` or add alias `high-meadows-mai` to `wiki/projects/mai/overview.md` frontmatter.

### 5. Broken link: `[[hms-capacity-planning]]` — 4 occurrences
- **Files:** `wiki/tools/supabase.md:37`, `wiki/projects/mai/context.md:45`, `wiki/entities/high-meadows.md:11,37`
- **Issue:** No file or alias. Should point to Meadow project.
- **Fix:** Replace with `[[internal/meadow/context|Meadow]]` or add alias `hms-capacity-planning` to meadow context.md frontmatter.

### 6. Broken link: `[[meadow-app]]` — 1 occurrence
- **File:** `wiki/tools/supabase.md:36`
- **Issue:** Same as above — should resolve to internal/meadow.
- **Fix:** Replace with `[[internal/meadow/context|Meadow]]`.

### 7. Stories frontmatter mismatch (10b): `wiki/projects/internal/flex-dash/stories-hm.md`
- **Frontmatter:** `project: flex-dash`
- **Folder:** `internal/flex-dash`
- **Fix:** Update frontmatter to `project: internal/flex-dash`.

### 8. Stories frontmatter mismatch (10b): `wiki/projects/internal/meadow/stories-hm.md`
- **Frontmatter:** `project: meadow`
- **Folder:** `internal/meadow`
- **Fix:** Update frontmatter to `project: internal/meadow`.

## Recommended Fixes

### 1. Unmapped project folders (10a)
The following `wiki/projects/` folders have no entry in `project-mapping.md`:
- `cartier` — direct MSS client, needs mapping entry
- `cretelligent` — active project, needs mapping entry (Stitch/Jira TBD)
- `harvey` — Stand8 engagement, needs mapping entry
- `litify` — Stand8 engagement, needs mapping entry
- `loftware` — High Meadows prospect, needs mapping entry
- `modern-stack-systems` — Mac's practice, needs mapping entry
- `nbcu` — Stand8 engagement, needs mapping entry
- `internal/high-meadow-labs` — HMS AI initiative, needs mapping entry
- `internal/high-meadow-website` — HMS website project, needs mapping entry

**Note:** `wiki/projects/flex-dash/` exists as an empty top-level folder. Actual content lives at `wiki/projects/internal/flex-dash/`. The empty folder should be removed.

### 2. Orphan pages — 5 f2-internal/CE pages with zero inbound links
- `wiki/f2-internal/CE/app-address.md`
- `wiki/f2-internal/CE/core-salesforce-usage-alignment.md`
- `wiki/f2-internal/CE/financial-planning.md`
- `wiki/f2-internal/CE/gifts-object-alignment.md`
- `wiki/f2-internal/CE/growth-engine.md`

These Confluence mirrors have no cross-links from any wiki page. Consider linking from `cetera/context.md` or adding to index.

### 3. Missing journal frontmatter fields (10g)
Required fields: `status, owner, priority, last_meeting, open_actions`

- `wiki/projects/cartier/journal.md` — all fields missing (empty frontmatter)
- `wiki/projects/loftware/journal.md` — all fields missing (empty frontmatter)
- `wiki/projects/modern-stack-systems/journal.md` — all fields missing (empty frontmatter)
- `wiki/projects/internal/high-meadow-website/journal.md` — all fields missing (empty frontmatter)
- `wiki/projects/internal/meadow/journal.md` — all fields missing (empty frontmatter)

### 4. Missing context.md (10g)
- `wiki/projects/internal/flex-dash/context.md` — no context file
- `wiki/projects/internal/high-meadow-labs/context.md` — no context file

### 5. Stale journal: Harvey
- `last_meeting: 2026-04-09` — 31 days ago
- Status still marked `active`. Confirm if engagement is on hold or awaiting next meeting.

### 6. Approaching staleness: Litify
- `last_meeting: 2026-04-17` — 23 days ago
- SOW was submitted; status may be "waiting for client."

### 7. Index.md has unintegrated appended notes
Lines 84–114 contain 8 "Note" entries appended since 2026-04-22. These reference new pages (cartier, loftware, high-meadow-labs, multi-agent-voting, dual-path-vendor-dependency, automation-kill-switch, uat-deployment-coordination, contour) that should be moved into their proper index sections (Projects, Patterns, Tools).

### 8. Missing index entries
The following pages exist but are not listed in the proper sections of `wiki/index.md`:
- `wiki/projects/cartier/` (in Notes only)
- `wiki/projects/internal/high-meadow-labs/journal.md` (in Notes only)
- `wiki/patterns/multi-agent-voting.md` (in Notes only)
- `wiki/patterns/dual-path-vendor-dependency.md` (in Notes only)
- `wiki/patterns/uat-deployment-coordination.md` (in Notes only)
- `wiki/patterns/automation-kill-switch.md` (in Notes only)
- `wiki/reports/weekly-synthesis-2026-04-27.md` (in Notes only)
- `wiki/reports/agentforce-knowledge-report.md` (in Notes only)

### 9. Deprecated alias in frontmatter
- `wiki/projects/cetera/overview.md:2` — `aliases: [cetera, f2-cetera, f2/cetera]`
- The `f2-cetera` and `f2/cetera` aliases exist to resolve legacy links. No pages currently use `[[f2-cetera]]` directly (confirmed). Consider removing the deprecated aliases since they serve no purpose.

## Informational

### 1. Non-canonical tag: `#active`
- `wiki/topics/obsidian-ecosystem.md:49` — uses `#active` which is not in TAGS.md
- This is in example text describing Dataview usage, not an actual tag applied to the page. No action needed.

### 2. Stale overview pages
Several overview.md files have not been updated since initial creation (2026-04-10 to 2026-04-18):
- `wiki/projects/cretelligent/overview.md` (Apr 10)
- `wiki/projects/harvey/overview.md` (Apr 10)
- `wiki/projects/internal/meadow/overview.md` (Apr 10)
- `wiki/projects/litify/overview.md` (Apr 10)
- `wiki/projects/mai/overview.md` (Apr 10)

These are supplementary to context.md (which stays current) so low urgency.

### 3. Source coverage
All 8 `raw/articles/` files are processed. All 3 `raw/projects/meadow/` files were consumed during initial setup. No unprocessed raw sources detected.

### 4. Log size
`wiki/log.md` is at ~125 entries, under the 200-entry rotation threshold. No rotation needed.

---
*Auto-generated by second-brain-lint*

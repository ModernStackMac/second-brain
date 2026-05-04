# Wiki Lint Report
**Run date:** 2026-05-03
**Total pages scanned:** 91
**Issues found:** 10 critical, 9 recommended, 4 informational

---

## Critical Issues

### 1. Unmapped project folder: `cartier`
- **Path:** `wiki/projects/cartier/` (contains context.md, journal.md)
- **Created:** 2026-04-30 ingest (Chad & Mac Connect)
- **Fix:** Add `cartier` row to the Canonical Slug Index table in `project-mapping.md` and a full `### Modern Stack Systems / Cartier` section under Active Projects. Suggested fields: Slug=`cartier`, Partner=Modern Stack Systems (direct client), Client=Cartier, Folder=`wiki/projects/cartier/`, Jira Workspace=N/A, Jira Project Key=N/A.

### 2. Unmapped project folder: `high-meadow-labs`
- **Path:** `wiki/projects/internal/high-meadow-labs/` (contains journal.md)
- **Created:** 2026-04-23 ingest
- **Fix:** Add `high-meadow-labs` row to the Canonical Slug Index table. Suggested: Slug=`high-meadow-labs`, Partner=High Meadows, Client=Internal (AI model training initiative), Folder=`wiki/projects/internal/high-meadow-labs/`, Jira=N/A.

### 3. Loftware slug not integrated into Canonical Slug Index table
- **Path:** `project-mapping.md` — Updates section at bottom (line ~268) has the row but it was never moved into the actual table (line ~17–32).
- **Fix:** Move the `loftware` row into the Canonical Slug Index table and integrate the `### High Meadows / Loftware` section into Active Projects.

### 4. Cetera Jira project key mismatch
- **Mapping says:** `f2strategy.atlassian.net` / `F2`
- **Actual tickets:** CET-4, CET-111, CET-110 (key = `CET`)
- **File:** `wiki/projects/cetera/stories-f2.md` frontmatter: `jira_project_key: CET`
- **Fix:** Update project-mapping.md Canonical Slug Index to change cetera's Jira Project Key from `F2` to `CET`. Story-sync is already using the correct key.

### 5. Broken link: `[[reports/mai-project-overview]]`
- **File:** `wiki/index.md` line 78
- **Issue:** No file exists at `wiki/reports/mai-project-overview.md`. The MAI overview lives at `wiki/projects/mai/overview.md` — this is not a report.
- **Fix:** Remove the index entry or create a redirect. The content is already at `wiki/projects/mai/overview.md`.

### 6. Broken link: `[[hms-capacity-planning]]` (4 occurrences)
- `wiki/tools/supabase.md` line 37
- `wiki/projects/mai/context.md` line 44
- `wiki/entities/high-meadows.md` lines 11, 37
- **Issue:** Legacy alias from pre-consolidation. No file or alias with this name.
- **Fix:** Replace with `[[internal/meadow/context|Meadow]]` or add alias `hms-capacity-planning` to `wiki/projects/internal/meadow/overview.md`.

### 7. Broken link: `[[meadow-app]]`
- **File:** `wiki/tools/supabase.md` line 36
- **Issue:** No file or alias. Likely meant `[[internal/meadow/context|Meadow]]`.
- **Fix:** Replace with `[[internal/meadow/context|Meadow]]` or add alias.

### 8. Broken link: `[[high-meadow-labs]]`
- **File:** `wiki/patterns/multi-agent-voting.md` line 47
- **Issue:** No file named `high-meadow-labs.md` and no alias. The content is at `wiki/projects/internal/high-meadow-labs/journal.md`.
- **Fix:** Replace with `[[internal/high-meadow-labs/journal|High Meadow Labs]]`.

### 9. Orphan empty folder: `wiki/projects/flex-dash/`
- **Issue:** Empty directory at top level. Canonical location is `wiki/projects/internal/flex-dash/`. This is a leftover from the 2026-04-18 restructure.
- **Fix:** Delete the empty `wiki/projects/flex-dash/` directory.

### 10. Index.md has 8+ items in Notes not integrated into proper sections
- **Issue:** Since 2026-04-22, new pages have been appended as `**Note (date):**` blocks at the bottom of `wiki/index.md` instead of being inserted into the correct section (Projects, Patterns, Reports, Tools). This includes:
  - Projects: cartier, loftware, internal/high-meadow-labs
  - Patterns: uat-deployment-coordination, multi-agent-voting
  - Reports: weekly-synthesis-2026-04-27, agentforce-knowledge-report
  - Tools: contour (partially — listed as a standalone bullet outside any section)
- **Fix:** Integrate each item into its proper index section and remove the Note blocks.

---

## Recommended Fixes

### 1. Broken link: `[[meadow]]` — 7 occurrences, no file or alias
- `wiki/projects/mai/overview.md` line 58
- `wiki/projects/cretelligent/overview.md` line 67
- `wiki/projects/internal/high-meadow-website/context.md` line 104
- `wiki/projects/internal/meadow/overview.md` line 120
- `wiki/projects/modern-stack-systems/context.md` line 36
- `wiki/tools/claude-ai.md` lines 43, 54
- **Fix:** Add `aliases: [meadow]` to `wiki/projects/internal/meadow/overview.md` frontmatter. This resolves all 7 links at once.

### 2. Broken link: `[[loftware]]` in `wiki/projects/modern-stack-systems/journal.md` line 26
- **Fix:** Add `aliases: [loftware]` to `wiki/projects/loftware/context.md` frontmatter.

### 3. Missing journal: `wiki/projects/internal/flex-dash/`
- **Issue:** `flex-dash` is a mapped project but has no `journal.md`. Only contains `stories-hm.md` and `board.md`.
- **Fix:** Create `journal.md` with standard frontmatter. Development is paused (for MAI), so a minimal stub is appropriate.

### 4. Journals missing standard frontmatter (status, owner, priority, last_meeting, open_actions)
- `wiki/projects/cartier/journal.md` — has type/project/updated, missing status/owner/priority/last_meeting/open_actions
- `wiki/projects/loftware/journal.md` — same
- `wiki/projects/modern-stack-systems/journal.md` — same
- `wiki/projects/internal/high-meadow-website/journal.md` — no frontmatter at all
- `wiki/projects/internal/meadow/journal.md` — no frontmatter at all

### 5. Orphan pages with zero inbound links
- `wiki/projects/projects.md` — Spaces config file, not a wiki page. Consider removing from wiki/.
- `wiki/projects/*/board.md` (5 files: cetera, lnw, mai, internal/flex-dash, internal/meadow) — not linked from index or any other page.
- `wiki/f2-internal/CE/*.md` (5 files) — Confluence mirror pages, not linked from index.

### 6. Missing project folder: `lefavi`
- **Mapping:** `project-mapping.md` lists `lefavi` with note "(not yet created)".
- **Fix:** Create `wiki/projects/lefavi/context.md` and `wiki/projects/lefavi/journal.md` when the project becomes active, or remove from mapping if abandoned.

### 7. Missing context.md: `wiki/projects/internal/high-meadow-labs/`
- **Issue:** Folder only has `journal.md`. Per SCHEMA, project folders should have both `context.md` (stable reference) and `journal.md` (rolling narrative).
- **Fix:** Create `context.md` with HMS Labs AI initiative overview, tech stack, and key contacts.

### 8. Deprecated path reference in active content
- **File:** `wiki/topics/obsidian-ecosystem.md` line 93
- **Content:** `wiki/clients/` — client context
- **Fix:** Replace with `wiki/projects/` — the `clients/` folder was merged into `projects/` on 2026-04-18.

### 9. Missing cross-references
- `wiki/entities/high-meadows.md` doesn't reference Loftware or High Meadow Labs.
- `wiki/entities/modern-stack-systems.md` doesn't reference Cartier.
- `wiki/projects/loftware/context.md` not cross-linked from entity pages.

---

## Informational

### 1. Stale projects (no meeting > 14 days)
- **Harvey:** last_meeting 2026-04-09 (24 days ago). Oldest active project.
- **Litify:** last_meeting 2026-04-17 (16 days ago). SOW phase may explain gap.

### 2. Deprecated slug `f2-cetera` in aliases
- **File:** `wiki/projects/cetera/overview.md` line 2 — `aliases: [cetera, f2-cetera, f2/cetera]`
- **Purpose:** Backward-compatible Obsidian alias for old links. Functional but could be removed once all legacy references are gone.

### 3. Historical `clients/` references in "Merged from" notes
- 5 files contain `Merged from clients/...` in their "Last updated" line: mai/overview.md, harvey/overview.md, meadow/overview.md, cretelligent/overview.md, litify/overview.md.
- These are historical provenance notes, not active links. No action needed.

### 4. Non-canonical tag: `#active`
- Used in 2 files. Not listed in TAGS.md. Should be `#status/in-progress` or removed.

---

## Log Rotation Status
- **Entries:** 87 (threshold: 200). No rotation needed.

## Commitments Status
- Not scanned this run (commitments.md outside mounted folder).

---
*Auto-generated by second-brain-lint*

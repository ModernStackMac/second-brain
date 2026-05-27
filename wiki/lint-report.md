# Wiki Lint Report
**Run date:** 2026-05-26
**Total pages scanned:** 106
**Issues found:** 8 critical, 10 recommended, 3 informational

## Critical Issues

### 1. Unmapped project folders (10a)

11 project folders under `wiki/projects/` have no entry in `project-mapping.md`. These folders are actively used but cannot be routed by story-sync.

| Folder | Suggested Fix |
|---|---|
| `blink-payments` | Add to Canonical Slug Index (no Jira/Linear source — manual project) |
| `cartier` | Add to Canonical Slug Index (no Jira/Linear source — direct MSS client) |
| `cretelligent` | Add to Canonical Slug Index (no Jira/Linear source — Stitch partner) |
| `harvey` | Add to Canonical Slug Index (no Jira/Linear source — Stand8 partner) |
| `litify` | Add to Canonical Slug Index (no Jira/Linear source — Stand8 partner) |
| `loftware` | Add to Canonical Slug Index (no Jira/Linear source — HMS prospect) |
| `modern-stack-systems` | Add to Canonical Slug Index (no Jira/Linear source — internal) |
| `nbcu` | Add to Canonical Slug Index (no Jira/Linear source — Stand8 partner) |
| `internal/high-meadow-labs` | Add to Canonical Slug Index under internal/ |
| `internal/high-meadow-website` | Add to Canonical Slug Index under internal/ |
| `flex-dash` (top-level) | **DELETE** — empty duplicate of `internal/flex-dash`. Contains zero files. |

### 2. Stories frontmatter mismatches (10b)

| File | Frontmatter `project` | Enclosing folder | Fix |
|---|---|---|---|
| `wiki/projects/internal/flex-dash/stories-hm.md` | `flex-dash` | `internal/flex-dash` | Update frontmatter to `project: internal/flex-dash` |
| `wiki/projects/internal/meadow/stories-hm.md` | `meadow` | `internal/meadow` | Update frontmatter to `project: internal/meadow` |

### 3. Deprecated slug alias persists

`wiki/projects/cetera/overview.md` line 2 still has `aliases: [cetera, f2-cetera, f2/cetera]`. The `f2-cetera` and `f2/cetera` aliases are deprecated. Remove them from the aliases array.

### 4. Missing report file

`wiki/reports/mai-project-overview.md` is referenced in `wiki/index.md` (line 82) and `wiki/log.md` but does not exist. Either recreate the report or remove the dead index entry.

### 5. Broken wiki-links — bare project slug pattern (80+ instances)

The most pervasive issue: wiki pages link to project slugs using bare names like `[[harvey]]`, `[[litify]]`, `[[cretelligent]]`, etc. These don't resolve because project pages live at `wiki/projects/{slug}/context.md`, not `wiki/{slug}.md`. Affected files include nearly every tool, pattern, entity, article, concept, and overview page.

**Most-referenced broken targets:**
- `[[harvey]]` — 14 references across tools, articles, entities, patterns
- `[[litify]]` — 13 references
- `[[cretelligent]]` — 12 references
- `[[nbcu]]` — 10 references
- `[[cetera]]` — 4 references
- `[[meadow]]` — 7 references (should be `[[internal/meadow/context]]`)
- `[[mai]]` — 3 references
- `[[high-meadow-website]]` — 5 references (should be `[[internal/high-meadow-website/context]]`)
- `[[loftware]]` — 2 references
- `[[high-meadow-labs]]` — 2 references (should be `[[internal/high-meadow-labs/journal]]`)

**Fix:** Standardize all project cross-references to use `[[{slug}/context]]` or `[[{slug}/context|Display Name]]` format. This is a vault-wide find-and-replace operation.

### 6. Non-canonical link aliases in older pages

Several pages use legacy slug forms that never existed as files:
- `[[hms-capacity-planning]]` — should be `[[internal/meadow/context|Meadow]]` (3 references)
- `[[high-meadows-mai]]` — should be `[[mai/context|MAI]]` (4 references)
- `[[meadow-app]]` — should be `[[internal/meadow/context|Meadow]]` (3 references)
- `[[mai-crm-build]]` — should be `[[mai/context|MAI]]` (1 reference)
- `[[capacity-planning]]` — should be `[[internal/meadow/context]]` (1 reference)

### 7. Empty stale folder

`wiki/projects/flex-dash/` at top level is empty (0 files). This is a leftover from before the slug was corrected to `internal/flex-dash`. Safe to delete.

### 8. `wiki/log.md` broken links

`wiki/log.md` contains 30+ broken `[[wiki-links]]` in historical entries. These are in log text referencing pages by old/non-canonical slugs. Since log entries are historical records, these should be left as-is but noted. Key examples: `[[MCP-Obsidian]]`, `[[scheduled-tasks]]`, `[[productivity-systems]]`, `[[mcp]]`, `[[slug]]`.

## Recommended Fixes

### 1. Missing journals (10g)

These project folders lack `journal.md` or have journals missing required frontmatter fields (`status`, `owner`, `priority`, `last_meeting`, `open_actions`):

**Missing journal entirely:**
- `wiki/projects/blink-payments/` — has `context.md` only
- `wiki/projects/flex-dash/` (top-level) — empty folder, should be deleted
- `wiki/projects/internal/flex-dash/` — has stories files but no journal (development paused)

**Journals missing all frontmatter fields:**
- `wiki/projects/cartier/journal.md`
- `wiki/projects/internal/high-meadow-website/journal.md`
- `wiki/projects/internal/meadow/journal.md`
- `wiki/projects/loftware/journal.md`
- `wiki/projects/modern-stack-systems/journal.md`

### 2. Orphan pages (no inbound links)

38 wiki pages have zero inbound `[[wiki-links]]` from other pages. Most are project journals, overviews, boards, and stories files that are only reachable by navigating the folder structure. Key orphans outside of project folders:

- `wiki/projects/projects.md` — unclear purpose, not referenced anywhere
- `wiki/f2-internal/CE/*.md` (5 files) — Confluence mirror pages with no cross-links

Project journals, overviews, and board files are structurally orphaned because index.md links to `[[slug/context]]` and `[[slug/journal]]` using Obsidian basename resolution, but many use path-based links that don't resolve the same way.

### 3. Missing index entries

Files not listed in `wiki/index.md`:
- `wiki/projects/mai/stories-jira.md`
- `wiki/projects/cetera/stories-jira.md`
- `wiki/projects/lnw/stories-jira.md`
- `wiki/projects/internal/flex-dash/stories-linear.md`
- `wiki/projects/internal/meadow/stories-linear.md`
- `wiki/projects/internal/high-meadow-website/files/Website-Feedback-2026-04-17.md`
- `wiki/projects/internal/high-meadow-website/files/README.md`

Stories-jira and stories-linear files were added by story-sync after the index was last updated. Add references alongside existing stories entries.

### 4. Dead index entry

`wiki/index.md` line 82 references `[[reports/mai-project-overview]]` but the file does not exist. Remove this line or recreate the report.

### 5. Missing cross-references

- `wiki/tools/contour.md` — listed at bottom of index.md as an afterthought note but not in the Tools section
- `wiki/reports/weekly-synthesis-2026-04-27.md` and `wiki/reports/weekly-synthesis-2026-05-11.md` — not listed in Reports section of index.md
- `wiki/reports/agentforce-knowledge-report.md` — not listed in Reports section of index.md
- `wiki/f2-internal/CE/*.md` (5 files) — not referenced from any project or entity page

### 6. Index.md is stale

`wiki/index.md` header says "Last updated: 2026-04-21" with "Total pages: 61" but the vault now has 106 wiki pages. The index has been extended with append-style notes but not restructured. Recommended: full index rebuild.

### 7. Non-canonical tag

Tag `#active` found in wiki pages. Not in TAGS.md canonical list. Should be `#status/in-progress` or added to taxonomy.

## Informational

### 1. Source coverage gaps

`raw/archived-stories/` contains 160+ archived story files (MAI, Cetera, flex-dash, meadow, LNW) not logged in `wiki/log.md`. These are story-sync archives and may not require wiki processing, but they should be acknowledged in the log or explicitly excluded from lint scope.

`raw/templates/quick-capture.md` is a template, not a source — expected to be unprocessed.

`raw/story-sync-unrouted.md` — unrouted stories file, should be reviewed.

### 2. Log size

`wiki/log.md` exceeds the 200-entry rotation threshold. All entries are within 90 days (earliest ~2026-04-06), so no rotation candidates yet. Will need rotation by July 2026.

### 3. wiki/log.md historical broken links

30+ broken links in historical log entries (pre-canonical slug era). These are expected artifacts and should not be modified — they document the state at the time of writing.

---
*Auto-generated by second-brain-lint*

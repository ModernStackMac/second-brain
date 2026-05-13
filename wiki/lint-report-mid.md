# Wiki Lint Report — Mid-week
# Wiki Lint Report — Mid-week
**Run date:** 2026-05-13
**Issues found:** 7 critical, 6 recommended

## Critical

### 1. Unmapped project folder: `cartier/`
- `wiki/projects/cartier/` exists (context.md + journal.md) but `cartier` has no entry in project-mapping.md Canonical Slug Index or Active Projects section.
- **Fix:** Add `cartier` row to the Canonical Slug Index table and create a full Active Projects entry. Template data available in `cartier/context.md` (MSS direct client, Chad Cartier, independent financial advisor).

### 2. Unmapped project folder: `internal/high-meadow-labs/`
- `wiki/projects/internal/high-meadow-labs/` exists (journal.md) but `high-meadow-labs` has no entry in project-mapping.md.
- **Fix:** Add `high-meadow-labs` as a sub-project under `internal` (same pattern as meadow, flex-dash, high-meadow-website). Add row to Canonical Slug Index.

### 3. Missing project folder: `blink-payments/`
- project-mapping.md (Updates 2026-05-11) defines `blink-payments` with folder `wiki/projects/blink-payments/` but no such folder exists in the wiki.
- **Fix:** Create `wiki/projects/blink-payments/` with `context.md` and `journal.md`. Source data available in MSS journal (May 11 and Apr 21 entries) and project-mapping updates section.

### 4. Slug Index not updated with new projects
- `loftware` and `blink-payments` are defined in "Updates" sections at the bottom of project-mapping.md but have NOT been moved into the Canonical Slug Index table. The updates sections explicitly say "Action needed: Move the row above into the Canonical Slug Index table."
- `cartier` and `high-meadow-labs` are entirely absent from the Slug Index.
- **Fix:** Merge loftware + blink-payments rows into the Canonical Slug Index. Add cartier + high-meadow-labs rows.

### 5. Cetera Jira project key mismatch
- project-mapping.md Canonical Slug Index lists cetera's Jira Project Key as `F2`, but actual tickets use prefix `CET-*` (CET-110, CET-111). Both `stories-f2.md` and `stories-jira.md` have `jira_project_key: CET`.
- **Fix:** Update cetera's Jira Project Key from `F2` to `CET` in the Canonical Slug Index table and Active Projects section.

### 6. MAI Jira workspace/key still TBD
- project-mapping.md lists MAI's Jira Workspace and Jira Project Key as `TBD`, but stories files show `workspace: f2` / `jira_project_key: MAI` with ticket links to `f2strategy.atlassian.net/browse/MAI-*`.
- **Fix:** Update MAI's Jira Workspace to `f2strategy.atlassian.net` and Jira Project Key to `MAI`.

### 7. Deprecated slug `f2-cetera` in cetera/overview.md aliases (recurring)
- `wiki/projects/cetera/overview.md` frontmatter: `aliases: [cetera, f2-cetera, f2/cetera]`
- Flagged in prior lint reports (2026-04-27, 2026-05-06). Still not resolved.
- **Fix:** Change to `aliases: [cetera]` — remove `f2-cetera` and `f2/cetera`.

## Recommended

### 1. Stale project journals (active status, last_meeting > 14 days)
- **Harvey:** last_meeting 2026-04-09 (34 days ago) — status: active, priority: p3
- **Litify:** last_meeting 2026-04-17 (26 days ago) — status: active, priority: p1
- **High Meadow Labs:** last_meeting 2026-04-23 (20 days ago) — status: active, priority: p2
- **Loftware:** updated 2026-04-27 (16 days ago) — no standard frontmatter format
- Consider downgrading Harvey/Litify to `status: stalled` if no activity expected.

### 2. Missing index entries (main sections)
- `cartier` — referenced in index.md Notes (2026-04-30) but not added to the Projects list
- `high-meadow-labs` — referenced in index.md Notes (2026-04-23) but not added to the Projects list
- `blink-payments` — no mention in index.md at all
- **Fix:** Add all three to the Projects section of index.md. Move accumulated "Note" entries into the proper sections.

### 3. MAI stories-jira.md duplicate heading
- `wiki/projects/mai/stories-jira.md` contains `# MAI CRM Build — Jira Stories` twice (consecutive lines).
- **Fix:** Remove the duplicate heading line.

### 4. TAGS.md missing project tags
- TAGS.md project tag list does not include: `#project/loftware`, `#project/cartier`, `#project/blink-payments`, `#project/meadow`, `#project/flex-dash`, `#project/high-meadow-website`, `#project/high-meadow-labs`.
- **Fix:** Add missing project tags to TAGS.md. Consider whether sub-projects need their own tags or roll up under `#project/internal`.

### 5. Meadow Linear project renamed
- `wiki/projects/internal/meadow/stories-hm.md` contains a note: "Linear project was renamed from 'Meadow' to 'Capacity Planning'. The project-mapping.md entry should be updated."
- **Fix:** Update project-mapping.md Meadow entry `Linear Project` from `Meadow (HM workspace)` to `Capacity Planning (HM workspace)`.

### 6. project-mapping.md pending "Action needed" items (3)
- Blink Payments Contact Update (2026-05-11): "Merge these enriched fields into the Blink Payments (NEW) entry above and delete this section."
- Loftware slug index row (2026-04-30): "Move the row above into the Canonical Slug Index table."
- Brian Hyman Key Contact addition (2026-04-30): not yet merged into Internal section.
- **Fix:** Consolidate pending updates into their target sections and remove the "Action needed" notes.

## Clean checks
- Stories frontmatter: all `stories-*.md` `project:` fields match enclosing folder slug ✓
- Ticket-prefix routing: LNW-* tickets in lnw/, CET-* in cetera/, MAI-* in mai/ ✓
- Workspace+key uniqueness: no duplicate (workspace, key) pairs ✓
- Cross-reference headings in stories: none found ✓
- Deprecated slug `clients`: no active usage (historical log.md references exempt) ✓

---
*Auto-generated by second-brain-lint-wed*

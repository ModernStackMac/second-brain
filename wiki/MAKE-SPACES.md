---
type: reference
tags: [meta, makemd]
---

# Make.md Spaces — Second Brain Configuration

> Make.md ("Makemd") overlays folder-level database views on top of your markdown. We use it selectively — Dataview already handles queries, Tasks handles task surfacing, Kanban handles boards. Make.md fills one specific gap: **property-driven folder hubs** where every file in a folder has consistent fields.

## Where Make.md adds value (and where it doesn't)

| Use Make.md for | Don't use Make.md for |
| --- | --- |
| Project hub view at `wiki/projects/` — see all projects at once with status, owner, last update, open count | Task queries — Tasks plugin is simpler |
| Client hub view at `wiki/clients/` — sortable, filterable roster | Dashboards — Dataview is already wired up |
| Flow blocks on project pages (embed the kanban inline) | Meeting notes — frontmatter + Dataview is enough |
| Inline property editing (change a status field from the list view) | Anything Templater-driven |

## Recommended Spaces

### 1. Projects Space — `wiki/projects/`

Set up in the Make.md sidebar:

1. Right-click `wiki/projects/` → "Convert to Space"
2. Add properties (these map to frontmatter on each `journal.md`):
   - `status` (option: active, paused, complete, discovery)
   - `owner` (text)
   - `client` (link — picks from `wiki/clients/`)
   - `last_meeting` (date — computed from most-recent meeting note)
   - `open_actions` (number — computed)
3. Default view: **Table**, sorted by `last_meeting` desc
4. Additional view: **Card**, grouped by `status`

### 2. Clients Space — `wiki/clients/`

1. Right-click `wiki/clients/` → "Convert to Space"
2. Properties:
   - `tier` (option: strategic, growth, maintenance)
   - `primary_contact` (text)
   - `last_touched` (date)
   - `engagement_status` (option: active, paused, sunset)
3. Default view: **Table**
4. Additional view: **Board**, grouped by `tier`

### 3. Actions Space (optional) — `Second Brain/Action-Tracker.md` as a data source

Make.md can treat the Action-Tracker as a table if you prefer editing it in a grid. Use with caution — the AUTO-SYNC block is machine-written and will overwrite manual edits on the next `story-sync` run. Recommend: use Make.md for the manual `## Open` sections only, leave AUTO-SYNC as plain markdown.

## Flow blocks

Make.md's Flow feature lets you embed one note inside another. Useful for:

- Embedding a project's `board.md` kanban at the top of its `journal.md` so you see the board without switching pages
- Embedding the `Today` dashboard in your daily note's frontmatter area

Syntax: `![[board]]` (standard embed) renders via Flow if Make.md is enabled.

## Conflict avoidance

- **Frontmatter ownership:** if Make.md writes a property, it owns that frontmatter key. Don't have Templater templates or scheduled tasks write the same key — pick one. Make.md wins for user-editable status/owner/tier fields; scheduled tasks own `updated`, `last_meeting`, `open_actions` (computed).
- **Tasks vs Actions Space:** never have Make.md convert `Second Brain/raw/` or any ingest-source folder. Only convert curated wiki folders.
- **Index files:** if a folder has an `index.md`, Make.md treats it as the space description. Keep those short — long content in index files makes the Make.md list view render slowly.

## Setup checklist

- [ ] Convert `wiki/projects/` to Space with properties above
- [ ] Convert `wiki/clients/` to Space with properties above
- [ ] Add `![[board]]` embed to each `wiki/projects/{slug}/journal.md`
- [ ] Decide whether to convert Action-Tracker (recommend: skip for now)
- [ ] Run a `kb-lint-now` pass afterward to catch any frontmatter conflicts

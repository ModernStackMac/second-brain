---
type: reference
tags: [meta, makemd]
---

# Make.md Spaces — Second Brain Configuration

> Make.md overlays folder-level database views on top of your markdown. We use it for **one thing**: a property-driven Projects hub. Everything else (queries, tasks, boards) is already handled by Dataview, Tasks, and Kanban.

## What we use Make.md for

**Projects hub** at `wiki/projects/` — see every project at once with status, owner, last update, open count. Sort and filter without writing Dataview queries.

That's it. `wiki/clients/` was merged into projects — one hub, not two.

## Setup (version-agnostic)

Make.md's UI has changed across releases — "Convert to Space", "Add Context", and "Set as Database" have all been the same feature at different times. The underlying mechanism is always: **add a Context (property schema) to the folder, then Make.md renders a database view**.

Try these in order — one will work depending on your Make.md version:

1. Click on `wiki/projects/` in the **Make.md sidebar** (left panel, not the standard Obsidian file tree). Look at the bottom or right of the folder view — there should be a "Context" button, a "+" for properties, or a settings gear. Add properties.

2. Right-click `wiki/projects/` in either the Make.md sidebar or standard file tree. Look for: "Convert to Space", "Add Context", "Edit Folder Properties", "Set as Database". Whichever you find is the right one.

3. Open `wiki/projects/` itself as a folder note (Make.md lets you click into a folder and treat it as a page). From that page, the property panel at the top lets you define fields for all children.

4. Last resort — the **command palette**: `Cmd+P` → type "Make" and scan the available commands. "Make: Create Context in current folder" or similar is what you want.

If none of the above work, the version you have may require spaces to be created via the "+" at the top of the Make.md sidebar. Point the new space at `Second Brain/wiki/projects/`.

## Properties to add

Whatever UI you end up using, add these properties to the space/context:

| Property | Type | Who writes it |
| --- | --- | --- |
| `status` | Option: active, paused, complete, discovery | You |
| `owner` | Text | You |
| `last_meeting` | Date | `second-brain-ingest` scheduled task |
| `open_actions` | Number | `weekly-action-review` scheduled task |
| `priority` | Option: p0, p1, p2, p3 | You |

Default view: **Table**, sorted by `last_meeting` desc. Add a second view as **Card** grouped by `status` if you like the visual.

## Keeping frontmatter in sync

For Make.md to populate properties on existing project journals, each `wiki/projects/{slug}/journal.md` needs those frontmatter keys. If they're missing, Make.md shows empty cells.

One-time backfill (ask Claude):

> "For each `wiki/projects/*/journal.md`, add `status: active`, `owner: Mac`, and `priority: p2` to the frontmatter if those keys are missing. Don't overwrite existing values."

After that, scheduled tasks maintain `last_meeting` and `open_actions` automatically.

## What NOT to convert

- `raw/` — source material, not curated
- `Meeting Notes/` — scheduled-task territory, would fight for frontmatter
- `dashboards/` — Dataview already queries these, no need for Make.md overlay
- `Action-Tracker.md` — single file, not a folder
- `wiki/entities/`, `wiki/concepts/`, `wiki/patterns/`, `wiki/tools/`, `wiki/topics/` — too diverse for a single property schema; leave as plain markdown

## If you can't find the right UI

Make.md is optional. Everything you see in Dataview dashboards already covers the "sortable table of projects" use case. Skip Make.md entirely and the system works.

If you want the Dataview equivalent of what Make.md would show, this query on `Home.md` gives the same view:

```dataview
TABLE status, owner, priority, last_meeting, open_actions
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT last_meeting DESC
```

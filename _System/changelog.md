# Second Brain — Changelog

> Historical record of material changes to the system. Pre-consolidation bodies preserved in Git via Obsidian Git auto-backup (`ModernStackMac/second-brain`).

## 2026-04-18 — Doc consolidation pass

Folded 7 layered updates (a–g) into the base bodies of `SYSTEM-GUIDE.md`, `SCHEMA.md`, and `PEER-SETUP-GUIDE.md`. Rewrote stale `README.md`. Update sections stripped. Pre-consolidation text lives in Git history.

**What the layers covered, now canonical in base docs:**

- `.claudeignore` at vault root, `session-kickoff` skill (layer a)
- Calendar / Kanban / Tasks workflow, `daily-note-builder` task (layer b) — Kanban portion later retired
- Templater, Tag Wrangler, Make.md configuration (layer c)
- `wiki/clients/` → merged into `wiki/projects/`; Make.md marked optional (layer d)
- Daily notes moved `raw/daily/` → `daily/` (layer e)
- `Action-Tracker.md` sunset → `commitments.md` with 4-gate extraction rule; architecture diagram canonical; Kanban boards retired; story-sync narrowed to strict active set; `weekly-action-review` disabled; `daily-note-review` skill added (layer f)
- Architecture diagram simplified to direct PNG embed only (layer g)

**Additional cleanup during this pass:**

- Deleted empty `Vault.md` at vault root
- `confluence-ingest` cron moved `0 6 * * 1-5` → `30 6 * * 1-5` (eliminates collision with `daily-note-builder`)
- `meeting-selector` cron moved `35 8-18/2` → `45 8-18/2` (widens gap after `second-brain-ingest` at :30)
- Architecture diagram embed in `resources/diagrams/llm-kb-architecture.md` updated to explicit `![[Clippings/Image-1.jpg|...]]`
- 5 disabled/completed one-time scheduled tasks flagged `[ARCHIVED 2026-04-18]` for manual deletion via sidebar: `granola-plan-check`, `restore-second-brain-crons`, `weekly-action-review`, `daily-note-now`, `story-sync-now`

**Fathom vs Granola trial:** Meeting-selector log shows Fathom winning every scored pair. Standardize on Fathom at 2026-05-02 trial-end review (`granola-fathom-decision` task fires).


## 2026-04-18 — Granola retired

Granola deleted. Fathom is now the sole meeting source.

**Schedules updated:**

- `process-meeting-transcripts` (Granola ingest) → disabled, flagged `[ARCHIVED 2026-04-18]`
- `granola-fathom-decision` → disabled (decision made early — Fathom)
- `meeting-selector` → repurposed from "scoring + selecting" to "Fathom-only routing". Same cron, new prompt: route Fathom files from `raw/meeting-raw/fathom/` to `Meeting Notes/{Company}/{Project}/` via `project-mapping.md`. No more scoring step.

**Vault docs scrubbed of Granola references:**

- `SYSTEM-GUIDE.md`, `SCHEMA.md`, `PEER-SETUP-GUIDE.md`, `README.md` — rewritten to describe Fathom-only pipeline
- `dashboards/Home.md`, `dashboards/Meetings.md` — selector trial widgets removed
- `raw/meeting-raw/README.md` — updated to reflect Fathom-only ingest

**Historical data preserved:**

- `raw/meeting-raw/granola/` retained read-only for any Granola-only meetings (no Fathom counterpart)
- Frontmatter fields `selected_from: granola` and `selected_score` left intact on historical Meeting Notes — do not backfill or strip
- `_System/selector-log.md` retained as historical scoring record from the trial period
- Pre-Granola-retirement bodies live in Git history (`ModernStackMac/second-brain`)

**Meeting note dedupe:** Where both Fathom and Granola captured the same meeting, the Granola raw file and any duplicate Meeting Notes routing were deleted. Granola-only meetings (no Fathom counterpart) were preserved.


## 2026-04-18 — Post-Granola cleanup pass

**Scheduled tasks:**
- Disabled `daily-note-review` — manual-only, redundant with the on-demand daily-review skill.
- Disabled `meeting-selector` — routing logic folded into `process-fathom-transcripts` so ingest + route happen in one pass.
- Updated `process-fathom-transcripts` prompt + description to reflect the merged ingest/route responsibility.
- Both archived tasks carry the `[ARCHIVED 2026-04-18]` prefix and are safe to delete via the Cowork sidebar.

**Vault docs:**
- Rewrote `SYSTEM-GUIDE.md` to reflect current state — dropped Action-Tracker deprecation notes, stale archived-tasks list, separate meeting-selector references. Meeting pipeline described as single task.
- Rewrote `PEER-SETUP-GUIDE.md` from scratch as a prescriptive, phase-by-phase setup for a new teammate. Mirrors today's Fathom-only, inline-routing state.

**project-mapping.md:**
- Added `Linear Project: Meadow (HM workspace)` + `Stories` path to the Meadow entry (mirrors the Flex Dash pattern). Story-sync will now route `meadow` slug to the Meadow Linear board.
- Updated slug index to note Linear boards for Meadow and Flex Dash.
- Added `Linear Project` field to the "Adding a New Project" template.

**Flag for Mac:** `second-brain-lint-wed` (Wednesdays 1am) still active. Second lint per week is optional — disable if the Sunday report is sufficient.

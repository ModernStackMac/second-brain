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


## 2026-04-18 — Single-destination meeting pipeline + daily-note expansion

**Architecture change.** Eliminated the double-write of Fathom recordings. Meeting Notes/ is now the sole live destination; `raw/meeting-raw/` is deprecated and frozen as a historical archive.

**Scheduled tasks updated:**
- `process-fathom-transcripts` — prompt rewritten. Writes one file per recording, directly to `Meeting Notes/{Company}/{Project}/{date} - {title}.md`. No write to `raw/meeting-raw/`. Routing logic, _Unmatched fallback, and selector-log behavior unchanged.
- `second-brain-ingest` — prompt rewritten. Scope is now: `Meeting Notes/`, `raw/articles/`, `raw/projects/`, `raw/transcripts/`. Explicitly excludes `raw/meeting-raw/`, `raw/archived-actions/`, `raw/archived-stories/`, `raw/templates/`, `dashboards/`, `daily/`, `Excalidraw/`, `Clippings/`. Eliminates double-ingest risk that existed when the same meeting lived in both `raw/meeting-raw/fathom/` and `Meeting Notes/`.
- `daily-note-builder` — prompt expanded. New sections: Yesterday's Wins, Blocked / Needs Unblock, Follow-ups Due Today, Active Stories by Project. Existing sections preserved (Calendar, Today's Focus, Recent Decisions). Builder now preserves user-authored `## Notes` and `## Scratch` across reruns.

**Vault docs updated:**
- `SYSTEM-GUIDE.md` — folder tree marks `raw/meeting-raw/` as DEPRECATED; meeting pipeline table reflects single destination; new `daily/` section documents builder output sections; `commitments.md` lifecycle expanded with stale-flagging behavior.
- `PEER-SETUP-GUIDE.md` — Phase 2 folder tree, Phase 5 task descriptions, Phase 7 capture workflow all updated to reflect single-destination model.

**Linked work flagged for next lint (`second-brain-lint-wed` 2026-04-22 1am CT):**
- Verify no scheduled task or skill still references `raw/meeting-raw/fathom/` as a write target.
- Confirm `.claudeignore` lists `raw/meeting-raw/` so Claude Code/Cowork scans skip it.
- Confirm `process-fathom-transcripts` and `second-brain-ingest` both ran successfully under new prompts.


## 2026-04-19 — Full vault cleanup + governance rewrite

**Structural changes:**

- Killed `daily/` folder and `daily-note-builder` scheduled task entirely. Daily notes were redundant — same info available in commitments.md, project journals, Meeting Notes, and scheduled email digests.
- Deleted 5 of 6 dashboards (Articles, Meetings, Projects, Stories, Wiki Health). Kept `Home.md` only as Obsidian startup page.
- Deleted `resources/interests/`, `resources/learning/`, `resources/reading/` — each contained only an empty index.md. `resources/` now holds only `diagrams/`.
- Renamed `raw/projects/hms-capacity-planning/` → `raw/projects/meadow/` to match canonical slug.
- Deleted stale READMEs: `_System/README.md`, `_System/scripts/README.md`, `resources/README.md`.
- Deleted `Second Brain.md` (empty file at root).
- Deleted `raw/templates/daily-note.md` (daily notes killed).

**Scheduled tasks:**

- Created `weekly-synthesis` — Mondays 5:30am CT. Reads all project journals, meetings, commitments, decisions. Produces `wiki/reports/weekly-synthesis-{date}.md` with executive summary, per-project status, cross-project patterns, commitments at risk, recommendations.
- Updated `second-brain-ingest` — added Step 3: Pattern Extraction Pass. Reviews recently updated journal entries, identifies reusable patterns/concepts, creates or updates `wiki/patterns/` and `wiki/concepts/` pages.
- Disabled `daily-note-builder` — replaced by weekly synthesis + existing email digests.

**Governance docs rewritten from scratch:**

- `SCHEMA.md` — reflects final folder tree, updated workflows (ingest with pattern extraction, synthesis), cleaned scheduled tasks table, removed all daily/dashboard/archive references.
- `SYSTEM-GUIDE.md` — 10-section architecture reference. Meeting pipeline, knowledge pipeline, story sync, weekly synthesis, commitments lifecycle, scheduled tasks table, MCP connections, deprecated items list.
- `PEER-SETUP-GUIDE.md` — prescriptive 10-phase setup for new teammates. No daily notes, no extra dashboards, no meeting-raw for new setups.
- `README.md` — lean quick-start. Updated paths, added weekly synthesis section, removed all stale references.

**System files:**

- `identity.yaml` bumped to v4. Removed: `meeting_selector` filter (Fathom won, trial over), `write_action_tracker` flag, stale paths (`raw_granola`, `raw_fathom`, `raw_archived_stories`, `raw_archived_actions`, `resources_learning`, `resources_reading`, `resources_interests`). Added: `raw_articles`, `raw_projects`, `raw_transcripts`, `wiki`, `decision_log`, `diagrams` paths.
- `TAGS.md` — removed `#type/daily` and `#type/dashboard` from taxonomy.

**Wiki link fixes (12+):**

- Fixed broken `[[meadow]]`, `[[high-meadow-website]]`, `[[mcp]]`, `[[scheduled-tasks]]`, `[[productivity-systems]]`, `[[hms-capacity-planning]]`, `[[meadow-app]]`, `[[MCP-Obsidian]]` links across wiki pages.
- Added `meadow` alias to meadow/overview.md frontmatter.
- Added `high-meadow-website` alias to high-meadow-website/context.md frontmatter.
- Deleted orphan `wiki/tools/meadow-app.md`.

**Manual cleanup flagged for Mac:**

- Delete `raw/articles/?.md` — special character breaks MCP API.
- Move `raw/projects/hms-capacity-planning/meadow-open-items.docx` to `raw/projects/meadow/` — MCP can't handle .docx files.

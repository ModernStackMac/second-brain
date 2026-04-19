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

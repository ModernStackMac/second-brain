---
type: pointer
status: deprecated
sunset_date: 2026-04-18
replaced_by: commitments.md
---

# Action-Tracker — DEPRECATED

> 🚫 This file is sunset as of **2026-04-18**. Do not edit. Do not add items here. Tools that previously wrote here (story-sync, second-brain-ingest, weekly-action-review) have been retargeted or disabled.

## Where things live now

| What | Where |
|---|---|
| Mac's open commitments | [[commitments]] (vault root `commitments.md`) |
| Active synced stories (Linear/Jira) | `Second Brain/wiki/projects/*/stories-*.md` |
| Today's view | `Second Brain/daily/YYYY-MM-DD.md` (built by `daily-note-builder`) |
| Pre-sunset snapshot | `Second Brain/raw/archived-actions/2026-04-pre-sunset.md` |

## Why this changed

The Action-Tracker collapsed three different things into one file: manual commitments, auto-synced ticket noise, and historical done items. Result: 79 open items, mostly low-signal. The new flow splits responsibilities:

- **commitments.md** — owns "what Mac owes" with strict 4-gate extraction (owner=Mac, firm verb, concrete next step, dedupe).
- **wiki/projects/*/stories-*.md** — owns ticket reality, refreshed by `story-sync` v4.2 (narrowed to in-flight only).
- **daily/YYYY-MM-DD.md** — daily focus, dynamic. Replaces the static dashboard view.

See `SCHEMA.md` Updates (2026-04-18f) and `SYSTEM-GUIDE.md` Updates (2026-04-18f) for the full reasoning.

# Archived Actions

Action items moved out of `Action-Tracker.md` after being marked Done for 7+ days. Keeps the tracker lean; preserves full history for dashboard and retrospective queries.

## Layout

One file per month: `YYYY-MM.md` (e.g. `2026-04.md`).

## Retention

- Indefinite. Archive files are append-only.
- Dataview queries in dashboards can include archived items by querying `FROM "Second Brain/Action-Tracker" OR "Second Brain/raw/archived-actions"`.

## Format

Each archived entry preserves the original line format including inline fields, so Dataview treats them identically to live entries:

```
- [x] Task text [Owner:: Mac] [Project:: xyz] [Date:: 2026-04-10] [Status:: Done] [ArchivedOn:: 2026-04-20] ✅ 2026-04-14
```

---
type: dashboard
updated: 2026-04-18
---

# Stories Dashboard

> Auto-synced Linear (MSS + HM) and Jira (F2) stories assigned to Mac. Filter (v4.2 strict): in-flight only — Linear Todo/Started/In Progress, Jira To Do/In Progress, + Backlog only if in current cycle.
> Action-Tracker queries removed 2026-04-18. The per-project story pages at `Second Brain/wiki/projects/*/stories-*.md` are now canonical.

---

## At a glance

> [!info] Counts
> **Total open:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`  ·  **MSS:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync" && p.workspace === "MSS").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`  ·  **HM:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync" && p.workspace === "HM").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`  ·  **F2:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync" && p.workspace === "F2").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`

---

> [!warning] Stale story syncs
> Per-project sync files with no update in 14+ days — likely means story-sync failed to refresh that project.
>
> ```dataview
> TABLE WITHOUT ID file.link as "Project sync", updated as "Last sync"
> FROM "Second Brain/wiki/projects"
> WHERE type = "stories-sync" AND updated < date(today) - dur(14 days)
> SORT updated ASC
> ```

---

## By workspace

### Linear — Modern Stack Systems (MSS)
```dataview
TABLE WITHOUT ID file.link as "Project", story_count as "Open", updated as "Synced"
FROM "Second Brain/wiki/projects"
WHERE type = "stories-sync" AND workspace = "MSS"
SORT updated DESC
```

### Linear — High Meadow (HM)
```dataview
TABLE WITHOUT ID file.link as "Project", story_count as "Open", updated as "Synced"
FROM "Second Brain/wiki/projects"
WHERE type = "stories-sync" AND workspace = "HM"
SORT updated DESC
```

### Jira — F2 Strategy (F2)
```dataview
TABLE WITHOUT ID file.link as "Project", story_count as "Open", updated as "Synced"
FROM "Second Brain/wiki/projects"
WHERE type = "stories-sync" AND workspace = "F2"
SORT updated DESC
```

---

## Sync metadata

```dataview
TABLE WITHOUT ID file.link as "Sync file", workspace as "Workspace", project as "Project", story_count as "Count", updated as "Last run"
FROM "Second Brain/wiki/projects"
WHERE type = "stories-sync"
SORT updated DESC
```

## Archived stories (sync-and-prune)

> Stories no longer active were archived here. Restored automatically if they become active again.

```dataview
TABLE file.ctime as "Archived", file.folder as "Project"
FROM "Second Brain/raw/archived-stories"
SORT file.ctime DESC
LIMIT 20
```

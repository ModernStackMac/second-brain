---
type: dashboard
updated: 2026-04-18
---

# Stories Dashboard

> Auto-synced Linear (MSS + HM) and Jira (F2) stories assigned to Mac. Filter: active (Todo/Unstarted/Started/In Progress) + backlog with (Urgent/High OR current cycle OR updated <14d).

---

## At a glance

> [!info] Counts
> **Total open:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`  ·  **MSS:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync" && p.workspace === "MSS").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`  ·  **HM:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync" && p.workspace === "HM").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`  ·  **F2:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.type === "stories-sync" && p.workspace === "F2").map(p => p.story_count || 0).reduce((a,b) => a+b, 0)`

---

> [!danger] Urgent / High priority
> All synced stories with priority Urgent or High.
>
> ```dataview
> TASK
> FROM "Second Brain/Action-Tracker"
> WHERE !completed AND (Priority = "Urgent" OR Priority = "High") AND contains(Source, "linear")
> SORT Priority ASC, Date ASC
> ```

> [!warning] Stale stories
> Synced stories with no update in 14+ days — candidate for deprioritization or archival.
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

## All synced stories in Action-Tracker
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Source, "linear") OR contains(Source, "jira")
SORT Priority ASC, Date ASC
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

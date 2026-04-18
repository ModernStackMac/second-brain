---
type: dashboard
updated: 2026-04-18
---

# Projects Dashboard

> Per-project health, open actions, recent decisions, synced stories.

## Per-project health cards

> [!tip] Health rules
> 🟢 journal updated <7d AND no urgent overdue actions  ·  🟡 journal 7–14d OR 1–2 urgent  ·  🔴 journal >14d OR 3+ urgent overdue

### Cetera
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/cetera"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "cetera")
SORT Date ASC
```
**Stories**
```dataview
TABLE WITHOUT ID file.link as "Source", story_count as "Count", updated as "Last sync"
FROM "Second Brain/wiki/projects/cetera"
WHERE type = "stories-sync"
```

### LNW
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/lnw"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "lnw")
SORT Date ASC
```
**Stories**
```dataview
TABLE WITHOUT ID file.link as "Source", story_count as "Count", updated as "Last sync"
FROM "Second Brain/wiki/projects/lnw"
WHERE type = "stories-sync"
```

### MAI
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/mai"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "mai")
SORT Date ASC
```
**Stories**
```dataview
TABLE WITHOUT ID file.link as "Source", story_count as "Count", updated as "Last sync"
FROM "Second Brain/wiki/projects/mai"
WHERE type = "stories-sync"
```

### CREtelligent
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/cretelligent"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "cretelligent")
SORT Date ASC
```

### Harvey
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/harvey"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "harvey")
SORT Date ASC
```

### Litify
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/litify"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "litify")
SORT Date ASC
```

### NBCU
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/nbcu"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "nbcu")
SORT Date ASC
```

### Internal (Meadow · Flex-Dash · Website)
```dataview
TABLE WITHOUT ID file.folder as "Sub-project", file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/internal"
WHERE file.name = "journal"
SORT file.mtime DESC
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND (contains(Project, "meadow") OR contains(Project, "flex-dash") OR contains(Project, "high-meadow-website"))
SORT Date ASC
```

---

## All active projects (last journal update)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime DESC
```

## Recent decisions
```dataview
TABLE Project, Decision, Context
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
SORT Date DESC
LIMIT 10
```

## Decisions to revisit
> Decisions with non-blank reversal criteria.

```dataview
TABLE Project, Decision, "Reversal Criteria" as Reversal
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
SORT Date DESC
LIMIT 10
```

## Project context pages
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "context"
SORT file.mtime DESC
```

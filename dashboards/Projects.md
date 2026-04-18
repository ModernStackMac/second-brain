# Projects Dashboard
---
type: dashboard
updated: 2026-04-18
---

# Projects Dashboard

> Per-project health, open actions, recent decisions, synced stories.

---

## Per-project health cards

> [!tip] Health rules
> 🟢 journal updated <7d AND no urgent overdue actions  ·  🟡 journal 7–14d OR 1–2 urgent  ·  🔴 journal >14d OR 3+ urgent overdue

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
**Stories**
```dataview
TABLE WITHOUT ID file.link as "Source", story_count as "Count", updated as "Last sync"
FROM "Second Brain/wiki/projects/cretelligent"
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

### F2-Cetera
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/f2-cetera"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "f2-cetera")
SORT Date ASC
```
**Stories**
```dataview
TABLE WITHOUT ID file.link as "Source", story_count as "Count", updated as "Last sync"
FROM "Second Brain/wiki/projects/f2-cetera"
WHERE type = "stories-sync"
```

### Meadow (HMS Capacity Planning)
```dataview
TABLE WITHOUT ID file.mtime as "Journal updated"
FROM "Second Brain/wiki/projects/meadow"
WHERE file.name = "journal"
```
**Open actions**
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND contains(Project, "meadow")
SORT Date ASC
```
**Stories**
```dataview
TABLE WITHOUT ID file.link as "Source", story_count as "Count", updated as "Last sync"
FROM "Second Brain/wiki/projects/meadow"
WHERE type = "stories-sync"
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

---

## All active projects (last journal update)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime DESC
```

## All open actions by project
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
GROUP BY Project
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

## Project context pages (last updated)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "context"
SORT file.mtime DESC
```

## Project documents (raw)
```dataview
TABLE file.ctime as "Added", file.folder as "Project"
FROM "Second Brain/raw/projects"
SORT file.ctime DESC
LIMIT 15
```

## Patterns library
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/patterns"
SORT file.mtime DESC
```

## Tools & platforms
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/tools"
SORT file.mtime DESC
```
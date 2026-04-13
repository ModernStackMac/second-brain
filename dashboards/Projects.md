# Projects Dashboard

> Active project journals, recent decisions, open actions, and reference libraries.

---

## Active Projects (Last Journal Update)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime DESC
```

## Open Actions by Project
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
GROUP BY Project
```

## Recent Decisions
```dataview
TABLE Project, Decision, Context
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
SORT Date DESC
LIMIT 10
```

## Project Context Pages (Last Updated)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "context"
SORT file.mtime DESC
```

## Project Documents (Raw)
```dataview
TABLE file.ctime as "Added", file.folder as "Project"
FROM "Second Brain/raw/projects"
SORT file.ctime DESC
LIMIT 15
```

## Patterns Library
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/patterns"
SORT file.mtime DESC
```

## Tools & Platforms
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/tools"
SORT file.mtime DESC
```

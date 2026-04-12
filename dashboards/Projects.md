# Projects Dashboard

> Active project context from wiki pages, recent meeting activity, and related decisions.

---

## Active Client Pages
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/clients"
SORT file.mtime DESC
```

## Recent Decisions
```dataview
TABLE Date, Decision, Source
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
```

## Project Documents (Raw)
```dataview
TABLE file.ctime as "Added", file.folder as "Project"
FROM "Second Brain/raw/projects"
SORT file.ctime DESC
LIMIT 15
```

## Discovery Notes
```dataview
TABLE file.ctime as "Date"
FROM "Second Brain/raw/discovery"
SORT file.ctime DESC
LIMIT 10
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

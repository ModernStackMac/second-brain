# Wiki Health Dashboard

> Monitor the state of the knowledge base. Use this to spot gaps, stale pages, and maintenance needs between lint runs.

---

## Project Journals (Last Updated)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime ASC
```

## Project Context Pages (May Be Stale)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "context"
SORT file.mtime ASC
```

## Shared Wiki Pages (All)
```dataview
TABLE file.mtime as "Updated", file.folder as "Category"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
AND !contains(file.folder, "projects")
SORT file.mtime DESC
LIMIT 20
```

## Oldest Shared Pages (May Need Refresh)
```dataview
TABLE file.mtime as "Last Updated", file.folder as "Category"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
AND !contains(file.folder, "projects")
SORT file.mtime ASC
LIMIT 10
```

## Unprocessed Raw Articles
```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 15
```

## Open Actions (Stale Check)
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
SORT Date ASC
```

## Session Context Files
```dataview
TABLE file.ctime as "Created"
FROM "Second Brain/session-context"
SORT file.ctime DESC
```

## Ingest Log (Recent)
```dataview
TABLE file.mtime as "Last Entry"
FROM "Second Brain/wiki"
WHERE file.name = "log"
```

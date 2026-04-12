# Wiki Health Dashboard

> Monitor the state of the knowledge base. Use this to spot gaps, stale pages, and maintenance needs between lint runs.

---

## Wiki Size
```dataview
TABLE length(rows) as "Pages"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
GROUP BY file.folder
```

## Recently Updated Pages
```dataview
TABLE file.mtime as "Updated"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
SORT file.mtime DESC
LIMIT 15
```

## Oldest Pages (May Need Refresh)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
SORT file.mtime ASC
LIMIT 10
```

## Unprocessed Raw Articles
> Articles in raw/ that haven't been turned into wiki pages yet. Compare against wiki/articles/ to spot gaps.

```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
WHERE !contains(file.outlinks, "wiki")
SORT file.ctime DESC
LIMIT 15
```

## Session Context Files (Active)
```dataview
TABLE file.ctime as "Created"
FROM "Second Brain/session-context"
SORT file.ctime DESC
```

## Stale Action Items (30+ Days)
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
```

## Ingest Log (Recent Operations)
```dataview
TABLE file.mtime as "Last Entry"
FROM "Second Brain/wiki"
WHERE file.name = "log"
```

---
type: index
updated: 2026-04-18
---

# Reading Queue

Articles, books, papers. Readwise + Gmail-Save ingestion lands here.

## Queue
```dataview
TABLE status, updated
FROM "Second Brain/resources/reading"
WHERE type = "reading" AND status = "queued"
SORT updated DESC
```

## Read
```dataview
TABLE status, updated
FROM "Second Brain/resources/reading"
WHERE type = "reading" AND status = "read"
SORT updated DESC
LIMIT 20
```

# Articles Dashboard

> Everything clipped and ingested. Browse recent captures, see what's been processed, find unprocessed articles.

---

## Recent Clips (Raw)
```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 25
```

## Processed Articles (Wiki)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/articles"
SORT file.mtime DESC
LIMIT 25
```

## Topics
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/topics"
SORT file.mtime DESC
```

## Stats
```dataview
TABLE WITHOUT ID "Raw Articles" as "Category", length(rows.file.name) as "Count"
FROM "Second Brain/raw/articles"
GROUP BY true
```

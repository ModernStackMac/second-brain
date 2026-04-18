# Articles Dashboard
---
type: dashboard
updated: 2026-04-18
---

# Articles Dashboard

> Everything clipped, ingested, queued, and read. Browse recent captures and manage the reading queue.

---

## At a glance

> [!info] Counts
> **Raw clips:** `$= dv.pages('"Second Brain/raw/articles"').length`  ·  **Processed:** `$= dv.pages('"Second Brain/wiki/articles"').length`  ·  **Reading queue:** `$= dv.pages('"Second Brain/resources/reading"').where(p => p.status === "queued").length`  ·  **Read (all time):** `$= dv.pages('"Second Brain/resources/reading"').where(p => p.status === "read").length`

---

> [!tip] Reading queue
> Unread articles from Readwise / Gmail-Save / manual capture. Sorted by clip date.
>
> ```dataview
> TABLE WITHOUT ID file.link as "Article", status as "Status", file.ctime as "Clipped"
> FROM "Second Brain/resources/reading"
> WHERE status = "queued"
> SORT file.ctime DESC
> LIMIT 20
> ```

---

## Recent clips (raw)
```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 25
```

## Processed articles (wiki)
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

## Read (last 20)
```dataview
TABLE WITHOUT ID file.link as "Article", updated as "Read on"
FROM "Second Brain/resources/reading"
WHERE status = "read"
SORT updated DESC
LIMIT 20
```

## Stats
```dataview
TABLE WITHOUT ID "Raw Articles" as "Category", length(rows.file.name) as "Count"
FROM "Second Brain/raw/articles"
GROUP BY true
```

```dataview
TABLE WITHOUT ID "Reading queue" as "Category", length(rows.file.name) as "Count"
FROM "Second Brain/resources/reading"
WHERE status = "queued"
GROUP BY true
```
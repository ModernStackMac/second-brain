# Wiki Health Dashboard
---
type: dashboard
updated: 2026-04-18
---

# Wiki Health Dashboard

> Monitor knowledge base health. Spot gaps, stale pages, orphans, maintenance needs.

---

## At a glance

> [!info] Counts
> **Wiki pages:** `$= dv.pages('"Second Brain/wiki"').where(p => p.file.name !== "index" && p.file.name !== "log").length`  ·  **Stale (60+d):** `$= dv.pages('"Second Brain/wiki"').where(p => p.file.mtime < dv.date("today").minus(dv.duration("60 days")) && p.file.name !== "index" && p.file.name !== "log").length`  ·  **Raw articles:** `$= dv.pages('"Second Brain/raw/articles"').length`  ·  **Project journals:** `$= dv.pages('"Second Brain/wiki/projects"').where(p => p.file.name === "journal").length`

---

> [!danger] Stale wiki pages (60+ days)
> Not updated in 60+ days. Review for relevance or refresh.
>
> ```dataview
> TABLE file.mtime as "Last Updated", file.folder as "Category"
> FROM "Second Brain/wiki"
> WHERE file.mtime < date(today) - dur(60 days) AND file.name != "index" AND file.name != "log"
> SORT file.mtime ASC
> LIMIT 15
> ```

> [!warning] Orphan pages
> Wiki pages with zero inbound links — likely missing cross-references.
>
> ```dataview
> TABLE file.mtime as "Updated", file.folder as "Category"
> FROM "Second Brain/wiki"
> WHERE length(file.inlinks) = 0 AND file.name != "index" AND file.name != "log"
> SORT file.mtime DESC
> LIMIT 15
> ```

---

## Project journals (last updated)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime ASC
```

## Project context pages (may be stale)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "context"
SORT file.mtime ASC
```

## Shared wiki pages (all)
```dataview
TABLE file.mtime as "Updated", file.folder as "Category"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
AND !contains(file.folder, "projects")
SORT file.mtime DESC
LIMIT 20
```

## Oldest shared pages (may need refresh)
```dataview
TABLE file.mtime as "Last Updated", file.folder as "Category"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
AND !contains(file.folder, "projects")
SORT file.mtime ASC
LIMIT 10
```

## Unprocessed raw articles
```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 15
```

## F2 Confluence mirror sync health
```dataview
TABLE file.mtime as "Last synced"
FROM "Second Brain/wiki/f2-internal"
WHERE file.name != "README"
SORT file.mtime ASC
LIMIT 10
```

## Open actions (stale check)
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
SORT Date ASC
```

## Session context files
```dataview
TABLE file.ctime as "Created"
FROM "Second Brain/session-context"
SORT file.ctime DESC
```

## Ingest log (recent)
```dataview
TABLE file.mtime as "Last Entry"
FROM "Second Brain/wiki"
WHERE file.name = "log"
```

## Scheduled task logs
```dataview
TABLE file.mtime as "Last run"
FROM "Second Brain/_System"
WHERE endswith(file.name, ".log")
SORT file.mtime DESC
```
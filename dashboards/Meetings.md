---
type: dashboard
updated: 2026-04-18
---

# Meetings Dashboard

> All Fathom meeting notes by project, plus unmatched routing flags.

---

## At a glance

> [!info] This week
> **Meetings this week:** `$= dv.pages('"Meeting Notes"').where(p => p.file.ctime >= dv.date("today").minus(dv.duration("7 days")) && p.file.name !== "_Unmatched").length`  ·  **Unmatched total:** `$= dv.pages('"Meeting Notes/_Unmatched"').length`

---

> [!danger] Unmatched meetings
> These need `project-mapping.md` updated so they route correctly next time.
>
> ```dataview
> TABLE file.ctime as "Date"
> FROM "Meeting Notes/_Unmatched"
> SORT file.ctime DESC
> ```

> [!warning] Meetings without action items
> Meetings that produced zero action items — check for ingestion gap.
>
> ```dataview
> TABLE file.ctime as "Date", file.folder as "Project"
> FROM "Meeting Notes"
> WHERE file.name != "_Unmatched" AND !contains(file.lists.text, "[ ]") AND file.ctime >= date(today) - dur(21 days)
> SORT file.ctime DESC
> LIMIT 15
> ```

---

## Recent meetings (all projects)
```dataview
TABLE file.ctime as "Date", file.folder as "Project"
FROM "Meeting Notes"
WHERE file.name != "_Unmatched"
SORT file.ctime DESC
LIMIT 20
```

## By company

### Harvey (Stand8)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Stand8/Harvey"
SORT file.ctime DESC
LIMIT 10
```

### NBCU (Stand8)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Stand8/NBCU"
SORT file.ctime DESC
LIMIT 10
```

### Litify (Stand8)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Stand8/Litify"
SORT file.ctime DESC
LIMIT 10
```

### CREtelligent (Stitch)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Stitch/Cretelligent"
SORT file.ctime DESC
LIMIT 10
```

### High Meadows
```dataview
TABLE file.ctime as "Date", file.folder as "Subproject"
FROM "Meeting Notes/High Meadows"
SORT file.ctime DESC
LIMIT 15
```

### Modern Stack Systems (Internal)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Modern Stack Systems"
SORT file.ctime DESC
LIMIT 10
```

## Volume (last 30 days)
```dataview
TABLE length(rows) as "Meetings"
FROM "Meeting Notes"
WHERE file.ctime >= date(today) - dur(30 days) AND file.name != "_Unmatched"
GROUP BY file.folder
```

## Volume chart (requires obsidian-charts plugin)
```chart
type: bar
id: meetings-by-company
```

---

*Historical note: Granola was retired 2026-04-18. Legacy files routed from Granola may carry `selected_from: granola` in frontmatter — leave those fields alone on historical records.*

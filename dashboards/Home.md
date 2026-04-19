---
type: dashboard
updated: 2026-04-19
sticker: lucide//layout-dashboard
---

# Home

> Pin as Obsidian startup page (Homepage plugin → `dashboards/Home`).

---

## At a Glance

> [!info] KPI strip
> **Open commitments:** `$= dv.pages('"commitments"').file.tasks.where(t => !t.completed).length`  ·  **Meetings this week:** `$= dv.pages('"Meeting Notes"').where(p => p.file.ctime >= dv.date("today").minus(dv.duration("7 days"))).length`  ·  **Unmatched:** `$= dv.pages('"Meeting Notes/_Unmatched"').length`

---

## Open Commitments by Project

```dataview
TASK
FROM "commitments"
WHERE !completed
GROUP BY Project
```

---

## Meetings This Week

```dataview
TABLE WITHOUT ID file.link as "Meeting", file.ctime as "Date", file.folder as "Project"
FROM "Meeting Notes"
WHERE file.ctime >= date(today) - dur(7 days) AND file.name != "_Unmatched"
SORT file.ctime DESC
```

---

## Flags

> [!danger] Stale open commitments (>14 days)
> ```dataview
> TASK
> FROM "commitments"
> WHERE !completed AND Captured AND Captured < date(today) - dur(14 days)
> SORT Captured ASC
> ```

> [!danger] Unmatched meetings
> Update `project-mapping.md` keywords to fix routing.
>
> ```dataview
> TABLE WITHOUT ID file.link as "Meeting", file.ctime as "Date"
> FROM "Meeting Notes/_Unmatched"
> SORT file.ctime DESC
> ```

> [!warning] Stale project journals (14+ days)
> ```dataview
> TABLE file.mtime as "Last Updated"
> FROM "Second Brain/wiki/projects"
> WHERE file.name = "journal" AND file.mtime < date(today) - dur(14 days)
> SORT file.mtime ASC
> ```

---

## Active Projects

```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime DESC
```

## Recent Decisions

```dataview
TABLE Project, Decision
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
SORT Date DESC
LIMIT 5
```

## Latest Clipped Articles

```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 8
```

## Latest Synthesis Reports

```dataview
TABLE file.ctime as "Generated"
FROM "Second Brain/wiki/reports"
WHERE contains(file.name, "weekly-synthesis")
SORT file.ctime DESC
LIMIT 3
```

---

## Quick Links

- [[commitments]] — Open action items
- [[Decision-Log]] — Key decisions
- [[project-mapping]] — Project routing table
- [[SYSTEM-GUIDE]] · [[SCHEMA]] · [[TAGS]]
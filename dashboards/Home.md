---
type: dashboard
updated: 2026-04-18
---

# Home Dashboard

> Central hub. Pin or set as Obsidian startup page.

---

## Today's daily note

```dataview
TABLE WITHOUT ID file.link AS "Daily note"
FROM "Second Brain/daily"
WHERE file.name = dateformat(date(today), "yyyy-MM-dd")
```

*If empty, `daily-note-builder` hasn't fired yet — it runs weekdays 6am CT. Run it manually from the sidebar to rebuild on demand.*

---

## At a glance

> [!info] KPI strip
> **Open commitments:** `$= dv.pages('"commitments"').file.tasks.where(t => !t.completed).length`  ·  **Meetings this week:** `$= dv.pages('"Meeting Notes"').where(p => p.file.ctime >= dv.date("today").minus(dv.duration("7 days"))).length`  ·  **Decisions this month:** `$= dv.pages('"Second Brain/Decision-Log"').file.lists.where(l => l.Date && l.Date >= dv.date("today").minus(dv.duration("30 days"))).length`  ·  **Unmatched:** `$= dv.pages('"Meeting Notes/_Unmatched"').length`

---

## This Week

### Open commitments by project
```dataview
TASK
FROM "commitments"
WHERE !completed
GROUP BY Project
```

### Meetings this week
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
> Meetings that couldn't be routed — update `project-mapping.md` keywords.
>
> ```dataview
> TABLE WITHOUT ID file.link as "Meeting", file.ctime as "Date"
> FROM "Meeting Notes/_Unmatched"
> SORT file.ctime DESC
> ```

> [!warning] Stale projects
> Project journals not updated in 14+ days.
>
> ```dataview
> TABLE file.mtime as "Last Updated"
> FROM "Second Brain/wiki/projects"
> WHERE file.name = "journal" AND file.mtime < date(today) - dur(14 days)
> SORT file.mtime ASC
> ```

---

## Reference

### Active projects (last journal update)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime DESC
```

### Recent decisions
```dataview
TABLE Project, Decision
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
SORT Date DESC
LIMIT 5
```

### Latest clipped articles
```dataview
TABLE file.ctime as "Clipped"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 8
```

---

## Quick Links

- [[commitments]] — Open commitments (replaces Action-Tracker)
- [[Decision-Log]] — Key decisions
- [[dashboards/Projects|Projects]] — Per-project health
- [[dashboards/Stories|Stories]] — Linear + Jira sync (project pages are canonical)
- [[dashboards/Meetings|Meetings]] — Fathom meeting routing
- [[dashboards/Articles|Articles]] — Reading queue
- [[SYSTEM-GUIDE]] · [[PEER-SETUP-GUIDE]] · [[SCHEMA]] · [[TAGS]]

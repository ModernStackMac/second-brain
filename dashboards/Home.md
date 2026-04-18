# Home Dashboard
---
type: dashboard
updated: 2026-04-18
---

# Home Dashboard

> Central hub. Pin or set as Obsidian startup page.

---

## At a glance

> [!info] KPI strip
> **Open actions:** `$= dv.pages('"Second Brain/Action-Tracker"').file.tasks.where(t => !t.completed).length`  ·  **Overdue:** `$= dv.pages('"Second Brain/Action-Tracker"').file.tasks.where(t => !t.completed && t.Date && t.Date < dv.date("today")).length`  ·  **Meetings this week:** `$= dv.pages('"Meeting Notes"').where(p => p.file.ctime >= dv.date("today").minus(dv.duration("7 days"))).length`  ·  **Decisions this month:** `$= dv.pages('"Second Brain/Decision-Log"').file.lists.where(l => l.Date && l.Date >= dv.date("today").minus(dv.duration("30 days"))).length`  ·  **Unmatched:** `$= dv.pages('"Meeting Notes/_Unmatched"').length`

---

## This Week

### Due this week
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed AND Date AND Date <= date(today) + dur(7 days) AND Date >= date(today) - dur(7 days)
SORT Date ASC
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

> [!danger] Overdue actions
> ```dataview
> TASK
> FROM "Second Brain/Action-Tracker"
> WHERE !completed AND Date AND Date < date(today)
> SORT Date ASC
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

### All open actions
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
SORT Date ASC
LIMIT 15
```

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

### Latest meeting notes
```dataview
TABLE file.ctime as "Date", file.folder as "Project"
FROM "Meeting Notes"
WHERE file.name != "_Unmatched"
SORT file.ctime DESC
LIMIT 10
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

- [[Action-Tracker]] — Open action items
- [[Decision-Log]] — Key decisions
- [[dashboards/Articles|Articles Dashboard]]
- [[dashboards/Meetings|Meetings Dashboard]]
- [[dashboards/Projects|Projects Dashboard]]
- [[dashboards/Stories|Stories Dashboard]]
- [[dashboards/Wiki Health|Wiki Health Dashboard]]



---

## New in this version

- [[Today]] — Daily focused view (meetings today, due today, overdue, captures)
- [[Action-Review]] — Weekly action triage (Mondays)
- Kanban boards live at `Second Brain/wiki/projects/{project}/board.md`
- Daily notes at `Second Brain/raw/daily/YYYY-MM-DD.md` (auto-built weekday 6am CT)

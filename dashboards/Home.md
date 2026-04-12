# Home Dashboard

> Central hub for the Second Brain. Pin this note or set it as your Obsidian startup page.

---

## Recent Activity

### Latest Clipped Articles
```dataview
TABLE file.ctime as "Clipped", file.name as "Article"
FROM "Second Brain/raw/articles"
SORT file.ctime DESC
LIMIT 10
```

### Latest Meeting Notes
```dataview
TABLE file.ctime as "Date", file.folder as "Project"
FROM "Meeting Notes"
WHERE file.name != "_Unmatched"
SORT file.ctime DESC
LIMIT 10
```

### Latest Wiki Updates
```dataview
TABLE file.mtime as "Updated"
FROM "Second Brain/wiki"
WHERE file.name != "index" AND file.name != "log"
SORT file.mtime DESC
LIMIT 10
```

---

## Quick Links

- [[Action-Tracker]] — Open action items
- [[Decision-Log]] — Key decisions
- [[dashboards/Articles|Articles Dashboard]]
- [[dashboards/Meetings|Meetings Dashboard]]
- [[dashboards/Projects|Projects Dashboard]]
- [[dashboards/Wiki Health|Wiki Health Dashboard]]

---

## Open Action Items
```dataview
TABLE Owner, Action, Due, Status
FROM "Second Brain/Action-Tracker"
WHERE file.name = "Action-Tracker"
```

---

## Session Context (Active Handoffs)
```dataview
TABLE file.ctime as "Created", file.name as "Session"
FROM "Second Brain/session-context"
SORT file.ctime DESC
LIMIT 5
```

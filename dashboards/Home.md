# Home Dashboard

> Central hub for the Second Brain. Pin this note or set it as your Obsidian startup page.

---

## Open Actions
```dataview
TASK
FROM "Second Brain/Action-Tracker"
WHERE !completed
SORT Date ASC
LIMIT 15
```

---

## Active Projects (Last Updated)
```dataview
TABLE file.mtime as "Last Updated"
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT file.mtime DESC
```

---

## Recent Decisions
```dataview
TABLE Project, Decision
FROM "Second Brain/Decision-Log"
WHERE file.name = "Decision-Log"
SORT Date DESC
LIMIT 5
```

---

## Latest Meeting Notes
```dataview
TABLE file.ctime as "Date", file.folder as "Project"
FROM "Meeting Notes"
WHERE file.name != "_Unmatched"
SORT file.ctime DESC
LIMIT 10
```

---

## Latest Clipped Articles
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
- [[dashboards/Wiki Health|Wiki Health Dashboard]]

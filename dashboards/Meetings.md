# Meetings Dashboard

> All meeting transcripts by project, recent meetings, and unmatched meetings that need routing.

---

## Recent Meetings (All Projects)
```dataview
TABLE file.ctime as "Date", file.folder as "Project"
FROM "Meeting Notes"
WHERE file.name != "_Unmatched"
SORT file.ctime DESC
LIMIT 20
```

## By Company

### Harvey (Stand8)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Stand8/Harvey"
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
TABLE file.ctime as "Date"
FROM "Meeting Notes/High Meadows"
SORT file.ctime DESC
LIMIT 10
```

### Modern Stack Systems (Internal)
```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/Modern Stack Systems"
SORT file.ctime DESC
LIMIT 10
```

## Unmatched Meetings
> These need `project-mapping.md` updated so they route correctly next time.

```dataview
TABLE file.ctime as "Date"
FROM "Meeting Notes/_Unmatched"
SORT file.ctime DESC
```

## Meeting Volume (Last 30 Days)
```dataview
TABLE length(rows) as "Meetings"
FROM "Meeting Notes"
WHERE file.ctime >= date(today) - dur(30 days)
GROUP BY file.folder
```

---
type: dashboard
tags: [dashboard, today]
cssclasses: [dashboard]
---

# Today

> Live today view. Auto-rebuilt by `daily-note-builder` each morning. Queries below update in real time as tasks/meetings change.

`= dateformat(date(today), "EEEE, MMMM d, yyyy")`

## Meetings today

```dataview
TABLE WITHOUT ID file.link AS "Note", time AS "Time", project AS "Project"
FROM "Meeting Notes"
WHERE date = date(today)
SORT time ASC
```

## Due today

```tasks
not done
(due today) OR (scheduled today)
sort by priority
short mode
```

## Overdue

```tasks
not done
due before today
sort by due
short mode
```

## In progress
```tasks
not done
[tags include #in-progress] OR [status.name includes In Progress]
sort by priority
short mode
```

## Blocked

```tasks
not done
tags include #blocked
sort by priority
short mode
```

## Open actions from Action-Tracker

```dataview
TASK FROM "Second Brain/Action-Tracker"
WHERE !completed
  AND Date
  AND Date <= date(today)
SORT Date ASC
```

## Captured today

```dataview
LIST
FROM "Second Brain/raw/captures"
WHERE file.cday = date(today)
SORT file.ctime DESC
```

## Completed today

```tasks
done today
short mode
```

## Quick links

- [[Home]]
- [[Action-Review]]
- [[Action-Tracker]]
- [[Decision-Log]]
- [[SYSTEM-GUIDE]]

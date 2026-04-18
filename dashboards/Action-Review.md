---
type: dashboard
tags: [dashboard, action-review]
cssclasses: [dashboard]
---

# Action Review

> Weekly triage view. Auto-generated summary rewritten by `weekly-action-review` each Monday 8am CT. Queries update live.

## Overdue (action now)

```tasks
not done
due before today
sort by due
```

```dataview
TASK FROM "Second Brain/Action-Tracker"
WHERE !completed
  AND Date
  AND Date < date(today)
SORT Date ASC
```

## Due this week

```tasks
not done
due after yesterday
due before in 8 days
sort by due
```

## Stale (no update in 14+ days)

```dataview
TASK FROM "Second Brain/Action-Tracker"
WHERE !completed
  AND Date
  AND Date < date(today) - dur(14 days)
SORT Date ASC
```

## No due date

```tasks
not done
no due date
group by project
```

```dataview
TASK FROM "Second Brain/Action-Tracker"
WHERE !completed AND !Date
GROUP BY Project
```

## Unassigned

```dataview
TASK FROM "Second Brain/Action-Tracker"
WHERE !completed AND (!Owner OR Owner = "")
```

## By project — open

```dataview
TABLE WITHOUT ID
  Project AS "Project",
  length(rows) AS "Open",
  length(filter(rows, (r) => r.Date AND r.Date < date(today))) AS "Overdue"
FROM "Second Brain/Action-Tracker"
WHERE !completed
GROUP BY Project
SORT length(rows) DESC
```

## Completed this week

```tasks
done after last sunday
sort by done
```

## Reviewed this session

- [ ] Closed stale items
- [ ] Rescheduled overdue
- [ ] Assigned owners to unassigned
- [ ] Added due dates to no-date items
- [ ] Rolled unfinished to today/this week

---

## Monday review summary

*(overwritten weekly by the `weekly-action-review` scheduled task)*

<!-- BEGIN WEEKLY-SUMMARY -->

<!-- END WEEKLY-SUMMARY -->

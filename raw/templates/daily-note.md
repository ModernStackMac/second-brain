<%*
// Templater-powered daily note.
// If you're NOT using Templater, swap the <% %> blocks for core Daily Notes {{date:...}} syntax.
const today = tp.date.now("YYYY-MM-DD");
const todayLong = tp.date.now("dddd, MMMM D, YYYY");
const weekNum = tp.date.now("YYYY-[W]ww");
const yesterday = tp.date.now("YYYY-MM-DD", -1);
-%>
---
type: daily-note
date: <% today %>
week: <% weekNum %>
tags: [daily]
cssclasses: [daily-note]
---

# <% todayLong %>

> Ephemeral working page. Captures, priorities, and what moved today. Anything permanent gets routed to `raw/` or `wiki/`.

## Meetings today

```dataview
TABLE WITHOUT ID file.link AS "Note", time AS "Time", project AS "Project"
FROM "Meeting Notes"
WHERE date = this.date
SORT time ASC
```

*(If empty, `daily-note-builder` writes a static table when it runs at 6am CT.)*

## Top 3 priorities

1. 
2. 
3. 

## Due today

```tasks
not done
(due on <% today %>) OR (scheduled on <% today %>)
sort by priority
```

## Overdue

```tasks
not done
due before <% today %>
sort by due
```

## Captures

- 

## Decisions made

- 

## End-of-day reflection

- **Shipped:** 
- **Blocked by:** 
- **Tomorrow's one thing:** 

---

## Unfinished from yesterday

```dataview
TASK FROM "Second Brain/raw/daily/<% yesterday %>"
WHERE !completed
```

```tasks
not done
(scheduled before <% today %>) OR (due before <% today %>)
group by project
limit 20
```

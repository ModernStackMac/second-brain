---
type: reference
tags: [meta, taxonomy]
---

# Canonical Tag Taxonomy

> Single source of truth for tags. Use Tag Wrangler (right-click a tag → Rename) to refactor safely across the vault. Don't invent new top-level tags without adding them here first.

Tag format rules:
- Lowercase, hyphenated (`#in-progress`, not `#InProgress` or `#in_progress`)
- Hierarchy with `/` (`#project/cretelligent`, `#status/blocked`)
- No more than 3 levels deep
- Prefer tags for transient state, frontmatter fields for structured metadata (Owner, Project, Date)

## Project tags

Match `Second Brain/project-mapping.md`. One tag per active engagement.

- `#project/cretelligent`
- `#project/cetera`
- `#project/harvey`
- `#project/litify`
- `#project/mai`
- `#project/nbcu`
- `#project/lnw`
- `#project/internal`
- `#project/modern-stack`
- `#project/high-meadows`

Legacy flat form `#cretelligent`, `#litify`, etc. is tolerated but not preferred. Tag Wrangler can migrate in one operation.

## Status tags

Applied to tasks and captures. Must be mutually exclusive.

- `#status/todo`
- `#status/in-progress`
- `#status/review`
- `#status/blocked`
- `#status/done`

## Type tags

What kind of note this is. One per note.

- `#type/daily` — daily note
- `#type/meeting` — meeting summary or transcript
- `#type/decision` — decision record
- `#type/capture` — raw capture (articles, ideas, clippings)
- `#type/wiki` — compiled wiki page
- `#type/dashboard` — Dataview/Tasks dashboard
- `#type/kanban` — kanban board
- `#type/story` — Linear/Jira story mirror
- `#type/report` — saved query output

## Context tags

Where or when the work happens.

- `#context/focus` — deep-work blocks
- `#context/meeting` — in-meeting notes
- `#context/commute` — low-effort / mobile items
- `#context/quick` — < 15 min tasks
- `#context/errand`

## Priority tags

Use sparingly — prefer Tasks plugin emoji (`🔺 🔼 🔽 ⏬`) for task priority. Reserve priority tags for page-level importance.

- `#priority/urgent`
- `#priority/high`
- `#priority/low`

## Area tags (life/work domains)

- `#area/client-work`
- `#area/business-ops`
- `#area/learning`
- `#area/personal`
- `#area/admin`

## Deprecated

Migrate via Tag Wrangler (right-click → Rename tag):

| Old | New |
| --- | --- |
| `#todo` | `#status/todo` |
| `#wip` | `#status/in-progress` |
| `#followup` | `#status/review` |

---

## Tag Wrangler quick ops

- **Rename across vault:** right-click tag in sidebar → Rename tag
- **Find orphans:** Tag pane shows all tags; low-count tags are candidates to merge
- **Merge:** rename `#old` to `#canonical` — Tag Wrangler rewrites every occurrence
- **Prune:** delete unused tags from `TAGS.md`, then search for them and remove from notes

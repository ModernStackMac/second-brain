# Wiki Lint Report — Mid-week
**Run date:** 2026-05-28
**Issues found:** 17 critical, 11 recommended

## Critical

### Broken wiki-links (project bare-slug links) — 12 unique targets, 99 occurrences in content pages

The vault uses bare project slugs as wiki-links (`[[harvey]]`, `[[cetera]]`, etc.) but no corresponding `.md` file exists for these slugs. Obsidian cannot resolve them. This is the single largest source of structural debt.

| Broken Target | Content Page Refs | Fix |
|---|---|---|
| `[[cretelligent]]` | 15 | Create `wiki/projects/cretelligent/cretelligent.md` redirect, or replace with `[[cretelligent/context]]` |
| `[[harvey]]` | 14 | Create `wiki/projects/harvey/harvey.md` redirect, or replace with `[[harvey/context]]` |
| `[[litify]]` | 14 | Create `wiki/projects/litify/litify.md` redirect, or replace with `[[litify/context]]` |
| `[[nbcu]]` | 12 | Create `wiki/projects/nbcu/nbcu.md` redirect, or replace with `[[nbcu/context]]` |
| `[[meadow]]` | 7 | Replace with `[[internal/meadow/context]]` |
| `[[cetera]]` | 6 | Create `wiki/projects/cetera/cetera.md` redirect, or replace with `[[cetera/context]]` |
| `[[mai]]` | 6 | Create `wiki/projects/mai/mai.md` redirect, or replace with `[[mai/context]]` |
| `[[high-meadow-website]]` | 5 | Replace with `[[internal/high-meadow-website/context]]` |
| `[[high-meadows-mai]]` | 5 | No target exists — likely should be `[[mai/context\|MAI]]` |
| `[[hms-capacity-planning]]` | 4 | No target exists — replace with `[[internal/meadow/context]]` |
| `[[loftware]]` | 3 | Replace with `[[loftware/context]]` |
| `[[internal/meadow]]` | 2 | Replace with `[[internal/meadow/context]]` |

Additional broken links with 0–1 content-page refs: `[[blink-payments]]` (1), `[[cartier]]` (1), `[[high-meadow-labs]]` (1), `[[lnw]]` (1).

### Broken link: `[[reports/mai-project-overview]]` in index.md

Referenced in `wiki/index.md` but the file `wiki/reports/mai-project-overview.md` does not exist. Either create it or remove the index entry.

### Deprecated slug alias persists — `f2-cetera` in cetera/overview.md

`wiki/projects/cetera/overview.md` line 2 frontmatter: `aliases: [cetera, f2-cetera, f2/cetera]`. Remove `f2-cetera` and `f2/cetera` from the aliases array.

### Unmapped project folders (12 folders missing from project-mapping.md)

Only 5 of 17 project folders have entries in `project-mapping.md`. The following folders need mapping entries added:

- `blink-payments` — Add entry (no Jira/Linear workspace, manual-only)
- `cartier` — Add entry (no Jira/Linear workspace, manual-only)
- `cretelligent` — Add entry (no Jira/Linear workspace, manual-only)
- `harvey` — Add entry (no Jira/Linear workspace, manual-only)
- `internal/high-meadow-labs` — Add entry (Linear or manual)
- `internal/high-meadow-website` — Add entry (Linear or manual)
- `litify` — Add entry (no Jira/Linear workspace, manual-only)
- `loftware` — Add entry (no Jira/Linear workspace, manual-only)
- `modern-stack-systems` — Add entry (manual)
- `nbcu` — Add entry (no Jira/Linear workspace, manual-only)

Note: `wiki/projects/flex-dash/` is empty and stale — a duplicate of `wiki/projects/internal/flex-dash/`. Should be deleted. `wiki/projects/.space/` contains only a Linear `views.mdb` — not a real project folder, can be ignored.

### Stories frontmatter mismatches (2)

- `projects/internal/flex-dash/stories-hm.md` — frontmatter `project: flex-dash` but folder slug is `internal/flex-dash`. Fix: update frontmatter to `project: internal/flex-dash`.
- `projects/internal/meadow/stories-hm.md` — frontmatter `project: meadow` but folder slug is `internal/meadow`. Fix: update frontmatter to `project: internal/meadow`.

### Parenthetical cross-reference heading (1)

- `projects/internal/meadow/stories-linear.md` has heading `# Meadow (Capacity Planning)`. Fix: rename to `# Meadow` or `# Capacity Planning`.

## Recommended

### Orphan pages (no inbound wiki-links) — 7

- `projects/mai/overview` — Add `[[mai/overview]]` link from mai/context.md or index.md
- `projects/harvey/overview` — Add `[[harvey/overview]]` link from harvey/context.md or index.md
- `projects/cetera/overview` — Add `[[cetera/overview]]` link from cetera/context.md or index.md
- `projects/internal/meadow/overview` — Add link from meadow/context.md
- `projects/nbcu/overview` — Add link from nbcu/context.md
- `projects/cretelligent/overview` — Add link from cretelligent/context.md
- `projects/litify/overview` — Add link from litify/context.md

### Stale project journals (last_meeting > 14 days, status active) — 6

| Journal | Last Date | Days Stale |
|---|---|---|
| `projects/harvey/journal.md` | 2026-04-09 | 49 |
| `projects/litify/journal.md` | 2026-04-17 | 41 |
| `projects/internal/high-meadow-website/journal.md` | 2026-04-21 | 37 |
| `projects/internal/high-meadow-labs/journal.md` | 2026-04-23 | 35 |
| `projects/loftware/journal.md` | 2026-04-27 | 31 |
| `projects/nbcu/journal.md` | 2026-04-30 | 28 |

Consider: mark Harvey, Litify, and High Meadow Website as `status: paused` if no new meetings are expected, or confirm they're still active.

### Non-canonical tag (1)

- `#active` in `topics/obsidian-ecosystem.md` — not in TAGS.md. Replace with `#status/in-progress` or add to taxonomy.

### Log rotation approaching

`wiki/log.md` has 227 entries (threshold: 200). Entries older than 90 days should be archived to `wiki/log-archive-2026.md`.

---
*Auto-generated by second-brain-lint-wed*

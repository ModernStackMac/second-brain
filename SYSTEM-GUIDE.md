# Second Brain — System Guide

> How everything works, end to end. Reference when configuring, troubleshooting, or onboarding.

**Last updated:** 2026-04-19 · **Change history:** `_System/changelog.md`

---

## Architecture Overview

Three layers:

**Obsidian** — the frontend. Plain markdown in an iCloud-synced vault. Browse wiki pages, view the graph, use plugins for tasks/drawing.

**Claude** — the backend. Scheduled tasks and on-demand skills read sources, compile wiki pages, maintain cross-references, extract patterns, and run health checks. Claude writes; you read.

**MCPs** — the connections. Claude talks to Obsidian (via Local REST API), Fathom, Gmail, Slack, Google Calendar, QuickBooks, Linear, Jira, Notion, and others.

Canonical architecture diagram: `resources/diagrams/llm-kb-architecture.md`.

```
┌──────────────────────────────────────────────────┐
│  YOU (Obsidian)                                  │
│  Browse wiki · Graph view · Tasks · Excalidraw   │
└───────────────────────┬──────────────────────────┘
                        │ reads / browses
┌───────────────────────▼──────────────────────────┐
│  VAULT (iCloud)                                  │
│  Meeting Notes/ · raw/ · wiki/ · reports/        │
│  commitments.md · project-mapping.md             │
└───────────────────────┬──────────────────────────┘
                        │ reads / writes
┌───────────────────────▼──────────────────────────┐
│  CLAUDE (scheduled tasks + on-demand skills)     │
│  Fathom route · Ingest · Lint · Synthesis · Sync │
│  Via: mcp-obsidian, Fathom, Gmail, Linear, Jira… │
└──────────────────────────────────────────────────┘
```

Data flow: **Sources → Meeting Notes/ + raw/ (intake) → wiki/ (LLM-compiled) → reports/ (synthesis).** Claude never rewrites an existing Meeting Notes file and treats `raw/` as additive-only.

---

## Vault Location

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/
```

Folder tree:

```
Documents/
  Clippings/                  # Web Clipper landing zone + reference images
  Excalidraw/                 # Excalidraw drawings (excluded from ingest)
  Meeting Notes/              # Fathom meeting notes — sole meeting destination
    {Company}/{Project}/
    _Unmatched/               # Meetings the router couldn't route
  Second Brain/               # The knowledge base
    SCHEMA.md                 # Wiki governance (page types, formats, workflows)
    SYSTEM-GUIDE.md           # This file
    PEER-SETUP-GUIDE.md       # How a colleague replicates the setup
    TAGS.md                   # Canonical tag taxonomy
    Decision-Log.md           # Key decisions with date, context, source meeting
    _System/                  # identity.yaml, changelog, routing logs, scripts
    raw/                      # Immutable source material
      articles/               # Web Clipper saves here
      projects/               # SOWs, configs, client docs
      archived-actions/       # Completed commitments archive (auto-managed)
      templates/              # Templater templates
    resources/                # Reference docs (diagrams, interests, learning, reading)
      diagrams/               # Architecture + other diagrams
    wiki/                     # Claude-maintained knowledge
      index.md                # Master catalog
      log.md                  # Chronological operation log
      projects/               # One subfolder per engagement
      concepts/               # Domain knowledge
      patterns/               # Reusable solution patterns (auto-extracted by ingest)
      tools/                  # Platforms, integrations
      entities/               # People, orgs, vendors
      articles/               # Article breakdowns
      topics/                 # Accumulator pages for interests
      reports/                # On-demand query outputs + weekly synthesis reports
      f2-internal/            # F2 Strategy Confluence mirror
  commitments.md              # Rolling open action items (Mac owns) — 4-gate extraction
  project-mapping.md          # Single source of truth for projects, contacts, routing
  .claudeignore               # Excludes noise from Claude Code / Cowork scans
```

**Deprecated / removed (2026-04-19):**
- `daily/` — Daily notes killed. Automated systems (commitments.md, story-sync, ingest) are the record of work.
- `session-context/` — Removed. Durable knowledge goes into wiki pages.
- `Action-Tracker.md` — Replaced by commitments.md.
- `raw/meeting-raw/` — Fathom routes directly to Meeting Notes/. No staging folder needed.
- `raw/archived-stories/` — Old story dumps superseded by story-sync.
- `dashboards/` — Dataview pages removed. Weekly synthesis reports replace the need.

---

## Scheduled Automations

All times Central. All tasks run automatically — no manual intervention needed.

### Meeting pipeline (Fathom)

| Task | Schedule | What it does |
|------|----------|--------------|
| `process-fathom-transcripts` | Weekdays every 2hrs, 8am–6pm | Ingests new Fathom recordings **directly** to `Meeting Notes/{Company}/{Project}/` via `project-mapping.md`. Unroutable → `Meeting Notes/_Unmatched/`. |

### Knowledge pipeline

| Task | Schedule | What it does |
|------|----------|--------------|
| `second-brain-ingest` | Weekdays every 4hrs at :30 | Scans `Meeting Notes/`, `raw/articles/`, `raw/projects/` for unprocessed files. Extracts entities/concepts → wiki pages, decisions → `Decision-Log.md`, commitments → `commitments.md` (4-gate rule). **NEW:** Auto-extracts reusable patterns/concepts from journal entries into `wiki/patterns/` and `wiki/concepts/`. |
| `weekly-synthesis` | Mondays 5:30am | Cross-project synthesis report. Reads all project journals, meetings, commitments. Generates `wiki/reports/weekly-synthesis-{date}.md` with patterns, stale items, and recommendations. |
| `second-brain-lint` | Sundays 1am | Full lint — broken links, orphans, index gaps, cross-ref gaps, tag canon, frontmatter conflicts, project-slug integrity. |
| `second-brain-lint-wed` | Wednesdays 1am | Mid-week lint — same checks, lighter scope. |
| `confluence-ingest` | Weekdays 6:30am | Mirrors F2 Strategy Confluence pages into `wiki/f2-internal/`. |
| `story-sync` | Weekdays every 2hrs, 7am–7pm | Pulls active Linear (MSS + HM) and Jira (F2) stories assigned to Mac. Routes via `project-mapping.md`. |

### Email

| Task | Schedule | What it does |
|------|----------|--------------|
| `daily-morning-briefing` | Daily 6am | Curated Salesforce / AI / tech / HN news as styled HTML email. |
| `daily-email-summary` | Weekdays 7am | Summarizes last 3 days of Gmail — orders, tracking, important — styled HTML digest. |
| `weekly-financial-digest` | Fridays 7am | QuickBooks P&L + cash flow → Gmail draft → send via Chrome. |

### Disabled

| Task | Reason |
|------|--------|
| `daily-note-builder` | Killed 2026-04-19. Daily notes added noise without signal. |

---

## On-Demand Skills

Trigger from natural language in Cowork or Claude Code.

| Skill | Triggers | What it does |
|-------|----------|--------------|
| `kb-ingest-now` | "ingest this", "add this to the brain", "process this article" | Immediate interactive ingest. Discusses the article before filing. |
| `kb-report` | "what do I know about X", "using my wiki", "brain report" | Queries wiki, synthesizes answer with citations, saves to `wiki/reports/`. |
| `kb-lint-now` | "lint the wiki", "health check", "clean up the brain" | Same as scheduled lint, on-demand. |
| `session-kickoff` | "start session on X", "where did we leave off" | Context brief from project-mapping, wiki, meetings, commitments. |
| `consolidate-memory` | "consolidate memory", "clean up CLAUDE.md" | Reflective pass over CLAUDE.md — merges duplicates, fixes stale entries. |

---

## Capture Workflow

### Articles (Web Clipper)

1. Hit the Web Clipper extension in your browser
2. Saves to `Second Brain/raw/articles/` as clean markdown
3. `second-brain-ingest` processes within 4 hours, or say "ingest this" for immediate

### Meetings (Fathom)

1. Join with Fathom running
2. `process-fathom-transcripts` pulls the recording within 2 hours and writes to `Meeting Notes/{Company}/{Project}/`
3. Routing uses `project-mapping.md`. Unroutable → `Meeting Notes/_Unmatched/`
4. `second-brain-ingest` extracts: decisions → `Decision-Log.md`, commitments → `commitments.md`, entities/concepts/patterns → wiki pages

### Manual content

Paste a URL or text, say "ingest this". Claude saves raw, discusses, files.

### Project documents

Drop SOWs, API schemas, configs into `raw/projects/{project}/`. Original stays as source of truth; wiki pages get generated.

---

## commitments.md (the action flow)

`commitments.md` at the vault root is the rolling open-items list.

**Writer:** `second-brain-ingest` (auto) + `kb-ingest-now` skill (on-demand).

**4-gate extraction rule** — all four must pass before writing:

1. **Owner = Mac.** Explicit assignment or first-person commitment.
2. **Firm commitment.** Explicit verb phrase ("I'll", "Mac will").
3. **Concrete next step.** Specific action, not a topic.
4. **Deduplicate.** Compare first 60 chars + project against existing.

**Lifecycle:**
- Ingest appends to `## Open`
- You check the box in Obsidian (`- [x]`)
- Lint moves checked items to `## Done`
- Items > 14 days in Done → `raw/archived-actions/YYYY-MM.md`
- Open items > 30 days → flagged for review

---

## Obsidian Plugins

| Plugin | What it does |
|--------|--------------|
| **Local REST API** | Exposes vault to Claude (port 27124). Obsidian must be open. |
| **Dataview** | Query notes as database. |
| **Tasks** | Track `- [ ]` with due dates, priorities, recurring. |
| **Templater** | Dynamic templates. Folder = `raw/templates/`. |
| **Tag Wrangler** | Safe tag refactoring. Taxonomy in `TAGS.md`. |
| **Obsidian Git** | Auto-backup every 15 min to private GitHub. |
| **Excalidraw** | Whiteboarding, diagrams. |
| **Web Clipper** | Browser extension → `raw/articles/`. |

---

## MCP Connections

### mcp-obsidian (vault access)

- **Command:** `/Users/maciejnosek/.local/bin/uvx mcp-obsidian`
- **Env:** `OBSIDIAN_API_KEY`, `OBSIDIAN_HOST=127.0.0.1`, `OBSIDIAN_PORT=27124`
- **Requirement:** Obsidian open with the vault active

### Other connected MCPs

Fathom, Google Calendar, Gmail, Slack, Notion, Linear, Jira, QuickBooks, Apollo, Figma, Canva, Lucid.

---

## CLAUDE.md (Hot Cache)

Location: `~/.claude/CLAUDE.md`. Loaded into every Claude session. Under ~150 lines. Contains memory (people, terms, projects, preferences), rules (tone, file access, defaults), and Second Brain pointers. Keep lean — stale entries → remove.

---

## Git Backup

Auto-commit + push every 15 minutes via Obsidian Git.

- **Repo:** `ModernStackMac/second-brain` (private)
- **Interval:** 15 minutes
- **Commit message:** `vault backup: {{date}}`

---

## Troubleshooting

**MCP not connecting** — Obsidian open with vault active? API key matches? Debug: `tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log`

**Scheduled task not processing** — File already in `wiki/log.md`? `project-mapping.md` has an entry? Check task run history in Cowork sidebar.

**Meeting not routing** — Unrouted → `Meeting Notes/_Unmatched/`. Update `project-mapping.md` keywords, then move the file manually.

**Web Clipper wrong folder** — Extension settings → Folder = `Second Brain/raw/articles`.

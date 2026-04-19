# Second Brain — System Guide

> How everything works, end to end. Reference this when configuring, troubleshooting, or onboarding.

**Last consolidated:** 2026-04-18 · **Change history:** `_System/changelog.md`

---

## Architecture Overview

The system has three layers:

**Obsidian** — the frontend. You browse wiki pages, view the graph, use plugins for tasks/dashboards/drawing. Everything is plain markdown in an iCloud-synced vault.

**Claude** — the backend. Scheduled tasks and on-demand skills read raw sources, compile wiki pages, maintain cross-references, and run health checks. Claude writes; you read.

**MCPs** — the connections. Claude talks to Obsidian (via Local REST API), Granola + Fathom (meeting transcripts), Gmail, Slack, Google Calendar, QuickBooks, Linear, Jira, and others.

See `resources/diagrams/llm-kb-architecture.md` for the canonical one-page picture.

```
┌──────────────────────────────────────────────────────┐
│  YOU (Obsidian)                                      │
│  Browse wiki · Graph view · Tasks · Excalidraw       │
└──────────────────────┬───────────────────────────────┘
                       │ reads / browses
┌──────────────────────▼───────────────────────────────┐
│  VAULT (iCloud)                                      │
│  raw/ → wiki/ → reports/                             │
│  Meeting Notes/ · commitments.md · project-mapping.md│
└──────────────────────┬───────────────────────────────┘
                       │ reads / writes
┌──────────────────────▼───────────────────────────────┐
│  CLAUDE (scheduled tasks + on-demand skills)         │
│  Ingest · Lint · Report · Meeting selector · Story   │
│  Via: mcp-obsidian, Granola, Fathom, Gmail, etc.     │
└──────────────────────────────────────────────────────┘
```

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
  Meeting Notes/              # Selector winners — routed by project
    {Company}/{Project}/
    _Unmatched/               # Meetings the selector couldn't route
  Second Brain/               # The knowledge base
    README.md                 # Quick start / orientation
    SCHEMA.md                 # Wiki governance (page types, formats, workflows)
    SYSTEM-GUIDE.md           # This file
    PEER-SETUP-GUIDE.md       # How a colleague replicates the setup
    TAGS.md                   # Canonical tag taxonomy
    Decision-Log.md           # Key decisions with date, context, source meeting
    Action-Tracker.md         # DEPRECATED — read-only pointer to commitments.md
    _System/                  # identity.yaml, changelog, meeting-selector logs
    daily/                    # Daily notes (YYYY-MM-DD.md) — auto-built 6am weekdays
    dashboards/               # Dataview-powered live views (excluded from ingest)
    raw/                      # Immutable source material
      articles/               # Web Clipper saves here
      projects/               # SOWs, configs, client docs
      meeting-raw/            # Pre-selection transcripts
        fathom/
        granola/
      archived-actions/       # Pre-commitments.md archive
      archived-stories/       # Old story dumps
      templates/              # Templater templates (daily-note, quick-capture)
    resources/                # Reference docs (diagrams, interests, learning, reading)
      diagrams/               # Architecture + other diagrams
    wiki/                     # Claude-maintained knowledge
      index.md                # Master catalog
      log.md                  # Chronological operation log
      MAKE-SPACES.md          # Make.md space config reference
      projects/               # One subfolder per engagement (client merge — no separate clients/)
      concepts/               # Domain knowledge
      patterns/               # Reusable solution patterns
      tools/                  # Platforms, integrations
      entities/               # People, orgs, vendors
      articles/               # Article breakdowns
      topics/                 # Accumulator pages for interests
      reports/                # Saved query outputs
      f2-internal/            # F2 Strategy Confluence mirror
  commitments.md              # Rolling open action items (Mac owns) — 4-gate extraction
  project-mapping.md          # Single source of truth for projects, contacts, routing
  .claudeignore               # Excludes noise from Claude Code / Cowork scans
```

**`.claudeignore` excludes:** `.obsidian/`, `Excalidraw/`, `Clippings/`, `raw/archived-stories/`, binary attachments, stray CSVs. The compiled wiki layer is the intended search surface.

---

## Scheduled Automations

All run automatically. No manual intervention needed. All times Central.

### Meeting pipeline (Granola + Fathom + selector)

| Task | Schedule | What it does |
|------|----------|--------------|
| `process-meeting-transcripts` | Weekdays 8am, 10am, 12pm, 2pm, 4pm, 6pm | Pulls Granola transcripts into `raw/meeting-raw/granola/` with frontmatter |
| `process-fathom-transcripts` | Weekdays 8am, 10am, 12pm, 2pm, 4pm, 6pm | Pulls Fathom transcripts into `raw/meeting-raw/fathom/` with frontmatter |
| `meeting-selector` | Weekdays :45 past 8am–6pm (every 2hrs) | Scores each pair (transcript 30% / summary 25% / actions 25% / tech 15% / metadata 5%), writes winner to `Meeting Notes/{Company}/{Project}/`. Immutability preserved — once a file is selected, it stays. |

**Fathom/Granola trial:** ends 2026-05-02. `granola-fathom-decision` fires that day to prompt a commit. Current data: Fathom winning every scored pair. Standardize on Fathom at trial end.

### Knowledge pipeline

| Task | Schedule | What it does |
|------|----------|--------------|
| `second-brain-ingest` | Weekdays :30 every 4 hours | Scans `raw/` + `Meeting Notes/` for files not in `wiki/log.md`. Extracts entities/concepts → wiki pages, decisions → `Decision-Log.md`, commitments → `commitments.md` (4-gate rule). Updates `wiki/index.md` and `wiki/log.md`. |
| `second-brain-lint` | Sundays 1am | Full lint — broken links, orphans, index gaps, cross-ref gaps, tag canon, frontmatter conflicts, project-slug integrity. Auto-fixes safe issues; reports the rest. |
| `second-brain-lint-wed` | Wednesdays 1am | Mid-week lint — same checks, lighter scope (skips archived folders). |
| `confluence-ingest` | Weekdays 6:30am | Mirrors F2 Strategy Confluence pages into `wiki/f2-internal/`. Sync-only — do not edit mirrored files by hand. |
| `story-sync` | Weekdays :15 every 2 hours (7am–7pm) | Pulls active Linear (MSS + HM) and Jira (F2) stories assigned to Mac. Active set only: Linear Todo/In Progress/Started + Jira To Do/In Progress (plus Backlog in current cycle). Routes via `project-mapping.md`; unrouted → `raw/story-sync-unrouted.md`. |

### Daily / email

| Task | Schedule | What it does |
|------|----------|--------------|
| `daily-note-builder` | Weekdays 6am | Builds `daily/YYYY-MM-DD.md` — today's calendar events + open commitments (today's focus) + rolled-forward unfinished items + recent decisions. |
| `daily-morning-briefing` | Daily 6am | Curated Salesforce / AI / tech / HN news as styled HTML email. |
| `daily-email-summary` | Weekdays 7am | Summarizes last 3 days of Gmail — orders, tracking, important — styled HTML digest. |
| `weekly-financial-digest` | Fridays 7am | QuickBooks P&L + cash flow → Gmail draft → send via Chrome. |

### Manual / ad-hoc

| Task | Trigger | What it does |
|------|---------|--------------|
| `daily-note-review` | Run from sidebar | Reads today's daily note + commitments + recent decisions. Produces a 90-second focus brief. |
| `granola-fathom-decision` | One-time 2026-05-02 | End-of-trial prompt to commit to Fathom or Granola based on selector-log scoring. |

---

## On-Demand Skills

Trigger from natural language in Cowork or Claude Code. All live in `~/.claude/skills/`.

| Skill | Triggers | What it does |
|-------|----------|--------------|
| `kb-ingest-now` | "ingest this", "add this to the brain", "process this article" | Immediate interactive ingest. Discusses the article before filing — lets you add context or just say "file it." |
| `kb-report` | "what do I know about X", "using my wiki", "brain report" | Queries `wiki/index.md`, reads relevant pages, synthesizes an answer with citations, saves to `wiki/reports/`. |
| `kb-lint-now` | "lint the wiki", "health check", "clean up the brain" | Same as scheduled lint, on-demand, with preview before destructive changes. |
| `session-kickoff` | "start session on X", "kickoff Y", "where did we leave off on Z", "picking up [ticket]" | Tight context brief. Reads `session-context/` handoffs, `project-mapping.md`, `wiki/projects/{project}/`, recent meetings, `commitments.md`, `Decision-Log.md`. Also wired as `/kickoff` slash command in Claude Code. |
| `daily-note-review` | "daily review", "morning brief", "what's on today" | 90-second focus read from today's daily note + commitments + recent decisions. |

---

## Capture Workflow

### Articles (Web Clipper)

1. Hit the Web Clipper extension in your browser
2. Saves to `Second Brain/raw/articles/` as clean markdown with URL, title, date
3. Scheduled ingest processes within 4 hours, or say "ingest this" for immediate
4. `Ctrl+Shift+D` in Obsidian downloads images locally for any clipped note

### Meetings (Granola + Fathom)

1. Have your meeting with both Granola and Fathom running (while the trial is live)
2. Processors pull each transcript every 2 hours into `raw/meeting-raw/{granola,fathom}/`
3. `meeting-selector` scores both versions, writes the winner to `Meeting Notes/{Company}/{Project}/` with frontmatter
4. Unmatched → `Meeting Notes/_Unmatched/`. Review weekly and update `project-mapping.md`
5. `second-brain-ingest` picks up the routed transcript and extracts:
   - **Decisions** → appended to `Decision-Log.md`
   - **Commitments** → appended to `commitments.md` under the 4-gate rule (Owner=Mac, firm commitment verb, concrete next step, deduped)
   - **Entities/concepts** → creates or updates wiki pages
   - **Meeting summary** → saved with cross-links to related wiki pages

### Manual content

Paste a URL or text and say "ingest this". Claude saves raw, discusses, then files.

### Project documents

Drop SOWs, API schemas, configs, ERDs into `raw/projects/{project}/`. Original stays as source of truth; wiki pages get generated.

### Discovery notes

Pre-project requirements → `raw/projects/{project}/discovery-*.md`. Separate discovery folder no longer exists — discovery docs colocate with project source material.

### Templates

`raw/templates/` holds Templater templates. Current: `daily-note.md`, `quick-capture.md`. Not ingested — these are Obsidian templates.

---

## Dashboards

Live Dataview-powered views. Render automatically, no maintenance needed. Excluded from ingest.

| Dashboard | Shows |
|-----------|-------|
| **Home** | Central hub — recent clips, recent meetings, recent wiki updates, open commitments, active session handoffs. Pin as startup page. |
| **Today** | Focused daily view — meetings today, due today, overdue, captured today, completed today. |
| **Action-Review** | Weekly triage — overdue, due this week, stale, no date, unassigned, by-project. Monday summary auto-written. |
| **Articles** | Recent clips, processed articles, topic pages. |
| **Meetings** | Recent across projects, per-company, unmatched, monthly volume. |
| **Projects** | Active project pages, decisions, patterns, tools. |
| **Wiki Health** | Page counts, stale pages, unprocessed articles, stale commitments. |

Set Home as startup: Settings → Editor → Default view = Reading view; enable the Homepage plugin pointed at `dashboards/Home`.

---

## commitments.md (the new flow)

`Action-Tracker.md` is deprecated — the root file is a read-only pointer. `commitments.md` at the vault root is the rolling open-items list.

**4-gate extraction rule** — ingest MUST enforce all four before writing:

1. **Owner = Mac.** Explicit assignment or first-person commitment. Ambiguous → skip.
2. **Firm commitment.** Explicit verb phrase ("I'll", "Mac will", "action for Mac"). Vague "we should" → skip.
3. **Concrete next step.** Specific action, not a topic. "Follow up on X" without specifics → skip.
4. **Deduplicate.** Compare first 60 chars + project against existing open items.

Items that fail any gate do not get written.

Format:

```markdown
- [ ] Description [Project:: slug] [Source:: Meeting Notes/.../file.md] [Captured:: YYYY-MM-DD] [Due:: YYYY-MM-DD]
```

Lifecycle: ingest appends to `## Open`. When you check the box, the Sunday lint moves it to `## Done (last 14 days)`. Items in Done > 14 days → `raw/archived-actions/YYYY-MM.md`.

`daily-note-builder` reads `commitments.md` each morning and surfaces today's focus in the daily note.

---

## Session Context (cross-session memory)

Claude Code doesn't persist memory between sessions. `session-context/` bridges the gap.

1. End of a long session → "save context" or "write a handoff note"
2. Claude writes `session-context/{date}-{topic}.md` capturing: what you worked on, decisions made, open threads, next steps
3. Next session, `session-kickoff` reads handoffs first (highest signal)

Lifecycle: short-lived working memory. Sunday lint deletes files > 30 days old (or ingests durable knowledge into wiki pages first).

Use for multi-day work on complex features. Skip for quick one-offs already captured elsewhere.

---

## Obsidian Plugins

| Plugin | What it does | Setup notes |
|--------|--------------|-------------|
| **Local REST API** | Exposes vault to Claude (port 27124) | Configured. API key in MCP config. Obsidian must be open. |
| **Dataview** | Query notes as database | Works out of the box. Powers dashboards. |
| **Tasks** | Track `- [ ]` with due dates, priorities, recurring | Works out of the box. |
| **Calendar** | Date-based daily-note nav | Daily notes folder = `Second Brain/daily/`. |
| **Templater** | Dynamic templates with JavaScript | Template folder = `raw/templates/`. Folder template map: `daily/` → `daily-note.md`. |
| **Tag Wrangler** | Safe tag refactoring | Works immediately. Taxonomy lives in `TAGS.md`. |
| **Make.md** | Property-driven database views (optional) | See `wiki/MAKE-SPACES.md`. Use for Projects hub only. Don't let it fight scheduled tasks for frontmatter. |
| **Obsidian Git** | Auto-backup every 15 min | Pushes to `ModernStackMac/second-brain` (private). Base path = `Second Brain`. |
| **Excalidraw** | Whiteboarding, diagrams | Create `.excalidraw.md` files or ribbon icon. |
| **Kanban** | Visual boards (manual only) | No automation writes boards. Hand-built only. |
| **Web Clipper** | Browser extension for article capture | Saves to `Second Brain/raw/articles/`. |
| **Homepage** | Pin a dashboard as startup | Point at `dashboards/Home`. |

---

## Tag Taxonomy (TAGS.md)

Canonical namespaces enforced by `Second Brain/TAGS.md`:

| Namespace | Values |
|-----------|--------|
| `#project/` | One per active engagement (matches `project-mapping.md`) |
| `#status/` | `todo`, `in-progress`, `review`, `blocked`, `done` (mutually exclusive) |
| `#type/` | `daily`, `meeting`, `decision`, `capture`, `wiki`, `dashboard`, `story`, `report` |
| `#context/` | `focus`, `meeting`, `commute`, `quick`, `errand` |
| `#priority/` | `urgent`, `high`, `low` (page-level only; use Tasks emoji for task priority) |
| `#area/` | `client-work`, `business-ops`, `learning`, `personal`, `admin` |

Refactor via Tag Wrangler: right-click tag → Rename → vault-wide rewrite.

---

## MCP Connections

### mcp-obsidian (vault access)

- **Config:** `~/.claude.json` (Claude Code) + `~/Library/Application Support/Claude/claude_desktop_config.json` (Cowork)
- **Command:** `/Users/maciejnosek/.local/bin/uvx mcp-obsidian`
- **Env:** `OBSIDIAN_API_KEY`, `OBSIDIAN_HOST=127.0.0.1`, `OBSIDIAN_PORT=27124`
- **Requirement:** Obsidian must be open with the vault active

### Other connected MCPs

Granola, Fathom, Google Calendar, Gmail, Slack, Notion, Linear, Jira, QuickBooks, Apollo, Figma, Canva, Lucid, Obsidian REST API.

---

## CLAUDE.md (Hot Cache)

Location: `~/.claude/CLAUDE.md`. Loaded into every Claude session. Under ~150 lines. Contains:

- **Memory** — top people, terms/acronyms, active projects, preferences
- **Rules** — tone, file access, document defaults
- **Second Brain pointers** — vault location, key paths

Keep lean. When people/projects change, update the tables. Stale entries → remove (still in wiki for deep queries).

---

## Git Backup

Auto-commit + push every 15 minutes via Obsidian Git.

- **Repo:** `ModernStackMac/second-brain` (private)
- **Interval:** 15 minutes, push + pull on commit
- **Pull on startup:** enabled
- **Commit message:** `vault backup: {{date}}`
- **Base path:** `Second Brain` (vault root is `Documents/`, git repo is inside `Second Brain/`)

---

## Troubleshooting

**MCP not connecting** — Obsidian open with vault active? API key matches Settings → Local REST API → key? Debug: `tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log`

**Scheduled task not processing new files** — File already in `wiki/log.md` (skipped)? `project-mapping.md` has an entry for the project? Check task run history in Cowork sidebar.

**Meeting not routing** — Unmatched transcripts go to `Meeting Notes/_Unmatched/`. Update `project-mapping.md` keywords and attendees.

**Selector picked the wrong version** — Check `_System/meeting-selector.log` for the score breakdown. Immutability is preserved; re-running won't overwrite existing selections.

**Web Clipper saving to wrong folder** — Extension settings → Folder = `Second Brain/raw/articles`.

**Wiki pages not showing in Obsidian** — iCloud lag. Give it a minute, or check Finder directly. If Claude wrote via MCP but Obsidian doesn't see it, close/reopen the vault.

---

## Key Files Reference

| File | What | Who Maintains |
|------|------|---------------|
| `SCHEMA.md` | Wiki governance — page types, formats, workflows | You + Claude |
| `SYSTEM-GUIDE.md` | This file | You + Claude |
| `PEER-SETUP-GUIDE.md` | How a colleague replicates the setup | You + Claude |
| `TAGS.md` | Canonical tag taxonomy | You |
| `project-mapping.md` | Active projects, contacts, routing | You |
| `commitments.md` | Rolling open action items (Mac) | Claude (auto) |
| `Decision-Log.md` | Key decisions with context | Claude (auto) |
| `wiki/index.md` | Master catalog of all wiki pages | Claude (auto) |
| `wiki/log.md` | Chronological operation record | Claude (auto) |
| `wiki/MAKE-SPACES.md` | Make.md space config | You |
| `_System/identity.yaml` | Owner manifest, workspaces, filters | You |
| `_System/changelog.md` | System change history | You + Claude |
| `_System/meeting-selector.log` | Per-pair Granola/Fathom scoring | Claude (auto) |
| `resources/diagrams/llm-kb-architecture.md` | Canonical architecture diagram | You |
| `.claudeignore` | Claude Code / Cowork ignore rules | You |
| `~/.claude/CLAUDE.md` | Hot cache — memory, rules, pointers | You + Claude |
| `~/.claude/skills/session-kickoff/` | User-global session-kickoff skill | You |
| `~/.claude/commands/kickoff.md` | Claude Code slash command | You |

# Second Brain — System Guide

> How everything works, end to end. Reference when configuring, troubleshooting, or onboarding.

**Last updated:** 2026-04-18 · **Change history:** `_System/changelog.md`

---

## Architecture Overview

Three layers:

**Obsidian** — the frontend. Plain markdown in an iCloud-synced vault. Browse wiki pages, view the graph, use plugins for tasks/dashboards/drawing.

**Claude** — the backend. Scheduled tasks and on-demand skills read sources, compile wiki pages, maintain cross-references, and run health checks. Claude writes; you read.

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
│  Fathom route · Ingest · Lint · Story · Report   │
│  Via: mcp-obsidian, Fathom, Gmail, Linear, Jira… │
└──────────────────────────────────────────────────┘
```

Data flow: **Sources → Meeting Notes/ + raw/ (intake) → wiki/ (LLM-compiled) → dashboards/ (surfaced).** Claude never rewrites an existing Meeting Notes file and treats `raw/` as additive-only.

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
    README.md                 # Quick start / orientation
    SCHEMA.md                 # Wiki governance (page types, formats, workflows)
    SYSTEM-GUIDE.md           # This file
    PEER-SETUP-GUIDE.md       # How a colleague replicates the setup
    TAGS.md                   # Canonical tag taxonomy
    Decision-Log.md           # Key decisions with date, context, source meeting
    _System/                  # identity.yaml, changelog, routing logs, scripts
    daily/                    # Daily notes (YYYY-MM-DD.md) — auto-built 6am weekdays
    dashboards/               # Dataview-powered live views (excluded from ingest)
    raw/                      # Immutable source material
      articles/               # Web Clipper saves here
      projects/               # SOWs, configs, client docs
      transcripts/            # Non-Fathom transcripts (Granola legacy, interviews)
      meeting-raw/            # DEPRECATED — historical archive, frozen, not written to
      archived-actions/       # Pre-commitments.md archive
      archived-stories/       # Old story dumps
      templates/              # Templater templates (daily-note, quick-capture)
    resources/                # Reference docs (diagrams, interests, learning, reading)
      diagrams/               # Architecture + other diagrams
    wiki/                     # Claude-maintained knowledge
      index.md                # Master catalog
      log.md                  # Chronological operation log
      MAKE-SPACES.md          # Make.md space config reference
      projects/               # One subfolder per engagement
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

`.claudeignore` excludes: `.obsidian/`, `Excalidraw/`, `Clippings/`, `raw/archived-stories/`, `raw/meeting-raw/` (deprecated archive), binary attachments, stray CSVs. The compiled wiki layer is the intended search surface.

**Meeting storage:** Fathom recordings land directly in `Meeting Notes/{Company}/{Project}/`. There is no duplicate write to `raw/meeting-raw/fathom/` — that folder is a historical archive only. `Meeting Notes/` is the sole live meeting store.

---

## Scheduled Automations

All times Central. All tasks run automatically — no manual intervention needed.

### Meeting pipeline (Fathom)

| Task | Schedule | What it does |
|------|----------|--------------|
| `process-fathom-transcripts` | Weekdays every 2hrs, 8am–6pm | Ingests new Fathom recordings **directly** to `Meeting Notes/{Company}/{Project}/` via `project-mapping.md`. Single destination — no duplicate to `raw/`. Unroutable → `Meeting Notes/_Unmatched/` and `_System/meeting-routing-unrouted.md`. Log: `_System/selector-log.md`. |

Fathom is the sole meeting source. Meeting Notes is additive-only — once a file is written, it is never overwritten.

### Knowledge pipeline

| Task | Schedule | What it does |
|------|----------|--------------|
| `second-brain-ingest` | Weekdays every 4hrs at :30 | Scans `Meeting Notes/`, `raw/articles/`, `raw/projects/`, `raw/transcripts/` for files not in `wiki/log.md`. Does NOT scan `raw/meeting-raw/` (deprecated). Extracts entities/concepts → wiki pages, decisions → `Decision-Log.md`, commitments → `commitments.md` (4-gate rule). Updates `wiki/index.md` and `wiki/log.md`. |
| `second-brain-lint` | Sundays 1am | Full lint — broken links, orphans, index gaps, cross-ref gaps, tag canon, frontmatter conflicts, project-slug integrity. Auto-fixes safe issues; reports the rest. |
| `second-brain-lint-wed` | Wednesdays 1am | Mid-week lint — same checks, lighter scope (skips archived folders). Optional; disable if you don't actively read the report. |
| `confluence-ingest` | Weekdays 6:30am | Mirrors F2 Strategy Confluence pages into `wiki/f2-internal/`. Sync-only — don't edit mirrored files by hand. |
| `story-sync` | Weekdays every 2hrs at :15, 7am–7pm | Pulls active Linear (MSS + HM) and Jira (F2) stories assigned to Mac. Active set only: Linear Todo/In Progress/Started + Jira To Do/In Progress (plus Backlog in current cycle). Routes via `project-mapping.md`; unrouted → `raw/story-sync-unrouted.md`. |

### Daily / email

| Task | Schedule | What it does |
|------|----------|--------------|
| `daily-note-builder` | Weekdays 6am | Builds `daily/YYYY-MM-DD.md` — today's calendar, today's focus commitments, yesterday's wins, blocked/needs unblock, follow-ups due today, active stories by project, recent decisions. Preserves user-authored Notes/Scratch sections. |
| `daily-morning-briefing` | Daily 6am | Curated Salesforce / AI / tech / HN news as styled HTML email. |
| `daily-email-summary` | Weekdays 7am | Summarizes last 3 days of Gmail — orders, tracking, important — styled HTML digest. |
| `weekly-financial-digest` | Fridays 7am | QuickBooks P&L + cash flow → Gmail draft → send via Chrome. |

---

## On-Demand Skills

Trigger from natural language in Cowork or Claude Code. All live in `~/.claude/skills/`.

| Skill | Triggers | What it does |
|-------|----------|--------------|
| `kb-ingest-now` | "ingest this", "add this to the brain", "process this article" | Immediate interactive ingest. Discusses the article before filing — lets you add context or just say "file it." |
| `kb-report` | "what do I know about X", "using my wiki", "brain report" | Queries `wiki/index.md`, reads relevant pages, synthesizes an answer with citations, saves to `wiki/reports/`. |
| `kb-lint-now` | "lint the wiki", "health check", "clean up the brain" | Same as scheduled lint, on-demand, with preview before destructive changes. |
| `session-kickoff` | "start session on X", "kickoff Y", "where did we leave off on Z", "picking up [ticket]" | Tight context brief. Reads `session-context/` handoffs, `project-mapping.md`, `wiki/projects/{project}/`, recent meetings, `commitments.md`, `Decision-Log.md`. Also wired as `/kickoff` in Claude Code. |
| `consolidate-memory` | "consolidate memory", "clean up CLAUDE.md" | Reflective pass over CLAUDE.md — merges duplicate facts, fixes stale entries, prunes the index. |

---

## Capture Workflow

### Articles (Web Clipper)

1. Hit the Web Clipper extension in your browser
2. Saves to `Second Brain/raw/articles/` as clean markdown with URL, title, date
3. `second-brain-ingest` processes within 4 hours, or say "ingest this" for immediate

### Meetings (Fathom)

1. Join with Fathom running
2. `process-fathom-transcripts` pulls the recording within 2 hours and writes **one file** directly to `Meeting Notes/{Company}/{Project}/{date} - {title}.md` — no duplicate in `raw/`
3. Routing uses `project-mapping.md` (attendees + keywords). Unroutable → `Meeting Notes/_Unmatched/`; review weekly and update `project-mapping.md`
4. `second-brain-ingest` picks up the routed note and extracts:
   - Decisions → `Decision-Log.md`
   - Commitments → `commitments.md` (4-gate rule)
   - Entities/concepts → wiki pages
   - Summary → saved with cross-links

### Manual content

Paste a URL or text, say "ingest this". Claude saves raw, discusses, files.

### Project documents

Drop SOWs, API schemas, configs, ERDs into `raw/projects/{project}/`. Original stays as source of truth; wiki pages get generated.

### Templates

`raw/templates/` holds Templater templates. Not ingested.

---

## Dashboards

Live Dataview-powered views. Render automatically, no maintenance. Excluded from ingest.

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

## commitments.md (the action flow)

`commitments.md` at the vault root is the rolling open-items list. `Action-Tracker.md` is sunset — do not create.

**Writer:** `second-brain-ingest` (weekdays every 4hrs at :30) + on-demand `kb-ingest-now` skill.

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

**Lifecycle:**
- Ingest appends to `## Open`
- You check the box in Obsidian (`- [x]`)
- Sunday lint moves checked items to `## Done (last 14 days)`
- Items > 14 days in Done → `raw/archived-actions/YYYY-MM.md` (and removed from commitments.md)
- Open items untouched > 14 days → flagged in `_System/commitments-stale.md` for review (no auto-delete)

**Reader:** `daily-note-builder` reads `## Open` each morning and surfaces today's focus + overdue + blocked items.

---

## daily/ (what the daily note contains)

`daily-note-builder` creates today's note at `Second Brain/daily/YYYY-MM-DD.md` weekdays at 6am. Sections, in order:

| Section | Source | Notes |
|---------|--------|-------|
| Today's Calendar | Google Calendar MCP | Today's events with attendees |
| Today's Focus | `commitments.md` ## Open | Due today + overdue + fresh (last 2 business days). Max 8. |
| Yesterday's Wins | `commitments.md` ## Done | Items closed in last 24 hrs |
| Blocked / Needs Unblock | `commitments.md` ## Open | Tagged `[Blocked::]`, "waiting on", or open > 7 days |
| Follow-ups Due Today | `commitments.md` ## Open | Items with `[Due:: today]` only. Omitted if empty. |
| Active Stories by Project | `wiki/projects/{slug}/stories-*.md` | Up to 5 projects × 3 stories, assigned to Mac, active status |
| Recent Decisions | `Decision-Log.md` | Last 5 entries |
| Notes | (user-authored) | Preserved across reruns |
| Scratch | (user-authored) | Preserved across reruns |

The builder is read-only against commitments/decisions/stories — it never modifies them.

---

## Session Context (cross-session memory)

Claude Code doesn't persist memory between sessions. `session-context/` bridges the gap.

1. End of a long session → "save context" or "write a handoff note"
2. Claude writes `session-context/{date}-{topic}.md`: what you worked on, decisions made, open threads, next steps
3. Next session, `session-kickoff` reads handoffs first (highest signal)

Lifecycle: short-lived working memory. Sunday lint deletes files > 30 days old (or promotes durable knowledge into wiki pages first).

Use for multi-day work on complex features. Skip for quick one-offs already captured elsewhere.

---

## Obsidian Plugins

| Plugin | What it does | Setup |
|--------|--------------|-------|
| **Local REST API** | Exposes vault to Claude (port 27124) | API key in MCP config. Obsidian must be open. |
| **Dataview** | Query notes as database | Works out of the box. Powers dashboards. |
| **Tasks** | Track `- [ ]` with due dates, priorities, recurring | Works out of the box. |
| **Calendar** | Date-based daily-note nav | Daily notes folder = `Second Brain/daily/`. |
| **Templater** | Dynamic templates with JavaScript | Template folder = `raw/templates/`. Folder map: `daily/` → `daily-note.md`. |
| **Tag Wrangler** | Safe tag refactoring | Works immediately. Taxonomy lives in `TAGS.md`. |
| **Make.md** | Property-driven database views (optional) | See `wiki/MAKE-SPACES.md`. Use for Projects hub only. |
| **Obsidian Git** | Auto-backup every 15 min | Pushes to private GitHub. Base path = `Second Brain`. |
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
- **Requirement:** Obsidian open with the vault active

### Other connected MCPs

Fathom, Google Calendar, Gmail, Slack, Notion, Linear, Jira, QuickBooks, Apollo, Figma, Canva, Lucid, Obsidian REST API.

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
- **Base path:** `Second Brain`

---

## Troubleshooting

**MCP not connecting** — Obsidian open with vault active? API key matches Settings → Local REST API? Debug: `tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log`

**Scheduled task not processing new files** — File already in `wiki/log.md` (skipped)? `project-mapping.md` has an entry for the project? Check task run history in Cowork sidebar.

**Meeting not routing** — Unrouted meetings go to `Meeting Notes/_Unmatched/`. Update `project-mapping.md` keywords and attendees, then move the file to the correct `{Company}/{Project}/` folder manually.

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
| `_System/selector-log.md` | Meeting routing run log | Claude (auto) |
| `_System/meeting-routing-unrouted.md` | Log of meetings the router couldn't place | Claude (auto) |
| `resources/diagrams/llm-kb-architecture.md` | Canonical architecture diagram | You |
| `.claudeignore` | Claude Code / Cowork ignore rules | You |
| `~/.claude/CLAUDE.md` | Hot cache — memory, rules, pointers | You + Claude |
| `~/.claude/skills/session-kickoff/` | User-global session-kickoff skill | You |
| `~/.claude/commands/kickoff.md` | Claude Code slash command | You |

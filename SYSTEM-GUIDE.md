# Second Brain — System Guide

> How everything works, end to end. Reference this when configuring, troubleshooting, or onboarding someone to the system.

**Last updated:** 2026-04-11

---

## Architecture Overview

The system has three layers:

**Obsidian** — the frontend. You browse wiki pages, view the graph, use plugins for tasks/dashboards/drawing. Everything is plain markdown in an iCloud-synced vault.

**Claude** — the backend. Scheduled tasks and on-demand skills read raw sources, compile wiki pages, maintain cross-references, and run health checks. Claude writes; you read.

**MCPs** — the connections. Claude talks to Obsidian (via Local REST API), Granola (meeting transcripts), Gmail, Slack, Google Calendar, QuickBooks, and others. These feed data into the system.

```
┌─────────────────────────────────────────────────────┐
│  YOU (Obsidian)                                     │
│  Browse wiki · Graph view · Tasks · Excalidraw      │
└──────────────────────┬──────────────────────────────┘
                       │ reads/browses
┌──────────────────────▼──────────────────────────────┐
│  VAULT (iCloud)                                     │
│  raw/ → wiki/ → reports/                            │
│  Meeting Notes/ · project-mapping.md · SCHEMA.md    │
└──────────────────────┬──────────────────────────────┘
                       │ reads/writes
┌──────────────────────▼──────────────────────────────┐
│  CLAUDE (scheduled tasks + on-demand skills)        │
│  Ingest · Lint · Report · Meeting Processing        │
│  Connected via: mcp-obsidian, Granola, Gmail, etc.  │
└─────────────────────────────────────────────────────┘
```

---

## Vault Location

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/
```

This is the Obsidian vaults root (iCloud-synced). It contains:

```
Documents/
  Second Brain/           # The knowledge base
    SCHEMA.md             # Wiki governance rules (page types, formats, workflows)
    SYSTEM-GUIDE.md       # This file
    README.md             # Vault overview
    raw/                  # Immutable source material
      articles/           # Web Clipper saves here
      projects/           # SOWs, project docs, configs
      discovery/          # Discovery notes, requirements
      templates/          # Reusable doc templates
    wiki/                 # Claude-maintained knowledge
      index.md            # Master catalog of all pages
      log.md              # Chronological operation log
      clients/            # Client engagement pages
      concepts/           # Domain knowledge
      patterns/           # Reusable solution patterns
      tools/              # Platforms, integrations
      entities/           # People, orgs, vendors
      articles/           # Article breakdowns
      topics/             # Accumulator pages for interests
      meetings/           # Meeting summaries with cross-links
      reports/            # Saved query outputs
  Meeting Notes/          # Granola/Shadow transcripts (auto-processed)
    {Company}/{Project}/  # Routed by scheduled task
    _Unmatched/           # Meetings that couldn't be routed
  dashboards/              # Dataview-powered live dashboards (not ingested)
    Home.md               # Central hub — recent activity, quick links, open actions
    Articles.md           # Recent clips, processed articles, topics
    Meetings.md           # Meeting notes by project, unmatched meetings
    Projects.md           # Client pages, decisions, patterns, tools
    Wiki Health.md        # Page counts, stale pages, unprocessed articles
  session-context/          # Claude Code handoff notes for cross-session continuity
  project-mapping.md      # Single source of truth for projects, contacts, routing
  Action-Tracker.md       # Open action items from meetings (Claude-maintained)
  Decision-Log.md         # Key decisions with date, context, source meeting
```

---

## Scheduled Automations

These run automatically. No manual intervention needed.

### Meeting Transcript Processing
- **Schedule:** Every 2 hours, weekdays (8am, 10am, 12pm, 2pm, 4pm, 6pm CT)
- **What it does:** Pulls Granola meeting transcripts, routes them into `Meeting Notes/{Company}/{Project}/` using `project-mapping.md` keywords. Creates frontmatter with date, company, project, attendees.
- **Adding a new project:** Update `project-mapping.md` with the new entry and create the corresponding `Meeting Notes/` subfolder.

### Second Brain Ingest
- **Schedule:** Every 4 hours, weekdays (12am, 4am, 8am, 12pm, 4pm, 8pm CT)
- **What it does:** Scans `raw/articles/`, `raw/projects/`, and `Meeting Notes/` for files not yet referenced in `wiki/log.md`. For each new file: extracts entities/concepts, creates or updates wiki pages, updates index.md and log.md, adds cross-references.
- **Skips:** Files already processed (checks log.md).

### Second Brain Lint
- **Schedule:** Sundays at 1am CT
- **What it does:** Scans all wiki pages for broken links, orphan pages, missing index entries, cross-reference gaps, and pages without sources. Auto-fixes what it can (missing index entries, obvious broken links). Reports everything else.

### Daily Morning Briefing
- **Schedule:** 6am CT daily
- **What it does:** Curates Salesforce, AI, tech, and HN news. Sends styled HTML email to nosek.mac@gmail.com.

### Daily Email Digest
- **Schedule:** 7am CT weekdays
- **What it does:** Scans Gmail for last 3 days. Summarizes orders, tracking, and important emails. Sends HTML digest.

### Weekly Financial Digest
- **Schedule:** Fridays 7am CT
- **What it does:** Pulls P&L and Cash Flow from QuickBooks. Sends summary email.

---

## On-Demand Skills

These trigger from natural conversation in Cowork or Claude Code.

### kb-ingest-now
- **Triggers:** "ingest this", "add this to the brain", "process this article", "I just clipped something"
- **What it does:** Same as the scheduled ingest, but immediate and interactive. Discusses the article with you before filing — lets you add context, emphasize specific points, or just say "file it."
- **When to use:** You clipped something and want it in the wiki NOW, not in 4 hours. Or you want to discuss the content as it's being processed.

### kb-report
- **Triggers:** "what do I know about", "using my wiki", "brain report", "synthesize from my notes"
- **What it does:** Queries wiki/index.md to find relevant pages, reads them, synthesizes an answer with citations, saves the output as a permanent report in `wiki/reports/`. Cross-links the report from relevant wiki pages.
- **When to use:** Any complex question where your wiki has accumulated context. "Compare Agentforce implementations across clients." "What patterns have worked for case migrations?" The answer becomes a reusable asset, not chat history.

### kb-lint-now
- **Triggers:** "lint the wiki", "health check", "clean up the brain"
- **What it does:** Same checks as the Sunday lint, but on-demand. Presents findings by severity (critical, recommended, informational). Offers to auto-fix safe issues, asks before touching anything destructive.
- **When to use:** After a big ingest burst, before a client deliverable, or when something looks off.

---

## Capture Workflow

### Articles (Web Clipper)
1. See something worth keeping in your browser
2. Click the Obsidian Web Clipper extension
3. It saves to `Second Brain/raw/articles/` as clean markdown with URL, title, date
4. Scheduled ingest picks it up within 4 hours, OR say "ingest this" for immediate processing
5. Hotkey: `Ctrl+Shift+D` in Obsidian downloads images locally for any clipped note

### Meeting Notes (Automatic)
1. Have a meeting with Granola running
2. Transcript auto-appears in Granola
3. **Meeting Processing task** (every 2 hours) pulls transcript via Granola MCP, matches attendees and keywords against `project-mapping.md`, and routes to `Meeting Notes/{Company}/{Project}/` with frontmatter (date, company, project, attendees)
4. **Ingest task** (every 4 hours) picks up the routed transcript, extracts:
   - **Decisions** → appended to `Decision-Log.md` with date, meeting ref, and context
   - **Action items** → appended to `Action-Tracker.md` with owner, due date (if mentioned), and source meeting
   - **Entities/concepts** → creates or updates relevant wiki pages (client pages, tool pages, etc.) with new context from the meeting
   - **Meeting summary** → saved to `wiki/meetings/` with cross-links to related wiki pages
5. Unmatched meetings (no project-mapping hit) go to `Meeting Notes/_Unmatched/` — review periodically and update `project-mapping.md` to catch them next time

### Manual Content
1. Paste a URL or text into a Cowork/Claude Code session
2. Say "ingest this" or "add this to the brain"
3. Claude saves to `raw/articles/`, discusses key points, then files into wiki

### Project Documents (`raw/projects/`)
For project-specific source material: SOWs, contracts, API schemas, config exports, architecture docs, ERDs. Organize by project name (`raw/projects/harvey/`, `raw/projects/cretelligent/`, etc.).

1. Drop the file into the appropriate project subfolder
2. Scheduled ingest or "ingest this" processes them into wiki pages
3. The original stays in `raw/projects/` permanently as the source of truth

### Discovery Notes (`raw/discovery/`)
For pre-project and requirements gathering: discovery call notes, client questionnaires, requirements docs, competitive analysis. Material from the scoping phase before a project becomes active.

1. Save discovery notes here during initial client conversations
2. Ingest processes them into wiki client pages and concept pages
3. Useful for looking back at original requirements vs. what was actually built

### Templates (`raw/templates/`)
Reusable document templates for the Templater plugin. These are NOT ingested into the wiki — they're Obsidian templates you can insert into any note.

Examples: new wiki page template, meeting note template, project kickoff checklist, SOW outline. Currently empty — create templates as patterns emerge from your workflow.

---

## Dashboards

Live dashboards powered by Dataview. These render automatically — no maintenance needed. Open them in Obsidian to browse the system without digging through folders.

| Dashboard | What It Shows |
|-----------|--------------|
| **Home** | Central hub: recent clips, recent meetings, recent wiki updates, open action items, active session handoffs. Pin this as your Obsidian startup page. |
| **Articles** | Recent raw clips, processed wiki articles, topic pages, article count. |
| **Meetings** | Recent meetings across all projects, per-company views (Harvey, CREtelligent, High Meadows), unmatched meetings needing routing, monthly volume. |
| **Projects** | Client wiki pages, decision log, raw project docs, discovery notes, patterns library, tools catalog. |
| **Wiki Health** | Page counts by folder, recently updated pages, oldest pages needing refresh, unprocessed raw articles, stale action items, session context files. |

**To set Home as your startup page:** Settings -> Editor -> Default view for new tabs -> set to "Reading view". Then Settings -> Core plugins -> enable "Open specified page on startup" (or use the Homepage community plugin) and point it at `dashboards/Home`.

Dashboards are excluded from the ingest pipeline — they're Obsidian UI tools, not knowledge sources.

---

## Session Context (Cross-Session Memory)

Claude Code doesn't have persistent memory between sessions, but `session-context/` bridges the gap.

**How it works:**
1. At the end of a long Claude Code session, say "save context" or "write a handoff note"
2. Claude writes a markdown file to `Second Brain/session-context/` named `{date}-{topic}.md`
3. The file captures: what you worked on, decisions made, open threads, and next steps
4. Next session, Claude checks `session-context/` on startup (CLAUDE.md tells it to) and picks up where you left off

**File format:** `2026-04-11-harvey-data-model.md`

**Lifecycle:** Session context files are short-lived working memory. During the weekly lint (Sundays), files older than 30 days get either deleted or ingested into wiki pages if they contain durable knowledge.

**When to use it:**
- Multi-day work on a complex feature or deliverable
- Architecture decisions still in progress
- Any session where you'd lose significant context by starting fresh

**When NOT to use it:**
- Quick one-off questions
- Work that's already captured in wiki pages or meeting notes

---

## Obsidian Plugins

### Active and Configured

| Plugin | What It Does | Setup Notes |
|--------|-------------|-------------|
| **Local REST API** | Exposes vault to Claude via API (port 27124) | Configured. API key in MCP config. Must have Obsidian open for it to work. |
| **Dataview** | Query notes like a database using frontmatter | Works out of the box. Use `dataview` code blocks in any note to create dynamic tables. |
| **Tasks** | Track to-dos with due dates, priorities, recurring rules | Works out of the box. Any `- [ ]` in vault is trackable. Use `tasks` code blocks for dashboards. |
| **Calendar** | Date-based navigation for daily notes | Set daily notes folder to `daily/` in Settings -> Daily Notes. |
| **Templater** | Reusable templates with variables and logic | Set template folder to `raw/templates/` in plugin settings. Templates not yet created. |
| **Obsidian Git** | Auto-backup vault to Git every 15 min | Configured. Pushes to `ModernStackMac/second-brain` (private). Base path set to `Second Brain`. |
| **Excalidraw** | Whiteboarding, architecture diagrams, flowcharts | Works immediately. Create `.excalidraw.md` files or use the ribbon icon. |
| **Kanban** | Visual project boards | Works immediately. Create a note and add `kanban-plugin: basic` to frontmatter. |
| **Web Clipper** | Browser extension for saving articles | Configured to save to `Second Brain/raw/articles/`. |

### Not Used by Automation

The plugins are for YOUR Obsidian experience. The scheduled tasks and skills don't depend on them — they read/write markdown directly. You could uninstall every plugin and the automated workflows would still run fine. The plugins make browsing and interacting with the vault better.

---

## MCP Connections

### mcp-obsidian (Vault Access)
- **Config locations:** `~/.claude.json` (Claude Code global) + `~/Library/Application Support/Claude/claude_desktop_config.json` (Claude Desktop)
- **Command:** `/Users/maciejnosek/.local/bin/uvx mcp-obsidian`
- **Env vars:** OBSIDIAN_API_KEY, OBSIDIAN_HOST (127.0.0.1), OBSIDIAN_PORT (27124)
- **Requirement:** Obsidian must be open with vault active
- **Tools available:** list_files_in_vault, list_files_in_dir, get_file_contents, search, patch_content, append_content, delete_file

### Other Connected MCPs
Granola (meetings), Google Calendar, Gmail, Slack, Notion, Linear, QuickBooks, Apollo, Figma, Canva

---

## CLAUDE.md (Hot Cache)

Location: `~/.claude/CLAUDE.md`

This is loaded into every Claude session automatically. It contains:
- **Memory** — top 14 people, 10 terms/acronyms, 9 active projects, preferences
- **Rules** — tone, file access, document defaults
- **Second Brain** — vault location, key paths, operation pointers to SCHEMA.md

Keep it under ~100 lines. When people or projects change, update the tables. If something goes stale, remove it from CLAUDE.md (it's still in the wiki for deep queries).

---

## Git Backup

The vault is backed up to GitHub via the Obsidian Git plugin. Auto-commits every 15 minutes with push. Full version history and off-device backup.

- **Repo:** https://github.com/ModernStackMac/second-brain (private)
- **Auto commit-and-sync interval:** 15 minutes
- **Push on commit-and-sync:** enabled
- **Pull on commit-and-sync:** enabled
- **Pull on startup:** enabled
- **Commit message:** `vault backup: {{date}}`
- **Custom base path:** `Second Brain` (because vault root is `Documents/`, git repo is inside `Second Brain/`)

---

## Troubleshooting

### MCP not connecting
- Is Obsidian open with the vault active? The Local REST API only runs while the vault is open.
- Check the API key matches: Obsidian Settings -> Local REST API -> copy key -> compare with `~/.claude.json`
- Debug logs: `tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log`

### Scheduled task not processing new files
- Check if the file is already in `wiki/log.md` (it skips processed files)
- Check `project-mapping.md` — new projects need an entry for meeting routing
- View task history in Cowork sidebar

### Web Clipper saving to wrong folder
- Open Web Clipper settings in browser -> check "Folder" is set to `Second Brain/raw/articles`

### Wiki pages not showing in Obsidian
- iCloud sync can lag. Give it a minute, or open Finder and check the vault folder directly.
- If Claude wrote via MCP but Obsidian doesn't see it, try closing and reopening the vault.

---

## Key Files Reference

| File | What | Who Maintains |
|------|------|---------------|
| `SCHEMA.md` | Wiki governance — page types, formats, workflows | You + Claude |
| `SYSTEM-GUIDE.md` | This file — how the system works | You + Claude |
| `project-mapping.md` | Active projects, contacts, meeting routing | You |
| `wiki/index.md` | Master catalog of all wiki pages | Claude (auto) |
| `wiki/log.md` | Chronological record of all operations | Claude (auto) |
| `Action-Tracker.md` | Open action items from meetings | Claude (auto) |
| `Decision-Log.md` | Key decisions with context | Claude (auto) |
| `~/.claude/CLAUDE.md` | Hot cache — memory, rules, brain pointers | You + Claude |


---

## Updates (2026-04-18)

### New: `.claudeignore` at vault root

Excludes `.obsidian/`, `Excalidraw/`, `Clippings/`, `raw/archived-stories/`, binary attachments, and stray CSVs from Claude Code / Cowork scans. The compiled wiki layer is the intended search surface — Grep/Glob should spend their tokens there, not on raw archives. Add this to the Vault Location section when promoting.

### New: `session-kickoff` skill (On-Demand)

- **Location:** `~/.claude/skills/session-kickoff/` (user-global — available in both Claude Code and Cowork)
- **Triggers:** "start session on [project]", "kick off [X]", "context me up on [project]", "picking up [ticket ID]", "where did we leave off on [X]"
- **What it does:** Generates a tight context brief for starting or resuming work on a project or story. Reads `session-context/` handoffs first (highest signal), then `project-mapping.md`, `wiki/clients/{project}.md`, 2-3 most recent meeting notes, `Action-Tracker.md`, and `Decision-Log.md`. If a story ID is given, also pulls the story file. Outputs inline: state, recent activity, open actions, recent decisions, suggested next move.
- **When to use:** Starting a work session on a project or picking up a story. Collapses the 5-minute cold-start of digging through folders to rebuild context.
- **Also available as Claude Code slash command:** `/kickoff {project} [story-id]` for deterministic invocation. The skill auto-triggers on natural phrasing in both Cowork and Claude Code.

### New entries for Key Files Reference table

| File | What | Who Maintains |
|------|------|---------------|
| `.claudeignore` | Claude Code / Cowork ignore rules at vault root | You |
| `~/.claude/skills/session-kickoff/` | User-global skill — briefs project/story context at session start | You + Claude |
| `~/.claude/commands/kickoff.md` | Claude Code slash command wrapper for session-kickoff | You |


---

## Updates (2026-04-18b) — Calendar + Kanban + Tasks workflow

The Second Brain now incorporates Obsidian's Calendar, Kanban, and Tasks plugins end-to-end. The goal: one loop where meetings, stories, actions, and daily focus all reinforce each other instead of living in isolation.

### New pieces

| Artifact | Path | Purpose |
| --- | --- | --- |
| Daily note template | `Second Brain/raw/templates/daily-note.md` | Drives every daily note. Has live Tasks + Dataview queries for meetings today, due today, overdue, captures, reflection, and yesterday's rollover. |
| Kanban template | `Second Brain/raw/templates/project-board.md` | Kanban-plugin frontmatter + columns: Backlog / Up Next / In Progress / Review / Blocked / Done. |
| Today dashboard | `Second Brain/dashboards/Today.md` | Focused daily view. Meetings today, due today, overdue, captured today, completed today. Opens as startup or pin next to Home. |
| Action-Review dashboard | `Second Brain/dashboards/Action-Review.md` | Weekly triage view. Overdue, due this week, stale, no date, unassigned, by-project. Monday summary block auto-written. |
| Example board | `Second Brain/wiki/projects/cretelligent/board.md` | Seeded kanban. Story-sync writes the rest automatically. |

### New scheduled tasks

| Task | Schedule | What it does |
| --- | --- | --- |
| `daily-note-builder` | Weekdays 6am CT | Builds `Second Brain/raw/daily/YYYY-MM-DD.md` from the template. Pulls today's Calendar events and rolls forward yesterday's unfinished items. |
| `weekly-action-review` | Monday 8am CT | Scans Action-Tracker.md, writes an overdue/stale/no-date summary between the `WEEKLY-SUMMARY` markers in Action-Review.md. |

### Updated scheduled tasks

- **`story-sync`** now also writes per-project kanban boards at `Second Brain/wiki/projects/{slug}/board.md`. Status mapping: Backlog/Triage → Backlog · Todo/Ready → Up Next · In Progress → In Progress · Review/QA → Review · Blocked → Blocked · Done (last 14 days) → Done. Boards without the `kanban-plugin: basic` frontmatter are skipped (treated as hand-built).

### Action-Tracker format

Two coexisting formats — both valid, both queryable:

1. **Dataview inline fields** (existing, manual sections):
   ```
   - [ ] task description [Owner:: Mac] [Project:: CREtelligent] [Status:: Open] [Source:: manual] [Date:: 2026-04-20]
   ```

2. **Tasks-plugin emoji syntax** (optional, for items you want surfaced in Tasks queries like the dashboards):
   ```
   - [ ] Review architecture doc 📅 2026-04-22 🔼 #cretelligent
   ```
   
   - `📅 YYYY-MM-DD` — due date
   - `⏳ YYYY-MM-DD` — scheduled
   - `🔺` urgent / `🔼` high / `🔽` low / `⏬` lowest
   - `#project-slug` — project tag

Both formats render correctly. Use format 1 for items that need structured fields (Owner, Source); use format 2 when you want the item to show up in `tasks` queries on the Today dashboard.

### The daily loop

1. **6am weekday** — `daily-note-builder` writes today's daily note with calendar + rollover.
2. **Morning** — open Today dashboard (live view) or the daily note (persistent capture).
3. **All day** — captures land in the daily note under "Captures". Tasks get emoji syntax if they need a date.
4. **End of day** — fill the reflection block. Unfinished tasks roll to tomorrow automatically via Tasks queries.
5. **Monday 8am** — `weekly-action-review` rewrites the summary in Action-Review.md. Open it, triage stale/overdue items, close or reschedule.
6. **Continuous** — story-sync keeps Linear/Jira mirrored into Action-Tracker + per-project boards.

### Plugin requirements

Make sure these are enabled in Obsidian:
- **Calendar** (community plugin) — sidebar calendar, links dates to daily notes
- **Kanban** — renders `.md` files with `kanban-plugin: basic` frontmatter as boards
- **Tasks** — powers ` ```tasks ` query blocks and emoji metadata
- **Daily notes** (core) — set folder to `Second Brain/raw/daily/` and template to `Second Brain/raw/templates/daily-note.md`
- **Templater** (optional but recommended) — for richer `{{date:...}}` substitution; otherwise stick with core Daily Notes

### Key files reference additions

| File | Why it matters |
| --- | --- |
| `Second Brain/dashboards/Today.md` | Daily startup view |
| `Second Brain/dashboards/Action-Review.md` | Weekly triage view (Monday summary auto-written) |
| `Second Brain/raw/templates/daily-note.md` | Daily note template |
| `Second Brain/raw/templates/project-board.md` | Kanban template for new projects |
| `Second Brain/wiki/projects/{slug}/board.md` | Per-project kanban (auto-written by story-sync) |
| `Second Brain/raw/daily/YYYY-MM-DD.md` | Daily notes (auto-built 6am weekdays) |


---

## Updates (2026-04-18c) — Templater, Tag Wrangler, Make.md

Three more plugins are now wired into the workflow. Each fills a specific gap without duplicating what Dataview/Tasks/Kanban already do.

### Templater

Powers dynamic templates with real JavaScript. Used by:

- **`Second Brain/raw/templates/daily-note.md`** — rewritten with `<% tp.date.now("YYYY-MM-DD") %>` instead of core `{{date:YYYY-MM-DD}}`. More reliable, supports yesterday lookups, frontmatter interpolation.
- **`Second Brain/raw/templates/quick-capture.md`** (NEW) — interactive capture. Prompts for title, tags, project (suggester), then renames and routes the file to `raw/captures/YYYY-MM-DD-slug.md`.

Settings to configure once:
- Templater → Template folder: `Second Brain/raw/templates/`
- Templater → Trigger Templater on new file creation: **on** (for Daily Notes)
- Templater → Folder templates: map `Second Brain/raw/daily/` → `daily-note.md`
- Templater → Folder templates: map `Second Brain/raw/captures/` → `quick-capture.md`

Hotkeys worth binding:
- "Templater: Open insert template modal" → `Cmd+Shift+T`
- "Templater: Create new note from template" → `Cmd+Opt+N`

### Tag Wrangler

Enables safe tag refactoring across the vault. New reference: **`Second Brain/TAGS.md`** — canonical tag taxonomy with rules, hierarchy, and deprecated mappings.

Standard taxonomy:
- `#project/{slug}` — one per active engagement
- `#status/{todo|in-progress|review|blocked|done}` — mutually exclusive
- `#type/{daily|meeting|decision|capture|wiki|dashboard|kanban|story|report}` — note type
- `#context/{focus|meeting|commute|quick|errand}` — work context
- `#priority/{urgent|high|low}` — reserve for page-level (use Tasks emoji for tasks)
- `#area/{client-work|business-ops|learning|personal|admin}` — life/work domain

Refactor ops: right-click any tag in the sidebar → Rename. Tag Wrangler rewrites every occurrence in the vault in one pass.

### Make.md

Overlays property-driven database views on curated wiki folders. New reference: **`Second Brain/wiki/MAKE-SPACES.md`** — where to use it, where not to, setup checklist.

Recommended spaces:
1. **Projects Space** (`wiki/projects/`) — table view with status, owner, client, last_meeting, open_actions. Card view grouped by status.
2. **Clients Space** (`wiki/clients/`) — table view with tier, primary_contact, last_touched, engagement_status. Board view grouped by tier.
3. Flow embeds: add `![[board]]` to each `wiki/projects/{slug}/journal.md` for inline kanban.

Conflict avoidance: Make.md owns user-editable frontmatter keys (status, owner, tier). Scheduled tasks own computed keys (updated, last_meeting, open_actions). Do not let both write the same field.

### Updated file reference

| File | Role |
| --- | --- |
| `Second Brain/TAGS.md` | Canonical tag taxonomy — single source of truth for Tag Wrangler refactors |
| `Second Brain/wiki/MAKE-SPACES.md` | Make.md space configuration reference |
| `Second Brain/raw/templates/quick-capture.md` | Interactive Templater capture template |
| `Second Brain/raw/templates/daily-note.md` | Rewritten for Templater (dynamic date functions) |


---

## Updates (2026-04-18d) — Corrections

### Clients merged into Projects

`wiki/clients/` does not exist as a separate folder — it was merged into `wiki/projects/`. Any earlier references to a "Clients Space" or `wiki/clients/` in this guide or `PEER-SETUP-GUIDE.md` are stale. Projects is the single hub.

### Make.md UI varies by version

The "Convert to Space" action referenced earlier may not appear depending on your Make.md version. The feature exists under different names across releases: "Convert to Space", "Add Context", "Set as Database". See the updated `wiki/MAKE-SPACES.md` for version-agnostic setup paths.

Make.md is optional. The Dataview query below on `Home.md` gives the same sortable-project-table view without Make.md:

```dataview
TABLE status, owner, priority, last_meeting, open_actions
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT last_meeting DESC
```

If the Make.md UI path isn't obvious, skip it.

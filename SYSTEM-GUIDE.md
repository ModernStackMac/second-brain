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

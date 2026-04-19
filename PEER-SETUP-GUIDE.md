# Peer Setup Guide

Stand up your own Second Brain that mirrors Mac's. Follow in order — each phase builds on the previous.

**Mental model:** `Sources → Meeting Notes/ + raw/ (intake) → wiki/ (Claude-compiled) → dashboards/ (daily use)`. Claude reads sources and compiles `wiki/` + `dashboards/`. Meeting Notes is additive-only. `raw/` is immutable. Everything else is plumbing.

---

## Phase 1 — Obsidian + iCloud

1. Install Obsidian (desktop). Enable iCloud sync.
2. Create your vault at: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/` (name it whatever — "Second Brain" works).
3. Enable these community plugins (Settings → Community plugins → Browse):
   - **Local REST API** — required for Claude/MCP access. Generate a token. Default port `27124`. Install the HTTPS cert so MCPs don't warn.
   - **Templater** — templating for wiki pages and quick capture.
   - **Dataview** — powers the Home dashboard.
   - **Tasks** — `- [ ]` tracking with due dates and priorities.
   - **Tag Wrangler** — rename/merge tags vault-wide.
   - **Obsidian Git** — auto-backup to private GitHub.
   - **Web Clipper** — browser extension for article capture.
   - **Homepage** — pin Home.md as startup page.
   - **Calendar** — calendar nav in the sidebar.
   - **Excalidraw** — optional, for whiteboarding.
   - **Make.md** — optional UX layer for property-driven views.
4. Install the Local REST API HTTPS certificate (Settings → Local REST API → instructions there).

---

## Phase 2 — Vault Structure

Create this layout at the vault root. Everything else slots in.

```
{Vault}/
├── Clippings/                 # Web Clipper image/asset dumping ground
├── Excalidraw/                # Drawings (excluded from ingest)
├── Meeting Notes/             # Fathom notes — sole live meeting destination
│   ├── {Company}/{Project}/   # One folder per active project
│   └── _Unmatched/            # Router fallback when mapping is missing
├── Second Brain/
│   ├── README.md              # Quick start
│   ├── SYSTEM-GUIDE.md        # Full system reference
│   ├── SCHEMA.md              # Wiki governance — page types, workflows
│   ├── PEER-SETUP-GUIDE.md    # This file
│   ├── TAGS.md                # Canonical tag taxonomy
│   ├── Decision-Log.md        # Auto-written decisions
│   ├── _System/               # identity.yaml, changelog.md, scripts/, logs
│   │   └── llm-kb-architecture.md # Architecture diagram
│   ├── dashboards/
│   │   └── Home.md            # Dataview-powered startup page
│   ├── raw/                   # Immutable source material — Claude never edits
│   │   ├── articles/          # Web Clipper lands here
│   │   ├── projects/{slug}/   # SOWs, configs, ERDs per project
│   │   ├── transcripts/       # Non-Fathom transcripts (interviews, legacy)
│   │   └── templates/         # quick-capture.md only
│   └── wiki/                  # Claude-compiled canonical knowledge
│       ├── index.md           # Master catalog
│       ├── log.md             # Processing log
│       ├── projects/          # One subfolder per engagement
│       ├── concepts/          # Domain knowledge
│       ├── entities/          # People, orgs, vendors
│       ├── patterns/          # Reusable solution patterns
│       ├── tools/             # Platforms, integrations
│       ├── topics/            # Accumulator pages
│       ├── articles/          # Article breakdowns
│       ├── reports/           # Saved query outputs
│       └── f2-internal/       # Confluence mirror (optional, for F2 work)
├── commitments.md             # Rolling open action items (root-level)
├── project-mapping.md         # Single source of truth — projects, contacts, routing
└── .claudeignore              # Excludes noise from Claude Code / Cowork scans
```

**Important notes:**
- `Meeting Notes/` is your sole live meeting destination. Fathom writes directly there.
- `raw/meeting-raw/` does NOT exist for new setups. That folder is a frozen archive from Mac's Granola migration — don't create it.
- `raw/templates/` contains only `quick-capture.md`. Keep it minimal.
- Projects replace the old "clients" concept. A client relationship = one or more project entries in `project-mapping.md`.

---

## Phase 3 — MCP + Claude Integration

1. Install **Cowork** (Claude desktop) and sign in.
2. Configure the **mcp-obsidian** MCP. Config file locations:
   - Claude Code: `~/.claude.json`
   - Cowork: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Example block:
     ```json
     "mcp-obsidian": {
       "command": "/Users/{you}/.local/bin/uvx",
       "args": ["mcp-obsidian"],
       "env": {
         "OBSIDIAN_API_KEY": "<your-token>",
         "OBSIDIAN_HOST": "127.0.0.1",
         "OBSIDIAN_PORT": "27124"
       }
     }
     ```
3. Connect the **scheduled-tasks** MCP in Cowork (powers all automations in Phase 5).
4. Connect any source MCPs you'll actually use: Fathom, Gmail, Google Calendar, Slack, Linear, Jira, QuickBooks, Notion.
5. Drop a `CLAUDE.md` at `~/.claude/CLAUDE.md` with:
   - Tone/style rules
   - "Only access files I give you" guardrail
   - Solution doc structure: Exec Summary → Current State → Proposed Solution → Tech Arch → Implementation → Risks → Timeline
   - Default output formats (`.docx`, `.xlsx`)
   - Pointer to `project-mapping.md` for project routing
6. Verify: in Cowork, ask Claude to `list_files_in_vault`. You should see your full tree.

---

## Phase 4 — project-mapping.md

Do this before scheduled tasks. This file is the brain of the routing system — every scheduled task that moves files reads it.

**Required fields per project:**
- `Canonical Slug` — lowercase-hyphenated. Must match `wiki/projects/{slug}/` folder name.
- `Company`, `Client`, `Industry`, `Project Type`
- `Key Contacts` — names and emails
- `Meeting Folder` — `Meeting Notes/{Company}/{Project}/`
- `Jira Workspace` + `Jira Project Key` — or `Linear Project` for Linear-tracked work
- `Keywords` — lowercase terms that appear in meeting titles or attendee signatures

**Rules enforced by the lint:**
1. One canonical slug per project. Folder names MUST match.
2. `(workspace, jira_key)` must be unique across active projects.
3. Never route into a slug that doesn't appear in the file.

Copy Mac's `project-mapping.md` as a starting template and replace with your own active projects.

---

## Phase 5 — Scheduled Automations

All times Central. Adjust for your timezone. Set up via Cowork's scheduled-tasks UI.

### Meeting pipeline

| Task | Schedule | What it does |
|------|----------|--------------|
| `process-fathom-transcripts` | Weekdays every 2 hrs, 8am–6pm | Ingests new Fathom recordings into `Meeting Notes/{Company}/{Project}/` via `project-mapping.md`. Single destination — no duplicate anywhere. Unroutable → `Meeting Notes/_Unmatched/` + `_System/meeting-routing-unrouted.md`. Logs every decision to `_System/selector-log.md`. |

### Knowledge pipeline

| Task | Schedule | What it does |
|------|----------|--------------|
| `second-brain-ingest` | Weekdays every 4 hrs at `:30` | Scans `Meeting Notes/`, `raw/articles/`, `raw/projects/`, `raw/transcripts/` for files not yet in `wiki/log.md`. Extracts entities → wiki pages, decisions → `Decision-Log.md`, commitments → `commitments.md` (4-gate rule). |
| `second-brain-lint` | Sundays 1am | Full lint — orphans, broken links, tag canon, slug integrity. |
| `second-brain-lint-wed` | Wednesdays 1am | Optional mid-week lint. Skip if you don't read the report. |
| `confluence-ingest` | Weekdays 6:30am | Only if you need a Confluence mirror. Mac uses this for F2 Strategy. |
| `story-sync` | Weekdays every 2 hrs at `:15`, 7am–7pm | Pulls active Linear + Jira stories assigned to you. Routes via `project-mapping.md`. |

### Email / reports

| Task | Schedule | What it does |
|------|----------|--------------|
| `daily-morning-briefing` | Daily 6am | Curated news email — tune the topics to your interests. |
| `daily-email-summary` | Weekdays 7am | Gmail digest of last 3 days. |
| `weekly-financial-digest` | Fridays 7am | QuickBooks P&L → email. Only if you have QuickBooks connected. |

### Synthesis

| Task | Schedule | What it does |
|------|----------|--------------|
| `weekly-synthesis` | Mondays 5:30am | Weekly synthesis across wiki, commitments, and meeting notes. |

**Cron hygiene:** space tasks at least 15 min apart per hour to prevent collision.

---

## Phase 6 — On-Demand Skills

Install Mac's skills at `~/.claude/skills/`. Trigger via natural language in Cowork or Claude Code.

| Skill | When to invoke |
|-------|----------------|
| `kb-ingest-now` | "ingest this", "process this article", "add to the brain" |
| `kb-lint-now` | "lint the wiki", "health check", "clean up the brain" |
| `kb-report` | "what do I know about X", "brain report", "using my wiki" |
| `session-kickoff` | "start session on X", "where did we leave off", "pick up [ticket]" |
| `consolidate-memory` | "consolidate memory", "clean up CLAUDE.md" |

`session-kickoff` is also wired as `/kickoff` in Claude Code.

---

## Phase 7 — Capture Workflow

### Meetings
Join with Fathom running. `process-fathom-transcripts` pulls within 2 hours and writes **one file** directly to `Meeting Notes/{Company}/{Project}/{date} - {title}.md`. No hand-copy, no duplicates. If a meeting lands in `_Unmatched/`, update `project-mapping.md` keywords/attendees and move the file manually to the correct folder.

### Articles
Hit the Web Clipper extension. Saves to `raw/articles/`. `second-brain-ingest` picks up on the next 4-hour tick, or say "ingest this" for immediate processing.

### Commitments
Firm commitments get extracted into `commitments.md` under the **4-gate rule**:
1. **Owner is you** — not assigned to someone else
2. **Firm commitment verb** — "will", "agreed to", "committed to" (not "might" or "should")
3. **Concrete next step** — specific and actionable
4. **Deduped** — doesn't already exist in commitments.md

Nothing lands in `commitments.md` without hitting all 4 gates.

**Lifecycle:** ingest appends to `## Open` → you check the box in Obsidian → Sunday lint moves checked items to `## Done (last 14 days)` → items older than 14 days in Done are archived.

### Project documents
Drop SOWs, API schemas, configs, ERDs into `raw/projects/{slug}/`. The original is the source of truth; wiki pages get generated from it by `second-brain-ingest`.

---

## Phase 8 — Git Backup

1. Create a **private** GitHub repo (e.g., `yourname-second-brain`).
2. Obsidian Git settings:
   - Commit message: `vault backup: {{date}}`
   - Interval: 15 min, push after commit
   - Pull on startup: enabled
   - Base path: `Second Brain`
3. First manual commit + push to prime the repo.

This doubles as version history — recover any prior version via `git log -- "Second Brain/wiki/..."`.

---

## Phase 9 — Dashboard

Home.md is the only dashboard. Set it as your startup page via the Homepage plugin.

**Setup:** Settings → Editor → Default view = Reading view. Homepage plugin pointed at `dashboards/Home`.

Home.md uses Dataview queries to surface:
- Recent clips and articles
- Recent meetings across projects
- Recent wiki updates
- Open commitments
- Unmatched meetings needing routing

Build this out over time as you learn what you actually check each morning.

---

## Phase 10 — Common First-Week Issues

| Problem | Fix |
|---------|-----|
| REST API won't connect | Obsidian open? Port 27124? HTTPS cert installed? Check `Settings → Local REST API → Test`. |
| Scheduled tasks not firing | Cowork running and signed in? Tasks only fire when Cowork is live. Check task history in the sidebar. |
| Git sync conflict | Pull before commit. If stuck, resolve in GitHub Desktop or CLI — not inside Obsidian. |
| Meeting routed to _Unmatched | Add the project, attendees, or keywords to `project-mapping.md`. Move the file manually to the correct folder. |
| Wiki pages not showing in Obsidian | iCloud lag. Give it a minute. If still missing, close/reopen the vault. |

---

## Reference

- `SYSTEM-GUIDE.md` — full system architecture, MCP connections, troubleshooting
- `SCHEMA.md` — folder conventions, page types, ingest/query/create/lint workflows
- `_System/changelog.md` — consolidation history and recent structural changes
- `_System/llm-kb-architecture.md` — canonical architecture diagram

If you're ever unsure where a capture goes or what reads what, re-read the diagram first. Short version: **Sources → Meeting Notes/ + raw/ → wiki/ → dashboards/**. Claude writes the middle layers; you browse them.

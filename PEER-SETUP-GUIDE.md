# Second Brain — Peer Setup Guide

> A practical guide for building your own AI-augmented knowledge base with Obsidian + Claude. Share this with colleagues who want to stop losing context and start compounding what they know.

**Last updated:** 2026-04-18

---

## What You're Building

A markdown-based knowledge system where:

- **You capture** — articles, meeting transcripts, project docs, decisions — in one place
- **Claude compiles** — raw content gets routed, parsed, cross-linked, and rolled up into wiki pages automatically
- **You query** — ask natural-language questions across everything you've captured, get answers with citations

Three layers make it work: Obsidian (frontend you browse), the vault (plain markdown in iCloud), and Claude (backend that reads, writes, and maintains). Connections happen through MCP servers — the glue between Claude and your tools.

The payoff: no more "where did I put that?", "what did we decide?", or "what's the state of X?". The system answers. And it compounds — every meeting, every clipped article, every decision makes the next question easier to answer.

---

## Prerequisites

- **Mac or PC** running macOS 12+ or Windows 10+ (macOS recommended — iCloud sync is cleaner)
- **Obsidian** (free) — the frontend
- **Claude Pro or Max subscription** — powers Cowork and Claude Code
- **GitHub account** — for vault backup (free private repo is fine)
- **iCloud** or **Dropbox** — for cross-device sync of the vault (optional but recommended)
- Accounts for the tools you'll connect: Gmail, Google Calendar, Slack, Granola or Fathom (meetings), Linear/Jira (tickets), whatever else you live in

Budget: ~$25–$60/month depending on Claude tier. That's it. No vendor lock-in, no proprietary database — everything lives as plain markdown you own.

---

## Phase 1 — Obsidian Setup

### 1.1 Install and create a vault

1. Download Obsidian from `obsidian.md`
2. Create a vault in an iCloud-synced folder: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/`
3. Name it whatever (most people use `Second Brain` or similar)

### 1.2 Install these community plugins

Settings → Community plugins → Turn on, then Browse:

| Plugin | Why |
|--------|-----|
| **Local REST API** | Exposes your vault to Claude via HTTPS on localhost. This is the critical one — without it, Claude can't read or write your vault. |
| **Dataview** | Query your notes like a database. Powers live dashboards. |
| **Tasks** | Track `- [ ]` items with due dates and priorities across the vault. |
| **Templater** | Reusable templates with variables (meeting notes, project kickoffs). |
| **Obsidian Git** | Auto-backup vault to GitHub every 15 minutes. |
| **Excalidraw** | Whiteboarding and architecture diagrams inside notes. |
| **Kanban** | Visual boards for project work. |
| **Calendar** | Daily-note navigation. |
| **Homepage** | Pin a dashboard as your default startup page. |

### 1.3 Configure Local REST API (important)

1. Settings → Local REST API → Enable
2. Copy the **API key** — you'll paste this into Claude's MCP config next
3. Keep HTTPS enabled on port `27124` (default)
4. **Note:** the API only runs while Obsidian is open. Keep Obsidian running in the background.

### 1.4 Install the Web Clipper

Chrome/Edge/Safari extension. Configure it to save to `Second Brain/raw/articles/` in your vault. That's your one-click capture for anything interesting you read.

---

## Phase 2 — Vault Structure

Create this folder layout in your vault. It's the backbone everything else depends on.

```
Second Brain/
  SCHEMA.md                # Wiki governance — page types, formats, conventions
  SYSTEM-GUIDE.md          # How your system works (copy from this guide as a start)
  README.md                # Vault overview
  raw/                     # Immutable source material
    articles/              # Web Clipper saves here
    projects/              # SOWs, configs, project docs
    discovery/             # Pre-project notes, requirements
    templates/             # Templater templates
  wiki/                    # Claude-compiled knowledge
    index.md               # Master catalog
    log.md                 # Operation log
    clients/               # Per-client pages
    concepts/              # Domain knowledge
    patterns/              # Reusable solutions
    tools/                 # Platforms and integrations you use
    entities/              # People, orgs, vendors
    articles/              # Article breakdowns
    meetings/              # Meeting summaries with links
    reports/               # Saved query outputs
  Meeting Notes/           # Auto-routed transcripts
    _Unmatched/            # Transcripts that didn't match a project
  dashboards/              # Dataview-powered live views
  session-context/         # Cross-session handoff notes for Claude Code
  project-mapping.md       # Single source of truth for projects and contacts
  Action-Tracker.md        # Open action items
  Decision-Log.md          # Key decisions with context
  .claudeignore            # Excludes noise from Claude Code scans
```

### Key files to create by hand

**`project-mapping.md`** — Your list of active projects with matching keywords. Example row:

```markdown
## Harvey
- **Folder:** Meeting Notes/Harvey/
- **Keywords:** harvey, harvey legal, harvey team
- **Contacts:** jsmith@harvey.ai, mjones@harvey.ai
```

Claude uses this to route meeting transcripts into the right folders.

**`.claudeignore`** — Keeps Claude Code scans fast. Start with:

```
.obsidian/
.git/
.trash/
.DS_Store
Excalidraw/
**/*.png
**/*.jpg
**/*.pdf
raw/archived-stories/
Clippings/
```

---

## Phase 3 — Claude Integration

### 3.1 Choose your Claude surface

- **Cowork** (desktop app) — conversational, runs alongside your work. Best for non-technical use and scheduled automations.
- **Claude Code** (terminal CLI) — for engineers who live in terminals. Better file/code tooling.
- **Both** — they share config and skills via `~/.claude/`. Most users end up using both.

Install Cowork from `claude.ai/download` and/or install Claude Code via `npm install -g @anthropic/claude-code`.

### 3.2 Connect the Obsidian MCP

This is the bridge between Claude and your vault. In Cowork: Settings → MCP Servers → Add. In Claude Code: edit `~/.claude.json`.

Config to add (adjust the uvx path to wherever yours lives):

```json
{
  "mcpServers": {
    "mcp-obsidian": {
      "command": "/Users/YOU/.local/bin/uvx",
      "args": ["mcp-obsidian"],
      "env": {
        "OBSIDIAN_API_KEY": "YOUR_API_KEY_FROM_PHASE_1.3",
        "OBSIDIAN_HOST": "127.0.0.1",
        "OBSIDIAN_PORT": "27124"
      }
    }
  }
}
```

Install `uv` first if you don't have it: `curl -LsSf https://astral.sh/uv/install.sh | sh`

Restart Claude. Test with: "list files in my vault root". If it works, you're good.

### 3.3 Other MCPs worth connecting

Add these as your workflow needs them — not all at once. Each adds tools Claude can use.

| MCP | What It Gives You | When You Need It |
|-----|-------------------|------------------|
| **Granola** or **Fathom** | Meeting transcripts and summaries | Day one — meeting capture is the highest-ROI automation |
| **Gmail** | Read/summarize/search inbox, create drafts | For email digests and reply drafting |
| **Google Calendar** | List events, create/update meetings | Scheduling via natural language |
| **Slack** | Read/search channels, send messages | Team communication workflows |
| **Linear** or **Jira** | Pull stories, sync tickets into wiki | If you run engineering work |
| **QuickBooks** | P&L, cash flow reports | For consultants or business owners |
| **Apollo** | Lead enrichment, prospect search | Sales motion |
| **Notion** | Read/write Notion pages | If you still live in Notion for some content |

Find more in the MCP registry from inside Claude: "search MCP registry for [tool]".

### 3.4 Set up your CLAUDE.md hot cache

Location: `~/.claude/CLAUDE.md`. This file loads into every Claude session automatically. Keep it under ~150 lines. It should contain:

- **Tone and style rules** — how you want Claude to talk
- **Key memory** — active projects, frequent contacts, terms/acronyms
- **Second Brain pointers** — vault location, critical paths
- **Session kickoff trigger** — "when I say 'start session on X', invoke the session-kickoff skill"

Starter template you can adapt:

```markdown
# Tone & Style
Write in a professional-casual tone. Direct, no fluff. No emojis.

# File & Data Access
Only access files and folders I explicitly give you. Don't browse connected accounts unless I ask.

# Second Brain
Vault root: ~/Library/Mobile Documents/iCloud~md~obsidian/Documents/
Key files: project-mapping.md, Action-Tracker.md, Decision-Log.md, SYSTEM-GUIDE.md
See SYSTEM-GUIDE.md in the vault for workflow details.

# Active Projects
| Project | Status | Key Contact |
|---------|--------|-------------|
| ClientA | Active | jane@clienta.com |
| ClientB | Discovery | bob@clientb.com |

# Session Kickoff
When I say "start session on [project]", "kickoff [X]", "where did we leave off on [Y]", or similar, invoke the `session-kickoff` skill to brief me before we work.
```

---

## Phase 4 — Automations (Scheduled Tasks)

This is where Cowork earns its keep. Scheduled tasks run in the background on cron — you don't have to remember to do anything. Create them in Cowork: "create a scheduled task that..."

### Recommended starter set

| Task | Schedule | What It Does |
|------|----------|-------------|
| **Meeting Transcript Processing** | Every 2 hrs weekdays (8am-6pm CT) | Pulls new transcripts from Granola/Fathom, writes them to `raw/meeting-raw/` with frontmatter |
| **Meeting Selector** (if using both Granola + Fathom) | Right after transcript processors | Scores and picks the higher-quality version, routes to `Meeting Notes/{Company}/{Project}/` |
| **Second Brain Ingest** | Every 4 hrs weekdays (sequenced after meeting processors) | Scans raw/ and Meeting Notes/ for unprocessed files, updates wiki pages, appends to Action-Tracker and Decision-Log, maintains cross-references |
| **Story Sync** | Daily or every 4 hrs | Pulls your assigned tickets from Linear/Jira into Action-Tracker.md and per-project story pages |
| **Second Brain Lint** | Weekly Sunday 1am, plus optional mid-week | Checks broken links, orphan pages, missing index entries. Auto-fixes safe issues. |
| **Daily Morning Briefing** | Daily 6am | Curated news HTML email — tech, industry, whatever you care about |
| **Daily Email Digest** | Weekdays 7am | Summarizes last 3 days of Gmail — orders, tracking, anything important |
| **Weekly Financial Digest** | Fridays 7am | QuickBooks P&L and cash flow HTML email (consultants/business owners) |

Create these in Cowork one at a time. Sample prompt:

> "Create a scheduled task that runs every 4 hours on weekdays at :30 past the hour. It should scan `Second Brain/raw/` and `Second Brain/Meeting Notes/` for files not already in `wiki/log.md`, extract entities and decisions, create or update wiki pages, and log what it did. Skip files already in log.md."

Cowork will write the task definition. You can edit, enable, disable, or change the schedule anytime.

---

## Phase 5 — On-Demand Skills

Skills trigger from natural language. They live in `~/.claude/skills/` and work in both Cowork and Claude Code.

### Must-have starter skills

| Skill | Triggers On | What It Does |
|-------|-------------|-------------|
| **kb-ingest-now** | "ingest this", "add this to the brain", "process this article" | Same as the scheduled ingest but immediate and interactive — discusses the content with you before filing |
| **kb-report** | "what do I know about X", "using my wiki", "brain report" | Queries wiki index, reads relevant pages, synthesizes an answer with citations, saves as a reusable report |
| **kb-lint-now** | "lint the wiki", "health check", "clean up the brain" | Same checks as the Sunday lint, on-demand, with preview before destructive changes |
| **session-kickoff** | "start session on X", "kickoff Y", "where did we leave off on Z", "picking up [ticket]" | Generates a focused context brief pulling session-context/ handoffs, project-mapping, wiki client page, recent meetings, open actions, decisions |

Ask Claude to create each: "create a skill called `kb-ingest-now` that does X. Use the skill-creator workflow." Cowork walks you through the rest.

### Useful slash commands (Claude Code only)

Drop markdown files in `~/.claude/commands/` for explicit-invocation shortcuts:

- `/kickoff {project} [story-id]` — deterministic session-kickoff
- `/ingest {path-or-url}` — immediate ingest
- `/report {topic}` — generate a wiki-backed report

---

## Phase 6 — Git Backup

Don't skip this. iCloud isn't a backup.

1. Create a private GitHub repo (e.g., `yourname/second-brain`)
2. Obsidian Git plugin → settings:
   - Auto commit-and-sync interval: **15 minutes**
   - Push on commit-and-sync: **enabled**
   - Pull on commit-and-sync: **enabled**
   - Pull on startup: **enabled**
   - Commit message: `vault backup: {{date}}`
3. Point base path at your vault folder if it's nested
4. First push may need CLI intervention — `cd` into the vault folder, `git init`, remote add, initial commit

Now every 15 minutes your vault is versioned and pushed to GitHub. Full history, off-device backup, rollback if you delete something by accident.

---

## Phase 7 — Capture Workflows

How content actually gets into the system. These become muscle memory fast.

### Articles (Web Clipper)

1. See something worth keeping
2. Click the Obsidian Web Clipper extension
3. Clean markdown lands in `raw/articles/`
4. Within 4 hours the scheduled ingest files it into wiki pages — or say "ingest this" for immediate processing

### Meetings (Granola / Fathom)

1. Have your meetings with Granola or Fathom running
2. Transcripts appear automatically
3. The Meeting Transcript Processing task pulls them every 2 hours and routes by project
4. Ingest extracts decisions → `Decision-Log.md`, actions → `Action-Tracker.md`, entities → wiki pages, summary → `wiki/meetings/`
5. Unmatched meetings go to `Meeting Notes/_Unmatched/` — review weekly and update `project-mapping.md`

### Manual captures

Paste a URL or text into Claude and say "ingest this" or "add this to the brain". Claude saves the raw, discusses with you, and files into the wiki.

### Project documents

Drop SOWs, architecture docs, API schemas, configs into `raw/projects/{project}/`. They get ingested into wiki pages automatically. Original stays as source of truth.

### Discovery notes

Pre-project requirements and questionnaires go in `raw/discovery/`. Useful later when you're comparing "what we promised" against "what we built".

---

## What Cowork Does For You

New users often underestimate how much of this runs without prompting. Here's the honest list:

- **All scheduled tasks run automatically** in the background while you work. You don't open Cowork to trigger them.
- **Meeting transcripts route themselves** into the right project folders, with frontmatter.
- **Wiki pages update themselves** after every meeting, every clipped article, every project doc you drop in raw/.
- **Action items and decisions appear** in Action-Tracker.md and Decision-Log.md without manual tracking.
- **Daily email briefings** land in your inbox before you check email.
- **Cross-session memory** persists via `session-context/` — long work streams don't lose context when you close Claude.
- **Skills trigger on natural language** — you don't memorize commands, you just talk.

Where you still do the work: capturing the raw material (clicking Web Clipper, having meetings with a recorder running, dropping project docs in folders), reviewing unmatched content weekly, maintaining `project-mapping.md` as projects come and go.

---

## 30-Day Rollout Plan

Don't try to set up everything at once. Staged rollout works better.

**Week 1 — Foundation**
- Install Obsidian, create vault, set up folder structure
- Enable Local REST API and connect the Obsidian MCP to Claude
- Install Web Clipper, start capturing articles
- Set up Obsidian Git backup

**Week 2 — Meetings**
- Connect Granola or Fathom MCP
- Create the Meeting Transcript Processing scheduled task
- Create `project-mapping.md` with your current projects
- Create the Second Brain Ingest scheduled task
- Start having meetings — watch the system process them

**Week 3 — Skills**
- Build the four core skills: `kb-ingest-now`, `kb-report`, `kb-lint-now`, `session-kickoff`
- Write your `CLAUDE.md` hot cache
- Run a lint to see what the system flags
- Start using "brain reports" to query across your accumulated content

**Week 4 — Expand**
- Connect Gmail, Calendar, and whatever tool-specific MCPs you need
- Add daily digest and morning briefing scheduled tasks
- Set up the weekly Sunday lint
- Review `Meeting Notes/_Unmatched/` and tune `project-mapping.md`

By day 30 you're running the full system.

---

## Pitfalls and Troubleshooting

**Obsidian isn't open, so MCP fails.** The Local REST API only runs while Obsidian is open. Add Obsidian to your login items so it starts on boot.

**Scheduled task ran but nothing happened.** Check `wiki/log.md` — it skips already-processed files. Also check `project-mapping.md` matches the meeting keywords/attendees.

**Meetings going to `_Unmatched/`.** Update `project-mapping.md` with better keywords and re-run the meeting processor.

**Wiki pages feel bloated.** Run `kb-lint-now`. If that doesn't help, ask Claude to consolidate specific concept pages.

**iCloud sync lag.** Claude wrote a file but Obsidian doesn't show it yet. Give it a minute, or open Finder and confirm the file exists on disk.

**MCP tools work in Cowork but not Claude Code (or vice versa).** Check both config locations — `~/.claude.json` (Claude Code) and `~/Library/Application Support/Claude/claude_desktop_config.json` (Cowork). They don't share.

**Costs spiking.** The scheduled tasks use API tokens. Watch your Claude billing the first month. Disable any tasks that aren't pulling their weight.

---

## Maintenance Cadence

Minimal but non-zero.

- **Daily:** Glance at `Action-Tracker.md` before starting work. Nothing else required.
- **Weekly:** Review `Meeting Notes/_Unmatched/`. Update `project-mapping.md` if new projects started. Let the Sunday lint run.
- **Monthly:** Prune stale entries from `CLAUDE.md`. Scan `wiki/reports/` for outdated saved queries.
- **Quarterly:** Review the skill set — any new workflows that should become skills? Any stale skills to retire?

---

## Next Steps

1. Start Phase 1 today. Obsidian install and vault creation takes 20 minutes.
2. Connect the Obsidian MCP before you capture anything. No point capturing if Claude can't read it.
3. Follow the 30-day rollout plan. Resist the urge to build everything in one weekend — the system matures with your usage pattern.
4. Steal shamelessly from this guide's author's `SYSTEM-GUIDE.md`. Everything in it is meant to be forked.

Questions or stuck? Ping Mac.


---

## Addendum (2026-04-18) — Templater, Tag Wrangler, Make.md

Three plugins that sharpen the setup without complicating it. Add them after you've got the base system running (end of Week 2 or start of Week 3).

### Updated community plugin list

Add these to the Phase 1 install list:

| Plugin | Why |
|--------|-----|
| **Tag Wrangler** | Rename, merge, and prune tags safely across the entire vault. Makes tag taxonomy maintainable. |
| **Make.md** (Makemd) | Property-driven database views over curated wiki folders (Projects hub, Clients hub). Overlays markdown with sortable/filterable tables without touching the underlying files. |

(Templater was already in the base list — this is the configuration.)

### Templater configuration

1. Settings → Templater → Template folder: `Second Brain/raw/templates/`
2. Templater → Trigger Templater on new file creation: **on**
3. Templater → Folder templates:
   - `Second Brain/raw/daily/` → `daily-note.md`
   - `Second Brain/raw/captures/` → `quick-capture.md`
4. Hotkeys:
   - "Templater: Open insert template modal" → `Cmd+Shift+T`
   - "Templater: Create new note from template" → `Cmd+Opt+N`

Use Templater syntax in templates (not core Daily Notes `{{date:...}}`):

```
<% tp.date.now("YYYY-MM-DD") %>
<% tp.date.now("dddd, MMMM D, YYYY") %>
<% tp.date.now("YYYY-MM-DD", -1) %>   // yesterday
<% await tp.system.prompt("Title?") %>
<% await tp.system.suggester(labels, values, false, "Pick one") %>
```

### Tag Wrangler + taxonomy

Tag Wrangler works out of the box, but only pays off if you maintain a taxonomy. Create `Second Brain/TAGS.md` with rules like:

- Lowercase, hyphenated
- Hierarchy with `/` (`#project/acme`, `#status/blocked`)
- No more than 3 levels deep
- Prefer tags for transient state, frontmatter for structured metadata

Recommended top-level tags:

| Namespace | Values |
|---|---|
| `#project/` | One per active engagement (match `project-mapping.md`) |
| `#status/` | `todo`, `in-progress`, `review`, `blocked`, `done` (mutually exclusive) |
| `#type/` | `daily`, `meeting`, `decision`, `capture`, `wiki`, `dashboard`, `kanban`, `story`, `report` |
| `#context/` | `focus`, `meeting`, `commute`, `quick`, `errand` |
| `#priority/` | `urgent`, `high`, `low` (page-level only; use Tasks emoji for task priority) |
| `#area/` | `client-work`, `business-ops`, `learning`, `personal`, `admin` |

Refactor: right-click tag in sidebar → Rename. Tag Wrangler rewrites every occurrence across the vault. Use this to migrate legacy flat tags to namespaced ones.

### Make.md — selective use

Make.md is powerful but opinionated. Use it for two things, nothing else:

1. **Projects hub** — right-click `wiki/projects/` → Convert to Space. Add properties: `status` (active/paused/complete), `owner`, `client`, `last_meeting`, `open_actions`. Default view: Table sorted by `last_meeting` desc. Card view grouped by `status`.

2. **Clients hub** — right-click `wiki/clients/` → Convert to Space. Add properties: `tier`, `primary_contact`, `last_touched`, `engagement_status`. Default view: Table. Board view grouped by `tier`.

Optionally use **Flow embeds** (`![[board]]`) to surface a project's kanban inline on its journal page.

**Do not** convert `raw/`, `Meeting Notes/`, `dashboards/`, or `Action-Tracker.md` — those are scheduled-task territory and Make.md will fight them for frontmatter ownership.

### Calendar + Kanban + Tasks workflow

Ensure these are enabled and configured:

- **Calendar** (community plugin) — sidebar calendar, clicks create daily notes in `Second Brain/raw/daily/`
- **Kanban** — renders any `.md` file with `kanban-plugin: basic` frontmatter as a board
- **Tasks** — powers ```tasks query blocks and emoji metadata (📅 due, ⏳ scheduled, 🔺 urgent, 🔼 high, 🔽 low, ⏬ lowest)
- **Daily notes** (core) — folder: `Second Brain/raw/daily/`, template: `Second Brain/raw/templates/daily-note.md`

### Action-Tracker format (dual)

Your Action-Tracker.md can mix two formats side-by-side:

1. **Dataview inline fields** (structured):
   ```
   - [ ] task [Owner:: Mac] [Project:: Acme] [Status:: Open] [Source:: manual] [Date:: 2026-05-01]
   ```

2. **Tasks-plugin emoji** (surfaces in ```tasks queries):
   ```
   - [ ] task 📅 2026-05-01 🔼 #project/acme
   ```

Both render correctly. Use format 1 when you need Owner/Source tracking; format 2 when you want the item on the Today dashboard's `due today` list.

### New scheduled tasks to add

| Task | Schedule | Purpose |
|------|----------|---------|
| **Daily Note Builder** | Weekdays 6am local | Builds today's daily note from the template. Pulls Calendar events, rolls forward yesterday's unfinished. |
| **Weekly Action Review** | Monday 8am local | Scans Action-Tracker, writes overdue/stale/no-date/unassigned summary to `dashboards/Action-Review.md` between `WEEKLY-SUMMARY` markers. |

Sample prompt for the daily note builder:

> "Create a scheduled task for weekdays at 6am local time. Read `Second Brain/raw/templates/daily-note.md`, substitute today's date, pull today's Google Calendar events into a static table under 'Meetings today', and write the result to `Second Brain/raw/daily/YYYY-MM-DD.md`. If the file exists, append a timestamped 'Morning rebuild' section instead of overwriting."

### Story-sync updates

If you already have a story-sync task, update it to also write per-project kanban boards at `wiki/projects/{slug}/board.md`. Status mapping: Backlog/Triage → Backlog lane · Todo/Ready → Up Next · In Progress → In Progress · Review/QA → Review · Blocked → Blocked · Done (last 14 days) → Done.

Always write the `kanban-plugin: basic` frontmatter and skip any board.md that lacks it (treat as hand-built).

### Updated 30-day rollout

Slot these into the existing plan:

- **Week 2 addition:** Enable Calendar, Kanban, Tasks plugins. Create the daily-note and project-board templates.
- **Week 3 addition:** Enable Templater, Tag Wrangler, Make.md. Create `TAGS.md` and the Projects/Clients Spaces. Add the Daily Note Builder and Weekly Action Review scheduled tasks.
- **Week 4 addition:** Extend story-sync to write kanban boards.

### Key files reference additions

| File | Purpose |
| --- | --- |
| `Second Brain/TAGS.md` | Canonical tag taxonomy |
| `Second Brain/wiki/MAKE-SPACES.md` | Make.md space config reference |
| `Second Brain/raw/templates/daily-note.md` | Templater-powered daily note |
| `Second Brain/raw/templates/project-board.md` | Kanban template |
| `Second Brain/raw/templates/quick-capture.md` | Interactive Templater capture |
| `Second Brain/dashboards/Today.md` | Daily focused view |
| `Second Brain/dashboards/Action-Review.md` | Weekly triage view |
| `Second Brain/wiki/projects/{slug}/board.md` | Per-project kanban (auto-written by story-sync) |
| `Second Brain/raw/daily/YYYY-MM-DD.md` | Daily notes (auto-built weekday 6am) |


---

## Correction (2026-04-18)

### wiki/clients/ merged into wiki/projects/

The earlier guide mentioned a separate `wiki/clients/` folder and a "Clients Space" in Make.md. That split proved redundant — projects is the single hub now. Any setup step referencing clients as a distinct folder can be ignored; use `wiki/projects/` for everything.

### Make.md setup is version-dependent

"Convert to Space" is the older UI label. Newer Make.md releases use "Add Context", "Set as Database", or require creating the space from the `+` button in the Make.md sidebar. Try in order:

1. Click `wiki/projects/` in the **Make.md sidebar** (not standard file tree). Look for a Context / properties / settings affordance.
2. Right-click the folder. Look for Convert to Space / Add Context / Edit Folder Properties.
3. Command palette (`Cmd+P`) → type "Make" → scan for "Create Context" or similar.
4. Use the `+` at the top of the Make.md sidebar to create a new space pointed at `wiki/projects/`.

If none work, **skip Make.md**. Dataview on your Home dashboard already gives you a sortable projects table:

```dataview
TABLE status, owner, priority, last_meeting, open_actions
FROM "Second Brain/wiki/projects"
WHERE file.name = "journal"
SORT last_meeting DESC
```

This is what Make.md would render anyway — just without the inline-editing UI.


---

## Update 2026-04-18 — Daily notes moved out of `raw/`

Daily notes now live at `Second Brain/daily/YYYY-MM-DD.md` instead of `Second Brain/raw/daily/YYYY-MM-DD.md`. `raw/` is reserved for immutable source material the ingest pipeline may scan; daily notes are ephemeral working pages and belong in a sibling folder.

If you're setting up a peer vault from this guide, substitute `Second Brain/daily/` anywhere this guide says `Second Brain/raw/daily/`. This affects:

- Obsidian **Core → Daily notes** folder setting
- **Templater → Folder templates** mapping for the daily-note template
- **Calendar plugin** daily note creation (inherits the core Daily notes folder)
- The `daily-note-builder` scheduled task

Everything else in this guide still applies. See `SYSTEM-GUIDE.md` Updates 2026-04-18e for the full change note.


---

## Update 2026-04-18 — Architecture diagram (the mental model)

Before you start building, see the one-page picture of how this all fits together:

![[resources/diagrams/llm-kb-architecture]]

Full diagram reference with the Mermaid fallback and the vault-specific mapping table (ingest sources → LLM engine → knowledge store → outputs → frontend) lives at `Second Brain/resources/diagrams/llm-kb-architecture.md`. The Mermaid version always renders in Obsidian; the PNG embed activates once you drop the canonical image at `resources/diagrams/llm-kb-architecture.png`.

The diagram is the shared mental model — if you're onboarding a colleague, send them the diagram file first, then this guide.

### Key takeaway

The pattern is: **raw docs → LLM engine (compile + Q&A + lint + index) → wiki store → outputs (markdown, slides, charts) filed back into the wiki**. Everything in this guide is a concrete instance of that loop. The meeting pipeline is the highest-ROI instance. The story-sync and daily-note loops are tuned derivatives.

---

## Update 2026-04-18 — Action-Tracker sunset (simpler flow for new peers)

If you're setting up a fresh vault from this guide, **skip Action-Tracker.md entirely**. It's been deprecated in the reference setup. Use `commitments.md` at the vault root instead — a simple rolling list of open action items the user owns. Ingest writes to it under a 4-gate rule (owner match, firm commitment, concrete next step, deduplicated). Daily-note-builder reads from it each morning.

Replace any "Action-Tracker" references in the 30-day rollout above with "commitments.md". Skip the `weekly-action-review` scheduled task — it's tied to Action-Tracker and is no longer part of the reference setup.

Kanban boards are also out of the reference setup. The Kanban plugin still works for any hand-built boards you want, but no automation writes `.md` files with `kanban-plugin: basic`.

See `SCHEMA.md` Updates 2026-04-18f for the full extraction rules and `SYSTEM-GUIDE.md` Updates 2026-04-18f for the architectural narrative.


---

## Update 2026-04-18g — Architecture diagram: direct PNG only

The Mermaid in the prior section is superseded. Use the direct PNG embed below.

![[llm-kb-architecture.png]]

Save the canonical image at `Second Brain/resources/diagrams/llm-kb-architecture.png` for the embed to resolve.

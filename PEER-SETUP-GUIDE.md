# PEER-SETUP-GUIDE

Hands-on setup for a new teammate standing up their own Second Brain vault that mirrors Mac's. Follow in order — each phase assumes the previous is done.

---

## Phase 1 — Obsidian

1. Install Obsidian (desktop) and enable iCloud sync. Vault lives at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain`.
2. Enable the following core + community plugins:
   - **Local REST API** (community) — required for Claude/MCP access. Set a token, default port `27124`.
   - **Templater** (community) — templating engine for daily notes and wiki pages.
   - **Tag Wrangler** (community) — rename/merge tags across the vault.
   - **Make.md** (community) — optional UX layer; nice for dashboards.
   - **Obsidian Git** (community) — 15-minute auto-backup to a private GitHub repo.
   - Core: Daily Notes, Outgoing Links, Backlinks, Tags, Templates, Graph View.
3. Install the Local REST API HTTPS certificate so Claude's MCP can connect without warnings.

## Phase 2 — Vault Structure

Create this folder tree at the vault root. Canonical layout — no `clients/`, no `raw/discovery/`, no `raw/meeting-notes/`:

```
Second Brain/
├── _System/              # Changelog, meta, governance
├── raw/                  # Immutable captures
│   ├── meeting-raw/      # Fathom transcripts (read-only, auto-populated)
│   │   └── fathom/
│   ├── articles/         # Clipped articles before ingest
│   ├── projects/         # Project discovery notes
│   ├── templates/        # Templater templates
│   ├── archived-actions/
│   └── archived-stories/
├── wiki/                 # LLM-compiled, canonical knowledge
│   ├── projects/
│   ├── concepts/
│   ├── entities/
│   ├── patterns/
│   ├── reports/
│   ├── tools/
│   └── topics/
├── daily/                # Daily notes (moved out of raw/daily/)
├── dashboards/           # commitments.md, session-context.md, indices
├── resources/            # Reference material
│   ├── diagrams/         # Architecture diagrams (md + Clippings)
│   ├── interests/
│   ├── learning/
│   └── reading/
├── Clippings/            # Image and web-clip assets
├── Excalidraw/
├── SYSTEM-GUIDE.md
├── SCHEMA.md
├── PEER-SETUP-GUIDE.md
└── README.md
```

Projects replace the old `clients/` concept. A client relationship = one or more project pages under `wiki/projects/`.

## Phase 3 — Claude Integration

1. Install Cowork (Claude desktop mode) and sign in.
2. Connect the `mcp-obsidian` MCP pointed at `https://127.0.0.1:27124` with your Local REST API token.
3. Connect `scheduled-tasks` MCP for automation.
4. Drop a `CLAUDE.md` at vault root (or let Mac's global `~/.claude/CLAUDE.md` handle it). Minimum contents:
   - Tone/style rules
   - "Only access files I give you" guardrail
   - Solution doc structure (Exec Summary → Current State → Proposed Solution → Tech Arch → Implementation → Risks → Timeline)
   - Default output formats (`.docx`, `.xlsx`)
5. Verify connection: ask Claude to `list_files_in_vault` — should return the tree above.

## Phase 4 — Scheduled Automations

All times Central. Set up via Cowork's scheduled-tasks UI or the MCP. Full list lives in `SYSTEM-GUIDE.md`; critical ones:

**Meeting pipeline (Fathom only)**
- `process-fathom-transcripts` — every 2 hours, weekdays 8a–6p. Pulls Fathom transcripts → `raw/meeting-raw/fathom/`.
- `meeting-selector` — weekdays, `:45` of each even hour 8a–6p. Routes the Fathom note to `Meeting Notes/{Company}/{Project}/` via `project-mapping.md`. Runs 15 min after ingest to give the transcript time to land.

Granola was retired 2026-04-18. Fathom is the sole meeting source.

**Knowledge pipeline**
- `second-brain-ingest` — every 4 hours at `:30` on weekdays. Processes anything new in `raw/` and `Meeting Notes/` into `wiki/`.
- `second-brain-lint` — Sundays 1am. Orphan check, broken links, tag hygiene, stale page flag.
- `second-brain-lint-wed` — Wednesdays 1am. Lighter mid-week pass.
- `confluence-ingest` — weekdays 6:30a. Mirrors F2 Strategy Confluence → `wiki/f2-internal/`.
- `story-sync` — weekdays every 2 hours at `:15`. Pulls Linear + Jira stories, routes via project-mapping.

**Daily/email**
- `daily-note-builder` — weekdays 6:00a. Creates the day's note in `daily/` from template.
- `daily-morning-briefing` — daily 6:00a. Curated news email.
- `daily-email-summary` — weekdays 7:00a. Gmail digest.
- `weekly-financial-digest` — Fridays 7:00a. QuickBooks P&L.

No duplicated cron slots. If you add tasks, space them ≥15 min apart per hour to prevent collision.

## Phase 5 — On-Demand Skills

These are slash-style skills available in Claude — no schedule needed, fire when asked:
- `kb-ingest-now` — process `raw/articles/` immediately
- `kb-lint-now` — run health check on demand
- `kb-report` — generate a permanent report from vault knowledge
- `consolidate-memory` — merge duplicate facts in CLAUDE.md memory
- `session-kickoff` — context briefing at start of a work session

## Phase 6 — Git Backup

1. Create a **private** GitHub repo named `second-brain` (or similar).
2. In Obsidian Git settings: set commit message to `vault: auto-backup {{date}}`, interval to 15 min, push after commit.
3. First manual commit + push to prime the repo.
4. This repo is also your pre-consolidation history — you can recover any prior version of a wiki page via `git log -- "Second Brain/wiki/..."`.

## Phase 7 — Capture Workflow

**Meetings** — join with Fathom running. `process-fathom-transcripts` pulls every 2 hours; `meeting-selector` routes the note to the right project folder. Don't manually copy transcripts — the pipeline handles it.

**Commitments** — firm commitments get extracted into `dashboards/commitments.md` using the 4-gate rule:
1. Owner is Mac (not assigned to someone else)
2. Firm commitment verb ("will", "agreed to", "committed to" — not "might" or "should")
3. Concrete next step (specific, actionable)
4. Deduped against existing commitments

Nothing auto-lands in commitments.md without hitting all 4 gates. This replaces the deprecated `Action-Tracker.md` pattern — do not create a new Action-Tracker file.

**Articles** — drop into `raw/articles/` (web clipper, paste, whatever). `second-brain-ingest` picks them up on the next 4-hour tick, or hit `/kb-ingest-now`.

**Daily notes** — auto-generated at 6am weekdays into `daily/`. Jot freeform notes there; nothing downstream parses daily notes automatically.

---

## Architecture Diagram — Mental Model

The flow diagram at `resources/diagrams/llm-kb-architecture.md` (embedded image `Clippings/Image-1.jpg`) is the canonical mental model. If you're ever unsure where a capture goes or what reads what, re-read that diagram first. Short version:

**Sources → raw/ (immutable) → wiki/ (LLM-compiled, canonical) → dashboards/ (surfaced for daily use)**

Claude reads wiki/dashboards for answers and writes back to wiki/dashboards. It never edits raw/.

---

## Common First-Week Issues

- **REST API won't connect** → check port 27124, verify cert installed, confirm Obsidian is running.
- **Scheduled tasks not firing** → check Cowork is logged in and the MCP is enabled. Tasks only fire when Cowork is running.
- **Empty daily note** → Templater template missing or daily-note-builder disabled. Run it manually from the sidebar.
- **Git sync conflict** → pull before commit; if stuck, resolve in GitHub Desktop or CLI, not inside Obsidian.

## Reference

- `SYSTEM-GUIDE.md` — full system architecture, MCP connections, troubleshooting
- `SCHEMA.md` — folder conventions, page types, ingest/query/create/lint workflows
- `_System/changelog.md` — consolidation history and recent structural changes

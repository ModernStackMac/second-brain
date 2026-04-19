# Second Brain -- System Guide

> How everything works, end to end. Reference for configuring, troubleshooting, or onboarding.

**Last updated:** 2026-04-19  |  **Change history:** `_System/changelog.md`

---

## 1. Architecture Overview

Data flows through three stages: **intake, compilation, and browse**.

Raw material lands in `Meeting Notes/` (from Fathom) and `raw/` (articles, project docs, transcripts). Claude's scheduled tasks scan those folders, extract knowledge into `wiki/` pages, and surface synthesized views through `dashboards/` and `wiki/reports/`. You read and browse in Obsidian; Claude does the writing behind the scenes via MCP connections to Fathom, Gmail, Slack, Linear, Jira, QuickBooks, and others.

**Sources --> Meeting Notes/ + raw/ (intake) --> wiki/ (Claude-compiled) --> dashboards/ (browse)**

---

## 2. Folder Structure

```
{Vault}/
├── Clippings/                 # Web Clipper image/asset dumping ground
├── Excalidraw/                # Drawings (excluded from ingest)
├── Meeting Notes/             # Fathom notes -- sole live meeting destination
│   ├── {Company}/{Project}/
│   └── _Unmatched/
├── Second Brain/
│   ├── README.md
│   ├── SCHEMA.md
│   ├── SYSTEM-GUIDE.md        # This file
│   ├── PEER-SETUP-GUIDE.md
│   ├── TAGS.md
│   ├── Decision-Log.md
│   ├── _System/
│   │   ├── changelog.md
│   │   ├── identity.yaml
│   │   ├── story-sync.log
│   │   ├── selector-log.md
│   │   ├── meeting-routing-unrouted.md
│   │   └── scripts/ (story-sync.js, run-story-sync.sh)
│   ├── dashboards/
│   │   └── Home.md
│   ├── raw/
│   │   ├── articles/
│   │   ├── projects/{slug}/
│   │   ├── transcripts/
│   │   ├── templates/ (quick-capture.md)
│   │   └── meeting-raw/      # FROZEN ARCHIVE -- do not write here
│   ├── resources/
│   │   └── diagrams/
│   └── wiki/
│       ├── index.md, log.md
│       ├── projects/, concepts/, entities/, patterns/
│       ├── tools/, topics/, articles/
│       ├── reports/
│       └── f2-internal/
├── commitments.md
├── project-mapping.md
└── .claudeignore
```

---

## 3. Meeting Pipeline

Fathom is the only meeting source. There is no other path for meeting content into the vault.

**How it works:**

1. You join a call with Fathom running.
2. `process-fathom-transcripts` pulls the recording and writes directly to `Meeting Notes/{Company}/{Project}/`. Routing is based on `project-mapping.md` keyword matching.
3. Meetings that can't be matched route to `Meeting Notes/_Unmatched/`. Fix routing by updating `project-mapping.md` keywords, then move the file manually.
4. There is no duplicate copy to `raw/`. Meeting Notes/ is the single source of truth for meetings.
5. Routing decisions are logged to `_System/selector-log.md`.

---

## 4. Knowledge Pipeline

`second-brain-ingest` is the workhorse. It runs on a schedule and scans these source folders:

- `Meeting Notes/` -- all routed meeting notes
- `raw/articles/` -- Web Clipper saves
- `raw/projects/` -- SOWs, configs, client docs
- `raw/transcripts/` -- standalone transcripts

**What it extracts:**

- **Wiki pages** -- entities, concepts, tools, and topics get created or updated in `wiki/`
- **Decisions** -- extracted to `Decision-Log.md` with date, context, and source meeting
- **Commitments** -- extracted to `commitments.md` using the 4-gate rule (see Section 7)
- **Patterns** -- a dedicated pattern extraction pass reviews journal entries for reusable solution patterns and routes them to `wiki/patterns/` and `wiki/concepts/`

Claude treats `raw/` as additive-only and never rewrites an existing Meeting Notes file.

---

## 5. Story Sync

Pulls active stories from Linear (MSS + HM) and Jira (F2) that are assigned to Mac. Routes them via `project-mapping.md` to the correct project folder:

- `wiki/projects/{slug}/stories-f2.md` -- Jira/F2 stories
- `wiki/projects/{slug}/stories-hm.md` -- Linear stories

Logs to `_System/story-sync.log`. Script source lives in `_System/scripts/`.

---

## 6. Weekly Synthesis

Runs **Mondays at 5:30am CT**.

Reads all project journals, meeting notes, commitments, and decisions from the prior week. Produces `wiki/reports/weekly-synthesis-{date}.md` containing:

- Executive summary
- Per-project status
- Cross-project patterns
- Commitments at risk
- Recommendations

---

## 7. Commitments

`commitments.md` at the vault root is the rolling open-items list.

**Writers:** `second-brain-ingest` (scheduled) and `kb-ingest-now` (on-demand).

**4-gate extraction rule** -- all four must pass before a commitment gets written:

1. **Owner = Mac.** Explicit assignment or first-person commitment.
2. **Firm commitment.** Explicit verb phrase ("I'll", "Mac will").
3. **Concrete next step.** Specific action, not a vague topic.
4. **Deduplicate.** Compare first 60 chars + project against existing entries.

**Lifecycle:**

- Ingest appends new items to `## Open`
- You check the box in Obsidian (`- [x]`)
- Lint moves checked items to `## Done`
- Items in Done for 14+ days get archived
- Open items over 30 days get flagged for review

---

## 8. Scheduled Tasks

All times Central. All tasks run automatically.

| Task | Schedule | Description |
|------|----------|-------------|
| `process-fathom-transcripts` | Weekdays every 2hrs, 8am-6pm | Ingests Fathom recordings to `Meeting Notes/{Company}/{Project}/`. Unroutable goes to `_Unmatched/`. |
| `second-brain-ingest` | Weekdays every 4hrs at :30 | Scans Meeting Notes/, raw/articles/, raw/projects/, raw/transcripts/. Extracts wiki pages, decisions, commitments, patterns. |
| `second-brain-lint` | Sundays 1am | Full lint -- broken links, orphans, index gaps, cross-refs, tag canon, frontmatter, project-slug integrity. |
| `second-brain-lint-wed` | Wednesdays 1am | Mid-week lint -- same checks, lighter scope. |
| `confluence-ingest` | Weekdays 6:30am | Mirrors F2 Strategy Confluence pages into `wiki/f2-internal/`. |
| `story-sync` | Weekdays every 2hrs, 7am-7pm | Pulls active Linear + Jira stories assigned to Mac, routes via project-mapping.md. |
| `daily-morning-briefing` | Daily 6am | Curated Salesforce / AI / tech / HN news as styled HTML email. |
| `daily-email-summary` | Weekdays 7am | Summarizes last 3 days of Gmail -- orders, tracking, important items -- as HTML digest. |
| `weekly-financial-digest` | Fridays 7am | QuickBooks P&L + cash flow summary, sent as Gmail. |
| `weekly-synthesis` | Mondays 5:30am | Cross-project synthesis report to `wiki/reports/weekly-synthesis-{date}.md`. |

---

## 9. MCP Connections

| MCP | What it connects | Notes |
|-----|-----------------|-------|
| **mcp-obsidian** | Obsidian vault | Local REST API, port 27124. Obsidian must be open with vault active. |
| **Fathom** | Meeting recordings | Source for process-fathom-transcripts. |
| **Gmail** | Email | Used by daily-email-summary, weekly-financial-digest, and email skills. |
| **Google Calendar** | Calendar events | Meeting context and scheduling. |
| **Slack** | Slack workspaces | Message search, channel reading, notifications. |
| **Linear** | Linear issues | Story sync for MSS + HM projects. |
| **Jira/Confluence** | Atlassian | Story sync for F2 projects + Confluence page mirroring. |
| **QuickBooks** | Financials | P&L, cash flow for weekly-financial-digest. |
| **Notion** | Notion workspaces | Reference and lookup. |

---

## 10. Deprecated

These are gone. Do not recreate or reference them.

| Item | Status |
|------|--------|
| `daily/` (daily notes) | Killed. Automated systems are the record of work. |
| Dashboards other than `Home.md` | Removed. Weekly synthesis reports replaced them. |
| `raw/meeting-raw/` | Frozen archive. Fathom routes directly to Meeting Notes/ now. |
| `Action-Tracker.md` | Replaced by `commitments.md`. |
| Kanban boards | Removed. |
| Granola | Replaced by Fathom as the sole meeting tool. |

---

## Troubleshooting

**MCP not connecting** -- Is Obsidian open with the vault active? Does the API key match? Debug: `tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log`

**Scheduled task not processing** -- Check if the file is already logged in `wiki/log.md`. Confirm `project-mapping.md` has a matching entry. Check task run history in Cowork sidebar.

**Meeting not routing** -- Unrouted meetings land in `Meeting Notes/_Unmatched/`. Update `project-mapping.md` keywords, then move the file to the correct folder.

**Web Clipper wrong folder** -- Extension settings: Folder = `Second Brain/raw/articles`.

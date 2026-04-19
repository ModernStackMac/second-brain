# Second Brain — Wiki Schema

> Governance rules for the compiled wiki layer. Read this before ingesting, creating pages, or writing automation that touches the wiki.

**Last consolidated:** 2026-04-19 · **Change history:** `_System/changelog.md`

You are a knowledge-base maintainer for Mac Nosek's consulting practice (Modern Stack Systems) and personal learning. This vault is a persistent, compounding wiki built from raw source materials. It covers consulting work AND personal interests — tech, AI, industry news, anything Mac finds worth capturing. You read raw sources and maintain a structured, interlinked wiki. You never modify raw sources — they are immutable.

---

## Folder Structure

```
Second Brain/
├── _System/                  # Operational — identity, changelog, routing logs
├── dashboards/               # Dataview views — not ingested
├── raw/                      # Immutable source materials (never modify)
│   ├── articles/             # Clipped articles, blog posts, research (ANY topic)
│   ├── projects/             # SOWs, project docs, deliverables, configs, discovery
│   ├── meeting-raw/          # Fathom transcripts pre-routing
│   │   └── fathom/
│   ├── archived-actions/     # Pre-commitments.md archive
│   ├── archived-stories/     # Old story dumps (excluded from ingest)
│   └── templates/            # Reusable doc templates (not ingested)
├── resources/                # Reference docs
│   ├── diagrams/             # Architecture diagrams
│   ├── interests/
│   ├── learning/
│   └── reading/
├── wiki/                     # LLM-maintained knowledge base (Claude owns this)
│   ├── index.md              # Master catalog
│   ├── log.md                # Chronological operation log
│   ├── MAKE-SPACES.md        # Make.md space config
│   ├── projects/             # One subfolder per engagement
│   │   └── {project}/
│   │       ├── context.md    # Stable: client, stack, what we're building
│   │       ├── journal.md    # Rolling weekly summaries, decisions, open questions
│   │       └── stories-{ws}.md # Active stories (auto-written by story-sync)
│   ├── concepts/             # Domain concepts (CPQ, data migration, etc.)
│   ├── patterns/             # Reusable solution patterns
│   ├── tools/                # Tools, platforms, integrations
│   ├── entities/             # People, orgs, vendors
│   ├── articles/             # Individual article breakdowns
│   ├── topics/               # Accumulator pages for personal interests
│   ├── reports/              # Saved query outputs (kb-report + weekly-synthesis)
│   └── f2-internal/          # F2 Strategy Confluence mirror (confluence-ingest)
├── SCHEMA.md                 # This file
├── SYSTEM-GUIDE.md
├── PEER-SETUP-GUIDE.md
├── README.md
├── TAGS.md
├── Decision-Log.md
└── Action-Tracker.md         # DEPRECATED — read-only pointer
```

**Vault root (outside Second Brain/):**

- `commitments.md` — rolling open action items Mac owns (ingest writes under 4-gate rule)
- `project-mapping.md` — single source of truth for projects, contacts, routing
- `Meeting Notes/` — Fathom meeting notes, routed by `{Company}/{Project}/`
- `Clippings/` — Web Clipper landing + reference images
- `.claudeignore` — ignore rules for Claude Code / Cowork

**Deprecated folders:**
- `daily/` — Daily notes (removed 2026-04-19). Automated daily note generation added noise without signal; calendar, commitments, and stories are already surfaced by dedicated scheduled tasks and commitments.md. If a dashboard view is needed, use a static `dashboards/home.md` with live Dataview queries instead of date-stamped files.

**Note:** `wiki/clients/` does not exist as a separate folder. All project/client knowledge lives in `wiki/projects/{slug}/`. Historical Granola captures may exist under `raw/meeting-raw/granola/` — read-only, do not add new files there.

---

## External Source: Meeting Notes

`Meeting Notes/` at vault root is the PRIMARY source for client/project context, populated by `meeting-selector` routing Fathom transcripts from `raw/meeting-raw/fathom/` to the correct project folder.

**Structure:** `Meeting Notes/{Company}/{Project}/YYYY-MM-DD - Title.md`

**Frontmatter fields:** date, title, company, project, attendees, source (fathom), processed, tags

Legacy files may carry `source: granola` and a `selector_score` field from the Fathom/Granola trial (ended 2026-04-18). Leave those fields alone on historical files — do not backfill or strip.

**How to use:**

- READ-ONLY — never modify these files
- The folder structure itself is the project map
- Scan for files not referenced in `wiki/log.md`
- Extract client context, decisions, commitments, tech stack, pain points, contacts into appropriate wiki pages
- Source citation format: `Meeting Notes/Company/Project/filename.md`
- Meeting notes are the richest source — prioritize during ingest

---

## Project Mapping

`project-mapping.md` at the vault root is the single source of truth for active projects. Reference it to understand:

- Active companies/clients
- Salesforce products and tech stacks per project
- Key contacts per engagement
- Keywords for matching meetings to projects
- Correct `Meeting Notes/` subfolder path per project

Enrich wiki pages with context from project-mapping that might not be in any single meeting note (industry, project type, full tech stack).

---

## Wiki Page Format

Every wiki page follows this structure:

```markdown
# Page Title

> One-line summary of what this page covers.

## Overview
2-3 paragraph description.

## Key Details
Core content organized by page type (see Page Types).

## Related Pages
- [[page-name]] — brief note on relationship

## Sources
- raw/path/to/source.md — what was extracted

---
*Last updated: YYYY-MM-DD*
*Sources: list of raw/ files that informed this page*
```

---

## Page Types

### Project Pages (`wiki/projects/{slug}/`)

Each active project gets a subfolder with up to three files:

**`context.md`** — Stable reference. Set once, updated when the project fundamentally changes (new scope, new team, stack change). Contains:

- Client/company info, industry, partner
- Key contacts
- What we're building (feature scope, not sprint status)
- Tech stack and data model
- Key constraints and architectural decisions
- Cross-links to related concept/tool/pattern pages

**`journal.md`** — Rolling narrative. Ingest prepends a new `## Week of {date}` block at the TOP with each batch of meeting notes:

```markdown
## Week of Apr 7–13, 2026

2-4 sentences describing what happened this week.

**Decisions:**
- Decision — brief rationale

**Open questions:**
- Question — owner if known
```

Ingest rules:

- Prepend weekly entries (newest first)
- If the current week already has an entry, extend it (no duplicates)
- Keep tight — this is a digest, not a transcript
- Decisions and open questions are the most important parts

**`stories-{ws}.md`** — Auto-written by `story-sync`. One file per workspace (e.g., `stories-linear-mss.md`, `stories-jira-f2.md`). Active set only: Linear Todo/In Progress/Started + Jira To Do/In Progress (plus Backlog in current cycle). Do not hand-edit.

### Concept Pages (`wiki/concepts/`)

Definition, when/why it matters, common implementations, gotchas, related Salesforce features, links to patterns that use this concept.

### Pattern Pages (`wiki/patterns/`)

Problem statement, solution approach, architecture diagram (Mermaid if applicable), implementation steps, when to use vs. alternatives, real examples from client work, risks/mitigations.

### Tool Pages (`wiki/tools/`)

What it does, how it fits the stack, setup/config notes, strengths/limitations, licensing, integration points, alternatives.

### Entity Pages (`wiki/entities/`)

Who/what, role/relationship, context, relevant interactions or decisions.

### Article Pages (`wiki/articles/`)

Title, source URL, publish date, author, tags, concise summary, key takeaways (bulleted), notable specs/data, why it matters. Always link to relevant topic pages and any consulting wiki pages.

```markdown
# Article Title

> One-line summary.

**Source:** [Title](URL) | **Published:** YYYY-MM-DD | **Tags:** tech, ai, etc.

## Summary
2-3 paragraph breakdown.

## Key Takeaways
- Bulleted list of the most important points, specs, or data.

## Why It Matters
Brief note on relevance — Mac's work, stack, interests, or broader industry.

## Related Pages
- [[topic-page]] — relationship
- [[tool-or-concept]] — if consulting-relevant

## Sources
- raw/articles/filename.md
```

### Topic Pages (`wiki/topics/`)

Accumulator pages for personal interests. Grow over time. Unlike concept pages (consulting domain knowledge), topic pages track broader interests: hardware, AI trends, industry news, dev tools, frameworks.

Track: topic description, key developments (chronological, most recent first), notable products/releases/announcements, links to individual article pages, cross-links to consulting wiki where relevant.

**Article tagging taxonomy:**

- `tech` — hardware, devices, operating systems, infrastructure
- `ai` — AI models, tools, frameworks, industry, research
- `salesforce` — Salesforce ecosystem news (separate from client work)
- `learning` — tutorials, frameworks, side projects
- `devops` — CI/CD, deployment, automation
- `cloud` — cloud platforms, architecture, serverless

### Report Pages (`wiki/reports/`)

Two types of reports live here:

1. **On-demand reports** — auto-written by `kb-report` skill. Permanent query answers with citations. Cross-linked from relevant wiki pages.
2. **Weekly synthesis reports** — auto-written by `weekly-synthesis` scheduled task (Mondays 5:30am CT). Cross-project patterns, stale commitments, decisions needing follow-up. Format: `weekly-synthesis-{YYYY-MM-DD}.md`.

---

## Workflows

### 1. INGEST (processing new raw sources)

When told to ingest:

1. Read the raw file completely.
2. Identify all entities, concepts, patterns, tools, and client references.
3. For each identified item:
   - Wiki page exists → update with new info, note the source
   - No wiki page → create one using the page format
4. Update `wiki/index.md` with any new pages.
5. Add `wiki/log.md` entry: date, source file, pages created/updated, brief summary.
6. Cross-link related pages using `[[wiki-links]]`.
7. **Pattern extraction pass** (see below).
8. Report what was done.

**Article ingest (`raw/articles/`):** Not limited to consulting content. For every article:

1. Create a `wiki/articles/` page using the Article format.
2. Identify or create the relevant `wiki/topics/` accumulator page; add the article reference there.
3. If overlap with consulting wiki pages (tools, concepts, projects), cross-link and update.
4. Never skip — if Mac clipped it, it's worth processing.

**Meeting Notes ingest:** Scan `Meeting Notes/` for files not in `wiki/log.md`. For each new meeting:

1. Identify the project from the folder path (`Meeting Notes/Stand8/Harvey/` = Harvey).
2. **Update `wiki/projects/{slug}/journal.md`** — prepend a `## Week of {date}` entry (or extend the current week) with narrative summary, decisions, open questions.
3. **Update `wiki/projects/{slug}/context.md`** only if the meeting reveals new stable info (new team member, scope change, stack addition, architectural decision). Do not add meeting-specific notes to context.md.
4. **Append to `commitments.md`** any action items that pass ALL four extraction gates (below). Format: `- [ ] Description [Project:: slug] [Source:: Meeting Notes/.../file.md] [Captured:: YYYY-MM-DD] [Due:: YYYY-MM-DD if explicit]`. If no items pass, write nothing.
5. **Append to `Decision-Log.md`** significant decisions as new rows: `| Date | Project | Decision | Context |`. Strategic decisions only — skip trivial ticket-level choices.
6. Update relevant `wiki/concepts/`, `wiki/patterns/`, `wiki/tools/`, `wiki/entities/` if the meeting contains reusable knowledge.

**4-gate commitments rule** — ALL must pass before writing to `commitments.md`:

1. **Owner = Mac.** Explicit assignment or first-person commitment. Ambiguous, someone else, or "the team" → skip.
2. **Firm commitment.** Explicit verb phrase ("I'll", "Mac will", "action for Mac", "Mac to take", "owner: Mac") or a task assignment. Vague "we should", "somebody needs to", "would be good if" → skip.
3. **Concrete next step.** Specific action, not a topic. "Follow up on X" without specifics → skip. "Send the revised SOW to Client Y by Thursday" → keep.
4. **Deduplicate.** Compare against open items by first 60 chars + project. If duplicate, refresh existing entry (source link, date) rather than creating.

**Pattern extraction pass** — runs after each ingest cycle:

1. Review journal entries updated this cycle (or in the past 7 days).
2. For each, ask: "Is there a reusable solution pattern, architectural decision, or domain concept here that would be valuable across other engagements?"
3. Look for: repeatable solutions (validation workarounds, integration approaches, data model designs, deployment strategies), domain concepts that transcend a single project, and cross-project similarities.
4. For each candidate:
   - Existing `wiki/patterns/` or `wiki/concepts/` page → update with new example/context.
   - No page exists → create one using the Pattern or Concept format.
   - Cross-link from the project journal/context to the new page.
5. Log extracted patterns in the `wiki/log.md` entry: `Patterns extracted: {list or "none"}`.
6. If no patterns detected this cycle, that's fine — don't force it.

### 2. SYNTHESIS (weekly cross-project analysis)

Runs automatically via `weekly-synthesis` scheduled task (Mondays 5:30am CT). Can also be triggered on-demand.

1. Read `project-mapping.md` for all active projects.
2. For each project: read journal.md, context.md, and stories files.
3. Read `commitments.md` — flag items >14 days old.
4. Read `Decision-Log.md` — recent decisions.
5. Scan `Meeting Notes/` for unprocessed files.
6. Generate `wiki/reports/weekly-synthesis-{YYYY-MM-DD}.md` covering: executive summary, per-project status (moved/blocked/decisions/watch), cross-project patterns, commitments at risk, unprocessed sources, and recommendations.
7. Update `wiki/index.md` and `wiki/log.md`.

### 3. QUERY (answering questions from the wiki)

1. Consult `wiki/index.md` to find relevant pages.
2. Read relevant wiki pages; trace back to raw sources for detail if needed.
3. Synthesize an answer citing specific wiki pages and raw sources.
4. If the wiki lacks info, say so and suggest what raw sources would fill the gap.

### 4. CREATE (generating deliverables)

1. Query the wiki for all relevant context.
2. Pull from `raw/templates/` if applicable.
3. Generate with full context.
4. Note in `wiki/log.md` that a deliverable was generated and what wiki pages informed it.

### 5. LINT (health check)

1. Scan wiki pages for:
   - Broken or missing `[[wiki-links]]`
   - Pages with no sources cited
   - Pages not listed in `wiki/index.md`
   - Stale info (sources > 6 months with no updates)
   - Missing cross-references between related pages
   - Non-canonical tags (compare against `TAGS.md`)
   - Frontmatter conflicts
   - Project-slug integrity (folder-to-mapping coverage, stories project=folder, ticket prefix routing)
2. **Log rotation:** `wiki/log.md` > 200 entries → archive entries > 90 days to `wiki/log-archive-{year}.md`.
3. **Stale commitments:** `commitments.md` `## Open` items > 30 days with no update → flag for review.
4. **Closed commitments:** `## Done` items > 14 days → move to `raw/archived-actions/YYYY-MM.md`.
5. Report issues; fix what's safe automatically.
6. Suggest raw sources to fill gaps.

---

## Scheduled Tasks Overview

| Task | Schedule | Purpose |
|---|---|---|
| `second-brain-ingest` | Every 4hrs weekdays | Process new sources → wiki, extract commitments, extract patterns |
| `weekly-synthesis` | Mon 5:30am CT | Cross-project synthesis report |
| `second-brain-lint` | Sun 1am CT | Full lint pass |
| `second-brain-lint-wed` | Wed 1am CT | Mid-week lint |
| `process-fathom-transcripts` | Every 2hrs weekdays 8am-6pm | Route Fathom recordings to Meeting Notes/ |
| `story-sync` | Every 2hrs weekdays 7am-7pm | Sync Linear + Jira stories to wiki |
| `confluence-ingest` | Weekdays 6:30am CT | Mirror F2 Confluence pages |
| `daily-morning-briefing` | Daily 6am CT | Curated tech/AI/SF news email |
| `daily-email-summary` | Weekdays 7am CT | Gmail digest email |
| `weekly-financial-digest` | Fri 7am CT | QuickBooks P&L + cash flow email |
| `daily-note-builder` | **DISABLED** | Was: daily note generation. Replaced by commitments.md + synthesis reports. |

---

## Rules

- Never modify anything in `raw/`. Immutable source of truth.
- Never ingest or process files in `dashboards/`, `_System/`, or deprecated `daily/`. Operational folders, not knowledge sources.
- `Meeting Notes/` files are READ-ONLY (immutability preserved across router reruns).
- Always cite sources when updating wiki pages.
- Keep wiki pages concise and scannable — no fluff.
- Use `[[wiki-links]]` for cross-references (Obsidian-compatible).
- Dates in ISO format (YYYY-MM-DD).
- When in doubt about categorization, prefer the most specific page type.
- Maintain `wiki/index.md` and `wiki/log.md` with every operation.
- Professional but casual tone — match Mac's voice.

---

## Domain Context

Mac runs **Modern Stack Systems**, a consulting practice focused on:

- Salesforce architecture and implementation (Sales Cloud, Service Cloud, CPQ, integrations)
- DevOps and CI/CD (GitHub Actions, Salesforce DX, deployment automation)
- AI/MCP tooling and automation
- Cloud architecture and system design
- Business development and go-to-market strategy

**Personal interests** (article/topic pages):

- Apple hardware and ecosystem
- AI industry trends, model releases, tooling evolution
- Dev tools, frameworks, productivity automation
- Cloud platform evolution and serverless architecture
- Anything Mac clips into `raw/articles/` — if he saved it, process it

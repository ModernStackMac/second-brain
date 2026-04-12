# Second Brain — Wiki Schema

You are a knowledge-base maintainer for Mac Nosek's consulting practice and personal learning (Modern Stack Systems). This vault is a persistent, compounding wiki built from raw source materials. It covers both consulting work AND personal interests — tech, AI, industry news, and anything Mac finds worth capturing. You read raw sources and maintain a structured, interlinked wiki. You never modify raw sources — they are immutable.

## Folder Structure

```
Second Brain/
├── raw/                    # Immutable source materials (never modify)
│   ├── projects/           # SOWs, project docs, deliverables, configs
│   ├── articles/           # Clipped articles, blog posts, research (ANY topic)
│   ├── discovery/          # Discovery notes, requirements, client interviews
│   └── templates/          # Reusable doc templates, frameworks
├── wiki/                   # LLM-maintained knowledge base (you own this)
│   ├── index.md            # Master index of all wiki pages with brief descriptions
│   ├── log.md              # Chronological log of all ingest/update operations
│   ├── clients/            # Client-specific pages (org context, tech stack, history)
│   ├── concepts/           # Domain concepts (lead routing, CPQ, data migration, etc.)
│   ├── patterns/           # Reusable solution patterns and architecture approaches
│   ├── tools/              # Tools, platforms, integrations (Salesforce, DevOps, MCP, etc.)
│   ├── entities/           # People, orgs, vendors, partners
│   ├── articles/           # Individual article breakdowns (one page per article)
│   └── topics/             # Accumulator pages for personal interests and learning
└── SCHEMA.md               # This file — governance rules
```

## External Source: Meeting Notes

The vault also contains a `Meeting Notes/` folder at the root level (outside Second Brain). This is the PRIMARY source for client/project context and is maintained by a separate scheduled task that processes Granola and Shadow meeting transcripts every 2 hours.

**Structure:** `Meeting Notes/{Company}/{Project}/YYYY-MM-DD - Title.md`

**Frontmatter fields:** date, title, company, project, attendees, source, processed, tags

**How to use Meeting Notes as a source:**
- Treat `Meeting Notes/` as READ-ONLY — never modify these files.
- The folder structure itself is the project map: each `{Company}/{Project}/` path represents an active client engagement.
- When ingesting, scan Meeting Notes for new files not yet referenced in `wiki/log.md`.
- Extract client context, decisions, action items, tech stack details, pain points, and key contacts from meeting notes into the appropriate wiki pages.
- Source citations for meeting notes use the format: `Meeting Notes/Company/Project/filename.md`
- Meeting notes are the richest source of project context — prioritize them during ingest.

## Project Mapping

The vault contains a `project-mapping.md` file at the root level. This is the single source of truth for all active projects, clients, team members, and meeting folder routing. Reference this file to understand:
- Which companies/clients are active
- What Salesforce products and tech stacks are in play per project
- Key contacts per engagement
- Keywords for matching meetings to projects
- The correct `Meeting Notes/` subfolder path for each project

When ingesting, use project-mapping.md to enrich wiki pages with context that might not be in a single meeting note (e.g., industry, project type, full tech stack).

## Wiki Page Format

Every wiki page must follow this structure:

```markdown
# Page Title

> One-line summary of what this page covers.

## Overview
2-3 paragraph description.

## Key Details
Core content organized by the page type (see Page Types below).

## Related Pages
- [[page-name]] — brief note on relationship

## Sources
- raw/path/to/source.md — what was extracted from this source

---
*Last updated: YYYY-MM-DD*
*Sources: list of raw/ files that informed this page*
```

## Page Types

### Client Pages (`wiki/clients/`)
Track: org name, industry, Salesforce edition/products, tech stack, key contacts, project history, pain points, decisions made, lessons learned.

### Concept Pages (`wiki/concepts/`)
Track: definition, when/why it matters, common implementations, gotchas, related Salesforce features, links to patterns that use this concept.

### Pattern Pages (`wiki/patterns/`)
Track: problem statement, solution approach, architecture diagram (mermaid if applicable), implementation steps, when to use vs. alternatives, real examples from client work, risks/mitigations.

### Tool Pages (`wiki/tools/`)
Track: what it does, how it fits the stack, setup/config notes, strengths/limitations, licensing, integration points, alternatives.

### Entity Pages (`wiki/entities/`)
Track: who/what, role/relationship, context, relevant interactions or decisions.

### Article Pages (`wiki/articles/`)
Track: title, source URL, publish date, author, tags (tech/ai/salesforce/learning), a concise summary, key takeaways (bulleted), notable specs/data points, and why it matters (Mac's perspective or relevance to his work/interests). Always link to relevant topic pages and any consulting wiki pages where the content is relevant.

**Article pages use this extended format:**

```markdown
# Article Title

> One-line summary.

**Source:** [Title](URL) | **Published:** YYYY-MM-DD | **Tags:** tech, ai, etc.

## Summary
2-3 paragraph breakdown of the article.

## Key Takeaways
- Bulleted list of the most important points, specs, or data.

## Why It Matters
Brief note on relevance — to Mac's work, stack, interests, or the broader industry.

## Related Pages
- [[topic-page]] — relationship
- [[tool-or-concept]] — if consulting-relevant

## Sources
- raw/articles/filename.md
```

### Topic Pages (`wiki/topics/`)
Topic pages are **accumulator pages** for personal interests and learning. They grow over time as more articles and sources are ingested. Unlike concept pages (which track consulting domain knowledge), topic pages track broader interests: hardware, AI trends, industry news, dev tools, frameworks, etc.

Track: topic description, key developments (chronological, most recent first), notable products/releases/announcements, links to individual article pages, cross-links to consulting wiki pages where relevant.

**Tagging convention:** Every article page should have one or more tags from this taxonomy. New tags can be added as needed, but prefer these defaults:
- `tech` — hardware, devices, operating systems, infrastructure
- `ai` — AI models, tools, frameworks, industry trends, research
- `salesforce` — Salesforce ecosystem news (separate from client work)
- `learning` — tutorials, frameworks, side projects, things Mac is exploring
- `devops` — CI/CD, deployment, tooling, automation
- `cloud` — cloud platforms, architecture, serverless, hosting

## Workflows

### 1. INGEST (processing new raw sources)

When told to ingest a source:
1. Read the raw file completely.
2. Identify all entities, concepts, patterns, tools, and client references.
3. For each identified item:
   - If a wiki page exists → update it with new information, note the source.
   - If no wiki page exists → create one following the page format above.
4. Update `wiki/index.md` with any new pages.
5. Add an entry to `wiki/log.md` with: date, source file, pages created/updated, brief summary.
6. Cross-link related pages using `[[wiki-links]]`.
7. Report what was done: pages created, pages updated, key takeaways.

**Article ingest (`raw/articles/`):** Articles from `raw/articles/` are NOT limited to consulting content. Process every article:
1. Create a `wiki/articles/` page using the Article Page format (summary, key takeaways, why it matters).
2. Identify or create the relevant `wiki/topics/` accumulator page(s) and add the article reference there.
3. If the article has overlap with consulting wiki pages (tools, concepts, clients), cross-link and update those pages too.
4. Never skip an article just because it's not consulting-related — the Second Brain captures everything Mac finds worth saving.

**Meeting Notes ingest:** Also scan `Meeting Notes/` (root-level vault folder) for any files not yet referenced in `wiki/log.md`. Process them the same way — extract entities, concepts, patterns, tools, and client context into wiki pages. The folder path tells you the company and project (e.g., `Meeting Notes/Stand8/Harvey/` = company Stand8, project Harvey).

### 2. QUERY (answering questions from the wiki)

When asked a question:
1. Consult `wiki/index.md` to find relevant pages.
2. Read relevant wiki pages and, if needed, trace back to raw sources for detail.
3. Synthesize an answer citing specific wiki pages and raw sources.
4. If the wiki doesn't have enough info, say so and suggest what raw sources would fill the gap.

### 3. CREATE (generating deliverables from wiki knowledge)

When asked to create a deliverable (solution doc, user stories, proposal, etc.):
1. Query the wiki for all relevant context (client, patterns, concepts, tools).
2. Pull from raw templates if available in `raw/templates/`.
3. Generate the deliverable with full context from the knowledge base.
4. Note in `wiki/log.md` that a deliverable was generated and what wiki pages informed it.

### 4. LINT (health check)

When told to lint or health-check the wiki:
1. Scan all wiki pages for:
   - Broken or missing `[[wiki-links]]`
   - Pages with no sources cited
   - Pages not listed in `wiki/index.md`
   - Stale information (sources older than 6 months with no updates)
   - Missing cross-references between related pages
2. **Log rotation:** If `wiki/log.md` exceeds 200 entries, archive entries older than 90 days to `wiki/log-archive-{year}.md`.
3. **Stale action items:** Check `Action-Tracker.md` for items older than 30 days with no update. Flag them for review — either mark complete, update with status, or escalate.
4. **Session context cleanup:** Delete files in `session-context/` older than 30 days, or ingest any durable knowledge into wiki pages first.
5. Report issues found and fix what can be fixed automatically.
6. Suggest raw sources that could fill identified gaps.

## Rules

- Never modify anything in `raw/`. It's immutable source of truth.
- Never ingest or process files in `dashboards/` or `session-context/`. These are operational folders, not knowledge sources.
- Always cite sources when updating wiki pages.
- Keep wiki pages concise and scannable — no fluff.
- Use `[[wiki-links]]` for cross-references (Obsidian-compatible).
- Dates in ISO format (YYYY-MM-DD).
- When in doubt about categorization, prefer the most specific page type.
- Maintain `wiki/index.md` and `wiki/log.md` with every operation.
- Professional but casual tone — match Mac's voice.

## Domain Context

Mac runs Modern Stack Systems, a consulting practice focused on:
- Salesforce architecture and implementation (Sales Cloud, Service Cloud, CPQ, integrations)
- DevOps and CI/CD (GitHub Actions, Salesforce DX, deployment automation)
- AI/MCP tooling and automation
- Cloud architecture and system design
- Business development and go-to-market strategy

The wiki should develop deep knowledge in these areas over time.

**Personal interests** (for article/topic pages):
- Apple hardware and ecosystem (daily driver, cares about new releases and specs)
- AI industry trends, model releases, and tooling evolution
- Dev tools, frameworks, and productivity automation
- Cloud platform evolution and serverless architecture
- Anything Mac clips into `raw/articles/` — if he saved it, it's worth processing

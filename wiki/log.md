# Wiki Log

> Chronological record of all ingest, update, and maintenance operations.

## 2026-04-10

- **Operation:** Wiki initialized
- **Details:** Created folder structure, schema, index, and log files. Ready for first ingest.
- **Pages created:** 0
- **Pages updated:** 0

## 2026-04-10 — Initial Bulk Ingest

- **Operation:** INGEST — First full scan of all raw sources and meeting notes
- **Sources processed (16 files):**
  - `raw/projects/hms-capacity-planning/meadow-database-schema.md`
  - `raw/projects/hms-capacity-planning/meadow-open-items.md`
  - `raw/projects/hms-capacity-planning/schema.txt`
  - `Meeting Notes/High Meadows/Internal/2026-04-09 - HMS Product Strategy.md`
  - `Meeting Notes/High Meadows/Internal/2026-04-09 - Website Sync.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-06 - Bug IAM Service Type Showing Single Value per Record Type.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-09 - MAI Dev DSU.md`
  - `Meeting Notes/Modern Stack Systems/2026-04-09 - Recruiter Call - Brittany Fetzner - Salesforce QA Dev Role.md`
  - `Meeting Notes/Stand8/F2-Cetera/2026-04-08 - Quick Sync - F2 Connor.md`
  - `Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop.md`
  - `Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync.md`
  - `Meeting Notes/Stand8/NBCU/2026-04-08 - NBCU STAND 8 Agentforce POC.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Quick Sync - Validation Workaround.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Team Sync - Sprint Review.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-09 - Stitch & CREtelligent - Tech Team Huddle.md`
  - `project-mapping.md` (reference context)
- **Pages created (23):**
  - **Clients (7):** harvey, nbcu, f2-cetera, litify, cretelligent, high-meadows-mai, hms-capacity-planning
  - **Entities (4):** stand8, stitch, high-meadows, modern-stack-systems
  - **Tools (6):** agentforce, data-cloud, claude-ai, meadow-app, supabase, connect-api
  - **Concepts (3):** case-migration, knowledge-management, multi-agent-orchestration
  - **Patterns (3):** json-deserialize-refactor, site-product-joiner, validation-rule-workaround
- **Pages updated:** 0 (all new)
- **Summary:** Bootstrapped the entire wiki from 4 raw project files, 12 meeting notes, and the project mapping file. Covers 7 active client engagements across 3 partner firms (Stand8, Stitch, High Meadows direct), 6 tools/platforms, 3 reusable solution patterns, and 3 domain concepts. Key themes: Agentforce adoption across multiple clients (Harvey, NBCU, Litify), MCP limitations as a recurring constraint, Meadow app cloud migration roadmap, and CREtelligent's complex API integration and data model work.

## 2026-04-10 — Scheduled Ingest #2

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (9 files):**
  - `raw/projects/hms-capacity-planning/user-stories.md`
  - `raw/articles/Forget the M4 Shortage M5 Mac mini and Mac Studio Leaked for WWDC 2026.md` (skipped — tech news article, not consulting-relevant)
  - `Meeting Notes/High Meadows/Internal/2026-04-10 - HMS Office Hours.md`
  - `Meeting Notes/Stand8/F2-Cetera/2026-04-09 - Project Keystone - F2 Cetera Daily Working Session.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-09 - MAI Dev Session - Type Field and Address Auto-Population.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-10 - MAI Dev DSU.md`
  - `Meeting Notes/Modern Stack Systems/2026-04-10 - The Meeting of the Minds - Peer Sync.md`
  - `Meeting Notes/High Meadows/Internal/2026-04-02 - Lefavi Weekly Call.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-02 - CREtelligent Internal Team Sync.md`
- **Pages created (3):**
  - **Concepts (1):** flex-dash
  - **Tools (1):** marketing-cloud
  - **Entities (1):** domatz-victor
- **Pages updated (10):**
  - **Clients (4):** f2-cetera (Marketing Cloud blocker, sprint process, Project Keystone), high-meadows-mai (Type field workaround, fund object permissions, staffing crisis, address auto-population), hms-capacity-planning (22 user stories, Sanity SSO, office hours IT context), cretelligent (QBR, cert expiration, web form, Altruist)
  - **Entities (3):** high-meadows (email migration, SharePoint, Flex-Dash pause, staffing decisions), modern-stack-systems (AI workflow, peer network, financial updates, culture notes), stitch (added CREtelligent internal sync source)
  - **Tools (3):** meadow-app (user stories detail, Sanity SSO), claude-ai (second brain system, morning briefing, QuickBooks connector), supabase (no content change, context enriched via user stories)
- **Key changes:**
  - SSO strategy for Meadow updated from Entra/MSAL to Sanity SSO (@sanity/client SDK)
  - Full 22-story backlog with acceptance criteria now documented in hms-capacity-planning
  - Flex-Dash product documented as new concept page with licensing strategy
  - Marketing Cloud provisioning blocker tracked for F2-Cetera
  - MAI staffing crisis: Argentine dev team being replaced, all Flex-Dash capacity redirected
  - Peer network documented (Domatz Victor, Bradyl/ABL Consulting)
- **Summary:** Second ingest run processed 8 new files (1 raw source + 7 meeting notes, 1 article skipped). Added significant depth to Meadow roadmap with full user story acceptance criteria, documented the Flex-Dash licensing strategy and MAI staffing pivot, and captured the F2-Cetera Marketing Cloud provisioning blocker. CREtelligent wiki enriched with QBR maintenance items and Altruist roadmap. MSS entity page now includes AI workflow details and peer network context.

## 2026-04-10 — Lint Pass #1

- **Operation:** LINT — Post-initial-ingest health check
- **Broken links:** 0
- **Missing from index:** 0
- **Pages without sources:** 0
- **Cross-reference gaps found:** 3
  - cretelligent.md was missing links to pattern pages (validation-rule-workaround, json-deserialize-refactor, site-product-joiner, connect-api)
  - Minor: agentforce.md and claude-ai.md have slightly abbreviated source paths
  - Minor: meadow-app.md and hms-capacity-planning.md have overlapping content (expected — tool page vs client page)
- **Fixes applied:** Added 4 missing cross-references to cretelligent.md Related Pages section

## 2026-04-10 — Schema Update: Articles & Topics

- **Operation:** SCHEMA UPDATE — Added wiki/articles/ and wiki/topics/ categories
- **Changes:**
  - Updated SCHEMA.md with Article Page format (summary, key takeaways, why it matters, tags)
  - Updated SCHEMA.md with Topic Page type (accumulator pages for personal interests)
  - Added tag taxonomy: tech, ai, salesforce, learning, devops, cloud
  - Updated INGEST workflow to always process raw/articles/ (never skip non-consulting content)
  - Updated scheduled task prompt to include article/topic processing
- **Pages created (2):**
  - **Articles (1):** m5-mac-mini-mac-studio-wwdc-2026 — first article page, Apple 2026 Mac lineup leak
  - **Topics (1):** apple-hardware — first accumulator topic page
- **Pages updated:** index.md (added Articles and Topics sections, total pages now 28)
- **Summary:** Expanded the Second Brain to capture personal interests and learning alongside consulting work. Articles clipped into raw/articles/ will now be fully processed into wiki/articles/ pages with summaries and takeaways, and feed into wiki/topics/ accumulator pages. Retroactively processed the M5 Mac article that was skipped in Scheduled Ingest #2.

## 2026-04-10 — Lint Pass #2

- **Operation:** LINT — Post-scheduled-ingest health check
- **Broken links:** 0
- **Missing from index:** 0
- **Orphaned pages:** 0
- **Pages without sources:** 0 (index.md excluded — meta page)
- **Cross-reference gaps:** 0
- **Fixes applied:** None needed — wiki is clean
- **Notes:** All 26 wiki pages have valid sources, all [[wiki-links]] resolve, all pages listed in index. Total pages: 26.

## 2026-04-11 — Article Ingest: LLM Knowledge Management Pattern

- **Operation:** INGEST — Three articles on LLM-powered knowledge management and Obsidian ecosystem
- **Sources processed (3 files):**
  - `raw/articles/Andrej Karpathy Method Claude Skills + Obsidian Explained.md`
  - `raw/articles/Claude + Obsidian have to be illegal.md`
  - `raw/articles/These 6 FREE Obsidian PLUGINS quietly replace $200 worth of PAID APPS.md`
- **Pages created (5):**
  - **Articles (3):**
    - andrej-karpathy-method-claude-skills-obsidian — LLM wiki pattern: raw/ → wiki/ → reports/, Claude Code Skills, MCP-Obsidian, Obsidian as knowledge IDE
    - claude-obsidian-illegal — Practical implementation, maintenance automation, Memory.md seeding, Morning briefing CLI examples, Vannevar Bush Memex connection
    - obsidian-plugins-replace-paid-apps — Six free plugins (Dataview, Tasks, Kanban, Calendar, Templater, Git) that replace Notion, Todoist, Trello, Fantastical, TextExpander, backups
  - **Topics (2):**
    - llm-knowledge-management — New accumulator page for the LLM wiki pattern, core operations (ingest/query/lint), why it works, stack & tools
    - obsidian-ecosystem — New accumulator page for Obsidian plugins, integration patterns (Claude, Web Clipper, Git), workspace setup, why it works
- **Pages updated (2):**
  - **Tools (1):** claude-ai — Added knowledge management with Claude section, cross-links to new topic pages, updated timestamp
  - **Meta (1):** index.md — Added 3 article pages and 2 topic pages, updated total page count to 33
- **Cross-references created:**
  - All 3 article pages cross-link to both topic pages
  - Both topic pages cross-link to all 3 article pages
  - Topic pages cross-link to each other and to claude-ai.md
  - claude-ai.md now links back to topic pages and foundational article pages
- **Key themes:**
  - **Stateful vs. stateless:** Shift from ephemeral chat sessions to persistent, compounding knowledge graphs
  - **Maintenance as the bottleneck:** Why traditional wikis fail (humans can't keep up with bookkeeping), how LLMs solve it permanently
  - **Consolidation:** One vault for notes, tasks, planning, tracking, backups, automation instead of five scattered apps
  - **The Obsidian stack:** Dataview (structure) + Templater (speed) + Tasks (tracking) + Git (reliability) = complete personal OS
  - **Vannevar Bush Memex connection:** 1945 vision of associative trails and private curation — finally solvable with LLM maintenance
- **Relevance to Mac's work:**
  - Direct application to consulting practice: client context system, decision logs, action trackers, meeting transcript auto-processing
  - Personal learning: articles and research building compounded knowledge graph over time instead of disappearing
  - Operational automation: morning briefings, lint passes, and wiki maintenance become commands not chores
  - Finetuning endgame: long-term corpus for custom model training on domain expertise
- **Summary:** Ingested three foundational articles on the emerging LLM wiki pattern plus Obsidian ecosystem. Created two new topic accumulator pages to track this rapidly-evolving space. The pattern represents a significant shift in how knowledge work can be structured — from ephemeral stateless AI usage to persistent, compounding knowledge bases maintained automatically by LLMs. Direct applicability to consulting practice (project memory, decision logs, client context), personal learning (research compounding), and operational efficiency (automation of maintenance). Updated claude-ai.md to reflect this new dimension of Claude usage.

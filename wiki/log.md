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

## 2026-04-12 — Lint Pass #3 (Scheduled Weekly)

- **Operation:** LINT — Weekly automated health check
- **Broken links found (3):**
  - `[[scheduled-tasks]]` — referenced in 4 pages (llm-knowledge-management, obsidian-ecosystem, andrej-karpathy-method-claude-skills-obsidian, claude-obsidian-illegal)
  - `[[MCP-Obsidian]]` — referenced in 2 pages (claude-ai, obsidian-ecosystem)
  - `[[productivity-systems]]` — referenced in 1 page (modern-stack-systems)
- **Orphaned pages (1):**
  - `concepts/knowledge-management.md` — no other pages link to it. Likely superseded by `topics/llm-knowledge-management.md`. Needs Mac's review.
- **Pages without sources (28/33):**
  - Only 5 pages have proper Sources sections: cretelligent, connect-api, hms-capacity-planning, f2-cetera, andrej-karpathy-method-claude-skills-obsidian
  - All other pages are missing source citations. This is a systemic gap from initial bulk ingest.
- **Stale content:** None — all pages updated within last 2 days.
- **Missing cross-references found (3):**
  - litify.md missing links to [[agentforce]] and [[data-cloud]]
  - nbcu.md missing links to [[agentforce]], [[data-cloud]], [[stand8]]
  - knowledge-management.md missing link to [[llm-knowledge-management]]
- **Index consistency:** Clean — all 33 pages listed, all entries match files.
- **Log rotation:** Not needed (8 entries, well below 200 threshold).
- **Session context:** Empty (only .gitkeep). No cleanup needed.
- **Auto-fixes applied:**
  - Added [[agentforce]] and [[data-cloud]] cross-references to litify.md
  - Added [[agentforce]], [[data-cloud]], and [[mcp]] cross-references to nbcu.md
  - Added [[llm-knowledge-management]] cross-reference to knowledge-management.md
- **Issues for Mac's review:**
  - 3 broken links need stub pages created: scheduled-tasks, MCP-Obsidian, productivity-systems
  - concepts/knowledge-management.md may be redundant with topics/llm-knowledge-management.md — merge or differentiate?
  - 28 pages missing Sources sections — recommend adding source citations during next ingest cycle

## Lint Issues

**Needs human review:**

1. **Broken links (3):** `[[scheduled-tasks]]`, `[[MCP-Obsidian]]`, `[[productivity-systems]]` — create stub pages or remove references?
2. **Orphaned page:** `concepts/knowledge-management.md` — merge into `topics/llm-knowledge-management.md` or keep as separate consulting-focused concept?
3. **Missing sources (28 pages):** Systemic gap from initial ingest. Most pages lack `## Sources` sections citing the raw files or meeting notes they were derived from. Recommend backfilling during next full ingest or dedicated sources pass.

## 2026-04-13 — Scheduled Ingest #3

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (6 files):**
  - `raw/articles/New Agentforce Builder Released in Beta Our First Thoughts.md`
  - `Meeting Notes/High Meadows/F2-Cetera/2026-04-13 - Project Keystone Daily Stand-up.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-13 - MAI Dev DSU.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-13 - New Fund Account Questions.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-10 - CREtelligent Weekly Status and Project Sync.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-13 - Internal CREtelligent Weekly Sync.md`
- **Pages created (2):**
  - **Articles (1):** new-agentforce-builder-beta — Agent Script, Agent Canvas, testing improvements, beta access details
  - **Topics (1):** salesforce — New accumulator page for Salesforce ecosystem news (platform releases, Agentforce Builder, MCP status)
- **Pages updated (5):**
  - **Clients (3):** f2-cetera (Sprint 2 demo readiness, wealth management automation, custom settings, Advice Works slip, Brady onboarding); high-meadows-mai (Apr 13 DSU detail — active blockers on 1293/1120, QA findings, Donna demo backlog, ticket ownership/David Toursack); cretelligent (demo day results — Quote Matrix approved, Add Vendor adjustments, Choir template ID, DocHub architecture, contact create automation QA)
  - **Tools (1):** agentforce (new builder beta — Agent Script, Agent Canvas, inline actions, testing improvements)
  - **Meta (1):** index.md (added new-agentforce-builder-beta article page and salesforce topic page; updated total to 35)
- **Key changes:**
  - F2-Cetera meeting notes now appearing under `Meeting Notes/High Meadows/F2-Cetera/` (previously `Stand8/F2-Cetera/`) — folder routing change, likely different transcription source
  - Quote Matrix LWC approved for current sprint with clear enhancement backlog captured
  - DocHub integration architecture documented for the first time
  - New Agentforce Builder Agent Script capability is directly relevant to Harvey and other Agentforce engagements
- **Summary:** Processed 4 new meeting notes (across F2-Cetera, MAI x2, CREtelligent x2) plus one Salesforce platform article. F2-Cetera sprint 2 on track with demo tomorrow; MAI has two significant active blockers (SSN/sharing) pending David consultation; CREtelligent demo day results captured with clear approval decisions and enhancement scope. Created new `salesforce` topic page as an accumulator for platform news — companion to the existing `agentforce` tool page.

## 2026-04-13 — Scheduled Ingest #4

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (2 files):**
  - `Meeting Notes/Stand8/Litify/2026-04-13 - Internal Litify SOW Discussion.md`
  - `Meeting Notes/Stand8/NBCU/2026-04-15 - NBCU STAND 8 Agentforce POC.md`
- **Pages created:** 0
- **Pages updated (2):**
  - **Clients (2):**
    - litify — added full SOW scope section (feature hour estimates, ~120 hrs total, 8-week timeline, scope decisions, exclusions, open action items)
    - nbcu — added 2026-04-15 kickoff architecture review (confirmed pricing recommendation scope, rescheduled walkthrough for Wed 1:30 PT)
- **Key changes:**
  - Litify SOW scope now documented end-to-end: 5 feature areas, testing/support/training allocations, 8-week plan at 20 hrs/week, explicit exclusions list
  - NBCU POC pricing-recommendation scope confirmed; full architecture walkthrough rescheduled pending Karthi attendance
  - NBCU meeting source file dated 2026-04-15 but actual meeting occurred 2026-04-13 (Granola transcription timestamp glitch); wiki corrected to 2026-04-13
- **Summary:** Light incremental ingest. Two new meeting notes, both client-facing updates under Stand8. Litify wiki page now carries the full SOW working draft ahead of the Wed/Thu review with Evan March. NBCU entry updated with the rescheduled Agentforce architecture session.

## 2026-04-13 — Wiki Restructure: Projects

- **Operation:** RESTRUCTURE — Migrated `wiki/clients/` to `wiki/projects/` with new two-file pattern per project
- **Motivation:** Single monolithic client pages were mixing stable context with point-in-time notes and action items, making them hard to navigate and use as a quick reference.
- **New structure:** Each project gets a subfolder with `context.md` (stable: what we're building, tech stack, contacts, architecture) and `journal.md` (dynamic: rolling weekly summaries, decisions, open questions — newest first).
- **Projects migrated (7):**
  - `wiki/projects/harvey/` — context.md + journal.md
  - `wiki/projects/nbcu/` — context.md + journal.md
  - `wiki/projects/litify/` — context.md + journal.md
  - `wiki/projects/f2-cetera/` — context.md + journal.md
  - `wiki/projects/cretelligent/` — context.md + journal.md
  - `wiki/projects/mai/` — context.md + journal.md (replaces high-meadows-mai)
  - `wiki/projects/meadow/` — context.md + journal.md (replaces hms-capacity-planning)
- **Schema updated:** SCHEMA.md now documents the two-file project pattern with explicit ingest rules (journal prepend, context only for stable changes)
- **Ingest task updated:** second-brain-ingest scheduled task prompt updated to write to `wiki/projects/{name}/journal.md` instead of `wiki/clients/`
- **Old `wiki/clients/` folder:** deprecated and removed
- **index.md updated:** Projects section now lists context + journal links for all 7 projects
- **Total pages:** 49 (14 project pages + 35 shared wiki pages)


## 2026-04-14 — Scheduled Ingest #5

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — 5 files, all already in log
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Scheduled Ingest #4 (2026-04-13). Wiki is current through the 2026-04-13 batch (Litify SOW + NBCU Agentforce POC kickoff). No action required.

## 2026-04-14 — Scheduled Ingest #6

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — 5 files, all already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Scheduled Ingest #5 (2026-04-14 earlier). Wiki remains current through the 2026-04-13 batch. No action required.

## 2026-04-14 — Scheduled Ingest #7

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — 3 files, all already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #6. Wiki remains current through the 2026-04-13 batch. No action required.

## 2026-04-14 — Scheduled Ingest #8

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (6 files):**
  - `Meeting Notes/High Meadows/F2-Cetera/2026-04-14 - Project Keystone Daily Stand-up.md`
  - `Meeting Notes/High Meadows/Internal/2026-04-14 - Entity Role Diagram ERD Sync.md`
  - `Meeting Notes/High Meadows/Internal/Office Hours/2026-04-14 - AI Office Hours.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-14 - MAI Dev DSU.md`
  - `Meeting Notes/Modern Stack Systems/2026-04-14 - AI Office Hours.md` (empty, no ingest content)
  - `Meeting Notes/Stand8/Harvey/2026-04-14 - SOW Review.md`
- **Pages created:** 0
- **Pages updated (5):**
  - **Projects (4):**
    - f2-cetera/journal.md — Apr 14 standup: permission set architecture decision pending, validation implementation functionally equivalent to spec
    - mai/journal.md — Apr 14 DSU: tickets running low pre-demo, deploy freeze noon–3pm, UAT training starting
    - harvey/journal.md — prepended Apr 14 week block: Agent Force for Service SOW finalized (120 hrs base + 18 hrs PM = 138–158 hrs), discovery scoped at ~10 hrs, training docs excluded, case prioritization removed
    - meadow/journal.md — prepended Apr 14 week block: ERD requirements documented (use entity role as junction, reference Altrata diagrams, include standard accounts), website progressing (Sanity CMS live), Meadow identified as 40+ additional stories needed
  - **Tools (0):**
  - **Meta (0):** index.md unchanged (no new pages)
- **Harvey context.md updated:** Agent Force for Service scope details added (discovery breakdown, timeline, documentation approach)
- **Key changes:**
  - F2-Cetera permission set architecture deferred pending Connor/Odie input (job functions vs. record types)
  - Harvey SOW fully priced and scoped pending client approval
  - Meadow requires 40+ additional stories beyond initial 22 — timeline significantly extends from website project
  - HMS website Sanity CMS integration complete and live
  - MAI demo day on 2026-04-14 noon–3pm ET with deploy freeze
- **Mac-owned action items captured in journals:**
  - F2-Cetera: follow up with Connor on validation wording preferences
  - Meadow: create initial ERD iteration from entity role object in sandbox, iterate based on feedback
  - MAI: schedule David call for SSN/sharing rules blocker discussion
- **Summary:** Processed 6 new meeting notes from 2026-04-14. Four projects updated with new week entries. F2-Cetera and MAI active with near-term decisions (permission sets, demo deployment). Harvey SOW finalized with detailed Agent Force for Service pricing and scope. Meadow scope expanded significantly — 40+ additional stories beyond initial 22-story backlog. HMS website with Sanity CMS integration. Unmatched "Michael" meeting (2026-04-14) remains flagged for manual review in project-mapping.md.

## 2026-04-15 — Scheduled Ingest #10

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 net-new (1 duplicate reconciled)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Duplicate reconciled:** `Meeting Notes/Stand8/NBCU/2026-04-13 - NBCU STAND 8 Agentforce POC.md` is the same meeting previously ingested under the mis-timestamped `2026-04-15 - NBCU STAND 8 Agentforce POC.md` (Granola glitch). No new wiki content — updated `wiki/projects/nbcu/journal.md` to reflect the correct Apr 13 date and note the duplicate source files.
- **Pages created:** 0
- **Pages updated (1):** `wiki/projects/nbcu/journal.md` — date correction only
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #9. Reconciled the NBCU 04-13/04-15 duplicate source-file pair into a single Apr 13 journal entry.

## 2026-04-15 — Scheduled Ingest #11

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #10. Wiki remains current through the 2026-04-14 batch (Ingest #9). No action required.

## 2026-04-14 — Scheduled Ingest #9

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (5 files):**
  - `Meeting Notes/High Meadows/MAI/2026-04-14 - Dev Growth.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-14 - Michael.md` (empty — no Granola content; flagged)
  - `Meeting Notes/High Meadows/Internal/HMU/2026-04-14 - Packaging Content for HMU Workshops.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-14 - Stitch CREtelligent Stand Up.md`
  - `Meeting Notes/Stand8/Litify/2026-04-14 - SOW Review.md`
- **Pages updated (5):**
  - `wiki/projects/mai/journal.md` — Apr 14 Dev Growth notes added to current week block (trigger handler convention, LWC local dev, Client Info refactor plan, new tickets needed); flagged ambiguous "Michael" meeting
  - `wiki/projects/cretelligent/journal.md` — Apr 14 stand up added to current week block (enviro Flow→Apex conversion, cost worksheet design, site products tracking)
  - `wiki/projects/litify/journal.md` — Apr 14 SOW Review pricing session added (138–158 hr range, case prioritization removed, ~10 hr discovery)
  - `wiki/projects/litify/context.md` — SOW Scope section updated with finalized hour range, discovery breakdown, documentation scope
  - `wiki/projects/harvey/journal.md` + `harvey/context.md` — **correction**: removed incorrect Apr 14–20 Harvey week block and Agent Force for Service scope from context.md. Prior Ingest #8 mis-filed the Litify SOW Review under Harvey — no `Stand8/Harvey/2026-04-14 - SOW Review.md` file exists; the SOW Review is a Litify meeting.
- **Mac-owned action items added (4):**
  - Review product story for CREtelligent environmental cost worksheet / single-process enviro flow
  - Review and edit deliverable descriptions in Litify Agent Force for Service SOW
  - Refactor MAI Client Info Component — auto-save → explicit Next-button trigger (closes #1085)
  - Confirm which "Michael" the 2:05 PM Apr 14 MAI meeting refers to and re-file if needed
- **Decisions added (6):** Litify SOW pricing, MAI trigger handler convention, MAI LWC local dev standard, MAI Client Info auto-save change, CREtelligent Flow→Apex conversion, CREtelligent environmental cost worksheet design
- **HMU meeting notes:** Apr 14 HMU content packaging meeting discussed Obsidian + MCP knowledge repo, interview-format content strategy, and voice tech for automated video narration. No existing `hms-internal` project page — content captured in log only. Mac action: advance planning for interview-format content participation (deferred, not a firm commitment → not added to Action-Tracker).
- **Index:** no new pages, `wiki/index.md` unchanged
- **Summary:** Processed 5 new meeting notes from 2026-04-14. Three project journals updated (MAI, CREtelligent, Litify). Also corrected a prior ingest error where the Apr 14 SOW Review was mis-filed under Harvey — the meeting is a Litify Agent Force for Service pricing session; Harvey journal and context.md cleaned up, Litify journal and context.md now hold the canonical SOW scope (138–158 hr range).

## 2026-04-15 — Scheduled Ingest #12

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #11. Wiki remains current through the 2026-04-14 batch (Ingest #9). No action required.

## 2026-04-15 — Scheduled Ingest #13

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (2 files):**
  - `Meeting Notes/High Meadows/MAI/2026-04-15 - MAI Dev DSU.md` — empty Granola capture (no content/summary)
  - `Meeting Notes/_Unmatched/2026-04-15 - Andrew Mac.md` — unmatched peer catch-up, not a project meeting
- **Pages updated (1):** `wiki/projects/mai/journal.md` — noted Apr 15 DSU as empty Granola capture in current week block
- **Pages created:** 0
- **Mac-owned action items added:** 0 — the Sutherland-style AI consultant idea from the Andrew/Mac sync is exploratory, not a firm commitment; not added to Action-Tracker
- **Decisions added:** 0
- **Unmatched note:** `_Unmatched/2026-04-15 - Andrew Mac.md` is personal/peer business-dev catch-up (Granola demo, vibe code review pitch idea, Rory Sutherland-style AI consultant demo, Lisbon travel, side contract payments). Attendee `andsmi@gmail.com` does not map to any known project contact — flagged in source file for Mac to confirm identity (possibly peer Victor Domatz or someone else) and update `project-mapping.md` if recurring. No project journal touched since the meeting has no project affiliation.
- **Summary:** Two net-new files since Ingest #12. Both low-signal for the wiki: one empty Granola capture (MAI DSU), one unmatched personal meeting. MAI journal updated with a one-line note; unmatched meeting logged here only.

## 2026-04-15 — Scheduled Ingest #14

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (2 files):**
  - `Meeting Notes/High Meadows/MAI/2026-04-15 - Mac Steven Weekly.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-15 - Stitch CREtelligent Dev Team Sync.md`
- **Pages updated (2):**
  - `wiki/projects/mai/journal.md` — Apr 15 Mac/Steven Weekly added to current week block (dev progress recap, sales process regression, PDF generator coupling risk, team coordination issues)
  - `wiki/projects/cretelligent/journal.md` — Apr 15 Dev Team Sync added to current week block (product-centric data model via Site Product, one-enviro-site-per-location rule, MuleSoft decision, cost worksheet category cleanup, product payload research story)
- **Mac-owned action items added (3):**
  - Start research story on product payload landmines before full Salesforce/Connect integration (cretelligent, due 2026-04-16)
  - Diagnose MAI sales process system regression (collapsing fields, non-populating sections, dev/UAT divergence)
  - Evaluate PDF generation alternative before removing MAI's current tightly-coupled system
- **Decisions added (6):** MAI hold demos until fixes land; MAI evaluate PDF alternative; CRE product-centric data model; CRE one enviro site per location; CRE use MuleSoft for Connect integration; CRE cost worksheet category cleanup
- **Index:** no new pages; `wiki/index.md` unchanged
- **Summary:** Two net-new meeting notes since Ingest #13. MAI journal picked up the Apr 15 Mac/Steven weekly (regression + PDF coupling + team coordination). CREtelligent journal picked up the Apr 15 Dev Team Sync covering a significant architectural shift to a product-centric data model and a MuleSoft-based integration approach, plus cost worksheet category cleanup. Three Mac-owned actions added, six strategic decisions logged.

## 2026-04-15 — Scheduled Ingest #15

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log (NBCU `2026-04-15 - NBCU STAND 8 Agentforce POC.md` is the reconciled Granola-timestamp duplicate of the Apr 13 meeting, already handled in Ingest #11)
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/_Unmatched/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #14. Wiki remains current. No action required.

## 2026-04-16 — Scheduled Ingest #16

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — does not exist (empty/removed)
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
  - `Meeting Notes/_Unmatched/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #15 (2026-04-15). Wiki remains current through the 2026-04-15 batch. No action required.

## 2026-04-16 — Scheduled Ingest #17

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — 5 files, all already in log (note: `meadow-open-items.docx` is the source document for the already-ingested `.md` version)
  - `raw/discovery/` — does not exist
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
  - `Meeting Notes/_Unmatched/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #16 (2026-04-16 earlier). Wiki remains current through the 2026-04-15 batch (Ingest #14). No action required.

## 2026-04-16 — Scheduled Ingest #18

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
  - `Meeting Notes/_Unmatched/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Note:** Discovered `Clippings/` folder at vault root (outside defined scan scope) containing 6 files dated 2026-04-15, including STITCH-83089 Site Product Object & Pricing Component — detailed Linear ticket doc with architecture decisions for CREtelligent's site product data model and pricing LWC. Not processed (out of scope per schema). Mac may want to move relevant files to `raw/projects/` for future ingest.
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #17. Wiki remains current through the 2026-04-15 batch. One flag: `Clippings/` folder has unprocessed CREtelligent project docs that may be worth ingesting.

## 2026-04-16 — Scheduled Ingest #19

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (6 files):**
  - `Meeting Notes/High Meadows/F2-Cetera/2026-04-16 - Project Keystone Daily Stand-up.md`
  - `Meeting Notes/High Meadows/MAI/2026-04-16 - Impromptu Call [Fathom].md`
  - `Meeting Notes/High Meadows/MAI/2026-04-16 - MAI Dev DSU.md`
  - `Meeting Notes/Modern Stack Systems/2026-04-15 - Andrew Mac [Fathom].md` (no Fathom summary returned; parallel Granola file already in log, no wiki action)
  - `Meeting Notes/Stitch/Cretelligent/2026-04-16 - AP - MN - CREtelligent Sync.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-16 - AP - MN - CREtelligent Sync [Fathom].md` (same meeting as Granola — merged into single journal entry)
- **Pages created:** 0
- **Pages updated (3):**
  - `wiki/projects/f2-cetera/journal.md` — Apr 16 standup added to current week block: sandbox licenses unblocked (37 post-renewal), three-group permission set strategy, affiliate onboarding/growth engine design direction, RPS/CRPS unification, legacy wealth strategies fold-in, Brian's K1/mailing cleanup confirmed no-impact, Mac cleared to deploy UAT
  - `wiki/projects/mai/journal.md` — Apr 16 Dev DSU + Impromptu Call added to current week block: prospect address go-live approach (replace OOTB with existing custom Address component), related-person address redesign deferred post go-live, hold prospect UAT deploy and bundle with Nicole's changes, fund assignment retest urgency, QA pass for 1097/1199/1222, 1054 + 1221 handoffs
  - `wiki/projects/cretelligent/journal.md` — Apr 16 AP/MN Sync added to current week block: Site Product object work, Site Price LWC scaffolding, payload blocker (expected tomorrow), pricing stays in CREtelligent (SF stamps), Automated Report Apex-driven cost rollup, modular service-class architecture, one-time + monthly batch product catalog load
- **Mac-owned action items added (5):**
  - f2-cetera: Deploy approved UAT changes from prospect work
  - f2-cetera: Continue affiliate onboarding + growth engine design with June; circle back with Connor on TRPG-preserving vs. APP-style approaches
  - mai: Review Nicole's person-account tickets (once Aisha creates them) and flag implementation issues before build
  - mai: Hold prospect UAT deploy until address refactor direction finalized; bundle with Nicole's person-account changes
  - mai: Review new address modal ticket for feasibility and conflicts (with Brian)
  - cretelligent: Build Site Product object (fields, lookups, View/Edit permissions) + Site Verification + EnviroCost fields
  - cretelligent: Build Site Price LWCs (Site record edit + Opportunity nested related list)
- **Decisions added (13):**
  - f2-cetera (3): consolidated permission set groups, opportunity-based affiliate growth model, RPS/CRPS unification
  - mai (4): prospect address go-live approach, related-person address deferred, hold/bundle prospect UAT deploy, fund assignment retest required
  - cretelligent (6): Site Product junction object, pricing logic stays in CREtelligent, Automated Report Apex rollup, modular service-class architecture, product catalog load strategy, hold Apex build pending payload
- **Notes:**
  - `2026-04-15 - Andrew Mac [Fathom].md` returned no Fathom summary; Granola version (`2026-04-15 - Andrew Mac.md`) appears to have been moved from `_Unmatched/` into `Modern Stack Systems/` since Ingest #13. No project journal update — same unmatched peer catch-up already logged. Attendee `andsmi@gmail.com` still needs routing confirmation.
  - Both Granola and Fathom versions of the Apr 16 AP/MN CREtelligent Sync describe the same meeting and were merged into one journal entry.
- **Summary:** Processed 6 net-new meeting files from Apr 16. Three project journals advanced (F2-Cetera, MAI, CREtelligent) with significant architectural and scope decisions across all three: F2-Cetera landed consolidated permission sets and an opportunity-based affiliate model; MAI locked in a pragmatic pre-go-live prospect address approach with the larger related-person redesign deferred; CREtelligent moved to Site Product junction + Apex-rollup automated reports + modular service-class architecture, blocked on updated payload due tomorrow. Five Mac-owned actions added (two F2-Cetera, three MAI, plus two CREtelligent build tasks), thirteen strategic decisions logged.

## 2026-04-16 — Scheduled Ingest #20

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (1 file):**
  - `Meeting Notes/High Meadows/F2-Cetera/2026-04-16 - Brady Mac 1-1.md`
- **Pages created:** 0
- **Pages updated (1):**
  - `wiki/projects/f2-cetera/journal.md` — Apr 16 Brady/Mac 1:1 added to current week block. Not project work — Brady walked Mac through his ICS-based calendar sync side project (targets enterprise tenants that block third-party OAuth, filling the gap Reclaim can't cover). Triggered by a duplicate meeting invite that persisted on Brady's calendar after Mac canceled.
- **Mac-owned action items added:** 0 (lone action item is trivial calendar hygiene — clean up lingering ghost event — not project work, skipped per Action-Tracker threshold)
- **Decisions added:** 0 (none captured in source)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all processed
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all already in log
  - `Meeting Notes/Modern Stack Systems/` — all already in log
- **Summary:** One net-new meeting file since Ingest #19 — a Brady/Mac 1:1 that was effectively an informal side-project chat (Brady's calendar sync tool) rather than F2 delivery work. Noted in F2-Cetera journal for completeness, no Action-Tracker or Decision-Log updates. Wiki otherwise current through the Apr 16 batch.

## 2026-04-16 — Scheduled Ingest #21

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (2 files, same meeting):**
  - `Meeting Notes/Stitch/Cretelligent/2026-04-16 - INTERNAL CREtelligent Team Sync.md` (Granola)
  - `Meeting Notes/Stitch/Cretelligent/2026-04-16 - INTERNAL CREtelligent Team Sync [Fathom].md` (Fathom — merged into the same journal entry)
- **Pages created:** 0
- **Pages updated (1):**
  - `wiki/projects/cretelligent/journal.md` — Apr 16 Internal Team Sync (w/ Andrew + Obed) added to current week block: flow-to-Apex migration continuation, product-to-cost routing locked in, Product2 vs Site Product field split, EnviroCost Worksheet field cleanup against updated workbook (new Municipality field + renames/deletes), cost rollup chain reconfirmed, field-work split between Obed (EnviroCost) and Mac (Site Product), Conga #1 / DocHub next, Lucid→Miro diagram export, VS Code prod auth
- **Mac-owned action items added (1):**
  - cretelligent: Own Site Product field mapping — clean up per updated mapping workbook, ping Obed when done
- **Decisions added (6):**
  - Product-to-cost routing (Automated Report → third-party cost only; EnviroSite products → EnviroCost Worksheet)
  - Product2 (catalog) vs Site Product (order-specific) field split
  - Product number not unique on Product2 — uniqueness at Site Product level
  - Field-work split: Obed owns EnviroCost Worksheet, Mac owns Site Product mapping
  - Conga doc gen priority #1; DocHub next team focus
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all already in log
  - `Meeting Notes/Stitch/Cretelligent/` — two net-new INTERNAL Team Sync files processed (Granola + Fathom same meeting)
  - `Meeting Notes/Modern Stack Systems/` — all already in log
- **Summary:** One net-new meeting (captured via both Granola and Fathom, merged). CREtelligent journal advanced with another Apr 16 entry focused on flow-to-Apex continuation, product-to-cost routing rules, Product2/Site Product field split, and a clean work-split between Obed and Mac on the field cleanup against the updated mapping workbook. One Mac-owned action logged (Site Product field mapping). Six strategic decisions captured. Payload from CREtelligent remains the blocker for the Apex build.

## 2026-04-17 — Scheduled Ingest #22

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — 5 files, all already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
  - `Meeting Notes/_Unmatched/` — folder not present / empty
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #21 (2026-04-16). Wiki remains current through the Apr 16 batch. No action required.

## 2026-04-17 — Scheduled Ingest #23

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (9 files):**
  - `Meeting Notes/High Meadows/F2-Cetera/2026-04-16 - Cetera Stand Up [Fathom].md` (Fathom — same meeting as the Apr 16 Granola standup already in log; merged, no new journal block)
  - `Meeting Notes/High Meadows/MAI/2026-04-16 - MAI Stand up [Fathom].md` (Fathom — same meeting as the Apr 16 MAI Dev DSU Granola already in log; merged, no new journal block)
  - `Meeting Notes/High Meadows/MAI/2026-04-17 - MAI Dev DSU.md`
  - `Meeting Notes/Modern Stack Systems/2026-04-17 - Meeting of the Minds.md` (peer sync on Cowork/scheduled tasks/second brain; no project affiliation — logged only)
  - `Meeting Notes/Stand8/Litify/2026-04-17 - Ryan Liana Chat.md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-17 - Impromptu Zoom Meeting [Fathom].md`
  - `Meeting Notes/Stitch/Cretelligent/2026-04-17 - Stitch CREtelligent Weekly Status and Project Sync.md`
  - `Meeting Notes/_Unmatched/2026-04-16 - Impromptu Call [Fathom].md` (empty Fathom capture — no content)
  - `Meeting Notes/_Unmatched/2026-04-17 - Impromptu Call [Fathom].md` (empty Fathom capture — no content)
- **Pages created:** 0
- **Pages updated (3):**
  - `wiki/projects/mai/journal.md` — added Apr 17 Dev DSU entry to current week block: custom-address-on-account pattern (writes to Course Analysis), UAT Deployment Collaboration doc adoption, Mac/Federico ticket swap (Federico finishes 1343 first), story-point sizing via Jira filter (~40 unpointed), Tuesday demo bugs going into Jira
  - `wiki/projects/litify/journal.md` — added Apr 17 Ryan/Liana scale-down entry: SOW trimmed to 66 hrs (57 impl + 9 PM), removed knowledge article recommendation/email drafting/case field population, kept case summaries/case resolution/knowledge article creation; two external agent asks sized (40 hrs external, 20 hrs internal similar-case)
  - `wiki/projects/cretelligent/journal.md` — added Apr 17 Weekly Status + Impromptu Zoom entries: Cost Worksheet rename + Site lookup, 28 expense fields w/ budget+actual pairs (estimates lock at proposal), default value strategy (estimates=actuals, "everything else" = 50% sell price → PA cost), actuals roll-up from PA cost only (not Internal Expense), static/manual initial product load (~100+ products) from Travis's key spreadsheet, Blake payload end of next week, current product sheet disregarded pending corrected version, TDX headline: MCP in Agentforce now hosted + non-hosted
- **Mac-owned action items added (9):**
  - mai: Update UAT Deployment Collaboration Google Doc on every deploy
  - mai: Pick up non-fund-account ticket while Federico finishes 1343
  - mai: Load Tuesday demo bug tickets into Jira and review with Michael
  - mai: Align open address ticket with Brian's custom-address-on-account pattern once shared
  - cretelligent: Rename Environmental Cost Worksheet → Cost Worksheet; add lookup to Site
  - cretelligent: Continue Cost Worksheet object config + LWCs; sync with Obed before product load
  - cretelligent: Plan next-week soup-to-nuts walkthrough with Obed (current SF state through quoting → proposal)
  - litify: Stand by for Litify clarifications on KB access and case data structure
- **Decisions added (15):**
  - litify (4): scaled-down 66 hr SOW; removed KB recommendation/email drafting/case field population; external agent 40 hrs; internal similar-case agent 20 hrs
  - mai (4): custom Address object on conversion; Jira filter story-point sizing; UAT Deployment Collaboration doc; Mac/Federico ticket swap
  - cretelligent (7): Cost Worksheet rename + Site lookup; 28 expense fields w/ budget+actual pairs; default value strategy; actuals roll-up source; static/manual initial product load; product table import scope; disregard current product sheet
- **Notes:**
  - The two Fathom-source files for Apr 16 F2-Cetera and MAI standups (640399739 and 640319369) mirror Granola captures already in the log. Net-new specifics (F2-Cetera hybrid Opportunity + custom object model framing, MAI "address manager" idea) are already covered in the existing Apr 16 journal entries; no re-work needed.
  - Apr 17 Meeting of the Minds was a peer sync (no other attendees listed in frontmatter) walking through Mac's Cowork usage — useful content for MSS-internal wiki but doesn't belong in a project journal. Captured here in log; no page created.
  - Two empty `_Unmatched/` Fathom files (2026-04-16 call_id 640512258, 2026-04-17 call_id 641821592) have no summary or transcript — logged for traceability; Mac should review recordings to reroute if needed.
- **Summary:** Processed 7 content-bearing meeting files (plus 2 Fathom dupes and 2 empty _Unmatched captures). Three project journals advanced. Litify took the biggest strategic move — SOW scaled down to 66 hrs plus two agent ballpark estimates in response to Litify pricing pushback. MAI landed a cleaner dev-hygiene trio (UAT doc discipline, ticket swap, Jira-based sizing) and clarified the account address pattern. CREtelligent locked in Cost Worksheet rename, data model, default-value strategy, and static product load plan ahead of Blake's test-env payload end of next week.

## 2026-04-17 — Scheduled Ingest #24

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed (2 files, same meeting):**
  - `Meeting Notes/High Meadows/Internal/Website/2026-04-17 - Website Review.md` (Granola — shorter capture)
  - `Meeting Notes/High Meadows/Internal/Website/2026-04-17 - Website Review [Fathom].md` (Fathom — full meeting including post-Mac-drop portion; merged)
- **Pages created:** 0
- **Pages updated (1):**
  - `wiki/projects/meadow/journal.md` — added Apr 17 Website Review content to current Apr 14–20 week block. Captured pre-launch walkthrough of HMS landing page, Services page, and About section with Brian + CSO. Insights tab stays but labels mirror home page, hero copy tightened (two sentences, drop "purpose-built", 250+ engagements), Services page cleanup (no numbering, no per-tile Learn More, single centered CTA), top-row tile reorder (Business Transformation / AI Design / Data Strategy & Analytics), About page copy changes ("Engage" not "Get in Touch", sales@ email, "indicate interest", "team is comprised of individuals" replacing "advisors"), partnerships section updates (remove Enforge; add Black Diamond, Practify, Orion — hard gate on Bryce sign-off). Phase 1 = direct article links; Phase 2/3 for custom write-ups. LinkedIn RIA posts get expanded into full articles for industry publication.
- **Mac-owned action items added (4):**
  - meadow: Implement all agreed copy/layout changes once CSO sends the consolidated notes doc
  - meadow: Fix broken/dead Insights/article demo links surfaced during the review
  - meadow: Fix Services tile number color contrast
  - meadow: Align Insights page section labels with home page (Activity/News, Thought Leadership)
- **Decisions added (6):**
  - meadow (6): Phase 1 direct-link launch; Services page cleanup (no numbering, no per-tile CTAs); top-row tile order; replace "advisors" to avoid RIA conflict; partnerships section updates w/ hard gate; expand LinkedIn RIA posts into publication articles
- **Notes:**
  - HMS website work tracked in `wiki/projects/meadow/` per precedent set in Ingest #8 — there's no `hms-internal` project wiki page; website + Meadow + HMS infrastructure all consolidate under the meadow project journal.
  - Granola and Fathom captures of the same meeting were merged. Fathom version is substantially richer because Mac dropped at the 24-minute mark; Brian and the CSO continued and agreed to consolidate remaining changes into a single notes doc rather than re-review synchronously.
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — all files already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — 2 net-new Website Review files processed (Granola + Fathom merged); all other files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all already in log
  - `Meeting Notes/Modern Stack Systems/` — all already in log
  - `Meeting Notes/_Unmatched/` — all already in log
- **Summary:** One net-new meeting captured via both Granola and Fathom, merged into a single entry. HMS website pre-launch review with Brian + CSO landed a long list of copy and layout decisions. Four Mac-owned implementation actions logged pending the CSO's consolidated notes doc. Six strategic website decisions captured. No wiki pages created; index.md unchanged.

## 2026-04-18 — Scheduled Ingest #25

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Sources processed:** 0 (no new files)
- **Scan coverage:**
  - `raw/articles/` — 4 files, all already in log
  - `raw/projects/hms-capacity-planning/` — 5 files (incl. .docx source), all already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
  - `Meeting Notes/_Unmatched/` — all files already in log
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #24 (2026-04-17). Wiki remains current through the Apr 17 batch (latest content: HMS Website Review, MAI Dev DSU, Litify Ryan/Liana scale-down, CREtelligent Weekly Status). No action required.

## 2026-04-18 — Scheduled Ingest #26

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Vault mount:** Pre-granted at `/sessions/*/mnt/Documents` — no fresh `request_cowork_directory` call needed.
- **Sources processed (5 files, all articles):**
  - `raw/articles/2026-04-18T074207-0500-New in Salesforce Developer Edition Agentforce Vibes IDE, Claude 4.5, MCP.md`
  - `raw/articles/2026-04-18T074235-0500-Introducing Web Console (Beta) Code Where You Build on Salesforce.md`
  - `raw/articles/2026-04-18T074249-0500-Building AI Automations with Prompt Builder Structured Outputs.md`
  - `raw/articles/2026-04-18T080457-0500-Salesforce Model Context Protocol Explained How MCP Bridges AI and Your CRM.md`
  - `raw/articles/2026-04-18T082851-0500-Salesforce TDX 2026 – why Salesforce's Headless 360 announcement at TDX is really about operating model transformation.md`
- **Pages created (5):**
  - **Articles (5):**
    - `tdx-2026-agentforce-vibes-claude-mcp-dev-edition` — free Dev Edition gets Agentforce Vibes IDE (browser VS Code), Agentforce Vibes with Claude Sonnet 4.5, and Salesforce Hosted MCP Servers
    - `salesforce-web-console-beta` — Web Console Beta opens 2026-04-14 for in-context debugging and Apex edits
    - `prompt-builder-structured-outputs` — platform-enforced JSON response format via Object-based Lightning types; eliminates JSON.deserialize boilerplate
    - `salesforce-mcp-explained-sweep` — MCP primer + historical (pre-TDX 2026) Salesforce posture + Sweep semantic-layer pitch
    - `tdx-2026-headless-360-operating-model` — Diginomica's strategic take: Headless 360 as operating-model transformation, not feature release
- **Pages updated (5):**
  - **Topics (1):** `salesforce` — added TDX 2026 section (Headless 360, Vibes IDE, Web Console, Hosted MCP GA, Prompt Builder Structured Outputs), updated Notable Articles list
  - **Tools (2):** `agentforce` — added Agentforce Vibes IDE + Vibes + Hosted MCP sections; revised limitations since MCP is no longer beta; expanded Related Pages. `claude-ai` — Claude Sonnet 4.5 as Vibes default model, Dev Edition allocation details, Hosted MCP unblocker
  - **Patterns (1):** `json-deserialize-refactor` — noted Structured Outputs as the preferred path for Prompt Builder LLM responses; manual wrapper classes reserved for non-LLM API integrations
  - **Meta (1):** `index.md` — added 5 article entries; updated total page count to 54 (14 project + 40 wiki)
- **Mac-owned action items added:** 0 (articles — no direct commitments; surfaced opportunities captured in wiki pages)
- **Decisions added:** 0 (no strategic project-level decisions; these are platform/news updates)
- **Key themes / implications:**
  - **TDX 2026 unblocks Hosted MCP:** long-running MCP-beta constraint across Harvey, NBCU, Litify is now resolved — worth retesting parked doc-gen and external-tool flows.
  - **Claude-first coding inside Salesforce:** Agentforce Vibes defaults to Claude Sonnet 4.5 — first-class Anthropic integration in Salesforce tooling, validates MSS's agent-agnostic stack.
  - **Free Dev Edition access:** 110 requests / 1.5M tokens per month through 2026-05-31 for hands-on Vibes + MCP testing at zero cost.
  - **Structured Outputs supersedes manual JSON wrappers** for Prompt Builder workflows — Harvey email intent parsing, Litify case classification, CREtelligent Prompt Builder work all should use Lightning types going forward.
  - **Operating model framing** (Headless 360) is a useful reframe for Harvey's 3-year AI roadmap and client discovery conversations — "operating debt" vs. "data debt" as a consulting lens.
  - **Sweep as competitor/complement signal:** semantic layer + agent-ready tooling is the space MSS could credibly compete in; worth tracking.
- **Summary:** Processed 5 net-new articles, all dated 2026-04-18 and clipped around the TDX 2026 coverage window. Created 5 article pages and updated the salesforce topic + agentforce/claude-ai tools + json-deserialize-refactor pattern + index. No new meeting notes or project docs since Ingest #25. TDX 2026 is the biggest Salesforce ecosystem inflection since the wiki was initialized — Hosted MCP GA, Claude Sonnet 4.5 in Vibes, and Headless 360 all reshape how current and future Agentforce engagements should be scoped.


## 2026-04-18 — Wiki Restructure: Clients → Projects Merge (Round 2)

- **Operation:** MERGE + REMAP — Collapsed `wiki/clients/` into `wiki/projects/` (round 2 cleanup)
- **Motivation:** 1:1 redundancy between folders plus `cetera/` ↔ `f2-cetera/` duplicate. Single folder = single source of truth.
- **Actions:**
  - Deleted 7 `wiki/clients/*.md` files (cretelligent, f2-cetera, harvey, high-meadows-mai, hms-capacity-planning, litify, nbcu). Content merged into new `wiki/projects/{proj}/overview.md` per project.
  - Each overview.md carries frontmatter aliases back to the original client slug so existing `[[cretelligent]]`, `[[hms-capacity-planning]]`, etc. wikilinks resolve cleanly.
  - Deleted `wiki/projects/cetera/stories-f2.md` (duplicate of f2-cetera); `cetera/` folder pruned.
  - Updated `_System/identity.yaml` project_slug_map: `cetera → f2-cetera` and added explicit `f2-cetera → f2-cetera` identity entry.
  - Updated `_System/scripts/story-sync.js` PROJECT_SLUG_MAP to match (v4.1). Sandbox copy mirrored for parity.
- **Resulting structure:** `wiki/projects/{cretelligent|f2-cetera|harvey|internal/{meadow|flex-dash|high-meadow-website}|litify|lnw|mai|nbcu}/` — each with `overview.md` + `context.md` + `journal.md` (+ stories-{ws}.md when applicable).
- **Backward compat:** Frontmatter aliases on overview.md preserve all existing wikilinks. Next story-sync run will write F2 Cetera stories to `projects/f2-cetera/` instead of `projects/cetera/`.
- **Pages/folders removed:** `wiki/clients/` (entire directory), `wiki/projects/cetera/`

## 2026-04-18 — Scheduled Ingest #27

- **Operation:** INGEST — Scheduled scan of raw sources and meeting notes
- **Vault mount:** Pre-granted at `/sessions/*/mnt/Documents` — no fresh `request_cowork_directory` call needed.
- **Sources processed:** 0 (no net-new files)
- **Scan coverage:**
  - `raw/articles/` — 9 files. 8 already in log. 1 file shows in directory listing as `?.md` (8796 bytes, mtime Apr 18 08:28) — confirmed to be the same TDX Headless 360 article already processed in Ingest #26 as `2026-04-18T082851-0500-Salesforce TDX 2026 – why Salesforce's Headless 360 announcement at TDX is really about operating model transformation.md`. The em-dash and curly apostrophe in the filename render as `?` in this sandbox view; content matches the existing `wiki/articles/tdx-2026-headless-360-operating-model.md`. No re-ingest needed.
  - `raw/projects/hms-capacity-planning/` — 5 files (incl. .docx source), all already in log
  - `raw/discovery/` — empty
  - `Meeting Notes/High Meadows/{F2-Cetera, Internal/*, Lefavi, MAI}/` — all files already in log
  - `Meeting Notes/Stand8/{Harvey, Litify, NBCU}/` — all files already in log
  - `Meeting Notes/Stitch/Cretelligent/` — all files already in log
  - `Meeting Notes/Modern Stack Systems/` — all files already in log
  - `Meeting Notes/_Unmatched/` — folder not present in current scan
- **Pages created:** 0
- **Pages updated:** 0
- **Mac-owned action items added:** 0
- **Decisions added:** 0
- **Notes:**
  - The `?.md` filename is a filesystem-display artifact, not a content duplicate. Mac may want to rename the source file in iCloud to a clean ASCII slug (e.g., `2026-04-18-tdx-2026-headless-360-operating-model.md`) so it sorts and displays consistently. Optional cleanup — wiki content is unaffected.
- **Summary:** Clean scan. No new raw sources or meeting notes since Ingest #26. Wiki remains current through the Apr 17 meeting batch and the Apr 18 TDX 2026 article batch. No action required.

## 2026-04-18 — Weekly Lint

- **Operation:** LINT — Scheduled weekly health check
- **Checks run:** project folder completeness, journal/context staleness, shared-wiki staleness, broken `[[wiki-links]]`, index.md consistency, Sources sections, Action-Tracker 30-day staleness + completed-item rotation, Decision-Log recency, log.md rotation (200-entry threshold), session-context cleanup (30-day threshold).

### Fixes applied
- **index.md:** Replaced broken `[[meadow/context]]` · `[[meadow/journal]]` entry with `[[internal/meadow/context]]` · `[[internal/meadow/journal]]` (the actual canonical folder after the earlier `internal/` consolidation).
- **index.md:** Added missing entry for `[[internal/high-meadow-website/context]]` · `[[internal/high-meadow-website/journal]]` — real project, was not indexed.
- **index.md:** Updated totals to 56 pages (16 project pages + 40 wiki pages).
- **Action-Tracker.md:** Moved 3 completed items from Open → Closed (CREtelligent: Add Vendor trigger integration, Quote Matrix modal height; Meadow: Supabase/Vercel credit card setup). Each is tagged `moved by lint 2026-04-18`.

### Flagged for Mac's review

**Empty project folders (no `context.md` / `journal.md`):**
- `wiki/projects/capacity-planning/` — superseded by `internal/meadow/`. Safe to delete.
- `wiki/projects/cetera/` — superseded by `f2-cetera/`. Safe to delete.
- `wiki/projects/flex-dash/` — actual stories at `internal/flex-dash/`. Safe to delete top-level.
- `wiki/projects/meadow/` — superseded by `internal/meadow/`. Safe to delete.

**Partial project folders (stories-only, missing context.md + journal.md):**
- `wiki/projects/internal/flex-dash/` — has `stories-hm.md` only. Create context/journal if this project is still active, otherwise archive stories into `internal/meadow/` or remove.
- `wiki/projects/lnw/` — has `stories-f2.md` only. Project appears in Action-Tracker auto-sync (4 Review-status LNW stories under Litify). If LNW is a distinct engagement from Litify, needs context.md + journal.md; otherwise roll the stories into `litify/`.

**Broken wiki-links with no clear replacement:**
- `wiki/tools/claude-ai.md:21` — `[[MCP-Obsidian]]` (no page). Likely should point to a future MCP-Obsidian integration page or be inlined as plain text.
- `wiki/projects/nbcu/overview.md:47` — `[[mcp]]` (no page). Consider creating a `wiki/tools/mcp.md` page or linking to an existing article (e.g., `[[salesforce-mcp-explained-sweep]]`).
- `wiki/articles/claude-obsidian-illegal.md:30`, `wiki/articles/andrej-karpathy-method-claude-skills-obsidian.md:33`, `wiki/topics/llm-knowledge-management.md:61` — all reference `[[scheduled-tasks]]` (no page). Either create `wiki/concepts/scheduled-tasks.md` or `wiki/patterns/scheduled-tasks.md`, or remove the links.
- `wiki/articles/obsidian-plugins-replace-paid-apps.md:30` — `[[productivity-systems]]` (no page). Same treatment.
- `wiki/projects/internal/high-meadow-website/files/Website-Feedback-2026-04-17.md:11` — `[[context]]` resolves via Obsidian's folder-relative behavior to the sibling `context.md`, so functionally fine; flagged only for awareness.

Aliased links resolve correctly via frontmatter on `overview.md` files — no action needed for `[[hms-capacity-planning]]`, `[[high-meadows-mai]]`, `[[cetera]]`, `[[capacity-planning]]`, `[[meadow-app]]`, `[[mai]]`, `[[mai-crm-build]]`, `[[nbcu]]`, `[[harvey]]`, `[[litify]]`, `[[cretelligent]]`, `[[f2-cetera]]`.

**Pages missing Sources section:**
- `wiki/topics/apple-hardware.md` — accumulator page, likely pulls from article pages it references. Consider adding a Sources block listing the child article pages.
- `wiki/topics/salesforce.md` — same pattern. Consider adding a Sources block.

**Staleness checks:**
- All project `context.md` files last updated 2026-04-13 or later — none stale against the 60-day threshold.
- All project `journal.md` files last updated 2026-04-14 or later — none stale against the 14-day threshold.
- All shared wiki pages (concepts, patterns, tools, entities, articles, topics) last updated 2026-04-10 or later — none stale against the 90-day threshold.

**Action-Tracker 30-day check:** No open items predate the 2026-03-19 cutoff. Oldest open auto-synced story is `IP-8` (Flex Dash View As Feature) at 2026-03-31 — 18 days old, within threshold.

**Decision-Log recency:** Latest entry 2026-04-17 — within the 14-day freshness window. Healthy cadence (34+ entries in the last 14 days).

**Log rotation:** `wiki/log.md` has 36 `##` entries total — well below the 200-entry archive threshold. No rotation performed.

**Session-context cleanup:** `Second Brain/session-context/` contains only `.gitkeep`. Nothing to prune.

**Out-of-schema artifacts observed (informational):**
- `wiki/f2-internal/` — synced Confluence mirror, read-only per its own README; not part of SCHEMA.md but legitimate.
- Project folders include extra files beyond the schema's `context.md` + `journal.md` pair (`overview.md`, `stories-f2.md`, `stories-hm.md`, `files/`). Overview files carry alias frontmatter to resolve legacy `[[slug]]` links and appear to be intentional. No action.

### Summary
Clean lint pass. Two structural index fixes applied, three completed items rotated to Closed. Six legacy/empty project folders flagged for decision (keep as placeholders or delete). Five broken wiki-links and two Source-less topic pages flagged for manual resolution — none are urgent. Wiki, Action-Tracker, and Decision-Log are all in healthy shape heading into the week.

## [2026-04-18] report | MAI Project Overview
- Query: what do i know about the mai project
- Pages consulted: projects/mai/context.md, projects/mai/journal.md, projects/mai/overview.md, projects/mai/stories-f2.md, concepts/flex-dash.md, entities/high-meadows.md
- Report: wiki/reports/mai-project-overview.md

## [2026-04-18] cleanup | Dashboard Audit + Cetera Rename Sweep

- **Trigger:** Mac's directive — "cetera should be cetera not f2-cetera update the mapping... right now its too large and hard to navigate. there is a bunch of empty folders like tags etc"
- **Cetera canonical reset (prior session):**
  - `f2-cetera` → `cetera` everywhere (Action-Tracker, Decision-Log, project journals, project context, Meeting Notes/High Meadows/, quick-capture template, scheduled tasks, project-mapping).
  - Final stale-text scrub this session: `wiki/articles/tdx-2026-headless-360-operating-model.md` + `wiki/articles/salesforce-web-console-beta.md` ("F2-Cetera" → "Cetera" in Why It Matters bullets).
  - Exempt: `log.md` historical entries, `project-mapping.md` deprecated-slugs section, `wiki/projects/cetera/overview.md` aliases frontmatter.
- **Dashboard audit:**
  - **Deleted:** `Today.md` (5-line redirect → folded into Home as "Today's daily note" block). `Wiki Health.md` (redundant with `kb-lint-now` skill + Home "Stale projects" flag; contained broken dataview queries against non-existent `wiki/f2-internal/` and `session-context/`).
  - **Rewrote:** `Home.md` — added Today's daily note block at top, trimmed redundant query repeats (latest meetings + open actions now covered in This Week + daily note), updated Quick Links.
  - **Kept (distinct purpose):** Home, Action-Review (Monday triage), Articles (reading queue), Meetings (Granola/Fathom + unmatched), Projects (per-project health), Stories (Linear + Jira workspace breakdown).
- **Dashboard count:** 8 → 6.
- **Empty-folder note:** Obsidian REST API filters empty directories from `list_files_in_dir` responses, so empty folders aren't directly visible. Mac will need to prune `tags/` (and any other leftover empties) from Obsidian's file tree UI — or via Finder — since I can't target folders the API hides. Flagged for manual cleanup.

---

## [2026-04-18] cleanup | Empty Folder Sweep

- **Trigger:** Mac — "there is a bunch of empty folders like tags etc"
- **Method:** REST API hides empty dirs in listings, so probed-and-deleted by path.
- **Removed (folder existed + empty):**
  - `Second Brain/raw/discovery/`
  - `Second Brain/session-context/`
  - `Meeting Notes/High Meadows/F2-Cetera/` (emptied by cetera rename migration)
  - `Meeting Notes/Stand8/F2-Cetera/` (emptied by cetera rename migration)
- **Checked, did not exist (no-op):**
  - `Second Brain/tags/`, `Second Brain/wiki/tags/`
  - `Second Brain/clients/`, `Second Brain/wiki/clients/`
  - `Second Brain/wiki/f2-internal/`
  - `Meeting Notes/_Unmatched/`
- **Note:** If any empty folders remain visible in Obsidian's file tree that aren't accessible via REST, Mac can prune them directly from the file explorer (right-click → Delete).

---

# Wiki Index

> Master index of all wiki pages. Updated automatically with every ingest operation.

## Projects

Each project has two files: `context.md` (stable — what it is, tech stack, scope) and `journal.md` (dynamic — rolling weekly summaries, decisions, open questions).

- [[harvey/context]] · [[harvey/journal]] — Industrial manufacturing/distribution (Stand8). Salesforce + Agentforce, 3-year AI roadmap, EU expansion, multi-agent orchestration (Einstein + Claude).
- [[nbcu/context]] · [[nbcu/journal]] — NBCUniversal (Stand8). Agentforce POC: content recommendation + sales pricing strategy via Data Cloud.
- [[litify/context]] · [[litify/journal]] — Legal SaaS (Stand8). Agentforce service agent for case triage, KB recommendations, Data Cloud unification. SOW in progress.
- [[f2-cetera/context]] · [[f2-cetera/journal]] — Financial services (Stand8/HMS). Case object migration (Project Keystone), Marketing Cloud journeys, Advice Works integration, FSC standardization.
- [[cretelligent/context]] · [[cretelligent/journal]] — Commercial real estate/environmental (Stitch). Connect API, cost worksheets, Quote Matrix LWC, DocHub, SiteProduct joiner.
- [[mai/context]] · [[mai/journal]] — High Meadows internal insurance SaaS. FSC, case config, IAM service, active UAT backlog.
- [[meadow/context]] · [[meadow/journal]] — High Meadows internal capacity planning app. Cloud migration to Supabase/Vercel, Sanity SSO, AI chat interface roadmap.

## Concepts

- [[case-migration]] — Migrating case objects between Salesforce implementations. Field mapping, record type alignment, validation rule review.
- [[flex-dash]] — High Meadows managed package product. Case logic engine with implementation-fee-only licensing. Development paused for MAI.
- [[knowledge-management]] — AI-powered KB recommendations with Data Cloud unification and human-in-the-loop workflows.
- [[multi-agent-orchestration]] — Using multiple AI agents (Einstein, Claude) with triage routing for complex business processes.

## Patterns

- [[json-deserialize-refactor]] — Replacing fragile manual JSON parsing in Apex with JSON.deserialize and typed wrapper classes.
- [[site-product-joiner]] — Junction object pattern to avoid field explosion on parent records. Per-product pricing, cost, and margin tracking.
- [[validation-rule-workaround]] — Three-step fallback for required picklist fields blocking automated record saves.

## Tools

- [[agentforce]] — Salesforce's AI agent platform. Used across Harvey, NBCU, Litify, CREtelligent. MCP support in beta is key limitation.
- [[data-cloud]] — Salesforce Data Cloud for unifying fragmented data sources. Key to Litify and NBCU engagements.
- [[claude-ai]] — Anthropic's Claude model. Used for email parsing (Harvey), rapid development (HMS), agentic frameworks (MSS).
- [[meadow-app]] — HMS internal capacity planning app. 11-table schema, Clockify/Notion integrations, cloud migration roadmap.
- [[marketing-cloud]] — Salesforce Marketing Cloud. Being provisioned for F2/Cetera (Project Keystone) journey automation.
- [[supabase]] — Open-source PostgreSQL platform. Target database for Meadow migration from SQLite.
- [[connect-api]] — CREtelligent's external API for vendor management, site verification, and order processing.

## Entities

- [[stand8]] — Consulting/staffing partner channeling Harvey, NBCU, F2-Cetera, and Litify engagements to MSS.
- [[stitch]] — Consulting partner for the CREtelligent engagement.
- [[high-meadows]] — Insurance/SaaS company. Internal products (MAI, Meadow), website, product strategy.
- [[modern-stack-systems]] — Mac Nosek's consulting practice. Salesforce, DevOps, AI/MCP, cloud architecture.
- [[domatz-victor]] — Peer consultant. Recurring sync calls with Mac and Bradyl (ABL Consulting). Currently on Saterra project.

## Articles

- [[m5-mac-mini-mac-studio-wwdc-2026]] — Apple's 2026 Mac lineup leaked: five models, M5 Ultra with 512GB unified memory, MacBook Ultra with OLED + touchscreen.
- [[andrej-karpathy-method-claude-skills-obsidian]] — The LLM wiki pattern: raw/ → wiki/ → reports/. Claude as compiler/librarian, Obsidian as knowledge IDE, MCP-Obsidian integration, Claude Code Skills for automation.
- [[claude-obsidian-illegal]] — Practical implementation of the LLM wiki pattern. Maintenance as the bottleneck (solved by LLMs). CLI examples. Memory.md seeding. Morning briefing and Action-Tracker automation. Vannevar Bush Memex connection.
- [[obsidian-plugins-replace-paid-apps]] — Six free plugins that replace Notion, Todoist, Trello, Fantastical, TextExpander, and backups: Dataview, Tasks, Kanban, Calendar, Templater, Obsidian Git.
- [[new-agentforce-builder-beta]] — Salesforce's redesigned Agentforce Builder in beta: Agent Script for deterministic logic, Agent Canvas for visual no-code editing, improved testing and debugging.

## Topics

- [[apple-hardware]] — Apple hardware releases, leaks, and ecosystem developments.
- [[llm-knowledge-management]] — Using LLMs to build and maintain persistent wikis. The Karpathy method, maintenance automation, finetuning endgame.
- [[obsidian-ecosystem]] — Local-first markdown IDE with plugins. Graph view, backlinks, Dataview, Tasks, Kanban, Calendar, Templater, Git. MCP-Obsidian integration for Claude.
- [[salesforce]] — Salesforce platform news, product releases, and ecosystem developments. Agentforce Builder beta, MCP status, enterprise AI direction.

---
*Last updated: 2026-04-13*
*Total pages: 49 (14 project pages + 35 wiki pages)*

# Wiki Index

> Master index of all wiki pages. Updated automatically with every ingest operation.

## Projects

Each project has two files: `context.md` (stable — what it is, tech stack, scope) and `journal.md` (dynamic — rolling weekly summaries, decisions, open questions).

- [[cetera/context]] · [[cetera/journal]] · [[cetera/stories-f2]] — Financial services (High Meadows / F2 Strategy). Case object migration (Project Keystone), Marketing Cloud journeys, Advice Works integration, FSC standardization.
- [[lnw/context]] · [[lnw/journal]] · [[lnw/stories-f2]] — LNW Visibility Enhancements POC (High Meadows via F2). Entity Role Diagrams, family-level aggregation, meeting note composer.
- [[mai/context]] · [[mai/journal]] · [[mai/stories-f2]] — High Meadows internal insurance SaaS. FSC, case config, IAM service, active UAT backlog.
- [[harvey/context]] · [[harvey/journal]] — Industrial manufacturing/distribution (Stand8). Salesforce + Agentforce, 3-year AI roadmap, EU expansion, multi-agent orchestration (Einstein + Claude).
- [[nbcu/context]] · [[nbcu/journal]] — NBCUniversal (Stand8). Agentforce POC: content recommendation + sales pricing strategy via Data Cloud.
- [[litify/context]] · [[litify/journal]] — Legal SaaS (Stand8). Agentforce service agent for case triage, KB recommendations, Data Cloud unification. SOW in progress.
- [[cretelligent/context]] · [[cretelligent/journal]] — Commercial real estate/environmental (Stitch). Connect API, cost worksheets, Quote Matrix LWC, DocHub, SiteProduct joiner.
- [[internal/meadow/context]] · [[internal/meadow/journal]] · [[internal/meadow/stories-hm]] — High Meadows internal capacity planning app (Meadow). Cloud migration to Supabase/Vercel, Sanity SSO, AI chat interface roadmap.
- [[internal/high-meadow-website/context]] · [[internal/high-meadow-website/journal]] — HMS public marketing site. Content punch list, partnerships updates, Services/Insights page cleanup.
- [[internal/flex-dash/stories-hm]] — Flex Dash reporting product. Development paused for MAI.
- [[modern-stack-systems/context]] · [[modern-stack-systems/journal]] — Modern Stack Systems (Mac's consulting practice). Recruiting, business development, peer network, operations.

## Concepts

- [[case-migration]] — Migrating case objects between Salesforce implementations. Field mapping, record type alignment, validation rule review.
- [[flex-dash]] — High Meadows managed package product. Case logic engine with implementation-fee-only licensing. Development paused for MAI.
- [[knowledge-management]] — AI-powered KB recommendations with Data Cloud unification and human-in-the-loop workflows.
- [[multi-agent-orchestration]] — Using multiple AI agents (Einstein, Claude) with triage routing for complex business processes.

## Patterns

- [[json-deserialize-refactor]] — Replacing fragile manual JSON parsing in Apex with JSON.deserialize and typed wrapper classes.
- [[site-product-joiner]] — Junction object pattern to avoid field explosion on parent records. Per-product pricing, cost, and margin tracking.
- [[validation-rule-workaround]] — Three-step fallback for required picklist fields blocking automated record saves.
- [[cost-rollup-hierarchy]] — Apex-driven multi-category cost aggregation through a hierarchical chain. Applied in CREtelligent.

## Tools

- [[agentforce]] — Salesforce's AI agent platform. Used across Harvey, NBCU, Litify, CREtelligent. MCP support in beta is key limitation.
- [[data-cloud]] — Salesforce Data Cloud for unifying fragmented data sources. Key to Litify and NBCU engagements.
- [[claude-ai]] — Anthropic's Claude model. Used for email parsing (Harvey), rapid development (HMS), agentic frameworks (MSS).
- [[marketing-cloud]] — Salesforce Marketing Cloud. Being provisioned for Cetera (Project Keystone) journey automation.
- [[supabase]] — Open-source PostgreSQL platform. Target database for Meadow migration from SQLite.
- [[connect-api]] — CREtelligent's external API for vendor management, site verification, and order processing.

## Entities

- [[stand8]] — Consulting/staffing partner channeling Harvey, NBCU, and Litify engagements to MSS.
- [[stitch]] — Consulting partner for the CREtelligent engagement.
- [[high-meadows]] — Insurance/SaaS company. Internal products (MAI, Meadow), website, product strategy. Routes Cetera + LNW via F2 Strategy.
- [[modern-stack-systems]] — Mac Nosek's consulting practice. Salesforce, DevOps, AI/MCP, cloud architecture.
- [[domatz-victor]] — Peer consultant. Recurring sync calls with Mac and Bradyl (ABL Consulting). Currently on Saterra project.

## Articles

- [[m5-mac-mini-mac-studio-wwdc-2026]] — Apple's 2026 Mac lineup leaked: five models, M5 Ultra with 512GB unified memory, MacBook Ultra with OLED + touchscreen.
- [[andrej-karpathy-method-claude-skills-obsidian]] — The LLM wiki pattern: raw/ → wiki/ → reports/. Claude as compiler/librarian, Obsidian as knowledge IDE, MCP-Obsidian integration, Claude Code Skills for automation.
- [[claude-obsidian-illegal]] — Practical implementation of the LLM wiki pattern. Maintenance as the bottleneck (solved by LLMs). CLI examples. Memory.md seeding. Morning briefing and Action-Tracker automation. Vannevar Bush Memex connection.
- [[obsidian-plugins-replace-paid-apps]] — Six free plugins that replace Notion, Todoist, Trello, Fantastical, TextExpander, and backups: Dataview, Tasks, Kanban, Calendar, Templater, Obsidian Git.
- [[new-agentforce-builder-beta]] — Salesforce's redesigned Agentforce Builder in beta: Agent Script for deterministic logic, Agent Canvas for visual no-code editing, improved testing and debugging.
- [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]] — TDX 2026: free Developer Edition gets Agentforce Vibes IDE (browser VS Code), Agentforce Vibes with Claude Sonnet 4.5, and Salesforce Hosted MCP Servers.
- [[salesforce-web-console-beta]] — TDX 2026: Web Console (Beta) launches 2026-04-14 — browser IDE embedded in Salesforce for debug logs, SOQL, Query Plan Inspector, Anonymous Apex, in-context Apex edits.
- [[prompt-builder-structured-outputs]] — Platform-enforced JSON response format via Object-based Lightning types. Typed Flow variables, castable `structuredResponse` in Apex. No more `JSON.deserialize` boilerplate for LLM outputs.
- [[salesforce-mcp-explained-sweep]] — MCP primer (Anthropic's USB-C for AI), historical Salesforce posture (pre-TDX 2026), HubSpot's early public connector, Sweep's semantic-layer pitch.
- [[tdx-2026-headless-360-operating-model]] — Diginomica's strategic take: Headless 360 is operating-model transformation, not a feature release.

## Topics

- [[apple-hardware]] — Apple hardware releases, leaks, and ecosystem developments.
- [[llm-knowledge-management]] — Using LLMs to build and maintain persistent wikis.
- [[obsidian-ecosystem]] — Local-first markdown IDE with plugins. Graph view, backlinks, Dataview, Tasks, Kanban, Calendar, Templater, Git. MCP-Obsidian integration for Claude.
- [[salesforce]] — Salesforce platform news, product releases, and ecosystem developments.

## Reports

- [[reports/weekly-synthesis-2026-04-20]] — 2026-04-20 · Weekly cross-project synthesis for the week of Apr 14–20, 2026.
- [[reports/weekly-synthesis-2026-04-19]] — 2026-04-19 · Weekly cross-project synthesis for the week of Apr 13–19, 2026.
- [[reports/mai-project-overview]] — 2026-04-18 · Snapshot of the MAI engagement.

---
*Last updated: 2026-04-20*
*Total pages: 60 (19 project pages + 39 wiki pages + 2 reports)*


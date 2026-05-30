# Wiki Index

> Master index of all wiki pages. Updated automatically with every ingest operation.

## Projects (16)

Each project has `context.md` (stable — scope, tech stack, contacts) and `journal.md` (dynamic — weekly summaries, decisions). Some also have `overview.md`, `board.md`, `stories-*.md`, and `archived-stories.md` files.

### Client Projects — Stand8

- [[harvey/context|Harvey]] · [[harvey/journal|journal]] · [[harvey/overview|overview]] — Industrial manufacturing/distribution. Salesforce + Agentforce, 3-year AI roadmap, EU expansion, multi-agent orchestration.
- [[nbcu/context|NBCU]] · [[nbcu/journal|journal]] · [[nbcu/overview|overview]] — NBCUniversal. Agentforce POC: content recommendation + sales pricing strategy via Data Cloud.
- [[litify/context|Litify]] · [[litify/journal|journal]] · [[litify/overview|overview]] — Legal SaaS. Agentforce service agent for case triage, KB recommendations, Data Cloud unification.

### Client Projects — Stitch

- [[cretelligent/context|CREtelligent]] · [[cretelligent/journal|journal]] · [[cretelligent/overview|overview]] — Commercial real estate/environmental. Connect API, cost worksheets, Quote Matrix LWC, DocHub, SiteProduct joiner.

### Client Projects — High Meadows

- [[cetera/context|Cetera]] · [[cetera/journal|journal]] · [[cetera/overview|overview]] · [[cetera/board|board]] · [[cetera/stories-f2|stories-f2]] · [[cetera/stories-jira|stories-jira]] · [[cetera/archived-stories|archived]] — Financial services (via F2). Case object migration (Project Keystone), Marketing Cloud, FSC standardization.
- [[lnw/context|LNW]] · [[lnw/journal|journal]] · [[lnw/board|board]] · [[lnw/stories-f2|stories-f2]] · [[lnw/archived-stories|archived]] — Wealth management (via F2). Entity Role Diagrams, family-level aggregation, visibility enhancements.
- [[mai/context|MAI]] · [[mai/journal|journal]] · [[mai/overview|overview]] · [[mai/board|board]] · [[mai/stories-f2|stories-f2]] · [[mai/stories-jira|stories-jira]] · [[mai/archived-stories|archived]] — Internal insurance SaaS. FSC, case config, IAM service, active UAT backlog.
- [[lefavi/context|Lefavi]] · [[lefavi/journal|journal]] — RIA client. DocuSign integration, Quick Data onboarding, AI exploration.
- [[loftware/context|Loftware]] · [[loftware/journal|journal]] — Prospect. Wealth management Salesforce takeover from Plative, RCA component.

### Client Projects — Modern Stack Systems

- [[modern-stack-systems/context|Modern Stack Systems]] · [[modern-stack-systems/journal|journal]] — Mac's consulting practice. Recruiting, business dev, peer network, operations.
- [[cartier/context|Cartier]] · [[cartier/journal|journal]] — Direct client. Einstein Activity Capture, case activity timeline LWC, Cirrus strategy.
- [[blink-payments/context|Blink Payments]] — UK payment processor. Data Cloud advisory, transaction data consolidation.

### Internal Projects — High Meadows

- [[internal/meadow/context|Meadow]] · [[internal/meadow/journal|journal]] · [[internal/meadow/overview|overview]] · [[internal/meadow/board|board]] · [[internal/meadow/stories-hm|stories-hm]] · [[internal/meadow/stories-linear|stories-linear]] · [[internal/meadow/archived-stories|archived]] — Capacity planning & time tracking SaaS. Cloud migration to Supabase/Vercel, Sanity SSO.
- [[internal/high-meadow-website/context|High Meadow Website]] · [[internal/high-meadow-website/journal|journal]] — HMS public marketing site. Brand system, feedback punch list.
- [[internal/high-meadow-labs/context|High Meadow Labs]] · [[internal/high-meadow-labs/journal|journal]] — AI product initiative. Regulatory compliance POC, multi-agent voting, specialized model training.
- [[flex-dash]] · [[internal/flex-dash/board|board]] · [[internal/flex-dash/stories-hm|stories-hm]] · [[internal/flex-dash/stories-linear|stories-linear]] · [[internal/flex-dash/archived-stories|archived]] — Salesforce managed package. Case logic engine. Development paused for MAI.

## Concepts (5)

- [[cpq-complexity]] — Enterprise CPQ/RCA failures from over-engineering. 200K-line controllers, scarce specialists.
- [[case-migration]] — Migrating case objects between Salesforce orgs. Field mapping, record types, validation rules.
- [[flex-dash]] — HMS managed package product. Case logic engine, implementation-fee-only licensing.
- [[knowledge-management]] — AI-powered KB recommendations with Data Cloud unification and human-in-the-loop.
- [[multi-agent-orchestration]] — Multiple AI agents (Einstein, Claude) with triage routing for complex workflows.

## Patterns (12)

- [[automation-kill-switch]] — Hierarchical Custom Settings to selectively disable flows/triggers/validations. Applied in Cetera.
- [[cost-rollup-hierarchy]] — Apex-driven multi-category cost aggregation through hierarchical chain. Applied in CREtelligent.
- [[data-cloud-bulk-processing]] — High-volume Data Cloud ingestion via record-triggered flows + Apex queueable in 500-record batches. Applied in Blink.
- [[dual-path-vendor-dependency]] — Proceed with primary vendor-dependent + backup vendor-independent paths when licensing stalls. Applied in NBCU.
- [[einstein-dual-capture]] — Einstein Activity Capture for known contacts + secondary tool (Cirrus) for external sources. Applied in Cartier.
- [[job-function-permission-sets]] — Permission sets aligned to job functions (3–5 groups) instead of per-feature. Applied in Cetera.
- [[json-deserialize-refactor]] — Replace fragile manual JSON parsing with JSON.deserialize + typed wrapper classes. Applied in CREtelligent.
- [[multi-agent-voting]] — Multiple AI agents in parallel, surface results only on consensus. Applied in High Meadow Labs.
- [[salesforce-field-capacity-management]] — Proactive custom field/lookup limit monitoring and governance. Applied in MAI.
- [[site-product-joiner]] — Junction object to avoid field explosion. Per-product pricing, cost, margin tracking. Applied in CREtelligent.
- [[uat-deployment-coordination]] — Shared deployment log to prevent cross-developer UAT overwrites. Applied in MAI.
- [[validation-rule-workaround]] — Three-step fallback for required picklist fields blocking automated saves. Applied in CREtelligent.

## Tools (7)

- [[agentforce]] — Salesforce AI agent platform. Used across Harvey, NBCU, Litify, CREtelligent.
- [[claude-ai]] — Anthropic Claude. Email parsing (Harvey), rapid dev (HMS), agentic frameworks (MSS).
- [[connect-api]] — CREtelligent external API for vendor management, site verification, order processing.
- [[contour]] — AI platform for software implementation lifecycle. Discovery bot, SOW generation, traceability.
- [[data-cloud]] — Salesforce Data Cloud. Key to Litify, NBCU, and Blink engagements.
- [[marketing-cloud]] — Salesforce Marketing Cloud. Provisioned for Cetera (Project Keystone).
- [[supabase]] — Open-source PostgreSQL platform. Target database for Meadow migration.

## Entities (5)

- [[domatz-victor]] — Peer consultant. Recurring sync calls, ABL Consulting, Saterra project.
- [[high-meadows]] — Insurance/SaaS company. Internal products (MAI, Meadow), routes Cetera + LNW via F2.
- [[modern-stack-systems]] — Mac Nosek's consulting practice. Salesforce, DevOps, AI/MCP, cloud architecture.
- [[stand8]] — Consulting/staffing partner. Channels Harvey, NBCU, Litify to MSS.
- [[stitch]] — Consulting partner for CREtelligent engagement.

## Articles (10)

- [[andrej-karpathy-method-claude-skills-obsidian]] — The LLM wiki pattern: raw/ → wiki/ → reports/. Claude as compiler/librarian.
- [[claude-obsidian-illegal]] — Practical LLM wiki implementation. Maintenance solved by LLMs. Vannevar Bush Memex connection.
- [[m5-mac-mini-mac-studio-wwdc-2026]] — Apple 2026 Mac lineup: M5 Ultra 512GB, MacBook Ultra OLED + touchscreen.
- [[new-agentforce-builder-beta]] — Redesigned Agentforce Builder: Agent Script, Agent Canvas, improved testing.
- [[obsidian-plugins-replace-paid-apps]] — Six free plugins replacing Notion, Todoist, Trello, Fantastical, TextExpander, backups.
- [[prompt-builder-structured-outputs]] — Platform-enforced JSON responses via Object-based Lightning types.
- [[salesforce-mcp-explained-sweep]] — MCP primer, Salesforce posture, HubSpot connector, Sweep semantic layer.
- [[salesforce-web-console-beta]] — TDX 2026 Web Console: browser IDE for debug logs, SOQL, Query Plan, Anonymous Apex.
- [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]] — TDX 2026: free Dev Edition, Agentforce Vibes IDE, Claude Sonnet 4.5, Hosted MCP.
- [[tdx-2026-headless-360-operating-model]] — Headless 360 as operating-model transformation, not a feature release.

## Topics (4)

- [[apple-hardware]] — Apple hardware releases, leaks, ecosystem developments.
- [[llm-knowledge-management]] — Using LLMs to build and maintain persistent wikis.
- [[obsidian-ecosystem]] — Local-first markdown IDE with plugins. Graph view, backlinks, MCP-Obsidian.
- [[salesforce]] — Salesforce platform news, product releases, ecosystem developments.

## Reports (5)

- [[reports/agentforce-knowledge-report]] — 2026-05-01 · Agentforce knowledge synthesis across 4 engagements.
- [[reports/weekly-synthesis-2026-05-11]] — 2026-05-11 · Week of May 5–11. CREtelligent + MAI active; Litify stalled 24+ days.
- [[reports/weekly-synthesis-2026-04-27]] — 2026-04-27 · Week of Apr 21–27. CRE co-sprint, MAI go-live push, Labs launched.
- [[reports/weekly-synthesis-2026-04-20]] — 2026-04-20 · Week of Apr 14–20.
- [[reports/weekly-synthesis-2026-04-19]] — 2026-04-19 · Week of Apr 13–19.

## F2 Internal Reference (5)

Confluence mirrors for Cetera (CE space):

- [[f2-internal/CE/growth-engine|Growth Engine]] — CPA Referral Engine / Referral Flywheel design.
- [[f2-internal/CE/core-salesforce-usage-alignment|Core SF Usage Alignment]] — APP operational in TRPG org.
- [[f2-internal/CE/financial-planning|Financial Planning]] — Financial planning process design.
- [[f2-internal/CE/gifts-object-alignment|Gifts Object Alignment]] — Gifts object design.
- [[f2-internal/CE/app-address|APP Address]] — Address object design.

---
*Last updated: 2026-05-29*
*Total pages: 111 (16 projects + 53 project subfiles + 5 concepts + 12 patterns + 7 tools + 5 entities + 10 articles + 4 topics + 5 reports + 5 f2-internal)*

# What I Know About Agentforce

> Comprehensive synthesis of all Agentforce knowledge across wiki pages, client engagements, platform updates, and related patterns.

**Generated:** 2026-05-01
**Query:** What do I know about Agentforce?
**Pages consulted:** [[agentforce]], [[multi-agent-orchestration]], [[multi-agent-voting]], [[new-agentforce-builder-beta]], [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]], [[salesforce-mcp-explained-sweep]], [[prompt-builder-structured-outputs]], [[harvey/context]], [[harvey/journal]], [[nbcu/context]], [[litify/context]]

## Findings

### Platform Overview

Agentforce is Salesforce's native AI agent platform -- the orchestration layer for business process automation across departments. It integrates with Salesforce data and can coordinate with external models (Claude, Einstein Agent) for specialized use cases. Licensing runs $400-450/user (NBCU data point).

### Active Client Engagements

Four MSS engagements involve Agentforce directly, each with a distinct use case:

**Harvey (Stand8)** -- the deepest engagement. 3-year board-approved AI roadmap, email intent parsing POC using Claude for multi-intent emails (complaints + order updates + P&A requests routed to separate handlers). Confirmed agent-agnostic strategy: Einstein Agent for native Salesforce workflows, Claude for email parsing. 8 ranked AI use cases from account summaries to predictive maintenance. EU expansion adding 120 users adds complexity. Best candidate for piloting the new Agentforce Builder.

**NBCU (Stand8)** -- content recommendation engine + sales pricing strategy POC, both powered by Data Cloud. 4-week delivery window. Pricing agent matches on genre + budget only (cast data excluded). SOW is complimentary/non-billable. MCP beta was the primary blocker for presentation/deck generation.

**Litify (Stand8)** -- service agent for case triage, case scoring, KB recommendations with human-in-the-loop approval, email drafting V1, and email-to-case field population. ~138-158 hour SOW at 20 hrs/week over 8 weeks. Data Cloud setup to unify knowledge across Google Cloud, Slack, Jira, Confluence, and Salesforce Knowledge. MCP beta was limiting doc generation.

**CREtelligent (Stitch)** -- not a direct Agentforce build, but Andrew advocated for standard Product model specifically to improve long-term Agentforce support.

### Platform Updates (2025-2026)

**New Agentforce Builder (Beta, Feb 2026)** -- Major redesign previewed at Dreamforce 2025. Two new surfaces: Agent Script (deterministic if-else logic, variables, action sequences embedded in agent reasoning -- solves the black box problem) and Agent Canvas (visual no-code editor rendering Agent Script as blocks). Inline actions pre-load context before the LLM takes over, reducing hallucination risk. Better testing with step-by-step conversation replay. Available in Enterprise, Performance, Unlimited, Developer Editions. No confirmed GA date.

**Agentforce Vibes IDE + Vibes (TDX 2026, Apr 2026)** -- Browser-based VS Code launched from Setup, replacing Code Builder. Claude Sonnet 4.5 as default coding model. Plan mode (analyze + propose) and Act mode (write Apex, LWC, triggers, tests). Reads actual org metadata -- no hallucinated field names. Free in Developer Edition: 110 requests / 1.5M tokens per month through 2026-05-31.

**Hosted MCP Server (GA, Apr 2026)** -- The big one. Salesforce-hosted, OAuth 2.0, exposes sObject API + invocable actions + flows to any MCP-compatible client (Claude Desktop, Cursor, Claude Code). Respects org security model (FLS, sharing, profiles). This removes the MCP beta blocker that was cited across Harvey, NBCU, and Litify. Complementary to DX MCP Server (local, CLI auth, 60+ dev tools).

**Prompt Builder Structured Outputs** -- Platform-enforced JSON responses via Object-based Lightning types. Eliminates JSON.deserialize boilerplate. Direct relevance to Harvey email intent parsing and Litify case classification. Limitation: no nested objects or arrays.

### Patterns & Architecture

**Multi-Agent Orchestration** -- The agent-agnostic approach: use the best model for each task rather than force-fitting everything into one platform. Harvey's email intake is the canonical example (Claude parses intent, triage router sends to specialized handlers). Key considerations: fallback strategy, audit trail, human escalation, cost optimization.

**Multi-Agent Voting** -- Run multiple agents in parallel, only surface results on consensus. Relevant to Agentforce in high-stakes scenarios (compliance, financial calculations). High Meadow Labs compliance POC plans to use this pattern.

**Semantic Layer Gap** -- Even with Hosted MCP GA, raw metadata lacks business semantics. Sweep's pitch (context layer that enriches metadata into a semantic graph) highlights the consulting opportunity: clients who "just turn on MCP" without governance/enrichment will get hallucination-adjacent results. This is MSS's competitive space.

### Key Limitations & Open Items

- Hosted MCP GA (Apr 2026) removes the primary beta blocker -- doc-gen and external tool flows should be retested across all three Stand8 engagements.
- Office 365 integration scope should be revisited in light of Hosted MCP + Claude Desktop.
- Presentation generation workflows remain complex even with MCP GA.
- Lightning types for Structured Outputs are unversioned -- renaming a field silently breaks live automations.
- No nested objects/arrays in Structured Outputs -- line item scenarios still need Apex parsing.

## Gaps

- No wiki coverage of Agentforce pricing/licensing model beyond the $400-450/user NBCU data point.
- No documentation of actual Agent Script syntax or examples from sandbox testing.
- Harvey journal hasn't been updated since Apr 9 -- no visibility into whether new builder or Hosted MCP have been tested.
- NBCU and Litify journals should reflect the MCP GA shift and whether previously-parked workflows have been retested.
- No competitive comparison of Agentforce vs. other agent platforms (LangChain, AutoGen, CrewAI, etc.).
- No wiki page for Agentforce 3.0 specifically (the July 2025 release that introduced MCP pilot).

## Suggested Follow-ups

- Retest doc-gen and external tool scenarios on Harvey/NBCU/Litify now that Hosted MCP is GA.
- Pilot the new Agentforce Builder on Harvey (best candidate per the wiki).
- Document Agent Script syntax and patterns from hands-on testing.
- Create a competitive positioning page: Agentforce vs. open-source agent frameworks.
- Update NBCU/Litify journals with MCP GA impact assessment.
- Capture Agentforce licensing details for SOW estimation reference.

---
*Generated from Second Brain wiki query*

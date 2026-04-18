# Salesforce Ecosystem

> Accumulator page tracking Salesforce platform news, product releases, and ecosystem developments — separate from client-specific project work.

## Overview

Salesforce is the core platform across nearly all of Mac's active consulting engagements. This topic page tracks platform-level news, feature releases, and ecosystem developments that matter for the practice — not individual client work (which lives in wiki/projects/). Key areas of interest: Agentforce/AI, Data Cloud, Flow/automation, DevOps Center, MCP integrations, and pricing/licensing changes.

## Key Developments

### 2026

**TDX 2026 — Headless 360 and the Agent-First Platform (Apr 2026)**
- Salesforce's strategic pivot: exposing data sources, actions, and tools via APIs + MCP servers + skills with no UI layer required.
- Joe Inzerillo framed agents (not users) as the primary audience for these endpoints.
- Diginomica's take: this is operating-model transformation, not a feature release. Salesforce is restructuring itself to be legible to agents, not adding agents as features.
- Vibe coding, Web Console, agent builders, Claude Code integration = amplifiers for the new operating model, not the headline.
- See: [[tdx-2026-headless-360-operating-model]]

**Agentforce Vibes IDE + Claude Sonnet 4.5 + Hosted MCP in Developer Edition (Apr 2026)**
- Free Developer Edition orgs now include: Agentforce Vibes IDE (browser VS Code), Agentforce Vibes with Claude Sonnet 4.5 as default coding model, and Salesforce Hosted MCP Servers.
- Dev Edition allocation: 110 requests / 1.5M tokens per month refresh through 2026-05-31, then a one-time final allocation.
- Hosted MCP Server: OAuth 2.0, Salesforce-hosted, exposes sObject API + invocable actions + flows to any MCP client (Claude Desktop, Cursor, Claude Code). Respects org security, FLS, and sharing rules.
- DX MCP Server (local, CLI auth, 60+ dev tools) is complementary, not replaced.
- See: [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]]

**Web Console (Beta) — Browser IDE Embedded in Salesforce (Apr 2026)**
- Beta opens 2026-04-14, admin opt-in, off by default. Launches directly from Setup and other Salesforce surfaces.
- Core capabilities: debug logs, SOQL + Query Plan Inspector, Anonymous Apex, in-context Apex edits, org-aware metadata navigation.
- Production: Apex editing is read-only. Sandbox: inline edit + save.
- Positioned as the modern successor to the legacy Developer Console; complements Agentforce Vibes IDE.
- See: [[salesforce-web-console-beta]]

**Prompt Builder Structured Outputs (Apr 2026)**
- Response format dropdown now supports JSON with platform-enforced structure via Object-based Lightning types.
- Eliminates `JSON.deserialize` boilerplate — Flow gets typed variables; Apex Connect API exposes `structuredResponse` castable to system-generated Lightning type class.
- Limitations: no nested objects/arrays (return lists as JSON strings), picklists not enforced, Lightning types unversioned (don't edit in place), structured ≠ validated values.
- See: [[prompt-builder-structured-outputs]]

**New Agentforce Builder Released in Beta (Feb 2026)**
- Major redesign introducing Agent Script (declarative markup for deterministic logic) and Agent Canvas (visual no-code editor).
- Solves the "black box" problem in the legacy builder — agents now have predictable, auditable execution paths.
- Available via Agentforce Studio in Enterprise, Performance, Unlimited, and Developer Editions.
- See: [[new-agentforce-builder-beta]]

**MCP in Agentforce — Hosted + Non-Hosted (Apr 2026)**
- TDX 2026 headline: MCP in Agentforce now supports both hosted and non-hosted server models, removing the prior beta/gated posture.
- Supersedes the mid-2025 "MCP pilot, premium-gated only" state described in [[salesforce-mcp-explained-sweep]].
- Key unblocker for Harvey, NBCU, and Litify workflows that were previously parked on MCP limitations.

**$5.6B US Army Contract**
- Salesforce secured a $5.6B contract with the US Army for AI-driven modernization.
- Signals enterprise-grade reliability requirements for Agentforce — directly driving the deterministic controls in the new Builder.

## Notable Articles

- [[tdx-2026-headless-360-operating-model]] — Headless 360 as operating-model transformation, not product update (Apr 2026)
- [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]] — Agentforce Vibes IDE, Claude Sonnet 4.5, Hosted MCP Servers in free Dev Edition (Apr 2026)
- [[salesforce-web-console-beta]] — Browser IDE beta for in-context debugging and Apex edits (Apr 2026)
- [[prompt-builder-structured-outputs]] — Platform-enforced JSON response structure via Lightning types (Apr 2026)
- [[salesforce-mcp-explained-sweep]] — MCP primer + historical Salesforce posture + Sweep's semantic layer pitch (Jul 2025, processed Apr 2026)
- [[new-agentforce-builder-beta]] — Agent Script, Agent Canvas, testing improvements (Feb 2026)

## Related Pages

- [[agentforce]] — Agentforce platform details, MSS client use cases, limitations
- [[claude-ai]] — Claude Sonnet 4.5 as Vibes default model
- [[data-cloud]] — Salesforce Data Cloud
- [[llm-knowledge-management]] — AI-powered knowledge bases (consulting pattern)
- [[json-deserialize-refactor]] — superseded for Prompt Builder flows by Structured Outputs
- [[harvey]] — Harvey engagement (Agentforce AI roadmap)
- [[nbcu]] — NBCU engagement (Agentforce POC)
- [[litify]] — Litify engagement (Agentforce service agent)

---
*Last updated: 2026-04-18*

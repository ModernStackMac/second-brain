# Agentforce
> Salesforce's AI agent platform enabling multi-agent orchestration across departments and use cases.

## Overview
Agentforce is Salesforce's native AI agent offering, positioned as the orchestration layer for business process automation. It integrates with Salesforce data and can coordinate with external models (Claude, Einstein Agent) for specialized use cases. The platform is gaining traction across MSS engagements but faces real limitations around MCP support and presentation/document generation.

Key clients are piloting Agentforce for specific workflows: email intent parsing (Harvey), content recommendations (NBCU), and service case triage (Litify). The common blocker is MCP maturity — beta status limits integration flexibility, especially for doc generation and third-party tool calls.

## Key Details

**Harvey Engagement:**
- Email template POC pulling product data per business unit/location
- Exploring account summaries, research enrichment, pricing automation, web chat
- Agent-agnostic approach: Einstein Agent natively in Salesforce, Claude for email parsing (multi-intent emails with complaints + order updates + P&A requests), multi-agent orchestration under consideration

**NBCU Engagement:**
- Content recommendations and sales strategy POC
- MCP support still in beta — limits presentation generation
- Office 365 integration clarity pending MCP general availability
- Licensing: $400-450/user

**Litify Engagement:**
- Service agent for case triage, knowledge base recommendations, Data Cloud unification
- Agentforce doesn't currently support MCP — limits doc generation and other MCP-dependent features

**CREtelligent:**
- Andrew advocated for standard Product model to improve long-term Agentforce support

**New Agentforce Builder (Beta, Feb 2026)**
- Major redesign introduced at Dreamforce 2025, now in open beta
- **Agent Script:** new markup language for embedding deterministic if-else logic, variables, and action sequences into agent reasoning; solves the "black box" problem
- **Agent Canvas:** visual no-code editor that renders Agent Script as structured blocks — inline actions, topic transitions, follow-up actions
- **Inline actions:** pre-load context or set variables before LLM takes over — reduces hallucination risk
- **Testing improvements:** full conversation simulation with step-by-step topic/action tracing; revamped debugging panel
- **Guided creation:** natural language → topics/actions/Agent Script via inline AI assistance
- Access via App Launcher → Agentforce Studio. Enterprise, Performance, Unlimited, Developer Editions. No confirmed GA date; possible TDX 2026 announcement.
- See: [[new-agentforce-builder-beta]]

**Agentforce Vibes IDE + Vibes (TDX 2026, Apr 2026)**
- **Agentforce Vibes IDE:** browser-based VS Code environment launched directly from Setup. Salesforce CLI, SF Extensions, GitHub integration preconfigured; metadata auto-loaded into SFDX project. Replaces Code Builder in name and scope.
- **Agentforce Vibes:** enterprise vibe coding surface inside the IDE. Claude Sonnet 4.5 as default coding model. Plan mode (analyze + propose) / Act mode (write Apex, LWC, triggers, tests). Reads actual org metadata before generating — no hallucinated field names.
- **Free in Developer Edition:** 110 requests / 1.5M tokens per month refreshing through 2026-05-31, then a one-time final allocation. No additional enablement; rolling out to existing Dev Edition orgs (Setup → "Agentforce Vibes").
- See: [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]]

**Hosted MCP Server (TDX 2026, GA Apr 2026)**
- Salesforce-hosted MCP server running on Salesforce infra, OAuth 2.0 per user.
- Exposes sObject API + invocable actions + flows to any MCP-compatible client (Claude Desktop, Cursor, Claude Code).
- Respects org security model: FLS, sharing rules, profiles all apply.
- Complementary to DX MCP Server (local, CLI auth, 60+ dev tools) — Hosted for data/logic access from external AI, DX for development/deployment workflows.
- Now generally available in Developer Edition (free). Removes the prior MCP beta/gated blocker cited across Harvey, NBCU, and Litify engagements.

**General Limitations:**
- With Hosted MCP GA (Apr 2026), the prior "MCP is beta" constraint is largely resolved — retest previously parked doc-gen and external tool flows.
- Presentation and document generation workflows should be retested against Hosted MCP.
- Office 365 integration scope should be revisited in light of Hosted MCP + Claude Desktop.

## Related Pages
- [[harvey]] — email intent parsing use case
- [[nbcu]] — content recommendation pilot
- [[litify]] — service agent triage use case
- [[cretelligent]] — product model standardization
- [[data-cloud]] — unification layer for agent data
- [[claude-ai]] — external AI model coordination (Claude Sonnet 4.5 = Vibes default)
- [[multi-agent-orchestration]] — orchestration pattern across models
- [[salesforce]] — TDX 2026 and platform topic tracker
- [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]] — Vibes IDE + Hosted MCP
- [[tdx-2026-headless-360-operating-model]] — strategic framing for Agentforce posture
- [[salesforce-mcp-explained-sweep]] — MCP primer and historical posture
- [[prompt-builder-structured-outputs]] — typed JSON for Agentforce action inputs/outputs

## Sources
- Meeting Notes/Stand8/Harvey/2026-04-09
- Meeting Notes/Stand8/NBCU/2026-04-08
- Meeting Notes/Stand8/Litify/2026-04-09
- raw/articles/New Agentforce Builder Released in Beta Our First Thoughts.md
- raw/articles/2026-04-18T074207-0500-New in Salesforce Developer Edition Agentforce Vibes IDE, Claude 4.5, MCP.md
- raw/articles/2026-04-18T080457-0500-Salesforce Model Context Protocol Explained How MCP Bridges AI and Your CRM.md
- raw/articles/2026-04-18T082851-0500-Salesforce TDX 2026 – why Salesforce's Headless 360 announcement at TDX is really about operating model transformation.md

---
*Last updated: 2026-04-18*

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

**General Limitations:**
- MCP support is the primary constraint (beta access limited)
- Presentation and document generation not natively supported without MCP
- Not all integrations (e.g., Office 365) clearly scoped until MCP reaches GA

## Related Pages
- [[harvey]] — email intent parsing use case
- [[nbcu]] — content recommendation pilot
- [[litify]] — service agent triage use case
- [[cretelligent]] — product model standardization
- [[data-cloud]] — unification layer for agent data
- [[claude-ai]] — external AI model coordination
- [[multi-agent-orchestration]] — orchestration pattern across models

## Sources
- Meeting Notes/Stand8/Harvey/2026-04-09
- Meeting Notes/Stand8/NBCU/2026-04-08
- Meeting Notes/Stand8/Litify/2026-04-09

---
*Last updated: 2026-04-10*

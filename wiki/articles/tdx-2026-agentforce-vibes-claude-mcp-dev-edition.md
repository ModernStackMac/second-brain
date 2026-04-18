# New in Salesforce Developer Edition: Agentforce Vibes IDE, Claude 4.5, MCP

> TDX 2026: Developer Edition now ships Agentforce Vibes IDE (browser VS Code), Agentforce Vibes with Claude Sonnet 4.5 as the default coding model, and Salesforce Hosted MCP Servers — all free.

**Source:** [New in Salesforce Developer Edition: Agentforce Vibes IDE, Claude 4.5, MCP](https://developer.salesforce.com/blogs/2026/04/new-developer-edition-agentforce-vibes-claude-mcp) | **Published:** 2026-04-15 | **Tags:** salesforce, ai, devops, learning

## Summary

Salesforce used TDX 2026 to bundle three major additions into the free Developer Edition. **Agentforce Vibes IDE** is a browser-based, org-aware VS Code environment launched directly from Setup — Salesforce CLI, SF extensions, and GitHub integration preconfigured, metadata auto-loaded into an SFDX project. It replaces Code Builder in name and ambition.

**Agentforce Vibes** is Salesforce's enterprise vibe coding surface, now defaulting to **Claude Sonnet 4.5**. It reads the actual org metadata and code before generating, offering Plan mode (analyze + propose) and Act mode (write Apex/LWC/triggers/tests against local project files with explicit deploy). Developer Edition gets 110 requests and 1.5M tokens per month refreshed through 2026-05-31, then a final one-time allocation of the same size.

**Salesforce Hosted MCP Servers** round it out — OAuth 2.0, runs on Salesforce infra, exposes sObject API / invocable actions / flows to any MCP-compatible client (Claude Desktop, Cursor, Claude Code). Complements the existing DX MCP Server (local, CLI-auth, 60+ dev tools) with production-facing data/logic access that respects org security, FLS, and sharing rules.

## Key Takeaways

- Agentforce Vibes IDE = cloud VS Code launched from Setup; no install, no auth dance, metadata already loaded.
- Claude Sonnet 4.5 is the default Vibes coding model — first-class Anthropic integration inside Salesforce tooling.
- Plan mode before Act mode is the recommended pattern to stretch monthly allocations.
- Hosted MCP vs. DX MCP: Hosted = Salesforce-run OAuth-authed data/action plane; DX = local dev tools for metadata + deployment. They're complementary, not overlapping.
- Hosted MCP enforces the org security model — FLS, sharing rules, profiles all apply.
- Dev Edition allocation: 110 requests / 1.5M tokens per month through 2026-05-31, then a one-time final allocation. Start now or you only get the final allocation.
- Features are gradually rolling out to existing Dev Edition orgs; no enablement steps — look under Setup → "Agentforce Vibes".

## Why It Matters

Direct relevance to every active Agentforce engagement (Harvey, NBCU, Litify, CREtelligent) and MSS's internal tooling. Key implications:

- **Claude-first coding experience inside Salesforce** validates Mac's agent-agnostic strategy and makes the Claude-for-Apex workflow a supported path rather than a hack.
- **Hosted MCP GA-adjacent** removes the long-standing beta blocker that's been cited across Harvey, NBCU, and Litify. Worth retesting doc-gen / external-tool scenarios that were previously parked.
- **Free Dev Edition access** means immediate, zero-cost hands-on for MCP and Vibes — Mac can pilot against a scratch org without touching client tenants.
- Positions Salesforce squarely inside the vibe-coding conversation alongside Cursor/Claude Code — expect this to change how scope and delivery estimates get framed on future SOWs.

## Related Pages

- [[agentforce]] — Agentforce Vibes + Hosted MCP details added
- [[claude-ai]] — Claude Sonnet 4.5 as Vibes default model
- [[salesforce]] — TDX 2026 topic tracker
- [[harvey]] — Agentforce engagement, MCP-dependent workflows
- [[nbcu]] — Agentforce POC with prior MCP blockers
- [[litify]] — Agentforce service agent engagement
- [[new-agentforce-builder-beta]] — companion Agentforce platform update
- [[tdx-2026-headless-360-operating-model]] — broader TDX strategic context

## Sources

- raw/articles/2026-04-18T074207-0500-New in Salesforce Developer Edition Agentforce Vibes IDE, Claude 4.5, MCP.md

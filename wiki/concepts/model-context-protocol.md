# Model Context Protocol (MCP)

> Open standard (Anthropic) that lets LLMs/agents discover and interact with external systems at runtime — the "USB-C for AI."

## Overview
MCP provides a dynamic abstraction layer over tools and data: instead of hardcoding endpoints, an agent queries a server for available actions, interprets the required schema, and adapts to changes. Adopted across the ecosystem (OpenAI, Microsoft Copilot). In the Salesforce world it shows up as DX MCP (local, CLI creds, 60+ dev tools), Hosted MCP (Salesforce infra, OAuth, sObject/actions/flows), and Agentforce's native MCP client.

## Why It Matters
Central to Mac's AI/MCP consulting. The recurring lesson: raw metadata exposure is not enough — models lack business semantics, get overwhelmed by org volume, and have no agentic memory. Real value requires a semantic context layer (context engineering) on top of MCP. Drives scoping for Data Cloud and agent engagements.

## Common Implementations / Gotchas
- Hosted MCP respects org security (FLS, sharing, profiles); good for prototyping before production.
- Naive NL-to-query inflates wrong answers (e.g. auto-assigned-rep attribution) — needs business rules.
- Vendors (e.g. Sweep) pitch a metadata-to-graph context layer; treat vendor claims as positioning.
- This vault itself uses mcp-obsidian, a concrete MCP server over the Obsidian vault.

## Related Pages
- [[articles/sf-mcp-explained-sweep]] — MCP-for-CRM deep dive
- [[articles/sf-devedition-vibes-claude-mcp]] — Hosted vs DX MCP servers
- [[obsidian]] — mcp-obsidian as a working MCP example
- [[blink-payments/context]] — Data Cloud advisory where context matters

---
*Last updated: 2026-06-01*

# Introducing Web Console (Beta): Code Where You Build on Salesforce

> TDX 2026: Salesforce launches Web Console, a browser-based modern IDE embedded directly in Salesforce workflows. Beta opens 2026-04-14 — debug logs, SOQL, Query Plan Inspector, Anonymous Apex, and in-context Apex edits, with prod guardrails.

**Source:** [Introducing Web Console (Beta): Code Where You Build on Salesforce](https://developer.salesforce.com/blogs/2026/04/introducing-web-console-beta-code-where-you-build-on-salesforce) | **Published:** 2026-04-09 | **Tags:** salesforce, devops

## Summary

Web Console is Salesforce's next-gen browser IDE — the modern successor to the legacy Developer Console. Beta opens 2026-04-14, admin opt-in, off by default. It launches directly from Setup and other Salesforce surfaces, so developers move from "something broke" to fix-and-validate without bouncing between tools.

The beta is intentionally scoped to the highest-friction tasks: debug log viewing, SOQL with Query Plan Inspector, Anonymous Apex execution, quick in-context Apex edits, and org-aware metadata navigation. Example workflow: start from a failed Apex Job, open the related class in Web Console, enable logging, re-run, jump from stack trace to the problematic line, fix, run tests, and validate — without leaving Salesforce.

Guardrails are respected: Apex editing is read-only in production orgs; sandboxes allow inline edits and saves. This sits alongside (not as a replacement for) the Agentforce Vibes IDE — Web Console is for reactive debugging and targeted fixes; Vibes IDE is for sustained development work.

## Key Takeaways

- Beta opens 2026-04-14 — off by default, admin enables via Web Console Setup page.
- Available across Salesforce orgs and editions.
- Core beta capabilities: debug logs, SOQL + Query Plan Inspector, Anonymous Apex, quick Apex edits, org-aware metadata navigation.
- Production orgs: Apex editing is read-only (inspect-only). Sandboxes: full inline edit + save.
- Designed for reactive workflows — launching from failure context, not from a file tree.
- Positioned as the modernization path from the legacy Developer Console.
- Complements Agentforce Vibes IDE (sustained dev) rather than duplicating it.

## Why It Matters

Every active Salesforce engagement touches Apex debugging and SOQL at some point. Web Console cuts the friction of investigating prod issues from "download/open VS Code + re-auth + find the class + enable logs" to "click through from Setup." For client engagements in production, read-only Apex editing preserves guardrails while still giving an in-context inspection path — a meaningful win for change-control-sensitive orgs like Cetera, MAI, and CREtelligent.

Pairs with Agentforce Vibes IDE: one surface for reactive debugging (Web Console), one for sustained coding (Vibes). For MSS delivery, this is the first signal that Salesforce is serious about the legacy Developer Console sunset.

## Related Pages

- [[salesforce]] — TDX 2026 topic tracker
- [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]] — companion Agentforce Vibes IDE announcement
- [[tdx-2026-headless-360-operating-model]] — broader TDX strategic context

## Sources

- raw/articles/2026-04-18T074235-0500-Introducing Web Console (Beta) Code Where You Build on Salesforce.md

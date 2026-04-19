# Claude AI
> Anthropic's Claude model suite — widely used across MSS for email intent parsing, agentic workflows, and rapid application development.

## Overview
Claude is the primary AI model powering development work at Modern Stack Systems and across multiple client engagements. It's used for everything from intent parsing in email workflows to full application builds and internal tooling. The flexibility to use Claude across platforms (Salesforce, custom APIs, Claude Code) makes it a key part of the agent-agnostic approach being adopted across engagements.

Mac is a power user across Claude's entire ecosystem — Claude Code for rapid development, Claude API for integrations, and other providers (OpenRouter, OpenAI) for specific use cases. The team is also exploring specialized models (Mythos AI) for performance gains in specific contexts.

## Key Details

**Mac's Usage Pattern:**
- Daily Claude Code power user with $200/month subscription (confirmed 2026-04-10)
- Full AI workflow in production: Claude Desktop for meeting transcription/summarization, second brain system for file analysis, morning briefing pulling from Salesforce AI/news/email highlights
- QuickBooks connector for weekly financial summaries
- Multiple concurrent instances for building AI applications on the Salesforce platform
- Extensive use of Claude API, OpenRouter, and OpenAI APIs for integrations and experiments
- Building agentic frameworks and rapid POCs
- Exploring [[llm-knowledge-management]] pattern: using Claude as compiler/librarian to build and maintain persistent markdown-based wiki from raw sources

**Knowledge Management with Claude:**
- MCP-Obsidian integration enables Claude to read/write directly into [[obsidian-ecosystem|Obsidian]] vault without copy-paste
- Claude Code Skills for automation: kb-compile (ingest sources), kb-report (query wiki), kb-lint (health checks), morning-briefing (daily context)
- Shift from stateless chat sessions to stateful, compounding knowledge accumulation

**Claude Inside Salesforce (TDX 2026):**
- Claude Sonnet 4.5 is the default coding model for Agentforce Vibes (Salesforce's enterprise vibe coding surface) — first-class Anthropic integration inside Salesforce tooling.
- Free Developer Edition access: 110 requests / 1.5M tokens per month refresh through 2026-05-31, then a one-time final allocation.
- Salesforce Hosted MCP Server (OAuth 2.0, org security enforced) now lets Claude Desktop, Claude Code, and any MCP client query Salesforce data natively — removes the previous "MCP is beta" friction across Harvey/NBCU/Litify.
- See: [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]]

**Harvey Engagement:**
- Claude used for email intent parsing, especially multi-intent emails (complaint + order update + P&A request simultaneously)
- Carl built a Claude-based chat prototype for Helical brand site over a weekend
- Part of agent-agnostic strategy: Einstein Agent for standard ops, Claude for specialized intent parsing

**Litify Engagement:**
- Carl built functionality using Claude Code
- Raised question: why can't similar capabilities be replicated in Agentforce natively?

**HMS Internal (High Meadows):**
- Claude Sonnet running at 2% capacity
- Development velocity accelerating: complete app rebuilds in a single day, Slack bot deployments in 25 minutes with recursive issue resolution
- Integration with [[meadow|Meadow app]] (capacity planning tool) planned as Phase 2 (chat interface)

**Model Exploration:**
- Mythos AI tested and performs better than Sonnet/Opus in some contexts
- Concerns about behavior differences between test and production environments

**Recruiting:**
- Salesforce QA/Dev role specifically seeking Claude Code integration experience

## Related Pages
- [[harvey]] — email intent parsing use case
- [[meadow]] — internal capacity planning with Claude integration planned (Phase 2 chat interface)
- [[agentforce]] — part of multi-model orchestration strategy
- [[modern-stack-systems]] — primary employer using Claude extensively
- [[llm-knowledge-management]] — Claude as compiler/librarian for persistent wikis
- [[obsidian-ecosystem]] — Integration partner for knowledge management
- [[andrej-karpathy-method-claude-skills-obsidian]] — The pattern and implementation details
- [[tdx-2026-agentforce-vibes-claude-mcp-dev-edition]] — Claude Sonnet 4.5 as Vibes default + Hosted MCP
- [[salesforce]] — TDX 2026 topic tracker
- [[salesforce-mcp-explained-sweep]] — MCP origin (Anthropic) and ecosystem context

## Sources
- Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop.md
- Meeting Notes/High Meadows/Internal/2026-04-09 - HMS Product Strategy.md
- Meeting Notes/Modern Stack Systems/2026-04-09 - Recruiter Call - Brittany Fetzner - Salesforce QA Dev Role.md
- Meeting Notes/Modern Stack Systems/2026-04-10 - The Meeting of the Minds - Peer Sync.md
- raw/articles/2026-04-18T074207-0500-New in Salesforce Developer Edition Agentforce Vibes IDE, Claude 4.5, MCP.md

---
*Last updated: 2026-04-19*

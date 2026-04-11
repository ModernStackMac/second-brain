# Knowledge Management
> Using Salesforce Knowledge articles, Data Cloud unification, and AI agents to provide case workers and customers with timely, relevant answers and reduce manual resolution time.

## Overview
Knowledge management in modern Salesforce implementations is shifting from static article repositories to dynamic, AI-powered discovery systems. Rather than relying on case workers to manually search for articles, agents can recommend relevant knowledge in real-time, learn from outcomes, and incrementally improve the KB by capturing new solutions from resolved cases.

Litify's implementation is a good example: knowledge is fragmented across multiple systems, Data Cloud consolidates it, and Agentforce provides intelligent recommendations with human oversight.

## Key Details

**The Problem: Knowledge Fragmentation**
- Litify knowledge currently spread across:
  - Google Cloud (legacy docs)
  - Slack (informal discussions, workarounds)
  - Jira (technical issue descriptions)
  - Confluence (process documentation)
  - Salesforce Knowledge (formal articles)
- No single source of truth — case workers can't efficiently find answers

**Data Cloud as the Unification Layer:**
- Consolidates all sources into a queryable data model
- Enables agents to search once instead of querying multiple systems
- Improves recommendation speed and relevance

**Agent Recommendation Workflow:**
1. Case worker or customer receives agent recommendation
2. Worker reviews recommendation with context
3. If article resolves the case → approve and add to KB (if new)
4. Agent learns from approval — improves future recommendations
5. KB grows incrementally from real-world case resolutions

**Scoping Questions:**
- Internal agent access only, or exposed externally to customers/portal users?
- Which systems should be consolidated into Data Cloud? (All five, or subset?)
- Who approves new KB articles from case resolution?
- How do we measure recommendation quality and accuracy?

**Long-term Benefits:**
- Case resolution time decreases as agents get smarter
- KB quality improves incrementally (real-world validation)
- Consistent messaging across all support channels
- Better customer self-service (if exposed externally)

## Related Pages
- [[litify]] — primary engagement using this pattern
- [[agentforce]] — the agent providing recommendations
- [[data-cloud]] — the unification layer

## Sources
- Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync.md

---
*Last updated: 2026-04-10*

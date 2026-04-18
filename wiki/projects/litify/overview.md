---
aliases: [litify]
type: project-overview
project: litify
---

# Litify — Engagement Overview

> Legal software company implementing Salesforce service agent for case triage, knowledge consolidation, and unified case resolution.

## Overview
Litify is a legal-focused software company implementing Salesforce Agentforce to improve customer success efficiency. The core need is automating case triage and knowledge recommendations as cases arrive through multiple channels. The broader initiative involves unifying fragmented knowledge across five different platforms into Salesforce Data Cloud, creating a single source of truth for the support team.

Key stakeholders: Evan Markovich (Salesforce AE), Sarah Paulson (Data Cloud AE), and Liana Trigg (internal champion).

## Key Details

**Use Cases: Service Agent**
- **Case Triage & Summarization**: Email and phone cases → automatic case summaries and prioritization
- **Case Scoring**: Automatic severity/urgency scoring for routing and escalation
- **Knowledge Base Recommendations**: AI-driven KB article suggestions with human-in-the-loop approval
- **Feedback Loop**: Recommended KB articles that are approved feed back into the KB automatically

**Knowledge Consolidation Challenge**
- Knowledge currently fragmented across:
  - Google Cloud (docs/wikis)
  - Slack (institutional knowledge, channel history)
  - Jira (technical documentation)
  - Confluence (process docs)
  - Salesforce Knowledge (native KB, limited content)
- Data Cloud unification strategy: aggregate all sources into single source of truth

**Scope Decision: Internal vs External Agent**
- Still in planning phase — determining whether agent handles internal CS workflows only or also customer-facing triage

**Technical Constraints**
- Agentforce doesn't support MCP currently — limits functionality like PowerPoint generation for case summaries
- Workaround needed for document/presentation output

**Timeline & Next Steps**
- 1-hour reverse demo of Litify's service environment (scheduled)
- SOW delivery after reverse demo
- Post-SOW: environment access and full engagement kickoff

## Related Pages
- [[stand8]] — partner/reseller connection
- [[harvey]] — parallel email automation and multi-system intent parsing
- [[cretelligent]] — data model consolidation pattern
- [[agentforce]] — core technology for service agent implementation
- [[data-cloud]] — unification layer for fragmented knowledge sources

## Sources
- Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync.md

---
*Last updated: 2026-04-10 · Merged from clients/litify.md on 2026-04-18*

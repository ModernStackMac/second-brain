# Litify
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

## SOW Scope (2026-04-13 internal working session)

Building the Litify AI case management SOW with Ryan Ridinger and Leanna. Waiting on AI requirements doc from Evan March (Litify) before finalizing. Targeting Wed/Thu review call.

**Feature Hour Estimates**
- Case summarization (button-triggered to conserve AI credits): 3-5 hrs
- Auto-populated case resolution summary on case close: included with above
- Knowledge article recommendations in Service Cloud agent chat: 15-20 hrs
- Knowledge article creation with human review: 15 hrs
- Email drafting assistance (V1 only, generic prompt with case + email chain): 10 hrs
- Email-to-case field population (AI populates 4 fields, requires email message trigger): 20 hrs
- Testing: 15-20 hrs
- Data Cloud setup: 5-10 hrs
- Post-go-live support: 20 hrs over 30 days
- Training (train-the-trainer model): 2 hrs

**Total Effort & Timeline**
- ~120 hours total at Mac's 20 hrs/week capacity
- 8-week delivery timeline
- Client commitment: ~5 hrs for testing

**Key Scope Decisions**
- Case summarization is button-triggered (not automatic) to preserve AI credits
- Email drafting V1 only; further iterations moved to managed services
- Data Cloud setup included in scope

**Exclusions**
- Call transcript integrations
- Third-party system integrations (Google, Confluence)
- Community enhancements
- Website agent deployment
- V2+ of email drafting and knowledge article creation

**Open Action Items**
- Ryan — finalize SOW formatting and deliverables chart
- Leanna — secure AI requirements from Evan March; schedule review call
- Mac — add technical assumptions and hour refinements
- Team — internal review before client presentation

## Related Pages
- [[stand8]] — partner/reseller connection
- [[harvey]] — parallel email automation and multi-system intent parsing
- [[cretelligent]] — data model consolidation pattern
- [[agentforce]] — core technology for service agent implementation
- [[data-cloud]] — unification layer for fragmented knowledge sources

## Sources
- Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync.md
- Meeting Notes/Stand8/Litify/2026-04-13 - Internal Litify SOW Discussion.md

---
*Last updated: 2026-04-13*

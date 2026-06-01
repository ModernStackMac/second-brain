# Litify — Project Context

> Stand8-partnered Agentforce for Service engagement for a legal-tech company; case triage, knowledge management, Data Cloud unification.

## Overview
Litify is a legal software company whose customer-success team needs efficiency gains. Salesforce AE Evan Markovich and Data Cloud AE Sarah Paulson brought Stand8 (with MSS) into the deal; Salesforce is recommending a partner over Litify building it internally. The work is an Agentforce for Service implementation: case summaries, knowledge-article recommendation/creation, and (optionally) internal/external service agents, with Data Cloud unifying knowledge spread across Google Cloud, Slack, Jira, Confluence, and Salesforce Knowledge. Litify pushed back on both implementation and Salesforce licensing cost, so the SOW was scaled down to core easy wins.

## Key Contacts
- Mac (MSS) — consultant/architect (20 hrs/week capacity)
- Ryan Ridinger — Stand8 lead (cross-project)
- Liana Trigg — Stand8 champion (liana.trigg@stand8.io)
- Evan Markovich — Salesforce AE (Toronto)
- Sarah Paulson — Salesforce Data Cloud AE
- Evan March — Litify AI requirements
- Jason Valentine — Litify internal advocate pushing partner engagement

## Scope Evolution
- **Initial SOW (~138–158 hrs):** case field population, summaries, article recommendation, email drafting, case resolution, KB creation + PM support.
- **Scaled SOW (66 hrs total: 57 impl + 9 PM):** removed knowledge-article recommendation, email drafting, and case field population (4k fields, too expensive). Kept case summaries, case resolution, and KB-article creation (draft on close). Discovery cut 10→5 hrs; governance/Data Cloud stays 5 hrs; UAT 10 hrs; training 2 hrs (1 hr external-facing); docs 5 hrs. Fixed price, no rounding down.
- **External agent estimate:** 40 hrs (website/community agent — create cases, case updates, recommend KB; range $10–40k by scope).
- **Internal similar-case agent estimate:** 20 hrs (surface resolved cases matched by type/subtype/industry).

## Key Design Decisions
- Case summarization is button-triggered (not automatic) to conserve AI credits; separate auto-populated resolution summary on close.
- Email drafting scoped to V1 only; further iterations under managed services.
- KB recommendation = human-in-the-loop; newly created articles approved and fed back for future reference.
- No true "pilot" structure — still requires full Agentforce + Data Cloud.

## Tech & Constraints
- Salesforce, Agentforce for Service, Data Cloud (needed for KB matching). Agentforce lacks MCP / document generation (flagged when Litify's Carl asked why Claude Code features couldn't be replicated).
- Data fragmented across Google Cloud, Slack, Jira, Confluence, SF Knowledge.
- Exclusions: call-transcript integrations, third-party integrations (Google, Confluence), community enhancements, website agent (separate estimate), V2+ of email drafting & KB creation.

## Related Pages
- [[articles/prompt-builder-structured-outputs]] — structured case classification/extraction
- [[articles/agentforce-builder-beta]] — Agentforce builder
- [[model-context-protocol]] — Agentforce MCP gap
- [[nbcu/context]] — sibling Stand8 Agentforce/Data Cloud engagement

## Project Files
- [[litify/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync|2026-04-09 — Litify & Stand8 Sync]]
- [[Meeting Notes/Stand8/Litify/2026-04-13 - Internal Litify SOW Discussion|2026-04-13 — Internal SOW Discussion]]
- [[Meeting Notes/Stand8/Litify/2026-04-14 - SOW Review|2026-04-14 — SOW Review]]
- [[Meeting Notes/Stand8/Litify/2026-04-17 - Ryan Liana Chat|2026-04-17 — Ryan/Liana SOW Scale-Down]]

## Sources
- Meeting Notes/Stand8/Litify/2026-04-09, 04-13, 04-14, 04-17
- project-mapping.md

---
*Last updated: 2026-06-01*

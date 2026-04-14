# Litify — Project Context

> Legal software company. Agentforce service agent for case triage, knowledge recommendations, and Data Cloud unification.

## Client
- **Company:** Litify
- **Partner:** Stand8 (Ryan Ridinger)
- **Client contacts:** Evan Markovich (Salesforce AE), Sarah Paulson (Data Cloud AE), Liana Trigg (internal champion), Evan March (AI requirements), Leanna
- **Industry:** Legal technology / SaaS

## What We're Building
- **Case Triage & Summarization** — email and phone cases → automatic summaries and prioritization (button-triggered, not automatic, to conserve AI credits)
- **Case Scoring** — automatic severity/urgency scoring for routing and escalation
- **Knowledge Base Recommendations** — AI-driven KB article suggestions with human-in-the-loop approval; approved articles feed back into KB automatically
- **Email Drafting Assistance** — V1 only; generic prompt with case + email chain context
- **Email-to-Case Field Population** — AI populates 4 fields via email message trigger
- **Data Cloud Setup** — unify fragmented knowledge sources into single source of truth

## SOW Scope
- ~120 hours base at 20 hrs/week → 8-week delivery
- +18 hrs PM support (15% of base) → **138–158 hour total range**
- Main services: 20 hours included separately
- Discovery (~10 hrs): case field population, case summaries (3h), article recommendation, email drafting (6h), case status/updates, case resolution (1h), knowledge article creation
- Documentation: high-level technical only (config, functionality, ongoing processes)
- Client commitment: ~5 hrs for testing (train-the-trainer model)
- **Excluded:** case prioritization, training documentation, call transcripts, third-party integrations (Google, Confluence), community enhancements, website agent, V2+ email/KB features

## Effort Estimates
| Feature | Hours |
|---|---|
| Case summarization (button-triggered) | 3–5 |
| Knowledge article recommendations | 15–20 |
| Knowledge article creation w/ human review | 15 |
| Email drafting V1 | 10 |
| Email-to-case field population | 20 |
| Testing | 15–20 |
| Data Cloud setup | 5–10 |
| Post-go-live support (30 days) | 20 |
| Training (train-the-trainer) | 2 |

## Knowledge Consolidation Challenge
Knowledge currently fragmented across: Google Cloud, Slack, Jira, Confluence, Salesforce Knowledge (limited). Data Cloud is the unification target.

## Tech Stack
- **Salesforce:** Service Cloud, Agentforce, Data Cloud
- **Constraint:** Agentforce MCP support in beta — limits doc/presentation output

## Related Pages
- [[stand8]] — partner
- [[agentforce]] — core service agent platform
- [[data-cloud]] — knowledge unification layer
- [[knowledge-management]] — KB recommendation pattern

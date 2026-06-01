---
status: active
owner: Mac
priority: p3
last_meeting: 2026-04-09
open_actions: 2
---

# Harvey — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 7–13, 2026

Met once (Apr 9 — AI Vision and Agentforce Workshop).

Full workshop session reviewing the 3-year AI roadmap and scoping Agentforce use cases. Email template POC is mostly done — mostly HTML/styling fixes remaining. Confirmed agent-agnostic approach: Einstein Agent for native Salesforce workflows, Claude for email intent parsing (multi-intent handling is the differentiator). Carl and Kate driving the roadmap toward board presentation.

Main complexity: ~40M potential price line items, EU expansion to 120 new users, SAP C4C migration leaving an ERP notification gap (sales reps currently manually monitor Power BI to detect order conversion).

**Decisions:**
- Agent-agnostic strategy confirmed (Einstein + Claude dual-model)
- Pipeline automation deferred for EU users until 6+ months of CRM adoption
- 3-year roadmap approved for board presentation

**Open questions:**
- Machine Advisor ("Map") API integration scope — when does it come into the agent strategy?
- Which of the 8 AI use cases gets funded first beyond email automation?

---
# Harvey — Journal

## Week of Apr 6–12, 2026

Workshop-style call to align Harvey's broader AI vision with Salesforce Agentforce. Carl walked through a 3-year AI roadmap (going to the board next month) spanning predictive maintenance, faster quotations, cybersecurity, sales insights, and automating low-value customer touchpoints. The group prioritized internal sales efficiency — account summaries, one-click research enrichment, pricing/availability email automation, and multilingual chat deflection — and explicitly deferred outbound AI and pipeline automation until European entities mature on the CRM. Mac recapped the prior Agentforce for Service email-template POC (mostly HTML/styling work over working functionality). *(Source: [[Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop|2026-04-09 — AI Vision & Agentforce Workshop]])*

**Decisions:**
- Focus initial AI on internal sales efficiency; no outbound AI outreach for now.
- Defer pipeline automation until EU users have 6+ months of manual SF adoption.
- Machine Advisor stays standalone — investigate API integration vs rebuild.
- Run show-and-tell demos for EU sales/CS to validate needs before rollout.

**Open questions:**
- Who owns ERP access / entity mappings / refresh cadence for pricing & stock?
- Required fields + trust rules for the Account Research prompt template?
- How to close the order-lifecycle visibility gap lost from SAP C4C — Agentforce or middleware?
- Marketing approval process/timeline to enable chat on EU production sites?

---

# Data Cloud
> Salesforce's unification layer for pulling data from disparate sources and making it actionable through agents and insights.

## Overview
Data Cloud is Salesforce's answer to the data fragmentation problem — bringing together information from multiple systems (Google Cloud, Slack, Jira, Confluence, custom databases) into a unified, queryable data model. It's positioned as the foundational layer for AI agents and intelligent workflows, enabling real-time recommendations and decision support.

Across MSS engagements, Data Cloud is emerging as critical infrastructure for agent implementations. Rather than having each agent independently query multiple systems, Data Cloud consolidates the data once, allowing Agentforce and other tools to work with a single source of truth.

## Key Details

**Litify Engagement:**
- Knowledge currently fragmented across Google Cloud, Slack, Jira, Confluence, and Salesforce Knowledge
- Data Cloud is positioned as the unification layer to consolidate all sources
- Workflow: agents recommend existing knowledge base articles with human-in-the-loop approval; if a new article resolves a case, it gets added back to the KB for future agent reference
- Scope needed: decide whether agents have internal-only access or can expose recommendations to external stakeholders

**NBCU Engagement:**
- Content recommendation data primarily sourced from Data Cloud
- Some integration work needed to fully leverage recommendation engine

**Salesforce Strategy:**
- Data Cloud presented as the standard unification approach for service agent implementations
- Key advantage: agents don't need to orchestrate multiple API calls — query once from the unified model

## Related Pages
- [[litify]] — primary use case for knowledge unification
- [[nbcu]] — secondary use case for content recommendations
- [[agentforce]] — primary consumer of unified data

## Sources
- Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync.md
- Meeting Notes/Stand8/NBCU/2026-04-08

---
*Last updated: 2026-04-10*

**Blink Engagement (Apr 2026):**
- UK payments company ingesting merchant data from banks via SFTP (large CSVs)
- Use cases: (1) daily field updates on merchant account records, (2) identity resolution to unify merchant identities across multiple providers, (3) potential knowledge base sync
- Key insight from Mac: Data Cloud triggered flows can call Apex for custom matching/creation logic, but not everything needs Data Cloud — for sources with APIs, scheduled Apex classes may be more cost-effective
- Cost concerns: Salesforce calculator exists for flex/streaming credits but accuracy is questionable; Blink has pre-paid credits
- Blink's internal resource (Leah) stuck at the ingestion-to-activation gap — knows how to stream data in but not how to make it actionable
- Advisory engagement: coaching Leah through practical implementation, evaluating each data source individually

## Sources (updated)
- Meeting Notes/Modern Stack Systems/2026-04-21 - Modern Stack Systems - Blink Data Cloud Advisory.md

---
*Last updated: 2026-04-21*

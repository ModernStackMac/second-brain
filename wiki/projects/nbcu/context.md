# NBCU — Project Context

> Stand8-partnered Agentforce POC for NBCUniversal's content-distribution Salesforce org.

## Overview
NBCU (NBCUniversal) runs a large Salesforce implementation focused on content distribution (not ad sales), centered on the "DealSet" system that manages opportunities, proposals, and approvals. Modern Stack Systems (via Stand8) is scoping an Agentforce POC. The lead use case is a pricing-fee recommendation agent: analyze historical closed-won opportunities and recommend fees for new deals to speed up budgeting. MSS is positioned as vendor-agnostic and will deliver a complimentary (non-billable) SOW outlining scope, timeline, and level of effort.

## Key Contacts
- Mac (MSS) — consultant
- Naresh — primary Stand8/NBCU contact (routes questions internally)
- Scott — scheduling/architecture
- Karthi — Business Solutions partner (data-parameter decisions)
- Liana — Stand8 (cross-project champion)
- Raghu — DealSet/app walkthrough

## What We're Building (proposed)
- **Use Case 1 — Pricing/fee recommendation (priority):** match new opportunities to similar historical closed-wons (by genre + budget) to recommend pricing. Data flows through Data Cloud.
- **Use Case 2 — Content recommendations:** recommend titles + generate pitch decks/trailers (complex on Agentforce; blocked on MCP/Office 365 GA).

## DealSet Data Model (key facts)
- Account → Opportunity → Proposal → Proposal Line Items (fees, start/end dates, media type).
- **Safe** is the source of truth for accounts and titles; integrates to DealSet every 20 min via platform events.
- Titles carry multiple IDs (six-gen number, title ID, safe ID) indicating active status.
- Modules: Parent Volume Opportunities (large-volume opps), Budget Module (Global Force + Safe + global currency via Data Cloud), Marketing memos (Season/Feature Product Memo), Deal Approvals (TVD + AMD approval for opps >$5M).

## Key Risk / Open Concern
Matching accuracy: with only genre + budget as criteria, recommendations can be wildly off (e.g. Hallmark series vs rockstar-cast comedy). Cast is explicitly excluded as a parameter (only top-10 actor names available, no success/revenue metrics; IMDB augmentation rejected by Karthi). Mac flagged this as the core solution risk; NBCU treats it as "open for solutioning."

## Tech & Constraints
- Salesforce + Data Cloud; Agentforce. Licensing ~$400–450/user under negotiation; complimentary POC credits expected.
- POC timeline ~4 weeks once environment access is secured.
- MCP/Agentforce presentation generation in beta; Office 365 integration pending MCP GA.

## Related Pages
- [[articles/agentforce-builder-beta]] — Agentforce builder/Agent Script
- [[model-context-protocol]] — MCP GA dependency for Use Case 2
- [[litify/context]] — sibling Stand8 Agentforce/Data Cloud engagement

## Project Files
- [[nbcu/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/Stand8/NBCU/2026-04-08 - NBCU STAND 8 Agentforce POC|2026-04-08 — POC Kickoff]]
- [[Meeting Notes/Stand8/NBCU/2026-04-13 - NBCU STAND 8 Agentforce POC|2026-04-13 — Architecture Review (cut short)]]
- [[Meeting Notes/Stand8/NBCU/2026-04-15 - NBCU STAND 8 Agentforce POC|2026-04-15 — Architecture Review (rescheduled)]]
- [[Meeting Notes/Stand8/NBCU/2026-04-20 - NBCU Stand8 POC|2026-04-20 — DealSet Walkthrough + Problem-Statement Alignment]]

## Sources
- Meeting Notes/Stand8/NBCU/2026-04-08, 04-13, 04-15, 04-20
- project-mapping.md

---
*Last updated: 2026-06-01*

# Talus — Project Context

> Modern Stack Systems advisory + build engagement on a Salesforce org ("Talus") — data hygiene, MCP/AI automation, forecasting, and GTM data enrichment for a sales-led org.

## Overview
Talus is a sales-driven Salesforce org Mac (MSS) is advising on across data quality, AI automation, and go-to-market tooling. The engagement spans three build tracks plus a data-strategy layer: (1) lead/contact deduplication via Apex, (2) MCP-server integration with Claude for sales-notes automation and guarded record creation, and (3) forecasting/pipeline-hygiene alerting. Alongside the build, the org is standing up GTM data enrichment (Clay + Apollo.io) and Jira-Assets-based account-health tracking ahead of a GTM-engineer hire. Mac has sandbox access to the Talus org and is leading discovery + estimates.

## Key Contacts
- Mac (MSS) — advisor / developer
- Kai — primary client contact; owns field-mapping logic and opt-in/opt-out field specs
- Dave — tech ops admin; responsible for deploying the MCP server (currently blocking testing)
- Tim — head of sales; recipient of stale-opportunity Slack alerts

## Scope / What We're Building
**1. Lead/Contact Deduplication (Apex invokeable)**
- Two scenarios: bulk admin cleanup of existing duplicates, and real-time invocation inside the lead-conversion flow.
- Email is the primary match key.
- Merge logic: master record takes precedence unless its field is null; opt-out fields always preserve a `true` value across all merged records.

**2. MCP Server Integration with Claude**
- Sales-notes automation for the sales team.
- Flow-based controls restricting record-ownership access.
- Multiple flows: campaign-member updates, bulk lead/contact creation.
- Error handling + permission controls built into flows.
- Blocked: Dave hasn't deployed the MCP server yet.

**3. Forecasting Accuracy**
- Opportunity-stagnation alerts for sales.
- Dashboard built on the OpportunityHistory object.
- Claude integration for pipeline insights.
- Slack notifications to Tim for stale opportunities.
- Alerting-system architecture review pending.

## Data Strategy & Enrichment
- **Clay + Apollo.io** — base config for ICP tracking + signal monitoring; enrich existing contacts/leads after dedup. US-only due to GDPR. Foundation needed before the GTM-engineer hire onboards; a signal-tracking best-practices strategy session is scheduled.
- **Jira integration** — Jira Assets linking accounts to escalation tickets; account-health correlation with support cases; S1-severity case alerts to account management; GTM-board integration for client-onboarding status.

## Tech Stack
Salesforce (Talus org), Apex (invokeable actions, queueable), Flow, MCP server + Claude, Clay, Apollo.io, Jira (Assets), Slack, Asana (project tracking).

## Key Constraints
- GDPR — enrichment limited to US contacts only.
- MCP-server deployment (Dave) gates the AI-automation track.

## Related Pages
- [[model-context-protocol]] — MCP layer powering the Claude/sales-notes automation
- [[patterns/lead-contact-dedup-merge|Lead/contact dedup merge pattern]] — the Apex dedup approach used here

## Project Files
- [[talus/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/Modern Stack Systems/Talus/2026-06-02 - Mac Kai Sync on Accounts|2026-06-02 — Mac/Kai Sync on Accounts]]

## Sources
- Meeting Notes/Modern Stack Systems/Talus/2026-06-02 - Mac Kai Sync on Accounts.md
- project-mapping.md

---
*Last updated: 2026-06-03*

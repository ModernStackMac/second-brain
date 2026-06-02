# Talus — Journal

## Week of June 1, 2026

Kickoff-style sync between Mac and Kai scoping a multi-track Talus engagement. Three Salesforce build tracks landed: a lead/contact deduplication Apex invokeable (bulk cleanup + real-time lead-conversion flow, email-match merge with master-precedence and opt-out preservation), an MCP-server + Claude integration for sales-notes automation and guarded record creation, and a forecasting/pipeline-hygiene track (OpportunityHistory dashboard + stale-opp Slack alerts to Tim). In parallel, the org is standing up GTM data enrichment (Clay + Apollo.io, US-only for GDPR) and Jira-Assets account-health tracking ahead of a GTM-engineer hire. Mac confirmed sandbox access to the Talus org and is taking discovery + hour estimates. *(Source: [[Meeting Notes/_Unmatched/2026-06-02 - Mac Kai Sync on Accounts|2026-06-02 — Mac/Kai Sync on Accounts]])*

**Decisions:**
- Dedup merge rule — master record wins unless its field is null; opt-out fields always retain a `true` value across merged records.
- Data enrichment scoped US-only — GDPR restrictions on EU contacts.
- Shift to task-oriented meetings — cancel the biweekly sync (Tue Jun 16).

**Open questions:**
- MCP-server deployment is blocked on Dave (tech ops admin) — no testing until live.
- Field-mapping logic + opt-in/opt-out field specs owed by Kai before dedup build finalizes.
- Alerting-system architecture for stale-opp notifications still needs a review pass.

---
*Sources: Meeting Notes/_Unmatched/2026-06-02 - Mac Kai Sync on Accounts.md*

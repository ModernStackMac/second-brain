---
status: active
owner: Mac
priority: p1
last_meeting: 2026-04-17
open_actions: 9
---

# Litify — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Internal SOW drafting session (no client meeting) plus an Apr 14 SOW pricing review with Ryan and an Apr 17 Ryan/Liana scale-down working session ahead of the afternoon Salesforce + Litify meeting. Waiting on AI requirements doc from Evan March (Litify).

Apr 17 Ryan/Liana chat: Litify pushed back on both SOW pricing and Salesforce licensing cost, so the team trimmed the SOW to the core easy wins and prepped ballpark ranges for two external agent asks. Scoped-down SOW now at 66 total hours (57 implementation + 9 PM) — removed knowledge article recommendation, email drafting, and case field population (4k fields, too expensive); kept case summaries, case resolution, and knowledge article creation (draft on case close) as core deliverables. Discovery cut from 10 hrs to 5 hrs given fewer use cases; governance/Data Cloud stays at 5 hrs (needed for knowledge article matching). UAT reduced to 10 hrs; training stays at 2 hrs (external language says 1 hr); documentation dropped to 5 hrs. Fixed-price, no rounding down. Two external agent asks also sized: external agent on website/community site (create new cases, provide case updates, recommend knowledge articles) at 40 hrs (range 10–40k depending on case update scope and KB access); internal similar-case agent (query resolved cases, match on type/subtype/industry) at 20 hrs. Both scaled SOWs plus agent blurbs going to Evan today so Litify can confirm/correct assumptions. Salesforce pushing back on Litify running this internally — Jason Valentine is the internal advocate for partner engagement (Stand8 / Pure Genic), rest of Litify resistant.

Apr 14 SOW Review pricing session: settled on 120 hours base for Agent Force for Service work plus 18 hours (15%) PM support → 138–158 total hour range. Case prioritization feature removed from scope. Discovery work scoped at ~10 hours covering case field population, case summaries (3h), article recommendation, email drafting (6h), case status/updates, case resolution (1h), and knowledge article creation. Documentation limited to high-level technical (config, functionality, ongoing processes) — training docs explicitly excluded. 20 hours of main services included separately. Awaiting client approval on final pricing.

Original ~120 hr SOW scope (pre-scale-down): case summarization (button-triggered to save AI credits), KB recommendations with human review, email drafting V1, email-to-case field population, Data Cloud setup. Post-go-live support (30 days) and train-the-trainer included.

**Decisions:**
- Case summarization is button-triggered, not automatic (AI credit conservation)
- Email drafting V1 only; V2+ moved to managed services
- Data Cloud setup included in base scope
- ~120 hrs / 8 weeks confirmed as the delivery target
- 120 hrs base + 18 hrs PM (15%) → 138–158 hr SOW range
- Case prioritization removed from scope
- Training documentation excluded — only high-level technical docs included
- Scaled-down SOW: 57 implementation hrs + 9 PM hrs = 66 hrs total, fixed price (no rounding down)
- Removed from scope: knowledge article recommendation, email drafting, case field population (4k fields too expensive)
- Kept as core deliverables: case summaries, case resolution, knowledge article creation (draft on case close)
- Discovery trimmed to 5 hrs (from 10); UAT to 10 hrs; docs to 5 hrs; training stays 2 hrs internal / 1 hr external
- External agent (website/community): 40 hrs — new case creation, case updates, KB article recommendations (10–40k range)
- Internal similar-case agent: 20 hrs — query resolved cases matched by type/subtype/industry
- Send both SOW versions (original + scaled) + two agent synopsis blurbs to Evan; Litify confirms/corrects

**Open questions:**
- Evan March to provide AI requirements doc — needed before client review call
- Ryan finalizing SOW formatting and deliverables chart; reviewing pricing with team
- Mac to review and edit deliverable descriptions
- Internal review before client presentation; awaiting client approval on final pricing
- Exact "case updates" scope — status only, or richer context? Define with Litify to avoid exposing tier-1 vs tier-2 disagreements
- Knowledge base structure — how articles are tagged/filterable drives recommendation implementation difficulty
- Liana to loop Mac in on NBCU follow-up timing (expected early next week)
- Ryan to share the working sheet with hour estimates so Liana and Mac have final numbers
- Mac standing by for Litify clarifications on KB access and case data structure once they respond

---

## Week of Apr 7–10, 2026

Met once (Apr 9 — Stand8 sync). Scoped the service agent use cases and knowledge consolidation strategy.

Confirmed the core challenge: knowledge fragmented across 5 platforms (Google Cloud, Slack, Jira, Confluence, SF Knowledge). Data Cloud is the unification target. Still determining internal vs. external agent scope (does the agent handle CS workflows only or also customer-facing triage?). Next step: reverse demo of Litify's service environment, then SOW.

**Decisions:**
- Data Cloud unification strategy confirmed as the foundation
- Reverse demo scheduled before SOW delivery

**Open questions:**
- Internal vs. external agent scope — determining which workflows the agent handles

---
# Litify — Journal

## Week of Apr 13–19, 2026

SOW iteration week. Internal working session (Apr 13) scoped the AI case-management features and hours (~120 hrs base, 8-week timeline at Mac's 20 hrs/week), pending Evan March's AI requirements doc. SOW review (Apr 14) settled 120 hrs base + 18 hrs PM (138–158 range) and removed case prioritization. Then ahead of the Salesforce + Litify meeting, Mac/Ryan/Liana scaled the SOW down hard (Apr 17): the Litify meeting covered ~80% of the wishlist but pricing came in above Salesforce's expectation and Litify questioned licensing and wanted a pilot. Team trimmed to core easy wins — case summaries, case resolution, KB-article creation — landing a fixed-price 66-hour SOW, plus ballpark external-agent (40 hrs) and internal similar-case agent (20 hrs) estimates to send to Evan. *(Sources: [[Meeting Notes/Stand8/Litify/2026-04-13 - Internal Litify SOW Discussion|2026-04-13]], [[Meeting Notes/Stand8/Litify/2026-04-14 - SOW Review|2026-04-14]], [[Meeting Notes/Stand8/Litify/2026-04-17 - Ryan Liana Chat|2026-04-17]])*

**Decisions:**
- Scaled SOW to 66 hrs (57 impl + 9 PM), fixed price; cut KB recommendation, email drafting, case field population.
- Button-triggered case summaries (conserve credits) + auto resolution summary on close.
- Send both SOW versions + two agent estimate blurbs to Evan March; let Litify confirm assumptions.
- No true pilot — full Agentforce + Data Cloud still required.

**Open questions:**
- Exact "case updates" scope for the external agent (status-only vs richer context)?
- KB access/tagging structure (drives recommendation difficulty)?
- "Surface related cases" = internal similar-resolved-cases (agreed interpretation).

## Week of Apr 6–12, 2026

New opportunity kickoff. Salesforce AEs (Evan Markovich, Sarah Paulson) brought Stand8/MSS into a Litify Agentforce for Service engagement — case triage, prioritization/scoring, KB recommendation + creation with human-in-the-loop, and Data Cloud to unify knowledge across Google Cloud, Slack, Jira, Confluence, and SF Knowledge. Mac flagged that Agentforce doesn't support MCP, so some Claude Code-style features (e.g. deck generation) aren't feasible there. Planned a 1-hour reverse demo of Litify's service environment to inform the SOW. *(Source: [[Meeting Notes/Stand8/Litify/2026-04-09 - Litify & Stand8 Sync|2026-04-09 — Litify & Stand8 Sync]])*

**Decisions:**
- Run a 1-hour reverse demo before drafting the SOW.
- SOW to cover Data Cloud integrations, case scoring, KB recommendation/creation, external agent exposure.

**Open questions:**
- Access level for each external data source; Litify's current SF licenses/Data Cloud entitlements; KB approval workflow; where/how the external agent is exposed and its auth model.

---

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

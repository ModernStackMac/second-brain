# Weekly Synthesis — Week of Apr 13–19, 2026

> Cross-project patterns, risks, and action items for the week.

## Executive Summary

This was a high-velocity week across all major engagements. CREtelligent locked in the Cost Worksheet data model and product catalog strategy after a week of design churn. MAI hit a critical UAT coordination problem (Federico overwrote Mac's changes) prompting a shared deployment doc. Litify's SOW got scaled down from 138 hrs to 66 hrs after client pushback on pricing — two external agent add-ons were sized and sent alongside. Cetera landed permission set architecture and affiliate onboarding design decisions. The HMS website got a detailed pre-launch review with ~1 week of punch-list items remaining, gated on Bryce confirming the partnerships section. NBCU, Harvey, and LNW were quiet — waiting on environment access, board presentation timing, and story reviews respectively.

## Project Status

### CREtelligent
**Moved:** Seven meetings this week. Cost Worksheet rename landed ("Environmental Cost Worksheet" → "Cost Worksheet"), full 28-field budget-vs-actual model finalized, default value strategy locked, product-to-cost routing confirmed (Automated Report → third-party cost only; EnviroSite products → Cost Worksheet). Product catalog load strategy agreed: static import from Travis's spreadsheet (~100+ products), monthly cleanup job for unknowns. Architecture direction solidified around modular Apex service classes replacing the monolithic Create Ops and Sites class. Field ownership split between Mac (Site Product) and Obed (EnviroCost Worksheet).
**Blocked:** Updated `Create Opportunity and Sites` payload still outstanding from CREtelligent — most of Mac's Apex stories are blocked until it lands. Product spreadsheet from Blake also pending (current one has data quality issues). Test-env payload targeting end of next week.
**Decisions:** 16 new decisions logged this week covering data model, pricing ownership, cost rollup chain, product catalog scope, and field responsibilities.
**Watch:** Design reversals continue to be a pattern — the team flagged frustration at mid-development requirement changes. The "soup to nuts" walkthrough planned for next week with Obed is a good stabilization milestone. Also: Andrew wants a 1hr TDX debrief with Mac re: MCP/Data 360/MuleSoft/Agentforce roadmap applicability.

### MAI
**Moved:** Eight meetings. Address-on-conversion pattern clarified (custom Address object, not standard fields, not Contact Points). Prospect address go-live approach locked: swap OOTB address component with existing custom one, no redesign. Story-point sizing exercise kicked off via Jira filter (~40 unpointed tickets). UAT deployment discipline tightened with shared Google Doc after Federico's overwrite incident. Ticket swap: Mac hands fund-account ticket to Federico, picks up non-fund-account work. Several QA passes (1097, 1199, 1222). Refactor deployed to UAT after freeze lifted.
**Blocked:** Sales process system regression — prospect info fields collapsing, asset summary / income goals / next steps not populating, dev vs UAT divergence. PDF generation alternative needs evaluation before removal. Nicole's person-account tickets not yet created by Aisha. Fund assignment rebuild needs retest in UAT (prior testing was invalid).
**Decisions:** 10+ decisions including address pattern, deployment coordination, ticket swap, story-point sizing approach.
**Watch:** 11 open commitments — highest density of any project. Go-live is approaching and the team still has coordination issues (Sean missing meetings, focus/energy dips flagged). The deployment overwrite is a warning sign for the final push. Brian's custom-address pattern still needs to be shared with Mac.

### Litify
**Moved:** SOW scaled down from 138–158 hrs to 66 hrs (57 impl + 9 PM) after Litify pushed back on pricing. Scope reduced to three core deliverables: case summaries, case resolution, knowledge article creation. Two external agent add-ons sized: website/community agent at 40 hrs, similar-case agent at 20 hrs. Both SOW versions plus agent blurbs sent to Evan at Litify.
**Blocked:** Waiting on Litify's response to the scaled-down SOW — specifically clarifications on KB access and case data structure. Salesforce internally pushing back on Litify handling this without a partner, which could complicate the engagement.
**Decisions:** Scaled-down scope locked (removed KB recommendation, email drafting, case field population). Fixed-price model. External agent ranges defined.
**Watch:** The Salesforce internal dynamics (Jason Valentine advocating for partner engagement vs. Litify resistance) could torpedo the engagement. Mac is standing by — no active build work until Litify responds.

### Cetera
**Moved:** Four meetings. Permission set architecture landed on three consolidated groups by job function. Affiliate onboarding / growth engine design approved: opportunity-based model (APP-style) for AUM-impacting lines, process-specific fields on separate objects. RPS/CRPS treated as functionally the same object. Brady onboarding unblocked (sandbox licenses resolved). Mac cleared to deploy UAT changes for prospect work. Wealth management review automation complete and demo-ready.
**Blocked:** Advice Works credentials still unresolved — may slip to Sprint 3 (low impact). Connor needs to finalize help-desk permission set groupings.
**Decisions:** 6 decisions covering permission sets, affiliate onboarding model, RPS/CRPS unification, and legacy wealth strategy integration.
**Watch:** Two open commitments — UAT deploy and affiliate onboarding design continuation with June/Connor. Sprint items where Connor is tagged but inactive need cleanup.

### NBCU
**Moved:** Architecture review meeting (Apr 13, cut short due to Karthi's absence). Primary use case locked: sales pricing recommendation engine using historical closed-won data via Data Cloud.
**Blocked:** Full architecture walkthrough rescheduled — waiting on Scott's invite. Org environment provisioning from Salesforce still a dependency.
**Decisions:** Primary use case confirmed.
**Watch:** No new activity since the rescheduled meeting. Liana to loop Mac in on follow-up timing (expected early this week — hasn't materialized).

### Harvey
**No activity this week.** Last meeting was Apr 9 (AI Vision and Agentforce Workshop). 3-year AI roadmap approved for board presentation. Agent-agnostic strategy (Einstein + Claude) confirmed. EU pipeline automation deferred 6+ months.

### LNW
**No activity this week.** Four tickets in Review (LNW-189/190/191/192 — Visibility Enhancements POC). No meeting-based journal entries yet.

### Meadow / HMS Website
**Moved:** Website pre-launch review (Apr 17) generated a detailed punch list — Services page restructure, About page copy changes, partnerships section updates (remove Enforge, add Black Diamond/Practify/Orion). Brand guide and feedback docs ingested into the wiki. Project folder restructured: website spun into its own project under `internal/high-meadow-website/`. Phase 1 launch: article tiles link to source publications, custom write-ups deferred to Phase 2/3.
**Blocked:** Go-live gated on Bryce confirming partnerships list + providing logo files. Also waiting on CSO's consolidated notes doc and attorney-drafted Privacy Policy / Terms of Use from Brian.
**Decisions:** 12 decisions covering services tile ordering, copy changes, partnership updates, content strategy.
**Watch:** 4 open commitments — all website-specific. The Meadow SaaS product itself (capacity planning app) has 40+ user stories queued but no active development this week.

### Flex Dash
**No activity.** Development fully paused — all capacity redirected to MAI per Apr 2 decision. One Linear ticket (IP-8) in progress, last updated Mar 31.

### Modern Stack Systems
**No activity in wiki.** Three meeting notes exist this week (Apr 14 AI Office Hours, Apr 15 Andrew/Mac, Apr 17 Meeting of the Minds) but `modern-stack-systems` has no journal.md or wiki folder created yet — these meetings are captured in `Meeting Notes/Modern Stack Systems/` but not synthesized.

## Cross-Project Patterns

- **Data model design churn is universal.** CREtelligent spent the week locking down Site Product / Cost Worksheet architecture after multiple reversals. MAI hit the same pattern with prospect address design — three approaches considered before settling on the custom Address component swap. Cetera's affiliate onboarding also went through TRPG vs. APP model comparison. The pattern: design decisions are being made in meetings faster than they can be implemented, causing rework. The CREtelligent team's explicit frustration and Obed's subtask documentation approach is a model the other projects could adopt.

- **UAT coordination is a shared risk.** MAI's deployment overwrite (Federico/Mac on ticket 1345) prompted a shared Google Doc. Cetera just unblocked Brady for sandbox access. CREtelligent is waiting on test-env payloads. All three projects would benefit from a lightweight deploy-coordination protocol — MAI's Google Doc is a start but not scalable across engagements.

- **Agentforce / AI agent sizing is converging.** Litify's agent work (case summaries, knowledge articles, external agent) and Harvey's multi-agent strategy (Einstein + Claude) are producing reusable sizing patterns. The 20-hr internal agent / 40-hr external agent benchmarks from Litify could inform future Stand8 engagements. NBCU's pricing recommendation engine is a third variant. Consider a reusable "agent sizing template" for SOW work.

- **Salesforce TDX 2026 ripple effects.** CREtelligent's weekly sync included a TDX debrief — MCP in Agentforce (hosted + non-hosted), dev sandbox upgrades, Agentforce Vibes with Claude Sonnet. Andrew wants a dedicated session to assess applicability. This intelligence is relevant across Harvey, Litify, and NBCU engagements too.

## Commitments at Risk

No commitments are >14 days old (oldest items are from Apr 13, 6 days ago). However, the following deserve attention:

- **MAI has 11 open commitments** — highest density of any project. Several are interdependent (prospect UAT deploy held for Nicole's changes, fund assignment retest, address modal alignment with Brian's pattern). Risk of items getting lost as go-live approaches.
- **CREtelligent has 9 open commitments** — most are blocked on external deliverables (payload from Blake, product sheet corrections). Low risk of Mac dropping the ball, but high risk of external delays cascading.
- **Litify's 3 open commitments** are all "standing by" — the engagement is in a holding pattern until Litify responds to the scaled-down SOW. If silence extends past this week, escalation through Ryan/Liana may be needed.

## Unprocessed Sources

- **`Meeting Notes/Modern Stack Systems/`** — 3 files from this week (Apr 14, 15, 17) with no corresponding wiki journal entries. `modern-stack-systems` wiki folder doesn't exist yet.
- **`Meeting Notes/High Meadows/Internal/HMU/2026-04-14 - Packaging Content for HMU Workshops.md`** — HMU workshop note; unclear if ingested into any project journal.
- **`Meeting Notes/High Meadows/Internal/Office Hours/2026-04-14 - AI Office Hours.md`** — may overlap with the Modern Stack Systems copy at the same date.
- **`Meeting Notes/High Meadows/F2-Cetera/`** — legacy folder still receiving notes alongside the canonical `Cetera/` folder (duplicates exist for Apr 13, 14, 16 standups and Brady 1:1). The Apr 18 cetera canonical reset should have stopped new writes here — confirm routing is working.
- **Two `_Unmatched/` items** flagged in `project-mapping.md`: Apr 16 and Apr 17 "Impromptu Call" with no Fathom transcripts — pending manual review.

## Recommendations

1. **Create `wiki/projects/modern-stack-systems/` with `journal.md` and `context.md`** — three meetings this week went unprocessed because the wiki folder doesn't exist. This is Mac's own practice; it deserves first-class tracking.

2. **Confirm F2-Cetera routing is fixed** — duplicate meeting notes in both `F2-Cetera/` and `Cetera/` folders suggest the Apr 18 canonical reset hasn't fully propagated to all ingest sources.

3. **Schedule the CREtelligent "soup to nuts" walkthrough** with Obed early next week — it's the best opportunity to stabilize the design before Blake's test-env payload lands end of week.

4. **Follow up on Litify SOW response** — if Evan hasn't responded by Tuesday, Mac or Ryan should ping. The Salesforce internal dynamics add urgency.

5. **Review MAI's 11 open commitments as a batch** — several are interdependent and some may be closeable or consolidatable. The go-live timeline makes this high-priority.

6. **Capitalize on TDX intelligence** — Andrew's requested 1hr debrief is CREtelligent-focused, but the MCP / Agentforce Vibes / Data Cloud insights are relevant to Harvey, Litify, and NBCU. Consider a brief internal write-up for reuse across engagements.

---
*Auto-generated by weekly-synthesis | 2026-04-19*

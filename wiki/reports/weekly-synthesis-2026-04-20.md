# Weekly Synthesis — Week of Apr 14–20, 2026

> Cross-project patterns, risks, and action items for the week.

## Executive Summary

This was a high-activity week dominated by data model hardening across CREtelligent and MAI, a significant SOW scale-down for Litify, and pre-launch polish on the HMS website. CREtelligent locked in the Cost Worksheet rename, default value strategy, and product-to-cost routing — the team is now blocked on Blake's corrected product sheet and test-environment payload (targeting end of next week). MAI's go-live scope tightened around the prospect address model after a dual-write risk surfaced, and the team adopted a shared UAT deployment doc after a cross-dev overwrite incident. Litify's SOW dropped from ~138 hrs to 66 hrs fixed-price after client pushback, with two external agent add-ons sized separately. Cetera landed permission set architecture and affiliate onboarding design. Meadow/HMS website is in final punch-list mode with a hard gate on partnership logo confirmation from Bryce.

## Project Status

### CREtelligent
**Moved:** Seven meetings this week. Cost Worksheet renamed, 28-field budget/actual model locked, default value strategy decided, product-to-cost routing finalized (Automated Report → third-party cost only; EnviroSite products → Cost Worksheet). Architecture confirmed: modular service classes replacing monolithic Apex. Field ownership split between Mac (Site Product) and Obed (EnviroCost Worksheet). Product table import spec narrowed to five fields.
**Blocked:** Apex build on hold until Blake delivers corrected product sheet and test-environment payload (end of next week target). Current product sheet has tier/day mismatches — team agreed to disregard it. Sample Automated Report payload still outstanding.
**Decisions:** 14+ decisions logged this week — Cost Worksheet rename, default values (FOIA $33, Historical $185, Choir = estimate, everything else = 50% sell), actuals roll up from PA cost only, product load is static/manual initially with monthly cleanup job, and product number uniqueness lives at Site Product level (not Product2).
**Watch:** Obed/Mac planning a "soup to nuts" walkthrough next week — current Salesforce state through quoting → proposal. Andrew scheduling 1hr TDX debrief (MCP / Data 360 / MuleSoft / Agentforce applicability). Wendell needs to finish Choir template IDs before that walkthrough.

### MAI
**Moved:** Eight meetings. Prospect address model resolved for go-live — custom Address component replaces standard OOTB on modal, no wholesale redesign. Related-person address complexity deferred post-go-live. Story-point sizing exercise kicked off via Jira filter (~40 unpointed tickets). Shared UAT Deployment Collaboration Google Doc adopted after Federico's overwrite incident. Multiple QA passes (1097, 1199, 1222 cleared). Ticket 1196 completed. Mac/Federico ticket swap to unblock fund account work.
**Blocked:** Sales process system regression — prospect info fields collapsing, asset summary/income goals/next steps not populating, dev vs UAT diverging. PDF generation tightly coupled — removal creates risk, alternative evaluation needed. Fund assignment rebuild needs UAT retest (prior testing ran before deployment). Mac's prospect UAT deploy on hold until bundled with Nicole's person-account changes.
**Decisions:** Account address uses custom Address object on conversion (Contact Points rejected), prospect UAT deploy bundled with Nicole's changes, story-point sizing via Jira filter, shared deploy doc adopted.
**Watch:** 11 open commitments — the most of any project. Go-live timeline depends on sales process bug fixes, fund assignment retest, and Nicole's person-account tickets (not yet created by Aisha). Team coordination issues flagged (Sean missing meetings, energy dips).

### Litify
**Moved:** SOW dramatically scaled down from 138–158 hrs to 66 hrs (57 impl + 9 PM) after Litify pricing pushback. Core deliverables preserved: case summaries, case resolution, knowledge article creation. Two external agent proposals sized: website/community agent at 40 hrs, internal similar-case agent at 20 hrs. Both SOW versions plus agent blurbs sent to Evan for confirmation.
**Blocked:** Waiting on Litify's response to scaled-down SOW + agent blurbs. Evan March's AI requirements doc still outstanding. Salesforce internally pushing back on Litify running this without a partner.
**Decisions:** Removed knowledge article recommendation, email drafting, case field population from scope. Discovery cut to 5 hrs, UAT to 10 hrs. Fixed-price model, no rounding.
**Watch:** This engagement could stall if Litify doesn't respond soon — three commitments are >7 days old (SOW assumptions from Apr 13, deliverable edits from Apr 14). Liana to loop Mac on NBCU follow-up timing.

### Cetera
**Moved:** Four meetings. Sprint 2 demo completed. Permission set architecture landed (three job-function-aligned groups). Affiliate onboarding / growth engine design: opportunity-based (APP-style) for AUM-impacting lines, process-specific fields on separate objects. RPS/CRPS treated as functionally same object. Brian confirmed person-account cleanup doesn't impact Mac's conversion work — Mac cleared for UAT deploy. Sandbox licenses unblocked (37 available).
**Blocked:** Advice Works integration — sandbox credential issue. Connor meeting product owner to resolve; accepted slip to Sprint 3 if not fixed. Marketing Cloud provisioning status unclear (was blocked last week).
**Decisions:** Three consolidated permission set groups by job function, opportunity-based affiliate onboarding model, CRPS as canonical target post-APP merger.
**Watch:** Two open commitments — UAT deploy and affiliate onboarding design continuation with June/Connor.

### NBCU
**Moved:** One meeting (Apr 13, cut short due to Karthi absence). Primary use case locked: sales pricing recommendation engine via historical closed-won data through Data Cloud. Architecture walkthrough rescheduled.
**Blocked:** Rescheduled architecture call (Wednesday 1:30 PM Pacific). Still waiting on org environment provisioning from Salesforce.
**Decisions:** Sales pricing recommendation confirmed as primary use case over content recommendation.
**Watch:** This engagement has been quiet — only one meeting this week and the rescheduled call is the critical next step.

### Harvey
**No activity this week.** Last meeting was Apr 9. Email template POC mostly done (HTML/styling fixes remaining). 3-year AI roadmap approved for board presentation. EU pipeline automation deferred 6+ months.

### LNW
**No activity this week.** Four stories in Review status (LNW-189/190/191/192 — Visibility Enhancements POC). Story-sync routing corrected on Apr 18 (was mis-routing to litify/).

### Meadow / HMS Website
**Moved:** Two meetings (Apr 14 ERD Sync, Apr 17 Website Review). Website in final punch-list mode — Services page cleanup (remove tile numbering, single CTA), About page copy fixes ("advisors" → operating roles language), Insights labels aligned with home page. Partnerships section needs Enforge removed and Black Diamond/Practify/Orion added. Phase 1 launch links articles to source publications; custom write-ups deferred to Phase 2/3.
**Blocked:** Hard gate on go-live until Bryce confirms partnerships list and provides logo files. CSO's consolidated feedback doc not yet received. Attorney-drafted Privacy Policy and Terms of Use still pending from Brian.
**Decisions:** Multiple copy/layout decisions from the Apr 17 review. Article tiles link to source publications for Phase 1. LinkedIn RIA posts → full articles pitched to industry publications.
**Watch:** Four open commitments — all website-related. Meadow app work (40+ additional user stories) is parked behind the website launch.

### Flex Dash
**No activity.** Development fully paused since Apr 2; all capacity redirected to MAI. One Linear story (IP-8 View As Feature) still marked In Progress from March.

### Modern Stack Systems
**Moved:** Peer sync (Meeting of the Minds Apr 17) — Mac demoed Claude Cowork scheduled tasks and computer-use workflows. Andrew/Mac business-dev catch-up (Apr 15). Recruiter call (Apr 9, Brittany Fetzner, SF QA Dev role).
**Decisions:** Start small with scheduled tasks for peers — single project, single ingest cadence.
**Watch:** Peer's second brain needs structural review before their ingest pipeline works.

### Lefavi
**No activity.** No meetings or commitments captured yet.

## Cross-Project Patterns

- **Data model hardening across engagements.** CREtelligent (Site Product junction replacing checkboxes), MAI (custom Address object on conversion replacing standard fields), and Cetera (opportunity-based affiliate onboarding to avoid field bloat) are all making the same architectural bet: purpose-built custom objects over stretching standard ones. The [[site-product-joiner]] pattern from CREtelligent could inform the MAI and Cetera designs.

- **SOW / scope pressure from multiple directions.** Litify pushed back hard on pricing (138 → 66 hrs). CREtelligent's requirements keep shifting mid-development (Obed and Mac flagged frustration). MAI's go-live scope was deliberately tightened to avoid pre-launch bloat. Pattern: scope control is the meta-theme across every active engagement this week.

- **UAT discipline gaps surfacing simultaneously.** MAI had a cross-dev overwrite (Federico/Mac on 1345) leading to a shared deploy doc. MAI's fund assignment rebuild was tested before deployment (invalid). Cetera's Advice Works is blocked on sandbox credentials. Three different projects, same root cause: deployment/environment coordination isn't tight enough.

- **TDX 2026 ripple effects.** CREtelligent team wants a dedicated MCP/Agentforce debrief next week. The new Agentforce Builder beta, hosted MCP servers, and developer sandbox upgrades are relevant to Harvey (Agentforce roadmap), Litify (Agentforce for Service), and NBCU (Agentforce POC). Mac is well-positioned to cross-pollinate TDX takeaways across all four engagements.

- **Waiting on external parties across the board.** CREtelligent waiting on Blake's product sheet + test payload. Litify waiting on Evan's AI requirements doc + SOW response. NBCU waiting on org provisioning. HMS website waiting on Bryce's partnership confirmation. Multiple projects have external dependencies as their primary blocker.

## Commitments at Risk

Items from `commitments.md` that are aging or appear blocked:

- **Litify SOW assumptions (Apr 13, 7 days)** — "Add technical assumptions and hour refinements to Litify SOW." Superseded by the Apr 17 scale-down but the original item is still open. Should be closed or replaced with the current "stand by for Litify clarifications" item.
- **Litify deliverable descriptions (Apr 14, 6 days)** — "Review and edit deliverable descriptions in Agent Force for Service SOW." May also be superseded by the 66-hr rewrite. Confirm whether this is still a live action.
- **MAI: Confirm which Michael (Apr 14, 6 days)** — "Confirm which 'Michael' the 2:05 PM Apr 14 meeting refers to and re-file if needed." Low-stakes but stale — just needs a quick check.
- **CREtelligent: Validate contact type filter (Apr 13, 7 days)** — "Validate contact type filter in Add to Connect flow." Still open, possibly blocked on QA access.
- **CREtelligent: Review product story for enviro cost worksheet (Apr 14, 6 days)** — Could be superseded by this week's Cost Worksheet redesign. Confirm whether the original story is still the right scope.
- **MAI: Refactor Client Info Component (Apr 14, 6 days)** — auto-save → explicit Next-button trigger. Core work item, still open.
- **MAI has 11 open commitments** — the highest count. Several are blocking each other (prospect UAT deploy held for Nicole's tickets, Nicole's tickets waiting on Aisha, fund account work waiting on Federico's 1343).

## Unprocessed Sources

All meeting notes from the past 7 days appear to have been ingested and reflected in journal entries. The `_Unmatched/` folder is empty. Two items from `project-mapping.md` Pending Review remain unresolved:

- **2026-04-17 "Impromptu Call" (call_id 641821592)** — Fathom returned no summary/transcript. Routing impossible.
- **2026-04-16 "Impromptu Call" (call_id 640512258)** — Fathom returned no summary/transcript. Possible mis-linking with MAI standup URL.

## Recommendations

1. **Close or update stale Litify commitments.** The Apr 13 and Apr 14 SOW items are likely superseded by the 66-hr rewrite. Clean up `commitments.md` to reflect current state so the list stays actionable.

2. **Prep a TDX cross-pollination brief.** Andrew wants the CREtelligent debrief, but Harvey, Litify, and NBCU all benefit from the same MCP/Agentforce updates. Consider a single reusable deck or one-pager that covers what's applicable per engagement — efficient and positions Mac as the connective tissue across Stand8 and Stitch accounts.

3. **Follow up on MAI's dependency chain.** Aisha creating Nicole's person-account tickets → Mac reviewing → bundled UAT deploy → fund assignment retest → go-live. Any break in that chain pushes go-live. Proactively check whether Aisha has created those tickets.

4. **Chase Bryce on HMS website partnerships.** This is a hard gate on go-live per Mac's own decision. A quick Slack or email now avoids a last-minute scramble when everything else is ready.

5. **Consider a "blocked items" standup for next week.** Five of the seven active projects have external dependencies as their primary blocker. A 15-minute Monday check-in on just the blocked items would surface which ones have moved over the weekend and which need escalation.

---
*Auto-generated by weekly-synthesis | 2026-04-20*

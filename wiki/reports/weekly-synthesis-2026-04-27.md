# Weekly Synthesis — Week of Apr 21–27, 2026

> Cross-project patterns, risks, and action items for the week.

## Executive Summary

This was an execution-heavy week dominated by CREtelligent's co-sprint kickoff (payload restructuring, cost roll-up corrections, Quire integration deep-dive) and MAI's push toward go-live (high ticket velocity, permission fixes, retirement contract gaps surfaced). A brand-new initiative launched: High Meadow Labs selected regulatory compliance as its first AI POC use case and split into builder/idea tracks. LNW got a critical entity model correction (LLCs and trusts, not households), NBCU's pricing agent scope narrowed to genre + budget only (accuracy risk flagged), and Modern Stack Systems landed a new advisory engagement with Blink for Data Cloud coaching. Litify and Harvey remain in holding patterns waiting on client responses.

## Project Status

### CREtelligent
**Moved:** Co-sprint with CREtelligent dev team kicked off (Tue/Wed/Thu dailies). Cost roll-up direction corrected: cost worksheet to site product FIRST, then site product to site. Discount roll-up chain added (site product to site to opportunity). MuleSoft evaluated but deferred for current payload work due to timeline risk. Mac staffed to collaborate with Hesham if client approves MuleSoft later. Click quote flag moved to site product level per Wendell. Opportunity stages simplified to four (quoting, proposal, active, declined). Quote Matrix LWC enhancements demoed (filter by cheapest, expanded modal, mass apply). Obed demoed full manual order processing flow. Quire report generator integration architecture mapped out. EnviroSite task object in sandbox confirmed for deletion (only task GROUP goes to prod).
**Blocked:** Vendor payload field storage location + URL config still outstanding from Travis. Environmental automated report endpoint pending. Corrected product sheet from Blake still needed. Proposal delivery blocked on endpoint confirmation.
**Decisions:** Cost worksheet to site product to site roll-up chain (corrected direction). Discount roll-ups via Apex number fields (not formulas). Click quote at site product level. Opportunity stages simplified to 4. Payload enrichment stays in current flow (not MuleSoft). Cost worksheets created at task group creation (not on opp stage change). EnviroSite task object deleted from sandbox.
**Watch:** Co-sprint is two weeks, high integration risk if payload restructuring slips. Mac + Hesham MuleSoft collaboration pending client approval. Mass apply bug (selecting all filtered quotes vs. user-selected) needs investigation.

### MAI
**Moved:** Mac knocked out 6+ tickets in a single day (1348, 1403, 1401, 1393, 1354, 1385, plus more). Prospect org-wide sharing fixed (public read-only to public read-write). CSS permission set issue resolved (missing read access to leads). Fee addendum deployed to UAT. Retirement contracts gap formally identified (no contacts migrated for business accounts). "Go Live Cleanup" epic created. Production data integrity issue identified (Dynamics time offset requires wipe and reload). Two demos delivered (retirement contracts and sales process). Nima's excessive UAT permissions discovered, invalidating Michael's recent test scripts.
**Blocked:** Retirement contracts require discovery call before build. Production wipe/reload needed. Ticket 7-98 escalated to David Torsak. IPS flow save/submit differences between dev and UAT under investigation.
**Decisions:** No new fund account number field (consolidate around existing). Prospect sharing set to public read-write. Go Live Cleanup epic for post-launch items. Retirement contracts need discovery before build.
**Watch:** Go-live timeline pressure with retirement contract scope gap, production data integrity, and Nima permission issue invalidating tests. Process training starting next week with increased activity and limited deployment windows.

### LNW
**Moved:** Entity structure corrected per Sam's feedback: focus on LLCs, trusts, people (not households). Mac committed to completing entity work before month-end. Family tree relations bug identified (doesn't display records without meeting notes). Subject field picklist limitation documented (1,000-value cap blocks free text).
**Blocked:** LucidChart license status unclear (Sean may have revoked). Subject field solution TBD.
**Decisions:** Entity model prioritizes LLCs, trusts, people. Households ignored for now. No free text on subject field until picklist limit solved.
**Watch:** Month-end deadline for entity work. May is critical for the visibility POC, roughly six weeks before Mac may get pulled to another large project.

### NBCU
**Moved:** DealSet architecture demo completed. Naresh walked through full system (opportunities, proposals, proposal line items, Safe integration, Budget Module, Marketing tabs, Deal Approvals). Mac flagged accuracy concern with genre + budget only as pricing agent matching criteria (cast explicitly excluded per Karthi despite data existing). SOW confirmed as complimentary/non-billable.
**Blocked:** Detailed questions emailed to Naresh, awaiting response within 48 hours. SOW review targeted for Thursday.
**Decisions:** Genre + budget are confirmed matching criteria (cast excluded). SOW is non-billable (scope + timeline + LOE only).
**Watch:** Pricing agent accuracy risk remains a concern. If genre + budget produce poor confidence scores, the POC value diminishes significantly.

### High Meadow Labs (NEW)
**Moved:** Two kickoff sessions held. Regulatory compliance selected as first POC use case (more deterministic than financial opinions). Team split: idea group (Brian, Sean) and builder group (Shaun, Mac, David, Steven). Multi-agent voting pattern adopted for consistency (multiple agents in parallel, surface results on consensus). Mac Studio for local POC, cloud for production. Business model: HMS owns IP, usage-based pricing, portal access.
**Blocked:** Model selection (70B+ parameter range). NDA implications flagged by Brian. Catherine/June knowledge extraction process undefined.
**Decisions:** Regulatory compliance as POC use case. Team split into idea/builder groups. Local hosting for POC, cloud for scale. Internal pilot first (compare to Claude).
**Watch:** This is an ambitious new initiative on top of Mac's already-heavy workload. No timeline or resource allocation formalized yet.

### High Meadow Website
**Moved:** Partner logos reverted to black and white (colored versions looked poor). Careers feature: `type__c = "Candidate"` on Lead, Resend.com for email, resume stays in email not SF. Vercel upgraded to Pro ($20/month). Mobile responsiveness fixes in progress.
**Blocked:** Waiting on Bryce's partnership confirmation (hard gate on go-live). CSO's consolidated notes doc for remaining copy changes still outstanding.
**Decisions:** B&W partner logos. Resend.com for careers emails. Vercel Pro.
**Watch:** Go-live gated on Bryce's partnership confirmation and CSO's notes doc, both outstanding since Apr 17.

### Cetera
**Moved:** Light week. Sprint 4 curation and UAT review. June out (anniversary), Brady out all week. Growth engine design conversations ongoing (June + Connor + Speaker 1). Odie and Chris preparing to present to broader team.
**Blocked:** No new blockers.
**Decisions:** None this week.
**Watch:** Growth engine design direction (TRPG-preserving vs. APP-style) still being shaped. Key people were out, so momentum may need rebuilding next week.

### Modern Stack Systems
**Moved:** Blink Data Cloud advisory engagement scoped (coaching Leah, 1-2 hrs/week for a month, GBP 1,000 budget). Andrew demoed Open Effigy (AI character creation). High Meadows Labs pitched to Andrew's CEO. Meeting of the Minds covered TDX debrief (Victor), Odyssea deep dive, financial strategy (Tyler Gardner CPA consultation needed). Contour platform demo with Ivory Tang (discovery call bot, SOW generation, traceability).
**Blocked:** Blink engagement pending final FD confirmation. Tax optimization research needed before CPA agreement expires.
**Decisions:** Blink engagement: coaching/advisory, no SOW, email outlining scope.
**Watch:** Mac billing 105-106 hrs/week across all engagements, targeting $500k/year. Burnout risk is real.

### Harvey
No activity this week. Last meeting Apr 9. Email template POC is mostly done (HTML/styling fixes). 3-year AI roadmap approved for board presentation. Waiting on next steps from Carl/Kate.

### Litify
No activity this week. Last meeting Apr 17. Scaled-down SOW (66 hrs) plus two external agent blurbs sent to Evan at Litify. Standing by for clarifications on KB access and case data structure. Salesforce internal resistance to partner engagement continues.

### Flex-Dash
Development fully paused. All capacity redirected to MAI.

## Cross-Project Patterns

- **AI agent initiatives multiplying across the portfolio.** High Meadow Labs (compliance model training), Harvey (Einstein + Claude dual-model), NBCU (pricing recommendation agent), Litify (Agentforce for Service), and MSS (Contour discovery bot) all have active AI workstreams. The [[multi-agent-voting]] pattern from the Labs kickoff (run multiple agents, surface consensus) could apply to Harvey's multi-agent orchestration and Litify's KB recommendation accuracy. Worth cross-pollinating.

- **Cost/data model restructuring is a recurring theme.** CREtelligent's [[cost-rollup-hierarchy]] (cost worksheet to site product to site) and [[site-product-joiner]] junction object pattern mirror similar decomposition needs in MAI (fund accounts, financial account types) and Cetera (growth engine object model). The principle of "junction objects over field explosion on parent records" is proving out.

- **Permission set architecture maturing in parallel.** MAI is discovering permission gaps in real-time (CSS/advisor profiles, prospect sharing, PDF access). Cetera formalized a [[job-function-permission-sets]] pattern (3 groups aligned to job function). MAI could benefit from applying the same consolidated approach rather than fixing permissions reactively.

- **Go-live pressure building simultaneously.** MAI (July), LNW (month-end entity work, May visibility POC), CREtelligent (two-week co-sprint), and HMS Website (gated on Bryce + CSO feedback) all have near-term deadlines converging. Mac is the common thread across all of them.

- **MuleSoft keeps coming up and getting deferred.** CREtelligent evaluated and passed (for now) due to timeline risk. The client wants to consolidate integrations there eventually. If Hesham + Mac collaborate on the MuleSoft build later, the pattern would be reusable for other integration-heavy clients.

## Commitments at Risk

- **Litify SOW items (Apr 13-14, 14 days old):** "Add technical assumptions and hour refinements" and "Review and edit deliverable descriptions" are stale. Both are waiting on Litify's response to the scaled-down SOW. No clear next step until Evan responds. Risk: engagement dies quietly if nobody follows up.

- **CREtelligent validation and review items (Apr 13-16, 11-14 days old):** "Validate contact type filter" (Apr 13), "Review product story for environmental cost worksheet" (Apr 14), and "Start research story on product payload landmines" (Apr 15) are aging. The co-sprint may have superseded some of these, but they haven't been formally closed or updated.

- **MAI refactoring and diagnostic items (Apr 14-16, 11-13 days old):** "Refactor Client Info Component" (Apr 14), "Diagnose sales process system regression" (Apr 15), "Evaluate PDF generation alternative" (Apr 15), and several Apr 16 items are aging. The high ticket velocity this week focused on lower-complexity items. The bigger architectural items (Client Info refactor, PDF generation, address model) are still open.

- **Meadow / HMS Website items (Apr 17, 10 days old):** Waiting on CSO's consolidated notes doc and Bryce's partnership confirmation. Both are external dependencies with no visible follow-up.

- **"Confirm which Michael" (Apr 14, MAI):** Minor but has been sitting for 13 days with no resolution.

## Unprocessed Sources

All meeting notes from the past 7 days (Apr 21-24) appear to have been ingested into journals and decision log. No obvious gaps detected. The two "Impromptu Call" recordings from Apr 16-17 previously flagged in `project-mapping.md` (Fathom returned no content) remain unresolved in `_Unmatched/`.

## Recommendations

1. **Follow up on Litify.** The engagement is 14 days stale. A quick check-in with Ryan or Liana on whether Evan has responded would prevent the deal from going cold.

2. **Audit aging CREtelligent commitments.** The co-sprint likely supersedes several Apr 13-16 items. Close or consolidate them to keep the commitment list clean and accurate.

3. **Escalate MAI's big-ticket architectural items.** The Client Info refactor, PDF generation alternative, and sales process regression have been open 12+ days while Mac burns through smaller tickets. These need dedicated time blocks before they become go-live blockers.

4. **Chase Bryce and CSO for HMS Website blockers.** Both the partnership confirmation and consolidated notes doc are gating go-live and have been outstanding for 10 days. A direct ping would help.

5. **Formalize High Meadow Labs timeline and resource allocation.** The initiative is exciting but Mac is already at 105+ hrs/week. Without explicit time carve-outs, Labs work will get squeezed or Mac's other deliverables will slip.

6. **LNW entity work: block time this weekend.** Mac committed to month-end completion and May is the critical POC window. This is a hard deadline.

---
*Auto-generated by weekly-synthesis | 2026-04-27*

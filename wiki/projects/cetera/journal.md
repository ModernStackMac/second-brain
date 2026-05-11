---
status: active
owner: Mac
priority: p2
last_meeting: 2026-05-11
open_actions: 8
---

# Cetera — Project Journal

## Week of Apr 28, 2026

Multi-project sprint standup (Apr 30, Mac + Travis Hickey + Andrew Porter + Vincent + Rodin): covered Cetera, NBCU POC, DocuSign, Fund Assignment, Chire API, Meadow, and internal tooling. Long session (~multi-hour).

**Next Meeting Date validation fix:** The validation rule was blocking lead conversion by firing on the `Operations Onboarding` queue. Fix: validation now fires only for status changes *before* the `Decision` stage or for disqualification. Aisha/Michael confirmed the logic.

**DocuSign integration unblocked:** Mac providing Salesforce API names for `Account` and `Contact` objects so Travis can map fields in DocuSign Maestro and sync collected data directly to Salesforce.

**Fund Assignment (Epic 923):** Remaining tickets in progress. Fund Assignment LWC needs a tweak — make Custodian Registration a lookup field. Ticket to be created and linked to 1066.

**Chire API de-scoping:** De-scoping Chire fields not in current API endpoints; relying on Order Service for Phase 1. Mac to send investigation summary to Andrew/Travis.

**EAC/Inbox Microsoft Graph upgrade:** Upgrading EAC/Inbox from legacy auth to Microsoft Graph. Coordinating re-auth with Travis.

**Sumo Scheduler → Onito rebrand:** Sumo Scheduler rebranded to Onito. Impact assessment needed — Mac investigating.

**SMA account identification:** Ticket needed to correct SMA account identification logic.

**Family page layout:** Missing fields need to be added.

**Contract-required conversion:** Mac testing/fixing contract-required conversion to ensure Contract Status = Complete.

**Case routing:** Re-testing and documenting case routing to Operations Billing; updating flow to route "Other" fee schedules.

**Site Product/cost roll-ups:** Mac to send demo (screenshots/video) to Andrew/Travis.

*(Source: `Meeting Notes/High Meadows/Cetera/2026-04-30 - Impromptu Call.md`)*

---


## Week of Apr 27, 2026

Cetera Stand Up (Apr 27, Mac solo update to team): Sprint 3 closeout validation, Sprint 4 parallel work streams, UAT communication, automation validation switch implementation timeline.

**Sprint 3 validation:** Mac validating Sprint 3 change set completeness and deploy-readiness. Sprint 3 was predominantly structural elements (metadata, objects, layouts). No demo items, but Mac confirming nothing is missing and the change set can deploy independently.

**Deployment plan:** Mac integrating the items Connor sent over end of last week into the deployment plan and spreadsheet to pull them into the work stream. Still working through the details, expects follow-up tomorrow.

**JIRA cleanup:** Closing out Sprint 3 items that were account-opening-related but handled in other work streams or already in process. Similar cleanup for Sprint 4 items (SSO, Calendly, Ring to Teams, Orion) that are executing simultaneously outside the main process stream. Mac noting on those tickets that they're being handled in parallel for efficiency.

**UAT communication:** UAT asked about Sprint 3 items. Mac clarifying that Sprint 3 was structural, and validations/automations land in Sprint 4 for testing at sprint end. Sam (HMS side) will test Connor's items for QA unless Connor prefers to skip internal testing.

**Automation validation switch:** Connor's team reviewed the switch Mac built and confirmed they'll start implementing adjustments to existing integrations in the latter half of this week. Adding the switch to most or all existing integrations, with the understanding that some integrations should not be turned off while others should. Mac documenting this in the corresponding Jira ticket.

Brian Hyman sync (Apr 27, unscheduled): Troubleshooting session + Growth Engine context.

**Growth Engine referral process architecture:** Brian walked Mac through a diagram Connor provided showing the marriage of the CPA referral team process with the accelerator (F2/Cetera's prospecting process). Key architectural difference: in the CPA referral flow, every prospecting engagement includes a financial plan presentation. In the standard accelerator process, financial plans are only built after the client signs the engagement document. This diagram represents the collaboration between marketing and Carrie (head of CPA referral team) to visualize where opportunity-level activities will map to the lead object.

**Session usage troubleshooting:** Brian maxed out his Claude session usage (100% despite being 38% through weekly allocation, bought more and consumed almost immediately). Mac investigated and found an active scheduled task in Cowork that automatically saves branding changes to Notion. Brian no longer using it. Usage jumped from 90% to 96% overnight, confirming the schedule was consuming resources while Brian slept. Disabled the schedule. Also identified Granola notifications as a potential contributor, recommended restarting the app.

**Brian's Second Brain setup:** Brian uses a handover log system to transfer work context between devices (PC to MacBook via Obsidian). Records important sessions documenting key architecture decisions. Wants to integrate Granola meeting recordings but hasn't activated it yet. Granola connected to High Meadow calendar but not F2 calendar.

*(Sources: `Meeting Notes/High Meadows/Cetera/2026-04-27 - Cetera Stand Up.md`, `Meeting Notes/_Unmatched/2026-04-27 - Brian Hyman.md`)*

---

## Week of Apr 20, 2026

Standup segment from a multi-session Fathom recording (Apr 20; primary routed to MAI). Light admin-focused standup — no blockers, no technical decisions.

Speaker 1 outlined priorities for the day: regroup from being out Friday, curate remaining Sprint 4 items, and review UAT requirements (cases done, other items still need processing). June is out for her wedding anniversary (back tomorrow or Wednesday), Brady is out this week (back next week). Growth engine design discussions ongoing between June, Connor, and Speaker 1 — Odie and Chris will present to the broader team once shaped up. Connor moved a scheduled meeting to 5:00 PM Eastern (4:00 PM his time).

No new decisions or blockers.

---


> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met four times (Apr 13 — Daily Standup, Apr 14 — Daily Standup, Apr 16 — Daily Standup, Apr 16 — Brady/Mac 1:1). Sprint 2 demo completed Apr 14. Permission set architecture direction landed; Mac's prospect work cleared for UAT deploy.

Apr 16 Brady/Mac 1:1 was not project work — primarily Brady walking Mac through his calendar sync side project (ICS-based syncing for enterprise tenants that block third-party OAuth, filling the gap Reclaim can't cover). Triggered by a duplicate meeting invite (one from HMS, one from F2) that persisted on Brady's side because Mac's cancel didn't propagate across non-OAuth'd calendars. Mac to clean up the lingering ghost event.

Wealth management review automation is complete and demo-ready — flow checks for records within past 365 days, creates new record only if none found, links back to triggering event, prevents duplicate compliance records. Custom settings infrastructure is deployed and working (hierarchical checkbox to disable flows/triggers org-wide or per user, enables clean data loads and hotfixes).

Advice Works integration is at risk of slipping to Sprint 3 — client credential issue blocking sandbox access. Connor meeting product owner today to resolve. Low impact given available resources.

Brady is joining the dev team (was sick last week, back now, laptop set up). Sandbox user limit reached — need to deactivate unused users to make room.

**Decisions:**
- Wealth management review automation complete and approved for tomorrow's demo
- Advice Works slip to Sprint 3 accepted if credentials aren't resolved today
- Permission set strategy for help desk cases: three consolidated groups aligned to job function (trading/client service, general back office, TBD third) — not one per record type, not one giant set
- Affiliate onboarding / growth engine design: opportunity-based model (APP-style) accepted for AUM-impacting lines (RPS, brokerage) to preserve forecasting; process-specific fields (feathery form IDs, file refs) stay on separate custom objects to prevent opportunity bloat
- RPS/CRPS treated as functionally the same object — CRPS business request is the canonical target and flexible post-APP merger
- Legacy wealth strategies (estate planning via wealth.com) fold into same model — request on household, enabled on lead, follows opportunity on conversion
- Sandbox licenses: 37 available after renewal sync; Brady onboarding unblocked
- Brian's person-account cleanup (removing K1/mailing fields) confirmed no impact on Mac's conversion work — Mac approved to deploy UAT changes

Apr 14 standup focused on permission set strategy and validation design. Current approach is one permission set per feature, but multiple case record types would create many sets. Open question: align permissions to job functions vs. individual record types, possibly grouped into permission set groups. Validation implementation is functionally equivalent to Connor's request — only cosmetic wording difference ("skip validation, skip flow" vs. "deactivate"). Connor unavailable (meeting with Feathery) — decisions deferred.

**Open questions:**
- Connor to get new Advice Works sandbox credentials from product owner
- Which sandbox users to deactivate for Brady's access
- Permission set architecture decision (job functions vs. record types) — pending Connor/Odie input
- Validation wording preferences — Mac to follow up with Connor
- Connor: finalize help-desk permission set groupings (3 groups — trading/client service, general back office, third TBD) by EOD Apr 16
- Connor: review sprint items assigned to him; mark done or punt to Sprint 6 (go-live-dependent)
- Brady (when back): continue affiliate onboarding design framework; field-mapping questions filtered through June
- Mac / June: circle back with Connor on the two affiliate onboarding / growth engine approaches (TRPG-preserving with CRPS records vs. APP-style multiple opportunities)

Apr 16 standup covered sandbox licenses, sprint hygiene, and a design review of the affiliate onboarding + growth engine. Sandbox unblocked (37 licenses post-renewal, Brady setup can proceed on Connor's timeline). Sprint items where Connor is tagged but inactive: Connor to clean up or punt to Sprint 6. Permission set debate landed on three consolidated groups aligned to job function — Connor finalizing by EOD. Mac and June walked Connor through the merged APP + TRPG design: APP front-loads affiliate onboarding with multiple opportunities off a single lead; TRPG uses a custom conversion flow requiring opportunity + wallet-share pre-conversion. Connor's direction: modular — keep AUM-impacting lines (RPS, brokerage) on opportunity for forecasting, push process-specific junk (feathery form IDs, file refs) to separate objects. Legacy wealth strategies (estate planning) could fold into the same pattern. Brian briefly joined to confirm his person-account K1/mailing cleanup doesn't impact Mac's conversion work — Mac cleared to deploy UAT changes.

---

## Week of Apr 7–10, 2026

Met twice (Apr 8 — Quick Sync with Connor, Apr 9 — Project Keystone Daily Working Session).

Kicked off sprint cadence. Marketing Cloud provisioning hit a blocker — final provisioning step failed, Sean escalating to AE contacts (Chris and Kevin). If resolved by Apr 15, no schedule impact. Fallback: build journeys in sandbox/TRPG and port over.

Case migration scope taking shape: 40 net new fields, record type complexity across APP/TRPG/new account setup, FSC field standardization. Cases work pulled into Sprint 3 early. Standup restructured to be dev-focused; PM items moved to front or async.

Invoicing issue: old PO on invoices, project moved to new org — new PO being opened, payment expected within days.

**Decisions:**
- Sprint 3 sign-off target: end of day Friday Apr 10
- Wednesday delivery target for sprint items going forward
- Fallback path for Marketing Cloud if provisioning not resolved by Apr 15

**Open questions:**
- Marketing Cloud provisioning (Sean + AE escalation in progress)
- Field naming standards doc needed for UAT team (singular vs. plural, federal tax bracket vs. tax bracket)

---

## Week of May 11, 2026

Project Keystone Daily Stand-up (May 11, w/ Connor + team): timeline replanning underway, JIRA cleanup items, Plan Participants scope reduction, RedTail integration prep.

**Replanning in progress:** Connor had a hectic end of last week. Team working on timeline replanning — nothing critically behind yet. Brian catch-up Friday on replanning approach. Kurt received comprehensive task list Friday for feature build replanning. Chris and Connor's notes align with remaining work.

**JIRA cleanup — minor items:** Flagged tickets with notes requiring attention are minor cleanup, not major blockers: testing validation questions, missing field/picklist values, general configuration checks. Work item submissions: changed default from "new" to "submitted" in flow. Fixed null reference issue (pointing to correct ID). Added test data to garden hose for page visibility. Planning dashboard updated with new planning tab on lead page layout. Currently running first QA pass in sandbox.

**Plan Participants decision:** After discussion with head of financial planning, team is keeping the Salesforce-eMoney integration plumbing available for future but removing the manual sync responsibility from the financial planning team for now. In FT dev sandbox, participants section has been commented out of submission forms — object remains but request excludes participants. Will reintegrate once eMoney integration goes live, at which point data syncs automatically.

**RedTail integration kickoff:** Sending RedTail mappings to team for local development start. Team will begin local work without data and port to server when ready. Risk mitigation priority given timeline concerns.

**Decisions:**
- Plan Participants: keep plumbing, remove manual sync, reintegrate when eMoney goes live
- Work item submission default changed: "new" → "submitted"

*(Source: `Meeting Notes/High Meadows/Cetera/2026-05-11 - Project Keystone Daily Stand-up.md`)*

---


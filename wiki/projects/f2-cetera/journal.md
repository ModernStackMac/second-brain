# F2-Cetera — Project Journal

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
- Mac / June: circle back with Connor on the two affiliate onboarding / growth engine approaches (TRPG-preserving with CRPS records vs. APP-style multiple opportunities with new record types)

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

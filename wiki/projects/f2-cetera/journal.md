# F2-Cetera — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met once (Apr 13 — Daily Standup). Checking in ahead of Sprint 2 demo on Apr 14.

Wealth management review automation is complete and demo-ready — flow checks for records within past 365 days, creates new record only if none found, links back to triggering event, prevents duplicate compliance records. Custom settings infrastructure is deployed and working (hierarchical checkbox to disable flows/triggers org-wide or per user, enables clean data loads and hotfixes).

Advice Works integration is at risk of slipping to Sprint 3 — client credential issue blocking sandbox access. Connor meeting product owner today to resolve. Low impact given available resources.

Brady is joining the dev team (was sick last week, back now, laptop set up). Sandbox user limit reached — need to deactivate unused users to make room.

**Decisions:**
- Wealth management review automation complete and approved for tomorrow's demo
- Advice Works slip to Sprint 3 accepted if credentials aren't resolved today

**Open questions:**
- Connor to get new Advice Works sandbox credentials from product owner
- Which sandbox users to deactivate for Brady's access

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

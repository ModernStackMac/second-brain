---
type: dashboard
owner: Mac Nosek
purpose: One-time triage of Action-Tracker.md before Phase 1 cleanup execution
created: 2026-04-18
---

# Action Triage — Phase 1 Cleanup

> Review each bucket. Check boxes to **approve the proposed action**. Uncheck or strike-through to override.
>
> - **Keep** = stays in Action-Tracker as-is
> - **Merge** = fragments consolidate into the proposed merged wording
> - **Archive** = moved to `raw/archived-actions/2026-04.md` (preserved, not deleted)
> - **Delete** = removed entirely (low-signal, wrong-owner, or process-not-task)
>
> When done, tell me "execute triage" and I'll apply.

---

## 🟢 KEEP — 22 items (stay as-is)

### CREtelligent (4)
- [x] Validate contact type filter in Add to Connect flow (Survey/Environmental/Zoning only) — *Apr 13*
- [x] Own Site Product field mapping — clean up per updated mapping workbook, ping Obed when done — *Apr 16*
- [x] Rename Environmental Cost Worksheet → Cost Worksheet and add lookup to Site — *Apr 17*
- [x] Plan next-week "soup to nuts" walkthrough with Obed — current Salesforce state through quoting → proposal — *Apr 17*

### Litify (3)
- [x] Add technical assumptions and hour refinements to Litify SOW — *Apr 13*
- [x] Review and edit deliverable descriptions in Agent Force for Service SOW (138–158 hr range) — *Apr 14*
- [x] Stand by for Litify clarifications on knowledge base access and case data structure once they respond to scaled-down SOW + agent blurbs — *Apr 17*

### MAI (5)
- [x] Refactor Client Info Component — auto-save → explicit Next-button trigger (also closes #1085 lead-value bug) — *Apr 14*
- [x] Diagnose sales process system regression — collapsing prospect info fields and non-populating asset summary/income goals/next steps; reconcile dev vs UAT divergence — *Apr 15*
- [x] Evaluate PDF generation alternative before removing current tightly-coupled system — *Apr 15*
- [x] Pick up a non-fund-account ticket while Federico finishes 1343 to unblock Mac's fund work — *Apr 17*
- [x] Load Tuesday demo bug tickets into Jira and review with Michael before assignment — *Apr 17*

### Meadow (2)
- [x] Implement all agreed copy and layout changes to HMS website once CSO sends the consolidated notes doc from the Apr 17 review — *Apr 17* (parent item — see Merge bucket for roll-ups)
- [x] Fix broken/dead Insights/article demo links surfaced during the Apr 17 website review — *Apr 17*

### Cetera (2)
- [x] Deploy approved UAT changes from the prospect work — *Apr 16*
- [x] Continue affiliate onboarding + growth engine design with June; circle back with Connor on the two approaches (TRPG-preserving with CRPS records vs. APP-style multiple opportunities) — *Apr 16*

### F2 Jira AUTO-SYNC (keep all — real assigned work)
- [x] Keep all 17 F2 Jira items intact (MAI-1278, CET-4/110-120, LNW-189-192). These are in Developer Review / In Progress / To Do / Review / Internal QA — all signal.

### HM Linear AUTO-SYNC — Flex Dash only
- [x] Keep IP-8 "View As Feature" (In Progress, Medium priority) — the only HM Linear item with real signal

---

## 🟡 MERGE — 3 consolidations (7 items → 3)

### CREtelligent — Site Product / Cost Worksheet build (3 → 1)
**Approve merge:**
- [x] Consolidate into: *"Build out Site Product + Cost Worksheet + Site Price objects — finish Site Product fields/lookups/permissions, Site Price LWCs (record edit + Opp nested), Cost Worksheet object config + LWCs; sync with Obed before product load on Product2 metadata split"* — *Apr 16-17*

**Originals being retired:**
- ~~Build Site Product object — fields, lookups, View/Edit-for-everyone permissions; add Site Verification fields to tab 1; add EnviroCost fields — *Apr 16*~~
- ~~Build Site Price LWCs (Site record edit + Opportunity nested related list) — *Apr 16*~~
- ~~Continue Cost Worksheet object config + LWCs; sync with Obed before product load on which metadata fields land on Product2 — *Apr 17*~~

### CREtelligent — Product payload research (2 → 1)
**Approve merge:**
- [x] Consolidate into: *"Complete product research story — environmental cost worksheet / single-process enviro flow review + payload landmine scan before full Salesforce/Connect integration (due within 1 day)"* — *Apr 15*

**Originals being retired:**
- ~~Review product story for environmental cost worksheet / single-process enviro flow — *Apr 14*~~
- ~~Start research story on product payload landmines before full Salesforce/Connect integration (due within 1 day) — *Apr 15*~~

### MAI — Person-accounts + address workstream (4 → 1)
**Approve merge:**
- [x] Consolidate into: *"Person-account + address refactor workstream — review Nicole's person-account tickets (once Aisha creates them), review new address modal ticket with Brian, hold prospect UAT deploy until address direction finalized, align with Brian's custom-address-on-account-conversion pattern. Bundle all UAT deploys together."* — *Apr 16-17*

**Originals being retired:**
- ~~Review Nicole's person-account tickets (once Aisha creates them) and flag implementation issues (validation rules, etc.) before build — *Apr 16*~~
- ~~Hold prospect UAT deployment until address refactor direction is finalized; bundle with Nicole's person-account changes — *Apr 16*~~
- ~~Review new address modal ticket for feasibility and conflicts (with Brian) — *Apr 16*~~
- ~~Align open address ticket with Brian's custom-address-on-account-conversion pattern once shared — *Apr 17*~~

---

## 🟠 ARCHIVE — 11 items (move to `raw/archived-actions/2026-04.md`)

### All current Closed section (9 items) — first-time backfill
The archive job has never run. On approval, backfill all `[x]` items regardless of 7-day rule, then let the new daily `archive-closed-actions` job take over:
- [x] Finish API trigger integration for Add Vendor — ✅ 2026-04-14
- [x] Increase Quote Matrix modal height — ✅ 2026-04-14
- [x] Confirm company credit card setup for Supabase and Vercel subscriptions — ✅ 2026-04-14
- [x] Schedule David call for ticket 1293 and sharing rules for 1120 — ✅ 2026-04-13
- [x] Confirm stop process requirements for ticket 1269 and create follow-up ticket — ✅ 2026-04-13
- [x] Fix picklist value for ticket 958 — ✅ 2026-04-13
- [x] Sync with Federico on datetime validation ticket 1200 — ✅ 2026-04-13
- [x] Get new Advice Works sandbox credentials (Connor-owned — archive, note rule violation) — ✅ 2026-04-13
- [x] Identify sandbox users to deactivate for Brady's access (Connor-owned — archive, note rule violation) — ✅ 2026-04-13

### Meadow — roll into parent "implement agreed copy/layout changes" (2)
These are sub-items of the parent Meadow item already in Keep. Archive them — the parent covers the scope.
- [x] Fix Services tile number color contrast (rolls into parent) — *Apr 17*
- [x] Align Insights page section labels with home page (Activity/News, Thought Leadership) (rolls into parent) — *Apr 17*

---

## 🔴 DELETE — 3 items (low-signal / process-not-task / wrong-owner)

### MAI (3)
- [x] Confirm which "Michael" the 2:05 PM Apr 14 meeting refers to and re-file if needed — *Apr 14* — **calendar housekeeping, not a commitment; delete**
- [x] Update the UAT Deployment Collaboration Google Doc on every deploy going forward — *Apr 17* — **recurring process, not a task; belongs in SYSTEM-GUIDE or a deploy checklist, not Action-Tracker**

### HM Linear bulk — prune from AUTO-SYNC scope (24 items, not deleted from Linear)
- [x] Update `story-sync` rule to exclude Linear items where `Status=Backlog AND Priority=No priority`. This removes IP-114 through IP-139 (except IP-114 "Project Setup" which is In Progress — keep that one). Net effect: 25 HM items → 2 kept (IP-114 + IP-8).

---

## Summary If Fully Approved

| Bucket | Before | After |
|---|---|---|
| Manual open | 29 | 18 (22 Keep + 3 Merge results − 7 merged source items) |
| F2 Jira AUTO-SYNC | 17 | 17 |
| HM Linear AUTO-SYNC | 25 | 2 |
| **Total open** | **~71** | **~37** |
| Closed (in-file) | 9 | 0 (archived) |

**Net reduction: ~48% fewer open items, 100% of Closed cleared.**

---

## Next Steps After Approval

1. Apply triage: rewrite `Action-Tracker.md` Open section (Merge + Keep survive), move Closed + approved Archive items to `raw/archived-actions/2026-04.md`, delete approved Delete items.
2. Update `Second Brain/_System/scripts/story-sync.js` (or the story-sync task logic) with the Backlog+NoPriority exclusion.
3. Phase 2: codify extraction rules in `SCHEMA.md`.
4. Phase 3: schedule changes (disable Wed lint, new archive job, daily-note location fix per your choice a/b).

**Reply "execute triage" to proceed, or edit boxes / add notes first.**

# Weekly Synthesis — Week of May 25–June 1, 2026

> Cross-project patterns, risks, and action items for the week.

## Executive Summary

This was a heavy delivery week on the active engagements and a near-dead week on the dormant ones. MAI locked in a **June 16 go-live**, synced production to UAT for a baseline, and spent the week fighting a Salesforce Case object field-limit ceiling that's actively blocking deployments. CREtelligent ran daily dev standups, traced the payload integration failure to missing account-creation logic, and landed a stack of architecture decisions (validation consolidation, product options 3→5, proposal acceptance signals) heading into a mid-to-late June UAT. Cetera and Lefavi both moved on wealth-management workflow design, with a notable shared instinct to reach for Notion over Salesforce for lightweight processes. Meanwhile Litify (45+ days quiet), NBCU (unsent emails since April), Harvey (no activity since April 9), and Loftware (one stale commitment) remain stalled. The big-picture risk: multiple June deadlines are converging — MAI go-live, CREtelligent UAT, LNW sprint close — right as Mac's stated ~6-week availability window before a new project (flagged Apr 22) runs out.

## Project Status

### MAI
**Moved:** Go-live confirmed for **June 16** (full capacity through June 22, half from June 23, then taper). Production synced with UAT — baseline established, focus shifting to anomalies/permissions/data. Multiple tickets passed QA (1577 + six others); fund assignment/account stories started; file-upload 3MB limit, last/middle-name mapping, and section consolidation all landed.
**Blocked:** **Case object field-limit crisis** — 47/50 custom fields, and the production custom-lookup ceiling (40) is below UAT's (41 prod vs 48 UAT). Blocking contract-request and lead-conversion controller deploys until ~10 lookups are deleted (ticket 1596) or a Salesforce case raises the limit. Fund assignment contact bug (1614 — household contacts not all selectable). Sales-process record-type names pending from Brian G.
**Decisions:** Regression plan scrapped — Brian G and Aisha hand-hold testing with direct production deployment monitoring. Entity record type **not committed** for the June 8 deadline (new functionality, can slip weeks).
**Watch:** p1 project consuming full capacity through June 22. Brian G meeting could reopen scope on 1448 (standard prospects vs entities) — team wants a step-through, not a direction change.

### CREtelligent
**Moved:** Daily dev standups all week (May 26–27) plus weekly refinement and a Mac/Obed working session. Root-caused the payload integration failure to missing account-creation logic; built account-creation fallback (match on CRE account ID → else create). Site product options expanded 3→5 (added Valuation, Other). Two stories left for functional parity, targeting Thursday/Friday deployment.
**Blocked:** Mac's travel disruption ate into the week. Automated-report classification still being sorted (EPS/EPS Advanced/Property Condition Pre-Screen automated; **EPS Pro Insight reclassified as non-automated** — needs manual environmental-professional verification).
**Decisions:** Consolidated validation approach — **all validations in flows OR all in Apex, not mixed** (stage-gate on opportunity progression). Proposal acceptance signal = datetime "ready to kick off" field + Order ID (accepted) vs Proposal ID (pending), no e-sig yet. Turnkey calculator land-use conditional logic verified. Historical scope isolation — product edits apply to future proposals only. Connect API vendor lists per site via lat/long from Regrid GeoJSON.
**Watch:** UAT targeted mid-to-late June. Commitment tracker still carries 30+ open CRE items, many from mid-April — triage flagged last synthesis, still overdue.

### Cetera (Project Keystone)
**Moved:** One Keystone standup (May 26). Connor's parallel workstream (work desk + financial planning) deployed to F2 dev sandbox — needs verification testing. Started gifts & addresses analysis (data-quality issues, third/fourth address handling uncertain).
**Blocked:** Database access — Informatica and SSMS installed, but the CyberArk connection process is blocking; resolution call scheduled.
**Decisions:** ABP action plans **not worth recreating in Salesforce** (most are 2 trivial tasks) — except the CPA-affiliate-departure process; explore a **Notion** solution first.
**Watch:** Two due dates from the May 18 standup have passed — next-week work list (due Wed May 21) and Jira-item creation + UAT marking (due Fri May 23). Confirm both landed.

### Lefavi
**Moved:** Weekly call (May 28). DocuSign contract/profile templates rebuilt with conditional formatting; testing a simple web-form → prefilled e-sig → auto-SF-sync flow first. Quick Data moving toward beta (two calls with the Quick product director). AI use cases scoped (new-money reporting, client-contact tracking, transaction summaries).
**Blocked:** DocuSign field-mapping gaps — several Schwab application fields have no Salesforce equivalent (employment status, employer address, publicly-traded questions, mailing-address format). Ian documenting schema for the missing fields.
**Decisions:** DocuSign — test simple integration before adding complexity. Quick Data — build around the new Form Stream platform ($7,500 setup) rather than refactoring existing processes.
**Watch:** New overnight ops hire starts June 22. Two fresh commitments (remove Calendly, forward SF product-retirement email to Ian).

### LNW
**Moved:** Nothing new this week — Mac was OOO May 19–26 (Barcelona). Last meeting May 18; sprint closed May 30/31.
**Watch:** Inline-editing investigation (~5 pts) from May 18 still open. The super-family 3-level hierarchy filter (zero-records bug) and the search-filter reload bug remain on the list. PM burden has shifted heavily onto the MSS side (June + Mac, est. 50–100 hrs on client admin) with no production releases yet by design — a client-cost-vs-visible-output tension worth watching. The Apr 22 entity-structure and LucidChart-license items are now 40 days old.

### Modern Stack Systems
**Moved:** AI Office Hours (May 26) and a Berkley Hurst session (May 28). 
**Decisions:** Planning a **Salesforce → Notion CRM migration within the year** — current SF spend ~$10K/yr for minimal license use, power users already work through Claude not the SF front-end.
**Watch:** Randall full-system walkthrough was scheduled for May 29 (Thu) — confirm it happened. GoInspo/Staff Connect redesign recommendations now owed to Berkley. Anthropic partnership certification (4 modules) still targeted for the Brussels flight. Tax-optimization research and TDX 2027 early booking (both Apr 24) untouched.

### Blink Payments
No new meeting this week. The May 11 Data Cloud advisory was ingested into the wiki today (journal + context + bulk-processing pattern). Open commitment: Data Cloud transform sessions with Liam (merge portal + Stripe streams into a master table) — ongoing, no confirmed date.

### Cartier
No activity this week. **Solution design document was due May 14 — now ~18 days overdue.** Remaining items (email service + unique address for Nick, attachment-ordering fix, EAC production deployment) all from May 13–15. Still no project-mapping.md entry despite an active meeting folder and wiki pages — routing gap flagged on ingest.

### Litify
No activity. Last meeting April 17 — **45+ days stalled.** All three commitments (scaled 66-hr SOW awaiting client response) are dead in the water. Needs a go/no-go call.

### NBCU
No activity. Four outbound commitments from Apr 20–30 (SOW to Ranjit/Naresh, Agentforce-vs-Plan-B to Andrew, Salesforce-rep call) remain unsent, now 32–42 days old.

### Loftware
No activity since the Apr 27 attack-plan session. One commitment (John Gravins RCA-architect outreach) sitting 35 days.

### Harvey
No activity. Last meeting April 9 — effectively dormant. No tracked commitments.

### Internal — Meadow / HMS Website / Flex Dash
Meadow decision (May 27): **phased rollout** — beta group (Mac, Chloe, June) for one week, then org-wide; Linear adopted for bug tracking; Brady running point. Also floated a "quick integration deployment" model (30 hrs flat per engagement, tiger-team). HMS Website Resend.com API-key config (Apr 20) is now 42 days old; the four April 17 website copy/layout items are 45 days old. Flex Dash remains paused for MAI.

## Cross-Project Patterns

- **Notion is becoming the default for lightweight workflow/CRM where Salesforce licensing isn't justified.** Cetera decided ABP action plans and the CPA-departure process belong in Notion, not Salesforce; MSS is planning a full SF→Notion CRM migration citing ~$10K/yr SF cost for minimal seat usage. Same instinct surfacing in two unrelated engagements in the same week — worth a reusable point of view on when SF is overkill.

- **Salesforce platform-limit ceilings are starting to gate delivery.** MAI is blocked by Case object custom-field (47/50) and custom-lookup (40 prod) limits; CREtelligent keeps expanding objects/fields (site product options 3→5, new cost categories). Field-budget management is now a real architectural constraint on the data-model-heavy builds, not a footnote.

- **DocuSign / e-signature field mapping recurring across all three wealth-management clients.** Cetera (DocuSign Maestro Account/Contact API mapping), Lefavi (template rebuild + Schwab-field gaps), and MAI (retirement-contract signer limits) are each solving variations of the same problem. The Schwab/SF field-gap learnings from Lefavi are directly reusable for Cetera.

- **Validation-architecture consolidation as a stance.** CREtelligent's "all-flows-or-all-Apex, never mixed" decision (May 27) is the same philosophy behind the existing [[patterns/validation-rule-bypass-before-save]] pattern. This is hardening into a default architectural position across SF engagements.

- **June deadline pile-up against a closing capacity window.** MAI go-live (June 16, full capacity to June 22), CREtelligent UAT (mid-to-late June), LNW sprint close, and Cetera's pull-work-forward push all land in the same stretch. Sam flagged back on Apr 22 that Mac had ~6 weeks before a new project pulls him — that window is now expiring. The 30-hr flat-rate "tiger team" model implies even more concurrent load.

## Commitments at Risk

**Critical (45+ days, no movement):**
- **Litify** — all 3 SOW items (Apr 13–17). Engagement effectively dead; no next step.
- **HMS Website** — Resend.com API key config (Apr 20, 42 days). Careers email feature blocked.
- **Meadow/Website** — 4 copy/layout + broken-link items (Apr 17, 45 days). Likely superseded by the phased-rollout plan — close or formally defer.

**Aging (30–42 days):**
- **NBCU** — 4 unsent outbound items (Apr 20–30). All low-effort sends that unblock the engagement.
- **LNW** — entity-structure work and LucidChart follow-up (Apr 22, 40 days).
- **MSS** — tax-optimization research and TDX 2027 booking (Apr 24, 38 days).
- **Loftware** — John Gravins outreach (Apr 27, 35 days), the only tracked item.

**Overdue against explicit due dates:**
- **Cartier** — solution design document (due May 14, ~18 days late).
- **Cetera** — next-week work list (due May 21) and Jira/UAT marking (due May 23) — confirm both closed.
- **MSS** — Randall full-system walkthrough (scheduled May 29) — confirm it ran.

**Needs triage, not necessarily late:**
- **CREtelligent** — 30+ open items, many mid-April. Daily standup cadence means most are in-flight or superseded, but the tracker hasn't been reconciled. Triage was recommended last synthesis and is still outstanding.

## Unprocessed Sources

The wiki was bootstrapped today (June 1) — a large first-build ingest run that processed articles plus the Harvey/NBCU/Litify/Blink/Cartier/CREtelligent slices and refreshed the active High Meadows journals (MAI, Cetera, LNW, Lefavi) with week-of-May-25 entries. Decisions from all this week's meetings are captured in the Decision Log through May 29.

Still in the backlog per [[index]]:
- **Modern Stack Systems** — ~23 root notes (peer syncs, recruiting, AI office hours, Dave/Mac, Andrew/Mac) not yet compiled into a full journal. This week's MSS sessions (AI Office Hours May 26, Berkley Hurst May 28) have decisions/commitments captured but no journal entry.
- **High Meadows deep backlogs** — Cetera/MAI/LNW/Lefavi/Loftware historical meeting notes beyond what the active journals cover.
- **_Unmatched/** — routing review still pending (Apr 16–17 Fathom calls with no transcript).
- **Cartier** — still missing a project-mapping.md entry despite active wiki pages.

No meeting note from the past 7 days appears to be entirely unprocessed — but the MSS journal is the gap to close on the next ingest run.

## Recommendations

1. **MAI: clear the field-limit blocker now.** It's the single thing gating production deploys 15 days from go-live. Either push ticket 1596 (delete 10+ unused lookups, with the David/Cory approval + mapping-sheet update) or open the Salesforce case to raise the production limit. Don't let this ride.
2. **Litify and Harvey: make the call.** Both are 45+ days dark. Either ping for a response or formally pause them so they stop generating stale-commitment noise.
3. **NBCU: send the four emails.** Low effort, 32–42 days overdue, and they're the only thing blocking the engagement.
4. **Cartier: ship the overdue solution design doc** (18 days late) and add the project-mapping.md entry so routing stops flagging it.
5. **Capacity reality-check for June.** MAI go-live, CREtelligent UAT, LNW sprint close, and Cetera all converge. Decide now what gets Mac's full attention through June 22 and what gets explicitly deprioritized — the implicit "everything stays active" stance isn't realistic.
6. **Capture the Notion-vs-Salesforce POV.** It's come up twice this week (Cetera, MSS) with real dollar logic behind it. Worth a short reusable note on when to steer clients off SF for lightweight workflows.
7. **Run the CREtelligent commitment triage.** 30+ open items, daily cadence — 15 minutes with Andrew to mark done/superseded would make the tracker trustworthy again.

---
*Auto-generated by weekly-synthesis | 2026-06-01*

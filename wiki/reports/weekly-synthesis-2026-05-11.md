# Weekly Synthesis — Week of May 5–11, 2026

> Cross-project patterns, risks, and action items for the week.

## Executive Summary

CREtelligent and MAI were the only projects with meaningful forward progress this week, both through daily/weekly dev standups. CREtelligent resolved a field formatting integration bug, completed integration mapping, and identified a logic gap for automated report products — but carries 28+ open commitments and an increasingly complex integration surface. MAI is pushing toward a May 22 code freeze with a QA bottleneck (Aisha out, Vincent solo) and a ticket shortage that needs backlog rebalancing. Meanwhile, several projects have gone quiet: Litify hasn't moved since April 17 (24+ days), LNW's critical May visibility POC has had no meetings since April 22, and NBCU's SOW and Agentforce escalation emails remain unsent from April 30. Capacity is stretched thin across the board.

## Project Status

### CREtelligent
**Moved:** Field formatting 400 error resolved (Blake's uppercase C payload fix). Integration mapping complete across accounts, opportunities, sites, site products, and cost worksheets. Named Credentials adopted as standard auth for all SF-to-OT integrations. Null formula field bug identified and scoped. DocGen proposal reversed to pixel-perfect PDF recreation.
**Blocked:** Automated report products need separate logic path — waiting on Blake's Radius test payload (OT doesn't support automated report orders). Eris integration deferred pending internal alignment between Travis/Wendell/Kurt. DocHub folder creation requires a design spike before implementation. Document sync rewrite (delete-and-reinsert → proper upsert) needed before DocHub allows direct uploads.
**Decisions:** Named Credentials standard for all new integrations (May 5). Automated report handling: separate logic path triggered by product type (May 7). Eris deferred (May 7). DocGen pixel-perfect recreation approved (May 7). Doc sync rewrite required (May 5). DocHub folder creation needs dedicated spike (May 5).
**Watch:** 28+ open commitments, many from mid-April. Integration surface keeps growing (Connect API, MuleSoft, Radius, DocHub, Quire, Eris). Co-sprint dailies provide good cadence but the sheer volume of parallel work streams creates risk.

### MAI
**Moved:** Mac's $14.66 PR submitted and tested in both environments. Trustee ticket consolidation — 1445 killed, 1463 retained, 1448 assigned to Brian. Prioritization approach clarified (highest priority first, then epic). Permission set architecture settled: staying with current permission sets, no PSG migration.
**Blocked:** Ticket shortage — backlog rebalancing needed. Brian G holds several items created during refinement; unclear if he's holding for prioritization or they need reassignment (Chloe asking Justin). QA bottleneck with Aisha out — Vincent covering solo, targeting ~20 tickets cleared by Monday.
**Decisions:** Kill ticket 1445 (May 7). Stay with permission sets — no PSG migration (May 7). Prioritize by highest priority first, then epic (May 7).
**Watch:** Code freeze May 22 — 11 days out. Is capacity plan realistic given current ticket velocity? Sean running blocked-ticket analysis. 12 open commitments from April, several may be stale or superseded.

### Cetera
**Moved:** Story sync boards updated (May 8). Automation validation switch should be rolling out via Connor's team (started latter half of week of Apr 27). No new meetings this week.
**Blocked:** No visible blockers, but no meetings or journal updates since Apr 30.
**Decisions:** None this week.
**Watch:** 15 open commitments, many from Apr 30 multi-topic standup. Sprint 4 work should be in progress but there's no meeting cadence confirming status. Fund Assignment (Epic 923), DocuSign field mapping, EAC/Inbox Graph upgrade, and several other items all open simultaneously.

### LNW
No activity this week. Last meeting: Apr 22. Board and stories updated via automated sync (May 7-8).
**Watch:** Entity structure work was committed before month-end (Apr 30) — appears incomplete. Sam emphasized May is critical for the visibility POC and that Mac has roughly six weeks before a new project pulls him away. No meetings in 19 days despite the stated urgency. LucidChart license follow-up with Sean still open.

### NBCU
No activity this week. Last meeting: Apr 30.
**Watch:** Three commitments from Apr 20-30 remain open: SOW email to Ranjit/Naresh, Agentforce vs Plan B email to Andrew, and scheduling a call with the NBCU Salesforce rep. Dual-path strategy (Agentforce primary, GenAI backup) was decided Apr 30 but no execution has followed.

### Litify
No activity this week. Last meeting: Apr 17. All 3 commitments are 24+ days old.
**Watch:** SOW was scaled to 66 hrs (57 impl + 9 PM) on Apr 17. Awaiting client response on the scaled-down scope. This engagement has been effectively stalled for over three weeks with no visible next step.

### Harvey
No activity. Last meeting: Apr 9. No open commitments tracked in commitments.md.

### Loftware
No activity. Last meeting: Apr 27 (Attack Plan session). 1 open commitment: reach out to John Gravins about RCA architect availability (14 days old). Plan of attack was due "by Thursday" (May 1) — status unknown.

### Cartier
No activity. Last meeting: Apr 30. 2 commitments: solution design document (due May 14, 3 days away) and activity timeline LWC reuse investigation.

### Internal (Meadow / HMS Website / Flex Dash)
No meetings this week. Meadow stories updated via Linear sync (May 7). 4 website commitments from Apr 17 (24 days old) — copy/layout changes, broken demo links, Services tile contrast, Insights page labels. Meadow time-entry app targeting June 1 launch per Apr 30 decision. Flex Dash development remains paused for MAI.

### Modern Stack Systems
No meetings since May 4. 2 commitments from Apr 24: tax optimization research (Tyler Gardner / Social Cap CPA) and TDX 2027 early booking.

## Cross-Project Patterns

- **Integration complexity explosion** — CREtelligent (Connect API, MuleSoft, Radius, DocHub, Quire, Eris) and Cetera (DocuSign Maestro, EAC/Inbox Microsoft Graph, Chire API, Sumo→Onito) are both managing 4+ concurrent integration work streams. The pattern of vendor APIs with incomplete endpoints (Chire, Eris, DocHub) forcing scope deferrals or workarounds is consistent across both engagements.

- **Auth modernization in parallel** — CREtelligent standardizing on Named Credentials (replacing Custom Labels), Cetera upgrading to Microsoft Graph (replacing legacy EAC auth). Both are infrastructure-level improvements happening mid-sprint rather than as planned migration work.

- **QA bottlenecks compounding with timeline pressure** — MAI has a QA capacity gap (Aisha out, Vincent solo) 11 days from code freeze. CREtelligent needs separate test cycles for automated report products. Neither project has a clear QA buffer plan.

- **Architectural stabilization decisions landing** — MAI settled on current permission sets over PSGs; CREtelligent's Site Product joiner and cost rollup hierarchy are maturing; Cetera's automation validation switch is rolling out. Multiple projects simultaneously moving from design to "this is how it works now" — good sign for delivery velocity if teams execute.

## Commitments at Risk

**Critical (>21 days, no visible movement):**
- Litify SOW response — all 3 items (Apr 13-17, 24-28 days old). Engagement stalled. No next step defined.
- MAI: Refactor Client Info Component auto-save (Apr 14, 27 days). Diagnose sales process system regression (Apr 15, 26 days). Evaluate PDF generation alternative (Apr 15, 26 days). These were flagged as important in mid-April and may be deprioritized but haven't been closed or reclassified.
- LNW: Complete entity structure work before month-end (Apr 22, 19 days — due date passed). Follow up with Sean about LucidChart (Apr 22, 19 days).
- NBCU: Email questions to Naresh (Apr 20, 21 days). Email updated SOW (Apr 30, 11 days). Schedule Agentforce access call (Apr 30, 11 days).

**Aging (14-21 days, may need triage):**
- CREtelligent has ~15 items from Apr 13-24 that are 17-28 days old. Given the project's daily standup cadence, many may be in-progress or superseded by newer work — but they haven't been checked off. A triage pass is overdue.
- Meadow/Website: 4 items from Apr 17 (24 days). Website launch may have moved past these items.
- Cartier: Solution design document due May 14 (captured Apr 30) — 3 days remaining.
- Loftware: John Gravins outreach (Apr 27, 14 days). Plan of attack delivery target passed.
- MSS: Tax optimization research and TDX 2027 booking (Apr 24, 17 days).

## Unprocessed Sources

No meeting notes from the past 7 days remain unprocessed. The four meetings this week (CREtelligent May 5/6/7 standups, MAI May 7 DSU) are all reflected in their respective journal entries and the Decision Log.

Three raw project docs for Meadow were logged on May 11 (database schema, open items, user stories) — content already existed in [[internal/meadow/context]] from a prior session.

## Recommendations

1. **Triage CREtelligent commitments.** The project has 28+ open items, many from mid-April. Run a 15-minute triage with Andrew: mark completed items as done, close superseded items, and identify what's actually blocking vs. queued. The daily standup cadence means work is happening — the tracker just isn't keeping up.

2. **Litify: make a go/no-go call.** Three weeks with zero movement. Either ping the client for a response or formally pause the engagement. Keeping it "active" with stale commitments creates noise.

3. **LNW: schedule the May visibility POC kickoff.** Sam flagged May as critical. It's May 11 with no meeting since April 22. The entity structure work was due April 30. Get a sync on the calendar this week.

4. **NBCU: send the emails.** Three outbound items (SOW, Agentforce pros/cons, Salesforce rep scheduling) have been sitting since Apr 20-30. These are low-effort sends that unblock the engagement.

5. **Cartier solution design document is due May 14.** Three days out. Confirm status or flag the delay to Chad.

6. **MAI code freeze May 22 — validate the plan.** With ticket shortage, QA bottleneck, and 11 days to freeze, confirm what's realistically landing. Sean's blocked-ticket analysis should inform this.

7. **Meadow June 1 launch — website commitments stale.** If the June 1 target is still real, the four website items from April 17 need attention or formal deferral.

---
*Auto-generated by weekly-synthesis | 2026-05-11*

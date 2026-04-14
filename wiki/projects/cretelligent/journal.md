# CREtelligent — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met twice (Apr 13 — Internal Stitch Sync with Obed; Apr 14 — Stitch CREtelligent Stand Up).

Short QA-focused sync. Confirmed that the "add to Connect" automation needs contact type filtering before the API call fires — only Survey, Environmental, and Zoning contact types should trigger the Connect API callout. Client and prospect types should be excluded. Mac confirming the logical flow handles this correctly.

Apr 14 Stand Up covered environmental site automation and cost worksheet design. Decision to convert the existing enviro site → task group Flow logic to Apex — team prefers Apex for better control and no further Flow updates are expected. Site creation, enviro operations, and task groups will all run in a single process. Environmental cost worksheet creation is the missing piece in the current flow; it will be triggered record-triggered on task group insert (1:1), with worksheet type determined by task group type. One active worksheet per environment (users can evaluate multiple options but only one active at a time — primarily relevant during phase-one evaluations). ESA flow to be removed as part of cleanup. Site products tracking being added: one product-per-site record, payload comes from the service with all required data. DocHub integration design to be reviewed in Thursday internal meeting.

**Decisions:**
- Contact types that trigger Connect API: Survey, Environmental, Zoning only
- Convert enviro site → task group Flow logic to Apex (no further Flow investment)
- Single-process model: site creation + enviro operations + task groups handled together
- Environmental cost worksheet: record-triggered on task group insert (1:1), type driven by task group type
- One active environmental cost worksheet per environment
- ESA flow to be removed during cleanup
- Site products: one product-per-site record, payload sourced from the service

**Open questions:**
- QA validation of the contact type filter — confirm it works as expected in testing
- Obed building the environmental cost worksheet flow — implementation timing
- DocHub integration design review — Thursday internal meeting
- Valuation functionality needs refinement — revisit in upcoming discussions
- Consider: GitHub repo for logging component development with Claude reports

---

## Week of Apr 7–13, 2026

Met three times (Apr 9 x2 — Validation Workaround Sync + Sprint Review + Tech Team Huddle, Apr 10 — Weekly Status/Demo, Apr 13 — Internal Sync).

Demo day on Apr 10 went well. Three stories shown: Quote Matrix LWC, Add Vendor to Connect modal (#81220), Choir template ID formula field.

**Quote Matrix LWC** got strong approval from Wendell — approved as shippable for current sprint. Enhancement requests scoped separately: increase modal height, filter by selected contractor per site, cheapest quote filter, sorting options, margin/profit at site level (blocked until cost modeling finalized).

**Add Vendor modal** needs two adjustments before done: (1) don't pre-populate company field from opportunity — let users search/create instead, (2) move launch point from Enviro Site down to PA object level (under Enviro Task). Also need PA skill/contact type multi-select dropdown — Travis to clarify how Connect defines service types/zones. API integration tested well but waiting on payload update to build return URL (need ID back from Connect).

**DocHub integration** reviewed at high level — architecture is two Experience Cloud sites with LWC-driven collaboration. Andrew flagged potential to migrate from custom document object to standard ContentDocument.

**Decisions:**
- Quote Matrix LWC approved for current sprint as-is; enhancements scoped separately
- Add Vendor modal: no pre-populate on company, launch from PA object not Enviro Site
- Contact types that trigger Connect API: Survey, Environmental, Zoning only
- ContentDocument migration under review (Andrew and Mac)

**Open questions:**
- Travis: Choir template ID needed for formula field (tracked in ClickUp)
- Travis: How does Connect define service types and zones for PA skill/contact type dropdown?
- Andrew/Mac: ContentDocument vs. custom document object for DocHub?

---

## Week of Apr 2–4, 2026

Met once (Apr 2 — Internal Team Sync).

QBR reviewed — no high-risk items. Schwab integration running clean. Salesforce cert expiring June 15 — checked apex classes, named credentials, connected apps; nothing references it. Closest match was Webex connected app. Decision: leave alone and monitor.

Account onboarding form ~90% built (combines contract, profile, Schwab application). Altruist reached out to Stuart — Mac providing reports. Hierarchy/junction box proposal: other party expects response within a month.

**Decisions:**
- Cert expiry: leave alone, monitor for breakage (nothing references it)

**Open questions:**
- Altruist roadmap placement response (within ~1 month)
- Jay (other advisor) on hold pending family situation

---

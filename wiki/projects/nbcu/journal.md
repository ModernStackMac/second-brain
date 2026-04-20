---
status: active
owner: Mac
priority: p2
last_meeting: 2026-04-20
open_actions: "3"
---

# NBCU — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met once (Apr 13 — Architecture Review; Granola file timestamp glitch produced duplicate 04-13 and 04-15 source files for the same meeting). Karthi (business solutions partner) was absent, causing the session to cut short and reschedule.

Confirmed scope: primary use case is the **sales pricing recommendation engine** — agent recommends pricing based on historical closed-won opportunities, data flows through Data Cloud. Content recommendation use case remains in scope but pricing is the priority.

**Decisions:**
- Primary use case locked: sales pricing recommendation (historical closed-won data via Data Cloud)
- Rescheduled full architecture walkthrough: Wednesday 1:30 PM Pacific (Scott sending invite)

**Open questions:**
- Full product/price book hierarchy and opportunity data flow into Data Cloud — to be walked through on rescheduled call
- Agent pricing recommendation logic design (how does it surface benchmarks to the sales team?)

---

## Week of Apr 6–10, 2026

Met once (Apr 8 — initial kickoff/scoping).

Scoped out the two-use-case POC. MCP beta constraint noted as a limitation for presentation/deck generation — workarounds will be needed for generating pitch decks with embedded trailers. SOW agreed to deliver within 48 hours of org demo.

**Decisions:**
- Two POC use cases confirmed: content recommendation + sales pricing strategy
- 4-week POC window post environment access

**Open questions:**
- Org environment provisioning from Salesforce (dependency before work starts)

---

## Week of Apr 20–26, 2026

Met once (Apr 20 — DealSet Architecture Demo + Agent Solution Discussion). Naresh, Raghu, and Liana attended.

Naresh walked through the **DealSet system architecture**: opportunities to proposals to proposal line items (fees, start/end dates, titles). Safe is source of truth for accounts and titles, integrated to DealSet via platform events every 20 minutes. Key modules: Parent Volume Opportunities (high-volume opp management), Budget Module (connected across Global Force, Safe, and currency systems via Data Cloud for annual title-level forecasting), Marketing tabs (Season/Feature Product Memos flowing between systems), and Deal Approvals (TVD + AMD approvals required for opportunities >$5M). Titles tracked with six-gen number, title ID, and safe ID.

Mac raised the core concern about the **pricing fee recommendation agent**: with only genre and budget as matching criteria, recommendations could be wildly off (e.g., a Hallmark comedy vs. a rockstar-cast comedy). Cast data exists (top 10 actor names) but Karthi explicitly said cast should NOT be a scoring parameter — no metrics on actor success or revenue impact. IMDB augmentation also rejected. Team acknowledged the accuracy gap but confirmed genre + budget are the primary matching criteria per Karthi's direction.

Naresh expressed frustration about unresolved questions on the original problem statement — the call was intended for DealSet data model showcase, not agent approach debate. Mac acknowledged but emphasized the consultative approach to ensure solution effectiveness. Both sides agreed to move forward.

**Next steps:** Mac and team to email detailed questions to Naresh on parameters and agent matching criteria. Naresh to surface internally and respond within 48 hours. SOW (complimentary/non-billable, scoping effort + timeline + value) targeted for Thursday review. Additional demos available on request.

**Decisions:**
- Genre + budget are the confirmed primary matching criteria for the pricing agent (cast excluded per Karthi)
- SOW is complimentary (non-billable) — communicates scope, timeline, and level of effort

**Open questions:**
- Can the pricing recommendation achieve acceptable accuracy with only genre + budget? Mac flagged risk of poor confidence scores.
- Detailed agent matching parameter questions — Mac to email Naresh
- SOW review targeted for Thursday — pending question resolution

---


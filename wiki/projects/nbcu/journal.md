---
status: active
owner: Mac
priority: p2
last_meeting: 2026-04-30
open_actions: "3"
---

# NBCU — Project Journal

## Week of Apr 28, 2026

NBCU POC strategy discussed during multi-project Cetera/MAI standup (Apr 30). No dedicated NBCU meeting — this was a segment of the broader sprint standup.

**Dual-path strategy pivot:** The NBCU AI POC will proceed with a dual-path approach. **Primary plan:** build the title pricing engine in Agentforce, leveraging the project's stall to pressure NBCU leadership for the long-delayed license approval. **Backup plan:** direct GenAI models (non-Agentforce) if approval isn't imminent. Mac to email the updated SOW to Ranjit/Naresh with budget, guardrails, and the Agentforce vs Plan B breakdown. Separate email to Andrew with Agentforce vs Plan B pros/cons.

**Agentforce access escalation:** Mac to schedule a call with the NBCU Salesforce rep regarding Agentforce access; Scott to be included.

*(Source: `Meeting Notes/High Meadows/Cetera/2026-04-30 - Impromptu Call.md`, `Meeting Notes/High Meadows/MAI/2026-04-30 - Impromptu Call.md`)*

---


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

# NBCU — Journal

## Week of Apr 20–26, 2026

Raghu/Speaker-1 gave a full DealSet data-model walkthrough (opportunities → proposals → line items; Safe as source of truth syncing every 20 min via platform events; Budget Module via Data Cloud; Deal Approvals for >$5M). The bulk of the call was problem-statement alignment on the pricing-fee recommendation agent. Mac pushed consultatively on matching accuracy — genre + budget alone can't reliably match comparable deals — but NBCU (per Karthi) has ruled cast out as a parameter and considers the approach "open for solutioning." Some friction: Naresh reset expectations that the call was to showcase the data model, not re-debate the approach. Agreed to proceed while staying open to refinement. *(Source: [[Meeting Notes/Stand8/NBCU/2026-04-20 - NBCU Stand8 POC|2026-04-20 — DealSet Walkthrough]])*

**Decisions:**
- Proceed with pricing-fee recommendation as the focus use case (genre + budget matching).
- Cast/actor data excluded as a scoring parameter.
- Deliver complimentary (non-billable) SOW with scope/timeline/LOE — target Thursday review.

**Open questions:**
- How to make budget matching accurate enough for confidence without cast/performance signals?
- What additional data could refine matching (rejected IMDB augmentation)?

## Week of Apr 13–19, 2026

Two architecture-review sessions (Apr 13, Apr 15) were both cut short / rescheduled because Karthi (Business Solutions partner) was unavailable. Established that the agent will recommend pricing from historical closed-won opportunities with data flowing through Salesforce Data Cloud; full SF walkthrough (products, price book, opportunity flow) deferred until all required participants present. *(Sources: [[Meeting Notes/Stand8/NBCU/2026-04-13 - NBCU STAND 8 Agentforce POC|2026-04-13]], [[Meeting Notes/Stand8/NBCU/2026-04-15 - NBCU STAND 8 Agentforce POC|2026-04-15]])*

**Decisions:**
- Data Cloud is the target for opportunity/product/pricing data.
- Postpone full SF walkthrough until all participants present.

## Week of Apr 6–12, 2026

POC kickoff. NBCU wants agentic capabilities for real business problems on its content-distribution org. Two use cases surfaced: content recommendations (priority, but blocked on MCP/Office 365 GA for deck generation) and sales strategy/pricing recommendations. Licensing under negotiation at ~$400–450/user with complimentary POC credits expected; MSS positioned as vendor-agnostic. *(Source: [[Meeting Notes/Stand8/NBCU/2026-04-08 - NBCU STAND 8 Agentforce POC|2026-04-08 — POC Kickoff]])*

**Decisions:**
- Content recommendations = Priority #1; sales strategy/pricing = Priority #2 (later reprioritized to pricing as the buildable focus).
- SOW within 48h of org demo; 4-week POC once environment access secured.

**Open questions:**
- Complimentary SF credits for POC? MCP GA timeline for Agentforce? Is $400–450/user acceptable or explore alternatives?

---

---
type: project-journal
project: modern-stack-systems
updated: 2026-04-21
---

# Modern Stack Systems — Journal

## Week of Apr 21, 2026

Blink Data Cloud Advisory (Apr 21) — intro call with Vuk Stajic and Raphi Katz from Blink (UK payments company). New advisory engagement scoped.

**Blink overview:** Payments company running entire business on Salesforce. Banks send large CSVs of merchant data. Internal resource (Leah) taking Data Cloud courses but stuck at the ingestion-to-activation gap. Already have a live Agentforce agent on their payment platform handling 25-30% of queries without human intervention (migrated from Einstein to Agentforce One, lost some functionality in transition).

**Engagement scope:** Coaching/advisory, not a deliverables project. Mac works directly with Leah, 1-2 hrs/week for about a month. Budget: £1,000 with preliminary FD approval. Senior leadership skeptical of Salesforce due to past partner shakeups — engagement needs to prove Data Cloud value.

**Data Cloud use cases:** (1) Update merchant account fields with daily SFTP-ingested processing data, (2) Identity resolution to cross-match merchants from multiple providers into unified identities, (3) Knowledge base sync (potential future).

**Key advisory points:** Data Cloud triggered flows can call Apex for custom matching/creation logic. Not everything needs Data Cloud — for sources with APIs, scheduled Apex classes may be more cost-effective. Evaluate each use case individually. Salesforce pricing is confusing; Blink has pre-paid credits and wants to see them utilized.

**Logistics:** Mac invoices through LLC (S Corp), month-end, net 30. No formal SOW — email outlining scope. NDA at some point.

**Next steps:** Mac sends email outlining scope/time for £1,000 budget. Raphi gets final FD confirmation. Mac schedules initial session with Leah.

---



## Week of Apr 20, 2026

Andrew/Mac Sync (Apr 20) — light catch-up. Two notable tech threads:

**AI tooling:** Andrew has been using Claude CoWork to build automated test systems, leveraging a new MCP that controls Android and iOS simulators for mobile testing (available in the last couple months). Mac reported Opus 4.7 has significant performance regressions despite adding useful automatic mode (eliminates repetitive permission prompts in CoWork and Code sessions). Mac has fully switched to Claude Code and dropped Cursor due to cost; Andrew still on Cursor Pro but considering downgrading. Anthropic is launching a new Figma-like design product — will appear as a fourth icon in Cloud Desktop alongside chat/cowork/code. Designs created there can potentially be passed into Cloud Code for implementation.

**Salesforce/React from TDX:** Andrew joined a Friday call with Victor and Brady where Victor reported TDX was all AI. Salesforce announced React support for building on the platform. The team's concern: if React replaces LWC, the value of specialized Salesforce developers drops — React devs are more common, cheaper, and arguably more skilled than SF-specific developers. Mac noted there's been a community around React-on-Salesforce for a while but it never fully took off due to limitations and guardrails.

No action items identified.

**Open questions:**
- React-on-Salesforce viability and implications for the consulting practice — worth monitoring post-TDX

---

## Week of Apr 14–19, 2026

Peer sync week. Meeting of the Minds (Apr 17) was a deep demo of Claude Cowork vs. Claude Code — Mac walked through scheduled tasks (daily email summary, morning briefing, QuickBooks digest, second-brain ingest), the refine-the-prompt loop, and computer-use for Gmail send. Key takeaway: peer needs help restructuring their second brain before scheduled ingestion will work. Mac agreed to review their prompts/setup.

AI Office Hours (Apr 14) was a stub — Granola captured no content. Andrew/Mac sync (Apr 15) — peer/business-dev catch-up covering career/travel, a Granola demo, a "vibe code review" consulting pitch idea for HMS network (~$5K package), a Rory Sutherland-style AI consultant demo (auto-built from YouTube transcripts + books + RAG DB), and side-contract payment logistics (Helcium for $8K contract). Mac exploring genericizing the virtual consultant tool for arbitrary personalities (open-source consideration).

**Decisions:**
- Start small with scheduled tasks: pick one project and run a single ingest on cadence before expanding
- Use second brain primarily for pulling context into Claude Code workflows (change orders, scope compares, meeting transcript mining)

**Open questions:**
- Peer's second brain structure needs review before their ingest pipeline will work

---

## Week of Apr 7–13, 2026

Met twice with substance (Apr 9 — Recruiter Call with Brittany Fetzner, Apr 10 — Meeting of the Minds Peer Sync).

**Recruiter Call (Apr 9):** Brittany Fetzner pitched a Salesforce QA/Developer contract role at $150/hr, 40 hrs/week. Team uses Claude Code for a telephony build to centralize dealer interactions and reduce switching. Mac walked through his experience: junior SF dev to TA, daily Claude Code power user ($200 plan, multiple concurrent instances), built AI apps on top of Salesforce (chatbot with multi-model selection), used Claude API + OpenRouter + OpenAI APIs for agentic frameworks. Clarified the difference between using Claude within Agentforce vs. building custom AI on the SF platform. Role is 40 hrs/week — Mac currently running two 40hr + one 20hr contract, so capacity is the constraint. Left the door open if schedule shifts.

**Peer Sync (Apr 10, w/ Domatz + Bradyl):** Covered workloads, High Meadows culture friction, AI tool adoption, and payment updates. Mac flagged burnout from billing 20–28 hours/day across multiple clients. Domatz on the Saterra project with limited assignments despite project urgency. Maz paid Mac $30K on Apr 8; Domatz still chasing a $300 January invoice (Equifi Advisors/Optima).

Culture friction at HMS surfacing: Sean told Mac to "shut up" during a company demo of the time tracking app; Brian pushing aggressive product development (Outlook email extraction, packaging Claude Desktop demos as client products); Catherine micromanaging website copy line-by-line during concept meetings; Stephen ($16.5K retainer, 25 hrs/week W2) not proactively asking for work.

AI workflow deep dive: Mac running full Claude Desktop pipeline — meeting transcription/summarization, second brain, morning briefing (SF/AI/tech/current events), QuickBooks weekly summaries. Upgraded to $200/month Claude plan. Financial Services Cloud issue: tasks should surface household/person/trust accounts but solution architects not explaining requirements clearly. Entry-level coding at risk from AI but experience remains critical for debugging and compliance.

**Decisions:**
- Set up recurring one-on-ones between Mac, Domatz, and Bradyl

**Open questions:**
- Recruiter role: will Brittany come back with a sub-40hr option or adjusted scope?
- Saterra staffing issue for Domatz
- HMS culture friction — how to navigate without burning bridges

---
*Last updated: 2026-04-21*

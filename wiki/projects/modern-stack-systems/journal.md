---
type: project-journal
project: modern-stack-systems
updated: 2026-04-21
---

# Modern Stack Systems — Journal


Impromptu Sync (Apr 22) — Andrew demoed Open Effigy, pitched High Meadows Labs, career/income strategy chat.

**Open Effigy:** Andrew built an AI character creation tool that combines personality traits from multiple people using RAG (YouTube transcripts + text files into local vector DB). Characters can interact with each other. Exports agents in OpenCLAW-compatible format. Built for entertainment/open-source release, not commercial viability. Could be augmented with Eleven Labs voice and video.

**High Meadows Labs pitch:** Andrew pitching his CEO on a new business unit called "High Meadows Labs" focused on training AI models for wealth management compliance. Huge high-net-worth client base (hundreds of millions under management). Emphasis on compliance management over investment optimization. Andrew proposing retainer + executive position. Dia (Andrew's wife) has compliance/finance background that's directly relevant — potential exec role in Labs.

**Income/career strategy:** Andrew approaching ~$100k in last two months, working 12-hr days but with flex (golf Fridays). Mac billing 105-106 hrs/week across High Meadows (full-time allocation + side projects), Mike's company (6-7 hrs/day), and random work. Mac pushing harder than usual — saving for house build, wants to cash flow some of it. Year-to-date W-2 around $100k+ with bonuses; projecting $260k+ from W-2 alone. Both targeting $500k/year while maintaining flexibility — the challenge is converting from high-paying job to sustainable business model.

**AI business opportunity discussion:** Andrew believes now is the time to build — AI will create millionaires. Mac pushes back: big labs will recreate or acquire. Andrew counters with historical precedent (Google emerged despite Lycos/Yahoo/AltaVista). Both agree the real opportunity is innovating on SDLC processes specifically for AI — not just using AI to do old things in old ways. That intersection is where the billion-dollar ideas live.

**Kathleen's playground app:** Local TV interview tomorrow. 3,500 downloads, 10-30 daily active users. Andrew's localization work attracting European users (Croatia, France actively adding content). Worldwide data from open stream.

*(Source: `Meeting Notes/Modern Stack Systems/2026-04-22 - Impromptu Google Meet - Andrew Mac.md`)*


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


Contour Platform Demo (Apr 21) — intro call with Ivory Tang (ivory@usecontour.ai), co-founder of Contour. AI platform for the full software implementation lifecycle, primarily Salesforce-focused but applicable to AWS and other platforms.

**Contour capabilities:** Discovery call bot that suggests better questions during live client meetings (Mac's primary interest), integration with common note-takers (Fathom, Granola), generation of execution-ready artifacts (SOWs, ROMs, resource plans, process stories). Core value prop: traceability — every decision stays connected throughout the engagement, linked back to transcript moments.

**Mac's current workflow gap identified:** Mac has the Second Brain (Obsidian + MCP + scheduled ingest) handling post-call knowledge management and SOW generation via Claude. But he lacks real-time suggestions during discovery calls — he has to manually reference Obsidian mid-conversation. Contour's discovery bot would fill that gap, though Mac acknowledged it's more impactful once he's writing SOWs more frequently.

**Mac background shared:** Eight years across Simplest (Infosys acquisition), Cloud Masonry (employee #28), Optima, AllShrimp → independent at start of 2026. Mix of 1099 contracting for SF shops + smaller direct clients. Claude gets SOWs "almost all the way there." Discovery process ranges from zero to a few hours depending on project size.

**Next steps:** Mac to send Obsidian context/transcripts to Ivory via Google Drive. Ivory to set up a Contour account and schedule a setup session. Mac comfortable sharing meeting data for platform training.

*(Source: `Meeting Notes/Modern Stack Systems/2026-04-21 - Modern Stack Systems - Contour Platform Demo.md`)*


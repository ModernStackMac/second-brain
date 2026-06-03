---
status: active
owner: Mac
priority: p2
last_meeting: 2026-06-03
open_actions: 4
aliases: [high-meadow-labs]
---

# High Meadow Labs — Project Journal

> HMS internal AI product initiative. Training specialized models for wealth management use cases and building enterprise AI agent products.

---

## Week of June 1, 2026

HMU Workshops & Content Library Ideation (Jun 3): HMU workshop confirmed for June 12, content-library expansion planning, and MAI resource-strategy spillover.

**HMU workshop (June 12) — Mac confirmed:** Topic is Anthropic/Claude best practices drawn from Mac's certification content. Focus areas: XML in queries to reduce cognitive load, effective skill definition, and API troubleshooting (context/historical messages). Format: 60 minutes — 5-min intro, 30–40 min content, 15 min Q&A/community engagement. VS Code complexity flagged as an "attention token" drain on the audience; mitigation is a brief disclaimer up front, resource links at the end, and keeping the session on Claude workflow rather than the IDE. Positioning: "Mac from Modern Stack Systems, Technical Architect at HMS, Resident AI Expert."

**Workshop series + content library:** Three-part series planned — (1) planning and requirements definition, (2) execution methodology, (3) iteration and refinement. Content-library expansion across formats (podcasts, talking-head videos, screen recordings) on AI and Salesforce development. Local-model deployment education identified as an opportunity: hardware requirements (16GB Mac Mini limitations), hybrid local/cloud strategies, parameter count vs. performance expectations.

**MAI resource strategy (spillover — see [[mai/journal]]):** MAI go-live scheduled for Monday with end-to-end testing in progress; deployment is now handled by the client team (no longer an MSS responsibility). Integration risk: the original integration lead quit the week before first go-live, replacement coverage is unclear, and the capable federal resource may be inaccessible due to team politics. Broader resourcing: Mac is essential to multiple projects but that's unsustainable — identify 5–10 mentees for training/deployment, Albin to split 50/50 between Mac's billable work and product development once Quick launches, and an India route is being pursued for scaling.

*(Source: [[Meeting Notes/High Meadows/Internal/HMU/2026-06-03 - HMU Workshops & Content Library Ideation|2026-06-03 HMU Workshops & Content Library]])*

---

Aidentified Demo Prep (Jun 3): GTM planning for a mutual demo with Aidentified plus internal demo-resourcing for FlexDash and AskVery.

**Aidentified partnership / mutual demo:** A mutual demo is planned with Aidentified — MSS/HMS demos FlexDash to showcase its AI-development capabilities, and Aidentified demos its NCP platform (still in development). Positioning: HMS as an innovation partner that gets clients to market faster by leveraging its AI developers; revenue model is client referrals for implementation.

**Demo resourcing:** Sean Arnold identified as an alternative FlexDash demo lead so Mac can stay focused on billable FlexDash development hours. Additional demo coverage needed: Brian Hyman requested AskVery demo ability; Catherine suggested multiple people be able to demo each tool; Dave Mazra was unavailable for today's demo (joining late). Mac is not joining today's Aidentified demo.

**AskVery deck enhancement:** Proposed a single 4-quadrant slide mapping roles (Advisor, C-level, Data Analyst, Administrator) with three sample questions per role as a demo springboard. Catherine is working with Mazra on an RIA-specific deck.

**Next steps:** Sean Arnold conversation scheduled for the FlexDash demo handoff.

*(Source: [[Meeting Notes/High Meadows/Internal/Product Calls/2026-06-03 - Aidentified Demo Prep|2026-06-03 Aidentified Demo Prep]])*

---

## Week of Apr 20–26, 2026

Two kickoff sessions (Apr 22 — High Meadow Labs initial discussion, Apr 23 — High Meadow Labs 0.1 follow-up).

**Product vision:** Train specialized AI models on industry-specific and synthetic client data, then sell as a product to wealth management clients. Not building from scratch — augmenting existing open-source models (like OLAMA) with domain-specific knowledge. Similar to Salesforce's Agent Vibe approach (ingest documentation into a base model). Separate track: enterprise agent setup where clients buy Anthropic/OpenAI enterprise licenses and HMS configures agents with guardrails for specific use cases (development, documentation, compliance, etc.).

**Compliance as primary value prop:** AI compliance is increasingly appearing in MSAs and partnership agreements. Wealth management firms face growing restrictions on sending sensitive data to third-party AI providers. A locally-hosted or client-controlled model sidesteps these concerns. Aligns with Salesforce's BYOM (Bring Your Own Model) initiative.

**Hosting architecture:** Local hosting on Mac Studio for initial POC (data security, no cloud costs, multi-gig network connection). Cloud deployment (AWS/containerized) for serving clients at scale. Mac Studios sold out everywhere — companies pursuing the same strategy. Hybrid approach: local for internal use and POC, cloud for production client serving.

**Business model:** HMS owns source code and IP. Clients run the model in their environment but don't receive source code. Data never retained by HMS. Portal-based approach where clients connect through HMS's interface. Revenue: usage-based pricing with consumption dashboard. Single Mac Studio could serve multiple smaller clients; larger clients need cloud containerized deployments.

**POC use case selected: regulatory compliance (Apr 23).** Team debated multiple options (financial opinions, DevOps agent, meeting recorder agent, regulatory compliance) and selected compliance because it's "more cut and dry" than financial opinions (less likely to trigger critical pushback from domain experts). Steven described the value: a specialized agent pre-trained on up-to-date regulatory compliance best practices, combined with RAG for specialized financial services knowledge, useful for RIAs and portfolio managers. Team to work with Catherine and June for experiential industry knowledge (wisdom + knowledge), though initial POC will likely start with just regulatory documentation.

**Multi-agent voting pattern for consistency:** Team discussed the fundamental AI consistency challenge — clients expect software-level 100% consistency but AI models produce variable outputs. Solution: multi-agent voting pattern where multiple agents run in parallel and results only surface when consensus is reached. Steven confirmed this is now "tried and true methodology" — SWAC already running 10 engineer agents in two competing pods. This addresses the consistency concern without limiting AI's value.

**Speed vs. rigor:** Shaun pushed hard for faster execution — "80% solution that can be learned from is better than endless debate about edge cases." Team agreed to split into two groups: idea guys (Brian, Sean) for vision/strategy and builders (Shaun, Mac, David, Steven) for technical execution. Steven countered that basic technical knowledge is necessary for informed decisions but agreed not to over-academicize. Consensus: move fast with intention, not recklessly.

**Technical specs:** Hesham estimated ~$100/hour for cloud GPU training (H200s). Steven can run a 70B parameter model on his 64GB Mac mini with quantization. Open-source models (DeepSeek, Minimax, Moonshot/Kimi) have closed the gap significantly in 3–6 months — for specialized use cases, performance difference is irrelevant.

**Implementation roadmap:** (1) Build POC using own hardware, (2) demo internally and use themselves, (3) compare results to Claude to validate performance, (4) determine scaling strategy, (5) deploy to clients.

**Decisions:**
- Regulatory compliance selected as first POC use case
- Mac and Steven own the technical build (model selection, cloud training service)
- Team split into idea group (Brian, Sean) and builder group (Shaun, Mac, David, Steven)
- Internal pilot first — deploy HMS skills to local model, compare to Claude, use Claude responses as training material if preferred
- Local hosting for POC (Mac Studio), cloud for production scaling

**Open questions:**
- Which open-source model to fine-tune (70B+ parameter range)
- Cloud vs. local training infrastructure decision
- Catherine and June experiential knowledge extraction process
- Sean Wakashiri added for infrastructure/instantiation expertise
- NDA implications for compliance agent build (Brian flagged)

*(Source: [[Meeting Notes/High Meadows/Internal/Product Calls/2026-04-22 - High Meadow Labs|2026-04-22 High Meadow Labs]], [[Meeting Notes/High Meadows/Internal/Product Calls/2026-04-23 - High Meadow Labs 0.1|2026-04-23 High Meadow Labs 0.1]])*

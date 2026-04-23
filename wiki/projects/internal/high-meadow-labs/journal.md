---
status: active
owner: Mac
priority: p2
last_meeting: 2026-04-23
open_actions: 3
---

# High Meadow Labs — Project Journal

> HMS internal AI product initiative. Training specialized models for wealth management use cases and building enterprise AI agent products.

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

*(Source: `Meeting Notes/High Meadows/Internal/Product Calls/2026-04-22 - High Meadow Labs.md`, `Meeting Notes/High Meadows/Internal/Product Calls/2026-04-23 - High Meadow Labs 0.1.md`)*

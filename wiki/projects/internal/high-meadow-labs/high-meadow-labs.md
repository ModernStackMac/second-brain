---
aliases: [high-meadow-labs]
type: project-context
project: high-meadow-labs
status: active
---

# High Meadow Labs — Project Context

> HMS internal AI product initiative. Training specialized models for wealth management use cases, enterprise agent products, and compliance tooling.

## Overview
High Meadow Labs is High Meadows' internal AI product arm. The initiative focuses on training specialized AI models on industry-specific data for wealth management clients, building enterprise AI agent products, and developing compliance-focused tooling. Separate from client delivery work — this is a product play.

## Team
- **Brian** — idea group, vision/strategy
- **Sean** — idea group, vision/strategy
- **Shaun** — builder group, execution
- **Mac** — builder group, model selection + cloud training
- **David** — builder group
- **Steven** — builder group, technical architecture
- **Catherine, June** — domain expertise (experiential knowledge)
- **Hesham** — cloud GPU cost estimates

## Product Vision
Train specialized AI models on industry-specific and synthetic client data, then sell as a product to wealth management clients. Not building from scratch — augmenting existing open-source models with domain-specific knowledge. Separate track: enterprise agent setup where clients buy Anthropic/OpenAI enterprise licenses and HMS configures agents with guardrails.

## First POC: Regulatory Compliance
Selected because it's "more cut and dry" than financial opinions — less likely to trigger pushback from domain experts. A specialized agent pre-trained on regulatory compliance best practices, combined with RAG for specialized financial services knowledge.

## Tech Stack
- Local hosting on Mac Studio for POC
- Cloud deployment (AWS/containerized) for production
- Open-source models (70B+ parameter range)
- Multi-agent voting pattern for consistency

## HMU Workshops & Content Library (added 2026-06-03)
HMS education/content arm (High Meadows University). Mac confirmed for a June 12 workshop on Anthropic/Claude best practices (XML in queries, skill definition, API troubleshooting; 60-min format). Three-part workshop series planned (planning/requirements → execution → iteration), plus a content-library expansion (podcasts, videos, screen recordings on AI + Salesforce dev) and a local-model deployment education track. HMU meeting notes route here.

## Resourcing (added 2026-06-03)
Mac essential-but-unsustainable across projects — plan is 5–10 mentees for training/deployment, Albin split 50/50 between Mac's billable work and product dev once Quick launches, and an India route for scaling.

## Related Pages
- [[high-meadows]] — parent org
- [[multi-agent-voting]] — consistency pattern
- [[claude-ai]] — comparison baseline

## Project Files
- [[high-meadow-labs/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/High Meadows/Internal/HMU/2026-06-03 - HMU Workshops & Content Library Ideation|2026-06-03 HMU Workshops & Content Library]]
- [[Meeting Notes/High Meadows/Internal/Product Calls/2026-06-03 - Aidentified Demo Prep|2026-06-03 Aidentified Demo Prep]]
- [[Meeting Notes/High Meadows/Internal/Product Calls/2026-04-23 - High Meadow Labs 0.1|2026-04-23 High Meadow Labs 0.1]]
- [[Meeting Notes/High Meadows/Internal/Product Calls/2026-04-22 - High Meadow Labs|2026-04-22 High Meadow Labs]]

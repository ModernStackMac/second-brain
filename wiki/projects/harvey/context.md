# Harvey — Project Context

> Stand8-partnered Salesforce optimization + Agentforce engagement for an industrial manufacturer/distributor.

## Overview
Harvey is an industrial manufacturing/distribution company (Helical brand among others) modernizing on Salesforce after migrating off SAP C4C. Work runs through Stand8 (staffing/consulting partner) with Salesforce SEs involved. Modern Stack Systems came in mid-stream on an Agentforce for Service email-template POC and is now helping shape a broader AI roadmap. Focus is internal sales efficiency first; outbound AI and heavy pipeline automation are deferred until European CRM adoption matures.

## Key Contacts
- Mac (MSS) — consultant
- Ryan Ridinger — Stand8 lead (cross-project)
- Brian (Stand8), Kyle (Stand8 Solutions Engineering)
- Carl — Harvey VP Digital (AI roadmap owner)
- Kate — Harvey CRM Program Manager (sales-team priorities)
- Shruti, Siddharth — Salesforce SEs (Agentforce)

## What We're Building
- **Pricing & availability email automation** — pulls live ERP inventory, applies customer/entity-specific discounts, auto-replies. Next phase: order tracking (carrier URL concatenation).
- **Account/contact summarization** — pre-meeting briefs, 360 view from SF activity (OOTB Agentforce).
- **One-click account research button** — scrapes public data (size, segment, competitors, share-of-wallet) for distributor fit.
- **Multilingual web chat / voice deflection** — out-of-hours support for Europe (3+ languages), pending marketing sign-off.

## Tech Stack & Constraints
- Salesforce (Sales + Service Cloud), Agentforce/Einstein Agent, Claude (multi-intent email parsing), Power BI, ERP integration (multiple ERPs/regions).
- Legacy SAP C4C had native ERP order-lifecycle visibility — lost in migration; order-status handoff to Customer Service is now manual.
- Agent-agnostic: Einstein Agent native, Claude for email intent, considering multi-agent orchestration with triage routing.
- **European complexity:** ~120 new SF users across multiple entities (some new to CRM), ~40M potential price line items, country-specific pricing norms (France high-list/big-discount vs Germany).
- Machine Advisor ("Map") SKU-recommendation app stays standalone; integrate via API later.
- Pipeline/forecasting deferred 6+ months pending EU adoption.

## Related Pages
- [[articles/agentforce-builder-beta]] — Agent Script determinism for agent reliability
- [[articles/prompt-builder-structured-outputs]] — structured email/record automation
- [[model-context-protocol]] — multi-agent/MCP orchestration context

## Project Files
- [[harvey/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop|2026-04-09 — AI Vision & Agentforce Workshop]]

## Sources
- Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop.md
- project-mapping.md

---
*Last updated: 2026-06-01*

# Wiki Index

> Master catalog of the compiled knowledge base. Updated on every ingest.

## Projects
- [[harvey/context|Harvey (Stand8)]] — Sales/Service Cloud + Agentforce for industrial manufacturer
- [[litify/context|Litify (Stand8)]] — Agentforce for Service POC; SOW scoping
- [[nbcu/context|NBCU (Stand8)]] — Agentforce POC for media/entertainment
- [[cretelligent/cretelligent|CREtelligent (Stitch)]] — CRE/environmental Salesforce build; product-centric data model, Order Service integration, Conga/Quire/DocHub
- [[blink-payments/context|Blink Payments (MSS)]] — Data Cloud advisory, payments/fintech
- [[cartier/context|Cartier (MSS)]] — SF email-attachment automation + case timeline (advisor; project-mapping entry pending)
- [[internal/meadow/meadow|Meadow (High Meadows)]] — internal capacity-planning/time-tracking app; cloud migration, auth hardening
- [[talus/context|Talus (MSS)]] — sales-led SF org; lead/contact dedup, MCP/Claude automation, forecasting alerts, Clay/Apollo enrichment (advisor; project-mapping entry pending)
- [[modern-stack-systems/modern-stack-systems|Modern Stack Systems]] — Mac's own practice; peer network, BD, advisory engagements (Blink, GoInspo, Randall membership site)

## Concepts
- [[model-context-protocol]] — open standard bridging LLMs and external systems/CRM
- [[concepts/mulesoft-vs-apex-integration|MuleSoft vs. Apex integration]] — decision heuristic for SF integrations (CREtelligent)

## Patterns
- [[patterns/historical-match-recommendation-agent|Historical-match recommendation agent]] — recommend price/resolution from matched history (NBCU, Litify)
- [[patterns/data-cloud-bulk-processing|Data Cloud → Apex bulk processing]] — flow + queueable, batched async (Blink)
- [[patterns/email-attachment-capture|Email attachment capture]] — EAC + Cirrus split (Cartier)
- [[patterns/validation-rule-bypass-before-save|Validation-rule bypass via before-save trigger]] — required-picklist workaround (CREtelligent)
- [[patterns/junction-object-line-item-model|Junction object as line-item replacement]] — Site Product / OLI-style model (CREtelligent)
- [[patterns/no-code-membership-site|No-code approval-gated membership site]] — Squarespace/Tally/Airtable/Make.com application→paywall flow (Randall/MSS)
- [[patterns/go-live-hypercare-cutover|Go-live hypercare cutover]] — bug-only freeze + hypercare sprint + cross-org issue log + idle-capacity gate (MAI, Lefavi)
- [[patterns/lead-contact-dedup-merge|Lead/contact dedup merge (Apex invokeable)]] — email-match, master-precedence merge, opt-out preservation, bulk + real-time (Talus)
- [[patterns/vendor-skill-geo-matching|Vendor skill + geography matching]] — two-tier qualification, radius + state/nation opt-ins, SF-side matching over broken marketplace search (CREtelligent)
- [[patterns/docusign-maestro-prefill-mapping|DocuSign Maestro prefill field mapping]] — raw fields only (no encrypted/formula), contact-ID format for record selection, schema-gap pass (Lefavi, Cetera)
- [[patterns/picklist-to-text-volatile-values|Picklist → freeform text for volatile values]] — drop picklists for churning reference sets (people/vendors); standardize payload on email/external ID; rework dependent formulas (CREtelligent)

## Tools
- [[obsidian]] — local-first markdown knowledge base; second-brain substrate
- [[tools/nebula-logger|Nebula Logger]] — free managed package for persistent apex/flow logging; system.debug replacement

## Topics
- [[salesforce-ai-tooling]] — Agentforce, Vibes IDE, Prompt Builder, Web Console news
- [[llm-knowledge-management]] — the LLM-as-librarian "second brain" pattern

## Articles
- [[articles/sf-devedition-vibes-claude-mcp|SF Dev Edition: Vibes IDE, Claude 4.5, MCP]]
- [[articles/sf-web-console-beta|Web Console (Beta)]]
- [[articles/prompt-builder-structured-outputs|Prompt Builder Structured Outputs]]
- [[articles/sf-mcp-explained-sweep|Salesforce MCP Explained (Sweep)]]
- [[articles/karpathy-claude-skills-obsidian|Karpathy Method: Claude Skills + Obsidian]]
- [[articles/claude-obsidian-second-brain|Claude + Obsidian Second Brain]]
- [[articles/agentforce-builder-beta|New Agentforce Builder (Beta)]]
- [[articles/obsidian-6-free-plugins|6 Free Obsidian Plugins]]

## Backlog (not yet ingested — for subsequent runs)
- **STALE — needs lint correction:** the 2026-06-01 ingest gap-scan confirmed Cetera, MAI, LNW, Lefavi, Loftware, and the High Meadow internal projects ALREADY have built wiki pages with Meeting Note Sources. As of 2026-06-01 every meeting note in the vault is referenced in the wiki — no meeting-note backlog remains.
- **_Unmatched/** — pending routing review

---
*Last updated: 2026-06-05 (ingest: MSS Meeting of the Minds Jun 5; new nebula-logger tool page; MAI go-live war-room prep captured)*

## Reports
- [[reports/weekly-synthesis-2026-06-01|Weekly Synthesis — Week of May 25–June 1, 2026]] — June deadline pile-up (MAI go-live, CRE UAT, LNW close); Notion-vs-Salesforce pattern; MAI field-limit blocker
- [[reports/weekly-synthesis-2026-05-11|Weekly Synthesis — Week of May 5–11, 2026]] — CRE + MAI moving; integration-complexity and QA-bottleneck patterns; several stalled engagements
- [[reports/agentforce-knowledge-report|Agentforce Knowledge Report]] — cross-project Agentforce synthesis

---
*Reports section added 2026-06-01 by weekly-synthesis.*

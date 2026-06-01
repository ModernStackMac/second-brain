# Operation Log

## [2026-05-31] lint | Weekly Health Check
- Pages scanned: 0 wiki pages (wiki/ tree does not exist yet)
- Meeting notes checked: 5
- Raw sources checked: 3
- Issues: 3 critical, 4 recommended, 3 informational
- Auto-fixed: created wiki/ directory + wiki/log.md (this file) + wiki/lint-report.md. No content auto-fixes applied — the dominant issue (missing wiki) requires an ingest run, not a lint fix; deprecated-slug + filename + SCHEMA-duplication fixes are all in "ask first / never modify raw" categories.
- Key finding: wiki/ never built; run kb-ingest-now to compile sources, then re-lint.
- Report: wiki/lint-report.md

## [2026-06-01] ingest | First wiki build — articles + 5 projects
- Context: wiki/ tree never existed (per 2026-05-31 lint). This run bootstrapped the wiki and processed a bounded, high-value slice. Large project backlogs (Cretelligent ~40 notes, High Meadows suite, MSS root ~23 notes) deferred to subsequent 4-hour runs and recorded in wiki/index.md → Backlog.
- Pages created (foundation): wiki/index.md
- Pages created (articles): articles/sf-devedition-vibes-claude-mcp, articles/sf-web-console-beta, articles/prompt-builder-structured-outputs, articles/sf-mcp-explained-sweep, articles/karpathy-claude-skills-obsidian, articles/claude-obsidian-second-brain, articles/agentforce-builder-beta, articles/obsidian-6-free-plugins
- Pages created (topics/tools/concepts): topics/salesforce-ai-tooling, topics/llm-knowledge-management, tools/obsidian, concepts/model-context-protocol

## [2026-06-01] ingest | Stand8/Harvey — AI Vision & Agentforce Workshop
- Source: Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop.md
- Pages created: projects/harvey/context, projects/harvey/journal
- Patterns extracted: none new (decisions already in Decision-Log)
- Meeting note linked to context: yes
- Commitments: none added — the lone Mac action ("share pricing-email POC artifacts, next meeting") predates the actively-maintained commitments tracker and was never captured there (treated as resolved/moot; not injected to avoid a stale open item).
- Decisions: already present in Decision-Log (agent-agnostic strategy, EU pipeline deferral, 3-yr roadmap).
- Key takeaways: Industrial manufacturer post-SAP-C4C; focus internal sales efficiency (account summaries, research button, pricing/availability email automation, multilingual chat); defer outbound AI + pipeline 6+ months for EU adoption.

## [2026-06-01] ingest | Stand8/NBCU — Agentforce POC (4 notes)
- Source: Meeting Notes/Stand8/NBCU/2026-04-08, 2026-04-13, 2026-04-15, 2026-04-20
- Pages created: projects/nbcu/context, projects/nbcu/journal
- Patterns extracted: patterns/historical-match-recommendation-agent (cross-project w/ Litify)
- Meeting notes linked to context: yes (all 4)
- Commitments: none added — NBCU Mac items (email questions to Naresh, SOW) already in commitments.md ## Open.
- Decisions: already present in Decision-Log (NBCU rows exist).
- Key takeaways: Pricing-fee recommendation agent over DealSet/Data Cloud; core risk = genre+budget matching can't separate vastly different budgets, cast excluded as parameter. Complimentary SOW.

## [2026-06-01] ingest | Stand8/Litify — Agentforce for Service SOW (4 notes)
- Source: Meeting Notes/Stand8/Litify/2026-04-09, 2026-04-13, 2026-04-14, 2026-04-17
- Pages created: projects/litify/context, projects/litify/journal
- Patterns extracted: contributes to patterns/historical-match-recommendation-agent (internal similar-case agent)
- Meeting notes linked to context: yes (all 4)
- Commitments: none added — Litify Mac items already in commitments.md ## Open.
- Decisions: Litify SOW decision already in Decision-Log (2026-04-14).
- Key takeaways: SOW scaled 138–158 hrs → 66 hrs fixed (cut KB rec, email drafting, case field population) after Litify pushed back on cost/licensing; +external agent (40h) and internal similar-case agent (20h) estimates.

## [2026-06-01] ingest | MSS/Blink Payments — Data Cloud Advisory
- Source: Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz.md
- Pages created: projects/blink-payments/context, projects/blink-payments/journal
- Patterns extracted: patterns/data-cloud-bulk-processing
- Meeting note linked to context: yes
- Commitments: none added — Blink/Liam transform item already in commitments.md.
- Decisions: added 1 row to Decision-Log (Data Cloud → Apex queueable architecture).
- Key takeaways: 300K daily records ingested to Data Cloud but isolated; recommended flow → queueable, 500-record async batches, error logging, transform/master object merging portal + Stripe.

## [2026-06-01] ingest | MSS/Cartier — Email attachment automation (2 notes)
- Source: Meeting Notes/Modern Stack Systems/Cartier/2026-04-30, 2026-05-13
- Pages created: projects/cartier/context, projects/cartier/journal
- Patterns extracted: patterns/email-attachment-capture
- Meeting notes linked to context: yes (both)
- Commitments: none added — Cartier Mac items already in commitments.md ## Open.
- Decisions: already present in Decision-Log (Cartier rows exist).
- ROUTING GAP: Cartier has no entry in project-mapping.md despite an active Meeting Notes folder. Recommend adding a canonical slug entry (provisional `cartier`, company Modern Stack Systems, client Chad Cartier, Cetera back office). Flagged on cartier/context.
- Key takeaways: EAC for in-system contacts + Cirrus for external; attachment-ordering fix; DocuSign-via-back-office out of scope.

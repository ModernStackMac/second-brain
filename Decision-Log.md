# Decision Log

> Key decisions extracted from meetings and working sessions. Claude appends during ingest. Entries are permanent — do not delete.

| Date | Project | Decision | Context |
|------|---------|----------|---------|
| 2026-04-14 | Litify | Agent Force for Service SOW: 120 hrs base + 18 hrs PM (15%) → 138–158 hr range | Case prioritization removed, training docs excluded, ~10 hrs discovery |
| 2026-04-14 | MAI | Trigger handler convention: one handler per object, logic lives in the object's service | Clean separation of concerns across the codebase |
| 2026-04-14 | MAI | LWC local dev via `sf lightning dev app` is the standard workflow | Much faster than deploying every change |
| 2026-04-14 | MAI | Client Info Component auto-save → explicit Next-button trigger | Resolves #1085 lead-value bug on related patient creation |
| 2026-04-14 | CREtelligent | Convert enviro site → task group Flow logic to Apex | Team prefers Apex control; no further Flow investment expected |
| 2026-04-14 | CREtelligent | Environmental cost worksheet: record-triggered on task group insert (1:1), type driven by task group type | Missing piece in current flow; one active worksheet per environment |
| 2026-04-13 | MAI | Ticket 1165 closed — sharing/data issue, not a code bug | Moved to done after Vincent confirmed only reproducible with his account |
| 2026-04-13 | MAI | Ticket 1319 closed — type field now defaults via record type, not flows | Cleaner approach, no flow dependency |
| 2026-04-13 | F2-Cetera | Wealth management review automation approved for Apr 14 demo | Complete — flow checks 365-day lookback, prevents duplicate compliance records |
| 2026-04-13 | F2-Cetera | Advice Works slip to Sprint 3 accepted if credentials not resolved same day | Low impact given available resources |
| 2026-04-13 | Litify | Case summarization is button-triggered, not automatic | Preserves AI credits |
| 2026-04-13 | Litify | Email drafting V1 only — V2+ moved to managed services | Scope control |
| 2026-04-13 | Litify | ~120 hrs / 8-week delivery target confirmed | 20 hrs/week, client commits ~5 hrs for testing |
| 2026-04-15 | NBCU | Primary use case locked: sales pricing recommendation engine | Based on historical closed-won opportunities via Data Cloud |
| 2026-04-10 | CREtelligent | Quote Matrix LWC approved for current sprint as-is | Enhancements (height, filters, sorting) scoped separately |
| 2026-04-10 | CREtelligent | Add Vendor modal: no pre-populate on company field, launch from PA object not Enviro Site | Better UX and correct architectural placement |
| 2026-04-10 | CREtelligent | Contact types that trigger Connect API: Survey, Environmental, Zoning only | Client and prospect types excluded |
| 2026-04-10 | F2-Cetera | Wednesday delivery target for sprint items going forward | Gives client time for review before end of week |
| 2026-04-09 | Harvey | Agent-agnostic strategy confirmed — Einstein Agent for native SF workflows, Claude for email intent parsing | Multi-intent email handling is Claude's differentiator |
| 2026-04-09 | Harvey | EU pipeline automation deferred until 6+ months of manual CRM adoption | 120 new users need adoption baseline first |
| 2026-04-09 | Harvey | 3-year AI roadmap approved for board presentation | Carl and Kate driving |
| 2026-04-09 | MAI | Type field workaround: custom field + hide standard from layout + set via trigger | Standard FSC Type field cannot be made optional; user never interacts with standard field |
| 2026-04-09 | MAI | Credit card page layouts: remove Type field entirely | Page-level validation fires before save flows; layout removal is cleanest path |
| 2026-04-09 | Meadow | SSO strategy: Sanity SSO via @sanity/client SDK | Replaces earlier Entra/MSAL plan |
| 2026-04-09 | Meadow | Four-phase roadmap confirmed | Cloud DB → Claude Chat → Native Time Entry → Salesforce Pipeline |
| 2026-04-08 | NBCU | Two POC use cases confirmed: content recommendation + sales pricing strategy | 4-week window post environment access |
| 2026-04-02 | MAI | Flex-Dash fully paused, all capacity redirected to MAI | Argentine dev team phased out due to quality; replacement hires in progress |
| 2026-04-02 | CREtelligent | Salesforce cert expiring June 15: leave alone, monitor for breakage | Nothing in apex classes, named credentials, connected apps references it |
| 2026-04-02 | MAI | Prioritize QA/UAT over new backlog items | ~12 tickets remain; quality over velocity |

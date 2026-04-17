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
| 2026-04-15 | MAI | Hold user demos until sales process system bug fixes land | Prospect info fields collapsing, sections not populating, dev/UAT diverging |
| 2026-04-15 | MAI | Evaluate PDF generation alternative before removing current system | Current generator is tightly coupled; removal creates delivery risk |
| 2026-04-15 | CREtelligent | Product-centric data model — Site Product object joining products with sites replaces opportunity-level checkboxes | Cleaner scaling as product catalog grows and enables per-site product tracking |
| 2026-04-15 | CREtelligent | One enviro site per location (not per product) — PCA/ESA combos create one enviro site, two tasks, two site products | Eliminates duplicate enviro sites in current flow for same-property product combos |
| 2026-04-15 | CREtelligent | Use MuleSoft for Salesforce/Connect API integration instead of a single Apex class | Scalability and maintainability for growing integration surface |
| 2026-04-15 | CREtelligent | Cost worksheet category cleanup: rename (Regulatory→FOIA, Site assessment→Professional associate, Geo→Geophysical), remove Data/Internal review, consolidate Travel, Other PA→Other cost | Align with Salesforce spreadsheet; six proposed bottom additions handled via dropdowns instead |
| 2026-04-16 | F2-Cetera | Help desk case permission sets: three consolidated groups aligned to job function (trading/client service, general back office, TBD third) | Replaces one-per-record-type (too many) and single-set (too loose) options |
| 2026-04-16 | F2-Cetera | Affiliate onboarding / growth engine: opportunity-based model (APP-style) for AUM-impacting lines (RPS, brokerage); process-specific fields on separate objects | Preserves forecasting on opportunity while preventing 800+ field bloat from process-specific metadata |
| 2026-04-16 | F2-Cetera | RPS and CRPS treated as functionally the same object; CRPS is canonical target and flexible post-APP merger | Eliminates parallel design paths; CRPS still in infancy so refactors are low-risk |
| 2026-04-16 | MAI | Prospect address go-live approach: replace OOTB standard address on prospect modal with the existing custom Address component (link already exists) — no wholesale redesign | Eliminates dual-write risk against custom Address object; keeps go-live scope tight |
| 2026-04-16 | MAI | Related-person address redesign deferred to internal working session — not introducing new requirements before go-live | Schedule B on contracts + household conversion + multi-address complexity too large for pre-go-live scope |
| 2026-04-16 | MAI | Hold Mac's prospect UAT deployment; bundle with Nicole's person-account changes into a single deploy | Avoids piecemeal deploys; aligns prospect work with related person-account cleanup |
| 2026-04-16 | MAI | Fund assignment rebuild must be retested in UAT immediately before go-live | Prior testing was invalid — ran before deployment |
| 2026-04-16 | CREtelligent | Site Product junction object replaces product checkboxes on Site | Scalable model for product-specific data; unblocks per-site pricing and automated report rollups |
| 2026-04-16 | CREtelligent | Pricing and discounting logic owned by CREtelligent; Salesforce stamps list price / discount amount / discount percent from payload (no calc in Apex) | Keeps complex pricing logic in the source system; SF is the system of record for stamped values only |
| 2026-04-16 | CREtelligent | Automated Report reparented as child of Site with Apex-driven cost rollup (trigger before insert/update/delete on Site Product) — not DLRS | Needed for performance and control over rollup behavior as product catalog grows |
| 2026-04-16 | CREtelligent | Architecture: modular service classes with separate handlers for site details, product details, etc. — break nested arrays into focused processors | Replaces the current monolithic `Create Ops and Sites` Apex class; easier to maintain as payload grows |
| 2026-04-16 | CREtelligent | Product catalog load strategy: one-time initial bulk load + incremental/monthly scheduled batch syncs | CREtelligent has updated products only twice in five years; infrequent cadence justifies simpler batch approach |
| 2026-04-16 | CREtelligent | Hold off on Apex build until the updated `Create Opportunity and Sites` payload lands (expected tomorrow) | Avoids placeholder work that requires rework; proceed with object/LWC scaffolding in parallel |
| 2026-04-16 | CREtelligent | Product-to-cost routing: Automated Report products → third-party cost on Automated Report only (no EnviroCost Worksheet); EnviroSite products (Survey, Zoning, etc.) → EnviroCost Worksheet with estimate + actual field pairs | Survey and zoning produce cost estimates via the worksheet; automated reports only need third-party cost |
| 2026-04-16 | CREtelligent | Product2 holds master catalog fields (product code, name, short code); Site Product holds order-specific fields (order number, discount, list price, total price) | Separates catalog data from per-order data; supports Site Product as the Opportunity Line Item replacement |
| 2026-04-16 | CREtelligent | Product number is NOT unique on Product2 — uniqueness lives at the Site Product level | Same product can appear across many orders; per-site uniqueness is the right grain |
| 2026-04-16 | CREtelligent | Field-work split: Obed owns EnviroCost Worksheet field updates; Mac owns Site Product field mapping | Parallelizes the field cleanup work against the updated mapping workbook |
| 2026-04-16 | CREtelligent | Conga doc gen is priority #1; DocHub is the next team focus after Conga clears | Keeps the team focused; Andrew to schedule a dedicated DocHub working session |
| 2026-04-17 | Litify | Scaled-down SOW: 57 implementation hrs + 9 PM hrs = 66 hrs total, fixed price | Litify pushed back on pricing; team trimmed to core deliverables (case summaries, case resolution, knowledge article creation) |
| 2026-04-17 | Litify | Removed from scope: knowledge article recommendation, email drafting, case field population (4k fields too expensive) | Scale-down to hit Litify's budget expectations without killing the engagement |
| 2026-04-17 | Litify | External agent (website/community) sized at 40 hrs — create new cases, case updates, KB recommendations | Range 10–40k depending on case-update scope and KB access |
| 2026-04-17 | Litify | Internal similar-case agent sized at 20 hrs — query resolved cases matched by type/subtype/industry | Surfaces past resolution to the rep; Ryan's interpretation of Litify's "related cases" ask |
| 2026-04-17 | MAI | Account address pattern: custom Address object on conversion (writes to Course Analysis) — NOT standard primary/mailing fields | Contact Points rejected due to multi-property client requirements |
| 2026-04-17 | MAI | Story-point sizing: run off Jira filter for unpointed tickets (Michael's preference); Notion sizing page deferred | Fastest path to honest "how much dev time is left" answer for leadership |
| 2026-04-17 | MAI | Adopt shared "UAT Deployment Collaboration" Google Doc; Mac logs every deploy | Multiple devs touching same components without coordination caused 1345 overwrite |
| 2026-04-17 | MAI | Mac/Federico ticket swap: Mac hands over fund account ticket; Federico finishes 1343 first to unblock | Keeps Mac moving on non-fund-account work while Federico clears the dependency |
| 2026-04-17 | CREtelligent | Rename "Environmental Cost Worksheet" → "Cost Worksheet"; add lookup to Site (via Valuation Site when present, else direct Site → Enviro Site → Task Group) | Simpler naming; lookup unlocks site-level context across the worksheet |
| 2026-04-17 | CREtelligent | Cost Worksheet holds all 28 expense fields with budget vs. actual pairs; estimates lock at proposal acceptance, actuals editable through fulfillment | Captures both forecast and as-delivered cost in one object |
| 2026-04-17 | CREtelligent | Default value strategy: estimates = actuals at creation (FOIA $33, Historical $185, Choir = estimate); "everything else" = 50% sell price → PA cost only | Sensible starting values for ops to adjust vs. leaving fields empty |
| 2026-04-17 | CREtelligent | Actuals roll up from PA cost into Cost Worksheet only — NOT from Internal Expense | Single source avoids double-counting; Internal Expense still captured separately |
| 2026-04-17 | CREtelligent | Initial product load is static/manual from Travis's product key spreadsheet (~100+ products); no Order Service product endpoint yet | Monthly/weekly cleanup job catches unrecognized keys into "Other Product" catch |
| 2026-04-17 | CREtelligent | Product table import limited to: product name, product code, product family, SKU, list price — no discounting/pricing rules imported | Keeps catalog simple; pricing logic stays in CREtelligent per prior decision |
| 2026-04-17 | CREtelligent | Disregard current product sheet; wait for corrected version from Blake | Tier/day mismatches and inconsistent values across sheet — garbage in, garbage out |
| 2026-04-17 | Meadow | HMS website Phase 1 launch: article tiles link directly to source publications; custom write-ups via console deferred to Phase 2/3 | Prioritize shipping over custom content authoring |
| 2026-04-17 | Meadow | Services page cleanup: remove tile numbering and per-tile Learn More buttons; single centered "Discuss Your Needs" CTA | Removes clutter and lets more tiles land above the fold |
| 2026-04-17 | Meadow | Services tiles top row: Business Transformation, AI Design, Data Strategy & Analytics | Priority ordering above Systems Integration / Strategic Technical Advisory / sixth tile |
| 2026-04-17 | Meadow | Replace "advisors" with "team is comprised of individuals that have held operating roles" on About page | "Advisors" conflicts with the RIA industry term and confuses HMS positioning |
| 2026-04-17 | Meadow | Partnerships section updates: remove Enforge; add Black Diamond, Practify, Orion — hard gate on go-live until Bryce confirms | Accurate partnerships critical for credibility at launch |
| 2026-04-17 | Meadow | Expand CSO's LinkedIn RIA posts into full articles and pitch to industry publications (e.g., Wealth Solutions Report) rather than link to LinkedIn | Too substantive for LinkedIn embed; publication pitch raises thought leadership profile |

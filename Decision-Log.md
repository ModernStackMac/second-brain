# Decision Log
---
type: decision-log
owner: Mac Nosek
updated: 2026-04-18
append_only: true
---

# Decision Log

> Key decisions extracted from meetings and working sessions. Claude appends during ingest. **Entries are permanent — do not delete or edit past rows.**
>
> Columns: Date, Project, Decision, Context, Owner, Source, Reversal Criteria. New rows append to the bottom. The meeting-selector auto-populates from `decision:` / `decided:` / `## Decisions` blocks in meeting summaries.

| Date | Project | Decision | Context | Owner | Source | Reversal Criteria |
|------|---------|----------|---------|-------|--------|-------------------|
| 2026-04-14 | Litify | Agent Force for Service SOW: 120 hrs base + 18 hrs PM (15%) → 138–158 hr range | Case prioritization removed, training docs excluded, ~10 hrs discovery | Mac | manual | If Litify requests re-scope |
| 2026-04-14 | MAI | Trigger handler convention: one handler per object, logic lives in the object's service | Clean separation of concerns across the codebase | Mac | manual | Architecture review |
| 2026-04-14 | MAI | LWC local dev via `sf lightning dev app` is the standard workflow | Much faster than deploying every change | Mac | manual | — |
| 2026-04-14 | MAI | Client Info Component auto-save → explicit Next-button trigger | Resolves #1085 lead-value bug on related patient creation | Mac | manual | — |
| 2026-04-14 | CREtelligent | Convert enviro site → task group Flow logic to Apex | Team prefers Apex control; no further Flow investment expected | Mac | manual | — |
| 2026-04-14 | CREtelligent | Environmental cost worksheet: record-triggered on task group insert (1:1), type driven by task group type | Missing piece in current flow; one active worksheet per environment | Mac | manual | — |
| 2026-04-13 | MAI | Ticket 1165 closed — sharing/data issue, not a code bug | Moved to done after Vincent confirmed only reproducible with his account | Mac | manual | — |
| 2026-04-13 | MAI | Ticket 1319 closed — type field now defaults via record type, not flows | Cleaner approach, no flow dependency | Mac | manual | — |
| 2026-04-13 | Cetera | Wealth management review automation approved for Apr 14 demo | Complete — flow checks 365-day lookback, prevents duplicate compliance records | Mac | manual | — |
| 2026-04-13 | Cetera | Advice Works slip to Sprint 3 accepted if credentials not resolved same day | Low impact given available resources | Connor | manual | If creds resolve same day |
| 2026-04-13 | Litify | Case summarization is button-triggered, not automatic | Preserves AI credits | Mac | manual | AI credit budget change |
| 2026-04-13 | Litify | Email drafting V1 only — V2+ moved to managed services | Scope control | Mac | manual | Scope expansion |
| 2026-04-13 | Litify | ~120 hrs / 8-week delivery target confirmed | 20 hrs/week, client commits ~5 hrs for testing | Mac | manual | Scope change |
| 2026-04-15 | NBCU | Primary use case locked: sales pricing recommendation engine | Based on historical closed-won opportunities via Data Cloud | Mac | manual | Data Cloud access issues |
| 2026-04-10 | CREtelligent | Quote Matrix LWC approved for current sprint as-is | Enhancements (height, filters, sorting) scoped separately | Mac | manual | — |
| 2026-04-10 | CREtelligent | Add Vendor modal: no pre-populate on company field, launch from PA object not Enviro Site | Better UX and correct architectural placement | Mac | manual | UX re-review |
| 2026-04-10 | CREtelligent | Contact types that trigger Connect API: Survey, Environmental, Zoning only | Client and prospect types excluded | Mac | manual | New contact type introduced |
| 2026-04-10 | Cetera | Wednesday delivery target for sprint items going forward | Gives client time for review before end of week | Mac | manual | Sprint ceremony change |
| 2026-04-09 | Harvey | Agent-agnostic strategy confirmed — Einstein Agent for native SF workflows, Claude for email intent parsing | Multi-intent email handling is Claude's differentiator | Mac | manual | Einstein matches Claude capability |
| 2026-04-09 | Harvey | EU pipeline automation deferred until 6+ months of manual CRM adoption | 120 new users need adoption baseline first | Mac | manual | After 6 months adoption data |
| 2026-04-09 | Harvey | 3-year AI roadmap approved for board presentation | Carl and Kate driving | Carl, Kate | manual | Board feedback |
| 2026-04-09 | MAI | Type field workaround: custom field + hide standard from layout + set via trigger | Standard FSC Type field cannot be made optional; user never interacts with standard field | Mac | manual | Salesforce makes standard optional |
| 2026-04-09 | MAI | Credit card page layouts: remove Type field entirely | Page-level validation fires before save flows; layout removal is cleanest path | Mac | manual | — |
| 2026-04-09 | Meadow | SSO strategy: Sanity SSO via @sanity/client SDK | Replaces earlier Entra/MSAL plan | Mac | manual | Sanity SSO gaps |
| 2026-04-09 | Meadow | Four-phase roadmap confirmed | Cloud DB → Claude Chat → Native Time Entry → Salesforce Pipeline | Mac | manual | Phase-gate review |
| 2026-04-08 | NBCU | Two POC use cases confirmed: content recommendation + sales pricing strategy | 4-week window post environment access | Mac | manual | Post-POC retro |
| 2026-04-02 | MAI | Flex-Dash fully paused, all capacity redirected to MAI | Argentine dev team phased out due to quality; replacement hires in progress | Mac | manual | Hires ramp up |
| 2026-04-02 | CREtelligent | Salesforce cert expiring June 15: leave alone, monitor for breakage | Nothing in apex classes, named credentials, connected apps references it | Mac | manual | Breakage detected |
| 2026-04-02 | MAI | Prioritize QA/UAT over new backlog items | ~12 tickets remain; quality over velocity | Mac | manual | Backlog cleared |
| 2026-04-15 | MAI | Hold user demos until sales process system bug fixes land | Prospect info fields collapsing, sections not populating, dev/UAT diverging | Mac | manual | Bugs fixed |
| 2026-04-15 | MAI | Evaluate PDF generation alternative before removing current system | Current generator is tightly coupled; removal creates delivery risk | Mac | manual | Alternative validated |
| 2026-04-15 | CREtelligent | Product-centric data model — Site Product object joining products with sites replaces opportunity-level checkboxes | Cleaner scaling as product catalog grows and enables per-site product tracking | Mac | manual | Scaling issues |
| 2026-04-15 | CREtelligent | One enviro site per location (not per product) — PCA/ESA combos create one enviro site, two tasks, two site products | Eliminates duplicate enviro sites in current flow for same-property product combos | Mac | manual | — |
| 2026-04-15 | CREtelligent | Use MuleSoft for Salesforce/Connect API integration instead of a single Apex class | Scalability and maintainability for growing integration surface | Mac | manual | MuleSoft licensing change |
| 2026-04-15 | CREtelligent | Cost worksheet category cleanup: rename (Regulatory→FOIA, Site assessment→Professional associate, Geo→Geophysical), remove Data/Internal review, consolidate Travel, Other PA→Other cost | Align with Salesforce spreadsheet; six proposed bottom additions handled via dropdowns instead | Mac | manual | — |
| 2026-04-16 | Cetera | Help desk case permission sets: three consolidated groups aligned to job function (trading/client service, general back office, TBD third) | Replaces one-per-record-type (too many) and single-set (too loose) options | Mac | manual | Job function structure change |
| 2026-04-16 | Cetera | Affiliate onboarding / growth engine: opportunity-based model (APP-style) for AUM-impacting lines (RPS, brokerage); process-specific fields on separate objects | Preserves forecasting on opportunity while preventing 800+ field bloat from process-specific metadata | Mac | manual | Forecasting approach change |
| 2026-04-16 | Cetera | RPS and CRPS treated as functionally the same object; CRPS is canonical target and flexible post-APP merger | Eliminates parallel design paths; CRPS still in infancy so refactors are low-risk | Mac | manual | CRPS maturity |
| 2026-04-16 | MAI | Prospect address go-live approach: replace OOTB standard address on prospect modal with the existing custom Address component (link already exists) — no wholesale redesign | Eliminates dual-write risk against custom Address object; keeps go-live scope tight | Mac | manual | — |
| 2026-04-16 | MAI | Related-person address redesign deferred to internal working session — not introducing new requirements before go-live | Schedule B on contracts + household conversion + multi-address complexity too large for pre-go-live scope | Mac | manual | Post-go-live working session |
| 2026-04-16 | MAI | Hold Mac's prospect UAT deployment; bundle with Nicole's person-account changes into a single deploy | Avoids piecemeal deploys; aligns prospect work with related person-account cleanup | Mac | manual | — |
| 2026-04-16 | MAI | Fund assignment rebuild must be retested in UAT immediately before go-live | Prior testing was invalid — ran before deployment | Mac | manual | — |
| 2026-04-16 | CREtelligent | Site Product junction object replaces product checkboxes on Site | Scalable model for product-specific data; unblocks per-site pricing and automated report rollups | Mac | manual | — |
| 2026-04-16 | CREtelligent | Pricing and discounting logic owned by CREtelligent; Salesforce stamps list price / discount amount / discount percent from payload (no calc in Apex) | Keeps complex pricing logic in the source system; SF is the system of record for stamped values only | Mac | manual | CREtelligent system change |
| 2026-04-16 | CREtelligent | Automated Report reparented as child of Site with Apex-driven cost rollup (trigger before insert/update/delete on Site Product) — not DLRS | Needed for performance and control over rollup behavior as product catalog grows | Mac | manual | DLRS performance improves |
| 2026-04-16 | CREtelligent | Architecture: modular service classes with separate handlers for site details, product details, etc. — break nested arrays into focused processors | Replaces the current monolithic `Create Ops and Sites` Apex class; easier to maintain as payload grows | Mac | manual | — |
| 2026-04-16 | CREtelligent | Product catalog load strategy: one-time initial bulk load + incremental/monthly scheduled batch syncs | CREtelligent has updated products only twice in five years; infrequent cadence justifies simpler batch approach | Mac | manual | Catalog update cadence increases |
| 2026-04-16 | CREtelligent | Hold off on Apex build until the updated `Create Opportunity and Sites` payload lands (expected tomorrow) | Avoids placeholder work that requires rework; proceed with object/LWC scaffolding in parallel | Mac | manual | Payload lands |
| 2026-04-16 | CREtelligent | Product-to-cost routing: Automated Report products → third-party cost on Automated Report only (no EnviroCost Worksheet); EnviroSite products (Survey, Zoning, etc.) → EnviroCost Worksheet with estimate + actual field pairs | Survey and zoning produce cost estimates via the worksheet; automated reports only need third-party cost | Mac | manual | — |
| 2026-04-16 | CREtelligent | Product2 holds master catalog fields (product code, name, short code); Site Product holds order-specific fields (order number, discount, list price, total price) | Separates catalog data from per-order data; supports Site Product as the Opportunity Line Item replacement | Mac | manual | — |
| 2026-04-16 | CREtelligent | Product number is NOT unique on Product2 — uniqueness lives at the Site Product level | Same product can appear across many orders; per-site uniqueness is the right grain | Mac | manual | — |
| 2026-04-16 | CREtelligent | Field-work split: Obed owns EnviroCost Worksheet field updates; Mac owns Site Product field mapping | Parallelizes the field cleanup work against the updated mapping workbook | Mac, Obed | manual | — |
| 2026-04-16 | CREtelligent | Conga doc gen is priority #1; DocHub is the next team focus after Conga clears | Keeps the team focused; Andrew to schedule a dedicated DocHub working session | Andrew | manual | Conga clears |
| 2026-04-17 | Litify | Scaled-down SOW: 57 implementation hrs + 9 PM hrs = 66 hrs total, fixed price | Litify pushed back on pricing; team trimmed to core deliverables (case summaries, case resolution, knowledge article creation) | Mac | manual | Litify counter-offer |
| 2026-04-17 | Litify | Removed from scope: knowledge article recommendation, email drafting, case field population (4k fields too expensive) | Scale-down to hit Litify's budget expectations without killing the engagement | Mac | manual | Budget increase |
| 2026-04-17 | Litify | External agent (website/community) sized at 40 hrs — create new cases, case updates, KB recommendations | Range 10–40k depending on case-update scope and KB access | Mac | manual | Scope refinement |
| 2026-04-17 | Litify | Internal similar-case agent sized at 20 hrs — query resolved cases matched by type/subtype/industry | Surfaces past resolution to the rep; Ryan's interpretation of Litify's "related cases" ask | Mac | manual | Ryan interpretation change |
| 2026-04-17 | MAI | Account address pattern: custom Address object on conversion (writes to Course Analysis) — NOT standard primary/mailing fields | Contact Points rejected due to multi-property client requirements | Mac | manual | Multi-property requirement change |
| 2026-04-17 | MAI | Story-point sizing: run off Jira filter for unpointed tickets (Michael's preference); Notion sizing page deferred | Fastest path to honest "how much dev time is left" answer for leadership | Mac | manual | Leadership asks for Notion view |
| 2026-04-17 | MAI | Adopt shared "UAT Deployment Collaboration" Google Doc; Mac logs every deploy | Multiple devs touching same components without coordination caused 1345 overwrite | Mac | manual | — |
| 2026-04-17 | MAI | Mac/Federico ticket swap: Mac hands over fund account ticket; Federico finishes 1343 first to unblock | Keeps Mac moving on non-fund-account work while Federico clears the dependency | Mac, Federico | manual | — |
| 2026-04-17 | CREtelligent | Rename "Environmental Cost Worksheet" → "Cost Worksheet"; add lookup to Site (via Valuation Site when present, else direct Site → Enviro Site → Task Group) | Simpler naming; lookup unlocks site-level context across the worksheet | Mac | manual | — |
| 2026-04-17 | CREtelligent | Cost Worksheet holds all 28 expense fields with budget vs. actual pairs; estimates lock at proposal acceptance, actuals editable through fulfillment | Captures both forecast and as-delivered cost in one object | Mac | manual | — |
| 2026-04-17 | CREtelligent | Default value strategy: estimates = actuals at creation (FOIA $33, Historical $185, Choir = estimate); "everything else" = 50% sell price → PA cost only | Sensible starting values for ops to adjust vs. leaving fields empty | Mac | manual | Ops feedback |
| 2026-04-17 | CREtelligent | Actuals roll up from PA cost into Cost Worksheet only — NOT from Internal Expense | Single source avoids double-counting; Internal Expense still captured separately | Mac | manual | — |
| 2026-04-17 | CREtelligent | Initial product load is static/manual from Travis's product key spreadsheet (~100+ products); no Order Service product endpoint yet | Monthly/weekly cleanup job catches unrecognized keys into "Other Product" catch | Mac | manual | Order Service endpoint ships |
| 2026-04-17 | CREtelligent | Product table import limited to: product name, product code, product family, SKU, list price — no discounting/pricing rules imported | Keeps catalog simple; pricing logic stays in CREtelligent per prior decision | Mac | manual | — |
| 2026-04-17 | CREtelligent | Disregard current product sheet; wait for corrected version from Blake | Tier/day mismatches and inconsistent values across sheet — garbage in, garbage out | Blake | manual | Corrected sheet arrives |
| 2026-04-17 | Meadow | HMS website Phase 1 launch: article tiles link directly to source publications; custom write-ups via console deferred to Phase 2/3 | Prioritize shipping over custom content authoring | Mac | manual | Phase 2 kickoff |
| 2026-04-17 | Meadow | Services page cleanup: remove tile numbering and per-tile Learn More buttons; single centered "Discuss Your Needs" CTA | Removes clutter and lets more tiles land above the fold | Mac | manual | — |
| 2026-04-17 | Meadow | Services tiles top row: Business Transformation, AI Design, Data Strategy & Analytics | Priority ordering above Systems Integration / Strategic Technical Advisory / sixth tile | Mac | manual | Service priority shift |
| 2026-04-17 | Meadow | Replace "advisors" with "team is comprised of individuals that have held operating roles" on About page | "Advisors" conflicts with the RIA industry term and confuses HMS positioning | Mac | manual | — |
| 2026-04-17 | Meadow | Partnerships section updates: remove Enforge; add Black Diamond, Practify, Orion — hard gate on go-live until Bryce confirms | Accurate partnerships critical for credibility at launch | Bryce | manual | Bryce confirms |
| 2026-04-17 | Meadow | Expand CSO's LinkedIn RIA posts into full articles and pitch to industry publications (e.g., Wealth Solutions Report) rather than link to LinkedIn | Too substantive for LinkedIn embed; publication pitch raises thought leadership profile | Mac | manual | Publication response |

<!-- AUTO-APPEND-BELOW -->
<!-- New decisions auto-appended by meeting-selector go below this marker. Do not delete the marker. -->


---
| 2026-04-20 | MAI | Ticket 7-98 blocked and escalated to David Torsak — not proceeding without clear requirements on pad settings behavior | David previously questioned whether it's even an issue; team confused on "path" field removal | Mac | meeting|2026-04-20 - Impromptu Call | David Torsak clarifies |
| 2026-04-20 | MAI | Legacy closer reason values: mark majority as inactive, keep only five active (data migration requirement for ticket 1.364) | Legacy data values in closer reason value set need proper flagging for data migration | Mac | meeting|2026-04-20 - Impromptu Call | — |
| 2026-04-20 | high-meadow-website | Careers leads: type__c = "Candidate" on Lead (no record types); source = "web"; Area of Interest populated | Record types don't exist on Lead yet; type__c field is cleaner path | Speaker 1 | meeting|2026-04-20 - Impromptu Call | Record types added to Lead |
| 2026-04-20 | high-meadow-website | Resume stays in email (via Resend), not attached to Salesforce lead | Avoids SF file attachment complexity; careers inbox gets the full submission | Speaker 1 | meeting|2026-04-20 - Impromptu Call | — |
| 2026-04-20 | high-meadow-website | Resend.com as the email service for website-originated emails (info@ sending, careers@ receiving) | Mac identified Resend; API keys generated during the call | Mac | meeting|2026-04-20 - Impromptu Call | Email service change |
| 2026-04-20 | high-meadow-website | Vercel upgraded from trial to Pro ($20/month) | Trial expiring in three days; credit card added to prevent service interruption | Speaker 1 | meeting|2026-04-20 - Impromptu Call | — |
| 2026-04-20 | NBCU | Pricing agent matching criteria: genre + budget only — cast explicitly excluded per Karthi (no success/revenue metrics available) | Mac flagged accuracy risk; team proceeding with Karthi's directive | Mac | meeting|2026-04-20 - NBCU Stand8 POC | Karthi reconsiders cast scoring |
| 2026-04-20 | NBCU | SOW is complimentary (non-billable) — outlines scope, timeline, and level of effort only | Discussed with Naresh on call; no billable engagement until POC build | Mac | meeting|2026-04-20 - NBCU Stand8 POC | Engagement goes billable |
| 2026-04-20 | CREtelligent | Cost roll-ups implemented in Apex (not DLRS) — four categories (survey, automated report, valuation, zoning) sum to site level then propagate to correct site product | Performance and control; rollup chain: source object → site → site product → order service API call | Mac | meeting|2026-04-20 - Internal CREtelligent Weekly Sync | DLRS proves adequate |
| 2026-04-20 | CREtelligent | New "cost product category" field on Cost Worksheet (distinct from existing type field) — values include valuation and zoning | Needed to route costs to the correct site product category during rollup | Mac | meeting|2026-04-20 - Internal CREtelligent Weekly Sync | — |

| 2026-04-02 | Flex-Dash | No AppExchange licensing — implementation fee model only; managed package prevents partner code theft | Salesforce revenue-share risk; small clients (e.g. 4-person team) can't justify recurring license fees | Mac | meeting|2026-04-02 - Lefavi Weekly Call | Revenue model change |
| 2026-04-02 | Flex-Dash | Access control architecture (shutting off package access for non-paying clients) back-burnered | Implementation fee model reduces urgency; focus shifted to MAI | Mac | meeting|2026-04-02 - Lefavi Weekly Call | MAI stabilizes |
| 2026-04-14 | Internal | Use Obsidian + MCP as knowledge management backbone for HMU training content; capture 100+ external training pieces first, organize later | Content strategy for monetized HMU Workshops training programs; Brian excited about "second brain" concept for all business lines | Mac | meeting|2026-04-14 - Packaging Content for HMU Workshops | Platform pivot |
| 2026-04-14 | Internal | HMU MVP platform launch will NOT include full content repo — buildout too large a time investment for MVP | Steven flagged scope risk; team agrees to defer content library | Steven | meeting|2026-04-14 - Packaging Content for HMU Workshops | MVP scope change |
| 2026-04-14 | LNW | Build ERD from entity role junction object in sandbox; reference Altrata ownership structure diagrams; include all standard accounts initially | Visual representation of nested ownership for wealth management client | Mac | meeting|2026-04-14 - Entity Role Diagram ERD Sync | — |
| 2026-04-09 | Internal | Dev meeting updates can be async (Monday EOD / Tuesday AM) when nothing to demo; replace cancelled weekly slots | Over-communication strategy to keep HMS confident without wasting synchronous time | Mac | meeting|2026-04-09 - HMS Product Strategy | Meeting cadence change |
| 2026-04-09 | Internal | Capacity planning app migrates to company GitHub after quality review | Currently on personal repo; quality review gate before integration | Mac | meeting|2026-04-09 - HMS Product Strategy | — |
| 2026-04-09 | Internal | Use Vercel for hosting HMS web apps; Supabase (Postgres) for hosted database — separate instance under existing company org | Replaces local SQLite; Vercel for deployment pipeline | Mac | meeting|2026-04-09 - Website Sync | Infrastructure change |
| 2026-04-09 | Internal | Replace Clockify with custom web-based time-entry component authenticated via email auth/SSO | Part of capacity planning app; reduces external tool dependency | Mac | meeting|2026-04-09 - Website Sync | — |
| 2026-04-09 | Internal | vendors@highmetasolutions.com created as traditional distribution list (not Microsoft Group/SharePoint) | Members: Brian, Dave, Ernie, Steven, plus owners | Mac | meeting|2026-04-09 - Website Sync | — |


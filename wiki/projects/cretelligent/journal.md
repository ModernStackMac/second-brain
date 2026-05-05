---
status: active
owner: Mac
priority: p1
last_meeting: 2026-05-05
open_actions: "26"
---

# CREtelligent — Project Journal

## Week of May 4, 2026 (continued)

Daily Dev Standup (May 5, w/ Andrew Porter, Blake Stracener, Jeff Adams): endpoint development kickoff, document integration strategy defined, Named Credentials auth standard confirmed, document sync rewrite scoped.

**Endpoint development — update opportunity site:** Mac starting work on the `update opportunity site` endpoint today. Approach: build a proper data model class and use `JSON.deserialize()` (replacing the legacy JSON parser). Blake sending class files for all payload objects so Mac can ensure model completeness. Testing plan: once initial class skeleton is ready, Blake fires test payloads from his local environment (pointed at sandbox). Products not yet defined, so matching logic deferred — building skeletons first.

**Document endpoint strategy defined:** Initial endpoint will be a single `POST` (POST required because client secret goes in request body). Parameters: `project_id` (required — fail without it), `id` (site ID, optional), `doc_type` (optional), `visible` (optional). Slated for Blake's sprint starting Thursday. Separate from the proposal doc gen endpoint.

**Document sync rewrite scoped:** Current OT→SF document sync uses delete-and-reinsert on every sync (workaround for SF content document version duplication issues). This breaks once DocHub allows uploads from Salesforce or DocHub directly to S3 — would destroy user-uploaded documents. Decision: rewrite docs class with proper upsert logic in a future session.

**DocHub folder creation:** Requirement for DocHub to create new folders and upload documents to them. Decision: complex enough to warrant a separate design spike before implementation.

**Auth standard confirmed:** All new Salesforce-to-OT integrations will use Named Credentials (replacing Custom Labels). Mac believes one already exists from a prior story — will verify and schedule setup with Andrew if needed.

**Priority sequencing:** Mac focusing on roll-up logic and OBC updates first, then pivoting to endpoint work.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-05-05 - Stitch CREtelligent - Daily Dev Standup.md`)*

---


## Week of May 4, 2026

Weekly Refinement / Planning (May 4, w/ Andrew Porter, Blake Stracener): proposal redesign direction, integration unblocked via new Site Product data model, live payload testing scheduled, SOW/T&C dynamic inclusion requirements.

**Integration unblocked — Site Product data model ready for testing:** The new `Site Product` data model is ready. Live payload tests scheduled for the May 5 DevSync (9 AM ET) with Blake firing payloads from his local environment. Four separate endpoints exist on the Nexus side (create opportunity insights, update opportunity site, update opportunity field, update site field) — Mac reviewing all four. Blake submitting PR on their end so testing can move beyond local environments. Once Mac updates the Opportunity Insights Apex class to accept the new payload and create Site Products, three previously blocked stories (site verification, automated reports, site product data flow) are unblocked.

**LWC reference fix:** Rollup logic is working but the LWC may be using old field references post-data-model change. Mac updating.

**Proposal redesign (major initiative):** Current proposal document is a "mess" blending Radius and Nexus legacy systems — unscalable for multi-site projects. Wendell leading a full redesign to create a modern, dynamic document. Requirements: group by site, list products per site, show 3-digit site number, TAT in "Business Days", site-level pricing. Proposal must dynamically include the correct SOW for each ordered product. Missing SOWs (PCA, Zoning Reports) need adding to the Salesforce product table. Client-specific terms (payment, notice delivery) stored at Account level for dynamic pull.

**DocGen demo:** Obed demonstrated the Conga template generation using the new data model (site products). SOW section still needs reconfiguration for the new model but core generation works.

**CE/CSM field source alignment:** Team needs to confirm whether CE and CSM fields should source from Account or Opportunity level — Blake to align.

**May 14 plan:** Chris referenced a May 14 milestone; Andrew calling to confirm scope/plan.

**Decisions:**
- Proposal must dynamically include correct SOW per ordered product — missing SOWs (PCA, Zoning) to be added to product table
- Client-specific terms live at Account level (not Opportunity) for dynamic proposal generation
- Four separate Nexus→Salesforce endpoints confirmed; Mac reviewing all for new payload compatibility
- Live payload testing via Blake's local environment during May 5 DevSync

**Open questions:**
- CE/CSM field source: Account vs Opportunity? (Blake aligning)
- May 14 milestone scope (Chris/Andrew confirming)
- Wendell morning availability for follow-up proposal design sessions

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-05-04 - Stitch CREtelligent Weekly Refinement and Planning.md`)*

---


## Week of Apr 27, 2026 (continued)

INTERNAL CREtelligent Team Sync (Apr 28, w/ Andrew Porter, Obed Labra-Pelaez): task group field cleanup, API push field verification, standup updates, cost roll-up testing, discount functionality ready, field delete impact research documentation.

**Task group field cleanup:** Obed created several fields on the task group object that don't belong there — budget fields and green-highlighted product-related fields. Andrew confirmed these should be deleted entirely from the object since they're product-related, not task-related. Obed proceeding with deletion.

**API push field verification:** Andrew asked Obed to confirm all fields with API pushes are properly documented in the site product cost mapping workbook. Quick review showed most environment/site task group fields (transaction type, elevated conversion, etc.) are already in the sheet. Transaction type is at the opportunity level (per Wendell's morning session); elevated conversion is at site product level. Obed doing a double-check pass.

**Mac's progress:** Completed the acquired investigation with feedback in comments — most requested items can't be done because they're not in the APIs. Working on a field delete impact report (documenting which fields are referenced in which objects). Andrew directed Mac to start working on generate Quire report and generate Quire folder tasks using provided API documentation since endpoints have been shared.

**Andrew's testing plans:** Testing site product cost roll-ups and discount functionality today. Hoping Blake provides an endpoint update tomorrow but not optimistic based on Wendell's comments.

**Wendell collaboration dynamic:** Team reflected on Wendell's working style — he's a hustler but difficult collaborator who doesn't explain well and prefers to do work himself rather than delegate. Mac noted Wendell wants to be a solution architect, which is holding back actual solution creation. Andrew observed that if the client had adopted the team's original data model proposal (tasks as child to sites), it would have saved at least four weeks of effort. However, the client pays reliably, so no financial stress. Andrew will communicate the timeline status to Chris and Travis on Friday.

**Cost roll-ups and discount ready for testing:** Site-level cost roll-ups exist, categorized by type (automated reports, environmental cost, surveys, zoning, valuation) with both cost and price data. No separate site product or site roll-ups needed since site products handle reporting. Discount functionality ready to test — switches between discount amount and percent, calculates final price from total price and discount applied.

**Blockers:** Internal expense work is the primary blocker preventing progress on other items. Mac has done substantial testing from his side; Andrew needs to conduct additional testing to help unblock the backlog.

**Field delete documentation:** Mac will document field delete impact research either as ticket comments or a markdown document — Andrew indicated either format is fine.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-28 - INTERNAL CREtelligent Team Sync.md`)*

---


## Week of Apr 27, 2026

Impromptu Zoom Meeting (Apr 28, w/ Wendell Sommers, Andrew Porter, Obed Labra-Pelaez): data categorization automation, "other services" product strategy, site product component design, opportunity stages review, proposal field migration, task template architecture, EnviroSite layout, product matrix + task group field specs.

**Data categorization automation:** Wendell demonstrated automation logic to categorize data without unnecessary complexity (e.g., distinguishing Phase One ESA in Canada vs. with SBA financing). Uses conditional logic to determine priority when multiple attributes apply. Andrew approved — the template/keyword-driven approach lets the client maintain the system independently without external support.

**"Other services" product split decision:** Critical gap identified: "other services" products arrive from Radius as unstructured data with no specification of type (environmental, survey, or zoning). Rather than requiring manual post-order selection, Wendell proposed Radius create three distinct products — "other service environmental," "other service survey," "other service zoning" — enabling automatic routing. Andrew agreed and committed to communicating the requirement to Travis at Radius.

**Site product component with service type selector:** For "other service" products that arrive without type specification, Mac will implement a site product component with an additional column allowing users to select the service type, which triggers the correct automation for task group creation and site assignment.

**Opportunity stages review:** Team reviewed Salesforce stages (quoting, proposal, active, declined, closed one) against Order Tracker stages. Wendell walked through the current flow: quoting → proposal → active (closed one) → active invoice → complete. Agreed to simplify but defer final decision to the parking lot — revisit during testing.

**Proposal fields migration to Site Product:** Confirmed all proposal-related fields on the Site object should migrate to Site Product to avoid duplication and maintain single source of truth. Mac already removed them from the site page layout. Team will run a dependency analysis (flows, Apex, reports) before deletion. Wendell providing input on which flows/processes reference these fields.

**Task template architecture decision:** Debated single-record multi-field approach vs. individual task records. Wendell strongly preferred sourcing tasks from the product level; Andrew agreed. Task group type set based on site product. Source of truth for which tasks apply to which products: a spreadsheet Wendell maintains, with visibility logic configured in Salesforce based on product key.

**EnviroSite page layout:** Wendell requested all task groups related to a site be visible on the EnviroSite page in related lists (FOIA, site visit, report writing across multiple products visible simultaneously). Andrew proposed creating a component to display all task groups on the site page rather than requiring drill-down into individual records. Both distributors (Aubrey's team) and producers (environmental team) work with the same products from different pages — agreed to surface task groups appropriately without duplicating data.

**Product matrix and task group configuration:** Andrew requested Wendell provide a final product matrix listing all products/product keys with task group field requirements. Wendell confirmed this is on his to-do list — updated spreadsheet with correct product names and field requirements incoming.

**Task group field specifications (Obed walkthrough with Wendell):** Detailed field-by-field validation: enter site name (formula → site owner, confirmed), report type (should be task group type field, delete separate field), transaction type (text from Radius at opportunity level), elevated conversion (yes/no picklist), report due date (from API at product level), report status (text with Radius workflow integration), address (formula → site address, confirmed), discount fields (subscription + elevated conversion — cannot both be populated simultaneously), cost worksheet fields (handled separately, green-highlighted removed from task group), open comments (deferred pending Doc Hub architecture), site visit status (picklist), date fields (standard). Team will meet internally to finalize cost/revenue field handling and discount validation logic.

**Follow-up session scheduled:** Next day 10:30 AM–12:00 PM (90 min) — continuing task group fields + site product grid component.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-28 - Impromptu Zoom Meeting.md`)*

---

Internal CREtelligent Weekly Sync (Apr 27, w/ Andrew Porter, Obed Labra-Pelaez): Mule integration client pushback, LBC matrix positive feedback, expense object blockers, Quire API stories, task assignments.

**Mule integration client resistance:** Andrew needs help responding to Blake's email on data transmission strategy. Mac proposed sending all opportunity, site, and product array data to the client. Client pushing back on the Mule integration route, believing they won't need certain work if Mule is used (a misconception). Andrew clarified Mule would actually require MORE work (regression testing, additional planning). Mapping directly to MongoDB would waste POC work (order service to Salesforce via Mule). Mule remains the sensible path despite client resistance. Mac observed the client appears disorganized.

**LBC matrix positive feedback:** Client was enthusiastic about the matrix presentation at Friday's (Apr 24) LBC meeting. Andrew praised Mac's work on the deliverable.

**Expense object blockers:** Missing fields for the internal expense object. Without verified fields, all related code would need to change. Andrew identified this as a Wendell task (field-level work) that can be completed today since it's in the current sprint. Default values already tracked by Andrew. Team still needs the endpoint for a service API call.

**Quire report stories:** Two new stories from the Quire call: (1) folder creation from Salesforce (fail-safe, since the order service is supposed to handle this but needs a fallback), (2) Quire report generation from Salesforce. Wendell's template logic to be reviewed today or tomorrow. A 4:30-6 PM ET call scheduled for today: Blake providing order service endpoint updates, team reviewing template selection logic and required endpoints. Mac may join the first hour depending on calendar.

**Quire API investigation:** Team confirmed they have the necessary Quire API documentation (cloud-generated from Wendell's shared docs) plus underlying reference materials. Mac will tackle the Quire API investigation next, reading through docs and raising questions before returning to cost roll-ups (since expense object fields aren't available yet).

**Task assignments:** Andrew assigned stories A through I to Obed, with Mac leading after stories enter the sprint. Obed's immediate goal: get doc generation generating today, with field questions answered tomorrow or in a separate session. Field aliases can be used as a workaround in queries if needed. Andrew expects additional stories to emerge from today's meetings.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-27 - Internal CREtelligent Weekly Sync.md`)*

---

Weekly Status and Project Sync (Apr 24, w/ Andrew Porter, Obed Labra-Pelaez, Wendell Sommers, Blake Stracener, Travis Hickey): payload enrichment direction, order processing demo, click quote architecture, opportunity stage simplification, Quote Matrix LWC enhancements.

**Payload enrichment (no MuleSoft for now):** Team confirmed NOT going with MuleSoft for the current payload work due to timeline risks from hybrid integration challenges. Blake will enrich the existing payload with site verification fields and site product arrays (including cost worksheets) by building a separate flow. Expected delivery: next week.

**Manual order processing demo:** Obed demoed the full flow: order hits Salesforce, triggers creation of opportunities, sites, EnviroApp, EnviroSite, EnviroSite task groups, and cost worksheets. For a sample order (3 sites, 2 products), system correctly created 3 EnviroSites and 6 EnviroSite task groups (one per product per site), each with cost worksheets. Key change: cost worksheets now created at EnviroSite task group creation, not when opportunity stage moves to active.

**Click quote flag:** Travis confirmed a click quote flag exists (yes/no/consult) at the individual order level. Wendell pushed for site-product-level granularity (e.g., single bulk order where zoning is click-quoted but survey is not). Team agreed: click quote boolean goes at site product level in the Order Service API Mapping Workbook. Travis adding to payload story.

**Data model clarification:** Andrew confirmed only EnviroSite task GROUP exists in production. The EnviroSite task object in sandbox will be deleted, will NOT make it to production. All logic moving forward based on site products, not checkboxes. Wendell needs 10-15 min follow-up with Andrew/Obed to review his acquired template logic against the correct object.

**Opportunity stage simplification:** Obed presented four stages: quoting, proposal, active, declined. Validation rule requires declined reason when moving to declined. Wendell raised concerns about replacing the existing extensive stage model (active invoice, canceled, on hold, etc.) and potential loss of historic data. Andrew willing to add sub-statuses if needed. Decline reasons from order tracker approved: "Project was canceled," "For vendor took too long," "No client response," "Crisis."

**Quote Matrix LWC enhancements (Mac demo):** Filter by cheapest quotes (configurable top 2-5 per site), expanded modal (95% view width, dynamic height with scroll), "add quotes" button for empty sites, plus sign in site bar for quote creation. Mass apply for price and days-to-compare across selected/visible quotes. Andrew flagged issue: mass apply appears to select ALL filtered quotes rather than just user-selected quotes. Mac committed to investigating.

**Acquired template progress:** Wendell made significant progress on the acquired template object. Contains all templates with logic to find the right template. Needs clarification on site task vs. EnviroSite task fields. Andrew scheduling a 2-hour spike session early next week.

**Next demos:** DocGen ready for demo early next week. Site product stuff with cost rollups ready in 1-2 weeks.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-24 - Stitch CREtelligent Weekly Status and Project Sync.md`)*



MuleSoft API Design Discussion (Apr 23, w/ Andrew Porter, Hesham Masoud) and Internal Team Sync (Apr 23, w/ Andrew Porter, Obed Labra-Pelaez, Michael DeGoll).

**MuleSoft evaluation for Order Service rebuild:** Team evaluated whether rebuilding the Order Service handler in MuleSoft makes sense. Mac expressed skepticism: the integration is straightforward (accept payload, deserialize to custom model class, upsert Salesforce records) with no complex data transformations or multi-system routing. However, Andrew clarified the client has invested significantly in MuleSoft and wants to consolidate their integration platform there. Hesham estimated ~40 hours for the MuleSoft implementation (same pattern as existing POC but different objects; original two-way POC took ~60 hours). Key concern from Mac: error handling visibility on the Salesforce side when MuleSoft handles the integration. MuleSoft returns structured error responses to the caller (Radius/Order Service), but CREtelligent's external system would need its own error handling. Mac suggested potentially creating a Nebula logging framework call on the Salesforce side. Consensus: decision hinges on error handling architecture, updated payload specs from client, and whether consolidating all integrations in MuleSoft (avoiding hybrid) justifies additional timeline risk. Andrew to discuss with client using the sizing and trade-off info from this call.

**Mac staffed on MuleSoft build:** Andrew asked Mac about interest in working alongside Hesham on the MuleSoft build. Mac confirmed some MuleSoft experience (simple flows, Salesforce polling, platform events) and expressed confidence that integration patterns are transferable. Flagged deployments as a potential concern, noted he could reach out to Michael DeGoll for help. Plan: Hesham at ~8 hrs/week (lightweight, already did POC), Mac getting allocation bump, Andrew providing guidance.

**Cost roll-up direction correction:** Critical architecture fix: Mac had roll-ups going from cost worksheet directly to site, but the correct flow is cost worksheet to site product FIRST, then site product to site. Each site product should have a cost associated with it based on the product category. Mac acknowledged "I just did this backwards" and noted it will actually be easier with the corrected direction. Four cost fields on site product, triggers for insert/update/delete all created and tested. Test classes in progress.

**Discount roll-up chain added:** New requirement surfaced from Obed's proposal doc gen work. Discount percent and discounted sales price fields come from the Order Service and need to roll up: site product to site (Mac, via Apex triggers) to opportunity (Obed). Andrew adding this as a child subtask to the site product pricing task, marked as blocked for client review at next standup. These are number fields populated via Apex, not formula fields.

**Proposal doc gen progress:** Obed finishing up, had clarifying questions about fee roll-up (confirmed as roll-up cost formula, not a standard Salesforce roll-up) and discount fields. Andrew asked Obed to document ALL merge fields used in the proposal document with object + field API name. Refinement session targeting Monday for remaining blocked items.

**Profit/margin formulas confirmed:** Profit margin formula already exists on site product (sell price minus cost divided by sell price). But the cost field on site product isn't populated yet by roll-ups. Once the corrected roll-up chain (cost worksheet to site product to site) is in place, the formula will work.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-23 - Cretelligent Mulesoft API Design Discussion.md`, `Meeting Notes/Stitch/Cretelligent/2026-04-23 - INTERNAL CREtelligent Team Sync.md`)*



Andrew/Mac Sync (Apr 22) — quick cost worksheet architecture decision.

**Cost worksheet product reference:** Eliminated the product lookup field on cost worksheet. Instead, using "site product" as the reference field. Mac implementing logic to auto-set the site product when the cost worksheet is created with certain fields populated. All roll-ups flow: cost worksheet → site product → site. Costs aggregated by cost category at the site level (not by individual product). May need an intermediary object for roll-ups in the future, but proceeding with direct site product approach for now.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-22 - Andrew Mac Sync Stitch.md`)*



Weekly Refinement and Planning (Apr 22) — deep dive on Quire report generator integration with Blake, Andrew, Wendell, Jeff, Travis, and Obed.

**Report generator workflow:** When an order/project containing Quire products goes active, the system auto-creates a Quire project folder (recently changed from button-triggered to event-triggered by Travis). Folder structure uses a top-level portfolio order ID format. System selects the appropriate report template via formula, creates the project folder in Quire, and initializes the template document. During creation, milestones and progress percentages are tracked and sent back to Salesforce for operations monitoring. Upon completion, the final report is sent back to Salesforce for client delivery.

**Architecture decisions:** Order Service creates Quire folders automatically when projects go active (reusing existing well-established logic — path of least resistance). Salesforce retains a manual "Create Quire Folder" button as fail-safe. Template selection and report creation logic owned by Salesforce. Quire folder ID consumed and stored at the EnviroSite task group level. A "Generate Quire Report" button launches from the task group.

**Quire data retrieval:** Polling-based (cron job in Order Service, currently hourly) since Quire has no API webhooks. Pulls data when reports reach "ready for review" or "completed" status. Three interim data types identified: report status, editing time by user, editing time by date — team investigating API availability.

**Senior reviewer notifications:** When a report hits "ready for review," a task is created for the senior reviewer (EPM2 task set to pending, emails to project coordinator, report preparer, PM, and senior reviewer). Salesforce will create a similar task on EnviroSite.

**Product mapping:** ~67 products reviewed. Products with "human in the loop" require Quire (environmental site assessments, etc.). Zoning, Boundary Survey, Commercial Appraisal do not use Quire. Quire UI elements placed at the EnviroSite task level in Salesforce.

**Integration approach TBD:** Team spending time tomorrow reviewing whether to rebuild the Order Service custom integration entirely in Salesforce Apex vs. using MuleSoft for data conversion. Net-new build either way.

**Terminology/mapping cleanup:** Portfolio Order ID (POID) is the 9-10 char identifier with dashes from bulk load data, maps to opportunities in Salesforce. Quire object should NOT map directly to opportunities. Mapping document being created to clarify naming inconsistencies.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-22 - Stitch CREtelligent Weekly Refinement and Planning.md`)*


> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met seven times (Apr 13 — Internal Stitch Sync with Obed; Apr 14 — Stitch CREtelligent Stand Up; Apr 15 — Stitch CREtelligent Dev Team Sync; Apr 16 — AP/MN Sync; Apr 16 — Internal Team Sync with Andrew + Obed; Apr 17 — Impromptu Zoom with Andrew/Travis/Obed; Apr 17 — Weekly Status & Project Sync).

Apr 17 Weekly Status & Project Sync (w/ Andrew, Obed, Travis, Wendell): TDX takeaways, Cost Worksheet rename + data model lock-in, Order Service → Salesforce payload flow, default value strategy for estimates/actuals, and planning for initial product load. TDX headlines: MCP in Agentforce now supports both hosted and non-hosted (Mac flagged this as the big unlock), developer Agentforce/Data Cloud sandbox got meaningful upgrades. Andrew wants a dedicated 1hr debrief with Mac next week to walk through MCP / Data 360 / MuleSoft / Agentforce roadmap applicability vs. noise. Cost Worksheet rename landed ("Environmental Cost Worksheet" → "Cost Worksheet"); adding lookup to Site (via Valuation Site when present, otherwise direct Site → Enviro Site → Task Group). Cost Worksheet holds all 28 expense fields with budget vs. actual pairs — left side (estimates) locks at proposal acceptance, right side (actuals) stays editable through fulfillment. Default value strategy: estimates = actuals on creation (FOIA $33, Historical $185, Choir = estimate); "everything else" fallback puts 50% of sell price into PA cost only, actual = budget at load. Actuals roll up from PA cost into Cost Worksheet only (not from Internal Expense) — single source to avoid double-counting. Internal Expense still captures travel/mileage/hotel/rental/plane with type + amount + approval tag, but doesn't roll in. Initial product load is static/manual from Travis's product key spreadsheet (~100+ products); monthly/weekly cleanup job catches unrecognized keys. No product endpoint in Order Service yet — Mac handles Name/Product Code/Product Family/SKU/List Price (on payload update). Salesforce buckets unrecognized product keys into an "Other Product" catch. Blake targeting end of next week for test-env payload so Mac can call from dev sandbox and finalize the Apex class. Choir template IDs by product type (Wendell) is the remaining thread before next week's soup-to-nuts walkthrough.

Apr 17 Impromptu Zoom (w/ Andrew, Travis, Obed): quick alignment on loading product data into Salesforce for the CPI/sales build. Travis flagged data quality issues in the current product sheet — tier/day mismatches on drive-by commercial sales, inconsistent values across the sheet. His attempt to use Claude to merge ~70 additional products into the master sheet failed because the source itself is wrong. Team agreed to disregard the current sheet and wait for a corrected version from Blake. Product table import limited to: product name, product code, product family, SKU, list price — no product config (discounting, pricing rules). List price lands via next week's payload update. Metadata columns in the source spreadsheet are for internal mapping only, not imported. Two metadata changes requested: rename "enviro cost worksheet" → "cost worksheet" (done/aligned with later Weekly Sync), add lookup to Site. Mac confirmed LWC dev in progress. Mac dropped early for another call; follow-up metadata-mapping sync to happen later.


Apr 16 Internal Team Sync (w/ Andrew + Obed): alignment on flow-to-Apex migration, cost worksheet field cleanup, and product-to-cost mapping now that design has shifted again. Theme of the call was design reversals — Obed and Mac both flagged frustration that requirements keep changing mid-development; team affirmed the pattern and agreed Obed's subtask documentation prevents total rework loss. Mac exported the Lucid current-state diagram on the call; Andrew imported to Miro (connectors auto-converted cleanly). Field-ownership split: Obed owns EnviroCost Worksheet field updates (renames, deletes, new Municipality field) against the updated mapping workbook; Mac owns Site Product field mapping. Product2 keeps catalog fields (product code, product name, short code) — Site Product holds order-specific fields (order number, discount, list price, total price) accessed via lookup. Product-to-cost routing locked in: Automated Report products → third-party cost only on the Automated Report object (no EnviroCost Worksheet); Environmental Site products (Survey, Zoning, etc.) → EnviroCost Worksheet with paired estimate + actual fields. Cost rollup chain reconfirmed: EnviroCost Worksheet → Task Group → EnviroSite → Opportunity. Conga doc gen stays priority #1 (Obed); DocHub is the next team focus — Andrew to schedule a dedicated working session. VS Code auth to CREtelligent prod is persistent; Gear Set compare/deploy as alternative if needed. Outstanding blocker: sample payloads for both Automated Report products and regular products, expected to flow through the opportunity/site payload.

Apr 16 AP/MN Sync: working session between Mac and Andrew to unblock the CREtelligent build. Mac walked Andrew through his flow diagram of current state (create ops/sites Apex → JSON processing → opportunity/site creation + site triggers for environmental task groups) and the pending redesign around the new Site Product junction object that replaces the checkbox-based product tracking on Site. The primary blocker across most of Mac's open stories is the updated `Create Opportunity and Sites` payload from CREtelligent — it needs a nested `products` array per site plus four new site verification fields before the Apex class rewrite can proceed. Secondary ask: a sample `Automated Reports` payload. Andrew confirmed CREtelligent expected to deliver updated payloads by tomorrow. Architecture direction: modular service classes with separate handlers for site details and product details, breaking nested arrays into focused processors rather than one monolithic class. Automated reports get reparented as a child of Site with an Apex-driven cost rollup (before insert/update/delete on Site Product) — not DLRS. Pricing and discounting logic stay entirely in CREtelligent; Salesforce just stamps `list price`, `discount amount`, or `discount percent` from the payload. Mac cleared to start Site Product object + field model + LWC scaffolding today while waiting on the payload. Site Price LWC placement: editable component on the Site record; nested related list on the Opportunity record showing all sites and their products. "Click quote" is out of scope for now. Mac skipping the client demo today (calendar conflict) and syncing with Andrew at the 1:30 internal instead.

Short QA-focused sync. Confirmed that the "add to Connect" automation needs contact type filtering before the API call fires — only Survey, Environmental, and Zoning contact types should trigger the Connect API callout. Client and prospect types should be excluded. Mac confirming the logical flow handles this correctly.

Apr 15 Dev Team Sync: product integration architecture and cost worksheet cleanup. Data model shifting from opportunity-level checkboxes to a product-centric model via a Site Product object that joins the standard product table with sites. New rule: one enviro site per location (not per product) — PCA/ESA combos on the same property create one site, one enviro site, two enviro tasks, two site products. Integration architecture moving to MuleSoft instead of a single Apex class for scalability. Site-level product arrays replace project-level arrays; each site contains an order product array with product-specific fields (turnaround, pricing, codes). CSM/CE info stays at opportunity level and propagates down. Cost worksheet categories renamed/cleaned: Regulatory → FOIA, Site assessment → Professional associate, Geo → Geophysical (optional); Data and Internal review categories removed (keep main Review); Travel consolidates hotel/flight/rental/fuel; Other PA costs → Other cost; Municipality retained for potential FOIA rollups. Six proposed bottom additions removed — handled via dropdowns. Product matrix gap flagged: current active sheet has 67 products vs 146 total product keys (construction risk management and others missing) — full spreadsheet to be distributed. Mac to start a research story on product payload landmines within a day. Site verification field mapping needs JSON annotations (verification status, verified land use, verified square footage, site ID).

Apr 14 Stand Up covered environmental site automation and cost worksheet design. Decision to convert the existing enviro site → task group Flow logic to Apex — team prefers Apex for better control and no further Flow updates are expected. Site creation, enviro operations, and task groups will all run in a single process. Environmental cost worksheet creation is the missing piece in the current flow; it will be triggered record-triggered on task group insert (1:1), with worksheet type determined by task group type. One active worksheet per environment (users can evaluate multiple options but only one active at a time — primarily relevant during phase-one evaluations). ESA flow to be removed as part of cleanup. Site products tracking being added: one product-per-site record, payload comes from the service with all required data. DocHub integration design to be reviewed in Thursday internal meeting.

**Decisions:**
- Contact types that trigger Connect API: Survey, Environmental, Zoning only
- Convert enviro site → task group Flow logic to Apex (no further Flow investment)
- Single-process model: site creation + enviro operations + task groups handled together
- Environmental cost worksheet: record-triggered on task group insert (1:1), type driven by task group type
- One active environmental cost worksheet per environment
- ESA flow to be removed during cleanup
- Site products: one product-per-site record, payload sourced from the service
- Data model shifts from opportunity-level checkboxes to a product-centric model (Site Product object joining products with sites)
- One enviro site per location (not per product); PCA/ESA combos on same property = one enviro site, two tasks, two site products
- Use MuleSoft for the Salesforce/Connect API integration (not a single Apex class) for scalability
- Site-level product arrays replace project-level; each site holds an order product array with product-specific turnaround, pricing, and codes
- CSM/CE info stays at opportunity level and propagates down
- Cost worksheet category renames: Regulatory → FOIA, Site assessment → Professional associate, Geo → Geophysical (optional)
- Remove Data and Internal review categories (keep main Review); consolidate Travel (hotel/flight/rental/fuel); Other PA costs → Other cost; keep Municipality for FOIA rollups
- Drop the six proposed bottom additions on the cost worksheet — handle via dropdown lists
- Site Product junction object replaces product checkboxes on Site — scalable model for product-specific data
- All pricing and discounting logic stays in CREtelligent; Salesforce stamps `list price`, `discount amount`, or `discount percent` from payload (no calc logic in Apex)
- Automated Report reparented as a child of Site with Apex-driven cost rollup (trigger before insert/update/delete on Site Product) — not DLRS
- Architecture: modular service classes (separate handlers for site details, product details, etc.) — break nested arrays into focused processors rather than one monolithic Apex class
- Site Product permissions: view and edit for everyone
- Product catalog: one-time initial load into Salesforce, then incremental/scheduled batch syncs (monthly cadence acceptable)
- Site Price LWC placement: editable component on Site record for adding/editing prices; nested related list on Opportunity showing all sites and their products
- "Click quote" feature out of scope for now
- Hold off on Apex build until updated payload lands — avoid placeholder work that requires rework
- Product-to-cost routing: Automated Report products → third-party cost on the Automated Report object only (no EnviroCost Worksheet); Environmental Site products (Survey, Zoning, etc.) → EnviroCost Worksheet with estimate + actual field pairs
- Product2 holds master catalog fields (product code, product name, short code); Site Product holds order-specific fields (order number, discount, list price, total price)
- Product number should NOT be unique on Product2 — uniqueness lives at the Site Product level
- Field-work split: Obed owns EnviroCost Worksheet field updates against the updated mapping workbook; Mac owns Site Product field mapping
- Conga doc gen is priority #1; DocHub is the next team focus after Conga clears
- Rename "Environmental Cost Worksheet" → "Cost Worksheet"; add lookup to Site (via Valuation Site when present, otherwise direct Site → Enviro Site → Task Group)
- Cost Worksheet holds all 28 expense fields with budget vs. actual pairs; left side (estimates) locks at proposal acceptance, right side (actuals) stays editable
- Default values: estimates = actuals at creation (FOIA $33, Historical $185, Choir = estimate); "everything else" fallback = 50% sell price → PA cost only
- Actuals roll-up: PA cost rolls into Cost Worksheet only; Internal Expense object does NOT roll in (single source — avoid double-counting)
- Initial product load is static/manual from Travis's product key spreadsheet (~100+ products); no Order Service product endpoint yet
- Monthly/weekly cleanup job catches unrecognized product keys; Salesforce buckets them into an "Other Product" catch
- Product table import limited to: product name, product code, product family, SKU, list price — no product config (discounting, pricing rules)
- Disregard current product sheet (tier/day mismatches, inconsistent values); wait for corrected version from Blake
- Blake builds test-environment payload targeting end of next week (week of Apr 20) so Mac can call from dev sandbox

**Open questions:**
- QA validation of the contact type filter — confirm it works as expected in testing
- Obed building the environmental cost worksheet flow — implementation timing
- DocHub integration design review — Thursday internal meeting
- Valuation functionality needs refinement — revisit in upcoming discussions
- Consider: GitHub repo for logging component development with Claude reports
- Mac to start research story on product payload landmines (within 1 day) before full integration
- Full product key spreadsheet (146 keys) to be distributed — current active sheet only covers 67
- Site verification field names list with JSON annotations to be shared (verification status, verified land use, verified square footage, site ID)
- Cost worksheet category updates implementation — Story #6079
- Related product details integration — Story #6078
- MuleSoft evaluation for integration architecture
- Andrew to push CREtelligent for updated payloads (Create Opportunity and Sites with nested products array + 4 site verification fields, Create Proposal/Order, Automated Report, Site Verification, Product Load endpoint); expected tomorrow
- Andrew to distill Apr 16 decisions into ClickUp stories; add Site Verification field names to Order Service API mapping doc
- Mac building Site Product object + fields + lookups + LWC scaffolding while awaiting payload; Site Verification fields added to tab 1, EnviroCost fields added
- Integration mapping source of truth: `PB_cretelligent` Google Drive folder → `April 15 Order Service` sheet (tab 1 = site verification mapping; product tab = product short code, coordinate, description, discount)
- Andrew to schedule dedicated DocHub working session once Conga priority clears
- EnviroCost Worksheet field list (with new Municipality field + renames/deletes per updated workbook) pending Obed's cleanup pass
- Sample payloads for Automated Report products and regular products still outstanding from CREtelligent
- Andrew to drop R-drive link to product source file for Mac
- Andrew + Mac pre-load sync on metadata-to-product-table mapping
- Travis to get corrected product sheet from Blake
- Travis to produce per-product default values (budget + actual) for every service line, including "everything else" 50% fallback
- Travis/Blake to push test-env payload end of next week with site ID, product fields, client fields
- Andrew to schedule 1hr TDX debrief with Mac next week — MCP, Data 360, MuleSoft, Agentforce roadmap alignment
- Wendell to finish Choir template IDs by product type so doc generation knows what template to use
- Mac to rename enviro cost worksheet → cost worksheet and add lookup to Site
- Mac to continue Cost Worksheet object config + LWCs; sync with Obed before product load on which metadata fields land on Product2
- Obed/Mac to plan next-week "soup to nuts" walkthrough: current Salesforce state through quoting → proposal

---

## Week of Apr 7–13, 2026

Met three times (Apr 9 x2 — Validation Workaround Sync + Sprint Review + Tech Team Huddle, Apr 10 — Weekly Status/Demo, Apr 13 — Internal Sync).

Demo day on Apr 10 went well. Three stories shown: Quote Matrix LWC, Add Vendor to Connect modal (#81220), Choir template ID formula field.

**Quote Matrix LWC** got strong approval from Wendell — approved as shippable for current sprint. Enhancement requests scoped separately: increase modal height, filter by selected contractor per site, cheapest quote filter, sorting options, margin/profit at site level (blocked until cost modeling finalized).

**Add Vendor modal** needs two adjustments before done: (1) don't pre-populate company field from opportunity — let users search/create instead, (2) move launch point from Enviro Site down to PA object level (under Enviro Task). Also need PA skill/contact type multi-select dropdown — Travis to clarify how Connect defines service types/zones. API integration tested well but waiting on payload update to build return URL (need ID back from Connect).

**DocHub integration** reviewed at high level — architecture is two Experience Cloud sites with LWC-driven collaboration. Andrew flagged potential to migrate from custom document object to standard ContentDocument.

**Decisions:**
- Quote Matrix LWC approved for current sprint as-is; enhancements scoped separately
- Add Vendor modal: no pre-populate on company, launch from PA object not Enviro Site
- Contact types that trigger Connect API: Survey, Environmental, Zoning only
- ContentDocument migration under review (Andrew and Mac)

**Open questions:**
- Travis: Choir template ID needed for formula field (tracked in ClickUp)
- Travis: How does Connect define service types and zones for PA skill/contact type dropdown?
- Andrew/Mac: ContentDocument vs. custom document object for DocHub?

---

## Week of Apr 2–4, 2026

Met once (Apr 2 — Internal Team Sync).

QBR reviewed — no high-risk items. Schwab integration running clean. Salesforce cert expiring June 15 — checked apex classes, named credentials, connected apps; nothing references it. Closest match was Webex connected app. Decision: leave alone and monitor.

Account onboarding form ~90% built (combines contract, profile, Schwab application). Altruist reached out to Stuart — Mac providing reports. Hierarchy/junction box proposal: other party expects response within a month.

**Decisions:**
- Cert expiry: leave alone, monitor for breakage (nothing references it)

**Open questions:**
- Altruist roadmap placement response (within ~1 month)
- Jay (other advisor) on hold pending family situation

---

## Week of Apr 20–26, 2026

Met once (Apr 20 — Internal CREtelligent Weekly Sync w/ Andrew Porter + Obed Labra-Pelaez).

**Vendor payload** still blocked — Mac confirmed the mass code LWC is complete except for the payload piece. Once he gets the field storage location and URL configuration, it's a quick fix. Different URLs needed for testing vs. production. Andrew taking this to Travis.

**LWC progress:** Mac has been building LWCs on the Site Product object and Pricing component. Styling work still in progress. Agreed to demo later that day. Mac also got approval to remove the sidebar from the Site record page layout.

**Flow-to-Apex migration status:** The `cite after insert after update` flow (Obed's) is fully migrated to Apex. The `cite after flow` was partially migrated — Mac left the zoning logic intact to avoid duplicate records. The consult estimation workflow (creating cost worksheets) is already handled by the site trigger logic that was migrated from Obed's flow. Estimates get created on site creation (trigger-based), so testing can be done by creating a site directly without needing the payload.

**Cost roll-ups architecture (Sprint 3):** Andrew walked through the four cost categories and their sources:
1. **Survey costs** from selected PA quotes (where selected PA = true)
2. **Automated report costs** from the Automated Report object
3. **Valuation costs** from Cost Worksheets where cost product category = valuation
4. **Zoning costs** from Cost Worksheets where cost product category = zoning

All four roll up to the Site level, then propagate to the correct Site Product. A new "cost product category" field is needed on the Cost Worksheet (distinct from the existing type field). Roll-ups will be implemented in Apex (not DLRS). Once costs are summed at site level, they get stamped onto the appropriate site product, followed by an order service API call sending costs back. Obed confirmed the cost worksheet lookup to site is in place.

**Conga implementation:** Obed feeling good overall but hasn't hit tables yet (expecting some difficulty). New payload fields being tracked in the mapping workbook. Proposal delivery remains fully blocked pending endpoint confirmation — Andrew removed the due date.

**Other items:** Discount-stamping story assigned to Mac for review. Environmental automated reports blocked on endpoint but will be a "nothing burger" since everything moves to site products now. An opportunity management Grid Buddy replacement (LWC + API call) is queued but may not be needed yet.

**Decisions:**
- Cost roll-ups in Apex (not DLRS) — four categories summing to site level then propagating to site products
- New "cost product category" field needed on Cost Worksheet (not the same as the existing type field)
- Proposal delivery: removed due date, fully blocked until endpoint confirmed

**Open questions:**
- Travis to provide vendor payload field storage location + URL configuration (test vs. prod)
- Mac and Obed to review Sprint 3 cost roll-up stories and provide questions
- Wendell owes filled-out default estimate/actual amounts mapping
- Environmental automated report endpoint still outstanding
- Discount-stamping story — Mac to review

---


Apr 20 Impromptu Call / Dev Standup (w/ Federico/Ulrich, Rodri, Isaac, Vincent, Michael, Brian, Connor, Odie, Chris, Trevor): combined Fathom recording covering CREtelligent dev standup and HMS internal sync on the same call.

**Dev standup highlights:** Mac deployed the lead conversion story (confirmed working by Speaker 1, though client info component needs a visual check). Federico/Ulrich completed tickets 13.43 and 13.44, deploying components to production, then moving to a new phone account ticket. Rodri completed ticket 1-3-45 and picked up 1.364 (data migration — marking legacy closer reason values as inactive; only five values remain active, rest are legacy). Ticket 7-98 (pad settings not linked properly) blocked and escalated to David Torsak for clarification — David previously said he didn't think it was an issue, and the team decided not to proceed without clear requirements. Training sessions scheduled this week (deployment-free CUAT windows: 11:30 AM–2:00 PM and 1:00 PM).

**Website / careers sidebar (Mac + Speaker 1 1:1):** Discussed on the same call but pertains to [[high-meadow-website]] — careers feature (type__c = "Candidate" on Lead), Resend.com setup (API keys generated), Vercel upgraded to Pro ($20/month). See HMS Website journal for details.

**HMS internal standup (second half of recording):** June out (wedding anniversary), Brady out for the week. Sprint 4 curation and UAT review ongoing. Growth engine design (June + Connor conversations) being consolidated — Odie and Chris to present to team.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-20 - Impromptu Call [Fathom].md`)*



Co-Sprint Coordination (Apr 21, w/ Andrew Porter, Chris Harrell, Travis Hickey, Blake Stracener, Jeff Adams) — establishing cross-team working norms for the upcoming two-week co-sprint starting Thursday (99% migration-related work).

**Co-sprint purpose:** Travis framed it around critical integration points that "could completely fall apart if we're not talking on the regular." Sprint includes additional payload fields, cost worksheet stuff, and "opening the floodgates" (sending all products to Salesforce).

**Payload restructuring:** Current payload is product-specific (built for a subset of products with specific fields per product). Needs to be rewritten to a more generic/product-agnostic structure. Andrew clarified expectations: order payload → sites → products array per site with product-specific fields (turnaround, pricing, codes). Tasks and party data placement TBD. Blake confirmed understanding of his sprint scope: adding site verification fields to site/opportunity objects and creating the new site product object mapping to Stitch's corresponding object.

**Communication cadence:** Tue/Wed/Thu 9:00–9:15 AM ET dailies (Blake on East Coast, everyone else Pacific). Andrew sending calendar invites. Teams channel preferred over Slack (Blake's Mac doesn't surface Slack notifications — Travis checking with IT/Josh on best option). Stitch team invited (optional) to CREtelligent's Monday/Wednesday 90-min refinement sessions and Friday 30-min status meetings.

**Sprint logistics:** Two-week initial co-sprint; reassess after. ClickUp (CREtelligent) and Jira (Stitch) story mapping for translatable tracking. Andrew pushing hard to knock out Quire tomorrow (working session with Wendell + Kurt). In-person co-sprint meeting date TBD (13th vs 14th — Chris double-checking).

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-21 - Stitch CREtelligent - Co-Sprint Coordination.md`)*



Internal Team Sync (Apr 21, w/ Andrew Porter + Obed Labra-Pelaez): status check on site product migration, LWC demos, and blocked items.

**Site product migration:** Mac working through the Apex classes and flows that reference proposal fields on the Site object. Hesitant to modify without expert validation — had Claude take a first pass at field definitions but wants Andrew and Wendell to review before proceeding. Andrew scheduling a dedicated 30-min session with Wendell to review which proposal-related fields move from Site to Site Product. Separate process needed for task-level fields, which move to a new "task group" object (not Site Product).

**LWC demos:** Mac showed the site products table component — fully searchable by price, name, discounts. Same component reused at the opportunity level with client collapse buttons (filter by site, ESA, or discount level). Displays high-level cost and discount totals. Andrew requested two edits: (1) sell price and client days fields must be editable, (2) column ordering must match the reference sheet he provided via Slack.

**Progress snapshot:** Object-level config complete. Site pricing and opportunity LWCs in solid state. EnviroSite task to site product lookup implemented (may need rollout adjustment). Migration scope is ~10 fields with minimal automation (create opportunity class, quote matrix, a few flows) — team in a good position.

**Blocked items:**
- EnviroSite to site product lookup — blocked pending Wendell discussion
- Auto report — blocked on opportunity/site payload from CREtelligent dev team, but confirmed auto report will be built against the site object. Auto-report object and all related fields need to be pushed from production to sandbox.

**Story consolidation:** Andrew merged the blocked "Site Product Cost" subtask into story 83417 (cost roll-ups and pricing updates). Subscription discount and per-line-item discount work grouped together in the same story.

*(Source: `Meeting Notes/Stitch/Cretelligent/2026-04-21 - INTERNAL CREtelligent Team Sync.md`)*


---
status: active
owner: Mac
priority: p1
last_meeting: 2026-04-17
open_actions: 23
---

# CREtelligent — Project Journal

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

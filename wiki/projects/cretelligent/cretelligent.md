# CREtelligent — Project Context

> Commercial real estate/environmental services. Connect API integrations, cost worksheets, site verification, vendor management, Quote Matrix LWC.

## Client
- **Company:** CREtelligent
- **Partner:** Stitch (Andrew Porter, Obed Labra-Pelaez)
- **Client contacts:** Michael Degoll (technical lead), Wendell, Travis, Chris, Jack
- **Industry:** Commercial real estate / environmental remediation

## What We're Building
- **Connect API Integration** — vendor onboarding (addVendor endpoint), site verification, contact-to-vendor automation
- **EnviroCostWorksheet** — per-product cost breakdown (estimate + actuals), child of EnviroSiteTask, ~15 cost categories
- **SiteProduct Joiner** — 1 record per ordered product per site; carries sell price, cost, production days, client days, discount, margin
- **Quote Matrix LWC** — mass select/update for surveyor quotes on opportunities (Grid Buddy replacement)
- **DocHub Integration** — Experience Cloud sites with LWC-driven document collaboration (comments, upload/download)
- **Choir Template ID** — formula field driving which Choir report template is used based on project criteria

## Data Model
- **EnviroCostWorksheet:** child of EnviroSiteTask; dual-column (estimate/actual); consult approval checkbox blocks proposal creation
- **SiteProduct:** junction object; sell price, cost, production days, client days, discount, margin; avoids field explosion on parent records
- **Identifiers:** `product_key` (enum from product type) and `shortcode` as canonical IDs across systems. Four unique fields exist on CREtelligent side: product code, product name, product short code, product key — product key confirmed as the canonical mapping target (pending final Travis confirmation).
- **Site Product payload additions (2026-05-06):** `product_subscription_discount_percent` and `product_subscription_discount_amount` being added by Blake. Discount percent functional; discount amount may not have values yet.
- **Long-term:** deferred migration to standard SF Product/OpportunityLineItem/Asset model

## Tech Stack
- **Salesforce:** Sales Cloud, Experience Cloud, LWC, Apex
- **External:** Connect API (vendor/order management), Order Service API, DocHub
- **Integrations:** Choir (report templating)

## Budget vs Actuals Flow
Connect API → Salesforce (EnviroCostWorksheet) → Order Service → Vendor Payment

## Validation Approach
Three-step fallback for required picklist/complex logic:
1. Default value (if sufficient)
2. Non-required field + before-save trigger (moderate complexity)
3. LWC with client-side enforcement (complex or user-facing)

## Contact Create Automation
"Add to Connect" flow fires on contact create — filters by contact type before API call. Valid types: Survey, Environmental, Zoning. Client and prospect types do NOT trigger.

## Related Pages
- [[stitch]] — partner
- [[connect-api]] — external vendor/order API
- [[validation-rule-workaround]] — pattern for required picklist constraints
- [[json-deserialize-refactor]] — pattern for Connect API payload parsing
- [[site-product-joiner]] — junction object pricing pattern
- [[cost-rollup-hierarchy]] — multi-category cost aggregation pattern (survey, automated report, valuation, zoning)


## Quire Integration Architecture (added 2026-04-22)

Report generator integration for environmental assessments and "human in the loop" products (~67 products reviewed, subset requires Quire).

**Data flow:** Order/project goes active → Order Service auto-creates Quire project folder (event-triggered, not button) → folder ID stored at EnviroSite task group level in Salesforce → user selects template via dropdown → "Generate Quire Report" button creates report from template → Quire tracks progress/milestones → polling (hourly cron in Order Service, no webhooks) pulls status back to Salesforce → "ready for review" triggers senior reviewer task → completed report sent to Salesforce for client delivery.

**Ownership split:** Order Service owns folder creation (reusing existing logic). Salesforce owns template selection, report creation, and manual fail-safe button. Integration rebuild TBD: evaluating Salesforce Apex vs MuleSoft approach.

**Key identifiers:** Portfolio Order ID (POID) = 9-10 char identifier with dashes from bulk load data, maps to opportunities. Quire object is a child of the order object, no direct mapping to Salesforce opportunities.

## Cost Worksheet Architecture (added 2026-04-22)

Cost worksheet references site product directly (no product lookup field). Auto-set logic populates site product when cost worksheet is created with certain fields. Roll-up chain: cost worksheet → site product → site. Costs aggregated by cost category at site level (not by individual product). May need intermediary object for roll-ups in future.


## Data Model Clarifications (added 2026-04-24)

**EnviroSite task vs. task group:** Only the EnviroSite task GROUP level exists in production. The EnviroSite task object in the sandbox will be deleted and will NOT make it to production. All template logic and field references should target task group, not task.

**Cost worksheet creation timing:** Cost worksheets are now created when EnviroSite task groups are created (not when opportunity stage moves to active). This ensures cost data is available immediately for quoting.

**Click quote:** Boolean field at the site product level (not order level) in the Order Service API Mapping Workbook. Allows per-product-per-site click quote decisions within a single bulk order.

**Opportunity stages (simplified):** Four stages: quoting, proposal, active, declined. Validation rule requires declined reason. Decline reasons: "Project was canceled," "For vendor took too long," "No client response," "Crisis." Sub-statuses can be added if historic data alignment requires it.

**Payload approach:** Current payload being enriched directly (NOT MuleSoft) with site verification fields + site product arrays + cost worksheets. Blake building separate flow, delivery targeting end of Apr 2026.


## Authentication & Integration Standards (added 2026-05-05)

**Auth standard:** All new Salesforce-to-OT integrations use **Named Credentials** (replacing Custom Labels). A Named Credential may already exist from a prior story.

**Document endpoint (OT → SF):** Single `POST` endpoint to retrieve documents. POST method required because client secret must be in request body. Parameters: `project_id` (required), `id` (site ID, optional), `doc_type` (optional), `visible` (optional).

**Document sync:** Current logic deletes all documents and reinserts on every sync (workaround for SF content document version duplication). Must be rewritten to proper upsert before DocHub allows direct uploads from SF or DocHub to S3 — otherwise user-uploaded docs would be destroyed.

**DocHub folder creation:** Creating new folders and uploading documents to them requires a separate design spike before implementation (complex enough to not inline with existing stories).


## Field Mapping Updates (added 2026-05-12)

**Field name corrections:** `total_price` → `net_client_price` (add underscores: `net_client_price__c`). `click_quote` → `is_click_quote` (boolean/picklist, add "is" prefix). These corrections align payload field names with Salesforce custom field naming conventions.

**Transaction type storage:** Stored at proposal/order level, not project level. Multiple transaction types possible across sites within a single order (refinance, new loan, plus 3-4 others).

**Report due date / report status:** May need to move from site product to task group level. Report status likely associated with report due date field.

**Unknown fields (pending Wendell):** `elevated_conversion` and `fault_reason` — mapping unknown, may be task group related rather than site product. Deferred to task group implementation phase.


## Document Endpoint Architecture (updated 2026-05-12)

**File transfer method:** Documents sent as bytes, recreated on receiving end. No encryption needed (publicly accessible documents). Response includes S3 link via Salesforce document object.

**Project ID as external ID:** `project_id` serves as unique external ID for upserts. Maps to opportunity at site level — multiple project IDs per order (one per site). Enables site-specific document retrieval.

**Document object fields:** Document types enum (proposal PDF, completed report, etc.) — enum values to be shared by OT. Visibility boolean field (true/false). User email for auditing (defaults to `salesforce@cretelligent.com`).

**Site verification links:** URL format: `projects/[project_ID]` for direct site page access. Staging vs production environment URL differences still need discussion.


## Proposal Template & Acceptance (added 2026-05-27)

**Conga template:** Replicates Radius proposal design — cover page, proposal details, site information with maps, dynamic content based on site products. Maps pull from document records (queries most recent doc with correct type field). Product ordering alphabetical as placeholder. Scopes of work and special terms stored as HTML in long text area fields at product level. Automatic deduplication when multiple products share same scope.

**Acceptance workflow:** No e-signature currently implemented. Manual process (download, sign, upload). Enhancement needed: datetime field for "ready to kick off" status. Order ID indicates acceptance vs Proposal ID for pending. DocuSign/PandaDoc previously evaluated, deferred.

## Turnkey Calculator Logic (added 2026-05-27)

Based on `verified_land_use` field from site verification:
- **ESA/TSA:** Site visit only when shopping mall AND <200 acres AND <100k sq ft building. Otherwise turnkey.
- **PCA:** Always turnkey.
- **All other products:** Default turnkey.
- `staffing_strategy` field drives designation: local / milk run / site visit only / turnkey.
- SV-only scenarios: PA costs split between site visit and report writing.

## Click Quote Products (confirmed 2026-05-27)

Five supported products: Survey, ESA, ESA with Enhanced File Review, PCA, TSA. Everything else requires manual pricing workflow. Zoning reports have list prices (no click quote needed).

## Vendor Management Integration (added 2026-05-27)

Connect API vendor lists per site location require lat/long (from Regrid GeoJSON format). Rainier building order service API endpoints. Teams notification needed for local office assignments (researching Teams API connector vs email-to-channel). 15-minute delay acceptable.


## Project Files
- [[cretelligent/journal|Journal]]
- [[cretelligent/overview|Overview]]

## Vendor Matching & Skills Framework (added 2026-06-03)

**Proposed (pending skills analysis):** vendor-selection logic moves to Salesforce — query own contacts against criteria instead of calling the Order Service find-vendor endpoint; invite selected vendors directly via the Connect invitation API (Story 6172 would drop the Order Service dependency).

**Qualification model:** two levels per service type — site visit only vs full service. Phase One ESA framework first; primary products ESA (majority volume), PCA, TSA; logic applies product-by-product. Match gates: (1) product qualification, (2) within 200 miles of site (plus entire-state / entire-nation opt-ins). Known gaps: missing vendor addresses, state licensing layers (radon), Connect's opt-out zone model and linked mutually-exclusive specialties. Bidding stories (epics 4–5) on hold pending Wendell's logic documentation. See [[patterns/vendor-skill-geo-matching]].

## PM Field Restructuring & Team (added 2026-06-08)

**PM fields → freeform text:** The Opportunity PM picklist is being converted to freeform text — the picklist broke sync whenever a new PM joined. Affected fields: PM ID (email), PM first/full/last name (parsed), combined first/last, and the environment-opportunity project-manager field. Caveat: dependent formula fields stop firing post-conversion (incl. the Site object's PM-lookup formula). See [[patterns/picklist-to-text-volatile-values]].

**Payload standardization:** PM email added to the payload to match the CSM/CE contract (name + email), replacing PM's initials + full-name format. Enables clean Salesforce mapping; PM initials likely display-only. Mac owns the Salesforce-side field conversion and remapping once the payload is updated.

**Choir endpoint:** POID reference removed in favor of Opportunity ID (= bulk-load ID) for a simpler reference structure; docs to follow.

**Team:** Blake out temporarily (another dev covering). Rainier — lead developer, primary technical contact. June completed the invoicing-endpoint PR.

## Meeting Note Sources
- [[Meeting Notes/Stitch/Cretelligent/2026-06-08 - Salesforce Field Changes|2026-06-08 Salesforce Field Changes]]
- [[Meeting Notes/Stitch/Cretelligent/2026-06-03 - Stitch CREtelligent - Weekly Refinement & Planning|2026-06-03 Weekly Refinement & Planning]]
- [[Meeting Notes/Stitch/Cretelligent/2026-06-03 - Shaun Mac Weekly Sync|2026-06-03 Shaun Mac Weekly Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-28 - Stitch CREtelligent Addl Refinement|2026-05-28 Addl Refinement]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-28 - Stitch CREtelligent - Daily Dev Standup|2026-05-28 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-27 - Stitch CREtelligent - Weekly Refinement and Planning|2026-05-27 Weekly Refinement]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-27 - Stitch CREtelligent - Daily Dev Standup|2026-05-27 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-27 - Mac Obed|2026-05-27 Mac Obed]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-27 - Environmental Quote Management is perfect No questions allowed|2026-05-27 Environmental Quote Mgmt]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-26 - Stitch CREtelligent - Daily Dev Standup|2026-05-26 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-19 - Stitch CREtelligent - Daily Dev Standup|2026-05-19 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-18 - Internal CREtelligent Weekly Sync|2026-05-18 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-14 - Stitch CREtelligent - Daily Dev Standup|2026-05-14 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-12 - Stitch CREtelligent - Daily Dev Standup|2026-05-12 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-11 - Internal CREtelligent Weekly Sync|2026-05-11 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-07 - Stitch CREtelligent - Daily Dev Standup|2026-05-07 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-06 - Stitch CREtelligent - Daily Dev Standup|2026-05-06 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-05 - Stitch CREtelligent - Daily Dev Standup|2026-05-05 Dev Standup]]
- [[Meeting Notes/Stitch/Cretelligent/2026-05-04 - Stitch CREtelligent Weekly Refinement and Planning|2026-05-04 Weekly Refinement]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-28 - INTERNAL CREtelligent Team Sync|2026-04-28 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-28 - Impromptu Zoom Meeting|2026-04-28 Impromptu Zoom]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-27 - Internal CREtelligent Weekly Sync|2026-04-27 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-24 - Stitch CREtelligent Weekly Status and Project Sync|2026-04-24 Weekly Status]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-23 - INTERNAL CREtelligent Team Sync|2026-04-23 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-23 - Cretelligent Mulesoft API Design Discussion|2026-04-23 Mulesoft API]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-22 - Stitch CREtelligent Weekly Refinement and Planning|2026-04-22 Weekly Refinement]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-22 - Andrew Mac Sync Stitch|2026-04-22 Andrew Mac Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-21 - Stitch CREtelligent - Co-Sprint Coordination|2026-04-21 Co-Sprint]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-21 - INTERNAL CREtelligent Team Sync|2026-04-21 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-20 - Internal CREtelligent Weekly Sync [Fathom]|2026-04-20 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-20 - Impromptu Call [Fathom]|2026-04-20 Impromptu Call]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-17 - Stitch CREtelligent Weekly Status and Project Sync|2026-04-17 Weekly Status]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-17 - Impromptu Zoom Meeting [Fathom]|2026-04-17 Impromptu Zoom]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-16 - INTERNAL CREtelligent Team Sync [Fathom]|2026-04-16 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-16 - AP - MN - CREtelligent Sync [Fathom]|2026-04-16 AP MN Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-15 - Stitch CREtelligent Dev Team Sync|2026-04-15 Dev Team Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-14 - Stitch CREtelligent Stand Up|2026-04-14 Stand Up]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-13 - Internal CREtelligent Weekly Sync|2026-04-13 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-10 - CREtelligent Weekly Status and Project Sync|2026-04-10 Weekly Status]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Team Sync - Sprint Review|2026-04-09 Sprint Review]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Quick Sync - Validation Workaround|2026-04-09 Validation Workaround]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-09 - Stitch & CREtelligent - Tech Team Huddle|2026-04-09 Tech Huddle]]
- [[Meeting Notes/Stitch/Cretelligent/2026-04-02 - CREtelligent Internal Team Sync|2026-04-02 Internal Sync]]
- [[Meeting Notes/Stitch/Cretelligent/2026-06-01 - Stitch CREtelligent - Weekly Refinement Planning|2026-06-01 Weekly Refinement (stub — no summary)]]
- [[Meeting Notes/Stitch/Cretelligent/2026-06-02 - Stitch CREtelligent - Daily Dev Standup|2026-06-02 Dev Standup (stub — no summary)]]

# CREtelligent
> Commercial real estate/environmental services — API integration, site verification automation, and product costing data model.

## Overview
CREtelligent is a commercial real estate and environmental remediation services company undergoing significant Salesforce platform consolidation. The engagement spans API integrations with vendor systems, a new cost tracking and estimation data model, and site-level product management with real-time margin calculation. The work includes refactoring legacy integration code, designing data models for complex cost workflows, and building user-facing tools for deal estimation and margin tracking.

Key team members: Andrew Porter, Obed Labra-Pelaez, Michael Degoll (technical lead), plus Wendell, Travis, and Chris on the delivery side.

## Key Details

**API Integration: Connect System**
- Vendor integration (addVendor endpoint)
  - Response missing URL field — API contract bug to address with vendor
  - Site verification payload missing 5 fields: status, land use, square footage, parcel boundaries, OT site ID
  - JSON refactoring: replacing fragile 250-line single-line parser with JSON.deserialize + wrapper classes for maintainability

**New Data Model: EnviroCostWorksheet**
- Child object of EnviroSiteTask
- Captures per-product cost breakdown across ~15 cost categories
- Dual-column structure: estimate + actual costs
- Consult workflow: approval checkbox blocks proposal creation (validation rule safeguard)
- Long-term strategy: incremental SiteProduct joiner approach now; deferred migration to standard SF Product/OpportunityLineItem/Asset model

**New Joiner Object: SiteProduct**
- One record per ordered product per site
- Carries: sell price, cost, production days, client days, discount, margin
- Enables product-level financial tracking without modifying standard SF objects

**Site-Level LWC: Spreadsheet-like Interface**
- View of all SiteProducts for a given site
- Read-only: cost columns, production days
- Editable: sell price, client days
- Real-time margin calculation on row edit
- Intended for proposal building and client day estimation

**Automated Reports & Identifiers**
- Single cost field per report (prevents field sprawl)
- product_key and shortcode as canonical identifiers across systems
- Enables reporting consistency across multiple output formats

**Validation Rule Workaround**
- Three-step fallback pattern for complex business logic:
  1. Default value (if sufficient)
  2. Non-required field + before-save trigger (if moderate complexity)
  3. LWC with client-side enforcement (if complex or user-facing)
- Reduces Salesforce-native validation rule fragility

**Budget vs Actuals Flow**
- Connect API → Salesforce (EnviroCostWorksheet) → Order Service → Vendor Payment
- Enables cost tracking from estimate through actual vendor invoicing

**Demo Scope**
- Add-vendor flow walkthrough
- Mass edit and quote screen
- Manual order processing workflow

## Related Pages
- [[stitch]] — delivery partner
- [[harvey]] — ERP integration complexity pattern
- [[hms-capacity-planning]] — internal project management, related product/project data model
- [[validation-rule-workaround]] — pattern used for required picklist blocking saves
- [[json-deserialize-refactor]] — pattern used for Connect API payload parsing
- [[site-product-joiner]] — pattern used for per-product site-level pricing
- [[connect-api]] — external API for vendor management and order processing

**QBR & Maintenance** (2026-04-02)
- QBR reviewed — no high-risk items. Orion section needs additional bullet points documenting householding workflow discovery (was grouped under account hierarchy redesign).
- Schwab integration running cleanly, no new accounts to test against.
- Salesforce cert expiring June 15 — checked apex classes, named credentials, connected apps, authenticated providers. Nothing references it. Closest match was Webex connected app. Decision: leave alone, monitor for breakage.
- Microsoft EWS banner: nothing alarming, no action.

**Web Form / Account Onboarding** (2026-04-02)
- New account onboarding form ~90% built. Combines contract, profile, and Schwab application into single form.
- Will likely require expanding Salesforce contact fields to store additional data.

**Altruist & Roadmap** (2026-04-02)
- Altruist reached out to Stuart. Mac providing reports on mutual funds and other holdings.
- Hierarchy/junction box proposal: other party aware, expects response within a month on roadmap placement.
- Jay (other advisor) on hold pending family situation.

**Flex Dash / New Money Report**
- Mac to demo how downloaded tables could replace manual quarterly process (currently takes a few hours to compile).

## Sources
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Quick Sync - Validation Workaround.md
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Team Sync - Sprint Review.md
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - Stitch & CREtelligent - Tech Team Huddle.md
- Meeting Notes/Stitch/Cretelligent/2026-04-02 - CREtelligent Internal Team Sync.md

---
*Last updated: 2026-04-10*

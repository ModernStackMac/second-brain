# Connect API
> External API used by CREtelligent for vendor management, site verification, and order processing in environmental remediation workflows.

## Overview
Connect API is a third-party integration point for CREtelligent, handling vendor onboarding, site data verification, and order fulfillment workflows. It's positioned between CREtelligent's Salesforce instance and downstream systems (Order Service, billing, vendor portals).

The API has gaps that need closing — missing response fields, incomplete payload structures, and pending features (vendor invites, actuals integration) — but the roadmap is clear. These gaps are being addressed through iterative development and are typically solved with data mapping and temporary workarounds rather than waiting for upstream changes.

## Key Details

**addVendor Endpoint:**
- Currently doesn't return a URL in the response
- Once URL is added, it will be tied to a Contact trigger (checkbox-driven queueable job)
- URL persisted to Contact record for vendor portal access
- Status: pending API update

**Site Verification Payload:**
- Currently missing 5 critical fields:
  - Status (site readiness/eligibility)
  - Land use (zoning/property type)
  - Square footage (site size)
  - Parcel boundaries (geospatial data)
  - OT site ID (internal tracking identifier)
- These fields are required for SiteProduct creation and Order Tracker URL construction
- Workaround: temp values or placeholder logic until API provides actual values

**Product Fields:**
- Needed: product_key, product_name, short_code
- Used for mapping, grouping, and pricing logic
- Critical for SiteProduct joiner implementation

**Connect Invite Feature:**
- Future sprint item
- Will add checkbox to trigger invite email to vendor contact
- Improves vendor onboarding friction

**Actuals Flow:**
- Data path: Connect → Salesforce EnviroCostWorksheet → Order Service
- Order Service calculates vendor payment based on actuals
- Critical for financial reconciliation

## Related Pages
- [[cretelligent]] — primary client using Connect API
- [[site-product-joiner]] — downstream joiner pattern that consumes Connect API data
- [[json-deserialize-refactor]] — pattern for robustly parsing Connect API payloads

## Sources
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Team Sync - Sprint Review.md
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - Stitch & CREtelligent - Tech Team Huddle.md

---
*Last updated: 2026-04-10*

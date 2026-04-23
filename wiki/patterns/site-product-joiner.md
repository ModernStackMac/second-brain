# Site Product Joiner
> Pattern for creating a custom junction object to manage multiple ordered products per site, avoiding the anti-pattern of adding dozens of fields to the parent.

## Overview
Environmental remediation projects involve multiple products per site (excavation, disposal, testing, etc.), each with separate pricing, cost, production timeline, and status. Adding 60+ fields to the Site object is unmanageable; a junction object (SiteProduct) keeps the data model clean and scalable.

The SiteProduct joiner sits between Site and Product, capturing the relationship and storing product-specific details. This is an incremental step toward Salesforce's standard OpportunityLineItem→Asset model, allowing the team to modernize gradually without a big-bang rewrite.

## Problem
- Multiple product types per site, each with:
  - Sell price (varies by site/project)
  - Cost basis (varies by site/project)
  - Production days (duration to deliver)
  - Client days (timeline the customer sees)
  - Discount applied
  - Margin calculations
  - Status tracking
- Adding ~60 fields to Site object is unmaintainable
- Future migration to standard model becomes harder if data is denormalized

## Solution
Create a custom SiteProduct object — one record per ordered product per site:
- Site (master)
- Product (lookup to standard/custom Product)
- Sell price, cost, production days, client days, discount, margin (product-specific fields)

## Architecture

**Data Model:**
```
Site (master)
  └─ SiteProduct (junction/joiner)
      ├─ Site (master-detail)
      ├─ Product (lookup)
      └─ Fields: Sell_Price, Cost, Production_Days, Client_Days, Discount, Margin
```

**UX Pattern:**
LWC on Site record displays a spreadsheet-like view of all SiteProducts:
- Read-only: Cost, Production Days (from Product/quote)
- Editable: Sell Price, Client Days (except on click-quoted items)
- Real-time: Margin calculation = (Sell Price - Cost) / Sell Price
- Save: pushes all edits back to SiteProduct records in one transaction

**Integration Points:**
- Quote generation populates SiteProducts from order payload
- Proposal creation reads SiteProduct records → feeds Order Service for pricing
- Actuals flow: Connect API → Salesforce → Order Service uses SiteProduct cost basis

## When to Use
- Tracking multiple line items (products, services) per parent object
- Line items have distinct business logic and per-item calculations
- Planning to eventually migrate to standard Salesforce models (OpportunityLineItem, Asset)
- Avoiding a field explosion on the parent object

## When NOT to Use
- Single product per parent (overengineering)
- No need for per-item fields (just link records)
- Short-term only (planning to rip-and-replace soon)

## Long-term Strategy
This is a deliberate intermediate step. Over time:
1. Stabilize SiteProduct model and LWC
2. Seed the Product table with all product types needed
3. Later: evaluate migration to standard Opportunity→OpportunityLineItem→Asset model
4. Run both models in parallel during transition if needed

**Risk Mitigation:**
Keeping SiteProduct schema aligned with standard Product fields (product_key, product_name, short_code, cost, margin) makes migration easier later. Don't add custom fields that diverge from the standard model.

## CREtelligent Example
CREtelligent is implementing SiteProduct to track multiple environmental services (excavation, soil testing, disposal) per project site. Each product has different costs, timelines, and pricing. The joiner allows the sales team to quote individual products per site, and the operations team to track distinct workflows and actuals per product type.

## Related Pages
- [[cretelligent]] — engagement implementing this pattern
- [[connect-api]] — source of order payload data
- [[json-deserialize-refactor]] — pattern for parsing the Connect API payloads that populate SiteProducts

## Sources
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - Stitch & CREtelligent - Tech Team Huddle.md

---
*Last updated: 2026-04-10*


**Update (2026-04-22):** Cost worksheet now uses site product as the direct reference field instead of a product lookup. Auto-set logic populates the site product when cost worksheet is created. Sell price and client days fields confirmed editable in the LWC. Column ordering to match reference sheet.
*(Source: Meeting Notes/Stitch/Cretelligent/2026-04-22 - Andrew Mac Sync Stitch.md)*

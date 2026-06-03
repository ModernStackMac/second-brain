# Pattern: Vendor Skill + Geography Matching

> Match vendors (or any external resource pool) to work by combining a per-product qualification model with geographic coverage filters — and keep the matching logic in Salesforce when the external marketplace's data model can't express it cleanly.

## Problem
A marketplace or vendor-network system needs to answer "who can do this job, here?" Reliability breaks down when (1) the external system's skill taxonomy treats mutually exclusive specialties as linked subcategories, (2) coverage zones are opt-out instead of opt-in (vendors select "nationwide" to avoid tedious setup, generating invitation spam), and (3) qualification has levels (full service vs partial) that a flat skill flag can't express.

## Solution Approach
1. **Two-tier qualification per service type** — model each product/service with explicit levels (e.g., *site visit only* vs *full service*) rather than a single boolean skill. Apply matching product-by-product.
2. **Two match gates per vendor:** (a) qualified for this product at the required level? (b) within the geographic filter — primary rule is a radius from vendor address (e.g., 200 miles), plus explicit entire-state and entire-nation opt-ins.
3. **Layer regulatory licensing** as a separate dimension (e.g., radon requires state licensing) — licenses are not subcategories of skills.
4. **Own the matching logic in Salesforce when the external system can't express it** — query your own contact/vendor records against the criteria, then call the external API only for the action (invitation), skipping its broken candidate-search endpoint. Cuts an API dependency and keeps the rules editable.
5. **Data prerequisites:** vendor addresses must exist for radius filters; skill taxonomy must separate mutually exclusive specialties.

## When To Use vs Alternatives
- **Use Salesforce-side matching** when you already master the vendor/contact data and the external marketplace's search semantics are wrong or rigid.
- **Keep matching in the external system** when it masters vendor data you don't replicate, or when volume makes record-sync the bigger problem.
- **Opt-in zones beat opt-out** — never let "nationwide" be the path of least resistance unless invitations are rate-limited.

## Real Examples
- **CREtelligent (Jun 2026):** Connect's skill structure linked mutually exclusive specialties (radon license showing under PCA/Freddie Mac ESA) and used opt-out zones, causing nationwide invitation spam. Proposed: Phase One ESA two-tier qualification (site visit vs full service), 200-mile radius + state/nation opt-ins, and moving vendor selection into Salesforce contact queries — Story 6172 would drop the Order Service find-vendor call and invite vendors directly via the Connect API. Bidding stories paused pending the skills analysis. → [[cretelligent/cretelligent]]

## Risks / Mitigations
- **Missing vendor addresses** break radius filtering — backfill addresses before cutover.
- **Dual-system drift:** if Salesforce takes over matching, define which system masters vendor skills/zones and sync direction explicitly.
- **Licensing compliance:** geographic eligibility ≠ legal eligibility; validate state-license requirements per product.

## Related Pages
- [[cretelligent/cretelligent]]
- [[patterns/historical-match-recommendation-agent]] — match-from-history sibling pattern

---
*Last updated: 2026-06-03*
*Sources: [[Meeting Notes/Stitch/Cretelligent/2026-06-03 - Stitch CREtelligent - Weekly Refinement & Planning|2026-06-03 Weekly Refinement & Planning]], [[Meeting Notes/Stitch/Cretelligent/2026-06-03 - Shaun Mac Weekly Sync|2026-06-03 Shaun Mac Weekly Sync]]*

# Cost Rollup Hierarchy

> Apex-driven cost aggregation from granular source objects up through a hierarchical chain to a summary-level object, then stamped onto product-level records.

## Problem

Multi-category cost data originates from different objects at different levels of a data hierarchy. You need accurate per-product cost totals at a summary level — but DLRS or rollup summary fields can't handle the conditional routing (different source objects per category) or the cross-object stamping at the end.

## Solution

Build the rollup in Apex (triggers or service classes), not declarative tools. Each cost category has its own source object and aggregation logic:

1. **Identify cost categories** — each category has a defined source object and filter criteria (e.g., "valuation costs come from Cost Worksheets where cost_product_category = valuation").
2. **Aggregate to a summary level** — sum costs per category at a common parent (e.g., Site). This is the "collection point" where all categories converge.
3. **Propagate to product records** — stamp the category-specific cost total onto the correct product-level junction record (e.g., Site Product) based on product category matching.
4. **Downstream API call** — optionally send the rolled-up costs to an external system (e.g., Order Service API).

## Architecture

```
Source Objects (per category)          Summary Object       Product Records
─────────────────────────────          ──────────────       ───────────────
PA Quotes (selected=true)     ──┐
Automated Report              ──┼──►  Site (cost fields)  ──►  Site Product
Cost Worksheet (cat=valuation)──┤                               (per-category
Cost Worksheet (cat=zoning)   ──┘                                cost stamp)
                                                                    │
                                                              Order Service API
```

## When to Use

- Multiple cost categories with different source objects need to converge at a single summary level
- Conditional rollup logic (filtered by type/category fields) is needed
- Costs need to propagate sideways to junction records (not just up a hierarchy)
- Declarative rollups (DLRS, rollup summary fields) can't handle the cross-object or conditional logic

## When NOT to Use

- Simple parent-child rollups with no conditional logic — use rollup summary fields
- Low-volume, single-category rollups — DLRS may be sufficient
- When the hierarchy is flat (no intermediate levels)

## Real Examples

### CREtelligent (2026)
Four cost categories rolling to Site, then propagating to Site Products:
- **Survey** — from selected PA quotes (checkbox filter)
- **Automated Report** — from Automated Report object (direct lookup)
- **Valuation** — from Cost Worksheet where cost_product_category = valuation
- **Zoning** — from Cost Worksheet where cost_product_category = zoning

New "cost product category" field added to Cost Worksheet to distinguish valuation vs. zoning (separate from the existing type field). Rollups implemented as Apex triggers (not DLRS). After stamping to Site Products, an Order Service API call sends costs back to the external system.

Source: [[cretelligent]] journal, Apr 20 2026

## Implementation Notes

- Use a service class pattern — one handler per cost category keeps logic modular
- Trigger on insert/update/delete of source objects to keep rollups real-time
- Consider bulkification carefully — rollup recalculation on mass updates can hit governor limits
- The "cost product category" pattern (adding a category picklist to a shared object) is better than separate objects per category when the schema is identical across categories

## Related Pages
- [[site-product-joiner]] — the junction object these costs stamp onto
- [[cretelligent]] — primary implementation
- [[json-deserialize-refactor]] — related pattern for handling the API payload

---
*Last updated: 2026-04-20*
*Sources: Meeting Notes/Stitch/Cretelligent/2026-04-20 - Internal CREtelligent Weekly Sync [Fathom].md*


**Update (2026-04-22):** Cost worksheet now references site product directly (no product lookup field). Auto-set logic populates site product when cost worksheet is created with certain fields. Roll-up chain confirmed: cost worksheet → site product → site. Costs aggregated by cost category at site level. May need intermediary object for roll-ups in future.
*(Source: Meeting Notes/Stitch/Cretelligent/2026-04-22 - Andrew Mac Sync Stitch.md)*

**Update (2026-04-23):** Critical correction to the roll-up direction. Mac had initially built triggers flowing cost worksheet directly to site. Correct flow is cost worksheet to site product FIRST, then site product to site. Each site product needs its own cost based on product category. Mac acknowledged "I just did this backwards" and noted the corrected direction is actually simpler. Four cost fields on site product with triggers for insert/update/delete all created and tested; test classes in progress. Additionally, discount percent and discounted sales price fields added to the roll-up chain: site product to site (Mac, Apex triggers) to opportunity (Obed). These are number fields populated via Apex, not formula fields.
*(Source: Meeting Notes/Stitch/Cretelligent/2026-04-23 - INTERNAL CREtelligent Team Sync.md)*

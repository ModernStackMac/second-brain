# Pattern — Junction Object as Line-Item Replacement

> When per-product data is being modeled as a growing set of checkboxes/fields on a parent object, replace it with a junction object (one record per product per parent) — an Opportunity-Line-Item-style model.

## Problem

A parent object (Site, Opportunity, Account) accumulates a checkbox or field per product type to track which products were ordered and their attributes. This doesn't scale: every new product means new fields, per-product pricing/cost/dates can't be stored cleanly, reporting is painful, and Agentforce/native features expect a line-item grain.

## Solution Approach

Introduce a **junction object** joining the parent to a master `Product2` catalog — one record per ordered product per parent. The junction holds order-specific fields (list price, net price, discount %/amount, turnaround, status, flags); `Product2` holds only catalog data (code, name, short code, family). Roll up costs/revenue from the junction to the parent (Apex triggers for control over large catalogs; DLRS only if volume is low). Populate the junction from the integration payload's per-item array.

Migrate incrementally: stand up the junction object and seed the catalog first, keep the legacy model running until parity is proven, then retire the checkboxes. Run a dependency analysis (flows, Apex, reports) before deleting migrated fields.

## When To Use vs. Alternatives

Use when product count grows, per-product attributes are needed, or you want native line-item reporting / Agentforce support. Avoid for a tiny fixed product set with no per-product attributes — there a few checkboxes are simpler. Prefer Apex roll-ups over DLRS when the catalog/record volume is large or roll-up direction is multi-level.

## Real Examples

- **CREtelligent (Stitch)** — `Site Product` junction replaced per-product checkboxes on Site; `Product2` holds master catalog only; uniqueness lives at the Site Product grain; cost/revenue/discount roll-ups flow Cost Worksheet → Site Product → Site → Opportunity via Apex (not DLRS). *(Source: [[Meeting Notes/Stitch/Cretelligent/2026-04-09 - Stitch & CREtelligent - Tech Team Huddle|2026-04-09 — Tech Team Huddle]])*

## Related Pages

- [[cretelligent/cretelligent|CREtelligent]] — origin
- [[concepts/mulesoft-vs-apex-integration|MuleSoft vs. Apex integration]] — how the payload feeds the junction
- [[index|Wiki Index]]

---
*Last updated: 2026-06-01*
*Sources: Meeting Notes/Stitch/Cretelligent/ (2026-04-09 Tech Team Huddle, 2026-04-15 Dev Team Sync, 2026-04-16 syncs)*

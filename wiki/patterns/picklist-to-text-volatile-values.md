# Picklist → Freeform Text for Volatile Reference Values

> When a picklist's allowed values churn frequently (people, vendors, codes added/removed often), convert the field to freeform text — often with parsing or a derived key — to kill the per-value maintenance and the integration sync failures picklists cause.

## Problem

Picklists are great for stable, bounded value sets. They become a liability when the set changes often:
- Every new value (e.g., a newly-hired PM) needs a metadata change to add it — a deploy or admin task that lags reality.
- Inbound integrations fail validation when they send a value not yet in the picklist ("bad value for restricted picklist") — the record errors or the value is silently dropped.
- Restricted picklists are worst; unrestricted ones avoid the hard error but still fragment data and don't self-heal.
- Formulas/automation keyed off the picklist break or go stale as values drift.

## Solution

Convert the picklist to a **freeform text field** and, where structure is still needed, derive it:
1. Replace the restricted picklist with a text field (or text + a lookup to a real object if the value is actually an entity).
2. If the text carries structure (e.g., a full name), parse it into derived fields (first/last) or store a canonical key (email) as the join.
3. Standardize the **integration payload** to send the stable identifier — an email or external ID, not a display label or initials — so Salesforce maps deterministically.
4. **Audit downstream formula fields and automation first** — formulas that referenced the picklist won't fire / need rework after the type change. This is the main migration cost.
5. For genuinely bounded, stable sets (decline reasons, stages), keep the picklist — don't over-apply this.

### Better still: model the value as data
If the "values" are really records (PMs, vendors, accounts), a **lookup to an object** beats both picklist and free text — it self-heals as records are added and gives referential integrity. Free text is the pragmatic middle when a full object/lookup is too heavy.

## When to Use

- Reference values change frequently (staff, vendors, partner codes) and adding each one via metadata is friction.
- An inbound integration populates the field and is failing on unknown picklist values.
- The maintenance burden of the picklist outweighs the data-quality benefit of constrained values.

## When NOT to Use

- Small, stable, bounded value sets (status, type, stage) where constrained input matters.
- Fields that drive critical branching logic that benefits from guaranteed-valid values (model as a lookup instead).
- Where free text would fragment reporting worse than the sync pain it relieves.

## Trade-offs

- **Lose:** input validation, clean reporting/grouping, and any formula/automation that depended on the picklist (must be reworked).
- **Gain:** zero-maintenance value set, resilient integration mapping, no deploy-to-add-a-value.

## Real Examples

### CREtelligent (2026-06)
Opportunity PM fields were a picklist that broke sync every time a new project manager joined. Converted the PM ID/name fields to freeform text and standardized the integration payload to include **PM email** (matching the existing CSM/CE name+email contract) so Salesforce maps deterministically. Known cost: dependent formula fields — including the Site object's PM-lookup formula — stop firing after the conversion and need rework. Source: [[cretelligent]] journal, 2026-06-08.

## Related Pages
- [[cretelligent]] — primary example
- [[validation-rule-workaround]] — companion pattern for relaxing required/restricted field constraints
- [[salesforce-field-capacity-management]] — field-type changes interact with capacity planning
- [[json-deserialize-refactor]] — payload-mapping changes on the Connect/integration side

---
*Created: 2026-06-08*
*Sources: Meeting Notes/Stitch/Cretelligent/2026-06-08 - Salesforce Field Changes.md*

# Pattern — Validation-Rule Bypass via Before-Save Trigger

> When a required field + validation rule blocks programmatic or integration-driven record saves, populate the value before the validation fires instead of fighting the rule.

## Problem

A required picklist (enforced by a validation rule) blocks record saves when the value isn't set at insert time — common with integration payloads, LWC-driven creates, or automation that can't always supply the field. Removing the validation rule isn't an option because manual users still need it.

## Solution Approach

Escalating fallback sequence, cheapest first:

1. **Default value on the existing picklist** — if a sensible default exists, set it so the field is never blank and the rule never fires. Zero code.
2. **New non-required field + before-save trigger** — create a parallel non-required picklist with the same options, place it on the layout, hide the original required field, and populate the original via a **before-save flow/trigger** so the value is always present before validation runs. Validation fires *after* before-save context, so the field is guaranteed populated.
3. **LWC as last resort** — custom component controlling the save path if neither config approach works.

## When To Use vs. Alternatives

Use the default-value approach whenever a defensible default exists. Use the before-save trigger when the value must be derived from other fields or the payload but the required field/validation must stay for the manual UI. Avoid jumping straight to an LWC — it's the most expensive to build and maintain.

## Real Examples

- **CREtelligent (Stitch)** — required picklist blocking record saves during the Order Service integration; team agreed the default → new-field-plus-before-save-trigger → LWC sequence. *(Source: [[Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Quick Sync - Validation Workaround|2026-04-09 — Validation Workaround]])*

## Related Pages

- [[cretelligent/cretelligent|CREtelligent]] — origin
- [[index|Wiki Index]]

---
*Last updated: 2026-06-01*
*Sources: Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Quick Sync - Validation Workaround.md*

# Pattern: DocuSign Maestro Prefill Field Mapping

> Prefill DocuSign Maestro web forms and templates from Salesforce reliably: map raw storable fields only, handle record-selection ID formats, and scope new SF fields early for anything the form needs that the org doesn't store.

## Problem
DocuSign Maestro workflows (web form → prefilled e-signature → Salesforce sync) silently fail or misbehave when field mappings point at the wrong kind of Salesforce field, and record-creation steps (household/contact) are picky about ID formats. Schema gaps surface late — the form needs data the org never modeled.

## Solution Approach
1. **Map raw storable fields only.** Encrypted fields and formula fields don't populate prefill — e.g. use `ssn` not the encrypted `sssn`, `birth_date` not a `next_birthday_calc` formula.
2. **Watch record-selection ID formats.** Maestro record steps (e.g. representative selection on household creation) can require contact ID format rather than the obvious user/rep reference — a common cause of household-creation failures.
3. **Run a schema-gap pass before mapping.** Inventory every form question against SF fields; scope net-new fields early (employment/securities-industry questions, relationship picklists, verification flags).
4. **Default ambiguous mappings simply, enhance later** — e.g. phone type defaults to home phone, mobile/home distinction as a follow-up.
5. **Plan for multi-client merging** — household-name merging for joint clients needs an explicit rule, Maestro won't infer it.

## When To Use vs Alternatives
- Use when building any DocuSign Maestro / web-form prefill flow against Salesforce — wealth-management onboarding is the canonical case (KYC, Schwab applications).
- Simple single-template envelopes with few fields may not need the full schema-gap pass, but the raw-field rule always applies.

## Real Examples
- **Lefavi (High Meadows):** contract + profile pages mapped with prefill; household-creation failure on rep selection (contact ID format fix with DocuSign); new SF fields scoped for securities-industry employment, employment status, trusted-contact relationship, driver's-license verification. → [[lefavi/lefavi]]
- **Cetera (High Meadows):** DocuSign Maestro field mappings — Account/Contact API names provided to Travis for the mapping exercise. → [[cetera/cetera]]

## Risks / Mitigations
- **Silent prefill failures:** encrypted/formula mappings don't error loudly — test each mapped field with a real record.
- **Late schema gaps:** missing SF fields block mapping completion — front-load the gap inventory.
- **Multi-client households:** unresolved name-merging rules stall household-level document storage — decide the merge convention before go-live.

## Related Pages
- [[lefavi/lefavi]]
- [[cetera/cetera]]

---
*Last updated: 2026-06-04*
*Sources: [[Meeting Notes/High Meadows/Lefavi/2026-06-04 - DocuSign schema and Regulation SP compliance review|2026-06-04 Lefavi DocuSign schema review]], [[Meeting Notes/High Meadows/Cetera/2026-04-30 - Impromptu Call|2026-04-30 Cetera Impromptu Call]]*

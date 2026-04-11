# Case Migration
> The process of consolidating case objects and related data across Salesforce implementations, including field mapping, record type alignment, and validation rule review.

## Overview
Case migration is a common challenge in Salesforce implementations when consolidating multiple custom objects into the standard Case object, or migrating case data between instances. The F2/Cetera engagement shows a realistic picture: field analysis is straightforward, but record type complexity and validation rules can create significant blockers during UAT if not carefully planned.

The key is breaking the work into phases: identify field gaps, map record types, review validation rules, and only then build automation. Metadata creation and data mapping typically complete before complex automation logic.

## Key Details

**Field Mapping:**
- 40 net new fields identified for creation in target instance
- Remaining fields have reasonable matches, pending Operations sign-off
- Clean migration surface: no existing Apex triggers on Case object

**Record Type Complexity:**
- APP uses Case records with various record types for different business processes
- TRPG uses separate custom objects that map to Case functionality
- New account setup object overlaps with existing Case workflows
- Migration requires careful record type mapping to avoid losing business logic

**Validation Rule Review:**
- Thorough audit needed for potential migration blockers
- Validation rules may fire during data load, blocking bulk creation
- Workaround: temporarily disable rules, migrate data, re-enable post-verification
- See [[validation-rule-workaround]] for advanced patterns

**Related Objects:**
- CPA referral object migrates in parallel
- Similar pattern: Opportunity → Lead migration
- Requires separate field mapping and UAT strategy

**UAT Challenges:**
- Team attention to detail on naming conventions (singular vs plural, "federal" prefix consistency)
- Standardizing on Financial Services Cloud (FSC) fields for long-term compatibility and future Agentforce support
- Field naming inconsistencies can break downstream automation and reporting

**Implementation Approach:**
- Phase 1: Metadata creation (fields, record types, validation rules)
- Phase 2: Data mapping and field value transformation
- Phase 3: Automation and workflow implementation
- Phase 4: UAT and sign-off

## Related Pages
- [[f2-cetera]] — engagement context and client
- [[stand8]] — consulting partner
- [[validation-rule-workaround]] — handling validation rule blockers during migration

## Sources
- Meeting Notes/Stand8/F2-Cetera/2026-04-08 - Quick Sync - F2 Connor.md

---
*Last updated: 2026-04-10*

# Job-Function Permission Sets

> Align Salesforce permission sets to job functions rather than individual features or record types. Three to five groups cover most help desk / case-based org designs.

## Problem

As the number of case record types and features grows, permission management becomes unwieldy. Two common anti-patterns emerge:

1. **One permission set per record type** — explodes with scale (20 record types = 20 permission sets to manage)
2. **Single permission set per user** — too loose, grants access to unrelated features and data

Neither approach maps cleanly to how people actually work. A trading operations analyst and a general back-office admin don't need the same case access, but they also don't map 1:1 to record types.

## Solution

Create **three to five consolidated permission sets aligned to job functions**:

1. **Trading / Client Service** — access to trading-related case record types, financial account views, client-facing operations
2. **General Back Office** — case management, admin workflows, non-client-facing operations
3. **Operations / Admin** — broader access for supervisory roles, reporting, configuration

Each permission set grants access to multiple related record types, page layouts, and field-level security settings. Use **Permission Set Groups** to combine sets when users span multiple functions (e.g., a senior ops person who also does client service).

## When to Use

- Org has 5+ case record types or feature-gated objects
- Multiple teams share the same Salesforce instance but have different operational roles
- Record type proliferation is making per-feature permission sets unmanageable
- Onboarding new users requires touching too many individual permission sets

## When NOT to Use

- Simple orgs with 1-2 record types — just use profiles
- Every user needs the same access — single permission set is fine
- Data access is the primary concern — use sharing rules/OWD instead

## Implementation Notes

- Name permission sets after the job function, not the technical object: "Client Service Access" not "Case_RecordType_Support_PS"
- Document the mapping between job functions and record types/features in a matrix (spreadsheet or wiki)
- Permission Set Groups allow composability: base set + optional add-ons per user
- Review annually or when new record types / case categories are introduced
- Consider custom settings or hierarchical permission patterns for feature toggles (separate from data access)

## Real Examples

### Cetera / Project Keystone (2026)
Three permission set groups aligned to job function: Trading/Client Service, General Back Office, and a third TBD. Replaced the initial proposal of one permission set per case record type (which would have produced 10+ sets across APP + TRPG merged record types). Connor finalizing groupings; designed to support the affiliate onboarding growth engine where multiple case/opportunity types feed into the same user workflows.

Source: [[cetera]] journal, Week of Apr 13–19 2026

## Related Pages
- [[cetera/journal]] — primary implementation context
- [[case-migration]] — related concept (case record types driving the permission set complexity)

---
*Last updated: 2026-04-21*
*Sources: Meeting Notes/High Meadows/Cetera/2026-04-16 - Cetera Stand Up [Fathom].md, Meeting Notes/High Meadows/Cetera/2026-04-14 - Project Keystone Daily Stand-up.md*

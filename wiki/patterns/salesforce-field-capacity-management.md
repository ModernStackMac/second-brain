# Salesforce Field Capacity Management

> Proactive monitoring and governance of Salesforce custom field and lookup limits to prevent deployment-blocking capacity crises.

## Problem

Salesforce imposes hard limits on custom fields per object (varies by edition) and custom lookup relationships (typically 40 per object in production). These limits are invisible until you hit them — deployments fail, sprint work gets blocked, and the team scrambles to either delete fields or file a Salesforce case for a limit increase (which can take days).

The problem compounds in long-running orgs where fields accumulate across multiple project phases, legacy integrations, and abandoned features. UAT/sandbox environments often have higher limits than production, masking the issue during development.

## Solution

### 1. Baseline Audit
At project kickoff (or when inheriting an org), run a field inventory per object:
- Count custom fields by type (text, lookup, formula, roll-up summary)
- Compare against edition limits
- Flag objects within 80% of any limit as "capacity watch"

### 2. Ongoing Monitoring
- Track field count changes per sprint/release
- Include field capacity in deployment checklist (alongside test coverage, code review)
- Flag any new lookup field creation on capacity-watch objects for tech lead review

### 3. Field Justification Reviews
When capacity is tight, run a justification review:
- Identify potentially redundant fields (Brian's "17 potentially redundant fields" approach on MAI)
- Check field usage via field audit trail or reports (last modified date, population rate)
- Distinguish between "actively used," "integration-required," and "orphaned"
- Document findings in ticket comments or a dedicated markdown file

### 4. Limit Increase Requests
- File Salesforce case proactively when approaching 90% capacity
- Production limits differ from sandbox limits — always validate against production
- Include business justification in the case (Salesforce may push back on increases)

### 5. Architecture Patterns to Reduce Field Pressure
- Consolidate picklist fields where values overlap (MAI's "type" vs "type__c" consolidation)
- Use custom metadata types or custom settings instead of fields for configuration data
- Consider junction objects or JSON fields for highly dynamic data rather than adding lookups
- Audit formula fields — some can be replaced with reports or flow-calculated values

## When to Use

- Any Salesforce project inheriting an existing org with 50+ custom fields on key objects
- Projects adding 10+ fields per sprint
- Multi-phase projects where Phase 1 fields may become irrelevant by Phase 3
- Orgs with 3+ years of customization history

## When NOT to Use

- Greenfield orgs with simple data models
- Projects adding fewer than 5 fields total

## Real Examples

### MAI (2026)
Case object hit 41 custom lookup fields in production against a 40-field limit. UAT sandbox had 48 lookups (50 limit in test environments), masking the problem during development. Team identified 17 potentially redundant fields via Brian's audit. Required both a Salesforce case for limit increase AND a field cleanup effort.

Additional pressure: only 3 custom fields remaining on Case across all types. Content Version vs. Attachment migration (ticket 1515) added to the field burden during a deprecated-to-new-API transition.

**May 26-27 update:** Case object now at 47/50 custom fields. Production deployment of contract request and lead conversion controller blocked — need 7 new custom lookup fields (Prospect 2, Prospect 3, SMA Manager). Ticket 1596 opened to delete unused fields (requires codebase search + David/Cory approval + mapping sheet update). Blocking production regression testing. Data migration discrepancies (registration type, investing entity objects) adding complexity to field management.

Source: [[mai]] journal, May 11 + May 18 + May 26-27 2026

## Related Pages
- [[mai]] — primary example (Case object field crisis)
- [[uat-deployment-coordination]] — deployment checklist should include field capacity check
- [[validation-rule-workaround]] — field-dependent validation rules compound the impact of field changes

---
*Created: 2026-05-26*
*Sources: Meeting Notes/High Meadows/MAI/2026-05-11 - MAI Dev DSU.md, Meeting Notes/High Meadows/MAI/2026-05-18 - MAI Dev DSU.md, Meeting Notes/High Meadows/MAI/2026-05-26 - MAI Dev DSU.md, Meeting Notes/High Meadows/MAI/2026-05-27 - MAI Dev DSU.md*

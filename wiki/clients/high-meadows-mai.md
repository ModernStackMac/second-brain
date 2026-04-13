# High Meadows MAI
> Internal insurance SaaS product — case object configuration, Financial Services Cloud implementation, and UAT-driven feature backlog.

## Overview
MAI (Modern Assurance Insurance) is an internal High Meadows insurance SaaS product. The product handles complex insurance workflows with multiple record types, field-level permissions, and validation-driven business logic on Financial Services Cloud. Current focus areas: resolving platform-level field constraints (standard Type field validation), permission set alignment for the fund object, and working through a QA/UAT backlog of ~12 tickets.

MAI is flagged as highest priority across High Meadows — Flex-Dash development is fully paused to redirect capacity here. The Argentine dev team is being phased out due to quality concerns, with replacement candidates identified (Antonio, Albin, Stephen's contact).

Core team: Rodrigo Aguirre, Vincent Wang, Sean, Federico Nieto, Brian, Michael Crudder, Aisha, Nicole, David.

## Key Details

**Active Bug: IAM Service Type Picklist**
- Symptom: Case object showing only one value in IAM Service Type picklist for Support record type instead of expected four values
- Root cause: Still under investigation — potential causes include record type config, FLS, page layout picklist settings, permission set restrictions
- Impact: Blocks case creation workflow for certain user types

**Financial Account Type Field Issue** (2026-04-09/10)
- Standard `Type` field on Financial Account is always required — Salesforce does not allow making it optional
- Setting a default value was attempted but field wasn't auto-selecting
- Workaround options evaluated: custom LWC, placeholder default, or custom field + hide standard
- **Decision:** Custom field approach — create custom field, hide standard Type from layout, set via backend trigger. User never interacts with the standard field.
- Credit card account fix: removed Type field entirely from credit card page layout while keeping on bank account pages. Page-level validation fires before save flows, so layout removal was cleanest path.
- Story blocked pending Aisha's clarification with Nicole on whether Type is needed and what values to use

**Address Auto-Population**
- Related persons should automatically inherit the prospect's default address
- Confirmed working in Discovery Info section with auto-save (~4-5 seconds inactivity)
- Mac implementing for related persons

**Fund Object Permission Gaps** (2026-04-10)
- Client service-based permission set missing fund object access
- All custom permission sets need at least read access
- Fund admin team needs full CRUD
- Existing fund admin permission set needs verification; operations team access TBD

**Dev Standup & Sprint Activity**
- 2026-04-09: Tickets 1181 complete, 1301 done, moving to 1302. IPS case denial bug using validation rule approach. Multiple UAT findings (1304 bank formatting, 1307 decimal handling, 1197 Form 338, 1236 task timing). New file uploader request (~3 SP).
- 2026-04-10: Rodrigo finished 1302 and 1313, ready for new work. Federico completed 1273, deployed to production. QA: 1299 and 1300 passed, 1301 needs permission set adjustments. ~12 tickets remain in backlog. Prioritizing QA/UAT over new backlog items.
- 2026-04-13 DSU: Rodrigo completed 1313, 1319, 1301; working on 1212 (→ UAT) and 1097 (lead conversion on person accounts vs households — may not work). Federico deployed 1197 to production, 1270 to UAT. Mac completed 1312, 1314, 1194 Friday + 1319, 1251 today. Multiple items blocked pending David consultation.
  - **Active blockers:** 1293 (SSN/intake source — account SSN editability vs case write), 1120 (sharing access after prospect conversion — CSS users can't access converted household accounts)
  - **QA findings:** 1165 moved to done (sharing issue, not code bug); 1085 (address component error intermittent — regression from recent address changes); 1269 (missing stop process functionality — new ticket needed); 958 (Tamarack Trading Support picklist value — typo in spec, routes to operations trading); 1200 (activity creation allowing past times — datetime validation issue)
  - New tickets from Donna demo being added this week; team picking up unassigned tickets (1196) while waiting

**Ticket Ownership & Backlog** (2026-04-13)
- David Toursack owns most backlog tickets — limited open work available
- Steven owns fund assignment ticket
- Ticket 1251 potential next assignment (needs readiness check)
- Mac generating bugs during current work and routing to team

**Staffing** (2026-04-02)
- Full stop on [[flex-dash]] to redirect all capacity to MAI
- Argentine dev team producing poor-quality code — plan to replace with full-time hires
- Replacement candidates: Antonio, Albin, Stephen's contact

**Workflow & Org Change**
- "Ready to Deploy" status proposed by Federico to improve deployment workflow visibility
- UAT expectations management ongoing

## Related Pages
- [[hms-capacity-planning]] — sister internal product, time tracking/capacity planning
- [[cretelligent]] — parallel complex case object workflows and validation patterns
- [[flex-dash]] — development paused to prioritize MAI
- [[validation-rule-workaround]] — pattern used for Type field and other platform constraints
- [[high-meadows]] — parent organization

## Sources
- Meeting Notes/High Meadows/MAI/2026-04-06 - Bug IAM Service Type Showing Single Value per Record Type.md
- Meeting Notes/High Meadows/MAI/2026-04-09 - MAI Dev DSU.md
- Meeting Notes/High Meadows/MAI/2026-04-09 - MAI Dev Session - Type Field and Address Auto-Population.md
- Meeting Notes/High Meadows/MAI/2026-04-10 - MAI Dev DSU.md
- Meeting Notes/High Meadows/Internal/2026-04-02 - Lefavi Weekly Call.md
- Meeting Notes/High Meadows/MAI/2026-04-13 - MAI Dev DSU.md
- Meeting Notes/High Meadows/MAI/2026-04-13 - New Fund Account Questions.md

---
*Last updated: 2026-04-13*

# Validation Rule Workaround
> Pattern for handling required picklist fields that block record saves via validation rules, especially in API/automated contexts where field values aren't available in the payload.

## Overview
A common Salesforce integration problem: an external API creates records (via Apex or Flow), but the payload doesn't include a required picklist field. The validation rule fires, blocking the save. This pattern provides a three-step fallback sequence to work around the blocker without disabling validation rules permanently.

The key insight is that validation rules fire based on field values — if you can provide a default value before the rule fires, the rule won't block the save.

## Problem
- External API (e.g., Connect) doesn't provide a required picklist field value
- Salesforce validation rule requires the field to have a value
- Record save fails; integration breaks
- Can't permanently disable the validation rule (it protects data quality)

## Solution: Three-Step Fallback

**Step 1: Set a Default Picklist Value**
Add a default value to the picklist field itself:
- Field setup → Default Value
- The field now has a value when a record is created
- Validation rule sees the field is populated → doesn't block save
- Lowest friction; works 80% of the time

**Step 2: Create a Workaround Picklist + Before-Save Logic**
If defaults don't work:
1. Create a new picklist field (non-required, different name)
2. Same options as the original, but no validation rule attached
3. Add the new field to the page layout (old field hidden or removed)
4. Use a before-save Flow or Trigger to:
   - Check if the workaround field has a value
   - Copy it to the original field before save
   - Validation rule sees the value → doesn't block

**Step 3: LWC as Last Resort**
If both above approaches fail:
- Create a custom LWC form that creates the record
- LWC populates the required field before calling Apex to insert
- Only needed if the first two don't apply

## Implementation Example

**Step 1 Setup (in Field Editor):**
```
Field: Status__c (Picklist)
Default Value: "Active"
Validation Rule: ISBLANK(Status__c)  // Now won't fire, field has a value
```

**Step 2 Setup (if Step 1 fails):**
Create: Status_Temp__c (new Picklist, non-required)
Before-Save Flow:
```
IF Status_Temp__c is not empty
THEN set Status__c = Status_Temp__c
```

## When to Use
- External API payloads don't include required fields
- Validation rules protect important data but are too strict for automation
- Integration is breaking due to field validation
- Can't modify the upstream API to provide the field

## When NOT to Use
- The field truly should be required (don't work around; fix the source)
- Validation rule is part of critical business logic (honor it, don't bypass)
- Simple solution: just remove the validation rule (if business allows)

## Important Notes
- This is a workaround, not the right solution long-term
- Work with the source API to provide required fields when possible
- Set a reminder to revisit when the API evolves
- Document why the workaround exists for future maintainers

## CREtelligent Example
CREtelligent has a required Status__c picklist on the Case object with a validation rule. The Connect API doesn't provide status values in the initial payload. Mac is implementing the Step 1 approach: setting a sensible default value ("Pending Review") so cases can be created, then case workers manually confirm the real status later. If that doesn't satisfy the validation rule, the team will move to Step 2 (workaround picklist).

## Related Pages
- [[cretelligent]] — engagement using this pattern
- [[case-migration]] — related pattern for handling validation rules during data migration

## Cetera Example: Queue-Scoping Variant

A different flavor of the same problem: the `Next Meeting Date` validation rule was correctly enforcing business logic (require a next meeting date when status changes) but its scope was too broad. It fired when records were assigned to the `Operations Onboarding` queue during lead conversion, blocking the conversion process.

**Fix:** Refined the validation rule condition to fire only for status changes *before* the `Decision` stage or for disqualification. Queue assignments during conversion no longer trigger the rule.

**Lesson:** Validation rules in orgs with queue-based routing need explicit exclusions for automated ownership changes. Always check: "Does this rule fire on owner change, and can queues be owners?"

*(Source: Meeting Notes/High Meadows/Cetera/2026-04-30 - Impromptu Call.md)*

## Sources
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Quick Sync - Validation Workaround.md
- Meeting Notes/High Meadows/Cetera/2026-04-30 - Impromptu Call.md

---
*Last updated: 2026-05-04*

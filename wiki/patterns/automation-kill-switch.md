---
type: pattern
created: 2026-05-06
sources:
  - Meeting Notes/High Meadows/Cetera/2026-04-13 - Project Keystone Daily Stand-up.md
  - Meeting Notes/High Meadows/Cetera/2026-04-09 - Project Keystone - Cetera Daily Working Session.md
projects:
  - cetera
tags:
  - salesforce
  - automation
  - deployment
  - data-loading
---

# Automation Kill Switch

> Hierarchical Custom Settings to selectively disable flows, triggers, and validation rules org-wide or per user — essential for clean data loads, hotfixes, and deployment safety.

## Problem

Salesforce automations (flows, triggers, validation rules) fire on every DML operation. During data loads, deployments, or emergency hotfixes, these automations cause failures, unwanted side effects, or performance issues. Teams need a reliable way to selectively bypass automations without deactivating them.

## Solution

Create a **Hierarchical Custom Setting** with boolean checkbox fields — one per automation category (e.g., `Disable_Flows__c`, `Disable_Triggers__c`, `Disable_Validation_Rules__c`). Each automation checks its corresponding flag before executing.

### Why Hierarchical

Hierarchical Custom Settings cascade: Org Default → Profile → User. This means:

- **Org-wide kill switch:** Set at org default level — everything stops for everyone
- **Per-user bypass:** Set at user level — only that user bypasses (ideal for data load users like a dedicated "Data Load User")
- **Profile-level control:** Useful for disabling automations for an entire team during UAT

### Implementation

1. **Custom Setting:** `Automation_Settings__c` (Hierarchical)
2. **Fields:** Boolean checkboxes per automation group
3. **Guard clause in every trigger handler / flow:**
   ```apex
   Automation_Settings__c settings = Automation_Settings__c.getInstance();
   if (settings.Disable_Triggers__c) return;
   ```
4. **Validation rules:** Add `$Setup.Automation_Settings__c.Disable_Validation_Rules__c = FALSE` as a condition
5. **Data load user:** Create a dedicated integration user (e.g., "David Mazury" in Cetera) with user-level settings that bypass automations permanently

### When to Use

- Bulk data loads / migrations
- Emergency hotfixes while system stays live for other users
- Deployment windows where automations would interfere
- Testing scenarios requiring clean DML without side effects

## Applied In

- **[[cetera]]** (Project Keystone, Sprint 3): Mac built the hierarchical custom settings infrastructure. Connor's team reviewing existing validation rules/flows to add the switch. Data load user pattern applied for migration work.

## Related Patterns

- [[validation-rule-workaround]] — complementary; kill switch bypasses all validations, workaround addresses individual field requirements
- [[uat-deployment-coordination]] — deployment coordination that benefits from kill-switch availability during deploys

## Notes

- Some integrations should NOT be turned off (e.g., real-time sync integrations). Document which automations are switch-eligible vs. always-on.
- Connor's team at Cetera confirmed they'll add the switch to most existing integrations, with explicit exceptions for integrations that must stay active.

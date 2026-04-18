# Cetera — Project Context

> Financial services firm. Case object migration (Project Keystone), CPA referral mapping, Marketing Cloud journeys, FSC standardization.

## Client
- **Company:** Cetera
- **Partner:** High Meadows (via F2 Strategy)
- **Client contacts:** Connor (primary dev contact), Trevor, Kevin, James, Sean, Darren, Jared, Chris, Kurt, June, Brian, Brady (new dev), Frank, Macy, David Mazury (data load user)
- **Industry:** Financial services

## What We're Building
- **Case Object Migration** — consolidating legacy case structures into unified FSC-aligned model (Project Keystone)
- **CPA Referral Object** — opportunity-to-lead migration mapping with RFP conversion logic
- **Marketing Cloud Journeys** — journey-based automation (provisioning in progress)
- **Advice Works Integration** — advisor "sent to Advice Works" button functionality
- **Custom Settings Infrastructure** — hierarchical checkbox system to disable flows/triggers org-wide or per user

## Data Model Scope
- 40 net new fields identified in discovery
- No Apex triggers on case object (low migration risk)
- Validation rules require review and refactoring
- Record type complexity: APP (uses case records with various RTs), TRPG (uses separate custom objects mapping to case), new account setup object overlaps with case workflows
- Standardizing on FSC fields for long-term platform alignment

## Tech Stack
- **Salesforce:** Financial Services Cloud (FSC), Marketing Cloud
- **Integrations:** Advice Works (advisor platform — credentials issue pending)

## Sprint Structure
- Daily standups (dev-focused; PM items moved async)
- Target: Wednesday delivery of sprint items for client review
- Phased approach: metadata foundation → validation rules → workflows → automation

## Custom Settings Pattern
- Hierarchical checkbox to disable flows/triggers org-wide or per user
- Enables clean data loads without automation interference
- Allows hotfixes while system remains live for other users
- Applies to validation rules and flows being reviewed by Connor's team

## Invoicing
- PO issue resolved (Apr 9) — new PO opened, project moved under new org

## Related Pages
- [[high-meadows]] — partner
- [[case-migration]] — core migration pattern
- [[marketing-cloud]] — journey automation (provisioning blocker)

---
*Last updated: 2026-04-18*

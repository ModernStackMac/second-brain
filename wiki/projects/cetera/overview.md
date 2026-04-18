---
aliases: [cetera, f2-cetera, f2/cetera]
type: project-overview
project: cetera
---

# Cetera — Engagement Overview

> Financial services Salesforce consulting engagement — case object migration, CPA referral analysis, and Marketing Cloud provisioning (Project Keystone).

## Overview
Cetera is a financial services firm undergoing significant Salesforce data model consolidation. The engagement (internally called "Project Keystone") focuses on migrating legacy case object structures into a unified model while standardizing on Salesforce Financial Services Cloud (FSC) fields for long-term platform compatibility. The work involves identifying field mappings across multiple legacy systems, resolving workflows that have grown organically across different business units, and spinning up Marketing Cloud for journey-based automation. Delivery runs through High Meadows under the F2 Strategy Jira workspace.

Key contacts: Connor, Trevor, Kevin, James, Sean, Darren, Jared, Chris, Kurt, June, Brian. UAT team input on field naming standards.

## Key Details

**Case Object Migration**
- 40 net new fields identified during discovery
- No Apex triggers on case object (simplifies migration risk)
- Validation rules require review and refactoring
- Record type mapping complexity:
  - APP: uses case records with various record types
  - TRPG: uses separate custom objects mapping to case functionality
  - New account setup object overlaps with existing case workflows
- Standardizing on FSC fields for long-term platform alignment
- Cases work pulled into Sprint 3 (a sprint early) — Mac writing up the cases design doc

**Marketing Cloud Provisioning** (2026-04-09)
- Final provisioning step failed — marketing team expected access but doesn't have it
- Sean filing support ticket and escalating to AE contacts (Chris and Kevin)
- If resolved by Wednesday (Apr 15), no schedule impact
- Fallback: build journeys in sandbox or TRPG instance and port over

**CPA Referral Object**
- Opportunity-to-lead migration mapping in progress
- RFP process requires careful handling of conversion logic

**UAT & Org Change**
- UAT team pushback on field naming conventions (federal tax bracket vs tax bracket, singular vs plural)
- Need for clear naming standards documentation
- Field-level training for users post-migration
- Jira ticket 1864 (IRA/non-IRA UAT) closed — existing Battery/Adviceworks flows already cover this
- Permission set tickets reviewed with Frank/Macy; items not requiring UAT moved to done

**Sprint Timeline**
- Metadata creation prioritized over automation build-out
- Sprint 5 timeline pulled forward to Sprint 4 due to dependencies
- Phased approach: metadata foundation → validation rules → workflows → automation
- Sprint 3 sign-off target: end of day Friday Apr 10. Going forward, aim for Wednesday delivery of sprint items for review
- Daily standup being restructured to be more dev-focused; PM items moved to front or async

**Invoicing**
- PO issue: invoices received but referencing old discovery PO. Project moved under different org — new PO being opened (as of Apr 9). Payment expected within days.

## Related Pages
- [[high-meadows]] — partner/reseller connection
- [[litify]] — parallel knowledge consolidation effort
- [[cretelligent]] — complex data model design pattern
- [[marketing-cloud]] — provisioning blocker for journey automation
- [[case-migration]] — core migration pattern

## Sources
- Meeting Notes/High Meadows/Cetera/2026-04-08 - Quick Sync - F2 Connor.md
- Meeting Notes/High Meadows/Cetera/2026-04-09 - Project Keystone - F2 Cetera Daily Working Session.md

---
*Last updated: 2026-04-18*

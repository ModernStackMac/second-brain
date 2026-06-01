---
type: confluence-mirror
source_url: https://f2strategy.atlassian.net/wiki/spaces/CE/pages/274071713/Case+Object+Alignment
space: CE
page_id: "274071713"
last_synced: 2026-06-01T06:39:24-05:00
last_confluence_update: 2026-05-28T00:00:00Z
title: Case Object Alignment
---

### Story 7.7 — Case / TRPG Work Desk Alignment

**Acceptance Criteria**

* APP Case-based workflows fully operational on TRPG target objects (TRPG_Help_Desk__c, New_Account_Setup__c, Raise_Cash_Request__c)
* All 19 active APP Case Record Types mapped and functional in the TRPG model
* Validation rules replicated on target objects — no loss of data integrity controls
* Automation parity: routing, notifications, task creation, and status-driven behaviors preserved
* Reporting intact across all migrated categories
* APP users operating fully in TRPG model with no functionality loss
* Tax Return Cases remain on Case object with RT swap only

## Design

### Design Overview

APP uses the standard Case object as the operational request container across 19 active Record Types covering trading, transfers, account/client maintenance, RPS (retirement plan services), asset flow exceptions, and firm initiatives. All automation is declarative — 13 record-triggered flows and 22 active validation rules, no Apex triggers.

TRPG uses custom "request objects" purpose-built for each workflow domain: TRPG_Help_Desk__c (Work Items), New_Account_Setup__c (with Type-driven categorization), and Raise_Cash_Request__c for urgent cash needs. TRPG keeps Case primarily for Tax Returns.

This migration decomposes the APP Case object across the appropriate TRPG target objects, aligning each APP workflow with the correct TRPG domain object. Creating a unified operational model in the TRPG org that addresses the needs of both groups.

### Record Type / Process Mapping

| APP Record Type | Developer Name | TRPG Target Object | TRPG Type / Category |
| --- | --- | --- | --- |
| APP Trade Request | APP_Trade_Request | New_Account_Setup__c | Account_Setup_Type__c = Trade Request |
| APP Transfer Request | APP_Transfer_Request | TRPG_Help_Desk__c | Work Item — Transfers |
| APP Asset Flow Exception | APP_Asset_Flow_Exception_Request | TRPG_Help_Desk__c | Work Item — Asset Flow Exceptions |
| APP Account Maintenance | APP_Account_Maintenance_Request | TRPG_Help_Desk__c | Work Item — Account Maintenance |
| APP Client Maintenance | APP_Client_Maintenance_Request | TRPG_Help_Desk__c | Work Item — Client Maintenance |
| APP RPS (13 Record Types) | APP_RPS_*_Request | TRPG_Help_Desk__c | Work Item — CRPS |
| Firm Initiatives | Firm_Initiatives | TRPG_Help_Desk__c | Work Item — Firm-level |
| New Account / Changes / Cash Reserve | (screen flows) | New_Account_Setup__c | Account_Setup_Type__c = New / Change / Reserve Change |
| Raise Cash (Urgent) | (screen flow) | Raise_Cash_Request__c | Dedicated object |
| Tax Return | | Case | Tax_Return RT swap only |

See attached **Case_to_HelpDesk_Process_Mapping_v2.csv** for the full 24-row breakdown with flow migration priority, field mapping complexity, related APP flows, validation rule counts, and detailed behavioral differences between orgs.

### Key Architectural Differences

1. **Status-driven dates vs. date-driven status:** APP uses date fields to force status changes via VRs. TRPG uses status changes to auto-set dates via flows. Opposite patterns — must reconcile.
2. **Chatter vs. Ticket Messages:** APP posts Chatter mentions. TRPG uses Ticket_Message__c child records + Send_Message__c boolean. Must convert notification pattern.
3. **Case Team Members vs. User lookups:** APP creates up to 5 CaseTeamMember records (RPS roles). TRPG has 2 inline User lookups + User_Ticket_Relationship__c child records.
4. **Custom metadata routing:** APP uses APP_Case_Assignment_Config__mdt for queue assignment. TRPG has no equivalent. Must migrate metadata and build routing flows.
5. **Division vs. Department:** APP Division__c is a picklist. TRPG Department__c is a lookup to trpg_Department__c. Must create Department records or evaluate hybrid.
6. **Contact on Help Desk:** TRPG_Help_Desk__c has no Contact lookup. Must add Contact__c for Client Maintenance.
7. **Status value consolidation:** APP has 30 status values. TRPG Help Desk has 6. Many-to-one mapping needed. RPS-specific statuses need custom values or separate field.
8. **Sub-Type picklist crowding:** APP has 25 Sub-Type values. Adding to TRPG Record_Type__c (14 existing) would create a 39-value picklist.

### New Fields Required (Summary)

* **40 new fields** on TRPG_Help_Desk__c (RPS tracking dates, fee review, asset flow exception, maintenance dates, transfer tracking, Contact__c lookup, migration tracking fields)
* **20 new fields** on New_Account_Setup__c (trade-specific: Gross Amount, DCA, Hold in Cash/MM/IPS, Settlement Date, FSA fields, verification fields, migration tracking fields)
* **6 formula fields** (FA Number derivation, Prior/Receiving Rep No, 3 RPS duration calculations)
* **15 validation rules** to replicate or adapt on target objects
* **6 new flows** (auto-subject, status-date tracking, task creation, metadata routing, notification conversion, Transfer auto-creation from FA)

### Assumptions

* **Skience is being retired.** SkienceFinSln_* fields are orphaned/do not migrate. Formulas referencing Skience (e.g., APP_Custodian__c) repointed once replacement solution is available.
* **Geopointe geocoding** excluded — not in use on APP Cases.
* **No Apex triggers** on either side. All automation is declarative.
* **24 orphaned fields** identified — 3 custom fields need APP team confirmation before discarding, remainder are unused standard/managed package fields.
* No intake process or guided form redesign this phase. APP workflows merge into existing TRPG patterns or are replicated on target objects.

### Open Design Decisions

The following require team alignment before related implementation work begins. Connor's mapping analysis is complete — these are architectural choices, not analysis gaps.

| # | Decision | Context |
| --- | --- | --- |
| 1 | **Sub-Type picklist approach** | 25 APP values + 14 existing TRPG values = crowded picklist. Separate field vs. combined? |
| 2 | **RPS Record Type on Help Desk** | Single Work Item RT with Record_Type__c = CRPS, or dedicated CRPS Record Type? (Vet with CRPS team) |
| 3 | **RPS status values** | Add to Request_Status__c, create secondary RPS_Phase__c field, or track via date fields only? |
| 4 | **Status date-driven vs. status-driven pattern** | Confirm TRPG pattern (status drives dates) is target model. Rewrite APP VRs accordingly. |
| 5 | **Case Origin vs. Alert Source** | Different concepts — new field on Help Desk or repurpose? |
| 6 | **Owner dual-assignment** | APP single OwnerId vs. TRPG OwnerId + Request_Assigned_to__c. Which carries queue vs. user? |
| 7 | **Escalation vs. Nudge** | Different concepts. Map, create separate field, or drop? |
| 8 | **Allocation Change text vs. Model picklist** | APP free-text vs. NAS structured picklist. Separate field needed? |
| 9 | **Household / Parent Firm lookups** | Add to Help Desk or derive from Account relationships? |
| 10 | **Orphaned fields** | 3 custom fields need APP team confirmation before discarding |

### Data Model

_See attached mapping spreadsheets:_

* **Case_to_HelpDesk_Field_Level_Mapping_v2.csv** — 175 rows mapping APP Case fields to TRPG targets. Includes field metadata, mapping types, picklist value mappings, validation rule references, flow behaviors, process differences, and notes.
* **Case_to_HelpDesk_Process_Mapping_v2.csv** — 24-row view mapping each APP Case category to TRPG target objects with flow priority, complexity, and behavioral differences.
* **APP_Case_to_TRPG_Migration_Mapping.pdf** — Overview of mapping approach, assumptions, target object routing, and architectural differences.

## Jira Items

* **CET-111: Create new fields on TRPG_Help_Desk__c** — ~40 fields + 6 formulas + 5 migration tracking fields
* **CET-112: Create new fields on New_Account_Setup__c** — ~20 trade-specific fields + 5 migration tracking fields
* **CET-113: Add picklist values to Help Desk and NAS** — Record_Type__c, Request_Status__c, Trade_Type__c.
* **CET-115: Replicate validation rules on target objects** — ~15 VRs across Help Desk and NAS. _Blocked by: Design decision #4_
* **CET-116: Build Help Desk automation flows** — Auto-subject generation, status-date tracking (RPS), custom metadata routing, Chatter-to-Ticket-Message notification conversion
* **CET-114: Build NAS Trade Request automation flows** — Task creation (5 types with biz-day due dates), queue assignment, FPC notification conversion
* **CET-117: Build Transfer auto-creation flow from Financial Account**
* **CET-118: Configure Lightning Page layouts** — Dynamic forms with conditional visibility per APP category on Help Desk and NAS
* **CET-119: Configure List Views, Queues, and Permissions** — APP-specific list views, queue routing, profile/permission set assignments
* **CET-120: Tax Return RT swap on Case** — RT creation only, no automation (Phase 3)
* [CET-165](https://f2strategy.atlassian.net/browse/CET-165)

*(Diagrams / attached images: see Confluence)*

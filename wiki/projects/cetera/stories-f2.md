---
type: stories-sync
workspace: F2
project: Cetera
updated: 2026-04-18T15:13:12.788Z
story_count: 12
---

# F2 Stories — Cetera

> Auto-synced by story-sync. Do not edit by hand — changes are overwritten.
> Each entry includes ticket link + status + 1-2 sentences of context + parent epic + latest activity.

## In Progress

- [CET-120](https://f2strategy.atlassian.net/browse/CET-120) — Tax Return RT swap on Case `Medium` [Status:: In Progress] [Priority:: Medium] [Updated:: 2026-04-17]
    - **Context:** Create TaxReturn Record Type on Case.  ‌ No automation.  Help Desk already has TaxReturnc (Case lookup) for cross-referencing.
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-113](https://f2strategy.atlassian.net/browse/CET-113) — Add picklist values to Help Desk and NAS `Medium` [Status:: In Progress] [Priority:: Medium] [Updated:: 2026-04-17]
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-110](https://f2strategy.atlassian.net/browse/CET-110) — Case / TRPG Work Desk Alignment `Medium` [Status:: In Progress] [Priority:: Medium] [Updated:: 2026-04-13]

- [CET-4](https://f2strategy.atlassian.net/browse/CET-4) — Configure the custom package that drives the integration to Advice Works (Hold off on Creating until First Full Sandbox is set up) `Medium` [Status:: In Progress] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Context:** Install into Sandbox (Add installation to deployment process spreadsheet) Connor was already working on installing this package into the Sandboxes Set up any necessary field mappings and configuration See attached spreadsheet Add “Send to Adviceworks” button to the Person Account Lightning Pages Person Account Page Layout TRPG Client Lightning Page Configuration guides: ‌ Notes from Odie on configuration: Hi guys, h…
    - **Epic: [CET-8] Client Suitability Tracking**

## Internal QA

- [CET-112](https://f2strategy.atlassian.net/browse/CET-112) — Create new fields on New_Account_Setup__c `Medium` [Status:: Internal QA] [Priority:: Medium] [Updated:: 2026-04-17]
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-111](https://f2strategy.atlassian.net/browse/CET-111) — Create new fields on TRPG_Help_Desk__c `Medium` [Status:: Internal QA] [Priority:: Medium] [Updated:: 2026-04-16]
    - **Context:** 40 new fields, 6 formulas, and 5 migration tracking fields on TRPGHelpDeskc.  | Field API Name | Data Type | | --- | --- | | Contactc | Lookup(Contact) | | ParentFirmc | Lookup(Account) | | APPRPSPlanc | Lookup(APPRPSPlanc) | | APPParticipantNamec | Text(255) | | APPCustodianServiceRequestNumberc | Text(40) | | NIGOStartDatec | Date | | NIGOEndDatec | Date | | ParticipantVerificationStatusStartDac | Date | | Partici…
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

## To Do

- [CET-119](https://f2strategy.atlassian.net/browse/CET-119) — Configure List Views, Queues, and Permissions `Medium` [Status:: To Do] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Context:** Type: Task List views per APP category on Help Desk and NAS Queues: APP Trade Request (NAS), APP Transfer, APP Maintenance, APP RPS (Help Desk) APP users added to queue membership Profile/permission set access to Help Desk, NAS, Raise Cash Request Evaluate trading-specific permission set for role-based restrictions
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-118](https://f2strategy.atlassian.net/browse/CET-118) — Configure Lightning Page layouts `Medium` [Status:: To Do] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Context:** Type: Task Dynamic forms with conditional visibility per APP category: NAS: Trade-specific section when AccountSetupTypec = Trade Request Help Desk: Conditional sections for Transfers, Maintenance, Client Maintenance, Asset Flow Exceptions, RPS, Firm Initiatives Evaluate single dynamic page per object vs.  multiple pages.
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-116](https://f2strategy.atlassian.net/browse/CET-116) — Build Help Desk automation flows `Medium` [Status:: To Do] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-115](https://f2strategy.atlassian.net/browse/CET-115) — Replicate validation rules `Medium` [Status:: To Do] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Context:** Pending: team to confirm TRPG status driven pattern as target model before adapting date driven APP VRs.  On NAS (Trade Request — 9 VRs): APPTradeRequestCheck, TraderequestNotAllowedOnClosedFAs, WhenCustodianIsSchwabIIP, APPGrossAmountrequired, APPContributionandInvestperIPS, APPContributionandotherValidation, APPContributionandFSAJournalNeeded, APPTradingCaseRestrictions, APPAllocationChangeandFollowUpForm On Help…
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-117](https://f2strategy.atlassian.net/browse/CET-117) — Build Transfer auto-creation flow from Financial Account `Medium` [Status:: To Do] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Context:** Replicate APPCreateNewCaseFromFinancialAccount.  After-save on FA → creates Help Desk Work Item (Transfer category) instead of Case.
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**

- [CET-114](https://f2strategy.atlassian.net/browse/CET-114) — Build NAS Trade Request automation flows `Medium` [Status:: To Do] [Priority:: Medium] [Updated:: 2026-04-13]
    - **Context:** 1.  Task creation: After-save.  Creates up to 5 tasks: Account Closing (2 biz days), FSA Journal, Follow-Up Form, Orion Fee Exclusion (5 biz days), Distribution Processing.
    - **Epic: [CET-110] Case / TRPG Work Desk Alignment**


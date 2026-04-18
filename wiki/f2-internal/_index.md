---
type: confluence-index
source: f2strategy.atlassian.net
last_sync: 2026-04-18
synced_by: confluence-ingest
---

# F2 Confluence — Recent Pages (last 14d)

_Live sync index. Last pulled: 2026-04-18. Filter: type=page, lastmodified > 2026-04-04 (14d window). 9 pages._

## Cetera (CE) — 6 pages

- [Growth Engine](https://f2strategy.atlassian.net/wiki/spaces/CE/pages/275972100/Growth+Engine) — Trevor Pollack · Apr 15, 2026
  > Story 1.2 — APP Referral Engine Migration. Preserve APP referral engine and broaden reach while incorporating into TRPG Salesforce instance. Multi-party referral, attribution reporting maintained.
- [Case Object Alignment](https://f2strategy.atlassian.net/wiki/spaces/CE/pages/274071713/Case+Object+Alignment) — Trevor Pollack · Apr 9, 2026
  > Story 7.7 Case / TRPG Work Desk Alignment. APP Case-based workflows operational on TRPG target objects (TRPG_Help_Desk__c, New_Account_Setup__c, Raise_Cash_Request__c). 19 active APP Case Record Types mapped.
- [Calendly Adoption](https://f2strategy.atlassian.net/wiki/spaces/CE/pages/276594689/Calendly+Adoption) — Trevor Pollack · Apr 9, 2026
  > Story 3.3. Migrate APP users onto TRPG Calendly platform. Outlook/Entra SSO, Salesforce sync, advisor-ready scheduling links.
- [Client Suitability Tracking Migration](https://f2strategy.atlassian.net/wiki/spaces/CE/pages/274825233/Client+Suitability+Tracking+Migration) — Trevor Pollack · Apr 8, 2026
  > Story 4.1. Bring APP Client Suitability Tracking into TRPG. AdviceWorks sync maintained, compliance reporting intact.
- [File Storage Centralization (Box)](https://f2strategy.atlassian.net/wiki/spaces/CE/pages/275808266/File+Storage+Centralization+Box) — Trevor Pollack · Apr 7, 2026
  > Story 3.2. Single TRPG Box instance, APP documents migrated, Salesforce links intact, Dropbox files migrated.
- [Development Environment Strategy](https://f2strategy.atlassian.net/wiki/spaces/CE/pages/285048838/Development+Environment+Strategy) — Trevor Pollack · Apr 6, 2026
  > Integration dev environments (Black Diamond, etc.). Approach: use production data from Sandbox Provisioning since no dev env available.

## LNW (LN) — 3 pages

- [New Account Process](https://f2strategy.atlassian.net/wiki/spaces/LN/pages/382500867/New+Account+Process) — June Duan · Apr 6, 2026
  > Current/ideal state mapping. OpenView Gateway integration, Schwab → financial accounts field mapping, no auto-create (Addepar feed pattern).
- [Client Architecture — Visibility Enhancements POC](https://f2strategy.atlassian.net/wiki/spaces/LN/pages/246906882/Client+Architecture+Visibility+Enhancements+POC) — Ernie Nichols · Apr 6, 2026
  > JIRA structure for Client Architecture epics. Epic 1: Meeting Note Additional Functionality. Relationship between Meeting Note and Activity objects. (Maps to LNW-189/190/191/192 stories.)
- [Entity Role Scratchpad](https://f2strategy.atlassian.net/wiki/spaces/LN/pages/246480897/Entity+Role+Scratchpad) — June Duan · Apr 6, 2026
  > Legal Entity setup. EIN/TIN (encrypted), Entity_Role__c schema, autonumber ER-{00000}, Contact/Person Account lookup patterns.

---

## Dataview: stale pages (90+d)

```dataview
TABLE title, author, lastModified
FROM "Second Brain/wiki/f2-internal"
WHERE lastModified < date(today) - dur(90 days)
SORT lastModified ASC
```

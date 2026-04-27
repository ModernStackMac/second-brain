---
type: confluence-mirror
source_url: https://f2strategy.atlassian.net/wiki/spaces/CE/pages/430768132/APP+Address
space: CE
page_id: "430768132"
last_synced: 2026-04-27T06:00:00Z
last_confluence_update: 2026-04-24T00:00:00Z
title: APP Address
---

### Story 7.10 — APP Address Migration

Key Components:

* Fields
* Record Types
* Lightning Pages / Page Views
* List Views
* Queues
* Automations
* Validations

**Design Notes:**

* Evaluate potential paths forward here in terms of using the newer Salesforce custom Address object vs A custom object or the Standard Address Fields on the Account object. Propose course of action for this custom object.
    * Leaning towards mapping of this object to the standard SFDC fields on the Account to avoid potential pitfalls with integrations and existing data set.
* Note: TRPG Location is used for internal use, not client addresses.

**Jira Items:**

* [CET-131](https://f2strategy.atlassian.net/browse/CET-131)
* [CET-132](https://f2strategy.atlassian.net/browse/CET-132)
* [CET-133](https://f2strategy.atlassian.net/browse/CET-133)
* [CET-134](https://f2strategy.atlassian.net/browse/CET-134)

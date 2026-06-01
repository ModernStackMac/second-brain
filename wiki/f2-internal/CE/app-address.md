---
type: confluence-mirror
source_url: https://f2strategy.atlassian.net/wiki/spaces/CE/pages/430768132/APP+Address
space: CE
page_id: "430768132"
last_synced: 2026-06-01T06:39:24-05:00
last_confluence_update: 2026-05-28T00:00:00Z
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

* Adopt the current TRPG address model and map the existing fields to the standard address fields. This aligns with the current TRPG data model, provides the lowest amount of ongoing maintenance, and provides the best overall compatibility as it aligns with the standard Salesforce data model that is also expected for most app integrations. _(Note as part of the data migration the data will be mapped to the appropriate sets of address fields.)_
* Note: TRPG Location is used for internal use, not client addresses.

**Jira Items:**

* [CET-131](https://f2strategy.atlassian.net/browse/CET-131)
* [CET-132](https://f2strategy.atlassian.net/browse/CET-132)
* [CET-133](https://f2strategy.atlassian.net/browse/CET-133)
* [CET-134](https://f2strategy.atlassian.net/browse/CET-134)
* [CET-167](https://f2strategy.atlassian.net/browse/CET-167)

**Address Object Analysis and Recommendation:**

*(See full analysis in Confluence)*

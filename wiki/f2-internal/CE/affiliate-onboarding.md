---
type: confluence-mirror
source_url: https://f2strategy.atlassian.net/wiki/spaces/CE/pages/451575809/Affiliate+Onboarding
space: CE
page_id: "451575809"
last_synced: 2026-06-01T06:39:24-05:00
last_confluence_update: 2026-05-28T00:00:00Z
title: Affiliate Onboarding
---

### Story 1.4 — Affiliate Onboarding

**Description:** Preserve the existing APP-led process for curating and onboarding affiliates as the initial step in the Growth Engine (Referral Engine), while expanding the model to support additional affiliate types in the future. This enhancement will broaden referral reach and scalability by enabling new affiliate categories to be incorporated into the process, all within the TRPG Salesforce instance.

The solution will ensure that current workflows remain intact for APP-managed affiliates, while introducing flexibility to support new affiliate segments, standardized onboarding, and centralized tracking within Salesforce.

**Acceptance Criteria**

* **Current Process Preservation**
    * Existing APP affiliate curation and onboarding workflow is maintained without regression
    * No disruption to current in-flight or existing affiliate records
* **Affiliate Type Expansion**
    * System supports creation and classification of multiple affiliate types (e.g., existing + new categories)
    * Affiliate type is a required, standardized field on affiliate records
* **Onboarding Workflow**
    * A defined onboarding process exists for each affiliate type (can be shared or configurable)
    * Required onboarding steps and fields are enforced prior to activation
* **Salesforce Integration (TRPG Instance)**
    * All affiliate records are created and managed within TRPG Salesforce
    * Affiliates are linked to relevant Accounts/Contacts where applicable
    * Referral activity can be associated with affiliates
* **Scalability & Flexibility**
    * New affiliate types can be added without requiring significant rework or code changes
    * Process supports both APP-managed and non-APP-managed affiliates
* **Visibility & Tracking**
    * Users can view affiliate status (e.g., Prospect, Onboarding, Active, Inactive)
    * Referral source attribution is captured and reportable
    * Basic reporting is available for affiliate performance and onboarding pipeline
* **Governance & Data Quality**
    * Required fields and validation rules ensure completeness of affiliate records
    * Ownership and responsibility for affiliate records are clearly defined

**Tasks**

* Finalize business team conversations
* Begin build process
* QA items
* Deploy feature to UAT Sandbox
* Prep for / demo feature

* **Jira Items:**
    * [CET-151](https://f2strategy.atlassian.net/browse/CET-151)
    * [CET-152](https://f2strategy.atlassian.net/browse/CET-152)
    * [CET-153](https://f2strategy.atlassian.net/browse/CET-153)
    * [CET-154](https://f2strategy.atlassian.net/browse/CET-154)
    * [CET-169](https://f2strategy.atlassian.net/browse/CET-169)

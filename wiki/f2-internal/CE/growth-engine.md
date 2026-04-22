---
type: confluence-mirror
source_url: https://f2strategy.atlassian.net/wiki/spaces/CE/pages/275972100/Growth+Engine
space: CE
page_id: "275972100"
last_synced: 2026-04-22T06:00:00Z
last_confluence_update: 2026-04-21T22:22:00Z
title: Growth Engine
---

### Story 1.2 — APP Referral Engine Migration (Referral Flywheel)

**Description:** Preserve APP referral engine and enhance / broaden reach while incorporating into TRPG Salesforce instance

**Acceptance Criteria**

* Referral source tracking preserved
* Multi-party referral relationships supported
* Referral attribution reporting maintained
* Works with TRPG object model

**Tasks**

* Identify the processes involved and their order
* Map out the TRPG Processes
    * Lead Process
        * This process uses something more similar to the standard Leads to Opportunities model
* Map out the APP Processes
    * Referrer Qualification process
        * Qualify and onboard the entities that will refer
    * Referral Engine Process(?) (Lead Process?)
        * Process of accepting and nurturing the referrals from the Referrer pool
        * This process uses Opportunities more like leads
            * Tends to result in closed lost leads that would show up as non-qualified leads in TRPG
    * Is there a separate Lead process that the Leads which didn't come through the qualified referrers go through?
    * Need to define which or what part of these processes are considered the Referral Engine process
        * Is it all of it
        * Is it just the part of setting up the referrers
            * and maybe something under the management of this
        * Is it just the Lead management part that is important and the way leads are nurtured
* Put together a Proposed Combined Process
    * This process should accommodate the APP existing process
    * This process should be expanded to be agnostic of where the referrals come from
        * i.e. not just CPAs but from any source (mostly will need adjustments to language / field names)

**Design**

* **Design Overview:**
    * The **CPA Referral Model** is the cornerstone of APP's growth strategy. CPAs refer their clients to APP advisors for financial planning services. We will bring that model into the TRPG eco-system and expand it to allow for a greater variety of referral sources across the business.
    * Expansion into the TRPG world has these key needs / concepts to design for:
        * Currently language is all geared towards Tax(CPA) to Financial Advisor pathway, want to make this more agnostic _(Growth Engine firm Affiliate, etc) - still figuring out what to call this program - branding tbd_
            * Revise language to indicate support for a variety of sources
                * Legal Counsel / other professional advisors, etc _(goal is to stay broad enough that anyone could send leads through this don't want to box this in and make it sound restrictive)_

        * Lead Conversion Logic:
            * (See diagrams in Confluence)

* **Jira Items:** (See Confluence)

* **Data Model:** (See diagrams in Confluence)

* **Questions / Open Items**
    * Discuss two potential optional paths for future state
        * Use of multiple Opportunities _(work with June to figure out details like which record types etc. are appropriate)_
        * Use the TRPG custom object that exists already for managing multiple potential Opportunities
            * _Is this CRPS Business Request?_
                * If we go with the option to have multiple Opportunities like APP does today
                    * Which items become Opps which items funnel to the CRPS Business Request object
                        * What are the implications there
                * What downstream business processes does the CRPS Business Request drive and what are the implications of it going away or being expanded on?

        Data transformation consideration:
        * No matter which solution is decided on we'll need to set up a transformation of APP Opportunities to either:
            * Opportunities of a specific record types
                * or
            * RPS Records _(maybe of a specific record type?)_

    * **APP Affiliates / Partners Questions**
        * Can Leads come only from qualified Affiliates _(referrer)_
            * No also come from self identified potential
        * What is the exact process (Set of steps) to become a qualified Affiliate _(referrer)_
            * _See the APP Current SF Process confirmed this is the Affiliate on-boarding process_
        * Note: Each Affiliate is assigned a specific APP contact and this person is responsible for getting the Leads into Salesforce and curating them.

    * **APP Lead Questions**
        * Do APP Leads ever live in the system as Leads at all? Yes
            * But something like 80% are created then immediately converted
                * Self source Leads may hang around as Leads for longer
                    * Don't believe they typically market to these or that there is a larger Lead process here
                    * Confirm with Odie what happens here
        * What exactly do Opportunities represent here?
            * Are they potential services
            * Business lines?
            * Products?

    * **TRPG Questions**
        * In the TRPG world when it comes to leads from Affiliates (Not CPA partners) do they need to be qualified
            * i.e. in the future state TRPG world do we need to qualify only CPA Affiliates? Or All Affiliates? Or some subset of Affiliates?
            * We think at least CPAs have to go through this APP referrer qualification process
                * We think that likely everyone goes through this as it serves as somewhat of an onboarding for being a referrer.
                * Affiliate onboarding will differ for types of CPAs
                    * They will all be the same record type
                    * For instance this could be Growth Engine type of Lead
                        * With a picklist to designate the type of affiliate (Bank, CPA, etc)
                    * We do NOT need to rework the Affiliate onboarding process but it does need to be in place
                    * In the future they will customize and build various versions and business processes around the types of affiliate partners chosen
        * What do we do about the concept of multiple APP Opps for each analogous TRPG Lead
            * Do we want to make multiple Leads matching that structure
                * Are there downstream processes that we need to serve that would drive this need
            * Do we want a child object under the Lead to account for each of those potentials that APP is measuring by creating Opportunities
            * Can APP (or APP's process) still function without these being Opportunities
            * These might turn into RPS object records or we could match the APP process and then have the RPS team (one person) adopt the APP way of doing things
        * When does the Financial Plan get assembled and presented in the ideal future state
            * It appears that APP creates the Financial Plan a lot earlier in the process than TRPG currently does.

**Early Design Thoughts:**

## Business Context

The **CPA Referral Model** is the cornerstone of APP's growth strategy. CPAs refer their clients to APP advisors for financial planning services. The system must track:

* Which CPA firm made the referral
* Which specific CPA partner originated the referral
* The referred individual/business
* Referral attribution for compensation and reporting

## Data Model Design

### Custom Objects

#### 1. CPA_Firm__c (Custom Object)

**Purpose**: Represent CPA firms that refer clients

| Field Name | API Name | Type | Description |
| --- | --- | --- | --- |
| Firm Name | Name | Text(255) | CPA firm name |
| Primary Contact | Primary_Contact__c | Lookup(Contact) | Main CPA contact |
| Assigned Advisor | Assigned_Advisor__c | Lookup(User) | TRPG advisor managing relationship |
| Referral Status | Referral_Status__c | Picklist | Active, Inactive, Prospective |
| Total Referrals YTD | Total_Referrals_YTD__c | Number | Rollup count |
| Total AUM Referred YTD | Total_AUM_Referred_YTD__c | Currency | Rollup sum |
| Firm Website | Website__c | URL | |
| Firm Address | Firm_Address__c | Lookup(APP_Address__c) | |

**Record Type**: CPA_Firm

#### 2. Account (Standard Object - New Record Types)

TRPG uses **Person Accounts** with Financial Services Cloud. APP will adopt this model.

**New Record Types for Referrals**:
* **APP_Person_Referral** - Individual referred by CPA
* **APP_Business_Referral** - Business referred by CPA

**New Fields on Account**:

| Field Name | API Name | Type | Description |
| --- | --- | --- | --- |
| Referral Source Type | Referral_Source_Type__c | Picklist | CPA, Attorney, Client, Other |
| Referring CPA Firm | Referring_CPA_Firm__c | Lookup(CPA_Firm__c) | Which firm referred |
| Referring CPA Partner | Referring_CPA_Partner__c | Lookup(Contact) | Specific CPA who referred |
| Referral Date | Referral_Date__c | Date | When referral was made |
| Referral Status | Referral_Status__c | Picklist | New, Contacted, Meeting Set, Converted, Lost |
| Referral Notes | Referral_Notes__c | Long Text | |

### Relationship Tracking using FSC Objects

**AccountAccountRelation (AAR)** - Track CPA Firm to Client Account relationships
* Create AAR record linking CPA_Firm__c (as Account) to referred Account
* Relationship Type: "Referral Source"

**AccountContactRelation (ACR)** - Track CPA Partner to Client relationships
* Link specific CPA Contact to referred Account
* Role: "Referring CPA"

**ContactContactRelation (CCR)** - Track CPA Partner to Client Contact relationships
* For contact-level referral attribution

## Referral Flow Designs

### Flow 1: CPA Referral Intake (Screen Flow)

**Trigger**: Launched from CPA_Firm__c record or Feathery form submission

**Steps**:
1. **Screen 1**: Capture referring CPA information (Select CPA Firm + Partner)
2. **Screen 2**: Capture referred party information (Person/Business, Name, Email, Phone, Est. AUM, Service Need)
3. **Screen 3**: Additional context (Relationship description, Best time to contact, Notes)
4. **Decision**: Person or Business?
5. **Create Account**: Record Type = APP_Person_Referral or APP_Business_Referral
6. **Create Lead**: Record Type = APP_Referred_Lead, Link to Account
7. **Create Relationships**: AAR (CPA Firm to Referred Account) + ACR (CPA Partner to Referred Account)
8. **Assign Lead**: Run assignment rules
9. **Send Notifications**: Email to assigned advisor + CPA confirmation
10. **Create Task**: Follow-up task for advisor

### Flow 2: Referral Status Update (Autolaunched)

**Trigger**: Lead Status changes OR Opportunity Stage changes
* Lead converts -> Account.Referral_Status__c = "Converted"
* Opp closes Won -> Create "Referral Success" activity
* Opp closes Lost -> Update Referral_Status__c = "Lost"
* Update rollup counters on CPA_Firm__c

### Flow 3: CPA Referral Attribution Report Generator (Scheduled - Monthly)

Queries converted referrals, calculates AUM by CPA Firm, generates CSV, emails to finance for CPA compensation.

### Flow 4: Referral Aging Alert (Scheduled - Daily)

Finds referrals with status "New" AND Referral_Date > 3 days ago. Alerts advisor, escalates to manager after 7 days.

### Flows 5-10: Supporting Flows

1. CPA Firm Onboarding Flow
2. Referral Thank You Automation
3. CPA Performance Dashboard Refresh
4. Duplicate Referral Detection
5. Referral Source Validation
6. CPA Relationship Sync

## Migration Considerations

**From APP Salesforce**: Extract all APP referral data, map to new CPA_Firm__c and Account structures, preserve historical referral attribution, migrate referral reporting data.

**From Redtail**: Redtail has referral source fields that may need to be migrated. Coordinate with Data Migration.

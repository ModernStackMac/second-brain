# Lefavi — Project Context

> RIA client of High Meadows. DocuSign integration, Quick Data onboarding platform, Salesforce CRM buildout, AI exploration.

## Client
- **Company:** Lefavi (https://lefavi.com/)
- **Partner:** High Meadows Solutions
- **Client contacts:** Ian (primary — technical lead and ops), new overnight ops person starting June 22
- **HMS contacts:** Mac Nosek, Brian, Aisha Royer, June Duan
- **Industry:** Registered Investment Advisor (RIA) / Wealth Management

## What We're Building

### DocuSign Integration
- **Scope:** Contract and profile templates with conditional formatting, prefilled from client workflow
- **Flow:** Web form -> prefilled e-signature -> automatic Salesforce sync
- **Auto-creates:** Household and Contact records; stores contract/profile at household level
- **Templates cover:** Secondary client options, KYC requirements, Schwab trusted contacts
- **Field mapping gaps:** Several Schwab application fields missing SF equivalents — employment status, employer address, publicly traded company, stock/bond experience (separated in Schwab, blended in SF), mailing address format inconsistency (custom residence vs standard mailing)
- **New SF fields scoped (Jun 4):** securities-industry employment (yes/no + company details), expanded employment-status options, trusted-contact relationship (spouse/partner/child/parent/sibling/friend/other), optional driver's-license verification
- **Prefill rules:** map raw storable fields, not encrypted or formula fields — `ssn` not `sssn`, `birth_date` not `next_birthday_calc`; phone type defaults to home (see [[patterns/docusign-maestro-prefill-mapping]])
- **Open issues:** Maestro household-creation failure (rep selection needs contact ID format — DocuSign engaged), household-name merging for multi-client households
- **Next step:** Create new SF fields, re-test Maestro household creation with rep ID fix

### Regulation SP Compliance
- **What:** FINRA/SEC cybersecurity + data-protection regulations; deadline for firms Lefavi's size was 2026-06-03
- **Approach:** Target pragmatic "C grade" compliance, not gold-plating (Stuart's guidance); review in progress with J
- **Next step:** Reg SP document shared for system-impact assessment

### Quick Data Integration
- **Platform:** Form Stream (migrating from old API)
- **Cost:** $7,500 setup fee for new version
- **Implementation:** Lightning Web Component for page layout integration
- **Status:** UI/UX refinements in progress; beta testing at no cost before production rollout
- **Strategy:** Build around new tool capabilities rather than refactoring existing processes

### AI Implementation (Exploratory)
- **Current state:** Excel mastery achieved through AI tutoring; interest in SF reporting automation
- **Use cases identified:**
  - Monthly/quarterly new money reporting automation
  - Client meeting tracking (9+ months without contact reports)
  - Transaction review summaries
- **MCP integrations available:** Salesforce, Orion, Schwab
- **Branding applications:** Voice consistency, automated doc generation with Lefavi standards, client-facing presentation customization

## Tech Stack
- **CRM:** Salesforce
- **E-signature:** DocuSign
- **Portfolio/custodian:** Schwab, Orion
- **Onboarding:** Quick Data (Form Stream platform)
- **Scheduling:** Calendly (being removed from backend systems)

## Historical Context
- **Apr 2, 2026:** Flex-Dash licensing decided (no AppExchange, implementation fee only). Full Flex-Dash pause to redirect capacity to MAI. Argentine dev team replacement planned.
- **May 28, 2026:** DocuSign integration rebuild, Quick Data beta approaching, AI use cases scoped.
- **Jun 2, 2026:** Schwab integration signed off (FLS deemed unnecessary by team consensus); all 100 in-scope dev items complete, now bug-fix only; Ian to run next week's client meeting solo (Mac out).
- **Jun 4, 2026:** DocuSign Maestro household-creation bug (rep/contact ID format); new SF fields scoped for DocuSign; Schwab OpenView Gateway sync regression (post-sign-off); Regulation SP compliance review opened (C-grade target).

*(Sources: [[Meeting Notes/High Meadows/Lefavi/2026-04-02 - Lefavi Weekly Call]], [[Meeting Notes/High Meadows/Lefavi/2026-05-28 - Lefavi Weekly Call]])*


## Project Files
- [[lefavi/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/High Meadows/Lefavi/2026-06-04 - DocuSign schema and Regulation SP compliance review|2026-06-04 DocuSign schema & Reg SP review]]
- [[Meeting Notes/High Meadows/Lefavi/2026-06-02 - Lefavi Internal Sync|2026-06-02 Lefavi Internal Sync]]
- [[Meeting Notes/High Meadows/Lefavi/2026-05-28 - Lefavi Weekly Call|2026-05-28 Lefavi Weekly]]
- [[Meeting Notes/High Meadows/Lefavi/2026-04-02 - Lefavi Weekly Call|2026-04-02 Lefavi Weekly]]

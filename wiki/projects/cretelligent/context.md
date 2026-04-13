# CREtelligent — Project Context

> Commercial real estate/environmental services. Connect API integrations, cost worksheets, site verification, vendor management, Quote Matrix LWC.

## Client
- **Company:** CREtelligent
- **Partner:** Stitch (Andrew Porter, Obed Labra-Pelaez)
- **Client contacts:** Michael Degoll (technical lead), Wendell, Travis, Chris, Jack
- **Industry:** Commercial real estate / environmental remediation

## What We're Building
- **Connect API Integration** — vendor onboarding (addVendor endpoint), site verification, contact-to-vendor automation
- **EnviroCostWorksheet** — per-product cost breakdown (estimate + actuals), child of EnviroSiteTask, ~15 cost categories
- **SiteProduct Joiner** — 1 record per ordered product per site; carries sell price, cost, production days, client days, discount, margin
- **Quote Matrix LWC** — mass select/update for surveyor quotes on opportunities (Grid Buddy replacement)
- **DocHub Integration** — Experience Cloud sites with LWC-driven document collaboration (comments, upload/download)
- **Choir Template ID** — formula field driving which Choir report template is used based on project criteria

## Data Model
- **EnviroCostWorksheet:** child of EnviroSiteTask; dual-column (estimate/actual); consult approval checkbox blocks proposal creation
- **SiteProduct:** junction object; sell price, cost, production days, client days, discount, margin; avoids field explosion on parent records
- **Identifiers:** `product_key` and `shortcode` as canonical IDs across systems
- **Long-term:** deferred migration to standard SF Product/OpportunityLineItem/Asset model

## Tech Stack
- **Salesforce:** Sales Cloud, Experience Cloud, LWC, Apex
- **External:** Connect API (vendor/order management), Order Service API, DocHub
- **Integrations:** Choir (report templating)

## Budget vs Actuals Flow
Connect API → Salesforce (EnviroCostWorksheet) → Order Service → Vendor Payment

## Validation Approach
Three-step fallback for required picklist/complex logic:
1. Default value (if sufficient)
2. Non-required field + before-save trigger (moderate complexity)
3. LWC with client-side enforcement (complex or user-facing)

## Contact Create Automation
"Add to Connect" flow fires on contact create — filters by contact type before API call. Valid types: Survey, Environmental, Zoning. Client and prospect types do NOT trigger.

## Related Pages
- [[stitch]] — partner
- [[connect-api]] — external vendor/order API
- [[validation-rule-workaround]] — pattern for required picklist constraints
- [[json-deserialize-refactor]] — pattern for Connect API payload parsing
- [[site-product-joiner]] — junction object pricing pattern

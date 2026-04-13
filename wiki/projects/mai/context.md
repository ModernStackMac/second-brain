# MAI — Project Context

> High Meadows internal insurance SaaS product. Case configuration, IAM service, FSC implementation, UAT-driven backlog.

## Client
- **Company:** High Meadows (internal product)
- **Product:** MAI (Modern Assurance Insurance)
- **Team:** Rodrigo Aguirre (dev), Federico Nieto (dev), Vincent Wang (QA), Aisha, Nicole, David, Michael Crudder, Sean, David Toursack (owns most backlog tickets), Steven, Justin, Brady
- **Priority:** Highest across all HMS work — Flex-Dash fully paused to redirect capacity here

## What We're Building
- Insurance/SaaS platform on Salesforce Financial Services Cloud
- Multi-record-type case management with complex field-level permissions and validation logic
- IAM service type configuration (case routing by service type)
- Fund object with permission set hierarchy
- Ongoing UAT-driven backlog (~50+ tickets, David Toursack owns most)

## Tech Stack
- **Salesforce:** Financial Services Cloud (FSC), LWC, Apex, Flow
- **Objects:** Cases, Financial Accounts, Prospects, Households, Activities, Fund objects

## Known Platform Constraints
- **Type field on Financial Account** — always required in Salesforce; cannot be made optional. Workaround: custom field, hide standard Type from layout, set via trigger. User never sees standard field.
- **IAM Service Type picklist** — was showing only one value instead of four for Support record type; root cause: page layout picklist settings / FLS

## Permission Set Model
- Client service-based permission set missing fund object access — all custom permission sets need at least read access
- Fund admin team: full CRUD
- Operations team access: TBD

## Dev Workflow
- Daily standups (DSU)
- Tickets managed in Linear/ClickUp
- Deploy path: Developer → UAT → Production
- "Ready to Deploy" status flag (Federico) improves deployment visibility
- New tickets regularly added from demo sessions (e.g., Donna demo)

## Staffing
- Argentine dev team phased out (quality concerns) — replaced with full-time hires
- Flex-Dash development fully paused to prioritize MAI

## Related Pages
- [[high-meadows]] — parent org
- [[hms-capacity-planning]] — sister internal product
- [[flex-dash]] — paused product
- [[validation-rule-workaround]] — used for Type field and platform constraints

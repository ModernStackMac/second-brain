# MAI — Project Context

> High Meadows internal insurance SaaS product. Case configuration, IAM service, FSC implementation, UAT-driven backlog.

## Client
- **Company:** High Meadows (internal product)
- **Product:** MAI (Modern Assurance Insurance)
- **Team:** Brian Cersosimo (dev lead), Chloe Thai (PM/scrum), Michael Crudder, Rodrigo Aguirre (dev), Federico Nieto (dev), Vincent Wang (QA), Aisha (QA), Shaun Barry (operations/process), Nicole, David, David Toursack (owns most backlog tickets), Steven, Justin, Brian G (backlog refinement/prioritization), Brady, Megan (F2 — UAT support)
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
- **Case custom field capacity** — Case object at 47/50 custom fields (May 2026). Production lookup limit at 41/40 (over limit). UAT: 48/50. Need 7 new custom lookup fields blocked until fields freed. Ticket 1596 opened to delete unused fields (requires code search + David/Cory approval).
- **Code freeze** — May 23, 2026. No production smoke testing process currently exists; testing ownership with client TBD.
- **Go-live** — Monday June 8, 2026 (pulled forward from the previously documented June 16; steering committee go/no-go Jun 4). Deployment freeze from 1 PM Jun 4; weekend on-call coverage staffed (Mac + one dev). Full capacity through June 22, half capacity starting June 23, then gradual reduction. Phase 2 discussions beginning.
- **100% in-scope dev complete (Jun 2, 2026)** — only bug tickets remain. Current sprint closes Monday; a fresh "Hypercare" sprint opens for clean post-go-live Jira tracking. Bugs tracked in an Excel issue log shared across MAI/F2/dev (Jira remains dev system of record). Idle-capacity rule: no self-assigned work without Michael/Sean/Aisha approval.
- **Encrypted fields** — custodian account number field on contract exhibit unexpectedly encrypted (no ticket found requesting it, not encrypted in Dynamics, likely copied from encrypted case field). Data migration needed if encryption removed.
- **Production access** — Mac has no production access; production-only tickets are routed to Aisha. Prod testing pattern: create example records, validate via login-as different users, then clean up the non-migration records afterward. (2026-06-08)

## Permission Set Model
- Client service-based permission set missing fund object access — all custom permission sets need at least read access
- Fund admin team: full CRUD
- Operations team access: TBD
- Permission Set Groups (PSGs) evaluated and rejected (May 2026) — no deployment benefit vs current approach; Federico proposed role-based PSGs (Operations Users, Advisors) but Michael/team decided to stay with flat permission sets unless a deployment constraint surfaces

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
- [[internal/meadow/meadow|Meadow]] — sister internal product
- [[flex-dash]] — paused product
- [[validation-rule-workaround]] — used for Type field and platform constraints
- [[go-live-hypercare-cutover]] — go-live cutover / hypercare pattern (primary example)


## Meeting Note Sources
- [[Meeting Notes/High Meadows/MAI/2026-06-08 - MAI Dev DSU|2026-06-08 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-06-04 - MAI Dev DSU|2026-06-04 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-06-03 - Stand Up|2026-06-03 MAI Stand Up]]
- [[Meeting Notes/High Meadows/MAI/2026-06-02 - MAI Dev DSU|2026-06-02 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-29 - MAI Dev DSU|2026-05-29 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-27 - MAI Dev DSU|2026-05-27 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-26 - MAI Dev DSU|2026-05-26 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-18 - MAI Dev DSU|2026-05-18 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-15 - MAI Dev DSU|2026-05-15 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-14 - MAI Dev DSU|2026-05-14 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-13 - MAI Dev DSU|2026-05-13 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-11 - MAI Dev DSU|2026-05-11 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-05-07 - MAI Dev DSU|2026-05-07 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-30 - Impromptu Call|2026-04-30 Impromptu Call]]
- [[Meeting Notes/High Meadows/MAI/2026-04-23 - MAI Dev DSU|2026-04-23 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-22 - MAI Dev DSU|2026-04-22 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-21 - MAI Dev DSU|2026-04-21 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-20 - Impromptu Call|2026-04-20 Impromptu Call]]
- [[Meeting Notes/High Meadows/MAI/2026-04-17 - MAI Dev DSU|2026-04-17 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-16 - MAI Stand up [Fathom]|2026-04-16 MAI Stand Up]]
- [[Meeting Notes/High Meadows/MAI/2026-04-16 - Impromptu Call [Fathom]|2026-04-16 Impromptu Call]]
- [[Meeting Notes/High Meadows/MAI/2026-04-15 - MAI Dev DSU|2026-04-15 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-15 - Mac Steven Weekly|2026-04-15 Mac Steven Weekly]]
- [[Meeting Notes/High Meadows/MAI/2026-04-14 - MAI Dev DSU|2026-04-14 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-14 - Dev Growth|2026-04-14 Dev Growth]]
- [[Meeting Notes/High Meadows/MAI/2026-04-14 - Michael|2026-04-14 Michael]]
- [[Meeting Notes/High Meadows/MAI/2026-04-13 - MAI Dev DSU|2026-04-13 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-13 - New Fund Account Questions|2026-04-13 Fund Account Questions]]
- [[Meeting Notes/High Meadows/MAI/2026-04-10 - MAI Dev DSU|2026-04-10 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-09 - MAI Dev DSU|2026-04-09 MAI Dev DSU]]
- [[Meeting Notes/High Meadows/MAI/2026-04-09 - MAI Dev Session - Type Field and Address Auto-Population|2026-04-09 Type Field Session]]
- [[Meeting Notes/High Meadows/MAI/2026-04-06 - Bug IAM Service Type Showing Single Value per Record Type|2026-04-06 IAM Bug]]


## Project Files
- [[mai/board|Board]] — Kanban board
- [[mai/stories-f2|Stories (Jira)]] — active Jira stories
- [[mai/stories-jira|Stories (Jira Import)]] — imported Jira stories
- [[mai/archived-stories|Archived Stories]] — completed/closed stories

# MAI Project — What We Know

> Snapshot of the MAI engagement pulled from the wiki on 2026-04-18. Highest-priority HMS product, insurance SaaS on FSC, deep in UAT with a July go-live in sight.

**Generated:** 2026-04-18
**Query:** what do i know about the mai project
**Pages consulted:** [[projects/mai/context]], [[projects/mai/journal]], [[projects/mai/overview]], [[projects/mai/stories-f2]], [[concepts/flex-dash]], [[entities/high-meadows]]

## Findings

### What it is
MAI (Modern Assurance Insurance) is [[high-meadows]]' internal insurance SaaS product, built on Salesforce Financial Services Cloud. Multi-record-type case management with complex field-level permissions, validation logic, an IAM service type routing layer, and a Fund object with permission set hierarchy. Currently driven by a UAT-generated backlog of ~50+ tickets — David Toursack owns most of it.

### Priority & staffing
Highest priority across all HMS work. [[flex-dash]] development is fully paused to redirect capacity here. The Argentine dev team was phased out for quality reasons and replaced with full-time hires (candidates: Antonio, Albin, Stephen's contact). Core team: Rodrigo Aguirre, Federico Nieto (dev), Vincent Wang (QA), plus Aisha, Nicole, David, Michael Crudder, Sean, David Toursack, Steven, Justin, Brady. Mac is embedded as a dev.

### Tech stack
FSC, LWC, Apex, Flow. Core objects: Cases, Financial Accounts, Prospects, Households, Activities, Fund. Local LWC dev via `sf lightning dev app` is now the standard — much faster than per-change deploys.

### Active architectural threads
- **Financial Account Type field** — standard field is always required, can't be made optional. Locked-in pattern: custom field, hide standard from layout, set via trigger. Credit card layout removes the field entirely. See [[validation-rule-workaround]].
- **IAM Service Type picklist bug** — Support record type was showing one value instead of four. Root cause in FLS/page-layout picklist settings.
- **Prospect address model** — account conversion writes to a custom Address object (child of Account, created on Course Analysis), not the standard primary/mailing fields. Contact Points rejected because clients own multiple properties. Brian owns sharing the pattern so Mac can align his open ticket. For go-live: swap the OOTB address on the prospect modal for the existing custom Address component, process Nicole's person-account change list only, defer related-person/conversion redesign to an internal working session.
- **Fund permissions** — client service-based permission set was missing fund access. All custom permission sets need read minimum; fund admin team gets full CRUD; ops access still TBD.
- **Trigger handler convention** — one handler per object, logic lives in the object's service. Enforced.

### Process & workflow
Daily DSUs. Deploy path: Developer → UAT → Production. Tickets in Jira (+ Notion, kept in sync hourly via Mac's Cowork job using Atlassian + Notion MCPs). Federico's "Ready to Deploy" status flag adopted to improve deploy visibility. New shared Google Doc — "UAT Deployment Collaboration" — for every UAT deploy after Federico overwrote Mac's changes on ticket 1345 and four other "Developer Review" tickets turned out not to actually be on UAT. Story-point sizing for ~40 unpointed tickets runs off a Jira filter (Michael's preference).

### Recent sprint snapshot (week of Apr 13–19)
Tickets passing QA: 1097, 1199, 1222. Rodrigo: 1313, 1319, 1301, 1212, 1097, 1347. Federico: 1197 to prod, 1270 to UAT, 1343 next to unblock Mac. Mac: 1312, 1314, 1194, 1319, 1251, refactor deployed to UAT (resolved 1206 in the same push), 1196 done Apr 17. Ticket 1054 closed (business-account list view = David's team scope). Ticket 1221 (regex error) handed to debt team. Ticket swap: Mac hands over fund account ticket, picks up non-fund work while Federico clears 1343.

### Known blockers / risks
- Sales process system regression — prospect info fields collapsing, asset summary / income goals / next steps sections not populating, dev and UAT behavior diverging. User demos held until fixes land.
- PDF generation tightly coupled to the current system — needs a replacement plan before the system is removed.
- Fund assignment rebuild must be retested in UAT before go-live — prior testing was invalid (ran pre-deploy).
- Team coordination — Sean missing scheduled meetings, broader focus/energy dips across the team. Steven to address.
- Ticket 1293 (SSN editability vs. case write) and 1120 (CSS users can't access converted household accounts) both blocked on a David call.

### Related wiki context
- [[concepts/flex-dash]] — sister product, fully paused to feed MAI
- [[entities/high-meadows]] — parent org
- [[projects/internal/meadow/context]] — sister internal HMS product (capacity planning)

## Gaps

- No page for the Fund object data model itself — only referenced in context. Worth a dedicated page as the permission and admin model solidifies.
- IAM Service Type bug has no resolution captured — picklist was showing one value instead of four, but the root cause and fix aren't in the wiki.
- Prospect address model is described across the journal and overview but has no standalone pattern page. Candidate for a new `[[patterns/custom-address-on-account]]` page given it's the canonical pattern for conversion.
- Ops team's fund access level is still TBD — no follow-up captured.
- Go-live date referenced as "July" but never pinned down with a specific date.
- Tuesday demo bug tickets are being loaded into Jira by Mac but no summary of what the demo surfaced.

## Suggested Follow-ups

- Close the loop on the IAM Service Type picklist fix — add the root cause and resolution to `projects/mai/context.md` under Known Platform Constraints.
- Write `[[patterns/custom-address-on-account]]` once Brian shares the pattern doc.
- Ingest the Apr 14 Dev Growth sync notes into a dedicated page covering trigger handler convention and LWC local dev — both apply beyond MAI.
- Add a target go-live date to the context page.
- When the Tuesday demo bug tickets land in Jira, summarize the themes into the journal.

---
*Generated from Second Brain wiki query*

# MAI — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met three times (Apr 13 — Dev DSU, Apr 13 — Fund Account Questions, Apr 14 — Dev DSU).

Dev DSU: Good sprint velocity but several items blocked on David consultation. Rodrigo completed 1313, 1319, 1301; working on 1212 (→ UAT) and 1097 (lead conversion — may not work on person accounts vs households, needs investigation). Federico deployed 1197 to production, 1270 to UAT. Mac completed 1312, 1314, 1194 Friday + 1319, 1251 today.

Active blockers: ticket 1293 (account SSN editability vs case write requirements unclear — need David call) and ticket 1120 (CSS users can't access converted household accounts after prospect conversion — blocked on sharing rules).

QA findings: 1165 closed (sharing/data issue, not a code bug); 1085 (address component error — intermittent, possibly regression from recent address work); 1269 (missing stop process functionality — needs new ticket); 958 (Tamarack Trading Support picklist value — typo in spec, should route to operations trading); 1200 (activity creation allowing past times — datetime comparison issue, Mac syncing with Federico).

Fund account sync: quick ticket ownership clarification — David Toursack owns most of the backlog, Steven owns fund assignment ticket. Ticket 1251 is the next likely assignment for a colleague (needs readiness check).

New tickets from Donna demo being added this week.

Apr 14 DSU: running low on tickets pre-demo. Four items from Brian's discussion with David: two already in Jira, CSS button issue ticketed, prospect sharing automation assigned to Brian, contract-type visibility for ops/sysadmin unassigned. Demo day deploy freeze noon–3pm ET. Federico can deploy 1194 post-demo (regression testing required). UAT freezes start this week; Olivia and Nicole Tang beginning 30-min training sessions. MCP/Obsidian setup troubleshooting covered.

**Decisions:**
- Ticket 1165 moved to done (sharing issue, not code bug)
- Ticket 1319 closed — type field now defaults via record type, not flows
- Ticket 958: fix picklist value (Tamarack Trading Support → operations trading)

**Open questions:**
- Mac to schedule David call for 1293 (SSN/intake source) and prospect sharing rules (1120)
- 1269: confirm stop process requirements, create follow-up ticket
- 1200: Mac/Federico offline sync on datetime validation

---

## Week of Apr 7–12, 2026

Met four times across the week (Apr 6 bug report, Apr 9 DSU, Apr 9 Type Field Session, Apr 10 DSU).

IAM Service Type bug (Apr 6): Case object showing only one value in IAM Service Type picklist for Support record type instead of expected four. Root cause under investigation — FLS, page layout picklist settings, permission set restrictions all checked.

Type field decision made Apr 9: standard Type field on Financial Account is always required — can't make optional. Workaround chosen: create custom field, hide standard Type from layout, set via backend trigger. User never interacts with standard field. Credit card accounts: removed Type field entirely from credit card page layout.

Address auto-population (Apr 9): related persons inherit prospect's default address automatically. Confirmed working in Discovery Info section with ~4-5 second auto-save.

Fund permissions (Apr 10): client service-based permission set missing fund access. Fix: all custom permission sets need at least read access; fund admin needs full CRUD.

~12 tickets remain in backlog. Prioritizing QA/UAT over new features.

**Decisions:**
- Type field workaround: custom field + hide standard from layout + set via trigger
- Credit card pages: remove Type field entirely from layout
- Prioritize QA/UAT over new backlog items

**Open questions:**
- Type field story: blocked pending Aisha confirming with Nicole on whether Type is needed and what values to use
- Operations team fund access level: TBD

---

## Week of Mar 31 – Apr 4, 2026

Internal planning sync (Apr 2). Highest priority decision of the engagement: full stop on Flex-Dash to redirect all capacity to MAI. Argentine dev team producing poor-quality code — plan to replace with full-time hires (candidates: Antonio, Albin, Stephen's contact).

**Decisions:**
- Flex-Dash development fully paused; all capacity redirected to MAI
- Argentine dev team being phased out and replaced

---

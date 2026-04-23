---
status: active
owner: Mac
priority: p1
last_meeting: 2026-04-22
open_actions: 22
---

# MAI — Project Journal


## Week of Apr 21–26, 2026 (continued)

Dev DSU (Apr 22) — retirement contracts gap, production data integrity, training schedule, and comprehensive ticket review.

**Retirement contracts gap:** Aisha has an upcoming call with the retirement team to initiate contracts at the business account level. Critical missing info: authorized person details on business accounts, signer-to-business-account relationships, and whether contacts need to be created from business accounts. No contacts were migrated for business accounts, creating a significant gap. Michael noted business accounts were never discussed in detail during the project. Aisha scheduling a 30-min call with David and Corey to gather requirements.

**Production data integrity:** Data loaded from Dynamics into Prod and UAT is offset by hours because correct org time was never set. A wipe and reload is required. Steven's sharing model will need review — Aisha scheduling a call with Santi to scope impact.

**Training and deployment freeze:** One more training session tomorrow. Deployment freeze tomorrow 12:30–3:00 PM. Next week marks the start of process training with significantly increased activity — production deployments will be very limited.

**Ticket progress:** Federico on phone account tickets 13.32/13.41, expecting to finish today. Rodrigo deployed 1364 to UAT, finished 1280, working 1368. Mac completed 1382, 1360, 1375, 1376, 1369, 1379 yesterday, knocking out low-hanging fruit today. Steven catching up on other projects — plans to fix SOQL 101 error by moving sharing logic to async.

**Ticket reviews:** Case Status Customization (12.04) blocked, no requirements. File Upload LWC confirmed for in-LWC multi-file support. Duplicate Detection (12.04) passes (household dupes not detected, person accounts are). Picklist Issues (1329) easy fix, two picklists found. Visibility Filters (1312) using old picklist values, needs update. Financial Account Type (1292) field reference confusion resolved. Quick passes on 997, 11.96, 1327, 1333, 13.47, 13.51.

**Post-go-live cleanup epic:** Federico raised feedback from Brian Gallagher about notes field placement on financial accounts. Valid but non-critical — Aisha creating a "Go Live Cleanup" epic.

**Decisions:**
- Create "Go Live Cleanup" epic for post-launch items (notes field placement, etc.)
- Retirement contracts require discovery call before any build — business account contacts never scoped
- Production wipe and reload needed to fix Dynamics time offset

*(Source: `Meeting Notes/High Meadows/MAI/2026-04-22 - MAI Dev DSU.md`)*


## Week of Apr 21, 2026

Dev DSU (Apr 21) — full team standup covering ticket triage, QA passes, and permission set issues.

Account number consolidation: Team decided NOT to create a new fund account number field — seven already exist. Using existing financial account number for now, potential rename later.

Deployment freeze 11 AM to 2 PM Apr 21. Aisha walking CSS and advisors through test scripts — first time involving them in testing.

Ticket progress: Rodrigo completed 1364 and 1310; 1305 cancelled; now on 1280. Federico deploying UAT-to-prod, then 2-3 new phone account tickets. Mac got four tickets done yesterday, working sales process today — Aisha stressed urgency, Friday call with CSS/operations. Mac committed to EOD update.

Permission set gap: Mac added perm set only for Tiffany per ticket. Aisha requested ALL CSS and Advisor profile users (Client Service Specialist and Advisor profiles). Mac to apply broadly.

PDF save/generate access broken for advisors and CSS users. Root cause: missing operations-based perm set (called operations in UAT, CSS in prod). Mac diagnosing, reverted QA ticket and added PDF issue to it.

QA reviews: 1329 passes (all record types, Vincent verifying). 1346 (custodian deprecated-to-custodian) passes, needs Santi update script. 1288 (pending) disregarded — David renaming; Michael took ownership. 1203 — no checkbox needed, business in type picklist. 1204 — duplicate warning on account not during conversion. 1240/1291/1310 deployed. 1278 — mailing address not populating (separate bug). 1A — SMA manager still non-selectable (blocker).

Field deletion: deprecated field — delete if no real data; verify Santi migration from Dynamics. Move data first if present.

**Decisions:**
- Do NOT create new fund account number field — consolidate around existing financial account number
- Ticket 1288 disregarded — pending status being renamed by David
- Delete unused deprecated fields IF no real data; migrate first if needed
- Ticket 1203: no checkbox — business option lives in type picklist

**Open questions:**
- Mac: sales process tickets (1361, 1376) ETA before Friday CSS/operations call
- SMA manager non-selectable on ticket 1A — outstanding blocker
- Santi data migration scripts accumulating — need centralized communication

---


## Week of Apr 20, 2026

Dev DSU (Apr 20) — part of a multi-session Fathom recording that also captured HMS website and Cetera standup segments.

Training sessions scheduled this week: 11:30 AM–2:00 PM (deployment-free CUAT) and 1:00 PM. Team planned around the training windows.

Status updates: Federico completed 13.43 and 13.44, deploying components to production today before moving to a new phone account ticket. Mac deployed the lead conversion story (reviewed over the weekend, confirmed working) and is now working on account open tickets. Speaker 1 noted the client info component needs checking but conversion itself looks good. Rodrigo completed 1-3-45, working on 1.364 (data migration — marking legacy values as inactive in the closer reason value set; only five values stay active out of many legacy entries).

Ticket 7-98 (pad settings not working/linked) escalated: David Torsak previously questioned whether it's even a real issue. Team confused on whether "path" field should be removed entirely. Decision: block 7-98 and escalate to David Torsak for clarification rather than proceeding without clear requirements.

**Decisions:**
- Ticket 7-98 blocked and escalated to David Torsak — not proceeding without clear requirements on pad settings behavior
- Legacy closer reason values: mark majority as inactive, keep only five active values (data migration requirement)

**Open questions:**
- David Torsak: clarify ticket 7-98 — is this a real issue? What's the expected pad settings behavior?
- Rodrigo: confirm inactive value marking approach for closer reason picklist (ticket 1.364)

---


> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 13–19, 2026

Met eight times (Apr 13 — Dev DSU, Apr 13 — Fund Account Questions, Apr 14 — Dev DSU, Apr 15 — Dev DSU, Apr 15 — Mac/Steven Weekly, Apr 16 — Dev DSU, Apr 16 — Impromptu Call, Apr 17 — Dev DSU). The Apr 15 DSU was captured by Granola but no content/summary was recorded — no notes to extract.

Apr 17 Dev DSU: address-on-conversion pattern clarified, UAT deployment discipline tightened, ticket swap to unblock Mac, and story-point sizing exercise kicked off. Brian explained that account conversion writes addresses to a custom Address object (child of Account, creates record on Course Analysis) rather than the standard primary/mailing fields — Contact Points was rejected because clients own multiple properties with detailed requirements. Brian to share the pattern so Mac can align his open ticket. Federico overwrote Mac's changes on 1345 when sending to UAT without syncing dev first; four additional "Developer Review" tickets also aren't actually deployed. Fix: shared "UAT Deployment Collaboration" Google Doc — Mac logs every deploy going forward. Ticket swap: Mac hands over his fund account ticket, Federico finishes 1343 first to unblock, Mac picks up non-fund-account work in the meantime. Story-point sizing for ~40 unpointed tickets will run off a Jira filter (Michael's preference) rather than the Notion sync page — fastest path to an honest "how much dev time is left" answer for leadership. Mac's hourly Cowork job keeps Notion checkboxes ↔ Jira story points in sync via the Atlassian + Notion MCPs; Notion page may have over-estimated from earlier prompt and will be reset if still useful. Mac also dumping Tuesday demo bug tickets into Jira for review with Michael before assignment. Apr 16 progress: refactor committed + deployed to UAT after freeze lifted (ticket 1206 resolved in same push); ticket 1196 completed Apr 17 morning.

Apr 16 Dev DSU + Impromptu Call: ticket cleanup and a significant design alignment on the prospect address model ahead of the July go-live. QA passes this round: 1097, 1199, 1222. Ticket 1054 (retirement-account list view missing practice field) marked pass — it's David's team's business-account list view for retirement contracts, not MAI's scope. Ticket 1221 "regex too complicated" error handed off to the debt team. 1082 needs retesting with the correct persona: exception timeframe is required for the case requester but not the denial team. 1128/1167 test steps unclear — Vincent + Aisha syncing offline. Rodrigo finished 12, now on 1347; 991 moved to dev with Ferrito pinged. Global picklist bug hitting both financial account case and account records — added to Brian C's existing list. A larger architectural issue surfaced around prospect address: standard OOTB address on prospect modal creates dual-write risk against the existing custom Address object, with related-person addresses (especially schedule B on retirement contracts) adding further complexity. For go-live the team is keeping scope tight — replace the standard address component on prospect modal with the custom address component (link already exists), process only Nicole's person-account change list, and defer the larger related-person / conversion address redesign to an internal working session. Mac's recent JavaScript-only prospect UAT deploy is on hold — bundling with Nicole's changes. Aisha also flagged the fund assignment rebuild as urgently needing retest in UAT before go-live; prior testing was invalid because it ran before deployment.

Apr 15 Mac/Steven Weekly: dev progress recap — modal sizing fixed, money management system + object integration added, domain LLC config updated, spouse card/table/notes/video components enhanced, new W3 flare landed. Main pain point is a regression in the sales process system — prospect info fields are collapsing and sections (asset summary, income goals, next steps) aren't populating, with dev and UAT behavior diverging. PDF generation is tightly coupled to the current system, so removing it creates risk and an alternative needs evaluation. Team coordination issues surfaced: Sean missing scheduled meetings consistently, focus/energy dips across the team, communication gaps impacting timeline. User demos held until bug fixes land.

Dev DSU: Good sprint velocity but several items blocked on David consultation. Rodrigo completed 1313, 1319, 1301; working on 1212 (→ UAT) and 1097 (lead conversion — may not work on person accounts vs households, needs investigation). Federico deployed 1197 to production, 1270 to UAT. Mac completed 1312, 1314, 1194 Friday + 1319, 1251 today.

Active blockers: ticket 1293 (account SSN editability vs case write requirements unclear — need David call) and ticket 1120 (CSS users can't access converted household accounts after prospect conversion — blocked on sharing rules).

QA findings: 1165 closed (sharing/data issue, not a code bug); 1085 (address component error — intermittent, possibly regression from recent address work); 1269 (missing stop process functionality — needs new ticket); 958 (Tamarack Trading Support picklist value — typo in spec, should route to operations trading); 1200 (activity creation allowing past times — datetime comparison issue, Mac syncing with Federico).

Fund account sync: quick ticket ownership clarification — David Toursack owns most of the backlog, Steven owns fund assignment ticket. Ticket 1251 is the next likely assignment for a colleague (needs readiness check).

New tickets from Donna demo being added this week.

Apr 14 DSU: running low on tickets pre-demo. Four items from Brian's discussion with David: two already in Jira, CSS button issue ticketed, prospect sharing automation assigned to Brian, contract-type visibility for ops/sysadmin unassigned. Demo day deploy freeze noon–3pm ET. Federico can deploy 1194 post-demo (regression testing required). UAT freezes start this week; Olivia and Nicole Tang beginning 30-min training sessions. MCP/Obsidian setup troubleshooting covered.

Apr 14 Dev Growth sync: dev workflow and architecture conventions covered. Branch/PR process — standard tickets go through MA deploy env; UIT-specific issues cherry-picked and merged directly to UIT. Trigger handler pattern enforced: one handler per object, logic lives in the object's service for clean separation. LWC local dev via `sf lightning dev app` is the standard workflow — significantly faster than deploying every change. #1085 will close after Mac's Client Info Component refactor lands; any residual issues spin up a new ticket. Client Info Component auto-save is moving from "on field change" to "on Next button click only". New tickets identified: DESMI manager sharing problem, contact request values on screen 2, quick action for adding related persons to addresses.

**Decisions:**
- Ticket 1165 moved to done (sharing issue, not code bug)
- Ticket 1319 closed — type field now defaults via record type, not flows
- Ticket 958: fix picklist value (Tamarack Trading Support → operations trading)
- Trigger handler convention: one handler per object, logic inside the object's service
- LWC local dev (`sf lightning dev app`) is the standard workflow going forward
- Client Info Component auto-save → explicit Next-button trigger
- Close #1085 after the Client Info refactor; new ticket for any leftovers
- Hold user demos until sales process system bug fixes land
- Test fixes in dev before promoting to UAT
- Evaluate PDF generation alternative given current system's tight coupling
- For go-live: replace the standard OOTB address on prospect modal with the existing custom Address component (custom address ↔ prospect link already exists) — no wholesale redesign
- Related-person address complexity (schedule B on contracts, household conversion, multi-address for wealthy prospects) tabled for internal working session — no new requirements before go-live
- Hold Mac's prospect UAT deployment; bundle with Nicole's person-account changes into a single deploy
- Ticket 1054 marked pass — business accounts used for retirement contracts, correctly lack practice field (David's team's scope)
- Ticket 1221 handed off to the debt team (regex-too-complicated error)
- Tickets 1097, 1199, 1222 passed QA
- Fund assignment rebuild must be retested in UAT immediately — prior testing was invalid (ran pre-deploy)
- Account address pattern: continue using custom Address object on conversion (writes to Course Analysis) — not standard primary/mailing fields; Contact Points rejected due to multi-property client requirements
- Story-point sizing via Jira filter for unpointed tickets (Michael's preference) — Notion sizing page deferred
- Adopt shared "UAT Deployment Collaboration" Google Doc for all UAT deploys — avoids cross-dev overwrites
- Mac/Federico ticket swap: Mac hands over fund account ticket; Federico to finish 1343 next to unblock

**Open questions:**
- Mac to schedule David call for 1293 (SSN/intake source) and prospect sharing rules (1120)
- 1269: confirm stop process requirements, create follow-up ticket
- 1200: Mac/Federico offline sync on datetime validation
- Tickets needed: DESMI manager sharing, contact request values on screen 2, related-persons quick action
- Ambiguous "Michael" 2:05 PM meeting (Apr 14) — Granola returned no content; Mac to confirm which Michael and re-file
- Sales process system regression: diagnose collapsing prospect info fields and non-populating asset summary / income goals / next steps sections; reconcile dev vs UAT divergence
- PDF generation dependency: identify replacement path before removing current system
- Team coordination: Sean's missed meetings and broader focus/energy issues — Steven to address
- Aisha to create tickets for Nicole's person-account changes and assign to Mac; Mac to review for implementation issues (validation rules, etc.) before build
- Brian C owns person-account cleanup + global picklist bug (financial account case/account)
- Vincent/Aisha: take 1128 and 1167 offline to clarify test steps
- Vincent: retest 1082 using the correct persona (exception timeframe required only for requester)
- Vincent: send Aldo a test record for ticket 1221 regex error
- Dev team: retest fund assignment rebuild in UAT (or dev); schedule internal working session on prospect address data model for go-live
- Federico: continue work on ticket 1-3-47
- Mac + Brian: review new address modal ticket for feasibility and conflicts
- Brian to share the custom-address-on-account pattern with Mac so he can align his open ticket
- Federico: complete 1343 to unblock Mac; review and redeploy 1345 after overwriting Mac's changes in dev
- Federico: investigate four tickets moved to Developer Review that aren't actually on UAT
- Mac/Michael: process Tuesday demo bug tickets once Mac finishes loading them into Jira
- Michael: run story-point sizing via Jira filter for ~40 unpointed items; review the two solution-design tickets Federico sent
- Aisha: re-sync with Federico on tickets that are marked Developer Review but not deployed

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

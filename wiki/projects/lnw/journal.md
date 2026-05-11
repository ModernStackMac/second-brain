---
status: active
owner: Mac
priority: p2
last_meeting: 2026-05-11
open_actions: 4
---

# LNW — Project Journal


## Week of Apr 20–26, 2026

June/Sam LNW Sync (Apr 22) — entity structure feedback, family tree bug, and subject field limitation.

**Entity structure correction:** Sam flagged that the current ERD incorrectly focuses on household/institution ownership. The model should prioritize LLCs, trusts, and people as core entities with clear ownership percentages (e.g., LLC owned 48.5% by Red Trust, 48.5% by Yellow Trust, each trust owned 100% by a person). Households can be ignored for now. Sam sending Mac a screenshot/document of the correct structure as reference. Mac committed to completing the entity work before month-end (over the weekend if needed).

**Family tree relations bug:** Critical issue discovered — family tree view doesn't display relations (institutions/households) for records without associated meeting notes. Root cause: component was designed to filter on activities with meeting notes, but users expect all activities regardless of meeting note status. Mac had added a filter button for this, but the underlying logic needs rework. June and Sam to discuss implications for the Outlook add-in email logging workflow.

**Subject field picklist limitation:** Users requesting free text instead of dropdown for the subject field. Mac identified a hard technical constraint: the subject field is a picklist with a 1,000-value limit. Allowing free text would create a new picklist value per entry, eventually breaking activity creation. Team needs to solution this before implementing.

**May visibility POC:** Sam emphasized May is critical for the visibility POC — will require significant work from Mac starting in May. Roughly six weeks of availability before a new large project potentially pulls Mac away.

**LucidChart access:** Mac's license status unclear (Sean may have revoked it). Sam offered to share diagrams via F2 email. Mac following up with Sean.

**Decisions:**
- Entity model: prioritize LLCs, trusts, people — ignore households for now
- Subject field: no free text until picklist limit is solved

*(Source: `Meeting Notes/High Meadows/LNW/2026-04-22 - June Sam LNW Sync.md`)*

---


> High Meadows engagement via F2 Strategy. Jira workspace `f2strategy.atlassian.net`, project key `LNW`.
>
> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 14–19, 2026

Met once (Apr 14 — Entity Role Diagram / ERD Sync). Multi-topic session that also covered HMS website rollout, Meadow (time tracking) status, and Visibility POC updates.

**ERD requirements:** Build an Entity Role Diagram from the entity role object in Salesforce sandbox. Entity roles act as a junction object connecting accounts — visual output should show boxes (accounts) connected by lines (entity role records) with nested ownership. Reference Altrata ownership structure diagrams as the visual model. First iteration includes all standard accounts; portfolio objects may come later. Mac to build the initial iteration and send for feedback, then iterate until satisfactory.

**Visibility POC:** Third testing kickoff attempt underway. ClickUp license access still delayed. Screenshots being captured for Antonio for one-off feedback. Budget concerns noted despite it being an internal PM tool.

**Decisions:**
- Build initial ERD using entity role records as junction between account boxes, showing nested ownership
- Reference Altrata ownership structure diagrams as visual model
- Include all standard accounts in first ERD iteration; portfolio objects may come later

**Open questions:**
- ClickUp license access for Visibility POC (delayed — blocking testing)
- When does ERD expand to include portfolio objects?

---

_Active story work tracked in `stories-f2.md` (4 tickets in Review: LNW-189/190/191/192 — Visibility Enhancements POC, parent epic LNW-112 Client Architecture)._

## Week of May 11, 2026

LNW CA Check In (May 11): project velocity update, new bug logged, meeting note page field mapping, Mac out Wed-Fri next week.

**Family story ticket progress:** Mac targeting one ticket completion per day on the family story work (#13). Should finish remaining tickets by end of week, though new tickets may push completion to Monday/Tuesday next week.

**New bug — search filter reload issue:** Identified and logged a bug where search filters/toggles don't reload properly across all filter types. Similar to the previous timeline filter bug. Estimated at 5 points (medium priority). Mac to review and fix.

**Meeting note page field mapping:** Activity fields can't use lookup functionality on the meeting note object. Workaround: add start date/time fields to the meeting note object and map them during meeting creation/updates. Added to existing ticket scope.

**Deployment plan:** Mac finishing current ticket by noon, then pausing for deployment push. Will message Slack when ready. End-to-end testing planned after ticket completion.

**Mac OOO:** Out Wednesday–Friday next week for Barcelona trip (mom's 60th birthday). Return after Memorial Day.

*(Source: `Meeting Notes/High Meadows/LNW/2026-05-11 - LNW CA Check In.md`)*

---


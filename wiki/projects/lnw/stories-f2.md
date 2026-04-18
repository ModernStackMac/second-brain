---
type: stories-sync
workspace: F2
project: LNW
updated: 2026-04-18T15:13:12.789Z
story_count: 4
---

# F2 Stories — LNW

> Auto-synced by story-sync. Do not edit by hand — changes are overwritten.
> Each entry includes ticket link + status + 1-2 sentences of context + parent epic + latest activity.

## Review

- [LNW-192](https://f2strategy.atlassian.net/browse/LNW-192) — Part 4: Visibility Enhancements POC - UI and UX Enablement `Medium` [Status:: Review] [Priority:: Medium] [Updated:: 2026-04-06]
    - **Context:** Parent story for the UI glue layer: activity launcher card, entity selection panel with polished UX, and standard quick action overrides.  Scope: activityLauncherConfigmdt Custom Metadata Type activityLauncher LWC (compact quick-action card) entitySelectionPanel LWC (UX wrapper around hierarchyEntityPicker) Standard Quick Action Overrides (New Task, Event, Case routing) Dependencies: Requires Epic 1 (meetingNoteComp…
    - **Epic: [LNW-112] Client Architecture**

- [LNW-191](https://f2strategy.atlassian.net/browse/LNW-191) — Part 3: Visibility Enhancements POC - Family Level Creation and Assignment `Medium` [Status:: Review] [Priority:: Medium] [Updated:: 2026-04-06]
    - **Context:** Parent story that tracks all work for creating records at any hierarchy level and linking them to multiple entities.  Scope: Extend MeetingRelationc for Tasks & Events FamilyRelationshipService (hierarchy resolution) EntityRelationshipService (junction record CRUD) FamilyRecordCreatorController (Apex controller) hierarchyEntityPicker LWC (shared sub-component) familyRecordCreator LWC (context-aware record creation)…
    - **Epic: [LNW-112] Client Architecture**

- [LNW-190](https://f2strategy.atlassian.net/browse/LNW-190) — Part 2: Visibility Enhancements POC - Aggregated Visibility `Medium` [Status:: Review] [Priority:: Medium] [Updated:: 2026-04-06]
    - **Context:** Users currently have no way to see all activity across a Family in one place — they have to click into each Household, Institution, and Person Account separately.  Epic 2 solves this by aggregating Tasks, Events, Cases, and Meeting Notes from all related entities onto a single Family-level timeline component (familyAggregatedTimeline).  Key Components: Apex: FamilyRelationshipService (shared with Epic 3 — see MSS-74…
    - **Epic: [LNW-112] Client Architecture**

- [LNW-189](https://f2strategy.atlassian.net/browse/LNW-189) — Part 1: Visibility Enhancements POC - Meeting Note Additional Functionality `Medium` [Status:: Review] [Priority:: Medium] [Updated:: 2026-04-06]
    - **Context:** Parent story that tracks all work for unifying Meeting Note creation with Activity linking, attendee management, and multi-entity relations.  Scope: MeetingRelationc junction object (data model) Meeting Note ↔ Activity bidirectional linking (shadow Activities) MeetingNoteService (Apex service layer) MeetingNoteTrigger & Handler (trigger framework) MeetingNoteComposerController (Apex controller) meetingNoteComposer L…
    - **Epic: [LNW-112] Client Architecture**


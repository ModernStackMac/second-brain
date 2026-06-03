# Cartier — Project Context

> Modern Stack Systems direct engagement with Chad Cartier (financial advisor, Cetera-affiliated) on Salesforce email-attachment automation and case timeline enhancements.

> **Routing note:** This project is NOT yet in `project-mapping.md`. The `Meeting Notes/Modern Stack Systems/Cartier/` folder is active — a canonical slug + mapping entry should be added. Provisional slug: `cartier`.

## Overview
Chad Cartier is a financial advisor operating on Salesforce (with Cetera as his back office) who hired MSS for targeted Salesforce improvements. Two workstreams: (1) automatically capturing email attachments and associating them with the right records so he stops manually filing them, and (2) a chronological case activity timeline so a new service team member can see all correspondence and task updates in order. DocuSign documents sent through Cetera's back office don't return as email attachments — deferred to a future phase.

## Key Contacts
- Mac (MSS) — consultant/developer
- Chad Cartier — client (advisor)
- Lori — reviews/approves solution docs with Chad
- Nick — Outlook administrator (forwarding-rule updates)

## What We're Building
- **Email attachment automation** — capture incoming (and investigating outgoing) email attachments and surface them on the email/related records. Uses Einstein Activity Capture for contacts already in Salesforce; Cirrus Insights plugin for external/unknown senders.
- **Case activity timeline** — repurpose Mac's existing custom chatter/activity-timeline LWC onto the case page layout for sequential correspondence/task history.

## Tech & Constraints
- Salesforce, Einstein Activity Capture, Cirrus Insights, Outlook/Office 365 (SSO), email service (unique address for production).
- Chad's EAC was disconnected when a previous team switched to the Cirrus plugin; reconnect via bear icon → Settings → Connected Accounts → Email & Calendar → Office 365 SSO.
- Binary file types (Word/Excel) are harder to decode than PDF/text/CSV/PNG.
- DocuSign-via-back-office attachments stay in Cetera's system (not emailed) — out of scope for now.

## Related Pages
- [[articles/sf-web-console-beta]] — SF dev tooling (incidental)
- [[patterns/email-attachment-capture|Email attachment capture pattern]]

## Project Files
- [[cartier/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/Modern Stack Systems/Cartier/2026-04-30 - Chad & Mac Connect|2026-04-30 — Chad & Mac Connect (requirements)]]
- [[Meeting Notes/Modern Stack Systems/Cartier/2026-05-13 - E-mail Attachment Demo|2026-05-13 — Email Attachment Demo]]
- [[Meeting Notes/_Unmatched/2026-05-14 - Einstein Activity Capture Deployment with Dan|2026-05-14 — EAC Production Deployment (w/ Dan)]] *(filed in _Unmatched — Cartier content, see routing note below)*
- [[Meeting Notes/_Unmatched/2026-05-15 - Salesforce Attachments - Image Ordering and Cirrus Duplicate Cleanup|2026-05-15 — Attachment Ordering + Cirrus Cleanup]] *(filed in _Unmatched — Cartier content, see routing note below)*
- [[Meeting Notes/Modern Stack Systems/Cartier/2026-06-03 - Modern Stack Systems between Mac Nosek and Chad Cartier|2026-06-03 — Cartier Check-in (embedded-image rendering)]]

## Sources
- Meeting Notes/Modern Stack Systems/Cartier/2026-04-30 - Chad & Mac Connect.md
- Meeting Notes/Modern Stack Systems/Cartier/2026-05-13 - E-mail Attachment Demo.md

---
*Last updated: 2026-06-03*

---
type: project-context
project: cartier
status: active
client: Cartier (Chad Cartier, independent financial advisor)
partner: Modern Stack Systems (direct client)
priority: p3
started: 2026-04-30
---

# Cartier — Context

## Overview
Chad Cartier is an independent financial advisor and direct client of Modern Stack Systems. His practice uses Salesforce with Cirrus Insights for email tracking and has a back-office relationship with Cetera. Mac provides Salesforce customization and enhancement work on an as-needed basis, delivering solution design documents for approval before implementation.

## Key Contacts
- **Chad Cartier** — owner/advisor, primary decision-maker
- **Lori** — Chad's team member, reviews and approves solution documents alongside Chad

## Current Scope
Two enhancements scoped for Phase 1:

1. **Email Attachment Automation** — Einstein Activity Capture handles incoming emails from contacts already in Salesforce. All attachment types confirmed working (PDF, Word, Excel, CSV, PNG). Outgoing email attachment capture under investigation. Cirrus Insights retained only for emails from external sources not in the system. Deployment requires Nick (Outlook admin) to update forwarding rules with unique email service address. Target: next few days (as of May 13).
2. **Case Activity Timeline** — chronological activity timeline on case records showing all correspondence and task updates in sequential order. Mac will repurpose the custom chatter/activity timeline LWC he previously built and surface it on the case page layout.

## Key Contacts
- **Chad Cartier** — owner/advisor, primary decision-maker
- **Lori** — Chad's team member, reviews and approves solution documents alongside Chad
- **Nick** — Outlook administrator, handles forwarding rule updates for email service integration

## Deferred
- **DocuSign back-office integration** — Cetera's back office sends DocuSign envelopes through their own system; signed documents stay within the back-office portal (not returned as email attachments). No workaround currently viable. Deferred to future phase.

## Tech Stack
- Salesforce (Sales/Service Cloud)
- Einstein Activity Capture (incoming email + attachment sync — primary)
- Cirrus Insights (email tracking — retained for external-source emails only)
- Cetera back office (DocuSign, document management)
- Custom LWC (activity timeline component — reusable from prior work)

## Engagement Model
- Solution design document → Chad + Lori review → approval → implementation
- No formal SOW; Mac delivers on a per-project basis

## Related Pages
- [[cetera]] — Chad's back-office provider; Mac works on a separate Cetera engagement through High Meadows/F2
- [[modern-stack-systems]] — Mac's practice; Cartier is a direct client

---
*Last updated: 2026-04-30*

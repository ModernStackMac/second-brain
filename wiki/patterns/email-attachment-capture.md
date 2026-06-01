# Pattern: Email Attachment Capture in Salesforce

> Auto-capture email attachments onto the right Salesforce records using Einstein Activity Capture for in-system contacts and Cirrus Insights for external senders.

## Problem
Advisors/reps want emails *and their attachments* automatically filed against the correct Salesforce records, without manual filing. Native email tracking often captures the message but not the attachments, and binary file types (Word/Excel) are harder to handle than PDF/text/CSV/PNG.

## Solution Approach
1. **Einstein Activity Capture (EAC)** for emails to/from contacts already in Salesforce — syncs messages + attachments to client records in real time (Office 365 SSO via the connected-accounts setup).
2. **Cirrus Insights plugin** as a fallback for emails from external senders not in the system.
3. Coordinate with the **Outlook admin** on forwarding rules and a **unique email-service address** for production.
4. Handle **attachment ordering / filtering** (e.g. reverse sort so documents appear before signature images; exclude signature images by filename).

## When To Use vs Alternatives
- Use the EAC + Cirrus split when the contact base is partly external. EAC alone is enough if all correspondents are in-system.
- Outgoing-attachment capture may need extra work beyond EAC — verify per setup.

## Real Examples
- **Cartier (Chad Cartier / Cetera advisor):** incoming attachments (PDF, Word, Excel, CSV, PNG) sync via EAC; Cirrus for external senders; attachment-ordering fix (documents before signature images). DocuSign docs sent through Cetera's back office stay in that system (not emailed) → out of scope. → [[cartier/context]]

## Risks / Mitigations
- **Binary file types** (Office docs) decode poorly through code — rely on platform capture rather than custom parsing.
- **Record bloat:** keep attachments on the email/activity rather than dumping a long list on the client record.
- **Disconnected EAC:** switching to Cirrus can disable EAC — document the reconnect path (bear icon → Settings → Connected Accounts → Office 365 SSO).

## Related Pages
- [[cartier/context]]

---
*Last updated: 2026-06-01*
*Sources: Meeting Notes/Modern Stack Systems/Cartier/2026-04-30, 2026-05-13*

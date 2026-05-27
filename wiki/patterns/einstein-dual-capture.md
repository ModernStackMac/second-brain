# Einstein Dual-Capture Pattern

> Use Einstein Activity Capture for known contacts alongside a secondary email tool (e.g., Cirrus Insights) for external/unknown sources.

## Problem
Organizations need comprehensive email capture in Salesforce but face a gap: Einstein Activity Capture (EAC) only syncs emails tied to contacts already in the system. Emails from unknown senders or external sources are missed.

## Solution
Run both systems in parallel with clear routing rules:

1. **Einstein Activity Capture** — handles all emails from contacts already in Salesforce. Auto-captures incoming attachments (PDF, Word, Excel, CSV, images). Outgoing attachment capture requires separate investigation.
2. **Secondary tool (Cirrus, etc.)** — handles only emails from external sources not yet in the system.
3. **Outlook administrator** updates forwarding rules using a unique email service address per Salesforce environment (staging vs production).

## Advisor Setup (4 steps)
1. Click gear icon in Salesforce
2. Go to Settings → Connected Accounts → Email and Calendar Account
3. Connect Office 365 with SSO
4. System begins syncing automatically

## Considerations
- If EAC eventually covers all use cases, the secondary tool can be fully deprecated
- EAC may be disabled by other plugins (e.g., switching to Cirrus can disconnect EAC — requires re-enablement)
- Outgoing email attachment functionality is not guaranteed — test per environment
- Need coordination with email administrators for forwarding rule updates
- Each production environment needs its own unique email service address
- **Cirrus auto-attach creates duplicates** — if the secondary tool has automatic email attachment enabled, it will duplicate entries already captured by EAC. Resolution: disable auto-attach in the secondary tool, switch to manual/on-command attachment mode (May 2026, Cartier)
- **Attachment display ordering** — signature images (image001.png, etc.) may appear before document attachments. Prefer reverse sort order over filename exclusion (filename exclusion risks blocking legitimate attachments)

## Applied In
- [[cartier]] — Chad Cartier's team using EAC + Cirrus (May 2026)

## Related Pages
- [[agentforce]] — broader Salesforce AI platform
- [[data-cloud]] — related data unification

---
*Created: 2026-05-14 · Source: Meeting Notes/Modern Stack Systems/Cartier/2026-05-13 - E-mail Attachment Demo.md*

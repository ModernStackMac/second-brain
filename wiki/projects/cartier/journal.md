---
type: project-journal
project: cartier
updated: 2026-06-03
---

# Cartier — Project Journal

## Week of June 1, 2026

Cartier check-in (Jun 3, w/ Chad Cartier): embedded-image email rendering issue surfaced; low priority.

**Embedded image rendering:** A March 17 email contains a chart image at the bottom that isn't rendering in Salesforce — the system is detecting an embedded PDF and auto-attaching that instead. Images embedded directly in the email body don't show up. Mac suspects a conflict with the signature-attachment exclusion logic (same mechanism that previously excluded signature images). Chad's preference: if the embedded image can't be rendered inline, log it as an attachment instead. Chad flagged this for awareness — not urgent. Goal remains full Salesforce operation without external email storage.

**Next steps:** Mac to investigate the root cause of the embedded-image rendering issue and report back.

*(Source: [[Meeting Notes/Modern Stack Systems/Cartier/2026-06-03 - Modern Stack Systems between Mac Nosek and Chad Cartier|2026-06-03 — Cartier Check-in]])*

---

## Week of May 12, 2026

Salesforce Attachments — Image Ordering and Cirrus Duplicate Cleanup (May 15): Attachment display ordering fix, signature image filtering, Cirrus duplicate resolution.

**Attachment display issues:** Two problems identified: (1) Signature images (image001.png, image002.png) appearing as attachments, (2) Images showing before actual document attachments. Solution: reverse sort order to show documents first, keep images at bottom. Excluding by filename considered too risky — might block legitimate attachments.

**Cirrus duplicate emails:** Cirrus plugin creating duplicate entries due to automatic email attachment feature still being enabled. Resolution: contact Cirrus support to disable auto-attach, switch to manual/on-command attachment process, maintain existing Cirrus functionality otherwise.

**Technical notes:** Screenshot naming convention standard across Mac systems (image_001.png format). Microsoft Outlook attachment handling causes issues with image files. UTC timezone conversion working properly.

**Next steps:** Mac deploying attachment ordering fix. Mac testing signature image exclusion (low risk given standard naming). Client contacting Cirrus to disable automatic email attachment. Follow-up testing planned within one week.

*(Source: [[Meeting Notes/_Unmatched/2026-05-15 - Salesforce Attachments - Image Ordering and Cirrus Duplicate Cleanup|2026-05-15 — Attachment Ordering + Cirrus Cleanup]])*

---

Einstein Activity Capture Production Deployment (May 14, w/ Dan): Testing verified, production deployment in progress, user authentication walkthrough.

**Testing verified:** Mac showed Dan test results from previous session. System functionality confirmed working. Ready to proceed with production deployment.

**Production deployment steps:** (1) Deploy Einstein Activity Capture system, (2) Generate unique Salesforce emails, (3) Pass emails to Mac for rule updates, (4) System goes live after ~20 minutes for rule propagation.

**User auth walkthrough:** Dan practiced navigation: gear icon (upper right) → Settings → Connected Accounts → Email and Calendar Accounts → New Account → Microsoft logo → SSO authentication. Target: system live by tomorrow at latest.

*(Source: [[Meeting Notes/_Unmatched/2026-05-14 - Einstein Activity Capture Deployment with Dan|2026-05-14 — EAC Production Deployment (w/ Dan)]])*

---

E-mail Attachment Demo (May 13, w/ Chad Cartier): Live demo of Einstein Activity Capture integration with Outlook — incoming attachments working, outgoing TBD, deployment plan outlined.

**Incoming email attachments confirmed working:** Demonstrated real-time sync between Outlook and Salesforce client records via Einstein Activity Capture. All attachment types tested successfully: PDF, Word, Excel, CSV, PNG images. Attachments appear in Salesforce client records automatically.

**Outgoing email attachments need investigation:** Only incoming emails are syncing currently. Outgoing attachment capture requires separate technical review — Mac investigating today.

**Advisor setup process (4 steps):** Click bear icon in Salesforce → Settings → Connected Accounts → Email and Calendar Account → Connect Office 365 with SSO. Chad's account currently disconnected — previous team disabled Einstein Activity Capture when they switched to Cirrus plugin.

**Integration strategy — dual system:** Einstein Activity Capture handles emails from contacts already in Salesforce. Cirrus plugin used only for emails from external sources not in the system. Requires coordination with Nick (Outlook administrator) to update forwarding rules. Uses unique email service address for production environment.

**Deployment plan:** Mac investigating outgoing email attachment functionality → Mac creating email service and providing unique address to Nick for forwarding rule updates → Mac deploys remaining code after Nick updates rules → Mac pings Chad when system ready. Estimated timeline: next few days pending outgoing email resolution.

*(Source: `Meeting Notes/Modern Stack Systems/Cartier/2026-05-13 - E-mail Attachment Demo.md`)*

---

## Week of Apr 27, 2026

Chad & Mac Connect (Apr 30, w/ Chad Cartier): scoping session for two Salesforce enhancements — email attachment automation and case activity timeline.

**Email attachment automation:** Chad demonstrated the current manual process via Cirrus Insights — emails are auto-tracked but attachments require manual filing. Goal is to auto-capture attachments and associate them with the email activity record. Mac flagged potential complexity with Microsoft binary file types (Word, Excel) but confirmed PDFs and text files are straightforward. Chad doesn't need attachments surfaced on the contact/account record — viewing through the email activity is sufficient.

**DocuSign limitation identified:** Chad's Cetera back office sends DocuSign envelopes through their own system. Signed documents never return as email attachments — they stay within the back-office portal. Mac noted this is likely unsolvable from the Salesforce side since the documents don't touch Chad's email. **Deferred to future phase.** Chad will continue using Cirrus manually for now.

**Case activity timeline:** Chad needs a chronological activity timeline on case records for his new service team member. Mac proposed repurposing the custom chatter/activity timeline LWC he previously built and surfacing it on the case page layout. Chad confirmed the use case: sequential view of all correspondence (client, insurance company) and task updates.

**Delivery timeline:** Mac committed to delivering the solution design document as quickly as possible (target within two weeks). Chad pushing to have implementation ready through May. Chad and Lori will review and approve before Mac begins implementation.

**Cetera connection noted:** Chad mentioned his back office is Cetera-related. Mac acknowledged he's working on another Cetera project (separate engagement through High Meadows/F2).

*(Source: `Meeting Notes/Modern Stack Systems/Cartier/2026-04-30 - Chad & Mac Connect.md`)*

---
*Last updated: 2026-04-30*
# Cartier — Journal

## Week of May 11–17, 2026

Email attachment demo. Mac showed Einstein Activity Capture syncing incoming Outlook emails + attachments (PDF, Word, Excel, CSV, PNG all tested) onto Salesforce client records in real time. Outgoing attachments still need investigation. Settled on a dual approach — EAC for contacts already in Salesforce, Cirrus only for external senders not in the system. Chad's EAC was disconnected by a prior team when they moved to Cirrus; documented the 4-step reconnect (bear icon → Settings → Connected Accounts → Office 365 SSO). Requires coordinating with Nick (Outlook admin) on forwarding rules and a unique email-service address for production. *(Source: [[Meeting Notes/Modern Stack Systems/Cartier/2026-05-13 - E-mail Attachment Demo|2026-05-13 — Email Attachment Demo]])*

**Decisions:**
- Use both EAC (in-system contacts) and Cirrus (external senders).
- Reconnect Chad's EAC account; deploy remaining code after Nick updates forwarding rules.

**Open questions:**
- Outgoing email attachment capture — feasible with EAC or needs another mechanism?

## Week of Apr 27 – May 3, 2026

Requirements call. Chad walked the current manual process — emails auto-track via Cirrus Insights but attachments must be filed manually. Goal: auto-capture attachments to the right records without bloating the client record with a huge attachment list (keep them on the email). Mac flagged binary file types (Word/Excel) as the hard part vs PDFs/text. Chad also wants a chronological case activity timeline for a new service hire; Mac proposed repurposing his existing custom chatter/activity-timeline component onto the case page. DocuSign docs from Cetera's back office don't return as email attachments — deferred to a future phase. *(Source: [[Meeting Notes/Modern Stack Systems/Cartier/2026-04-30 - Chad & Mac Connect|2026-04-30 — Chad & Mac Connect]])*

**Decisions:**
- Phase 1 = email attachment automation; DocuSign/back-office attachments deferred.
- Reuse the existing activity-timeline LWC on the case object.
- Deliver a solution design doc (exec summary + implementation/files) for Chad + Lori to approve before build.

**Open questions:**
- Whether attachments should also attach to the source/person record or stay only on the email.

---

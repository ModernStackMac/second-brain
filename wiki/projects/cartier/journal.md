---
type: project-journal
project: cartier
updated: 2026-05-14
---

# Cartier — Project Journal

## Week of May 12, 2026

Einstein Activity Capture Production Deployment (May 14, w/ Dan): Testing verified, production deployment in progress, user authentication walkthrough.

**Testing verified:** Mac showed Dan test results from previous session. System functionality confirmed working. Ready to proceed with production deployment.

**Production deployment steps:** (1) Deploy Einstein Activity Capture system, (2) Generate unique Salesforce emails, (3) Pass emails to Mac for rule updates, (4) System goes live after ~20 minutes for rule propagation.

**User auth walkthrough:** Dan practiced navigation: gear icon (upper right) → Settings → Connected Accounts → Email and Calendar Accounts → New Account → Microsoft logo → SSO authentication. Target: system live by tomorrow at latest.

*(Source: `Meeting Notes/_Unmatched/2026-05-14 - Einstein Activity Capture deployment with Dan.md`)*

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

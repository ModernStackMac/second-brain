# High Meadow Website — Journal

## 2026-04-21 — Icon styling + content updates

From AI Office Hours call (Apr 21).

**Partner logo icons:** Mac changed icons from black and white to colored versions. Speaker 1 prefers original black and white — F2 icon in particular looks poor in color. Team agreed to revert to black and white for consistency and cleaner appearance. Mac to implement.

**Content updates:** Speaker 1 removed family member names (kids' names) that were added for personalization. Jessica handling revised content updates per Slack DM between Catherine, Brian, Mac, and Jessica. Mac also fixing mobile responsiveness issues.

**Decisions:**
- Revert partner logos/icons to black and white (not colored)

---


## 2026-04-20 — Careers feature + Resend.com + Vercel Pro

From a multi-session Fathom recording (primary routed to MAI; cross-referenced here).

**Careers feature implementation:** Instead of record types on leads (which don't exist yet), Speaker 1 decided on a new `type__c` field on Lead with "Candidate" as the value. Area of Interest field also used, source = "web" for all career submissions. Dual action on form submit: create a Lead in Salesforce AND send an email to the careers inbox with the resume attached (resume stays in email, not uploaded to Salesforce).

**Resend.com setup:** Mac identified resend.com as the email service for sending career inquiry notifications. Speaker 1 created the account during the call and generated API keys for both sending (info@) and receiving (careers@) email addresses. Mac needs those API keys as environment variables in the `.env` file.

**Vercel Pro upgrade:** Trial expiring in three days — Speaker 1 upgraded to Pro plan ($20/month) during the call to ensure uninterrupted service.

**Decisions:**
- Careers leads: `type__c = "Candidate"` on Lead (no record types); source = "web"; Area of Interest field populated
- Resume stays in email (via Resend), not attached to the Salesforce lead record
- Resend.com as the email service for website-originated emails (info@ sending, careers@ receiving)
- Vercel upgraded from trial to Pro ($20/month)

---


> Running log of decisions, context, and progress. Newest entries at the top.

---

## 2026-04-18 — Project scaffolded

- Created project folder under `Second Brain/wiki/projects/internal/high-meadow-website/`
- `context.md` placeholder in place — to be filled once scope is locked
- `files/` subfolder ready to receive working assets (mocks, copy, brand material)
- Grouped with sister internal projects (`meadow`, `flex-dash`) under `internal/`

## 2026-04-18 — Brand guide + feedback round 1 ingested
- Dropped HMS Brand Guide v2 into `files/` — palette, typography, voice/tone, imagery direction
- Pulled Website Feedback (dated 2026-04-17) into `context.md` as an actionable punch list
- Scope locked for round 1 of the marketing site
- Partner logos (14 total: Workday, SIKICH, Salesforce, Ridgeway Lane, Quik!, PandaDoc, MeetPerry, K2 Partnering Solutions, F2 Strategy, Covalent, SS&C Black Diamond, Armada, Aidentified, Advintro) — need to be re-uploaded so they land in `files/partners/`. Bryce is also providing official logo files (Orion, Black Diamond priority)
- Waiting on: attorney-drafted Privacy Policy + Terms of Use (Brian), Insights-tab feedback detail (Brian + Sean)

## 2026-04-18 (cont.) — Partner logos + round-2 feedback
- 14 partner logos uploaded + staged: Advintro, Aidentified, Armada, Black Diamond, Covalent Resource Group, F2 Strategy, K2, MeetPerry, PandaDoc, Quik!, Ridgeway Lane, Salesforce, SIKICH, Workday → landing in `files/partners/`
- Round-2 Website Feedback.docx (also dated 2026-04-17) matches round-1 content verbatim — no net-new items to add to the punch list
- Still waiting on Bryce's official logo files (Orion + Black Diamond priority); current blackdiamond.png treated as placeholder

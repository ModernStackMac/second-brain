# Meadow — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

---

## Week of Apr 14–20, 2026

Met once (Apr 14 — ERD Sync). Meadow captured as more complex than website — 40+ additional user stories required. Authentication and data migration needed; using cloud code for first implementation attempt. Timeline significantly longer than website project.

ERD Sync covered HMS website, Meadow status, Visibility POC, and Entity Role Diagram requirements. Website rollout progressing: Sanity CMS implemented, web forms working, Jessica managing social content uploads. Use Sanity CMS for HMS website content management. ERD requirements: build from entity role object in sandbox as junction object connecting accounts, show nested ownership, reference Altrata ownership structure diagrams, include all standard accounts initially.

**Decisions:**
- Use Sanity CMS for HMS website content management
- Build initial ERD using entity role records as junction between account boxes
- Reference Altrata ownership structure diagrams as visual model
- Include all standard accounts in first ERD iteration; portfolio objects may come later

**Open questions:**
- Mac: Create initial ERD iteration from entity role object in sandbox and send for feedback
- Mac: Iterate on ERD based on feedback until satisfactory
- ClickUp license access for Visibility POC (delayed)
- 40+ additional Meadow user stories — prioritization and timeline needed

---

## Week of Apr 7–12, 2026

Met three times (Apr 9 Product Strategy, Apr 9 Website Sync, Apr 10 Office Hours).

Big week — product strategy session locked in the four-phase roadmap and 22 user stories with acceptance criteria. SSO strategy changed: Sanity SSO instead of Entra/MSAL (using @sanity/client SDK). Priority order: Auth > Supabase > Sanity SSO > Vercel > Clockify Sunset > Time Entry Polish.

Website sync confirmed Vercel deployment, Git workflow (PR to main, deploy on merge), and company credit card needed for Supabase/Vercel subscriptions. Savey data migration underway (hierarchy remodel, reparenting script ready). Code is committed to MVP and in testing/cleanup phase before GitHub migration.

Office hours (Apr 10): email migration in progress — Sam and Antonio still on old Glue On addresses, High Meadows accounts being provisioned. Slack workspace transition waiting on HM email accounts. SharePoint structure set up (Clients + Internal folders).

**Decisions:**
- SSO strategy: Sanity SSO via @sanity/client SDK (replaces earlier Entra/MSAL plan)
- Four-phase roadmap confirmed (Cloud DB → Claude Chat → Native Time Entry → Salesforce Pipeline)
- 22 user stories across 6 workstreams documented with acceptance criteria

**Open questions:**
- Company credit card for Supabase/Vercel subscriptions — who handles?
- Supabase migration: blocked on account setup
- Vercel deployment: blocked on account setup
- Sanity SSO: blocked on Sanity project config

---

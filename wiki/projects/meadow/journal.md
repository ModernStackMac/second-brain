# Meadow — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.

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

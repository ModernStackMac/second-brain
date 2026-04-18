# Meadow — Project Journal

> Rolling weekly summaries, decisions, and open questions. Most recent first.
>
> **Note (2026-04-18):** Project folder consolidated to `internal/meadow/` — previously split across `meadow/` and `capacity-planning/`. Website-specific entries going forward should land in `internal/high-meadow-website/journal.md` instead of here. Pre-split history retained below.

---

## 2026-04-18 — Folder restructure

- Consolidated `meadow/` + `capacity-planning/` → `internal/meadow/` (same product, two legacy folders)
- Added `internal/` grouping for all HMS-internal projects; moved `flex-dash/` → `internal/flex-dash/`
- Spun up `internal/high-meadow-website/` as its own project (marketing site is a separate engagement from the SaaS)
- Story-sync `PROJECT_SLUG_MAP` updated to route Linear HM "Capacity Planning" → `internal/meadow/`

---

## Week of Apr 14–20, 2026

Two meetings captured (Apr 14 ERD Sync, Apr 17 Website Review). Meadow tracking: captured as more complex than website — 40+ additional user stories required. Authentication and data migration needed; using cloud code for first implementation attempt. Timeline significantly longer than website project.

ERD Sync (Apr 14) covered HMS website, Meadow status, Visibility POC, and Entity Role Diagram requirements. Website rollout progressing: Sanity CMS implemented, web forms working, Jessica managing social content uploads. ERD requirements: build from entity role object in sandbox as junction object connecting accounts, show nested ownership, reference Altrata ownership structure diagrams, include all standard accounts initially.

Website Review (Apr 17, w/ Brian + CSO) was a pre-launch walkthrough of the landing page, Services page, and About section. Mac dropped at 24 minutes; Brian and CSO finished, with all remaining feedback to be consolidated into a single notes doc for Mac to implement from. Lots of copy and layout tightening: Insights tab stays as the content hub but its labels now mirror the home page (Activity/News, Thought Leadership), hero value prop splits into two sentences and drops "purpose-built", engagement count updates to 250+, Services tiles lose the 1–6 numbering and per-tile Learn More buttons in favor of a single centered "Discuss Your Needs" CTA, top row tiles reorder to Business Transformation / AI Design / Data Strategy & Analytics. About page: "Get in Touch" → "Engage" globally, use sales@ (not info@), innovation form says "indicate interest" rather than "apply", and "advisors" gets replaced with "team is comprised of individuals that have held operating roles" to avoid the RIA-industry conflict. Partnerships section needs Enforge removed and Black Diamond, Practify, Orion added — hard gate on go-live until Bryce confirms. Phase 1 launch keeps article tiles linking directly to source publications; custom write-ups via the console stay deferred to Phase 2/3. LinkedIn RIA posts too substantive to embed — expand into full articles and pitch to industry publications (e.g., Wealth Solutions Report) as CSO thought leadership.

**Decisions:**
- Use Sanity CMS for HMS website content management
- Build initial ERD using entity role records as junction between account boxes
- Reference Altrata ownership structure diagrams as visual model
- Include all standard accounts in first ERD iteration; portfolio objects may come later
- Website Phase 1: article tiles link directly to source publication; custom body-text write-ups deferred to Phase 2/3
- Insights tab stays as the content hub; categorization (Activity/News, Thought Leadership) mirrors the home page
- Services page: remove tile numbering and per-tile Learn More buttons; single centered "Discuss Your Needs" CTA
- Services tiles top row: Business Transformation, AI Design, Data Strategy & Analytics
- About page copy: "Get in Touch" → "Engage" globally; sales@ email (not info@); "indicate interest" for innovation form
- Replace "advisors" with "team is comprised of individuals that have held operating roles" to avoid RIA-industry conflict
- Partnerships: remove Enforge; add Black Diamond, Practify, Orion — hard gate on go-live until Bryce confirms
- LinkedIn RIA posts expanded into full articles and pitched to industry publications as thought leadership (not direct LinkedIn links)
- ~1 week of website updates remaining before go-live

**Open questions:**
- Mac: Create initial ERD iteration from entity role object in sandbox and send for feedback
- Mac: Iterate on ERD based on feedback until satisfactory
- ClickUp license access for Visibility POC (delayed)
- 40+ additional Meadow user stories — prioritization and timeline needed
- CSO (Sean): Send Mac the consolidated doc covering all copy/design changes from the full Apr 17 review
- Bryce: Confirm final partnerships list and provide PNGs for Black Diamond, Practify, Orion before go-live
- Aisha: Send Mac the 4–5 LinkedIn RIA posts shared with Brian so he can evaluate packaging vs. linking

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

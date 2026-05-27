# Meadow — Project Journal

## Week of May 25, 2026

Meadow Sync (May 27): Phased rollout decision, product sales interest, staffing updates, quick integration model.

**Phased rollout replaces full rollout:** High risk rolling company-wide next week without more testing. Agreed on phased approach: beta group (Mac, Chloe, June) for one week, everyone else stays on Clockify. Mac volunteering as backup (already logs time in spreadsheet). Brady to run user testing as manager and admin before Friday. QA person interview scheduled (experienced UAT, potential hire split across product and projects). Post-beta: org-wide rollout after confirming stability. Linear adopted for bug tracking and feature requests.

**Unexpected sales interest:** External inquiries for Meadow — interest in time and capacity planning features. Missing features before external sales: company holidays for different countries, total capacity calculations, professional services scheduling. Longer-term: Salesforce connection (v2), pipeline planning (pull opps at certain stage to convert to projects), eventually replace pipeline reporting.

**Staffing & project timing:** [[mai|MAI]] going live June 16 (per MAI DSU — Meadow discussion referenced June 8, likely stale). Two weeks full-time support then half-time — frees Mac's availability. [[loftware|Loftware]] decision expected tomorrow. Quick integration deployment model: 30 hours flat bill per engagement, tiger team approach (front-end conversation + back-end implementation), Mac likely involved in multiple concurrent 3-hour/week projects. F2 New York unblocked after diversification concerns — leading with data expertise instead of CRM-first.

**Decisions:**
- Phased Meadow rollout: beta group (Mac, Chloe, June) first, then org-wide
- Linear adopted for bug tracking and feature requests
- Quick integration deployment model: 30 hrs flat bill per engagement

*(Source: `Meeting Notes/High Meadows/HMS-Capacity-Planning/2026-05-27 - Meadow.md`)*

---

## Week of May 11, 2026

Meadow UAT Kickoff (May 13, Mac solo): User acceptance testing session — walkthrough of admin/user/manager test scripts, capacity heat map, bugs identified, feedback process established.

**UAT structure:** Each test script has 3 tabs representing different user experiences: User (basic time tracking), Admin (full system access), Manager/PM (project oversight). Assignments: Brian on Admin, Aisha & Chloe on User and Manager/PM. Fourth tab being created for logging feature gaps and unlisted feedback.

**Admin features demonstrated:** Dashboard showing capacity overview — 37 unforecasted projects, weekly hours tracking, 6-week capacity heat map. Staffing grid with slider control for week ranges, toggle between "by person" and "by project" views. Auto-fill feature uses average run rates for forecasting. Utilization tracking (e.g., Aisha showing 150% capacity).

**Bug found:** Task selection issues when adding projects to people — "Show all tasks" displays everything instead of project-specific tasks. Should allow project and task selection together.

**User experience:** Auth via Microsoft SSO or email-only for testers. Time entry with copy-from-last-week functionality. Project assignments auto-load week to week. Dashboard shows time logged vs projected hours, active projects, utilization, export with preconfigured templates.

**Feature request:** Date range allocation with custom hours (not just averages from auto-fill).

**Timeline:** UAT completion deadline Friday May 16 or Monday May 19 at latest. Mac OOO starting Wednesday May 21 — need feedback consolidated before departure. Test alongside Clockify for comparison. Master feedback sheet to consolidate all user input.

No new Mac commitments — UAT coordination items are team-level tasks.

*(Source: `Meeting Notes/High Meadows/HMS-Capacity-Planning/2026-05-13 - Meadow User Testing.md`)*

---

Meadow Product Demo & Feedback (May 14, internal): Live product walkthrough with UAT feedback — UI accessibility issues, missing SSO provider, scroll bar bug.

**Demo walkthrough:** Capacity heat map with executive actions and forecasting. Staffing page displays by project or person with utilization metrics. Resource management with filtering and slider controls. Integration with Clockify for timesheet pulling during transition period.

**Tech stack confirmed:** Next.js, TypeScript, Supabase. 3 UAT testers currently piloting.

**UI feedback:** Too much green — contrast issues flagged for accessibility. Color differentiation between elements not distinct enough despite visible differences.

**Missing feature:** Google SSO not implemented — client preference is Office 365 (Microsoft SSO already supported, Google not yet).

**Bug — scroll bar disappears:** Meeting notes page loses scroll bar after editing/saving, trapping users on the page. Likely CSS issue. Will log as bug — fix should implement automatic reload after save.

**HMU update:** HMU launched this week with positive initial feedback. Quick feature at 100% focus this week to reach finish line.

No new Mac commitments — bug is team-level, SSO is product backlog.

*(Source: `Meeting Notes/_Unmatched/2026-05-14 - New Note.md`)*

---

Meadow Internal Sync (May 11, Mac solo): Database consolidation complete, entering user testing phase, EO/EOA membership exploration.

**Database consolidation done:** Deleted one organization, moved project to correct bucket. Full test script completed. App is ready for user testing (not just cloud/dev testing anymore).

**User testing setup requirements:** (1) Defect repository — spreadsheet is acceptable for tracking bugs. (2) Three access levels needed: admin, manager, user. (3) Test data to be purged after testing is complete.

**Technical notes:** Name formatting script runs on first-time logins (Aisha's name currently lowercase with periods — will auto-correct). React app may need cache refresh if changes don't stick. Capacity field is now changeable (no longer defaulted to 40 hours). User deactivation toggle needed for handling inactive assignment records.

**EO/EOA membership exploration:** Mac exploring Entrepreneurs' Organization membership. EOA (Accelerator) has $250K revenue minimum vs EO's $1M. EOA annual fee $3,500 (EO is $15K first year, $8K ongoing). EO Chicago chapter: 130 members, HQ in Bucktown with co-working space, 5 conference rooms, 24/7 access, weekly events, mentorship program with YPO. Application process: discovery call (done) → attend event → test drive (mock forum) → application with CPA revenue verification → annual payment. Mac's current revenue: $175K (targeting $600K by year-end, $55K last month). Plans to reach out once T12 hits $250K — potentially next month.

**Personal:** Mac OOO next week for Barcelona trip (mom's 60th birthday) with wife.

No new commitments identified — user testing setup items are team-level tasks, not explicit Mac commitments with firm verbs.

*(Source: `Meeting Notes/High Meadows/Internal/2026-05-11 - Meadow.md`)*

---


## Week of Apr 28, 2026

**June 1 go-live confirmed:** The custom "Meadow" time-entry system (built for High Meadow Solutions) will go live on June 1. It replaces the current Google Sheets-based process with an LWC-powered Salesforce app for all consultants.

**GitHub repo for Claude skills:** Andrew setting up a GitHub repo for Claude skills and granting Mac access — supports the AI tooling layer around Meadow and other internal projects.

*(Source: `Meeting Notes/Modern Stack Systems/2026-04-30 - Impromptu Call.md`)*

---


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

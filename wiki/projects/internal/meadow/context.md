# Meadow — Project Context

> High Meadows internal capacity planning and time tracking SaaS. Cloud migration, auth hardening, Sanity SSO, AI chat interface roadmap.
>
> **Note (2026-04-18):** Consolidated under `internal/` grouping. Previously split across `meadow/` and `capacity-planning/` — same product, two folders. Linear HM project name is "Capacity Planning"; canonical folder is `internal/meadow/`. Public-facing website is a separate project → `internal/high-meadow-website/`.

## Client
- **Company:** High Meadows (internal product)
- **Product:** Meadow (capacity planning & time tracking)
- **Team:** Aisha (HMS), Brian (Admin UAT), Chloe (User/Manager UAT), Mac (MSS — lead)
- **Priority:** Active alongside MAI; Flex-Dash paused to keep capacity here
- **Status:** UAT in progress (kicked off 2026-05-13). DB consolidation complete. UAT deadline: May 16-19. June 1 go-live target. Replaces Clockify for time tracking + adds project management. Pre-configured with Notion integration.

## What We're Building
- Cloud migration from local SQLite to Supabase PostgreSQL + Vercel hosting
- Auth hardening with route-level permission enforcement
- Sanity SSO (replacing email-only login)
- Four-phase roadmap beyond cloud migration

## Tech Stack
- **Backend:** Node.js (ES modules), Express
- **Frontend:** Vite, HTML/CSS
- **Database:** SQLite (current) → Supabase PostgreSQL (target)
- **Hosting:** Vercel (target)
- **Integrations:** Clockify API (time entry sync, being sunset), Notion API (doc sync)
- **Auth:** Sanity SSO via @sanity/client SDK (replacing Entra/MSAL decision)

## Database Schema (11 tables)
Settings, Clients, People, Projects, ProjectTasks, TimeEntries, Projections, ActionItems, NotionSyncLog, ExportTemplates, ProjectResources

## Roadmap Phases
1. **Cloud Database & Sharing** — Supabase live, auth hardening, Sanity SSO, Vercel deployment, multi-user access controls
2. **Claude Chat Interface** — natural language queries over time/capacity data ("What capacity do we have next week?")
3. **Custom Time Entry** — Clockify replacement with native calendar-based time logging
4. **Salesforce Pipeline Integration** — opportunity-based project resourcing, sales pipeline → capacity planning

## User Story Workstreams (22 stories, priority order)
1. Auth Hardening — requireAuth on all /api/hms/* routes; requireAdmin for admin-only routes; self-scoped access for non-admin users
2. Supabase Migration — schema migration, data access layer rewrite, RLS policies, environment variables
3. Sanity SSO — token validation, sign-in button, auto-provisioning of new users, session management
4. Vercel Deployment — static build, backend hosting decision, cron jobs, CORS/domain config
5. Clockify Sunset — admin toggle, legacy fields nullable, source field enforcement
6. Time Entry Polish — collision detection on edit, merge/block dialog

## Testing Requirements (as of 2026-05-11)
- Defect repository (spreadsheet acceptable)
- Three access levels required: admin, manager, user
- Test data purge after testing complete
- Name formatting script runs on first-time login (auto-corrects casing)
- Capacity field now editable (no longer defaulted to 40 hours)
- User deactivation toggle needed for inactive assignment records
- React app may need cache refresh if changes don't stick

## Related Pages
- [[high-meadows]] — parent org
- [[high-meadows-mai]] — sister product
- [[high-meadow-website]] — sister engagement (marketing site)
- [[flex-dash]] — sister internal tool (paused)
- [[supabase]] — target database platform
- [[claude-ai]] — Phase 2 chat interface

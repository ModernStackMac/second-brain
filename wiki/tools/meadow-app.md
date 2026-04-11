# Meadow App
> High Meadows' internal capacity planning and resource scheduling tool built with Node.js, Express, Vite, and SQLite (migrating to Supabase).

## Overview
Meadow is HMS's custom application for tracking capacity, allocating resources, and managing time across projects and clients. It provides visibility into people, projects, tasks, and forecasted hours — critical for understanding bandwidth and managing project delivery.

The application is at an inflection point: moving from SQLite to Supabase (cloud-native PostgreSQL), adding authentication hardening, and planning a series of enhancements (SSO, Claude chat interface, time entry UI, Salesforce pipeline integration). The tech stack is modern and modular (Node.js ES modules, Express, Vite), with clear separation between database, API, and frontend.

## Key Details

**Database Schema (11 Tables):**
- Core: Settings, Clients, People, Projects, ProjectTasks
- Time tracking: TimeEntries, Projections, ActionItems
- Integration: NotionSyncLog, ExportTemplates
- Resources: ProjectResources

**Key Relationships:**
- Projects belong to Clients
- ProjectTasks belong to Projects
- TimeEntries reference People, Projects, and ProjectTasks
- Projections forecast People/Projects
- ProjectResources track People assignments to Projects

**Current Integrations:**
- Clockify API (time sync — planned for sunset)
- Notion API (data sync)
- Microsoft Entra ID (SSO planned)

**Technology Stack:**
- Backend: Node.js (ES modules), Express
- Frontend: Vite
- Database: SQLite (actively migrating to Supabase)
- Hosting: Vercel (confirmed)

**User Stories** (22 across 6 workstreams — see [[hms-capacity-planning]] for full detail):
1. Auth hardening (P1) — requireAuth/requireAdmin on all routes, self-scoped data for non-admins
2. Supabase migration (P2) — schema migration script, data access layer rewrite, RLS policies, data export/import
3. Sanity SSO (P3) — @sanity/client token validation, auto-provisioning, session management
4. Vercel deployment (P4) — static frontend, backend hosting decision, scheduled job migration, CORS
5. Clockify sunset (P5) — admin toggle, disabled banner, legacy field cleanup, source enforcement
6. Time entry polish (P6) — collision detection, merge-or-block dialog

**Four-Phase Roadmap:**
1. Cloud database + user sharing (Supabase migration, auth)
2. Claude chat interface (AI-powered capacity insights)
3. Custom time entry UI (replace Clockify)
4. Salesforce pipeline integration (link capacity to opportunities)

**Infrastructure:**
- Supabase instance under existing HMS org/subscription
- Migration blocked on account setup (company credit card needed for Supabase provisioning)

**Repository Migration:**
- Moving from personal GitHub to company repo after quality review

## Related Pages
- [[hms-capacity-planning]] — project overview and team context
- [[high-meadows]] — parent organization
- [[supabase]] — database migration target
- [[claude-ai]] — Phase 2 integration (chat interface)

## Sources
- raw/projects/hms-capacity-planning/meadow-database-schema.md
- raw/projects/hms-capacity-planning/meadow-open-items.md
- raw/projects/hms-capacity-planning/schema.txt
- raw/projects/hms-capacity-planning/user-stories.md
- Meeting Notes/High Meadows/Internal/2026-04-09 - HMS Product Strategy.md
- Meeting Notes/High Meadows/Internal/2026-04-09 - Website Sync.md
- Meeting Notes/Modern Stack Systems/2026-04-10 - The Meeting of the Minds - Peer Sync.md

---
*Last updated: 2026-04-10*

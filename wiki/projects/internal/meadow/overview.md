---
aliases: [hms-capacity-planning, capacity-planning, meadow-app]
type: project-overview
project: meadow
---

# High Meadows Meadow — Engagement Overview

> Internal capacity planning and time tracking SaaS — cloud migration, auth hardening, and AI-enhanced query interface.

## Overview
Meadow is High Meadows' internal capacity planning and time tracking application. The product is exiting MVP and moving into a cloud-based, multi-user deployment with hardened security and third-party service integrations. The technical stack is modern (Node.js ES modules, Express, Vite) with a current SQLite database migrating to cloud-hosted PostgreSQL. The roadmap prioritizes security hardening, cloud infrastructure, and AI-powered natural language queries over time and capacity data.

## Current State

**Database Schema** (11 tables)
- Settings, Clients, People, Projects, ProjectTasks, TimeEntries, Projections, ActionItems, NotionSyncLog, ExportTemplates, ProjectResources

**Tech Stack**
- Backend: Node.js (ES modules), Express
- Frontend: Vite, HTML/CSS
- Database: SQLite (production) → Supabase PostgreSQL (target)
- Integrations: Clockify API (time entry source), Notion API (documentation sync)
- Deployment target: Vercel

## User Stories (22 across 6 workstreams)

Priority order: Auth > Supabase > Sanity SSO > Vercel > Clockify Sunset > Time Entry Polish

**1. Auth Hardening** (P1 — unblocked)
- Apply requireAuth to all /api/hms/* routes except /auth/login and /health
- Apply requireAdmin to admin-only routes (Settings, People, Projects, Clients, Tasks, Projections, ActionItems, sync triggers, export templates, project resources, Notion sync log)
- Self-scoped time entries for non-admin users (filter by person_id)
- Self-scoped projections for non-admin users
- Self-scoped project resources for non-admin users

**2. Supabase Migration** (P2 — blocked on account)
- Schema migration script: SQLite → PostgreSQL (TEXT PKs → UUID with gen_random_uuid(), INTEGER booleans → BOOLEAN, idempotent script, all 11 tables)
- Rewrite data access layer: replace all db.prepare().run()/.get()/.all() with supabase.from().select()/.insert()/.update()/.delete()
- Environment variable migration: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
- Row-Level Security policies: TimeEntries, Projections, ProjectResources filtered by person_id for non-admin; admin bypasses RLS
- Data export/import: all 11 tables, referential integrity, row count verification, spot-check 5+ records/table

**3. Sanity SSO** (P3 — blocked on Sanity project config)
- Backend: validate Sanity user tokens via @sanity/client SDK, exchange for HMS JWT, match email to People record
- Frontend: "Sign in with Sanity" button, remove old email-only login
- Auto-provisioning: new Sanity users auto-create People record (display_name, 40 hrs/week default, is_active=1, is_admin=0), toggle on/off via Settings
- Session management: Sanity tokens stored/revalidated, configurable JWT expiry, graceful logout

**4. Vercel Deployment** (P4 — blocked on account)
- Frontend: Vite static site build + deploy, environment vars for API URL at build time
- Backend: hosting decision documented (Vercel Serverless vs VPS/Railway/Fly.io)
- Scheduled jobs: migrate setTimeout loops to Vercel Cron Jobs, Supabase Edge Functions, or external scheduler
- CORS and domain config: frontend-only origin, custom domain + SSL

**5. Clockify Sunset** (P5 — product decision)
- Admin toggle to enable/disable Clockify sync at runtime (persists across restarts)
- Clockify disabled banner on Settings page with last-disabled date
- Legacy Clockify fields made nullable and documented as dormant
- Source field enforcement: new entries default to 'manual', only sync sets 'clockify'

**6. Time Entry Polish** (P6 — polish)
- Detect project+task collision on edit with warning dialog
- Merge or block: user chooses "Merge entries" or "Cancel" (merge is visual, not destructive)

## Four-Phase Roadmap (Strategy Session 2026-04-09)

**Phase 1: Cloud Database & Sharing**
- Supabase PostgreSQL live
- Auth hardening + Entra SSO
- Vercel deployment
- Multi-user access controls

**Phase 2: Claude Chat Interface**
- Natural language query interface for time and capacity data
- "What capacity do we have next week?" → automatic answer
- Powered by Claude Sonnet

**Phase 3: Custom Time Entry**
- Clockify replacement with native Meadow time entry
- Calendar-based time logging
- Integration with project/task data

**Phase 4: Salesforce Pipeline Integration**
- Opportunity-based project resourcing
- Sales pipeline visibility to capacity planning
- Bid/estimate resourcing

## Website & Infrastructure (2026-04-09 Sync)

**Hosting & CI/CD**
- Vercel deployment confirmed
- Git workflow: PR to main, deploy after merge
- Vendor distribution list created for third-party integrations
- Company credit card needed for subscription services (Supabase, Vercel, etc.)

**Data Migration**
- Savey data migration underway (data hierarchy remodel, reparenting script ready)
- Post-migration: quality review before company GitHub move

**Current Status**
- MVP committed and in testing/cleanup phase
- Ready for quality review before internal GitHub migration

## AI & Tools

**Claude Integration**
- Current allocation: Claude Sonnet at 2% capacity
- Phase 2 roadmap depends on expanded Claude integration for chat queries
- Mythos AI discussed as alternative for specific capabilities

## IT & Onboarding (Office Hours 2026-04-10)
- Email migration: several team members (Sam, Antonio) still on Glue On addresses — High Meadows accounts being created
- Slack workspace accounts to be switched once HM emails provisioned
- SharePoint document management: Clients + Internal folder structure, OneDrive for personal working files
- Notion adoption recognized as ongoing challenge; office hours is venue for workflow questions

## Related Pages
- [[mai]] — sister internal product (insurance case management)
- [[flex-dash]] — sister internal tool (paused for MAI priority)
- [[high-meadow-website]] — external brand/lead-gen site

## Sources
- raw/projects/hms-capacity-planning/meadow-database-schema.md
- raw/projects/hms-capacity-planning/meadow-open-items.md
- raw/projects/hms-capacity-planning/schema.txt
- raw/projects/hms-capacity-planning/user-stories.md
- Meeting Notes/High Meadows/Internal/2026-04-09 - HMS Product Strategy.md
- Meeting Notes/High Meadows/Internal/2026-04-09 - Website Sync.md
- Meeting Notes/High Meadows/Internal/2026-04-10 - HMS Office Hours.md
- Meeting Notes/Modern Stack Systems/2026-04-10 - The Meeting of the Minds - Peer Sync.md

---
*Last updated: 2026-04-10 · Merged from clients/hms-capacity-planning.md on 2026-04-18*

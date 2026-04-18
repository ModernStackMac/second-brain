---
type: stories-sync
workspace: HM
project: Capacity Planning
updated: 2026-04-18T15:13:12.783Z
story_count: 25
---

# HM Stories — Capacity Planning

> Auto-synced by story-sync. Do not edit by hand — changes are overwritten.
> Each entry includes ticket link + status + 1-2 sentences of context + parent epic + latest activity.

## In Progress

- [IP-114](https://linear.app/high-meadow-solutions/issue/IP-114/project-setup) — Project Setup `No priority` [Status:: In Progress] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** ~~Get Repo in Vercel~~ ~~Set up Supabase~~ ~~Create User Stories~~ ~~update twitter URL ~~~~https://x. com/highmeadowcrm~~

## Backlog

- [IP-139](https://linear.app/high-meadow-solutions/issue/IP-139/merge-or-block-collision) — Merge or block collision `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a user, I want to choose whether to merge the entries or cancel the change when a collision is detected, So that I stay in control of my time data.  Acceptance Criteria: Warning dialog offers two options: "Merge entries" or "Cancel" "Merge" combines the hours into the existing row and removes the duplicate "Cancel" reverts the project/task change (no save) Merged entries retain all individual time entry records i…

- [IP-138](https://linear.app/high-meadow-solutions/issue/IP-138/detect-projecttask-collision-on-edit) — Detect project+task collision on edit `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a user, I want the app to warn me if I change a time entry's project or task to a combination that already exists as another row, So that I don't accidentally create duplicate entries that merge on reload.  Acceptance Criteria: On project or task change, the frontend checks if the new project+task combination already exists in the current view If a collision is detected, a warning is shown before saving Warning c…

- [IP-137](https://linear.app/high-meadow-solutions/issue/IP-137/source-field-enforcement) — Source field enforcement `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want all new time entries created in Meadow to have source = 'manual', So that the system clearly distinguishes between legacy Clockify data and native entries.  Acceptance Criteria: POST /api/hms/time-entries defaults source to 'manual' when created through the UI source = 'clockify' is only set by the Clockify sync process Existing 'clockify' entries are not modified

- [IP-136](https://linear.app/high-meadow-solutions/issue/IP-136/legacy-clockify-field-cleanup) — Legacy Clockify field cleanup `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want Clockify-specific fields (clockifyuserid, clockifyprojectid, clockifytaskid, clockifyentryid) made nullable and documented as dormant, So that the schema is clean and new records don't require Clockify data.  Acceptance Criteria: All Clockify fields are nullable in the schema (already nullable in SQLite, confirm in Supabase migration) New records created via Meadow UI do not populate Clockify…

- [IP-135](https://linear.app/high-meadow-solutions/issue/IP-135/clockify-disabled-banner) — Clockify disabled banner `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As an administrator, I want a visible banner on the Settings page when Clockify sync is disabled, So that it's obvious the integration is off and no data is syncing.  Acceptance Criteria: Banner displays "Clockify sync is disabled" when the toggle is off Banner is not shown when sync is active Banner includes the date sync was last disabled (if tracked)

- [IP-134](https://linear.app/high-meadow-solutions/issue/IP-134/admin-toggle-to-disable-clockify-sync) — Admin toggle to disable Clockify sync `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As an administrator, I want a toggle in Settings to fully enable/disable Clockify sync at runtime, So that I can turn off the integration without restarting the server.  Acceptance Criteria: Settings page includes a clear on/off toggle for Clockify sync Toggling off immediately stops the sync scheduler (no server restart needed) Toggling on resumes the sync scheduler Current state persists across server restarts (st…

- [IP-133](https://linear.app/high-meadow-solutions/issue/IP-133/cors-and-domain-configuration) — CORS and domain configuration `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want CORS properly configured between the frontend domain and the API, So that the frontend can make API calls without browser security errors.  Acceptance Criteria: CORS allows requests from the frontend domain only (not wildcard) Custom domain configured with DNS and SSL (if applicable) All existing functionality works end-to-end through the hosted URLs

- [IP-132](https://linear.app/high-meadow-solutions/issue/IP-132/scheduled-job-migration) — Scheduled job migration `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want Clockify and Notion sync schedulers migrated from setTimeout loops to a cloud-compatible scheduler, So that background syncs continue to run in the hosted environment.  Acceptance Criteria: setTimeout-based sync loops removed Replacement scheduler chosen: Vercel Cron Jobs, Supabase Edge Functions with pgcron, or external scheduler Clockify sync runs on its configured interval Notion sync runs…

- [IP-131](https://linear.app/high-meadow-solutions/issue/IP-131/backend-hosting-decision-and-deployment) — Backend hosting decision and deployment `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want the Express backend deployed to a cloud host, So that the API is accessible from the frontend.  Acceptance Criteria: Decision documented: Vercel Serverless Functions vs.  VPS/Railway/Fly.

- [IP-130](https://linear.app/high-meadow-solutions/issue/IP-130/frontend-deployment-vite-static-site) — Frontend deployment (Vite static site) `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want the Vite frontend built and deployed as a static site on Vercel, So that users can access Meadow via a public URL.  Acceptance Criteria: produces a deployable dist/ folder Vercel project configured for static site deployment Frontend is accessible via a Vercel URL (or custom domain) Environment variables for API URL are injected at build time

- [IP-129](https://linear.app/high-meadow-solutions/issue/IP-129/token-refresh-and-session-management) — Token refresh and session management `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a user, I want my session to stay active without re-authenticating constantly, So that I'm not interrupted during time entry or planning workflows.  Acceptance Criteria: Entra tokens are refreshed silently before expiry HMS JWT expiry aligns with Entra token lifetime (or is configurable) Expired sessions redirect to Entra login gracefully (no error pages) Logout clears both HMS JWT and Entra session

- [IP-128](https://linear.app/high-meadow-solutions/issue/IP-128/auto-provisioning-for-new-entra-users) — Auto-provisioning for new Entra users `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a system administrator, I want new Entra users to be automatically provisioned in Meadow if their email doesn't match an existing People record, So that I don't have to manually create accounts for every team member.  Acceptance Criteria: If Entra user's email matches an existing People record, login proceeds normally If no match, a new People record is created with displayname from Entra profile, default capacit…

- [IP-127](https://linear.app/high-meadow-solutions/issue/IP-127/msal-integration-frontend) — MSAL integration (frontend) `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a user, I want a "Sign in with Microsoft" button on the login page, So that I can authenticate with my corporate credentials in one click.  Acceptance Criteria: Login page displays "Sign in with Microsoft" button Clicking the button initiates the OIDC/OAuth2 redirect flow After successful Entra auth, user is redirected back and logged into Meadow Old email-only login is removed or hidden behind a fallback flag

- [IP-126](https://linear.app/high-meadow-solutions/issue/IP-126/msal-integration-backend) — MSAL integration (backend) `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want the backend to validate Microsoft Entra ID tokens via MSAL, So that users authenticate through their corporate Microsoft account.  Acceptance Criteria: MSAL library installed and configured with Entra app registration details Backend validates Entra ID tokens on the /auth/login endpoint Valid Entra token is exchanged for an HMS JWT (existing JWT flow preserved) Entra user's email is matched ag…

- [IP-125](https://linear.app/high-meadow-solutions/issue/IP-125/data-export-and-import-sqlite-to-supabase) — Data export and import (SQLite to Supabase) `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a system administrator, I want existing SQLite data exported and imported into Supabase, So that no historical time entries, projections, or configuration is lost during migration.  Acceptance Criteria: All rows from all 11 tables exported from SQLite Data imported into Supabase with referential integrity intact Row counts match pre- and post-migration Spot-check of 5+ records per table confirms data accuracy @se…
    - **Latest (Sean Arnold, 2026-04-10): Probably not?**

- [IP-124](https://linear.app/high-meadow-solutions/issue/IP-124/row-level-security-policies) — Row-Level Security policies `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a system administrator, I want RLS policies on Supabase tables that isolate non-admin users to their own data, So that data access control is enforced at the database level (defense in depth).  Acceptance Criteria: TimeEntries: non-admin users can only SELECT/INSERT/UPDATE/DELETE rows where personid matches their auth ID Projections: non-admin users can only SELECT rows where personid matches their auth ID Projec…

- [IP-123](https://linear.app/high-meadow-solutions/issue/IP-123/environment-variable-migration) — Environment variable migration `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want . env updated with Supabase connection details, So that the app connects to the hosted database.  Acceptance Criteria: .

- [IP-122](https://linear.app/high-meadow-solutions/issue/IP-122/rewrite-data-access-layer-to-supabase-client) — Rewrite data access layer to Supabase client `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want all db. prepare(). run() / .

- [IP-121](https://linear.app/high-meadow-solutions/issue/IP-121/schema-migration-script-sqlite-to-postgresql) — Schema migration script (SQLite to PostgreSQL) `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a developer, I want a migration script that converts all 11 SQLite table definitions to PostgreSQL syntax, So that the database schema can be created in Supabase without manual SQL translation.  Acceptance Criteria: TEXT PRIMARY KEY fields convert to UUID with genrandomuuid() default INTEGER boolean fields (isactive, iscomplete, isdefault, isadmin) convert to BOOLEAN All foreign key relationships are preserved Sc…

- [IP-120](https://linear.app/high-meadow-solutions/issue/IP-120/self-scoped-project-resources-for-non-admin-users) — Self-scoped project resources for non-admin users `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a team member (non-admin), I want to only see project resource assignments that include me, So that I only see projects I'm assigned to.  Acceptance Criteria: GET /api/hms/project-resources filters by req. user.

- [IP-119](https://linear.app/high-meadow-solutions/issue/IP-119/self-scoped-projections-for-non-admin-users) — Self-scoped projections for non-admin users `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a team member (non-admin), I want to only see my own capacity projections, So that my projected hours are private to me and administrators.  Acceptance Criteria: GET /api/hms/projections filters by req. user.

- [IP-118](https://linear.app/high-meadow-solutions/issue/IP-118/self-scoped-time-entries-for-non-admin-users) — Self-scoped time entries for non-admin users `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a team member (non-admin), I want to only see and modify my own time entries, So that I cannot accidentally view or edit another person's logged hours.  Acceptance Criteria: GET /api/hms/time-entries filters by req. user.

- [IP-117](https://linear.app/high-meadow-solutions/issue/IP-117/apply-requireadmin-to-admin-only-routes) — Apply requireAdmin to admin-only routes `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a system administrator, I want admin-only routes restricted to users with isadmin = 1, So that regular users cannot modify system configuration or other users' data.  Acceptance Criteria: Settings CRUD returns 403 for non-admin users People CRUD returns 403 for non-admin users Projects CRUD returns 403 for non-admin users Clients CRUD returns 403 for non-admin users Tasks CRUD returns 403 for non-admin users Proj…

- [IP-116](https://linear.app/high-meadow-solutions/issue/IP-116/apply-requireauth-to-all-protected-routes) — Apply requireAuth to all protected routes `No priority` [Status:: Backlog] [Priority:: No priority] [Updated:: 2026-04-10]
    - **Context:** As a system administrator, I want all /api/hms/\ routes (except /auth/login and /health) to require a valid JWT token, So that unauthenticated users cannot access any application data.  Acceptance Criteria: All /api/hms/\ endpoints return 401 without a valid token /auth/login and /health remain publicly accessible Existing requireAuth middleware from routes/auth. js is used (no new middleware)


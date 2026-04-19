# Meadow — User Stories

> HMS Capacity Planning App — 22 user stories across 6 workstreams.
> Priority order: Auth > Supabase > Entra SSO > Vercel > Clockify Sunset > Time Entry Edge Case

---

### Apply requireAuth to all protected routes
**Label:** Auth Hardening | **Priority:** P1 (unblocked)

**As a** system administrator,
**I want** all /api/hms/* routes (except /auth/login and /health) to require a valid JWT token,
**So that** unauthenticated users cannot access any application data.

**Acceptance Criteria:**
- All /api/hms/* endpoints return 401 without a valid token
- /auth/login and /health remain publicly accessible
- Existing requireAuth middleware from routes/auth.js is used (no new middleware)

---

### Apply requireAdmin to admin-only routes
**Label:** Auth Hardening | **Priority:** P1 (unblocked)

**As a** system administrator,
**I want** admin-only routes restricted to users with is_admin = 1,
**So that** regular users cannot modify system configuration or other users' data.

**Acceptance Criteria:**
- Settings CRUD returns 403 for non-admin users
- People CRUD returns 403 for non-admin users
- Projects CRUD returns 403 for non-admin users
- Clients CRUD returns 403 for non-admin users
- Tasks CRUD returns 403 for non-admin users
- Projections CRUD returns 403 for non-admin users
- Action items endpoints return 403 for non-admin users
- Sync triggers return 403 for non-admin users
- Export templates CRUD returns 403 for non-admin users
- Project resources CRUD returns 403 for non-admin users
- Notion sync log returns 403 for non-admin users

---

### Self-scoped time entries for non-admin users
**Label:** Auth Hardening | **Priority:** P1 (unblocked)

**As a** team member (non-admin),
**I want** to only see and modify my own time entries,
**So that** I cannot accidentally view or edit another person's logged hours.

**Acceptance Criteria:**
- GET /api/hms/time-entries filters by req.user.person_id for non-admin users
- POST /api/hms/time-entries rejects requests where person_id does not match req.user.person_id (non-admin)
- PUT /api/hms/time-entries/:id rejects updates to entries owned by another person_id (non-admin)
- DELETE /api/hms/time-entries/:id rejects deletes on entries owned by another person_id (non-admin)
- Admin users can still access all time entries

---

### Self-scoped projections for non-admin users
**Label:** Auth Hardening | **Priority:** P1 (unblocked)

**As a** team member (non-admin),
**I want** to only see my own capacity projections,
**So that** my projected hours are private to me and administrators.

**Acceptance Criteria:**
- GET /api/hms/projections filters by req.user.person_id for non-admin users
- Admin users can still view all projections

---

### Self-scoped project resources for non-admin users
**Label:** Auth Hardening | **Priority:** P1 (unblocked)

**As a** team member (non-admin),
**I want** to only see project resource assignments that include me,
**So that** I only see projects I'm assigned to.

**Acceptance Criteria:**
- GET /api/hms/project-resources filters by req.user.person_id for non-admin users
- Admin users can still view all project resource assignments

---

### Schema migration script (SQLite to PostgreSQL)
**Label:** Supabase Migration | **Priority:** P2 (blocked — need account)

**As a** developer,
**I want** a migration script that converts all 11 SQLite table definitions to PostgreSQL syntax,
**So that** the database schema can be created in Supabase without manual SQL translation.

**Acceptance Criteria:**
- TEXT PRIMARY KEY fields convert to UUID with gen_random_uuid() default
- INTEGER boolean fields (is_active, is_complete, is_default, is_admin) convert to BOOLEAN
- All foreign key relationships are preserved
- Script is idempotent (can be re-run safely)
- All 11 tables created: Settings, Clients, People, Projects, ProjectTasks, TimeEntries, Projections, ActionItems, NotionSyncLog, ExportTemplates, ProjectResources

---

### Rewrite data access layer to Supabase client
**Label:** Supabase Migration | **Priority:** P2 (blocked — need account)

**As a** developer,
**I want** all db.prepare().run() / .get() / .all() calls replaced with Supabase client methods,
**So that** the app reads and writes to Supabase PostgreSQL instead of local SQLite.

**Acceptance Criteria:**
- All route files use supabase.from().select(), .insert(), .update(), .delete()
- All sync files (Clockify, Notion) use Supabase client
- connection.js transaction polyfill (BEGIN/COMMIT/ROLLBACK) is removed
- No remaining references to node:sqlite
- data/capacity-planning.db file is removed from the project

---

### Environment variable migration
**Label:** Supabase Migration | **Priority:** P2 (blocked — need account)

**As a** developer,
**I want** .env updated with Supabase connection details,
**So that** the app connects to the hosted database.

**Acceptance Criteria:**
- .env contains SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
- Old SQLite-related env vars are removed
- .env.example is updated with new variable names

---

### Row-Level Security policies
**Label:** Supabase Migration | **Priority:** P2 (blocked — need account)

**As a** system administrator,
**I want** RLS policies on Supabase tables that isolate non-admin users to their own data,
**So that** data access control is enforced at the database level (defense in depth).

**Acceptance Criteria:**
- TimeEntries: non-admin users can only SELECT/INSERT/UPDATE/DELETE rows where person_id matches their auth ID
- Projections: non-admin users can only SELECT rows where person_id matches their auth ID
- ProjectResources: non-admin users can only SELECT rows where person_id matches their auth ID
- Admin users bypass RLS (service role key or admin policy)
- RLS policies are documented in the migration script

---

### Data export and import (SQLite to Supabase)
**Label:** Supabase Migration | **Priority:** P2 (blocked — need account)

**As a** system administrator,
**I want** existing SQLite data exported and imported into Supabase,
**So that** no historical time entries, projections, or configuration is lost during migration.

**Acceptance Criteria:**
- All rows from all 11 tables exported from SQLite
- Data imported into Supabase with referential integrity intact
- Row counts match pre- and post-migration
- Spot-check of 5+ records per table confirms data accuracy

---

### Sanity auth integration (backend)
**Label:** Sanity SSO | **Priority:** P3 (blocked — need Sanity project config)

**As a** developer,
**I want** the backend to validate Sanity user tokens via the @sanity/client SDK,
**So that** users authenticate through their existing Sanity accounts.

**Acceptance Criteria:**
- @sanity/client installed and configured with Sanity project ID and dataset
- Backend validates Sanity auth tokens on the /auth/login endpoint
- Valid Sanity token is exchanged for an HMS JWT (existing JWT flow preserved)
- Sanity user's email is matched against People record (add email field to People table if needed)
- Invalid/expired Sanity tokens return 401
- .env updated with SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN

---

### Sanity auth integration (frontend)
**Label:** Sanity SSO | **Priority:** P3 (blocked — need Sanity project config)

**As a** user,
**I want** a "Sign in with Sanity" button on the login page,
**So that** I can authenticate with my existing Sanity account.

**Acceptance Criteria:**
- Login page displays "Sign in with Sanity" button
- Clicking the button initiates auth via Sanity's authentication flow
- After successful Sanity auth, user is redirected back and logged into Meadow
- Old email-only login is removed or hidden behind a fallback flag

---

### Auto-provisioning for new Sanity users
**Label:** Sanity SSO | **Priority:** P3 (blocked — need Sanity project config)

**As a** system administrator,
**I want** new Sanity users to be automatically provisioned in Meadow if their email doesn't match an existing People record,
**So that** I don't have to manually create accounts for every team member.

**Acceptance Criteria:**
- If Sanity user's email matches an existing People record, login proceeds normally
- If no match, a new People record is created with display_name from Sanity profile, default capacity of 40 hrs/week, is_active = 1, is_admin = 0
- Auto-provisioning can be toggled on/off via a Settings key
- Admin is notified (action item or log entry) when a new user is auto-provisioned

---

### Session management
**Label:** Sanity SSO | **Priority:** P3 (blocked — need Sanity project config)

**As a** user,
**I want** my session to stay active without re-authenticating constantly,
**So that** I'm not interrupted during time entry or planning workflows.

**Acceptance Criteria:**
- Sanity API tokens are stored securely and revalidated on session start
- HMS JWT expiry is configurable
- Expired sessions redirect to Sanity login gracefully (no error pages)
- Logout clears both HMS JWT and Sanity session

---

### Frontend deployment (Vite static site)
**Label:** Vercel Deployment | **Priority:** P4 (blocked — need account)

**As a** developer,
**I want** the Vite frontend built and deployed as a static site on Vercel,
**So that** users can access Meadow via a public URL.

**Acceptance Criteria:**
- `npm run build` produces a deployable dist/ folder
- Vercel project configured for static site deployment
- Frontend is accessible via a Vercel URL (or custom domain)
- Environment variables for API URL are injected at build time

---

### Backend hosting decision and deployment
**Label:** Vercel Deployment | **Priority:** P4 (blocked — need account)

**As a** developer,
**I want** the Express backend deployed to a cloud host,
**So that** the API is accessible from the frontend.

**Acceptance Criteria:**
- Decision documented: Vercel Serverless Functions vs. VPS/Railway/Fly.io
- Express routes are deployed and reachable from the frontend
- API responds correctly to all existing endpoints
- Health check endpoint confirms deployment is live

---

### Scheduled job migration
**Label:** Vercel Deployment | **Priority:** P4 (blocked — need account)

**As a** developer,
**I want** Clockify and Notion sync schedulers migrated from setTimeout loops to a cloud-compatible scheduler,
**So that** background syncs continue to run in the hosted environment.

**Acceptance Criteria:**
- setTimeout-based sync loops removed
- Replacement scheduler chosen: Vercel Cron Jobs, Supabase Edge Functions with pg_cron, or external scheduler
- Clockify sync runs on its configured interval
- Notion sync runs on its configured interval
- Failed sync runs are logged (NotionSyncLog or equivalent)

---

### CORS and domain configuration
**Label:** Vercel Deployment | **Priority:** P4 (blocked — need account)

**As a** developer,
**I want** CORS properly configured between the frontend domain and the API,
**So that** the frontend can make API calls without browser security errors.

**Acceptance Criteria:**
- CORS allows requests from the frontend domain only (not wildcard)
- Custom domain configured with DNS and SSL (if applicable)
- All existing functionality works end-to-end through the hosted URLs

---

### Admin toggle to disable Clockify sync
**Label:** Clockify Sunset | **Priority:** P5 (product decision)

**As an** administrator,
**I want** a toggle in Settings to fully enable/disable Clockify sync at runtime,
**So that** I can turn off the integration without restarting the server.

**Acceptance Criteria:**
- Settings page includes a clear on/off toggle for Clockify sync
- Toggling off immediately stops the sync scheduler (no server restart needed)
- Toggling on resumes the sync scheduler
- Current state persists across server restarts (stored in Settings table)

---

### Clockify disabled banner
**Label:** Clockify Sunset | **Priority:** P5 (product decision)

**As an** administrator,
**I want** a visible banner on the Settings page when Clockify sync is disabled,
**So that** it's obvious the integration is off and no data is syncing.

**Acceptance Criteria:**
- Banner displays "Clockify sync is disabled" when the toggle is off
- Banner is not shown when sync is active
- Banner includes the date sync was last disabled (if tracked)

---

### Legacy Clockify field cleanup
**Label:** Clockify Sunset | **Priority:** P5 (product decision)

**As a** developer,
**I want** Clockify-specific fields (clockify_user_id, clockify_project_id, clockify_task_id, clockify_entry_id) made nullable and documented as dormant,
**So that** the schema is clean and new records don't require Clockify data.

**Acceptance Criteria:**
- All Clockify fields are nullable in the schema (already nullable in SQLite, confirm in Supabase migration)
- New records created via Meadow UI do not populate Clockify fields
- Existing Clockify-sourced records retain their data (no data loss)
- Schema documentation updated to mark these fields as deprecated/dormant

---

### Source field enforcement
**Label:** Clockify Sunset | **Priority:** P5 (product decision)

**As a** developer,
**I want** all new time entries created in Meadow to have source = 'manual',
**So that** the system clearly distinguishes between legacy Clockify data and native entries.

**Acceptance Criteria:**
- POST /api/hms/time-entries defaults source to 'manual' when created through the UI
- source = 'clockify' is only set by the Clockify sync process
- Existing 'clockify' entries are not modified

---

### Detect project+task collision on edit
**Label:** Time Entry Polish | **Priority:** P6 (polish)

**As a** user,
**I want** the app to warn me if I change a time entry's project or task to a combination that already exists as another row,
**So that** I don't accidentally create duplicate entries that merge on reload.

**Acceptance Criteria:**
- On project or task change, the frontend checks if the new project+task combination already exists in the current view
- If a collision is detected, a warning is shown before saving
- Warning clearly explains what will happen ("This project+task combination already has entries — they will be merged")

---

### Merge or block collision
**Label:** Time Entry Polish | **Priority:** P6 (polish)

**As a** user,
**I want** to choose whether to merge the entries or cancel the change when a collision is detected,
**So that** I stay in control of my time data.

**Acceptance Criteria:**
- Warning dialog offers two options: "Merge entries" or "Cancel"
- "Merge" combines the hours into the existing row and removes the duplicate
- "Cancel" reverts the project/task change (no save)
- Merged entries retain all individual time entry records in the database (merge is visual, not destructive)
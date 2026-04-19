**1. Auth hardening (can do now --- no external deps)**

**requireAuth not applied to any routes.** The middleware functions
exist in routes/auth.js but no route file uses them. Every API endpoint
is completely open --- anyone can hit /api/hms/people,
/api/hms/time-entries, etc. without a token.

What needs to happen:

-   Apply requireAuth to all /api/hms/\* routes except /auth/login and
    /health

-   Apply requireAdmin to admin-only routes: settings, people CRUD,
    projects CRUD, clients CRUD, tasks CRUD, projections CRUD, action
    items, sync triggers, export templates, project resources, Notion
    sync log

-   Time entries POST/PUT/DELETE must enforce that non-admins can only
    modify entries where person\_id matches req.user.person\_id

-   Time entries GET must enforce that non-admins can only query their
    own person\_id

-   Same self-scoping for projections and project resources GET
    endpoints

**2. Supabase migration (blocked --- need account)**

Replace SQLite with Supabase PostgreSQL:

-   Schema migration script: convert all CREATE TABLE statements to
    PostgreSQL syntax (TEXT PRIMARY KEY → UUID, INTEGER booleans →
    BOOLEAN, etc.)

-   Rewrite every db.prepare().run() / .get() / .all() call across all
    route files and sync files to use Supabase client
    (supabase.from().select(), .insert(), .update(), .delete())

-   Remove the BEGIN/COMMIT/ROLLBACK transaction polyfill in
    connection.js

-   Set up Row-Level Security policies for non-admin user data isolation

-   Export existing SQLite data and import into Supabase

-   Replace .env vars with Supabase URL + anon key + service role key

-   Remove data/capacity-planning.db and all node:sqlite references

**3. Entra SSO (blocked --- need Entra app registration)**

Replace email-only login with Microsoft Entra ID:

-   Add MSAL library (backend + frontend)

-   Replace login page with \"Sign in with Microsoft\" button

-   OIDC/OAuth2 flow: Entra token → verify → match email to People
    record → issue HMS JWT

-   Auto-provision: optionally create a People record if Entra user\'s
    email doesn\'t match

-   Handle token refresh and session expiry

**4. Vercel deployment (blocked --- need account)**

Restructure for hosting:

-   Frontend: Vite build deploys as static site (straightforward)

-   Backend: either convert Express routes to Vercel Serverless
    Functions, or host Express separately on a VPS/Railway/Fly.io

-   Clockify and Notion sync schedulers use setTimeout loops --- these
    don\'t work in serverless. Need Vercel Cron Jobs, Supabase Edge
    Functions with pg\_cron, or external scheduler

-   CORS configuration between frontend domain and API

-   Domain/DNS/SSL setup

**5. Clockify sunset (product decision)**

The transition from Clockify to Meadow as the primary time entry system:

-   Currently both coexist (source: \'clockify\' and source: \'manual\')

-   Need an admin UI toggle to fully disable Clockify sync (currently
    only a Settings dropdown set to \"Off\" or server restart)

-   Once all users are on Meadow, disable the sync scheduler

-   Legacy fields (clockify\_user\_id, clockify\_project\_id,
    clockify\_task\_id, clockify\_entry\_id) become nullable/dormant

-   Consider a \"Clockify is disabled\" banner in Settings

**6. Time entry --- editing edge case**

When a user changes the project or task on a row that has saved entries
and the new project+task combination already exists as another row,
you\'d get a collision --- two rows pointing at the same project+task
after save. The save would succeed (entries update individually) but the
reload would merge them into one row. This is a minor edge case but
could be confusing. A cleaner UX would detect the conflict and either
block the change or merge the rows proactively.

**Priority order**

1.  **Auth hardening** --- can do right now, critical for any real usage

2.  **Supabase migration** --- need account set up

3.  **Entra SSO** --- need Entra app registration

4.  **Vercel deployment** --- need account set up

5.  **Clockify sunset** --- product timing decision

6.  **Time entry edge case** --- polish

Want to knock out auth hardening now?

Other

· **SPEC.md** at C:\\HMS\\SPEC.md has the full original specification

· **Auth middleware** is already written and exported from
routes/auth.js --- they just need to apply it to routes

· **Clockify is read-only** --- the app must never POST to or DELETE
from Clockify

· **node:sqlite quirks** --- positional ? params only, db.exec() one
statement at a time, no native db.transaction()

· **All ES module imports** need .js extensions in route files
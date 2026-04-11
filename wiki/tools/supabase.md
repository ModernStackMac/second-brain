# Supabase
> Open-source Firebase alternative providing PostgreSQL database, real-time subscriptions, and authentication. Being adopted for Meadow app migration.

## Overview
Supabase is an open-source platform built on PostgreSQL that provides the core database, auth, and real-time capabilities needed for modern web applications. For HMS, it's the target for migrating Meadow from SQLite to a cloud-native, multi-user database.

Supabase offers a managed PostgreSQL instance, row-level security (RLS) for multi-tenant data isolation, real-time subscriptions via WebSockets, and built-in auth integration. The migration from SQLite will unlock sharing, proper multi-user support, and preparation for the planned Salesforce integrations.

## Key Details

**Meadow Migration Plan:**
- Replace SQLite with Supabase PostgreSQL instance
- Schema changes required:
  - TEXT primary keys → UUIDs
  - INTEGER booleans (0/1) → BOOLEAN type
  - Other schema adjustments for PostgreSQL compatibility
- Code rewrite: replace all SQLite db.prepare() calls with Supabase client
- Set up Row-Level Security (RLS) for user data isolation and multi-tenant support

**Infrastructure:**
- Create separate Supabase instance under existing HMS org/subscription
- Can be provisioned independently of the main HMS account if needed

**Current Blocker:**
- Account setup pending company credit card (required for Supabase provisioning)
- Once card is in place, instance can be created and schema migration can begin

**Advantages Over SQLite:**
- Multi-user support with proper isolation (RLS)
- Cloud hosting (no local database file management)
- Real-time subscriptions for live data updates
- Scalability for future growth
- Better integration with external services (Salesforce, Notion, etc.)

## Related Pages
- [[meadow-app]] — primary migration project
- [[hms-capacity-planning]] — HMS context and team
- [[high-meadows]] — parent organization

## Sources
- raw/projects/hms-capacity-planning/meadow-open-items.md
- Meeting Notes/High Meadows/Internal/2026-04-09 - Website Sync.md

---
*Last updated: 2026-04-10*

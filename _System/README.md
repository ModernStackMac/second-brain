# _System

Configuration and machine-readable config for the Second Brain. Not user-facing content — treat as infrastructure.

## Files

- `identity.yaml` — Mac's identity manifest (emails, workspaces, filters, paths). Read by all sync + ingestion tasks.
- `changelog.md` — historical record of material system changes.
- `story-sync.log` — append-only log of story-sync runs (created on first sync).
- `selector-log.md` — append-only log of meeting-selector runs. Historical scoring data from the Fathom/Granola trial (ended 2026-04-18) preserved; current runs log Fathom-only routing decisions.
- `meeting-routing-unrouted.md` — list of Fathom meetings meeting-selector couldn't route (missing project-mapping entry).

## Rules

- Never commit real API keys here. Keys live in macOS Keychain (see identity.yaml `workspaces.linear[].keychain_service`).
- Edits to identity.yaml take effect on the next scheduled task run.
- Schema version bumps require updating the scheduled task handlers.

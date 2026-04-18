# _System

Configuration and machine-readable config for the Second Brain. Not user-facing content — treat as infrastructure.

## Files

- `identity.yaml` — Mac's identity manifest (emails, workspaces, filters, paths). Read by all sync + ingestion tasks.
- `story-sync.log` — append-only log of story-sync runs (created on first sync).
- `meeting-selector.log` — append-only log of Granola/Fathom selection decisions (created on first run).

## Rules

- Never commit real API keys here. Keys live in macOS Keychain (see identity.yaml `workspaces.linear[].keychain_service`).
- Edits to identity.yaml take effect on the next scheduled task run.
- Schema version bumps require updating the scheduled task handlers.

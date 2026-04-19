# _System/scripts

Source-of-truth copy of the Node script(s) that power locally-run automations. Currently just story-sync — meeting routing moved into the `process-fathom-transcripts` scheduled task prompt (no local script needed).

**These scripts are stored here for reference and version control. They must be executed from `~/scripts/second-brain/` on your Mac, not from the vault.**

## Install locally

```bash
mkdir -p ~/scripts/second-brain
cp "$VAULT_ROOT/Second Brain/_System/scripts/"*.js ~/scripts/second-brain/
chmod +x ~/scripts/second-brain/*.js
```

Where `$VAULT_ROOT` is your vault root.

## Run

```bash
# One-time
export VAULT_ROOT="/Users/maciejnosek/Documents/Obsidian Vault"

# Test
node ~/scripts/second-brain/story-sync.js

# Logs
tail -f "$VAULT_ROOT/Second Brain/_System/story-sync.log"
```

## Dependencies

- Node 18+ (macOS default is fine on recent systems)
- macOS Keychain with `LINEAR_HIGHMEADOW_API_KEY` entry
- `VAULT_ROOT` env var set to your vault path

## Files

- `story-sync.js` — Linear HM pull + commitments.md update + per-project stories files + prune-to-archive
- `run-story-sync.sh` — wrapper script for story-sync

## Removed

- `meeting-selector.js` (deleted 2026-04-18) — Fathom routing logic was folded into the `process-fathom-transcripts` scheduled task prompt. No local script needed. If you had a local copy at `~/scripts/second-brain/meeting-selector.js`, delete it too.

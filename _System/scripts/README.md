# _System/scripts

Source-of-truth copy of the two Node scripts that power story-sync (Linear HM) and meeting-selector (Fathom routing).

**These scripts are stored here for reference and version control. They must be executed from `~/scripts/second-brain/` on your Mac, not from the vault.**

## Install locally

```bash
mkdir -p ~/scripts/second-brain
cp "$VAULT_ROOT/Second Brain/_System/scripts/"*.js ~/scripts/second-brain/
chmod +x ~/scripts/second-brain/*.js
```

Where `$VAULT_ROOT` is your vault root (e.g., `/Users/maciejnosek/Documents/Obsidian Vault`).

## Run

```bash
# One-time
export VAULT_ROOT="/Users/maciejnosek/Documents/Obsidian Vault"

# Test
node ~/scripts/second-brain/story-sync.js
node ~/scripts/second-brain/meeting-selector.js

# Logs
tail -f "$VAULT_ROOT/Second Brain/_System/story-sync.log"
tail -f "$VAULT_ROOT/Second Brain/_System/selector-log.md"
```

## Dependencies

- Node 18+ (macOS default is fine on recent systems)
- macOS Keychain with `LINEAR_HIGHMEADOW_API_KEY` entry
- `VAULT_ROOT` env var set to your vault path

## Files

- `story-sync.js` — Linear HM pull + commitments.md update + per-project stories files + prune-to-archive
- `meeting-selector.js` — Routes Fathom files from `raw/meeting-raw/fathom/` to `Meeting Notes/{Company}/{Project}/` via project-mapping. Granola was retired 2026-04-18; the historical scoring path in this script is dead code retained for reference.

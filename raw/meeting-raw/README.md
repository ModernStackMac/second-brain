# Meeting Raw

Full transcripts and summaries from Fathom, pre-routing. `meeting-selector` reads from here and routes each note to `Meeting Notes/{Company}/{Project}/`.

## Layout

- `fathom/` — Fathom-sourced meeting files (transcript + summary). Current source.
- `granola/` — Historical Granola captures. Granola was retired 2026-04-18; folder retained read-only for any unmigrated meetings. No new files land here.

## Lifecycle

1. Fathom syncs transcripts into `fathom/` via `process-fathom-transcripts` every 2 hours on weekdays.
2. `meeting-selector` (now a Fathom-only router) runs at `:45` past even hours 8a–6p weekdays, looks up the project via `project-mapping.md`, and writes a routed copy to the Meeting Notes folder.
3. Raw files retained for 90 days for spot-checks, then auto-pruned.

## Do not hand-edit

Files here are treated as sources of truth. Edit the routed meeting note in `Meeting Notes/...` instead.

# Meeting Raw

Full transcripts and summaries from Granola and Fathom, pre-selection. The meeting-selector reads from here, scores both versions, writes the winner to `Meeting Notes/{Company}/{Project}/`, and keeps the raw files here for reference.

## Layout

- `granola/` — Granola-sourced meeting files (transcript + summary).
- `fathom/` — Fathom-sourced meeting files (transcript + summary).

## Lifecycle

1. Granola / Fathom drop files here via their sync tools.
2. `meeting-selector` scheduled task (hourly) pairs files by meeting ID / title+timestamp, scores each, writes winner to the Meeting Notes folder per `project-mapping.md`.
3. Raw files retained for 90 days for spot-checks, then auto-pruned.

## Do not hand-edit

Files here are treated as sources of truth. Edit the selected meeting note in `Meeting Notes/...` instead.

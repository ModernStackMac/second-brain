---
type: index
source: confluence
cloud: f2strategy
updated: 2026-04-18
---

# F2 Strategy Internal Wiki (Confluence mirror)

Read-only mirror of F2 Strategy Confluence content relevant to your work. Synced by the `confluence-ingest` scheduled task.

## Rules

- Do not edit these files by hand. Edits are overwritten on next sync.
- Use for reference and Claude context only.
- Original source of truth lives in F2's Confluence.

## Index
```dataview
TABLE file.mtime as "Last Synced"
FROM "Second Brain/wiki/f2-internal"
WHERE file.name != "README"
SORT file.mtime DESC
```

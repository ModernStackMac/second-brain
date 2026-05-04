---
type: system-config
updated: 2026-05-04T10:00:00-05:00
---

# Project Mapping

Canonical routing table for story-sync. Maps (workspace, project_key) pairs to vault slugs.

## Active Projects

### Jira (f2strategy.atlassian.net)

| Jira Project Key | Jira Project Name | Canonical Slug |
|---|---|---|
| MAI | MAI CRM Build | mai |
| CET | Cetera | cetera |
| LNW | LNW | lnw |

### Linear (high-meadow-solutions)

| Linear Team | Linear Project | Canonical Slug |
|---|---|---|
| Internal Projects | Capacity Planning | internal/meadow |
| Internal Projects | Flex Dash | flex-dash |

## Canonical Slug Index

| Slug | Display Name | Source(s) |
|---|---|---|
| mai | MAI CRM Build | Jira MAI |
| cetera | Cetera | Jira CET |
| lnw | LNW | Jira LNW |
| internal/meadow | Meadow (Capacity Planning) | Linear Internal Projects / Capacity Planning |
| flex-dash | Flex Dash | Linear Internal Projects / Flex Dash |

## Deprecated Slugs

None.

## Notes

- Created 2026-05-04 by story-sync. Prior runs routed CET and MAI via established pattern but project-mapping.md was missing from vault.
- Linear project "Meadow" was renamed to "Capacity Planning" in Linear. Canonical slug remains `internal/meadow`.
- `flex-dash` slug is mapped but wiki/projects/flex-dash/ folder does not yet exist. Stories will log as unrouted until folder is created.

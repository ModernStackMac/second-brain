---
type: project-context
project: lnw
client: LNW (via High Meadows / F2 Strategy)
status: active
priority: p2
owner: Mac
stack: Salesforce FSC
updated: 2026-05-12
---

# LNW — Context

> Stable project context. Updated only when scope, team, or architecture changes.

## Overview

LNW is a wealth management client engaged through High Meadows via F2 Strategy. The project focuses on **Visibility Enhancements** — improving how family-level ownership structures and account relationships are surfaced in Salesforce.

## Scope

- **Entity Role Diagram (ERD):** Visual representation of account-to-account relationships using the entity role junction object. Nested ownership display, referencing Altrata-style ownership structure diagrams.
- **Visibility Enhancements POC:** Family-level aggregation, meeting note composer, and related UX improvements. Parent epic LNW-112 (Client Architecture) with tickets LNW-189/190/191/192 in review.

## Stack

- Salesforce Financial Services Cloud (FSC)
- Entity Role object (junction between accounts)
- Jira: `f2strategy.atlassian.net`, project key `LNW`

## Team

- Mac Nosek — lead developer
- F2 Strategy — project management layer

## Key Links

- Jira board: F2 Strategy workspace → LNW project
- Stories tracked in `stories-f2.md`


## Account Hierarchy & Family Filters (added 2026-05-12)

**Three-level hierarchy:** account/household/institution → family → super family. Parent ID relationships traverse upward through levels. `family_type = "super family"` identifies super family records.

**Family filter (working):** Pulls activity records from accounts below the selected account in hierarchy. Shows proper parent-child relationships.

**Super family filter (in progress):** Requires two-step traversal: (1) find family record from selected account's parent ID, (2) find super family record from family's parent ID. Super family should display all records from all families beneath it. Currently showing zero records — traversal logic not yet implemented.

**Family lookup field:** Exists on the object but has never been used. Purpose unknown. May simplify hierarchy traversal once understood.

**Event page redirects:** Standard event pages redirect to meeting notes when a meeting note record exists. Events without meeting notes remain accessible. Start/end date-time components added to meeting note object.

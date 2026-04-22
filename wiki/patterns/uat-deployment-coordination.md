# UAT Deployment Coordination

> Shared deployment log pattern to prevent cross-developer overwrites in multi-dev Salesforce UAT environments.

## Problem

Multiple developers deploying to the same UAT sandbox without coordination leads to silent overwrites. Developer A deploys component changes, Developer B deploys a different set of changes to the same org and inadvertently overwrites A's work because their local project doesn't include A's latest metadata. The overwrite often goes undetected until QA or the next deploy cycle surfaces regressions.

Standard Salesforce DX project structures don't prevent this because each developer works from their own local project and the sandbox is the shared state. DevOps Center and change sets help but don't solve the "who touched what today" visibility gap for fast-moving teams.

## Solution

Maintain a shared, real-time deployment log (Google Doc, Confluence page, or Slack channel) where every developer records each UAT deploy before pushing. The log acts as a lightweight mutex, not blocking deploys but making conflicts visible.

### Required fields per entry

- **Date/time** of deploy
- **Developer name**
- **Ticket/story ID**
- **Components touched** (Apex classes, LWCs, objects/fields, flows)
- **Status** (deployed / rolled back / in progress)

### Process

1. Before deploying, check the log for recent entries touching the same components.
2. If overlap detected, sync with the other developer before deploying.
3. After deploying, add your entry immediately.
4. If you discover a conflict post-deploy, flag it in the log and coordinate a fix.

## When to Use

- 3+ developers deploying to the same UAT sandbox
- Sprint velocity is high enough that multiple deploys happen per day
- Team doesn't have a full CI/CD pipeline with conflict detection (most SF projects)
- Components overlap across developer workstreams (shared LWCs, shared Apex classes)

## When NOT to Use

- Solo developer on a sandbox (no conflict possible)
- Full DevOps Center or Gearset pipeline with automated conflict detection
- Short-lived feature branches with merge-based deployment (Git-centric workflow)

## Real Examples

### MAI (2026)
Federico sent ticket 1345 changes to UAT but overwrote Mac's recently deployed changes in dev. The component change (field elimination on a line component + class updates) didn't sync because neither developer knew the other had touched the same files. Four additional tickets were also moved to Developer Review status but weren't actually deployed to UAT.

Fix: Mac adopted a shared "UAT Deployment Collaboration" Google Doc and committed to logging every deploy going forward.

Source: [[mai]] journal, Apr 17 2026

## Implementation Notes

- Google Docs works well for small teams (real-time, low friction, searchable)
- For larger teams, a dedicated Slack channel with a bot/template is faster
- Consider pairing with a `sf project retrieve start` before every deploy to catch drift
- This pattern complements (not replaces) proper source control; it solves the "sandbox as shared state" visibility gap

## Related Pages
- [[mai]] — primary implementation
- [[json-deserialize-refactor]] — related Apex development pattern
- [[site-product-joiner]] — related data model pattern

---
*Created: 2026-04-22*
*Sources: Meeting Notes/High Meadows/MAI/2026-04-17 - MAI Dev DSU.md*

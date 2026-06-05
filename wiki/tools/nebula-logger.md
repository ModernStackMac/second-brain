# Nebula Logger

> Free managed package for persistent, queryable Apex logging — the standard replacement for `system.debug`.

## Overview

Nebula Logger is an open-source, free managed package for Salesforce that provides comprehensive logging across Apex, Flow, and Lightning Components. Instead of ephemeral `system.debug` statements that require debug logs to be enabled and captured, Nebula persists log entries as records — searchable, reportable, and tied to the transaction/user context that produced them.

Recommended in the MSS peer network (Victor Domatz, Jun 2026) as the default logging layer for any non-trivial Salesforce build.

## Key Details

- **Persistent error tracking** — log entries stored as records, surviving past the transaction; no more chasing debug logs after the fact.
- **Replaces `system.debug`** — same call-site simplicity, but durable and queryable.
- **Flow integration** — ships with invocable actions, so declarative automations get the same logging layer as Apex.
- **Licensing** — free, open-source managed package (no per-seat cost).

## How It Fits the Stack

Drop-in observability layer for client builds — especially valuable on projects with async/queueable processing (e.g., [[patterns/data-cloud-bulk-processing]]) where an error-logging mechanism is already part of the recommended architecture, and on go-live/hypercare phases ([[patterns/go-live-hypercare-cutover]]) where fast root-cause on production errors matters.

## Alternatives

- `system.debug` + debug logs — free but ephemeral, capture-window dependent
- Custom logging objects — common hand-rolled equivalent; Nebula is the maintained, feature-complete version
- Salesforce Shield Event Monitoring — platform-level, paid, different scope (auditing vs. app logging)

## Related Pages

- [[patterns/data-cloud-bulk-processing]] — error logging is a core component of the batched async pattern
- [[patterns/go-live-hypercare-cutover]] — production error visibility during hypercare

## Sources

- [[Meeting Notes/Modern Stack Systems/2026-06-05 - The Meeting of the Minds|2026-06-05 Meeting of the Minds]] — Victor's recommendation and feature rundown

---
*Last updated: 2026-06-05*

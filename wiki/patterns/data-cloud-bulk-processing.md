# Data Cloud Bulk Processing Pattern

> Process high-volume Data Cloud ingestion into Salesforce objects using record-triggered flows and Apex queueable classes in controlled batches.

## Problem
Data Cloud can ingest hundreds of thousands of records daily (e.g., 300K transaction records from multiple payment processors), but there's no out-of-the-box mechanism to create or update downstream Salesforce records from that data. Naive approaches hit governor limits immediately.

## Solution
Chain Data Cloud ingestion with asynchronous Salesforce processing:

1. **Data Cloud streaming ingestion** — CSV files via SFTP → S3 → Data Cloud streaming. Data lands in Data Cloud objects and is visible in reports.
2. **Record-triggered flow** — fires on Data Cloud record creation/update, invokes an Apex queueable class.
3. **Apex queueable class** — processes records in 500-record batches to stay within governor limits.
4. **Error logging** — failed records logged to a dedicated object for retry/investigation.
5. **Transform object** — merges multiple data streams (e.g., portal + Stripe transactions) into a master table before pushing to Salesforce objects.

## Key Design Decisions
- **Batch size of 500** — balances throughput with governor limit safety
- **Asynchronous processing** — queueable (not batch) for near-real-time processing with chaining capability
- **Transform before push** — harmonize/deduplicate at the Data Cloud layer before creating Salesforce records
- **Column pruning** — 300K records × 50 columns, but only 6 columns actually needed. Filter early.

## Applied In
- [[blink-payments]] — Blink Payment processing data from multiple banks/Stripe into Salesforce merchant records (May 2026)

## Related Pages
- [[data-cloud]] — Salesforce Data Cloud platform
- [[cost-rollup-hierarchy]] — related Apex-driven aggregation pattern

---
*Created: 2026-05-14 · Source: Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz.md*
# Pattern: Data Cloud → Apex Bulk Processing

> Turn high-volume Data Cloud ingestion into Salesforce actions via record-triggered flow + Apex queueable with batched async processing.

## Problem
Data Cloud reliably ingests large external data streams (CSV → SFTP → S3 → Data Cloud), but the data sits isolated — visible in Data Cloud reports with no downstream Salesforce records or automation. Naive synchronous processing of hundreds of thousands of records hits governor limits.

## Solution Approach
1. **Data Cloud record-triggered flow** fires on incoming/updated records.
2. Flow hands off to an **Apex queueable class** for bulk processing.
3. Process **asynchronously in ~500-record batches** to stay within governor limits.
4. Add an **error-logging mechanism** for failed records (don't lose them silently).
5. Use a **transform / master object** to merge multiple overlapping source streams (e.g. portal + Stripe) and harmonize duplicates before creating actionable records.

## When To Use vs Alternatives
- Use when volume is high (10⁵+ records/day) and only a subset of columns matters.
- For lower volume or simpler shapes, a pure flow or scheduled batch may suffice.

## Real Examples
- **Blink Payments:** ~300K daily transaction records (~50 cols, only 6 needed) across multiple bank/processor sources → consolidate into actionable merchant-processing records for summaries, forecasting, and billing. Mirrors a prior **Confluence → Salesforce Knowledge** integration. → [[blink-payments/context]]

## Risks / Mitigations
- **Governor limits:** batch size tuning (500) + async queueable.
- **Duplicate/overlapping sources:** transform object + harmonization logic; define the master-table reconciliation rules up front (needs source ERD).
- **Silent failures:** mandatory error-log table and retry path.

## Related Pages
- [[blink-payments/context]]
- [[model-context-protocol]] — making ingested data semantically actionable

---
*Last updated: 2026-06-01*
*Sources: Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11*

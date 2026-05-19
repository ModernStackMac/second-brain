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

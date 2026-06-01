# Blink Payments — Journal

## Week of May 11–17, 2026

Advisory kickoff on Blink's Data Cloud implementation. The team (Katz leading, Brayam on data, Liam on transaction linking) has daily CSVs flowing via SFTP → S3 → Data Cloud, but no downstream Salesforce actions — merchant data is visible in reports but isolated. ~300K daily transaction records across ~50 columns (only 6 needed), with overlap/dupes across sources needing harmonization. Mac recommended a Data Cloud record-triggered flow → Apex queueable, 500-record async batches to dodge governor limits, error logging, and a transform object to merge portal + Stripe streams into a master table — mirroring a recent Confluence → SF Knowledge integration. *(Source: [[Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz|2026-05-11 — Data Cloud Advisory Kickoff]])*

**Decisions:**
- Architecture direction: Data Cloud flow → Apex queueable, batched async processing, error logging, transform/master object.
- Blink to produce object ERD + user stories before transform work begins.
- Mac to run a few 30-min sessions with Liam on transform config over coming weeks.

**Open questions:**
- Final object ERD and how portal + Stripe streams reconcile into the master table.
- Resolution path for the Stripe integration issues forcing manual monthly tracking.

---

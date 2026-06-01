# Blink Payments — Project Context

> Modern Stack Systems advisory engagement on a Salesforce Data Cloud implementation for a UK payments/fintech company.

## Overview
Blink Payments (blinkpayment.co.uk) is consolidating multiple bank/payment-processor data streams into actionable Salesforce records via Data Cloud. Data is ingesting successfully (daily CSV → SFTP → S3 → Data Cloud streaming) but nothing downstream is wired up — merchant-processing data sits isolated in Data Cloud reports with no Salesforce actions. MSS (Mac) is advising on the architecture to turn ingested data into automated merchant summaries, forecasting, and billing integration across all bank relationships.

## Key Contacts
- Mac (MSS) — advisor
- R Katz (r.katz@blinkpayment.co.uk) — leading the main implementation / Data Cloud setup
- R Brayam (r.brayam@blinkpayment.co.uk) — data analyst with Data Cloud experience; struggles with object integration in recipes
- Liam — handles transaction linking between systems; currently manual monthly transaction tracking due to Stripe integration issues

## Data Profile
- ~300,000 daily transaction records across ~50 columns (only 6 columns needed).
- Multiple data sources with overlapping/duplicate data requiring harmonization.

## Recommended Architecture (MSS)
1. Data Cloud record-triggered flow → Apex queueable class for bulk processing.
2. Asynchronous processing in 500-record batches to avoid governor limits.
3. Error-logging mechanism for failed-record handling.
4. Transform object to merge portal + Stripe transaction streams into a master table.

Pattern parallels a recent Confluence → Salesforce Knowledge integration project.

## Tech Stack
Salesforce, Data Cloud, Stripe, S3, SFTP.

## Related Pages
- [[model-context-protocol]] — context-layer thinking for Data Cloud/agent value
- [[patterns/data-cloud-bulk-processing|Data Cloud → Apex bulk processing pattern]]

## Project Files
- [[blink-payments/journal|Journal]]

## Meeting Note Sources
- [[Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz|2026-05-11 — Data Cloud Advisory Kickoff]]

## Sources
- Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz.md
- project-mapping.md

---
*Last updated: 2026-06-01*

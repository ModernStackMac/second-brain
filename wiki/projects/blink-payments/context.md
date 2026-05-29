# Blink Payments — Project Context

> UK-based payment processor. Data Cloud advisory — consolidating multiple bank/payment processor data streams into actionable Salesforce records.

## Client
- **Company:** Blink Payments (UK)
- **Partner:** Modern Stack Systems
- **Team:** R Katz (lead implementation, data cloud setups), R Brayam (data analyst, Data Cloud experience), Liam (transaction linking, manual monthly tracking)
- **Engagement type:** Advisory (few 30-minute sessions over several weeks)

## What We're Building
- Data Cloud implementation to consolidate transaction data from multiple banks and payment processors
- Transform configuration to merge portal + Stripe transaction streams into a master table
- Downstream Salesforce automation: Data Cloud records → Apex queueable → merchant processing summaries, forecasting, billing integration

## Technical Architecture
- **Ingestion:** Daily CSV files via SFTP → S3 → Data Cloud streaming
- **Volume:** ~300,000 daily transaction records across ~50 columns (only 6 needed)
- **Challenge:** Multiple data sources with overlapping/duplicate data requiring harmonization
- **Current state:** Data ingesting successfully, visible in Data Cloud reports, but no downstream Salesforce actions configured
- **Target:** Record-triggered flow → Apex queueable class for bulk processing in 500-record batches with error logging

## Next Steps
- Mac working with Liam on transform configuration
- Blink team creating object ERD and user stories before transform work
- Future developer consultation on Apex implementation once architecture finalized

## Related Pages
- [[data-cloud]] — Salesforce Data Cloud platform
- [[data-cloud-bulk-processing]] — processing pattern for high-volume ingestion
- [[modern-stack-systems]] — parent engagement

---
*Created: 2026-05-14 · Source: Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz.md*


## Meeting Note Sources
- [[Meeting Notes/Modern Stack Systems/Blink Payments/2026-05-11 - Modern Stack Systems between Mac Nosek and Raphi Katz|2026-05-11 Blink Raphi Katz]]
- [[Meeting Notes/Modern Stack Systems/2026-04-21 - Modern Stack Systems - Blink Data Cloud Advisory|2026-04-21 Blink Advisory]]

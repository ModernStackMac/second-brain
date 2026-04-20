# NBCU — Project Context

> NBCUniversal. Agentforce POC for content recommendation and sales pricing strategy via Data Cloud.

## Client
- **Company:** NBCUniversal (NBCU)
- **Partner:** Stand8
- **Client contacts:** Naresh, Scott, Karthi (business solutions partner)
- **Industry:** Media and entertainment — content licensing

## What We're Building
- Agentforce POC with two use cases (4-week delivery once environment access secured):
  1. **Content Recommendation Engine** — analyze Data Cloud holdings, recommend titles for licensing deals, generate pitch decks with embedded trailers
  2. **Sales Pricing Strategy** — analyze historical license fee data by title/territory, build benchmarks, provide dynamic pricing recommendations to sales team

## Tech Stack
- **Salesforce:** Sales Cloud, Agentforce, Data Cloud
- **Data:** Licensing data and historical closed-won opportunities in Data Cloud

## Scope & Constraints
- MCP support still in beta — presentation/deck generation is complex and limited; workarounds needed
- SOW delivered within 48 hours of org demo
- 4-week POC window post environment access
- Primary use case locked: **sales pricing recommendation engine** (confirmed Apr 15)
- Data flows through Salesforce Data Cloud

## Related Pages
- [[stand8]] — partner
- [[agentforce]] — core POC platform
- [[data-cloud]] — holdings data for recommendation and pricing

## DealSet System (Source System)
- Manages opportunities, proposals, and proposal line items (fees, start dates, end dates, titles)
- **Safe** is source of truth for accounts and titles — integrated to DealSet via platform events every 20 minutes
- Title identifiers: six-gen number, title ID, safe ID (indicate active status and system relationships)
- **Modules:** Parent Volume Opportunities (large-volume opp management), Budget Module (connected via Data Cloud to Global Force + Safe + currency systems for annual title-level forecasting), Marketing tabs (Season/Feature Product Memo — flows between systems), Deal Approvals (TVD + AMD required for >$5M opportunities)
- **Raghu** — technical contact on DealSet side

## Pricing Agent Constraints
- Matching criteria: genre + budget only (confirmed by Karthi)
- Cast data available (top 10 actor names per title) but explicitly excluded — no success/revenue metrics attached
- IMDB data augmentation rejected
- Mac flagged accuracy risk: same genre can have wildly different budgets depending on cast caliber
- SOW is complimentary (non-billable) — scope, timeline, and level of effort

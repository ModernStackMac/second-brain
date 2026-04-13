# Harvey — Project Context

> Industrial manufacturing/distribution company. Salesforce optimization + AI/Agentforce, 3-year AI roadmap, EU expansion.

## Client
- **Company:** Harvey
- **Partner:** Stand8 (Ryan Ridinger — project lead, Brian, Kyle SE)
- **Client contacts:** Carl (VP Digital), Kate (CRM Program Manager)
- **Industry:** Industrial manufacturing and distribution (distributor/channel partner model)

## What We're Building
- 3-year AI roadmap (board-approved)
- Agentforce implementation across priority use cases
- Email intent parsing POC (Claude — handles multi-intent emails)
- Multi-agent orchestration strategy (Einstein Agent for native SF workflows + Claude for email)
- EU expansion support (~120 new Salesforce users)

## Priority AI Use Cases (Ranked)
1. Account summaries and health scoring
2. Research enrichment for presales
3. Pricing & availability email automation
4. Multilingual web chat deflection
5. Predictive maintenance modeling
6. Faster quotation generation
7. Cybersecurity threat detection
8. Automating non-value-add touchpoints

## Tech Stack
- **Salesforce:** Sales Cloud, Service Cloud, Agentforce
- **Legacy (phasing out):** SAP C4C — loss of native ERP integration is a key pain point
- **Analytics:** Power BI (sales monitoring)
- **Proprietary:** Machine Advisor app ("Map") — SKU recommendation engine from machining parameters; has API, staying standalone
- **AI:** Claude for email intent parsing, Einstein Agent for native SF workflows

## Business Model & Complexity
- Distributor model: sells through channel partners, markets to end users
- ~40M potential price line items requiring dynamic calculation
- Country-specific pricing and behavior patterns across EU expansion
- Distributor-specific master data management

## Key Pain Points
- No native Salesforce notification when orders convert in downstream systems — sales reps manually monitor Power BI
- Lost SAP C4C automatic ERP integration after platform migration
- EU adoption: pipeline automation deferred until 6+ months of manual CRM adoption (120 users)

## Related Pages
- [[stand8]] — partner
- [[agentforce]] — core AI platform
- [[multi-agent-orchestration]] — orchestration pattern (Einstein + Claude)
- [[claude-ai]] — email intent parsing

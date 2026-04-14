# Harvey
> Industrial manufacturing/distribution company leveraging Salesforce, ERP integration, and Claude for multi-intent email automation.

## Overview
Harvey is a mid-market industrial manufacturing and distribution company that operates through a distributor model—selling through channel partners while marketing directly to end users. They're undergoing a significant digital transformation, with a 3-year AI roadmap approved for board presentation. The company is expanding Salesforce across ~120 new EU users while managing complex pricing (~40M potential price line items) and integrating legacy ERP systems.

Key stakeholders include Carl (VP Digital) and Kate (CRM Program Manager), who are driving both cloud migration and AI-powered workflow automation.

## Key Details

**Business Model & Complexity**
- Distributor model with country-specific pricing and behavior patterns across EU expansion
- ~40M potential price line items requiring dynamic calculation
- Distributor-specific master data management

**Current Tech Stack**
- Salesforce: Sales Cloud, Service Cloud, Agent Force
- Legacy: SAP C4C (being phased out, loss of native ERP integration a pain point)
- Power BI for sales monitoring
- Machine Advisor app ("Map") — proprietary SKU recommendation engine from machining parameters, has API, staying standalone for now
- Claude for email intent parsing (multi-intent capability)

**Priority AI Use Cases**
1. Account summaries and account health scoring
2. Research enrichment for presales
3. Pricing & availability email automation
4. Multilingual web chat deflection
5. Predictive maintenance modeling
6. Faster quotation generation
7. Cybersecurity threat detection
8. Automating non-value-add touchpoints

**Agent Strategy**
- Agent-agnostic approach: Einstein Agent for native Salesforce workflows, Claude for email intent parsing (handles multiple intents better than single-intent email templates)
- Considering multi-agent orchestration for complex workflows
- Email template POC completed (pulling product data per BU/location) — mostly styling/HTML fixes

**Sales-to-Service Handoff Pain**
- No native Salesforce notification when orders convert in downstream systems
- Sales reps manually monitor Power BI to detect order conversion and engagement
- Lost SAP C4C's automatic ERP integration after platform migration

**Timeline & Adoption**
- 120 new EU Salesforce users onboarding — pipeline automation deferred until 6+ months of manual CRM adoption
- 3-year roadmap requires significant org change management

## Related Pages
- [[stand8]] — partner/reseller connection
- [[cretelligent]] — parallel ERP integration complexity
- [[litify]] — multi-system knowledge consolidation pattern

## Sources
- Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop.md

---
*Last updated: 2026-04-10*

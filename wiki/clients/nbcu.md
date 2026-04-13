# NBCU
> Media/entertainment Salesforce customer running Agentforce POC for content recommendation and dynamic pricing strategy.

## Overview
NBCUniversal (NBCU) is a large-scale Salesforce customer in the media and entertainment space, managing complex content licensing negotiations. They're piloting Agentforce for two high-impact use cases: content recommendation engine and sales strategy/pricing analytics. The licensing negotiation value is substantial (~$400-450/user with Salesforce CoE), making efficiency gains directly material to revenue.

Primary contact is Naresh, with Salesforce licensing and CoE support backing the initiative.

## Key Details

**Business Context**
- Content licensing negotiations at significant scale ($400-450/user pricing with Salesforce CoE)
- Licensing data critical to business operations and strategy

**POC Use Cases (Priority Ranked)**
1. **Content Recommendation System** (priority)
   - Analyze Data Cloud holdings to recommend titles for licensing deals
   - Generate pitch decks with embedded trailers
   - Data primarily in Salesforce Data Cloud

2. **Sales Strategy & Pricing**
   - Analyze historical license fee data by title and territory
   - Build benchmarks for license fee recommendations
   - Provide dynamic pricing recommendations to sales team

**Technical Constraints**
- MCP support still in beta — presentation generation on Agentforce is complex and limited
- Workarounds needed for creating and embedding slides/trailers in agent workflows

**Timeline & Next Steps**
- POC window: 4 weeks once environment access is secured
- MSS to deliver SOW within 48 hours of org demo
- Dependency on org environment provisioning from Salesforce

## 2026-04-13 Kickoff Architecture Review

Kickoff-style review of NBCU Salesforce instance architecture for the Agentforce POC. Attendees: Mac, Scott; Karthi (business solutions partner) absent, causing session to cut short and reschedule.

**Confirmed Scope**
- Agent recommends pricing based on historical closed-won opportunities
- Data flows through Salesforce Data Cloud
- Primary use case locked: sales pricing recommendation engine

**Rescheduled Session**
- Wednesday 1:30 PM Pacific
- Scott to send updated calendar invite
- Full Salesforce walkthrough planned: products, price book hierarchy, opportunity data flow into Data Cloud, agent pricing recommendation logic based on closed-won data

## Related Pages
- [[stand8]] — partner/reseller connection
- [[litify]] — concurrent agent/MCP use case, similar constraints
- [[agentforce]] — core technology for POC use cases
- [[data-cloud]] — holdings data for content recommendation engine
- [[mcp]] — constraint limiting presentation generation capabilities

## Sources
- Meeting Notes/Stand8/NBCU/2026-04-08 - NBCU STAND 8 Agentforce POC.md
- Meeting Notes/Stand8/NBCU/2026-04-15 - NBCU STAND 8 Agentforce POC.md

---
*Last updated: 2026-04-13*

# CPQ / Enterprise Configuration Complexity
> Large-scale CPQ, RCA, and complex Salesforce configuration implementations tend to fail when enterprises over-engineer requirements, turning technical problems into unsolvable business problems. A recurring pattern across Mac's consulting practice.

## Overview
Enterprise implementations of Salesforce CPQ, Revenue Cloud Advanced (RCA), and similar complex configuration tools share a failure mode: organizations over-complicate configurations to accommodate every edge case, resulting in unmaintainable systems. This pattern has surfaced across multiple engagements and peer discussions.

The core insight: 600,000+ CPQ implementations exist, but the biggest enterprise ones — the ones consultancies charge millions for — are disproportionately likely to fail because complexity compounds non-linearly. When the system needs to model every pricing exception and approval chain, the technical problem becomes a business problem that no implementation can solve.

## Examples

**Victor's Cox Automotive / Z Lab (May 2029):**
- Massive Salesforce CPQ implementation cleanup
- Legacy system: 200,000+ lines in a single controller class
- Multiple ServiceNow integrations needed
- Discovery phase ongoing — classic "clean up the mess" engagement

**Loftware / RCA prospect (Apr 2026):**
- Client described use case as "crazy complex" and demanded references
- HM leadership made aggressive RCA expertise claims with limited bench depth
- RCA is the latest evolution — few successful implementations exist, yet consultancies sign deals without proper specialized resources
- Client previously burned by failed Plative engagement
- Risk: specialized resources leave mid-project, knowledge walks out the door

**Andrew/Mac CPQ discussion (Apr 27):**
- Drew explicit parallels between CPQ and RCA failure modes
- Observation: enterprises over-complicate configurations, turning technical problems into unsolvable business problems
- CPQ sunsetted by Salesforce — no new licenses, but 600K+ implementations persist

## Key Takeaways
- **Complexity is non-linear.** Each additional configuration rule or pricing exception adds disproportionate implementation/maintenance burden.
- **Business process is the bottleneck, not technology.** If the business can't simplify its own rules, no tool will save the implementation.
- **Specialized resources are scarce.** True RCA/CPQ experts are rare. Engagements sold without them on the bench are high-risk.
- **Legacy cleanup is the real market.** Most consulting value comes from fixing failed or over-engineered implementations, not greenfield builds.

## Related Pages
- [[loftware]] — RCA prospect engagement illustrating the pattern
- [[modern-stack-systems]] — peer discussions about CPQ/RCA complexity

## Sources
- Meeting Notes/Modern Stack Systems/2026-05-29 - The Meeting of the Minds.md
- Meeting Notes/Modern Stack Systems/2026-04-27 - Andrew Mac.md
- Meeting Notes/High Meadows/Loftware/2026-04-27 - Loftware - Attack Plan.md

---
*Created: 2026-05-29*

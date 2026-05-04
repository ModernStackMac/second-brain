# Dual-Path Vendor Dependency Strategy

> When a critical vendor dependency stalls an engagement, proceed with a primary vendor-dependent path and a parallel vendor-independent backup to protect timeline and leverage.

## Problem
- Engagement depends on a vendor-controlled resource (license provisioning, API access, environment setup)
- Vendor approval process is slow, opaque, or politically blocked
- Client engagement is stalling — team losing momentum, stakeholders losing confidence
- Waiting passively means the engagement dies or gets deprioritized

## Solution: Dual-Path Approach

**Primary path:** Continue planning and scoping as if the vendor dependency will resolve. Use the delay strategically — pressure the vendor or client leadership to unblock.

**Backup path:** Architect an alternative that removes the vendor dependency entirely. This could mean:
- Using a different technology (e.g., direct GenAI API calls instead of vendor-specific agent framework)
- Building a custom solution that replaces the vendor feature
- Scoping a reduced engagement that doesn't require the blocked resource

**Key principles:**
1. **Document both paths in the SOW** — budget, guardrails, pros/cons for each. Client sees you have a plan either way.
2. **Use the stall as leverage** — "We've been waiting since [date]. If access doesn't come by [deadline], we execute Plan B." This motivates internal champions.
3. **Keep the backup technically viable** — don't just hand-wave. Architect it enough that switching is credible.
4. **Set a decision deadline** — don't let dual-path drag indefinitely. Pick a date where the team commits to one path.

## When to Use
- Vendor provisioning stalled >2 weeks with no clear resolution
- Client has internal political blockers preventing vendor access
- The alternative is technically feasible (even if less ideal)
- Engagement value justifies maintaining two approaches temporarily

## When NOT to Use
- Vendor dependency is minor and will resolve in days
- No viable alternative exists (dual-path would be fake)
- Client explicitly committed to one path and won't consider alternatives

## Real Example: NBCU Agentforce POC

NBCU Agentforce license provisioning stalled since November 2025. Six months of waiting. The POC was designed to build a title pricing engine using Agentforce.

**Primary (Agentforce):** Continue pressing NBCU leadership for license approval. Schedule a direct call with the NBCU Salesforce rep. Use the stall to escalate.

**Backup (Direct GenAI):** Build the pricing engine using direct GenAI model API calls (Claude/GPT) instead of Agentforce. Same business outcome, different technical path.

**SOW approach:** Updated SOW sent to Ranjit/Naresh with both paths documented — budget, guardrails, Agentforce vs Plan B breakdown. Separate communication to Andrew with pros/cons analysis.

*(Source: Meeting Notes/High Meadows/Cetera/2026-04-30 - Impromptu Call.md)*

## Related Pages
- [[nbcu]] — engagement using this pattern
- [[agentforce]] — vendor platform in the NBCU example

---
*Last updated: 2026-05-04*

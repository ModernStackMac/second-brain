# Pattern: Historical-Match Recommendation Agent

> An agent that recommends a value (price, resolution) by matching a new record to similar historical records — only as good as its matching criteria.

## Problem
A user needs a recommendation (a deal price, a case resolution) and the org holds many closed/resolved records that contain the answer. The temptation is "let the agent look at history and suggest." The hard part isn't retrieval — it's *matching*: which historical records are genuinely comparable, and on what dimensions?

## Solution Approach
1. Define explicit matching dimensions with enough signal to be meaningful (not just one or two coarse attributes).
2. Use Data Cloud (or a unified store) to make historical records queryable across systems.
3. Surface matched records with confidence/scoring and keep a human in the loop for the final call.
4. Be honest about data gaps — if the available attributes can't distinguish meaningfully different outcomes, the recommendation will be confidently wrong.

## When To Use vs Alternatives
- Good when comparable historical records are dense and matchable on strong features.
- Risky when matching features are weak — prefer a guided estimator or analyst-assisted workflow over an autonomous recommendation.

## Real Examples
- **NBCU (pricing-fee recommendation):** recommend deal pricing from closed-won opportunities matched on genre + budget. Mac flagged the core risk: genre + budget alone can't separate a Hallmark series from a rockstar-cast comedy; cast is excluded as a parameter (only top-10 actor names, no success metrics). → [[nbcu/context]]
- **Litify (internal similar-case agent):** surface resolved cases matched by type/subtype/industry to help a rep resolve a new case. Matching quality depends on how KB/cases are tagged. → [[litify/context]]

## Risks / Mitigations
- **Weak matching features → confident wrong answers.** Mitigate by validating feature predictive power before committing, and by presenting matches (not just a single number) with rationale.
- **Scope creep on "what counts as similar."** Define matching dimensions and acceptance criteria up front in the SOW.

## Related Pages
- [[model-context-protocol]] — semantic context is what makes naive matching reliable
- [[articles/agentforce-builder-beta]] — Agent Script determinism for the rule-based parts
- [[nbcu/context]], [[litify/context]]

---
*Last updated: 2026-06-01*
*Sources: Meeting Notes/Stand8/NBCU/2026-04-20; Meeting Notes/Stand8/Litify/2026-04-17*

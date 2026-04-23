# Multi-Agent Voting

> Run multiple AI agents in parallel on the same task; only surface results when consensus is reached. Addresses the fundamental consistency challenge with LLM outputs.

## Problem

Clients expect AI systems to perform like traditional software with near-100% consistency, but AI models inherently produce variable outputs. Even the same model asked the same question multiple times produces different answers. Financial and accounting stakeholders are particularly demanding of consistency.

## Solution

Deploy multiple agents (often in competing pods) to process the same input independently. A supervisor agent or voting mechanism compares outputs and only surfaces results when a consensus threshold is met.

### Variations

1. **Simple majority vote** — run N agents, take the most common answer
2. **Competing pods** — split agents into teams, have teams compete, surface only when both pods unanimously agree (SWAC pattern)
3. **Supervisor synthesis** — a lead agent reviews all outputs, synthesizes the best answer, and flags disagreements for human review

## When to Use

- High-stakes outputs where consistency matters (financial calculations, compliance checks, legal review)
- Customer-facing responses where variability would erode trust
- Any domain where the "right answer" is verifiable and consensus is meaningful

## When NOT to Use

- Creative tasks where variability is a feature, not a bug
- Low-stakes outputs where speed matters more than consistency
- Simple classification tasks where a single well-prompted agent is sufficient

## Real Examples

### SWAC (2026)
10 engineer agents in two competing pods. Pod 1 and Pod 2 are convinced the other is wrong. Only results that both pods unanimously agree on get surfaced. Steven Spector confirmed this is now a "tried and true methodology" rather than a novel approach.

### High Meadow Labs Compliance Agent (planned, 2026)
Team identified this pattern as the solution for the regulatory compliance POC. Financial services clients will demand near-perfect consistency from a compliance agent. Multi-agent voting removes the variability concern without limiting AI's value.

## Implementation Notes

- Cost scales linearly with agent count — balance accuracy vs. API spend
- Works best with deterministic-ish tasks (compliance, data extraction, classification)
- Can combine with temperature=0 settings to reduce baseline variability before adding the voting layer
- Consider async parallel execution to minimize latency impact

## Related Pages
- [[high-meadow-labs]] — compliance POC planning
- [[agentforce]] — related enterprise AI agent patterns

---
*Created: 2026-04-23*
*Sources: Meeting Notes/High Meadows/Internal/Product Calls/2026-04-23 - High Meadow Labs 0.1.md*

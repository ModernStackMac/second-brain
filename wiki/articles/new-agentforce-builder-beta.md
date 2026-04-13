# New Agentforce Builder Released in Beta: Our First Thoughts

> Salesforce releases a redesigned Agentforce Builder in beta — adds Agent Script (declarative markup for deterministic logic) and Agent Canvas (visual no-code editor) for more predictable, controllable AI agents.

**Source:** [New Agentforce Builder Released in Beta: Our First Thoughts](https://www.salesforceben.com/new-agentforce-builder-released-in-beta-our-first-thoughts/) | **Published:** 2026-02-09 | **Tags:** salesforce, ai

## Summary

The new Agentforce Builder, first previewed at Dreamforce 2025, represents a fundamental shift in how agents are built on Salesforce. The legacy builder was widely criticized as a black box — it was hard to predict agent behavior and chaining actions reliably was painful. The redesign introduces two major surfaces: Agent Script (a programmatic markup language for deterministic logic) and Agent Canvas (a visual no-code editor that renders Agent Script as structured blocks).

Agent Script lets developers embed conditional logic (if-else, variables, action sequences) directly into agent reasoning. This is the key advance — you can now define exactly where LLM reasoning applies vs. where rule-based execution takes over. Agent Canvas provides the same control visually, targeting admins and low-code builders, with inline actions, filters, and follow-up action configuration.

Additional improvements include a cleaner flat UI, guided agent creation with inline AI assistance (natural language → topics/actions/Agent Script), and significantly better testing/debugging with step-by-step conversation replay and a revamped debugging panel.

## Key Takeaways

- **Agent Script** is a new markup language enabling conditional if-else, variables, topic transitions, and deterministic action sequences in agent logic — directly addresses the "black box" problem.
- **Agent Canvas** is the no-code equivalent — renders Agent Script as structured visual blocks, with inline actions and follow-up action configuration.
- **Inline actions** let you pre-load context, set variables, or trigger system actions before the LLM takes over — reducing hallucination risk.
- **Testing improvements:** full conversation simulation with step-by-step topic/action tracing and a revamped debugging panel.
- **Currently in open beta** — available via App Launcher → Agentforce Studio. Applies to Enterprise, Performance, Unlimited, and Developer Editions. Consumes standard Agentforce + Generative AI quotas.
- **No confirmed GA date** — Salesforce may announce at TDX 2026 (mid-April 2026).
- **US Army context:** Salesforce's $5.6B US Army contract makes deterministic, auditable AI behavior a business requirement — the new builder directly enables this.
- The core building blocks (topics, actions, instructions, channels, guardrails) are unchanged — existing knowledge still applies.

## Why It Matters

This is directly relevant to Harvey, NBCU, and Litify engagements where Agentforce behavior predictability has been a concern. The ability to enforce deterministic execution paths using Agent Script is exactly what enterprise clients with compliance requirements need. The "words, not code" philosophy also makes it easier to scope admin-buildable vs. dev-buildable agent logic in a project — relevant for consulting engagements where long-term client ownership matters.

Watch for GA announcement at TDX 2026. Worth piloting in sandbox environments on active Agentforce engagements (Harvey is the best candidate given the AI roadmap scope).

## Related Pages

- [[agentforce]] — updated with new builder capabilities
- [[harvey]] — active Agentforce engagement, best candidate for piloting new builder
- [[nbcu]] — Agentforce POC
- [[litify]] — Agentforce service agent
- [[salesforce]] — Salesforce ecosystem news topic

## Sources

- raw/articles/New Agentforce Builder Released in Beta Our First Thoughts.md

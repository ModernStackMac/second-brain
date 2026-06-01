# New Agentforce Builder Released in Beta: Our First Thoughts

> Redesigned Agentforce Builder adds Agent Script (a markup language for deterministic logic) and Agent Canvas (visual editor) for predictable agents.

**Source:** [New Agentforce Builder (SalesforceBen)](https://www.salesforceben.com/new-agentforce-builder-released-in-beta-our-first-thoughts/) | **Published:** 2026-02-09 | **Tags:** salesforce, ai

## Summary
Previewed at Dreamforce 2025, the new builder is a fundamental shift from black-box agent internals to orchestratable reasoning, both declarative and programmatic. Agent Script is Salesforce's own markup language enabling if-else logic, agent variables, and sequenced topics/actions — fixing the legacy builder's unreliable chaining. Agent Canvas is the redesigned no-code editor presenting config as structured blocks that summarize the underlying Agent Script, with inline/system actions that run before LLM reasoning. Core elements (topics, actions, instructions, channels, guardrails) are unchanged — just reorganized for visibility. Adds guided creation (NL → topics/actions/Agent Script) and step-by-step testing/debugging.

## Key Takeaways
- Agent Script = deterministic execution paths (conditionals, variables, transitions, action sequences) embedded in agent reasoning.
- Agent Canvas = visual blocks over Agent Script; inline actions set context before the LLM takes over.
- Open beta via App Launcher → Agentforce Studio; consumes standard Agentforce/GenAI quotas; no confirmed GA date (likely around TDX 2026).
- Embodies the "words, not code" philosophy; determinism push aligns with high-stakes deployments (cited $5.6B US Army contract).

## Why It Matters
The build surface for every Agentforce engagement (Harvey, Litify, NBCU). Agent Script's determinism is the answer to client concerns about agent unpredictability — a key talking point when scoping POCs.

## Related Pages
- [[salesforce-ai-tooling]] — SF AI tooling news
- [[nbcu/context]] — Agentforce POC
- [[harvey/context]] — Agentforce workshop/implementation

## Sources
- Second Brain/raw/articles/New Agentforce Builder Released in Beta Our First Thoughts.md

---
*Last updated: 2026-06-01*

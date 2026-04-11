# Multi-Agent Orchestration
> Using multiple AI agents (different models, different platforms) with specialized capabilities, coordinated through intelligent triage routing for complex business processes.

## Overview
Multi-agent orchestration is a practical alternative to force-fitting all business logic into a single AI system. Different models and platforms excel at different tasks — the key is identifying the seams, building intelligent routing, and letting each agent do what it does best.

Harvey's email intake workflow is a perfect example: incoming emails contain mixed intents (complaints, order updates, pricing requests) that require different downstream actions. Rather than training a single monolithic agent, triage routing classifies the intent and sends each one to the specialized handler.

## Key Details

**The Agent-Agnostic Approach:**
- Not tied to a single platform (Salesforce, OpenAI, Anthropic, etc.)
- Practical: use what works best for each specific task
- Example: Einstein Agent for standard Salesforce ops, Claude for email intent parsing

**Harvey Email Intake Example:**
- Single incoming email might contain:
  - Complaint (escalate to customer service)
  - Order update question (query system, respond)
  - Pricing/discount request (route to sales)
- Problem: three different intents, three different downstream handlers
- Solution: Claude parses email, extracts intents, tags each one, triage router sends to appropriate agent

**Triage Routing:**
- First AI call: classify and decompose the request
- Route each intent to its specialized agent:
  - Standard operations → Einstein Agent (Salesforce-native)
  - Email parsing → Claude (better at intent extraction)
  - Complex reasoning → specialized model (if needed)
  - Structured data extraction → simple parser or rules engine

**Implementation Considerations:**
- Fallback strategy if primary agent fails
- Logging and audit trail for each agent's work
- Human escalation path when confidence is low
- Cost optimization (don't over-agent simple tasks)

**When to Use:**
- Complex workflows with mixed intent
- Need for specialized models per domain
- Existing agents already in place (don't rip-and-replace)
- Cost sensitivity (choose the cheapest agent that solves the problem)

**When NOT to Use:**
- Simple, single-intent workflows (single agent is simpler)
- All necessary capabilities in one platform (no value in splitting)
- Latency-sensitive (orchestration adds round-trip overhead)

## Related Pages
- [[harvey]] — email intake use case
- [[agentforce]] — one component in the orchestration
- [[claude-ai]] — another component, specialized for intent parsing

## Sources
- Meeting Notes/Stand8/Harvey/2026-04-09 - Harvey Salesforce Sync - AI Vision and Agent Force Workshop.md

---
*Last updated: 2026-04-10*

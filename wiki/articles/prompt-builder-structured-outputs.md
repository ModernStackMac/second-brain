# Building AI Automations with Prompt Builder Structured Outputs

> Prompt Builder now supports Structured Outputs — platform-enforced JSON responses shaped by Object-based Lightning types. Eliminates JSON.deserialize boilerplate and makes LLM responses directly consumable by Flow and Apex.

**Source:** [Building AI Automations with Prompt Builder Structured Outputs](https://developer.salesforce.com/blogs/2026/04/building-ai-automations-with-prompt-builder-structured-outputs) | **Published:** 2026-04-02 | **Tags:** salesforce, ai

## Summary

Prompt Builder's Structured Outputs feature moves JSON response enforcement from the prompt into the platform. Previously, anyone using Prompt Builder to classify cases, extract contract data, or drive downstream automation had to beg the model for JSON in the prompt and write a brittle `JSON.deserialize` wrapper class to handle malformed responses, stray Markdown fences, or hallucinated fields.

Now you flip a response format dropdown to JSON and assign an Object-based Lightning type that declares the exact fields (String, Boolean, Integer, Date, DateTime) the response must return. The platform guarantees the model returns valid, parseable JSON in that shape every time. In Flow, the structured fields appear directly as mappable variables on the Action element. In Apex, the Connect API response exposes a `structuredResponse` property you can cast directly — no deserialize, no try-catch, no wrapper classes.

The limitations matter: no nested objects or arrays (return lists as JSON strings and parse manually), no native picklist enforcement (the model can still hallucinate values — add Flow decision / Apex validation), Lightning types aren't versioned (renaming a field silently breaks live automations), and "structured" doesn't mean "correct" — the format is guaranteed, the values still need validation logic.

## Key Takeaways

- Flip response format from Default to JSON in Prompt Builder template.
- Create a new Object-based Lightning type with String/Boolean/Integer/Date/DateTime fields and assign as the response structure.
- Flow: structured response fields appear as variables on the prompt template Action element.
- Apex: Connect API response exposes `structuredResponse` castable to the Lightning type's system-generated Apex class via `LightningTypes` namespace.
- No more `JSON.deserialize`, wrapper classes, or Markdown fence stripping.
- **Limitations:** no nested objects or arrays; picklists not enforced; Lightning types are unversioned (don't edit a live type in place); structured ≠ validated.
- Version Lightning types by creating new ones for significant changes rather than editing existing ones.

## Why It Matters

The [[json-deserialize-refactor]] pattern MSS has applied on CREtelligent (and documented as a reusable pattern) becomes obsolete for net-new Prompt Builder-driven work — the platform now handles what Apex wrapper classes used to handle. Direct relevance to:

- **CREtelligent:** any future prompt-driven classification or extraction should use Structured Outputs instead of hand-rolled Apex parsing.
- **Harvey:** email intent parsing (multi-intent emails with complaints/orders/P&A) is a canonical Structured Outputs use case — single template returning `intent`, `priority`, `summary`, etc.
- **Litify:** case classification and KB suggestion flows fit cleanly into the pattern.
- **MAI:** any AI-assisted field population work benefits from typed responses.

The no-nested-objects limit is the real constraint — anything with line items or repeating rows still needs a JSON-string field and Apex parsing. Plan data models around it. Also update the [[json-deserialize-refactor]] pattern page to note Structured Outputs as the preferred approach for Prompt Builder workflows.

## Related Pages

- [[json-deserialize-refactor]] — superseded for Prompt Builder work; still applies to general Connect API integrations
- [[agentforce]] — prompt templates feed Agentforce actions
- [[salesforce]] — platform feature tracker
- [[harvey]] — email intent parsing candidate
- [[litify]] — case classification candidate
- [[cretelligent]] — JSON parsing heritage + future Prompt Builder work

## Sources

- raw/articles/2026-04-18T074249-0500-Building AI Automations with Prompt Builder Structured Outputs.md

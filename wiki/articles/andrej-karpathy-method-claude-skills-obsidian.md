# Andrej Karpathy Method: Claude Skills + Obsidian Explained

> The LLM wiki pattern for building self-improving knowledge bases using Claude, Skills, and Obsidian as your knowledge IDE.

**Source:** [Andrej Karpathy Method: Claude Skills + Obsidian Explained](https://x.com/polydao/status/2042203352054771748) | **Published:** 2026-04-09 | **Author:** @polydao | **Tags:** ai, learning

## Summary

This post from @polydao explains Andrej Karpathy's approach to knowledge management: treating the LLM not as a chatbot but as a compiler and librarian that builds and maintains a structured wiki from raw source materials. The core loop is simple: dump raw data (articles, papers, transcripts) into a raw/ folder, the LLM compiles that into interlinked markdown files in wiki/, you explore it in Obsidian's graph view and backlinks, then ask complex questions that generate new reports filed back into the wiki. The key insight is stateless vs. stateful usage — instead of starting from scratch every conversation, your second brain retains and compounds knowledge over time.

The post includes a practical setup guide using Claude Code and Skills (kb-compile, kb-report, kb-lint) to automate the ingestion and maintenance workflows, plus MCP-Obsidian integration so Claude can read and write directly into your vault.

## Key Takeaways

- **LLM as compiler, not chatbot:** The mental shift from asking questions to building a persistent, interlinked knowledge graph that gets smarter with each query.
- **Three-layer architecture:** raw/ (immutable sources) → wiki/ (LLM-generated markdown) → reports/ (answers and outputs filed as permanent assets).
- **Obsidian is the IDE:** Backlinks, graph view, Dataview, and Marp plugins turn Obsidian into a knowledge IDE where the human reads and the LLM writes.
- **Skills as the execution layer:** kb-compile, kb-report, kb-lint, and morning-briefing skills automate ingest, query, linting, and daily context workflows.
- **MCP-Obsidian integration:** Claude can list_files, search, patch_content, append_content directly into your vault without copy-paste.
- **Health checks matter:** Periodic linting passes catch contradictions, orphan pages, unsourced claims, and suggest new connection patterns.
- **Finetuning endgame:** The natural end state: a large wiki becomes a finetuning corpus to bake knowledge directly into model weights.
- **Weekend MVP plan:** Day 1 setup and capture (Obsidian + clipper), Day 2 build kb-compile and kb-report skills and test the loop.

## Why It Matters

This pattern solves the core problem with current LLM usage: statelessness and ephemera. Chat sessions disappear, knowledge has to be re-derived, and there's no accumulation. The wiki pattern inverts that — every session compounds into better future sessions. For Mac, this directly applies to consulting work (project context, client knowledge, decision logs) and personal learning (AI trends, tools, patterns). The Skills-based automation means maintenance stops being a burden, and Obsidian's graph view surfaces unexpected connections and gaps. If implemented as described, this could become the backbone of the Second Brain vault itself.

## Related Pages

- [[llm-knowledge-management]] — Accumulator for this emerging pattern and tools
- [[obsidian-ecosystem]] — Overview of Obsidian plugins and workflows
- [[claude-ai]] — Claude's role in LLM-driven knowledge systems
- [[scheduled-tasks]] — Automation layer for morning briefings and periodic linting

## Sources

- raw/articles/Andrej Karpathy Method Claude Skills + Obsidian Explained.md

---
*Last updated: 2026-04-11*

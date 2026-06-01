# Andrej Karpathy Method: Claude Skills + Obsidian Explained

> Build a self-improving knowledge base where the LLM is the compiler/librarian and you mostly read — using Obsidian, Claude Code, and Skills.

**Source:** [Karpathy Method (@polydao)](https://x.com/polydao/status/2042203352054771748?s=46) | **Published:** 2026-04-09 | **Tags:** ai, learning

## Summary
A how-to for the LLM-maintained "living wiki" pattern attributed to Andrej Karpathy: dump raw sources (articles, transcripts, repos) into `raw/`, have an LLM compile them into a structured, backlinked wiki in `wiki/`, browse in Obsidian's graph view, ask questions that get written as new report files, and periodically run an LLM "health check" to clean inconsistencies. The mental shift is "LLM as compiler and librarian, not chatbot" — the human reads and curates, the LLM writes and maintains. Claude Code amplifies this via filesystem access and reusable Skills (packaged SKILL.md + scripts). Includes the MCP-for-Obsidian setup (Local REST API plugin + claude_desktop_config) that lets Claude read/write the vault directly.

## Key Takeaways
- Full loop: capture → compile → navigate → query (answers as files) → lint → compounds.
- Six operations incl. weekly "knowledge linting" for contradictions, orphan pages, duplicates, unsourced claims.
- Skills encode personal style/workflows once, reused across Claude apps/Code/API.
- mcp-obsidian (MarkusPfundstein, 3.3k stars) exposes list/read/search/patch/append/delete over the vault — exactly the toolset powering this Second Brain.

## Why It Matters
This is the blueprint for the very system being built here. Validates the raw/ → wiki/ → reports/ + schema + index/log architecture and the scheduled ingest/lint cadence.

## Related Pages
- [[llm-knowledge-management]] — the pattern, accumulated
- [[articles/claude-obsidian-second-brain]] — companion piece with the source prompt
- [[obsidian]] — Obsidian tool page

## Sources
- Second Brain/raw/articles/Andrej Karpathy Method Claude Skills + Obsidian Explained.md

---
*Last updated: 2026-06-01*

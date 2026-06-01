# Claude + Obsidian Have to Be Illegal

> A practical walkthrough of standing up an LLM-maintained second brain in minutes, including the original Karpathy "LLM Wiki" prompt.

**Source:** [Claude + Obsidian (@defileo)](https://x.com/defileo/status/2042241063612502162?s=46) | **Published:** 2026-04-09 | **Tags:** ai, learning

## Summary
A hands-on companion to the Karpathy method. The author describes a setup where, each morning, Claude already knows who they are, what they're working on, every tool/task/idea — a second brain that compounds daily. The piece embeds the full "LLM Wiki" idea-file prompt that contrasts the pattern with RAG: instead of re-deriving knowledge per query, the LLM incrementally builds and maintains a persistent, compounding wiki. Three layers: immutable raw sources, the LLM-owned wiki, and a schema doc (CLAUDE.md/AGENTS.md) that makes the LLM a disciplined maintainer. Operations are Ingest / Query / Lint, with index.md (content catalog) and log.md (chronological, grep-friendly `## [date] ingest | Title` prefixes). Includes ready-to-run `claude -p` commands for ingest, lint, morning briefing, and transcript processing (decisions → Decision-Log, actions → tracker, client note).

## Key Takeaways
- Persistent compounding wiki vs stateless RAG is the core distinction.
- Schema file is the key config that turns a chatbot into a wiki maintainer.
- index.md = content-oriented catalog; log.md = append-only timeline; both avoid needing embedding RAG at ~100-source scale.
- Transcript→system command mirrors this vault's ingest: extract decisions/actions, file to Decision-Log and commitments, create client note.

## Why It Matters
This is essentially the spec this Second Brain implements. The transcript-processing and morning-briefing commands map onto the scheduled tasks already configured (ingest, synthesis, briefing).

## Related Pages
- [[llm-knowledge-management]] — the pattern, accumulated
- [[articles/karpathy-claude-skills-obsidian]] — companion piece
- [[obsidian]] — Obsidian tool page

## Sources
- Second Brain/raw/articles/Claude + Obsidian have to be illegal.md

---
*Last updated: 2026-06-01*

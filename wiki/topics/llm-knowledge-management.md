# LLM Knowledge Management

> The emerging pattern of using LLMs to build, maintain, and query persistent knowledge bases — treating the LLM as a compiler and librarian rather than a stateless chatbot.

## Overview

This is the next evolution in how people work with AI. Instead of asking a question, getting an answer, and losing context, the LLM wiki pattern creates a living, compounding knowledge system that gets smarter with every interaction. The core idea comes from Andrej Karpathy (ex-OpenAI, Tesla): shift LLM usage from writing code and answering questions to manipulating and maintaining markdown-based knowledge stored as files.

The architecture is simple: raw sources (articles, transcripts, data) feed into a wiki layer that the LLM owns and maintains. You query the wiki, and answers get filed back as permanent assets. Maintenance is automated via periodic linting passes. Over time, the wiki becomes a persistent, interlinked corpus that serves as documentation, research archive, decision log, and finetuning corpus all at once.

## Key Developments

### The Karpathy Method (2026-04-09)
[[andrej-karpathy-method-claude-skills-obsidian]] — The foundational post outlining raw/ → wiki/ → reports/ architecture, Claude Code + Skills for automation, and MCP-Obsidian for direct vault integration. Introduces the concept of the LLM as compiler/librarian and Obsidian as knowledge IDE with graph view, backlinks, and Dataview.

### Maintenance as the Killer Problem (2026-04-09)
[[claude-obsidian-illegal]] — @defileo's pragmatic take: most second brains fail because bookkeeping piles up. LLMs solve this permanently. Includes full Andrej Karpathy LLM Wiki prompt, CLI examples (ingest/query/lint), morning briefing automation, and Action-Tracker/Decision-Log patterns. Key insight: Vannevar Bush's Memex (1945) was the vision; the LLM is the maintenance engine that Bush couldn't solve for.

## Core Operations

**Ingest:** New source lands in raw/ → LLM reads it, extracts key ideas, writes/updates wiki pages → touches 10-15 related pages with new connections and cross-references → logs the operation.

**Query:** Question asked → LLM consults index.md → reads relevant pages (modern context windows make this viable at personal scale) → synthesizes answer → files result back to wiki/ (reports, comparisons, analyses) so insights don't evaporate into chat history.

**Lint:** Periodic health check → scan for contradictions, orphan pages, outdated claims, unsourced assertions, missing cross-references → write health report with specific fixes → maintain integrity as the wiki grows.

**Morning Briefing:** Cron job runs daily → reads Memory.md for open actions → scans raw/ for new sources from last 24h → prints clean briefing to terminal. Set once, runs forever.

## The Pattern Works Because

- **Maintenance is the bottleneck, not initial setup:** Most wiki systems die from bookkeeping burden. LLMs don't get bored, don't forget updates, can touch 15 files in a single pass. Cost of maintenance ≈ zero.
- **Stateful, not stateless:** Today's answer becomes tomorrow's context. Your terminology and frameworks become canonical wiki pages. Six months of work = a corpus a model can ingest in one context window.
- **Consolidation over fragmentation:** All your knowledge (work, research, learning, decisions) in one system, not scattered across five apps and chat sessions.
- **Compounding returns:** Every query and source strengthens the wiki. The longer you use it, the faster it answers new questions.
- **Plain markdown, fully portable:** Not locked in a closed SaaS. Version controlled with Git. Can be served as-is or finetuned into a custom model.

## Why This Matters for Consulting & Personal Learning

For someone like Mac running a consulting practice + continuous learning:
- **Client context system:** Every call transcript auto-processed → decisions and actions filed → client notes with backlinks → never lose context again.
- **Project memory:** Decision-Log and Action-Tracker live in the wiki, accessible with full provenance. No more "who decided that and when?"
- **Learning compounding:** Articles, research, ideas all feed into a growing knowledge graph. Patterns emerge over time instead of being rediscovered.
- **Operational automation:** Morning briefings surface what's due. Lint passes surface contradictions and gaps. Maintenance is "run a command" not "spend 2 hours reorganizing."

## Stack & Tools

- **Obsidian:** Local-first markdown editor. Graph view, backlinks, Dataview plugin for queries, Marp for slides, native markdown.
- **Claude Code + Skills:** Automate kb-compile, kb-report, kb-lint, morning-briefing workflows.
- **MCP-Obsidian:** Direct Claude → vault integration without copy-paste. List files, search, patch content, append content.
- **Git:** Version control and backup of the entire wiki.
- **Optional: Ollama:** Run local LLM for privacy-sensitive ingests.

## Endgame: Finetuning

As the wiki grows large enough (hundreds of sources, thousands of pages), the natural next step is finetuning. Instead of relying on massive context windows, you compress the wiki into a custom model that "knows" your domain, terminology, and thinking. For teams, this becomes an internal knowledge bot. For individuals, a personalized LLM.

## Related Pages

- [[obsidian-ecosystem]] — Obsidian plugins, MCP, workflow details
- [[claude-ai]] — Claude's role in the stack
- [[scheduled-tasks]] — Automation layer for cron jobs and periodic operations
- [[andrej-karpathy-method-claude-skills-obsidian]] — The foundational post
- [[claude-obsidian-illegal]] — Pragmatic implementation with examples

## Sources

- raw/articles/Andrej Karpathy Method Claude Skills + Obsidian Explained.md
- raw/articles/Claude + Obsidian have to be illegal.md

---
*Last updated: 2026-04-11*

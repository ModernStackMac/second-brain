# Obsidian

> Local-first, markdown-based knowledge editor — the substrate for this Second Brain and a flexible productivity OS via plugins.

## Overview
Obsidian stores notes as plain markdown in a local vault, with backlinks and a graph view that make relationships visible. It's the human-facing window into the LLM-maintained wiki: the LLM writes/edits via the Local REST API + mcp-obsidian, and Mac browses, follows links, and inspects the graph.

## How It Fits the Stack
- **Vault** = the Second Brain (raw/, wiki/, reports/, Meeting Notes/, etc.).
- **Local REST API plugin** + **mcp-obsidian** (MarkusPfundstein) expose list/read/search/patch/append/delete tools so Claude can maintain the vault directly. Obsidian must be open for the REST API to run.
- **Graph view / backlinks** surface hubs and orphan pages (knowledge gaps).

## Key Plugins
- **Dataview** — queryable databases over frontmatter/tags (powers dashboards).
- **Templater** — reusable templates with variables/logic (quick-capture).
- **Obsidian Git** — version history + backup for the vault.
- **Tasks, Kanban, Calendar** — to-dos, boards, daily-note navigation.

## Related Pages
- [[llm-knowledge-management]] — the pattern Obsidian enables
- [[articles/obsidian-6-free-plugins]] — plugin rundown
- [[articles/karpathy-claude-skills-obsidian]] — mcp-obsidian setup

---
*Last updated: 2026-06-01*

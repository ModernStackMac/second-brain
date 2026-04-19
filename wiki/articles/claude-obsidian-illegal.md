# Claude + Obsidian Have to Be Illegal

> A practical, tactical walkthrough of the LLM wiki pattern with focus on solving the maintenance problem that kills most second brains.

**Source:** [Claude + Obsidian have to be illegal](https://x.com/defileo/status/2042241063612502162) | **Published:** 2026-04-09 | **Author:** @defileo | **Tags:** ai, learning

## Summary

@defileo's post is a passionate, implementation-focused take on the same LLM wiki pattern. The claim: every morning Claude already knows who you are, what you're working on, your tools, tasks, and every idea you've captured. That's not a chatbot, it's a second brain that never sleeps. The post includes Andrej Karpathy's full LLM Wiki prompt (the conceptual foundation) plus practical CLI examples (claude -p "...") showing real ingest, query, and lint workflows. The core argument is maintenance: human-maintained wikis die because bookkeeping piles up faster than value. LLMs don't forget to update cross-references, don't get bored, and can touch 15 files in one pass. The maintenance cost is near zero, so the wiki stays healthy automatically. The post connects this to Vannevar Bush's Memex (1945) — Bush's vision was private, curated, with connections as valuable as documents, but he couldn't solve the maintenance problem. Now the LLM solves it.

## Key Takeaways

- **Every morning briefing:** A single cron job (CLI example included) runs every morning and surfaces today's open actions from Memory.md + new raw sources from the last 24 hours.
- **Memory.md as identity context:** Seed your system with a 20-minute Claude conversation about your work, goals, and what you're building. That's enough to make Claude feel like it knows you day one.
- **Maintenance is what kills second brains:** Human-maintained wikis decay as bookkeeping grows. LLMs break this cycle permanently — reorganizing the entire vault is a single prompt.
- **Three operations with CLI examples:** Ingest (clip article → Claude processes → updates 10-15 wiki pages), Query (Claude reads index → pulls relevant pages → answers with citations → saves insights back to wiki), Lint (weekly health check for contradictions, orphans, outdated claims).
- **Process transcripts automatically:** Read a call transcript → extract decisions and actions → file to Action-Tracker.md and Decision-Log.md → create a client note with backlinks. Nothing lost to chat history.
- **Vannevar Bush connection:** The Memex (1945) was the closest precursor — personal, curated, associative. The missing piece was maintenance. LLMs provide that.
- **Git for version history:** Your wiki is a git repo of markdown — automatic versioning, branching, collaboration.

## Why It Matters

For Mac, this is especially relevant because it directly addresses the consulting workflow: every client call, every decision, every action item gets filed and cross-referenced automatically. The vault becomes not just a personal knowledge base but a client context system. Decision-Log and Action-Tracker become living project artifacts. The morning briefing surfaces what's due today without manual checking. And the emphasis on maintenance as the killer (rather than the initial setup) is refreshingly pragmatic — most systems fail not because of grand design but because they require daily housekeeping that humans skip. The CLI-based approach also means this works headless, in the background while Mac works elsewhere.

## Related Pages

- [[llm-knowledge-management]] — The pattern and why it works
- [[obsidian-ecosystem]] — Obsidian setup and plugins
- [[claude-ai]] — Claude's role and API patterns

## Sources

- raw/articles/Claude + Obsidian have to be illegal.md

---
*Last updated: 2026-04-19*

# Obsidian Ecosystem

> Obsidian as a knowledge IDE: local-first markdown, plugin architecture, and integration patterns that turn a simple note app into a complete personal OS.

## Overview

Obsidian is a local-first, markdown-based knowledge editor built for personal vaults. The core app is free. The real power comes from the community plugin ecosystem — a library of 1000+ plugins that extend Obsidian from "note app" to "knowledge IDE." When combined with the right plugins, Obsidian can consolidate your notes, tasks, planning, content workflows, backups, and automation into a single system, replacing dozens of paid subscriptions.

The platform philosophy: your knowledge should be yours, stored locally as plain markdown and images, fully portable, fully version-controlled. Obsidian just provides the viewing and querying layer.

## Core Features

**Graph view:** Visualize your entire vault as a network of interconnected nodes. Spot clusters of knowledge and isolated orphan pages. Essential for understanding the shape of your wiki as it grows.

**Backlinks & unlinked mentions:** See everywhere a concept is referenced across the vault. Surface missed connections. Core to the knowledge compilation workflow.

**Folders & tagging:** Organize by structure and metadata. Support both taxonomy and folksonomy approaches.

**Daily notes:** Built-in support for journaling, daily planning, and date-based navigation.

**Local REST API:** Obsidian can expose a local HTTP endpoint for external tools and LLMs to read/write files directly.

## Essential Plugins

### Knowledge Compilation & Querying

**Dataview** — Transform your vault into a queryable database. Write inline queries to pull notes by tags, frontmatter properties, links, and dates. Create dynamic dashboards: "Active Projects," "Books to Read," "Decisions Made This Month." Replaces Notion databases for anyone who wants structure + markdown flexibility. Best for project tracking, content pipelines, book notes.

**Obsidian Web Clipper** — Browser extension that converts any web article to clean markdown with URL, title, date, author, and tags. Crucial for getting sources into raw/ with zero friction. (Not technically a plugin, but essential to the workflow.)

### Task & Workflow Management

**Tasks** — Write to-do items directly in notes and aggregate them into dashboards. Add due dates, priorities, recurring rules, and filters. Key advantage: tasks stay attached to their project context instead of living in a separate app. Replaces Todoist. Best for daily planning, project checklists, recurring routines.

**Kanban** — Visual board (columns: Ideas, In Progress, Review, Done) that lives inside your vault. Move cards like Trello, but everything stays connected to your notes. Works well for creators and freelancers who need visual pipeline management. Best for content calendars, project boards, simple workflow tracking.

**Calendar** — Date-based sidebar for navigating daily notes. Simple but fast. No need to pay for Fantastical when you just want quick access to your daily entries. Best for journaling, daily planning, date-based review habits.

**Templater** — Reusable note templates with variables, dates, JavaScript logic, and interactive prompts. Automate meeting note structure, content outlines, repeated workflows. Replaces TextExpander for markdown-based repetitive text. Best for meeting notes, project kickoffs, recurring content formats.

### Backup & Reliability

**Obsidian Git** — Sync your vault through Git instead of trusting a closed sync tool. Real version history, restore capability, multi-device safety. If a note is corrupted or accidentally deleted, Git gives you the full history. Essential for long-term note storage and team collaboration. Best for backups, version control, multi-device safety.

### Advanced Knowledge Tools

**Marp** — Markdown-based slide decks. Write a .md file, it renders as a presentation. Integrated with Obsidian. Useful for generating talks and pitches directly from your wiki.

**Dataview + Templater combined:** Dynamic, auto-populated project dashboards. Example: a "Current Projects" page that lists all pages tagged #active with their status, due date, and owner — updated automatically without manual touch.

## Integration Patterns

### With Claude (via MCP-Obsidian)

Claude can interact directly with your vault without copy-paste. Supported operations:

- `list_files_in_vault` — browse full vault structure
- `list_files_in_dir` — explore a specific folder
- `get_file_contents` — read any file
- `search` — find all notes mentioning a topic
- `patch_content` — insert content under a heading or block reference
- `append_content` — add to the end of an existing file
- `delete_file` — remove a file

**Real examples:**
- "Find all notes mentioning [topic] and give me a summary of each"
- "Take my last meeting transcript and create a summary.md I can email"
- "Add this decision to my Decision-Log.md under the Q2 section"

### With Obsidian Web Clipper

Seamless capture: see an article → clip it → lands in raw/articles/ with full metadata (URL, title, author, date, tags). Zero friction on the input side.

### With Git

Your entire vault is a Git repo. Version history, branching, collaborative editing, CI/CD integration (e.g., auto-commit on save, deploy wiki as static site).

### With Dataview

Once you establish frontmatter conventions (tags, dates, properties), Dataview queries become powerful. Examples:
- `LIST WHERE tags contains "project" AND status = "active"`
- `TABLE status, dueDate FROM "" WHERE assigned = "Mac"`
- `CALENDAR created-date FROM "wiki/articles/"`

## Workspace Setup

**Folders:**
- `raw/articles/` — clipped web pages and sources (immutable)
- `raw/projects/` — project docs and configs
- `wiki/` — LLM-compiled knowledge
  - `wiki/articles/` — summaries of each article
  - `wiki/topics/` — accumulator pages (like this one)
  - `wiki/projects/` — project context (one subfolder per engagement)
  - `wiki/concepts/` — domain knowledge
  - `wiki/patterns/` — reusable solutions
  - `wiki/tools/` — software and platforms
  - `wiki/entities/` — people, orgs, vendors
- `wiki/index.md` — master index
- `wiki/log.md` — operation log
- `reports/` — output files (markdown, slides, charts)
- `assets/` or `images/` — attachments

**Settings:**
- Enable "Attachment folder path" (e.g., `raw/assets/`)
- Bind hotkey for "Download attachments for current file" (e.g., Ctrl+Shift+D)
- Install community plugins as needed
- Configure frontmatter defaults (date, tags, template)

## Why This Stack Works

**Consolidation:** One system for notes, tasks, planning, tracking, backups, and automation. No context-switching between five apps.

**Ownership:** Plain markdown stored locally. Full export and portability. No vendor lock-in.

**Speed:** Graph view and search are instant. Dataview queries run locally. No waiting for cloud sync.

**Flexibility:** Plugins are optional. Start with just notes and backlinks, add structure (Dataview), speed (Templater, Tasks), and reliability (Git) as you grow.

**Cost:** Core app is free. Plugins are free. Git and local storage are free. A unified setup can replace $200+/month in subscriptions.

## Best For

- **Solo creators** managing content, ideas, and publishing in one place
- **Freelancers** tracking client work, deliverables, and time
- **Founders** coordinating projects, decisions, and tasks
- **Researchers** building deep knowledge graphs on specific topics
- **Consultants** maintaining project context, decision logs, and action trackers
- **Students** combining notes, deadlines, and reading lists
- **Anyone** tired of paying for five apps that each do one job

## Related Pages

- [[llm-knowledge-management]] — LLM-driven compilation layer on top of Obsidian
- [[andrej-karpathy-method-claude-skills-obsidian]] — The knowledge IDE pattern
- [[claude-obsidian-illegal]] — Practical implementation workflows
- [[obsidian-plugins-replace-paid-apps]] — Detailed breakdown of six key plugins
- [[claude-ai]] — Claude integration via MCP-Obsidian

## Sources

- raw/articles/Andrej Karpathy Method Claude Skills + Obsidian Explained.md
- raw/articles/Claude + Obsidian have to be illegal.md
- raw/articles/These 6 FREE Obsidian PLUGINS quietly replace $200 worth of PAID APPS.md

---
*Last updated: 2026-04-11*

# Second Brain — Quick Start

## How to Use

### Adding Content
Drop files into the appropriate `raw/` subfolder:

- `raw/projects/` — SOWs, solution docs, project deliverables, Salesforce configs
- `raw/articles/` — Interesting articles, blog posts, research (use Obsidian Web Clipper)
- `raw/discovery/` — Client discovery notes, requirements docs, interview notes
- `raw/meeting-notes/` — Meeting transcripts, action items, call notes
- `raw/templates/` — Reusable doc templates and frameworks

### Processing Content
Tell Claude to ingest new sources:

- "Ingest everything in raw/articles/" — processes all unprocessed articles
- "Ingest raw/projects/client-x-sow.md" — processes a specific file
- "What do we know about [client/topic]?" — queries the wiki
- "Create a solution doc for [scenario]" — generates deliverables from wiki knowledge
- "Lint the wiki" — runs health checks and fixes issues

### Tips
- The more you feed it, the better it gets. Start with your most recent project docs.
- Clip interesting articles with Obsidian Web Clipper (Chrome extension).
- After ingesting 20-30 sources, the cross-references start getting really useful.
- Run a lint pass every couple weeks to keep things clean.

### Obsidian Web Clipper Setup
1. Install the Obsidian Web Clipper Chrome extension
2. Set the default save location to `Second Brain/raw/articles/`
3. Clip any article and it drops straight into your raw sources

### What NOT to Do
- Don't manually edit files in `wiki/` — Claude maintains those
- Don't delete files from `raw/` — they're your source of truth
- Don't reorganize the folder structure without updating SCHEMA.md

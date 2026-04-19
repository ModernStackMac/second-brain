# Second Brain — Quick Start

Lean entry point. Full details live in `SYSTEM-GUIDE.md` and `SCHEMA.md`.

## How to Use

### Adding Content

Drop files into the right `raw/` subfolder:

- `raw/projects/{slug}/` — SOWs, solution docs, configs, client discovery notes
- `raw/articles/` — Articles, blog posts, research (Obsidian Web Clipper drops here)
- `raw/templates/` — Templater templates (`quick-capture.md` lives here)
- `Meeting Notes/` — Auto-populated by Fathom. Don't hand-edit.

### Processing Content

Tell Claude to ingest, query, create solution docs, or lint:

- "Ingest everything in raw/articles/"
- "Ingest raw/projects/client-x-sow.md"
- "What do we know about [topic]?"
- "Create a solution doc for [scenario]"
- "Lint the wiki"
- `/kb-ingest-now` — immediate processing, no waiting for the cron

### Commitments

Live in `commitments.md` at the vault root. Claude extracts them from meetings using a 4-gate rule (owner=Mac, firm verb, concrete next step, deduped). `Action-Tracker.md` is retired — don't re-create it.

### Weekly Synthesis

Runs every Monday. Produces `wiki/reports/weekly-synthesis-{date}.md` with cross-project analysis, trends, and surfaced connections.

### Tips

- Feed it more — the more sources, the better the output.
- Clip articles with the Obsidian Web Clipper extension.
- Cross-references get genuinely useful after 20–30 sources.
- Run a lint pass every couple of weeks.

### Obsidian Web Clipper Setup

1. Install the Obsidian Web Clipper Chrome extension
2. Set default save location to `Second Brain/raw/articles/`
3. Clip any article — it lands in raw sources and gets picked up on the next ingest

### What NOT to Do

- Don't manually edit files in `wiki/` — Claude maintains those
- Don't delete files from `raw/` — they're the source of truth
- Don't reorganize folders without updating `SCHEMA.md` and `changelog.md`
- Don't paste meeting transcripts into `wiki/` — the ingest pipeline handles routing

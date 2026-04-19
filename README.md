# Second Brain — Quick Start

Lean entry point. For full details see `SYSTEM-GUIDE.md`, `SCHEMA.md`, and `PEER-SETUP-GUIDE.md`.

## How to Use

### Adding Content

Drop files into the appropriate `raw/` subfolder:

- `raw/projects/` — SOWs, solution docs, project deliverables, Salesforce configs, client discovery notes
- `raw/articles/` — Articles, blog posts, research (Obsidian Web Clipper drops here)
- `raw/meeting-raw/` — Fathom/Granola transcripts (auto-populated by scheduled ingests — don't hand-edit)
- `raw/templates/` — Reusable doc templates and frameworks

Note: `raw/discovery/` and `raw/meeting-notes/` are legacy paths — discovery lives under `raw/projects/`, meetings under `raw/meeting-raw/`.

### Processing Content

Tell Claude to:

- "Ingest everything in raw/articles/" — processes new articles into `wiki/`
- "Ingest raw/projects/client-x-sow.md" — processes a specific file
- "What do we know about [client/topic]?" — queries the wiki
- "Create a solution doc for [scenario]" — generates deliverables from wiki knowledge
- "Lint the wiki" — runs health checks
- "/kb-ingest-now" — on-demand ingest without waiting for the 4-hour cron

### Commitments

Firm commitments live in `dashboards/commitments.md`. Claude extracts them from meetings using a 4-gate rule (owner=Mac, firm verb, concrete next step, deduped). The old `Action-Tracker.md` pattern is retired — don't re-create it.

### Tips

- The more you feed it, the better it gets. Start with recent project docs.
- Clip articles with the Obsidian Web Clipper extension.
- After 20–30 sources, cross-references get genuinely useful.
- Run a lint pass every couple weeks.

### Obsidian Web Clipper Setup

1. Install the Obsidian Web Clipper Chrome extension
2. Set default save location to `Second Brain/raw/articles/`
3. Clip any article — it drops straight into raw sources and gets picked up on the next `kb-ingest` tick

### What NOT to Do

- Don't manually edit files in `wiki/` — Claude maintains those (it reads + writes wiki/dashboards, never raw/)
- Don't delete files from `raw/` — they're the source of truth
- Don't reorganize the folder structure without updating `SCHEMA.md` and `_System/changelog.md`
- Don't paste meeting transcripts into `wiki/` manually — let the selector pipeline pick the winner

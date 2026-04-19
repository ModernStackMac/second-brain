# Wiki Lint Report

**Run date:** 2026-04-19
**Total pages scanned:** 72 markdown files under `wiki/`
**Issues found:** 6 critical, 11 recommended, 5 informational

> Autonomous scheduled run. `project-mapping.md` was not found in the accessible vault (see note under Critical). Slug-integrity checks that require the mapping were executed against SCHEMA.md and the previous lint's canonical slug list — results are labeled where the mapping would have been authoritative.

## Critical Issues

### 1. `project-mapping.md` missing from vault
**Path checked:** `Second Brain/project-mapping.md` and vault root (parent of `Second Brain/`)
**Impact:** SCHEMA.md and TAGS.md both declare this file as the single source of truth for project slugs, Jira/Linear workspace+key pairs, keyword matching, and Meeting Notes routing. Without it, checks 10a/10c/10f cannot be authoritatively executed and any ingest, story-sync, or routing tool that depends on the mapping will silently fall back to heuristics.
**Suggested fix:** Restore or regenerate `project-mapping.md` at the canonical location. The expected schema is documented in SCHEMA.md § "Project Mapping" and TAGS.md § "Project tags".

### 2. Broken index.md entry → nonexistent file
- `wiki/index.md:18` — `[[internal/flex-dash/journal]]` points to a journal that does not exist. The folder `wiki/projects/internal/flex-dash/` contains only `stories-hm.md` (1 ticket: IP-8).
**Suggested fix:** Either create `wiki/projects/internal/flex-dash/journal.md` if this remains an active engagement, or update the index entry to `[[internal/flex-dash/stories-hm]]` (or remove the entry and move IP-8 into `internal/meadow/`, since Flex-Dash development is "fully paused to redirect capacity" to MAI per the MAI overview).

### 3. Broken `[[wiki-links]]` — no target page
Real broken links (log.md and reports/ placeholders excluded):

- `wiki/tools/claude-ai.md:21` — `[[MCP-Obsidian]]` (unchanged from 2026-04-18 lint)
- `wiki/projects/mai/overview.md:58` — `[[meadow]]` — alias not set on `internal/meadow/overview.md`. Suggested fix: add `meadow` to that file's `aliases` list (currently `[hms-capacity-planning, capacity-planning, meadow-app]`), or rewrite as `[[internal/meadow/overview]]`.
- `wiki/projects/internal/high-meadow-website/context.md:10` — `[[meadow]]`
- `wiki/projects/internal/high-meadow-website/context.md:98` — `[[meadow]]`
- `wiki/projects/internal/meadow/overview.md:121` — `[[high-meadow-website]]` — the high-meadow-website folder has no `overview.md`, so aliasing isn't possible without creating one. Rewrite as `[[internal/high-meadow-website/context]]`.
- `wiki/projects/internal/meadow/context.md:47` — `[[high-meadow-website]]` (same fix)
- `wiki/projects/nbcu/overview.md:47` — `[[mcp]]` (unchanged from 2026-04-18 lint; suggested: create `wiki/tools/mcp.md` or inline)
- `wiki/projects/cretelligent/overview.md:67` — `[[meadow]]`
- `wiki/articles/claude-obsidian-illegal.md:30` — `[[scheduled-tasks]]` (unchanged)
- `wiki/articles/andrej-karpathy-method-claude-skills-obsidian.md:33` — `[[scheduled-tasks]]` (unchanged)
- `wiki/articles/obsidian-plugins-replace-paid-apps.md:30` — `[[productivity-systems]]` (unchanged)
- `wiki/topics/llm-knowledge-management.md:61` — `[[scheduled-tasks]]` (unchanged)

Intentional placeholders (informational only, not counted above):
- `wiki/reports/mai-project-overview.md:49` & `:57` — `[[patterns/custom-address-on-account]]` — report explicitly notes this page is still to be created.

### 4. Mis-prefixed wiki-link (vault-path form)
- `wiki/projects/internal/high-meadow-website/files/Website-Feedback-2026-04-17.md:11` — `[[Second Brain/wiki/projects/mai/context]]`.
  - **Two problems:** (a) wiki-links should not include the vault root (`Second Brain/…`); (b) the target references the MAI project but this file belongs to the website project.
  - **Suggested fix:** replace with `[[context]]` (resolves to sibling `context.md`) if the punch list actually lives in the website project, or `[[internal/high-meadow-website/journal]]` for explicitness.

### 5. Potentially mis-routed ticket — suspected cross-project bleed
- `wiki/projects/lnw/stories-f2.md` — contains ticket `MSS-74` alongside `LNW-112/189/190/191/192`. `MSS` is the canonical prefix for Modern Stack Systems (per consistent usage across the wiki), not LNW. Likely a story-sync filter gap: an MSS-workspace ticket is leaking into the LNW project.
  - Confidence limited by the missing `project-mapping.md`. If LNW legitimately shares a workspace with internal MSS stories, this is acceptable; otherwise story-sync's project filter needs to tighten.
  - **Suggested fix:** confirm the canonical workspace/key pair for LNW and update the story-sync filter so only `LNW-*` tickets land in `wiki/projects/lnw/`.

### 6. Deprecated-slug references
- `wiki/topics/obsidian-ecosystem.md:93` — `- wiki/clients/ — client context` (example folder structure listing; `clients` is deprecated — replace with `wiki/projects/` or prefix with "formerly").
- `wiki/MAKE-SPACES.md:14` — historical explanation: *"`wiki/clients/` was merged into projects — one hub, not two."* This is a valid historical note; suggest rewording to quote-escape the deprecated name (e.g., `` `wiki/clients/` (deprecated) `` is already clear — can stay as informational).

Not flagged (intentional backward-compat):
- `wiki/projects/cetera/overview.md:2` — `aliases: [cetera, f2-cetera, f2/cetera]`. SCHEMA.md endorses aliased overview pages to preserve legacy `[[slug]]` links after the cetera rename. Keep.

---

## Recommended Fixes

### Partial / empty project folders
- `wiki/projects/flex-dash/` — empty (no files). Previously flagged on 2026-04-18 as safe to delete. Still present. **Suggest:** delete.
- `wiki/projects/internal/flex-dash/` — contains only `stories-hm.md`. No `context.md`, `journal.md`, or `overview.md`. Either create the two missing files if Flex Dash remains a tracked engagement, or roll IP-8 into `internal/meadow/` and delete this folder.
- `wiki/projects/lnw/` — has `journal.md`, `board.md`, `stories-f2.md` but no `context.md` or `overview.md`. Schema expects `context.md` + `journal.md` minimum; `overview.md` is the pattern used by every other project for frontmatter alias support. **Suggest:** add `context.md` and `overview.md` (with aliases `[lnw]`).

### Orphan pages (zero inbound wiki-links)
- `wiki/tools/meadow-app.md` — shadowed by the `meadow-app` alias on `internal/meadow/overview.md`. Every `[[meadow-app]]` now resolves to the overview page, leaving this tool page unreachable. **Suggest:** either remove this file (content has migrated to overview/context) or remove `meadow-app` from the overview's alias list and keep the tool page as the canonical reference.
- `wiki/projects/mai/board.md` — Obsidian `.base`-style board file. Not linked from anywhere but likely rendered via Obsidian UI. No action unless Mac wants boards indexed.
- `wiki/projects/lnw/board.md` — same.
- `wiki/projects/cetera/board.md` — same.
- `wiki/projects/cetera/stories-f2.md` — auto-written by story-sync; not linked from index. **Suggest:** add `[[cetera/stories-f2]]` to the cetera line in `wiki/index.md` for consistency with the other projects.
- `wiki/projects/internal/meadow/stories-hm.md` — same treatment.
- `wiki/projects/internal/flex-dash/stories-hm.md` — tied to the orphan folder issue above.
- `wiki/projects/lnw/stories-f2.md` — linked from index? No — the index line for LNW only references `[[lnw/journal]]`. **Suggest:** add stories.
- `wiki/projects/internal/high-meadow-website/files/Website-Feedback-2026-04-17.md` — client feedback dump. Link it from `internal/high-meadow-website/context.md` or `journal.md`.
- `wiki/projects/internal/high-meadow-website/files/README.md` — folder README; link from the parent context page or leave as directory marker.

### Missing cross-references
- `wiki/tools/meadow-app.md` (if kept) — no current inbound link from `internal/meadow/overview.md` or `context.md`. If the decision is to keep the tool page, add explicit `[[meadow-app]]` → `[[tools/meadow-app]]` linkage and drop the alias.
- Website-Feedback punch-list reference (see Critical #4) — should cross-link to `internal/high-meadow-website/context.md`, not MAI.

---

## Informational

### Inaccessible source material (mount boundary)
The scheduled task description references `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/`. The Cowork mount exposes `Second Brain/` itself as the workspace root, so vault-root-sibling files (`project-mapping.md`, `commitments.md`, `Meeting Notes/`, `Clippings/`) are outside the mount. Checks requiring those files — Meeting Notes coverage per `wiki/log.md`, Jira workspace+key uniqueness in project-mapping.md, commitments staleness — could not be executed. To re-enable these checks, expose the vault's parent directory in the Cowork folder selection.

### Stories frontmatter uses display names instead of folder slugs
SCHEMA check 10b expects `project:` to equal the enclosing folder's slug. Current values:
- `wiki/projects/internal/meadow/stories-hm.md` → `project: Capacity Planning` (slug is `internal/meadow`, alias `capacity-planning`)
- `wiki/projects/internal/flex-dash/stories-hm.md` → `project: Flex Dash` (slug is `internal/flex-dash`)
- `wiki/projects/mai/stories-f2.md` → `project: " MAI CRM Build"` (slug is `mai`, also note the leading space)
- `wiki/projects/lnw/stories-f2.md` → `project: LNW` (slug is `lnw`, case drift)
- `wiki/projects/cetera/stories-f2.md` → `project: cetera` ✓ matches

These files are auto-written by story-sync. Fixing requires updating the story-sync tool's frontmatter template to emit the canonical slug, not the Jira display name. Not a broken-link issue — index resolution still works — so flagged informational.

### Tags
Only one tag observed in the wiki: `#active` on `wiki/topics/obsidian-ecosystem.md:49`, used in a Dataview example sentence (not an applied tag). All canonical tag families in `TAGS.md` are unused in wiki prose, which is expected — tags are intended for daily notes, captures, and meeting notes (outside the compiled wiki layer).

### Staleness
- All `context.md`, `journal.md`, and shared-wiki pages with a `*Last updated*` stamp are within the 60-day threshold. No stale pages.
- `wiki/log.md` has 43 `##` entries — well under the 200-entry rotation threshold.
- `session-context/` is empty (pruned in the 2026-04-18 dashboard cleanup). Nothing to rotate.

### Raw source coverage
All files under `raw/articles/` (9) and `raw/projects/hms-capacity-planning/` (5) have been processed per `wiki/log.md`. The filesystem-artifact `raw/articles/?.md` was reconciled during Ingest #27 as a duplicate of the TDX Headless 360 article. No net-new raw sources require ingest.

### Contradictions
No clear-cut contradictions surfaced between project context pages, tool pages, or article pages within the standard-check scope. (Deep diff across every paired reference was not performed; flagged as not-in-scope for the weekly run.)

---

## Auto-fixes applied
None. Every candidate fix this run touches either content or frontmatter on multiple files (alias additions, link rewrites, folder deletions) with meaningful blast radius — per the lint rules, these are "ask first" operations. The sole typo-class candidate (the vault-prefixed wiki-link in Website-Feedback-2026-04-17.md) also has a content component (wrong target project), so it was flagged rather than auto-corrected.

---
*Auto-generated by second-brain-lint*

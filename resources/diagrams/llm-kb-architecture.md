# LLM Knowledge Base — Architecture Flow

> Canonical architecture diagram for the Second Brain. Referenced from `SYSTEM-GUIDE.md` and `PEER-SETUP-GUIDE.md`. Update here; both guides re-embed.

## Diagram

![[llm-kb-architecture.png]]

> **Note:** If the PNG hasn't been dropped in yet, the image link above will be a broken embed. Save the canonical architecture image to `Second Brain/resources/diagrams/llm-kb-architecture.png` and Obsidian will resolve it automatically. The Mermaid version below renders immediately without the PNG.

## Mermaid (always-on fallback)

```mermaid
flowchart TD
    subgraph INGEST["DATA INGEST"]
        Sources["Sources<br/>Articles · Papers · Repos<br/>Datasets · Images · Meetings"]
        WebClip["Web Clipper<br/>(Obsidian ext.)"]
        Raw["raw/<br/>Source docs"]
        Sources --> Raw
        WebClip --> Raw
    end

    subgraph ENGINE["LLM ENGINE"]
        Compile["Compile<br/>raw → wiki<br/>(kb-ingest-now)"]
        QA["Q&A<br/>Research answers<br/>(kb-report)"]
        Lint["Linting<br/>Health checks<br/>(kb-lint-now)"]
        Index["Indexing<br/>Summaries + links"]
    end

    subgraph TOOLS["EXTRA TOOLS"]
        Search["Search<br/>Web UI + CLI"]
        CLI["CLI Tools"]
    end

    subgraph STORE["KNOWLEDGE STORE"]
        Wiki["wiki/ (.md)<br/>Backlinks · Concepts<br/>Categories · Reports"]
    end

    subgraph OUTPUTS["OUTPUTS"]
        MD["Markdown<br/>.md reports + docs"]
        Slides["Slides<br/>Marp / pptx"]
        Charts["Charts<br/>Matplotlib / HTML dashboards"]
    end

    subgraph FRONT["IDE FRONTEND"]
        Obsidian["Obsidian<br/>Browse raw · wiki<br/>Dashboards · Graph"]
    end

    subgraph FUTURE["FUTURE EXPLORATIONS"]
        Synthetic["Synthetic data gen<br/>+ finetuning on wiki"]
        Product["Product vision<br/>Beyond hacky scripts"]
    end

    Raw --> Compile
    Compile --> Wiki
    Wiki <--> QA
    Wiki --> Lint
    Wiki --> Index
    Index --> Wiki
    Search --> QA
    CLI --> Compile
    CLI --> Lint

    Lint -. "Find inconsistencies<br/>Impute missing data<br/>Suggest new articles<br/>Find connections" .- Wiki

    QA --> MD
    QA --> Slides
    QA --> Charts
    Charts -->|Filed back to wiki| Wiki

    Wiki --> Obsidian
    Raw --> Obsidian

    Wiki -.->|Explorations add up| Synthetic
    Wiki -.->|Explorations add up| Product
```

## How this maps to the Second Brain

| Diagram layer | What it is in the vault |
|---|---|
| **DATA INGEST** | `raw/articles/` (Web Clipper), `raw/projects/`, `raw/discovery/`, `Meeting Notes/` (Granola/Fathom), `raw/meeting-raw/` (transcripts pre-selection) |
| **LLM ENGINE — Compile** | `kb-ingest-now` skill (on-demand) + `second-brain-ingest` scheduled task. Writes action items to `commitments.md` and decisions to `Decision-Log.md` per `SCHEMA.md` extraction gates |
| **LLM ENGINE — Q&A** | `kb-report` skill — saves permanent answers to `wiki/reports/` |
| **LLM ENGINE — Linting** | `kb-lint-now` skill + `second-brain-lint` Sunday + `second-brain-lint-wed` Wednesday scheduled tasks |
| **LLM ENGINE — Indexing** | `wiki/index.md` (master catalog) and `wiki/log.md` (chronological operation log) — both auto-maintained by ingest/lint |
| **EXTRA TOOLS** | Claude Code + Cowork as CLI/chat surfaces; Obsidian Local REST API for vault access; `session-kickoff` skill for fast context briefs |
| **KNOWLEDGE STORE** | `wiki/` — `projects/`, `concepts/`, `patterns/`, `tools/`, `entities/`, `articles/`, `topics/`, `reports/`, `f2-internal/` |
| **OUTPUTS** | Generated via `docx`, `pptx`, `xlsx`, `pdf` skills + `wiki/reports/` markdown. Dashboards under `dashboards/` (Dataview-powered) |
| **IDE FRONTEND** | Obsidian with Dataview, Tasks, Calendar, Kanban, Templater, Tag Wrangler, Make.md, Excalidraw, Obsidian Git, Web Clipper |
| **FUTURE EXPLORATIONS** | Synthetic data + finetuning on curated wiki; productized tooling (beyond scheduled-task scripts) |

## Meeting + Story sub-flows (Second Brain specific)

```mermaid
flowchart LR
    subgraph Meetings["Meeting pipeline"]
        Granola["Granola"] --> G["raw/meeting-raw/granola/"]
        Fathom["Fathom"] --> F["raw/meeting-raw/fathom/"]
        G --> Sel["meeting-selector<br/>(cron + skill)"]
        F --> Sel
        Sel -->|winner| MN["Meeting Notes/<br/>{Co}/{Proj}/"]
    end

    subgraph Ingest["Ingest → wiki + commitments"]
        MN --> Ing["second-brain-ingest<br/>+ kb-ingest-now"]
        Articles["raw/articles/"] --> Ing
        Projects["raw/projects/"] --> Ing
        Ing --> WikiPages["wiki/projects/{p}/journal.md<br/>wiki/concepts/ · patterns/ · tools/"]
        Ing --> Commits["commitments.md<br/>(Owner=Mac, firm commitments only)"]
        Ing --> Decisions["Decision-Log.md"]
    end

    subgraph Stories["Story sync (assigned only)"]
        Linear["Linear MSS + HM"] --> SS["story-sync<br/>(To Do + In Progress only)"]
        Jira["Jira F2"] --> SS
        SS --> Stories2["wiki/projects/{p}/stories-{ws}.md"]
    end

    subgraph Daily["Daily loop"]
        Commits --> DNB["daily-note-builder"]
        Cal["Google Calendar"] --> DNB
        Stories2 --> DNB
        DNB --> Today["daily/YYYY-MM-DD.md"]
        Today --> DR["daily-note-review skill<br/>(morning briefing)"]
    end
```

---

*Last updated: 2026-04-18. Source of truth for Second Brain architecture. Keep diagram in sync with `SCHEMA.md` and `SYSTEM-GUIDE.md` updates.*

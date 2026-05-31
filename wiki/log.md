# Operation Log

## [2026-05-31] lint | Weekly Health Check
- Pages scanned: 0 wiki pages (wiki/ tree does not exist yet)
- Meeting notes checked: 5
- Raw sources checked: 3
- Issues: 3 critical, 4 recommended, 3 informational
- Auto-fixed: created wiki/ directory + wiki/log.md (this file) + wiki/lint-report.md. No content auto-fixes applied — the dominant issue (missing wiki) requires an ingest run, not a lint fix; deprecated-slug + filename + SCHEMA-duplication fixes are all in "ask first / never modify raw" categories.
- Key finding: wiki/ never built; run kb-ingest-now to compile sources, then re-lint.
- Report: wiki/lint-report.md

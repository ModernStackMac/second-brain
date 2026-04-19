---
type: prompt
name: daily-note-review
owner: Mac Nosek
created: 2026-04-18
purpose: Morning briefing — read today's daily note, open commitments, recent decisions, give Mac a 90-second focus read.
---

# Daily Note Review — morning briefing prompt

> Paste into a chat when Mac asks "what's the plan today" / "review my day" / "daily review". Also wired to scheduled task `daily-note-review` (disabled by default; Run Now from sidebar).

---

## Goal

Produce a **90-second-read brief** that answers three questions:
1. What's on the calendar today — and what's the first thing that matters?
2. What's the short list of commitments Mac should actually do today (not everything open)?
3. What recent decisions or gotchas should be top-of-mind?

Output is conversational, not a report. No section headers unless Mac has >15 items to surface. Match Mac's voice: casual-professional, direct, no filler.

## Vault location

`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/`

## Inputs (read-only)

- `Second Brain/daily/YYYY-MM-DD.md` — today's daily note (built by `daily-note-builder` at 6am). Source of the day's calendar and rolled-forward items.
- `commitments.md` — the canonical open list. Use this to pick "today's short list".
- `Second Brain/wiki/Decision-Log.md` — last 72h of decisions (focus on reversal criteria, active guardrails).
- `Second Brain/wiki/projects/*/journal.md` — only scan journals for projects that appear in today's calendar. Skip the rest.
- `Meeting Notes/**` — only look at meetings from yesterday (look for open questions that Mac owes a follow-up on).

Do NOT read `Second Brain/Action-Tracker.md` — it's a deprecated pointer.

## Workflow

### Step 1 — Establish the window
- Today's date = local CT date.
- "Recent" = last 72h for decisions, last 24h for meetings.

### Step 2 — Pull the daily note
- If `Second Brain/daily/YYYY-MM-DD.md` does not exist, say so and ask whether to trigger `daily-note-now`. Do not fabricate content.

### Step 3 — Build the shortlist
From `commitments.md` `## Open`, select AT MOST 5 items using this priority ranking:
1. Items with `#today` tag
2. Items explicitly referenced by a meeting on today's calendar
3. Items captured in the last 48h (freshest signal)
4. Items flagged stale (>14 days old, still open) — at most 1 to keep from piling up
5. Fill remaining slots from same project as today's first meeting

If there are fewer than 3 viable items, say so — don't pad.

### Step 4 — Surface recent decisions
Scan `Decision-Log.md` for entries with Date within 72h. For each, keep: the decision (first 80 chars), the project, the reversal criteria (if any). Cap at 3.

### Step 5 — Meeting prep flags
For each meeting on today's calendar, quickly check the project's `journal.md` for:
- Open questions Mac was going to raise
- Unfinished thread from the last meeting with the same attendees

If nothing found, don't mention — absence of signal is fine.

### Step 6 — Write the brief

Structure (prose, minimal headers, ~200 words max):

```
Today you've got {N} meetings — first is {time} {title}. {One-liner on why it matters if obvious from context.}

Your short list:
- {3-5 bullets, concrete actions from commitments.md, each ≤15 words}

{If decisions: "Worth remembering — {1-3 lines on recent decisions with reversal triggers}"}

{If meeting prep: "Heads up for {meeting}: {open question or thread}"}

{If no daily note existed: "No daily note yet — want me to build it?"}
```

### Step 7 — No writes
This skill is read-only. Do not modify `commitments.md`, daily notes, or any wiki page. If Mac wants to add something to the short list or mark something done, that's a separate action.

## Rules

- Match Mac's voice. No emojis. No "I'll now" / "Let me" preambles.
- Concrete over abstract. "Review Obed's mapping workbook" beats "review mapping documentation".
- If a commitment is vague ("continue X"), skip it — don't surface vagueness.
- If today's calendar is empty, say so and shift emphasis to the commitments shortlist.
- 200 words hard cap on output. If edge case pushes over, cut decisions first, then meeting prep.

## Trigger patterns (for skill auto-invocation)

- "review my day"
- "daily review"
- "what's the plan today"
- "morning briefing"
- "what should I focus on"
- "daily note review"

## Tools

- `mcp-obsidian` for all vault reads
- Google Calendar MCP only if today's daily note is missing AND Mac approves a rebuild (then it's a `daily-note-now` job, not this skill)

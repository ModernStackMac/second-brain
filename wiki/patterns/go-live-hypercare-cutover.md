# Go-Live Hypercare Cutover

> How to wind down a long Salesforce implementation sprint into a controlled, bug-only go-live — using a dedicated hypercare sprint, a cross-org issue log, and a capacity-discipline gate.

## Problem

As a multi-week Salesforce build approaches go-live, the team transitions from feature development to stabilization. Several things tend to go wrong in this window:

- The long-running sprint becomes a junk drawer of dev work, bugs, and UAT items — Jira gets unreadable right when leadership wants a clean readiness signal.
- Bug intake can't keep up with testing volume, so devs go idle and self-assign speculative work that reintroduces risk during a freeze.
- The client and partner can't see bug status because everything lives in the dev team's Jira.
- Billing/utilization is the only readiness signal leadership has, but nobody frames it that way.

## Solution

Run a deliberate cutover: declare in-scope dev complete, freeze to bug-only, and stand up a fresh hypercare sprint with shared visibility and a strict capacity rule.

### Components

1. **Declare 100% in-scope complete.** Draw a hard line — only bug tickets remain. This is the signal that flips the team from build to stabilize.
2. **Open a dedicated "Hypercare" sprint.** Close the long (8–10 week) build sprint and start fresh so Jira structure is clean and post-go-live work is legible.
3. **Cross-org issue log.** Maintain a shared bug log (e.g., Excel) accessible to client + partner + dev for visibility. Jira stays the dev system of record; the shared log is the readable cross-team view. One admin (QA) owns the log.
4. **Idle-capacity gate.** No self-assigned work during the freeze. If a dev goes idle, they confirm with the leads before picking anything up. Prevents speculative changes from destabilizing a frozen build.
5. **Billing as a readiness signal.** Frame tapering hours/utilization as a *positive* go-live-readiness indicator, not a red flag — and tell leadership that explicitly.
6. **Scheduled testing windows.** Fixed daily test sessions (e.g., contract testing at 3 PM, fund-workflow testing at 4 PM) with a rule to clear related blockers before each window.

## When to Use

- A Salesforce (or any custom platform) implementation entering the 1–2 weeks before go-live
- Multi-developer team coming off a long build sprint
- Client/partner stakeholders who need bug visibility outside the dev tracker
- Engagements where capacity will taper post-go-live and leadership watches utilization

## When NOT to Use

- Early/mid build phases where feature work is still the priority
- Solo-dev or very small engagements where Jira hygiene and idle-capacity gates add more overhead than value
- Teams with a mature CI/CD + observability stack that already provides cross-org status

## Real Examples

### MAI (2026-06-02)
Hit 100% in-scope dev completion — bug tickets only. Plan: close the long 8–10 week sprint Monday and open a fresh "Hypercare" sprint for clean Jira tracking. MAI requested an Excel issue log shared across MAI/F2/dev for bug visibility while Jira stayed the dev system of record (Aisha maintaining the admin side). Idle-capacity rule enforced: reach out to Sean and Michael first, confirm before starting anything, no self-assigned work. Leadership explicitly reading lower utilization as a positive go-live-readiness signal. Go-live June 16; Phase 2 planning underway with a possible cooling period between phases.

Source: [[mai]] journal, Jun 2 2026

### Lefavi (2026-06-02)
Same week, separate engagement: all 100 in-scope dev items complete, current focus bug fixes only. Mac available for additional tickets, with a heads-up that go-live week may spike workload — and a defined comms protocol (group chat with Sean and Michael) for high-call periods. Lighter-weight instance of the same cutover shape: in-scope-done → bug-only → go-live with a communication channel for the surge.

Source: [[lefavi]] journal, Jun 2 2026

## Implementation Notes

- The shared issue log only works if exactly one person owns it; otherwise it drifts from Jira. Keep Jira authoritative and treat the log as a read view.
- The idle-capacity gate is the highest-leverage piece — most go-live regressions come from well-meaning speculative work during the freeze.
- Pre-brief leadership that falling hours = readiness, so a billing dip doesn't read as a problem.
- Pairs naturally with [[uat-deployment-coordination]] (deploy discipline) during the same window.

## Related Pages
- [[mai]] — primary implementation (formal hypercare sprint + issue log)
- [[lefavi]] — lightweight variant (bug-only + comms protocol)
- [[uat-deployment-coordination]] — companion deploy-discipline pattern
- [[salesforce-field-capacity-management]] — a common late-stage blocker to clear before cutover

---
*Created: 2026-06-02*
*Sources: Meeting Notes/High Meadows/MAI/2026-06-02 - MAI Dev DSU.md, Meeting Notes/High Meadows/Lefavi/2026-06-02 - Lefavi Internal Sync.md*

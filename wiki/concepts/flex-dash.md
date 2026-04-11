# Flex-Dash
> High Meadows' Salesforce managed package product — case logic engine with implementation-fee-only licensing model.

## Overview
Flex-Dash is an internal High Meadows product built as a Salesforce managed package. It handles case logic workflows (claim triggers, status transitions, record type routing) and serves as a "foot-in-the-door" product for client engagements. The managed package architecture prevents partner code theft while enabling quick demos. Development is currently paused to redirect all capacity to [[high-meadows-mai]].

## Key Details

**Case Logic Engine**
- Claim logic updated so cases revert to "in progress" only when status equals "Now," not on every claim
- Case record type "Forward Request" has status set before trigger fires
- New cases (request + support) start with status "New"
- Currently migrating to UAT; Nicole assigned for testing once complete

**Licensing Strategy** (decided 2026-04-02)
- No AppExchange licensing — consensus to avoid Salesforce revenue-share risk
- Implementation fee only model: for small clients (e.g., 4-person team with limited funding), pad hours as implementation fees rather than recurring licenses
- Any licensing revenue is a bonus, not the business model
- Managed package prevents partner code theft — that's its primary value
- Access control (shutting off package access when client stops paying) back-burnered

**New Money Report**
- Mac exploring how downloaded tables could replace manual quarterly compilation process (currently takes a few hours)

**Current Status**
- Full development stop as of 2026-04-02 to prioritize MAI
- UAT migration in progress for existing case logic changes

## Related Pages
- [[high-meadows]] — parent organization
- [[high-meadows-mai]] — sister product; all capacity redirected here
- [[case-migration]] — related case object patterns
- [[validation-rule-workaround]] — pattern used in case logic

## Sources
- Meeting Notes/High Meadows/Internal/2026-04-02 - Lefavi Weekly Call.md
- Meeting Notes/Stitch/Cretelligent/2026-04-02 - CREtelligent Internal Team Sync.md (Flex Dash mentioned in CREtelligent context)

---
*Last updated: 2026-04-10*

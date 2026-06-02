# Lead/Contact Dedup Merge (Apex Invokeable)

> A reusable Apex invokeable action that deduplicates Leads/Contacts with deterministic field-level merge rules, callable both as bulk admin cleanup and inline during lead conversion.

## Overview
A recurring need on sales-led Salesforce orgs: existing duplicate Leads/Contacts need a one-time bulk cleanup, and new duplicates need to be caught in real time during lead conversion. Rather than rely solely on Salesforce's standard Duplicate/Matching Rules (which dedupe at create/edit but don't merge field values deterministically), this pattern wraps merge logic in a single Apex invokeable action reused by both an admin batch entry point and a flow.

## Problem
- Standard matching rules flag duplicates but leave merge decisions to users.
- Lead conversion can silently create a second Contact when a matching one already exists.
- Field-level merge ambiguity: which record's value wins, and how are compliance-sensitive fields (opt-out/consent) handled?

## Solution Approach
One Apex invokeable action, two entry points:
1. **Bulk admin cleanup** — batch/queueable over existing duplicate sets.
2. **Real-time** — invoked from the lead-conversion flow.

**Match key:** email (primary).

**Merge rules:**
- Master record's value takes precedence **unless** that field is null on the master (then fill from the duplicate).
- **Opt-out / consent fields always preserve `true`** across all merged records — never let a merge silently re-subscribe someone. This is the compliance-critical rule.

## When to Use vs. Alternatives
- Use when merge behavior must be deterministic and identical across bulk and real-time paths, and when consent fields must survive merges intact.
- Standard Duplicate Rules alone suffice when you only need create/edit-time flagging and manual merge is acceptable.
- For very high volumes, pair with a queueable + batched processing to stay under governor/DML limits (see [[patterns/data-cloud-bulk-processing|Data Cloud → Apex bulk processing]]).

## Risks / Mitigations
- **Wrong-master merges are irreversible** — gate the real-time path and dry-run the bulk path on a sandbox first.
- **Consent regressions** — enforce the opt-out-preservation rule in a unit test before deploy.
- **Match-key collisions** — email-only matching can over-merge shared/role inboxes; consider a secondary key where needed.

## Real Examples
- **Talus (MSS)** — lead/contact dedup with email match, master-precedence-unless-null, opt-out always-true; bulk cleanup + lead-conversion flow. *(Source: [[Meeting Notes/_Unmatched/2026-06-02 - Mac Kai Sync on Accounts|2026-06-02 — Mac/Kai Sync on Accounts]])*

## Related Pages
- [[talus/context|Talus]] — originating engagement
- [[patterns/data-cloud-bulk-processing|Data Cloud → Apex bulk processing]] — batched async processing for high volumes

## Sources
- Meeting Notes/_Unmatched/2026-06-02 - Mac Kai Sync on Accounts.md

---
*Last updated: 2026-06-02*

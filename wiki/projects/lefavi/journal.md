---
status: active
owner: Mac
priority: p2
last_meeting: 2026-06-02
open_actions: "2"
---

# Lefavi — Project Journal

## Week of June 1, 2026

Lefavi Internal Sync (Jun 2): Schwab integration signed off, client-meeting prep for Mac's week out, dashboard issues resolved, dev pipeline at 100% in-scope.

**Schwab integration:** Email review complete, no action needed. Field-level security is available for the financial account / cash transaction fields, but the team's consensus is that implementing it is unnecessary. Confidence in system stability despite earlier concerns.

**Client meeting prep:** Mac is out next week — Ian will run the client meeting independently. Deliverables needed from the client: DocuSign validation + field-mapping completion, and a requirements list for additional fields. The AI follow-up is in the client's court; waiting on the London hire's onboarding to free up client bandwidth.

**M / Flex dashboard:** Flex dashboard working in both UAT and prod. The events issue was resolved (federal push completed successfully); the morning display problems were temporary.

**Dev pipeline:** All 100 in-scope dev items complete — current focus is bug fixes only. Mac available for additional tickets. Go-live week may spike workload; during high-call periods, use the group chat with Sean and Michael. (Lightweight instance of [[go-live-hypercare-cutover]] — same week as MAI's formal hypercare cutover.)

**Decisions:**
- Field-level security on financial account / cash transaction fields: not implementing (team consensus, deemed unnecessary)

*(Source: [[Meeting Notes/High Meadows/Lefavi/2026-06-02 - Lefavi Internal Sync|2026-06-02 Lefavi Internal Sync]])*

---

## Week of May 25, 2026

Lefavi Weekly Call (May 28): DocuSign integration rebuild, Quick Data nearing beta, AI use cases scoped, Calendly removal.

**DocuSign integration:** Rebuilt contract and profile templates with conditional formatting. Testing simple flow first — web form captures all required info, prefills e-signature, then auto-syncs to Salesforce (creates household + contact, stores docs at household level). Field mapping gaps identified: several Schwab application fields have no Salesforce equivalent (employment status, employer address, publicly traded company questions, stock/bond experience separation, mailing address format mismatch). Ian working on schema documentation for missing field creation.

**Quick Data progress:** Moving toward beta. Two calls held with Quick team director of product for UI/UX refinements. $7,500 setup fee for new Form Stream platform (migrating from old API). LWC for page layout integration. Beta testing at no cost before production. Strategy: build around new tool capabilities rather than refactoring existing processes.

**AI implementation discussion:** Ian has achieved Excel proficiency through AI tutoring. Interest areas: new money reporting automation (monthly/quarterly), client meeting tracking (some clients 9+ months without contact), transaction review summaries. MCP integrations available for Salesforce, Orion, Schwab. Skills/branding angle: voice consistency, automated doc generation with Lefavi standards.

**Housekeeping:** Calendly being removed from backend systems (Mac/Brian). Mac forwarding Salesforce product retirement email for Ian's review. New overnight ops person starts June 22 — Ian setting up laptop and license.

**Decisions:**
- DocuSign: test simple integration first before adding complexity
- Quick Data: build around new tool capabilities, not refactor existing processes

*(Source: `Meeting Notes/High Meadows/Lefavi/2026-05-28 - Lefavi Weekly Call.md`)*

---

## Week of Mar 30, 2026 (Retroactive)

Lefavi Weekly Call (Apr 2): Flex-Dash case logic, product licensing strategy, MAI staffing crisis.

**Flex-Dash case logic:** Claim logic updated — cases revert to "in progress" only when status = "Now." Case record type "Forward Request" has status set before trigger fires. New cases start "New." Migrating to UAT; Nicole assigned for testing.

**Licensing decision:** No Salesforce AppExchange licensing for Flex-Dash. Managed package prevents partner code theft. Small client strategy: pad hours as implementation fee, no recurring license. Access control (shut off package access) back-burnered.

**MAI staffing crisis:** Full stop on Flex-Dash to redirect capacity. Argentine dev team producing poor-quality code — plan to replace with full-time hires (Antonio, Albin, Stephen's contact).

**Decisions:**
- No AppExchange licensing — implementation fee model only
- Full Flex-Dash pause for MAI
- Replace Argentine dev team with FT hires

*(Source: `Meeting Notes/High Meadows/Lefavi/2026-04-02 - Lefavi Weekly Call.md`)*

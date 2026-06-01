# Concept — MuleSoft vs. Apex for Salesforce Integration

> A decision heuristic for whether an inbound/outbound integration belongs in MuleSoft or in native Salesforce Apex.

## Definition

Salesforce integrations can be built natively (Apex REST/callouts + wrapper classes, Named Credentials) or via an integration platform like MuleSoft. The choice trades off simplicity and visibility against reusability, standardized error handling, and multi-system orchestration.

## When It Matters

It matters most on greenfield integration builds and when a client has already invested in MuleSoft and wants to consolidate. The wrong default adds cost: MuleSoft on a trivial payload→record flow is over-engineering; Apex on a complex multi-system transform becomes unmaintainable.

## Heuristic (Mac's rule of thumb)

- **Apex** when the integration is straightforward: accept a payload, deserialize to a wrapper model, create/update Salesforce records. Few or no transformations, single counterpart system, and you want error handling visible in Salesforce (e.g. Nebula logging).
- **MuleSoft** when there are complex data transformations, multiple systems to orchestrate, a need for reusable API components / standardized error handling / exception reporting / all-or-none transaction management, or a strategic mandate to centralize integrations.

## Gotchas

- **Client investment ≠ technical fit.** A client may push MuleSoft believing it offloads work; in practice it can *increase* their burden (regression testing, additional planning) and waste prior Apex POC work. Weigh the strategic value of avoiding a hybrid architecture against timeline risk.
- **Error visibility.** With MuleSoft handling the integration, the Salesforce side loses native error context — plan a logging strategy (e.g. a Nebula framework call) if downstream Salesforce automation needs to react to failures.
- **Hybrid risk.** Splitting integrations across MuleSoft and Apex doubles the surface area and the failure modes; consolidation is usually only worth it if you move *all* integrations.

## Real Examples

- **CREtelligent (Stitch)** — ~40 hr MuleSoft rebuild estimate (POC existed) vs. enriching the existing Apex payload handler. Despite client preference for MuleSoft, the team chose to enrich the Apex payload to avoid hybrid-integration timeline risk; revisit post-UAT. *(Source: [[Meeting Notes/Stitch/Cretelligent/2026-04-23 - Cretelligent Mulesoft API Design Discussion|2026-04-23 — MuleSoft API Design]])*

## Related Pages

- [[cretelligent/cretelligent|CREtelligent]]
- [[patterns/junction-object-line-item-model|Junction object as line-item replacement]]
- [[index|Wiki Index]]

---
*Last updated: 2026-06-01*
*Sources: Meeting Notes/Stitch/Cretelligent/ (2026-04-23 MuleSoft API Design, 2026-04-24 Weekly Status, 2026-04-27 Internal Sync)*

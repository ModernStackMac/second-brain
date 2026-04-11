# JSON Deserialize Refactor
> Pattern for replacing fragile manual JSON parsing in Apex with JSON.deserialize() and strongly-typed wrapper classes.

## Overview
Manual JSON parsing in Apex — parsing nested payloads with string-based navigation — is brittle and difficult to maintain. A single schema change upstream breaks the entire parser, leaving hours of debugging. The solution is to create strongly-typed wrapper classes and use JSON.deserialize(), which validates structure and provides compile-time safety.

This pattern is particularly important for API integrations where upstream schemas evolve over time.

## Problem
- Manual parsing: 250+ lines of code doing string-based navigation (e.g., `get('data').get('nested').get('field')`)
- Fragile: breaks when upstream schema changes
- Hard to debug: no clear error messages when structure doesn't match
- Impossible to refactor confidently (no type checking)

## Solution
1. Create Apex wrapper classes matching the API payload structure
2. Use JSON.deserialize() to hydrate the wrapper classes
3. Access values through typed properties instead of string navigation
4. Get compile-time safety and clear error messages

## Implementation Steps

**Step 1: Analyze the API Payload**
Study the JSON structure and identify all fields, nesting levels, and types.

**Step 2: Create Wrapper Classes**
Create Apex classes that mirror the payload structure:
```apex
public class ApiPayloadWrapper {
    public String id;
    public String name;
    public DataSection data;
    
    public class DataSection {
        public String status;
        public List<String> tags;
    }
}
```

**Step 3: Deserialize and Access**
Replace manual parsing with JSON.deserialize():
```apex
ApiPayloadWrapper payload = (ApiPayloadWrapper) JSON.deserialize(jsonString, ApiPayloadWrapper.class);
String status = payload.data.status;  // Type-safe access
```

**Step 4: Integrate with Existing Logic**
Refactor the business logic to work with typed properties instead of string-based navigation.

## When to Use
- Apex integrations consuming JSON payloads (REST APIs, webhooks, external integrations)
- Payloads with complex nesting or evolving schemas
- High-frequency integrations where stability is critical
- When the current parser is difficult to understand or modify

## When NOT to Use
- Very simple, single-level payloads (manual parsing might be overkill)
- Payloads with highly dynamic structures (wrapper class approach won't help)

## CREtelligent Example
The Connect API integration is being refactored using this pattern. Mac is consolidating site verification data, product fields, and actuals logic into strongly-typed wrapper classes, replacing the existing fragile parser. The new structure allows the team to add site verification payload fields and automate report logic with confidence.

## Related Pages
- [[cretelligent]] — engagement applying this pattern
- [[connect-api]] — API being integrated

## Sources
- Meeting Notes/Stitch/Cretelligent/2026-04-09 - CREtelligent Team Sync - Sprint Review.md

---
*Last updated: 2026-04-10*

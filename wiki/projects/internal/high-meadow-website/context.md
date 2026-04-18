# High Meadow Website — Project Context

> Marketing/public-facing site for High Meadow Solutions (HMS). External brand + lead-gen surface, separate from the internal Meadow SaaS (capacity-planning) product.

## Client & Team
- **Company:** High Meadow Solutions
- **Owner:** Mac (MSS)
- **HMS stakeholders:** Brian, Sean, Bryce (logo files), plus HMS leadership
- **Legal:** Brian is sourcing Privacy Policy + Terms of Use from outside counsel
- **Related projects:** [[meadow]] (internal capacity-planning SaaS), [[flex-dash]]

## Scope
Public-facing marketing site with the following tabs/pages:
- **Home** — hero tagline, "Why HMS", services teaser
- **Services** — Business Transformation, Data Strategy & Analytics, AI (order matters, see feedback)
- **About** — dropdown into Who We Are, Leadership, Teams
- **Forum** — gated membership (Indicate Interest flow, not "Apply")
- **Careers** — form + resume upload → `Careers@highmeadowsolutions.com`
- **Insights** — thought-leadership, driven by Brian/Sean feedback
- **Engage** — contact form (email target: `sales@highmeadowsolutions.com`)

Mobile-friendly is a hard requirement.

## Brand System (from HMS Brand Guide v2)
- **Primary tagline:** "Built for Wealth. Wired for What's Next"
- **Remove from copy:** "purpose-built" (per feedback punch list)
- **Voice pillars:** Expert · Action-Oriented · Approachable
- **Color palette:**
  - Forest Green `#1E3D2F` (primary)
  - Mid Forest `#2E5E41` (secondary)
  - Sage `#8BAF8E` (tertiary)
  - Lime Accent `#D4E44A`
  - Warm Cream `#F5F2EA` (light BG)
  - Charcoal `#2A2A2A` (body)
  - Slate `#5C6B73` (captions)
  - Warm Gold `#C9A84C` (premium accent)
  - Pure White `#FFFFFF`
- **Typography:** Inter (primary, web/social) + Playfair Display (editorial display). Brand guide recommends standardizing to Inter across all social graphics.
- **Imagery:** Misty/foggy mountain landscapes, authentic professional photography with dark-green tint overlay at 40–60% opacity. Avoid stock clichés (handshakes, generic charts). No mixed warm/cool tones on the same page. Min 72dpi screen / 300dpi print.
- **Icons:** Fill-style (Canva library), brand-colored, paired with short bold labels. Min 24×24px digital.

Full brand guide: `./files/HMS-Brand-Guide-v2.pdf` (once dropped in).

## Active Feedback Punch List
Source: Website Feedback.docx (dated 2026-04-17).

Global / Layout
- [ ] Top-nav logo needs to be larger (scroll bar area)
- [ ] Footer logo: larger + correct asset
- [ ] Home hero + footer tagline: remove "purpose-built"
- [ ] Site must be phone-friendly end-to-end
- [ ] Rename CTAs: replace "Get in Touch" with "Engage" / "Engage Here"

Engage / Contact
- [ ] Change contact email on Engage form from `info@` to `sales@highmeadowsolutions.com`

Services Tab
- [ ] Remove the numbers from service cards
- [ ] Reorder services: (1) Business Transformation, (2) Data Strategy & Analytics, (3) AI
- [ ] Collapse per-card "Learn More" links to a single "Learn More" button

Home — Why HMS
- [ ] Practitioner-Led Teams copy: change to "Our team is comprised of individuals who have held operating roles inside…"

About / Who We Are
- [ ] Our Journey section: make it bigger, bigger font, brighter color (current is too light)
- [ ] Our Teams: rename "AI Strategy" → "AI Implementation"
- [ ] Our Teams layout: picture on far right; team-tile copy sits alongside on the right
- [ ] Add About dropdown in top nav with: Who We Are, Leadership, Teams

Forum
- [ ] Replace "Request Forum Membership" (About footer) with "Indicate Interest"
- [ ] On Forum tab: "Request Membership" button → "Indicate Interest"
- [ ] Black "Apply for Membership" button → "Indicate Interest"

Careers
- [ ] Move Careers from footer to top nav (next to Forum)
- [ ] Add resume-upload form
- [ ] Form email target: `Careers@highmeadowsolutions.com`

Legal
- [ ] Privacy Policy — waiting on Brian's attorney
- [ ] Terms of Use — waiting on Brian's attorney

Insights
- [ ] Apply Brian + Sean feedback (detail TBD — pull from their email/doc)

Assets
- [ ] Bryce to provide logo files (partner logos — Orion + Black Diamond prioritized)

## Tech Stack
_TBD. Leading candidates: Next.js + Vercel, Sanity or Payload CMS, Tailwind. Revisit once copy + mocks stabilize._

## Source Files
Working files live in `./files/` — brand guide, feedback docs, partner logos, design mocks, copy drafts. Curated context lives in this file and `feedback-tracker.md`. Raw uploads in `files/`.

## Related Pages
- [[meadow]] — internal SaaS product (sister project)
- [[flex-dash]] — sister internal tool

## Status
- **Phase:** Active build — round 1 feedback incorporated
- **Last updated:** 2026-04-18

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers checking whether Maulana ships software (need clear experience chronology, proof of technical breadth, accessible code and deployment links). Technical leads and engineers evaluating how he solves problems (accurate stack, architecture context, repositories, thoughtful descriptions). Small businesses and prospective clients looking for someone who can build a useful system (real business use cases, operational automation work, direct contact channels). Healthcare collaborators checking clinical-operations literacy (Puskesmas HIS responsibilities, privacy-conscious automation). Source: PRD §01 audience table, owner-confirmed.

## Product Purpose

Personal portfolio for Maulana Muhammad that immediately explains who he is, what he builds, which work is available to review, and how to contact him. Success is defined by the PRD release gates: primary role and two strongest competencies understood within the hero viewport, all 12 core projects discoverable/filterable/accurately attributed, all 12 experience entries present and grouped, every published link intentional, automated quality checks and a documented Impeccable design review pass, launch on the existing production URL.

## Positioning

Maulana Muhammad | Software Engineer | AI/ML Engineer · AI-Driven Full-Stack Developer · Automation Engineer. Healthcare IT is a domain strength shown through About/Experience/Projects, not a fourth competing hero title. The differentiator a neighbor portfolio could not copy truthfully: real operational automation inside Indonesian public-health infrastructure, plus 4,000+ reviewed student submissions at Dicoding.

## Operating Context

- Existing public site `maoelan.vercel.app` (this repository, `github.com/Maoelan/porto-maoelana`) is rebuilt in place; inbound links must not break silently.
- Deployment via Vercel from GitHub; prerendered/static delivery wherever possible.
- Content lives in typed local data files, version-controlled; no external database or CMS in v1.
- Legacy single-page URL anchors (`/#projects`, `/#about`, `/#experience`, `/#contact`, `/#skills`) must map to the new routes.

## Capabilities and Constraints

- v1 routes: `/` (hero, featured work, domains, experience preview, additional work, contact CTA), `/projects` (12 projects, category filters + optional keyword search, shareable via query params, empty state with reset), `/projects/[slug]` (details: problem, approach, implemented features, tech stack, availability), `/about`, `/contact`, `/404`.
- Explicitly out of scope in v1: user accounts, CMS, visitor registration, public APIs, user-generated content, admin panel, contact form, testimonials/metrics without permission, publication of private source code or real health records.
- Content registries in PRD §06 (12 projects), §08 (12 experience entries), §09 (skill taxonomy) are the source of truth; statuses: In Progress only for Wonderful Lombok, PSC Sahabat, Automated CKG; ArcDev excluded until owner reapproves.
- Internal projects never render repository or demo links; show "Internal project" disclosure instead. No patient/staff data, credentials, internal IPs, or production endpoints anywhere.
- No invented achievements, metrics, certificates, dates, or claims. Copy in English, technically literate, concise, direct (Humanizer editing style).
- Stack fixed unless a concrete incompatibility appears: SvelteKit 2 + Svelte 5 + TypeScript (strict) + Tailwind CSS 4 + Vite. Icons: Phosphor (installed), small semantic subset.

## Brand Commitments

- Impeccable (https://impeccable.style/) is the mandatory primary design workflow; the installed skill (`.agents/skills/impeccable`, v4.1.2) governs design execution. Taste Skill is an optional secondary anti-slop reference only.
- Visual direction is owner-pinned by PRD §10: "Editorial Systems" — an editorial case-study portfolio for a working software engineer. Proposed starting tokens (cool neutral ground, deep ink, deep teal accent, restrained warm highlight, Lato + IBM Plex Mono) are refined by the Impeccable workflow.
- Owner-approved hero identity and copy (PRD §05), including "AI-Driven Full-Stack Developer"; do not suggest every web project uses AI in its end-user feature set.
- Owner decisions, 24 Oct 2026: no personal photo in v1 (typography-first, no placeholder assets); the 6 research/experiment repositories are excluded from v1.
- The legacy RPG/character-sheet, CRT, pixel-typeface, and audio aesthetic is explicitly rejected and must not return as easter eggs.

## Evidence on Hand

- 12-project registry with slugs, statuses, tags, tech stacks, repository/deployment URLs (PRD §06). Five public demo URLs must be click-checked live before publication.
- 12-entry experience registry with exact periods and employment types (PRD §08).
- Skill taxonomy (5 groups) with validation approaches, no progress bars or level labels (PRD §09).
- Identity/contact registry, all channels owner-authorized for public display (PRD §05).
- Untracked source material in `docs/` (LinkedIn experience export, project detail drafts): reference only; the PRD wins conflicts. Old screenshots/portraits are asset candidates for manual review, not mandated direction.
- Absences that must not be fabricated: certificates, CV download, testimonials, client logos, metrics, project screenshots beyond what is later approved.

## Product Principles

1. Credibility over spectacle: accurate attribution, honest statuses, verifiable links, zero inflated claims.
2. The work leads: case-study depth and real repositories are the centerpiece; the interface recedes (Experience mode).
3. Editorial clarity: confident typesetting, clear grid alignment, restrained technical labels — engineered, never a generic AI landing page.
4. Accessibility is a release gate (WCAG 2.2 AA target), not a polish item.
5. Content as code: typed registries reviewed in git, trivially updatable without redesign.

## Accessibility & Inclusion

WCAG 2.2 AA target: contrast, keyboard navigation with visible focus, semantic landmarks and headings, alt text, meaningful accessible names for icon-only links and controls, ~44px touch targets, skip-to-content link, `prefers-reduced-motion` and OS theme preference respected. Test with keyboard-only navigation; document known gaps instead of hiding them.

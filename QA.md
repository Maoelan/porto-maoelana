# Portfolio release review / 24 October 2026

## Original application capture correction / 25 October 2026

This correction supersedes historical claims that the staff, Tokoku and HukumPekerja pictures are reconstructions. The live site now uses original application screenshots from the supplied ZIPs. The old reconstructed files remain unreferenced for recovery/history.

- Staff: original React UI/CSS, local isolated query adapter and generic staff references; no Convex production connection. Original hardcoded staff list was replaced in the temporary copy only.
- Tokoku: original Next.js sales screen, example product/category API responses and local preview identity; cart interaction performed but never saved.
- HukumPekerja: original TanyaHukum guest welcome screen, not an invented chat. No model inference or legal response was generated.
- Original ZIPs were unchanged. Their .env/database files were excluded. Temporary sources/dependencies were outside the public portfolio.
- These captures are 2880×1920, quality 96 WebP. Wonderful Lombok was recaptured at the same desktop density and 1170×2532 mobile density.
- Frame antialiasing: GPU transform layer, hidden backfaces and transparent edge outline; no visible outline, backing rectangle, recoloring or blur filter. A DPR-2 detail screenshot was inspected at docs/qa/sharp-showcase.png.
- Build and type checks pass. Unit tests: 22 passed. Browser tests: 26 passed, including original capture filenames, >=2880 intrinsic width, no reconstruction captions and frame compositing checks. Axe checks pass in both themes.
- Taste Home and Projects gates: 0 FAIL at 1440/768/390px. Same defended footage/product-index warnings as before. Final sheets: .taste-skill/authentic-home and .taste-skill/authentic-projects.

ROUND 1 / original-capture correction
Seen in one second: the same Magma Mist engineer cover; product plates now visibly show the original apps.
Idea (one sentence): the engineering dossier uses the actual software as evidence, rather than redesigned illustrations of it.
Live thing: unchanged toolkit and workflow explorer; real local Tokoku add-to-cart controls were used for its screenshot.
Layout words by section: hero=cover / toolkit=index / featured=original product plates / about=engineering note / experience=record / automation=workflow / contact=close.
Scores: design 8 · usability 8.5 · creativity 7 · content 9 → overall 8.0.
Caps applied: none; internal assessment only.
Top three remaining observations, each with its screenshot:
1. TanyaHukum is shown in guest welcome state (project sheets), not as proof of a live model answer. This is intentional and captioned accurately.
2. Small thumbnails cannot expose every detail of a 1440px-wide app (project mobile sheets). High-density captures stay sharp and larger versions appear on detail pages.
3. Angled edges still depend on browser/display subpixel rasterization (sharp-showcase.png). Higher source density and composited antialiasing improve them without blurring application content.


## Initial rebuild (historical baseline)
The interface was rebuilt with Taste Skill into a monochrome engineering dossier. The SvelteKit 2 / Svelte 5 / TypeScript / Tailwind 4 stack remains. All 12 canonical projects, 12 experience entries, five skill groups and owner contact channels are present. Exactly three projects are featured. Internal tools have no public source or demo actions. In-progress statuses and HukumPekerja team attribution remain explicit.

The old UI components and old workflow briefs were removed. Original reference documents and the PRD remain in docs. The PRD SHA-256 is unchanged and matches the Downloads source:
`0BB017319AE36948A665697B3B816B7C13F763666942D9241E70A5F6DC43C617`.

## Initial verification (historical baseline)
- `npm run check`: 0 errors, 0 warnings.
- `npm test`: 22 tests passed.
- `npm run build`: passed; 12 detail pages are prerendered.
- `npm run test:e2e`: 22 tests passed. Includes routing, all details, source/demo visibility, search, URL state/back navigation, workflow switching, image loading, 360px overflow, theme persistence, mobile menu focus/Escape, skip link, legacy anchors and reduced motion.
- Axe WCAG 2/2.1/2.2 A/AA checks: zero violations on Home, Projects, About, Contact and CKG detail in both themes. Scans use reduced motion to measure complete static states rather than transient animation frames.
- Public link audit: all five repository URLs and all five demo URLs return HTTP 200. Anonymous browser captures also verified four demos; Tokoku public entry was inspected separately. HTTP status does not certify every authenticated product feature.
- Home Taste browser gate: 0 FAIL at 1440, 768 and 390px. One warning: no video. No source footage was supplied, and the PRD rejects autoplay video; image motion and product interactions serve the portfolio instead.
- Projects Taste browser gate: 0 FAIL at the same three widths. Product thumbnails were enlarged and repeated decorative arrow icons removed. The index intentionally uses interface screenshots and workflow plates rather than unrelated photography or footage. Its mobile text-edge warning was checked against the render: the actual page and row surfaces retain equal 20px outer margins with no horizontal overflow.
- Taste source lint: 0 FAIL. Proper-name warnings for Microsoft Elevate are retained. Em-dash warnings count multiple static records; no decorative monospace or numbered UI remains.
- Responsive screenshots and image-loading report: docs/qa. Screenshots include 360, 390, 768 and 1440px, main routes, a public case study and an internal project. Browser inspection sheets live in .taste-skill and are deliberately untracked.
- `git diff --check`: no whitespace errors.

## Visual critique

Direction: The page is the object, seed 849660999. The initial contact-sheet direction, seed 1600751922, required a mass of equally weighted frames and conflicted with the PRD's three detailed featured projects. The dossier uses the owner's own reporting, travel and retail work as the material. The curtain footer was replaced after inspection showed overlap; the hero product sheet now supplies the signature motion.

ROUND 1
Seen in one second: the engineer's name and a spread of actual products.
Idea (one sentence): Maulana's Suranadi workflows, Lombok travel site and family-store software become the plates of a personal engineering dossier.
Live thing: explore reporting, roster synchronization and WhatsApp extraction pipelines.
Layout words by section: hero=cover / featured=plates / about=portrait / experience=record / automation=workflow / contact=back cover.
Scores: design 7 · usability 7 · creativity 7 · content 8 → overall 6.0 after cap (uncapped 7.1).
Caps applied: 6.0 while browser FAIL findings remained.
Top three problems (most visible first), each with screenshot and fix:
1. Hero caption touched the product image text (desktop fold). Gave it an opaque dedicated caption strip.
2. Footer curtain remained behind the document and triggered hidden-text overlap (desktop page 02). Returned it to normal document flow.
3. Desktop full-page captures missed off-screen lazy images. Loaded and decoded assets before full-page review, and eagerly loaded the two primary narrative photographs.

ROUND 2
Seen in one second: the name and product collage, with a clearer caption and role.
Idea (one sentence): the same dossier, now using a wider range of the owner's work as evidence.
Live thing: three working pipeline selections with matching project destinations.
Layout words by section: hero=cover / featured=plates / about=portrait / experience=record / automation=workflow / contact=back cover.
Scores: design 7.5 · usability 8 · creativity 7 · content 8.5 → overall 6.0 after cap (uncapped 7.7).
Caps applied: 6.0 while the mobile eyebrow detector remained unresolved.
Top three problems (most visible first), each with screenshot and fix:
1. Status/date labels preceded headings (home sheets). Put names first and metadata beneath them.
2. Mobile section boundaries were too close to incidental captions (mobile sheets). Removed the redundant portrait caption and clarified section spacing.
3. HukumPekerja and Tokoku public entry screens did not demonstrate their central features (project index). Added explicitly labeled synthetic product reconstructions, with matching provenance in ASSETS.md.

ROUND 3
Seen in one second: Maulana Muhammad, Software Engineer, with work already visible.
Idea (one sentence): the dossier connects the owner's engineering with the operational systems he works in.
Live thing: the workflow explorer changes actual processing stages and links to the corresponding project.
Layout words by section: hero=cover / featured=plates / about=portrait / experience=record / automation=workflow / contact=back cover.
Scores: design 8 · usability 8.5 · creativity 7 · content 8.5 → overall 8.0.
Caps applied: none on the final homepage. These are internal critique scores, not an external award or audit rating.
Top three remaining observations, each with its location:
1. Synthetic product screens explain capability, but are not proof of production adoption (featured HukumPekerja and internal staff showcase). Their disclosures remain visible and no adoption claim is made.
2. A full 12-project index is long on a phone. Search, category filtering and shareable URLs keep it navigable.
3. No original product footage exists in the supplied materials. Do not replace this absence with generic stock video.

## Asset and source audit
All 12 ZIP archives were inventoried without executing their applications or importing credentials. Package manifests confirmed the public web stacks. Automation READMEs confirmed that the six reporting/attendance tools are scripts rather than dashboards, and that CKG final submission remains disabled. Private source was not copied into this portfolio.

Staff reporting, Tokoku and HukumPekerja plates are reconstructions with synthetic content. Script projects receive workflow illustrations. The portrait is owner supplied. The desk photograph was generated with the built-in image tool. Full file mapping, sample data and exact generation prompt are in [ASSETS.md](ASSETS.md). Synthetic records should remain synthetic in public screenshots.

## Remaining limits
- No production or preview deployment to Vercel was performed; the local production preview is reviewable. The existing production domain is unchanged.
- No screen-reader session or Lighthouse run was performed. Automated accessibility checks and keyboard tests are not a claim of complete WCAG certification; no Lighthouse score is invented.
- npm audit retains three low-severity advisories in the SvelteKit 2 / adapter-auto / cookie dependency chain. Compatible fixes removed the earlier high-severity findings. The remaining suggested fix requires a SvelteKit 3 major migration, beyond the PRD's requested stack.
- HukumPekerja's precise individual contribution is not supplied. The portfolio states team project and does not invent ownership of the whole implementation.
- No CV, certificates, testimonial, availability status or research archive was invented.

## Color revision / 24 October 2026

Owner-requested update preserves the approved composition, replaces grayscale styling with the dealt Navy and pink palette, adds semantic icons and a pausable tech-stack marquee, limits the personal portrait to About, and adds interaction, image-settle and route transition motion. The original PRD is untouched.

Color critique ROUND 1
Seen in one second: the engineer's name, software role, and actual products now in color.
Idea (one sentence): the personal engineering dossier uses blue and pink printed sheets to present Maulana's own software and operational workflows.
Live thing: actual workflow selection plus a controllable moving toolkit.
Layout words by section: hero=cover / toolkit=running index / featured=plates / about=engineering note / experience=record / automation=workflow / contact=back cover.
Scores: design 7.5 · usability 8 · creativity 7 · content 8.5 → overall 6.0 while the gate failed.
Caps applied: 6.0 while the mobile eyebrow finding remained.
Top three problems (most visible first), each with screenshot and fix:
1. Short AI/review labels below the engineering plate read as a kicker above the following mobile heading (color/mobile-page-01). Replaced the labels with a complete explanatory sentence and made the illustrated reporting flow specific to e-Puskesmas/UploadSehat.
2. Mobile typography accumulated extra small sizes (mobile sheets). Unified the wordmark, toolkit heading and supporting sizes with the existing type steps.
3. Motion was too similar between product imagery and body copy (desktop sheets). Added a distinct image-settle gesture and short native route transitions; controls and workflow changes retain immediate feedback.

Color critique ROUND 2
Seen in one second: the same approved product-led cover, now in blue and pink.
Idea (one sentence): colored dossier plates show the connection between Maulana's products and operational engineering.
Live thing: the controllable tech strip and three real workflow choices.
Layout words by section: hero=cover / toolkit=running index / featured=plates / about=engineering note / experience=record / automation=workflow / contact=back cover.
Scores: design 8 · usability 8 · creativity 7 · content 8.5 → overall 6.0 while mobile findings remained.
Caps applied: 6.0 while the gate failed.
Top three problems (most visible first), each with screenshot and fix:
1. GitHub utility link sat close enough to be mistaken for the toolkit's kicker (mobile page 01). Gave the toolkit the same clear 96px chapter separation used elsewhere.
2. Added stack icons wrapped separately from long stack labels (projects mobile page 01). Replaced anonymous flex text with an explicit icon/text/arrow grid.
3. Inset mobile project rows made their text edges inconsistent with the title frame (projects mobile page 01). Removed the extra filled wrapper on mobile and aligned the larger showcase and text to the shared gutters.

Color critique ROUND 3 / final
Seen in one second: Maulana Muhammad, Software Engineer, with two actual products and a clear project action.
Idea (one sentence): the engineering dossier presents Maulana's real travel, reporting and automation work through colored product plates.
Live thing: pausable twelve-brand toolkit and a workflow explorer with working destinations.
Layout words by section: hero=cover / toolkit=running index / featured=plates / about=engineering note / experience=record / automation=workflow / contact=back cover.
Scores: design 8 · usability 8.5 · creativity 7 · content 8.5 → overall 8.0.
Caps applied: none. Internal critique, not an external rating.
Top three remaining observations, each with its screenshot:
1. The engineering illustration is compressed at tablet width (tablet page 01). It is secondary, explicitly simplified artwork; the complete meaningful case-study content is separate readable text.
2. Twelve complete projects make the mobile index long (projects mobile sheets). Search, categories and URL state remain available.
3. No original product footage was supplied (all pages). Authentic interface images and deliberate motion are retained instead of unrelated stock footage.

Final verification for the color revision:
- Type/Svelte checks: 0 errors, 0 warnings. Production build passed.
- 22 unit tests and 24 browser tests passed, including the new marquee pause/offscreen checks and portrait-placement regression check.
- Axe WCAG checks: zero violations across five key pages in both themes; reduced motion retains visible content with zero running animations.
- Home Taste gate: 0 FAIL at 1440/768/390px, one defended no-footage warning. Final sheets: .taste-skill/color-complete.
- Projects Taste gate: 0 FAIL at the same widths, two defended warnings: no footage and interface imagery rather than unrelated photographs. Final sheets: .taste-skill/color-projects-release. All listed fold and page sheets were opened and reviewed.
- Responsive image/loading reports remain in docs/qa; no broken images or horizontal overflow in the tested routes at 360/390/768/1440px.
- Source lint: 0 FAIL; Microsoft Elevate proper-name and aggregate em-dash warnings retained. Monospace appears only inside the real code illustration.
- PRD SHA-256 remains 0BB017319AE36948A665697B3B816B7C13F763666942D9241E70A5F6DC43C617. No private ZIP data or credentials were added.
- Local preview only. No deployment, commit, or remote write was performed.

## Magma Mist and transparent showcase revision

Owner reference fixes the four brand colors: #F06F0E / #FFB342 / #0A372F / #077777. This replaces the previous Navy and pink palette. The composition, content, routes, animations and privacy restrictions remain.

ROUND 1
Seen in one second: the same recognizable name/product cover, now on forest green with orange actions.
Idea (one sentence): the engineering dossier shows real products as unbacked floating plates, with amber notes for workflow explanations.
Live thing: the existing pausable toolkit and three selectable automation workflows.
Layout words by section: hero=unbacked cover / toolkit=running index / featured=product plates / about=amber engineering note / experience=record and cutout / automation=workflow / contact=close.
Scores: design 8 · usability 7 · creativity 7 · content 8.5 → overall 7.6.
Caps applied: none from the Taste meter, but accessibility contrast still required repair.
Top three problems (most visible first), each with screenshot and fix:
1. Small green type on the exact orange action was 4.4:1 (magma desktop fold). Keep the owner's orange and deepen the action ink to #062b25.
2. Two unselected workflow tabs used amber text at 4.1:1 (magma desktop page 02). Use the light workflow ink on those dark controls.
3. The processing stage still retained a neutral grey fill (magma desktop page 02). Map it and the selected tab to the same amber token as the workflow illustrations.

ROUND 2 / final
Seen in one second: Maulana, Software Engineer, with actual product screens directly on the page instead of blue/pink rectangular backdrops.
Idea (one sentence): forest, teal, orange and amber organize a practical engineering dossier whose screenshots retain their own identity.
Live thing: toolkit motion can be paused, and workflow choices change real stages and destinations.
Layout words by section: hero=unbacked cover / toolkit=running index / featured=product plates / about=amber engineering note / experience=record and cutout / automation=workflow / contact=close.
Scores: design 8 · usability 8.5 · creativity 7 · content 8.5 → overall 8.0.
Caps applied: none. Internal assessment, not an external award.
Top three remaining observations, each with its screenshot:
1. Public product screenshots still have their own white page surfaces (home desktop page 01). Deliberately retained: removing those pixels would damage the real app view; only the exterior backing is transparent.
2. The workspace illustration is synthetic rather than an actual office photograph (home desktop page 02). It is identified as illustrative, contains no people or private records, and its exact prompts are documented in ASSETS.md.
3. The twelve-project mobile index remains long (projects mobile sheets). The existing filters and search keep it navigable.

Verification:
- Svelte/TypeScript check: 0 errors, 0 warnings. Production build passed.
- Unit tests: 22 passed. Browser tests: 25 passed, including the new Magma Mist token/background/monochrome-replacement regression check.
- Axe on five key routes in both themes: zero violations after the contrast fixes.
- Taste Home: 0 FAIL, one defended no-footage warning; Projects: 0 FAIL, no-real-pictures/no-footage warnings defended because the index is an honest product-screen/workflow catalog. Both checked at 1440/768/390px. All final fold and page sheets were opened: .taste-skill/magma-final and .taste-skill/magma-projects.
- Workspace PNG and runtime WebP retain actual alpha transparency. Empty-area alpha samples are zero; browser captures confirm clean integration with page backgrounds.
- ProductShowcase and hero artwork backing computed backgrounds are rgba(0,0,0,0) in light and dark. No monochrome desk image is referenced by Home or About.
- The native synthetic plate renderers retain their original synthetic data and disclosures. No internal application was launched, no real records were imported, and public screenshots were not cosmetically recolored.
- PRD hash is unchanged: 0BB017319AE36948A665697B3B816B7C13F763666942D9241E70A5F6DC43C617.
- No deployment, commit or external write was performed.



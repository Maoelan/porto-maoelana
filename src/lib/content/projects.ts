import type { Project } from '$lib/types/portfolio';

/**
 * Canonical 12-project registry: PRD §06 is the source of truth.
 * Statuses: In Progress only for Wonderful Lombok, PSC Sahabat, and Automated CKG.
 * Internal entries never carry repoUrl or demoUrl. Copy is plain text; no raw HTML.
 */
export const projects: Project[] = [
	{
		slug: 'gkm-psc-sahabat',
		title: 'PSC Sahabat',
		summary: 'AI-assisted reporting portal for violence-against-women-and-children cases.',
		description:
			'A reporting portal for Puskesmas Suranadi supporting cases of violence against women and children. AI-assisted conversations help collect incident information and prepare structured reports, with human staff intervention and report-management workflows. The current public deployment is for evaluation using synthetic data only.',
		categories: ['Full-Stack', 'AI/ML', 'Healthcare IT'],
		techStack: [
			'SvelteKit',
			'Svelte 5',
			'TypeScript',
			'Convex',
			'NVIDIA AI API',
			'Zod',
			'Vitest',
			'Vercel'
		],
		status: 'in-progress',
		visibility: 'public',
		scope: 'Built for the workplace',
		featured: true,
		repoUrl: 'https://github.com/Maoelan/gkm-psc-sahabat',
		demoUrl: 'https://lapor-aman-psc.vercel.app/',
		caveat: 'Evaluation deployment; uses synthetic case data only.',
		problem:
			'Violence reporting requires a clear intake process, structured incident information, and staff oversight.',
		approach:
			'A SvelteKit portal where an AI-assisted conversation, backed by the NVIDIA AI API, gathers incident information in a structured way and drafts the report while a staff member stays in control: they review, correct, and confirm before anything is recorded. Report management, filtering, and follow-up workflows sit around that conversation so the whole case lifecycle lives in one place.',
		features: [
			'AI-assisted structured intake conversation for incident details',
			'Human review and confirmation before a report is stored',
			'Report management: list, filter, and follow up on cases',
			'Synthetic-data evaluation mode for safe deployment testing'
		],
		availability: 'Repository and evaluation deployment are public; production rollout is pending.'
	},
	{
		slug: 'wonderful-lombok',
		title: 'Wonderful Lombok',
		summary: 'Multilingual travel and booking website for a Lombok tourism business.',
		description:
			'A multilingual travel website for a Lombok tourism business. Visitors browse tours and destinations, view private transfer estimates through map routing, and contact the business through WhatsApp. An admin-managed catalog supports packages, images, pricing, and translations.',
		categories: ['Full-Stack'],
		techStack: [
			'SvelteKit',
			'Svelte 5',
			'JavaScript',
			'Convex',
			'Leaflet',
			'OpenStreetMap',
			'Nominatim',
			'OSRM',
			'GitHub Actions',
			'Vercel'
		],
		status: 'in-progress',
		visibility: 'public',
		scope: 'Client work',
		featured: true,
		repoUrl: 'https://github.com/Maoelan/wonderful-lombok',
		demoUrl: 'https://wonderful-lombok-main.vercel.app/',
		problem:
			'A Lombok tourism business needed a real website where travelers could browse packages, estimate transfer costs, and reach them directly, instead of relying on chat threads and static social-media posts.',
		approach:
			'A SvelteKit site backed by Convex. The tour catalog, pricing, images, and translations are managed by an admin area, so the business edits content without deployments. Transfer estimates come from real map routing: Leaflet and OpenStreetMap for display, Nominatim for geocoding, and OSRM for route distance. Inquiry CTAs open WhatsApp with context pre-filled. A GitHub Actions workflow deploys to Vercel.',
		features: [
			'Multilingual content managed through an admin catalog',
			'Tour and destination browsing with images and pricing',
			'Map-based private transfer estimates (Nominatim + OSRM)',
			'WhatsApp contact with pre-filled inquiry context'
		],
		availability:
			'Repository and staging deployment are public; content is still being prepared with the client.'
	},
	{
		slug: 'puskesmas-queue-system',
		title: 'Puskesmas Queue Management System',
		summary: 'Browser-only patient queue calling with Indonesian text-to-speech announcements.',
		description:
			'A browser-only patient queue calling system for the registration counter. Staff can advance the queue, call specific numbers, repeat Indonesian text-to-speech announcements, and resume from a locally stored queue number.',
		categories: ['Healthcare IT'],
		techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Web Speech API', 'Local Storage'],
		status: 'completed',
		visibility: 'public',
		scope: 'Built for the workplace',
		repoUrl: 'https://github.com/Maoelan/puskesmas-queue-system',
		demoUrl: 'https://pkm-srnd-loket.vercel.app/',
		problem:
			'Registration staff need to advance, repeat, and call patient queue numbers through a browser.',
		approach:
			'A single-page, dependency-free web app that runs entirely in the counter browser. The Web Speech API announces numbers in Indonesian, Local Storage persists the current number across reloads and browser restarts, and controls cover next, repeat, and direct call for missed patients.',
		features: [
			'Advance, repeat, and direct-call queue controls',
			'Indonesian text-to-speech announcements via the Web Speech API',
			'Queue number persisted locally across restarts',
			'No backend or installation required. Runs from a browser tab.'
		],
		availability: 'Repository and public demo are live.'
	},
	{
		slug: 'pkm-piket-absensi',
		title: 'Puskesmas Staff Shift & Absence Reporting',
		summary: 'Internal portal for staff absence and shift reports with export.',
		description:
			'An internal portal for staff absence and shift reports covering leave, sick days, official duties, and shift exchanges. Administrators review, filter, edit, remove, and export records.',
		categories: ['Healthcare IT', 'Full-Stack'],
		techStack: [
			'React',
			'JavaScript',
			'Vite',
			'Tailwind CSS',
			'Convex',
			'date-fns',
			'Lucide React'
		],
		status: 'completed',
		visibility: 'internal',
		scope: 'Internal tool',
		problem:
			'Staff need a consistent way to submit absence and shift reports, and administrators need to review and export them.',
		approach:
			'A React portal on Convex where staff submit absence and shift records and administrators review them: filter by type and period, correct entries, remove duplicates, and export the recap. date-fns handles recurring-date logic; Lucide keeps the interface scannable for non-technical staff.',
		features: [
			'Absence and shift reporting for leave, sick days, official duties, and exchanges',
			'Admin review: filter, edit, remove, and export records',
			'Date handling for recurring shift patterns'
		],
		availability: 'Internal project. No public repository or demo.'
	},
	{
		slug: 'tokoku',
		title: 'Tokoku',
		summary: 'Point-of-sale and inventory web app for a family retail business.',
		description:
			'A point-of-sale and inventory web app for a family retail business. It covers sales transactions, category and product management, stock updates, sales history, cashier/admin access, and a revenue dashboard.',
		categories: ['Full-Stack'],
		techStack: [
			'Next.js',
			'React',
			'TypeScript',
			'PostgreSQL',
			'Supabase',
			'Drizzle ORM',
			'CSS Modules',
			'Jest',
			'GitHub Actions',
			'Vercel'
		],
		status: 'completed',
		visibility: 'public',
		scope: 'Family business',
		repoUrl: 'https://github.com/Maoelan/Tokoku',
		demoUrl: 'https://tokoku-sintung.vercel.app/',
		problem:
			'The family store tracked sales and stock by hand, so closing the register meant recounting shelves and revenue was only clear at the end of the month.',
		approach:
			'A Next.js + TypeScript app on PostgreSQL (Supabase) with Drizzle ORM. Cashiers record transactions in seconds; product, category, and stock management keep the shelf count current; separate cashier and admin access keeps the money view restricted; and a revenue dashboard shows how the day, week, and month are going. Jest tests and GitHub Actions keep the workflow honest.',
		features: [
			'Fast counter checkout flow for cashiers',
			'Product, category, and stock management',
			'Sales history with cashier/admin access levels',
			'Revenue dashboard for daily and period totals'
		],
		availability: 'Repository and public demo are live.'
	},
	{
		slug: 'hukumpekerja-chatbot',
		title: 'HukumPekerja',
		summary: 'Indonesian labor-law assistant answering with retrieval-grounded references.',
		description:
			'An Indonesian employment-law information chatbot that uses retrieval-augmented generation to answer questions with supporting references. The implementation uses pgvector search, BGE-M3 embeddings, and selectable Llama 3 / Gemini models. Describe contributions accurately if part of a team.',
		categories: ['AI/ML', 'Full-Stack'],
		techStack: [
			'Next.js',
			'React',
			'TypeScript',
			'Tailwind CSS',
			'PostgreSQL',
			'Supabase',
			'Drizzle ORM',
			'pgvector',
			'BGE-M3',
			'Hugging Face',
			'Llama 3',
			'Gemini',
			'Vercel'
		],
		status: 'completed',
		visibility: 'public',
		scope: 'Team project',
		featured: true,
		roleNote:
			'Team project. The repository lives under the Bideng-Warrior organization rather than my personal account.',
		repoUrl: 'https://github.com/Bideng-Warrior/hukumpekerja-chatbot',
		demoUrl: 'https://hukumpekerja-chatbot.vercel.app/',
		problem:
			'Indonesian workers with labor-law questions face dense statutes and pay-per-consult lawyers; plain-language answers with the actual legal basis are hard to get.',
		approach:
			'A RAG pipeline: employment-law documents are embedded with BGE-M3 (via Hugging Face) and stored with pgvector on PostgreSQL; at query time the relevant passages are retrieved and handed to a selectable Llama 3 or Gemini model, so answers cite the law they rest on instead of free-generating. Next.js with Drizzle ORM serves the chat interface and session persistence.',
		features: [
			'Retrieval-augmented answers with supporting legal references',
			'pgvector semantic search over BGE-M3 embeddings',
			'Selectable Llama 3 / Gemini generation backends',
			'Conversation history persisted per session'
		],
		availability: 'Repository and public demo are live.'
	},
	{
		slug: 'automated-kia-reports',
		title: 'Automated Maternal & Child Health Reporting',
		summary: 'Automated export and upload of six KIA report types from e-Puskesmas.',
		description:
			'Automates exporting six maternal/child-health (KIA) report types from e-Puskesmas and uploading them to the relevant reporting portal. Supports date batches and history tracking to reduce duplicate submissions.',
		categories: ['Automation', 'Healthcare IT'],
		techStack: ['Python', 'Playwright', 'Chrome DevTools Protocol', 'python-dotenv', 'Pytest'],
		status: 'completed',
		visibility: 'internal',
		scope: 'Internal tool',
		problem:
			'Six maternal and child health reports had to be exported from e-Puskesmas and re-uploaded to a reporting portal every period, by hand, on top of clinical work.',
		approach:
			'A Python + Playwright pipeline that drives the export and upload flows in a real browser session, batched by reporting date. A submission history prevents the same period being uploaded twice, and Pytest covers the flow so portal changes surface as failing tests instead of silent bad data.',
		features: [
			'Automated export of six KIA report types from e-Puskesmas',
			'Portal upload with date-batch support',
			'Submission history to prevent duplicates'
		],
		availability: 'Internal project. No public repository or demo.'
	},
	{
		slug: 'automated-hepatitis-report',
		title: 'Automated Hepatitis & Triple Elimination Reporting',
		summary: 'Retrieves SIHEPI screening summaries and submits transformed reports.',
		description:
			'Retrieves SIHEPI maternal screening summaries for hepatitis B, HIV, and syphilis, transforms Excel reports, and submits them through the reporting portal. Includes scheduling, logs, and upload history.',
		categories: ['Automation', 'Healthcare IT'],
		techStack: [
			'Python',
			'Playwright',
			'BeautifulSoup',
			'OpenPyXL',
			'PyWin32',
			'Node.js',
			'PM2',
			'python-dotenv'
		],
		status: 'completed',
		visibility: 'internal',
		scope: 'Internal tool',
		problem:
			'Maternal screening summaries for hepatitis B, HIV, and syphilis live in SIHEPI and Excel exports, and reconciling them into the reporting portal by hand was a recurring end-of-month burden.',
		approach:
			'A Python pipeline that fetches SIHEPI summaries (Playwright + BeautifulSoup), reshapes the Excel reports with OpenPyXL, and submits them through the portal. PM2 with a Node.js wrapper keeps it scheduled on the office Windows machine, with logs and an upload history for audit.',
		features: [
			'SIHEPI summary retrieval for hepatitis B, HIV, and syphilis screening',
			'Excel report transformation before submission',
			'Scheduled runs with logs and upload history'
		],
		availability: 'Internal project. No public repository or demo.'
	},
	{
		slug: 'automated-solution-attendance',
		title: 'Employee Shift Scheduling & Attendance Sync',
		summary: 'Delta-syncs Google Sheets rosters into the fingerprint attendance database.',
		description:
			'Synchronizes Google Sheets nursing/midwifery rosters with an existing fingerprint attendance database. Matches staff identifiers and uses delta sync to update only changed assignments.',
		categories: ['Automation'],
		techStack: ['Python', 'Pandas', 'Google Sheets', 'Microsoft Access', 'PyODBC', 'Windows Batch'],
		status: 'completed',
		visibility: 'internal',
		scope: 'Internal tool',
		problem:
			'Nursing and midwifery shift rosters were maintained in Google Sheets while the fingerprint attendance system read its own database, so the two drifted apart every month.',
		approach:
			'A data-integration script: Pandas reads and normalizes the Google Sheets roster, staff identifiers are matched against the attendance database (Microsoft Access over PyODBC), and a delta sync writes only the rows that actually changed instead of reloading the whole month.',
		features: [
			'Google Sheets roster ingestion with Pandas',
			'Staff identifier matching against the attendance database',
			'Delta sync writes only changed assignments'
		],
		availability: 'Internal project. No public repository or demo.'
	},
	{
		slug: 'automated-leave-sync',
		title: 'AI-Powered WhatsApp Leave Synchronization',
		summary: 'Turns WhatsApp leave messages into attendance records with Gemini extraction.',
		description:
			'Converts staff leave and attendance reports received over WhatsApp into attendance records. Uses a Node.js WhatsApp listener, Gemini-based extraction, and Python reconciliation with an existing Microsoft Access database, including duplicate and revoked-message handling.',
		categories: ['Automation', 'AI/ML'],
		techStack: [
			'Python',
			'Node.js',
			'Baileys',
			'Gemini API',
			'Pydantic',
			'Pandas',
			'PyODBC',
			'Microsoft Access',
			'PM2'
		],
		status: 'completed',
		visibility: 'internal',
		scope: 'Internal tool',
		problem:
			'Staff report leave and absences over a WhatsApp group; someone then had to read every message and update the attendance database by hand.',
		approach:
			'A Node.js listener (Baileys) watches the group and forwards messages to Gemini, which extracts structured leave records (validated with Pydantic). A Python reconciliation step writes them into the Microsoft Access attendance database via PyODBC, matching staff, ignoring duplicates, and deleting records when a WhatsApp message is revoked. PM2 keeps both sides running.',
		features: [
			'WhatsApp message capture via a Node.js Baileys listener',
			'Gemini-based extraction of unstructured leave messages',
			'Pydantic-validated records written to Microsoft Access',
			'Duplicate detection and revoked-message cleanup'
		],
		availability: 'Internal project. No public repository or demo.'
	},
	{
		slug: 'automated-health-reports',
		title: 'Automated e-Puskesmas Healthcare Reporting',
		summary: 'Automates seven routine operational reports into UploadSehat.',
		description:
			'Automates exporting seven routine operational healthcare reports from e-Puskesmas and submitting them to UploadSehat. Supports configurable dates, duplicate detection, and execution logs.',
		categories: ['Automation', 'Healthcare IT'],
		techStack: [
			'Python',
			'Playwright',
			'Chrome DevTools Protocol',
			'python-dotenv',
			'Pytest',
			'pytest-mock',
			'pytest-cov'
		],
		status: 'completed',
		visibility: 'internal',
		scope: 'Internal tool',
		problem:
			'Seven routine operational reports were manually exported from e-Puskesmas and re-entered into UploadSehat every reporting cycle.',
		approach:
			'A Python + Playwright automation that walks the export and submission flows with configurable reporting dates, checks for duplicates before submitting, and logs every run. The test suite (Pytest with mocks and coverage) keeps the selectors and flows verifiable without touching the live portals.',
		features: [
			'Automated export of seven routine reports from e-Puskesmas',
			'UploadSehat submission with configurable dates',
			'Duplicate detection and per-run execution logs'
		],
		availability: 'Internal project. No public repository or demo.'
	},
	{
		slug: 'automated-ckg-registration',
		title: 'Automated CKG',
		summary: 'Registration assistant for the Cek Kesehatan Gratis screening program.',
		description:
			"A Python registration assistant for Indonesia's Cek Kesehatan Gratis (CKG) program. It validates Excel records, checks registration information, and automates browser-based form completion. Final production submission is disabled pending review; do not claim fully automated live registration.",
		categories: ['Automation', 'Healthcare IT'],
		techStack: [
			'Python',
			'Playwright',
			'OpenPyXL',
			'ddddocr',
			'defusedxml',
			'python-dotenv',
			'Pytest',
			'Ruff'
		],
		status: 'in-progress',
		visibility: 'internal',
		scope: 'Internal tool',
		caveat:
			'Final production submission is disabled pending review. This is not fully automated live registration.',
		problem:
			"Registering residents for Indonesia's Cek Kesehatan Gratis program means re-typing rows from Excel spreadsheets into a web form, one resident at a time.",
		approach:
			'A Python assistant that validates the Excel records (OpenPyXL, defusedxml for safe parsing), checks existing registration information, and fills the browser-based form with Playwright, including CAPTCHA handling via ddddocr. The final submit step is deliberately disabled pending review, so the tool assists rather than replaces the operator.',
		features: [
			'Excel record validation before any browser work',
			'Registration status checking',
			'Automated form completion with CAPTCHA reading',
			'Final submission disabled pending review'
		],
		availability: 'Internal project. No public repository or demo.'
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

/** The three featured case studies, in the PRD homepage story order. */
export function featuredProjects(): Project[] {
	const order = ['wonderful-lombok', 'gkm-psc-sahabat', 'hukumpekerja-chatbot'];
	return order
		.map((slug) => projects.find((p) => p.slug === slug))
		.filter((p): p is Project => Boolean(p));
}

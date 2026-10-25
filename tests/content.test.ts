import { describe, expect, it } from 'vitest';
import { projects, getProject, featuredProjects } from '../src/lib/content/projects';
import { experiences, experienceGroups, sortedExperiences } from '../src/lib/content/experience';
import { skillGroups } from '../src/lib/content/skills';
import { identity } from '../src/lib/content/identity';
import { FILTER_CATEGORIES } from '../src/lib/types/portfolio';
import { filterProjects } from '../src/lib/utils/project';

describe('project registry: PRD §06, FR-02', () => {
	it('has exactly 12 canonical projects', () => {
		expect(projects).toHaveLength(12);
	});

	it('has unique slugs', () => {
		const slugs = projects.map((p) => p.slug);
		expect(new Set(slugs).size).toBe(12);
	});

	it('features exactly three projects: Wonderful Lombok, PSC Sahabat, HukumPekerja (FR-05)', () => {
		const featured = projects
			.filter((p) => p.featured)
			.map((p) => p.slug)
			.sort();
		expect(featured).toEqual(['gkm-psc-sahabat', 'hukumpekerja-chatbot', 'wonderful-lombok']);
		expect(featuredProjects()).toHaveLength(3);
	});

	it('internal projects never expose repository or demo links (FR-04, FR-10)', () => {
		for (const project of projects.filter((p) => p.visibility === 'internal')) {
			expect(project.repoUrl, project.slug).toBeUndefined();
			expect(project.demoUrl, project.slug).toBeUndefined();
		}
	});

	it('public links are absolute https URLs', () => {
		for (const project of projects) {
			for (const url of [project.repoUrl, project.demoUrl]) {
				if (url) expect(url).toMatch(/^https:\/\//);
			}
		}
	});

	it('marks In Progress only for Wonderful Lombok, PSC Sahabat, and Automated CKG', () => {
		const inProgress = projects
			.filter((p) => p.status === 'in-progress')
			.map((p) => p.slug)
			.sort();
		expect(inProgress).toEqual([
			'automated-ckg-registration',
			'gkm-psc-sahabat',
			'wonderful-lombok'
		]);
	});

	it('attaches at least one valid filter category to every project', () => {
		for (const project of projects) {
			expect(project.categories.length, project.slug).toBeGreaterThan(0);
			for (const category of project.categories) {
				expect(FILTER_CATEGORIES).toContain(category);
			}
		}
	});

	it('renders no raw HTML from the old data layer (PRD §16)', () => {
		for (const project of projects) {
			for (const field of [project.summary, project.description, ...(project.features ?? [])]) {
				expect(field, project.slug).not.toMatch(/<\/?[a-z][^>]*>/i);
			}
		}
	});

	it('carries full case-study content for every project', () => {
		for (const project of projects) {
			expect(project.problem, project.slug).toBeTruthy();
			expect(project.approach, project.slug).toBeTruthy();
			expect(project.features?.length, project.slug).toBeGreaterThan(0);
			expect(project.availability, project.slug).toBeTruthy();
		}
	});

	it('resolves every slug and rejects unknown slugs', () => {
		for (const project of projects) {
			expect(getProject(project.slug)?.title).toBe(project.title);
		}
		expect(getProject('not-a-real-slug')).toBeUndefined();
	});

	it('lists no Tailwind claim for Tokoku (corrected stack, PRD §02)', () => {
		const tokoku = getProject('tokoku');
		expect(tokoku?.techStack).toContain('CSS Modules');
		expect(tokoku?.techStack).not.toContain('Tailwind CSS');
	});

	it('clarifies team attribution for HukumPekerja (PRD §22)', () => {
		expect(getProject('hukumpekerja-chatbot')?.roleNote).toBeTruthy();
	});
});

describe('filtering and search: FR-03', () => {
	it('returns the full set for All with no query', () => {
		expect(filterProjects(projects, 'All', '')).toHaveLength(12);
	});

	it('returns correct subsets per category', () => {
		for (const category of FILTER_CATEGORIES) {
			const subset = filterProjects(projects, category, '');
			expect(subset.length, category).toBeGreaterThan(0);
			expect(subset.every((p) => p.categories.includes(category))).toBe(true);
		}
	});

	it('matches title, summary, and stack, with multi-term AND semantics', () => {
		expect(filterProjects(projects, 'All', 'gemini').length).toBeGreaterThan(0);
		expect(filterProjects(projects, 'All', 'playwright python').length).toBeGreaterThan(0);
		expect(filterProjects(projects, 'All', 'zzz-no-such-project')).toHaveLength(0);
	});

	it('combines category and query', () => {
		const subset = filterProjects(projects, 'Automation', 'whatsapp');
		expect(subset.map((p) => p.slug)).toEqual(['automated-leave-sync']);
	});
});

describe('experience registry: PRD §08, FR-06', () => {
	it('has exactly 12 entries with exact source periods', () => {
		expect(experiences).toHaveLength(12);
		const byId = new Map(experiences.map((e) => [e.id, e]));
		expect(byId.get('puskesmas-his')).toMatchObject({ start: '2026-06' });
		expect(byId.get('puskesmas-his')?.end).toBeUndefined();
		expect(byId.get('puskesmas-it-staff')).toMatchObject({ start: '2026-04' });
		expect(byId.get('dicoding-reviewer')).toMatchObject({ start: '2024-06' });
		expect(byId.get('gcaf-facilitator')).toMatchObject({ start: '2026-07', end: '2026-10' });
		expect(byId.get('telkom-network-technician')).toMatchObject({
			start: '2018-03',
			end: '2018-05'
		});
	});

	it('groups both Puskesmas roles under one employer, kept distinct', () => {
		const group = experienceGroups().find((g) => g.id === 'puskesmas-suranadi');
		expect(group?.roles).toHaveLength(2);
		expect(new Set(group?.roles.map((r) => r.title)).size).toBe(2);
	});

	it('sorts current roles before ended ones', () => {
		const sorted = sortedExperiences();
		const firstEnded = sorted.findIndex((e) => e.end !== undefined);
		for (const entry of sorted.slice(firstEnded)) {
			expect(entry.end).toBeDefined();
		}
	});

	it('excludes ArcDev until the owner reapproves it (PRD §02)', () => {
		expect(experiences.some((e) => e.organization.includes('ArcDev'))).toBe(false);
	});
});

describe('skills and identity: PRD §05, §09', () => {
	it('has five skill groups, none empty, no level labels', () => {
		expect(skillGroups).toHaveLength(5);
		for (const group of skillGroups) {
			expect(group.skills.length, group.id).toBeGreaterThan(0);
			expect(group.evidence, group.id).toBeTruthy();
		}
	});

	it('carries every owner-authorized contact channel (FR-07)', () => {
		expect(identity.email).toMatch(/@/);
		expect(identity.whatsappUrl).toMatch(/^https:\/\/wa\.me\/6287873026445$/);
		expect(identity.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\/maulanamuhammad2000\/$/);
		expect(identity.github).toMatch(/^https:\/\/github\.com\/Maoelan$/);
		expect(identity.instagram).toMatch(/^https:\/\//);
		expect(identity.threads).toMatch(/^https:\/\//);
	});
});

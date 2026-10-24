/** Canonical filter categories used by the /projects index (PRD FR-03). */
export const FILTER_CATEGORIES = ['Full-Stack', 'AI/ML', 'Automation', 'Healthcare IT'] as const;
export type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export type ProjectStatus = 'in-progress' | 'completed';
export type ProjectVisibility = 'public' | 'internal';

export interface Project {
	slug: string;
	/** One-line entry for index rows. */
	summary: string;
	/** Registry paragraph for detail pages. Plain text only — never raw HTML. */
	description: string;
	title: string;
	categories: FilterCategory[];
	techStack: string[];
	status: ProjectStatus;
	visibility: ProjectVisibility;
	/** Short scope label, e.g. "Client work", "Team project", "Family business". */
	scope?: string;
	featured?: boolean;
	repoUrl?: string;
	demoUrl?: string;
	/** Team-contribution clarification when repository ownership differs from the author. */
	roleNote?: string;
	/** Honest limitation or disclosure, rendered near the status. */
	caveat?: string;
	problem?: string;
	approach?: string;
	features?: string[];
	availability?: string;
}

export interface Experience {
	id: string;
	organization: string;
	title: string;
	/** 'YYYY-MM' */
	start: string;
	/** 'YYYY-MM'; omitted when current */
	end?: string;
	/** e.g. 'Contract · On-site', 'Freelance · Remote' */
	employment: string;
	summary: string;
	/** Roles sharing an organization group under one employer heading. */
	groupedOrganizationId?: string;
}

export interface SkillGroup {
	id: string;
	title: string;
	skills: string[];
	/** How the group is evidenced, per PRD §09. */
	evidence: string;
}

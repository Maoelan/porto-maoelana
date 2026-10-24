import type { FilterCategory, Project } from '$lib/types/portfolio';

/** Human status label with honest wording (PRD §04/§06). */
export function statusLabel(project: Project): string {
	if (project.visibility === 'internal') {
		return project.status === 'in-progress' ? 'In progress · Internal' : 'Internal';
	}
	return project.status === 'in-progress' ? 'In progress' : 'Live demo';
}

export type StatusTone = 'live' | 'progress' | 'internal';

export function statusTone(project: Project): StatusTone {
	if (project.visibility === 'internal')
		return project.status === 'in-progress' ? 'progress' : 'internal';
	return project.status === 'in-progress' ? 'progress' : 'live';
}

export function matchesQuery(project: Project, query: string): boolean {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	const haystack = [project.title, project.summary, ...project.techStack].join(' ').toLowerCase();
	return q.split(/\s+/).every((term) => haystack.includes(term));
}

export function filterProjects(
	projects: Project[],
	category: FilterCategory | 'All',
	query: string
): Project[] {
	return projects.filter((p) => {
		const categoryOk = category === 'All' || p.categories.includes(category);
		return categoryOk && matchesQuery(p, query);
	});
}

export function categoryCounts(projects: Project[]): Map<FilterCategory | 'All', number> {
	const counts = new Map<FilterCategory | 'All', number>([['All', projects.length]]);
	for (const p of projects) {
		for (const c of p.categories) {
			counts.set(c, (counts.get(c) ?? 0) + 1);
		}
	}
	return counts;
}

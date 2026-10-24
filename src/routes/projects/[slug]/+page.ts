import { error } from '@sveltejs/kit';
import { getProject, projects } from '$lib/content/projects';
import type { EntryGenerator, PageLoad } from './$types';

// Prerender every project detail page from the registry.
export const entries: EntryGenerator = () => projects.map((project) => ({ slug: project.slug }));

export const load: PageLoad = ({ params }) => {
	const project = getProject(params.slug);
	if (!project) {
		error(404, 'Project not found');
	}
	const index = projects.findIndex((p) => p.slug === params.slug);
	return {
		project,
		previous: index > 0 ? projects[index - 1] : undefined,
		next: index < projects.length - 1 ? projects[index + 1] : undefined
	};
};

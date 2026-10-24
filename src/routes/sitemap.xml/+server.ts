import { identity } from '$lib/content/identity';
import { projects } from '$lib/content/projects';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const paths = [
		'',
		'/projects',
		'/about',
		'/contact',
		...projects.map((project) => `/projects/${project.slug}`)
	];
	const urls = paths.map((path) => `  <url><loc>${identity.siteUrl}${path}</loc></url>`).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};

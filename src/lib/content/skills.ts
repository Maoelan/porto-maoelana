import type { SkillGroup } from '$lib/types/portfolio';

/** Skill taxonomy: PRD §09. No progress bars, percentages, or level labels. */
export const skillGroups: SkillGroup[] = [
	{
		id: 'applied-ai-ml',
		title: 'Applied AI / ML',
		skills: [
			'Python',
			'scikit-learn',
			'TensorFlow',
			'LLMs',
			'RAG',
			'Fine-tuning',
			'Diffusers',
			'MLflow',
			'TFX',
			'Qdrant',
			'pgvector'
		],
		evidence: 'Linked ML repositories and code review across backend, ML and GenAI at Dicoding.'
	},
	{
		id: 'fullstack-backend',
		title: 'Full-Stack & Backend',
		skills: [
			'TypeScript',
			'JavaScript',
			'SvelteKit',
			'Next.js',
			'React',
			'Node.js',
			'Hapi.js',
			'REST APIs',
			'PostgreSQL',
			'Convex',
			'Supabase',
			'Drizzle ORM'
		],
		evidence: 'Project links with clearly scoped implementations across this portfolio.'
	},
	{
		id: 'automation-integration',
		title: 'Automation / Integration',
		skills: [
			'Python',
			'Playwright',
			'OpenPyXL',
			'Pandas',
			'PyODBC',
			'Google Sheets',
			'WhatsApp / Baileys',
			'PM2'
		],
		evidence: 'Internal automation projects described factually in the project registry.'
	},
	{
		id: 'engineering-practices',
		title: 'Engineering Practices',
		skills: [
			'Git',
			'GitHub Actions',
			'Docker',
			'CI/CD',
			'Jest',
			'Pytest',
			'Code review',
			'Testing'
		],
		evidence: 'Public repository workflows and test suites.'
	},
	{
		id: 'healthcare-it',
		title: 'Healthcare IT',
		skills: ['e-Puskesmas', 'P-Care', 'HFIS', 'Routine reporting', 'Public health datasets'],
		evidence: 'Described as domain systems in daily use, not as a generic software framework.'
	}
];

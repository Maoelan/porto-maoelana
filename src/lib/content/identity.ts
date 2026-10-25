/** Identity and contact registry: PRD §05. All channels owner-authorized for public display. */
export const identity = {
	name: 'Maulana Muhammad',
	title: 'Software Engineer',
	specializations: ['AI/ML Engineer', 'AI-Driven Full-Stack Developer', 'Automation Engineer'],
	location: 'Lombok, West Nusa Tenggara, Indonesia',
	email: 'maulanamuhammad2000@gmail.com',
	whatsappDisplay: '+62 878-7302-6445',
	whatsappUrl: 'https://wa.me/6287873026445',
	linkedin: 'https://www.linkedin.com/in/maulanamuhammad2000/',
	github: 'https://github.com/Maoelan',
	instagram: 'https://www.instagram.com/maoelana13/',
	threads: 'https://www.threads.com/@maoelana13',
	siteUrl: 'https://maoelan.vercel.app'
} as const;

export type Identity = typeof identity;

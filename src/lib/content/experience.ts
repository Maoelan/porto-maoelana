import type { Experience } from '$lib/types/portfolio';

/**
 * Canonical 12-entry experience registry: PRD §08. Exact periods and
 * employment types come from the owner; summaries follow the registry text.
 */
export const experiences: Experience[] = [
	{
		id: 'puskesmas-his',
		organization: 'Puskesmas Suranadi',
		title: 'Health Information System (HIS) & Data Administration',
		start: '2026-06',
		employment: 'Contract · On-site',
		groupedOrganizationId: 'puskesmas-suranadi',
		summary:
			'Own day-to-day healthcare data and HIS work, including e-Puskesmas, BPJS P-Care, and HFIS. Coordinate reporting for 12 public-health Minimum Service Standards and support Prolanis analytics and basic internal web tools.'
	},
	{
		id: 'puskesmas-it-staff',
		organization: 'Puskesmas Suranadi',
		title: 'IT Staff',
		start: '2026-04',
		employment: 'Contract · On-site',
		groupedOrganizationId: 'puskesmas-suranadi',
		summary:
			'Maintain computers, networks, printers, biometric attendance systems, and meeting equipment. Build small scripts that automate repetitive administration and assist with digital workflow improvements.'
	},
	{
		id: 'dicoding-reviewer',
		organization: 'Dicoding Indonesia',
		title: 'External Academy Code Reviewer',
		start: '2024-06',
		employment: 'Freelance · Remote',
		summary:
			'Reviewed 4,000+ project submissions in Backend, Machine Learning, and Generative AI. Examine implementation correctness and provide feedback on Node.js, Python, ML pipelines, Diffusers, LLM fine-tuning, and RAG projects.'
	},
	{
		id: 'family-retail',
		organization: 'Family Business',
		title: 'Retail Entrepreneur',
		start: '2024-04',
		employment: 'Self-employed · On-site',
		summary:
			'Operate a family retail store and maintain inventory and sales records. Built Tokoku POS and used spreadsheets and Python scripts for sales and stock analysis.'
	},
	{
		id: 'gcaf-facilitator',
		organization: 'Google Cloud Arcade Facilitator Program',
		title: 'Facilitator',
		start: '2026-07',
		end: '2026-10',
		employment: 'Freelance · Remote',
		summary:
			'Helped participants complete Google Cloud Skills Arcade labs and badges, answered technical questions, and monitored progress.'
	},
	{
		id: 'ms-elevate-facilitator',
		organization: 'Microsoft Elevate Training Center',
		title: 'Facilitator',
		start: '2026-03',
		end: '2026-06',
		employment: 'Freelance · Remote',
		summary:
			'Supported Generative AI and Machine Learning Systems learners through forums, technical questions, and participation tracking.'
	},
	{
		id: 'coding-camp-advisor',
		organization: 'Coding Camp powered by DBS Foundation',
		title: 'Advisor',
		start: '2026-04',
		end: '2026-05',
		employment: 'Freelance · Remote',
		summary:
			'Mentored AI capstone teams on architecture, ML approaches, and deployment readiness. Supported projects including PsyScreening, MoodSense, and CortiSoul; advised rather than claimed authorship.'
	},
	{
		id: 'smkn-teacher',
		organization: 'SMKN 1 Narmada',
		title: 'Information Technology Teacher',
		start: '2024-01',
		end: '2024-08',
		employment: 'Part-time · On-site',
		summary:
			'Taught software engineering fundamentals and basic networking, prepared assignments, and evaluated students.'
	},
	{
		id: 'dts-data-analytics',
		organization: 'Digital Talent Scholarship',
		title: 'Data Analytics, Fresh Graduate Academy',
		start: '2024-04',
		end: '2024-07',
		employment: 'Internship · Remote',
		summary:
			'Completed Google Data Analytics Professional Certificate content and participated in technical learning discussions. This is a training program, not an employment claim.'
	},
	{
		id: 'bisa-ai-game-programmer',
		organization: 'BISA AI Academy',
		title: 'Game Programmer, MSIB Independent Study',
		start: '2022-08',
		end: '2022-12',
		employment: 'Internship · Remote',
		summary:
			'Worked with a six-person capstone team on the Unity game Adventure Duck, implementing game logic and mechanics.'
	},
	{
		id: 'balai-monitor-web',
		organization: 'Balai Monitor Spektrum Frekuensi Radio Kelas II Mataram',
		title: 'Web Programmer',
		start: '2022-07',
		end: '2022-08',
		employment: 'Internship · Hybrid',
		summary:
			'Built an internal Laravel web application for field officers to record unauthorized radio-frequency data.'
	},
	{
		id: 'telkom-network-technician',
		organization: 'PT Telkom Akses',
		title: 'Network Technician',
		start: '2018-03',
		end: '2018-05',
		employment: 'Internship · On-site',
		summary:
			'Assisted with customer data, field surveys, and physical telecommunications network installations.'
	}
];

/** Current roles first (latest start first), then ended roles by end date descending. */
function endKey(e: Experience): string {
	return e.end ?? '9999-12';
}

export function sortedExperiences(): Experience[] {
	return [...experiences].sort((a, b) => {
		const aCurrent = !a.end;
		const bCurrent = !b.end;
		if (aCurrent !== bCurrent) return aCurrent ? -1 : 1;
		if (aCurrent && bCurrent) return b.start.localeCompare(a.start);
		const byEnd = b.end!.localeCompare(a.end!);
		if (byEnd !== 0) return byEnd;
		return b.start.localeCompare(a.start);
	});
}

export interface ExperienceGroup {
	id: string;
	organization: string;
	current: boolean;
	/** Roles inside the group, latest start first. */
	roles: Experience[];
}

/** Group roles by organization (duplicate Puskesmas titles stay distinct under one heading). */
export function experienceGroups(): ExperienceGroup[] {
	const groups = new Map<string, ExperienceGroup>();
	for (const exp of sortedExperiences()) {
		const id = exp.groupedOrganizationId ?? exp.id;
		let group = groups.get(id);
		if (!group) {
			group = { id, organization: exp.organization, current: false, roles: [] };
			groups.set(id, group);
		}
		group.roles.push(exp);
		if (!exp.end) group.current = true;
	}
	return [...groups.values()];
}

export function formatPeriod(start: string, end?: string): string {
	const fmt = (ym: string) => {
		const [y, m] = ym.split('-');
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		return `${months[Number(m) - 1]} ${y}`;
	};
	return end ? `${fmt(start)} – ${fmt(end)}` : `${fmt(start)} – Present`;
}

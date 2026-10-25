<script lang="ts">
	import {
		ArrowUpRight,
		Envelope,
		MapPin,
		GithubLogo,
		Brain,
		Code,
		GitBranch
	} from 'phosphor-svelte';
	import TechMarquee from '$lib/components/TechMarquee.svelte';
	import EngineeringVisual from '$lib/components/EngineeringVisual.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ProductShowcase from '$lib/components/ProductShowcase.svelte';
	import WorkflowExplorer from '$lib/components/WorkflowExplorer.svelte';
	import { featuredProjects } from '$lib/content/projects';
	import { identity } from '$lib/content/identity';
	import { statusLabel } from '$lib/utils/project';
	const featured = featuredProjects();
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		mainEntity: {
			'@type': 'Person',
			name: identity.name,
			jobTitle: identity.title,
			url: identity.siteUrl,
			sameAs: [identity.github, identity.linkedin],
			knowsAbout: identity.specializations
		}
	};
</script>

<Seo
	title="Software Engineer"
	description="Maulana Muhammad, software engineer in Lombok. Practical web products, applied AI and healthcare automation, with selected projects and engineering experience."
/>
<svelte:head
	>{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}</svelte:head
>
<div class="frame">
	<section class="hero-sheet">
		<div class="hero-copy entrance">
			<h1>Maulana<br />Muhammad</h1>
			<p class="hero-role">Software Engineer</p>
			<p class="hero-description">
				I build practical web, AI and automation systems, from healthcare workflows to
				customer-facing products.
			</p>
			<div class="actions">
				<a href="/projects" class="btn-primary"
					>View Projects <ArrowUpRight size={20} aria-hidden="true" /></a
				><a href="/contact" class="text-link"><Envelope size={20} aria-hidden="true" />Contact Me</a
				>
			</div>
			<div class="specialties">
				<span class="icon-label"><Brain size={18} aria-hidden="true" />AI/ML Engineer</span><span
					class="icon-label"
					><Code size={18} aria-hidden="true" />AI-Driven Full-Stack Developer</span
				><span class="icon-label"
					><GitBranch size={18} aria-hidden="true" />Automation Engineer</span
				>
			</div>
		</div>
		<div class="hero-art entrance" data-ui>
			<div class="hero-visuals">
				<a
					class="hero-screen screen-back"
					href="/projects/gkm-psc-sahabat"
					aria-label="Explore PSC Sahabat"
					><img
						class="project-image"
						src="/images/psc-sahabat.webp"
						alt="PSC Sahabat reporting portal"
						width="1440"
						height="960"
						fetchpriority="high"
					/></a
				>
				<a
					class="hero-screen screen-front"
					href="/projects/wonderful-lombok"
					aria-label="Explore Wonderful Lombok"
					><div class="mini-chrome">
						<span>Wonderful Lombok</span><span aria-hidden="true">↗</span>
					</div>
					<img
						class="project-image"
						src="/images/wonderful-lombok-2x.webp"
						alt="Wonderful Lombok travel product"
						width="1440"
						height="960"
						fetchpriority="high"
					/></a
				>
			</div>
			<div class="hero-caption">
				<span>Selected products</span><a href="/projects">Explore the work ↗</a>
			</div>
		</div>
	</section>
	<div class="intro-strip">
		<p class="icon-label"><MapPin size={17} aria-hidden="true" />Based in Lombok, Indonesia.</p>
		<p>Web products. Applied AI. Everyday operations.</p>
		<a href={identity.github} target="_blank" rel="noopener noreferrer" class="icon-label"
			><GithubLogo size={18} aria-hidden="true" />Find me on GitHub <ArrowUpRight
				size={17}
				aria-hidden="true"
			/></a
		>
	</div>
	<TechMarquee />
	<section class="section featured">
		<div class="section-top">
			<h2 class="reveal">Featured work</h2>
			<a href="/projects" class="text-link reveal"
				>All 12 projects <span aria-hidden="true">↗</span></a
			>
		</div>
		<article class="lead-project sheet">
			<div class="project-copy">
				<h3 class="reveal"><a href="/projects/wonderful-lombok">Wonderful Lombok</a></h3>
				<span class="status reveal">{statusLabel(featured[0])} / Client work</span>
				<p class="reveal">A better starting point for a Lombok trip.</p>
				<p class="reveal">
					A multilingual travel product with a managed tour catalog, route-based transfer estimates,
					and direct WhatsApp inquiries.
				</p>
				<div class="stack reveal">
					<span>SvelteKit</span><span>Convex</span><span>Leaflet</span>
				</div>
				<a
					class="text-link reveal"
					href="/projects/wonderful-lombok"
					aria-label="Read Wonderful Lombok case study">Explore project ↗</a
				>
			</div>
			<a
				href="/projects/wonderful-lombok"
				class="project-art reveal"
				aria-label="View Wonderful Lombok showcase"><ProductShowcase slug="wonderful-lombok" /></a
			>
		</article>
		<div class="supporting-work">
			{#each featured.slice(1) as project, i}
				<article class="supporting-project">
					<a
						href="/projects/{project.slug}"
						class="reveal"
						aria-label="View {project.title} showcase"
						><ProductShowcase slug={project.slug} compact /></a
					>
					<div class="supporting-copy">
						<h3 class="reveal"><a href="/projects/{project.slug}">{project.title}</a></h3>
						<div class="project-meta reveal">
							<span class="status">{statusLabel(project)}</span><span class="meta"
								>{project.scope}</span
							>
						</div>
						<p class="reveal">
							{i === 0
								? 'AI-assisted intake that turns a conversation into a structured report, with staff review. Evaluation uses synthetic data.'
								: 'An employment-law assistant using retrieval-augmented generation and supporting references. Built as a team project.'}
						</p>
						<a
							href="/projects/{project.slug}"
							class="text-link reveal"
							aria-label="Read {project.title} case study">Explore project ↗</a
						>
					</div>
				</article>
			{/each}
		</div>
	</section>
	<section class="section about-preview">
		<div class="engineering-art reveal"><EngineeringVisual /></div>
		<div class="about-copy">
			<h2 class="reveal">Building around<br />the work.</h2>
			<p class="lead reveal">
				Software makes sense to me when it solves something people actually have to do.
			</p>
			<p class="reveal">
				I work across full-stack development, applied machine learning and automation. At Puskesmas
				Suranadi, that means understanding the reporting systems, spreadsheets and day-to-day
				operations behind the code.
			</p>
			<p class="reveal">
				I also review backend, machine learning and generative AI submissions at Dicoding, and build
				software for a family retail business.
			</p>
			<a class="text-link reveal" href="/about">More about me ↗</a>
		</div>
	</section>
	<section class="section experience-preview">
		<div>
			<h2 class="reveal">Software,<br />in practice.</h2>
			<p class="reveal">Engineering, review, and the operations behind the software.</p>
			<a class="text-link reveal" href="/about#experience">Full experience ↗</a><img
				class="workplace-photo reveal"
				src="/images/workspace-magma.webp"
				alt="Illustrative color workspace cutout with a forest-green laptop, orange notebook, teal cup and blank reporting sheets"
				width="1536"
				height="1024"
				loading="eager"
			/>
		</div>
		<div class="experience-list">
			<article class="reveal">
				<h3>Dicoding Indonesia</h3>
				<span class="meta">Jun 2024 – Present / Freelance</span>
				<p>External Academy Code Reviewer</p>
				<p class="muted">
					4,000+ submissions reviewed across backend, machine learning and generative AI.
				</p>
			</article>
			<article class="reveal">
				<h3>Puskesmas Suranadi</h3>
				<span class="meta">Apr 2026 – Present / Contract</span>
				<p>HIS & Data Administration / IT Staff</p>
				<p class="muted">
					Healthcare information systems, operational reporting, IT support and internal tools.
				</p>
			</article>
		</div>
	</section>
</div>
<section class="inverse section automation-section">
	<div class="frame">
		<div class="section-top">
			<div>
				<h2 class="reveal">Behind the workflow.</h2>
				<p class="reveal">
					From spreadsheets and messages to validated records. A look inside the internal tools.
				</p>
			</div>
			<a href="/projects?category=Automation" class="text-link reveal">Explore automation ↗</a>
		</div>
		<div class="reveal"><WorkflowExplorer /></div>
		<div class="internal-preview">
			<div class="reveal">
				<h3>Staff shift reporting</h3>
				<p>
					One place for absence reports, official duties and shift exchanges, with administrator
					review and exports.
				</p>
				<a class="text-link" href="/projects/pkm-piket-absensi">Explore internal project ↗</a>
			</div>
			<figure class="reveal">
				<img
					class="project-image"
					src="/images/staff-actual.webp"
					alt="Original staff reporting application running locally with example records"
					width="1440"
					height="960"
					loading="eager"
				/>
				<figcaption>Original application, captured locally with example records.</figcaption>
			</figure>
		</div>
	</div>
</section>

<style>
	@media (prefers-reduced-motion: no-preference) {
		.screen-front {
			animation: lay-sheet 1200ms var(--ease);
		}
	}
	@keyframes lay-sheet {
		from {
			transform: rotate(-2deg) translate(10%, 16%);
		}
		to {
			transform: rotate(-8deg);
		}
	}
	@media (max-width: 767px) {
		.featured {
			padding-top: 88px;
		}
		.about-preview {
			padding-bottom: 88px;
		}
	}
	.workplace-photo {
		width: 100%;
		max-width: 500px;
		aspect-ratio: 1.5;
		object-fit: contain;
		margin-top: 32px;
	}
	.project-copy > .status {
		margin-top: 20px;
	}
	.hero-sheet {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background: transparent;
		min-height: 570px;
		margin-top: 24px;
		overflow: hidden;
	}
	.hero-copy {
		padding: 56px 48px;
	}
	.hero-copy h1 {
		font-size: clamp(56px, 5.9vw, 80px);
		line-height: 0.98;
		font-weight: 740;
		letter-spacing: -0.055em;
	}
	.hero-role {
		font-size: 32px;
		margin-top: 28px;
		letter-spacing: -0.03em;
	}
	.hero-description {
		max-width: 40ch;
		margin-top: 20px;
		font-size: 20px;
	}
	.specialties {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 7px;
		font-size: 14px;
		color: var(--ink-muted);
	}
	.hero-art {
		position: relative;
		background: transparent;
		overflow: hidden;
		min-width: 0;
	}
	.hero-visuals {
		position: absolute;
		inset: 0 0 60px;
		overflow: hidden;
	}
	.hero-screen {
		backface-visibility: hidden;
		outline: 1px solid transparent;
		position: absolute;
		overflow: hidden;
		background: #f6f6f3;
		transition: transform 650ms var(--ease);
		width: 92%;
	}
	.screen-back {
		left: 23%;
		top: 44px;
		transform: rotate(9deg);
	}
	.screen-front {
		left: -4%;
		top: 200px;
		transform: rotate(-8deg);
		width: 98%;
	}
	.hero-screen:hover {
		transform: rotate(0deg) translateY(-8px);
	}
	.mini-chrome {
		height: 28px;
		padding-inline: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 11px;
		color: var(--ink-muted);
	}
	.hero-screen img {
		aspect-ratio: 1.5;
		object-fit: cover;
	}
	.hero-caption {
		position: absolute;
		background: transparent;
		padding: 8px 24px;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		gap: 16px;
		font-size: 13px;
		color: var(--ink);
	}
	.hero-caption a {
		min-height: 44px;
		display: flex;
		align-items: center;
	}
	.intro-strip {
		align-items: center;
		display: flex;
		justify-content: space-between;
		gap: 24px;
		font-size: 14px;
		padding-top: 24px;
		color: var(--ink-muted);
	}
	.intro-strip a {
		color: var(--ink);
		display: inline-flex;
		align-items: center;
		min-height: 44px;
	}
	.lead-project {
		display: grid;
		grid-template-columns: 36% 1fr;
		gap: 48px;
		padding-right: 0;
		padding-bottom: 0;
	}
	.project-copy {
		padding-bottom: 40px;
	}
	.project-copy h3 {
		margin-top: 0;
		font-size: 32px;
	}
	.project-copy p {
		margin-top: 24px;
	}
	.project-copy p:first-of-type {
		font-size: 20px;
	}
	.project-copy .stack {
		margin-top: 28px;
	}
	.project-copy .text-link {
		margin-top: 20px;
	}
	.project-art {
		align-self: stretch;
		min-width: 0;
		overflow: hidden;
	}
	.supporting-work {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		margin-top: 40px;
	}
	.supporting-copy {
		padding: 24px 0;
	}
	.project-meta {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 20px;
	}
	.supporting-copy p {
		margin-top: 20px;
		max-width: 55ch;
	}
	.supporting-copy .text-link {
		margin-top: 20px;
	}
	.about-preview {
		display: grid;
		grid-template-columns: 5fr 7fr;
		gap: 100px;
		align-items: center;
	}
	.engineering-art {
		min-width: 0;
	}
	.about-copy h2 {
		margin-bottom: 32px;
	}
	.about-copy p + p {
		margin-top: 24px;
	}
	.about-copy .text-link {
		margin-top: 28px;
	}
	.experience-preview {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 100px;
		padding-top: 48px;
	}
	.experience-preview > div > p {
		margin-top: 28px;
		max-width: 30ch;
	}
	.experience-preview .text-link {
		margin-top: 28px;
	}
	.experience-list {
		display: grid;
		gap: 40px;
	}
	.experience-list article {
		background: var(--surface);
		padding: 32px;
	}
	.experience-list h3 {
		margin-top: 0;
	}
	.experience-list .meta {
		display: block;
		margin-top: 16px;
	}
	.experience-list p {
		margin-top: 16px;
	}
	.automation-section .section-top p {
		margin-top: 24px;
		max-width: 60ch;
	}
	.internal-preview {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: center;
		margin-top: 72px;
	}
	.internal-preview p {
		margin-top: 24px;
		max-width: 42ch;
	}
	.internal-preview .text-link {
		margin-top: 24px;
	}
	.internal-preview figure {
		margin: 0;
		overflow: hidden;
	}
	.internal-preview img {
		max-height: 320px;
		object-fit: cover;
		object-position: top;
	}
	.internal-preview figcaption {
		font-size: 14px;
		color: var(--workflow-muted);
		margin-top: 16px;
	}
	@media (min-width: 1450px) {
		.hero-copy {
			padding-top: 64px;
		}
		.hero-sheet {
			min-height: 610px;
		}
	}
	@media (max-width: 1000px) {
		.hero-copy {
			padding: 40px 32px;
		}
		.hero-copy h1 {
			font-size: 56px;
		}
		.hero-sheet {
			min-height: 580px;
		}
		.screen-front {
			top: 230px;
			width: 115%;
			left: -14%;
		}
		.screen-back {
			top: 100px;
			width: 110%;
		}
		.hero-caption {
			flex-direction: column;
			gap: 0;
			bottom: 12px;
		}
		.lead-project {
			gap: 28px;
			padding: 32px 0 0 32px;
			grid-template-columns: 40% 1fr;
		}
		.project-copy h3 {
			font-size: 32px;
		}
		.about-preview,
		.experience-preview {
			gap: 48px;
		}
		.project-meta {
			flex-direction: column;
			gap: 4px;
		}
		.internal-preview {
			gap: 40px;
		}
	}
	@media (max-width: 767px) {
		.hero-sheet {
			grid-template-columns: 1fr;
			margin-top: 8px;
		}
		.hero-copy {
			padding: 32px 28px;
		}
		.hero-copy h1 {
			font-size: 52px;
		}
		.hero-role {
			font-size: 20px;
			margin-top: 24px;
		}
		.hero-description {
			font-size: 20px;
			margin-top: 20px;
		}
		.specialties {
			margin-top: 28px;
		}
		.hero-art {
			height: 310px;
		}
		.screen-back {
			top: 20px;
			width: 78%;
			left: 32%;
		}
		.screen-front {
			top: 86px;
			width: 80%;
			left: 0;
		}
		.hero-caption {
			flex-direction: row;
			left: 0;
			right: 0;
			align-items: center;
			bottom: 0;
			padding: 4px 16px;
			font-size: 12px;
		}
		.intro-strip {
			flex-wrap: wrap;
			gap: 8px 20px;
			font-size: 14px;
		}
		.intro-strip p:nth-child(2) {
			display: none;
		}
		.lead-project {
			grid-template-columns: 1fr;
			padding: 28px 28px 0;
			gap: 0;
		}
		.project-copy {
			padding-bottom: 24px;
		}
		.project-copy h3 {
			margin-top: 0;
			font-size: 32px;
		}
		.project-copy .status {
			margin-top: 20px;
		}
		.project-copy p {
			margin-top: 20px;
		}
		.project-art {
			margin-inline: -28px;
		}
		.supporting-work {
			grid-template-columns: 1fr;
			gap: 28px;
			margin-top: 32px;
		}
		.project-meta {
			flex-direction: row;
		}
		.supporting-copy {
			padding-top: 20px;
		}
		.supporting-copy h3 {
			font-size: 32px;
		}
		.about-preview {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.about-copy h2 {
			margin-bottom: 24px;
		}
		.experience-preview {
			grid-template-columns: 1fr;
			gap: 32px;
			padding-top: 0;
		}
		.experience-list {
			gap: 16px;
		}
		.experience-list article {
			padding: 28px;
		}
		.experience-list h3 {
			font-size: 32px;
		}
		.internal-preview {
			grid-template-columns: 1fr;
			gap: 28px;
			margin-top: 48px;
		}
	}
</style>

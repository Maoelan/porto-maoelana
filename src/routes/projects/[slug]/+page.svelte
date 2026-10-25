<script lang="ts">
	import { ArrowLeft, ArrowRight, ArrowUpRight, GithubLogo } from 'phosphor-svelte';
	import Seo from '$lib/components/Seo.svelte';
	import SignalGraphic from '$lib/components/SignalGraphic.svelte';
	import ProductShowcase from '$lib/components/ProductShowcase.svelte';
	import AutomationPlate from '$lib/components/AutomationPlate.svelte';
	import { projectVisuals, shortTitles } from '$lib/content/visuals';
	import { identity } from '$lib/content/identity';
	import { statusLabel } from '$lib/utils/project';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	const project = $derived(data.project);
	const visual = $derived(projectVisuals[project.slug]);
	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: project.title,
		description: project.summary,
		url: identity.siteUrl + '/projects/' + project.slug,
		...(project.repoUrl ? { codeRepository: project.repoUrl } : {}),
		...(project.roleNote
			? { contributor: { '@type': 'Person', name: identity.name } }
			: { author: { '@type': 'Person', name: identity.name } })
	});
</script>

<Seo title={project.title} path={'/projects/' + project.slug} description={project.summary} />
<svelte:head
	>{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}</svelte:head
>
<article class="frame section detail">
	<a href="/projects" class="text-link muted"
		><ArrowLeft size={18} aria-hidden="true" />All projects</a
	>
	<header class="detail-header">
		<div>
			<h1 class="project-detail-title">{shortTitles[project.slug] ?? project.title}</h1>
			<p class="lead">{project.description}</p>
		</div>
		<div class="project-info">
			<span class="status">{statusLabel(project)}</span>
			<p>{project.scope}</p>
			<p class="meta">{project.categories.join(' / ')}</p>
			<div class="actions">
				{#if project.demoUrl}<a
						class="btn-primary"
						href={project.demoUrl}
						target="_blank"
						rel="noopener noreferrer"
						>Open live demo <ArrowUpRight size={20} aria-hidden="true" /></a
					>{/if}{#if project.repoUrl}<a
						class="btn-secondary"
						href={project.repoUrl}
						target="_blank"
						rel="noopener noreferrer"><GithubLogo size={20} aria-hidden="true" />View repository</a
					>{/if}
			</div>
			{#if project.visibility === 'internal'}<p class="meta">
					Internal project. No public repository or demo.
				</p>{/if}
		</div>
	</header>
	{#if project.caveat}<p class="notice">{project.caveat}</p>{/if}
	{#if project.roleNote}<p class="notice">{project.roleNote}</p>{/if}
	<figure class="project-hero">
		{#if visual}<ProductShowcase slug={project.slug} priority />
			<figcaption class="meta">{visual.caption}</figcaption>{:else}<AutomationPlate
				slug={project.slug}
			/>
			<figcaption class="meta">
				Architecture illustration based on the supplied implementation. No live operational data is
				shown.
			</figcaption>{/if}
	</figure>
	<div class="detail-grid">
		<div class="prose">
			{#if project.problem}<section>
					<h2>Problem</h2>
					<p>{project.problem}</p>
				</section>{/if}{#if project.approach}<section>
					<h2>Approach</h2>
					<p>{project.approach}</p>
				</section>{/if}{#if project.features}<section>
					<h2>Implemented features</h2>
					<ul class="feature-list">
						{#each project.features as feature}<li>{feature}</li>{/each}
					</ul>
				</section>{/if}
			<section>
				<h2>Availability</h2>
				<p>{project.availability}</p>
			</section>
		</div>
		<aside>
			<h2>Tech stack</h2>
			<div class="stack">
				{#each project.techStack as tech}<span>{tech}</span>{/each}
			</div>
			<div class="identity-accent identity-note">
				<SignalGraphic
					shape="note"
					tone="yellow"
					label="Under the hood."
					detail="The tools behind this project"
				/>
			</div>
		</aside>
	</div>
	<nav class="project-nav" aria-label="Project navigation">
		{#if data.previous}<a href="/projects/{data.previous.slug}" class="text-link"
				><ArrowLeft size={18} aria-hidden="true" />{shortTitles[data.previous.slug] ??
					data.previous.title}</a
			>{:else}<span></span>{/if}{#if data.next}<a
				href="/projects/{data.next.slug}"
				class="text-link"
				>{shortTitles[data.next.slug] ?? data.next.title}<ArrowRight
					size={18}
					aria-hidden="true"
				/></a
			>{/if}
	</nav>
</article>

<style>
	.detail {
		padding-top: 40px;
	}
	.detail-header {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 80px;
		margin-top: 40px;
	}
	.detail-header .lead {
		margin-top: 32px;
		font-size: 18px;
	}
	.project-info {
		padding: 28px;
		background: var(--surface);
		align-self: start;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.project-info .actions {
		margin: 8px 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: stretch;
	}
	.project-info .btn-primary,
	.project-info .btn-secondary {
		padding: 12px 16px;
	}
	.project-hero {
		margin-inline: 0;
	}
	.project-hero figcaption {
		margin-top: 16px;
	}
	@media (max-width: 767px) {
		.detail-header {
			grid-template-columns: 1fr;
			gap: 28px;
			margin-top: 28px;
		}
		.detail-header .lead {
			font-size: 16px;
			margin-top: 24px;
		}
		.project-info {
			padding: 24px;
		}
		.detail {
			padding-top: 24px;
		}
		.project-info .actions {
			flex-direction: row;
			flex-wrap: wrap;
		}
		.project-detail-title {
			font-size: 36px;
		}
		.project-nav {
			gap: 20px;
		}
	}
</style>

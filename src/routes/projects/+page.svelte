<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { MagnifyingGlass, ArrowUpRight, Code } from 'phosphor-svelte';
	import Seo from '$lib/components/Seo.svelte';
	import SignalGraphic from '$lib/components/SignalGraphic.svelte';
	import ProductShowcase from '$lib/components/ProductShowcase.svelte';
	import AutomationPlate from '$lib/components/AutomationPlate.svelte';
	import { projects } from '$lib/content/projects';
	import { projectVisuals, shortTitles } from '$lib/content/visuals';
	import { FILTER_CATEGORIES, type FilterCategory } from '$lib/types/portfolio';
	import { filterProjects, statusLabel } from '$lib/utils/project';
	const category = $derived(
		browser &&
			(FILTER_CATEGORIES as readonly string[]).includes(page.url.searchParams.get('category') ?? '')
			? (page.url.searchParams.get('category') as FilterCategory)
			: 'All'
	);
	const query = $derived(browser ? (page.url.searchParams.get('q') ?? '') : '');
	const filtered = $derived(filterProjects(projects, category, query));
	function update(nextCategory: string, nextQuery: string) {
		const params = new URLSearchParams();
		if (nextCategory !== 'All') params.set('category', nextCategory);
		if (nextQuery.trim()) params.set('q', nextQuery);
		goto('/projects' + (params.size ? '?' + params.toString() : ''), {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}
</script>

<Seo
	title="Projects"
	path="/projects"
	description="Explore twelve software projects by Maulana Muhammad. Filter web products, AI systems, automation and healthcare tools, with case studies and public links."
/>
<div class="frame">
	<header class="page-heading">
		<div>
			<h1 class="entrance">Projects</h1>
			<p class="lead">
				Web products, applied AI, and the systems behind everyday operations. Twelve projects, each
				with its own context.
			</p>
		</div>
		<div class="identity-accent">
			<SignalGraphic shape="tab" tone="cyan" label="Built to work" detail="Web / AI / Automation" />
		</div>
	</header>
	<section class="project-index" aria-label="Project index">
		<div class="filter-bar">
			<div class="filters" role="group" aria-label="Filter projects by category">
				{#each ['All', ...FILTER_CATEGORIES] as item}<button
						type="button"
						aria-pressed={category === item}
						onclick={() => update(item, query)}>{item}</button
					>{/each}
			</div>
			<label class="search"
				><MagnifyingGlass size={19} aria-hidden="true" /><span class="sr-only"
					>Search projects by title, summary, or tech stack</span
				><input
					type="search"
					value={query}
					oninput={(event) => update(category, event.currentTarget.value)}
					placeholder="Search projects"
				/></label
			>
		</div>
		<p class="results meta" role="status">{filtered.length} of {projects.length} projects</p>
		{#if filtered.length === 0}<div class="empty-state sheet">
				<h2>No matching projects</h2>
				<p>No projects match the current filters.</p>
				<button class="btn-primary" type="button" onclick={() => update('All', '')}
					>Reset filters</button
				>
			</div>{:else}
			<div class="project-rows">
				{#each filtered as project}<a
						class="project-row"
						href="/projects/{project.slug}"
						aria-label={project.title}
						><div class="row-media reveal">
							{#if projectVisuals[project.slug]}<ProductShowcase
									slug={project.slug}
									compact
									eager
								/>{:else}<AutomationPlate slug={project.slug} compact />{/if}
						</div>
						<div class="row-content">
							<h2 class="reveal">{shortTitles[project.slug] ?? project.title}</h2>
							<div class="row-meta">
								<span>{project.categories.join(' / ')}</span><span>{statusLabel(project)}</span>
							</div>
							<p>{project.summary}</p>
							<span class="row-stack icon-label"
								><Code size={18} aria-hidden="true" />{project.techStack
									.slice(0, 4)
									.join(' / ')}<ArrowUpRight size={18} aria-hidden="true" /></span
							>
						</div>
					</a>{/each}
			</div>
		{/if}
	</section>
</div>

<style>
	.page-heading {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 220px;
		gap: 64px;
		align-items: center;
	}
	.project-index {
		padding-bottom: 96px;
	}
	.filter-bar {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		align-items: center;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.filters button {
		min-height: 44px;
		background: var(--surface-sunken);
		padding: 10px 16px;
		color: var(--ink);
		border: 0;
		transition: transform 200ms;
	}
	.filters button:hover {
		transform: translateY(-2px);
	}
	.filters button[aria-pressed='true'] {
		background: var(--ink);
		color: var(--bg);
	}
	.search {
		position: relative;
	}
	.search :global(svg) {
		position: absolute;
		left: 14px;
		top: 13px;
		pointer-events: none;
		color: var(--ink-muted);
	}
	.search input {
		width: 240px;
		height: 44px;
		background: var(--surface);
		color: var(--ink);
		padding: 10px 16px 10px 44px;
		border: 1px solid var(--line-strong);
		border-radius: 0;
	}
	.search input::placeholder {
		color: var(--ink-muted);
	}
	.results {
		margin: 24px 0;
		width: fit-content;
	}
	.project-rows {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.project-row {
		display: grid;
		grid-template-columns: 360px 1fr;
		gap: 40px;
		padding: 0;
		background: transparent;
		align-items: center;
		transition: transform 250ms var(--ease);
	}
	.project-row:hover {
		transform: translateY(-3px);
	}
	.row-media {
		overflow: hidden;
	}
	.row-meta {
		margin-top: 18px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px;
		font-size: 14px;
		color: var(--ink-muted);
	}
	.row-content h2 {
		font-size: 30px;
		margin-top: 0;
	}
	.row-content p {
		margin-top: 16px;
		max-width: 55ch;
	}
	.row-stack {
		display: grid;
		grid-template-columns: 18px minmax(0, 1fr) 18px;
		align-items: start;
		font-size: 14px;
		color: var(--ink-muted);
		margin-top: 20px;
	}
	.empty-state {
		padding-block: 64px;
	}
	.empty-state p {
		margin-top: 24px;
	}
	.empty-state button {
		margin-top: 28px;
	}
	@media (max-width: 1050px) {
		.filter-bar {
			align-items: start;
			flex-direction: column;
		}
		.search,
		.search input {
			width: 100%;
		}
		.project-row {
			grid-template-columns: 320px 1fr;
			gap: 28px;
		}
		.row-content h2 {
			font-size: 26px;
		}
		.row-meta {
			flex-direction: column;
			gap: 4px;
		}
	}
	@media (max-width: 767px) {
		.page-heading {
			grid-template-columns: 1fr;
			gap: 28px;
		}
		.project-index {
			padding-bottom: 64px;
		}
		.filter-bar {
			gap: 20px;
		}
		.filters {
			gap: 6px;
		}
		.filters button {
			font-size: 14px;
			padding: 10px 13px;
		}
		.project-row {
			grid-template-columns: 1fr;
			padding: 0;
			background: transparent;
			gap: 24px;
		}
		.row-meta {
			flex-direction: row;
		}
		.row-content h2 {
			font-size: 28px;
		}
		.row-stack {
			margin-top: 16px;
		}
		.project-rows {
			gap: 48px;
		}
	}
</style>

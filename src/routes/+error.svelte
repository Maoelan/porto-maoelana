<script lang="ts">
	import { page } from '$app/state';

	const isNotFound = $derived(page.status === 404);
	const heading = $derived(isNotFound ? 'Page not found' : `Something went wrong`);
</script>

<svelte:head>
	<title>{isNotFound ? 'Page not found' : `Error ${page.status}`} | Maulana Muhammad</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-36">
	<p class="meta">{page.status}</p>
	<h1
		class="mt-3 font-display text-[2.3rem] font-extrabold tracking-[-0.025em] text-ink md:text-[3.1rem]"
	>
		{heading}
	</h1>
	<p class="measure mt-5 text-[1.05rem] leading-relaxed text-muted">
		{#if isNotFound}
			The page you're looking for doesn't exist or may have moved. The projects index is the best
			place to pick up the trail.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'} Head back home or browse the projects index.
		{/if}
	</p>
	<div class="mt-9 flex flex-wrap gap-3">
		<a href="/projects" class="btn-primary">Browse projects</a>
		<a href="/" class="btn-secondary">Back to home</a>
	</div>
</section>

<script lang="ts">
	import { identity } from '$lib/content/identity';
	let {
		title,
		description,
		path = ''
	}: { title: string; description: string; path?: string } = $props();
	const url = $derived(identity.siteUrl + path);
</script>

<svelte:head
	><title>{title} — Maulana Muhammad</title><meta name="description" content={description} /><link
		rel="canonical"
		href={url}
	/><meta property="og:type" content="website" /><meta
		property="og:site_name"
		content={identity.name}
	/><meta property="og:title" content={title} /><meta
		property="og:description"
		content={description}
	/><meta property="og:url" content={url} /><meta
		property="og:image"
		content={identity.siteUrl + '/og.png'}
	/><meta name="twitter:card" content="summary_large_image" /><meta
		name="twitter:title"
		content={title}
	/><meta name="twitter:description" content={description} /><meta
		name="twitter:image"
		content={identity.siteUrl + '/og.png'}
	/></svelte:head
>

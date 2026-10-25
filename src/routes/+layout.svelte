<script lang="ts">
	import '@fontsource-variable/archivo';
	import '$lib/styles/tokens.css';
	import { onMount } from 'svelte';
	import { afterNavigate, goto, onNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AmbientPattern from '$lib/components/AmbientPattern.svelte';
	let { children } = $props();
	let observer: IntersectionObserver | undefined;
	onNavigate((navigation) => {
		if (
			!document.startViewTransition ||
			document.hidden ||
			matchMedia('(prefers-reduced-motion: reduce)').matches ||
			navigation.from?.url.pathname === navigation.to?.url.pathname
		)
			return;
		return new Promise<void>((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
			void transition.finished.catch(() => {});
		});
	});
	function observe() {
		observer?.disconnect();
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer?.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.08 }
		);
		document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => observer?.observe(el));
	}
	onMount(() => {
		observe();
		const anchors: Record<string, string> = {
			'#projects': '/projects',
			'#about': '/about',
			'#experience': '/about#experience',
			'#skills': '/about#skills',
			'#contact': '/contact'
		};
		if (location.pathname === '/' && anchors[location.hash.toLowerCase()])
			goto(anchors[location.hash.toLowerCase()], { replaceState: true });
		return () => observer?.disconnect();
	});
	afterNavigate(() => {
		if (typeof window !== 'undefined') requestAnimationFrame(observe);
	});
</script>

<a href="#main-content" class="sr-only skip-link">Skip to content</a>
<div class="site-canvas">
	<AmbientPattern />
	<div class="page-sheet">
		<Header />
		<main id="main-content" tabindex="-1">{@render children()}</main>
	</div>
	<Footer />
</div>

<style>
	.site-canvas {
		position: relative;
		isolation: isolate;
	}
	.page-sheet {
		position: relative;
		z-index: 1;
		background: transparent;
	}
	main {
		outline: none;
		min-height: 50vh;
	}
</style>

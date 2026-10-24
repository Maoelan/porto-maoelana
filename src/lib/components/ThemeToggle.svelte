<script lang="ts">
	import { Sun, Moon } from 'phosphor-svelte';
	import { onMount } from 'svelte';

	let theme = $state<'light' | 'dark'>('light');

	onMount(() => {
		theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

		// Follow OS preference live until the visitor makes an explicit choice.
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = (event: MediaQueryListEvent) => {
			try {
				if (localStorage.getItem('theme')) return;
			} catch {
				/* storage unavailable — fall through and follow the system */
			}
			theme = event.matches ? 'dark' : 'light';
			document.documentElement.dataset.theme = theme;
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* private mode — the choice still applies for this page view */
		}
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
	title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
	class="inline-flex h-11 w-11 items-center justify-center rounded-xs text-muted transition-colors duration-200 hover:bg-tint hover:text-ink"
>
	{#if theme === 'dark'}
		<Sun size={18} aria-hidden="true" />
	{:else}
		<Moon size={18} aria-hidden="true" />
	{/if}
</button>

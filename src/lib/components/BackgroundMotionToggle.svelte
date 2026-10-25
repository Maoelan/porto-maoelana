<script lang="ts">
	import { onMount } from 'svelte';
	import { Pause, Play } from 'phosphor-svelte';
	let paused = $state(false);
	let reduced = $state(false);
	function apply() {
		document.documentElement.dataset.backgroundMotion = paused ? 'paused' : 'running';
	}
	onMount(() => {
		try {
			paused = localStorage.getItem('background-motion') === 'paused';
		} catch {
			/* Use the quiet default if storage is unavailable. */
		}
		apply();
		const media = matchMedia('(prefers-reduced-motion: reduce)');
		const sync = () => (reduced = media.matches);
		sync();
		media.addEventListener('change', sync);
		return () => media.removeEventListener('change', sync);
	});
	function toggle() {
		paused = !paused;
		apply();
		try {
			localStorage.setItem('background-motion', paused ? 'paused' : 'running');
		} catch {
			/* The control still works without persistence. */
		}
	}
	const label = $derived(
		reduced
			? 'Background pattern motion disabled by your device'
			: paused
				? 'Play background pattern'
				: 'Pause background pattern'
	);
</script>

<button
	type="button"
	class="background-motion"
	onclick={toggle}
	disabled={reduced}
	aria-label={label}
	aria-pressed={paused || reduced}
	title={label}
>
	{#if paused || reduced}<Play size={18} aria-hidden="true" />{:else}<Pause
			size={18}
			aria-hidden="true"
		/>{/if}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border: 0;
		color: var(--ink-muted);
		background: transparent;
	}
	button:hover {
		background: var(--tint);
		color: var(--ink);
	}
	button:disabled {
		cursor: default;
	}
</style>

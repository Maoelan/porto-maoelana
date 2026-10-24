<script lang="ts">
	import { onMount } from 'svelte';
	import { Pause, Play } from 'phosphor-svelte';
	import {
		siPython,
		siTypescript,
		siSvelte,
		siNextdotjs,
		siReact,
		siNodedotjs,
		siPostgresql,
		siTensorflow,
		siDocker,
		siGit,
		siPandas,
		siGithubactions
	} from 'simple-icons';
	const technologies = [
		siPython,
		siTypescript,
		siSvelte,
		siNextdotjs,
		siReact,
		siNodedotjs,
		siPostgresql,
		siTensorflow,
		siDocker,
		siGit,
		siPandas,
		siGithubactions
	];
	let paused = $state(false);
	let visible = $state(false);
	let hidden = $state(false);
	let section: HTMLElement;
	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
		observer.observe(section);
		const sync = () => (hidden = document.hidden);
		sync();
		document.addEventListener('visibilitychange', sync);
		return () => {
			observer.disconnect();
			document.removeEventListener('visibilitychange', sync);
		};
	});
</script>

<section class="tech-band" bind:this={section} aria-labelledby="tech-heading">
	<div class="tech-top">
		<div>
			<h2 id="tech-heading">Tools behind the work.</h2>
			<p>Web development, applied AI, and the connections in between.</p>
		</div>
		<button
			class="motion-control"
			onclick={() => (paused = !paused)}
			aria-label={paused ? 'Play tech stack animation' : 'Pause tech stack animation'}
			aria-pressed={paused}
			>{#if paused}<Play size={18} aria-hidden="true" />{:else}<Pause
					size={18}
					aria-hidden="true"
				/>{/if}<span>{paused ? 'Play' : 'Pause'}</span></button
		>
	</div>
	<div class="marquee" class:paused={paused || !visible || hidden}>
		<div class="track">
			{#each [false, true] as duplicate}<div
					class="tech-set"
					aria-hidden={duplicate ? 'true' : undefined}
				>
					{#each technologies as tech}<span class="technology"
							><svg viewBox="0 0 24 24" aria-hidden="true"><path d={tech.path} /></svg><span
								>{tech.title === 'Svelte' ? 'SvelteKit' : tech.title}</span
							></span
						>{/each}
				</div>{/each}
		</div>
	</div>
	<a class="text-link" href="/about#skills"
		>Explore my full toolkit <span aria-hidden="true">↗</span></a
	>
</section>

<style>
	.tech-band {
		padding: 96px 0 0;
		overflow: hidden;
	}
	.tech-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
	}
	h2 {
		font-size: 28px;
	}
	p {
		margin-top: 12px;
		color: var(--ink-muted);
	}
	.motion-control {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 44px;
		padding: 10px 14px;
		border: 0;
		background: var(--surface);
		color: var(--ink);
	}
	.marquee {
		overflow: hidden;
		margin-block: 32px 16px;
		background: var(--accent-soft);
		padding-block: 28px;
	}
	.track {
		display: flex;
		width: max-content;
		animation: travel 48s linear infinite;
	}
	.tech-set {
		display: flex;
		align-items: center;
		gap: 48px;
		padding-right: 48px;
		flex-shrink: 0;
	}
	.technology {
		display: inline-flex;
		gap: 14px;
		align-items: center;
		font-size: 22px;
		font-weight: 550;
		white-space: nowrap;
	}
	svg {
		width: 32px;
		height: 32px;
		fill: currentColor;
		color: var(--brand-mark);
	}
	.paused .track,
	.marquee:hover .track,
	.marquee:focus-within .track {
		animation-play-state: paused;
	}
	.motion-control:hover {
		background: var(--accent-soft);
	}
	@keyframes travel {
		to {
			transform: translateX(-50%);
		}
	}
	@media (max-width: 767px) {
		.tech-top {
			align-items: start;
		}
		h2 {
			font-size: 28px;
		}
		.tech-top p {
			font-size: 14px;
		}
		.motion-control span {
			display: none;
		}
		.tech-set {
			gap: 32px;
			padding-right: 32px;
		}
		.technology {
			font-size: 20px;
		}
		.technology svg {
			width: 28px;
			height: 28px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.track {
			width: auto;
			animation: none;
		}
		.tech-set {
			flex-wrap: wrap;
			gap: 24px;
			padding: 0 20px;
		}
		.tech-set[aria-hidden] {
			display: none;
		}
		.motion-control {
			display: none;
		}
		.technology {
			font-size: 16px;
		}
		.technology svg {
			width: 24px;
			height: 24px;
		}
	}
</style>

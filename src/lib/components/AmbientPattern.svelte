<script lang="ts">
	import { onMount } from 'svelte';
	let hidden = $state(false);
	onMount(() => {
		const sync = () => (hidden = document.hidden);
		sync();
		document.addEventListener('visibilitychange', sync);
		return () => document.removeEventListener('visibilitychange', sync);
	});
</script>

<div class="ambient-pattern" data-hidden={hidden} aria-hidden="true">
	<div class="pattern-drift">
		<svg width="100%" height="100%" focusable="false">
			<defs>
				<pattern
					id="portfolio-quiet-pattern"
					width="760"
					height="620"
					patternUnits="userSpaceOnUse"
				>
					<!-- Every motif owns a separate box; 18+ units of internal clearance. -->
					<g fill="none" stroke="currentColor" stroke-width="2">
						<rect x="44" y="42" width="170" height="114" rx="20" />
						<path d="M62 76V60h30M196 122v16h-30M149 76h39m-12-10 12 10-12 10" />
						<ellipse cx="562" cy="118" rx="104" ry="45" />
						<ellipse cx="562" cy="118" rx="94" ry="35" />
						<rect x="310" y="270" width="84" height="184" rx="42" />
						<rect x="320" y="280" width="64" height="164" rx="32" />
						<path
							d="M352 382v40m-12-12 12 12 12-12M72 380h76m-20-18 20 18-20 18M555 410h110v104H555zM573 444v-16h24M647 480v16h-24"
						/>
						<circle cx="146" cy="537" r="37" />
						<path d="M126 537h40m-12-11 12 11-12 11M483 551h94" />
					</g>
					<g fill="currentColor">
						<path
							d="m75 88 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1zm28 0 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1zm28 0 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1zM589 440l16 14-16 14zm24 0 16 14-16 14z"
						/>
						{#each [0, 7, 12, 21, 29, 34, 43, 49, 58, 66, 72] as x, i}
							<rect x={76 + x} y="122" width={i % 2 ? 2 : 4} height="14" />
							<rect x={525 + x} y="106" width={i % 2 ? 2 : 4} height="24" />
							<rect x={340 + (i % 2) * 2} y={305 + x * 0.65} width={24 - (i % 2) * 4} height="2" />
						{/each}
					</g>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#portfolio-quiet-pattern)" />
		</svg>
	</div>
</div>

<style>
	.ambient-pattern {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		pointer-events: none;
		color: var(--ink);
		opacity: 0.055;
	}
	.pattern-drift {
		position: absolute;
		inset: -48px;
		animation: ambient-drift 36s ease-in-out infinite alternate;
		animation-play-state: paused;
	}
	:global([data-background-motion='running']) .pattern-drift {
		animation-play-state: running;
	}
	.ambient-pattern[data-hidden='true'] .pattern-drift {
		animation-play-state: paused;
	}
	@keyframes ambient-drift {
		from {
			transform: translate3d(-20px, -14px, 0);
		}
		to {
			transform: translate3d(20px, 14px, 0);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.pattern-drift {
			animation: none;
			transform: none;
		}
	}
</style>

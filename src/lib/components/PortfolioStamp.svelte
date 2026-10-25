<script lang="ts">
	let { variant = 'signature' }: { variant?: 'signature' | 'work' | 'contact' } = $props();
</script>

<!-- Original vector artwork: the bars are a graphic texture, not a scannable code. -->
<div class="portfolio-stamp" class:work={variant === 'work'} class:contact={variant === 'contact'}>
	<svg
		viewBox="0 0 420 210"
		role="img"
		aria-label={variant === 'contact'
			? 'Lombok to wherever you are. Let’s connect.'
			: 'Maulana Muhammad. Web, AI and automation.'}
	>
		<rect class="paper" x="0" y="0" width="420" height="210" rx={variant === 'work' ? 0 : 32} />
		<path class="edge" d="M24 55V24h45M351 186h45v-31" />
		<g class="marks" fill="currentColor">
			<path d="m91 23 4 10 11 1-9 7 3 11-9-6-9 6 3-11-9-7 11-1z" />
			<path d="m122 23 4 10 11 1-9 7 3 11-9-6-9 6 3-11-9-7 11-1z" />
			<path d="m153 23 4 10 11 1-9 7 3 11-9-6-9 6 3-11-9-7 11-1z" />
		</g>
		<text x="24" y="108" class="stamp-title"
			>{variant === 'contact'
				? 'LET’S CONNECT'
				: variant === 'work'
					? 'BUILT TO WORK'
					: 'WEB × AI × AUTO'}</text
		>
		<text x="26" y="140" class="stamp-caption"
			>{variant === 'contact'
				? 'Lombok → wherever you are'
				: 'Maulana Muhammad / Software Engineer'}</text
		>
		<g class="barcode" fill="currentColor" aria-hidden="true">
			{#each [0, 8, 12, 22, 28, 38, 42, 51, 59, 65, 76, 81, 90, 98, 105, 113, 118, 128, 136, 142, 152, 158, 169, 174, 184, 192, 198, 209, 215, 225] as x, i}
				<rect x={26 + x} y="166" width={i % 3 === 0 ? 5 : 2} height="20" />
			{/each}
		</g>
		<g class="stamp-arrow"><path d="M299 41h77m-22-19 22 19-22 19" /></g>
	</svg>
</div>

<style>
	.portfolio-stamp {
		color: var(--graphic-ink);
		width: 100%;
		transform: rotate(-2deg);
		transition: transform 400ms var(--ease);
	}
	.portfolio-stamp:hover {
		transform: rotate(0deg);
	}
	svg {
		display: block;
		width: 100%;
		height: auto;
		overflow: visible;
	}
	.paper {
		fill: var(--signal-lime);
	}
	.work .paper {
		fill: var(--signal-cyan);
	}
	.contact .paper {
		fill: var(--signal-yellow);
	}
	.contact {
		transform: none;
	}
	.edge,
	.stamp-arrow {
		fill: none;
		stroke: currentColor;
		stroke-width: 5;
		stroke-linecap: square;
		stroke-linejoin: miter;
	}
	.stamp-title {
		fill: currentColor;
		font:
			800 35px 'Archivo Variable',
			Arial,
			sans-serif;
		letter-spacing: -1.7px;
	}
	.stamp-caption {
		fill: currentColor;
		font:
			500 14px 'Archivo Variable',
			Arial,
			sans-serif;
	}
	@media (prefers-reduced-motion: reduce) {
		.portfolio-stamp {
			transform: none;
		}
	}
</style>

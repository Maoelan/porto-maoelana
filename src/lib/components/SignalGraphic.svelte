<script lang="ts">
	let {
		shape = 'strip',
		tone = 'lime',
		label = 'Made in Lombok',
		detail = 'Maulana Muhammad'
	}: {
		shape?: 'seal' | 'oval' | 'note' | 'strip' | 'vertical' | 'tab';
		tone?: 'lime' | 'cyan' | 'sky' | 'red' | 'yellow' | 'blue';
		label?: string;
		detail?: string;
	} = $props();
	const box = $derived(
		shape === 'seal'
			? '0 0 200 200'
			: shape === 'oval'
				? '0 0 340 140'
				: shape === 'vertical'
					? '0 0 100 260'
					: shape === 'note'
						? '0 0 360 180'
						: shape === 'tab'
							? '0 0 360 88'
							: '0 0 420 76'
	);
</script>

<!-- Decorative identity artwork. Barcode textures are not functional codes or credentials. -->
<div class="signal-graphic" data-shape={shape} data-tone={tone} aria-hidden="true">
	<svg viewBox={box} focusable="false">
		{#snippet bars(x: number, y: number)}
			<g transform={`translate(${x} ${y})`} fill="currentColor">
				{#each [0, 7, 12, 21, 26, 35, 41, 50, 57, 62, 71, 77, 86, 91, 100, 106, 115, 122, 128, 137, 143, 152] as dx, i}
					<rect x={dx} y="0" width={i % 3 === 0 ? 4 : 2} height="22" />
				{/each}
			</g>
		{/snippet}
		{#snippet stars(x: number, y: number)}
			<g transform={`translate(${x} ${y})`} fill="currentColor">
				{#each [0, 28, 56] as dx}<path
						transform={`translate(${dx} 0)`}
						d="m10 0 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z"
					/>{/each}
			</g>
		{/snippet}
		{#if shape === 'seal'}
			<circle class="paper" cx="100" cy="100" r="100" />
			<circle class="line" data-safe-ellipse cx="100" cy="100" r="90" />
			<text x="100" y="75" text-anchor="middle" class="seal-label">{label}</text>
			<path class="line" d="M64 105h72m-18-16 18 16-18 16" />
			<text x="100" y="143" text-anchor="middle" class="small">{detail}</text>
			<path d="m100 159 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z" fill="currentColor" />
		{:else if shape === 'oval'}
			<ellipse class="paper" cx="170" cy="70" rx="170" ry="70" />
			<ellipse class="line" data-safe-ellipse cx="170" cy="70" rx="158" ry="58" />
			<text x="170" y="64" text-anchor="middle" class="oval-label">{label}</text>
			{@render bars(93, 86)}
			<path d="m68 84 6 6-6 6-6-6zm204 0 6 6-6 6-6-6z" fill="currentColor" />
		{:else if shape === 'note'}
			<path class="paper" d="M0 0h330l30 30v150H0z" />
			<path class="line" d="M18 48V18h40m244 144h40v-30M330 0v30h30" />
			{@render stars(78, 17)}
			<text x="28" y="82" class="large">{label}</text>
			<text x="28" y="110" class="small">{detail}</text>
			{@render bars(28, 137)}
			<path class="line" d="M254 145h60m-18-15 18 15-18 15" />
		{:else if shape === 'vertical'}
			<rect class="paper" width="100" height="260" rx="48" />
			<rect class="line" x="10" y="10" width="80" height="240" rx="38" />
			<text transform="translate(44 128) rotate(-90)" text-anchor="middle" class="medium"
				>{label}</text
			>
			<g transform="translate(67 35) rotate(90)">{@render bars(0, 0)}</g>
			<path class="line" d="M50 193v38m-16-16 16 16 16-16" />
		{:else if shape === 'tab'}
			<path class="paper" d="M0 0h270l25 18h65v70H0z" />
			<text x="20" y="42" class="medium">{label}</text>
			<text x="20" y="66" class="small">{detail}</text>
			<g transform="translate(318 28) rotate(90) scale(.26 1)">{@render bars(0, 0)}</g>
		{:else}
			<rect class="paper" width="420" height="76" rx="38" />
			<text x="24" y="47" class="medium">{label}</text>
			<g fill="currentColor"
				><path d="m279 15 27 23-27 23zM316 15l27 23-27 23zM353 15l27 23-27 23z" /></g
			>
		{/if}
	</svg>
</div>

<style>
	.signal-graphic {
		width: 100%;
		color: var(--graphic-ink);
		--graphic-fill: var(--signal-lime);
	}
	.signal-graphic[data-tone='cyan'] {
		--graphic-fill: var(--signal-cyan);
	}
	.signal-graphic[data-tone='sky'] {
		--graphic-fill: var(--signal-sky);
	}
	.signal-graphic[data-tone='red'] {
		--graphic-fill: var(--signal-red);
	}
	.signal-graphic[data-tone='yellow'] {
		--graphic-fill: var(--signal-yellow);
	}
	.signal-graphic[data-tone='blue'] {
		--graphic-fill: var(--signal-blue);
		color: var(--graphic-paper);
	}
	svg {
		display: block;
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.paper {
		fill: var(--graphic-fill);
	}
	.line {
		fill: none;
		stroke: currentColor;
		stroke-width: 4;
	}
	text {
		fill: currentColor;
		font-family: 'Archivo Variable', Arial, sans-serif;
	}
	.large {
		font-weight: 800;
		font-size: 29px;
		letter-spacing: -1px;
	}
	.medium {
		font-weight: 750;
		font-size: 23px;
		letter-spacing: -0.7px;
	}
	.seal-label {
		font-size: 20px;
		font-weight: 750;
		letter-spacing: -0.5px;
	}
	.oval-label {
		font-size: 25px;
		font-weight: 800;
		letter-spacing: -0.8px;
	}
	.small {
		font-size: 14px;
		font-weight: 500;
	}
</style>

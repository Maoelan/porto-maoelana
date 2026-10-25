<script lang="ts">
	import { projectVisuals } from '$lib/content/visuals';
	let {
		slug,
		eager = false,
		compact = false,
		priority = false
	}: { slug: string; eager?: boolean; compact?: boolean; priority?: boolean } = $props();
	const visual = $derived(projectVisuals[slug]);
	const tone = $derived(
		slug === 'gkm-psc-sahabat'
			? 'red'
			: slug === 'tokoku'
				? 'yellow'
				: slug === 'hukumpekerja-chatbot'
					? 'sky'
					: slug === 'pkm-piket-absensi'
						? 'lime'
						: 'cyan'
	);
</script>

{#if visual}
	<div class:compact class="product-stage" data-tone={tone} data-ui>
		<div class="browser-frame">
			<div class="browser-top">
				<span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span><span
					>{slug === 'wonderful-lombok'
						? 'Wonderful Lombok'
						: slug === 'gkm-psc-sahabat'
							? 'PSC Sahabat'
							: slug === 'hukumpekerja-chatbot'
								? 'HukumPekerja'
								: slug === 'pkm-piket-absensi'
									? 'Portal Lapor Piket'
									: slug === 'tokoku'
										? 'Tokoku'
										: 'Product preview'}</span
				><span aria-hidden="true">↗</span>
			</div>
			<img
				class="project-image"
				src={visual.image}
				alt={visual.alt}
				width="1440"
				height="960"
				loading={priority || eager ? 'eager' : 'lazy'}
				fetchpriority={priority ? 'high' : 'auto'}
			/>
		</div>
		{#if slug === 'wonderful-lombok' && !compact}<div class="phone-frame">
				<div class="phone-notch"></div>
				<img
					class="project-image"
					src="/images/lombok-mobile-3x.webp"
					alt="Wonderful Lombok mobile website"
					width="390"
					height="844"
					loading="lazy"
				/>
			</div>{/if}
	</div>
{/if}

<style>
	.product-stage {
		position: relative;
		overflow: hidden;
		background: transparent;
		min-height: 360px;
		padding: 52px 8% 0;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		isolation: isolate;
	}
	.browser-frame {
		width: 100%;
		background: transparent;
		transform: translate3d(0, 0, 0) rotate(-1deg);
		backface-visibility: hidden;
		border: 0;
		transform-origin: center;
		transition: transform 650ms var(--ease);
		flex: none;
		overflow: hidden;
		border-radius: 8px 8px 0 0;
	}
	.product-stage:hover .browser-frame {
		transform: rotate(0deg) translateY(-5px);
	}
	.browser-top {
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 14px;
		background: var(--surface-sunken);
		color: var(--ink);
		font-size: 11px;
		line-height: 1;
	}
	.browser-dots {
		display: flex;
		gap: 5px;
	}
	.browser-dots i {
		width: 6px;
		height: 6px;
		background: var(--signal-blue);
		border-radius: 50%;
	}
	.browser-frame img {
		width: 100%;
		clip-path: inset(0 0.75px);
		aspect-ratio: 1.5;
		object-fit: cover;
		object-position: top;
	}
	.phone-frame {
		position: absolute;
		width: 20%;
		right: 5%;
		bottom: -12%;
		padding: 7px;
		background: var(--graphic-ink);
		border-radius: 24px;
		transform: translate3d(0, 0, 0) rotate(7deg);
		backface-visibility: hidden;
		border: 0;
		overflow: hidden;
	}
	.phone-notch {
		position: absolute;
		top: 10px;
		left: 34%;
		width: 32%;
		height: 9px;
		border-radius: 20px;
		background: var(--graphic-ink);
		z-index: 1;
	}
	.phone-frame img {
		border-radius: 18px;
		backface-visibility: hidden;
	}
	.compact {
		min-height: 0;
		padding: 32px 7% 0;
		aspect-ratio: 1.55;
	}
	.compact .browser-frame {
		transform: translate3d(0, 0, 0) rotate(-1deg);
	}
	@media (max-width: 767px) {
		.product-stage {
			min-height: 220px;
			padding: 28px 7% 0;
		}
		.browser-top {
			height: 24px;
			padding: 0 8px;
			font-size: 9px;
		}
		.browser-dots i {
			width: 4px;
			height: 4px;
		}
		.phone-frame {
			width: 24%;
			padding: 4px;
			border-radius: 16px;
			right: 4%;
			bottom: -7%;
		}
		.phone-frame img {
			border-radius: 12px;
		}
		.phone-notch {
			height: 6px;
			top: 6px;
		}
		.compact {
			min-height: 0;
			aspect-ratio: 1.5;
			padding-top: 24px;
		}
	}
</style>

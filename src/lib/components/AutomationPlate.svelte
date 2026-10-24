<script lang="ts">
	let { slug, compact = false }: { slug: string; compact?: boolean } = $props();
	const config: Record<string, [string, string, string, string]> = {
		'automated-kia-reports': [
			'Maternal & child health',
			'e-Puskesmas',
			'Six KIA reports',
			'UploadSehat'
		],
		'automated-hepatitis-report': [
			'Triple elimination',
			'SIHEPI',
			'Transform Excel reports',
			'UploadSehat'
		],
		'automated-solution-attendance': [
			'Attendance sync',
			'Google Sheets',
			'Compare changed shifts',
			'Microsoft Access'
		],
		'automated-leave-sync': [
			'Leave synchronization',
			'WhatsApp',
			'Gemini + validation',
			'Attendance records'
		],
		'automated-health-reports': [
			'Healthcare reports',
			'e-Puskesmas',
			'Seven routine reports',
			'UploadSehat'
		],
		'automated-ckg-registration': [
			'CKG registration',
			'Excel records',
			'Validate + fill forms',
			'Review before submission'
		]
	};
	const flow = $derived(config[slug] ?? config['automated-health-reports']);
</script>

<div class="automation-plate" class:compact data-ui>
	<span class="plate-name">{flow[0]}</span>
	<div class="nodes">
		<span>{flow[1]}</span><b aria-hidden="true">↓</b><span class="processing">{flow[2]}</span><b
			aria-hidden="true">↓</b
		><span>{flow[3]}</span>
	</div>
	<span class="plate-caption">Workflow illustration / Internal tool</span>
</div>

<style>
	.automation-plate {
		background: var(--workflow-bg);
		color: var(--workflow-ink);
		padding: 40px;
		min-height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 32px;
	}
	.plate-name {
		font-size: 20px;
		letter-spacing: -0.02em;
	}
	.nodes {
		display: grid;
		grid-template-columns: 1fr 40px 1fr 40px 1fr;
		align-items: center;
		gap: 20px;
	}
	.nodes > span {
		padding: 28px 24px;
		background: var(--workflow-stage);
		font-size: 22px;
		line-height: 1.25;
		min-height: 110px;
		display: flex;
		align-items: center;
	}
	.nodes .processing {
		background: var(--workflow-accent);
		color: var(--workflow-accent-ink);
	}
	.nodes b {
		transform: rotate(-90deg);
		font-size: 24px;
		text-align: center;
		font-weight: 400;
	}
	.plate-caption {
		font-size: 14px;
		color: var(--workflow-muted);
	}
	.compact {
		padding: 24px;
		min-height: 0;
		aspect-ratio: 1.5;
		gap: 12px;
	}
	.compact .plate-name {
		font-size: 16px;
	}
	.compact .nodes {
		grid-template-columns: 1fr;
		gap: 7px;
	}
	.compact .nodes > span {
		min-height: 0;
		padding: 9px 12px;
		font-size: 14px;
	}
	.compact .nodes b {
		display: none;
	}
	.compact .plate-caption {
		font-size: 11px;
	}
	@media (max-width: 767px) {
		.automation-plate {
			padding: 28px;
			min-height: 0;
		}
		.nodes {
			grid-template-columns: 1fr;
			gap: 12px;
		}
		.nodes > span {
			min-height: 0;
			padding: 20px;
			font-size: 20px;
		}
		.nodes b {
			transform: none;
			line-height: 1;
		}
		.compact {
			padding: 24px;
		}
		.compact .nodes {
			grid-template-columns: 1fr;
		}
		.compact .nodes > span {
			font-size: 16px;
		}
		.compact .plate-name {
			font-size: 18px;
		}
	}
</style>

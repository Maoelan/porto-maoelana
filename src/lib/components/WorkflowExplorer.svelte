<script lang="ts">
	import { FileText, ArrowsClockwise, Database, ArrowRight, ArrowUpRight } from 'phosphor-svelte';
	let { simple = false }: { simple?: boolean } = $props();
	const flows = [
		{
			id: 'reports',
			name: 'Healthcare reports',
			input: 'e-Puskesmas',
			detail: 'Seven routine reports',
			middle: 'Export & validate',
			validation: 'Date ranges and duplicate checks',
			output: 'UploadSehat',
			result: 'Submission and execution log',
			slug: 'automated-health-reports'
		},
		{
			id: 'schedule',
			name: 'Staff schedules',
			input: 'Google Sheets',
			detail: 'Nursing and midwifery rosters',
			middle: 'Compare assignments',
			validation: 'Match staff IDs and calculate changes',
			output: 'Attendance database',
			result: 'Only changed shifts synchronized',
			slug: 'automated-solution-attendance'
		},
		{
			id: 'leave',
			name: 'WhatsApp leave',
			input: 'WhatsApp',
			detail: 'Staff leave and absence messages',
			middle: 'Extract with Gemini',
			validation: 'Pydantic validation and reconciliation',
			output: 'Attendance records',
			result: 'Duplicates and revoked messages handled',
			slug: 'automated-leave-sync'
		}
	];
	let selected = $state('reports');
	const flow = $derived(flows.find((f) => f.id === selected) ?? flows[0]);
</script>

<div class="workflow" data-ui>
	{#if !simple}<div class="tabs" role="group" aria-label="Explore automation workflows">
			{#each flows as f}<button
					type="button"
					aria-pressed={selected === f.id}
					onclick={() => (selected = f.id)}>{f.name}</button
				>{/each}
		</div>{/if}
	<div aria-live="polite">
		{#key selected}<div class="pipeline">
				<div class="stage">
					<span class="meta icon-label"><FileText size={18} aria-hidden="true" />Input</span><strong
						>{flow.input}</strong
					>
					<p>{flow.detail}</p>
				</div>
				<span class="connector" aria-hidden="true"><ArrowRight size={28} /></span>
				<div class="stage process">
					<span class="meta icon-label"
						><ArrowsClockwise size={18} aria-hidden="true" />Processing</span
					><strong>{flow.middle}</strong>
					<p>{flow.validation}</p>
				</div>
				<span class="connector" aria-hidden="true"><ArrowRight size={28} /></span>
				<div class="stage">
					<span class="meta icon-label"><Database size={18} aria-hidden="true" />Output</span
					><strong>{flow.output}</strong>
					<p>{flow.result}</p>
				</div>
			</div>
		{/key}
	</div>
	<div class="workflow-foot">
		<span>Workflow illustration · Internal tool</span>{#if !simple}<a href="/projects/{flow.slug}"
				>Explore this project <ArrowUpRight size={18} aria-hidden="true" /></a
			>{/if}
	</div>
</div>

<style>
	.workflow {
		background: var(--workflow-bg);
		padding: 32px;
		color: var(--workflow-ink);
	}
	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 40px;
	}
	.tabs button {
		min-height: 44px;
		padding: 10px 18px;
		border: 0;
		background: var(--workflow-control);
		color: var(--workflow-ink);
		transition: transform 200ms;
	}
	.tabs button[aria-pressed='true'] {
		background: var(--workflow-accent);
		color: var(--workflow-accent-ink);
	}
	.tabs button:hover {
		transform: translateY(-2px);
	}
	.pipeline {
		display: grid;
		grid-template-columns: 1fr 28px 1fr 28px 1fr;
		align-items: center;
		gap: 16px;
		animation: arrive 450ms var(--ease);
	}
	.stage {
		min-height: 170px;
		background: var(--workflow-stage);
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.stage .meta {
		color: var(--workflow-muted);
	}
	.stage strong {
		font-size: 20px;
		font-weight: 500;
		line-height: 1.15;
		letter-spacing: -0.03em;
	}
	.stage p {
		font-size: 14px;
		line-height: 1.5;
		color: var(--workflow-muted);
	}
	.stage.process {
		background: var(--workflow-accent);
		color: var(--workflow-accent-ink);
	}
	.stage.process p,
	.stage.process .meta {
		color: var(--workflow-accent-ink);
	}
	.connector {
		font-size: 32px;
	}
	.workflow-foot {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		margin-top: 28px;
		font-size: 14px;
		color: var(--workflow-muted);
	}
	.workflow-foot a {
		color: var(--workflow-ink);
		min-height: 44px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.workflow-foot a:hover {
		text-decoration: underline;
	}
	@media (max-width: 767px) {
		.workflow {
			padding: 20px;
		}
		.tabs {
			margin-bottom: 24px;
			gap: 6px;
		}
		.tabs button {
			font-size: 14px;
			padding: 10px 12px;
		}
		.pipeline {
			grid-template-columns: 1fr;
			gap: 12px;
		}
		.stage {
			min-height: 0;
			padding: 20px;
			gap: 10px;
		}
		.connector {
			transform: rotate(90deg);
			justify-self: center;
			line-height: 1;
		}
		.workflow-foot {
			flex-direction: column;
			gap: 4px;
		}
	}
</style>

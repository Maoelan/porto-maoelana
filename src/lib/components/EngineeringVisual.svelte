<script lang="ts">
	import { Code, GitBranch, CheckCircle } from 'phosphor-svelte';
</script>

<div class="workbench" aria-label="Engineering workbench: web products, applied AI and automation">
	<div class="workbench-top">
		<Code size={24} aria-hidden="true" /><span>From a real problem<br />to working software.</span>
	</div>
	<div class="editor" data-ui>
		<div class="editor-bar">
			<span>reporting.ts · simplified</span><GitBranch size={18} aria-hidden="true" />
		</div>
		<pre><code
				><span class="keyword">const</span> report = <span class="keyword">await</span
				> exportRecords({'{'}
  source: <span class="string">'e-Puskesmas'</span>,
  target: <span class="string">'UploadSehat'</span>
{'}'});
<span class="keyword">await</span> validate(report);
<span class="keyword">await</span> submit(report);</code
			></pre>
	</div>
	<div class="workbench-bottom">
		<CheckCircle size={24} aria-hidden="true" />
		<p>
			A simplified view of reporting automation, with no operational records or private information.
		</p>
	</div>
</div>

<style>
	.workbench {
		padding: 36px;
		background: var(--field-warm);
		color: var(--field-ink);
		overflow: hidden;
	}
	.workbench-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		font-size: 20px;
		line-height: 1.3;
	}
	.editor {
		margin-block: 40px;
		background: var(--inverse);
		color: var(--inverse-ink);
		transform: rotate(-3deg);
		transition: transform 600ms var(--ease);
	}
	.workbench:hover .editor {
		transform: rotate(0);
	}
	.editor-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 20px;
		background: var(--code-header);
		font-size: 14px;
	}
	pre {
		margin: 0;
		padding: 28px 20px;
		font-size: clamp(12px, 1.05vw, 16px);
		white-space: pre-wrap;
		overflow-wrap: anywhere;
		line-height: 1.9;
		overflow: auto;
	}
	.keyword {
		color: var(--signal-lime);
	}
	.string {
		color: var(--signal-cyan);
	}
	.workbench-bottom {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.workbench-bottom {
		align-items: flex-start;
		gap: 12px;
		font-size: 16px;
	}
	@media (max-width: 767px) {
		.workbench {
			padding: 28px;
		}
		.workbench-top {
			font-size: 20px;
		}
		.editor {
			margin-block: 32px;
		}
		pre {
			font-size: 12px;
			padding: 24px 16px;
		}
		.workbench-bottom {
			font-size: 16px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.editor {
			transform: none;
		}
	}
</style>

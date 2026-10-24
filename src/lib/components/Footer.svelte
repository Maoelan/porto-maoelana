<script lang="ts">
	import {
		WhatsappLogo,
		LinkedinLogo,
		GithubLogo,
		InstagramLogo,
		ThreadsLogo,
		ArrowUpRight,
		Envelope
	} from 'phosphor-svelte';
	import { identity } from '$lib/content/identity';
</script>

<footer class="inverse">
	<div class="frame footer-inner">
		<div class="footer-top">
			<div>
				<h2>Have something in mind?</h2>
				<p class="muted">Web products, applied AI, or a workflow worth improving.</p>
				<a class="btn-primary" href={`mailto:${identity.email}`}
					><Envelope size={20} aria-hidden="true" />Let’s talk <ArrowUpRight
						size={20}
						aria-hidden="true"
					/></a
				>
			</div>
			<div class="footer-links">
				<a href={identity.whatsappUrl} target="_blank" rel="noopener noreferrer"
					><WhatsappLogo size={20} aria-hidden="true" />WhatsApp</a
				><a href={identity.linkedin} target="_blank" rel="noopener noreferrer"
					><LinkedinLogo size={20} aria-hidden="true" />LinkedIn</a
				><a href={identity.github} target="_blank" rel="noopener noreferrer"
					><GithubLogo size={20} aria-hidden="true" />GitHub</a
				><a href={identity.instagram} target="_blank" rel="noopener noreferrer"
					><InstagramLogo size={20} aria-hidden="true" />Instagram</a
				><a href={identity.threads} target="_blank" rel="noopener noreferrer"
					><ThreadsLogo size={20} aria-hidden="true" />Threads</a
				>
			</div>
		</div>
		<div class="footer-bottom">
			<a href="/">Maulana Muhammad</a><span>Lombok, Indonesia</span><span
				>© {new Date().getFullYear()}</span
			>
		</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		z-index: 0;
	}
	.footer-inner {
		padding-block: 72px 32px;
	}
	.footer-top {
		display: flex;
		justify-content: space-between;
		gap: 40px;
	}
	.footer-top h2 {
		font-size: clamp(32px, 3.5vw, 48px);
		max-width: 18ch;
	}
	.footer-top p {
		margin-top: 24px;
	}
	.footer-top .btn-primary {
		margin-top: 28px;
	}
	.footer-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 56px;
		align-content: start;
	}
	.footer-links a {
		min-height: 44px;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.footer-links a:hover {
		text-decoration: underline;
		text-underline-offset: 5px;
	}
	.footer-bottom {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		margin-top: 72px;
		font-size: 14px;
		color: var(--workflow-muted);
	}
	.footer-bottom a {
		color: var(--inverse-ink);
	}
	@media (max-width: 767px) {
		footer {
			position: relative;
		}
		.footer-inner {
			padding-block: 48px 24px;
		}
		.footer-top {
			flex-direction: column;
		}
		.footer-links {
			display: flex;
			flex-wrap: wrap;
			gap: 0 24px;
		}
		.footer-bottom {
			flex-wrap: wrap;
			margin-top: 48px;
		}
		.footer-bottom a {
			width: 100%;
		}
	}
</style>

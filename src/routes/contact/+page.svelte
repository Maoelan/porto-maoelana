<script lang="ts">
	import {
		Envelope,
		WhatsappLogo,
		LinkedinLogo,
		GithubLogo,
		InstagramLogo,
		ThreadsLogo,
		ArrowUpRight,
		MapPin,
		ChatCircleDots
	} from 'phosphor-svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { identity } from '$lib/content/identity';
</script>

<Seo
	title="Contact"
	path="/contact"
	description="Contact Maulana Muhammad about software engineering, web products, applied AI and automation. Direct email, WhatsApp, LinkedIn and GitHub."
/>
<div class="frame">
	<header class="page-heading">
		<h1>Contact</h1>
		<p class="lead">Tell me what you’re building, or which workflow needs a closer look.</p>
	</header>
	<section class="contact-sheet">
		<div>
			<h2>Let’s make it work.</h2>
			<p>
				For engineering roles, project inquiries, or a technical conversation, reach me directly.
			</p>
			<div class="conversation">
				<ChatCircleDots size={48} weight="duotone" aria-hidden="true" />
				<p>A project idea.<br />A tricky workflow.<br />Let’s start a conversation.</p>
			</div>
			<span class="meta icon-label"
				><MapPin size={18} aria-hidden="true" />Lombok, West Nusa Tenggara, Indonesia</span
			>
		</div>
		<div class="channels">
			<a href={`mailto:${identity.email}`}
				><span class="icon-label"><Envelope size={20} aria-hidden="true" />Email</span><strong
					>{identity.email}</strong
				><span aria-hidden="true"><ArrowUpRight size={23} /></span></a
			><a href={identity.whatsappUrl} target="_blank" rel="noopener noreferrer"
				><span class="icon-label"><WhatsappLogo size={20} aria-hidden="true" />WhatsApp</span
				><strong>{identity.whatsappDisplay}</strong><span aria-hidden="true"
					><ArrowUpRight size={23} /></span
				></a
			><a href={identity.linkedin} target="_blank" rel="noopener noreferrer"
				><span class="icon-label"><LinkedinLogo size={20} aria-hidden="true" />LinkedIn</span
				><strong>Connect professionally</strong><span aria-hidden="true"
					><ArrowUpRight size={23} /></span
				></a
			><a href={identity.github} target="_blank" rel="noopener noreferrer"
				><span class="icon-label"><GithubLogo size={20} aria-hidden="true" />GitHub</span><strong
					>Browse the code</strong
				><span aria-hidden="true"><ArrowUpRight size={23} /></span></a
			>
			<div class="secondary">
				<a href={identity.instagram} target="_blank" rel="noopener noreferrer"
					><InstagramLogo size={20} aria-hidden="true" />Instagram</a
				><a href={identity.threads} target="_blank" rel="noopener noreferrer"
					><ThreadsLogo size={20} aria-hidden="true" />Threads</a
				>
			</div>
		</div>
	</section>
</div>

<style>
	.contact-sheet {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 80px;
		padding: 48px;
		background: var(--surface);
		margin-bottom: 96px;
	}
	.contact-sheet h2 {
		font-size: 36px;
	}
	.contact-sheet p {
		margin-top: 24px;
		max-width: 36ch;
	}
	.conversation {
		margin-top: 32px;
		padding: 28px;
		background: var(--field-warm);
		color: var(--field-ink);
	}
	.conversation p {
		font-size: 20px;
		margin-top: 20px;
	}
	.secondary a {
		gap: 10px;
	}
	.contact-sheet .meta {
		display: block;
		margin-top: 20px;
	}
	.channels {
		display: grid;
		gap: 12px;
		align-content: start;
	}
	.channels > a {
		display: grid;
		grid-template-columns: 1fr 30px;
		background: var(--bg);
		padding: 24px;
		gap: 8px;
		transition: transform 200ms;
	}
	.channels > a > span:first-child {
		font-size: 14px;
		color: var(--ink-muted);
	}
	.channels strong {
		grid-column: 1;
		font-size: 18px;
		font-weight: 500;
		overflow-wrap: anywhere;
	}
	.channels > a > span:last-child {
		grid-column: 2;
		grid-row: 1/3;
		align-self: center;
		font-size: 24px;
	}
	.channels > a:hover {
		transform: translateX(4px);
	}
	.secondary {
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
	}
	.secondary a {
		display: flex;
		align-items: center;
		min-height: 44px;
	}
	@media (max-width: 767px) {
		.contact-sheet {
			grid-template-columns: 1fr;
			padding: 28px;
			gap: 32px;
			margin-bottom: 64px;
		}
		.contact-sheet h2 {
			font-size: 30px;
		}
		.channels > a {
			padding: 20px;
		}
		.channels strong {
			font-size: 16px;
		}
	}
</style>

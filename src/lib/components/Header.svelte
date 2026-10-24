<script lang="ts">
	import { page } from '$app/state';
	import { List, X, GithubLogo, House, SquaresFour, User, Envelope } from 'phosphor-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { identity } from '$lib/content/identity';
	let menuOpen = $state(false);
	let menuButtonEl = $state<HTMLButtonElement | null>(null);
	let panelEl = $state<HTMLElement | null>(null);
	const links = [
		{ href: '/', label: 'Home', icon: House },
		{ href: '/projects', label: 'Projects', icon: SquaresFour },
		{ href: '/about', label: 'About', icon: User },
		{ href: '/contact', label: 'Contact', icon: Envelope }
	];
	function active(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
	$effect(() => {
		void page.url.pathname;
		menuOpen = false;
	});
	$effect(() => {
		if (menuOpen)
			requestAnimationFrame(() => panelEl?.querySelector<HTMLAnchorElement>('a')?.focus());
	});
	function onKey(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			menuOpen = false;
			menuButtonEl?.focus();
		}
	}
	function outside(event: PointerEvent) {
		if (event.target instanceof Element && !event.target.closest('header')) menuOpen = false;
	}
</script>

<svelte:window onkeydown={onKey} onpointerdown={outside} />
<header class="site-header">
	<div class="frame header-inner">
		<a class="wordmark" href="/" aria-label="Maulana Muhammad home"
			>maulana<span aria-hidden="true">.</span></a
		>
		<nav class="desktop-nav" aria-label="Primary">
			{#each links as link}<a href={link.href} aria-current={active(link.href) ? 'page' : undefined}
					><link.icon size={17} aria-hidden="true" />{link.label}</a
				>{/each}
		</nav>
		<div class="header-actions">
			<a
				class="github"
				href={identity.github}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub profile (opens in a new tab)"
				><GithubLogo size={20} aria-hidden="true" /></a
			><ThemeToggle /><button
				class="menu-button"
				bind:this={menuButtonEl}
				onclick={() => (menuOpen = !menuOpen)}
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				>{#if menuOpen}<X size={23} aria-hidden="true" />{:else}<List
						size={23}
						aria-hidden="true"
					/>{/if}</button
			>
		</div>
	</div>
	{#if menuOpen}<nav
			id="mobile-nav"
			bind:this={panelEl}
			class="frame"
			aria-label="Mobile navigation"
		>
			{#each links as link}<a href={link.href} aria-current={active(link.href) ? 'page' : undefined}
					><link.icon size={17} aria-hidden="true" />{link.label}</a
				>{/each}
		</nav>{/if}
</header>

<style>
	.site-header {
		position: relative;
		z-index: 40;
		background: var(--bg);
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 88px;
	}
	.wordmark {
		font-weight: 750;
		font-size: 28px;
		letter-spacing: -1.4px;
	}
	.wordmark span {
		color: var(--accent);
		margin-left: 1px;
	}
	.desktop-nav {
		display: flex;
		gap: 24px;
	}
	.desktop-nav a {
		gap: 8px;
		display: flex;
		align-items: center;
		min-height: 44px;
		font-size: 16px;
		color: var(--ink-muted);
		transition: transform 0.2s;
	}
	.desktop-nav a:hover {
		transform: translateY(-2px);
		color: var(--ink);
	}
	.desktop-nav a[aria-current] {
		color: var(--ink);
		font-weight: 600;
	}
	.header-actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.github,
	.menu-button {
		display: flex;
		width: 44px;
		height: 44px;
		align-items: center;
		justify-content: center;
	}
	.menu-button {
		display: none;
		border: 0;
		background: none;
		color: var(--ink);
	}
	#mobile-nav {
		animation: arrive 240ms var(--ease);
		padding-block: 0 24px;
		display: flex;
		flex-direction: column;
	}
	#mobile-nav a {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 14px 0;
		font-size: 20px;
	}
	#mobile-nav a[aria-current] {
		font-weight: 700;
	}
	@media (max-width: 767px) {
		.header-inner {
			height: 76px;
		}
		.desktop-nav {
			display: none;
		}
		.menu-button {
			display: flex;
		}
		.github {
			display: none;
		}
		.wordmark {
			font-size: 28px;
		}
	}
</style>

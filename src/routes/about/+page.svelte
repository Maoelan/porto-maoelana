<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import SignalGraphic from '$lib/components/SignalGraphic.svelte';
	import { experienceGroups, formatPeriod } from '$lib/content/experience';
	import { skillGroups } from '$lib/content/skills';
	let showEarlier = $state(false);
	const groups = experienceGroups();
</script>

<Seo
	title="About"
	path="/about"
	description="Software engineering, applied AI and healthcare IT in Lombok. Maulana Muhammad’s full experience, from code review and operational systems to teaching."
/>
<div class="frame">
	<header class="page-heading">
		<h1>About</h1>
		<p class="lead">
			I’m Maulana, a software engineer based in Lombok. I build web products, work with applied AI,
			and automate everyday operations.
		</p>
	</header>
	<div class="about-intro">
		<img
			class="portrait reveal"
			src="/images/maulana.webp"
			alt="Maulana Muhammad"
			width="995"
			height="995"
		/>
		<div class="sheet reveal">
			<h2>Close to the work.</h2>
			<p>
				My work spans backend engineering, full-stack development and machine learning. I’m
				interested in what happens between an application and the people relying on it.
			</p>
			<p>
				At Puskesmas Suranadi, I support healthcare information systems and data administration
				alongside IT operations. Reporting requirements and staff workflows inform the internal
				tools I build.
			</p>
			<p>
				As a freelance code reviewer at Dicoding, I examine backend, machine learning and generative
				AI implementations. Running a family retail store also gives me a direct reason to care
				about stock, transactions and useful software.
			</p>
			<a class="text-link" href="/contact">Get in touch ↗</a>
			<div class="about-signature">
				<div><SignalGraphic shape="oval" tone="red" label="Curious by nature" /></div>
			</div>
		</div>
	</div>
	<section class="section" id="experience">
		<div class="section-top">
			<h2>Experience</h2>

			<p class="muted">
				Professional roles, teaching, facilitation and training. Dates and engagement types are kept
				distinct.
			</p>
		</div>
		<div class="timeline">
			{#each groups as group, i}<article hidden={!showEarlier && i >= 6} class="employer">
					<div>
						<h3>
							{group.id === 'balai-monitor-web' ? 'Balai Monitor Mataram' : group.organization}
						</h3>
						{#if group.id === 'balai-monitor-web'}<p class="meta">{group.organization}</p>{/if}
						{#if group.current}<span class="meta">Current engagement</span>{/if}
					</div>
					<div class="roles">
						{#each group.roles as role}<div class="role">
								<h4>{role.title}</h4>
								<p class="meta">{formatPeriod(role.start, role.end)} / {role.employment}</p>
								<p>{role.summary}</p>
							</div>{/each}
					</div>
				</article>{/each}
		</div>
		<button
			class="btn-secondary earlier"
			type="button"
			aria-expanded={showEarlier}
			onclick={() => (showEarlier = !showEarlier)}
			>{showEarlier ? 'Show recent experience' : 'Show earlier experience'}</button
		>
	</section>
	<section class="section skills" id="skills">
		<div class="section-top">
			<h2>Skills & tools</h2>
			<div class="identity-accent">
				<SignalGraphic shape="strip" tone="yellow" label="Always learning" />
			</div>
			<p class="muted">The tools behind the projects and the work.</p>
		</div>
		{#each skillGroups as group}<div class="skill-group">
				<h3>{group.title}</h3>
				<div>
					<div class="stack">
						{#each group.skills as skill}<span>{skill}</span>{/each}
					</div>
					<p class="meta">{group.evidence}</p>
				</div>
			</div>{/each}
	</section>
	<figure class="desk-photo">
		<figcaption class="desk-caption">
			<h2>At the workbench.</h2>
			<p>Code, review, understand, repeat. The everyday tools behind the work.</p>

			<p class="meta">Illustrative workspace artwork.</p>
		</figcaption>
		<img
			src="/images/workspace-magma.webp"
			alt="Color workstation illustration with a laptop, orange notebook, teal cup and blank reporting sheets on transparent background"
			width="1536"
			height="1024"
			loading="lazy"
		/>
	</figure>
</div>

<style>
	.about-signature {
		display: flex;
		gap: 28px;
		align-items: center;
		margin-top: 32px;
	}
	.about-signature > div:first-child {
		width: 260px;
		max-width: 260px;
		min-width: 0;
		flex: 0 1 260px;
		transform: none;
	}

	.about-intro {
		display: grid;
		grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
		gap: 32px;
		align-items: stretch;
	}
	.about-intro > .sheet {
		min-width: 0;
	}
	.about-intro > img {
		width: 100%;
		height: 100%;
		min-height: 420px;
		object-fit: cover;
	}
	.about-intro p {
		margin-top: 24px;
	}
	.about-intro .text-link {
		margin-top: 24px;
	}
	.employer {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: 64px;
		padding: 36px;
		background: var(--surface);
		margin-bottom: 16px;
	}
	.employer[hidden] {
		display: none;
	}
	.employer h3 {
		font-size: 25px;
		letter-spacing: -0.035em;
	}
	.employer > div > .meta {
		display: block;
		margin-top: 16px;
	}
	.roles {
		display: grid;
		gap: 32px;
	}
	.role h4 {
		font-size: 22px;
		line-height: 1.2;
		margin-top: 16px;
		letter-spacing: -0.025em;
	}
	.role > p:last-child {
		margin-top: 20px;
	}
	.earlier {
		margin-top: 24px;
	}
	.skills {
		padding-top: 0;
	}
	.skill-group {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: 64px;
		margin-top: 40px;
	}
	.skill-group h3 {
		font-size: 25px;
	}
	.skill-group .meta {
		margin-top: 20px;
	}
	.desk-photo {
		margin: 0 0 72px;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
		gap: 48px;
		padding: 40px;
		align-items: center;
		background: var(--surface);
	}
	.desk-photo img {
		width: 100%;
		max-height: 360px;
		object-fit: contain;
	}
	.desk-caption h2 {
		font-size: 32px;
	}
	.desk-caption > p {
		margin-top: 24px;
		max-width: 40ch;
	}
	@media (max-width: 767px) {
		.about-intro {
			grid-template-columns: minmax(0, 1fr);
			gap: 20px;
		}
		.about-intro > img {
			min-height: 0;
			aspect-ratio: 1.15;
		}
		.about-intro h2 {
			font-size: 30px;
		}
		.employer,
		.skill-group {
			grid-template-columns: 1fr;
			gap: 24px;
		}
		.employer {
			padding: 28px;
		}
		.role h4 {
			font-size: 21px;
		}
		.desk-photo {
			margin-bottom: 48px;
			grid-template-columns: minmax(0, 1fr);
			padding: 24px;
			gap: 28px;
		}
	}
</style>

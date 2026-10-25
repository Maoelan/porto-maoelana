import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { projects } from '../src/lib/content/projects';

test('every project detail resolves, has a visual, and respects private link state', async ({
	page
}) => {
	for (const project of projects) {
		const response = await page.goto('/projects/' + project.slug);
		expect(response?.status(), project.slug).toBe(200);
		await expect(page.locator('main h1')).toBeVisible();
		await expect(page.locator('.project-hero')).toBeVisible();
		if (project.visibility === 'internal') {
			await expect(page.getByRole('link', { name: /View repository|Open live demo/ })).toHaveCount(
				0
			);
		}
	}
});

test('workflow explorer changes real project stages and destinations', async ({ page }) => {
	await page.goto('/');
	const group = page.getByRole('group', { name: 'Explore automation workflows' });
	await group.getByRole('button', { name: 'Staff schedules' }).click();
	await expect(page.getByText('Compare assignments', { exact: true })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Explore this project' })).toHaveAttribute(
		'href',
		'/projects/automated-solution-attendance'
	);
	await group.getByRole('button', { name: 'WhatsApp leave' }).click();
	await expect(page.getByText('Extract with Gemini', { exact: true })).toBeVisible();
	await expect(group.getByRole('button', { name: 'WhatsApp leave' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
});

test('shared filters hydrate and follow browser navigation', async ({ page }) => {
	await page.goto('/projects?category=Automation&q=whatsapp');
	await expect(page.locator('.project-row')).toHaveCount(1);
	await expect(page.locator('.project-row')).toHaveAttribute(
		'href',
		'/projects/automated-leave-sync'
	);
	await page.goto('/about');
	await page.goBack();
	await expect(page.getByRole('searchbox')).toHaveValue('whatsapp');
	await expect(page.locator('.project-row')).toHaveCount(1);
});

test('all images load and all routes fit a 360px viewport', async ({ page }) => {
	await page.setViewportSize({ width: 360, height: 800 });
	for (const path of [
		'/',
		'/projects',
		'/about',
		'/contact',
		...projects.map((p) => '/projects/' + p.slug)
	]) {
		await page.goto(path);
		await page.evaluate(async () => {
			for (const image of document.images) image.loading = 'eager';
			await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
		});
		expect(
			await page.evaluate(() => document.documentElement.scrollWidth),
			path
		).toBeLessThanOrEqual(360);
		expect(
			await page.evaluate(() =>
				[...document.images].filter((i) => i.naturalWidth === 0).map((i) => i.src)
			),
			path
		).toEqual([]);
	}
});

test('automated WCAG checks pass on key pages in both themes', async ({ page }) => {
	// Audit the complete static state, not transient entrance/colour frames.
	await page.emulateMedia({ reducedMotion: 'reduce' });
	const violations = [];
	for (const theme of ['light', 'dark']) {
		for (const path of [
			'/',
			'/projects',
			'/about',
			'/contact',
			'/projects/automated-ckg-registration'
		]) {
			await page.goto(path);
			await page.evaluate((t) => {
				document.documentElement.dataset.theme = t;
				localStorage.setItem('theme', t);
			}, theme);
			const result = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
				.analyze();
			violations.push(
				...result.violations.map((v) => ({
					theme,
					path,
					id: v.id,
					nodes: v.nodes.map((n) => n.target)
				}))
			);
		}
	}
	expect(violations).toEqual([]);
});

test('reduced motion retains readable content without running animations', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible();
	expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});

test('tech stack has no pause button and pauses outside the viewport', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('button', { name: /pause|play/i })).toHaveCount(0);
	await page.locator('.tech-band').scrollIntoViewIfNeeded();
	await page.mouse.move(0, 0);
	await expect(page.locator('.marquee')).not.toHaveClass(/paused/);
	await page.locator('footer').scrollIntoViewIfNeeded();
	await expect(page.locator('.marquee')).toHaveClass(/paused/);
});

test('personal portrait is limited to the About page', async ({ page }) => {
	for (const path of ['/', '/contact', '/projects']) {
		await page.goto(path);
		await expect(page.locator('img[src="/images/maulana.webp"]')).toHaveCount(0);
	}
	await page.goto('/about');
	await expect(page.locator('img[src="/images/maulana.webp"]')).toHaveCount(1);
});

test('project captures use original applications and high density screenshots', async ({
	page
}) => {
	for (const [slug, file] of [
		['pkm-piket-absensi', 'staff-actual.webp'],
		['tokoku', 'tokoku-actual.webp'],
		['hukumpekerja-chatbot', 'hukumpekerja-actual.webp'],
		['wonderful-lombok', 'wonderful-lombok-2x.webp']
	]) {
		await page.goto('/projects/' + slug);
		const image = page.locator('.browser-frame img');
		await expect(image).toHaveAttribute('src', '/images/' + file);
		await image.evaluate(async (el) => {
			await (el as HTMLImageElement).decode();
		});
		expect(
			await image.evaluate((el) => (el as HTMLImageElement).naturalWidth)
		).toBeGreaterThanOrEqual(2880);
		await expect(page.locator('.project-hero figcaption')).not.toContainText('reconstruction');
		expect(
			await page.locator('.browser-frame').evaluate((el) => getComputedStyle(el).backfaceVisibility)
		).toBe('hidden');
	}
});

test('Neon Sunset keeps product surroundings transparent in both themes', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	for (const theme of ['light', 'dark']) {
		await page.goto('/');
		await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme);
		const palette = await page.evaluate(() => {
			const css = getComputedStyle(document.documentElement);
			return ['--signal-blue', '--signal-lime', '--signal-cyan', '--signal-red'].map((key) =>
				css.getPropertyValue(key).trim()
			);
		});
		expect(palette).toEqual(['#ff0f7b', '#a8e000', '#ff5000', '#ff0f7b']);
		await expect(page.locator('img[src="/images/working-desk.webp"]')).toHaveCount(0);
		await expect(page.locator('img[src="/images/workspace-magma.webp"]')).toHaveCount(1);
		expect(
			await page.locator('.hero-art').evaluate((el) => getComputedStyle(el).backgroundColor)
		).toBe('rgba(0, 0, 0, 0)');
		await expect(page.locator('.hero-stamp svg')).toHaveAttribute('role', 'img');
		expect(
			await page
				.locator('.product-stage')
				.evaluateAll((elements) =>
					elements.every((el) => getComputedStyle(el).backgroundColor === 'rgba(0, 0, 0, 0)')
				)
		).toBe(true);
		await page.goto('/projects');
		await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme);
		expect(
			await page
				.locator('.project-row, .row-media, .product-stage, .automation-plate')
				.evaluateAll((elements) =>
					elements.every((el) => getComputedStyle(el).backgroundColor === 'rgba(0, 0, 0, 0)')
				)
		).toBe(true);
	}
	await page.goto('/about');
	await expect(page.locator('img[src="/images/workspace-magma.webp"]')).toHaveCount(1);
});

test('background has no pause control, ignores obsolete preference and respects reduced motion', async ({
	page
}) => {
	await page.emulateMedia({ reducedMotion: 'no-preference' });
	await page.goto('/');
	await page.evaluate(() => localStorage.setItem('background-motion', 'paused'));
	await page.reload();
	await expect(page.getByRole('button', { name: /pause|play/i })).toHaveCount(0);
	expect(
		await page.locator('.pattern-drift').evaluate((el) => getComputedStyle(el).animationPlayState)
	).toBe('running');
	await page.emulateMedia({ reducedMotion: 'reduce' });
	expect(
		await page.locator('.pattern-drift').evaluate((el) => getComputedStyle(el).animationName)
	).toBe('none');
	expect(await page.locator('.track').evaluate((el) => getComputedStyle(el).animationName)).toBe(
		'none'
	);
});
test('published copy and page titles contain no em dash', async ({ page }) => {
	for (const route of [
		'/',
		'/about',
		'/contact',
		'/projects',
		...projects.map((p) => '/projects/' + p.slug),
		'/projects/not-a-real-project'
	]) {
		await page.goto(route);
		expect(await page.locator('body').innerText(), route).not.toContain('\u2014');
		expect(await page.title(), route).not.toContain('\u2014');
	}
});

test('showcase has no white backing or outline bleeding around its images', async ({ page }) => {
	await page.goto('/projects');
	await page.evaluate(() => (document.documentElement.dataset.theme = 'dark'));
	const frames = await page.locator('.browser-frame').evaluateAll((elements) =>
		elements.map((el) => {
			const css = getComputedStyle(el);
			return {
				background: css.backgroundColor,
				border: css.borderTopWidth,
				outline: css.outlineStyle,
				bar: getComputedStyle(el.querySelector('.browser-top')!).backgroundColor,
				crop: getComputedStyle(el.querySelector('img')!).clipPath
			};
		})
	);
	expect(frames.length).toBe(6);
	for (const frame of frames) {
		expect(frame.background).toBe('rgba(0, 0, 0, 0)');
		expect(frame.border).toBe('0px');
		expect(frame.outline).toBe('none');
		expect(frame.bar).not.toBe('rgb(255, 255, 255)');
		expect(frame.crop).not.toBe('none');
	}
});

test('identity artwork stays clear of text and controls at desktop tablet and phone widths', async ({
	page
}) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	for (const width of [1440, 768, 390, 360]) {
		await page.setViewportSize({ width, height: 900 });
		for (const route of [
			'/',
			'/about',
			'/projects',
			'/contact',
			'/projects/hukumpekerja-chatbot'
		]) {
			await page.goto(route);
			await page.evaluate(() => document.fonts.ready);
			const accentHeights = await page
				.locator('.identity-accent')
				.evaluateAll((elements) => elements.map((el) => el.getBoundingClientRect().height));
			for (const height of accentHeights)
				expect(height, `${route} @${width} accent height`).toBeLessThanOrEqual(150);
			const overlaps = await page.locator('main').evaluate((root) => {
				const copy = [
					...root.querySelectorAll('h1,h2,h3,h4,p,button,.text-link,.btn-primary,.stack')
				];
				return [...root.querySelectorAll('.signal-graphic,.portfolio-stamp')].flatMap((art) => {
					const a = art.getBoundingClientRect();
					return copy
						.filter((el) => !el.contains(art) && !art.contains(el))
						.flatMap((el) => {
							const b = el.getBoundingClientRect();
							return b.width &&
								b.height &&
								Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 &&
								Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1
								? [el.textContent?.trim()]
								: [];
						});
				});
			});
			expect(overlaps, `${route} @${width}`).toEqual([]);
		}
	}
});

test('contact ticket and hero artwork have reserved breathing room', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	for (const width of [1440, 768, 390]) {
		await page.setViewportSize({ width, height: 900 });
		await page.goto('/contact');
		const gap = await page
			.locator('.conversation')
			.evaluate(
				(el) =>
					el.querySelector('p')!.getBoundingClientRect().top -
					el.querySelector('.portfolio-stamp')!.getBoundingClientRect().bottom
			);
		expect(gap, String(width)).toBeGreaterThanOrEqual(32);
		await page.goto('/');
		const gapHero = await page
			.locator('.hero-art')
			.evaluate(
				(el) =>
					Math.min(
						...[...el.querySelectorAll('.hero-screen')].map(
							(screen) => screen.getBoundingClientRect().top
						)
					) - el.querySelector('.hero-stamp')!.getBoundingClientRect().bottom
			);
		expect(gapHero, String(width)).toBeGreaterThanOrEqual(12);
	}
});

test('round graphic lettering and marks stay inside their outline with clearance', async ({
	page
}) => {
	for (const path of ['/', '/about', '/contact', '/projects/hukumpekerja-chatbot']) {
		await page.goto(path);
		await page.evaluate(() => document.fonts.ready);
		const collisions = await page.locator('.signal-graphic').evaluateAll((elements) =>
			elements.flatMap((element) => {
				const svg = element.querySelector('svg')!;
				const outline = svg.querySelector('[data-safe-ellipse]');
				if (!outline) return [];
				const cx = Number(outline.getAttribute('cx')),
					cy = Number(outline.getAttribute('cy'));
				const rx = Number(outline.getAttribute('rx') ?? outline.getAttribute('r')) - 5;
				const ry = Number(outline.getAttribute('ry') ?? outline.getAttribute('r')) - 5;
				return [...svg.querySelectorAll<SVGGraphicsElement>('text, path, rect')].flatMap((el) => {
					if (el.classList.contains('paper')) return [];
					const matrix = svg.getCTM()!.inverse().multiply(el.getCTM()!);
					let points: DOMPoint[];
					if (el.tagName === 'path') {
						const pathEl = el as SVGPathElement;
						points = Array.from({ length: 41 }, (_, i) =>
							pathEl.getPointAtLength((pathEl.getTotalLength() * i) / 40)
						);
					} else {
						const b = el.getBBox();
						points = [
							[b.x, b.y],
							[b.x + b.width, b.y],
							[b.x, b.y + b.height],
							[b.x + b.width, b.y + b.height]
						].map(([x, y]) => new DOMPoint(x, y));
					}
					return points.some((p) => {
						const q = p.matrixTransform(matrix);
						return ((q.x - cx) / rx) ** 2 + ((q.y - cy) / ry) ** 2 > 1;
					})
						? [el.textContent || el.tagName]
						: [];
				});
			})
		);
		expect(collisions, path).toEqual([]);
	}
});

test('project color identity remains stable when filtering', async ({ page }) => {
	await page.goto('/projects');
	const tokoku = page.locator('a.project-row[href="/projects/tokoku"] .product-stage');
	await expect(tokoku).toHaveAttribute('data-tone', 'yellow');
	const color = await tokoku.evaluate((el) => getComputedStyle(el).backgroundColor);
	await page.getByRole('searchbox').fill('Tokoku');
	await expect(page.locator('.project-row')).toHaveCount(1);
	expect(await tokoku.evaluate((el) => getComputedStyle(el).backgroundColor)).toBe(color);
});

test('graphic identity is restrained to selected moments and never clips its lettering', async ({
	page
}) => {
	for (const path of ['/', '/projects', '/about', '/contact', '/projects/hukumpekerja-chatbot']) {
		await page.goto(path);
		await page.evaluate(() => document.fonts.ready);
		const art = page.locator('.signal-graphic');
		const expected = path === '/' ? 3 : path === '/about' ? 2 : path === '/contact' ? 0 : 1;
		await expect(art, path).toHaveCount(expected);
		if (path === '/about') {
			const width = await page
				.locator('.about-signature')
				.evaluate((el) => parseFloat(getComputedStyle(el.firstElementChild!).width));
			expect(width).toBeLessThanOrEqual(261);
		}
		await expect(page.locator('.portfolio-stamp')).toHaveCount(
			path === '/' || path === '/contact' ? 1 : 0
		);
		const clipped = await art.evaluateAll((elements) =>
			elements.flatMap((element) => {
				const svg = element.querySelector('svg')!;
				const box = svg.viewBox.baseVal;
				return [...svg.querySelectorAll('text')].flatMap((text) => {
					// The vertical artwork intentionally rotates its lettering inside the capsule.
					if (text.hasAttribute('transform')) return [];
					const bounds = text.getBBox();
					return bounds.x < 0 ||
						bounds.x + bounds.width > box.width ||
						bounds.y < 0 ||
						bounds.y + bounds.height > box.height
						? [text.textContent]
						: [];
				});
			})
		);
		expect(clipped, path).toEqual([]);
	}
});

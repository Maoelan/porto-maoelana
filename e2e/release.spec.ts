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

test('tech stack can be paused and pauses outside the viewport', async ({ page }) => {
	await page.goto('/');
	await page.locator('.tech-band').scrollIntoViewIfNeeded();
	await page.mouse.move(0, 0);
	await expect(page.locator('.marquee')).not.toHaveClass(/paused/);
	await page.getByRole('button', { name: 'Pause tech stack animation' }).click();
	await expect(page.locator('.marquee')).toHaveClass(/paused/);
	await expect(page.getByRole('button', { name: 'Play tech stack animation' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await page.getByRole('button', { name: 'Play tech stack animation' }).click();
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

test('Magma Mist keeps showcases frameless and replaces monochrome workspace imagery', async ({
	page
}) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	for (const theme of ['light', 'dark']) {
		await page.goto('/');
		await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme);
		const palette = await page.evaluate(() => {
			const css = getComputedStyle(document.documentElement);
			return ['--accent', '--field-warm', '--inverse', '--brand-mark'].map((key) =>
				css.getPropertyValue(key).trim()
			);
		});
		expect(palette.slice(0, 3)).toEqual(['#f06f0e', '#ffb342', '#0a372f']);
		await expect(page.locator('img[src="/images/working-desk.webp"]')).toHaveCount(0);
		await expect(page.locator('img[src="/images/workspace-magma.webp"]')).toHaveCount(1);
		expect(
			await page.locator('.hero-art').evaluate((el) => getComputedStyle(el).backgroundColor)
		).toBe('rgba(0, 0, 0, 0)');
		expect(
			await page
				.locator('.product-stage')
				.evaluateAll((elements) =>
					elements.every((el) => getComputedStyle(el).backgroundColor === 'rgba(0, 0, 0, 0)')
				)
		).toBe(true);
	}
	await page.goto('/about');
	await expect(page.locator('img[src="/images/workspace-magma.webp"]')).toHaveCount(1);
});

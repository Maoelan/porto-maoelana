import { expect, test } from '@playwright/test';

test.describe('routing and content (FR-01, FR-02, FR-05)', () => {
	test('home shows the hero with role, CTAs, and featured work', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('heading', { level: 1, name: 'Maulana Muhammad' })).toBeVisible();
		await expect(page.getByRole('heading', { level: 2, name: 'Featured work' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'Contact Me' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'Wonderful Lombok' }).first()).toBeVisible();
		await expect(page.getByRole('link', { name: 'PSC Sahabat' }).first()).toBeVisible();
		await expect(page.getByRole('link', { name: 'HukumPekerja' }).first()).toBeVisible();
	});

	test('projects index lists all 12 projects', async ({ page }) => {
		await page.goto('/projects');
		await expect(page.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible();
		await expect(page.locator('section a[href^="/projects/"]')).toHaveCount(12);
	});

	test('project detail resolves and shows case-study sections', async ({ page }) => {
		await page.goto('/projects/wonderful-lombok');
		await expect(page.getByRole('heading', { level: 1, name: 'Wonderful Lombok' })).toBeVisible();
		await expect(page.getByRole('heading', { level: 2, name: 'Problem' })).toBeVisible();
		await expect(page.getByRole('heading', { level: 2, name: 'Approach' })).toBeVisible();
		await expect(page.getByRole('heading', { level: 2, name: 'Tech stack' })).toBeVisible();
	});

	test('unknown project slug returns the 404 page', async ({ page }) => {
		const response = await page.goto('/projects/not-a-real-project');
		expect(response?.status()).toBe(404);
		await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
	});

	test('about page shows grouped timeline with the show-earlier toggle', async ({ page }) => {
		await page.goto('/about');
		await expect(page.getByRole('heading', { level: 1, name: 'About' })).toBeVisible();
		const toggle = page.getByRole('button', { name: /Show earlier experience/ });
		await expect(toggle).toBeVisible();
		await expect(page.getByRole('heading', { level: 3, name: 'PT Telkom Akses' })).toBeHidden();
		await toggle.click();
		await expect(page.getByRole('heading', { level: 3, name: 'PT Telkom Akses' })).toBeVisible();
	});
});

test.describe('filters and search (FR-03)', () => {
	test('category filters return the correct subset and update the URL', async ({ page }) => {
		await page.goto('/projects');
		await page.getByRole('button', { name: 'Automation', exact: false }).click();
		await expect(page.getByRole('status')).toContainText(/of 12 projects/);
		await expect(page).toHaveURL(/category=Automation/);
		const visible = await page.locator('section a[href^="/projects/"]').count();
		expect(visible).toBeGreaterThan(0);
		expect(visible).toBeLessThan(12);
	});

	test('search narrows results and reset restores the full set', async ({ page }) => {
		await page.goto('/projects');
		await page.getByLabel('Search projects by title, summary, or tech stack').fill('whatsapp');
		await expect(page.locator('section a[href^="/projects/"]')).toHaveCount(1);
		await page.getByLabel('Search projects by title, summary, or tech stack').fill('zzz-nothing');
		await expect(page.getByRole('button', { name: 'Reset filters' })).toBeVisible();
		await page.getByRole('button', { name: 'Reset filters' }).click();
		await expect(page.locator('section a[href^="/projects/"]')).toHaveCount(12);
	});

	test('empty search state is explicit, not silent', async ({ page }) => {
		await page.goto('/projects');
		await page.getByLabel('Search projects by title, summary, or tech stack').fill('zzz-nothing');
		await expect(page.getByText('No projects match the current filters.')).toBeVisible();
	});
});

test.describe('link integrity (FR-04, FR-07, FR-10)', () => {
	test('internal project shows no repository or demo link', async ({ page }) => {
		await page.goto('/projects/automated-kia-reports');
		await expect(page.getByRole('link', { name: 'View repository' })).toBeHidden();
		await expect(page.getByRole('link', { name: 'Open live demo' })).toBeHidden();
		await expect(
			page.getByText('Internal project. No public repository or demo.').first()
		).toBeVisible();
	});

	test('public project exposes repository and demo links with safe rel', async ({ page }) => {
		await page.goto('/projects/tokoku');
		const repo = page.getByRole('link', { name: 'View repository' });
		await expect(repo).toBeVisible();
		await expect(repo).toHaveAttribute('rel', 'noopener noreferrer');
		await expect(repo).toHaveAttribute('href', 'https://github.com/Maoelan/Tokoku');
	});

	test('contact page carries all primary channels', async ({ page }) => {
		await page.goto('/contact');
		const main = page.locator('main');
		await expect(main.getByRole('link', { name: /Email/ }).first()).toHaveAttribute(
			'href',
			'mailto:maulanamuhammad2000@gmail.com'
		);
		await expect(main.getByRole('link', { name: /WhatsApp/ })).toHaveAttribute(
			'href',
			'https://wa.me/6287873026445'
		);
		await expect(main.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/maulanamuhammad2000/'
		);
		await expect(main.getByRole('link', { name: /GitHub/ })).toHaveAttribute(
			'href',
			'https://github.com/Maoelan'
		);
	});
});

test.describe('accessibility and behavior (FR-08)', () => {
	test('theme toggle switches and persists the choice', async ({ page }) => {
		await page.goto('/');
		const initial = await page.evaluate(() => document.documentElement.dataset.theme);
		const next = initial === 'dark' ? 'light' : 'dark';
		await page.getByRole('button', { name: /Switch to/ }).click();
		await expect(page.locator('html')).toHaveAttribute('data-theme', next);
		await page.reload();
		await expect(page.locator('html')).toHaveAttribute('data-theme', next);
		expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(next);
	});

	test('mobile menu opens, closes on Escape, and returns focus', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto('/');
		const menuButton = page
			.getByRole('button', { name: /menu/i })
			.and(page.locator('header button[aria-controls="mobile-nav"]'));
		await menuButton.click();
		await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
		await expect(page.locator('#mobile-nav a').first()).toBeFocused();
		await page.keyboard.press('Escape');
		await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
		await expect(menuButton).toBeFocused();
	});

	test('no horizontal overflow at 360px on every route', async ({ page }) => {
		await page.setViewportSize({ width: 360, height: 800 });
		for (const path of ['/', '/projects', '/projects/gkm-psc-sahabat', '/about', '/contact']) {
			await page.goto(path);
			const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
			expect(scrollWidth, path).toBeLessThanOrEqual(360);
		}
	});

	test('legacy single-page anchors redirect to the new routes', async ({ page }) => {
		await page.goto('/#projects');
		await expect(page).toHaveURL(/\/projects$/);
		await page.goto('/#contact');
		await expect(page).toHaveURL(/\/contact$/);
	});

	test('skip link jumps to main content', async ({ page }) => {
		await page.goto('/');
		await page.keyboard.press('Tab');
		const skip = page.getByRole('link', { name: 'Skip to content' });
		await expect(skip).toBeFocused();
		await skip.press('Enter');
		await expect(page.locator('#main-content')).toBeFocused();
	});
});

import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'node:fs/promises';
await mkdir('docs/qa', { recursive: true });
const browser = await puppeteer.launch({
	headless: true,
	executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
});
const report = [];
async function settle(page) {
	await page.evaluate(async () => {
		for (const img of document.images) {
			img.loading = 'eager';
		}
		await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
	});
	await page.evaluate(async () => {
		for (let y = 0; y < document.body.scrollHeight; y += 600) {
			window.scrollTo(0, y);
			await new Promise((r) => setTimeout(r, 80));
		}
		window.scrollTo(0, 0);
	});
	await new Promise((r) => setTimeout(r, 900));
}
for (const width of [1440, 768, 390, 360]) {
	const page = await browser.newPage();
	await page.setViewport({ width, height: width === 1440 ? 900 : 844, deviceScaleFactor: 1 });
	const errors = [];
	page.on('pageerror', (e) => errors.push(e.message));
	await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0', timeout: 45000 });
	await page.evaluate(() => document.fonts.ready);
	await settle(page);
	await page.screenshot({ path: `docs/qa/home-${width}.png`, fullPage: true });
	await page.screenshot({ path: `docs/qa/fold-${width}.png` });
	report.push({
		path: '/',
		width,
		errors,
		...(await page.evaluate(() => ({
			overflow: document.documentElement.scrollWidth > innerWidth,
			brokenImages: [...document.images]
				.filter((i) => !i.complete || !i.naturalWidth)
				.map((i) => i.src),
			title: document.title
		})))
	});
	if (width === 390 || width === 1440) {
		for (const [name, path] of [
			['projects', '/projects'],
			['about', '/about'],
			['contact', '/contact'],
			['case-study', '/projects/wonderful-lombok'],
			['internal', '/projects/automated-ckg-registration']
		]) {
			await page.goto('http://127.0.0.1:4173' + path, { waitUntil: 'networkidle0' });
			await settle(page);
			await page.screenshot({ path: `docs/qa/${name}-${width}.png`, fullPage: true });
			report.push({
				path,
				width,
				...(await page.evaluate(() => ({
					overflow: document.documentElement.scrollWidth > innerWidth,
					brokenImages: [...document.images]
						.filter((i) => !i.complete || !i.naturalWidth)
						.map((i) => i.src)
				})))
			});
		}
	}
	await page.close();
}
for (const theme of ['light', 'dark']) {
	const themed = await browser.newPage();
	await themed.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }]);
	await themed.setViewport({ width: 1440, height: 900 });
	await themed.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });
	await settle(themed);
	await themed.screenshot({ path: `docs/qa/home-${theme}.png`, fullPage: true });
	await themed.close();
}
await browser.close();
await writeFile('docs/qa/visual-report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

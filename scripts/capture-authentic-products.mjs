import puppeteer from 'puppeteer';
import { writeFile } from 'node:fs/promises';

// Run the three supplied ZIP apps locally first. Their original UI/CSS is used.
// API fixtures below only replace data; no interface markup is reconstructed.
const browser = await puppeteer.launch({
	executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
	headless: true
});
const captures = [];
const products = [
	{
		id: 1,
		name: 'Beras Contoh 5 kg',
		unit: 'karung',
		stock: 24,
		priceSell: 72000,
		isActive: true,
		categoryId: 1
	},
	{
		id: 2,
		name: 'Minyak Goreng Contoh 1 L',
		unit: 'botol',
		stock: 36,
		priceSell: 18000,
		isActive: true,
		categoryId: 1
	},
	{
		id: 3,
		name: 'Gula Pasir Contoh 1 kg',
		unit: 'pak',
		stock: 18,
		priceSell: 15000,
		isActive: true,
		categoryId: 1
	},
	{
		id: 4,
		name: 'Teh Contoh',
		unit: 'botol',
		stock: 30,
		priceSell: 4000,
		isActive: true,
		categoryId: 2
	}
];
async function settle(page) {
	await page.evaluate(async () => {
		await document.fonts.ready;
		for (const image of document.images) image.loading = 'eager';
		await Promise.race([
			Promise.all([...document.images].map((i) => i.decode().catch(() => {}))),
			new Promise((r) => setTimeout(r, 8000))
		]);
	});
	await new Promise((r) => setTimeout(r, 1200));
	// Hide only the framework's development indicator, never product UI.
	if (new URL(page.url()).hostname === '127.0.0.1')
		await page.addStyleTag({ content: 'nextjs-portal{display:none!important}' });
}
async function local(name, port, path, prepare) {
	const context = await browser.createBrowserContext();
	const page = await context.newPage();
	await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });
	await page.setRequestInterception(true);
	page.on('request', (request) => {
		const url = new URL(request.url());
		if (['data:', 'blob:'].includes(url.protocol)) return request.continue();
		if (url.hostname !== '127.0.0.1') return request.abort();
		if (url.pathname.startsWith('/api/')) {
			let data = [];
			if (port === 4312 && url.pathname === '/api/products') data = products;
			if (port === 4312 && url.pathname === '/api/categories')
				data = [
					{ id: 1, name: 'Sembako', sortOrder: 1 },
					{ id: 2, name: 'Minuman', sortOrder: 2 }
				];
			return request.respond({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify(data)
			});
		}
		return request.continue();
	});
	if (port === 4312) {
		await context.setCookie({
			name: 'tokoku_session',
			value: 'local-capture-only',
			url: 'http://127.0.0.1:4312'
		});
		await page.evaluateOnNewDocument(() =>
			localStorage.setItem(
				'tokoku_user',
				JSON.stringify({ id: 'capture-example', name: 'Operator Contoh', role: 'operator' })
			)
		);
	}
	await page.goto(`http://127.0.0.1:${port}${path}`, {
		waitUntil: 'networkidle2',
		timeout: 120000
	});
	await prepare?.(page);
	await settle(page);
	const text = await page.evaluate(() => document.body.innerText);
	if (/Application error|Internal Server Error|Build Error|Failed to compile/.test(text))
		throw new Error(`${name}: application did not render`);
	await page.screenshot({ path: `static/images/${name}-actual.webp`, type: 'webp', quality: 96 });
	captures.push({
		name,
		source: 'Supplied ZIP app running locally',
		path,
		viewport: [1440, 960],
		pixelDimensions: [2880, 1920],
		data:
			port === 4313
				? 'Original guest welcome UI; no AI request'
				: 'Synthetic local-only data; no production connection',
		title: await page.title()
	});
	console.log(name, await page.title(), text.slice(0, 220));
	await context.close();
}
try {
	await local('staff', 4311, '/', async (page) => {
		await page.waitForSelector('h1');
	});
	await local('tokoku', 4312, '/dashboard/penjualan', async (page) => {
		await page.waitForSelector('button[title="Tambah ke struk"]', { timeout: 60000 });
		const buttons = await page.$$('button[title="Tambah ke struk"]');
		await buttons[0].click();
		await buttons[1].click();
	});
	await local('hukumpekerja', 4313, '/', async (page) => {
		await page.waitForSelector('button', { timeout: 60000 });
		await page.evaluate(() => {
			const accept = [...document.querySelectorAll('button')].find((b) =>
				/Saya Mengerti/i.test(b.textContent)
			);
			accept?.click();
		});
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 2 });
	await page.goto('https://wonderful-lombok-main.vercel.app/', {
		waitUntil: 'networkidle2',
		timeout: 60000
	});
	await settle(page);
	await page.screenshot({
		path: 'static/images/wonderful-lombok-2x.webp',
		type: 'webp',
		quality: 96
	});
	await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
	await settle(page);
	await page.screenshot({ path: 'static/images/lombok-mobile-3x.webp', type: 'webp', quality: 96 });
	captures.push({
		name: 'wonderful-lombok',
		source: 'Anonymous public homepage',
		url: page.url(),
		desktopPixels: [2880, 1920],
		mobilePixels: [1170, 2532]
	});
	await page.close();
	await writeFile('docs/qa/authentic-captures.json', JSON.stringify(captures, null, 2));
} finally {
	const kill = setTimeout(() => browser.process()?.kill(), 5000);
	await browser.close();
	clearTimeout(kill);
}

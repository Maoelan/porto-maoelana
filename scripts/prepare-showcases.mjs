import puppeteer from 'puppeteer';
import { mkdir, writeFile, readFile } from 'node:fs/promises';

const browser = await puppeteer.launch({
	headless: true,
	executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
});
await mkdir('static/images', { recursive: true });
await mkdir('docs/qa', { recursive: true });
const targets = [
	['wonderful-lombok', 'https://wonderful-lombok-main.vercel.app/'],
	['psc-sahabat', 'https://lapor-aman-psc.vercel.app/'],
	['hukumpekerja', 'https://hukumpekerja-chatbot.vercel.app/'],
	['queue', 'https://pkm-srnd-loket.vercel.app/']
];
const results = [];
for (const [name, url] of process.argv.includes('--plates-only') ? [] : targets) {
	const page = await browser.newPage();
	await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1 });
	try {
		const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
		if (name === 'psc-sahabat' || name === 'hukumpekerja') {
			await page.evaluate(() => {
				const b = [...document.querySelectorAll('button')].find((b) =>
					/Saya mengerti|Saya Mengerti/i.test(b.innerText)
				);
				b?.click();
			});
			await new Promise((r) => setTimeout(r, 500));
		}
		await page.screenshot({ path: `static/images/${name}.webp`, type: 'webp', quality: 86 });
		results.push({ name, url, status: response?.status(), title: await page.title() });
		if (name === 'wonderful-lombok') {
			await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
			await page.screenshot({
				path: 'static/images/lombok-mobile.webp',
				type: 'webp',
				quality: 86
			});
		}
	} catch (e) {
		results.push({ name, url, error: e.message });
	}
	await page.close();
}

// A synthetic presentation plate, not a screenshot of a live internal service.
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1 });
await page.setContent(`<!doctype html><html><head><style>
*{box-sizing:border-box}body{margin:0;font:16px Arial,sans-serif;background:#edf5f0;color:#0a372f}header{height:80px;background:#0a372f;color:#f1f8f2;display:flex;align-items:center;justify-content:space-between;padding:0 52px}strong{font-size:20px}small{color:#3b6258}main{max-width:1240px;margin:64px auto}h1{font-size:36px;margin:0 0 16px}p{line-height:1.5}nav{display:flex;gap:32px;margin:36px 0}header small{color:#c3e0d0}nav b{background:#077777;color:#f1f8f2;padding:14px 20px}nav span{padding:14px 0}.toolbar{display:flex;justify-content:space-between;align-items:center;background:white;padding:24px 32px}button{background:#ffb342;color:#0a372f;border:0;padding:14px 24px;font:inherit}table{width:100%;border-collapse:collapse;background:white;margin-top:8px}td,th{text-align:left;padding:24px 32px;border-bottom:1px solid #dcece4;font-weight:400}th{font-size:14px;color:#3b6258}.tag{background:#d6eee7;padding:8px 12px}footer{margin-top:24px;color:#3b6258;font-size:14px}
</style></head><body><header><strong>Staff reporting / Suranadi</strong><small>Synthetic showcase · No live records</small></header><main><h1>Shift & absence reports</h1><p>Review leave, official duties and shift exchanges.</p><nav><b>All reports</b><span>Leave</span><span>Sick leave</span><span>Official duty</span><span>Shift exchange</span></nav><div class="toolbar"><span>October 2026 &nbsp; / &nbsp; 4 example reports</span><button>Export reports</button></div><table><thead><tr><th>Staff reference</th><th>Report type</th><th>Period</th><th>Notes</th></tr></thead><tbody><tr><td>Sample staff A</td><td><span class="tag">Leave</span></td><td>12–13 Oct 2026</td><td>Example leave request</td></tr><tr><td>Sample staff B</td><td><span class="tag">Official duty</span></td><td>14 Oct 2026</td><td>Example training assignment</td></tr><tr><td>Sample staff C</td><td><span class="tag">Shift exchange</span></td><td>15 Oct 2026</td><td>Morning to afternoon</td></tr><tr><td>Sample staff D</td><td><span class="tag">Sick leave</span></td><td>16 Oct 2026</td><td>Example absence record</td></tr></tbody></table><footer>Interface reconstruction based on supplied project features. All records are synthetic.</footer></main></body></html>`);
await page.screenshot({ path: 'static/images/staff-showcase.webp', type: 'webp', quality: 88 });
await browser.close();
if (!process.argv.includes('--plates-only'))
	await writeFile('docs/qa/public-links.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));

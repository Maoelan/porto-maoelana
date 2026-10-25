import puppeteer from 'puppeteer';
import { readFile } from 'node:fs/promises';
const browser = await puppeteer.launch({
	headless: true,
	executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
const product = (await readFile('static/images/wonderful-lombok-2x.webp')).toString('base64');
await page.setContent(
	`<html><style>*{box-sizing:border-box}body{margin:0;background:#0a0a12;color:#f4f4f6;font-family:Arial,sans-serif}.sheet{position:absolute;inset:28px;background:#15151f;padding:60px;display:grid;grid-template-columns:1fr 440px;gap:48px;align-items:center}h1{font-size:76px;line-height:.98;letter-spacing:-4px;margin:0}p{font-size:28px;margin:28px 0}small{font-size:18px}img{width:440px;height:380px;object-fit:cover;object-position:top;transform:translate3d(0,0,0) rotate(-2deg);border:0}footer{margin-top:48px;font-size:18px;background:#a8e000;padding:12px 18px;width:fit-content;color:#0a0a12}</style><div class="sheet"><div><h1>Maulana<br>Muhammad</h1><p>Software Engineer</p><small>Web products · Applied AI · Automation</small><footer>maoelan.vercel.app ↗</footer></div><img src="data:image/webp;base64,${product}"></div></html>`
);
await page.screenshot({ path: 'static/og.png' });
await browser.close();
console.log('Color product-led OG image generated.');

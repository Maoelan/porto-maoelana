import puppeteer from 'puppeteer';
import { readFile } from 'node:fs/promises';
const browser = await puppeteer.launch({
	headless: true,
	executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
const product = (await readFile('static/images/wonderful-lombok.webp')).toString('base64');
await page.setContent(
	`<html><style>*{box-sizing:border-box}body{margin:0;background:#0a372f;color:#ffb342;font-family:Arial,sans-serif}.sheet{position:absolute;inset:28px;background:#0a372f;padding:60px;display:grid;grid-template-columns:1fr 440px;gap:48px;align-items:center}h1{font-size:76px;line-height:.98;letter-spacing:-4px;margin:0}p{font-size:28px;margin:28px 0}small{font-size:18px;color:#c3dfd1}img{width:440px;height:380px;object-fit:cover;object-position:top;transform:rotate(-6deg);border:0}footer{margin-top:48px;font-size:18px;color:#c3dfd1}</style><div class="sheet"><div><h1>Maulana<br>Muhammad</h1><p>Software Engineer</p><small>Web products · Applied AI · Automation</small><footer>maoelan.vercel.app</footer></div><img src="data:image/webp;base64,${product}"></div></html>`
);
await page.screenshot({ path: 'static/og.png' });
await browser.close();
console.log('Color product-led OG image generated.');

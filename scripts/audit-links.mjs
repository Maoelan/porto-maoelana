import { readFile, writeFile, mkdir } from 'node:fs/promises';
const source = await readFile('src/lib/content/projects.ts', 'utf8');
const urls = [...source.matchAll(/(?:repoUrl|demoUrl):\s*'(https:\/\/[^']+)'/g)].map((m) => m[1]);
const report = await Promise.all(
	urls.map(async (url) => {
		try {
			const r = await fetch(url, {
				method: 'HEAD',
				redirect: 'follow',
				signal: AbortSignal.timeout(20000)
			});
			return { url, status: r.status, finalUrl: r.url };
		} catch (e) {
			return { url, error: e.message };
		}
	})
);
await mkdir('docs/qa', { recursive: true });
await writeFile(
	'docs/qa/link-audit.json',
	JSON.stringify({ checkedAt: new Date().toISOString(), links: report }, null, 2)
);
console.log(JSON.stringify(report, null, 2));

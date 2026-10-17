import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { access, readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const output = new URL('../dist/portfolio/browser/', import.meta.url);
const site = process.argv[2] ? new URL(process.argv[2]) : null;
const commit = process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], {
  encoding: 'utf8',
}).trim();
const routes = ['/', '/ueber-mich/', '/skills/', '/projekte/',
  '/projekte/budget-tracker/', '/projekte/issue-tracker/', '/projekte/space-jump/', '/kontakt/'];
const get = async (path) => {
  if (!site) return readFile(new URL(path.replace(/^\//, ''), output), 'utf8');
  const response = await fetch(new URL(path, site), { signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, 200, path + ' must return HTTP 200');
  return response.text();
};
const checkHtml = (html, route) => {
  const head = /<head\b[^>]*>([\s\S]*?)<\/head>/i.exec(html)?.[1] || '';
  const tags = head.match(/<meta\b[^>]*name="google-adsense-account"[^>]*>/g) || [];
  assert.equal(tags.length, 1, route + ': exactly one AdSense meta tag is required');
  assert.match(tags[0], /content="ca-pub-9439679481408777"/);
  assert.match(html, /<app-root[^>]*>[\s\S]*<header/, route + ': prerendered content is required');
};

const version = JSON.parse(await get(site ? '/version.json?commit=' + commit : '/version.json'));
assert.equal(version.commit, commit, 'The deployed version must match the requested Git commit');
assert.equal((await get('/health')).trim(), 'healthy');
for (const route of routes) {
  const html = await get(site ? route : route + 'index.html');
  checkHtml(html, route);
  if (route === '/projekte/space-jump/') {
    assert.match(html, /Space Jump/);
    assert.match(html, /https:\/\/space-jump\.ademdokur\.dev/);
  }
  console.log('OK ' + route);
}
const sitemap = await get('/sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
assert.equal(locations.length, routes.length, 'Sitemap must contain all prerendered routes');
assert.deepEqual(locations.map((url) => url.pathname).sort(), [...routes].sort());
assert(locations.every((url) => url.origin === 'https://ademdokur.dev'));

if (site) {
  for (const path of ['/version.json', '/health']) {
    const response = await fetch(new URL(path, site), { signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 200);
    assert.match(response.headers.get('cache-control') || '', /no-store/);
  }
  const root = await fetch(site, { signal: AbortSignal.timeout(15000) });
  assert.equal(root.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(root.headers.get('x-frame-options'), 'SAMEORIGIN');
  if (site.hostname === 'ademdokur.dev') {
    assert.doesNotMatch(root.headers.get('x-robots-tag') || '', /noindex/i);
    for (const path of ['/', '/projekte/space-jump/']) {
      const source = new URL(path, 'https://www.ademdokur.dev');
      source.searchParams.set('deployment', commit);
      const response = await fetch(source, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
      assert.equal(response.status, 301, source.href + ': www must redirect');
      const target = new URL(source);
      target.hostname = site.hostname;
      assert.equal(new URL(response.headers.get('location'), source).href, target.href,
        'www redirect must preserve path and query');
    }
  }

  for (const path of ['/assets/projects/space-jump/screenshots/gameplay.png', '/manifest.json', '/robots.txt']) {
    const response = await fetch(new URL(path, site), { signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 200, path);
    assert(!response.headers.get('content-type')?.includes('text/html'), path + ': must not be the SPA fallback');
    await response.arrayBuffer();
  }
  for (const [from, to] of [['/about', '/ueber-mich/'], ['/projects', '/projekte/'], ['/contact', '/kontakt/']]) {
    const response = await fetch(new URL(from, site), { redirect: 'manual', signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 301, from);
    assert.equal(new URL(response.headers.get('location'), site).pathname, to);
  }
} else {
  for (const path of ['_headers', '_redirects', 'assets/projects/space-jump/screenshots/gameplay.png',
    'manifest.json', 'robots.txt']) await access(new URL(path, output));
  const files = await readdir(output, { recursive: true, withFileTypes: true });
  const assets = files.filter((entry) => entry.isFile());
  assert(assets.length <= 20000, 'Pages Free supports at most 20,000 assets');
  for (const file of assets) {
    const size = (await stat(join(file.parentPath, file.name))).size;
    assert(size <= 25 * 1024 * 1024, file.name + ' exceeds the Pages per-file size limit');
  }
  const html = await get('/index.html');
  for (const match of html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)) {
    await access(new URL(match[1].replace(/^\//, ''), output));
  }
}
console.log('Verified ' + (site?.origin || 'Pages build') + ' at commit ' + commit);

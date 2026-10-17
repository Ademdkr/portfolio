import { execFileSync } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

const commit = process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], {
  encoding: 'utf8',
}).trim();
if (!/^[a-f0-9]{40}$/.test(commit)) throw new Error('A full Git commit SHA is required.');
await writeFile(new URL('../dist/portfolio/browser/version.json', import.meta.url),
  JSON.stringify({ commit }) + '\n');
console.log('Pages version.json prepared for ' + commit);

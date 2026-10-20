import test from 'node:test';
import assert from 'node:assert/strict';
import { posts, getPost } from '../lib/posts.ts';
import { readFileSync } from 'node:fs';

test('approved warning article has content, date and authoritative clickable sources', () => {
 const p = getPost('slotenmaker-onaangename-verrassingen');
 assert.ok(p, 'approved article exists');
 assert.equal(posts.filter(x => x.slug === p.slug).length, 1);
 assert.equal(p.date, '2026-10-20');
 assert.equal(p.sections.length, 4);
 assert.deepEqual(p.sources.map(s => new URL(s.url).hostname), ['economie.fgov.be','support.google.com']);
 assert.ok(!JSON.stringify(p).includes('afbeelding'));
 const page = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
 assert.ok(page.includes('p.sources') && page.includes('href={source.url}'));
});

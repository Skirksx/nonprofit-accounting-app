import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('the current budget selection uses the 2026-2027 Rotary year', async () => {
  const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');

  assert.match(html, /<option value="2026-2027" selected>2026-2027 \(Current\)<\/option>/);
  assert.match(html, /Current Rotary year: 2026-2027/);
  assert.match(html, /July 1, 2026 through June 30, 2027/);
  assert.doesNotMatch(html, /<option value="2026" selected>/);
});

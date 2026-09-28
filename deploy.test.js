import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('GitHub Pages deployment waits for the budget test', async () => {
  const workflow = await readFile(
    new URL('./.github/workflows/deploy-pages.yml', import.meta.url),
    'utf8',
  );

  assert.match(workflow, /pages: write/);
  assert.match(workflow, /id-token: write/);
  assert.match(workflow, /needs: test/);
  assert.match(workflow, /uses: actions\/deploy-pages@v4/);
  assert.match(workflow, /path: dist/);
});

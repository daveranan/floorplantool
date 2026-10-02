const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const suites = [
  'test-command-bulk-focus.cjs',
  'test-buildings.cjs',
  'test-command-door.cjs',
  'test-contextmenu.cjs',
  'test-cutaway-bases.cjs',
  'test-direct.cjs',
  'test-editor.cjs',
  'test-floor-camera-sync.cjs',
  'test-floor-surfaces.cjs',
  'test-grid-exterior.cjs',
  'test-hover.cjs',
  'test-multiselect.cjs',
  'test-preview.cjs',
  'test-roommenu.cjs',
  'test-stair-author.cjs',
  'test-stair-detail.cjs',
  'test-stair-ux.cjs',
  'test-three-controls.cjs',
  'test-three-focus.cjs',
  'test-three-interactions.cjs',
  'test-three-scene.cjs',
  'test-typography.cjs',
  'test-ui-static.cjs',
  'test-ui.cjs',
  'test-workspace-modes.cjs',
  'test-objects-services.cjs',
  'test-stair-types.cjs'
];

for (const suite of suites) {
  console.log(`Running ${suite}`);
  const result = spawnSync(process.execPath, [suite], {
    cwd: root,
    stdio: 'inherit',
    timeout: 120000
  });
  if (result.error || result.status !== 0) {
    console.error(result.error ? result.error.message : `${suite} failed.`);
    process.exit(result.status || 1);
  }
}
console.log(`${suites.length} current JavaScript suites passed.`);

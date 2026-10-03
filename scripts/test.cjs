const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const suites = [
  'test-walk-crouch.cjs',
  'test-stair-surface-offsets.cjs',
  'test-stair-surface-offset-ui.cjs',
  'test-stair-surface-offset-scene.cjs',
  'test-multifloor-point-editing.cjs',
 'test-outline-consistency.cjs','test-layer-dom-stability.cjs','test-render-performance.cjs',
 'test-primitive-gizmo-workflow.cjs','test-lift-walk.cjs','test-lift-walk-scene.cjs',
  'test-clipping-robustness.cjs','test-corner-label-centering.cjs','test-max-passages.cjs','test-max-passage-ui.cjs','test-max-passage-geometry.cjs','test-max-passage-scene.cjs','test-bridges.cjs','test-bridge-ui.cjs','test-bridge-scene.cjs','test-thin-walls.cjs','test-thin-wall-ui.cjs','test-thin-wall-scene.cjs','test-primitive-2d-editing.cjs',
  'test-nested-room-doors.cjs','test-nested-room-geometry.cjs','test-nested-room-ui.cjs','test-nested-room-scene.cjs',
  'test-floor-edit-scope.cjs',
  'test-primitives.cjs','test-primitives-scene.cjs','test-primitives-io.cjs','test-space-lock-editing.cjs','test-home-cards.cjs','test-selection-transform.cjs','test-crossfloor-ui.cjs','test-crossfloor-lifecycle.cjs',
  'test-backup-ui.cjs',
  'test-wall-profiles.cjs',
  'test-wall-profiles-scene.cjs',
  'test-wall-edge-ui.cjs',
  'test-concrete-cap-editing.cjs',
  'test-concrete-cap-scene.cjs',
  'test-stair-concrete.cjs',
  'test-stair-concrete-scene.cjs',
  'test-door-thresholds.cjs',
  'test-building-transform.cjs',
  'test-keyboard-layers.cjs',
  'test-layer-safety.cjs',
  'test-local-files.cjs',
  'test-local-files-interruptions.cjs',
 'test-retention-calendar.cjs',
  'test-persistence-recovery.cjs',
  'test-window-offset-persistence.cjs',
  'test-nudge-history.cjs',
  'test-corner-windows.cjs',
  'test-corner-window-interactions.cjs',
  'test-corner-window-scene.cjs',
  'test-stair-walk-contacts.cjs',
  'test-stair-cutout-volumes.cjs',
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

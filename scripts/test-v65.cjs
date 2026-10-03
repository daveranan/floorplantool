/* Focused current-harness release gate; historical aggregate drift is documented. */
const {spawnSync}=require('node:child_process');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const suites=[
 'test-nested-room-doors.cjs','test-nested-room-geometry.cjs','test-nested-room-ui.cjs','test-nested-room-scene.cjs',
 'test-shared-floor-controller-scene.cjs','test-floor-interrupted-gesture-scene.cjs','test-hidden-floor-authoring-scene.cjs',
 'test-home-cards.cjs','test-selection-transform.cjs','test-crossfloor-ui.cjs','test-crossfloor-lifecycle.cjs',
  'test-backup-ui.cjs',
  'test-wall-profiles.cjs',
  'test-wall-profiles-scene.cjs',
  'test-wall-edge-ui.cjs',
  'test-concrete-cap-editing.cjs',
  'test-concrete-cap-scene.cjs',
 'test-building-transform.cjs','test-keyboard-layers.cjs','test-layer-safety.cjs',
 'test-local-files.cjs','test-local-files-interruptions.cjs','test-backup-shortcut.cjs',
 'test-retention-calendar.cjs',
 'test-persistence-recovery.cjs','test-window-offset-persistence.cjs','test-nudge-history.cjs',
 'test-command-bulk-focus.cjs','test-workspace-home.cjs',
 'test-corner-windows.cjs','test-corner-window-interactions.cjs','test-corner-window-scene.cjs',
 'test-corner-rotation-scene.cjs','test-point-undo-production.cjs','test-shape-editing.cjs',
 'test-stair-walk-contacts.cjs','test-stair-cutout-volumes.cjs',
 'test-stair-concrete.cjs','test-stair-concrete-scene.cjs','test-door-thresholds.cjs',
 'test-ui-static.cjs'
];
for(const name of suites){console.log('\nRunning '+name);const result=spawnSync(process.execPath,[name],{cwd:root,stdio:'inherit',timeout:120000});if(result.status!==0||result.error){console.error(result.error||name+' failed');process.exit(result.status||1);}}
console.log('\n'+suites.length+' focused v65 release suites passed.');

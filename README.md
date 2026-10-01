# Building Planner

A static, browser-local building and floor planner. Existing KERN layouts are preserved as the initial building and 13 legacy archive variants; new buildings have independent plans, views and undo history.

## Interface

- Native HTML dialogs and disclosure menus, shared light/dark tokens, inline form validation and keyboard navigation
- Responsive floor navigation, optional phone inspector and persistent local-save failure recovery
- Current floor PNG/SVG, building/all-buildings JSON and a current-model vertical-stack preview/PNG
- Locally bundled Three.js r180 preview with floor visibility/isolation, exploded spacing, cutaway walls and PNG snapshots

The UI stays plain JavaScript and SVG. The design system uses shadcn-style composable tokens and interaction patterns without a React/Tailwind migration. No cloud sync, backend or additional account access is introduced.

## Storage and geometry

Existing `kern-buildings-v1`, legacy migration backups and JSON schemas are unchanged. UI changes do not transform layout data. Import adds copies. The 3D and drawing previews use read-only snapshots; they never modify floor elevations or room footprints. They are concept geometry: no roofs, structural engineering or traversal certification. Unspecified wall heights default to 3 m and slabs to 0.3 m. Required stair openings and calculated treads/landings are shown.

## Development

The static deployment directory is `dist`. Install pinned dependencies with `npm ci`. Rebuild the local Three.js bundle after editing `src/preview3d.js` with `npm run build:preview`. It has no runtime CDN dependency. Preserve the Three.js license in `dist/vendor`.

Run the legacy regression suites:

```
for f in test-editor.cjs test-direct.cjs test-hover.cjs test-contextmenu.cjs test-roommenu.cjs test-buildings.cjs test-stair-detail.cjs test-stair-author.cjs; do node "$f" || exit 1; done
```

Run the current UI/preview checks:

```
node test-ui.cjs
node test-preview.cjs
node test-three-scene.cjs
node test-ui-static.cjs
node test-typography.cjs
python test-compact-layout.py
```

DOM tests and renderer test doubles cover model isolation, cancel/repeat flows, menu focus, import errors, WebGL failure fallback, scene transforms, disposal and reopening. SVG export sources have been rendered and visually checked. Real browser layout, touch gestures, GPU rendering and browser PNG downloads still need browser QA; those are not established by the automated checks.

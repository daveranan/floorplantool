# Current editor regression checks

Run from the project root:

- `node test-buildings.cjs`: legacy migration across 13 variants, failure recovery, isolation, view state, undo, archive, floor operations, imports, widths and cancellation
- `node test-editor.cjs`: room geometry, resizing, linked stairs and imported metadata
- `node test-direct.cjs`: drawing/connection tools, keyboard/touch gestures and stair preview
- `node test-hover.cjs`: display-only connection feedback
- `node test-contextmenu.cjs`: connection actions
- `node test-roommenu.cjs`: room types and toolbar controls
- `node test-stair-detail.cjs`: 26 stair-geometry cases
- `python test-compact-layout.py`: static HTML/CSS structure and responsive rule checks

The JavaScript checks use a DOM/event harness, not a real browser. Existing historical `test-v*.cjs` scripts belong to their named design revisions and do not load the complete current app. No baseline seed, exported geometry JSON, SVG or review image is changed by this editor update. The current static Site does not have a compatible approved interactive browser preview in this session; real pointer/layout QA is not claimed.

Persistence is browser-local only. The first building migration makes an immutable versioned snapshot of legacy keys before writing the new collection, and leaves those keys unchanged. All later saves retain the previous collection as a recovery snapshot and refuse stale-tab writes. Exported single-building files use `kern-building` schema version 1; full backups use `kern-buildings` schema version 1. Import adds independent copies and accepts original KERN version-1 plan JSON.

## 3D surface labels and wall hiding

`node test-floor-surfaces.cjs` exercises the actual Three.js scene with a renderer double: fully removed hidden wall/lintel/X-ray instances; unchanged slab transforms; floor-aligned transparent text; true dropped-room elevations; fit, orientation, void and stair-landing placement; label visibility; real ray intersections through walls; and resource cleanup. `node test-three-focus.cjs` retains camera, floor navigation and X-ray timing coverage. These are geometry/material tests, not proof of GPU drawing.

The older `test-compact-layout.py` currently fails its `floorbrief` ancestry assertion on the unchanged pre-update source as well. The current JavaScript UI and interaction suites pass; this unrelated legacy shell expectation is not treated as a passing check.

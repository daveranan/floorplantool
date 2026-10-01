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

## Draw-first stairs and compact editor controls

`node test-stair-ux.cjs` covers the canvas-first stair lifecycle (including reverse/free-snap drawing, arbitrary elevations, skipped-floor openings, fit-blocked confirmation, redraw, cancellation, capture loss, blur, floor change, repeated creation and atomic undo). It also covers 15 repeated connect/disconnect cycles without selecting sources, targets or results; tap/exterior paths; 7 px single/group handles with 22 px mouse and 44 px coarse-pointer hit areas; theme placement/persistence and native select keys; and plain Help/Ctrl-slash shortcuts with text-field draft preservation and focus restoration. Command search remains separate under View / Ctrl-K.

All 22 current JavaScript suites pass. Updated historical assertions reflect the requested draw-first entry, destination-only choice and fit-blocked confirmation. The unchanged `test-compact-layout.py` still fails its old `floorbrief`-inside-aside expectation. Existing seed models, archived JSON, SVGs and PNGs are untouched.

Three user references were inspected at actual pixels. The generated SVG handle overlays were rasterized and visually inspected at 1× and 5× zoom, along with the actual stair-preview SVG. Interactive browser preview remains blocked in this environment; physical touch targeting, native dialog focus trapping and the full-height sidebar’s real layout/scrolling have not been browser-verified. The sidebar has DOM/CSS coverage only.

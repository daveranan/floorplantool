# Current editor regression checks

## October 1, 2026: compact copy, objects, services and stair types

The later **Place / HVAC UI iteration** reuses the existing model and placement functions. `node test-objects-services.cjs` passed. The bounded `npm run test:browser -- --place` pass verified loading, collapsed/expanded actionable Connections, categorized previews, local horizontal wheel scrolling without camera changes, click placement, live metric drag/drop, Escape cancellation, shared HVAC placement, inspector controls, text-input-safe `B`, command/help registration and browser-local reload. All 13 Chrome checks passed with zero uncaught runtime exceptions. Palette, drag-ghost and HVAC inspector screenshots were visually inspected. The earlier full-suite evidence below was retained; the aggregate was not rerun for this presentation iteration.

Run `npm test` for all **26 current JavaScript suites**. The original 24 plus `test-objects-services.cjs` and `test-stair-types.cjs` pass. The added suites exercise legacy annotation migration without selection-time document changes; ID remapping, internal/exterior connection graphs and cross-floor clipboard transfers; atomic undo and native text exceptions; repeated/interrupted outline and service tools; independent overlay persistence and JSON roundtrip; straight and left/right spiral metrics, exact polygon treads, beam/headroom rejection, skipped floors and complete linked-stack copies. Scissor geometry is explicitly rejected.

The final selection iteration excludes doors from every marquee hit set. Ctrl/Cmd boxes subtract enclosed selected objects, preserve those outside and never add unselected objects; empty boxes and canceled drags preserve selection. Focused `test-multiselect.cjs` and `test-objects-services.cjs` checks cover the changed behavior. Explicitly selected doors are unchanged by Ctrl/Shift boxes. `npm run test:browser -- --marquee` passed five focused Chrome checks for loading, door-free boxes, Ctrl subtraction, an empty box and unchanged model/history. The earlier 32-check browser result remains valid for the unchanged feature paths.

Run `npm start`, then `npm run test:browser` in another terminal on Windows with Chrome installed in its standard Program Files path. The runner uses an isolated profile and localhost DevTools. Chrome **154.0.8037.58** passed **32 actual browser checks**, including real pointer drags, canceled route drawing, hatch placement, route-only selection, editable service height, cross-floor clipboard/move/undo, linked spiral copies, staircase fit previews, 2D/3D preservation, browser-local reload, independent building import, mobile palette bounds/target separation and keyboard focus restoration. There were **zero uncaught runtime exceptions**. SVG, PNG and building JSON were downloaded by Chrome and checked for readable nonempty bytes. Screenshots and the result JSON are written to ignored `qa/`.

The rendered desktop B1/B2 plans, service mode, straight/spiral dialogs, spiral 3D scene and 390 × 844 phone editor/palette were visually inspected. Chrome rendered WebGL using software SwiftShader. This establishes browser drawing, not hardware-GPU or physical-touch behavior. The 3D service/symbol layer remains a 2D authoring overlay; stairs use the same exact polygon geometry in the 3D preview.

All seven floor extents are unchanged from V11. Upper L1/L2/L3 room and door data is identical; the V11 seed and JSON are byte-unchanged. V12 has zero placed equipment/furniture outlines or service terminals, and only the two explicitly provisional service route proposals. Vehicle turning, clinical operation, service-network connectivity, structural/code compliance and runtime traversal remain unverified.

The supported Library consumer helper could not install the supplied PNG references on Windows: its unchanged helper raised `AttributeError: module 'os' has no attribute 'setxattr'`. No workaround was used. The parent inspected the reference images and supplied their door, stair and HVAC visual requirements. Windows screenshot evidence uses locally rendered app output.

The historical `python test-compact-layout.py` still has its pre-existing `floorbrief`-inside-`aside` assertion failure. It is not included among the 26 passing JavaScript suites. The older milestone notes below describe their original environments; their browser-blocked statements have been superseded by this Windows Chrome evidence.

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

At the stairs/editor milestone, all 22 then-current JavaScript suites passed. Updated historical assertions reflect the requested draw-first entry, destination-only choice and fit-blocked confirmation. The unchanged `test-compact-layout.py` still fails its old `floorbrief`-inside-aside expectation. Existing seed models, archived JSON, SVGs and PNGs are untouched.

Three user references were inspected at actual pixels. The generated SVG handle overlays were rasterized and visually inspected at 1× and 5× zoom, along with the actual stair-preview SVG. Interactive browser preview remains blocked in this environment; physical touch targeting, native dialog focus trapping and the full-height sidebar’s real layout/scrolling have not been browser-verified. The sidebar has DOM/CSS coverage only.

## Inline 2D / 3D workspace modes

`node test-workspace-modes.cjs` mounts the actual Three.js scene through a renderer double inside the new main-canvas mode. It verifies the left floor controls/right display panel; independent 3D focus; deep preservation of the 2D model, floor, multi-selection, pan, zoom, bounds, persistent tool and history; per-building camera/display-state restoration; mode-aware commands and keyboard guards; Escape from canvas/sidebar/ranges/checkboxes; resize without refitting; ground-grid visibility; and 3D PNG snapshot dispatch.

Repeated mode switches and building changes assert one active renderer in 3D and none in 2D, with observer/global-listener cleanup. Delayed loading, missing-library retry, disabled pending floor/command controls, changed-building load races, canceled drag/width drafts, stale PNG failures, partial-mount errors and graphics-context loss are covered. The current full suite is 23 JavaScript files, all passing. No seed models, archived drawings or storage schemas changed.

The 3D region is an inline workspace section, not a dialog. The renderer is disposed when leaving 3D; only plain in-memory camera/display settings are retained per building. The saved 2D building view continues using its existing local-storage schema. Real browser responsive layout, physical pointer/touch behavior and GPU output remain unverified because interactive preview is blocked; DOM, scene and lifecycle tests do not establish those properties.

## Shared current floor and translation-only 3D navigation

`node test-floor-camera-sync.cjs` verifies actual Three.js camera vectors in the DOM/renderer-double harness. The current floor is now shared by 2D and focused 3D, including saved view metadata and current-floor export. Selection is remembered per building and floor, filtered against valid room/connection IDs, and never carried onto another floor just because it reuses an ID. Model bytes, history, 2D pan/zoom/bounds and tools stay unchanged by navigation.

The new suite covers different floor footprints, arbitrary floor names, negative elevations, dropped garage geometry, unchanged horizontal camera/target coordinates and distance/orientation, 420 ms vertical interpolation, rapid mid-animation reversals, real wheel and orbit-start cancellation, signed explosion offsets and matching grid elevations, same-floor elevation edits, repeated modes and per-building restoration. Initial view creation fits once; subsequent restores, floor switches, Show all/Back and explosion changes never fit. Explicit Fit still works. An intentional overview stays an overview across mode changes and retains the current floor for 2D.

The provided screenshot was materialized and inspected at its actual pixels: the thin bright line follows the full canvas boundary. Canvas focus styling is now explicit and keyboard-only; pointer-driven return to 2D does not programmatically focus the SVG. DOM tests check pointer and keyboard mode handoff, and CSS checks retain the keyboard focus rule. Room-selection SVG styling was not changed.

All 24 current JavaScript suites pass. The unchanged historical compact-layout Python test still fails its old `floorbrief`-inside-`aside` assertion. No source seeds, archived JSON, SVGs, PNGs or storage schemas changed. Real-browser native focus painting, responsive layout and GPU rendering remain unverified because this static Site has no compatible approved interactive preview in this session. The supplied screenshot and geometry/DOM assertions do not establish a new rendered browser result.

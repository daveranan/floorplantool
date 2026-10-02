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

## October 2: contextual split levels

`npm run test:elevation` covers the outside 0 → entry +0.85 → courtyard +0.34 m route in both directions with rectangular/polygon rooms, preserving offsets on a floor move, linked endpoint updates, contextual inputs, undo/import, actual Three.js raycasts for room/floor handles with a mock renderer, Escape cancellation, interrupted drawing on floor/tool changes and capture loss, bounded riser input, endpoint-offset limits, approach headroom and cross-floor slab warnings. Additional current polygon-scene, rotate-tool, room-snapping, shape-editing, walk-scene and height-rules suites were run. This is DOM/geometry coverage; no browser visual or hardware GPU pass is claimed.

The historical aggregate `npm test` was attempted and stops at `test-buildings.cjs` on `JSON.parse(undefined)`. The same failure was reproduced against unchanged HEAD. `test-floor-surfaces.cjs` and `test-objects-services.cjs` also retain identical failing assertions on unchanged HEAD (hidden labels and the old Shift support annotation). These are not reported as passing checks.

## October 2: corner pivots, optional multi-edge snapping and room types

Focused tests `test-rotate-tool.cjs`, `test-corner-rotation-scene.cjs`, `test-multi-snapping.cjs`, and `test-explorer-room-types.cjs` cover fixed-corner rotation, absolute 5° snapping, symbol pivots, cancel/undo, Three.js raycast handles with a renderer double, simultaneous orthogonal/angled constraints, a group translation solve, Ctrl geometry snapping versus default grid in rectangle resizing, and the integrated Explorer context menu with clicked-floor targeting and protected types. No browser/GPU visual pass is claimed.

## October 2: 3D authoring and live dimensions

`test-authoring3d.cjs` covers all four cardinal edge directions, automatic descent/ascent metrics, source/destination links, free stair/room footprints, quarter-metre drawing, one-commit undo and inspector refresh. `test-authoring3d-scene.cjs` exercises actual Three raycasts with a mock renderer for edge-tool preview, creation, one-shot reset, undo, Escape, floor-switch cancellation and disposal. Rotation/elevation scene tests cover fixed pivots and quarter-metre height snapping; DOM rotation tests assert the visible degree label and dashed feedback group. No physical pointer, real browser or GPU visual pass is claimed.

## October 2: unified toolbar

`test-shared-toolbar.cjs` covers shared R/E/S/V modes, Local steps/Edge steps, inspector width, unsupported tool gating and restoration, typing guards, and the same full-stair destination dialog without premature model edits. `test-authoring3d-scene.cjs` uses the shared viewer authoring API and verifies there is no separate canvas toolbar. Mobile toolbar-specific 3D layout overrides were removed; responsive browser rendering remains unverified.

## October 2: navigation, selected points and courtyard concept

`test-navigation-workspace.cjs` uses the actual renderer with mocked GPU to verify selection persistence through Tab mode switches, F framing, Alt orbit/right zoom without model mutation, and the fixed zero ground/grid after moving a whole floor. `test-transform-modifiers.cjs` checks proportional/centered resizing, D/window correction, Shift shortcuts and 2D Alt pan/zoom. `test-point-transform.cjs` checks point marquee and group move/resize/rotate with untouched unselected vertices, undo, directional radius dragging and double-click reset. `test-concept-copy.cjs` verifies original preservation, independent concept import and clean Plan/preview checks. The concept asset's route validation separately covers 17 simulated walkthrough routes. Real browser/GPU/physical-input QA remains unperformed.

## Workspace and editable stair route update (October 2)

Added Home/projects/building tabs, fixed-tip tool cursors, crossing marquee, explicit 3D move handles and Alt camera controls, field blur before canvas edits, faint origin cells, wall-constrained grid opening placement, and normalized-frame editable route stairs. Route nodes, flight widths, endpoint references, node elevations and polygonal landings are persisted on the stair room. Exact stair/landing polygons are shared with preview and walkthrough; stair routes do not add enclosing walls. Existing local steps can be converted via “Edit both stair endpoints.” Clipboard retains route data and remaps copied references; uncopied endpoint references are removed with a notice.

Verified focused harnesses: test-workspace-home, test-route-stairs (production script order), test-route-geometry, test-v52-interactions, test-authoring3d, test-authoring3d-scene, test-navigation-workspace, test-point-transform, test-transform-modifiers, test-multi-snapping, test-rotate-tool, test-corner-rotation-scene, test-shared-toolbar, test-local-elevation, test-elevation-safety, and test-polygon-rooms. Actual Three.js math/raycast/OrbitControls use a renderer double; no GPU or physical pointer claim. Route walkthrough was checked through two flights and a flat turn (0 → 1.5 → 3 m). The independent read-only audit caught and prompted fixes for capture loss, preview autosave, empty imports, stale linked heights, incorrect node-handle heights, marquee interruption and overly broad ground masks.

The aggregate npm test still stops in the pre-existing test-buildings legacy-seed setup at JSON.parse(undefined). The old test-grid-exterior seed assertion still expects V11 while the current default is V12. Neither is recorded as passing. Browser QA was attempted through the cloud browser, but the local preview URL was blocked by the browser (ERR_BLOCKED_BY_CLIENT); the escalated readiness tool also encountered a sandbox setup error. No browser visual verification is claimed for this update. Existing authored building data and seeds are preserved.

## October 2: command search, connection defaults and bulk editing

`node test-command-bulk-focus.cjs` loads the actual production script order and passes: window→C circulation mode in 2D/3D; Ctrl/Cmd+/ command search; validated and persisted single/double default widths with cancel and no existing-model changes; rectangular/exterior/polygon placement widths; compatible mixed-selection room/opening/item/service types; one-step undo; preserved dimensions, labels and selection; atomic locked-room/detached-opening rejection; legacy exterior types; native select/disclosure/context-menu/button focus; input-safe Tab; and preservation of an unfinished input draft through command search. Independent DOM QA also verified a rebuilt stair endpoint selector without an ID retains focus.

Focused v53 creation, tools, navigation, oriented resize, 3D connections scene, shared toolbar, current navigation workspace, Explorer room-type and multi-selection suites pass. These are DOM/geometry and mock-GPU checks, not physical native-dropdown or browser visual verification. A broader `test-authoring3d.cjs` probe found a v53 route portal height regression, which the release owner corrected and reran successfully. Other historical probes still fail outside these scoped changes: `test-v52-interactions.cjs` expects the old Alt free-opening snap modifier; the legacy `test-roommenu.cjs`/`test-contextmenu.cjs` window doubles lack addEventListener. The aggregate's existing legacy-building seed failure is unchanged; no full aggregate pass is claimed.

## October 2: bounded stair clearance (v54)

`node test-stair-cutout-volumes.cjs` exercises default/custom finite headroom; slabs above and below stairs; floor portions above low treads and beneath high treads; horizontal gaps within a bent path's bounding rectangle; actual intermediate-floor crossings; returning routes with elevated interior nodes; partial slab thickness under landings; cross-floor endpoint references; tall-wall and oblique portal preservation; and existing polygon holes. It includes 8,120 sampled points asserting removed solid volume equals the union of actual rotated tread/landing cutter prisms. Input plans remain byte-for-byte unchanged.

`node test-route-v53.cjs` now additionally tests the production inspector's 2.2 m default, import/persistence of an optional clearance value, range rejection without history changes, low-clearance warnings, and one-step undo. Headroom-dependent overlapping-flight warnings are covered by a separate stacked-flight fixture. No physical browser/GPU verification is claimed.

The independent read-only audit passed 120,000 randomized volumetric samples with rotated cutters and preserved holes. It found and prompted fixes for configured-headroom turn warnings and polygon slab representation needed by label anchoring. The 28 focused regression suites pass. Unchanged-HEAD comparison confirms the historical `test-preview.cjs:22`, `test-floor-surfaces.cjs:42` and `test-cutaway-bases.cjs:71` failures remain outside this patch; these are not recorded as passing. Representative prepared-plan geometry remained within roughly 71–90 ms during that audit.


## October 2: corner windows, chamfers and clear-height explanation

`test-corner-windows.cjs` covers square, rounded, chamfered and rotated perimeter windows; the closed-perimeter seam; blocked neighbor/opening legs; actual polygon wall holes with retained sills/lintels; globally spaced mullions; sealed glass and walking collision; per-corner styling; undo/import validation; and live clearance labels without rewriting authored label text. `test-corner-window-interactions.cjs` covers center-preserving width edits, dragging/cancel/undo, straight/wrapped conversion, door-type conversion/menu and legacy external adapters. `test-corner-window-scene.cjs` exercises actual Three.js raycasts through multi-segment hover preview, corner-window creation and one-shot undo with a mock renderer. These three suites are included in the aggregate runner.

Eighteen existing/focused suites passed: corner-windows, windows, overlook-window, polygon-rooms, polygon-scene, shape-editing, point-transform, point-undo-production, height-rules, v53-connections-scene, v53-creation, stair-cutout-volumes, v53-portals, v53-route-geometry, elevation-safety, command-bulk-focus, transform-modifiers and corner-rotation-scene. The two additional corner interaction/scene suites also pass. Exported SVGs for square/rounded/chamfered windows were rasterized and visually inspected. This is SVG/DOM/geometry and mock-GPU coverage; no physical browser or hardware GPU result is claimed.

Independent review added 672 geometry cases covering corner styles, both contour winding directions, four rotations and varied perimeter offsets, plus cross-floor tall-wall openings and legacy adapter conversion. The review found and fixed ordinary exterior doors failing to notice a wrapped-window clash; detached wrapped windows now produce the usual preview warning. The aggregate `npm test` was run and passes the new corner suites plus the v54 cutout and command/bulk suites before stopping at the pre-existing `test-buildings.cjs` JSON.parse(undefined) seed failure. `test-elevation-ui.cjs` also retains an identical HEAD failure at the split-level-connection count, independently reproduced; it is not reported as passing.

The combined release also includes `test-stair-walk-contacts.cjs` in the aggregate. It covers ascending/descending winding and stacked flights, connected landings, retained-floor ramp overlap, genuine low ceilings/side obstacles/window/solid collision, stacked-lap isolation, unchanged plans and step/drop limits. Two privately uploaded routes were verified through every flight and landing in both directions (7 flights / 22 checkpoints and 4 flights / 13 checkpoints); neither upload nor diagnostic data is included in repository or public assets. A separate reviewer checked the walk-controller change. Visual cutouts remain unchanged.

Final combined checkpoint: all 28 targeted suites listed above (including the four new suites) passed after integration, preview bundle build passed, and whitespace checks passed. The final aggregate was rerun with the stair-contact suite included and again stops only when it reaches the known legacy building-seed failure. No physical browser/GPU pass is claimed.

## Recovery safeguard verification (unpublished)

`node test-persistence-recovery.cjs` loads the actual production script order. It verifies four-building recovery isolation, matching previous snapshots, exact storage preservation through startup/render/switch/Home/pagehide/history timers/pruning, raw+in-memory recovery exports, malformed/empty/missing/future-schema snapshots, rejected invalid writes before either storage update, successful correction, view-only checkpoint preservation, unchanged polygon-boundary roundtrip, safe recovery import, quota failure, blocked storage reads, and refusal to silently import stale saved data over different in-memory work.

`node test-nudge-history.cjs` verifies repeated actual key events, the 80-entry cap, exact undo/redo and oldest retained state, redo branching, no-op behavior, and recovery of an already oversized session history. Independent full-production review also covers malformed view metadata, generated-ID collisions and stale-tab bundles. Focused recovery, workspace, command/bulk, corner-window and stair-contact/cutout suites pass. The aggregate still stops at the historical `test-buildings.cjs` missing-v12-seed harness failure; this is not a full aggregate pass. No private user fixtures are included.

`test-window-offset-persistence.cjs` reproduces the actual null-offset writer using synthetic geometry: a 4.8 m window on a rounded room's 5 m straight segment has no half-metre-grid start. The original v55 writes NaN, serialized as null; the hotfix rejects the edit before mutation. Tests cover direct/slider edits, invalid geometry offsets, Ctrl free placement, group/wrap edits, undo and four-building recovery without automatic repair. Explicit recovery-picker tests cover cancellation, same-ID validation, stale-tab and quota refusal, unchanged previous/history, in-place restore and reload.

All 20 failures observed when separately running the legacy aggregate's remaining suites were also reproduced on unmodified v55; none became newly failing in the hotfix. This does not replace the explicit focused pass evidence above.

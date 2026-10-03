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

## Recovery safeguard verification (v56)

`node test-persistence-recovery.cjs` loads the actual production script order. It verifies four-building recovery isolation, matching previous snapshots, exact storage preservation through startup/render/switch/Home/pagehide/history timers/pruning, raw+in-memory recovery exports, malformed/empty/missing/future-schema snapshots, rejected invalid writes before either storage update, successful correction, view-only checkpoint preservation, unchanged polygon-boundary roundtrip, safe recovery import, quota failure, blocked storage reads, and refusal to silently import stale saved data over different in-memory work.

`node test-nudge-history.cjs` verifies repeated actual key events, the 80-entry cap, exact undo/redo and oldest retained state, redo branching, no-op behavior, and recovery of an already oversized session history. Independent full-production review also covers malformed view metadata, generated-ID collisions and stale-tab bundles. Focused recovery, workspace, command/bulk, corner-window and stair-contact/cutout suites pass. The aggregate still stops at the historical `test-buildings.cjs` missing-v12-seed harness failure; this is not a full aggregate pass. No private user fixtures are included.

`test-window-offset-persistence.cjs` reproduces the actual null-offset writer using synthetic geometry: a 4.8 m window on a rounded room's 5 m straight segment has no half-metre-grid start. The original v55 writes NaN, serialized as null; the hotfix rejects the edit before mutation. Tests cover direct/slider edits, invalid geometry offsets, Ctrl free placement, group/wrap edits, undo and four-building recovery without automatic repair. Explicit recovery-picker tests cover cancellation, same-ID validation, stale-tab and quota refusal, unchanged previous/history, in-place restore and reload.

All 20 failures observed when separately running the legacy aggregate's remaining suites were also reproduced on unmodified v55; none became newly failing in the hotfix. This does not replace the explicit focused pass evidence above.

## October 2, 2026: local files and automatic disk backup workflow (v57)

`node test-local-files.cjs` exercises the production UI and an isolated file-system mock. Passed SHA-256 payload verification and tampering/future-schema rejection; meaningful content/project/history dirty detection; separate raw/visible restore sources; exact file readback; denied/revoked folder access without background prompts; quota and close interruptions with earlier versions untouched; opt-in 30-version cleanup; preservation of manual, unrelated and corrupt files; the default no-deletion 500-file stop; unsupported-browser download fallback; nonmutating preview; import as independent copies; project remapping; and visible IndexedDB/permission failures.

This uses mocked browser file handles, not the Windows/Brave native picker. An attempted isolated Chromium headless render could not start because this execution sandbox denies Chromium’s process-singleton socket (`Operation not permitted`). No bypass was attempted. Real native picker permission prompts, OS disk faults, and visual screenshots remain unverified here; browser capability checks and the manual download fallback are implemented.

`node test-local-files-interruptions.cjs` independently asserts the previously found interruption regressions: the disk badge survives navigation, named history dirties the disk backup, pause/resume restores the correct status, a pending auto-backup retries after a canceled save picker, live rotation/point gestures do not get written, Ctrl/Cmd+S works from Home, Close cancels a delayed import preview, import warnings survive subsequent backups, stale project storage is reported, recovery project groups can be loaded, and oversized imported history is rejected without breaking subsequent named saves. Both new suites pass. Focused recovery, null-window persistence, workspace-home, corner-rotation scene, point-undo production and shape-editing suites also pass after integration.

The 35 pre-v57 aggregate suites were run individually: 15 pass, 20 fail. Each of those 20 also fails from an isolated clean v56 `cab151a4105ebb1489a8a6f8241532f5aa2ce288` checkout. These are not a green aggregate run. The first failure is the historical `test-buildings.cjs` harness omitting `seed-v12.js` while iterating current variants. The two v57 suites are registered before existing suites, bringing the runner to 37; no existing suite changed from passing on the v56 baseline to failing in this run.

## October 2, 2026: navigation, layers and whole-building editing (v58)

`node test-building-transform.cjs` passes 17 synthetic cases, including 35 randomized route fixtures and 69 successful shared-renderer parity comparisons. It verifies true unpadded extents, rotated shapes/items, actual route/local stair geometry, bounded service joins, optional annotations, source and cached geometry translation, unchanged local frames/Z/metadata, shared-reference handling, atomic validation and safe partial-floor group rejection.

`node test-keyboard-layers.cjs` tests exact modifier dispatch in 2D/3D, 1/3 navigation with 2 unassigned, text entry isolation, visibility versus active floor, heterogeneous layer selection, hiding/locking, atomic floor/building moves, undo and genuine keyboard canvas focus. `node test-layer-safety.cjs` covers nonmutating drag previews and autosave, one-step history, all interruption paths, stale-building/newer-edit protection, locked context-menu mutations, render-only legacy annotations, route-point deletion behind dialogs, exact save/Tab chords and active-workspace reload retaining layer state.

The persistent layer field is preserved in the initial core capture before workspace restoration; the UI integration loads before workspace-home. No saved plan schema is migrated. New fixture data is synthetic. A known upstream route boolean-clipping exception after a mathematically valid translation is avoided for bounds and rejected by the move UI’s renderer validation before a commit. No unrelated route engine rewrite is included.

The isolated cloud-browser static preview was unavailable; real pixel layout and physical input remain unverified. Static asset/accessibility checks and production-order DOM/storage tests pass. The old aggregate still has the documented baseline harness/expectation failures; v58’s focused release gate is `node scripts/test-v58.cjs` and does not claim an aggregate pass.
## Concrete staircase passage

Stairs now carve only their bounded tread/landing body and configured headroom out of solid concrete fill. Existing per-step, exact-polygon subtraction is shared by render geometry and walkthrough collision, across any floor whose physical volume intersects. Concrete remains under the staircase, beside it, above its finite clearance, and inside gaps of a bent route’s bounding rectangle. This is a derived preview change; no authored floor/room/stair data or persistence schema is changed.

A rotated flight/landing boundary regression found during traversal testing was corrected with a tiny numeric edge tolerance. Smooth stair walking also treats retained concrete below the active staircase’s treads as foot support, while preserving side, headroom and unrelated-floor collisions.

New checks:
- `node test-stair-concrete.cjs`: multilevel overlap, concrete above/below, retained body/sides/headroom, 8,932 rotated-volume probes, concave outlines and holes, nonoverlap, a 0.8 m entry, rotated ascent/descent, obstruction isolation, conventional rectangular stairs and unchanged saved model bytes
- `node test-stair-concrete-scene.cjs`: actual Three.js mesh raycasts with a renderer double for the retained below/side/overhead mass, a bent-path bounding-box gap, wall visibility, cutaway, walkthrough and disposal

No private fixture or user data is included. GPU rendering and physical browser input are not established by these geometry/scene harnesses.

## Doorway threshold correction

The reported doorway was open, but a stair landing stopped 2.5 cm short of the room floor. Added derived physical thresholds inside passable doorway width and wall thickness, trimmed against existing coplanar surfaces. This fills only the missing support rather than overlapping the floor or making an invisible walking bridge. Windows and blocked doors do not gain thresholds, and normal step-height and side/overhead collisions remain active.

`test-door-thresholds.cjs` passes at 0°, 31° and 90° with four movement step sizes in both directions. It reproduces the blocked gap when the threshold is removed, checks sealed/window/narrow/large-gap rejection, prevents a high step bypass, and confirms the generated area is only 0.05 m² in the synthetic 2 m-wide / 2.5 cm-gap fixture. Actual Three.js raycasts in `test-stair-concrete-scene.cjs` verify the threshold is rendered at the correct height and follows slab visibility. The exact private uploaded plan was independently verified in both directions at four motion cadences with unchanged saved bytes; it is not included in public fixtures.

A pre-existing boolean-clipping failure triggered by an exact 90° rotation was reproduced on the baseline and corrected in the bounded-cut math by normalizing derived coordinates to 1e-8 m, below the existing 1e-6 geometry epsilon. Original authored coordinates remain unchanged.

Focused passes: concrete, concrete scene, door thresholds, stair walk contacts, stair cutout volumes, route geometry, route stairs, route v53, stair types, stair detail, polygon rooms, polygon scene, elevation safety, elevation scene, local elevation, height rules, walkthrough, walk scene, walk start, place start, fly scene, authoring3d, authoring3d scene and three scene. `test-fly-mode.cjs` still fails its pre-existing KERN_EXPLORER.active assertion, reproduced on unchanged v57. `test-preview.cjs` passes its geometry sections but retains the existing later UI assertion failure, likewise reproduced on unchanged v57. No full aggregate pass is claimed.


## v58 tiered retention and five-minute cadence

The release includes the approved union of newest 30, seven local calendar-day representatives, Monday/Thursday representatives within 56 local calendar days, and current/prior 11 month representatives. The local timezone is captured, persisted and displayed; overlaps are retained once. Existing explicit policies are preserved and Smart can be applied to an already authorized folder. New verified copies precede cleanup. Unrelated/manual/corrupt/invalid/future records are preserved, and closed-page gaps are never backfilled.

`test-local-files.cjs`, `test-local-files-interruptions.cjs` and `test-retention-calendar.cjs` pass. Tests cover actual mock-folder tier pruning, policy transitions and captured timezone, full weekday/calendar boundaries, UTC offsets, DST, leap-year/month edges, overlapping tiers, and five-minute pending-change scheduling that neither resets on subsequent edits nor fires early when hiding a tab. Forty independent calendar cases pass under UTC, America/New_York, Asia/Tokyo and Pacific/Kiritimati host timezones. The current release gate contains 23 focused suites; this does not alter the historical aggregate-failure disclosure.

## October 3: boundary wall profiles, editable concrete caps and compact backup controls (v59)

`node scripts/test-v59.cjs` is the 29-suite focused release gate. It adds wall-model, wall-editor, actual Three.js wall-mesh, cap-editing, cap-scene and backup-UI coverage to the current v58 gate. This is separate from the historical aggregate, whose unchanged legacy building harness still fails before its older suites complete.

Room wall profiles are optional. Untouched rooms and terraces retain their previous Full/None defaults. The explicit terrace preset creates 1.1 m low walls, adjustable from 0.1–3 m and capped at the room's full height. Stable per-vertex ownership maps Full/Half/None to straight, rounded and chamfered edges; splitting a configured edge inherits its mode and deleting a vertex prunes its override. Shared physical boundaries retain the union of both rooms' wall heights. Windows keep all saved dimensions, render only on affected supported wall portions, and show an incompatibility warning rather than losing data.

`test-wall-profiles.cjs` verifies owner union, low/full collision, open-edge traversal, ordinary/shared door cuts, clipped/restored windows, warnings, malformed metadata rejection, rotation, edge insertion/deletion, clipboard and finite empty geometry. Independent review checked 32,640 physical wall occupancy probes across 120 rotated/elevated owner combinations and 2,052 window occupancy probes. Review findings were fixed with regressions: legacy wide-door height, double-door identity/markers, inward void and crossing-facade exterior-opening geometry, colon-bearing vertex IDs, empty bounds, outdoor window elevation, and bounded window count. Repeated UI warning work is cached by complete floor-data signature, invalidating naturally after edits and undo.

`test-wall-edge-ui.cjs` covers the production script order; zero-mutation hover/selection/dismissal; Full/Half/None; one-step terrace preset and undo; height bounds; right-click, Escape, keyboard and touch edge controls; stale scope; layer/source/stair guards; preserved opening data and visible warning badges; and unaffected point editing. Real Three.js raycasts in `test-wall-profiles-scene.cjs` confirm low/full/open/shared boundaries, looking over a low wall, visibility and cutaway.

`test-concrete-cap-editing.cjs` verifies protected cap selection, explicit Make cap independent, exact geometry/elevation preservation, source/void isolation, one-step undo, type/void/delete operations, copy/move/import/reload and layer locks. `test-concrete-cap-scene.cjs` uses actual Three.js raycasts: picking a cap never selects or exposes a floor handle; linked caps have review-only outlines; independent caps have cap-only handles; canceled elevation edits remain canceled. No cap is detached, converted or removed automatically.

`test-backup-ui.cjs` verifies the compact disk status beside existing save controls, no idle status strip or redundant brand block, actionable warnings only, stable focus, simplified backup panel, one fallback download, compatibility guidance and unchanged cadence/retention behavior. Home card management and cross-floor selection corrections are intentionally separate later work.

These tests use DOM and real Three.js geometry with a renderer double. Cloud-browser visual QA was attempted against the isolated local preview and blocked with ERR_BLOCKED_BY_CLIENT. GPU rendering, physical pointer/touch behavior and full browser layout are not claimed. No private uploaded plan or screenshot was added to source or public assets.


## v60 cross-floor corrections, camera performance and Home cards

Run `node scripts/test-v60.cjs` for the v60 combined 33-suite gate. It includes all v59 wall/cap/concrete and backup/recovery checks plus the four new suites. `test-selection-transform.cjs` has 30 immutable ownership/translation/copy/delete cases. `test-crossfloor-ui.cjs` exercises actual production-order pointer/keyboard handlers for floor-qualified Shift/marquee selection, disabled/visible floors, subset moves, preview isolation, interruption, clipboard and undo. `test-crossfloor-lifecycle.cjs` covers direct legacy selection reconciliation, reload, four clipboard entry paths, protected dependencies, rejected partial rotate/point editing, camera DOM identity and invalidation, and floor creation/removal. `test-home-cards.cjs` exercises archive-backed removal, copy/paste, session history, filtered reorder, persistence/import mapping, capacity and failure guards.

The prior aggregate's historical fixture/expectation failures remain separate; a green focused release gate does not claim the old aggregate is green. Native browser/GPU visual QA is still unverified in this environment. No private uploaded reference images or plan fixtures are included in the release.


## v61 explicit editing scope

`node scripts/test-v61.cjs` was the 34-suite v61 gate. `test-floor-edit-scope.cjs` covers actual floor-row/checkbox clicks, 1/3 keyboard navigation, programmatic activation, production 3D visibility/selection callbacks, mode switching and real storage reload. Saved empty editing scopes stay empty. Disabled floors reject canvas selection, marquee, nudge/delete, drawing, paste, transfer destinations and late 3D authoring completion without changing geometry/history. Floor creation no longer checks its editing box automatically. The 3D integration test uses a renderer double, not GPU drawing.


## v62 exclusive floor navigation

`node scripts/test-v62.cjs` was the 35-suite v62 gate. The updated production-order `test-floor-edit-scope.cjs` verifies normal row/checkbox clicks and plain 1/3 replace editing scope with one destination floor, while only Shift-click adds/removes floors. Same-floor clicks also collapse a multi-floor selection. Eyes, passive viewer focus restoration, 2D/3D mode changes and reload preserve the set, including empty. Background picks and marquee cannot edit disabled floors; navigation clears stale object selections; intentional Shift-enabled cross-floor movement remains atomic and undoable. The 3D callback harness models focus changes caused by hiding a floor and checks those do not alter edit scope. Existing disabled drawing/paste/transfer/late-authoring guards, data recovery and local backup suites remain in the gate. No geometry migration or private assets are included.

`test-floor-navigation-scene.cjs` bundles the actual Three.js scene code with only WebGL rendering replaced. Real raycasts and pointer events verify plain versus Shift floor-label clicks, disabled object picking/room drawing/stair-route placement, exclusive same-floor/different-floor navigation, passive eye focus fallback, show-all/restoration, repeated mode switching and geometry-triggered renderer remounts. This is interaction and scene coverage, not a claim of GPU drawing.


## v63 actual 3D floor selection

The current release gate verifies the corrected real slab/room-label raycast path, persistent editable-floor highlights, whole-floor and multi-floor F framing, sidebar replacement of stale room selection, and ordinary versus Shift floor clicks without hiding other visible floors. Floor-surface selection enables its destination; object and authoring callbacks retain their editing guards. The scene checks use actual Three.js geometry, raycasts and production callbacks with a renderer double; GPU drawing is not claimed. No plan geometry migration or storage schema change is included.

`node scripts/test-v63.cjs` was the v63 focused gate. `test-floor-surface-selection.cjs` checks 28 actual surface/object-picking and F-focus cases. `test-selection-roundtrip-scene.cjs` checks repeated 2D/3D roundtrips and geometry rebuilds for single/multiple floors, single/multiple rooms, cross-floor objects, windows and empty selection. It separately verifies active floor, edit scope, visibility, qualified object references and F bounds; old saved 3D focus/visibility cannot overwrite newer 2D floor choices. Unrelated eye changes and Show all keep the selection target. Explicit navigation reveals a previously hidden destination.


## v64 shared floor-selection controller

`npm run test:release` runs 37 focused suites. The latest plain-click isolation rule supersedes v63 keep-all-visible assertions. One floor transition now owns active, checked/editable and visible state for both sidebars, actual 3D geometry hits, keyboard navigation and mode restoration. The renderer applies that snapshot and emits selection/visibility intents; passive camera callbacks cannot overwrite editor selection.

`test-shared-floor-controller-scene.cjs` uses the production script order and actual Three.js raycasts to verify sidebar/viewport permutations across slabs, walls, labels and concrete caps, actual group/mesh visibility, 2D ghost and active-geometry absence, Shift sets, checkbox state, camera restoration, object/F roundtrips and unchanged plans/history. `test-floor-interrupted-gesture-scene.cjs` verifies that stale pointer-up cannot commit after floor selection or hiding its floor. `test-hidden-floor-authoring-scene.cjs` checks hidden-floor authoring guards. Existing cross-floor selection/clipboard/undo, exact shortcuts, geometry, backup and raw-save recovery suites remain in the gate. These are DOM/scene interaction checks with WebGL drawing replaced; physical browser/GPU QA is not claimed. No saved plan geometry or storage schema is migrated.

Ctrl/Cmd+S now invokes the same configured-folder Back up now operation as the button. `test-backup-shortcut.cjs` covers exact modifiers, repeat/in-flight deduplication, missing-folder/reconnect failures without a download fallback, and manual backup while scheduling stays paused. Save backup remains the explicit local-copy/Save As action.


## October 3: nested rooms and interior door boundaries (v65)

The focused release gate is `node scripts/test-v65.cjs`, combining the 37 v64 controller/backup/geometry suites with four nested-room suites. `test-nested-room-doors.cjs` covers plain and rotated rooms, rounded/concave containment, coincident external facades, sibling-blocked intervals, deep touching rooms, bidirectional traversal at several step sizes, invalid offsets, height separation, windows overlooking lower voids, parent geometry edits/deletion, undo/import and the axis-aligned legacy geometry export. `test-nested-room-geometry.cjs` verifies deterministic nonoverlapping slab/ceiling ownership, lower/raised/shorter/taller bodies and descendant cuts without saved-model mutation.

`test-nested-room-ui.cjs` loads production script order and verifies room ordering, active/ghost hit selection, hidden/locked layers, rectangle/Pen/adjoining creation and cancellation, independent child copy/delete, parent deletion, undo/redo, inspector connection, exact JSON roundtrip, and rejection of invalid width/offset edits. `test-nested-room-scene.cjs` uses actual Three.js raycasts with a renderer double to verify rotated doorway holes, adjacent wall collision geometry/picking ownership, floor and ceiling partitioning, remaining-floor label placement and disposal. A separate independent 12-probe boundary audit passed after the identified width/elevation/window/export corrections.

The source changes are derived geometry only, with no parent-link schema or automatic changes to authored rooms. The latest shared floor controller and configured-folder save correction are preserved. Real browser/GPU rendering remains unverified: Chromium's process-singleton socket was denied in this execution environment. The historical aggregate still includes earlier documented harness/expectation failures; this focused gate does not claim an aggregate pass. No private plan or screenshot is included in the source or deployment.

### Primitive blockout regression coverage

`node test-primitives.cjs` checks all four schema types, invalid/duplicate imports, physical surface placement, floor-relative elevation, transforms, copy/transfer/delete, exact modifier handling, menu-key isolation, field focus/details, Undo and primitive-only Fit/export. `node test-primitives-scene.cjs` uses the actual Three.js meshes, raycasting and TransformControls with only WebGL drawing mocked. It covers shared floor-first/Shift selection, hidden/locked layers, move/scale/rotate, E/toolbar handoff, drag cancellation and walking transitions, no full scene rebuild during drag, one release commit, labels/exploded placement, clipboard after deselection, and 2D/3D roundtrip. `node test-primitives-io.cjs` verifies exact local backup envelope/import copies and visible unsaved shape recovery after browser quota failure. GPU drawing and live browser layout remain unverified in this environment.

The v66 release gate is `npm run test:release` (45 suites). `test-space-lock-editing.cjs` covers saved room lock review, explicit detached-floor unlocking, remaining shaft cache preservation, actual SVG dragging, copy, one-step Undo/Redo, persisted reload and stale/hidden/locked/recovery guards.


## October 3: passage, Bridge, label and wall tools (v67)

`node scripts/test-v67.cjs` is the 57-suite focused release gate: all 45 v66 suites plus four maximum-passage suites, three Bridge suites, three thin-wall suites, corner-label centering and primitive 2D editing. Exact shortcut tests now reflect the explicitly assigned Alt+C, Shift+C and Shift+W combinations.

Maximum-passage tests cover whole and bounded walls, widths over 8 m, split collinear and disjoint boundaries, nested and rotated rooms, existing-opening preservation, Full/Half/None wall profiles, shared vertical clearance, preserved wall bases/lintels, malformed metadata rejection, preview/commit/undo and normal Alt navigation. Actual Three.js raycasts verify the displayed dimensions and event routing.

Bridge tests cover actual floor slabs and endpoint passages, same-elevation validation, short/angled gaps, voids, existing door preservation, bidirectional traversal, floor-qualified wall ownership, solid/overhead/primitive obstructions, cancellation and stale/hidden/locked inputs. Independent review caught and resolved concave width obstructions and repeated IDs across floors: endpoint wall tolerance is restricted to a bounded physical contact strip on the correct floor. Copy/delete, JSON/backup, one-step undo, real pointer events and actual Three.js floor hits are included.

The label suite covers rounded/chamfered corner changes, rotation, tessellation-independent area centroids, concave interior anchors, actual radius drags/cancellation/undo/redo and unchanged manual annotations. Thin walls have 13 model/collision checks, 14 production-order UI checks and six actual Three interaction checks, including quarter-grid transforms, upright yaw, fractional origins, interruptions and a clear narrow passage without rotated-AABB collision. The primitive correction adds 24 checks across all four primitive kinds, including resize history, aligned copies, constrained movement, disk readback, real mesh rebuild and view/reload continuity.

Independent feature and merge reviews found no remaining blocker in the tested scope. GPU rendering is mocked in Three tests, and real browser/physical input is not claimed. Historical aggregate harness/expectation drift remains separate from this focused gate. Private screenshots and plans are excluded from source and deployment. Stair surface-offset and Freight teleport work remain outside this release.

## Rounded-edge clipping recovery

`node scripts/test-v68.cjs` runs the 58-suite release gate, including the saved v67 authoring batch. `test-clipping-robustness.cjs` independently generates two rounded rectangles that trigger the polygon engine’s sweep-line exception. It verifies bounded computation-only retries, exact ordinary results, area-preserving cap partitioning, input immutability, invalid-input rejection, and explicit incomplete height-check warnings. The exact private backup was separately tested outside this repository: production boot, all seven floor checks, three complete preview builds, reload, and unchanged authored plans and backup bytes passed. No private fixture is deployed.


## October 3: consolidated editing and navigation (v69)

`node scripts/test-v69.cjs` adds the current stair-offset, point/outline, render-cache/DOM, primitive workflow and Freight travel suites to the v68 gate. The gate retains clipping recovery, all floor-controller semantics, backup retention and raw-save recovery checks. Private input files remain outside source and deployment.

The stair tests cover positive/negative access-room offsets, four cardinal orientations, rectangular and polygon scene paths, actual walking at both ends, full ascent/descent, exact bounded doorway clearance, low lintels, and derived landing/mesh context. Older conventional shafts without `stairTransition` have the same validated access diagnostics. Authored room and floor data stay unchanged.

Point tests exercise full production event order with one or multiple enabled floors, stable vertex identities through insertion Undo/Redo, current adjoin geometry, nine cancellation paths, unrelated-pointer isolation, correct room contours, and consistent screen-sized controls on camera changes. Camera tests verify that room and wall DOM stays in place while only editing overlays refresh, including dark-theme colors. Layer tests verify stable controls and authoritative checkbox state.

Primitive workflow tests use actual Three meshes and TransformControls with WebGL drawing replaced. They cover contextual W/E/R, metric Move/Scale snapping and Ctrl bypass, Shift rotation snapping, in-place Shift+D copies, interruption/lock/recovery guards, 2D/3D selection continuity, and100 committed edits with bounded history, one live canvas/gizmo and stable active handlers. Freight tests cover real connected stop membership, current room surface heights, physical landing clearance, stale/ambiguous/detached stops, modal input and pointer-lock races, repeated trips and destination floor/camera continuity, without changing plan or Undo data.

`bench-render-session.cjs` reproduces500 committed edits, yielding between edits and sampling post-GC heap, DOM, SVG, stable listeners and Undo. In the combined local CPU/DOM harness, the supplied-plan median was130ms initially and115ms at the end, versus273/275ms before optimization. The synthetic240-room case was68/65ms versus147/141ms. Supplied-plan heap after100/500 edits was79.4/77.8MiB; synthetic was59.8/56.0MiB. DOM/listeners/defs/patterns stayed stable and Undo stayed at80. These are Node/JSDOM measurements, not browser frame rates. Exact final results are retained outside the source tree.

Real browser/GPU QA remains blocked in this execution environment: cloud Chromium refused the local preview URL with `ERR_BLOCKED_BY_CLIENT`, direct headless launch could not create its sandbox socket, and an escalated readiness check failed environment setup. No workaround bypassed those restrictions. Geometry/raycast, full production events, data-preservation checks and prolonged CPU/heap tests remain available. Historical aggregate harness drift is separate from the focused release gate.

Final frozen-source validation: all68 focused release suites passed. Independent integration review cleared the final event-routing, diagnostic and persistence changes, and the production preview bundle matched a fresh build byte-for-byte. The final private-input run verified all3 buildings and18 floors, three complete preview builds, save/reload and unchanged authored plans/original backup bytes. A final500-edit run on the same frozen implementation retained stable DOM/listeners and80 Undo entries.

## C-only Walk crouch (v70)

`node test-walk-crouch.cjs` dispatches keyboard events through production script order and checks the actual Three camera with WebGL drawing mocked. It covers C hold/release, short taps, repeated/uppercase input, W+C movement, Ctrl removal, blur, typing, low-ceiling stand refusal, Walk/Fly/2D transitions, unchanged editor C and unchanged plan/history. Browser-reserved shortcut interception is not claimed.


## Optional crawlspaces and low openings (v71)

The v71 focused gate contains the 69 v70 suites plus seven crawlspace/low-opening suites. Pure model cases cover derived polygon envelopes and excluded holes, selective opt-in, adjustable clearance, minimum upward shifts, linked stair and explicit room/service offsets, known section/overlook/exterior datums, malformed metadata, removal dependencies, preserved stranded children and input immutability. Production-order UI cases cover pure previews, stale and hidden scope, atomic Apply/Undo/Redo, validation during initial load and named restore, exact rollback, independent buildings and capped history.

Cap tests check rotated geometry, exact bounded pockets, retained side/upper mass, low walking clearance, unchanged empty layers and ordinary stair cutouts. Low-opening tests cover model validation, Full/Half/None boundaries, nested rooms, effective dimensions, preservation of ordinary openings, inspector/history and actual Three raycasts. Crouched-start tests use actual camera/collision math with WebGL rendering replaced, including the first frame, saved placement/reset, Fly-to-Walk, blocked targets and unchanged C hold semantics. Real browser/GPU rendering is not claimed.

The existing asynchronous disk-backup interruption test now waits for the observed write operation to finish before checking the same saved status and exact file count; production backup behavior is unchanged. Private plans and screenshots remain outside this repository and its deployment.

Final v71 validation: all 76 focused suites passed. Independent model/UI and bounded-cap/spawn reviews found no remaining blockers. The exact supplied backup passed production boot, all seven active-building floor checks, all three building geometry builds, reload and unchanged source bytes/authored plans outside the repository. A 100-edit stress run with a crawl pocket in a 240-room synthetic building retained stable DOM/listeners and 80 Undo entries; median edit time was 69 ms initially and 56 ms at the end. These are local CPU/DOM measurements, not browser frame rates.

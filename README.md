# Building Planner

A static, browser-local building and floor planner. Existing KERN layouts are preserved as the initial building and 13 legacy archive variants; new buildings have independent plans, views and undo history.

## Interface

- Native HTML dialogs and disclosure menus, shared light/dark tokens, inline form validation and keyboard navigation
- Responsive floor navigation, optional phone inspector and persistent local-save failure recovery
- Current floor PNG/SVG, building/all-buildings JSON and a current-model vertical-stack preview/PNG
- Top-right 2D / 3D modes use the same workspace: 3D floor visibility/navigation on the left, read-only scene in the middle, display controls on the right
- Locally bundled Three.js r180 with per-building camera restoration, exploded spacing, cutaway walls, ground grid and PNG snapshots; returning to 2D keeps the editor view/selection/tool

The UI stays plain JavaScript and SVG. The design system uses shadcn-style composable tokens and interaction patterns without a React/Tailwind migration. No cloud sync, backend or additional account access is introduced.

## Storage and geometry

Existing `kern-buildings-v1`, legacy migration backups and JSON schemas are unchanged. Import adds copies. The 3D and drawing previews use read-only snapshots; they never modify floor elevations or room footprints. They are concept geometry: no roofs, structural engineering or traversal certification. Unspecified wall heights default to 3 m and slabs to 0.3 m. Required stair openings and calculated treads/landings are shown.

## Compact functional copy and authoring

Use the building menu's **Open compact revision as copy** to add V12. It never replaces the current building or legacy saves. V11 stays the initial layout. V12 reallocates part of B1's garage/loading space to storage, adds medical at the lower clean-side landing, gives B2 test/observation and research support independent circulation, and reuses B3's existing plant for ordinary electrical distribution. Upper floor room and door geometry is retained. Vehicle turning and casualty traversal have not been tested in a game.

**Place** (`B`) opens a categorized palette with visual previews of nine editable, dimensioned outlines, text annotations and HVAC items. Scroll horizontally with the mouse wheel inside an overflowing preview/category strip. Drag a preview to the plan for a live metric footprint and drop placement, or click a preview then click/tap the plan. Escape cancels a palette drag. No equipment or furniture is placed in the new base. Legacy Operations zone labels and floor annotations can be selected, edited, moved, copied and deleted. They gain persistent IDs on edit or portable JSON export; selecting an old label leaves the old document unchanged. Overall width/depth guides measure the actual room extents, including gaps in irregular floors, independently of annotation positions.

Ctrl/Cmd+C, X and V copy, cut and paste selected objects inside the editor. The inspector can move a selection to another floor. Internal connections follow copied rooms; links to unselected rooms are reported and omitted. Linked stairs copy as a complete stack with new IDs; **Edit connected floors** changes their destinations. Native text-field shortcuts keep their normal behavior. Every transfer is undoable. The clipboard is retained for this app session, rather than shared through the operating system.

Selection boxes exclude doors. Shift-drag toggles enclosed objects. Ctrl/Cmd-drag only removes enclosed selected objects: objects outside the box stay selected, unselected objects are never added, and an empty box changes nothing. Doors remain available through direct click/Shift-click selection.

Straight and clockwise/counterclockwise spiral stairs use calculated metric treads, risers, landings, shaft openings and headroom checks. Straight stacks connect two floors; long rises add intermediate landings. Existing switchback stairs remain supported. Scissor stairs are a different geometry and are not implemented. Fit does not establish access, door swing, handrail, structural, code or runtime compliance.

The inspector's **HVAC / services** disclosure controls the separate overlay and service editing mode on each floor. Outside service editing it is faint and dashed. Choose an HVAC item in the shared Place palette. Clicking a route preview activates drag-to-draw (Shift adds an elbow); dropping it directly creates an editable 2 m starter segment. Hatches/vents support direct drop or click placement. Edit width, clear height, bottom elevation relative to ground, overhead/underfloor location and utility/player/creature use in the inspector. A visible route can also enter service editing from Select without changing rooms. V12 includes two small provisional route proposals and no terminals. They are allowances, not a validated network; the planned player allowance is 0.80 m wide by 1.50 m clear. Connections are initially collapsed behind a floor/room count disclosure, retaining the existing edit/delete actions.

## Development

The static deployment directory is `dist`. Install pinned dependencies with `npm ci`. Rebuild the local Three.js bundle after editing `src/preview3d.js` with `npm run build:preview`. It has no runtime CDN dependency. Preserve the Three.js license in `dist/vendor`.

Start a local server and run the complete current regression suite:

```
npm start
# In another terminal:
npm test
```

For actual Windows Chrome rendering/input checks while the server is running:

```
npm run test:browser
```

The browser runner uses an isolated headless Chrome profile, localhost DevTools and software WebGL; it writes screenshots, JSON results and real downloaded exports to ignored `qa/`. Physical touch and hardware GPU behavior are untested. See `TESTING.md` for the current evidence and the known historical Python shell-test failure.

## Split levels and local steps

The selection inspector exposes floor surface elevation, independent outside ground, and room surface/relative offset. Moving a floor preserves explicit room offsets. Room clear height remains independent. In focused-floor 3D, drag the amber vertical handle on a selected room or local stair endpoint; with no room selected, the handle edits the whole floor. Elevations snap to 0.25 m; hold Ctrl for free movement. A live height and change-in-height dimension are shown. Escape cancels the drag.

Draw **Local steps** in 2D, then choose the start/end surfaces in the selection inspector. Endpoints can follow outside ground, this floor, a room, or an unlinked height. The stair endpoint's 3D handle previews the rise and step count and updates its linked surface on release. Floor, room and stair changes are undoable. Lowered courtyards gain an explicit walking surface. Plan checks flag inadequate run/width, missing or detached links, threshold differences and height/headroom conflicts. These are concept checks, not building-code certification.

Run `npm run test:elevation` for focused split-level interaction, geometry, walking, interruption and validation coverage.

## Corner rotation and geometry snapping

Press E, click a corner to mark the pivot, then drag another corner to rotate around it. A click on another corner changes the pivot without rotating. Shift uses absolute 5° angles. This works in 2D and focused-floor 3D; connected structural stairs retain their constraints. The outer rotation arcs in Select remain the quick center-rotation control.

Grid snapping is the default. Hold Ctrl to bypass snapping during movement, resizing and drawing. Ctrl+Shift aligns room and point movement or rectangle resizing to nearby geometry, with cyan guides. Alt keeps its camera-navigation and centered-resize roles. Ctrl-drag empty space still removes items from a selection. Room right-click menus now expose a Room type picker in both 2D and 3D, preserving locks and undo.

## 3D authoring and transform feedback

2D and focused-floor 3D share the same top toolbar and shortcuts. Draw room (R), Stairs (S), Local steps and Edge steps work in 3D; tools not yet supported there remain visible but disabled. Edge-step width is in the inspector. For edge steps, select a raised/lowered room, choose the tool, and drag outward from a straight grid-aligned edge. The clicked edge sets facing; the width field controls the span, and the outward drag sets the run. A live tread preview links the source room to the neighboring room or outside ground. It commits once on release and is undoable. Equal-height endpoints are rejected. Oblique/curved edge authoring is not supported.

Local steps also supports a free rectangular footprint in 3D. Draw from one surface to a different-height surface. The inspector retains Start/End surface selectors, precise heights and a Facing control. Rotation shows dashed radial/arc guides and a live degree label near the pointer in 2D and 3D.

The separate in-canvas 3D tool row has been removed. Full stairs drawn in 3D opens the same destination-floor dialog as 2D. Edge steps also works in 2D. R/E/S/V retain their shared meanings, and the command palette reflects supported 3D tools. Creation tools return to Select after one valid placement, with the new object selected and editable. Invalid placement keeps the tool active; multi-point paths finish before leaving creation mode.

## Selection, navigation and point transforms

Tab switches 2D/3D (close an open dialog first), preserving room selections. F frames the 3D selection. The external ground datum and grid stay at 0 m while floor surfaces move independently. Alt-left drag orbits in 3D and pans in 2D; Alt-right drag horizontally zooms in either view (right in, left out; vertical movement has no effect); Alt-middle remains pan. Resize handles take priority over navigation. Shift locks resize proportions; Alt centers resizing; both can be combined. Selection width/depth readouts update during resizing.

In Edit points, drag a marquee to select vertices; Shift adds and Ctrl subtracts. Drag a selected vertex or the group box to move points together, use the cyan outer frame’s square handles to resize, or the amber rotation handle to rotate them. Unselected vertices remain fixed, and invalid crossing polygons are rejected. Corner-radius knobs stay 28 screen pixels from their vertex; only movement along the inward bisector changes radius. Double-click the knob to reset it to zero.

Shift+S selects Local steps; Shift+E selects Edge steps. D explicitly selects a door and W a window. Tool cursors and stair-mode badges identify the active operation.

## Brutalist courtyard concept

The Building menu's **Open courtyard concept as a copy** imports an independent 44 × 45 m sketch-based plan. It preserves existing browser buildings and can be opened repeatedly as editable copies. Its raised +1.2 m lobby, linked garden flights and polygonal landings lead to a +6 m ring and inward +10.8 m crown route; the control chamber is entered from above. The garage remains an allowance. Curved entrance portals, ceiling oculi, guards and structural supports are noted but not fully modeled.

Rotated rooms retain an oriented selection frame and resize along their local axes in both 2D and 3D. Shift preserves proportions, Alt resizes around the center, and Ctrl bypasses the local grid.

## Command search, door defaults and batch types

**Commands** or Ctrl/Cmd+/ opens searchable commands and settings; Ctrl/Cmd+K is also supported. Search “default door width” to set single and double door clear widths for future placements. These browser-local preferences apply to rectangular and polygonal walls in 2D and 3D, without resizing existing openings. C always enters the selected door/passage connection mode, even after placing windows with W.

Multi-selection exposes compatible **Change selected types** fields for rooms, openings, outline items, service routes and service terminals. Mixed selections expose a separate field for each compatible group. Each change is one undoable operation, retains selection and dimensions, and rejects the whole change if a protected type or opening constraint would be broken. Room/stair links remain protected.

Dropdowns, context menus, text fields and buttons keep their focus. Rebuilt inspectors restore the same logical field; an open search can be canceled without losing an unfinished text draft. Tab retains native control navigation when a control or menu has focus, and switches 2D/3D when used from the canvas.

## Bounded stair cutouts (v54)

Wall, slab and ceiling openings now follow each actual tread and landing polygon and its own elevation. They remove only the rendered stair body plus the headroom above that surface, rather than projecting a route's entire footprint through a floor or service zone. Gaps inside a bent route's bounding box, supporting material below stairs, higher ceilings beyond headroom and unrelated walls remain intact. Old local-step doorway extensions are limited to the explicitly linked room edge and endpoint height.

Select editable stairs and use **Cutout headroom · m** in the inspector. The default is 2.2 m above each step/landing; the supported range is 0.5–5 m, with a warning below the 2.1 m concept-design minimum. This is a modeling control, not a building-code compliance check. Clearance warnings use the same configured height. The optional value is saved with the route, survives export/import, and is one undoable edit. Existing saved plans need no migration.


## Corner windows and corner styles

New exterior windows follow the room perimeter, including square bends, rounded corners and chamfers. Choose Window, hover any exposed wall or corner, and click; total width is measured along the wall. Select an existing exterior window and enable **Follow corners** to convert it. Drag the window around its perimeter; width, sill, height and the number of panes remain editable. A window is rejected if any leg overlaps a neighboring room or another opening. Existing straight windows and saved round corners keep their prior geometry.

Select a room and use **Edit points**, then click a corner. **Corner style** offers Square, Rounded and Chamfer (straight cut). The chamfer dimension is the cutback measured along each adjoining edge. The size is clamped before adjacent corners meet. Multi-selected corners can be changed together, and changes/dragging remain undoable.

For a tall room, select its source room and edit **Room clear height · m**. This is measured upward from the room's surface elevation; **Use floor default** removes its override. Clear-height diagram labels now reflect the actual numeric value. Linked upper-level voids and solid caps retain their intentional types; the inspector explains those linked footprints rather than treating a solid cap as the room interior.

Walking now follows the highest reachable stair/floor support without being pinned beneath a rising flight by retained flooring. Active stair-contact masks keep under-tread remnants from snagging the walker while preserving real overhead and side obstacles. The visible, height-bounded stair cutouts are unchanged.

## Protected recovery and backups

A malformed building no longer replaces the visible workspace with a sample. The planner shows every recoverable building, marks unreadable records explicitly, and can display a matching previous building snapshot read-only. In recovery mode, collection, workspace/project metadata, and version history remain protected from writes. The original current/previous records are retained unchanged.

When saving is blocked or fails, either JSON export action downloads a `kern-storage-recovery` version-1 bundle. Its `raw` object preserves exact browser-storage strings, `latestRaw` records a new read, `loadedBaseline` retains the collection opened by the tab, and `visibleWorkspace` preserves the in-memory view separately. `readErrors` identifies any records that could not be read. Recovery import only adds independent copies when the original collection validates and the visible workspace has no conflicting content. Invalid or divergent saved/unsaved records require review; import never silently chooses an older copy or a placeholder.

Every collection write validates first. Camera, selection, and active-tab changes no longer rotate the previous document checkpoint. Polygon validation uses the same representable world extent as the editor's bounded origin plus dimensions without changing saved coordinates. Repeated door nudges retain at most 80 undo entries.

The recovery warning also offers **Restore recovered collection…** for a reviewed, valid full-collection JSON. It requires the same complete building-ID set, downloads the original raw backup, asks for confirmation, checks that storage has not changed since opening, and replaces only the current collection. It never resets the previous snapshot or history. Null window positions are never automatically repaired. Window edits with no valid grid position now reject atomically; use Ctrl for an intentional free position.

## Local files and automatic disk backups (v57–v58)

Open **Local files & backups** from Home, File, or the persistent disk-status button. **Save a local copy** (Ctrl/Cmd+S) uses the browser’s save picker where available and verifies the written file by reading it back. **Download a copy** works without folder access; the planner reports a download request, because browser downloads cannot be verified by the page. Existing JSON exports remain available.

**Choose folder & enable** requests read/write access to one user-selected folder. On supported secure desktop browsers, including compatible Chromium configurations, pending finished edits are backed up on a five-minute timer while the page is open. Later edits do not restart that timer, and hiding the tab does not force an early write. Initial folder verification and manual Back up now happen immediately. This is separate from browser storage. The folder handle can be remembered in IndexedDB, but its permission may need reconnecting after a restart. Clearing browser data may forget the handle; the files already on disk remain available through the file picker. A denied or unsupported picker leaves manual downloads available.

The new default is **Smart retention**: keep the union of the newest 30 backups, the last backup for each of the last seven local calendar days (including today), Monday/Thursday backups within 56 local calendar days, and the last backup in each of the current and previous 11 calendar months. One file can satisfy several tiers. Missed days are not backfilled. The timezone is captured from the browser when enabling/applying the policy, stored with the policy and each new file, and displayed in the dialog.

Existing explicit Keep all, newest 30 or newest 100 settings remain unchanged. To upgrade an existing folder, select Smart and use **Apply smart retention**; reselecting the folder is unnecessary. A fresh backup must close and pass exact readback plus SHA-256 verification before cleanup. Only correctly named, integrity-verified automatic backups outside every retention tier can be removed. Manual, unrelated, incomplete/corrupt, invalid-timestamp and future-timestamp files are preserved. New filenames are unique and previous files are not overwritten. Keep all retains its visible 500-file safety stop.

Each `kern-local-backup` version-1 file contains the full building collection and Archive, in-memory project organization, available exact browser records/history, and a recovery bundle when browser saving is blocked. Loading validates file integrity, offers separate saved/previous/unsaved recovery sources where they differ, and previews selectable buildings/floors without altering the editor. Recovery placeholders cannot be imported. Selected buildings become independent copies; custom building properties are retained. Project groups and history can be restored for the copies, and Archive import is opt-in. Metadata/history failures are reported separately; oversized history is left in the source file rather than filling the browser’s history budget. Imported files and existing buildings are never overwritten.

The disk badge distinguishes pending, writing, verified, paused and failed backups. An unfinished edit is not automatically captured. Permission loss, disk failure, incomplete readback and unavailable handle storage are visible. Closing while an enabled disk backup is pending requests the browser’s leave-page warning. Browser restrictions may suppress that warning: wait for **Disk backup verified** before closing. A closed page cannot continue backing up, and no zero-loss guarantee is possible.

## Floor navigation, layers and building moves (v58)

Press **1** to edit the floor below or **3** for the floor above. **2** is unassigned. Shortcuts match their full modifier combination: **Shift+D** clears selection, plain **C** connects, and unassigned **Shift+C** does not connect. **Shift+S** and **Shift+E** retain local/edge steps; Ctrl/Cmd+S and Ctrl/Cmd+Alt+S remain separate file/history commands. Plain Tab on the canvas switches 2D/3D; Shift+Tab keeps backward keyboard focus. Text inputs and dialogs retain their own keyboard behavior. A viewport outline indicates genuine keyboard focus rather than any last keypress.

The 2D floor sidebar separates visibility (eye), the active editing floor (row), and a floor movement group (checkbox or Shift-click row). Multiple floors can remain visible. Click an exposed ghost object to activate its floor and select it. **Layers** lists the active floor’s rooms, stairs, openings, symbols, services and annotations; Shift-click adds/removes objects. Search, hide-in-2D and lock controls are per-building view settings. Locked objects cannot be edited through stale inspectors or context menus. Object selection is floor-scoped; floor groups and the whole building have their own cross-floor move operation.

**Building footprint** reports unpadded world XY dimensions across all floors, including hidden geometry, rotated/rounded room contours, actual stair flights and landings, service/item footprints and modeled site approaches. Labels and decorative strokes do not inflate these dimensions. **Move building** translates all authored geometry in one undo step while preserving heights, links and relative layouts. Floor groups use the same atomic operation. A partial group is rejected if it would detach a linked stair/source footprint or shared building-wide geometry; the message identifies the required floors. Dragging the floor-group outline previews without changing saved data; completion commits once, and interruption cancels safely.

Original coordinates remain subject to import validation; excessive or non-finite moves are rejected. A renderer-failing stair proposal is rejected before saving. These are model-world dimensions, not viewport dimensions or structural/construction certification.

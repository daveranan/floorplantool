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

Open **Local files & backups** from Home, File, or the persistent disk-status button. **Ctrl/Cmd+S** runs **Back up now** in the configured backup folder. It asks for setup or reconnect when needed and never falls back to a Save As dialog or download. **Save backup… / Save a local copy** remains the explicit save-picker action and verifies the written file by reading it back. **Download a copy** works without folder access; the planner reports a download request, because browser downloads cannot be verified by the page. Existing JSON exports remain available.

**Choose folder & enable** requests read/write access to one user-selected folder. On supported secure desktop browsers, including compatible Chromium configurations, pending finished edits are backed up on a five-minute timer while the page is open. Later edits do not restart that timer, and hiding the tab does not force an early write. Initial folder verification and manual Back up now happen immediately. This is separate from browser storage. The folder handle can be remembered in IndexedDB, but its permission may need reconnecting after a restart. Clearing browser data may forget the handle; the files already on disk remain available through the file picker. A denied or unsupported picker leaves manual downloads available.

The new default is **Smart retention**: keep the union of the newest 30 backups, the last backup for each of the last seven local calendar days (including today), Monday/Thursday backups within 56 local calendar days, and the last backup in each of the current and previous 11 calendar months. One file can satisfy several tiers. Missed days are not backfilled. The timezone is captured from the browser when enabling/applying the policy, stored with the policy and each new file, and displayed in the dialog.

Existing explicit Keep all, newest 30 or newest 100 settings remain unchanged. To upgrade an existing folder, select Smart and use **Apply smart retention**; reselecting the folder is unnecessary. A fresh backup must close and pass exact readback plus SHA-256 verification before cleanup. Only correctly named, integrity-verified automatic backups outside every retention tier can be removed. Manual, unrelated, incomplete/corrupt, invalid-timestamp and future-timestamp files are preserved. New filenames are unique and previous files are not overwritten. Keep all retains its visible 500-file safety stop.

Each `kern-local-backup` version-1 file contains the full building collection and Archive, in-memory project organization, available exact browser records/history, and a recovery bundle when browser saving is blocked. Loading validates file integrity, offers separate saved/previous/unsaved recovery sources where they differ, and previews selectable buildings/floors without altering the editor. Recovery placeholders cannot be imported. Selected buildings become independent copies; custom building properties are retained. Project groups and history can be restored for the copies, and Archive import is opt-in. Metadata/history failures are reported separately; oversized history is left in the source file rather than filling the browser’s history budget. Imported files and existing buildings are never overwritten.

The disk badge distinguishes pending, writing, verified, paused and failed backups. An unfinished edit is not automatically captured. Permission loss, disk failure, incomplete readback and unavailable handle storage are visible. Closing while an enabled disk backup is pending requests the browser’s leave-page warning. Browser restrictions may suppress that warning: wait for **Disk backup verified** before closing. A closed page cannot continue backing up, and no zero-loss guarantee is possible.

## Floor navigation and cross-floor object editing (v60)

Press **1** for the floor below or **3** for the floor above; **2** is unassigned. Shortcuts match their complete modifier combination: **Shift+D** clears all selection, plain **C** connects, and unassigned **Shift+C** does not connect. **Shift+S** and **Shift+E** retain local/edge steps; Ctrl/Cmd+S and Ctrl/Cmd+Alt+S remain separate file/history commands. Plain Tab on the canvas switches 2D/3D; Shift+Tab keeps native backward focus. Text inputs and dialogs retain their own keyboard behavior.

The same floor selection controls drive 2D and 3D. A normal click on a floor row, checkbox, or actual 3D floor chooses that floor as active, checked, editable and visible, hiding and unchecking the others. Plain 1/3 navigation does the same. Shift-click adds or removes floors from the shared visible/editable set. If the active floor is removed, a remaining selected floor becomes active. Shift can remove the final floor; the empty scope stays empty. Eyes and Show all inspect visibility without changing the editing set; the next floor selection replaces that inspection state. Hidden floors reject drawing and pasting. Mode switches retain the floor and object selections.

In 3D, selected floors keep their blue outlines and F frames the selected floor set or objects. Click a floor to choose it, then click its rooms or openings to edit individual objects; protected caps keep their explicit independence controls. The old building footprint/move panel and editor layout dropdown remain removed; building switching and organization live in Home.

Shift-click objects across enabled visible floors, or drag a selection rectangle across them, then move just that selection. References include floor, object kind and ID, so repeated room names/IDs on different floors remain distinct. Drag previews move outlines without mutating or saving the model; release validates and commits one undo step. Arrow keys nudge, Ctrl/Cmd+C/X/V copies/cuts/pastes on original floors, and Delete removes the selected objects. Existing single-floor editing remains available. Rotate (E) turns the selected objects together around their combined center, including selections on multiple enabled floors. Point editing works on one room at a time, even when several floors are enabled; Finish points returns to object selection across floors.

Linked stair/source footprints and their owned annotations, openings and caches move together. The inspector shows included linked objects. Independent hidden/locked dependencies block the edit; unowned site geometry and disconnected structures stay fixed. Boundary openings and stair endpoint contacts can require review after a partial move, and the operation reports this. Copying a source that owns singleton courtyard/operations site data is refused before cutting, avoiding overwrite or an unpasteable cut. Paste preserves source room heights and reports detached external endpoint/datum links where needed.

Camera-only pan/zoom updates the SVG viewBox instead of rebuilding the scene. Geometry-changing edits and undo invalidate that fast path. A 106-room DOM benchmark reduced eight pan updates from about 346 ms to 6 ms and eight zoom updates from about 312 ms to 4 ms; these are CPU test measurements, not GPU/browser frame rates.

### Boundary walls and concrete caps

Select a room, then use **Boundary walls** to set all edges or apply **Terrace with low walls**. Half walls start at 1.1 m; their height is editable. Double-click the room to edit points, hover an edge and right-click for **Full / Half / None**. The inspector edge list provides the same controls by keyboard or touch. Each room owns its side of a shared boundary, so a neighbor's full wall remains if only one side is set to None. Incompatible existing openings are preserved and flagged for review.

On L2, select the linked concrete cap in **Layers** or 3D, then choose **Make cap independent**. This preserves its position, shape and elevation, without changing Operations or its linked void. You can then change its room type or delete it normally. Undo restores the link; loading a building never alters the cap automatically.

### Home building cards (v60)

Home cards support Copy/Paste, Duplicate, recoverable Remove, and drag ordering. Removed cards keep a complete Archive snapshot and can be restored through Home Archive; existing duplicate buildings are not deduplicated. Home Undo/Redo tracks up to 20 card actions separately from editor geometry history. Filtered ordering is persistent, and accessible Move earlier/later menu actions provide the same control. Backup/import includes that order and rich archive snapshots. Stale data, quota errors, canceled drags and recovery locks stop writes safely.


### Rooms inside rooms (v65)

Draw a room inside a larger room normally, then use **Door (D)** on the inner wall to connect it to the surrounding space. The same workflow works for polygon and rotated rooms, including a room tucked against an outer wall. Inner rooms stay independently selectable, editable and deletable; deleting the surrounding room does not delete them. Proper containment is allowed, while partial overlaps still appear in Checks.

Nested floors and ceilings use each room's own elevation and height. A lower inner room cuts the obstructing surrounding floor, and a taller inner room cuts the ceiling it crosses. Door positions and widths must fit the actual clear wall; edits that would detach the opening are rejected. Existing plan coordinates and room order are preserved.

### Floor-owned blockout shapes

Use **Add shape** or **Shift+A** while the pointer is over the plan or 3D view, then choose **Cube**, **Cylinder**, **Sphere**, or **Hemisphere**. A shape is added once on the active editable floor and selected. In 3D it rests against the physical surface under the pointer, with the active floor plane as a fallback. Shape elevation is relative to its floor, so raising that floor carries its shapes with it. Floor visibility and layer locks apply in both views.

Choose **Move**, **Size**, or **Rotate** in the shape inspector. With one editable 3D shape selected, **W** selects Move, **E** Rotate, and **R** Scale. Move uses the current grid from the starting position, Scale uses metric grid dimensions, and **Ctrl** temporarily allows free movement or scaling. Hold **Shift** during a rotation drag for 5° increments. **Shift+D** duplicates a 3D shape-only selection in place; other contexts retain deselect. Drag an axis/handle, or enter exact position, dimensions, turn and tilt values. Hemisphere orientation can be changed with the tilt fields or rotation gizmo. **Escape** cancels a drag; releasing it records one Undo step. **Copy**, **Duplicate**, paste and Delete use the existing selection history. These are independent blockout solids and markers; they do not create rooms, cut walls, or simulate lights.

Shapes appear in their floor's layer list and 2D footprint. All geometry, orientation and colours travel with the building's saved plan and local backup/import copies. A primitive-only floor can be fitted and exported without a room. Browser and disk failures remain visible through the existing backup status.

A room’s saved alignment lock is separate from its connections. Select it and choose **Unlock space** in the inspector. If it still belongs to a shaft, **Detach this floor and unlock** releases only that floor. One Undo restores its prior lock and links.


### Maximum passages, bridges and thin walls (v67)

Use **Alt+C**, or hold Alt while connecting with C, to preview the largest clear open passage on the chosen shared wall. It respects existing openings, wall profiles, room heights and other wall owners; one edit commits the cut with no door leaf. Ordinary C retains its normal connection tool.

Use **Shift+C / Bridge** to click two room floors across one gap. Width is adjustable from 1–8 m. Both ends must be on the same floor and elevation; use Local steps for a height difference. A bridge is a real, selectable floor slab with clear endpoint openings where needed, including over a void. It can be copied, edited, deleted and undone normally. Hidden/locked endpoints and obstructed routes cannot be committed.

Use **Shift+W / Thin wall** to draw a separate upright wall. Thickness defaults to 0.25 m and steps through 0.5, 0.75 and 1 m; dimensions and movement use quarter-metre increments. Its plan handles and 3D gizmo edit the same floor-owned object, and walkthrough collision follows its actual rotated footprint. It does not alter room topology.

Rounded and chamfered corners keep room labels at the underlying footprint's center while it remains inside. Concave rooms use a safe interior fallback; existing manually placed annotations remain untouched. Primitive 2D handles now commit resizing, primitive-only duplicate/paste stays at the original position, and holding Shift after starting a primitive drag constrains it to one plan axis.


### Connected stair surface offsets

Conventional stair landings follow the actual surfaces of their connected access rooms, including positive and negative offsets from each floor. Moving an access room’s surface updates the calculated stair and doorway clearance. The stair inspector shows that landing height. Rooms connected to one landing must agree on their surface height; conflicting heights are flagged for local steps or separate stairs. Authored room coordinates and floor datums are preserved.

Point selection keeps the same corners through insertion Undo/Redo, and adjoining-room handles follow the current edge. Rounded and rotated room outlines follow their actual contour. Zoom refreshes editor handles at a consistent screen size without rebuilding the room drawing.


### Freight lift travel

In Walk mode, enter a connected Freight/lift room and press **E** or use its lift button. Choose a connected floor to arrive immediately at that room’s actual surface height, keeping your facing direction. Unconnected or obstructed stops are unavailable. Escape closes the floor list and returns to walking; Fly retains E for upward movement. Lift travel changes your view and position, not the building geometry.

## Walk crouch controls (v70)

Hold **C** to crouch in Walk mode; release it to stand when there is enough headroom. C works alongside WASD. Ctrl no longer controls crouching, and brief taps do not latch the crouch. The editor’s C shortcut and Fly controls are unchanged.


## Optional crawlspace layers (v71)

Choose a main floor and use **Add crawlspace** in its floor properties. The settings preview shows the new layer, the minimum upward shifts of higher floors, affected stairs and any conflicts before one undoable Apply. The default is 1.50 m clear; it is adjustable. The layer starts empty, with an inherited boundary from ordinary enclosed rooms below. Tall halls, voids, open terraces, solid fill and shafts create visible excluded gaps. Draw rooms and corridors inside that boundary; only those authored pockets cut the host ceiling mass. Shrinking or deleting a host preserves existing child geometry and reports stranded areas.

The indented crawlspace row has its own editing and visibility state. **Show / Hide** only changes the view. Removal is available only when the layer is empty and unreferenced, and keeps upper floors at their current elevations; it does not compress the building. Crawlspace elevation follows its host ceiling and slab. Use settings or Heights to preview height changes.

Choose **Low door** or **Low passage** from the connection type controls. New low openings default to 0.80 m wide and 1.40 m clear, and their inspector reports the actual shared clearance. Half-height or absent walls may allow standing over the opening and are flagged. **Walk from here**, saved starts, reset and Fly-to-Walk can start crouched when standing clearance is unavailable. Continue holding C to crouch; releasing it stands only when there is room.

### Small-shape 2D dragging

Drag the body of a selected blockout shape to move it. The eight visible edge/corner handles still resize it. On small selections, their invisible hit areas extend outward and leave the middle of the shape free for movement, including when zoomed out or using coarse-pointer targeting.

## Shared properties for multiple selected objects (v73)

Select rooms or other objects together in the plan, Layers, or 3D. The inspector now shows their common values. A gray dash marks mixed values; leaving a field untouched preserves every object's original value. Typing a value changes only the selected compatible objects named by that field's count, with one Undo for the complete edit.

For garages and other dropped rooms, edit **Room surfaces → Offset from own floor** to set all selected room offsets together. Each floor remains its own datum, including selections spanning enabled floors. **Absolute surface elevation** deliberately sets one world elevation. **Move selection / group actions** instead translates the group and preserves spacing; the old overall group-size controls are explicitly labeled as group bounds.

Shared properties cover room labels/types/dimensions/positions, surfaces/heights/defaults/entrances, whole-room corners and boundary-wall settings; opening labels/types/dimensions/offsets, windows and low-opening presets; shape and thin-wall dimensions/elevation/orientation/colour; outline item types and dimensions; service route/terminal sizes and categories; annotations; connected-stair type/direction/arrival/handedness and route/local-stair scalar properties. Matching subsets have explicit counts. Stair landing elevations and linked endpoints keep their source-surface ownership. Per-point/per-edge selection, route topology, connected-floor membership, floor/crawlspace configuration and ownership changes remain in their dedicated editors.

A bulk edit uses a cloned, fully validated proposal, checks selected and changed linked objects for floor/layer/model locks, rejects stale inspector drafts and storage conflicts, and commits once. Invalid dimensions or openings never leave a partially edited selection. Thin walls retain their quarter-metre rules. On enabled floors, Shift-clicking a 3D shape adds/removes the object without changing floor visibility or edit scope; explicit floor-selection controls retain their existing behavior.

## Ramp paths

The existing **Stair path** tool now offers **Path surface → Stair / Ramp**, both before drawing and in the selected path inspector. Set **Width** to 8 m for a broad garage ramp. Existing paths can switch surfaces without losing their route points, endpoint links, per-leg widths or authored landing outlines; the choice participates in ordinary Undo/Redo, copies, JSON imports and local backups. Omitted surface values remain stairs.

Ramp runs are continuous, full-width slabs. Automatic endpoint aprons are 0.60 m deep; a full-width right-angle turn has a square landing, rather than stair-style triangular join extensions. The inspector shows run length and maximum grade. A grade over 20% is an advisory to review vehicle clearance, not a code limit or a blocked edit. Tight/reversing routes and incompatible custom landing edges report the geometry change needed; use separated turn points for a U-turn. Start/end surface links resolve the actual selected room elevations and offsets.

3D, live route previews, walking and concrete/wall/floor openings use the same planar slopes. Cutouts end at the configured headroom above each local ramp surface, retaining mass underneath, beside and above them. Walk remains a person-sized concept preview; vehicle turning radii, breakover clearance, structural design and code compliance are not certified.

### 3D object bounds and dimensions

Select one blockout shape or standalone thin wall in 3D to show its oriented bounding box, six face sizing handles, and live width/depth/height measurements. Drag a face handle to resize on that object's local axis while the opposite face stays fixed. The controls follow rotation and tilt. Grid snapping applies to size; hold Ctrl for free sizing. Thin walls retain their 0.25 m size rules and allowed thicknesses.

Small objects use screen-spaced handles with leaders back to their faces, keeping the object center available for selection and the W/E/R gizmos. Nearly end-on axis handles hide until the camera is angled enough for a stable drag. Escape, pointer cancellation, mode/floor changes and Walk entry restore the original geometry; a completed drag saves as one Undo step. Dimensions follow the live preview; hidden or locked selections hide the controls. Multiple shapes use the shared group controls below.

### Bulk field focus and blur safety

Multi-object property edits now complete their model transaction before repainting the inspector after the native change/blur event finishes. Replacing a focused inspector control cannot trigger another property edit or recursively rebuild its parent. Untouched drafts survive an ordinary redraw, Escape discards them, invalid edits reset to the saved value, and switching fields keeps the newly focused field usable.

### Shared 3D gizmo for several shapes

Shift-select two or more blockout shapes or thin walls in 3D to use a shared gizmo at their selection center. W moves them together, E rotates their positions and orientations around that center, and R uniformly scales their dimensions and spacing. The bulk inspector has the same mode buttons. Group scaling uses the center handle only: drag right/up to enlarge or left/down to shrink, keeping proportions even when selected objects have different rotations; single-object selection restores ordinary axis scaling and face handles.

Move snapping follows the grid. Uniform-scale snapping applies to the change in the group's longest dimension; Ctrl allows free movement/scaling. Shift snaps rotation to 5 degrees. A group containing thin walls rotates only around the upright axis and scales in compatible steps that keep every wall's quarter-metre dimensions and supported thickness. Exploded floor spacing remains display-only, and each object keeps its owning floor. One completed gesture is one Undo step; interrupted or rejected gestures restore the entire group.

### Live path bounds

Route Stair and Ramp selection outlines and dimensions follow the current path,
including flight widths, end/turn landings and edited landing outlines. Moving,
inserting or removing route points updates the bounds immediately in 2D and 3D.
The common Width/Depth fields show measured bounds; use the path width and
point/landing controls to edit the route. Common X/Y fields move the measured
footprint. Selecting, measuring, framing or exporting does not change the saved
path's coordinate frame or normalized points.

## Held world-axis movement and viewport Shift selection

While an object or point translation is active, hold **X** for world X, **Z** for world Z (plan depth), or **C** for world Y (vertical). Hold multiple keys to allow that combination of axes. Releasing keys resumes unconstrained movement from the current position without catching up to mouse travel on blocked axes. The move owns these keys, including repeated/modified presses, so they cannot also Disconnect, Connect, Copy/Cut or Undo. Those ordinary shortcuts, including C in Walk, retain their normal behavior outside a move. Planar-only edits stay on their plane, so C alone temporarily holds their position; existing 3D vertical handles and primitive gizmos support Y movement. Escape, pointer cancellation and blur discard the edit.

Shift-click in the 3D viewport adds/removes the picked object without changing the checked floor set or active floor. A bare floor-label Shift-click does nothing. Use Shift-click on the Floors panel to change the checked floor set. Plain viewport floor navigation is unchanged.

## Translation feedback

Active point and object moves show a small live measurement from the drag start: a start marker, dashed displacement line, total metres and signed world-axis changes. Holding X, Z or C adds a colored permitted-axis guide and a clear locked-axis label. Releasing the key removes the lock feedback immediately, even without moving the pointer; the distance remains until the drag ends. Planar C holds are explicitly labelled and never depict vertical movement. Feedback follows accepted snapped geometry, stays out of selection/hit testing, and clears on completion, cancellation and view changes.


## Stable Walk entry

Walk from here keeps the picked physical surface position and the current horizontal facing. A short 360 ms camera move brings the view to the character's eye height along the shortest rotation path; reduced-motion settings skip the animation. Labels do not displace the pick, exploded spacing stays display-only, and ramps and dropped rooms use their actual surface height. Wall/ceiling hits and blocked spots are rejected without relocating the character. Movement and look input wait for the entry to settle. Saved starts retain their authored facing, and Fly-to-Walk keeps the local view direction.

## Centered cube taper

Select a cube to set its **Top width**, **Top depth**, **Bottom width** and **Bottom depth** in metres. Both ends share the same center, so reducing the bottom makes an inward-tapered base; reducing the top makes an upward taper. Zero end sizes can form a wedge or pyramid. Equal end sizes restore an ordinary cube. Height and orientation keep their existing controls.

Overall Width/Depth and the 2D/3D resize handles scale the profile proportionally. Group scaling also retains the taper. Multi-selection exposes the four shared end-size fields only for selected blockout cubes, excluding other primitives and thin walls. The actual silhouette and inset edges appear in plan view and floor exports, and the solid mesh follows those same corners in 3D. Taper travels with Copy, Duplicate, floor transfers, Undo/Redo and portable backups. Existing cubes load unchanged.


## Mixed-selection rotation

Select multiple rooms, stairs, ramps, symbols, services, annotations or 3D shapes, then choose **Rotate** or press **E**. Drag the shared amber ring in 2D or 3D; the inspector also offers exact degrees and 90° turns. Every member keeps its relative position around the shared selection center and its elevation. Route stairs and ramps turn freely; conventional stair stacks, local steps and fixed-axis linked site geometry use 90° increments. Hold Shift for 5° increments on free rotation, or Ctrl to bypass that angle snap.

Attached windows, doors, service terminals, stair-stack floors, route points and surface links follow their owning geometry. Hidden or locked dependencies and openings leading to an unselected room produce an explanatory message before any change. Enable the connected floors and include both owning rooms where needed. Release saves the complete rotation in one Undo step; Escape, interruption or Undo during the drag cancels the preview. Primitive-only 3D groups retain the existing three-axis gizmo. Mixed architectural selections stay upright and turn only around the vertical axis.

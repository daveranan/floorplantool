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

The selection inspector exposes floor surface elevation, independent outside ground, and room surface/relative offset. Moving a floor preserves explicit room offsets. Room clear height remains independent. In focused-floor 3D, drag the amber vertical handle on a selected room or local stair endpoint; with no room selected, the handle edits the whole floor. Elevations snap to 0.25 m; hold Alt for free movement. A live height and change-in-height dimension are shown. Escape cancels the drag.

Draw **Local steps** in 2D, then choose the start/end surfaces in the selection inspector. Endpoints can follow outside ground, this floor, a room, or an unlinked height. The stair endpoint's 3D handle previews the rise and step count and updates its linked surface on release. Floor, room and stair changes are undoable. Lowered courtyards gain an explicit walking surface. Plan checks flag inadequate run/width, missing or detached links, threshold differences and height/headroom conflicts. These are concept checks, not building-code certification.

Run `npm run test:elevation` for focused split-level interaction, geometry, walking, interruption and validation coverage.

## Corner rotation and geometry snapping

Press E, click a corner to mark the pivot, then drag another corner to rotate around it. A click on another corner changes the pivot without rotating. Shift uses absolute 5° angles. This works in 2D and focused-floor 3D; connected structural stairs retain their constraints. The outer rotation arcs in Select remain the quick center-rotation control.

Grid snapping is the default. Hold Ctrl during room movement, rectangle resizing, group movement, or point editing to snap to geometry; compatible edge constraints are solved together and shown as cyan guides. Alt bypasses snapping. Ctrl-drag empty space still removes items from a selection. Room right-click menus now expose a Room type picker in both 2D and 3D, preserving locks and undo.

## 3D authoring and transform feedback

2D and focused-floor 3D share the same top toolbar and shortcuts. Draw room (R), Stairs (S), Local steps and Edge steps work in 3D; tools not yet supported there remain visible but disabled. Edge-step width is in the inspector. For edge steps, select a raised/lowered room, choose the tool, and drag outward from a straight grid-aligned edge. The clicked edge sets facing; the width field controls the span, and the outward drag sets the run. A live tread preview links the source room to the neighboring room or outside ground. It commits once on release and is undoable. Equal-height endpoints are rejected. Oblique/curved edge authoring is not supported.

Local steps also supports a free rectangular footprint in 3D. Draw from one surface to a different-height surface. The inspector retains Start/End surface selectors, precise heights and a Facing control. Rotation shows dashed radial/arc guides and a live degree label near the pointer in 2D and 3D.

The separate in-canvas 3D tool row has been removed. Full stairs drawn in 3D opens the same destination-floor dialog as 2D. Edge steps also works in 2D. R/E/S/V retain their shared meanings, and the command palette reflects supported 3D tools. Room drawing remains active after creation.

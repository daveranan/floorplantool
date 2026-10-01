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

**Symbols** offers nine editable, dimensioned outlines plus text annotations. No equipment or furniture is placed in the new base. Legacy Operations zone labels and floor annotations can be selected, edited, moved, copied and deleted. They gain persistent IDs on edit or portable JSON export; selecting an old label leaves the old document unchanged. Overall width/depth guides measure the actual room extents, including gaps in irregular floors, independently of annotation positions.

Ctrl/Cmd+C, X and V copy, cut and paste selected objects inside the editor. The inspector can move a selection to another floor. Internal connections follow copied rooms; links to unselected rooms are reported and omitted. Linked stairs copy as a complete stack with new IDs; **Edit connected floors** changes their destinations. Native text-field shortcuts keep their normal behavior. Every transfer is undoable. The clipboard is retained for this app session, rather than shared through the operating system.

Selection boxes exclude doors. Shift-drag toggles enclosed objects. Ctrl/Cmd-drag only removes enclosed selected objects: objects outside the box stay selected, unselected objects are never added, and an empty box changes nothing. Doors remain available through direct click/Shift-click selection.

Straight and clockwise/counterclockwise spiral stairs use calculated metric treads, risers, landings, shaft openings and headroom checks. Straight stacks connect two floors; long rises add intermediate landings. Existing switchback stairs remain supported. Scissor stairs are a different geometry and are not implemented. Fit does not establish access, door swing, handrail, structural, code or runtime compliance.

**Services** controls a separate overlay on each floor. Outside service editing it is faint and dashed. Choose **Edit services**, or click a visible route while Select is active, to edit routes without selecting rooms. Draw routes with a drag (Shift adds an elbow); place hatches/vents with a click. Edit width, clear height, bottom elevation relative to ground, overhead/underfloor location and utility/player/creature use in the inspector. V12 includes two small provisional route proposals and no terminals. They are allowances, not a validated network; the planned player allowance is 0.80 m wide by 1.50 m clear.

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

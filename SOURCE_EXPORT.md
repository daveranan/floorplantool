# FloorPlanTool source export

Source snapshot: `56cd3c20437b15847a27c9a2a0245991601a7949`  
Packaged: 2026-10-01 UTC

This source export preserves the original application files byte for byte. The only added files are this guide and `SOURCE_MANIFEST.json`. The existing project name in package.json and original README are unchanged.

## Run locally

The application is static and the checked-in `dist` directory is ready to serve. From this folder, run:

```sh
python3 -m http.server 8000 --directory dist
```

Open <http://localhost:8000>. Use the same browser and origin to retain browser-local saved projects.

## Install, develop and test

For development, install Node.js and npm, then run:

```sh
npm ci
npm run build:preview
npm run test:ui
npm run test:preview
node test-floor-camera-sync.cjs
node test-workspace-modes.cjs
```

The export was checked with Node.js 24.19.0 and npm 11.9.0. Dependencies are pinned in `package-lock.json`. Only the Three.js preview source requires bundling; the other application JavaScript and CSS live directly in `dist`. Preserve `dist/vendor/THREE-LICENSE.txt` when redistributing the bundled preview.

All 24 current JavaScript regression suites passed during packaging. The existing README and TESTING.md describe the coverage and known limitations. No new real-browser, GPU or touch-device QA is claimed by this export.

To run the portable current JavaScript suites on a Unix-like shell:

```sh
for f in test-*.cjs; do
  case "$f" in test-v*.cjs|test-support.cjs|test-typography.cjs) continue ;; esac
  node "$f" || exit 1
done
```

`test-typography.cjs` and the four historical `export-v*-sheets.py` scripts retain hard-coded output directories from the original workspace. Adjust their output paths before running those scripts on another computer. They are preserved unchanged here. Several checks also write temporary QA artifacts beneath `/tmp`.

Historical `test-v*.cjs` scripts and `test.cjs` target older design revisions, can regenerate archived outputs, and are not the current application regression suite. The existing historical `test-compact-layout.py` has a documented failing ancestry assertion; it was not counted as a passing packaging check.

## Included and omitted

- Included: application source, ready-to-serve runtime bundle, pinned package files, tests, existing documentation, committed KERN starter/archive plan assets, generation scripts and Three.js license
- Omitted: Git history/configuration, platform hosting metadata, dependency installation folders, untracked uploads, unrelated files and temporary QA output
- `SOURCE_MANIFEST.json` lists the 231 original source files with byte counts, SHA-256 hashes and original Git blob IDs

Committed KERN plan assets include the previously committed user-edit starter seed. This source export is not a backup of any current browser-local building edits. Export those separately using the application's JSON backup/export controls.

Keep this repository private unless you explicitly decide to publish the included plans and assets. No application license has been invented or added; the bundled third-party license remains intact.

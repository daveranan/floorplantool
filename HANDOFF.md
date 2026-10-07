# KERN Planner local handoff

This checkout reconciles the deployed v83 planner (`db574fe283810ed73bae98f4d2fb68fb3622b230`) with the existing FloorPlanTool repository. The merge retains both Git histories and the three previously unpushed Windows commits.

The application, source and tests at Windows commit `b3db3d6d5efc8f5dacc56109522bda555b185a9c` match the earlier cloud commit `1b03d1b` after line-ending normalization. That cloud commit is an ancestor of v83. The only snapshot differences were the local source-export documentation and QA ignore rule, and the cloud hosting metadata. No application behavior needed to be discarded or reapplied.

## Launch

Node.js is required. From this folder, run:

```powershell
npm start
```

Open <http://127.0.0.1:8000>. The checked-in `dist` folder is ready to serve; installing dependencies is unnecessary just to launch. Leave the terminal running and press Ctrl+C to stop it.

The hosted version remains <https://kern-base-planner.daveranan.chatgpt.site>. Browser-local saves belong to their browser and origin; they do not automatically move from the hosted site to localhost. Export a portable JSON backup from the existing planner and import it into the local one when needed. This source checkout does not contain current browser-local user saves.

## Build and release checks

```powershell
npm ci
npm run build:preview
npm run test:release
```

`test:release` runs the current 105-suite v83 gate. `npm test` and `test:browser` are historical aggregates with documented drift; see `TESTING.md`. Scene tests use actual Three.js math with renderer substitutes. Passing them does not establish native GPU or physical-device behavior.

`SOURCE_EXPORT.md` and `SOURCE_MANIFEST.json` are preserved historical records of the original export, not hashes of this updated checkout. The local handoff folder has current provenance and validation receipts. Dependency directories, temporary QA files, user downloads, credentials, and handoff archives are excluded from the source commit.

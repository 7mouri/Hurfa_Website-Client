# Bedroom models and materials: ImageKit workflow

Open **Admin > Materials & 3D Models** at `/admin/bedroom-materials`. Every bedroom card passes its ID to `/bedroom-custamize?room=...`. Only the model assigned to that card is displayed. Without one, customers see “3D preview coming soon.”

## Setup

Use Node.js 24 or newer. Run `npm install`, then `npm run dev`.

Keep `IMAGEKIT_PRIVATE_KEY` and `IMAGEKIT_URL_ENDPOINT` in `.dev.vars`; see `.dev.vars.example`. Restart development after changing them. The server creates a random `CUSTOMIZER_ADMIN_TOKEN` in `.dev.vars` on first startup. Enter that value in the studio access-key field. It is different from your ImageKit private key.

Never commit real secrets or give them a `VITE_` prefix. ImageKit requests now run on the server. The existing image manager's refresh and upload actions also use the protected backend: enter the studio key there or unlock the material studio first in the same browser session.

## Assign the files you provide

1. Upload your GLB files to your **existing ImageKit media library**.
2. Open **Bedroom models** in the admin material studio and select a bedroom card.
3. Click **Browse ImageKit models**, select your file, then **Save bedroom setup**.
4. Use **Open saved preview** to inspect the result.
5. To replace a model, select another ImageKit file and save. To remove it from the card, click **Remove assignment**, then save. This does not delete the ImageKit source.

Refresh after uploading new files. **Load more files** fetches additional pages; search filters the loaded files by name and folder.

Models can be assigned with their original materials immediately. Material naming and UV mapping are required only when you enable wood/fabric customization.

The backend downloads and validates a selected file and caches a stable copy with its ImageKit file ID and source information. Replacing an ImageKit file does not silently change saved rooms: select the updated file again and save its assignment.

## Samples and mapping

Under **Material library > Add sample**, choose wood or fabric and select a base-color PNG/JPEG from ImageKit. Optionally select matching normal and roughness maps. Save a recognizable name or sample code.

Under the bedroom model, change relevant surfaces from **Keep original** to **Wood** or **Fabric**, choose the allowed samples and a default, then save. Fixed surfaces remain original. An assigned sample cannot be archived until its room assignments are removed or replaced.

For customization, your artist should use unique material names, standard PBR materials, applied object scale and the first UV set (`TEXCOORD_0`). Orient wood grain intentionally and use consistent texture scale. Unprepared surfaces can remain original.

Use seamless, evenly lit sample images. Keep color tint white to preserve the source color. Wood and fabric generally use metalness 0. Repeat and rotation control tiling but cannot repair stretched UVs. Use OpenGL-style normal maps. Grayscale roughness works directly: glTF reads its green channel. Base color uses sRGB; normal and roughness maps use linear data.

## Supported files

- Self-contained, uncompressed GLB 2.0 up to 20 MB, with embedded PNG/JPEG textures.
- At most 64 materials, 1,000 nodes, 300 meshes and 32 megapixels of embedded textures. Aim well below these ceilings for mobile.
- External resources, Draco, Meshopt, KTX2 and unsupported extensions are rejected with an explanation in this version. Animation playback is not included.
- Sample images: PNG/JPEG up to 8 MB and 4096 x 4096. Prefer 1024 or 2048 px for mobile.

## Backend

Local records and cached files persist in `.local/customizer/`. Production uses Cloudflare D1 and R2. Configure `CUSTOMIZER_ADMIN_TOKEN`, `IMAGEKIT_PRIVATE_KEY` and `IMAGEKIT_URL_ENDPOINT` as server runtime values. Back up records and cached files together.

Management endpoints verify the studio key, validate file bytes, restrict ImageKit downloads to the configured account, and reject stale edits using record revisions. Cached files remain stored when assignments change.

- `npm run test:customizer`: authorization, validation, persistence, ImageKit integration and assignment tests.
- `npm run build`: React client at `dist/client`, Worker at `dist/server/index.js`, and Sites migration metadata.
- `npm run db:generate`: generate new migrations; never rewrite applied migrations.

The system displays your supplied files only. Order submission and custom-finish pricing are outside this implementation. Check the final appearance using your actual GLBs and physical samples.

GLB remains a suitable format. [model-viewer](https://modelviewer.dev/examples/scenegraph/) is a simpler viewer alternative, but it still needs GLB files and prepared materials for texture replacement.

References: [ImageKit library API](https://imagekit.io/docs/api-reference/digital-asset-management-dam/list-and-search-assets), [Three.js GLTFLoader](https://threejs.org/docs/pages/GLTFLoader.html), [Khronos asset preparation](https://github.com/KhronosGroup/3DC-Asset-Creation/blob/main/asset-creation-guidelines/RealtimeAssetCreationGuidelines.md).

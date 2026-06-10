# 3D Model Notes — Ocean Explorers

Hard-won reference for how each creature model behaves and how it must be
configured. **The big lesson: there is NO single bounding-box method that sizes
every model correctly.** Each one is configured per-model in `js/data.js`.

## Why model sizing is tricky here

All models are GLB files, mostly downloaded from **Sketchfab**, and most are
**skinned/animated** (rigged with a skeleton). Two well-known three.js issues
([#14499](https://github.com/mrdoob/three.js/issues/14499),
[#20434](https://github.com/mrdoob/three.js/issues/20434)) mean
`THREE.Box3.setFromObject()` — the normal way to measure a model — returns the
**wrong size** for *some* rigs:

- Models rigged with a **scaled armature / `_rootJoint`** can be over-reported.
- A model whose visual size lives in **animation** (the manta's wings sweep far
  past the bind pose) gets over-reported once measured against the animated state.
- Conversely, measuring raw **geometry vertices** under-reports models whose
  size lives in the **skeleton/bones** (the octopus → a near-zero box).

So we measure per-model with whichever method is correct for that model.

## The two bounds methods (in `scene.js` → `getModelBounds`)

| `boundsMethod` | How it measures | When to use |
| --- | --- | --- |
| `'auto'` *(default)* | `THREE.Box3.setFromObject()` | Correct for almost everything. |
| `'geometry'` | Union of each mesh's geometry bounding box in model space | When `setFromObject` over-reports (animation-swept rig). |

A model declares its method in `data.js`. Omit it to get `'auto'`.

## Per-model findings

Measured natural max-dimension via `setFromObject` (bind pose):

| Model | Skinned? | `setFromObject` maxDim | `boundsMethod` | Notes |
| --- | --- | --- | --- | --- |
| **Whale** (`blue_whale_-_textured.glb`) | yes | ~7.95 | `auto` | Works normally. |
| **Dolphin** (`dolphin.glb`) | yes | ~0.13 | `auto` | Tiny bind-pose geometry; `auto` is correct. The `'geometry'` method makes it INVISIBLE (measures it ~313 units → scaled to nothing / off-frame), so do **not** use geometry here. |
| **Seahorse** (`seahorse_sf.glb`) | yes | ~8.0 | `auto` | Works normally. |
| **Octopus** (`octopus sketchfab2.glb`) | yes | ~5.4 | `auto` | Size lives in bones; `setFromObject` reads it correctly. The `'geometry'` method measures it ~0 → renders ~600× too big. Use `auto`. |
| **Manta** (`manta_ray_84b.glb`) | yes | ~4.8 | **`geometry`** | The ONE that needs `geometry`. Its animation sweep makes `auto` over-report → renders massive / camera ends up "inside" it. CC BY-NC, attribution in `3d model/`. |
| **Sea Turtle** (`sea_turtle.glb`) | no | 8.0 | `auto` | Static mesh, trivial. |
| **Jellyfish** (`glowing jelly fish.glb`) | no | 8.0 | `auto` | Static mesh, trivial. |
| **Sperm Whale** (`sperm_whale.glb`) | yes | — | `auto` | CC BY 4.0 by Bohdan Lvov. |
| **Hammerhead Shark** (`hammerhead_shark.glb`) | yes | — | `auto` | Has `_rootJoint`; if it renders too large, switch to `geometry`. CC BY 4.0 by WildMesh 3D. |

## Other per-model knobs (in `data.js`)

- `modelScale` — extra multiplier on top of the auto-normalized ~8-unit size.
- `modelPosition` — `[x,y,z]` offset after centering (e.g. dolphin `[0,-1,0]`).
- `modelRotation` — `[x,y,z]` radians. Used to face the model toward the camera.
- `sceneColor` — the fog/scene tint for that creature.

## How sizing works (in `scene.js` → `setupModel`)

1. Measure the model with `getModelBounds(model, creature.boundsMethod)`.
2. Wrap the model in a parent `THREE.Group`; center the model inside it.
3. Scale the **wrapper** so the model's largest dimension ≈ 8 units
   (`8 / maxDim × modelScale`), then apply `modelRotation` / `modelPosition`
   to the wrapper. (Wrapping = rotation pivots around the true center.)
4. `child.frustumCulled = false` on meshes — skinned meshes report a wrong
   bounding sphere and can get culled (vanish) otherwise.

## Adding a NEW model — checklist

1. Compress it: `npx @gltf-transform/cli optimize in.glb out.glb --compress draco --texture-compress webp` (resize huge textures with `--texture-size 2048`).
2. Add an entry in `data.js` with `modelPath`. Start with **no** `boundsMethod` (= `auto`).
3. Load it locally (`python serve.py 7777`) and look:
   - **Too big / "inside it" / flat surface filling screen** → set `boundsMethod: 'geometry'`.
   - **Invisible** → it's being culled or `geometry` mis-measured it; keep `auto` and confirm `frustumCulled = false` is applied.
   - **Wrong size still** → tune `modelScale`.
   - **Facing away / sideways** → set `modelRotation` (π on Y flips it to face the camera).
4. Update the table above.

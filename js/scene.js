import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export class SceneManager {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });

        this.clock = new THREE.Clock();
        this.particles = null;
        this.bubbles = null;
        this.creatureMesh = null;
        this.kelp = [];
        this.causticPlane = null;
        this.fishSchool = null;
        this.targetColor = new THREE.Color(0x0a0e14);
        this.currentColor = new THREE.Color(0x0a0e14);
        this.mixers = [];
        this.modelsCache = {};

        // Models are Draco-compressed (geometry) + WebP textures.
        // DRACOLoader is required to decode the geometry; the decoder
        // wasm is pulled from the same three.js version on the CDN.
        // preload() spins the decoder worker up front so concurrent
        // loads (main + idle preloads) don't race its initialization.
        this.gltfLoader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://unpkg.com/three@0.163.0/examples/jsm/libs/draco/');
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.preload();
        this.gltfLoader.setDRACOLoader(dracoLoader);
        this.gltfLoader.setMeshoptDecoder(MeshoptDecoder);

        const ktx2Loader = new KTX2Loader();
        ktx2Loader.setTranscoderPath('https://unpkg.com/three@0.163.0/examples/jsm/libs/basis/');
        ktx2Loader.detectSupport(this.renderer);
        this.gltfLoader.setKTX2Loader(ktx2Loader);

        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.scene.fog = new THREE.FogExp2(0x0a0e14, 0.012);

        // Studio-quality environment map using three.js's built-in RoomEnvironment.
        // This is the SAME env the official three.js GLTF viewer uses — neutral,
        // photorealistic IBL so PBR materials render correctly (proper reflections,
        // natural skin tones). Models look like they do on Sketchfab.
        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        this.roomEnvTexture = pmremGenerator.fromScene(
            new RoomEnvironment(this.renderer), 0.04
        ).texture;
        this.scene.environment = this.roomEnvTexture;
        pmremGenerator.dispose();

        const ambientLight = new THREE.AmbientLight(0x446688, 0.6);
        this.scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0x00e5ff, 1.5);
        keyLight.position.set(5, 10, 7);
        this.scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x4488aa, 0.8);
        fillLight.position.set(-5, 0, 5);
        this.scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
        rimLight.position.set(0, -5, -5);
        this.scene.add(rimLight);

        this.createParticles();
        this.createBubbles();
        this.createCaustics();
        this.createLightRays();
        this.createKelp();
        this.createFishSchool();
        this.createSeafloor();

        this.camera.position.set(0, 1, 8);
        
        // Add OrbitControls for interactivity
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true; // Smooth inertia
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = true; // Allow zooming in on the models

        window.addEventListener('resize', () => this.onWindowResize());
        this._readyFired = false;
    }

    createParticles() {
        const count = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = THREE.MathUtils.randFloatSpread(60);
            positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(40);
            positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(60) - 10;
            sizes[i] = Math.random() * 0.08 + 0.02;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            color: 0x88ccff,
            size: 0.06,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createBubbles() {
        const count = 80;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const speeds = new Float32Array(count);
        const offsets = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = THREE.MathUtils.randFloatSpread(40);
            positions[i * 3 + 1] = Math.random() * -20;
            positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(40) - 5;
            speeds[i] = Math.random() * 0.5 + 0.2;
            offsets[i] = Math.random() * Math.PI * 2;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.08,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });
        this.bubbles = new THREE.Points(geometry, material);
        this.bubbles.userData = { speeds, offsets };
        this.scene.add(this.bubbles);
    }

    createCaustics() {
        const geometry = new THREE.PlaneGeometry(60, 40);
        this.causticMat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color(0x00e5ff) }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform vec3 uColor;
                varying vec2 vUv;
                void main() {
                    float t = uTime * 0.3;
                    float x = vUv.x * 20.0;
                    float y = vUv.y * 20.0;
                    float c = sin(x + t) * cos(y + t * 0.7) * 0.5 + 0.5;
                    c += sin(x * 1.5 - t * 0.5) * cos(y * 1.3 + t * 0.6) * 0.25;
                    c = c * 0.4;
                    gl_FragColor = vec4(uColor, c * 0.15);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide
        });
        this.causticPlane = new THREE.Mesh(geometry, this.causticMat);
        this.causticPlane.rotation.x = -Math.PI / 2;
        this.causticPlane.position.y = 8;
        this.scene.add(this.causticPlane);
    }

    createLightRays() {
        const count = 8;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloatSpread(30);
            const z = THREE.MathUtils.randFloatSpread(30);
            positions.push(x, 15, z);
            positions.push(x + (Math.random() - 0.5) * 2, -10, z + (Math.random() - 0.5) * 2);
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const material = new THREE.LineBasicMaterial({
            color: 0x00e5ff,
            transparent: true,
            opacity: 0.05,
            blending: THREE.AdditiveBlending
        });
        for (let i = 0; i < count; i++) {
            const geo = new THREE.BufferGeometry();
            const verts = new Float32Array([
                positions[i * 6], positions[i * 6 + 1], positions[i * 6 + 2],
                positions[i * 6 + 3], positions[i * 6 + 4], positions[i * 6 + 5]
            ]);
            geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
            const ray = new THREE.Line(geo, material.clone());
            this.scene.add(ray);
        }
    }

    createKelp() {
        for (let i = 0; i < 8; i++) {
            const segments = 12;
            const height = 2 + Math.random() * 3;
            const geo = new THREE.BufferGeometry();
            const positions = [];
            const idx = [];
            for (let j = 0; j <= segments; j++) {
                const y = (j / segments) * height - height / 2;
                const sway = Math.sin(j * 0.5) * 0.15;
                positions.push(sway - 0.1, y, 0);
                positions.push(sway + 0.1, y, 0);
                if (j < segments) {
                    const base = j * 2;
                    idx.push(base, base + 1, base + 2);
                    idx.push(base + 1, base + 3, base + 2);
                }
            }
            geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geo.setIndex(idx);
            geo.computeVertexNormals();

            const mat = new THREE.MeshStandardMaterial({
                color: 0x1b5e20,
                transparent: true,
                opacity: 0.6,
                side: THREE.DoubleSide,
                roughness: 0.8,
                metalness: 0.1
            });
            const kelpStrand = new THREE.Mesh(geo, mat);
            const angle = Math.random() * Math.PI * 2;
            const dist = 8 + Math.random() * 12;
            kelpStrand.position.set(Math.cos(angle) * dist, -12, Math.sin(angle) * dist);
            kelpStrand.userData = { angle, dist, offset: Math.random() * Math.PI * 2, height };
            this.scene.add(kelpStrand);
            this.kelp.push(kelpStrand);
        }
    }

    createFishSchool() {
        const count = 30;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const data = [];
        for (let i = 0; i < count; i++) {
            positions[i * 3] = THREE.MathUtils.randFloatSpread(25);
            positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(15) - 3;
            positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(25) - 8;
            data.push({
                speed: 0.2 + Math.random() * 0.3,
                offset: Math.random() * Math.PI * 2,
                radius: 0.5 + Math.random() * 2,
                yOffset: (Math.random() - 0.5) * 3
            });
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x00bcd4,
            size: 0.06,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });
        this.fishSchool = new THREE.Points(geometry, material);
        this.fishSchool.userData = data;
        this.scene.add(this.fishSchool);
    }

    createSeafloor() {
        const geometry = new THREE.CircleGeometry(35, 64);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0a1620,
            roughness: 1,
            metalness: 0,
            transparent: true,
            opacity: 0.8
        });
        const floor = new THREE.Mesh(geometry, material);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -12;
        this.scene.add(floor);
    }

    updateCreature(creature) {
        if (this.creatureMesh) {
            this.scene.remove(this.creatureMesh);
            this.creatureMesh = null;
        }

        this.mixers = [];

        const color = new THREE.Color(creature.color || '#00e5ff');
        this.targetColor = new THREE.Color(creature.sceneColor || 0x0a6e8a);

        if (this.causticMat) {
            this.causticMat.uniforms.uColor.value = color;
        }

        const modelPath = creature.modelPath;
        if (!modelPath) return;

        const setupModel = (gltf) => {
            const model = gltf.scene;

            // --- Object hierarchy: wrap the model in a parent Group ---------
            // The model's own pivot is rarely at its visual centre (Sketchfab
            // exports especially), so rotating the model directly also swings
            // its position around — which fought our centering and made the
            // manta drift toward the camera. Instead:
            //   1. Centre the MODEL inside a wrapper Group (offset by -centre).
            //   2. Apply scale / rotation / position to the WRAPPER.
            // Now rotation pivots around the model's true centre, and centering
            // never interacts with orientation. (sbcode object-hierarchy.)
            const wrapper = new THREE.Group();

            // The gltf.scene is cached and reused, so detach it from any wrapper
            // left over from a previous selection and reset its local transform
            // before re-measuring/centering. Keeps setup idempotent.
            if (model.parent) model.parent.remove(model);
            model.position.set(0, 0, 0);
            model.rotation.set(0, 0, 0);
            model.scale.set(1, 1, 1);
            model.updateMatrixWorld(true);

            // Measure the model's size. No single method works for every
            // Sketchfab rig (see MODELS.md). Three options per creature:
            //   measuredMaxDim   → hardcoded true size (when both methods fail).
            //   boundsMethod:'geometry' → geometry boxes (for animation-swept rigs).
            //   default ('auto') → Box3.setFromObject() (works for most).
            const baseBox = this.getModelBounds(model, creature.boundsMethod);
            const size = baseBox.getSize(new THREE.Vector3());
            const maxDim = creature.measuredMaxDim || Math.max(size.x, size.y, size.z);
            const center = baseBox.getCenter(new THREE.Vector3());
            console.log(`[setupModel] ${creature.id}: method=${creature.boundsMethod||'auto'} size=${size.x.toFixed(2)},${size.y.toFixed(2)},${size.z.toFixed(2)} maxDim=${maxDim.toFixed(2)} center=${center.x.toFixed(2)},${center.y.toFixed(2)},${center.z.toFixed(2)} scale=${(8/maxDim).toFixed(2)}`);

            // 1. Centre the model at the wrapper's origin (unscaled).
            model.position.set(-center.x, -center.y, -center.z);
            wrapper.add(model);

            // 2. Normalize so the largest dimension is ~8 units, then apply the
            //    per-creature modelScale on top — on the WRAPPER.
            const normalizedScale = maxDim > 0 ? (8 / maxDim) : 1;
            const finalScale = normalizedScale * (creature.modelScale || 1);
            wrapper.scale.setScalar(finalScale);

            if (creature.modelRotation) {
                wrapper.rotation.set(...creature.modelRotation);
            }

            wrapper.position.set(0, 0, 0);
            if (creature.modelPosition) {
                wrapper.position.set(...creature.modelPosition);
            }
            wrapper.userData.baseY = wrapper.position.y;

            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    // SkinnedMeshes report an incorrect bounding sphere (three.js
                    // #14499), so three.js frustum-culls them and they vanish —
                    // this is why the dolphin stopped rendering. There's only one
                    // hero model on screen, so just disable culling for it.
                    child.frustumCulled = false;
                }
            });

            this.creatureMesh = wrapper;
            this.scene.add(this.creatureMesh);

            if (creature.useDirectLighting) {
                this.scene.environment = null;
                this.renderer.toneMappingExposure = creature.exposure || 1.2;
                model.traverse(child => {
                    if (child.isMesh && child.material) {
                        child.material.envMapIntensity = creature.envIntensity || 1.5;
                        child.material.needsUpdate = true;
                    }
                });
            } else {
                this.scene.environment = this.roomEnvTexture;
                this.renderer.toneMappingExposure = 1.0;
            }

            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(model);
                const clip = creature.animationName
                    ? gltf.animations.find(a => a.name === creature.animationName) || gltf.animations[0]
                    : gltf.animations[0];
                const action = mixer.clipAction(clip);
                if (creature.animationSpeed) action.timeScale = creature.animationSpeed;
                action.play();
                this.mixers.push(mixer);
            }
        };

        if (this.modelsCache[modelPath]) {
            setupModel(this.modelsCache[modelPath]);
        } else {
            this.gltfLoader.load(modelPath, (gltf) => {
                this.modelsCache[modelPath] = gltf;
                if (this.targetColor.getHex() === new THREE.Color(creature.sceneColor || 0x0a6e8a).getHex()) {
                    setupModel(gltf);
                }
            }, undefined, (error) => {
                console.error('Error loading model:', error);
            });
        }
    }

    // Measure a model's natural (unscaled) bounding box. There is NO single
    // method that's correct for every Sketchfab rig we use — see MODELS.md for
    // the per-model findings — so the method is chosen per creature via the
    // `method` argument (creature.boundsMethod in data.js):
    //
    //   'auto' (default): THREE.Box3.setFromObject(). Correct for 6 of 7 models
    //                     (whale, dolphin, seahorse, octopus, turtle, jelly).
    //   'geometry':       union of each mesh's geometry bounding box in model
    //                     space. Use for the manta, whose animation sweep makes
    //                     setFromObject over-report and render it huge.
    getModelBounds(model, method = 'auto') {
        const savedScale = model.scale.clone();
        const savedPos = model.position.clone();
        const savedRot = model.rotation.clone();
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        model.rotation.set(0, 0, 0);
        model.updateMatrixWorld(true);

        let box;
        if (method === 'geometry') {
            const rootInverse = new THREE.Matrix4().copy(model.matrixWorld).invert();
            const toLocal = new THREE.Matrix4();
            box = new THREE.Box3();
            model.traverse((child) => {
                if (!child.isMesh || !child.geometry) return;
                if (!child.geometry.boundingBox) child.geometry.computeBoundingBox();
                if (!child.geometry.boundingBox) return;
                toLocal.multiplyMatrices(rootInverse, child.matrixWorld);
                box.union(child.geometry.boundingBox.clone().applyMatrix4(toLocal));
            });
            if (box.isEmpty()) box = new THREE.Box3().setFromObject(model);
        } else {
            box = new THREE.Box3().setFromObject(model);
        }

        model.scale.copy(savedScale);
        model.position.copy(savedPos);
        model.rotation.copy(savedRot);
        model.updateMatrixWorld(true);
        return box;
    }

    // Warm the cache for a model without adding it to the scene, so the
    // next creature appears instantly. Runs during browser idle time.
    preloadModel(modelPath) {
        if (!modelPath || this.modelsCache[modelPath]) return;
        const run = () => {
            // Guard again in case it was loaded between scheduling and running.
            if (this.modelsCache[modelPath]) return;
            this.gltfLoader.load(
                modelPath,
                (gltf) => { this.modelsCache[modelPath] = gltf; },
                undefined,
                () => { /* preload failures are non-fatal; real load will retry */ }
            );
        };
        if (typeof requestIdleCallback === 'function') {
            requestIdleCallback(run, { timeout: 2000 });
        } else {
            setTimeout(run, 300);
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (!this._readyFired && this.onReady) {
            this._readyFired = true;
            this.onReady();
        }

        const elapsedTime = this.clock.getElapsedTime();
        const delta = elapsedTime - (this._lastTime || 0);
        this._lastTime = elapsedTime;

        for (const mixer of this.mixers) {
            mixer.update(delta);
        }

        // Update the OrbitControls on every frame
        this.controls.update();

        this.scene.fog.color.lerp(this.targetColor, 0.005);
        this.renderer.setClearColor(this.currentColor, 1);
        this.currentColor.lerp(this.targetColor, 0.005);

        if (this.causticMat) {
            this.causticMat.uniforms.uTime.value = elapsedTime;
        }

        if (this.particles) {
            this.particles.rotation.y = elapsedTime * 0.003;
            this.particles.position.y = Math.sin(elapsedTime * 0.05) * 0.3;
        }

        if (this.bubbles) {
            const pos = this.bubbles.geometry.attributes.position.array;
            const { speeds, offsets } = this.bubbles.userData;
            for (let i = 0; i < pos.length / 3; i++) {
                pos[i * 3 + 1] += speeds[i] * 0.01;
                pos[i * 3] += Math.sin(elapsedTime * speeds[i] + offsets[i]) * 0.002;
                if (pos[i * 3 + 1] > 15) {
                    pos[i * 3 + 1] = -15;
                    pos[i * 3] = THREE.MathUtils.randFloatSpread(40);
                    pos[i * 3 + 2] = THREE.MathUtils.randFloatSpread(40) - 5;
                }
            }
            this.bubbles.geometry.attributes.position.needsUpdate = true;
        }

        this.kelp.forEach((k) => {
            const { angle, dist, offset } = k.userData;
            const sway = Math.sin(elapsedTime * 0.5 + offset) * 0.3;
            k.position.x = Math.cos(angle) * dist + sway;
            k.position.y = -12 + Math.sin(elapsedTime * 0.3 + offset) * 0.2;
            k.rotation.z = Math.sin(elapsedTime * 0.4 + offset) * 0.05;
        });

        if (this.fishSchool) {
            const pos = this.fishSchool.geometry.attributes.position.array;
            const data = this.fishSchool.userData;
            for (let i = 0; i < pos.length / 3; i++) {
                const d = data[i];
                const t = elapsedTime * d.speed + d.offset;
                pos[i * 3] += Math.sin(t) * 0.005;
                pos[i * 3 + 1] = Math.sin(t * 0.7 + d.offset) * d.radius + d.yOffset;
                pos[i * 3 + 2] += Math.cos(t * 0.5) * 0.005;
            }
            this.fishSchool.geometry.attributes.position.needsUpdate = true;
            this.fishSchool.rotation.y = elapsedTime * 0.01;
        }

        if (this.creatureMesh) {
            // Apply a gentle sway
            this.creatureMesh.position.y = (this.creatureMesh.userData.baseY || 0) + Math.sin(elapsedTime * 0.5) * 0.15;
            
            // Allow orbit controls to handle main rotation, but add subtle rotation if desired
            // this.creatureMesh.rotation.y = Math.sin(elapsedTime * 0.2) * 0.1; 
        }

        this.renderer.render(this.scene, this.camera);
    }
}
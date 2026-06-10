# 🌊 Ocean Explorers — Explore. Learn. Protect.

Ocean Explorers is an immersive, interactive 3D web experience designed to showcase the beauty and complexity of marine life. Built with modern web technologies, it allows users to dive deep into the ocean and explore various sea creatures in a stunning 3D environment.

![Ocean Explorers Preview](https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

- **Immersive 3D Environment**: A fully rendered underwater scene using Three.js, featuring dynamic lighting, volumetric fog, and particle systems.
- **Interactive 3D Models**: High-quality 3D marine life models that users can rotate and inspect.
- **Glassmorphic UI**: A futuristic, high-end user interface with frosted glass effects and smooth transitions.
- **Detailed Species Data**: Comprehensive information about various marine species, including anatomy, habitat, and conservation status.
- **Dynamic Animations**: Fluid UI interactions and environmental animations powered by custom logic and GSAP-style transitions.
- **Responsive Design**: Optimized for various screen sizes to ensure a premium experience on all devices.

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **3D Engine**: [Three.js](https://threejs.org/)
- **Styling**: Vanilla CSS3 (Custom properties, Flexbox/Grid, Glassmorphism)
- **External Assets**: Google Fonts (Inter, Orbitron, JetBrains Mono)

## 📁 Project Structure

```text
sealif/
├── 3d model/        # GLTF/GLB 3D assets for marine creatures
├── assets/          # Static images, textures, and icons
├── js/              # Core application logic
│   ├── animations.js # UI and environmental animation controllers
│   ├── app.js        # Main entry point and orchestration
│   ├── data.js       # Marine species database and content
│   ├── scene.js      # Three.js scene setup and 3D rendering
│   └── ui.js         # Interface management and event handling
├── index.html       # Main application entry point
└── styles.css       # Global design system and glassmorphic styles
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ocean-explorers.git
   ```

2. **Run the dev server** (recommended):
   Since the project uses ES Modules for Three.js, it must be served via a local
   server. Use the included `serve.py` — it sends **no-cache headers**, so your
   edits show up on a normal browser refresh (F5). No hard-refresh, no cache
   confusion:
   ```bash
   python serve.py 5500       # http://localhost:5500
   ```
   > ⚠️ Avoid plain `python -m http.server` for development — it lets the browser
   > cache old JS, so your changes appear not to apply until a hard refresh
   > (Ctrl+Shift+R). `serve.py` exists specifically to avoid that.
   > Note: port **8000 is reserved** for another local project — use 5500.

3. **Navigate to `http://localhost:5500`** (or the port you chose).

### Mapbox tokens

No Mapbox token is committed to this repository.

For GitHub Pages, add a repository secret named `MAPBOX_TOKEN` with the
production Mapbox token. Restrict that token in Mapbox to the GitHub Pages
origin:

```text
https://curious-ray.github.io/
```

Browsers send only this origin as the referrer for Mapbox's cross-origin tile
requests, so restricting the token to the full `/Ocean-Explorers/` path can
block map tiles.

For local development, keep your localhost token out of Git:

1. Copy `js/config.example.js` to `js/config.js`.
2. Put your localhost-only Mapbox token in `js/config.js`.
3. Restrict that local token in Mapbox to:

```text
http://localhost:5500
```

`js/config.js` is ignored by Git and should not be uploaded. The GitHub Pages
deployment workflow creates its own `js/config.js` from the `MAPBOX_TOKEN`
secret during deployment. Open the local site at `http://localhost:5500`, not
`http://127.0.0.1:5500`, so the Mapbox URL restriction matches.

### After deploying to GitHub Pages
GitHub Pages / the browser may serve a cached build to visitors. The JS is
loaded with a `?v=` version query (in `index.html`) that is bumped on each
meaningful change to force a fresh fetch. If a deploy looks stale, hard-refresh
once (Ctrl+Shift+R) — fresh visitors get the new version automatically.

## 🎨 Design Philosophy

Ocean Explorers follows a **"Futuristic Marine"** aesthetic. The design combines high-tech UI elements (inspired by radar and scanning interfaces) with the organic, fluid nature of the ocean. 

- **Colors**: Deep ocean blues (#001220), neon cyans (#00e5ff), and translucent whites.
- **Typography**: A mix of `Orbitron` for tech headers and `Inter` for readable body text.
- **Interactions**: Subtle micro-interactions on buttons and panels to provide tactile feedback.

## 📜 License

This project is open source. Feel free to use and adapt it for your own explorations.

---

## 🙏 Credits

3D models are used under their respective licenses. See **[CREDITS.md](CREDITS.md)** for full attribution.

*Made with ❤️ for the Ocean.*

# valentine-envelope
An ultra-lightweight, zero-dependency 3D Valentine Envelope Engine. Features hardware-accelerated CSS 3D perspectives, custom polygon clip-paths, and an automated JavaScript Vector Particle Pool for frame-perfect 60 FPS performance.

# 💌 Interactive 3D Valentine Envelope Engine

A high-performance, zero-dependency micro-interaction component built with raw web standards. This engine completely bypasses heavy runtime animation libraries (like GSAP or Framer Motion) to deliver frame-perfect layout transformations at a locked 60 FPS.

## ⚙️ Architectural Core

* **Native 3D Perspective Mapping:** Utilizes CSS `perspective` combined with localized `rotateX()` transformations to handle dimensional structural mechanics directly on the browser's compositor thread.
* **Complex Geometric Masking:** Employs explicit custom CSS `clip-path` configurations to form stable pocket and flap overlays without extra nested graphics nodes.
* **Memory-Optimized Vector Particles:** Implements a deterministic JavaScript particle generation loop designed with aggressive garbage collection timers to emit drifting heart nodes smoothly with zero main-thread blocking or heap memory bloat.

## 🛠️ Workspace Quickstart

Simply clone the workspace and load `index.html` directly into any modern browser engine:

```bash
git clone [https://github.com/your-username/valentine-envelope-engine.git](https://github.com/your-username/valentine-envelope-engine.git)
cd valentine-envelope-engine

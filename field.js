// Hero wave field: a WebGL grid of points that ripples in cobalt and ember and bends toward the pointer.
// Pauses when the hero is off screen; draws one still frame under reduced motion; does nothing without WebGL.
// Classic script (not a module) so it also runs when index.html is opened straight from disk.
(() => {
const THREE = window.THREE;
if (!THREE) return;

const canvas = document.querySelector("[data-hero-field]");
const hero = canvas && canvas.closest(".hero");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function start() {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch {
    return; // no WebGL: the dark hero stands on its own
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 2.4, 6.2);
  camera.lookAt(0, 0.9, -4);

  const COLS = 170, ROWS = 90, W = 26, D = 16;
  const count = COLS * ROWS;
  const pos = new Float32Array(count * 3);
  let k = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      pos[k++] = (c / (COLS - 1) - 0.5) * W;
      pos[k++] = 0;
      pos[k++] = (r / (ROWS - 1) - 0.5) * D - 4;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

  const css = getComputedStyle(document.documentElement);
  const tone = (name, fallback) => (css.getPropertyValue(name).trim() || fallback);
  const additive = tone("--field-blend", "normal") === "add"; // glow on dark themes, ink on light ones
  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uPull: { value: 0 },
    uPixel: { value: renderer.getPixelRatio() },
    uCobalt: { value: new THREE.Color(tone("--field-a", "#2B5FD9")) },
    uEmber: { value: new THREE.Color(tone("--field-b", "#FF6B5B")) }
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    vertexShader: /* glsl */ `
      uniform float uTime; uniform vec2 uMouse; uniform float uPull; uniform float uPixel;
      varying float vH; varying float vFade;
      void main() {
        vec3 p = position;
        float w = sin(p.x * 0.55 + uTime * 0.7) * 0.32
                + cos(p.z * 0.9 - uTime * 0.55) * 0.26
                + sin((p.x + p.z) * 0.35 + uTime * 0.4) * 0.22;
        float d = distance(p.xz, uMouse);
        w += uPull * 0.9 * exp(-d * d * 0.35);
        p.y = w;
        vH = w;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.8, (3.4 + w * 2.2)) * uPixel * (8.0 / -mv.z);
        vFade = 1.0 - smoothstep(9.0, 22.0, -mv.z);
        // quieter under the headline column so the copy stays easy to read
        vFade *= 0.28 + 0.72 * smoothstep(-9.0, 1.5, position.x);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uCobalt; uniform vec3 uEmber;
      varying float vH; varying float vFade;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float a = smoothstep(0.5, 0.15, length(c));
        vec3 col = mix(uCobalt, uEmber, smoothstep(-0.2, 0.75, vH));
        gl_FragColor = vec4(col, a * vFade * 0.85);
      }`
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  function resize() {
    const r = canvas.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / Math.max(r.height, 1);
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  // pointer: project the cursor onto the field plane so the wave rises under it
  const target = new THREE.Vector2(0, 0);
  let pull = 0;
  const ray = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hit = new THREE.Vector3();
  hero.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (ray.ray.intersectPlane(plane, hit)) { target.set(hit.x, hit.z); pull = 1; }
    points.rotation.y = (ndc.x * 0.06);
  });
  hero.addEventListener("pointerleave", () => { pull = 0; });

  if (reduce) { uniforms.uTime.value = 2.0; renderer.render(scene, camera); return; }

  // one render chain at a time: the observer only restarts the loop when it is not already running
  let visible = true, running = false, last = performance.now();
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !running) { last = performance.now(); loop(); }
  }).observe(hero);

  function loop(now = performance.now()) {
    if (!visible) { running = false; return; }
    running = true;
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    uniforms.uTime.value += dt;
    uniforms.uMouse.value.lerp(target, 0.06);
    uniforms.uPull.value += (pull - uniforms.uPull.value) * 0.05;
    // drift the camera a touch as the hero scrolls away, for depth
    const y = Math.min(window.scrollY / window.innerHeight, 1);
    camera.position.y = 2.4 + y * 1.6;
    camera.lookAt(0, 0.9 - y * 0.8, -4);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  if (!running) loop();
}

if (canvas && hero) start();
})();

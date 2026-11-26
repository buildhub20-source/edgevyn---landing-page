(() => {
  "use strict";

  const root = document.documentElement;
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  const themeVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();

  // nav logo follows the theme: navy wordmark on light grounds, white wordmark on dark ones
  const navLogo = document.querySelector(".nav-logo img");
  const logoUrl = themeVar("--logo-on-ground").replace(/^url\(["']?|["']?\)$/g, "");
  if (navLogo && logoUrl) navLogo.src = logoUrl;

  // ---- Intro film: plays while the page loads, then lifts away (once per session) ----
  // Ends when the film has played AND the page has loaded, on Skip, or after a safety cap.
  const introDone = new Promise((resolve) => {
    const intro = document.querySelector("[data-intro]");
    if (!intro || !root.classList.contains("intro-on")) { if (intro) intro.remove(); resolve(); return; }
    const video = intro.querySelector("video");
    const bar = intro.querySelector("[data-intro-bar]");
    const skip = intro.querySelector("[data-intro-skip]");
    const started = performance.now();
    const CAP = 4000;               // never hold the page longer than this
    const RATE = 2.2;               // the film plays fast...
    const END_AT = 3.6;             // ...and lifts once the wordmark has settled (film seconds), skipping the long hold and fade-out
    let loaded = document.readyState === "complete", filmEnded = false, finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      try { sessionStorage.setItem("ev-intro", "1"); } catch (e) {}
      if (bar) bar.style.transform = "scaleX(1)";
      intro.classList.add("is-leaving");
      resolve();                     // the hero starts its entrance as the curtain lifts
      setTimeout(() => { root.classList.remove("intro-on"); intro.remove(); }, 750);
    };
    const check = () => { if (loaded && filmEnded) finish(); };

    // progress: the film's time when it plays, otherwise elapsed time against the cap
    const tick = () => {
      if (finished) return;
      const p = video && video.duration ? video.currentTime / END_AT : (performance.now() - started) / CAP;
      if (bar) bar.style.transform = `scaleX(${Math.min(1, p).toFixed(3)})`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    window.addEventListener("load", () => { loaded = true; check(); }, { once: true });
    if (video) {
      const fast = () => { video.playbackRate = RATE; };
      fast();
      video.addEventListener("loadedmetadata", fast);
      video.addEventListener("play", fast);
      video.addEventListener("timeupdate", () => { if (!filmEnded && video.currentTime >= END_AT) { filmEnded = true; check(); } });
      video.addEventListener("ended", () => { filmEnded = true; check(); }, { once: true });
      video.addEventListener("error", () => { filmEnded = true; check(); }, { once: true });
      const play = video.play();
      if (play && play.catch) play.catch(() => { filmEnded = true; setTimeout(check, 1200); });
    } else { filmEnded = true; }
    if (skip) { skip.addEventListener("click", finish); skip.focus({ preventScroll: true }); }
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") finish(); });
    setTimeout(finish, CAP);
  });

  // ---- Mobile menu ----
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    const setOpen = (open) => { toggle.setAttribute("aria-expanded", String(open)); menu.classList.toggle("is-open", open); };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  const motion = hasGsap && !reduce;
  if (!motion) root.classList.add("no-motion");

  // ---- Services accordion: one practice open at a time ----
  const acc = document.querySelector("[data-accordion]");
  if (acc) {
    const items = [...acc.querySelectorAll(".acc-item")];
    const setItem = (item, open) => {
      const head = item.querySelector(".acc-head");
      const panel = item.querySelector(".acc-panel");
      head.setAttribute("aria-expanded", String(open));
      item.classList.toggle("is-open", open);
      if (open) {
        panel.hidden = false;
        if (motion) {
          gsap.fromTo(panel, { height: 0 }, { height: "auto", duration: 0.6, ease: "expo.out", onComplete: () => ScrollTrigger.refresh() });
          gsap.from(panel.querySelector("img"), { rotateY: -30, x: 40, opacity: 0, duration: 0.9, ease: "expo.out" });
        }
      } else if (!panel.hidden) {
        if (motion) gsap.to(panel, { height: 0, duration: 0.35, ease: "power2.inOut", onComplete: () => { panel.hidden = true; panel.style.height = ""; } });
        else panel.hidden = true;
      }
    };
    items.forEach((item) => {
      item.querySelector(".acc-head").addEventListener("click", () => {
        const opening = !item.classList.contains("is-open");
        items.forEach((other) => { if (other !== item && other.classList.contains("is-open")) setItem(other, false); });
        setItem(item, opening);
      });
    });
  }

  // ---- Booking form (Netlify Forms) ----
  document.querySelectorAll("[data-booking]").forEach((form) => {
    const status = form.querySelector(".form-status");
    const button = form.querySelector("button[type=submit]");
    const label = button.querySelector("[data-label]");
    const say = (text, kind) => { status.textContent = text; status.className = `form-status ${kind ? `is-${kind}` : ""}`; };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        say("Add your name, business and a phone number so we can call you.", "error");
        form.reportValidity();
        return;
      }
      if (location.protocol === "file:") {
        say("This preview is offline, so the form can't be sent. Bookings go through once the site is live.", "error");
        return;
      }
      button.disabled = true;
      label.textContent = "Sending…";
      try {
        const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(form)).toString() });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        label.textContent = "Booked";
        say("Thanks. We'll call you on the number you gave to set up a time.", "ok");
      } catch {
        button.disabled = false;
        label.textContent = "Book a call";
        say("We couldn't send that. Check your connection and try again.", "error");
      }
    });
  });

  // ---- Pointer depth: hero windows tilt toward the cursor; work panels tilt with a glare ----
  const stack = document.querySelector("[data-stack3d]");
  const stage = document.querySelector("[data-hero-stage]");
  if (stack && stage && fine && !reduce) {
    const hero = stage.closest(".hero");
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stack.style.setProperty("--ry", `${-16 + x * 22}deg`);
      stack.style.setProperty("--rx", `${8 - y * 14}deg`);
    });
    hero.addEventListener("pointerleave", () => { stack.style.setProperty("--ry", "-16deg"); stack.style.setProperty("--rx", "8deg"); });
  }
  if (fine && !reduce) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--ty", `${(x - 0.5) * 8}deg`);
        card.style.setProperty("--tx", `${(0.5 - y) * 6}deg`);
        card.style.setProperty("--gx", `${x * 100}%`);
        card.style.setProperty("--gy", `${y * 100}%`);
        // the cobalt corner of the rim turns toward the pointer
        card.style.setProperty("--ang", `${Math.atan2(y - 0.5, x - 0.5) * 180 / Math.PI + 180 + 45}deg`);
      });
      card.addEventListener("pointerleave", () => { card.style.setProperty("--tx", "0deg"); card.style.setProperty("--ty", "0deg"); });
    });
    // magnetic actions
    document.querySelectorAll(".block-cta, .nav-cta").forEach((btn) => {
      // magnetic pull plus a press: the inline transform would otherwise swallow the CSS :active press
      let dx = 0, dy = 0, pressed = false;
      const paint = () => { btn.style.transform = `translate(${dx}px, ${dy + (pressed ? 1 : 0)}px) scale(${pressed ? 0.98 : 1})`; };
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        dx = (e.clientX - r.left - r.width / 2) * 0.08;
        dy = (e.clientY - r.top - r.height / 2) * 0.25;
        paint();
      });
      btn.addEventListener("pointerdown", () => { pressed = true; paint(); });
      btn.addEventListener("pointerup", () => { pressed = false; paint(); });
      btn.addEventListener("pointerleave", () => { dx = dy = 0; pressed = false; btn.style.transform = ""; });
    });
  }

  // ---- Stack ring: turns slowly; the label facing you lights its row in the list ----
  const ring = document.querySelector("[data-ring]");
  if (ring) {
    const labels = [...ring.children];
    const rows = [...document.querySelectorAll(".stack-list [data-row]")];
    const step = 360 / labels.length;
    let a = 0, running = false, last = 0;
    const draw = () => {
      ring.style.transform = `rotateY(${-a}deg)`;
      let best = null, bestF = -2;
      labels.forEach((el, i) => {
        const f = Math.cos(((i * step - a) * Math.PI) / 180);
        // fully gone once a label turns past ~65 degrees, so no edge-on slivers
        el.style.opacity = Math.min(1, Math.max(0, (f - 0.6) / 0.35)).toFixed(3);
        if (f > bestF) { bestF = f; best = el; }
      });
      if (!reduce) rows.forEach((r) => r.classList.toggle("is-lit", best && r.dataset.row === best.dataset.row));
    };
    const tick = (now) => {
      if (!running) return;
      a = (a + Math.min(now - last, 50) * 0.012) % 360; last = now;
      draw();
      requestAnimationFrame(tick);
    };
    draw();
    if (!reduce) {
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !running) { running = true; last = performance.now(); requestAnimationFrame(tick); }
        else if (!e.isIntersecting) { running = false; } // keep the last lit row
      }).observe(ring);
    }
  }

  if (!motion) return;
  gsap.registerPlugin(ScrollTrigger);

  // ---- Smooth scroll (Lenis), driven by GSAP's ticker ----
  if (window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (root.classList.contains("intro-on")) { lenis.stop(); introDone.then(() => lenis.start()); }
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        const el = id.length > 1 && document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: id === "#top" ? 0 : -60, duration: 1.4 });
      });
    });
  }

  // ---- Hero entrance: lines rise, bars wipe, windows fly in from depth (after the intro lifts) ----
  introDone.then(() => {
    gsap.from(".hero-title .line > span", { yPercent: 105, duration: 1.1, ease: "expo.out", stagger: 0.08 });
    gsap.fromTo(".hero-title mark", { backgroundSize: "0% 0.84em", color: themeVar("--text") }, { backgroundSize: "100% 0.84em", color: themeVar("--on-accent"), duration: 0.8, ease: "expo.out", delay: 0.55, stagger: 0.14 });
    gsap.from(".hero-lede", { y: 18, opacity: 0, duration: 0.9, ease: "expo.out", delay: 0.3 });
    gsap.from(".win3d", { z: -700, opacity: 0, rotateY: 25, duration: 1.5, ease: "expo.out", delay: 0.2, stagger: 0.14, clearProps: "transform,opacity" });
    gsap.from(".media-card", { y: 60, opacity: 0, duration: 1, ease: "expo.out", delay: 0.8, clearProps: "transform,opacity" });
  });

  // ---- Hero recedes in depth as you scroll away ----
  gsap.fromTo("[data-stack3d]", { "--recede": 0 }, {
    "--recede": 1, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 }
  });

  // ---- Who we are: lights up word by word ----
  const statement = document.querySelector("[data-reveal-words]");
  if (statement) {
    const full = statement.textContent.trim();
    const words = full.split(/\s+/);
    statement.innerHTML = `<span class="sr-only">${full}</span>` + words.map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(" ");
    const spans = [...statement.querySelectorAll(".w")];
    ScrollTrigger.create({
      trigger: statement, start: "top 80%", end: "bottom 45%", scrub: true,
      onUpdate: (self) => {
        const lit = Math.round(self.progress * spans.length);
        spans.forEach((s, i) => { s.classList.toggle("is-on", i < lit); s.classList.toggle("is-edge", i >= lit - 3 && i < lit && self.progress < 0.99); });
      }
    });
  }

  // ---- Sections arrive in depth (position and tilt only: content stays fully visible) ----
  const rise = (selector, trigger, extra = {}) => {
    gsap.utils.toArray(selector).length && gsap.from(selector, {
      y: 70, rotateX: -18, transformOrigin: "50% 100%", duration: 1.1, ease: "expo.out", stagger: 0.1, clearProps: "transform",
      scrollTrigger: { trigger, start: "top 82%", toggleActions: "play none none none" }, ...extra
    });
  };
  rise(".fact", ".facts");
  rise(".step", ".steps");
  rise(".work-item", ".work-grid", { rotateX: 0, y: 90, clearProps: "transform" });
  rise(".acc-item", ".acc", { y: 30, rotateX: 0, stagger: 0.05 });
  gsap.utils.toArray(".section-top .display, .stack-head .display, .contact-intro .display").forEach((h) => {
    gsap.from(h, { y: 60, skewY: 3, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 88%", toggleActions: "play none none none" } });
  });

  // ---- Statement band: the old tools get crossed out ----
  gsap.utils.toArray(".band-text .line:not(.band-turn) > span").forEach((el, i) => {
    gsap.fromTo(el, { "--strike": 0 }, { "--strike": 1, ease: "none", scrollTrigger: { trigger: ".band", start: `top ${78 - i * 8}%`, end: `top ${58 - i * 8}%`, scrub: 0.4 } });
  });
  gsap.from(".band-turn > span", { xPercent: -8, duration: 1, ease: "expo.out", scrollTrigger: { trigger: ".band-turn", start: "top 85%", toggleActions: "play none none none" } });

  // ---- Process: the line fills as the steps pass ----
  const fill = document.querySelector("[data-steps-fill]");
  if (fill) gsap.fromTo(fill, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: "[data-steps]", start: "top 75%", end: "bottom 55%", scrub: 0.5 } });

  // ---- Contact: the bar wipes under "yours." ----
  gsap.fromTo(".contact .display mark", { backgroundSize: "0% 0.84em", color: themeVar("--text") }, { backgroundSize: "100% 0.84em", color: themeVar("--on-accent"), duration: 0.8, ease: "expo.out", scrollTrigger: { trigger: ".contact", start: "top 65%", toggleActions: "play none none none" } });
})();

/* ============================================================
   Flushicons — landing page behavior
   ============================================================ */

/* ------------------------------------------------------------
   1. LEMON SQUEEZY CHECKOUT
   ------------------------------------------------------------
   Set your checkout URL here once the store is live. Every element
   with a [data-buy] attribute will point to it. Leave as "" while
   you finish setting Lemon Squeezy up — buttons will smooth-scroll
   to the buy section instead.

   Find your link in Lemon Squeezy → Products → Share / "Buy now" URL,
   e.g. "https://yourstore.lemonsqueezy.com/checkout/buy/XXXXXXXX"
   Add "?embed=1" to open the nicer overlay checkout.
------------------------------------------------------------ */
const LEMON_SQUEEZY_URL = ""; // e.g. "https://complexicon.lemonsqueezy.com/checkout/buy/XXXX?embed=1"

(function wireBuyButtons() {
  const buyEls = document.querySelectorAll("[data-buy]");
  buyEls.forEach((el) => {
    if (LEMON_SQUEEZY_URL) {
      el.setAttribute("href", LEMON_SQUEEZY_URL);
      if (LEMON_SQUEEZY_URL.includes("embed=1")) {
        el.classList.add("lemonsqueezy-button");
      } else {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    }
    // If no URL is set yet, [href="#buy"] / "#" just scrolls down — safe default.
  });

  // Load Lemon Squeezy's overlay script only when an embed link is configured.
  if (LEMON_SQUEEZY_URL && LEMON_SQUEEZY_URL.includes("embed=1")) {
    const s = document.createElement("script");
    s.src = "https://assets.lemonsqueezy.com/lemon.js";
    s.defer = true;
    document.head.appendChild(s);
  }
})();

/* ------------------------------------------------------------
   2. ICON SET — drawn in the Complexicon visual language:
   single color, outlined, geometric, 24×24 grid.
------------------------------------------------------------ */
const ICONS = [
  { name: "AI Agents", svg: `<rect x="4" y="6" width="16" height="13" rx="3"/><path d="M12 6V3"/><circle cx="12" cy="2.4" r="1.2" fill="currentColor" stroke="none"/><circle cx="9" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.3" fill="currentColor" stroke="none"/><path d="M9 16c1.4 1.2 4.6 1.2 6 0"/>` },
  { name: "Generative AI", svg: `<path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M18 15l.9 2.1 2.1.9-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/>` },
  { name: "RAG", svg: `<path d="M4 6h8M4 12h6M4 18h8"/><circle cx="18" cy="6" r="2.2"/><circle cx="15" cy="12" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M14 6l2 4.2M16.3 13.6L18 16"/>` },
  { name: "Machine Learning", svg: `<circle cx="5" cy="6" r="1.8"/><circle cx="5" cy="18" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="9" r="1.8"/><circle cx="19" cy="15" r="1.8"/><path d="M6.6 7l4 4M6.6 17l4-4M13.6 11l4-1.4M13.6 13l4 1.4"/>` },
  { name: "Human + AI", svg: `<circle cx="7" cy="8" r="2.4"/><path d="M3.4 18c0-2.3 1.6-3.8 3.6-3.8s3.6 1.5 3.6 3.8"/><rect x="14" y="6" width="7" height="12" rx="2"/><path d="M17.5 9.5v5M15.5 12h4"/>` },
  { name: "Human-in-the-Loop", svg: `<circle cx="12" cy="12" r="2.2"/><path d="M12 4a8 8 0 0 1 7 4"/><path d="M12 20a8 8 0 0 1-7-4"/><path d="M19 4v4h-4M5 20v-4h4"/>` },
  { name: "Knowledge Graphs", svg: `<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="12" cy="9" r="2"/><path d="M7.4 7.2L11 8.2M16.6 7.2L13 8.2M12 11v5"/>` },
  { name: "Embeddings", svg: `<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.1" fill="currentColor" stroke="none"/><circle cx="14" cy="10" r="1.1" fill="currentColor" stroke="none"/><circle cx="10" cy="15" r="1.1" fill="currentColor" stroke="none"/><circle cx="17" cy="16" r="1.1" fill="currentColor" stroke="none"/><path d="M8 8l6 2M14 10l-4 5M10 15l7 1"/>` },
  { name: "Semantic Search", svg: `<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L20 20"/><path d="M7.5 10h5M10 7.5v5"/>` },
  { name: "Vector Search", svg: `<circle cx="12" cy="12" r="8"/><path d="M12 12l5-3M12 12l-4 3M12 12l1 5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>` },
  { name: "Model Training", svg: `<path d="M4 17c2.5-8 5-8 7.5 0"/><path d="M12.5 9c1.5 5 3 5 4.5 0"/><path d="M3 20h18"/><circle cx="19" cy="5" r="1.6" fill="currentColor" stroke="none"/>` },
  { name: "Model Inference", svg: `<rect x="4" y="8" width="10" height="8" rx="2"/><path d="M14 12h5M17 9l3 3-3 3"/><path d="M7 11v2M10 11v2"/>` },
  { name: "Intelligent Automation", svg: `<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>` },
  { name: "Data Pipelines", svg: `<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><rect x="10" y="8" width="8" height="8" rx="2"/><path d="M7 6h4a3 3 0 0 1 3 3M7 18h4a3 3 0 0 0 3-3"/>` },
  { name: "Cloud Computing", svg: `<path d="M7 17a4 4 0 0 1 0-8 5 5 0 0 1 9.6 1.4A3.5 3.5 0 0 1 16 17z"/><path d="M9 13.5h6M12 11v5" stroke-width="1.3"/>` },
  { name: "API Integration", svg: `<path d="M8 4L4 8l4 4M16 12l4 4-4 4"/><rect x="9" y="9" width="6" height="6" rx="1.5"/>` },
  { name: "Neural Networks", svg: `<circle cx="5" cy="7" r="1.6"/><circle cx="5" cy="17" r="1.6"/><circle cx="12" cy="6" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="18" r="1.6"/><circle cx="19" cy="12" r="1.6"/><path d="M6.5 7.5L10.5 6.4M6.5 7.6L10.6 11M6.5 16.5l4-3.6M6.5 16.6l4.2 1.2M13.5 6.6L17.6 11M13.5 11.6l4 .3M13.5 17.4l4-4.6"/>` },
  { name: "Prompt Engineering", svg: `<rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 10l2 2-2 2M12 14h4"/>` },
  { name: "Fine-Tuning", svg: `<path d="M4 8h6M14 8h6M4 16h10M18 16h2"/><circle cx="12" cy="8" r="2.2"/><circle cx="16" cy="16" r="2.2"/>` },
  { name: "Tokenization", svg: `<rect x="3" y="9" width="4" height="6" rx="1.2"/><rect x="9" y="9" width="6" height="6" rx="1.2"/><rect x="17" y="9" width="4" height="6" rx="1.2"/>` },
  { name: "Context Window", svg: `<rect x="3" y="6" width="18" height="12" rx="2.5"/><path d="M8 6v12M16 6v12" stroke-dasharray="1.5 2.5"/><path d="M8 12h8"/>` },
  { name: "Multimodal AI", svg: `<circle cx="8" cy="8" r="2"/><rect x="13" y="5" width="6" height="6" rx="1.5"/><path d="M4 19c1.5-3 3-3 4.5 0M13 19h6"/><path d="M8 10v3M16 11v3"/>` },
  { name: "Reinforcement Learning", svg: `<circle cx="12" cy="7" r="3"/><path d="M12 10v4M8 18h8"/><path d="M8 18l-1-3M16 18l1-3"/><path d="M15 7h3l-1.2-1.2M18 7l-1.2 1.2" stroke-width="1.2"/>` },
  { name: "Data Labeling", svg: `<path d="M4 5h9l7 7-8 8-8-8z"/><circle cx="9" cy="9" r="1.4"/><path d="M11 14l2 2 3-3" stroke-width="1.3"/>` },
  { name: "Model Deployment", svg: `<path d="M12 3l4 4-4 4-4-4z"/><path d="M12 11v6"/><path d="M6 15l6 5 6-5"/><path d="M9 17.5l3 2.5 3-2.5" opacity=".6"/>` },
  { name: "Explainable AI", svg: `<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8a2 2 0 0 1 2 2c0 1.5-2 1.6-2 3"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/>` },
  { name: "Anomaly Detection", svg: `<path d="M3 14h4l2-6 3 10 2.5-8 1.5 4h5"/><circle cx="11" cy="18" r="1.3" fill="currentColor" stroke="none"/>` },
  { name: "Vector Database", svg: `<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M9 13l3-1.5 3 1.5M12 11.5v4" stroke-width="1.2"/>` },
  { name: "Orchestration", svg: `<circle cx="12" cy="5" r="2"/><circle cx="5" cy="17" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="19" cy="17" r="2"/><path d="M12 7v4M12 11H5v4M12 11v4M12 11h7v4"/>` },
  { name: "Guardrails", svg: `<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4" stroke-width="1.4"/>` },
];

(function renderIcons() {
  const grid = document.getElementById("iconGrid");
  if (!grid) return;
  const frag = document.createDocumentFragment();
  ICONS.forEach((icon, i) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "icon-cell reveal";
    cell.setAttribute("aria-label", `Preview ${icon.name}`);
    // richer cascade: a wave that resets every 10 cells so delays stay short
    cell.style.transitionDelay = `${(i % 10) * 45}ms`;
    cell.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">${icon.svg}</svg>
      <span>${icon.name}</span>`;
    cell.addEventListener("click", () => openLightbox(i));
    frag.appendChild(cell);
  });
  grid.appendChild(frag);
})();

/* ------------------------------------------------------------
   2b. ICON PREVIEW LIGHTBOX
------------------------------------------------------------ */
const openLightbox = (function () {
  const lb = document.getElementById("lightbox");
  if (!lb) return function () {};
  const elLight = lb.querySelector("#lbLight");
  const elDark = lb.querySelector("#lbDark");
  const elName = lb.querySelector("#lbName");
  const elPos = lb.querySelector("#lbPos");
  const elSizes = lb.querySelector("#lbSizes");
  const closers = lb.querySelectorAll("[data-lb-close]");
  const prevBtn = lb.querySelector(".lb-prev");
  const nextBtn = lb.querySelector(".lb-next");
  const SIZES = [16, 24, 32, 64, 128];
  let idx = 0;
  let lastFocus = null;

  function svgMarkup(icon) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svg}</svg>`;
  }

  function render() {
    const icon = ICONS[idx];
    elLight.innerHTML = svgMarkup(icon);
    elDark.innerHTML = svgMarkup(icon);
    elName.textContent = icon.name;
    elPos.textContent = idx + 1;
    elSizes.innerHTML = SIZES.map((s) => {
      const px = Math.min(s, 96);
      return `<div class="lb-size"><span class="chip" style="width:${px}px;height:${px}px">
        <svg viewBox="0 0 24 24" width="${px}" height="${px}" aria-hidden="true">${icon.svg}</svg>
      </span><b>${s}px</b></div>`;
    }).join("");
  }

  function open(i) {
    idx = (i + ICONS.length) % ICONS.length;
    render();
    lastFocus = document.activeElement;
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    (lb.querySelector(".lb-close")).focus();
  }
  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  const step = (d) => { idx = (idx + d + ICONS.length) % ICONS.length; render(); };

  closers.forEach((c) => c.addEventListener("click", close));
  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  return open;
})();

/* ------------------------------------------------------------
   3. LINE-BY-LINE HEADING REVEAL
   Splits each [data-lines] heading into its actual rendered lines,
   wraps each line in an overflow mask, and slides them up with a
   stagger when the heading scrolls into view. Re-splits on resize
   because line breaks depend on width.
------------------------------------------------------------ */
const prefersReduced =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function splitIntoLines(el) {
  if (el.__orig == null) el.__orig = el.innerHTML;
  else el.innerHTML = el.__orig;

  // Tokenize direct children: words, <br> breaks, and inline nodes (e.g. caret)
  const tokens = [];
  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/\s+/).forEach((word) => {
        if (word === "") return;
        const s = document.createElement("span");
        s.className = "w";
        s.style.display = "inline-block";
        s.textContent = word;
        tokens.push({ t: "w", el: s });
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === "BR") {
        tokens.push({ t: "br" });
      } else {
        node.style.display = "inline-block";
        tokens.push({ t: "node", el: node });
      }
    }
  });

  // Lay flat to measure natural wrapping
  el.innerHTML = "";
  tokens.forEach((tk, i) => {
    if (tk.t === "br") return;
    if (i > 0 && tokens[i - 1].t !== "br" && tk.t !== "node") {
      el.appendChild(document.createTextNode(" "));
    }
    el.appendChild(tk.el);
  });

  // Group tokens into lines by measured offsetTop (and explicit <br>)
  const lines = [];
  let cur = null, curTop = null;
  tokens.forEach((tk) => {
    if (tk.t === "br") { cur = null; curTop = null; return; }
    if (tk.t === "node") { if (cur) cur.push(tk); return; } // attach caret to current line
    const top = tk.el.offsetTop;
    if (cur === null || top !== curTop) { cur = []; lines.push(cur); curTop = top; }
    cur.push(tk);
  });

  // Rebuild as masked lines
  el.innerHTML = "";
  lines.forEach((line, li) => {
    const outer = document.createElement("span");
    outer.className = "line";
    const inner = document.createElement("span");
    inner.className = "line-in";
    inner.style.setProperty("--i", li);
    line.forEach((tk, wi) => {
      if (wi > 0 && tk.t !== "node") inner.appendChild(document.createTextNode(" "));
      tk.el.style.display = "";
      inner.appendChild(tk.el);
    });
    outer.appendChild(inner);
    el.appendChild(outer);
  });
}

const lineTargets = Array.from(document.querySelectorAll("[data-lines]"));
if (!prefersReduced && lineTargets.length) {
  lineTargets.forEach(splitIntoLines);

  let lastW = window.innerWidth, rt;
  window.addEventListener("resize", () => {
    if (window.innerWidth === lastW) return; // ignore mobile URL-bar height changes
    lastW = window.innerWidth;
    clearTimeout(rt);
    rt = setTimeout(() => {
      document.documentElement.classList.add("no-line-anim");
      lineTargets.forEach(splitIntoLines);
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          document.documentElement.classList.remove("no-line-anim")
        )
      );
    }, 180);
  });
}

/* ------------------------------------------------------------
   4. SCROLL REVEAL
------------------------------------------------------------ */
(function scrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
})();

/* ------------------------------------------------------------
   5. NAV + STICKY BUY BAR ON SCROLL
------------------------------------------------------------ */
(function scrollUI() {
  const nav = document.getElementById("nav");
  const bar = document.querySelector(".buy-bar");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    if (bar) bar.classList.toggle("show", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ------------------------------------------------------------
   5b. SCROLLSPY — highlight the active section in the nav
------------------------------------------------------------ */
(function scrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-links a[data-spy]"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = new Map(links.map((a) => [a.dataset.spy, a]));
  const sections = links
    .map((a) => document.getElementById(a.dataset.spy))
    .filter(Boolean);

  let activeId = null;
  const setActive = (id) => {
    if (id === activeId) return;
    activeId = id;
    links.forEach((a) => a.classList.toggle("active", a.dataset.spy === id));
  };

  const io = new IntersectionObserver(
    (entries) => {
      // pick the entry nearest the top that is intersecting
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));
})();

/* ------------------------------------------------------------
   6. THEME TOGGLE  (light / dark, remembers the choice)
------------------------------------------------------------ */
(function themeToggle() {
  const KEY = "flushicons-theme";
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const systemDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = () => {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
    return systemDark() ? "dark" : "light";
  };
  const label = () =>
    btn.setAttribute(
      "aria-label",
      current() === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );

  label();
  btn.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    try { localStorage.setItem(KEY, next); } catch (e) {}
    root.setAttribute("data-theme", next);
    label();
  });
})();

/* ------------------------------------------------------------
   7. TIME-BASED GREETING  (a nod to the Flush brand)
------------------------------------------------------------ */
(function greeting() {
  const el = document.getElementById("greeting");
  if (!el) return;
  const h = new Date().getHours();
  el.textContent =
    h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
})();

/* ------------------------------------------------------------
   8. FOOTER YEAR
------------------------------------------------------------ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================================
   AFJ AUTO PARTS — MOTION ENHANCEMENTS (progressive, additive)
   GSAP + ScrollTrigger power the premium motion layer:
   scroll progress bar, hero parallax, count-up stat numbers,
   and magnetic CTAs. Everything degrades gracefully — if GSAP
   fails to load or the user prefers reduced motion, the site
   still works and numbers show their final values.
   ============================================================ */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const hasGSAP = typeof window.gsap !== "undefined";

  if (hasGSAP && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initScrollProgress();
    initHeaderScrollState();
    initStatCounters();
    if (!reduceMotion && hasGSAP) {
      initHeroParallax();
    }
    // Recalculate trigger positions once images/fonts settle
    if (hasGSAP && window.ScrollTrigger) {
      window.addEventListener("load", () => ScrollTrigger.refresh());
    }
  });

  /* ---------- Thin rust reading-progress bar at the very top ---------- */
  function initScrollProgress() {
    const bar = document.getElementById("scrollProgress");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.transform = `scaleX(${p})`;
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true },
    );
    update();
  }

  /* ---------- Header gains a stronger backdrop once you scroll ---------- */
  function initHeaderScrollState() {
    const header = document.querySelector("header");
    if (!header) return;
    const onScroll = () =>
      header.classList.toggle("scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Count-up numbers for hero + stats band ---------- */
  // Parses "40,000+", "98%", "24hr", "90-Day", "40k" into
  // { prefix, value, decimals, suffix } so we animate only the number.
  function parseStat(text) {
    const m = String(text).match(/^(\D*)([\d,]*\.?\d+)(.*)$/s);
    if (!m) return null;
    const raw = m[2].replace(/,/g, "");
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    return {
      prefix: m[1],
      value: parseFloat(raw),
      decimals,
      grouped: m[2].includes(","),
      suffix: m[3],
    };
  }

  function formatStat(n, s) {
    let num = s.decimals
      ? n.toFixed(s.decimals)
      : Math.round(n).toString();
    if (s.grouped) {
      const parts = num.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      num = parts.join(".");
    }
    return s.prefix + num + s.suffix;
  }

  function initStatCounters() {
    const nodes = document.querySelectorAll(
      ".hero-stats .num, .stats-band .num",
    );
    nodes.forEach((el) => {
      const spec = parseStat(el.textContent.trim());
      if (!spec) return;

      // No motion or no GSAP → just leave the final value in place.
      if (reduceMotion || !hasGSAP || !window.ScrollTrigger) return;

      const obj = { n: 0 };
      el.textContent = formatStat(0, spec);
      gsap.to(obj, {
        n: spec.value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        onUpdate: () => (el.textContent = formatStat(obj.n, spec)),
        onComplete: () => (el.textContent = formatStat(spec.value, spec)),
      });
    });
  }

  /* ---------- Hero parallax: photo drifts slower than the copy ---------- */
  function initHeroParallax() {
    const hero = document.getElementById("hero");
    const bg = document.getElementById("heroBg");
    const copy = document.querySelector(".hero-copy");
    if (!hero || !bg) return;

    gsap.to(bg, {
      yPercent: 14,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    if (copy) {
      gsap.to(copy, {
        y: -36,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }
  }

})();

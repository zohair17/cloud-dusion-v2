"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../primitives/cn";

/**
 * The plate a refresh lands on.
 *
 * The mark is both the mask and the picture: a ghost of the shape waits, the
 * real logo rises into it in its own colours as the page loads, and a highlight
 * sweeps across the whole thing. That is what makes the logo animate, rather
 * than a spinner animating next to a static one.
 *
 * The bar underneath is the same number in a second form. Real load progress is
 * one step — a document is loading or it is not — so the bar creeps on a decay
 * curve towards 92% and only completes once the window has actually fired
 * `load`. It never rushes to 100 and then waits, and it never sits at 99.
 *
 * Its stylesheet is inlined beside it rather than living in `globals.css`, and
 * names its colours literally rather than through the theme tokens. The whole
 * point of this plate is to be right on the first paint, and on a slow
 * connection the main stylesheet has not arrived by then — a loader that
 * flashes unstyled is worse than no loader.
 */
const MIN_VISIBLE = 700;

/* However slow the connection, the plate gets out of the way: past this the
   page is readable enough, and holding a splash screen up for a full `load` on
   a bad connection is worse than showing the page still settling. */
const MAX_WAIT = 3600;
const FADE = 520;

/** Where the creep curve is at `elapsed`, and its inverse. */
const CREEP_AT = (elapsed) => 92 * (1 - Math.exp(-elapsed / 620));
const CREEP_INVERSE = (value) => -620 * Math.log(1 - Math.min(0.98, value / 92));

const CSS = `
.cfg-loader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #ffffff;
  transition: opacity .5s ease, visibility .5s ease;
  animation: cfg-loader-failsafe .4s linear 9s forwards;
}
.cfg-loader-out { opacity: 0; visibility: hidden; pointer-events: none; }

.cfg-loader-stage {
  position: relative;
  display: block;
  width: clamp(8rem, 26vw, 11.5rem);
  aspect-ratio: 1;
  animation: cfg-loader-float 2.8s ease-in-out infinite;
}

/* One soft bloom behind the mark, breathing out of phase with it. */
.cfg-loader-halo {
  position: absolute;
  inset: -34%;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #babaf3, rgba(186,186,243,0) 70%);
  animation: cfg-loader-halo 2.8s ease-in-out infinite;
}

.cfg-loader-mark {
  position: absolute;
  inset: 0;
  display: block;
  overflow: hidden;
  -webkit-mask-image: url("/asset/loader-mark.png");
          mask-image: url("/asset/loader-mark.png");
  -webkit-mask-size: contain;
          mask-size: contain;
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  -webkit-mask-position: center;
          mask-position: center;
}
.cfg-loader-mark > span { position: absolute; inset: 0; display: block; }

/* What the shape looks like before any of it has arrived. */
.cfg-loader-ghost { background: #d7d7f6; }

/*
 * The logo arriving in its own colours — the blue cloud, its two grey arcs, the
 * blue strokes — rather than a flat brand wash. It is the same file the mask is
 * cut from, held still while the window over it opens upward, so the mark never
 * slides: only how much of it has landed changes.
 *
 * Before the script arrives, this and the bar move on their own: on a slow
 * connection the markup paints seconds ahead of the bundle, and a progress bar
 * frozen at zero reads as a hung page. The stylesheet creeps them towards the
 * same place the script would have, and cfg-loader-live hands control over the
 * moment the script is actually running.
 */
.cfg-loader-colour {
  background-image: url("/asset/loader-mark.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  clip-path: inset(96% 0 0 0);
  animation: cfg-loader-rise 6s cubic-bezier(.16,.8,.28,1) forwards;
  transition: clip-path .18s linear;
  will-change: clip-path;
}
.cfg-loader-live .cfg-loader-colour,
.cfg-loader-live .cfg-loader-bar { animation: none; }

.cfg-loader-sweep {
  background: linear-gradient(105deg, rgba(255,255,255,0) 38%, rgba(255,255,255,.9) 50%, rgba(255,255,255,0) 62%);
  animation: cfg-loader-sweep 2s cubic-bezier(.45,0,.25,1) infinite;
}

.cfg-loader-track {
  position: relative;
  width: clamp(11rem, 44vw, 15rem);
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: #d7d7f6;
}
.cfg-loader-bar {
  position: absolute;
  inset: 0;
  transform-origin: left center;
  transform: scaleX(.04);
  border-radius: inherit;
  background: linear-gradient(90deg, #6f6de1, #3533cd);
  animation: cfg-loader-creep 6s cubic-bezier(.16,.8,.28,1) forwards;
  transition: transform .18s linear;
}

.cfg-loader-count {
  margin: 0;
  font-family: var(--font-poppins), system-ui, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: .16em;
  color: #3533cd;
  opacity: 0;
  transition: opacity .3s ease;
}
/* The number is the one part the stylesheet cannot fake, so it waits. */
.cfg-loader-live .cfg-loader-count { opacity: 1; }
.cfg-loader-count span { margin-left: .15em; opacity: .55; }

@keyframes cfg-loader-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-8px) scale(1.04); }
}
@keyframes cfg-loader-halo {
  0%, 100% { opacity: .6; transform: scale(.88); }
  50%      { opacity: .2; transform: scale(1.14); }
}
@keyframes cfg-loader-sweep {
  0%        { transform: translateX(-120%); }
  55%, 100% { transform: translateX(120%); }
}
@keyframes cfg-loader-creep {
  from { transform: scaleX(.04); }
  to   { transform: scaleX(.88); }
}
@keyframes cfg-loader-rise {
  from { clip-path: inset(96% 0 0 0); }
  to   { clip-path: inset(12% 0 0 0); }
}
@keyframes cfg-loader-failsafe { to { opacity: 0; visibility: hidden; } }

@media (prefers-reduced-motion: reduce) {
  .cfg-loader-stage, .cfg-loader-halo { animation: none; }
  .cfg-loader-sweep { display: none; }
}
`;

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [live, setLive] = useState(false);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const frame = useRef(0);
  const barRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let start = performance.now();
    let loaded = document.readyState === "complete";

    const onLoad = () => {
      loaded = true;
    };
    if (!loaded) window.addEventListener("load", onLoad, { once: true });

    let current = 0;
    let handed = false;

    const tick = (now) => {
      /* The first frame is where the script takes the animation off the
         stylesheet, and it happens here rather than in the effect body so the
         handover is one render rather than two. */
      if (!handed) {
        handed = true;
        /* Pick up wherever the stylesheet's creep had got to, so the bar does
           not jump backwards the instant the script arrives. */
        const painted = barRef.current ? getComputedStyle(barRef.current).transform : "none";
        if (painted !== "none") {
          const scaleX = new DOMMatrixReadOnly(painted).a;
          if (Number.isFinite(scaleX)) current = Math.min(92, Math.max(0, scaleX * 100));
        }
        /* And wind the clock back to the point on the curve that value sits at,
           so the script continues the stylesheet's motion instead of restarting
           it and dragging the bar backwards. */
        start = now - CREEP_INVERSE(current);
        setLive(true);
      }

      const elapsed = now - start;

      /* Decay towards 92: quick at first, then visibly slowing, which is what
         waiting for a document actually feels like. A bar that ever goes
         backwards reads as an error, so the target never falls below where the
         bar already is. */
      const finished = (loaded && elapsed > MIN_VISIBLE) || elapsed > MAX_WAIT;
      const target = Math.max(current, finished ? 100 : Math.min(CREEP_AT(elapsed), 92));

      current += (target - current) * (reduced ? 0.5 : 0.14);

      if (current > 99.4) {
        setProgress(100);
        setDone(true);
        return;
      }

      setProgress(current);
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  /* The page holds still underneath while the plate is up, so nobody watches
     the layout settle behind it. */
  useEffect(() => {
    if (gone) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [gone]);

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => setGone(true), FADE);
    return () => clearTimeout(timer);
  }, [done]);

  if (gone) return null;

  const shown = Math.round(progress);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div
        className={cn("cfg-loader", live && "cfg-loader-live", done && "cfg-loader-out")}
        role="status"
        aria-live="polite"
        aria-label={`Loading, ${shown} percent`}
      >
        <div aria-hidden="true" className="cfg-loader-stage">
          <span className="cfg-loader-halo" />

          <span className="cfg-loader-mark">
            <span className="cfg-loader-ghost" />
            <span
              className="cfg-loader-colour"
              style={live ? { clipPath: `inset(${100 - progress}% 0 0 0)` } : undefined}
            />
            <span className="cfg-loader-sweep" />
          </span>
        </div>

        <div aria-hidden="true" className="cfg-loader-track">
          <span
            ref={barRef}
            className="cfg-loader-bar"
            style={live ? { transform: `scaleX(${progress / 100})` } : undefined}
          />
        </div>

        <p aria-hidden="true" className="cfg-loader-count">
          {String(shown).padStart(2, "0")}
          <span>%</span>
        </p>
      </div>
    </>
  );
}

export default PageLoader;

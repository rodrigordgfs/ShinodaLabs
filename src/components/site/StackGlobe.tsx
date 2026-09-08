import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Globe } from "cobe";

const stacks = [
  { name: "React", icon: "react", color: "#087ea4", url: "https://react.dev" },
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#3178c6",
    url: "https://www.typescriptlang.org",
  },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#0891b2", url: "https://tailwindcss.com" },
  { name: "TanStack", icon: "tanstack", color: "#d97706", url: "https://tanstack.com" },
  { name: "Framer Motion", icon: "framer", color: "#a333da", url: "https://motion.dev" },
  { name: "Node.js", icon: "nodedotjs", color: "#43853d", url: "https://nodejs.org" },
  { name: "Vercel", icon: "vercel", color: "currentColor", url: "https://vercel.com" },
  { name: "Cloudflare", icon: "cloudflare", color: "#e87919", url: "https://www.cloudflare.com" },
];
const locations: [number, number][] = [
  [37.77, -122.42],
  [40.71, -74],
  [-23.55, -46.63],
  [51.51, -0.13],
  [52.52, 13.4],
  [35.68, 139.69],
  [1.35, 103.82],
  [-33.87, 151.21],
];

const globeScale = 0.96;
const markerElevation = 0.05;

// Match COBE's spherical projection so labels stay on their actual markers.
function projectMarker([latitude, longitude]: [number, number], phi: number, theta: number) {
  const lat = (latitude * Math.PI) / 180;
  const lon = (longitude * Math.PI) / 180 - Math.PI;
  const radius = 0.8 + markerElevation;
  const x = -Math.cos(lat) * Math.cos(lon) * radius;
  const y = Math.sin(lat) * radius;
  const z = Math.cos(lat) * Math.sin(lon) * radius;
  const horizontal = Math.cos(phi) * x + Math.sin(phi) * z;
  const vertical =
    Math.sin(phi) * Math.sin(theta) * x + Math.cos(theta) * y - Math.cos(phi) * Math.sin(theta) * z;
  const depth =
    -Math.sin(phi) * Math.cos(theta) * x +
    Math.sin(theta) * y +
    Math.cos(phi) * Math.cos(theta) * z;
  return {
    left: `${(horizontal * globeScale + 1) * 50}%`,
    top: `${(1 - vertical * globeScale) * 50}%`,
    visible: depth >= 0 || horizontal * horizontal + vertical * vertical >= 0.64,
  };
}

export function StackGlobe() {
  const host = useRef<HTMLDivElement>(null);
  const labels = useRef<(HTMLAnchorElement | null)[]>([]);
  const controls = useRef({
    phi: 0.4,
    theta: 0.18,
    targetTheta: 0.18,
    dragging: false,
    reduced: false,
    previousX: 0,
  });
  const redraw = useRef<() => void>(() => {});
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let globe: Globe | undefined;
    let disposed = false;
    let frame = 0;
    let visible = true;
    let lastTime = 0;
    let size = element.clientWidth;
    const state = controls.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    state.reduced = media.matches;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    element.append(canvas);

    const positionLabels = () => {
      labels.current.forEach((label, index) => {
        if (!label) return;
        const point = projectMarker(locations[index], state.phi, state.theta);
        label.style.left = point.left;
        label.style.top = point.top;
        label.style.visibility = point.visible ? "visible" : "hidden";
        label.style.opacity = point.visible ? "1" : "0";
        label.tabIndex = point.visible ? 0 : -1;
      });
    };
    const draw = () => {
      globe?.update({ phi: state.phi, theta: state.theta });
      positionLabels();
    };
    redraw.current = draw;
    const animate = (now: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      const elapsed = lastTime ? Math.min((now - lastTime) / 1000, 0.25) : 0;
      lastTime = now;
      if (!state.dragging) state.phi += elapsed * (state.reduced ? 0.08 : 0.22);
      state.theta += (state.targetTheta - state.theta) * 0.045;
      draw();
      frame = requestAnimationFrame(animate);
    };
    const start = () => {
      if (!frame && !disposed && visible && !document.hidden) {
        lastTime = 0;
        frame = requestAnimationFrame(animate);
      }
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const observer = new ResizeObserver(() => {
      size = element.clientWidth;
      globe?.update({ width: size, height: size });
      draw();
    });
    observer.observe(element);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    intersection.observe(element);
    const visibility = () => {
      if (document.hidden) stop();
      else start();
    };
    const preference = () => {
      state.reduced = media.matches;
      start();
    };
    const followPointer = (event: PointerEvent) => {
      if (state.reduced || state.dragging || !visible || event.pointerType !== "mouse") return;
      state.targetTheta = 0.18 + (event.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("pointermove", followPointer, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", preference);

    void import("cobe")
      .then(({ default: createGlobe }) => {
        if (disposed) return;
        const context =
          canvas.getContext("webgl2", { alpha: true, antialias: true }) ||
          canvas.getContext("webgl", { alpha: true, antialias: true });
        if (!context) {
          setStatus("fallback");
          return;
        }
        globe = createGlobe(canvas, {
          width: size,
          height: size,
          devicePixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),
          phi: state.phi,
          theta: state.theta,
          dark: 1,
          diffuse: 1.6,
          mapSamples: size < 400 ? 10000 : 18000,
          mapBrightness: 4.5,
          mapBaseBrightness: 0.035,
          baseColor: [0.19, 0.25, 0.37],
          markerColor: [0.2, 0.46, 1],
          glowColor: [0.06, 0.12, 0.25],
          scale: globeScale,
          markerElevation,
          opacity: 1,
          markers: locations.map((location, index) => ({
            location,
            size: 0.045,
            id: stacks[index].icon,
          })),
          arcs: locations
            .slice(1)
            .map((location, index) => ({ from: locations[index], to: location })),
          arcColor: [0.18, 0.42, 1],
          arcWidth: 0.5,
          arcHeight: 0.18,
        });
        setStatus("ready");
        draw();
        start();
        // The map texture loads asynchronously; also refresh it when motion is disabled.
        canvas.addEventListener("webglcontextlost", onContextLost);
      })
      .catch(() => {
        if (!disposed) setStatus("fallback");
      });
    const onContextLost = () => {
      stop();
      setStatus("fallback");
    };
    const textureRefresh = window.setTimeout(draw, 700);
    positionLabels();
    return () => {
      disposed = true;
      stop();
      window.clearTimeout(textureRefresh);
      observer.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", followPointer);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", preference);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      globe?.destroy();
      element.replaceChildren();
      redraw.current = () => {};
    };
  }, []);

  return (
    <div className="sl-globe sl-stack-globe" data-globe-status={status}>
      <div className="sl-globe-stage">
        <div className="sl-globe-fallback" aria-hidden="true" />
        <div
          ref={host}
          className="sl-globe-canvas"
          role="group"
          aria-label="Globo interativo de tecnologias"
          tabIndex={0}
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            controls.current.dragging = true;
            controls.current.previousX = event.clientX;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const state = controls.current;
            if (!state.dragging) return;
            state.phi += (event.clientX - state.previousX) * 0.008;
            state.previousX = event.clientX;
            redraw.current();
          }}
          onPointerUp={(event) => {
            controls.current.dragging = false;
            if (event.currentTarget.hasPointerCapture(event.pointerId))
              event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onLostPointerCapture={() => {
            controls.current.dragging = false;
          }}
          onPointerCancel={() => {
            controls.current.dragging = false;
          }}
          onKeyDown={(event) => {
            if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
              event.preventDefault();
              controls.current.phi += event.key === "ArrowRight" ? 0.2 : -0.2;
              redraw.current();
            }
          }}
        />
        <div className="sl-globe-labels" aria-label="Tecnologias utilizadas">
          {stacks.map((stack, index) => {
            const point = projectMarker(locations[index], 0.4, 0.18);
            return (
              <a
                key={stack.name}
                ref={(node) => {
                  labels.current[index] = node;
                }}
                href={stack.url}
                target="_blank"
                rel="noreferrer"
                className="sl-stack-label"
                tabIndex={point.visible ? 0 : -1}
                style={
                  {
                    left: point.left,
                    top: point.top,
                    visibility: point.visible ? "visible" : "hidden",
                    opacity: point.visible ? 1 : 0,
                    "--label-shift": index === 3 ? "-100%" : index === 4 ? "0%" : "-50%",
                    "--label-pin": index === 3 ? "100%" : index === 4 ? "0%" : "50%",
                    "--label-lift": index === 4 ? "48px" : "10px",
                    "--stack-color": stack.color,
                    "--stack-icon": `url('/stack-icons/${stack.icon}.svg')`,
                  } as CSSProperties
                }
              >
                <span className="sl-stack-icon" aria-hidden="true" />
                {stack.name}
                <ArrowMark />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function ArrowMark() {
  return (
    <svg viewBox="0 0 12 12" width="10" height="10" fill="none" aria-hidden="true">
      <path d="M3 9 9 3M3 3h6v6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

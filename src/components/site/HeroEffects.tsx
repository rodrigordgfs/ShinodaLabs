import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import heroBg from "@/assets/hero-bg.webp";

export function HeroEffectsStatic() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 scale-105 opacity-[0.32]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          maskImage: "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,oklch(0.78_0.14_180/0.14),transparent_28rem)] mix-blend-screen"
        aria-hidden
      />
      <div className="bg-grid bg-grid-fade absolute -inset-8 z-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] z-0 h-[min(560px,75vw)] w-[min(780px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.14 180 / 0.12) 0%, oklch(0.78 0.14 180 / 0.04) 42%, transparent 68%)",
        }}
        aria-hidden
      />
    </>
  );
}

export function HeroEffects() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reducedMotion) {
    return <HeroEffectsStatic />;
  }

  return <HeroEffectsInteractive />;
}

function HeroEffectsInteractive() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(42);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 26, mass: 0.65 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 26, mass: 0.65 });
  const imageX = useTransform(smoothX, [0, 100], [-12, 12]);
  const imageY = useTransform(smoothY, [0, 100], [-8, 8]);
  const gridX = useTransform(smoothX, [0, 100], [14, -14]);
  const gridY = useTransform(smoothY, [0, 100], [10, -10]);
  const glowX = useTransform(smoothX, [0, 100], [-32, 32]);
  const glowY = useTransform(smoothY, [0, 100], [-22, 22]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, oklch(0.78 0.14 180 / 0.14), transparent 28rem)`;

  useEffect(() => {
    const section = document.getElementById("top");
    if (!section) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
      pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
    };

    const handlePointerLeave = () => {
      pointerX.set(50);
      pointerY.set(42);
    };

    section.addEventListener("pointermove", handlePointerMove, { passive: true });
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.32]"
        style={{
          x: imageX,
          y: imageY,
          scale: 1.05,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          maskImage: "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 75% at 50% 38%, black 12%, transparent 78%)",
        }}
      />
      <motion.div className="absolute inset-0 z-0 mix-blend-screen" style={{ background: spotlight }} />
      <motion.div
        className="bg-grid bg-grid-fade absolute -inset-8 z-0 opacity-40"
        style={{ x: gridX, y: gridY }}
      />
      <motion.div
        className="absolute left-1/2 top-[38%] z-0 h-[min(560px,75vw)] w-[min(780px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.14 180 / 0.12) 0%, oklch(0.78 0.14 180 / 0.04) 42%, transparent 68%)",
        }}
      />
    </div>
  );
}

"use client"
import { useEffect } from "react"
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      touchMultiplier: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let animationFrameId = 0;

    const animate = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return null;
}

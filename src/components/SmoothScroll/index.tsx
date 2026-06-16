"use client"
import { useEffect } from "react"
import Lenis from "lenis";

export default function SmoothScroll() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      touchMultiplier: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}

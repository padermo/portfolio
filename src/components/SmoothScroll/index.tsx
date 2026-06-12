"use client"
import { useEffect } from "react"
import Lenis from "lenis";

export default function SmoothScroll() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // desplazamiento (tiempo en segundos)
      lerp: 0.08, // suavizado
      touchMultiplier: 1.2, //sensibilidad touch
      smoothWheel: true, // suavizado mouse
      wheelMultiplier: 1, // sensibilidad mouse
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}

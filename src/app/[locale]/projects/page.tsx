"use client";
import { useEffect } from "react";
import SkillsWithProjects from "@/components/SkillsWithProjects";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";

export default function AllProjects() {
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
  return (
    <main>
      <Navbar />
      <SkillsWithProjects />
    </main>
  );
}

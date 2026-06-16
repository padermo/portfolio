"use client";
import { useEffect, useState } from "react";
import { Skills } from "../Banners/Skills";
import { AllProjects } from "../Banners/AllProjects";

export default function SkillsWithProjects() {
  const [selectedSkill, setSelectedSkill] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return JSON.parse(
      localStorage.getItem("skills:v1") || "[]"
    );
  });

  // guarda al cambiar
  useEffect(() => {
    localStorage.setItem("skills:v1", JSON.stringify(selectedSkill));
  }, [selectedSkill]);

  // setear el estado al click
  const handleSkill = (skill: string) => {
    setSelectedSkill((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  return (
    <>
      <Skills selectedSkill={selectedSkill} handleSkill={handleSkill} />
      <AllProjects selectedSkill={selectedSkill} />
    </>
  );
}

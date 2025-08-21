"use client";
import { useEffect, useState } from "react";
import { Skills, AllProjects } from "../Banners";

export default function SkillsWithProjects() {
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);

  // recupera al cargar
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("skills") || "[]");
    setSelectedSkill(stored);
  }, []);

  // guarda al cambiar
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(selectedSkill));
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

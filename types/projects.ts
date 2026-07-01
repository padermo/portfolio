export const PROJECT_IDS = [
  "sanatorio",
  "centroMedico",
  "creativeTools",
  "printec",
  "analiaPuentes",
  "regionario",
  "bristol",
  "setpro",
] as const;

export type ProjectId = typeof PROJECT_IDS[number];

export type Skill =
  | "Next JS"
  | "React JS"
  | "TypeScript"
  | "JavaScript"
  | "Tailwind"
  | "Git"
  | "Context"
  | "SWR"
  | "Node JS"
  | "Express"
  | "JWT"
  | "MongoDB"
  | "React Native"
  | "Redux"
  | "Moti"
  | "PostgreSQL"
  | "Vite"
  | "HTML"
  | "CSS"
  | "Bootstrap"
  | "Framer Motion"
  | "Swiper"
  | "Next Intl"
  | "Radix"
  | "Sass";

export interface Project {
  id: ProjectId;
  image: string;
  skills: readonly Skill[];
  featured: boolean;
  url?: string;
}

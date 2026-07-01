import { Project } from "@/types/projects";

export const PROJECTS = [
  {
    id: "sanatorio",
    featured: true,
    image: "/images/sanatorio-colegiales.webp",
    url: "https://sanatoriocolegiales.com.ar/",
    skills: [
      "Next JS",
      "React JS",
      "JavaScript",
      "Sass",
      "Context",
      "Git"
    ]
  },
  {
    id: "centroMedico",
    featured: false,
    image: "/images/centro-medico-sanatorio.webp",
    url: "https://centromedico.sanatoriocolegiales.com.ar/es",
    skills: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind",
      "Git"
    ]
  },
  {
    id: "creativeTools",
    featured: true,
    image: "/images/creative-tools.webp",
    url: "https://creative-tools.vercel.app/",
    skills: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind",
      "Context",
      "SWR",
      "Node JS",
      "Express",
      "JWT",
      "MongoDB",
      "Next Intl",
      "Git"
    ]
  },
  {
    id: "printec",
    featured: false,
    image: "/images/printec.webp",
    skills: [
      "React Native",
      "React JS",
      "JavaScript",
      "Tailwind",
      "Redux",
      "Moti",
      "Node JS",
      "SWR",
      "JWT",
      "Express",
      "PostgreSQL",
      "Git"
    ]
  },
  {
    id: "analiaPuentes",
    featured: false,
    image: "/images/analia-puentes.webp",
    url: "https://www.analiapuentes.com/",
    skills: [
      "Vite",
      "HTML",
      "Tailwind",
      "JavaScript",
      "Git"
    ]
  },
  {
    id: "regionario",
    featured: false,
    image: "/images/regionario.webp",
    url: "https://www.regionariovinos.com/es",
    skills: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Swiper",
      "Next Intl",
      "Git"
    ]
  },
  {
    id: "bristol",
    featured: false,
    image: "/images/bristol-medicine.webp",
    url: "https://www.bristolmedicine.com.ar/",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git"
    ]
  },
  {
    id: "setpro",
    featured: false,
    image: "/images/setpro.webp",
    skills: [
      "Next JS",
      "React JS",
      "TypeScript",
      "Tailwind",
      "Git",
      "Radix"
    ]
  }
] satisfies readonly Project[];

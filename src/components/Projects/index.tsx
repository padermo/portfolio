import { useTranslations } from "next-intl";
import CombineSkillProjects from "../CombineSkillProjects";
import type { SkillsData } from "../Banners/Skills";
import type { ProjectsData } from "../Banners/AllProjects";

export default function Projects() {
  const t = useTranslations("projects");
  const skills: SkillsData = t.raw("skills");
  const projects: ProjectsData = t.raw("allProjects")
  return <CombineSkillProjects skills={skills} projects={projects} />
}

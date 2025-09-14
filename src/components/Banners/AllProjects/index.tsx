import { useTranslations } from "next-intl";
import CardProject, { type ContentProjects } from "@/components/CardProject";

interface Props {
  selectedSkill: string[];
}

export const AllProjects = ({ selectedSkill }: Props) => {
  const t = useTranslations("projects.allProjects");
  const projects: ContentProjects[] = t.raw("content");

  return (
    <section id="allProjects">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <div className="all-projects">
            <CardProject projects={projects} selectedSkill={selectedSkill} />
          </div>
        </div>
      </div>
    </section>
  );
};

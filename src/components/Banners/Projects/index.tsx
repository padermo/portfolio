import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import CardProject, { type ContentProjects } from "@/components/CardProject";

export const Projects = () => {
  const t = useTranslations("home.projects");
  const projects: ContentProjects[] = t.raw("content");

  return (
    <article id="projects" className="content">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <div className="projects">
            <CardProject projects={projects} />
          </div>
          <Link href="/projects" className="text-sm underline">
            {t("more")}
          </Link>
        </div>
      </div>
    </article>
  );
};

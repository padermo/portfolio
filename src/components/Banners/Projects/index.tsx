import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import CardProject, { type ContentProjects } from "@/components/CardProject";
import Heading from "@/components/UI/Heading";

export const Projects = () => {
  const t = useTranslations("home.projects");
  const projects: ContentProjects[] = t.raw("content");

  return (
    <article id="projects" className="py-5 md:py-10">
      <div className="w-full lg:w-3xl mx-auto">
        <div>
          <Heading as="h3" text={t("title")} />
          <div>
            <CardProject projects={projects} />
          </div>
          <div className="flex">
            <Link href="/projects" className="button-primary">
              {t("more")}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

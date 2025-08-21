import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ContentProject } from "../Projects";

interface AllProjectsProps {
  selectedSkill: string[];
}

export const AllProjects = ({ selectedSkill }: AllProjectsProps) => {
  const t = useTranslations("projects.allProjects");
  const projects: ContentProject[] = t.raw("content");

  return (
    <section id="allProjects">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <div className="all-projects">
            {projects.map((data: ContentProject, i: number) => (
              <div key={i} className="project-card">
                <Image
                  src={`/images/${data.image}.webp`}
                  alt={data.title.toLocaleLowerCase()}
                  width={1365}
                  height={685}
                  loading="lazy"
                />
                <div className="project-body">
                  <a
                    href={data.url}
                    target="_blank"
                    className={
                      data.url &&
                      "underline transition duration-300 ease-in-out hover:text-primary"
                    }
                  >
                    {data.title}
                  </a>
                  <p>{data.paragraph}</p>
                  <div className="skills">
                    {data.skills.map((skill: string, j: number) => (
                      <div
                        className={`tag ${selectedSkill.includes(skill) ? "text-primary" : "text-foreground"}`}
                        key={j}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

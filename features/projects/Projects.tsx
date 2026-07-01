import Text from "@/components/ui/Text";
import { ProjectsText } from "@/i18n/tokens/projects";
import { Sections } from "@/lib/constants/sections";
import ProjectCard from "./ProjectCard";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Project } from "@/types/projects";
import { ROUTES } from "@/lib/routes";

interface Props {
  projects: Project[];
  showMoreButton?: boolean;
}

export default function Projects({ projects, showMoreButton }: Props) {

  return (
    <section id={Sections.projects} className="py-8">
      <div className="mb-6">
        <Text as="h3" translationKey={ProjectsText.title} />
      </div>
      <div>
        {projects.map(({ image, skills, id, url }) => (
          <ProjectCard
            key={id}
            image={image}
            url={url}
            skills={skills}
            titleKey={ProjectsText.items[id].title}
            paragraphKey={ProjectsText.items[id].paragraph}
            ariaLabel={ProjectsText.items[id].title}
          />
        ))}
      </div>
      {showMoreButton && (
        <ButtonLink variant="primary" href={ROUTES.projects} translationKey={ProjectsText.more} ariaLabelKey={ProjectsText.more} className="w-fit" />
      )}
    </section>
  )
}

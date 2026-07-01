import ButtonLink from "@/components/ui/ButtonLink";
import { LinkIcon } from "@/components/ui/icons/LinkIcon";
import Text from "@/components/ui/Text";
import type { Skill } from "@/types/projects";
import Image from "next/image";

export interface Props {
  titleKey: string;
  paragraphKey: string;
  skills: readonly Skill[];
  image: string;
  url?: string;
  ariaLabel: string;
}

export default function ProjectCard({ titleKey, paragraphKey, skills, image, url, ariaLabel }: Props) {
  return (
    <article className="project-card relative overflow-hidden mb-8 lg:mb-4 lg:rounded-lg lg:shadow-lg lg:shadow-background/50">
      <Image
        src={image}
        alt=""
        width={1366}
        height={643}
        loading="lazy"
        className="w-full h-full transition-transform duration-500 ease-in-out rounded-lg shadow-lg shadow-background/50 project-image lg:rounded-none lg:shadow-none"
      />
      <div className="lg:absolute transition-transform duration-300 ease-in-out project-overlay lg:rounded-lg lg:inset-0 lg:h-full py-2 backdrop-blur-xs lg:bg-linear-to-t lg:from-black/60 lg:to-black/60">
        {url && (
          <ButtonLink
            variant="outlined"
            href={url}
            ariaLabelKey={ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block absolute top-0 right-0 p-4"
          >
            <LinkIcon />
          </ButtonLink>
        )}
        <div className="lg:absolute lg:left-0 lg:bottom-0 lg:p-4">
          <div className="flex justify-between items-center py-2 lg:py-0">
            <Text as="h4" translationKey={titleKey} />
            {url && (
              <ButtonLink
                variant="outlined"
                href={url}
                ariaLabelKey={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="block lg:hidden"
              >
                <LinkIcon />
              </ButtonLink>
            )}
          </div>
          <Text as="p" translationKey={paragraphKey} family="montserrat" className="font-light" />
          <div className="flex w-full gap-1 flex-wrap justify-start mt-2">
            {skills.map((skill: string) => (
              <div
                className="text-center mx-0 w-auto rounded-sm py-1 px-2 text-xs backdrop-blur-lg bg-dark-2/50"
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

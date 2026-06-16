import Image from "next/image";
import { External } from "../Svg/External/";

export interface ContentProjects {
  title: string;
  paragraph: string;
  skills: string[];
  image: string;
  url?: string;
}

interface Props {
  projects: ContentProjects[];
  selectedSkill?: string[];
}

export default function CardProject({ projects, selectedSkill }: Props) {
  return (
    <>
      {projects.map((data: ContentProjects) => (
        <article key={data.title} className="group relative overflow-hidden mb-8 lg:mb-4 lg:rounded-lg lg:shadow-lg lg:shadow-background/50">
          <Image
            src={`/images/${data.image}.webp`}
            alt={data.title.toLocaleLowerCase()}
            width={768}
            height={390}
            loading="lazy"
            sizes="(max-width: 1024px) 288px, 768px"
            className="w-full h-full transition-transform duration-500 ease-in-out rounded-lg shadow-lg shadow-background/50 lg:group-hover:scale-105 lg:rounded-none lg:shadow-none"
          />

          <div className="lg:absolute transition-transform duration-300 ease-in-out lg:translate-y-full group-hover:lg:translate-y-0 lg:rounded-lg lg:inset-0 lg:h-full p-4 lg:bg-gradient-to-t lg:from-black/60 lg:to-black/60">
            <a
              href={data.url}
              target="_blank"
              className="hidden lg:block absolute top-0 right-0 p-4"
              aria-label={`Ìr al sitio web de ${data.title}`}
              rel="noopener noreferrer"
            >
              {data.url && <External />}
            </a>
            <div className="lg:absolute lg:left-0 lg:bottom-0 lg:p-4">
              <div className="flex justify-between items-center py-2 lg:py-0">
                <h2 className="font-bold font-poppins text-xl text-foreground">{data.title}</h2>
                <a
                  href={data.url}
                  target="_blank"
                  className="block lg:hidden"
                  aria-label={`Ìr al sitio web de ${data.title}`}
                  rel="noopener noreferrer"
                >
                  {data.url && <External />}
                </a>
              </div>
              <p className="text-base">{data.paragraph}</p>
              <div className="flex w-full gap-1 flex-wrap justify-start mt-2">
                {data.skills.map((skill: string) => (
                  <div
                    className={`text-center mx-0 w-auto rounded-sm py-1 px-2 text-xs ${selectedSkill?.includes(skill) ? "text-black bg-primary" : "bg-dark-2 text-foreground"}`}
                    key={skill}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

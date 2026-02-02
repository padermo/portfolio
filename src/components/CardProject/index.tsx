import Image from "next/image";
import { External } from "../Svg";

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
      {projects.map((data: ContentProjects, i: number) => (
        <article key={i} className="group relative overflow-hidden mb-4 rounded-lg shadow-lg shadow-background/50">
          <Image
            src={`/images/${data.image}.webp`}
            alt={data.title.toLocaleLowerCase()}
            width={1365}
            height={685}
            loading="lazy"
            className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 rounded-lg inset-0 h-full p-4 bg-gradient-to-t from-black/60 to-black/60">
            <a
              href={data.url}
              target="_blank"
              className="absolute top-0 right-0 p-4"
              aria-label={`Ìr al sitio web de ${data.title}`}
              rel="noopener noreferrer"
            >
              {data.url && <External />}
            </a>
            <div className="absolute left-0 bottom-0 p-4">
              <h2 className="font-bold font-poppins text-xl text-foreground">{data.title}</h2>
              <p className="text-base">{data.paragraph}</p>
              <div className="flex w-full gap-1 flex-wrap justify-start mt-2">
                {data.skills.map((skill: string, j: number) => (
                  <div
                    className={`text-center mx-0 w-auto rounded-sm py-1 px-2 text-xs ${selectedSkill?.includes(skill) ? "text-black bg-primary" : "bg-dark-2 text-foreground"}`}
                    key={j}
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

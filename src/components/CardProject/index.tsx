import Image from "next/image";

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
        <article key={i} className="mb-4">
          <Image
            src={`/images/${data.image}.webp`}
            alt={data.title.toLocaleLowerCase()}
            width={1365}
            height={685}
            loading="lazy"
            className="rounded-lg shadow-lg shadow-background/50"
          />
          <div className="py-3">
            <a
              href={data.url}
              target="_blank"
              className={`font-bold font-poppins text-lg
                  ${
                    data.url &&
                    "underline transition duration-300 ease-in-out hover:text-primary"
                  }
                `}
            >
              {data.title}
            </a>
            <p>{data.paragraph}</p>
            <div className="flex w-full gap-2 flex-wrap justify-start mt-2">
              {data.skills.map((skill: string, j: number) => (
                <div
                  className={`text-center mx-0 w-auto rounded-sm py-1 px-2 bg-dark-2 text-sm ${selectedSkill?.includes(skill) ? "text-primary" : "text-foreground"}`}
                  key={j}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

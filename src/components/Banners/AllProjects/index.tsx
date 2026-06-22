import CardProject, { type ContentProjects } from "@/components/CardProject";
import Heading from "@/components/UI/Heading";

export interface ProjectsData {
  title: string;
  content: ContentProjects[]
}

interface Props extends ProjectsData {
  selectedSkill: string[];
}

export const AllProjects = ({ title, content, selectedSkill }: Props) => {

  return (
    <section className="py-10">
      <div className="w-full lg:w-3xl mx-auto">
        <div>
          <Heading as="h3" text={title} />
          <div className="all-projects">
            <CardProject projects={content} selectedSkill={selectedSkill} />
          </div>
        </div>
      </div>
    </section>
  );
};

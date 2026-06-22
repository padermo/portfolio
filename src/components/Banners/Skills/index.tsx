import Heading from "@/components/UI/Heading";
import Paragraph from "@/components/UI/Paragraph";

export interface SkillsData {
  title: string;
  paragraph: string;
  skills: string[];
}

interface SkillsProps extends SkillsData {
  selectedSkill: string[];
  handleSkill: (skill: string) => void;
}

export const Skills = ({ title, paragraph, skills, selectedSkill, handleSkill }: SkillsProps) => {

  return (
    <article className="pb-10">
      <div className="w-full lg:w-3xl mx-auto">
        <div>
          <div className="mb-6">
            <Heading as="h3" text={title} />
            <Paragraph text={paragraph} />
          </div>
          <div className="flex w-full gap-3 flex-wrap justify-start">
            {skills.map((skill: string) => (
              <button
                key={skill}
                aria-label={skill}
                type="button"
                className={`text-xl cursor-pointer
                  ${selectedSkill.includes(skill)
                    ? "text-primary"
                    : "text-foreground"
                  }`}
                onClick={() => handleSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

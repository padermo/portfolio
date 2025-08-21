import { useTranslations } from "next-intl";

interface SkillsProps {
  selectedSkill: string[];
  handleSkill: (skill: string) => void;
}

export const Skills = ({ selectedSkill, handleSkill }: SkillsProps) => {
  const t = useTranslations("projects.skills");
  const skills: string[] = t.raw("skills");

  return (
    <article id="skills">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <p>{t("paragraph")}</p>
          <div className="skill-options">
            {skills.map((skill: string, i: number) => (
              <button
                key={i}
                className={
                  selectedSkill.includes(skill)
                    ? "text-primary"
                    : "text-foreground"
                }
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

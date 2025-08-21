import { useTranslations } from "next-intl";

interface CardExperience {
  date: string;
  roll: string;
  paragraph: string[];
}

export const Experience = () => {
  const t = useTranslations("home.experience");
  const experience: CardExperience[] = t.raw("content");

  return (
    <article id="experience">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <div className="timeline">
            {experience.map((card: CardExperience, i: number) => (
              <div className="card" key={i}>
                <p className="date">{card.date}</p>
                <h4>{card.roll}</h4>
                <div>
                  {card.paragraph.map((text: string, j: number) => (
                    <p key={j}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

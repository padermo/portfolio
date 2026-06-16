import { useTranslations } from "next-intl";

interface Paragraphs {
  id: number;
  text: string;
}

interface CardExperience {
  id: string;
  date: string;
  roll: string;
  paragraph: Paragraphs[];
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
            {experience.map((card: CardExperience) => (
              <div className="card" key={card.id}>
                <p className="date">{card.date}</p>
                <h4>{card.roll}</h4>
                <div>
                  {card.paragraph.map(({ id, text }) => (
                    <p key={id}>{text}</p>
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

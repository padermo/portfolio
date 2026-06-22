import Heading from "@/components/UI/Heading";
import Paragraph from "@/components/UI/Paragraph";
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
    <article id="experience" className="py-5 md:py-10">
      <div className="w-full lg:w-3xl mx-auto">
        <div>
          <Heading as="h3" text={t("title")} />
          <div className="border-l border-l-placeholder">
            {experience.map((card: CardExperience) => (
              <div className="card py-3 px-4 relative" key={card.id}>
                <Paragraph text={card.date} className="text-sm!" />
                <Heading as="h4" text={card.roll} />
                <div>
                  {card.paragraph.map(({ id, text }) => (
                    <Paragraph key={id} text={text} />
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

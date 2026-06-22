import Heading from "@/components/UI/Heading";
import Paragraph from "@/components/UI/Paragraph";
import { useTranslations } from "next-intl";

interface Data {
  id: number;
  text: string;
}

export const About = () => {
  const t = useTranslations("home.about");
  const paragraphs: Data[] = t.raw("paragraph");

  return (
    <article id="about" className="py-5 md:py-10">
      <div className="w-full lg:w-3xl mx-auto">
        <div>
          <Heading as="h3" text={t("title")} />
          <div>
            {paragraphs.map(({ id, text }) => (
              <Paragraph key={id} text={text} className="mb-2" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

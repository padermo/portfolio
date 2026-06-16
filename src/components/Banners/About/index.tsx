import { useTranslations } from "next-intl";

interface Data {
  id: number;
  text: string;
}

export const About = () => {
  const t = useTranslations("home.about");
  const paragraphs: Data[] = t.raw("paragraph");

  return (
    <article id="about">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <div>
            {paragraphs.map(({ id, text }) => (
              <p key={id} className="mb-2">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

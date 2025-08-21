import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("home.about");
  const paragraphs: string[] = t.raw("paragraph");

  return (
    <article id="about">
      <div>
        <div>
          <h3>{t("title")}</h3>
          <div>
            {paragraphs.map((text: string, i: number) => (
              <p key={i} className="mb-2">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

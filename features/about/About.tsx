import Text from "@/components/ui/Text";
import { AboutTexts } from "@/i18n/tokens/about";
import { Sections } from "@/lib/constants/sections";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations()
  const paragraphs = t.raw(AboutTexts.paragraphs) as string[];
  return (
    <section id={Sections.about} className="py-8">
      <div className="mb-6">
        <Text as="h3" translationKey={AboutTexts.title} />
      </div>
      <div>
        {paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            as="p"
            family="montserrat"
            className="mb-3"
          >
            {paragraph}
          </Text>
        ))}
      </div>
    </section>
  )
}

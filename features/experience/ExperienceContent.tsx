import Text from "@/components/ui/Text";
import { ExperienceText } from "@/i18n/tokens/experience";
import { EXPERIENCE } from "@/lib/constants/experience";
import { formatDate } from "@/lib/utils/formatDate";
import { useLocale, useTranslations } from "next-intl";

export default function ExperienceContent() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <ul className="border-l border-foreground">
      {
        EXPERIENCE.map(({ id, start, end }) => {
          const paragraphs = t.raw(
            ExperienceText.jobs[id].paragraphs
          ) as string[];

          return (
            <li key={id} className="py-4 px-4 relative before:absolute before:top-5.5 before:-left-1.5 before:w-2.75 before:h-2.75 before:rounded-full before:bg-foreground">
              <Text as="p" className="text-sm font-light">{formatDate(start, locale)} - {formatDate(end, locale)}</Text>
              <Text as="h4" textColor="primary" translationKey={ExperienceText.jobs[id].role} className="font-medium" />
              {paragraphs.map((paragraph) => (
                <Text key={paragraph} as="p" family="montserrat" className="font-light" >
                  {paragraph}
                </Text>
              ))}
            </li>
          )
        })
      }
    </ul>
  )
}

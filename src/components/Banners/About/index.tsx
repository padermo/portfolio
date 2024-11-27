"use client"
import { useTranslations } from "next-intl";
import { Heading, Paragraph, Label } from "@/components/UI";

export default function About() {
  const t = useTranslations('About');
  return (
    <section id="about" className="w-full min-h-dvh max-h-full px-4 grid grid-cols-1 grid-rows-1 lg:grid-cols-2">
      <article className="lg:w-4/5 lg:mx-auto flex flex-col items-center justify-center">
        <Heading as="h3" className="mb-8" text={t('left.title')} />
        {t.raw('left.paragraphs').map((paragraph: string, index: number) => (
          <Paragraph key={index} text={paragraph} className="mb-4" />
        ))}
      </article>
      <article className="lg:w-4/5 lg:mx-auto flex flex-col items-center justify-center">
        <Heading as="h3" className="mb-8" text={t('right.title')} />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {t.raw('right.skills').map((paragraph: string, index: number) => (
            <Label key={index} text={paragraph} size={'big'} />
          ))}
        </div>
      </article>
    </section>
  )
}

"use client"
import { Heading, Label } from "@/components/UI";
import { useTranslations } from "next-intl";
import Social from "@/components/Social";
import Form from "@/components/Forms";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full p-4 lg:p-6 row-span-4 bg-footer">
      <div className="container mx-auto">
        <div className="flex max-w-full flex-col-reverse gap-5 items-center justify-center lg:flex-row">
          <div className="flex flex-1 flex-col justify-center items-center gap-4">
            <Heading as="h3" text={t('social')} />
            <Social />
            <Label text={t('reserved')} className="italic" size={'small'} />
          </div>
          <div className="flex-1" id="contact">
            <Heading as="h3" text={t('contact')} className="text-center mb-8" />
            <Form />
          </div>
        </div>
      </div>
    </footer>
  )
}

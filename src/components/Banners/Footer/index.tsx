"use client"
import { Heading, Label } from "@/components/UI";
import { useTranslations } from "next-intl";
import Social from "@/components/Social";
import Form from "@/components/Forms";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full bg-footer">
      <div className="max-w-screen-2xl py-10 px-4 lg:px-8 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
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
    </footer>
  )
}

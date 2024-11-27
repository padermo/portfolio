"use client";
import Image from "next/image";
import Social from "@/components/Social";
import { useTranslations } from "next-intl";
import { Heading, Paragraph } from "@/components/UI";
import { ChevronsDown } from "lucide-react";

export default function Header() {
  const t = useTranslations('Header');
  return (
    <section className="w-full h-dvh grid items-center justify-center relative">
      <article className="flex flex-col lg:flex-row items-center gap-4">
        <picture>
          <Image src={'/assets/profile.webp'} alt="Fabio Estevez" width={500} height={500} className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover object-center shadow-black/30 shadow-lg" />
        </picture>
        <div>
          <div className="mb-2 text-center lg:text-left">
            <Heading as="h1" text={t('welcome')} />
            <Heading as="h2" text={t('rol')} />
            <Paragraph text={t('about')} className="text-lg" />
          </div>
          <Social />
        </div>
      </article>
      <div className="absolute bottom-12 w-full text-paragraph">
        <ChevronsDown className="motion-safe:animate-bounce mx-auto" />
      </div>
    </section>
  )
}

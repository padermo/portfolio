"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <article className="w-full h-full flex flex-col justify-center items-center gap-6 overflow-hidden">
      <h2 className="text-2xl text-[#CFB53B] tracking-widest font-semibold">
        {t("title")}
      </h2>
      <p className="text-[#222] font-light font-serif tracking-wide text-base dark:text-white">
        {t("description")}
      </p>
      <p className="text-[#222] font-light font-serif tracking-wide text-base dark:text-white">
        {t("paragraph")}
      </p>
    </article>
  );
}

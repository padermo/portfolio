"use client";
import { useTranslations } from "next-intl";
import { skills } from "./skills";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <article className="w-full h-full flex flex-col justify-center items-center gap-6 overflow-hidden">
      <h2 className="text-2xl text-[#CFB53B] tracking-widest font-semibold">
        {t("title")}
      </h2>
      <div className="font-light text-lg tracking-wider flex flex-wrap gap-2 lg:gap-5 text-wrap text-[#222] justify-center dark:text-white">
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </article>
  );
}

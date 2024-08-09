"use client";
import { useTranslations } from "next-intl";
import { sanatorio, printec, creative } from "./images";
import { creativeURL } from "./urlProjects";
import Project from "./Project";
import type { TooltipsURL } from "@/types/generals";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-10 dark:bg-[#222]">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <h2 className="text-2xl text-[#CFB53B] tracking-widest font-semibold">
          {t("title")}
        </h2>
        <Project
          title={t("sanatorio.title")}
          paragraph={t("sanatorio.paragraph")}
          images={sanatorio}
          technologies={t("sanatorio.technologies").split(" ")}
          section={t("section")}
        />
        <Project
          title={t("printec.title")}
          paragraph={t("printec.paragraph")}
          images={printec}
          technologies={t("printec.technologies").split(" ")}
          section={t("section")}
        />
        <Project
          title={t("creative.title")}
          paragraph={t("creative.paragraph")}
          images={creative}
          technologies={t("creative.technologies").split(" ")}
          url={creativeURL.demo}
          repository={creativeURL.repository}
          section={t("section")}
          tooltips={t.raw("creative.tooltips") as TooltipsURL}
        />
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  easeInOut,
  useInView,
} from "framer-motion";
import { sanatorio, printec, creative } from "./images";
import { creativeURL } from "./urlProjects";
import Project from "./Project";

export default function Projects() {
  const t = useTranslations("Projects");
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-45%"], {
    ease: easeInOut,
  });

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="h-[300dvh] relative dark:bg-[#222]"
    >
      <div className="sticky top-0 h-dvh w-full flex flex-col items-center justify-center gap-10 overflow-hidden">
        <h2
          ref={titleRef}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          className="text-2xl text-[#CFB53B] tracking-widest font-semibold"
        >
          {t("title")}
        </h2>
        <motion.div style={{ x }} className="flex gap-10">
          <Project
            title={t("sanatorio.title")}
            paragraph={t("sanatorio.paragraph")}
            images={sanatorio}
            technologies={t("sanatorio.technologies").split(" ")}
          />
          <Project
            title={t("printec.title")}
            paragraph={t("printec.paragraph")}
            images={printec}
            technologies={t("printec.technologies").split(" ")}
          />
          <Project
            title={t("creative.title")}
            paragraph={t("creative.paragraph")}
            images={creative}
            technologies={t("creative.technologies").split(" ")}
            url={creativeURL}
          />
        </motion.div>
      </div>
    </section>
  );
}

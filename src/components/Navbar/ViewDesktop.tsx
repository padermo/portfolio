"use client";
import { useTranslations } from "next-intl";
import SwitchTheme from "../config/SwitchTheme";
import Lang from "../Lang/Lang";
import { useSearchParams } from "next/navigation";

export default function ViewDesktop() {
  const t = useTranslations("Nav");
  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get("view");

  const handleScrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  if (!viewPolicyCookies) {
    return (
      <nav
        className={
          "w-full h-16 absolute top-0 z-10 items-center justify-end px-4 md:px-8 lg:px-10 hidden lg:flex"
        }
      >
        <div className="flex items-center gap-4 text-[#222] dark:text-white">
          <label
            onClick={() => handleScrollSection("about")}
            className="font-light leading-7 cursor-pointer border-b-[#CFB53B] hover:border-b"
          >
            {t("about")}
          </label>
          <label
            onClick={() => handleScrollSection("projects")}
            className="font-light leading-7 cursor-pointer border-b-[#CFB53B] hover:border-b"
          >
            {t("projects")}
          </label>
          <label
            onClick={() => handleScrollSection("contact")}
            className="font-light leading-7 cursor-pointer border-b-[#CFB53B] hover:border-b"
          >
            {t("contact")}
          </label>
          <SwitchTheme />
          <Lang />
        </div>
      </nav>
    );
  }
  return null;
}

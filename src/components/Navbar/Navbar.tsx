"use client";
import ViewDesktop from "./ViewDesktop";
import { useTranslations } from "next-intl";
import { useTheme } from "@/context/ThemeContext";
import { useRouter, usePathname } from "@/navigation";
import type { MenuItem } from "@/types/generals";
import { FormatPainterFilled, GlobalOutlined } from "@ant-design/icons";

export default function Navbar() {
  const { handleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const items: MenuItem[] = [
    {
      label: (
        <label
          onClick={() => handleScrollSection("about")}
          className="font-light leading-7 cursor-pointer block lg:inline-block"
        >
          {t("Nav.about")}
        </label>
      ),
      key: "about",
    },
    {
      label: (
        <label
          onClick={() => handleScrollSection("projects")}
          className="font-light leading-7 cursor-pointer block lg:inline-block"
        >
          {t("Nav.projects")}
        </label>
      ),
      key: "projects",
    },
    {
      label: (
        <label
          onClick={() => handleScrollSection("contact")}
          className="font-light leading-7 cursor-pointer block lg:inline-block"
        >
          {t("Nav.contact")}
        </label>
      ),
      key: "contact",
    },
  ];

  const itemsTheme: MenuItem[] = [
    {
      label: (
        <label className="font-light leading-7 cursor-pointer block lg:inline">
          {t("Nav.theme")}
        </label>
      ),
      key: "theme",
      icon: <FormatPainterFilled />,
      children: [
        {
          label: (
            <label
              onClick={() => handleTheme("dark")}
              className="font-light leading-7 cursor-pointer block lg:inline"
            >
              {t("Theme.dark")}
            </label>
          ),
          key: "dark",
        },
        {
          label: (
            <label
              onClick={() => handleTheme("light")}
              className="font-light leading-7 cursor-pointer block lg:inline"
            >
              {t("Theme.light")}
            </label>
          ),
          key: "light",
        },
      ],
    },
    {
      label: (
        <label className="font-light leading-7 cursor-pointer block lg:inline">
          {t("Nav.language")}
        </label>
      ),
      key: "language",
      icon: <GlobalOutlined />,
      children: [
        {
          label: (
            <label
              onClick={() => router.replace(pathname, { locale: "es" })}
              className="font-light leading-7 cursor-pointer block lg:inline"
            >
              {t("Language.es")}
            </label>
          ),
          key: "es",
        },
        {
          label: (
            <label
              onClick={() => router.replace(pathname, { locale: "en" })}
              className="font-light leading-7 cursor-pointer block lg:inline"
            >
              {t("Language.en")}
            </label>
          ),
          key: "en",
        },
      ],
    },
  ];

  const handleScrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return <ViewDesktop items={items} itemsConfig={itemsTheme} />;
}

"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Dropdown } from "@/components/UI/";
import type { Content } from "@/components/UI/Dropdown";

interface ThemeProps {
  device?: 'mobile' | 'desktop'
}

export default function Theme({ device = 'desktop' }: ThemeProps) {
  const t = useTranslations('Settings');

  const handleTheme = (item: Content) => {
    const htmlElement = document.querySelector("html");
    const currentTheme = htmlElement?.className;
    if (currentTheme !== item.key) {
      if (currentTheme) {
        htmlElement.classList.remove(currentTheme);
      }
      htmlElement?.classList.add(item.key);
    }
    localStorage.setItem('theme', item.key);
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.querySelector("html")?.classList.add(theme);
    }
  }, [])
  return (
    <Dropdown device={device} text={t('theme.label')} items={t.raw('theme.children')} callback={handleTheme} />
  )
}

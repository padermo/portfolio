"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Dropdown } from "@/components/UI/";
import type { Content } from "@/components/UI/Dropdown";

interface LanguageProps {
  device?: 'mobile' | 'desktop'
}

export default function Language({ device = 'desktop' }: LanguageProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Settings');

  const handleTheme = (item: Content) => {
    console.log(item)
    router.replace(pathname, { locale: item?.key })
  }
  return (
    <Dropdown device={device} text={t('language.label')} items={t.raw('language.children')} callback={handleTheme} />
  )
}

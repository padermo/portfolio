"use client";
import { useTranslations } from "next-intl";
import Social from "@/components/Social";

export const Network = () => {
  const t = useTranslations("home.social");

  return (
    <div id="network">
      <h3>{t("title")}</h3>
      <div>
        <Social />
      </div>
    </div>
  );
};

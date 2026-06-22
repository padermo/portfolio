import { useTranslations } from "next-intl";
import Social from "@/components/Social";
import Heading from "@/components/UI/Heading";

export const Network = () => {
  const t = useTranslations("home.social");

  return (
    <div id="network" className="flex flex-col py-4 flex-1 text-center gap-0">
      <Heading as="h3" text={t("title")} />
      <div className="w-auto flex flex-row items-center justify-center gap-2">
        <Social />
      </div>
    </div>
  );
};

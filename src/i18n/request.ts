import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = {
    es: () => import("../../messages/es.json"),
    en: () => import("../../messages/en.json"),
  };

  return {
    locale,
    messages: (await messages[locale]()).default,
  };
});

import { useTranslations } from "next-intl";
import { ContactClient } from "./contactClient";
import type { Alerts, Inputs } from "./contact.types";

export const Contact = () => {
  const t = useTranslations("home.contact");
  const inputs: Inputs = t.raw("inputs");
  const alerts: Alerts = t.raw("alerts");

  return <ContactClient title={t("title")} button={t("button")} inputs={inputs} alerts={alerts} />
};

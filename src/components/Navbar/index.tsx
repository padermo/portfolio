import { getTranslations } from "next-intl/server";
import NavbarClient from "./navbarClient";

export interface NavMenu {
  text: string;
  id: string;
}

export default async function Navbar() {
  const t = await getTranslations("navbar");
  const menu: NavMenu[] = t.raw("menu");

  return <NavbarClient menu={menu} mobile={t("mobile")} />
}

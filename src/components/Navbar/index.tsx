import { getTranslations } from "next-intl/server";
import NavbarCombine from "./navbarCombine";

export interface NavMenu {
  text: string;
  id: string;
}

export default async function Navbar() {
  const t = await getTranslations("navbar");
  const menu: NavMenu[] = t.raw("home");

  return <NavbarCombine menu={menu} />
}

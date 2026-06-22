import type { NavMenu } from ".";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

interface Props {
  menu: NavMenu[];
}

export default function NavbarCombine({ menu }: Props) {

  return (
    <>
      <NavbarDesktop menu={menu} />
      <NavbarMobile menu={menu} />
    </>
  );
}

import { MenuIcon } from "@/components/ui/icons/MenuIcon";
import NavbarLinks from "./NavbarLinks";

export default function NavbarMobile() {
  return (
    <details className="group lg:hidden px-4">
      <summary className="cursor-pointer mb-4 list-none">
        <MenuIcon />
      </summary>

      <nav className="group-open:block backdrop-blur-lg bg-background/50 shadow-md rounded-lg py-4">
        <NavbarLinks orientation="vertical" />
      </nav>
    </details>
  )
}

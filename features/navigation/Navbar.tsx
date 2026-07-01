import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  )
}

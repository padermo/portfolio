import { cn } from "@/lib/utils/cn";
import NavbarLinks from "./NavbarLinks";

const navbarDesktopStyle = "w-fit hidden lg:flex mx-auto shadow-md shadow-background/50 backdrop-blur-lg rounded-lg bg-background/50 py-4 px-6"

export default function NavbarDesktop() {
  return (
    <nav className={cn(navbarDesktopStyle)}>
      <NavbarLinks orientation="horizontal" />
    </nav>
  )
}


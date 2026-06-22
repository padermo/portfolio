import { useTranslations } from "next-intl";
import Link from "next/link";
import { Home } from "../Svg/Home/";

export default function NavbarProjects() {
  const t = useTranslations("navbar.projects")
  return (
    <nav className="lg:fixed lg:top-4 lg:z-20 flex justify-center items-center px-4 py-4 w-full">
      <div className="mx-auto shadow-md shadow-background/50 backdrop-blur-lg rounded-lg m-auto bg-background/50 items-center py-4 px-6">
        <Link href="/" aria-label={t("id")} className="flex items-center gap-2">
          <Home />
          <span>{t("text")}</span>
        </Link>
      </div>
    </nav>
  )
}

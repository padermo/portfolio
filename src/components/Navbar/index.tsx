"use client";
import { useState } from "react";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ScrollSection } from "@/utils/scroll";
import { Home } from "../Svg";

interface NavMenu {
  text: string;
  id: string;
}

export default function Navbar() {
  const [isView, setIsView] = useState<boolean>(false);
  const t = useTranslations("navbar");
  const pathname = usePathname();
  const menu: NavMenu[] = t.raw("menu");

  const generateOptions = () => {
    if (pathname === "/") {
      return menu.map((opt) => (
        <button
          key={opt.id}
          aria-label={opt.text}
          onClick={() => ScrollSection(opt.id)}
        >
          {opt.text}
        </button>
      ));
    } else {
      return (
        <Link href="/" aria-label={t("mobile")}>
          <Home />
          <span className="md:hidden">{t("mobile")}</span>
        </Link>
      );
    }
  };

  return (
    <nav>
      <div className="desktop">{generateOptions()}</div>
      <div className="menu">
        <button aria-label="menu" onClick={() => setIsView(!isView)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </div>
      <div className="mobile">
        <div className={isView ? "open" : "close"}>{generateOptions()}</div>
      </div>
    </nav>
  );
}

"use client";
import { useState } from "react";
import { usePathname, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ScrollSection } from "@/utils/scroll";

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
        <button key={opt.id} onClick={() => ScrollSection(opt.id)}>
          {opt.text}
        </button>
      ));
    } else {
      return (
        <Link href="/">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-home"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </Link>
      );
    }
  };

  return (
    <nav>
      <div className="desktop">{generateOptions()}</div>
      <div className="menu">
        <button onClick={() => setIsView(!isView)}>
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

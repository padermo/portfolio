"use client"
import { useState } from "react";
import type { NavMenu } from "."
import { scrollSection } from "@/utils/scroll";
import clsx from "clsx";

interface Props {
  menu: NavMenu[];
}

export default function NavbarMobile({ menu }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    scrollSection(id);
    setIsOpen(false)
  }

  return (
    <nav className={clsx("fixed top-0 z-20 flex lg:hidden flex-col gap-4 px-4 py-4 w-full", { "shadow-md shadow-background/50 backdrop-blur-lg bg-background/50": isOpen })}>
      <div className="flex justify-end">
        <button aria-label="menu" type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-x">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.707 5.293l5.293 5.292l5.293 -5.292a1 1 0 0 1 1.414 1.414l-5.292 5.293l5.292 5.293a1 1 0 0 1 -1.414 1.414l-5.293 -5.292l-5.293 5.292a1 1 0 1 1 -1.414 -1.414l5.292 -5.293l-5.292 -5.293a1 1 0 0 1 1.414 -1.414" />
              </svg>
            )
            :
            (
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
            )
          }
        </button>
      </div>
      <div className={clsx("w-full flex flex-col items-start gap-4 transition-all duration-150 ease-in-out", { "opacity-100 pointer-events-auto open": isOpen, "opacity-0 pointer-events-none close": !isOpen })}>
        {menu.map((option) => (<button key={option.id} className="cursor-pointer text-2xl" onClick={() => handleScroll(option.id)}>{option.text}</button>))}
      </div>
    </nav>
  )
}

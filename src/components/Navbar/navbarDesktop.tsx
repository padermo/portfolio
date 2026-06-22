"use client"
import { scrollSection } from "@/utils/scroll";
import type { NavMenu } from "."

interface Props {
  menu: NavMenu[];
}

export default function NavbarDesktop({ menu }: Props) {
  return (
    <nav className="fixed top-4 z-20 hidden lg:flex justify-center items-center px-4 py-4 w-full">
      <div className="hidden lg:flex gap-4 mx-auto shadow-md shadow-background/50 backdrop-blur-lg rounded-lg m-auto bg-background/50 py-4 px-6">
        {menu.map((option) => (<button key={option.id} className="cursor-pointer" onClick={() => scrollSection(option.id)}>{option.text}</button>))}
      </div>
    </nav>
  )
}

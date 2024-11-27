"use client";
import { useState } from "react";
import { Menu } from "../UI";
import { useTranslations } from "next-intl";
import { Button } from "../UI";
import { X, Menu as Hamburger } from "lucide-react";
import { clsx } from "clsx";
import { Theme, Language } from "../Config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const t = useTranslations('Nav');

  const handleOpenMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-20">
      <nav className="max-w-screen-2xl mx-auto px-4 py-4 lg:px-8">
        <div className="hidden lg:block">
          <Menu direction={'horizont'} className="justify-end">
            <Menu.Item items={t.raw('desktop')} />
            <Theme />
            <Language />
          </Menu>
        </div>
        <div className="block mb-4 lg:hidden">
          <Button variant={'primary'} onClick={handleOpenMenu} className="py-4">
            {isOpen ? <X /> : <Hamburger />}
          </Button>
        </div>
        <div className={clsx('lg:hidden', { 'hidden': !isOpen })}>
          <Menu direction={'vertical'} className="justify-end">
            <Menu.Item items={t.raw('desktop')} />
            <Theme device="mobile" />
            <Language device="mobile" />
          </Menu>
        </div>
      </nav>
    </header>
  )
}

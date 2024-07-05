"use client";
import { useState } from "react";
import SwitchTheme from "../config/SwitchTheme";
import Lang from "../Lang/Lang";
import MenuReusable from "./MenuReusable";
import { Button } from "antd";
import { useSearchParams } from "next/navigation";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import ConfigThemeAnt from "../ParentComponents/ConfigThemeAnt";

// types
import type { MenuItem, ViewDesktopProps } from "@/types/generals";

export default function ViewDesktop({ items, itemsConfig }: ViewDesktopProps) {
  const [isViewMenu, setIsViewMenu] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const viewPolicyCookies = searchParams.get("view");

  const handleOpenMenu = () => {
    setIsViewMenu(!isViewMenu);
  };

  if (!viewPolicyCookies) {
    return (
      <nav
        className={
          "w-full lg:h-16 grid gap-y-2 absolute top-0 z-10 items-center lg:justify-end navigation px-4 py-3 md:px-8 lg:px-10 lg:flex"
        }
      >
        <ConfigThemeAnt>
          <div className="hidden lg:flex">
            <MenuReusable items={items} mode="horizontal" />
            <div className="flex items-center gap-3">
              <SwitchTheme />
              <Lang />
            </div>
          </div>

          <div className="button-area lg:hidden">
            <Button
              type="primary"
              onClick={handleOpenMenu}
              className="bg-[#CFB53B]"
              icon={
                isViewMenu ? (
                  <CloseOutlined className="text-white" />
                ) : (
                  <MenuOutlined className="text-white" />
                )
              }
            />
          </div>

          <div
            className={`${isViewMenu ? "grid" : "hidden"} menu-area rounded-md shadow-lg bg-[#e8e8e8] w-full dark:bg-[#444] lg:hidden`}
          >
            <MenuReusable items={[...items, ...itemsConfig]} mode="inline" />
          </div>
        </ConfigThemeAnt>
      </nav>
    );
  }
  return null;
}

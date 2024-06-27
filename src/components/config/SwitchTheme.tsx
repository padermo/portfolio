"use client";
import { Dropdown } from "antd";
import { FormatPainterFilled } from "@ant-design/icons";
import { useTheme } from "@/context/ThemeContext";

// types
import type { MenuProps } from "antd";

export default function SwitchTheme() {
  const { handleTheme } = useTheme();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p onClick={() => handleTheme("dark")}>Dark</p>,
    },
    {
      key: "2",
      label: <p onClick={() => handleTheme("light")}>Light</p>,
    },
  ];
  return (
    <Dropdown menu={{ items }} placement="bottom">
      <button className="rounded-full border-none flex items-center p-2 text-[#222] transition-colors duration-300 ease-in-out hover:bg-[#d5d5d5] hover:shadow-md dark:hover:bg-[#555] dark:text-white">
        <FormatPainterFilled />
      </button>
    </Dropdown>
  );
}

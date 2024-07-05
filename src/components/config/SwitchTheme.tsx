"use client";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { useTheme } from "@/context/ThemeContext";

export default function SwitchTheme() {
  const { theme, handleTheme } = useTheme();

  return (
    <button
      onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-none flex items-center p-2 text-[#222] transition-colors duration-300 ease-in-out hover:bg-[#d5d5d5] hover:shadow-md dark:hover:bg-[#555] dark:text-white"
    >
      {theme === "dark" ? <SunFilled /> : <MoonFilled />}
    </button>
  );
}

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import type { Children, Theme, ThemeMode } from "@/types/generals";

export const ThemeContext = createContext({} as Theme);

export default function ThemeProvider({ children }: Children) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  const cookieTheme = getCookie("theme") as ThemeMode;

  const handleTheme = (name: ThemeMode) => {
    const htmlElement = document.querySelector("html");
    const currentTheme = htmlElement?.className;

    if (currentTheme !== name) {
      if (currentTheme) {
        htmlElement.classList.remove(currentTheme);
      }
      htmlElement?.classList.add(name);
    }
    setTheme(name);
    setCookie("theme", name, { sameSite: "lax", secure: true });
  };

  useEffect(() => {
    if (cookieTheme) {
      document.querySelector("html")?.classList.add(cookieTheme);
      setTheme(cookieTheme);
    }
  }, [cookieTheme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

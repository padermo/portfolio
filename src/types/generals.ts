import type { ReactNode } from "react";
import type { MenuProps } from "antd";
import type { StaticImageData } from "next/image";

export type Children = {
  children: ReactNode;
};

export type ThemeMode = "light" | "dark";

export type Theme = {
  theme: ThemeMode;
  handleTheme: (name: ThemeMode) => void;
};

export type Images = StaticImageData[];

export interface TooltipsURL {
  demo: string;
  repository: string;
}

export type PropsProject = {
  images: Images;
  title: string;
  paragraph: string;
  technologies: string[];
  section: string;
  url?: string;
  repository?: string;
  tooltips?: TooltipsURL;
};

export type FormInputs = {
  email: string;
  subject: string;
  message: string;
};

export type MenuItem = Required<MenuProps>["items"][number];

export interface MenuReusableProps {
  items: MenuItem[];
  mode: "vertical" | "horizontal" | "inline";
}

export interface ViewDesktopProps {
  items: MenuItem[];
  itemsConfig: MenuItem[];
}

export type IconsKeys = "github" | "mail" | "global" | "linkedin";

export interface ButtonReusableProps {
  tooltip: string;
  icon?: IconsKeys;
  handleClick: () => void;
}

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

export type PropsProject = {
  images: Images;
  title: string;
  paragraph: string;
  technologies: string[];
  url?: string;
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

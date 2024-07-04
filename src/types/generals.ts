import { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};

export type ThemeMode = "light" | "dark";

export type Theme = {
  theme: ThemeMode;
  handleTheme: (name: ThemeMode) => void;
};

export type Images = string[];

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

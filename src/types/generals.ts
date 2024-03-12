import { ReactNode } from 'react';

export type Children = {
  children:ReactNode;
}

export type Theme = {
  theme: string,
  handleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type Images = string[];

export type PropsProject = {
  images:Images;
  title: string;
  paragraph:string;
  technologies: string[];
}

export type FormInputs = {
  email: string;
  subject: string;
  message: string;
}
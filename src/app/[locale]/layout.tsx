import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { poppins, montserrat } from "../fonts/fonts";
import Favicon from "/public/favicon.ico";
import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabio Estevez Developer",
  description:
    "Desarrollador Full Stack con enfoque especializado en Frontend y diseño de experiencias de usuario. Amplio dominio de Next.js, JavaScript, Sass, Tailwind y React Native, con 2 años de experiencia, incluyendo 1 año de preparación intensiva y 1 año trabajando como freelance. Apasionado por la creación de interfaces atractivas y funcionales que ofrecen una experiencia de usuario excepcional.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

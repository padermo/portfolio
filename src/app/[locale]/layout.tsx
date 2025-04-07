import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Favicon from "/public/favicon.ico";
import Script from "next/script";
import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabio Estevez | Web & Mobile Developer Portfolio",
  description:
    "Fabio Estevez es un desarrollador web y móvil apasionado, especializado en React, Next.js y tecnologías frontend modernas. Explora sus proyectos, habilidades y experiencia creando aplicaciones responsivas y fáciles de usar.",
  keywords: "Fabio Estevez, Web Developer, Mobile Developer, React, Next.js, Frontend Developer, JavaScript, TypeScript, Portfolio, Responsive Web Design, Software Engineer",
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
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fabio Estevez",
              "url": "https://fabio-estevez-developer.vercel.app",
              "jobTitle": "Web and Mobile Developer",
              "sameAs": [
                "https://github.com/tuusuario",
                "https://www.linkedin.com/in/tuusuario"
              ]
            })
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

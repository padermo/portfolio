import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Poppins, Montserrat } from "next/font/google";
import FloatBtn from "@/components/FloatBtn";
import "./globals.css";
import { Contact, Network } from "@/components/Banners";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["200", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabio Estevez | Web & Mobile Developer Portfolio",
  description:
    "Fabio Estevez es un desarrollador web y móvil apasionado, especializado en React, Next.js y tecnologías frontend modernas. Explora sus proyectos, habilidades y experiencia creando aplicaciones responsivas y fáciles de usar.",
  keywords:
    "Fabio Estevez, Web Developer, Mobile Developer, React, Next.js, Frontend Developer, JavaScript, TypeScript, Portfolio, Responsive Web Design, Software Engineer",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
          <footer>
            <div>
              <div>
                <Contact />
                <Network />
              </div>
            </div>
          </footer>
          <FloatBtn />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

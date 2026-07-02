import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils/cn";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/features/footer/Footer";
import { AlertProvider } from "@/providers/AlertProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["200", "300"],
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Fabio Estevez | Web & Mobile Developer Portfolio",
  description:
    "Fabio Estevez es un desarrollador web y móvil apasionado, especializado en React, Next.js y tecnologías frontend modernas. Explora sus proyectos, habilidades y experiencia creando aplicaciones responsivas y fáciles de usar.",
  keywords:
    "Fabio Estevez, Web Developer, Mobile Developer, React, Next.js, Frontend Developer, JavaScript, TypeScript, Portfolio, Responsive Web Design, Software Engineer",
  appleWebApp: {
    title: "Fabio Estevez Developer"
  }
};

export default async function LocaleLayout({
  children,
  params
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={cn(poppins.variable, montserrat.variable, "antialiased scroll-smooth")}
    >
      <body className="min-h-screen">
        <AlertProvider>
          <NextIntlClientProvider>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </AlertProvider>
      </body>
    </html>
  );
}

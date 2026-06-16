import Image from "next/image";
import { useTranslations } from "next-intl";
import Social from "@/components/Social";
import EmailButton from "@/components/EmailButton";
import Link from "next/link";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL as string;
const CV = "/docs/Fabio_Estevez_CV_Frontend_Developer.pdf";

export const Header = () => {
  const t = useTranslations("home.header");

  return (
    <article id="header">
      <div>
        <div>
          <Image
            src="/images/profile.webp"
            alt="Fabio Estevez"
            width={250}
            height={250}
            priority
            fetchPriority="high"
          />
          <div>
            <h1>{t("title")}</h1>
            <h2 className="break-keep">{t("subtitle")}</h2>
            <div>
              <p>{t("paragraph")}</p>
            </div>
            <div className="social">
              <Social />
              <EmailButton textAlert={t("alert")} email={EMAIL} textButton={t("email")} />
              <Link href={CV} target="_blank" className="button-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-file"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                </svg>
                <span>{t("cta")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

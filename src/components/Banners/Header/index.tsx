"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Social from "@/components/Social";
import { useAlert } from "@/context/AlertContext";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL as string;
const CV = process.env.NEXT_PUBLIC_CV;

export const Header = () => {
  const { success } = useAlert();

  const t = useTranslations("home.header");
  const paragraphs: string[] = t.raw("paragraph");

  const copyClipboardEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    success(t("alert"));
  };

  return (
    <article id="header">
      <div>
        <div>
          <Image
            src="/images/profile.webp"
            alt="Fabio Estevez"
            width={958}
            height={1042}
          />
          <div>
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
            <div>
              {paragraphs.map((text: string, i: number) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <div className="social">
              <Social />
              <button
                aria-label="email"
                className="cta"
                onClick={copyClipboardEmail}
              >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
                <span>{EMAIL}</span>
              </button>
              <a href={CV} target="_blank" className="cta">
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

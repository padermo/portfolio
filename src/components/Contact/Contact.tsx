"use client";
import { message } from "antd";
import { useTranslations } from "next-intl";
import { LinkedIn, GitHub } from "@/utils/functions";
import ButtonReusable from "../Reusables/ButtonReusable";

export default function Contact() {
  const t = useTranslations("Clipboard");
  const [messageApi, contextHolder] = message.useMessage();
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("fabioaeh96@gmail.com").then(
      () => {
        messageApi.success(t("success"));
      },
      (err) => {
        messageApi.error(t("error"));
      },
    );
  };
  return (
    <div className="flex items-center gap-2">
      <ButtonReusable
        tooltip="GitHub"
        icon="github"
        handleClick={() => window.open(GitHub, "_blank")}
      />
      <ButtonReusable
        tooltip="LinkedIn"
        icon="linkedin"
        handleClick={() => window.open(LinkedIn, "_blank")}
      />
      <ButtonReusable
        tooltip="fabioaeh96@gmail.com"
        icon="mail"
        handleClick={copyEmailToClipboard}
      />
      {contextHolder}
    </div>
  );
}

"use client";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import { useTranslations } from "next-intl";
import { LinkedIn, GitHub } from "@/utils/functions";
import ConfigThemeAnt from "../ParentComponents/ConfigThemeAnt";

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
      <Tooltip title="GitHub" placement="bottom">
        <button
          onClick={() => window.open(GitHub, "_blank")}
          className="rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#d5d5d5] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]"
        >
          <GithubFilled />
        </button>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="bottom">
        <button
          onClick={() => window.open(LinkedIn, "_blank")}
          className="rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#d5d5d5] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]"
        >
          <LinkedinFilled />
        </button>
      </Tooltip>
      <ConfigThemeAnt>
        <Tooltip title="fabioaeh96@gmail.com" placement="bottom">
          <button
            onClick={copyEmailToClipboard}
            className="rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#d5d5d5] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]"
          >
            <MailFilled />
          </button>
          {contextHolder}
        </Tooltip>
      </ConfigThemeAnt>
    </div>
  );
}

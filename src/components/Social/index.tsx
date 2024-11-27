"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button, Tooltip } from "../UI";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const social = {
  github: 'https://github.com/padermo',
  linkedIn: 'https://www.linkedin.com/in/fabioestevezeh/'
}
const email = 'fabioaeh96@gmail.com';

const openUrl = (url: 'github' | 'linkedIn') => window.open(social[url], '_blank')

export default function Social() {
  const t = useTranslations('Clipboard');
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        toast.success(t("success"));
      },
      (err) => {
        toast.error(t("error"));
      },
    );
  };
  return (
    <div className="flex gap-4 items-center justify-center lg:justify-normal">
      <Tooltip variant={'bottom'} text="GitHub">
        <Button variant={'icon'} onClick={() => openUrl('github')}>
          <Github />
        </Button>
      </Tooltip>
      <Tooltip variant={'bottom'} text="LinkedIn">
        <Button variant={'icon'} onClick={() => openUrl('linkedIn')}>
          <Linkedin />
        </Button>
      </Tooltip>
      <Tooltip variant={'bottom'} text="fabioaeh96@gmail.com">
        <Button variant={'icon'} onClick={copyEmailToClipboard}>
          <Mail />
        </Button>
      </Tooltip>
    </div>
  )
}

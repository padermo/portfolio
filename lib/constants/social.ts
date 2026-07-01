import { EmailIcon } from "@/components/ui/icons/EmailIcon";
import { FileIcon } from "@/components/ui/icons/FileIcon";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";
import { LinkedInIcon } from "@/components/ui/icons/LinkedInIcon";
import { Social } from "@/i18n/tokens/social";

export const SOCIAL_LINKS = [
  {
    id: "github",
    href: "https://github.com/padermo",
    aria: Social.github,
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/fabioestevezeh/",
    aria: Social.linkedin,
    icon: LinkedInIcon,
  }
] as const;

export const SOCIAL_EMAIL = {
  id: "email",
  email: "fabioaeh96@gmail.com",
  text: Social.email,
  icon: EmailIcon,
} as const;

export const SOCIAL_CV = {
  id: "cv",
  href: "/files/Fabio_Estevez_CV_Frontend_Developer.pdf",
  text: Social.cv,
  icon: FileIcon,
} as const;

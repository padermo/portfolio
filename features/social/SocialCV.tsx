import ExternalLink from "@/components/ui/ExternalLink";
import { SOCIAL_CV } from "@/lib/constants/social";

export default function SocialCV() {
  return (
    <ExternalLink
      id={SOCIAL_CV.id}
      variant="secondary"
      size="sm"
      href={SOCIAL_CV.href}
      translationKey={SOCIAL_CV.text}
      target="_blank"
      ariaLabelKey={SOCIAL_CV.text}
      rel="noopener noreferrer"
    >
      {<SOCIAL_CV.icon />}
    </ExternalLink>
  )
}

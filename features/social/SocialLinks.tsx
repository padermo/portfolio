import ButtonLink from "@/components/ui/ButtonLink";
import { SOCIAL_LINKS } from "@/lib/constants/social";

export default function SocialLinks() {

  return (
    <>
      {SOCIAL_LINKS.map(({ id, href, aria, icon: Icon }) => (
        <ButtonLink
          variant="icon"
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ariaLabelKey={aria}
        >
          <Icon />
        </ButtonLink>
      ))}
    </>
  )
}

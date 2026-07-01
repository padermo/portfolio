import { cn } from "@/lib/utils/cn"
import { Sections } from "@/lib/constants/sections";
import { NavbarText } from "@/i18n/tokens/navbar";
import ButtonLink from "@/components/ui/ButtonLink";

interface Props {
  orientation: "horizontal" | "vertical";
}

const navbarLinksStyle = "flex items-center gap-4"

export default function NavbarLinks({ orientation = "horizontal" }: Props) {
  const direction = orientation === "horizontal" ? "flex-row" : "flex-col";
  return (
    <div className={cn(navbarLinksStyle, direction)}>
      <ButtonLink variant="outlined" href={`#${Sections.experience}`} translationKey={NavbarText.home.experience} ariaLabelKey={NavbarText.home.experience} />
      <ButtonLink variant="outlined" href={`#${Sections.about}`} translationKey={NavbarText.home.about} ariaLabelKey={NavbarText.home.about} />
      <ButtonLink variant="outlined" href={`#${Sections.projects}`} translationKey={NavbarText.home.projects} ariaLabelKey={NavbarText.home.projects} />
      <ButtonLink variant="outlined" href={`#${Sections.contact}`} translationKey={NavbarText.home.contact} ariaLabelKey={NavbarText.home.contact} />
    </div>
  )
}

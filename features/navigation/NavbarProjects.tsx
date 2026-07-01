import ButtonLink from "@/components/ui/ButtonLink";
import { ArrowIcon } from "@/components/ui/icons/ArrowIcon";
import { NavbarText } from "@/i18n/tokens/navbar";
import { ROUTES } from "@/lib/routes";

export default function NavbarProjects() {
  return (
    <header className="mb-4 lg:pt-20">
      <nav className="p-4 lg:p-0 wfull m-auto lg:w-3xl">
        <ButtonLink variant="outlined" href={ROUTES.home} translationKey={NavbarText.projects.home} ariaLabelKey={NavbarText.projects.home}>
          <div className="-rotate-90">
            <ArrowIcon />
          </div>
        </ButtonLink>
      </nav>
    </header>
  )
}

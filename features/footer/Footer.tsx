import Text from "@/components/ui/Text";
import Contact from "../contact/Contact";
import Social from "../social/Social";
import { Social as SocialTexts } from "@/i18n/tokens/social";

export default function Footer() {
  return (
    <footer className="bg-dark-2">
      <div className="w-full m-auto px-4 lg:px-0 py-8 lg:w-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          <div className="flex-1 w-full">
            <Contact />
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4">
                <Text as="h3" translationKey={SocialTexts.title} />
              </div>
              <Social isHero={false} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Text from "@/components/ui/Text";
import { Hero } from "@/i18n/tokens/hero";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-2">
      <Text as="h1" translationKey={Hero.title} className="font-bold" />
      <Text as="h2" translationKey={Hero.subtitle} textColor="primary" />
      <Text as="p" translationKey={Hero.paragraph} className="font-extralight" />
    </div>
  )
}

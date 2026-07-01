import Text from "@/components/ui/Text";
import { ExperienceText } from "@/i18n/tokens/experience";
import { Sections } from "@/lib/constants/sections";
import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  return (
    <section id={Sections.experience} className="py-8">
      <div className="mb-6">
        <Text as="h3" translationKey={ExperienceText.title} />
      </div>
      <ExperienceContent />
    </section>
  )
}

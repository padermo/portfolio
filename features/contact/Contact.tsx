import Text from "@/components/ui/Text";
import { ContactTexts } from "@/i18n/tokens/contact";
import { Sections } from "@/lib/constants/sections";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <article id={Sections.contact}>
      <div className="mb-4">
        <Text as="h3" translationKey={ContactTexts.title} />
      </div>
      <ContactForm />
    </article>
  )
}

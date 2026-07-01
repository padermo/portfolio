import Button from "@/components/ui/Button";
import type { SubmitButtonProps } from "../types";
import { ContactTexts } from "@/i18n/tokens/contact";

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  const text = isSubmitting ? ContactTexts.button.sending : ContactTexts.button.send;
  return (
    <Button type="submit" ariaLabelKey={ContactTexts.button.send} translationKey={text} disabled={isSubmitting} className="w-full justify-center lg:w-fit" />
  )
}

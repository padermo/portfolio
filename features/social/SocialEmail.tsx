"use client"
import Button from "@/components/ui/Button"
import { SOCIAL_EMAIL } from "@/lib/constants/social"

const copyClipboardEmail = () => {
  navigator.clipboard.writeText(SOCIAL_EMAIL.email)
}

export default function SocialEmail() {
  return (
    <Button
      translationKey={SOCIAL_EMAIL.text}
      onClick={copyClipboardEmail}
      variant="secondary"
      ariaLabelKey={SOCIAL_EMAIL.text}
      size="sm"
    >
      {<SOCIAL_EMAIL.icon />}
    </Button>
  )
}

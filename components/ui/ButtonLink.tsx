import { Link } from "@/i18n/navigation"
import { anchorStyle, type AnchorVariants } from "@/lib/styles/anchor"
import { cn } from "@/lib/utils/cn"
import type { OptionalTranslateProps, TranslationAriaKey } from "@/types/translate"
import { useTranslations } from "next-intl"
import React from "react"

interface ButtonLinkProps extends React.ComponentProps<typeof Link>, AnchorVariants, OptionalTranslateProps {
  ariaLabelKey: TranslationAriaKey;
  children?: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ translationKey, values, ariaLabelKey, children, className, variant, size, ...props }) => {
  const t = useTranslations()

  return (
    <Link className={cn(anchorStyle({ variant, size }), className)} aria-label={t(ariaLabelKey)} {...props}>
      {children && children}
      {translationKey && t(translationKey, values)}
    </Link>
  )
}

export default ButtonLink;

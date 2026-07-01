import { anchorStyle, type AnchorVariants } from "@/lib/styles/anchor"
import { cn } from "@/lib/utils/cn"
import type { OptionalTranslateProps, TranslationAriaKey } from "@/types/translate"
import { useTranslations } from "next-intl"
import React from "react"

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, AnchorVariants, OptionalTranslateProps {
  ariaLabelKey: TranslationAriaKey;
  children?: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ translationKey, values, ariaLabelKey, children, className, variant, size, ...props }) => {
  const t = useTranslations()

  return (
    <a className={cn(anchorStyle({ variant, size }), className)} aria-label={t(ariaLabelKey)} {...props}>
      {children && children}
      {translationKey && t(translationKey, values)}
    </a>
  )
}

export default ExternalLink;

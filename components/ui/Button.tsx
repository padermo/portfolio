import { anchorStyle, type AnchorVariants } from "@/lib/styles/anchor"
import { cn } from "@/lib/utils/cn"
import type { OptionalTranslateProps, TranslationAriaKey } from "@/types/translate"
import { useTranslations } from "next-intl"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, AnchorVariants, OptionalTranslateProps {
  ariaLabelKey: TranslationAriaKey;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ translationKey, values, className, children, ariaLabelKey, variant, size, ...props }) => {
  const t = useTranslations()

  return (
    <button className={cn(anchorStyle({ variant, size }), className)} aria-label={t(ariaLabelKey)} {...props}>
      {children && children}
      {translationKey && t(translationKey, values)}
    </button>
  )
}

export default Button;

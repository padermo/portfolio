import { useTranslations } from "next-intl";
import type { OptionalTranslateProps } from "@/types/translate";
import { cn } from "@/lib/utils/cn";
import { textStyle, type TextVariants } from "@/lib/styles/text";

type TextElement = | HTMLHeadingElement | HTMLParagraphElement;

interface TextProps extends React.HTMLAttributes<TextElement>, TextVariants, OptionalTranslateProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
}

const Text: React.FC<TextProps> = ({ className, as = "h1", translationKey, children, textColor, family, values, ...props }) => {
  const t = useTranslations()
  const Comp = as;

  return (
    <Comp className={cn(textStyle({ variant: as, family, textColor }), className)} {...props}>
      {children ?? (translationKey ? t(translationKey, values) : null)}
    </Comp>
  )
}

export default Text;

import * as React from "react";
import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const paragraphStyle = cva("text-paragraph leading-relaxed break-words", {
  variants: {
    variant: {
      montserrat: "font-montserrat",
      poppins: "font-poppins"
    }
  },
  defaultVariants: {
    variant: "montserrat"
  }
});

export interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement>, VariantProps<typeof paragraphStyle> {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, text, ...props }) => {
  const formatted = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  return (
    <p
      className={clsx(paragraphStyle, className)}
      {...props}
      dangerouslySetInnerHTML={{ __html: formatted }}
    ></p>
  );
};

Paragraph.displayName = "Paragraph";

export default Paragraph;

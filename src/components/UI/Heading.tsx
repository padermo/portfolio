import * as React from "react";
import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const headingStyle = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl font-bold font-poppins",
      h2: "text-primary text-xl md:text-3xl font-medium font-poppins break-all text-wrap",
      h3: "text-2xl md:text-3xl font-medium font-poppins mb-4",
      h4: "text-primary font-bold font-poppins text-lg",
      h5: "text-base",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface HeadingProps
  extends React.HTMLProps<HTMLHeadingElement>,
  VariantProps<typeof headingStyle> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  text: string;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  variant,
  as = "h1",
  text,
  ...props
}) => {
  const Comp = as;
  return (
    <Comp className={clsx(headingStyle({ variant: as }), className)} {...props}>
      {text}
    </Comp>
  );
};

Heading.displayName = "Heading";

export default Heading;

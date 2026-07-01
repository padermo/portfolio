import { cva, type VariantProps } from "class-variance-authority";

export const textStyle = cva("", {
  variants: {
    variant: {
      h1: "text-3xl md:text-4xl",
      h2: "text-2xl",
      h3: "text-xl lg:text-3xl",
      h4: "text-lg",
      h5: "text-base",
      p: "text-base"
    },
    textColor: {
      primary: "text-primary",
      foreground: "text-foreground"
    },
    family: {
      poppins: "font-poppins",
      montserrat: "font-montserrat"
    }
  },
  defaultVariants: {
    variant: "h1",
    textColor: "foreground",
    family: "poppins"
  }
})

export type TextVariants = VariantProps<typeof textStyle>;

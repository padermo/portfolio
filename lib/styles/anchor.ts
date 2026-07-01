import { cva, type VariantProps } from "class-variance-authority";

export const anchorStyle = cva("font-poppins flex gap-2 items-center cursor-pointer transition-colors duration-300 ease-in-out", {
  variants: {
    variant: {
      primary: "rounded-md bg-primary px-3 py-2 text-background font-light hover:bg-primary-hover disabled:bg-primary/50 disabled:pointer-events-none",
      secondary: "rounded-md bg-dark-2 px-3 py-2 hover:text-primary font-light",
      link: "",
      outlined: "",
      icon: "rounded-md bg-dark-2 p-2 hover:text-primary",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "base"
  }
})

export type AnchorVariants = VariantProps<typeof anchorStyle>;

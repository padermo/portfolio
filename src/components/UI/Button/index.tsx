import * as React from "react"
import { clsx } from "clsx"
import { cva, type VariantProps } from "class-variance-authority"

const buttonStyle = cva(
  'px-4 py-2 min-h-10 font-medium outline-none',
  {
    variants: {
      variant: {
        default: 'bg-transparent text-paragraph hover:text-primary',
        primary: 'bg-primary text-paragraph hover:bg-primary-hover rounded-md active:bg-primary-active',
        icon: 'bg-gray grid items-center justify-center w-10 rounded-full hover:shadow-black/30 hover:shadow-lg cursor-pointer text-paragraph hover:bg-gray-hover active:bg-gray-active hover:text-primary',
        textIcon: 'flex items-center justify-center gap-4 bg-primary rounded-md text-paragraph hover:bg-primary-hover active:bg-primary-active',
      },
      size: {
        large: 'text-lg',
        normal: 'text-base',
        medium: 'text-md',
        small: 'text-sm',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    }
  })

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonStyle> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonStyle({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  })

Button.displayName = "Button";

export default Button;

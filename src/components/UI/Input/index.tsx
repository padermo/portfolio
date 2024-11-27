import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const inputStyle = cva(
  'w-full px-4 py-2 h-10 outline-none bg-input rounded-md border placeholder:text-input-placeholder focus:shadow-lg',
  {
    variants: {
      variant: {
        primary: 'text-paragraph border-gray focus:border-primary',
        error: 'text-error border-error'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputStyle> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(inputStyle({ variant }), className)}
        {...props}
      />
    )
  })

Input.displayName = 'Input';

export default Input;

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const textareaStyle = cva(
  'w-full px-4 py-2 resize-none outline-none bg-input rounded-md border placeholder:text-input-placeholder focus:shadow-lg',
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

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaStyle> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        cols={50}
        rows={4}
        className={clsx(textareaStyle({ variant }), className)}
        {...props}
      />
    )
  })

Textarea.displayName = 'Textarea';

export default Textarea;

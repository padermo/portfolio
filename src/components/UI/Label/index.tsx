import * as React from 'react';
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const labelStyle = cva(
  'text-paragraph',
  {
    variants: {
      size: {
        big: 'text-fluid-2xl',
        large: 'text-lg',
        normal: 'text-base',
        medium: 'text-sm',
        small: 'text-xs',
      }
    },
    defaultVariants: {
      size: 'large',
    }
  }
);

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelStyle> {
  text: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, text, ...props }, ref) => {
    return <label
      ref={ref}
      className={clsx(labelStyle({ size }), className)}
      {...props}
    >
      {text}
    </label>
  })

Label.displayName = "Label";

export default Label;

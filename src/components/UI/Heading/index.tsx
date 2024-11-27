import * as React from 'react';
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const headingStyle = cva(
  'break-words',
  {
    variants: {
      variant: {
        h1: 'text-fluid-5xl font-bold text-paragraph',
        h2: 'text-fluid-2xl font-bold text-primary',
        h3: 'text-fluid-2xl font-bold text-primary',
        h4: 'text-xl font-bold text-paragraph',
        h5: 'text-base font-semibold text-paragraph',
      }
    },
    defaultVariants: {
      variant: 'h1'
    }
  }
)

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement>, VariantProps<typeof headingStyle> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  text: string;
}

const Heading: React.FC<HeadingProps> = (({ className, variant, as = "h1", text, ...props }) => {
  const Comp = as;
  return (
    <Comp className={clsx(headingStyle({ variant: as }), className)} {...props} >{text}</Comp>
  )
})

Heading.displayName = "Heading";

export default Heading;
